---
date: 2026-05-04
title: "Admin Web Vitals monitoring přesunut do Dev Dashboard"
title_en: "Monitor admin web vitals in the Dev Dashboard"
slug: admin-web-vitals-dev-dashboard
zdroj: https://shopify.dev/changelog/monitor-admin-web-vitals-in-the-dev-dashboard
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-05

kategorie: [fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se monitoringu performance embedded apps v Shopify Adminu. Naše integrace nejsou embedded apps — fungují server-side přes Admin API."
dotcene_klienty: []
souvisejici: []

tldr: "Performance dashboardy pro admin embedded apps se přesunuly z Partner Dashboardu do Dev Dashboardu. Nově denní + 28-day P75 rollupy pro Core Web Vitals (LCP, INP, CLS); FID nahrazen INP."
tagy: [dev-dashboard, web-vitals, performance, embedded-apps]
---

## Co se mění
Performance dashboardy pro **admin embedded apps** se přesunuly z **Partner Dashboardu** do **Dev Dashboardu**. K dispozici jsou denní a **28-day P75 rollupy** pro Core Web Vitals: **LCP**, **INP**, **CLS**. **FID** byl ukončen a nahrazen **INP** jako Core Web Vital metrika.

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom v budoucnu napsali embedded admin app pro klienta, monitoring jejího výkonu se hledá v Dev Dashboardu, ne v Partner Dashboardu. Aktuálně neimplementujeme embedded apps.

**Pro PM / PO:**
Žádný klient impact.

## Použití v Integrátoru
**Nepoužíváme** — naše integrace jsou server-side custom apps přes Admin GraphQL API, ne embedded UI apps běžící v Shopify Adminu.
