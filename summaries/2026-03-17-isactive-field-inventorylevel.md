---
date: 2026-03-17
title: "isActive pole na InventoryLevel v 2026-04"
title_en: "Add isActive field to InventoryLevel"
slug: isactive-field-inventorylevel
zdroj: https://shopify.dev/changelog/add-isactive-field-to-inventorylevel
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). isActive flag rozliší aktivní a deaktivované inventory levels — užitečné pro filtraci."
dotcene_klienty: []
souvisejici: [includeinactive-arg-inventorylevels]

kontext:
  background: |
    Objekt `InventoryLevel` v Shopify Admin GraphQL API představuje vazbu mezi konkrétní skladovou položkou (`InventoryItem`) a lokací (`Location`). Každá tato vazba nese různé stavy množství — dostupné, na skladě, rezervované, příchozí — a slouží jako základ pro řízení dostupnosti produktů napříč prodejními kanály.

    Před verzí API 2026-04 platilo, že při deaktivaci sledování zásob pro danou lokaci bylo množství na úrovni vynulováno a samotný `InventoryLevel` záznam přestal být přes API dostupný. Toto chování ztěžovalo audit a historické analýzy, protože data o deaktivovaných lokacích jednoduše zmizela. Nová verze toto mění — deaktivace již množství nečistí a záznamy zůstávají přístupné.

    Pole `isActive: Boolean!` dává aplikacím explicitní signál, zda je daný `InventoryLevel` skutečně sledován a zapojuje se do výpočtu dostupnosti zboží. Aktivní úrovně lze měnit a počítají se do fulfillmentu; neaktivní slouží jako historický záznam nebo jako evidence pro lokace, které zatím sledování neprovádějí. Aktivaci a deaktivaci řídí mutace `inventoryActivate` a `inventoryBulkToggleActivation`.

    Tato změna úzce souvisí s přidáním argumentu `includeInactive` na poli `inventoryLevels`, který umožňuje v dotazu explicitně vyžádat i deaktivované záznamy. Oba prvky dohromady posilují auditní a multi-location scénáře, kde merchant provozuje sklady, distribuční huby nebo lokace s různým stavem aktivace.
  priklad: |
    query {
      inventoryLevel(id: "gid://shopify/InventoryLevel/123456") {
        id
        isActive
        location { name }
        quantities(names: ["available", "on_hand"]) {
          name
          quantity
        }
      }
    }
  zdroje:
    - title: "Shopify Changelog: Add isActive field to InventoryLevel"
      url: "https://shopify.dev/changelog/add-isactive-field-to-inventorylevel"
    - title: "InventoryLevel — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel"
    - title: "includeInactive argument pro inventoryLevels v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/includeinactive-arg-inventorylevels/"
    - title: "Tracking inventury na lokacích, které nefulfillují"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/track-inventory-locations-without-fulfillment/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "API 2026-04 přidává isActive boolean na InventoryLevel pro rozlišení aktivních a deaktivovaných úrovní."
tagy: [inventory, inventory-level, status]
editions_release: spring-2026
---

## Co se mění
Typ `InventoryLevel` v Admin GraphQL API verze **2026-04** má nové pole `isActive: Boolean`. Rozlišuje **aktivní** inventory levels (počítané do dostupnosti, mohou se měnit) od **deaktivovaných** (zachovaná historie, ale nepočítají se).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše inventory queries mohou nově filtrovat aktivní vs. neaktivní levels. Užitečné při sync inventury — neaktivní levels často naznačují uzavřené sklady, které netřeba synchronizovat.

**Pro PM / PO:**
Cleaner inventory data pro klienty s mnoha lokacemi.

## Použití v Integrátoru
**Ano** — máme `inventoryActivate` a další methods. Po upgrade na 2026-04 lze přidat `isActive` selektor do queries.

## Související
- [includeInactive argument na inventoryLevels](../zmena/2026-03-17-includeinactive-arg-inventorylevels/)
