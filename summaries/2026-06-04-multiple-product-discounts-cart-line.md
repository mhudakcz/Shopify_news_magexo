---
date: 2026-06-04
title: "Více product discounts může cílit na jeden cart line (API 2026-04)"
title_en: "Multiple product discounts can apply on a single cart line"
slug: multiple-product-discounts-cart-line
zdroj: https://shopify.dev/changelog/multiple-product-discounts-can-apply-on-a-single-cart-line
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods. Stacking několika product discounts na jednu line item bylo dříve omezené — nově lze. Relevantní pro klienty s komplexními promo akcemi nebo migrace ze Shopify Scripts."
dotcene_klienty: []
souvisejici: [shopify-scripts-deprecated-june-2026, add-tags-to-discounts]

kontext:
  background: |
    Product discount je typ slevy v Shopify, která se aplikuje přímo na konkrétní řádek košíku (cart line) — na rozdíl od order discount (sleva z celkové objednávky) nebo shipping discount. V systému Shopify Functions se product discounts implementují jako serverless funkce kompilované do WebAssembly, které Shopify spouští v reálném čase při každé změně obsahu košíku.

    Historicky byl stacking více product discounts na jednu cart line možný v Shopify Scripts — Ruby skriptech dostupných exkluzivně pro Shopify Plus, které dokázaly implementovat libovolně složitou promo logiku. Po přechodu na Shopify Functions tato schopnost chyběla: Functions v předchozích verzích API umožňovaly na jeden řádek košíku aplikovat nejvýše jednu product discount, což vedlo k funkčním mezerám při migraci ze Scripts. Změna v API 2026-04 tuto mezeru uzavírá právě před plánovaným sunsetem Scripts (30. 6. 2026).

    Prakticky to umožňuje implementovat scénáře jako kombinace věrnostní slevy a akční slevy na tentýž produkt, aniž by bylo nutné obě slevy sloučit do jedné function. To usnadňuje modularitu — každá function může obsluhovat jeden typ promo akce a stacking se řeší na úrovni platformy. Relevantní je zejména pro Shopify Plus merchanty s komplexními promo strukturami nebo pro agentury migrující checkout logiku ze Scripts.

    Změna navazuje na další rozšíření Discount Functions API v sérii 2026-04: podporu prerekvizit pro Buy X, Get Y slevy a přidání tagů na slevové objekty. Celkově posiluje Functions jako plnohodnotnou náhradu Scripts s dostatečnou expresivitou pro produkční checkout logiku.
  zdroje:
    - title: "Multiple product discounts can apply on a single cart line"
      url: "https://shopify.dev/changelog/multiple-product-discounts-can-apply-on-a-single-cart-line"
    - title: "Shopify Docs: Build Discounts with Functions"
      url: "https://shopify.dev/docs/apps/build/discounts"
    - title: "Archiv: Shopify Scripts budou deprecated 30. 6. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-scripts-deprecated-june-2026/"
    - title: "Archiv: Prerequisites pro Product Discount Functions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/prerequisites-product-discount-functions/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "API 2026-04 podporuje aplikaci více product discounts na jednu cart line — typicky pro komplexní promo akce nebo migraci ze Shopify Scripts (sunset 30. 6. 2026). _Původně publikováno 30. 4. 2026 (audit doplnění)._"
tagy: [discount, cart, scripts-migration, stacking]
---

## Co se mění
API verze **2026-04** umožňuje aplikovat **více product discounts současně na jednu cart line**. Dříve byl povolený jen jeden product discount per line. Důvod změny: usnadnit migraci ze Shopify Scripts (sunset 30. 6. 2026) — Scripts často implementovaly stacking, ale GraphQL Functions historicky ne.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit
- **2026-06-30** — Shopify Scripts sunset

## Dopad pro nás
**Pro vývojáře:**
Pokud nějaký klient má Scripts, které stackují discounts na jednu line, migrace na Functions je nyní možná bez kompromisu funkcionality.

**Pro PM / PO:**
Spojit s [Shopify Scripts deprecation](../zmena/shopify-scripts-deprecated-june-2026/) — kombinace = sales talk pro Plus klienty se Scripts.

## Použití v Integrátoru
**Možná** — discount methods používáme, ale Functions deployment dělá merchant/agency.

## Související
- [Shopify Scripts deprecation](../zmena/shopify-scripts-deprecated-june-2026/)
- [Add tags to Discounts](../zmena/add-tags-to-discounts/)
