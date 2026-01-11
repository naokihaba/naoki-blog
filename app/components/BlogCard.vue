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
  <article
    class="group animate-fade-in overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    style="border: 2px solid var(--color-border); background-color: var(--color-surface); box-shadow: 0 8px 16px -4px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);"
  >
    <NuxtLink :to="post.path" class="block">
      <div
        v-if="post.image"
        class="aspect-video overflow-hidden"
        style="background-color: var(--color-surface-secondary);"
      >
        <NuxtImg
          :src="post.image"
          :alt="post.title"
          class="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div class="p-8">
        <time
          v-if="post.date"
          class="text-sm font-medium"
          style="color: var(--color-accent);"
        >
          {{ formatDate(post.date) }}
        </time>

        <h2
          class="mt-3 text-xl font-bold transition-all duration-300 group-hover:gradient-text"
          style="color: var(--color-text-primary); letter-spacing: -0.025em;"
        >
          {{ post.title }}
        </h2>

        <p
          v-if="post.description"
          class="mt-3 line-clamp-2 leading-relaxed"
          style="color: var(--color-text-secondary);"
        >
          {{ post.description }}
        </p>

        <div v-if="post.tags?.length" class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:scale-105"
            style="background-color: var(--color-surface-secondary); color: var(--color-text-secondary);"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
