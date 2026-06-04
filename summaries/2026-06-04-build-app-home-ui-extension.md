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

tldr: "App Home (úvodní stránka embedded app) lze nově postavit jako UI extension místo iframe — lepší performance, native Polaris, ne external hosting. _Původně publikováno 27. 5. 2026 (audit doplnění)._"
tagy: [ui-extension, embedded-app, app-home, polaris]
---

## Co se mění
**App Home** (úvodní stránka embedded aplikace v Shopify Adminu) lze nově postavit jako **UI extension** místo klasického iframe. Výhody: native Polaris styling, lepší performance (no extra network), žádné self-hosted UI.

## Použití v Integrátoru
**Nepoužíváme** — neděláme embedded apps. Reference pokud klient řeší embedded app design.
