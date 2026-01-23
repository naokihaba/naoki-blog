<script setup lang="ts">
defineProps<{
  /** グリッドのカラム数（デフォルト: 2） */
  cols?: 1 | 2 | 3 | 4
}>()
</script>

<template>
  <div
    class="card-grid"
    :class="{
      'grid-cols-1': cols === 1,
      'sm:grid-cols-2': cols === 2 || !cols,
      'sm:grid-cols-2 lg:grid-cols-3': cols === 3,
      'sm:grid-cols-2 lg:grid-cols-4': cols === 4,
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
