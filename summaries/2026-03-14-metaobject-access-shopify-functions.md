---
date: 2026-03-14
title: "Metaobject access ve Shopify Functions od 2026-04"
title_en: "Metaobject access in Shopify Functions"
slug: metaobject-access-shopify-functions
zdroj: https://shopify.dev/changelog/metaobject-access-in-shopify-functions
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: other
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 12 metaobject methods. Funkce nedeployujeme, ale pokud klient používá Functions a chce číst naše app-owned metaobjects (např. konfiguraci), mohou na ně sahat."
dotcene_klienty: []

tldr: "API 2026-04 umožňuje všem Shopify Functions číst app-owned metaobjects (přes handle nebo ID)."
tagy: [metaobject, functions, integration]
---

## Co se mění
Všechny **Shopify Functions** v API verze **2026-04** mohou číst **app-owned metaobjects** (přes handle nebo ID). Dříve byl access omezený specific Function types. Cíl: jednodušší propojení merchant Functions s daty uloženými appkou.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Použití v Integrátoru
**Možná** — pokud naše app ukládá konfiguraci do metaobjects pomocí `$app:` namespace, klientovy Functions mohou tato data číst při kalkulacích (typicky discount rules, shipping pricing). Žádný kódový dopad pro nás přímo.

## Související
- [App-owned metaobjects bez access scopes](../zmena/2026-04-01-app-owned-metaobjects-without-scopes/)
