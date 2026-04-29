---
date: 2026-04-01
title: "Line item components na draft orders v Customer Account API"
title_en: "Line item component information now available for draft orders on the Customer Account API"
slug: line-item-components-draft-orders-customer-account
zdroj: https://shopify.dev/changelog/line-item-components-draft-orders-customer-account-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: true

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Customer Account API (frontend pro logged-in zákazníky). Máme draft order methods v Admin API, ale Customer Account API endpointy přímo nepoužíváme. Pokud klient buduje custom customer account UI, je to relevantní."
dotcene_klienty: []

tldr: "Customer Account API 2026-04 přidává components pole na DraftOrderLineItem a flattenComponents argument."
tagy: [customer-account, draft-order, line-item, components]
---

## Co se mění
Customer Account API verze **2026-04** přidává pole `components` na typ `DraftOrderLineItem` a argument `flattenComponents` na queries. Komponenty reprezentují sub-položky line itemu (typicky bundle s vícero produktů). `flattenComponents: true` rozbalí bundle do plochého seznamu.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud klient buduje vlastní customer account UI (myAccount stránka pro logged-in zákazníky) a zobrazuje tam draft orders s bundles, lze nově číst rozpad na komponenty.

**Pro PM / PO:**
Vhodné pro B2B/Plus klienty, kde Draft Orders fungují jako "quotation" — zákazník vidí v účtu detail jednotlivých komponent bundlu.

## Použití v Integrátoru
**Možná** — Admin API draft orders používáme aktivně (`getDraftOrderDetail`, `calculateDraftOrder` atd.). Customer Account API je oddělené API; pokud nějaký klient ho integruje, hodí se. Aktuálně nemáme přímé použití.
