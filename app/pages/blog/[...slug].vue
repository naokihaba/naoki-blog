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

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="mx-auto px-4 py-16" style="max-width: 48rem;">
    <header class="mb-16 text-center animate-fade-in">
      <time
        v-if="post?.date"
        class="text-sm font-semibold uppercase tracking-wider"
        style="color: var(--color-accent);"
      >
        {{ formatDate(post.date) }}
      </time>

      <h1 class="gradient-text mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
        {{ post?.title }}
      </h1>

      <p
        v-if="post?.description"
        class="mx-auto mt-6 max-w-2xl text-xl leading-relaxed"
        style="color: var(--color-text-secondary);"
      >
        {{ post.description }}
      </p>

      <div v-if="post?.tags?.length" class="mt-6 flex flex-wrap justify-center gap-3">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-110"
          style="background-color: var(--color-surface-secondary); color: var(--color-text-secondary);"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="prose mx-auto">
      <ContentRenderer v-if="post" :value="post" />
    </div>

    <footer class="mt-16 border-t pt-8" style="border-color: var(--color-border);">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
        style="color: var(--color-accent);"
      >
        <Icon name="lucide:arrow-left" class="size-5" />
        Back to home
      </NuxtLink>
    </footer>
  </article>
</template>
