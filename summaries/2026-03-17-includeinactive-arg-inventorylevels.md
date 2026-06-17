---
date: 2026-03-17
title: "includeInactive argument pro inventoryLevels v 2026-04"
title_en: "Add includeInactive argument to inventoryLevels and inventoryLevel fields"
slug: includeinactive-arg-inventorylevels
zdroj: https://shopify.dev/changelog/add-includeinactive-argument-to-inventorylevels-and-inventorylevel-fields
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme inventory methods. Argument includeInactive umožňuje query načíst i deaktivované inventory levels (defaultně skryté)."
dotcene_klienty: []
souvisejici: [isactive-field-inventorylevel]

kontext:
  background: |
    InventoryLevel je objekt v Shopify Admin GraphQL API, který propojuje konkrétní skladovou položku (InventoryItem) s konkrétní lokací (Location) a sleduje množství zásob v různých stavech — dostupné, fyzické, příchozí nebo objednané. Každá kombinace položky a lokace tvoří jeden InventoryLevel. Pole `isActive` pak určuje, zda daná lokace aktivně sleduje a spravuje zásoby daného produktu.

    Shopify zavedl koncept aktivních a neaktivních inventory levels zejména s rozvojem multi-location inventory, kdy merchant může mít desítky provozoven nebo skladů. Lokace lze prostřednictvím mutace `inventoryDeactivate` dočasně nebo trvale vypnout — záznamy o zásobách zůstávají zachovány pro historické účely, ale do dostupnosti se nezapočítávají. Do API verze 2026-04 nebylo možné tyto neaktivní záznamy přes dotazy přímo získat.

    Nový argument `includeInactive: Boolean` na polích `inventoryLevels` a `inventoryLevel` dává vývojářům možnost explicitně zahrnout neaktivní záznamy do výsledků dotazu. Výchozí hodnota `false` zajišťuje plnou zpětnou kompatibilitu — stávající queries fungují beze změny. Hodnota `true` je vhodná pro auditní a analytické scénáře: přehled uzavřených skladů, reconciliation inventury nebo zobrazení historického stavu zásob. Tato změna úzce navazuje na přidání pole `isActive` na typ InventoryLevel ve stejné verzi API.
  priklad: |
    query {
      inventoryItem(id: "gid://shopify/InventoryItem/123") {
        inventoryLevels(first: 10, includeInactive: true) {
          edges {
            node {
              location { name }
              isActive
              quantities(names: ["available"]) { name quantity }
            }
          }
        }
      }
    }
  zdroje:
    - title: "Add includeInactive argument to inventoryLevels and inventoryLevel fields — Shopify Changelog"
      url: "https://shopify.dev/changelog/add-includeinactive-argument-to-inventorylevels-and-inventorylevel-fields"
    - title: "InventoryLevel — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel"
    - title: "isActive pole na InventoryLevel v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/isactive-field-inventorylevel/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "API 2026-04: argument includeInactive umožňuje query inactive inventory levels."
tagy: [inventory, inventory-level, query]
editions_release: spring-2026
---

## Co se mění
Pole `inventoryLevels` a `inventoryLevel` v Admin GraphQL API verze **2026-04** mají volitelný argument `includeInactive: Boolean`. Defaultně `false` — vrátí jen aktivní levels (kompatibilní s předchozím chováním). Při `true` zahrne i deaktivované.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Ano** — máme inventory methods. Defaultní chování zůstává — backwards compatible. Pokud chceme audit/history view, lze argument využít.

## Související
- [isActive pole na InventoryLevel](../zmena/2026-03-17-isactive-field-inventorylevel/)
