<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t" style="border-color: var(--color-border); background-color: var(--color-surface-secondary);">
    <div class="mx-auto px-4 py-8 text-center" style="max-width: var(--container-max);">
      <p class="text-sm" style="color: var(--color-text-secondary);">
        &copy; {{ currentYear }} Naoki's Blog. All rights reserved.
      </p>
    </div>
  </footer>
</template>
