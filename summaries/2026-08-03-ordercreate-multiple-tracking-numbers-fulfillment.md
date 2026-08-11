---
date: 2026-08-03
title: "orderCreate mutation podporuje více tracking numbers per fulfillment"
title_en: "The orderCreate mutation now supports multiple tracking numbers for each fulfillment"
slug: ordercreate-multiple-tracking-numbers-fulfillment
zdroj: https://shopify.dev/changelog/order-create-fulfillment-tracking-numbers
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-08-11

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-08-03

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme fulfillment methods (createFulfillment, getFulfillmentOrderByOrderId atd.); při importu historických objednávek přes orderCreate se split shipmentem by šlo zapsat víc tracking numbers najednou bez následné update mutace."
dotcene_klienty: []

souvisejici: [mark-fulfillments-delivered-without-tracking, shipping-line-fulfillmentorderlineitem, verified-tracking-shopify-collective]

tldr: "orderCreate mutation přijímá nové pole trackingNumbers na fulfillmentu, takže při importu objednávek lze nastavit víc tracking čísel pro multi-package shipment najednou, bez nutnosti dodatečné aktualizace."

tagy: [admin-graphql-api, ordercreate, fulfillment, tracking, multi-package]

kontext:
  background: |
    Mutace orderCreate slouží k programovému vytváření objednávek přímo v Shopify — typicky při migraci historických dat z jiného systému, importu objednávek z externího prodejního kanálu nebo zpětném zápisu objednávek vyřízených mimo Shopify. Součástí vstupu je i pole fulfillments, kterým lze rovnou při vytvoření objednávky označit, co už bylo vyexpedováno, včetně informací o dopravci a trackingu.

    Do teď šlo na fulfillmentu uvést jen jedno tracking number přes pole trackingNumber. To dostačovalo pro jednoduché zásilky, ale nepokrývalo běžný scénář multi-package shipmentů — objednávek rozdělených do víc balíků (split fulfillment), kde dopravce vygeneruje samostatné tracking číslo pro každý balík. Integrace, které při importu historických objednávek chtěly zachytit všechna tracking čísla, musely po orderCreate volat další mutaci na doplnění zbylých čísel.

    Nové pole trackingNumbers na OrderCreateFulfillmentInput přijímá pole stringů a chová se stejně jako už existující FulfillmentTrackingInput používaný jinde v API — trackingCompany se vztahuje na celé pole tracking čísel jednotně. Změna je zpětně kompatibilní: pokud je vyplněné jak singulární trackingNumber, tak plurální trackingNumbers, má přednost singulární hodnota, takže stávající integrace nepotřebují žádnou úpravu.
  zdroje:
    - title: "Shopify: The orderCreate mutation now supports multiple tracking numbers for each fulfillment"
      url: "https://shopify.dev/changelog/order-create-fulfillment-tracking-numbers"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Mutace `orderCreate` v Admin GraphQL API (od verze 2026-10) přijímá na vstupu `fulfillments` nové pole `trackingNumbers` typu list stringů:

```graphql
trackingNumbers: ["1Z999AA10123456784", "1Z999AA10123456785"]
```

Pole doplňuje dosavadní singulární `trackingNumber` a je určené právě pro multi-package shipmenty — objednávky rozdělené dopravcem do víc balíků, z nichž každý má vlastní tracking číslo. `trackingCompany` zůstává jedno pro celý fulfillment a vztahuje se na všechna zadaná tracking čísla. Pokud integrace vyplní obě pole zároveň, vyhrává singulární `trackingNumber` — takže existující kód, který o novém poli neví, se chová nezměněně.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-08-03 | Pole `trackingNumbers` dostupné v Admin GraphQL API a Admin REST API od verze 2026-10 |

## Dopad pro nás

**Pro vývojáře:** Týká se výhradně scénáře importu/migrace objednávek přes `orderCreate` — typicky při zavádění nové integrace pro klienta s historickými daty z jiného systému, nebo při zpětném zápisu objednávek vyřízených mimo Shopify. Pokud takový import obsahuje split shipmenty s víc tracking čísly, lze je nově zapsat rovnou v jedné mutaci místo následného doplnění přes samostatnou update mutaci.

**Pro PM / PO:** Žádná viditelná UI změna pro merchanty ani zákazníky. Relevantní jen technicky, při návrhu importních skriptů nebo migrací pro nové projekty.

## Použití v Integrátoru

Možná — pokud v budoucnu budeme importovat historické objednávky se split shipmenty přes `orderCreate`, ušetří to jednu doplňkovou mutaci na dopsání zbylých tracking čísel.
