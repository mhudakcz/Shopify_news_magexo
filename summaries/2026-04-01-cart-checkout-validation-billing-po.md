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

tldr: "Cart/Checkout Validation Functions umí nyní cílit chyby na billing address a PO number."
tagy: [validation, functions, checkout, billing, b2b]
---

## Co se mění
**Cart and Checkout Validation Functions** v API 2026-04 podporují cílení error messages na nová pole — `billing_address` (oddělená validace fakturační adresy) a `po_number` (purchase order number, B2B field). Dříve byly errors omezené na shipping a line items.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions deployuje typicky merchant nebo agency, ne my. Pokud klient na checkoutu validuje custom billing/PO logikou, je to relevantní pro jeho dev tým.
