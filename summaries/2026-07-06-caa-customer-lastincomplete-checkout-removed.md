---
date: 2026-07-06
title: "CAA Customer.lastIncompleteCheckout a Checkout typy odstraněny v 2026-10"
title_en: "Customer Account API Customer.lastIncompleteCheckout and Checkout types removed in 2026-10"
slug: caa-customer-lastincomplete-checkout-removed
zdroj: https://shopify.dev/changelog/customer-account-api-last-incomplete-checkout-and-checkout-types-removed
shrnuto_dne: 2026-07-07
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-01
deprecation_do: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud používáme CAA v customer-facing apps, je třeba audit před 2026-10."
dotcene_klienty: []
souvisejici: [metafields-definition-required-customer-account-api, built-for-shopify-returns-subscriptions-customer-account-api, feature-preview-customer-account-improvements]
tldr: "V Customer Account API verzi 2026-10 jsou odstraněny pole Customer.lastIncompleteCheckout a celý typ Checkout včetně subtypů. Apps využívající tato pole musí migrovat na Cart API (Storefront) nebo Customer.orders před říjnem 2026."
tagy: [customer-account-api, checkout, deprecation, action-required, "2026-10"]
zdroj_kanal: dev-changelog
---

## Co se mění

V API verzi **2026-10** jsou z Customer Account API (CAA) trvale odstraněny následující prvky:

**Pole:**
- `Customer.lastIncompleteCheckout`

**Typy a subtypy:**
- `Checkout`
- `Checkout.appliedGiftCards`
- `AppliedGiftCard`
- `AvailableShippingRates`
- `CheckoutLineItem`
- `CheckoutLineItemConnection`
- `CheckoutLineItemEdge`
- `ShippingRate`

Pole `lastIncompleteCheckout` bylo již dříve označeno jako deprecated a před samotným odstraněním vracelo hodnotu `null`. Jde tedy o finální cleanup po předchozí deprecaci, nikoli o překvapivý breaking change bez varování.

## Časová osa

| Fáze | Datum |
|------|-------|
| Oznámení v changelogu | 2026-07-06 |
| Deprecation (pole vrací null) | dříve (před 2026-07-06) |
| Finální odstranění (deprecation_do) | **2026-10-01** |

Apps běžící na starší verzi CAA nebudou okamžitě zasaženy, ale při upgradu na verzi `2026-10` nebo novější selžou GraphQL query, které tato pole stále obsahují.

## Dopad pro nás

Pokud v jakékoli customer-facing aplikaci nebo headless implementaci využíváme Customer Account API a dotazujeme se na `Customer.lastIncompleteCheckout` nebo typy `Checkout`, je nutné tyto query před říjnem 2026 upravit.

**Doporučený postup:**
1. Prohledat codebase podle výskytu řetězce `lastIncompleteCheckout` a `Checkout` v CAA GraphQL operacích.
2. Odebrat deprecated selekce z query.
3. Nahradit alternativami dle konkrétního use case (viz sekce níže).

Pokud pole již nevyužíváme nebo jsme je nikdy neimplementovali, není třeba žádná akce.

## Použití v Integrátoru

Integrátor (Magexo) zpravidla komunikuje se Shopify přes Admin API, nikoli přes Customer Account API. CAA je určeno pro customer-facing aplikace (headless storefront, customer portál). Přesto:

- Pokud jsme budovali nebo plánujeme budovat customer portál nebo headless checkout s CAA, je nutný **audit GraphQL operací** před verzí 2026-10.
- **Alternativa pro aktivní košík/checkout stav:** Storefront API Cart flows — umožňuje sledovat aktivní cart pro přihlášeného zákazníka.
- **Alternativa pro historii nákupů:** Pole `Customer.orders` v Customer Account API zůstává k dispozici a poskytuje kompletní historii objednávek.

Doporučujeme prohledat všechny projekty, kde byl implementován Customer Account API login flow, zda neobsahují dotazy na výše uvedená pole.

## Zdroje

- [Shopify Changelog – Customer Account API removal](https://shopify.dev/changelog/customer-account-api-last-incomplete-checkout-and-checkout-types-removed)
- [Customer Account API – Customer type reference](https://shopify.dev/docs/api/customer)
- [Storefront API – Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)
