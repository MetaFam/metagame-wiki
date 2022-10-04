module.exports = {
  title: "MetaGame Wiki",
  tagline: "Build the future you want to live in.",
  url: "https://wiki.metagame.wtf",
  baseUrl: "/",
  favicon: "img/mg-icon.png",
  organizationName: "MetaFam",
  projectName: "metagame-wiki",
  // customFields: {
  //   GA_TAG: process.env.GA_TAG,
  // },
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    gtag: {
      trackingID: 'G-9SQ6R9576M',
      anonymizeIP: true, // We don't need to know folks IPs
    },
    image: "img/wiki-cover.png",
    // headerLinks: [{ page: 'help', label: 'Help' }],
    navbar: {
      title: "MetaGame Wiki",
      logo: {
        alt: "MetaGame Logo",
        src: "img/mg-crystal.png",
      },
    },
    search: {
      placeholder: "Search the Wiki",
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://wiki.metagame.wtf/admin/#/?",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve("docusaurus-lunr-search"),
      {
        indexBaseUrl: true
      }
    ],
    require.resolve("docusaurus-plugin-sass"),
    "docusaurus2-dotenv",
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/', // string
            from: ['/docs'], // string | string[]
          },
          {
            to: '/', // string
            from: ['/docs/wtf-is-metagame/wtf-is-metagame'], // string | string[]
          }
        ],
      },
    ],
  ],
  // scripts: [
  //   {
  //     src: "./static/lib/header-vanilla.js",
  //     // async: true,
  //     defer: true,
  //   },
  // ],
  clientModules: [
    require.resolve('./src/lib/header.js'),
  ]
};
