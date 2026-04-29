---
date: 2026-04-23
title: "Nové důvody odinstalace aplikace v Partner Dashboardu"
title_en: "Update to app uninstall reasons"
slug: app-uninstall-reasons-update
zdroj: https://shopify.dev/changelog/update-to-app-uninstall-reasons
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

ucinnost_od: null
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Partner Dashboardu pro publikované apps ve Shopify App Store. Naše integrace běží jako custom apps pro konkrétní klienty."
dotcene_klienty: []
souvisejici: []

tldr: "Partner Dashboard má nové, granulárnější důvody odinstalace včetně 'testing' a 'compatibility issues'."
tagy: [partners, app-store, uninstall, metrics]
---

## Co se mění
Partner Dashboard zavádí **revidované důvody odinstalace** aplikací z Shopify App Store. Nové možnosti zahrnují například „testing", „compatibility issues" a další granulárnější kategorie, aby přesněji odrážely důvody merchantů.

## Dopad pro nás
**Pro vývojáře:**
Žádný kódový dopad. Změna je v UI Partner Dashboardu pro vlastníky publikovaných aplikací.

**Pro PM / PO:**
Pokud bychom v budoucnu publikovali aplikaci na Shopify App Store, přesnější uninstall důvody by pomohly při interpretaci adoption metrik.

## Použití v Integrátoru
**Nepoužíváme** — týká se publikovaných aplikací ve Shopify App Store. Naše integrace běží jako custom apps pro konkrétní klienty, ne jako veřejné App Store apps.
