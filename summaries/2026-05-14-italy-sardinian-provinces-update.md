---
date: 2026-05-14
title: "Updates italských provincií (Sardinie) — Gallura Nord-Est, Sulcis Iglesiente"
title_en: "Updates to Italy's Sardinian province definitions"
slug: italy-sardinian-provinces-update
zdroj: https://changelog.shopify.com/posts/italy-s-sardinian-province-definitions-updated
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše customer/order sync flow validuje province kódy pro IT adresy, je třeba update enum hodnot. Týká se klientů prodávajících do/z Itálie."
dotcene_klienty: []

tldr: "Updated province definitions reflektují administrativní obnovu Sardinie z června 2025. Gallura Nord-Est Sardegna (OT) nově selectable; Carbonia-Iglesias přejmenováno na Sulcis Iglesiente."
tagy: [italy, province, address, validation]
---

## Co se mění
Shopify aktualizuje **definice italských provincií** (Sardinie) — administrativní obnova z června 2025:
- **Gallura Nord-Est Sardegna (OT)** — nově dostupná jako selectable province
- **Carbonia-Iglesias → Sulcis Iglesiente** — rename

Týká se address validation, tax rules, shipping zones v IT.

## Použití v Integrátoru
**Možná** — pokud naše sync flow ukládá province kódy do ERP a klient prodává do/z Itálie, prověřit, že enum hodnoty obsahují nové názvy.
