---
date: 2026-03-23
title: "Barcode support pro inventory shipments API"
title_en: "Adding barcode support to inventory shipments API"
slug: barcode-inventory-shipments
zdroj: https://shopify.dev/changelog/adding-barcode-support-to-inventory-shipments-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem, getInventoryItemBySku). Inventory shipments API je samostatný flow pro warehouse transfers — pokud klient má warehouse/3PL, pravděpodobně relevantní."
dotcene_klienty: []

tldr: "API 2026-04 přidává barcode pole a inventoryShipmentSetBarcode mutaci pro inventory shipments."
tagy: [inventory, barcode, shipment, warehouse]
---

## Co se mění
API verze **2026-04** přidává pole `barcode` na inventory shipments a mutaci `inventoryShipmentSetBarcode` pro labeling shipmentů. Cíl: usnadnit tracking inventory transferů mezi sklady přes barcode skenery.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše inventory methods (`updateInventoryItem`, `setInventoryOnHandQuantities`) jsou na inventory levels, ne shipments. Pokud klient potřebuje warehouse transfer flow s barcode trackingem, mutace je nová možnost.

**Pro PM / PO:**
Vhodné pro klienty se sklady (multi-location) — lepší tracking pohybu zboží.

## Použití v Integrátoru
**Možná** — záleží na klientovi. Pokud nějaký B2B/Plus klient má warehouse transfers s barcode integrací, přidat příslušnou metodu.
