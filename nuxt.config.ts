// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { 
    enabled: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{rel: 'icon', type: 'image/png', href: '/ph_favicon.png'}],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/scss/main.scss",
    "~/assets/css/bebas.css",
    "~/assets/css/robotoflex.css"
  ],
  imports: {
    dirs: [
      'composables'
    ],
  },
  modules: [
    '@nuxtjs/critters',
  ],
})
