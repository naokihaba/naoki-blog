<script setup lang="ts">
defineProps<{
  href?: string
  target?: string
}>()

const isExternalLink = (href?: string) => {
  if (!href) return false
  return href.startsWith('http://') || href.startsWith('https://')
}

const getFaviconUrl = (href?: string) => {
  if (!href || !isExternalLink(href)) return null
  try {
    const url = new URL(href)
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=16`
  } catch {
    return null
  }
}
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="prose-link"
  >
    <img
      v-if="getFaviconUrl(href)"
      :src="getFaviconUrl(href)"
      alt=""
      class="inline-favicon"
      width="16"
      height="16"
      loading="lazy"
    >
    <slot />
  </a>
</template>

<style scoped>
.inline-favicon {
  display: inline-block;
  margin: 0 0.375rem 0 0.125rem;
  vertical-align: text-bottom;
  border-radius: 2px;
}
</style>
