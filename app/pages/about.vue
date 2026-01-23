<script setup lang="ts">
interface Tool {
  name: string
  description: string
  url?: string
}

const tools: Tool[] = [
  { name: 'Visual Studio Code', description: 'メインエディタ', url: 'https://code.visualstudio.com/' },
  { name: 'Arc', description: 'メインブラウザ', url: 'https://arc.net/' },
  { name: 'Raycast', description: 'ランチャー・生産性ツール', url: 'https://www.raycast.com/' },
  { name: 'Rectangle', description: 'ウィンドウ管理', url: 'https://rectangleapp.com/' },
  { name: 'Obsidian', description: 'ナレッジベース', url: 'https://obsidian.md/' },
  { name: 'Ghostty', description: 'GPU アクセラレーテッド ターミナルエミュレータ', url: 'https://ghostty.org/' },
  { name: 'Starship', description: 'クロスシェル対応プロンプト', url: 'https://starship.rs/' },
  { name: 'mise', description: 'ランタイムバージョンマネージャー', url: 'https://mise.jdx.dev/' },
  { name: 'MacBook Pro 13インチ M2 (2022)', description: 'メイン開発マシン (16GB)' },
  { name: 'LG 34WP60C-B', description: 'ウルトラワイドモニター' },
  { name: 'HHKB Professional HYBRID Type-S', description: '英語配列キーボード', url: 'https://happyhackingkb.com/' },
  { name: 'Anker Soundcore Space One', description: 'ノイズキャンセリングヘッドフォン', url: 'https://www.ankerjapan.com/products/a3035' },
]

useSeoMeta({
  title: 'About',
  description: 'Naoki Haba のプロフィールと開発環境',
})
</script>

<template>
  <div class="mx-auto px-4 py-16" style="max-width: var(--container-max);">
    <section class="mx-auto" style="max-width: 56rem;">
      <!-- Profile Header -->
      <div class="mb-16 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <NuxtImg
          src="/Avatar 381x381.png"
          alt="Naoki Haba"
          width="96"
          height="96"
          class="size-24 rounded-full object-cover"
          style="box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);"
          loading="lazy"
          format="webp"
        />
        <div class="text-center sm:text-left">
          <h1 class="text-3xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
            Naoki Haba
          </h1>
          <p class="mt-2 text-lg" style="color: var(--color-text-secondary);">
            💚 Front-end Developer loving Vue ecosystem
          </p>
          <div class="mt-4 flex justify-center gap-4 sm:justify-start">
            <a
              href="https://x.com/naokihaba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              class="transition-transform hover:scale-110"
              style="color: var(--color-text-secondary);"
            >
              <Icon name="lucide:twitter" class="size-5" />
            </a>
            <a
              href="https://github.com/naokihaba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="transition-transform hover:scale-110"
              style="color: var(--color-text-secondary);"
            >
              <Icon name="lucide:github" class="size-5" />
            </a>
            <a
              href="https://my-pull-requests.naoworks.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Pull Requests"
              class="transition-transform hover:scale-110"
              style="color: var(--color-text-secondary);"
            >
              <Icon name="lucide:git-pull-request" class="size-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Introduction -->

      <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-text-primary);">
        開発環境
      </h2>

      <!-- Tools & Hardware -->
      <ul class="space-y-1">
        <li
          v-for="tool in tools"
          :key="tool.name"
          class="group"
        >
          <a
            v-if="tool.url"
            :href="tool.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block py-1 transition-transform hover:translate-x-1"
          >
            <span class="font-medium transition-colors group-hover:gradient-text" style="color: var(--color-text-primary);">
              {{ tool.name }}
            </span>
            <span class="ml-2 text-sm" style="color: var(--color-text-secondary);">
              {{ tool.description }}
            </span>
          </a>
          <div v-else class="py-1">
            <span class="font-medium" style="color: var(--color-text-primary);">
              {{ tool.name }}
            </span>
            <span class="ml-2 text-sm" style="color: var(--color-text-secondary);">
              {{ tool.description }}
            </span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
