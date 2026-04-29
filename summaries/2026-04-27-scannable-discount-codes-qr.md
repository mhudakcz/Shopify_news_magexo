---
date: 2026-04-27
title: "Skenovatelné QR kódy pro slevové kódy v Adminu"
title_en: "Scannable discount codes"
slug: scannable-discount-codes-qr
zdroj: https://shopify.dev/changelog/scannable-discount-codes
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: true

ucinnost_od: null
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: ne
dukaz_integratoru: "Funkce je v Shopify Admin UI, ne v API. Naše discount methods (createDiscountCodeBasic, getDiscountCode) jsou nedotčené."
dotcene_klienty: []
souvisejici: []

tldr: "Adminu lze nyní generovat QR kódy slev — speciální znaky vyžadují dvojité URL encoding."
tagy: [discount, qr-code, admin-ui, marketing]
---

## Co se mění
V Shopify Adminu lze nyní generovat **QR kódy pro slevové kódy** přímo z UI. URL formát obsahuje samotný discount code; pokud kód obsahuje speciální znaky (mezery, hashe, plusy), je nutné použít **dvojité URL encoding** (jednou pro URL a podruhé v rámci QR payload).

## Dopad pro nás
**Pro vývojáře:**
Žádný API impact — funkce je čistě v Admin UI. Pokud bychom budovali nástroj generující vlastní QR kódy slev (např. v marketing toolu klienta), pozor na shodu URL encoding s tím, co dělá Shopify Admin.

**Pro PM / PO:**
Nice-to-have feature pro klienty, co tisknou letáky / in-store materiály. Stojí za zmínit při review marketing flowu klienta.

## Použití v Integrátoru
**Nepoužíváme** — funkce je v Admin UI, ne v API. Naše discount methods (`createDiscountCodeBasic`, `getDiscountCode`) jsou tím nedotčené.
