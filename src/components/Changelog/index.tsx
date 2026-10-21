import React from "react";
import Head from "@docusaurus/Head";
import { usePluginData } from "@docusaurus/useGlobalData";
import type {
  ChangelogData,
  ChangelogEntry,
} from "@site/src/plugins/changelogPlugin";
import styles from "./styles.module.css";

type Props = {
  /** ID of the changelog as configured in docusaurus.config.ts */
  id: string;
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

const FeedIcon: React.FC = () => (
  <svg
    className={styles.feedIcon}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="6" cy="18" r="2" fill="currentColor" />
    <path
      d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const Entry: React.FC<{ entry: ChangelogEntry; latest: boolean }> = ({
  entry,
  latest,
}) => (
  <article id={entry.anchor} className={styles.entry}>
    <header className={styles.entryHeader}>
      <a href={`#${entry.anchor}`} className={styles.entryTitle}>
        {entry.title}
      </a>
      {latest && (
        <span className="badge badge--success">Latest</span>
      )}
    </header>
    <time dateTime={entry.date} className={styles.entryDate}>
      {dateFormat.format(new Date(entry.date))}
    </time>
    <div
      className={styles.entryBody}
      dangerouslySetInnerHTML={{ __html: entry.html }}
    />
  </article>
);

const Changelog: React.FC<Props> = ({ id }) => {
  const changelogs = usePluginData("changelog") as ChangelogData;
  const changelog = changelogs[id];

  if (!changelog) {
    throw new Error(`Unknown changelog "${id}"`);
  }

  const { title, feeds, entries } = changelog;

  return (
    <div className={styles.changelog}>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={feeds.rss}
          title={`${title} Changelog (RSS)`}
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href={feeds.atom}
          title={`${title} Changelog (Atom)`}
        />
      </Head>
      <p className={styles.subscribe}>
        <FeedIcon />
        <span>
          Subscribe to changes via <a href={feeds.rss}>RSS</a> or{" "}
          <a href={feeds.atom}>Atom</a>.
        </span>
      </p>
      {entries.length === 0 ? (
        <p>No changes have been made to this dataset so far.</p>
      ) : (
        entries.map((entry, i) => (
          <Entry key={entry.anchor} entry={entry} latest={i === 0} />
        ))
      )}
    </div>
  );
};

export default Changelog;
