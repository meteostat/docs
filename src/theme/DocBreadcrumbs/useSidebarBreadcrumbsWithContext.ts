import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import type { PropSidebarBreadcrumbsItem } from "@docusaurus/plugin-content-docs";
import { useLocation } from "@docusaurus/router";

const CONTEXT_MAP = {
  data: {
    label: "Bulk Data",
    href: "/data",
  },
  python: {
    label: "Python Library",
    href: "/python",
  },
  api: {
    label: "JSON API",
    href: "/api",
  },
};

export function useSidebarBreadcrumbsWithContext():
  | PropSidebarBreadcrumbsItem[]
  | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const location = useLocation();

  if (!breadcrumbs) {
    return null;
  }

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const contextKey = pathSegments[0]; // Get the first segment of the path
  const context = CONTEXT_MAP[contextKey];

  // If there's a context, prepend it to the breadcrumbs
  if (context) {
    const contextBreadcrumb: PropSidebarBreadcrumbsItem = {
      label: context.label,
      href: context.href,
    } as PropSidebarBreadcrumbsItem;

    return [contextBreadcrumb, ...breadcrumbs];
  }

  return breadcrumbs;
}
