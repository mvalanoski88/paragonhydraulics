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
      awsUrl: process.env.NUXT_PUBLIC_AWS_URL,
      emailApiBase: process.env.NUXT_PUBLIC_EMAIL_API_BASE,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://paragonhydraulics.com',
      devSiteUrl: process.env.NUXT_PUBLIC_PLAYWRIGHT_TEST_DEV_URL || 'https://dev.paragonhydraulics.com'
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
  css: [
    '~/assets/css/fonts.css'
  ],
  site: {
    url: 'https://paragonhydraulics.com'
  },
  imports: {
    dirs: [
      'composables'
    ],
  },
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],
  compatibilityDate: '2025-04-11'
})
