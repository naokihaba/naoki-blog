---
title: '個人ブログを支える技術'
description: 'Nuxt 4、Tailwind CSS v4、動的OGP画像生成など、このブログを構築している技術スタックについて紹介します。'
date: '2026-01-02'
tags:
  - nuxt
  - vue
  - blog
  - tech-stack
---

## 個人ブログを始めました

これまで Zenn などのプラットフォームで記事を書いてきましたが、自分のドメインで自由に発信できる場所が欲しくなり、このブログを立ち上げました。

せっかくなので、このブログを支える技術スタックについて紹介します。

## 全体構成

このブログは以下の技術で構築されています：

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Nuxt 4 |
| コンテンツ管理 | Nuxt Content |
| UIフレームワーク | Vue 3 |
| スタイリング | Tailwind CSS v4 |
| SEO | @nuxtjs/seo |
| OGP画像生成 | nuxt-og-image |
| ホスティング | Netlify |
| 言語 | TypeScript |

## Nuxt 4 + Nuxt Content

フレームワークとして [Nuxt 4](https://nuxt.com) とコンテンツ管理に [Nuxt Content](https://content.nuxt.com) を採用しています。

Nuxt を選んだ理由は以下のとおりです：

- **ファイルベースルーティング** - `pages/` ディレクトリで直感的にルーティングを構築できる
- **SSG/SSR対応** - 静的サイト生成とサーバーサイドレンダリングの両方に対応
- **豊富なエコシステム** - 公式モジュールが充実しており、機能追加が容易
- **Vue 3との統合** - Composition APIを使った型安全な開発が可能

### Nuxt Content

ブログ記事は `content/blog/` ディレクトリで管理しています。Nuxt Content は Markdown ファイルを型安全に扱えるコンテンツ管理システムです。

```typescript
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)
```

Frontmatter の型チェックや、クエリビルダーによる柔軟な記事取得が可能です。

## Vue 3 (Composition API)

UI実装には Vue 3 の Composition API を使用しています。

```vue
<script setup lang="ts">
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .path(`/blog/${slug}`)
    .first()
)

defineOgImageComponent('NuxtSeo', {
  title: post.value.title,
  theme: '#6366f1',
  colorMode: 'dark',
})
</script>
```

`<script setup>` 構文により、簡潔で読みやすいコードを書くことができます。

## Tailwind CSS v4

スタイリングには [Tailwind CSS v4](https://tailwindcss.com) を採用しています。

Tailwind CSS v4 の主な特徴：

- **Viteプラグイン** - PostCSS不要で、Vite統合が簡単に
- **CSS変数ベース** - カスタムプロパティを活用したテーマシステム
- **ゼロコンフィグ** - 設定ファイルなしでも動作

### カスタムカラーテーマ

CSS変数を使って、ライト/ダークモードのカラーテーマを実装しています。

```css
@theme {
  --color-surface: #ffffff;
  --color-text-primary: #1e293b;
  --color-accent: #6366f1;
  --color-gradient-from: #6366f1;
  --color-gradient-to: #a855f7;
  --container-max: 1400px;
}

.dark {
  --color-surface: #0f172a;
  --color-text-primary: #f1f5f9;
  --color-accent: #818cf8;
  --color-gradient-from: #818cf8;
  --color-gradient-to: #c084fc;
}
```

`@nuxtjs/color-mode` を使用して、ユーザーの好みに応じた自動テーマ切り替えを実装しています。

## SEO対策

SEO対策には `@nuxtjs/seo` モジュールを使用しています。

このモジュールは以下の機能を統合的に提供します：

- **sitemap.xml** - 自動生成されるサイトマップ
- **robots.txt** - クローラー制御ファイル
- **構造化データ（Schema.org）** - JSON-LD形式のメタデータ

```typescript
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo'],
  site: {
    url: 'https://nao-dev.netlify.app/',
    name: "Naoki's Blog",
    description: 'Welcome to my personal blog about web development and technology.',
    defaultLocale: 'en',
  },
})
```

## OGP画像の動的生成

OGP画像は `nuxt-og-image` を使って動的生成しています。

```typescript
defineOgImageComponent('NuxtSeo', {
  title: post.value.title,
  theme: '#6366f1',
  colorMode: 'dark',
})
```

外部サービスに依存せず、記事タイトルを含んだOGP画像をビルド時に自動生成できます。

### 日本語フォント対応

日本語タイトルを正しく表示するため、Google Fonts の Noto Sans JP を指定しています。

```typescript
ogImage: {
  fonts: ['Noto+Sans+JP:500'],
}
```

## その他のモジュール

### @nuxt/icon

Lucide アイコンを簡単に使用できます。

```vue
<Icon name="lucide:calendar" class="size-4" />
```

### @nuxt/image

画像の自動最適化を行います。

```vue
<NuxtImg src="/hero.jpg" alt="Hero" width="800" height="400" />
```

### @nuxt/fonts

Google Fonts などのWebフォントを最適化して読み込みます。

## Netlify

ホスティングは Netlify を使用しています。

- **自動デプロイ** - GitHubへのプッシュで自動ビルド・デプロイ
- **プレビューデプロイ** - プルリクエストごとにプレビュー環境を作成
- **エッジファンクション** - サーバーサイドの機能も利用可能

## まとめ

Nuxt 4 と Tailwind CSS v4 の組み合わせにより、モダンで高速なブログを構築できました。

今年はこのブログを通じて、技術的な知見や経験を発信していきたいと思います。今後ともよろしくお願いいたします！
