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
