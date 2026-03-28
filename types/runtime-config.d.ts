declare module 'nuxt/schema' {
    interface RuntimeConfig {
        mongodbUri?: string
        jwtSecret?: string
    }
}

export {}