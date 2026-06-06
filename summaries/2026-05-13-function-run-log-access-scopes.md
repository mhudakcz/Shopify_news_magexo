---
date: 2026-05-13
title: "Function run logs dostupné automaticky podle access scopes"
title_en: "Function run log details are now automatically visible with the right access scopes"
slug: function-run-log-access-scopes
zdroj: https://shopify.dev/changelog/function-run-log-details-are-now-automatically-visible-with-the-right-access-scopes
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify Functions debugging. Naše integrace Functions nedeployují."
dotcene_klienty: []

kontext:
  background: |
    Shopify Functions jsou WebAssembly moduly, které nahrazují nebo rozšiřují backendovou logiku Shopify platformy. Funkce přijímají JSON vstup sestavený z GraphQL dotazu, provedou vlastní výpočet (sleva, validace checkoutu, routing objednávek, platební podmínky) a vrátí instrukce pro Shopify backend. Jsou nasazovány jako součást aplikace přes Shopify CLI a fungují na všech plánech — nejen na Shopify Plus.

    Function run logy jsou diagnostické záznamy pořizované při každém spuštění funkce. Zaznamenávají vstupní data, výstupní instrukce i případné chyby a jsou dostupné v Dev Dashboardu. Problémem dřívějšího stavu bylo, že vývojář musel žádat merchanty o ruční sdílení těchto záznamů — tedy o aktivní akci ze strany provozovatele obchodu. Tím se komplikovalo ladění a odstraňování závad v produkčních prostředích.

    Nová změna propojuje viditelnost run logů přímo s OAuth access scopes udělených aplikaci. Pokud má aplikace scopes potřebné pro čtení GraphQL polí použitých ve vstupním dotazu funkce, logy se zobrazí automaticky — bez dalšího souhlasu merchantem. Tím se výrazně zrychluje debugging cyklus při vývoji a provozu Functions.

    Tato funkce je součástí širšího rozšiřování Dev Dashboardu jako centrálního diagnostického nástroje: souběžně přibylo sledování App Events, výkon embedded apps přes Web Vitals a přehled nainstalovaných Extensions a Functions v Settings Adminu.
  zdroje:
    - title: "Function run log details are now automatically visible with the right access scopes"
      url: "https://shopify.dev/changelog/function-run-log-details-are-now-automatically-visible-with-the-right-access-scopes"
    - title: "Shopify Functions — dokumentace"
      url: "https://shopify.dev/docs/apps/build/functions"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
    - title: "Settings ukáže, které apps používají Extensions a Functions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/see-which-apps-use-extensions-functions/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Function run logs v Dev Dashboardu jsou nyní automaticky přístupné podle access scopes udělených appce merchantem — logs viditelné když má app potřebné scopes pro čtení polí přes GraphQL Admin API."
tagy: [functions, dev-dashboard, logs, debugging]
---

## Co se mění
**Function run logs** v Dev Dashboardu se zobrazují **automaticky** na základě **access scopes** udělených appce merchantem. Pokud app má potřebné scopes pro čtení polí dotazovaných z GraphQL Admin API, logy jsou viditelné. Předtím vyžadovalo manuální setup.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Functions implementujeme minimálně.
