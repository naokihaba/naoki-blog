<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

const featuredPosts = computed(() => posts.value?.slice(0, 3) || [])
const recentPosts = computed(() => posts.value?.slice(3) || [])

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

    <section v-if="featuredPosts.length" class="mb-16">
      <div class="mb-10 flex items-center justify-between">
        <h2 class="text-3xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          Latest Posts
        </h2>
        <div class="h-1 flex-1 ml-6 rounded-full" style="background: linear-gradient(to right, var(--color-gradient-from), var(--color-gradient-to)); opacity: 0.3;"></div>
      </div>

      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in featuredPosts" :key="post.path" :post />
      </div>
    </section>

    <section v-if="recentPosts.length" class="mx-auto" style="max-width: 48rem;">
      <div class="mb-8 flex items-center justify-between">
        <h2 class="text-2xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          Recent Posts
        </h2>
      </div>

      <div>
        <BlogListItem v-for="post in recentPosts" :key="post.path" :post />
      </div>
    </section>

    <p v-if="!posts?.length" class="text-center text-lg" style="color: var(--color-text-secondary);">
      No posts yet. Check back soon!
    </p>
  </div>
</template>
