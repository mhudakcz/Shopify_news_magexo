---
date: 2026-05-13
title: "Function run logs dostupné automaticky podle access scopes"
title_en: "Function run log details are now automatically visible with the right access scopes"
slug: function-run-log-access-scopes
zdroj: https://shopify.dev/changelog/function-run-log-details-are-now-automatically-visible-with-the-right-access-scopes
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify Functions debugging. Naše integrace Functions nedeployují."
dotcene_klienty: []

tldr: "Function run logs v Dev Dashboardu jsou nyní automaticky přístupné podle access scopes udělených appce merchantem — logs viditelné když má app potřebné scopes pro čtení polí přes GraphQL Admin API."
tagy: [functions, dev-dashboard, logs, debugging]
---

## Co se mění
**Function run logs** v Dev Dashboardu se zobrazují **automaticky** na základě **access scopes** udělených appce merchantem. Pokud app má potřebné scopes pro čtení polí dotazovaných z GraphQL Admin API, logy jsou viditelné. Předtím vyžadovalo manuální setup.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions implementujeme minimálně.
