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
    zdroj_kanal: z.enum(['dev-changelog', 'merchant-changelog', 'editions', 'product-news', 'blog']).default('dev-changelog'),
    obrazek: z.string().url().nullable().optional(),

    // Editions hub & cross-reference: které pololetní Editions release toto pokrývá
    // Hub article (kategorie obsahuje 'editions-hub') definuje release; ostatní články ho odkazují.
    editions_release: z.string().optional(),  // např. "spring-2026", "winter-2026"

    // AI-doplněný kontext (volitelný — generováno přes /enrich)
    kontext: z
      .object({
        background: z.string(),                // 100-250 slov: co to je, proč to existuje, širší rámec
        priklad: z.string().optional(),        // volitelný code snippet / use case
        zdroje: z.array(                       // všechny zdroje, ze kterých kontext čerpá
          z.object({
            title: z.string(),
            url: z.string().url(),
          })
        ).min(1),
        generated_at: z.coerce.date(),
        model: z.string().default('claude-sonnet-4-5'),
      })
      .nullable()
      .optional(),
  }),
});

export const collections = { summaries };
