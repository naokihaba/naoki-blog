<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  post: Collections['blog']
}>()
</script>

<template>
  <article>
    <NuxtLink :to="post.path" class="group block py-6 transition-transform hover:translate-x-1" style="border-bottom: 1px solid var(--color-border);">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3
            class="text-lg font-bold transition-colors group-hover:gradient-text"
            style="color: var(--color-text-primary); letter-spacing: -0.025em;"
          >
            {{ post.title }}
          </h3>

          <p
            v-if="post.description"
            class="mt-2 text-sm line-clamp-2"
            style="color: var(--color-text-secondary);"
          >
            {{ post.description }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
