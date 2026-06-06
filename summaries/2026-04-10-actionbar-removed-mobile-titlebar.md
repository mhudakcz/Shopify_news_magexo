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

kontext:
  background: |
    TitleBar je UI komponenta Shopify App Bridge, která definuje záhlaví embedded aplikace — zobrazuje název stránky a akce (primární i sekundární). App Bridge je JavaScriptové SDK, díky kterému se webové aplikace třetích stran mohou vizuálně i funkčně začlenit do Shopify Adminu a do mobilní aplikace Shopify; aplikace se zobrazuje uvnitř prvku iframe.

    ActionBar byla doplňková lišta zobrazovaná v dolní části obrazovky na mobilních zařízeních, která sloužila jako kontejner pro primární akci TitleBaru. Toto oddělení — záhlaví na desktopu, spodní lišta na mobilu — vytvářelo nekonzistenci v uživatelském rozhraní a komplikovalo vývojářům sjednocení chování napříč zařízeními. Shopify přistoupil k odstranění ActionBaru jako součásti snahy o unifikaci mobilních vzorů.

    Po změně se primární akce TitleBaru zobrazuje vždy jako ikona přímo v záhlaví, sekundární akce se přesouvají do overflow menu. Výsledkem je konzistentnější zážitek pro obchodníky používající Shopify na telefonu. Vývojáři by měli ke každé primární akci explicitně definovat ikonu; pokud ikona chybí, App Bridge doplní výchozí plus (`+`).

    Tato změna navazuje na sérii mobilních úprav App Bridge v roce 2026 — patří sem i nová CSS proměnná pro safe area vložky, která pomáhá embedded apps respektovat systémové prvky na mobilních zařízeních.
  zdroje:
    - title: "Shopify Changelog: Primary action icon replaces ActionBar on mobile"
      url: "https://shopify.dev/changelog/primary-action-icon-replaces-actionbar-on-mobile"
    - title: "Shopify App Bridge — přehled"
      url: "https://shopify.dev/docs/api/app-bridge"
    - title: "Nová CSS proměnná --shopify-safe-area-inset-bottom pro mobilní embedded apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/css-variable-mobile-safe-area/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Mobilní TitleBar primary action se nyní renderuje jako ikona; bez specifikace defaultní plus icon."
tagy: [app-bridge, mobile, titlebar, ui]
---

## Co se mění
V embedded apps na mobilu se TitleBar primary action nyní zobrazuje pouze jako **icon button** místo plné `ActionBar`. Pokud aplikace neuvádí konkrétní ikonu, defaultně se použije plus (`+`) icon.

## Použití v Integrátoru
**Nepoužíváme** — App Bridge UI v embedded apps. Neděláme embedded apps.
