import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
      }),
    }),
    talks: defineCollection({
      type: 'page',
      source: 'talks/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        event: z.string(),
        location: z.string().optional(),
        slidesUrl: z.string().optional(),
        videoUrl: z.string().optional(),
      }),
    }),
  },
})
