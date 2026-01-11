<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  post: Collections['blog']
}>()

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="animate-fade-in">
    <NuxtLink :to="post.path" class="group block py-6 transition-all hover:translate-x-1" style="border-bottom: 1px solid var(--color-border);">
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

          <div class="mt-3 flex flex-wrap items-center gap-3">
            <time
              v-if="post.date"
              class="text-xs font-medium"
              style="color: var(--color-accent);"
            >
              {{ formatDate(post.date) }}
            </time>

            <div v-if="post.tags?.length" class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="rounded-full px-2 py-1 text-xs font-medium"
                style="background-color: var(--color-surface-secondary); color: var(--color-text-secondary);"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
