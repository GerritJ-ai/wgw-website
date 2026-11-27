import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const berichte = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/berichte' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      bereich: z.enum(['verein', 'fraktion']),
      thema: z.string().optional(),
      cover: image().optional(),
      teaser: z.string().optional(),
    }),
});

export const collections = { berichte };
