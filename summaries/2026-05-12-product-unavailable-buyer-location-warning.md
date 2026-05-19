---
date: 2026-05-12
title: "PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning v Storefront Cart API"
title_en: "New PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION warning code in the Storefront API Cart"
slug: product-unavailable-buyer-location-warning
zdroj: https://shopify.dev/changelog/new-productunavailableinbuyerlocation-warning-code-in-the-storefront-api-cart
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api]
api_oblast: storefront
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefront Cart API. Naše integrace primárně Admin API, ale pokud klient používá custom storefront / headless flow s našou pomocí, je třeba handlovat nový warning."
dotcene_klienty: []
souvisejici: [storefront-cart-discount-fields]

tldr: "Od Storefront API 2026-07 Cart emituje warning PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION když cart obsahuje produkty nedostupné v buyer location — warning mapovaný na konkrétní CartLine IDs."
tagy: [storefront, cart, markets, validation]
---

## Co se mění
Storefront API verze **2026-07** přidává do Cart objektu **warning kód** `PRODUCT_UNAVAILABLE_IN_BUYER_LOCATION`. Cart vrací warning když některé line items obsahují produkty, které nejsou dostupné v zákazníkově **buyer location** (typicky regional market restrictions, age-restricted products v některých zemích). Warning má reference na konkrétní `CartLine` IDs, takže frontend může selektivně highlightovat problémové položky.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud klient používá headless storefront / custom checkout flow nad naší integrací, frontend by měl tento warning konzumovat a ošetřit UX (např. message "Produkt X není dostupný ve vaší zemi"). Naše Admin API operace nedotčené.

**Pro PM / PO:**
Lepší UX pro mezinárodní obchody s regional restriction setupem (Markets).

## Použití v Integrátoru
**Možná** — záleží jestli nějaký klient má headless setup. Storefront Cart API direct nepoužíváme.
