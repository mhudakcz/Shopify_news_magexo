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

kontext:
  background: |
    Core Web Vitals jsou sada metrik definovaná Googlem pro měření reálného uživatelského zážitku na webu. Zahrnují tři klíčové ukazatele: LCP (Largest Contentful Paint) měří rychlost načtení hlavního obsahu, CLS (Cumulative Layout Shift) hodnotí vizuální stabilitu stránky a INP (Interaction to Next Paint) sleduje odezvu na všechny uživatelské interakce od kliknutí po stisk klávesnice.

    INP nahradil metriku FID (First Input Delay) jako officiální Core Web Vital v březnu 2024. Zatímco FID měřil pouze latenci první interakce, INP sleduje celou životnost stránky a reportuje 98. percentil všech interakcí. Tato změna výrazně zpřísňuje požadavky na interaktivní aplikace — zejména ty, které běží jako embedded iframe v cizím prostředí, jako je Shopify Admin.

    Shopify Admin embedded apps jsou webové aplikace načítané přímo uvnitř administrace obchodníka prostřednictvím App Bridge. Jejich výkon přímo ovlivňuje plynulost práce obchodníka, proto Shopify sleduje jejich Web Vitals v percentilech P75 (tedy 75 % uživatelů by mělo dosáhnout dobré hodnoty). Přesunutí těchto dat z Partner Dashboardu do nového Dev Dashboardu reflektuje širší konsolidaci vývojářských nástrojů — Dev Dashboard soustřeďuje logy, události a výkonnostní metriky aplikací na jednom místě.

    Dev Dashboard je součástí postupné modernizace vývojářského ekosystému Shopify, do nějž patří i App Events (usage a performance data) a nové UI extension přístupy jako App Home. Vývojáři embedded apps tak mají k dispozici ucelený přehled výkonu svých appek bez nutnosti přepínat mezi různými administračními rozhraními.
  zdroje:
    - title: "Monitor admin web vitals in the Dev Dashboard – Shopify Changelog"
      url: "https://shopify.dev/changelog/monitor-admin-web-vitals-in-the-dev-dashboard"
    - title: "INP (Interaction to Next Paint) – web.dev"
      url: "https://web.dev/articles/inp"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
    - title: "App Home jako UI extension (místo iframe)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/build-app-home-ui-extension/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
