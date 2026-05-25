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

tldr: "Pole grams na DraftOrderLineItem je v API 2026-07 odstraněno — nutné migrovat na weight."
tagy: [draft-order, line-item, weight, breaking]
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
