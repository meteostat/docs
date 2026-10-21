import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Feed } from 'feed';
import type { LoadContext, Plugin } from '@docusaurus/types';

export type ChangelogConfig = {
  /** Unique changelog ID, referenced by `<Changelog id="..." />` */
  id: string;
  /** Feed title, e.g. "Bulk Data" */
  title: string;
  /** Directory containing one Markdown file per entry */
  path: string;
  /** Permalink of the page which renders the changelog */
  permalink: string;
};

export type ChangelogEntry = {
  /** HTML anchor of the entry on the changelog page */
  anchor: string;
  title: string;
  date: string;
  html: string;
};

export type Changelog = {
  id: string;
  title: string;
  permalink: string;
  feeds: { rss: string; atom: string };
  entries: ChangelogEntry[];
};

export type ChangelogData = { [id: string]: Changelog };

export type ChangelogPluginOptions = { changelogs: ChangelogConfig[] };

const FILENAME_PATTERN = /^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/;

function toIsoDate(value: unknown, fallback: string): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === 'string') return value;
  return fallback;
}

async function loadEntries(dir: string): Promise<ChangelogEntry[]> {
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch {
    // A changelog without any entries doesn't need a directory
    return [];
  }

  const entries = await Promise.all(
    files
      .filter((file) => FILENAME_PATTERN.test(file))
      .map(async (file) => {
        const [, fileDate, slug] = file.match(FILENAME_PATTERN)!;
        const { data, content } = matter(
          await fs.readFile(path.join(dir, file), 'utf8'),
        );
        if (!data.title) {
          throw new Error(`Changelog entry ${file} is missing a title`);
        }
        const date = toIsoDate(data.date, fileDate);
        return {
          anchor: `changelog-${date}-${slug}`,
          title: String(data.title),
          date,
          html: await marked.parse(content.trim()),
        };
      }),
  );

  return entries.sort((a, b) => b.date.localeCompare(a.date));
}

export default function changelogPlugin(
  context: LoadContext,
  options: ChangelogPluginOptions,
): Plugin<ChangelogData> {
  const { siteDir, siteConfig } = context;
  const siteUrl = siteConfig.url.replace(/\/$/, '');

  return {
    name: 'changelog',

    getPathsToWatch() {
      return options.changelogs.map((c) =>
        path.join(siteDir, c.path, '*.{md,mdx}'),
      );
    },

    async loadContent() {
      const data: ChangelogData = {};
      for (const config of options.changelogs) {
        data[config.id] = {
          id: config.id,
          title: config.title,
          permalink: config.permalink,
          feeds: {
            rss: `/changelog/${config.id}/rss.xml`,
            atom: `/changelog/${config.id}/atom.xml`,
          },
          entries: await loadEntries(path.join(siteDir, config.path)),
        };
      }
      return data;
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },

    async postBuild({ content, outDir }) {
      for (const changelog of Object.values(content)) {
        const pageUrl = `${siteUrl}${changelog.permalink}`;
        const feed = new Feed({
          id: `${pageUrl}#changelog`,
          title: `${changelog.title} Changelog | ${siteConfig.title}`,
          description: `Changes to the Meteostat ${changelog.title} dataset`,
          link: `${pageUrl}#changelog`,
          language: 'en',
          favicon: `${siteUrl}/img/favicon.ico`,
          copyright: `Copyright © ${new Date().getFullYear()} Meteostat.`,
          updated: changelog.entries[0]
            ? new Date(changelog.entries[0].date)
            : undefined,
          feedLinks: {
            rss: `${siteUrl}${changelog.feeds.rss}`,
            atom: `${siteUrl}${changelog.feeds.atom}`,
          },
        });

        for (const entry of changelog.entries) {
          const link = `${pageUrl}#${entry.anchor}`;
          feed.addItem({
            id: link,
            title: entry.title,
            link,
            date: new Date(entry.date),
            // Feed readers can't resolve site-relative links
            content: entry.html.replace(/(href|src)="\//g, `$1="${siteUrl}/`),
          });
        }

        const feedDir = path.join(outDir, 'changelog', changelog.id);
        await fs.mkdir(feedDir, { recursive: true });
        await fs.writeFile(path.join(feedDir, 'rss.xml'), feed.rss2());
        await fs.writeFile(path.join(feedDir, 'atom.xml'), feed.atom1());
      }
    },
  };
}
