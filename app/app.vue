<script setup lang="ts">
useHead({
  titleTemplate: '%s | Naoki Haba のポートフォリオ',
  meta: [
    { name: 'Hatena::Bookmark', content: 'nocomment' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>