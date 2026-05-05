---
date: 2026-04-27
title: "Skenování QR slevových kódů v POS"
title_en: "Scan discount codes"
slug: pos-scan-discount-codes
zdroj: https://changelog.shopify.com/posts/scan-discount-codes-in-shopify-pos
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-side čtení QR kódů, navazuje na admin generování QR kódů pro slevy. Naše discount methods jsou nedotčené."
tldr: "Personál i zákazník mohou v POS aplikovat slevové kódy oskenováním QR kódu generovaného z Adminu — rychlejší checkout, méně chyb při ručním zadávání."
tagy: [pos, discount, qr-code]
souvisejici: [scannable-discount-codes-qr]
---

## Co se mění
POS dovoluje **oskenovat QR kód** s discount kódem. QR kódy generuje Admin (viz [Skenovatelné QR kódy slev](../zmena/scannable-discount-codes-qr/)), POS je čte. Spojuje admin a in-store flow.

## Použití v Integrátoru
**Nepoužíváme** — UI flow mezi Admin a POS. Naše discount API metody nedotčeny.
