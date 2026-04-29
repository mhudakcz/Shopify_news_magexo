import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const summaries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../summaries' }),
  schema: z.object({
    // identita
    date: z.coerce.date(),
    title: z.string(),
    title_en: z.string().optional(),
    slug: z.string().optional(),
    zdroj: z.string().url(),
    zdroj_dokumentace: z.string().url().nullable().optional(),
    shrnuto_dne: z.coerce.date().optional(),

    // klasifikace
    kategorie: z.array(z.string()).default([]),
    api_oblast: z.string(),
    api_verze: z.array(z.string()).default([]),
    nalehavost: z.enum(['kriticka', 'vysoka', 'stredni', 'nizka']).default('stredni'),
    customer_facing: z.boolean().optional(),

    // časová osa
    ucinnost_od: z.coerce.date().nullable().optional(),
    deprecation_do: z.coerce.date().nullable().optional(),
    migrace_doporucena_do: z.coerce.date().nullable().optional(),

    // dopad
    pouzivame_v_integratoru: z.enum(['ano', 'ne', 'mozna']),
    dukaz_integratoru: z.string().optional(),
    dotcene_klienty: z.array(z.string()).default([]),
    souvisejici: z.array(z.string()).default([]),

    // meta
    tldr: z.string(),
    tagy: z.array(z.string()).default([]),
    zdroj_kanal: z.enum(['changelog', 'editions', 'product-news']).default('changelog'),
  }),
});

export const collections = { summaries };
