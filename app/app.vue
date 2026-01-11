<script setup lang="ts">
useHead({
  meta: [
    { name: 'Hatena::Bookmark', content: 'nocomment' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>