<script setup lang="ts">
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="glass-effect sticky top-0 z-50 border-b animate-slide-down" style="border-color: var(--color-border);">
    <div class="mx-auto flex items-center justify-between px-4 py-4" style="max-width: var(--container-max);">
      <NuxtLink
        to="/"
        class="gradient-text text-2xl font-bold transition-all hover:scale-105"
      >
        Naoki Dev
      </NuxtLink>

      <nav class="flex items-center gap-6">
        <NuxtLink
          to="/"
          class="font-medium transition-all hover:scale-105"
          style="color: var(--color-text-secondary);"
        >
          Home
        </NuxtLink>

        <a
          href="https://my-pull-requests.naoworks.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="My Pull Requests"
          class="transition-all hover:scale-110"
          style="color: var(--color-text-secondary);"
        >
          <Icon name="lucide:git-pull-request" class="size-5" />
        </a>

        <button
          type="button"
          aria-label="Toggle dark mode"
          class="rounded-lg p-2 transition-all hover:scale-110 hover:rotate-12"
          style="color: var(--color-text-secondary); background-color: var(--color-surface-secondary);"
          @click="toggleColorMode"
        >
          <Icon
            :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
            class="size-5"
          />
        </button>
      </nav>
    </div>
  </header>
</template>
