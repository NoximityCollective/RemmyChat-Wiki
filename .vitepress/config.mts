import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'RemmyChat',
  description: 'Modern, Professional Minecraft Chat Plugin with Rich Formatting & Multi-Channel Support',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#ff6b35' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'RemmyChat | Modern Minecraft Chat Plugin' }],
    ['meta', { property: 'og:site_name', content: 'RemmyChat' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://remmychat.noximity.com/' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'RemmyChat',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Features', link: '/features' },
      { text: 'Installation', link: '/installation' },
      { text: 'Configuration', link: '/configuration' },
      { text: 'Commands', link: '/commands' },
      {
        text: 'v1.4.5',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Migration Guide', link: '/migration' },
          { text: 'GitHub', link: 'https://github.com/NoximityCollective/RemmyChat' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Installation & Quickstart', link: '/installation' },
          { text: 'Features', link: '/features' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Main Configuration', link: '/configuration' },
          { text: 'Channels & Groups', link: '/channels' },
          { text: 'Symbols & Emoji', link: '/symbols' },
          { text: 'Messages & Customization', link: '/messages' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Commands & Permissions', link: '/commands' },
          { text: 'Integration', link: '/integration' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NoximityCollective/RemmyChat' },
      { icon: 'discord', link: 'https://discord.gg/noximity' }
    ],
    editLink: {
      pattern: 'https://github.com/NoximityCollective/RemmyChat/edit/main/wiki/:path'
    },
    outline: [2, 3],
    darkModeSwitchLabel: 'Appearance',
    footer: {
      message: 'Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2024 matcldr & Noximity Collective'
    }
  }
})
