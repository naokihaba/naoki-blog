<script setup lang="ts">
const props = defineProps<{
  url: string
  title?: string
  description?: string
  image?: string
}>()

// URLからドメイン名を抽出
const domain = computed(() => {
  try {
    return new URL(props.url).hostname.replace('www.', '')
  } catch {
    return props.url
  }
})

// 外部リンクかどうか判定
const isExternal = computed(() => {
  return props.url.startsWith('http://') || props.url.startsWith('https://')
})
</script>

<template>
  <a
    :href="url"
    class="link-card"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <div v-if="image" class="link-card-image">
      <img :src="image" alt="" loading="lazy">
    </div>
    <div class="link-card-content">
      <div class="link-card-title">
        {{ title || url }}
      </div>
      <div v-if="description" class="link-card-description">
        {{ description }}
      </div>
      <div class="link-card-domain">
        {{ domain }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  flex-direction: row;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.link-card:hover {
  border-color: var(--color-accent);
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.link-card-image {
  flex-shrink: 0;
  width: 140px;
  background: linear-gradient(135deg, var(--color-surface-secondary), var(--color-surface-elevated));
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.link-card-content {
  flex: 1;
  padding: 1.25rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.link-card-title {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  transition: color 0.2s ease;
}

.link-card:hover .link-card-title {
  color: var(--color-accent);
}

.link-card-description {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.link-card-domain {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-transform: lowercase;
  opacity: 0.75;
}

@media (max-width: 480px) {
  .link-card {
    flex-direction: column;
  }

  .link-card-image {
    width: 100%;
    height: 180px;
  }

  .link-card-content {
    padding: 1rem;
  }
}
</style>
