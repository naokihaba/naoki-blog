import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Static Site Generation設定
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
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
    payloadExtraction: true,
  },

  // ルートごとのレンダリング戦略
  routeRules: {
    '/': { prerender: true },
    '/blog/**': { prerender: true },
    '/talks': { prerender: true },
    '/about': { prerender: true },
  },
  // https://nuxt.com/modules/color-mode
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  site: {
    url: 'https://nao-dev.netlify.app/',
    name: 'Naoki Haba のポートフォリオ',
    description: 'Welcome to my personal blog about web development and technology.',
    defaultLocale: 'en',
  },
  ogImage: {
    fonts: [
      'Noto+Sans+JP:500',
    ],
  },
  content: {
    build: {
      markdown: {
        rehypePlugins: {
          'rehype-external-links': {
            target: '_blank',
            rel: ['nofollow', 'noopener', 'noreferrer'],
          },
        },
      },
    },
  },

  // 画像最適化設定
  image: {
    format: ['webp', 'avif'],
    quality: 80,
  },

  // フォント最適化設定
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      subsets: ['latin', 'latin-ext'],
    },
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
