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

kontext:
  background: |
    Inventory adjustment je přímá ruční úprava skladového množství produktu prováděná v Shopify Adminu — na rozdíl od automatických pohybů vznikajících zpracováním objednávky nebo příjmem zboží. Shopify nabízí dva režimy: „Set To" (přímé nastavení na konkrétní hodnotu) a „Adjust By" (relativní přidání nebo odebrání s určením zdroje a cíle pohybu). Každá taková úprava je v API reprezentována jako část objektu InventoryAdjustmentGroup, který sdružuje dávku změn a nese metadata o jejich původu.

    Historicky byl audit inventory adjustments omezený — záznamy starší 180 dnů nebyly přes Admin API dostupné a informace o tom, kdo konkrétní změnu provedl a z jakého důvodu, se nezobrazovaly v UI konzistentně. Tato omezení vyplývala z původní architektury skladu před příchodem multi-location inventory. Shopify v rámci Winter 2026 a navazujících vydání systematicky tato omezení odstraňuje: nejprve zrušil 180denní cap na inventory history, nyní přidal plné údaje o autorovi, čase a poznámce přímo do workflow v Adminu.

    Z pohledu API jsou změny dostupné prostřednictvím objektu InventoryAdjustmentGroup v Admin GraphQL API — pole staffMember, reason, referenceDocumentUri a createdAt poskytují kompletní audit trail. Praktické uplatnění najde tato funkce zejména v retailovém a B2B prostředí, kde compliance a daňové audity vyžadují dlouhodobou a detailní evidenci pohybů zásob. Pro aplikace synchronizující sklad s externími systémy (WMS, ERP) to otevírá možnost přenášet i audit metadata, nejen samotná množství.
  zdroje:
    - title: "Shopify Changelog: Inventory adjustment workflow now with full change tracking"
      url: "https://changelog.shopify.com/posts/inventory-adjustment-workflow-now-with-full-change-tracking"
    - title: "InventoryAdjustmentGroup — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup"
    - title: "Inventory history bez 180-day cap (Comprehensive Inventory History)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/comprehensive-inventory-history/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
