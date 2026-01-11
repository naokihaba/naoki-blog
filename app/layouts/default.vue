<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-light">
    <LayoutHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
