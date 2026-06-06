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

kontext:
  background: |
    Shopify CDN (Content Delivery Network) je globální síť distribuovaných serverů, přes kterou Shopify servíruje všechny statické soubory – obrázky produktů, videa, PDF dokumenty i témata. Každý soubor nahraný přes admin nebo API dostane URL ve tvaru `cdn.shopify.com/s/files/...` a může obsahovat verzovací parametr `?v=`, který zajišťuje, že prohlížeče a downstream systémy vidí aktuální obsah namísto zastaralé verze z cache.

    Historicky Shopify při nahrazení nebo smazání souboru provedl tzv. CDN purge – aktivně odstranil starou verzi ze všech uzlů CDN sítě, aby nová verze byla okamžitě dostupná. Toto chování bylo výhodné pro obchodníky, kteří spoléhali na neměnnost URL (tzv. hardcoded URLs), ale zároveň způsobovalo zvýšenou zátěž CDN infrastruktury a nekonzistentní chování napříč poskytovateli. Shopify se rozhodl přizpůsobit obecně přijímanému standardu CDN cache managementu, kde invalidace probíhá přirozeně po vypršení TTL (Time to Live).

    Tato změna ovlivňuje především vývojáře a systémy, které pevně ukládají CDN URL místo toho, aby je dynamicky vyhodnocovaly. Správnou strategií je vždy získávat aktuální URL přes Liquid filtry, GraphQL Admin API nebo REST API těsně před použitím – nikoli je jednou uložit a spoléhat na jejich platnost. Jde o stejný princip, jaký Shopify prosazuje u dalších identifikátorů: přednost stabilních, dynamicky resolvovaných odkazů před pevně zakódovanými hodnotami.
  zdroje:
    - title: "Shopify Changelog: Replacing or deleting a Shopify-hosted file no longer purges its CDN URL"
      url: "https://shopify.dev/changelog/replacing-or-deleting-a-shopify-hosted-file-no-longer-purges-its-cdn-url"
    - title: "Archiv: Storefront filter URLs používají stable identifiers"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-filter-urls-stable-identifiers/"
    - title: "Archiv: Automatické CSS subsetting pro stylesheet tagy"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/automatic-css-subsetting-stylesheet-tags/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
