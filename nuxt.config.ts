import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
          }),
        )
      })
    },
    'nuxt-simple-sitemap',
  ],
  sitemap: {
    urls: [
      {
        url: 'http://localhost:3000/',
        lastmod: '2024-03-06',
        priority: 1.0,
        loc: '',
      },
    ],
    xsl: false,
  },
  devtools: { enabled: true },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  imports: {
    dirs: ['models/*'],
  },
  tailwindcss: {
    // Options
  },
})
