---
date: 2026-05-01
title: "Tracking inventury na lokacích, které nefulfillují"
title_en: "Track inventory that isn't for sale or fulfillment"
slug: track-inventory-locations-without-fulfillment
zdroj: https://changelog.shopify.com/posts/manage-inventory-at-locations-without-activating-them-for-fulfillment
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). Tracking inventory na non-fulfillment lokacích rozšiřuje možnosti — typicky pro warehouse/skladovací prostory bez prodeje."
tldr: "On-hand inventura lze nyní zobrazit a upravovat na lokacích, které neslouží fulfillmentu — vizuální indikátor ukazuje 'not used for fulfillment'."
tagy: [inventory, location, warehouse]
---

## Co se mění
Merchant může nyní **trackovat on-hand inventory** na lokacích, které **nejsou aktivované pro fulfillment** — typicky externí sklady, vratná skladovací místa, distribuční huby. Vizuální indikátor v Adminu odlišuje takové lokace od fulfillment lokací.

## Dopad pro nás
**Pro vývojáře:**
Naše inventory queries (`inventoryActivate`, `getInventoryItemBySku`, `setInventoryOnHandQuantities`) mohou nově vracet/upravovat data i pro non-fulfillment lokace. Pokud naše sync flow filtruje location by `fulfillmentService` flag, je dobré zkontrolovat, jestli tato data nově nejsou potřeba.

**Pro PM / PO:**
Užitečné pro klienty s komplexní distribuční sítí — nemusí každou lokaci aktivovat pro fulfillment, jen aby viděli stav inventury.

## Použití v Integrátoru
**Možná** — záleží, jak naše sync flow handluje location filter. Doporučuji audit při dalším upgrade inventory integrace.
