---
date: 2026-04-01
title: "Cart/Checkout Validation Functions: billing address a PO number error targets"
title_en: "Cart and checkout validation adds billing address and PO number error targets"
slug: cart-checkout-validation-billing-po
zdroj: https://shopify.dev/changelog/cart-and-checkout-validation-adds-billing-address-and-po-number-error-targets
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: checkout
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify Functions (Cart/Checkout Validation). Naše integrace Functions nedeployuje."
dotcene_klienty: []

kontext:
  background: |
    Cart and Checkout Validation Functions jsou serverové Shopify Functions, které umožňují vývojářům definovat vlastní validační pravidla přímo v procesu checkoutu — bez závislosti na klientském JavaScriptu nebo UI rozšířeních. Každá funkce přijímá obsah košíku a vrací seznam chyb zacílených na konkrétní pole formuláře (tzv. error targets), čímž Shopify checkout automaticky zobrazí chybové hlášky přímo u příslušného pole.

    Shopify tento mechanismus zavedl jako součást platformy Shopify Functions (výkonné prostředí WASM), aby obchodníkům i vývojářům umožnil vynucovat compliance pravidla — například blokovat doručení do určitých zemí, ověřovat obsah košíku vůči externím pravidlům nebo validovat firemní nákupy. Do API 2026-04 byly k dispozici error targets pouze pro doručovací adresu a položky košíku (line items).

    Rozšíření o `billing_address` a `po_number` cíle je zásadní zejména pro B2B scénáře: purchase order number (PO number) je klíčovým identifikátorem firemních nákupů, jenž musí odpovídat interním systémům odběratele. Serverová validace fakturační adresy pak umožňuje vynucovat podmínky jako povolené fakturační země nebo shodu s registrovanou adresou společnosti — to vše bez nutnosti psát checkout UI extension.

    Tato změna zapadá do širšího trendu, kdy Shopify rozšiřuje nativní B2B funkce na více plánů a do core platformy. Vývojáři, kteří potřebují validovat PO čísla nebo fakturační pravidla, mohou nyní pracovat čistě na serverové vrstvě s plnou funkční logikou v jedné Shopify Function.
  zdroje:
    - title: "Cart and Checkout Validation adds billing address and PO number error targets — Shopify Changelog"
      url: "https://shopify.dev/changelog/cart-and-checkout-validation-adds-billing-address-and-po-number-error-targets"
    - title: "Address Autocomplete and Validation Improvements — Shopify Changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/address-autocomplete-validation-improvements/"
    - title: "Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Cart/Checkout Validation Functions umí nyní cílit chyby na billing address a PO number."
tagy: [validation, functions, checkout, billing, b2b]
---

## Co se mění
**Cart and Checkout Validation Functions** v API 2026-04 podporují cílení error messages na nová pole — `billing_address` (oddělená validace fakturační adresy) a `po_number` (purchase order number, B2B field). Dříve byly errors omezené na shipping a line items.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions deployuje typicky merchant nebo agency, ne my. Pokud klient na checkoutu validuje custom billing/PO logikou, je to relevantní pro jeho dev tým.
