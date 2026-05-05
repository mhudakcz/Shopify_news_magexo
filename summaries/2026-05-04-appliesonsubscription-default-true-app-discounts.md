---
date: 2026-05-04
title: "Default value appliesOnSubscription změněno na true u app discount inputů"
title_en: "Default value of appliesOnSubscription changed to true for app discount inputs"
slug: appliesonsubscription-default-true-app-discounts
zdroj: https://shopify.dev/changelog/default-value-of-appliesonsubscription-changed-to-true-for-app-discount-inputs
zdroj_kanal: changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se DiscountCodeAppInput a DiscountAutomaticAppInput (App-managed discounts přes Shopify Functions). Naše discount methods jsou klasické DiscountCodeBasic (createDiscountCodeBasic, getDiscountCode) — App discount typy nepoužíváme."
dotcene_klienty: []
souvisejici: []

tldr: "Od API 2026-07 má pole appliesOnSubscription u DiscountCodeAppInput a DiscountAutomaticAppInput default true místo false. Shopify garantuje, že to nemá efekt na chování slev, takže žádná akce."
tagy: [discount, subscription, app-discount, default-value]
---

## Co se mění
V Admin GraphQL API verze **2026-07** se mění **default hodnota** pole `appliesOnSubscription` z `false` na `true` u typů `DiscountCodeAppInput` a `DiscountAutomaticAppInput`. Týká se App-managed discounts (slev definovaných přes Shopify Functions, ne klasických discount kódů).

Shopify v changelogu explicitně uvádí: **„No action required as this change has no effect on discount application behavior."**

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, default hodnota změněna

## Použití v Integrátoru
**Nepoužíváme** — v `shopify-client/admin/shop` máme klasické discount methods (`createDiscountCodeBasic`, `getAllDiscountCodes`, `deleteDiscountCode`, `getDiscountCode`). App-managed discounts (přes Shopify Functions) v naší codebase nemáme. `find-shopify-method "app discount"` vrátil prázdno.
