import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md"
    }),
    authors: defineCollection({
      type: 'data',
      source: '**/*.json',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
      })
    })
  }
})
