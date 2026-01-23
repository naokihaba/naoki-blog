<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t" style="border-color: var(--color-border); background-color: var(--color-surface-secondary);">
    <div class="mx-auto px-4 py-8 text-center" style="max-width: var(--container-max);">
      <div class="flex items-center justify-center gap-2 text-sm" style="color: var(--color-text-secondary);">
        <UIcon name="i-lucide-copyright" class="size-4" />
        <span>{{ currentYear }} Naoki's Blog. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
