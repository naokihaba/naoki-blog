<script setup lang="ts">
defineProps<{
  id: string
}>()

onMounted(() => {
  // Twitter埋め込みスクリプトの読み込み
  if (!document.querySelector('script[src*="platform.twitter.com"]')) {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }
})
</script>

<template>
  <div class="tweet-container" :data-tweet-id="id">
    <ClientOnly>
      <blockquote class="twitter-tweet">
        <a :href="`https://twitter.com/i/web/status/${id}`">Loading tweet...</a>
      </blockquote>
      <template #fallback>
        <div class="tweet-loading">
          Loading tweet...
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.tweet-container {
  margin: 1.5rem 0;
}

.tweet-loading {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  padding: 1rem;
  text-align: center;
}

.tweet-container :global(.tweet-error) {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  font-style: italic;
}
</style>
