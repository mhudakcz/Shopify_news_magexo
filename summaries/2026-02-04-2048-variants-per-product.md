---
date: 2026-02-04
title: "Limit variant per produkt zvýšen z 100 na 2048"
title_en: "2048 Variants Per Product"
slug: 2048-variants-per-product
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 30+ product methods, hodně z toho pracuje s variantami (getAllProductVariants, getProductVariantBySku, appendProductVariantImages, createProductOptions atd.). Zvýšení limitu změní možnosti pro klienty s velkou produktovou maticí."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Varianta produktu (ProductVariant) je v Shopify konkrétní kombinace atributů jednoho produktu — například tričko v barvě modré a velikosti M tvoří jednu variantu. Každá varianta nese vlastní cenu, SKU, čárový kód, stav skladu a nastavení dopravy. Shopify Admin GraphQL API pracuje s variantami jako se samostatným objektem propojeným s nadřazeným produktem.

    Historicky byl tvrdý limit 100 variant na produkt součástí platformy od samého počátku. Pro jednoduché e-shopy byl dostačující, ale obchodníci s komplexními katalogy — módní značky s kombinacemi velikost × barva × délka × střih, průmysloví prodejci nebo B2B distributoři — naráželi na tento strop a museli jeden logický produkt uměle štěpit na desítky záznamů, čímž komplikovali katalog, reporting i API synchronizace.

    Zvýšení limitu na 2048 variant odráží strategii Shopify Winter Editions 2026 zaměřenou na enterprise a B2B segment. Spolu s touto změnou přibyla v API 2026-07 možnost publikovat a skrývat varianty nezávisle per sales channel (Publishable interface), což dohromady tvoří základ pro granulární správu velkých produktových matic.

    Do budoucna lze očekávat, že vyšší limit bude doprovázet i nové doporučené vzory pro frontend — zobrazení 2000+ variant smysluplně vyžaduje filtry a konfigurátory, nikoli ploché dropdowny.
  zdroje:
    - title: "Shopify Winter Editions 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "ProductVariant — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant"
    - title: "Publish/unpublish variant nezávisle od produktu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify zvyšuje limit variant per produkt z 100 na 2048 — výrazná změna pro klienty s velkou produktovou maticí."
tagy: [product, variant, limit, b2b]
---

## Co se mění
Shopify ruší tradiční limit **100 variant per produkt** a zvyšuje ho na **2048**. Pro klienty s velkou kombinací atributů (např. velikost × barva × materiál × edice) to znamená, že mohou držet veškeré varianty na jednom produktu místo umělých split-up pomocí samostatných „pseudo-produktů".

## Dopad pro nás
**Pro vývojáře:**
Naše product/variant queries nedostávají breaking change — limit se jen zvyšuje. Ale **bulk operations** s 2000+ variantami mohou narážet na rate limity nebo timeoutu — zvážit optimalizaci sync flow (paginace, retry, queueing). Funkce `getAllProductVariants` může vrátit mnohem víc dat, sledovat pagination cursor.

**Pro PM / PO:**
Velká příležitost pro klienty z fashion / B2B / specialty retail. Pokud klient kdy řekl „nevejdeme se do limitu Shopify", tohle je novinka, která to mění. Hodí se zmínit v review hovorech.

## Použití v Integrátoru
**Ano** — náš product sync flow bude pravděpodobně potřebovat optimalizaci pro klienty, kteří limit využijí. Doporučuji audit `getAllProducts`, `getAllProductVariants`, `upsertProduct` na rate limit chování s velkým objemem variant.

## Rizika a edge cases
- Rate limity Shopify Admin API (1000 cost/min) při bulk syncu velkých produktů
- Frontend (theme/storefront) musí zvládat zobrazit 2000+ variant smysluplně — typicky pomocí filtrů, ne plain dropdownu
- Některé apps/integrace třetích stran ještě nemusí limit podporovat
