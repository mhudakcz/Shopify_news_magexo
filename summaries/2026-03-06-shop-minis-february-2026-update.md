---
date: 2026-03-06
title: "Shop Minis únor 2026 update — UGC tagging, SafeArea, CLI commands"
title_en: "Shop Minis February 2026 update"
slug: shop-minis-february-2026-update
zdroj: https://shopify.dev/changelog/shop-minis-february-2026-update
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shop Minis jsou aplikace běžící v Shop app (mobile). Neděláme Shop Minis."
dotcene_klienty: []

kontext:
  background: |
    Shop Minis je vývojová platforma Shopify umožňující vytvářet miniaturní aplikace spouštěné přímo v rámci officiální mobilní aplikace Shop (dříve Arrive). Jedná se o sandboxované React Native komponenty s přístupem k Shopify API, které se zobrazují zákazníkům při procházení obchodů a produktů.

    Platforma vznikla jako součást širší strategie Shopify přetvořit Shop app z pouhého trackeru zásilek na plnohodnotný nákupní kanál. Shop Minis vývojářům poskytují nativní SDK s komponentami, hooky a CLI nástrojem — vývoj probíhá podobně jako u Shopify checkout extensions, ale pro mobilní kontext.

    Únorový update 2026 rozšiřuje možnosti tvorby nakupovatelného obsahu (UGC tagging přes hook useCreateImageContent), zjednodušuje správu souhlasů a přidává SafeArea komponentu potřebnou pro správné vykreslování na zařízeních s výřezy displeje (notch). Tyto změny navazují na souběžnou podporu CSS proměnné --shopify-safe-area-inset-bottom pro embedded apps obecně.

    Následující update z března/dubna 2026 dále rozšiřuje model souhlasů o volitelné (optional) consent scopy a runtime permissions, což naznačuje postupný posun k granulárním oprávněním podobným mobilním operačním systémům.
  zdroje:
    - title: "Shop Minis February 2026 Update — Shopify Changelog"
      url: "https://shopify.dev/changelog/shop-minis-february-2026-update"
    - title: "Shop Minis březen/duben 2026 update"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-minis-march-april-update/"
    - title: "Nová CSS proměnná --shopify-safe-area-inset-bottom pro mobilní embedded apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/css-variable-mobile-safe-area/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shop Minis přidává product tagging pro UGC, SafeArea component a nové CLI enable/disable příkazy."
tagy: [shop-minis, ugc, mobile]
---

## Co se mění
**Shop Minis** (mini-aplikace běžící uvnitř Shop app, oficiální Shopify mobile shopping app) v únoru 2026 dostávají:
- Product tagging v user-generated content
- SafeArea component (analogie k iOS safe area)
- Nové CLI commands `enable`/`disable`
- Consent flows pro privacy

## Použití v Integrátoru
**Nepoužíváme** — Shop Minis. Pokud klient prodává přes Shop app a chce custom mini-app, je relevantní.
