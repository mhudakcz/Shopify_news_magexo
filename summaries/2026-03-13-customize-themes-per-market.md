---
date: 2026-03-13
title: "Theme customizace per Market: settings, app embeds, branding"
title_en: "Customize settings and app embeds per Market for Themes"
slug: customize-themes-per-market
zdroj: https://changelog.shopify.com/posts/customize-settings-and-app-embeds-per-market-for-themes
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Theme + Markets feature."
kontext:
  background: |
    Shopify Theme Editor je vizuální nástroj pro úpravu vzhledu online obchodu — umožňuje měnit barvy, typografii, rozvržení sekcí a vkládat tzv. app embeds (widgety třetích stran). Standardně platí nastavení globálně pro celý obchod bez ohledu na to, ze které země zákazník přichází.

    Shopify Markets je infrastruktura pro mezinárodní prodej — každý market reprezentuje jeden nebo více trhů (zemí/regionů) s vlastní měnou, jazykem a cenovou politikou. Historicky byly theme a markets dvě oddělené vrstvy: markets řídily ceny a jazyk, ale vizuální podoba obchodu zůstávala jednotná. Tato mezera způsobovala, že merchant musel buď udržovat několik instalací tématu, nebo se spokojit s kompromisním designem pro všechny trhy.

    Nová per-market theme customizace tuto mezeru uzavírá — merchant může z jednoho tématu servírovat různé vizuální konfigurace pro různé země. To je zvláště důležité pro obchody prodávající v kulturně odlišných regionech, kde se liší preference barev, typografie nebo potřeba jiných app embedů (např. lokální platební widget nebo chat v jiném jazyce). Funkce navazuje na podobné per-market rozšíření checkoutu a customer accounts.

    Spolu s Rollouts (nástroj pro plánované A/B testy storefront změn) tvoří per-market customizace základ pro granulární personalizaci celého nákupního zážitku bez nutnosti správy více paralelních témat.
  zdroje:
    - title: "Customize settings and app embeds per Market for Themes — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/customize-settings-and-app-embeds-per-market-for-themes"
    - title: "Customize checkout and customer accounts by market — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/customize-checkout-and-customer-accounts-by-market"
    - title: "Schedule and test storefront changes with Rollouts — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/schedule-and-test-storefront-changes-with-rollouts"
    - title: "Adapt your theme for markets — Shopify Dev Docs"
      url: "https://shopify.dev/docs/storefronts/themes/markets"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Theme customization podporuje per-Market overrides: settings, app embeds, barvy, typografie, CSS. Per Market nebo Rollout — různá země = různá theme experience."
tagy: [theme, markets, customization, international]
souvisejici: [customize-checkout-accounts-by-market]
---

## Co se mění
**Theme customization** podporuje **per-Market overrides** pro:
- Settings
- App embeds
- Colors / typography
- Custom CSS

Lze definovat per Market (země) nebo per Rollout (A/B test).

## Použití v Integrátoru
**Nepoužíváme** — theme/branding feature.
