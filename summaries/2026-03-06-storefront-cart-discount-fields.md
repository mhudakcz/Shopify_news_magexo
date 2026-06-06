---
date: 2026-03-06
title: "Nová discount pole v Storefront API cart types od 2026-07"
title_en: "New discount fields in the Storefront API's cart types"
slug: storefront-cart-discount-fields
zdroj: https://shopify.dev/changelog/new-discount-fields-in-the-storefront-cart-graphql-api
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation, nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Máme storefront discount methods minimálně, primárně pracujeme s Admin API. Pokud klient má custom storefront (Hydrogen/headless), může být relevantní."
dotcene_klienty: []
souvisejici: [add-tags-to-discounts]

kontext:
  background: |
    Storefront API v Shopify je GraphQL rozhraní určené pro headless a vlastní frontend aplikace — umožňuje číst produkty, spravovat košík a řídit pokladní tok bez nutnosti použití standardního Shopify tématu. Klíčovým objektem je typ `Cart`, který reprezentuje aktivní nákupní košík zákazníka včetně řádkových položek, doručovacích skupin a aplikovaných slev.

    Historicky pracoval `cart.discountAllocations` s alokovanými částkami — tedy kolik ze slevy bylo přiřazeno konkrétnímu řádku. Tento přístup ztěžoval zobrazení původní nakonfigurované hodnoty slevy (např. „10 % na celou objednávku") odděleně od výsledné částky. Shopify proto v API verzi 2026-07 přechází na dvouvrstvý model: `discountApplications` nese metadata o každé slevě (typ, hodnota), zatímco `sourceDiscountApplication` na úrovni řádkové alokace ukazuje zpět na konkrétní slevu, z níž alokace pochází.

    V praxi se tato změna týká zejména vývojářů Hydrogen storefront a dalších headless implementací, kteří renderují vlastní „discount breakdown" v košíku — například zobrazení čáry přeškrtnuté ceny nebo rozúčtování slev. Stávající dotazy využívající `cart.discountAllocations` bude nutné před 2026-07 přepsat, jinak selžou. Změna navazuje na širší trend Shopify unifikovat datový model slev napříč Admin i Storefront API.

    Souběžně Shopify v API 2026-04 přidalo podporu více product discounts na jednu cart line (umožňující stacking pro komplexní promo akce), čímž se nový strukturovaný model `discountApplications` stává ještě důležitějším pro správné zobrazení všech aplikovaných slev.
  zdroje:
    - title: "Shopify Changelog: New discount fields in the Storefront cart GraphQL API"
      url: "https://shopify.dev/changelog/new-discount-fields-in-the-storefront-cart-graphql-api"
    - title: "Shopify Archive: Více product discounts na jeden cart line"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-product-discounts-cart-line/"
    - title: "Shopify Archive: Tagy na slevách v Admin API od 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/add-tags-to-discounts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Storefront API 2026-07 deprecuje cart.discountAllocations; nahrazují discountApplications a sourceDiscountApplication."
tagy: [storefront, cart, discount, deprecation]
---

## Co se mění
Storefront API verze **2026-07** **deprecuje** pole `cart.discountAllocations` a zavádí nová strukturovanější pole:
- **`discountApplications`** — všechny aplikované discounts na cart, včetně typu a hodnoty
- **`sourceDiscountApplication`** — odkaz z `lineItem.discountAllocation` na konkrétní discount application

Cíl: čistší model pro headless storefronts, kde frontend renderuje detailní discount breakdown.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, deprecation oznámeno

## Dopad pro nás
**Pro vývojáře:**
Naše integrace primárně používá Admin API. Storefront API používáme minimálně. Pokud klient má **Hydrogen** nebo jiný headless storefront a my mu poskytujeme cart enrichment přes Storefront API, je třeba migrovat.

**Pro PM / PO:**
Týká se klientů s custom frontendem (typicky agency-built storefronts).

## Použití v Integrátoru
**Nepoužíváme** — Storefront API discount fields aktivně nečteme. V budoucnu, pokud napojíme headless flow, použít nový model.
