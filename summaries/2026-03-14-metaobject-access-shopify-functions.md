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

kontext:
  background: |
    Metaobjects jsou strukturované datové záznamy v Shopify, které umožňují ukládat komplexní, opakovaně použitelné datové struktury s více poli — na rozdíl od metafields, které přidávají jedno pole k existujícímu zdroji (produkt, objednávka). Existují ve dvou variantách: app-owned (spravované konkrétní aplikací přes TOML konfiguraci s prefixem `$app:`) a merchant-owned (spravované obchodníkem přes GraphQL API nebo Admin rozhraní).

    Shopify Functions jsou WebAssembly moduly kompilované z Rustu nebo JavaScriptu, které umožňují přizpůsobit backendovou logiku Shopify — typicky výpočty slev, validaci košíku nebo pravidla dopravy. Vstupem funkce je JSON objekt sestavený z GraphQL dotazu, který vývojář definuje. Historicky byl přístup k metaobjectům z Functions omezený pouze na určité typy funkcí, což komplikovalo scénáře, kde aplikace ukládá konfiguraci do vlastních metaobjectů a chce ji číst při výpočtu.

    Od API verze 2026-04 mohou všechny typy Shopify Functions číst app-owned metaobjects přes handle nebo ID přímo v input query. To otevírá schémata, kde aplikace spravuje konfiguraci (např. pravidla slev nebo mapování dopravy) v metaobjectech s `$app:` prefixem a Functions tato data čtou za běhu bez nutnosti dalších API volání. Tato změna navazuje na souběžné zjednodušení v témže API release — app-owned metaobjects přestaly vyžadovat explicitní OAuth access scopes.

    Související vývoj zahrnuje také změny v řízení přístupu: v API 2026-07 budou odstraněny deprecated enum hodnoty `PRIVATE` a `PUBLIC_READ` z `MetaobjectAdminAccess`, což dál zpřesňuje model oprávnění pro celý ekosystém metaobjectů.
  zdroje:
    - title: "Shopify Changelog: Metaobject access in Shopify Functions"
      url: "https://shopify.dev/changelog/metaobject-access-in-shopify-functions"
    - title: "Shopify Docs: Metaobjects — app-owned vs. merchant-owned"
      url: "https://shopify.dev/docs/apps/build/custom-data/metaobjects"
    - title: "Shopify Docs: Shopify Functions overview"
      url: "https://shopify.dev/docs/apps/build/functions"
    - title: "Archiv: App-owned metaobjects bez access scopes (2026-04)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-owned-metaobjects-without-scopes/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
