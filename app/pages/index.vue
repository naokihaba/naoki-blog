<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

const allPosts = computed(() => posts.value || [])

useSeoMeta({
  title: "Naoki's Blog",
  description: 'Welcome to my personal blog about web development and technology.',
})
</script>

<template>
  <div class="mx-auto px-4 py-16" style="max-width: var(--container-max);">
    <section class="mb-20 text-center animate-fade-in">
      <h1 class="gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
        Welcome to Naoki's Blog
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-xl leading-relaxed" style="color: var(--color-text-secondary);">
        Thoughts on web development, technology, and more.
      </p>
    </section>

    <section v-if="allPosts.length" class="mx-auto" style="max-width: 56rem;">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-2xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          Blog Posts
        </h2>
      </div>

      <div>
        <BlogListItem v-for="post in allPosts" :key="post.path" :post />
      </div>
    </section>

    <p v-if="!posts?.length" class="text-center text-lg" style="color: var(--color-text-secondary);">
      No posts yet. Check back soon!
    </p>
  </div>
</template>
