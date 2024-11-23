import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tfsInput Docs",
  description: "Documentation for tfs-input",
  base: "/tfsInput/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: "Home", link: "/" },
      { text: "How to", link: "/Usage" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Usage", link: "/Usage" },
          { text: "Properties", link: "/Properties" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/MFM-347/tfsInput" },
      { icon: "npm", link: "https://www.npmjs.com/package/tfs-input" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/MFM-347/tfsInput/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright &copy; 2024 <a href="https://github.com/MFM-347">MFM-347</a>',
    },
  },
});
