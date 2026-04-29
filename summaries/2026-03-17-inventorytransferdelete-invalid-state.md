---
date: 2026-03-17
title: "inventoryTransferDelete: INVALID_STATE error pro běžící product import"
title_en: "inventoryTransferDelete adds INVALID_STATE error code for transfers with in-progress product import"
slug: inventorytransferdelete-invalid-state
zdroj: https://shopify.dev/changelog/inventorytransferdelete-adds-invalidstate-error-code-for-transfers-with-in-progress-product-import
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Inventory transfers nepoužíváme přímo, ale máme inventory methods. Pokud někdy přidáme inventory transfer endpoint, je nutné error handling."
dotcene_klienty: []

tldr: "API 2026-07: inventoryTransferDelete vrací INVALID_STATE pokud běží product import na zahrnutých produktech."
tagy: [inventory, transfer, error-handling]
---

## Co se mění
Mutace `inventoryTransferDelete` v API **2026-07** vrací nový error code `INVALID_STATE`, pokud transfer obsahuje produkty s **probíhajícím product importem**. Cíl: zabránit data inkonzistencím při paralelních operacích.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Použití v Integrátoru
**Možná** — inventory transfers nepoužíváme aktuálně, ale máme inventory methods. Pokud rozšíříme o transfer flow, error handling musí pokrývat `INVALID_STATE` (typicky retry s exponential backoff).
