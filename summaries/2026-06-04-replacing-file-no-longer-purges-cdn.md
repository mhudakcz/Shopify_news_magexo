---
date: 2026-06-04
title: "Nahrazení/smazání Shopify-hosted file už nepurguje CDN URL"
title_en: "Replacing or deleting a Shopify-hosted file no longer purges its CDN URL"
slug: replacing-file-no-longer-purges-cdn
zdroj: https://shopify.dev/changelog/replacing-or-deleting-a-shopify-hosted-file-no-longer-purges-its-cdn-url
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [breaking-change, integrace]
api_oblast: other
api_verze: []
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-07

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše integrace cachuje Shopify CDN URLs (typicky pro produktové obrázky v ERP/marketplace exportech), je třeba refresh strategy — staré URL mohou ukazovat na neaktuální obsah."
dotcene_klienty: []

tldr: "**Action Required:** Od 7. 4. 2026 Shopify nepurguje CDN URL při nahrazení / smazání hostovaného souboru. Pro aktuální URL použij Liquid filters, Media uploader nebo APIs (versioned URLs). _Původně publikováno 7. 4. 2026 (audit doplnění)._"
tagy: [cdn, files, caching, breaking, urls]
---

## Co se mění
**Action Required.** Od **7. 4. 2026** Shopify **proaktivně nepurguje CDN URL** když je soubor nahrazen nebo smazán. Staré URL mohou:
- Vracet **starý obsah** (cached)
- Vracet **404** (po smazání)

Pro **aktuální / versioned URL** je třeba použít:
- **Liquid filters** (`{{ file_url }}`, `{{ img_url }}`)
- **Media uploader** v admin
- **GraphQL Admin / REST APIs** vracející aktuální `url` field

## Časová osa
- **2026-04-07** — chování změněno

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace **kešuje CDN URL** (typicky pro export obrázků do ERP, marketplaces, e-mailových šablon), je nutné refresh strategy. Doporučení:
- Re-fetch URLs pravidelně (např. v noci, před exportem)
- NEBO ukládat pouze Shopify file ID a re-resolve URL při použití

**Pro PM / PO:**
Pokud klient hlásí „obrázek na marketplace ukazuje starou verzi" — known cause. Migrace na re-resolved URLs.

## Použití v Integrátoru
**Možná** — záleží jestli někde cachujeme CDN URLs. Audit doporučen.

## Rizika a edge cases
- 404 po smazání může způsobit broken images na downstream channels
- Třetí strany s naším exportem (ERP, marketplace) je třeba upozornit
