// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;',
        },
      },
    },
  },
  imports: {
    dirs: ['models/*'],
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // Options
  },
})
