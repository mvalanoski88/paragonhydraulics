// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
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
  runtimeConfig: {
    public: {
      awsUrl: '',
      emailApiBase: '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://paragonhydraulics.com'
    }
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  site: {
    url: 'https://paragonhydraulics.com'
  },
  imports: {
    dirs: [
      'composables'
    ],
  },
  modules: [
    '@nuxtjs/critters',
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: '2025-04-11'
})
