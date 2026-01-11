import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/seo',
    'nuxt-schema-org',
    'nuxt-og-image',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  experimental: {
    typedPages: true,
  },
  // https://nuxt.com/modules/color-mode
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  vite: {
    plugins: [tailwindcss()],
    vue: {
      features: {
        optionsAPI: false,
      },
    },
  }
})
