import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Healing Blog",
  description: "A modern blog dedicated to alternative natural medicine, offering step-by-step solutions to common health problems using nature's remedies. Discover random subjects like herbal teas for stress, essential oils for sleep, natural immunity boosters, plant-based pain relief, and mineral-rich diets for energy.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Resources', link: '/resources' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Healing Blog`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#4CAF50' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
