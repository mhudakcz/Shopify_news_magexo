---
date: 2026-05-13
title: "Migration guides pro Polaris web components v Checkout a Customer Account UI extensions"
title_en: "Polaris web components migration guides now available for Checkout and Customer Account UI extensions"
slug: polaris-web-components-migration-guides
zdroj: https://shopify.dev/changelog/polaris-web-components-migration-guides-now-available-for-checkout-and-customer-account-ui-extensions
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [fyi]
api_oblast: checkout
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Migration guides pro UI extensions. Neimplementujeme Checkout / Customer Account UI extensions."
dotcene_klienty: []
souvisejici: [deprecation-checkout-metafields]

kontext:
  background: |
    Polaris web components jsou nativní UI prvky Shopify design systému určené pro vývoj rozšíření checkoutu a zákaznických účtů. Na rozdíl od Polaris React knihovny pro Shopify Admin jsou tyto komponenty (Button, TextField, Banner, Grid a další) renderovány přímo Shopify runtime v izolovaném sandboxu bez přístupu k DOM checkoutu — vývojáři tak nemohou přepisovat CSS ani obcházet brandový design obchodníka.

    Shopify UI extensions prošly od svého uvedení výraznou architektonickou proměnou. Původní extensions byly postaveny na Reactu a Shopify-proprietárním Remote UI protokolu. Počínaje API verzí 2025-10 se výchozím přístupem stal Preact kombinovaný s Polaris web components a globálním objektem `shopify`, čímž Shopify sjednotil rendering pipeline a snížil bundle size extensions. Migration guides publikované v květnu 2026 přesně pokrývají tento přechod: od React/JavaScript API k Preact a web components.

    Pro vývojáře, kteří udržují živá rozšíření, platí 12měsíční support window Shopify API verzí — Shopify CLI blokuje deploy extensions cílených na API starší než jeden rok. Průvodci migrace tak nejsou volitelné čtení, ale praktická nutnost pro každého, kdo má extensions nasazené v produkci a plánuje jejich další rozvoj nebo upgrade API verze.

    Souběžně se migration guides dotýkají i deprecace checkout metafields (oznámené v dubnu 2026): průvodci obsahují konkrétní instrukce pro přechod na cart a order metafields, které tvoří moderní datovou vrstvu dostupnou v checkout UI extensions přes Storefront API.
  zdroje:
    - title: "Shopify Changelog: Polaris web components migration guides for Checkout and Customer Account UI extensions"
      url: "https://shopify.dev/changelog/polaris-web-components-migration-guides-now-available-for-checkout-and-customer-account-ui-extensions"
    - title: "Shopify Docs: Checkout UI extensions components"
      url: "https://shopify.dev/docs/api/checkout-ui-extensions/components"
    - title: "Archiv: Deprecation checkout metafields v UI extensions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/deprecation-checkout-metafields/"
    - title: "Archiv: Polaris reference docs — jen poslední 4 stable verze"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/removing-outdated-polaris-docs/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Nové migration guides pomáhají developerům upgradovat Checkout a Customer Account UI extensions na nejnovější API verzi a Polaris web components. Vč. instrukcí pro migraci z checkout na cart metafields."
tagy: [polaris, ui-extensions, migration, checkout]
---

## Co se mění
Shopify publikoval **migration guides** pro upgrade **Checkout a Customer Account UI extensions** na poslední API verzi s **Polaris web components**. Guides obsahují component-specific migration pages a explicit instrukce pro **migraci checkout metafields → cart metafields** (souvisí s deprecation oznámeným v dubnu).

## Použití v Integrátoru
**Nepoužíváme** — UI extensions neimplementujeme. Reference pokud klient sám má extensions a žádá pomoc s migrací.
