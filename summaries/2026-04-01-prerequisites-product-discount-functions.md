---
date: 2026-04-01
title: "Prerequisites pro Product Discount Functions (Buy X, Get Y)"
title_en: "Add Prerequisites to Product Discount Functions"
slug: prerequisites-product-discount-functions
zdroj: https://shopify.dev/changelog/add-prerequisites-to-product-discount-functions
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify Functions (WASM-based custom logiky). Naše integrace Functions nepoužívají; klient si je obvykle definuje sám v Admin/CLI."
dotcene_klienty: []

tldr: "Discount functions umí nově prerekvizity pro Buy X, Get Y slevy v product candidates."
tagy: [discount, functions, buy-x-get-y]
---

## Co se mění
**Discount Functions** v API 2026-04 podporují definici **prerekvizit** (prerequisites) pro slevy typu Buy X, Get Y. Místo aplikace slevy nepodmíněně lze nyní specifikovat, že sleva platí jen pokud košík obsahuje konkrétní produkty/varianty.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions (WASM custom logika) nedeployujeme z naší integrace. Funkce si typicky deployuje merchant nebo agency, která dělá checkout customizaci.
