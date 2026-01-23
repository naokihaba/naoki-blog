<script setup lang="ts">
import type { Collections } from '@nuxt/content'

type BlogListItem = Pick<Collections['blog'], 'title' | 'description' | 'date' | 'tags' | 'path'>

const { data: posts } = await useAsyncData('blog-posts', async () => {
  const allPosts = await queryCollection('blog')
    .order('date', 'DESC')
    .all()

  // 必要なフィールドだけ抽出してデータサイズを削減
  return allPosts.map(post => ({
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    path: post.path,
  })) as BlogListItem[]
})

const postsByYear = computed(() => {
  const grouped = new Map<number, typeof posts.value>()
  for (const post of posts.value || []) {
    const year = new Date(post.date).getFullYear()
    if (!grouped.has(year)) {
      grouped.set(year, [])
    }
    grouped.get(year)!.push(post)
  }
  return grouped
})

useSeoMeta({
  title: 'Blog',
  description: 'Welcome to my personal blog about web development and technology.',
})
</script>

<template>
  <div class="mx-auto px-4 py-16" style="max-width: var(--container-max);">
    <section class="mx-auto" style="max-width: 56rem;">
      <div class="mb-12">
        <h1 class="mb-4 text-4xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          Blog
        </h1>
        <p class="text-lg" style="color: var(--color-text-secondary);">
          技術のこと、日々のこと、思いついたことを綴るブログ
        </p>
      </div>

      <div v-if="postsByYear.size">
        <section v-for="[year, yearPosts] in postsByYear" :key="year" class="mb-12">
          <h2 class="mb-4 text-xl font-bold" style="color: var(--color-text-secondary);">
            {{ year }}
          </h2>
          <div>
            <BlogListItem v-for="post in yearPosts" :key="post.path" :post />
          </div>
        </section>
      </div>

      <p v-else class="text-center text-lg" style="color: var(--color-text-secondary);">
        No posts yet. Check back soon!
      </p>
    </section>
  </div>
</template>
