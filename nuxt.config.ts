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
        lang: 'th'
      },
      meta: [
        { name: 'description', content: 'Transform your inner power with expert-led courses' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // preload + onload trick: non-render-blocking font load with swap guaranteed
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        // noscript fallback handled via <noscript> below
        { rel: 'icon', type: 'image/png', href: '/images/icon/appicon.png' }
      ],
      noscript: [
        {
          innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap">'
        }
      ]
    }
  },

  // Target modern browsers only — eliminates ~74 KiB of legacy JS transpilation
  vite: {
    build: {
      target: 'es2020',
    },
  },

  typescript: {
    strict: true,
    typeCheck: true
  },
  
  // Cache SSR pages with stale-while-revalidate to cut TTFB on repeat visits
  routeRules: {
    '/':                     { swr: 3600 },
    '/about':                { swr: 3600 },
    '/courses':              { swr: 3600 },
    '/courses/**':           { swr: 3600 },
    '/coaches':              { swr: 3600 },
    '/coaches/**':           { swr: 3600 },
    '/privacy-policies':     { swr: 86400 },
    '/terms-and-conditions': { swr: 86400 },
    // Hashed bundles never change — tell CDN / proxies to cache forever
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  },

  nitro: {
    // Pre-compress all public assets with gzip + brotli at build time
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: {
      failOnError: false,
      crawlLinks: true
    }
  }
})
