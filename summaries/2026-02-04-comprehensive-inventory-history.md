---
date: 2026-02-04
title: "Inventory history bez 180-day cap"
title_en: "Comprehensive Inventory History"
slug: comprehensive-inventory-history
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (4 v naší integraci). Pokud klient chce auditní historii inventory změn delší než 180 dnů, nově lze."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Inventory adjustment history je auditní záznam všech změn skladových zásob — kdo, kdy, o kolik a z jakého důvodu upravil množství produktu na dané lokaci. Shopify tuto historii uchovává prostřednictvím objektu InventoryAdjustmentGroup v Admin GraphQL API, který sdružuje jednotlivé změny do logických dávek a zaznamenává jejich zdroj (aplikace nebo člen týmu).

    Do vydání Winter 2026 byl přístup k této historii omezen na posledních 180 dní. Toto omezení vycházelo z původní architektury inventory systému, který prošel zásadní přestavbou s příchodem multi-location inventory a nových API mutací. Rozšiřování auditních možností bylo postupné — v API 2026-04 přibyl například argument includeInactive na poli inventoryLevels nebo nové pole isActive na objektu InventoryLevel.

    Zrušení časového limitu má přímý dopad na scénáře jako jsou účetní odsouhlasení skladu, daňové audity, odhalování ztrát či forenzní analýzy pohybů zásob. Pro merchants s B2B nebo retailovým provozem, kde compliance požadavky vyžadují dlouhodobou evidenci, jde o zásadní změnu. Data jsou přístupná přes Admin API se scopem read_inventory a lze je exportovat nebo propojit s externími ERP systémy.

    Tato změna zapadá do širšího trendu, kdy Shopify posiluje auditní a reportingové možnosti na úrovni platformy — souběžně přibyl i plný change tracking v Admin UI pro inventory adjustments, který zobrazuje důvod a poznámku ke každé úpravě.
  priklad: |
    {
      inventoryAdjustmentGroup(id: "gid://shopify/InventoryAdjustmentGroup/123") {
        createdAt
        reason
        staffMember { firstName lastName }
        changes(first: 10) {
          edges { node { inventoryItem { id } location { name } } }
        }
      }
    }
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "InventoryAdjustmentGroup — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup"
    - title: "Inventory adjustment workflow s plným change tracking"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/inventory-adjustment-full-change-tracking/"
    - title: "isActive pole na InventoryLevel v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/isactive-field-inventorylevel/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify ruší 180-day cap na inventory adjustment history — plný auditní log dostupný."
tagy: [inventory, audit, history]
---

## Co se mění
Předchozí omezení **180 dnů na inventory adjustment history** je odstraněno. Lze dotazovat plný auditní log inventory změn (kdy, kým, na kolik, pro který item).

## Použití v Integrátoru
**Možná** — pokud klient chce audit/compliance/forensic features nad inventurou (např. odsouhlasení skladu, sledování ztrát), nově lze. Doporučuji to nabídnout B2B/retail klientům s compliance požadavky.
