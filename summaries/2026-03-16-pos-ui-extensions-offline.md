---
date: 2026-03-16
title: "POS UI extensions umí běžet bez network access"
title_en: "POS UI extensions can now run without network access"
slug: pos-ui-extensions-offline
zdroj: https://shopify.dev/changelog/pos-ui-extensions-can-now-run-without-network-access
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: pos
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se POS UI extensions. Neděláme POS extensions."
dotcene_klienty: []

tldr: "POS extensions s flag runs_offline=true zůstanou funkční i při výpadku sítě."
tagy: [pos, ui-extensions, offline]
---

## Co se mění
POS UI extensions mohou nastavit flag `runs_offline = true` v manifest. Při výpadku sítě extension zůstane funkční (offline mode), místo aby zhasla. Vhodné pro extensions, které pracují s lokálním stavem.

## Použití v Integrátoru
**Nepoužíváme** — POS UI extensions neimplementujeme.
