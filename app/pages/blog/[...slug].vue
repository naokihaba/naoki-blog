<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug)
  ? route.params.slug.join('/')
  : route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('blog')
    .path(`/blog/${slug}`)
    .first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})

defineOgImageComponent('NuxtSeo', {
  title: post.value.title,
  theme: '#6366f1',
  colorMode: 'dark',
})

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <article class="mx-auto px-4 py-16" style="max-width: 56rem;">
    <header class="mb-16 text-center">
      <div class="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style="background-color: var(--color-surface-elevated);">
        <Icon name="lucide:calendar" class="size-4" style="color: var(--color-accent);" />
        <time
          v-if="post?.date"
          class="text-sm font-semibold"
          style="color: var(--color-text-secondary);"
        >
          {{ formatDate(post.date) }}
        </time>
      </div>

      <h1 class="gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight">
        {{ post?.title }}
      </h1>

      <p
        v-if="post?.description"
        class="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
        style="color: var(--color-text-secondary);"
      >
        {{ post.description }}
      </p>

      <div v-if="post?.tags?.length" class="mt-8 flex flex-wrap justify-center gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-lg px-4 py-2 text-sm font-semibold transition-[transform,box-shadow] hover:scale-105 hover:shadow-md"
          style="background: linear-gradient(135deg, var(--color-gradient-from), var(--color-gradient-to)); color: white;"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="mt-8 h-px" style="background: linear-gradient(to right, transparent, var(--color-border), transparent);"></div>
    </header>

    <div class="prose mx-auto">
      <ContentRenderer v-if="post" :value="post" />
    </div>

    <footer class="mt-20 pt-8" style="border-top: 2px solid var(--color-border);">
      <div class="flex items-center justify-between">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-[gap] hover:gap-3"
          style="color: var(--color-accent); background-color: rgba(99, 102, 241, 0.1);"
        >
          <Icon name="lucide:arrow-left" class="size-5" />
          <span>Back to home</span>
        </NuxtLink>

        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-transform hover:scale-105"
          style="color: var(--color-accent); background-color: rgba(99, 102, 241, 0.1);"
          title="Scroll to top"
        >
          <span>Top</span>
          <Icon name="lucide:arrow-up" class="size-5" />
        </button>
      </div>
    </footer>
  </article>
</template>
