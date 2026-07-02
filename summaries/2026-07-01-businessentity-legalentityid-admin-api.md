---
date: 2026-07-01
title: "BusinessEntity vystaví legalEntityId v Admin API 2026-07 — stabilní ID napříč shops/markets"
title_en: "BusinessEntity now exposes legalEntityId in the GraphQL Admin API"
slug: businessentity-legalentityid-admin-api
zdroj: https://shopify.dev/changelog/businessentity-now-exposes-legalentityid-in-the-admin-api
shrnuto_dne: 2026-07-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme s BusinessEntity (multi-entity merchants), legalEntityId umožňuje stabilní mapování legal entity na interní kódy nebo daňové systémy."
dotcene_klienty: []
souvisejici:
  - multiple-legal-entities-shopify-payments
  - editions-spring-2026-payments
  - tap-to-pay-multi-entity
tldr: "Od API verze 2026-07 vrací typ BusinessEntity nové pole legalEntityId (BigInt) — stabilní Central Legal Entity ID z Organizations Platform, které umožňuje konzistentní identifikaci téže legal entity napříč více shops a markets."
tagy: [business-entity, legal-entity, multi-entity, admin-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify BusinessEntity reprezentuje právní entitu merchantů — každý shop musí mít jednu primární entitu a může mít další pro provoz v různých jurisdikcích. Do API verze 2026-07 neexistovalo žádné stabilní, organizačně-centrální ID, které by propojovalo tutéž legal entity sdílenou přes více shops nebo markets.

    Nové pole `legalEntityId` (typ `BigInt`, nullable) vrací tzv. Central Legal Entity ID z Shopify Organizations Platform. Jde o ID na úrovni organizace — je tedy konzistentní bez ohledu na to, přes který shop nebo market se na entitu dotazujeme. Pokud entitě žádný Central Legal Entity záznam neodpovídá, pole vrátí `null`.

    Prakticky to znamená, že partner nebo app může snáze mapovat merchant legal entity na vlastní systémy (např. ERP kódy, daňové registry) a korelovat data z GraphQL Admin API s payloady daňových webhooků. Tento use case je obzvlášť relevantní pro setup s více obchody nebo v kombinaci s multi-entity payments, které Shopify představil v rámci Editions Spring '26.

    Dostupnost: API verze `2026-07` a `unstable`. Změna je čistě aditivní — existující queries nejsou ovlivněny.
  zdroje:
    - title: "Shopify: BusinessEntity now exposes legalEntityId in the GraphQL Admin API"
      url: "https://shopify.dev/changelog/businessentity-now-exposes-legalentityid-in-the-admin-api"
    - title: "Shopify Admin API: BusinessEntity object reference"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/BusinessEntity"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od API verze **2026-07** typ `BusinessEntity` v GraphQL Admin API vystavuje nové pole:

```
legalEntityId: BigInt
```

Pole vrací stabilní Central Legal Entity ID z Shopify Organizations Platform. Je nullable — pokud entitě neodpovídá žádný centrální záznam, vrátí `null`.

**Příklad query:**

```graphql
query {
  businessEntity(id: "gid://shopify/BusinessEntity/123456") {
    id
    legalEntityId
    companyName
    displayName
  }
}
```

**Klíčové vlastnosti:**
- Typ `BigInt` (nullable)
- Stabilní napříč shops a markets — stejná legal entity vrátí vždy stejné ID
- Koreluje s daňovými webhook payloady
- Dostupné od `2026-07` i v `unstable`

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Dostupné v API verzi `2026-07` a `unstable` |
| Ongoing | Pole je aditivní, žádný breaking change |

## Dopad pro nás

Změna je **čistě aditivní** — žádný stávající kód se nerozbije. Relevantní pouze pro apps nebo integrace, které pracují s `BusinessEntity` typem a potřebují identifikovat legal entity konzistentně přes více shops nebo markets.

Pro standardní single-shop merchanty bez multi-entity setupu je praktický dopad minimální — pole typicky vrátí `null`.

**Kdy se to hodí:**
- Mapování merchant legal entity na interní kódy v ERP/účetních systémech
- Korelace dat mezi Admin API a daňovými webhook payloady
- Apps cílené na merchants s multi-entity Shopify Payments (Editions Spring '26)

## Použití v Integrátoru

Pokud integrujeme s `BusinessEntity` v kontextu multi-entity merchantů, `legalEntityId` umožňuje stabilní referenci při ukládání nebo synchronizaci dat o legal entity. Konkrétní implementace závisí na tom, zda naši klienti využívají multi-entity payments nebo cross-shop operace. Pro standardní setup bez multi-entity Shopify Payments není akční krok potřeba.
