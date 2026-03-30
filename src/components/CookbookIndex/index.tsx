import React, { useMemo, useState } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import {
  useDocsSidebar,
} from '@docusaurus/plugin-content-docs/client';
import type {
  PropSidebarItem,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';
import type { DocTagsMap } from '@site/src/plugins/docTagsPlugin';
import styles from './styles.module.css';

function collectDocLinks(items: PropSidebarItem[]): PropSidebarItemLink[] {
  const links: PropSidebarItemLink[] = [];
  for (const item of items) {
    if (item.type === 'link' && item.docId) {
      links.push(item);
    } else if (item.type === 'category') {
      links.push(...collectDocLinks(item.items));
    }
  }
  return links;
}

function RecipeItem({
  link,
  tagsMap,
}: {
  link: PropSidebarItemLink;
  tagsMap: DocTagsMap;
}) {
  const tags = (link.docId && tagsMap[link.docId]) ?? [];

  return (
    <Link to={link.href} className={styles.recipeRow}>
      <div className={styles.recipeTitle}>{link.label}</div>
      {tags.length > 0 && (
        <div className={styles.recipeTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.recipeBadge}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

const CookbookIndex: React.FC = () => {
  const sidebar = useDocsSidebar();
  const { pathname } = useLocation();
  const tagsMap = usePluginData('doc-tags') as DocTagsMap;

  const docLinks = useMemo(
    () =>
      sidebar
        ? collectDocLinks(sidebar.items).filter(
            (link) => link.href !== pathname,
          )
        : [],
    [sidebar, pathname],
  );

  const tagCounts = useMemo(() => {
    const map = new Map<string, number>();
    docLinks.forEach((link) => {
      const tags = (link.docId && tagsMap[link.docId]) ?? [];
      tags.forEach((t) => map.set(t, (map.get(t) || 0) + 1));
    });
    return Array.from(map.entries()).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );
  }, [docLinks, tagsMap]);

  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    if (selectedTags.size === 0) return docLinks;
    return docLinks.filter((link) => {
      const tags = (link.docId && tagsMap[link.docId]) ?? [];
      return Array.from(selectedTags).every((tag) => tags.includes(tag));
    });
  }, [docLinks, selectedTags, tagsMap]);

  return (
    <div>
      {tagCounts.length > 0 && (
        <div className={styles.filterBar}>
          {tagCounts.map(([tag, count]) => (
            <button
              key={tag}
              className={`${styles.filterTag} ${selectedTags.has(tag) ? styles.filterTagActive : ''}`}
              onClick={() => toggleTag(tag)}
              type="button"
            >
              {tag}
              <span className={styles.filterCount}>{count}</span>
            </button>
          ))}
        </div>
      )}

      <div className={styles.recipeList}>
        {filtered.map((link) => (
          <RecipeItem key={link.href} link={link} tagsMap={tagsMap} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>
          No recipes match the selected filters.
        </p>
      )}
    </div>
  );
};

export default CookbookIndex;
