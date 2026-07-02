---
date: 2026-07-01
title: "GiftCard nyní má lineItem pole v Admin API 2026-07 — link na originating order"
title_en: "New lineItem field on the GiftCard GraphQL object"
slug: giftcard-lineitem-field-admin-api
zdroj: https://shopify.dev/changelog/new-lineitem-field-on-the-giftcard-graphql-object
shrnuto_dne: 2026-07-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor pracuje s GiftCard objekty (např. pro reportování nebo audit), může nové pole využít k dohledání objednávky, z níž dárková karta vzešla."
dotcene_klienty: []
souvisejici:
  - "gift-card-cashout-pos"
  - "line-item-components-draft-orders-customer-account"
  - "draft-order-custom-discount-presentment-currency"
tldr: "Admin GraphQL API 2026-07 přidává pole lineItem na objekt GiftCard — vrací přímý odkaz na řádek objednávky, který dárkovou kartu vytvořil, nebo null pro manuálně vydané karty."
tagy: [gift-card, line-item, order, admin-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    GiftCard je objekt v Shopify Admin GraphQL API reprezentující dárkovou kartu. Dárková karta může vzniknout dvěma způsoby: automaticky jako součást objednávky (zákazník si koupí dárkovou kartu jako produkt) nebo manuálně přes admin rozhraní bez vazby na konkrétní objednávku.

    Do API verze 2026-07 existoval na GiftCard objektu pouze obecný odkaz `order` (celá objednávka). Chyběl přímý odkaz na konkrétní `LineItem` — řádek objednávky — který dárkovou kartu inicioval. Nové pole `lineItem` tento gap zaplňuje a vrací přesně ten řádek objednávky (typ `LineItem`), jenž byl zdrojem vytvoření dárkové karty.

    Pole je nullable: pokud byla karta vydána manuálně (nikoli přes objednávku), vrací `null`. Toto chování je konzistentní s existujícím polem `order`, které se chová stejně. Společně poskytují úplný kontext o původu dárkové karty — od celé objednávky až po konkrétní zakoupený produkt.

    Praktický dopad je zejména pro vývojáře budující reporty, auditní nástroje nebo reconciliation logiku kolem dárkových karet. Nové pole umožňuje traceability bez nutnosti joinovat data přes order a poté iterovat přes line items.
  zdroje:
    - title: "Shopify: New lineItem field on the GiftCard GraphQL object"
      url: "https://shopify.dev/changelog/new-lineitem-field-on-the-giftcard-graphql-object"
    - title: "Shopify Admin GraphQL API: GiftCard object (2026-07)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/GiftCard"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Admin GraphQL API verze **2026-07** přidává nové pole `lineItem` na objekt `GiftCard`.

**Nové pole:**

| Pole | Typ | Popis |
|------|-----|-------|
| `lineItem` | `LineItem` (nullable) | Řádek objednávky, který inicioval vytvoření dárkové karty. Vrací `null` pro manuálně vydané karty. |

Pole doplňuje existující pole `order` (odkaz na celou objednávku) a spolu s ním poskytuje kompletní traceability — lze zjistit nejen jaká objednávka dárkovou kartu vytvořila, ale i konkrétní zakoupený produkt (line item).

**Příklad dotazu:**

```graphql
query {
  giftCard(id: "gid://shopify/GiftCard/123456") {
    id
    code
    balance {
      amount
      currencyCode
    }
    lineItem {
      id
      title
      quantity
      originalUnitPrice {
        amount
        currencyCode
      }
    }
    order {
      id
      name
    }
  }
}
```

Pokud byla dárková karta vydána manuálně, `lineItem` i `order` vrátí `null`.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Zveřejněno v changelog |
| 2026-07-01 | Dostupné v Admin GraphQL API verze 2026-07 |

Změna je **additivní** (přidání nového pole) — žádná breaking change, žádná akce nutná.

## Dopad pro nás

Dopad je **nízký** a nevyžaduje okamžitou akci. Změna je čistě additivní.

Výhodné využití nastává v těchto scénářích:
- **Auditní logy dárkových karet** — lze přesně dohledat, který produkt v které objednávce dárkovou kartu vygeneroval
- **Reconciliation** — při párování dárkových karet s transakcemi odpadá nutnost joinovat přes order a iterovat line items
- **Reporty** — lze filtrovat a rozlišovat dárkové karty z objednávek vs. manuálně vydané

Pro manuálně vydané dárkové karty (typicky promo, kompenzace) pole vrátí `null` — toto chování je záměrné a konzistentní s polem `order`.

## Použití v Integrátoru

Pokud integrátor dotazuje `GiftCard` objekty v Admin API (např. pro synchronizaci, reportování nebo audit), lze nové pole `lineItem` zahrnout do existujících dotazů pro obohacení dat o kontext objednávky.

Doporučení: přidat `lineItem { id title }` do GiftCard fragmentů tam, kde se dárkové karty auditují nebo exportují. Nejedná se o kritickou změnu — lze doplnit při příštím relevantnějším update dotazů.
