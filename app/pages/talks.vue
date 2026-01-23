<script setup lang="ts">
const { data: talks } = await useAsyncData('talks', () =>
  queryCollection('talks')
    .order('date', 'DESC')
    .all()
)

const talksByYear = computed(() => {
  const grouped = new Map<number, typeof talks.value>()
  for (const talk of talks.value || []) {
    const year = new Date(talk.date).getFullYear()
    if (!grouped.has(year)) {
      grouped.set(year, [])
    }
    grouped.get(year)!.push(talk)
  }
  return grouped
})

useSeoMeta({
  title: 'Talks',
  description: 'My conference talks and presentations about web development, Vue.js, and Nuxt.',
})
</script>

<template>
  <div class="mx-auto px-4 py-16" style="max-width: var(--container-max);">
    <section class="mx-auto" style="max-width: 56rem;">
      <div class="mb-12">
        <h1 class="mb-4 text-4xl font-bold" style="color: var(--color-text-primary); letter-spacing: -0.025em;">
          Talks
        </h1>
        <p class="text-lg" style="color: var(--color-text-secondary);">
          カンファレンスや勉強会での登壇資料
        </p>
      </div>

      <div v-if="talksByYear.size">
        <section v-for="[year, yearTalks] in talksByYear" :key="year" class="mb-12">
          <h2 class="mb-4 text-xl font-bold" style="color: var(--color-text-secondary);">
            {{ year }}
          </h2>
          <div>
            <TalkListItem v-for="talk in yearTalks" :key="talk.path" :talk />
          </div>
        </section>
      </div>

      <p v-else class="text-center text-lg" style="color: var(--color-text-secondary);">
        No talks yet. Check back soon!
      </p>
    </section>
  </div>
</template>
