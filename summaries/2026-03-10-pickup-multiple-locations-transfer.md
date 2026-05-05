---
date: 2026-03-10
title: "Pickup in store: auto-transfer z více lokací"
title_en: "Pickup in store can now transfer from multiple locations"
slug: pickup-multiple-locations-transfer
zdroj: https://changelog.shopify.com/posts/in-store-pickup-can-now-transfer-from-multiple-locations
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Inventory transfer + pickup flow. Pokud klient má multi-location setup, naše inventory queries můžou nově vidět auto-vytvořené transfers."
tldr: "Pickup orders nyní auto-vytvoří inventory transfers z více lokací, když single lokace nemá dost zboží — kompletní fulfillment přes location chain."
tagy: [pickup, inventory, transfer, multi-location]
---

## Co se mění
**Pickup in store** orders nyní automaticky vytvoří **inventory transfers z více lokací**, pokud single lokace nemá dostatek zboží pro complete fulfillment. Cíl: snížit počet selhaných pickups u multi-location klientů.

## Použití v Integrátoru
**Možná** — máme inventory methods. Auto-vytvořené transfers mohou být viditelné v našich queries (inventoryTransferDelete, atd.). Sledovat při sync flow.
