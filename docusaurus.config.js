// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { ProvidePlugin } = require("webpack");
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pagoda Docs',
  tagline: 'Meet the easiest Web3 Startup Platform',
  url: 'https://docs.pagoda.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: "https://github.com/near/pagoda-docs/edit/main/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DOCS',
        logo: {
          alt: 'Pagoda Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            href: 'https://github.com/near/pagoda-docs',
            label: 'GitHub',
            position: 'right',
            className: 'github-link'
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "rust",
          "java",
          "python",
          "ruby",
          "go",
          "typescript",
          "scala",
          "csharp",
        ],
      },
    }),
};

module.exports = config;
