---
date: 2026-03-16
title: "Retail cash management: nový CashDrawer resource v 2026-04"
title_en: "New retail cash management capabilities"
slug: retail-cash-management-capabilities
zdroj: https://shopify.dev/changelog/new-retail-cash-management-capabilities
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: pos
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se retail/POS cash drawer flow. Neděláme POS specific integrace s cash management."
dotcene_klienty: []

tldr: "API 2026-04 zavádí CashDrawer resource a Admin GraphQL APIs pro custom cash management workflow v retail."
tagy: [pos, cash-drawer, retail]
---

## Co se mění
API verze **2026-04** zavádí nový resource **CashDrawer** a sadu Admin GraphQL APIs pro custom cash management v retailu — typicky open/close drawer, tracking peněz v pokladně, denní uzávěrky.

## Použití v Integrátoru
**Nepoužíváme** — POS-specific cash drawer flow. Pokud by klient měl retail s POS, je relevantní pro custom reporting/audit.
