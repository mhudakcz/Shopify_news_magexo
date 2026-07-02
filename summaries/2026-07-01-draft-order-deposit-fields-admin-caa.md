---
date: 2026-07-01
title: "Draft order deposit fields v Admin API + Customer Account API 2026-07 (Plus only)"
title_en: "Draft order deposit fields now available in GraphQL Admin API and Customer Account API"
slug: draft-order-deposit-fields-admin-caa
zdroj: https://shopify.dev/changelog/draft-order-deposit-fields-now-available-in-the-admin-and-customer-account-graphql-apis
shrnuto_dne: 2026-07-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "B2B draft order flow v integrátoru může těžit z deposit polí pro partial payment workflows na Plus merchantech."
dotcene_klienty: []
souvisejici:
  - dynamic-payment-terms-deposits-b2b
  - line-item-components-draft-orders-customer-account
  - draft-order-custom-discount-presentment-currency
tldr: "Shopify 2026-07 přináší deposit pole do Admin GraphQL API (zápis) a Customer Account API (čtení) pro draft orders — Shopify Plus only."
tagy: [draft-order, deposit, b2b, plus, admin-api, customer-account-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Draft orders jsou v Shopify mechanismus pro vytváření objednávek mimo standardní checkout — typicky využívané B2B merchants, velkoobchodníky nebo pro high-ticket prodeje. Deposits (zálohy) umožňují merchant vyžádat při potvrzení draft order pouze část celkové ceny, přičemž zbývající částka je splatná k pozdějšímu datu — například při odeslání zboží (due-on-fulfillment).

    Tato funkcionalita dosud nebyla dostupná přes API a merchants museli deposit logiku obcházet manuálně nebo přes workaroundy. S API verzí 2026-07 Shopify přidává do Admin GraphQL API nové pole `DraftOrderInput.deposit`, které apps využijí při vytváření nebo aktualizaci draft orders, a zároveň `draftOrder.deposit` (read-only) v Customer Account API, takže zákazníci uvidí detaily zálohy přímo ve svém účtu.

    Změna je omezena na Shopify Plus obchody a cílí primárně na B2B a high-ticket e-commerce. Pro developery to znamená možnost programaticky řídit partial payment workflows — nastavit výši zálohy, termín doplatku a vystavit zákazníkovi přehledný přehled platebních závazků. Bez integrace těchto polí apps nemohou plnohodnotně podporovat deposit flow přes draft orders.

  zdroje:
    - title: "Shopify: Draft order deposit fields now available in GraphQL Admin API and Customer Account API"
      url: "https://shopify.dev/changelog/draft-order-deposit-fields-now-available-in-the-admin-and-customer-account-graphql-apis"
    - title: "Shopify Docs: DraftOrderInput (2026-07)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/input-objects/DraftOrderInput"
    - title: "Shopify Docs: Customer Account API — draftOrder query (2026-07)"
      url: "https://shopify.dev/docs/api/customer/2026-07/queries/draftOrder"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify API verze **2026-07** přidává deposit podporu na dvou místech:

**Admin GraphQL API — zápis**
- Nové pole `DraftOrderInput.deposit` (typ `DepositInput`) v mutacích `draftOrderCreate` a `draftOrderUpdate`
- Apps mohou při vytvoření nebo editaci draft order nastavit požadovanou zálohu — výši splatnou okamžitě a podmínky pro doplatek

**Customer Account API — čtení**
- Nové read-only pole `draftOrder.deposit` v dotazu `draftOrder`
- Zákazníci přihlášení ke svému účtu vidí detaily zálohy: částku splatnou nyní a částku splatnou později (např. při fulfillmentu)

Obě změny jsou dostupné **pouze pro Shopify Plus** obchody.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Dostupné v API verzi 2026-07 |

## Dopad pro nás

Tato změna je relevantní pro projekty, kde:
- Merchant je na **Shopify Plus** a používá draft orders pro B2B nebo high-ticket prodeje
- Potřebujeme programaticky řídit **partial payment** workflow (záloha + doplatek)
- Zákazníci mají přístup k Customer Account API a potřebují vidět deposit detaily

Bez integrace těchto polí zůstávají deposit workflows na draft orders neautomatizované — merchant musí zálohu nastavovat ručně v adminu.

## Použití v Integrátoru

Pokud integrátor vytváří nebo synchronizuje draft orders pro Plus merchantů s B2B/wholesale flow, je vhodné přidat `deposit` pole do `DraftOrderInput` při volání mutací. Customer Account API část je čistě prezentační — relevantní pro headless nebo custom account stránky, které zobrazují draft order detaily zákazníkovi.

Doporučený postup při implementaci:
1. Ověřit, zda je merchant na Plus plánu (bez Plus deposit pole vrátí chybu)
2. Přidat `deposit` do `DraftOrderInput` s požadovanou výší zálohy a termínem doplatku
3. Volitelně zobrazit deposit detaily zákazníkovi přes Customer Account API `draftOrder.deposit`
