// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Halo2 Backend for Aztec Noir',
  tagline: 'Guide to the Halo2 backend for the Aztec Noir DSL, including informaiton on adding a new backend',
  favicon: 'img/favicon.ico',

  // // Set the production url of your site here
  url: 'https://mach-34.github.io',
  // // Set the /<baseUrl>/ pathname under which your site is served
  // // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/halo2_backend_docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mach-34', // Usually your GitHub org/user name.
  projectName: 'halo2_backend_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/'
        },
        blog: false,
          
        theme: {
          customCss: require.resolve('./style.css'),
        },
      }),
    ],
  ],


};

module.exports = config;
