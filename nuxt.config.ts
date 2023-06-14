// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    
    // Add cors headers on API routes
    '/api/**': { cors: true },
  }
})