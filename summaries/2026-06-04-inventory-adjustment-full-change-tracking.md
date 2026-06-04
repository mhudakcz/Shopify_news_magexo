---
date: 2026-06-04
title: "Inventory adjustment workflow s plným change tracking"
title_en: "Inventory adjustment workflow now with full change tracking"
slug: inventory-adjustment-full-change-tracking
zdroj: https://changelog.shopify.com/posts/inventory-adjustment-workflow-now-with-full-change-tracking
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). Plné change tracking u inventory adjustments je merchant UI feature, ale audit data jsou dostupné přes Admin API."
dotcene_klienty: []
souvisejici: [comprehensive-inventory-history]

tldr: "Inventory adjustments v Adminu mají nově plné change tracking — kdo, kdy, jakou hodnotu změnil, s notes. Component k existující rozšířené inventory history (180-day cap odstraněn). _Původně publikováno 7. 5. 2026 (audit doplnění)._"
tagy: [inventory, audit, change-tracking, admin]
---

## Co se mění
**Inventory adjustments** v Admin UI mají nyní **full change tracking**:
- **Kdo** udělal adjustment (staff member)
- **Kdy** (timestamp)
- **Co** (před → po hodnoty)
- **Note** field pro reason

Doplnění předchozího odstranění 180-day cap na inventory history — nyní data + plný audit context.

## Dopad pro nás
**Pro vývojáře:**
Audit data dostupná přes Admin API. Naše inventory sync flow do ERP může zahrnout audit metadata (kdo + reason note).

**Pro PM / PO:**
Pro retail klienty s compliance/audit requirements (Big Four účetnictví, daňové auditní stopy) = solidní argument.

## Použití v Integrátoru
**Možná** — pokud klient potřebuje audit context, lze rozšířit naše inventory sync.

## Související
- [180-day cap na inventory history odstraněn](../zmena/comprehensive-inventory-history/)
