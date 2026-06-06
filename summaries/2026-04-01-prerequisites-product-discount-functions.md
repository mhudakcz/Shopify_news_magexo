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

kontext:
  background: |
    Shopify Discount Functions jsou serverless funkce kompilované do WebAssembly (WASM), které vývojářům umožňují implementovat vlastní slevovou logiku spouštěnou v reálném čase při přidávání produktů do košíku. Jde o alternativu k nativním typům slev v Shopify Admin a náhradu za dnes již ukončené Shopify Scripts.

    Sleva typu Buy X, Get Y (BXGY) patří mezi klasické obchodní promoce, kde zákazník musí splnit nákupní podmínku (koupit X kusů určitého zboží), aby získal slevu na jiný produkt (Y). Před verzí API 2026-04 Discount Functions podporovaly BXGY pouze jako výsledek (get-Y část), avšak prerekvizita (buy-X část) musela být řešena jinak nebo vůbec nebyla programově přístupná v rámci function logiky.

    Nové pole `prerequisites` v product discount candidates přináší přímou podporu podmínkové části slevy přímo na úrovni API. Každá prerekvizita je reprezentována jako `cartLinePrerequisite` s identifikátorem řádku košíku a požadovaným množstvím. To umožňuje merchantům a vývojářům budovat sofistikované promoce — například „kup 2 trička, dostaneš 30 % slevu na kalhoty" — bez nutnosti obcházení přes jiné mechanismy.

    Tato změna rozšiřuje expresivitu Discount Functions API a doplňuje souběžně vydané funkce jako tagy na slevách nebo přístup k metaobjectům ve functions. Celkově posouvá Shopify Functions k plnohodnotnému systému pro programovatelné pokladní logiky.
  zdroje:
    - title: "Shopify Changelog: Add Prerequisites to Product Discount Functions"
      url: "https://shopify.dev/changelog/add-prerequisites-to-product-discount-functions"
    - title: "Shopify Docs: Build Discounts with Functions"
      url: "https://shopify.dev/docs/apps/build/discounts"
    - title: "Archiv: Metaobject access ve Shopify Functions od 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/metaobject-access-shopify-functions/"
    - title: "Archiv: Function run logs dostupné automaticky podle access scopes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/function-run-log-access-scopes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Discount functions umí nově prerekvizity pro Buy X, Get Y slevy v product candidates."
tagy: [discount, functions, buy-x-get-y]
---

## Co se mění
**Discount Functions** v API 2026-04 podporují definici **prerekvizit** (prerequisites) pro slevy typu Buy X, Get Y. Místo aplikace slevy nepodmíněně lze nyní specifikovat, že sleva platí jen pokud košík obsahuje konkrétní produkty/varianty.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions (WASM custom logika) nedeployujeme z naší integrace. Funkce si typicky deployuje merchant nebo agency, která dělá checkout customizaci.
