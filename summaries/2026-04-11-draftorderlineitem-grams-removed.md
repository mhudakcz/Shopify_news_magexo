---
date: 2026-04-11
title: "DraftOrderLineItem.grams pole odstraněno v 2026-07"
title_en: "DraftOrderLineItem.grams field removed in 2026-07"
slug: draftorderlineitem-grams-removed
zdroj: https://shopify.dev/changelog/draftorderlineitemgrams-field-removed-in-2026-07
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 9 draft order methods (createDraftOrder, calculateDraftOrder, getDraftOrderDetail …). Pokud queries čtou grams přímo, musí migrovat na weight před upgradem API."
dotcene_klienty: []
souvisejici: [lineitem-weight-public-admin-api]

kontext:
  background: |
    DraftOrderLineItem je GraphQL objekt v Shopify Admin API reprezentující jednu položku v konceptu objednávky (draft order). Draft orders slouží obchodníkům k ručnímu sestavení objednávky před její finalizací — typicky pro B2B quotace, custom objednávky nebo manuální fakturaci. Každá položka nese informace o produktu, množství, ceně i fyzické váze.

    Pole `grams` existovalo v Shopify API jako celočíselný skalar po mnoho let. Jeho zásadní omezení spočívalo v tom, že podporovalo pouze jednu jednotku a mohlo přetéct u položek s velkou hmotností. Shopify proto pole deprecated a nahradilo ho strukturovaným objektem `weight { value, unit }`, který flexibilně podporuje různé jednotky (g, kg, lb, oz) a odpovídá standardu používanému napříč celou platformou. Deprecace trvala více než 8 let, než bylo pole v API 2026-07 skutečně odstraněno.

    Změna se týká i příbuzného typu `LineItem` v Admin API, kde je pole `weight` nově veřejně dostupné od verze 2026-07. Systémy integrující Shopify a zpracovávající váhu pro výpočet dopravy nebo propojení s ERP musí konverzi na `weight { value, unit }` provést na aplikační vrstvě, pokud downstream systémy vyžadují gramy jako konkrétní jednotku.

    Odstranění `grams` je součástí širšího úsilí Shopify o modernizaci Admin GraphQL API — nahrazování jednoduchých skalárních polí strukturovanými objekty, které jsou rozšiřitelné a mezinárodně použitelné bez ztráty přesnosti.
  zdroje:
    - title: "Shopify Changelog: DraftOrderLineItem.grams field removed in 2026-07"
      url: "https://shopify.dev/changelog/draftorderlineitemgrams-field-removed-in-2026-07"
    - title: "Shopify Docs: DraftOrderLineItem (Admin GraphQL API)"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem"
    - title: "Shopify Changelog: LineItem.weight v Admin API od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-weight-public-admin-api/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Pole grams na DraftOrderLineItem je v API 2026-07 odstraněno — nutné migrovat na weight."
tagy: [draft-order, line-item, weight, breaking]
editions_release: spring-2026
---

## Co se mění
V API verze **2026-07** je deprecated pole `grams` na typu `DraftOrderLineItem` **odstraněno bez náhrady** ve stejném formátu — místo něj se používá pole `weight { value, unit }`.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, `grams` odstraněno

## Dopad pro nás
**Pro vývojáře:**
Před upgradem na API 2026-07 prověřit všechny GraphQL queries v naší integraci (typicky `getDraftOrderDetail`, `getDraftOrderInvoicePreview`) — pokud selektují `lineItems { grams }`, je nutné nahradit za `lineItems { weight { value unit } }`. Nezapomenout také na všechny utility/transformace, které pracují s vahou v gramech.

**Pro PM / PO:**
Klienti používající Draft Orders přes naši integraci (B2B, custom orders, manuální fakturace) musí být součástí migration plánu na 2026-07. Bez migrace nepůjdou volat naše draft order endpointy.

## Použití v Integrátoru
**Ano** — máme 9 metod. Před upgradem grep `grams` v draft order queries a nahradit.

## Rizika a edge cases
- Pokud máme integrační logiku s ERP/účetním systémem, který očekává váhu v gramech, je nutné konvertovat z `weight { value, unit }` na gramy v aplikační vrstvě
- Mocked testy s fixturami obsahující `grams` budou muset být aktualizované

## Související
- [LineItem.weight v Admin API](../zmena/2026-04-13-lineitem-weight-public-admin-api/)
