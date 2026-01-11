<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('content')
    .path(`/blog/${slug}`)
    .first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <article class="container mx-auto px-4 py-8 max-w-4xl">
    <header class="mb-8">
      <h1 class="text-4xl font-bold mb-4">
        {{ post.title }}
      </h1>
      <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400">
        <time>{{ new Date(post.published_at).toLocaleDateString('ja-JP') }}</time>
      </div>
    </header>

    <div class="prose dark:prose-invert max-w-none">
      <ContentRenderer :value="post" />
    </div>

    <footer class="mt-12 pt-8 border-t">
      <NuxtLink to="/blog" class="text-blue-600 hover:underline">
        ← Back to Blog
      </NuxtLink>
    </footer>
  </article>
</template>
