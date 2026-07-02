---
date: 2026-07-01
title: "discountedUnitPrice na DraftOrderLineItem v CAA deprecated — použij approximateDiscountedUnitPrice"
title_en: "discountedUnitPrice on DraftOrderLineItem Customer Account API deprecation"
slug: discountedunitprice-draftorderlineitem-caa-deprecated
zdroj: https://shopify.dev/changelog/discountedunitprice-on-draftorderlineitem-customer-account-api-deprecation
shrnuto_dne: 2026-07-02
kategorie: [deprecation]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor dotazuje DraftOrderLineItem v Customer Account API a čte per-unit cenu po slevě, je třeba přejít na approximateDiscountedUnitPrice."
dotcene_klienty: []
souvisejici:
  - "draft-order-custom-discount-presentment-currency"
  - "draftorder-discount-warning-pricerule-removed"
  - "metafields-definition-required-customer-account-api"
tldr: "Pole discountedUnitPrice na DraftOrderLineItem v Customer Account API je deprecated od 2026-07 — nahraď ho polem approximateDiscountedUnitPrice, které počítá přibližnou jednotkovou cenu po slevě jako discountedTotal / quantity."
tagy: [draft-order, discount, deprecation, customer-account-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Customer Account API umožňuje zákazníkům přistupovat k vlastním datům včetně draft orders. Objekt DraftOrderLineItem obsahuje pole pro práci s cenami a slevami na úrovni jednotlivých řádků objednávky.

    Pole discountedUnitPrice původně vracelo slevenou cenu za kus. Shopify toto pole deprecuje ve verzi API 2026-07 a nahrazuje ho novým polem approximateDiscountedUnitPrice, které výsledek počítá jako discountedTotal dělený quantity — tedy průměrnou/přibližnou jednotkovou cenu po aplikaci všech slev.

    Praktický dopad je minimální: funkčnost zůstává zachována, pouze se mírně mění způsob výpočtu (explicitní dělení místo přímé hodnoty). Pro většinu use-cases je výsledek totožný. Akce je potřeba pouze v kódu, který explicitně čte pole discountedUnitPrice z DraftOrderLineItem přes Customer Account API.
  zdroje:
    - title: "Shopify: discountedUnitPrice on DraftOrderLineItem Customer Account API deprecation"
      url: "https://shopify.dev/changelog/discountedunitprice-on-draftorderlineitem-customer-account-api-deprecation"
    - title: "Shopify Docs: DraftOrderLineItem (Customer Account API)"
      url: "https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Pole `discountedUnitPrice` na objektu `DraftOrderLineItem` v **Customer Account API** je deprecated od verze **2026-07**.

Náhradou je pole `approximateDiscountedUnitPrice` (typ `MoneyV2`, non-null), které počítá přibližnou cenu za kus po slevě jako:

```
approximateDiscountedUnitPrice = discountedTotal / quantity
```

Změna se týká **výhradně Customer Account API** (GraphQL handle `customer-account-graphql`). Admin API ani Storefront API nejsou dotčeny.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Pole `discountedUnitPrice` označeno jako deprecated v API 2026-07 |
| Budoucí verze | Pole bude odstraněno (konkrétní datum zatím neoznámeno) |

Shopify standardně dává vývojářům nejméně 12 měsíců mezi deprecation a odstraněním pole.

## Dopad pro nás

Dopad je **nízký**. Pole pouze mění název a způsob výpočtu — výsledná hodnota je pro standardní případy (jednotná sleva na celý řádek) prakticky identická.

Kontrola je potřeba pouze pokud:
- Kód dotazuje `DraftOrderLineItem` přes Customer Account API GraphQL
- A explicitně čte pole `discountedUnitPrice`

Pokud ano, stačí přejmenovat pole v GraphQL dotazu:

```graphql
# Před (deprecated)
draftOrderLineItems {
  discountedUnitPrice {
    amount
    currencyCode
  }
}

# Po
draftOrderLineItems {
  approximateDiscountedUnitPrice {
    amount
    currencyCode
  }
}
```

## Použití v Integrátoru

Pokud integrátor komunikuje s Customer Account API a zpracovává draft order line items (např. B2B draft order flow pro zákazníky), je vhodné ověřit, zda dotazy obsahují `discountedUnitPrice`. Pokud ano, přejdi na `approximateDiscountedUnitPrice`. Změna je čistě přejmenování — žádná logická změna zpracování dat není nutná.
