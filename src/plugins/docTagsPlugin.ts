import type { LoadContext, Plugin, AllContent } from '@docusaurus/types';
import type { LoadedContent } from '@docusaurus/plugin-content-docs';

export type DocTagsMap = { [docId: string]: string[] };

export default function docTagsPlugin(_context: LoadContext): Plugin {
  return {
    name: 'doc-tags',
    async allContentLoaded({ allContent, actions }) {
      const docsContent = (
        allContent['docusaurus-plugin-content-docs'] as
          | { [id: string]: LoadedContent }
          | undefined
      )?.default;

      if (!docsContent) return;

      const map: DocTagsMap = {};
      for (const version of docsContent.loadedVersions) {
        for (const doc of version.docs) {
          if (doc.tags.length > 0) {
            map[doc.id] = doc.tags.map((t) => t.label);
          }
        }
      }

      actions.setGlobalData(map);
    },
  };
}
