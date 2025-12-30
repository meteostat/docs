import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
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

export default function ContextRoot() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const contextKey = pathSegments[0]; // Get the first segment of the path

  const context = CONTEXT_MAP[contextKey];

  if (!context) {
    return null; // No context to display
  }

  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className="breadcrumbs__link"
        href={context.href}
      >
        {context.label}
      </Link>
    </li>
  );
}
