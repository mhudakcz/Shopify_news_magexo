---
date: 2026-04-09
title: "Hydrogen 2026.4 release — povinný Storefront API proxy a backend consent mode"
title_en: "Hydrogen April 2026 release"
slug: hydrogen-april-2026-release
zdroj: https://shopify.dev/changelog/hydrogen-april-2026-release
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, fyi]
api_oblast: hydrogen
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Hydrogen je Shopify framework pro custom storefronty. Neděláme Hydrogen storefronty."
dotcene_klienty: []

kontext:
  background: |
    Shopify Hydrogen je open-source React framework navržený pro tvorbu headless storefront řešení napojených na Shopify platformu. Postavený na Remixu, běží na Node.js a je primárně určen k nasazení na Shopify Oxygen hostingu. Vývojářům nabízí komponenty, hooks a pomocné funkce, které zjednodušují práci se Storefront API a správu košíku, lokalizace nebo autentizace zákazníků.

    Storefront API proxy je vrstva na straně serveru, která zprostředkovává komunikaci mezi frontendem a Shopify Storefront API. Místo přímých volání z prohlížeče putují požadavky přes serverový handler, čímž se skrývají tokeny a omezuje riziko zneužití. Do verze 2026.4 bylo proxy volitelné; od této verze je povinné a možnost `proxyStandardRoutes` byla odstraněna. Projekty, které proxy záměrně nevyužívaly, musí kód upravit.

    Backend consent mode mění způsob, jakým Hydrogen spravuje souhlas se sledováním. Namísto klientského JS cookie `_tracking_consent` server nyní nastavuje cookies přímo prostřednictvím Storefront API proxy. Tato změna je relevantní pro soulad s GDPR a ePrivacy: souhlas je zaznamenáván na serveru ještě před vykreslením stránky, což snižuje okno, kdy by mohlo dojít k nepovolenému sledování.

    Obě změny jsou breaking changes vyžadující migraci existujících Hydrogen projektů. Hydrogen se vydáním 2026.4 přibližuje modelu, kde server centralizuje bezpečnost i soulad s předpisy, a snižuje závislost na klientském JavaScriptu pro citlivé operace.
  zdroje:
    - title: "Hydrogen April 2026 release — Shopify Changelog"
      url: "https://shopify.dev/changelog/hydrogen-april-2026-release"
    - title: "Shopify Hydrogen — dokumentace frameworku"
      url: "https://shopify.dev/docs/storefronts/headless/hydrogen"
    - title: "Storefront filter URLs stable identifiers"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-filter-urls-stable-identifiers/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Hydrogen 2026.4: Storefront API proxy je povinné, backend consent mode default."
tagy: [hydrogen, storefront, consent, frontend]
---

## Co se mění
Hydrogen verze **2026.4.0**: aktualizuje API, **povinně** používá Storefront API proxy a backend consent mode je nově defaultně zapnutý.

## Použití v Integrátoru
**Nepoužíváme** — Hydrogen je Shopify React framework pro custom headless storefronty. Naše integrace se k frontendu klienta typicky nepřipojují.
