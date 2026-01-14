import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
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
  site: {
    url: 'https://nao-dev.netlify.app/',
    name: 'Naoki Dev',
    description: 'Welcome to my personal blog about web development and technology.',
    defaultLocale: 'en',
  },
  ogImage: {
    fonts: [
      'Noto+Sans+JP:500',
    ],
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
