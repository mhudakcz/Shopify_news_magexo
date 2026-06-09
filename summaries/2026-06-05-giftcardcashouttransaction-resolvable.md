---
date: 2026-06-05
title: "GiftCardCashOutTransaction nově dostupný v GraphQL Admin API 2026-07"
title_en: "GiftCardCashOutTransaction is now resolvable from GiftCardTransaction"
slug: giftcardcashouttransaction-resolvable
zdroj: https://shopify.dev/changelog/giftcardcashouttransaction-now-resolvable-from-giftcardtransaction
shrnuto_dne: 2026-06-09
kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se gift card transaction tracking — relevantní pro klienty s gift cards flow."
dotcene_klienty: []
souvisejici: [multi-currency-gift-cards]
kontext:
  background: |
    V GraphQL Admin API jsou transakce na dárkových kartách (gift cards) reprezentovány rozhraním `GiftCardTransaction`. Toto rozhraní slouží jako společný základ pro různé typy pohybů na kartě — dobití (credit), čerpání (debit) a další operace. Každá transakce nese informace o výši a měně pohybu a je dostupná přes field `transactions` na objektu `GiftCard`.

    Do API verze 2026-04 (včetně) byly výběry hotovosti z gift card zůstatku přes POS terminál (tzv. cash-out) klasifikovány jako `GiftCardDebitTransaction` — stejný typ jako běžné nákupy zboží. Toto sloučení znemožňovalo na úrovni API jednoznačně rozlišit, zda byl zůstatek spotřebován na nákup, nebo vyplacen jako hotovost zákazníkovi. Cash-out operace přitom mají odlišný daňový a účetní charakter než standardní čerpání karty.

    API verze 2026-07 zavádí nový konkrétní typ `GiftCardCashOutTransaction`, který implementuje rozhraní `GiftCardTransaction`. Nový typ jednoznačně identifikuje výběry hotovosti v POS flow. Pro rozlišení jednotlivých typů transakcí v query je doporučeným přístupem použití `__typename` — standardního GraphQL introspection pole — v kombinaci s inline fragmenty. Takto lze v jediném dotazu zpracovat různé podtypy transakcí bez nutnosti oddělených volání.

    Pro systémy, které sledují historii transakcí gift cards (účetní integrace, loyalty platformy, ERP synchronizace), je nový typ příležitostí zpřesnit kategorizaci pohybů. V API verzích 2026-04 a starších zůstává chování nezměněno — cash-out transakce jsou nadále vráceny jako `GiftCardDebitTransaction`.

  zdroje:
    - title: "Shopify Changelog: GiftCardCashOutTransaction resolvable"
      url: "https://shopify.dev/changelog/giftcardcashouttransaction-now-resolvable-from-giftcardtransaction"
    - title: "GiftCardCashOutTransaction — Shopify Admin GraphQL API 2026-07"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/GiftCardCashOutTransaction"
    - title: "Multi-currency gift cards: prodej v měně zákazníka"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multi-currency-gift-cards/"
  generated_at: 2026-06-09T00:00:00Z
  model: claude-sonnet-4-6
tldr: "API 2026-07 přidává GiftCardCashOutTransaction jako nový subtype GiftCardTransaction, který odlišuje POS cash-out výběry od běžného čerpání karty. Dotazuje se pomocí __typename."
tagy: [gift-card, transaction, admin]
zdroj_kanal: dev-changelog
---

## Co se mění

Od API verze **2026-07** je k dispozici nový typ `GiftCardCashOutTransaction` jako součást rozhraní `GiftCardTransaction`. Umožňuje přesně identifikovat transakce, při nichž byl zůstatek dárkové karty vyplacen zákazníkovi v hotovosti přes POS.

V předchozích verzích (2026-04 a starší) byly cash-out transakce zahrnuty pod `GiftCardDebitTransaction` společně se standardními nákupy — nový typ je z nich tedy vyděluje.

Doporučený způsob dotazování používá `__typename`:

```graphql
giftCard(id: "...") {
  transactions(first: 10) {
    nodes {
      __typename
      ... on GiftCardCashOutTransaction {
        id
        amount { amount currencyCode }
      }
    }
  }
}
```

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-02 | Změna oznámena v Shopify Changelog |
| 2026-07-01 | API verze 2026-07 dostupná (standardní čtvrtletní release) |
| 2026-04 a starší | Cash-out transakce nadále vraceny jako `GiftCardDebitTransaction` — beze změny |

## Dopad pro nás

**Pro vývojáře:**
Pokud naše integrace čte historii transakcí gift cards (field `giftCard.transactions`), je vhodné v dotazu přidat handling pro `GiftCardCashOutTransaction`. V API 2026-07+ bude tento nový `__typename` hodnota přítomna v datech; bez inline fragmentu aplikace takový záznam zpracuje jen přes pole společná celému rozhraní `GiftCardTransaction` (id, amount). Žádná breaking change — stávající kód bude fungovat, ale nerozliší cash-out od debit.

**Pro PM / PO:**
Nízká priorita. Změna je relevantní výhradně pro klienty provozující POS s cash-out funkcionalitou pro gift cards. Pro e-commerce-only provoz bez cash-out POS operací nemá praktický dopad.

## Použití v Integrátoru

**Možná** — pokud klient využívá gift cards a provozuje POS s možností výběru zůstatku v hotovosti, měla by integrace po upgradu na API 2026-07 rozlišovat `GiftCardCashOutTransaction` od `GiftCardDebitTransaction`. Doporučujeme prověřit stávající gift card transaction queries a případně doplnit inline fragment pro nový typ, aby bylo účetní/ERP reportování přesné.
