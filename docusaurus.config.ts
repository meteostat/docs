import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Meteostat Developers",
  tagline:
    "Meteostat is an open platform which provides free access to historical weather and climate data.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://dev.meteostat.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // Remove trailing slash from URLs
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "meteostat", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/meteostat/docs/tree/main/",
          routeBasePath: "",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/meteostat/docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/meteostat-social-card.jpg",
    algolia: {
      appId: "LUYJ4VXG2A",
      // Public API key: it is safe to commit it
      apiKey: "afea5bf10e5660cdd92a0c5ffd6817a6",
      indexName: "meteostat",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
      insights: false,
    },
    navbar: {
      title: "Meteostat Developers",
      logo: {
        alt: "Meteostat Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar",
          position: "left",
          label: "Python",
        },
        {
          type: "docSidebar",
          sidebarId: "dataSidebar",
          position: "left",
          label: "Data",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        {
          href: "https://meteostat.net",
          label: "Meteostat",
          position: "right",
        },
        {
          href: "https://github.com/meteostat",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction",
              to: "/overview",
            },
            {
              label: "Python Library",
              to: "/python",
            },
            {
              label: "Bulk Data",
              to: "/data",
            },
            {
              label: "JSON API",
              to: "/api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/meteostat/",
            },
            {
              label: "GitHub",
              href: "https://github.com/meteostat",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/meteostat",
            },
          ],
        },
        {
          title: "Meteostat",
          items: [
            {
              label: "License",
              to: "/license",
            },
            {
              label: "Terms of Service",
              to: "/terms",
            },
            {
              label: "Privacy Policy",
              href: "https://meteostat.net/en/privacy",
            },
            {
              label: "Legal Notice",
              href: "https://meteostat.net/en/legal",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meteostat.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
