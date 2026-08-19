import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',

  title: "lingbopro's Docs",
  description: 'Documentation & blog posts by lingbopro',
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/docs/' },
          { text: 'Articles', link: '/en/articles/' },
          { text: 'About', link: '/en/about/' },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/' },
          { text: '文章', link: '/zh/articles/' },
          { text: '关于', link: '/zh/about/' },
        ],
        sidebar: {
          '/zh/docs/': [
            {
              text: '文档列表',
              link: '/zh/docs/',
            },
          ],
          '/zh/articles/': [
            {
              text: '文章列表',
              link: '/zh/articles/',
            },
            {
              text: '分类',
              items: [
                {
                  text: 'Linux',
                  collapsed: true,
                  items: [
                    {
                      text: '如何在 KDE Plasma 上获得 GNOME 的应用样式',
                      link: '/zh/articles/get-gnome-app-styles-on-kde/',
                    },
                    {
                      text: 'CachyOS 启动黑屏排查：Intel 核显外接显示器与 ACPI 盖子状态的冲突',
                      link: '/zh/articles/cachyos-launch-black-screen-on-intel-gpu/',
                    },
                  ],
                },
              ],
            },
          ],
          '/zh/about': [
            {
              text: '关于',
              items: [
                {
                  text: '关于',
                  link: '/zh/about/',
                },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    // @ts-ignore
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/lingbopro/docs/edit/main/:path',
    },
    externalLinkIcon: true,
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/lingbopro' }],
  },
});
