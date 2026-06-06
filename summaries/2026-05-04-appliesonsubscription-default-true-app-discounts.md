---
date: 2026-05-04
title: "Default value appliesOnSubscription změněno na true u app discount inputů"
title_en: "Default value of appliesOnSubscription changed to true for app discount inputs"
slug: appliesonsubscription-default-true-app-discounts
zdroj: https://shopify.dev/changelog/default-value-of-appliesonsubscription-changed-to-true-for-app-discount-inputs
zdroj_kanal: dev-changelog
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

kontext:
  background: |
    Pole `appliesOnSubscription` je logická hodnota (Boolean) na GraphQL input typech `DiscountCodeAppInput` a `DiscountAutomaticAppInput`, která určuje, zda se daná aplikační sleva vztahuje na nákupy v rámci předplatného. Tyto input typy slouží výhradně pro tzv. App-managed discounts — slevy implementované přes Shopify Functions (serverless WebAssembly logiku), nikoli pro nativní slevové typy jako `DiscountCodeBasic`.

    Shopify Functions umožňují vývojářům psát vlastní slevovou logiku v libovolném jazyku kompilovaném do WASM a nasazovat ji jako rozšíření aplikace. App-managed discounts jsou přirozeně propojeny s předplatným ekosystémem, protože obchodníci je využívají pro opakované nákupy zákazníků. Před touto změnou mělo `appliesOnSubscription` výchozí hodnotu `false`, zatímco sesterské pole `appliesOnOneTimePurchase` mělo výchozí hodnotu `true` — tato nesymetrie mohla vést k nečekanému chování, kdy slevy fungovaly na jednorázové nákupy, ale implicitně se nevztahovaly na předplatné.

    Sjednocením obou výchozích hodnot na `true` Shopify odstraňuje tuto asymetrii a zajišťuje, že nové aplikace bez explicitního nastavení získají konzistentní chování napříč oběma typy nákupů. Změna se promítá do API verze 2026-07 a doplňuje souběžně vydané rozšíření slevového ekosystému, jako je cílení slev na konkrétní markets nebo prerekvizity pro produktové slevy ve Functions.
  zdroje:
    - title: "Shopify Changelog: Default value of appliesOnSubscription changed to true"
      url: "https://shopify.dev/changelog/default-value-of-appliesonsubscription-changed-to-true-for-app-discount-inputs"
    - title: "Shopify Docs: DiscountCodeAppInput"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput"
    - title: "Archiv: Prerequisites pro Product Discount Functions (Buy X, Get Y)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/prerequisites-product-discount-functions/"
    - title: "Archiv: Cílení slev na konkrétní markets přes DiscountContextInput"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/target-discounts-specific-markets/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Od API 2026-07 má pole appliesOnSubscription u DiscountCodeAppInput a DiscountAutomaticAppInput default true místo false. Shopify garantuje, že to nemá efekt na chování slev, takže žádná akce."
tagy: [discount, subscription, app-discount, default-value]
---

## Co se mění
V Admin GraphQL API verze **2026-07** se mění **default hodnota** pole `appliesOnSubscription` z `false` na `true` u typů `DiscountCodeAppInput` a `DiscountAutomaticAppInput`. Týká se App-managed discounts (slev definovaných přes Shopify Functions, ne klasických discount kódů).

Shopify v changelogu explicitně uvádí: **„No action required as this change has no effect on discount application behavior."**

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, default hodnota změněna

## Použití v Integrátoru
**Nepoužíváme** — v mámeme klasické discount methods (`createDiscountCodeBasic`, `getAllDiscountCodes`, `deleteDiscountCode`, `getDiscountCode`). App-managed discounts (přes Shopify Functions) v naší codebase nemáme. interní MCP check vrátil prázdno.
