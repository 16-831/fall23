module.exports = {
  title: 'Introduction to Robot Learning ',
  tagline: '16-831, Fall 2023',
  url: 'https://16-831.github.io',
  baseUrl: '/fall23',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ri.ico',
  organizationName: '16-831', // Usually your GitHub org/user name.
  projectName: 'fall23', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '16-831',
      logo: {
        alt: 'RI Logo',
        src: 'img/ri.svg',
      },
      items: [
        {
          to: 'logistics',
          activeBasePath: 'logistics',
          label: 'Logistics',
          position: 'left',
        },
        {
          to: 'lectures',
          activeBasePath: 'lectures',
          label: 'Lectures',
          position: 'left',
        },
        {
          to: 'assignments',
          activeBasePath: 'assignments',
          label: 'Assignments',
          position: 'left',
        },
        {
          label: 'Piazza',
          href: 'https://piazza.com/class/llva4psylom5ok',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © 2023 LEAP Lab @ CMU. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
