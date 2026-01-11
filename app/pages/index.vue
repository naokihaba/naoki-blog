<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('content')
    .path('/blog')
    .where('published', true)
    .sort({ published_at: -1 })
    .all()
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">
      Naoki's Blog
    </h1>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="post in posts"
        :key="post._id"
        class="border rounded-lg p-6 hover:shadow-lg transition-shadow"
      >
        <NuxtLink :to="`/blog/${post._path.split('/').pop()}`">
          <h2 class="text-2xl font-semibold mb-2">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            {{ post.description }}
          </p>
          <time class="text-sm text-gray-500">
            {{ new Date(post.published_at).toLocaleDateString('ja-JP') }}
          </time>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>
