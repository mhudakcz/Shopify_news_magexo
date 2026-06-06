---
date: 2026-03-13
title: "Admin intents podporují Settings pages"
title_en: "Admin intents now support Settings"
slug: admin-intents-settings
zdroj: https://shopify.dev/changelog/admin-intents-now-support-settings
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin intents jsou App Bridge feature pro routing v embedded apps. Neděláme embedded apps."
dotcene_klienty: []

kontext:
  background: |
    Admin intents jsou součástí Shopify App Bridge — knihovny pro tvorbu aplikací vložených přímo do Shopify Adminu. Intent je programový příkaz, kterým embedded app řekne Shopify Adminu, aby otevřel konkrétní stránku nebo editor, aniž by aplikace musela znát přesnou cestu v URL. Admin stránku otevře jako vrstvu v tzv. page stacku a automaticky přejede na cílovou sekci.

    App Bridge jako celek vznikl proto, aby vývojáři třetích stran mohli budovat aplikace, které se vizuálně a funkčně integrují do Shopify Adminu. Intents jsou jedním ze stavebních kamenů tohoto frameworku — umožňují deep-linking do administrace bez nutnosti udržovat seznam interních URL cest, které se mohou měnit. Původně intents podporovaly pouze content stránky jako objednávky, zákazníky nebo produkty.

    Rozšíření o Settings pages (detaily obchodu, správa lokací, zpracování objednávek) znamená, že aplikace mohou obchodníka přesměrovat přímo na relevantní konfigurační krok — například jako součást onboardingu nebo průvodce nastavením. To snižuje počet kliknutí potřebných k dokončení konfigurace a zlepšuje uživatelský zážitek embedded aplikací.

    Trend rozšiřování Admin intents pokračuje — v květnu 2026 přibylo dalších 7 Settings editors (notifikace, platby, dárkové karty, delivery profiles) s podporou contextual overlays.
  zdroje:
    - title: "Admin intents now support Settings — Shopify Changelog"
      url: "https://shopify.dev/changelog/admin-intents-now-support-settings"
    - title: "More admin intents now support Settings — Shopify Changelog"
      url: "https://shopify.dev/changelog/more-admin-intents-now-support-settings"
    - title: "Více admin intents podporuje Settings (notifications, payments, gift cards…)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/more-admin-intents-settings/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Admin intents lze použít pro směrování merchanta na Settings pages (store config, locations)."
tagy: [app-bridge, intents, settings]
---

## Co se mění
**Admin intents** (App Bridge feature pro programové směrování v Shopify Admin) nově podporují i **Settings pages** — store configuration, location management, payment settings atd. Dříve mířily jen na content pages (orders, customers, products).

## Použití v Integrátoru
**Nepoužíváme** — App Bridge feature pro embedded apps.
