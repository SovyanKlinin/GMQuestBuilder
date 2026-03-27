// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})
