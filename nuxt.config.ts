// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  buildDir: '.nuxt-fresh',
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  
  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    // Private keys (server-only, never exposed to client)
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPassword: process.env.SMTP_PASSWORD,
    recipientEmail: process.env.RECIPIENT_EMAIL,
    
    // Public keys (accessible on client-side)
    public: {
      turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY
    }
  },
  
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
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Prompt:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },
  
  typescript: {
    strict: true,
    typeCheck: true
  },
  
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true
    }
  }
})
