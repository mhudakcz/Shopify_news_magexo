import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const summaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../summaries' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    slug: z.string().optional(),
    kategorie: z.array(z.string()).default([]),
    api_oblast: z.string().optional(),
    pouzivame_v_integratoru: z.enum(['ano', 'ne', 'mozna']).optional(),
    dukaz_integratoru: z.string().optional(),
    tldr: z.string(),
    zdroj: z.string().url(),
    shrnuto_dne: z.coerce.date().optional(),
  }),
});

export const collections = { summaries };
