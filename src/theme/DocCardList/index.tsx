import React, { type ComponentProps, type ReactNode } from "react";
import DocCardList from "@theme-original/DocCardList";
import {
  useCurrentSidebarSiblings,
  filterDocCardListItems,
} from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";

type Props = ComponentProps<typeof DocCardList> & {
  readonly skipCurrentPage?: boolean;
};

function useFilteredItems(
  items: PropSidebarItem[] | undefined,
  skipCurrentPage: boolean
): PropSidebarItem[] | undefined {
  const sidebarItems = useCurrentSidebarSiblings();
  const { pathname } = useLocation();

  if (!skipCurrentPage) {
    return items;
  }

  const sourceItems = items ?? sidebarItems;
  const filtered = filterDocCardListItems(sourceItems);

  return filtered.filter((item) => {
    if (item.type === "link") {
      const itemPath = item.href.replace(/\/+$/, "");
      const currentPath = pathname.replace(/\/+$/, "");
      return itemPath !== currentPath;
    }
    return true;
  });
}

export default function DocCardListWrapper(props: Props): ReactNode {
  const { skipCurrentPage = false, ...rest } = props;
  const filteredItems = useFilteredItems(rest.items, skipCurrentPage);

  return <DocCardList {...rest} items={filteredItems} />;
}
