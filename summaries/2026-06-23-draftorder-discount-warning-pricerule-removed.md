---
date: 2026-06-23
title: "priceRule pole odstraněno z DraftOrderDiscountNotAppliedWarning v 2026-10"
title_en: "DraftOrderDiscountNotAppliedWarning.priceRule removed in GraphQL Admin API 2026-10"
slug: draftorder-discount-warning-pricerule-removed
zdroj: https://shopify.dev/changelog/remove-pricerule-from-draft-order-discount-warning
shrnuto_dne: 2026-06-23
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s draft orders a jejich validací slev, pole priceRule mohlo být součástí GraphQL dotazů na draftOrderCalculate nebo draftOrderCreate."
dotcene_klienty: []
souvisejici:
  - "draftorderlineitem-grams-removed"
  - "product-unavailable-buyer-location-warning"
  - "line-item-components-draft-orders-customer-account"
tldr: "Od API verze 2026-10 Shopify odstraní pole priceRule z typu DraftOrderDiscountNotAppliedWarning — apps musí přejít na přímá pole discountTitle a discountCode."
tagy: [draft-order, discount, deprecation, action-required, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Typ DraftOrderDiscountNotAppliedWarning je součástí GraphQL Admin API a vrací se jako warning při volání mutací draftOrderCalculate, draftOrderCreate a draftOrderUpdate. Slouží k informování o tom, že určitý slevový kód nebo pravidlo nebylo na draft order aplikováno — například kvůli neplatnosti kódu, nesplnění podmínek nebo konfliktu s jinou slevou.

    Historicky tato warning obsahovala vnořený objekt priceRule typu PriceRule, přes který bylo možné získat název slevy (priceRule { title }) a přidružené slevové kódy (priceRule { discountCodes { nodes { code } } }). Tento přístup byl redundantní, protože warning typ nyní exposuje stejná data přímo na svém root levelu prostřednictvím polí discountTitle a discountCode.

    Shopify v API verzi 2026-10 (účinná od 21. července 2026) pole priceRule zcela odstraní. Zároveň bude odstraněn i typ PriceRule z veřejného GraphQL schématu pro tuto API verzi. Jde o breaking change — každá app, která dotazuje priceRule uvnitř DraftOrderDiscountNotAppliedWarning, přestane fungovat správně a bude vracet chyby při volání dotčených mutací.

    Migrace je přímočará: stačí nahradit dotaz na priceRule { title } hodnotou discountTitle a priceRule { discountCodes { nodes { code } } } hodnotou discountCode. Tato přímá pole jsou dostupná již v aktuálních API verzích, takže migraci lze provést okamžitě bez čekání na 2026-10.
  zdroje:
    - title: "Shopify: DraftOrderDiscountNotAppliedWarning.priceRule removed in GraphQL Admin API 2026-10"
      url: "https://shopify.dev/changelog/remove-pricerule-from-draft-order-discount-warning"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

V GraphQL Admin API verzi **2026-10** Shopify odstraňuje:

- pole `priceRule` z typu `DraftOrderDiscountNotAppliedWarning`
- typ `PriceRule` z veřejného GraphQL schématu

Náhradní pole dostupná přímo na `DraftOrderDiscountNotAppliedWarning`:

| Odstraněno | Náhrada |
|---|---|
| `priceRule { title }` | `discountTitle` |
| `priceRule { discountCodes { nodes { code } } }` | `discountCode` |

**Před migrací:**
```graphql
... on DraftOrderDiscountNotAppliedWarning {
  priceRule {
    title
    discountCodes(first: 1) {
      nodes {
        code
      }
    }
  }
}
```

**Po migraci:**
```graphql
... on DraftOrderDiscountNotAppliedWarning {
  discountTitle
  discountCode
}
```

Změna se týká mutací `draftOrderCalculate`, `draftOrderCreate` a `draftOrderUpdate`.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-23 | Shopify zveřejnil changelog s oznámením odstranění |
| 2026-07-21 | Uvolnění API verze 2026-10 — pole `priceRule` přestane existovat |
| Do 2026-07-21 | Doporučený termín pro migraci dotazů |

Náhradní pole `discountTitle` a `discountCode` jsou dostupná v aktuálních API verzích — **migrace je možná okamžitě**.

## Dopad pro nás

Tento breaking change se týká jakékoli app nebo integrace, která:

1. Volá mutace `draftOrderCalculate`, `draftOrderCreate` nebo `draftOrderUpdate`
2. Zpracovává response warnings a čte z nich pole přes `priceRule`

Pokud taková integrace neproběhne aktualizaci před 21. červencem 2026 a přejde na API verzi 2026-10, volání mutací začne vracet GraphQL chybu o neexistujícím poli.

**Doporučený postup:**
- Prohledat codebase integrací a apps pro dotazy na `DraftOrderDiscountNotAppliedWarning`
- Nahradit `priceRule { title }` za `discountTitle`
- Nahradit `priceRule { discountCodes { nodes { code } } }` za `discountCode`
- Otestovat na aktuální API verzi (změna je zpětně kompatibilní)

## Použití v Integrátoru

Integrátor pracuje s draft orders při synchronizaci objednávek a jejich validaci. Pokud jsou v kódu přítomné inline GraphQL fragmenty nebo query strings pracující s `draftOrderCalculate` / `draftOrderCreate` a jejich warnings, je nutné prohledat codebase na výskyt `DraftOrderDiscountNotAppliedWarning` a `priceRule`.

Doporučujeme spustit grep na klíčová slova `priceRule`, `DraftOrderDiscountNotAppliedWarning` a `discountCodes` v GraphQL dotazech integrátoru a ověřit, zda je migrace potřebná.
