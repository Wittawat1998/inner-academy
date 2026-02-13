// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Inner Academy',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: 'Transform your inner power with expert-led courses' }
      ]
    }
  },
  
  typescript: {
    strict: true,
    typeCheck: true
  }
})
