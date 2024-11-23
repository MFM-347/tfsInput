import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tfsInput Docs",
  description: "Documentation for tfs-input",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/tfsInput/" },
      { text: "How to", link: "/tfsInput/Usage" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Usage", link: "/tfsInput/Usage" },
          { text: "Properties", link: "/tfsInput/Properties" },
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
