<script setup lang="ts">
const colorMode = useColorMode()

const navLinks = [
  { label: 'Blog', to: '/' },
  { label: 'Talks', to: '/talks' },
  { label: 'About', to: '/about' },
]
</script>

<template>
  <header class="glass-effect sticky top-0 z-50 border-b" style="border-color: var(--color-border);">
    <div class="mx-auto flex items-center justify-center px-4 py-4" style="max-width: var(--container-max);">
      <nav class="flex items-center gap-2">
        <UButton
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          variant="ghost"
          color="neutral"
          size="md"
          class="font-medium"
        >
          {{ link.label }}
        </UButton>

        <ClientOnly>
          <UButton
            :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
            variant="soft"
            color="neutral"
            size="md"
            square
            aria-label="Toggle dark mode"
            class="transition-transform hover:rotate-12"
            @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
          />
          <template #fallback>
            <div class="size-10" />
          </template>
        </ClientOnly>
      </nav>
    </div>
  </header>
</template>
