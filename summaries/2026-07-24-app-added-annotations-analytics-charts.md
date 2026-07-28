---
date: 2026-07-24
title: "App-added annotations na Analytics chartech — apps přidávají business context"
title_en: "New app-added annotations on your analytics charts"
slug: app-added-annotations-analytics-charts
zdroj: https://changelog.shopify.com/posts/new-app-added-annotations-on-your-analytics-charts
shrnuto_dne: 2026-07-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro klienta stavěli appku, která zasahuje do marketingu, cen nebo dodavatelů, mohli bychom skrz Annotations API sami vysvětlovat výkyvy v merchantově Analytics — bez nutnosti vlastního reportingu."
dotcene_klienty: []
souvisejici: [annotations-analytics-events, shopify-analytics-full-stack-app-platform, analytics-metric-targets-admin-api]
tldr: "Aplikace teď mohou samy přidávat kontextové annotations do merchantových Analytics chartů — vyznačí launch produktu, kampaň nebo change dodavatele přímo v grafu s vlastní ikonou a jménem appky."
tagy: [analytics, annotations, apps, business-events, campaigns, insights]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Annotations jsou vizuální značky v Shopify Analytics chartech, které u konkrétního data nebo časového rozsahu zobrazí popisek vysvětlující, co se v obchodě odehrálo — aniž by měnily samotná data v reportu. Merchant tak vidí souvislost mezi obchodní událostí a pohybem metriky přímo v grafu, bez přepínání do jiné části adminu.

    Doteď annotations přidávalo výhradně Shopify samo — na základě systémových a produktových událostí (viz článek z 2026-05-05). Tato novinka rozšiřuje mechanismus tak, že annotations mohou přidávat i třetí strany, tedy nainstalované aplikace. App se tak může přihlásit k výkyvu v datech vlastní poznámkou — typicky product launch, marketingová kampaň, změna dodavatele nebo vstup na nový trh — a u annotace se zobrazí jméno a ikona appky, takže je jasné, odkud kontext pochází. Funkce navazuje na dev-side Annotations API zmíněné v rámci full-stack analytics platformy z 2026-07-21, teď ale jde o merchant-facing dopad: co merchant reálně uvidí, když si takovou appku nainstaluje.

    Prakticky to pokrývá metriky jako sales, sessions, conversion rate, average order value, počet prodaných kusů nebo fulfillment performance. Typický use case: merchant se ptá, jestli se zvedly tržby během kampaně, jestli se změnila konverze po spuštění nové landing page, nebo jestli se posunula průměrná hodnota objednávky během slevové akce — a app, která danou akci spustila, mu rovnou v grafu ukáže "tady jsem zasáhla".
  zdroje:
    - title: "Shopify: New app-added annotations on your analytics charts"
      url: "https://changelog.shopify.com/posts/new-app-added-annotations-on-your-analytics-charts"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
    - title: "Shopify Analytics: full-stack platforma pro apps (model, query, embed, enrich)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-analytics-full-stack-app-platform/"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Aplikace mohou nově samy vkládat annotations do merchantových Analytics chartů — vlastní kontextovou poznámku k datu nebo rozsahu dat, u které se zobrazí jméno a ikona appky. Annotations nemění podkladová data reportu, jen k němu přidávají vysvětlení: proč se něco stalo. Typicky jde o product launch, marketingovou kampaň, slevovou akci, změnu dodavatele nebo vstup na nový trh. Merchant tak přímo v grafu vidí, že konkrétní app stojí za konkrétním výkyvem v sales, sessions, conversion rate, average order value, počtu prodaných kusů nebo fulfillment performance.

Jde o merchant-facing rozšíření dřívějšího systémového annotations mechanismu (2026-05-05) — dosud annotations generovalo jen Shopify na základě vlastních produktových a systémových událostí, teď se do stejné vrstvy zapojují i třetí strany skrz appky.

## Časová osa

- 2026-05-05 — Annotations přišly jako Shopify-generovaná vrstva kontextu v Analytics (produktové a systémové eventy)
- 2026-07-21 — full-stack analytics platforma pro apps zmiňuje Annotations API jako jednu ze čtyř os (Enrich) pro partnery
- 2026-07-24 — tento changelog: merchant-facing dopad — apps reálně přidávají annotations do chartů, viditelné pro merchanty

## Dopad pro nás

**Pro vývojáře:** Annotations API umožňuje appce sama vysvětlit svůj dopad na metriky přímo v adminu merchanta, místo aby si merchant musel domýšlet souvislost sám nebo si to app vysvětlovala vlastním reportingovým UI. Relevantní hlavně pro appky s marketingovou, cenovou nebo supply-chain logikou.

**Pro PM / PO:** Jde o merchant-facing vylepšení nativní analytiky, ne o povinnou změnu pro naše stávající projekty. Užitečné jako argument směrem ke klientům, kteří chtějí vidět "proč" za výkyvy v datech — a jako budoucí rozšíření, pokud bychom pro klienta stavěli appku, která generuje business events.

## Použití v Integrátoru

Aktuálně nepoužíváme — nemáme appku, která by annotations do klientovy Analytics posílala. Relevantní do budoucna, pokud bychom pro klienta stavěli integraci s vlastní marketingovou nebo cenovou logikou, kde by šlo výkyvy v datech rovnou vysvětlit přímo v grafu.
