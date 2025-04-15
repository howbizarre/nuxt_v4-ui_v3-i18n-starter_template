import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'pages/**/*.md'
    }),
    authors: defineCollection({
      type: 'data',
      source: 'authors/*.json',
      schema: z.object({
        name: z.string(),
        avatar: z.string(),
        url: z.string()
      })
    })
  }
});
