<script setup lang="ts">
interface Props {
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}

defineProps<Props>()

function handleError() {
  clearError({ redirect: '/' })
}

useSeoMeta({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
})
</script>

<template>
  <div class="mx-auto px-4 py-16" style="max-width: var(--container-max);">
    <section class="mx-auto text-center" style="max-width: 56rem;">
      <div class="mb-12">
        <h1 class="mb-4 text-6xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          {{ error.statusCode }}
        </h1>
        <h2 class="mb-4 text-2xl font-bold" style="color: var(--color-text-secondary);">
          {{ error.statusMessage || 'Page Not Found' }}
        </h2>
        <p class="mb-8 text-lg" style="color: var(--color-text-secondary);">
          お探しのページは見つかりませんでした。URLが間違っているか、ページが移動・削除された可能性があります。
        </p>

        <UButton
          size="lg"
          @click="handleError"
        >
          ホームに戻る
        </UButton>
      </div>
    </section>
  </div>
</template>
