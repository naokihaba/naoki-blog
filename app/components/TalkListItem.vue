<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  talk: Collections['talks']
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
  <article>
    <div class="group block py-6" style="border-bottom: 1px solid var(--color-border);">
      <div class="flex items-start justify-between gap-4">
        <div class="flex-1">
          <h3
            class="text-lg font-bold transition-colors"
            style="color: var(--color-text-primary); letter-spacing: -0.025em;"
          >
            {{ talk.title }}
          </h3>

          <p
            v-if="talk.description"
            class="mt-2 text-sm line-clamp-2"
            style="color: var(--color-text-secondary);"
          >
            {{ talk.description }}
          </p>

          <div class="mt-3 flex flex-wrap items-center gap-3">
            <span v-if="talk.date" class="flex items-center gap-1.5">
              <UIcon name="i-lucide-calendar" class="size-3.5 text-gray-400" />
              <time class="text-xs font-medium" style="color: var(--color-accent);">
                {{ formatDate(talk.date) }}
              </time>
            </span>

            <UBadge v-if="talk.event" variant="subtle" color="neutral" size="xs">
              {{ talk.event }}
            </UBadge>

            <UBadge v-if="talk.location" variant="subtle" color="neutral" size="xs">
              <UIcon name="i-lucide-map-pin" class="size-3" />
              {{ talk.location }}
            </UBadge>

            <span v-if="talk.slidesUrl || talk.videoUrl" class="flex flex-wrap gap-2">
              <UButton
                v-if="talk.slidesUrl"
                :to="talk.slidesUrl"
                target="_blank"
                external
                icon="i-lucide-presentation"
                variant="soft"
                color="primary"
                size="xs"
                @click.stop
              >
                Slides
              </UButton>
              <UButton
                v-if="talk.videoUrl"
                :to="talk.videoUrl"
                target="_blank"
                external
                icon="i-lucide-video"
                variant="soft"
                color="primary"
                size="xs"
                @click.stop
              >
                Video
              </UButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
