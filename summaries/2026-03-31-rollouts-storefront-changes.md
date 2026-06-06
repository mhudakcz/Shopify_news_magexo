---
date: 2026-03-31
title: "Rollouts: scheduling a A/B testy storefront změn"
title_en: "Schedule and test storefront changes with Rollouts"
slug: rollouts-storefront-changes
zdroj: https://changelog.shopify.com/posts/schedule-and-test-storefront-changes-with-rollouts
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Theme/storefront rollout feature. Naše integrace nesahá na theme management."
kontext:
  background: |
    Rollouts je nástroj přímo v administraci Shopify (sekce Markets › Rollouts), který slouží ke správě a nasazování změn vzhledu online obchodu. Jde o vrstvu nad klasickým theme systémem — merchant nepřepíná témata manuálně, ale definuje podmínky a časové okno, za kterých se změna aktivuje nebo ukončí. Dostupný je na plánech Basic a výše.

    Shopify dlouhodobě posiluje schopnosti obchodníků měnit storefront beze strachu z nevratných chyb. Klasický postup — duplikovat téma, upravit, publikovat — neumožňoval ani sledovat dopad na konverze, ani automaticky rollbackovat. Zároveň s rostoucí internacionalizací přes Shopify Markets vyvstala potřeba cílit různé vizuální varianty na různé trhy. Rollouts tyto mezery řeší jako jednotná platforma pro experimentování se vzhledem obchodu.

    Rollouts úzce navazuje na per-market theme customizaci, která dovoluje jiná nastavení tématu pro jednotlivé země, a doplňuje tak celou sadu nástrojů pro personalizaci storefront bez nutnosti udržovat více paralelních témat. Pro obchodníky to znamená nižší riziko při redesignech, možnost sezonních kampaní s automatickým koncem a data-driven rozhodování o vizuálních změnách na základě konverzních dat z A/B testů.
  zdroje:
    - title: "Schedule and test storefront changes with Rollouts — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/schedule-and-test-storefront-changes-with-rollouts"
    - title: "Theme customizace per Market — Shopify Changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-themes-per-market/"
    - title: "Redesignovaná navigace v theme editoru — Shopify Changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/redesigned-theme-editor-navigation/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Rollouts (Advanced + Plus plans) umožňují scheduling theme změn s automatic reverzí, limited-time event dates a A/B testy s market-specific targetingem."
tagy: [rollouts, theme, ab-testing, scheduling]
---

## Co se mění
**Rollouts** (Shopify nástroj pro správu storefront změn) dostávají:
- **Scheduling** theme změn s **automatic revert** (změna se vrátí v X čas)
- **Limited-time events** — temporary takeovery
- **A/B testing** s **market-specific targetingem** (různá varianta pro různé země)

Dostupné na **Advanced a Plus** plánech.

## Použití v Integrátoru
**Nepoužíváme** — theme/storefront management leží mimo naše integrace.
