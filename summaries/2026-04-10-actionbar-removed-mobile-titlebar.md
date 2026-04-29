---
date: 2026-04-10
title: "ActionBar odstraněn na mobilu — TitleBar primary action je nově ikona"
title_en: "ActionBar removed on mobile: TitleBar primary action now renders as an icon button"
slug: actionbar-removed-mobile-titlebar
zdroj: https://shopify.dev/changelog/primary-action-icon-replaces-actionbar-on-mobile
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "App Bridge UI komponenta v embedded apps. Neděláme embedded apps."
dotcene_klienty: []

tldr: "Mobilní TitleBar primary action se nyní renderuje jako ikona; bez specifikace defaultní plus icon."
tagy: [app-bridge, mobile, titlebar, ui]
---

## Co se mění
V embedded apps na mobilu se TitleBar primary action nyní zobrazuje pouze jako **icon button** místo plné `ActionBar`. Pokud aplikace neuvádí konkrétní ikonu, defaultně se použije plus (`+`) icon.

## Použití v Integrátoru
**Nepoužíváme** — App Bridge UI v embedded apps. Neděláme embedded apps.
