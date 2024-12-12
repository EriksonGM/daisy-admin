// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    app: {
        rootTag: 'body',
        rootAttrs: {
            id: 'app'
        },
        head: {
            titleTemplate: '%s - Daisy Admin',
            htmlAttrs: {
                lang: 'pt-PT'
            }
        }
    },
    devtools: {enabled: true},
    css: [
        '~/assets/css/main.css',
        '@tabler/icons-webfont/dist/tabler-icons.min.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
