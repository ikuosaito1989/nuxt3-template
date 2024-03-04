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
  ],
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
