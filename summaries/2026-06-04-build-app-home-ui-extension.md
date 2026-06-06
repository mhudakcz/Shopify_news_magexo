---
date: 2026-06-04
title: "App Home jako UI extension (místo iframe)"
title_en: "Build App Home as a UI extension"
slug: build-app-home-ui-extension
zdroj: https://shopify.dev/changelog/build-app-home-as-a-ui-extension
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "App Home UI extension je pro embedded apps. Neimplementujeme embedded apps."
dotcene_klienty: []

kontext:
  background: |
    App Home je hlavní pracovní plocha embedded aplikace v Shopify Adminu — stránka, na kterou obchodník přijde po kliknutí na aplikaci v navigaci. Tradiční model ji realizoval jako iframe s externě hostovanou webovou aplikací: vývojář musel provozovat vlastní server, spravovat SSL a posílat HTML do administrace přes App Bridge. Každý takovýto iframe představoval samostatnou síťovou transakci a mohl vizuálně odchylovat od nativního stylu Adminu.

    Shopify UI extensions jsou JavaScriptové moduly kompilované do izolovaného bundlu a hostované přímo na Shopify infrastruktuře. Od zavedení Preact runtime a Polaris web components (API 2025-10) tvoří extensions jednotné renderovací prostředí pro Admin, Checkout, zákaznické účty i POS. Nový extension target admin.app.home.render (dostupný od API 2026-07) rozšiřuje tento model na celou App Home, takže primární UI aplikace může sdílet tentýž bundle s ostatními extensions.

    Prakticky to znamená eliminaci potřeby externího hostování pro jednodušší custom-distribution aplikace: bundle musí vejít do 64 KB po kompresi, k dispozici je pouze Preact a sada Polaris web components (nikoliv App Bridge komponenty), a přístup k browser API je omezený. Pro aplikace s komplexní logikou nebo potřebou plné flexibility zůstává iframe model doporučenou volbou. Nový přístup výslovně nefunguje pro veřejné aplikace v Shopify App Store.

    Vývoj naznačuje směr, kterým Shopify tlačí ekosystém: co nejvíce kódu aplikace hostovat přímo na platformě, sjednotit design přes Polaris a snižovat závislost vývojářů na vlastní serverové infrastruktuře.
  zdroje:
    - title: "Shopify Changelog: Build App Home as a UI extension"
      url: "https://shopify.dev/changelog/build-app-home-as-a-ui-extension"
    - title: "Shopify Docs: App Home"
      url: "https://shopify.dev/docs/apps/build/app-home"
    - title: "Archiv: Automatizované testy UI extensions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ui-extensions-tester/"
    - title: "Archiv: Polaris web components migration guides"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-web-components-migration-guides/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "App Home (úvodní stránka embedded app) lze nově postavit jako UI extension místo iframe — lepší performance, native Polaris, ne external hosting. _Původně publikováno 27. 5. 2026 (audit doplnění)._"
tagy: [ui-extension, embedded-app, app-home, polaris]
---

## Co se mění
**App Home** (úvodní stránka embedded aplikace v Shopify Adminu) lze nově postavit jako **UI extension** místo klasického iframe. Výhody: native Polaris styling, lepší performance (no extra network), žádné self-hosted UI.

## Použití v Integrátoru
**Nepoužíváme** — neděláme embedded apps. Reference pokud klient řeší embedded app design.
