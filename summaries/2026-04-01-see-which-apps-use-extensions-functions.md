---
date: 2026-04-01
title: "Settings ukáže, které apps používají Extensions a Functions"
title_en: "See which apps use Extensions and Functions to power your checkout, online store, and more"
slug: see-which-apps-use-extensions-functions
zdroj: https://changelog.shopify.com/posts/see-which-apps-use-extensions-and-functions-to-power-your-checkout-online-store-and-more
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin Settings UI pro audit installed apps."
kontext:
  background: |
    Shopify Extensions jsou komponenty aplikací, které se vkládají do specifických částí obchodu — checkoutu, online storu, zákaznických účtů nebo POS systému. Umožňují aplikacím přidávat vlastní UI prvky, widgety nebo blokový obsah bez přímého zásahu do kódu tématu. Shopify Functions pak tvoří backend protějšek: jde o WebAssembly moduly, které přijímají JSON vstup a vracejí instrukce pro Shopify backend — typicky se uplatňují při výpočtu slev, validaci checkoutu, logistice doručení nebo zpracování plateb.

    Shopify platformu historicky rozšiřovaly Shopify Scripts — Ruby skripty dostupné pouze pro Plus plán. Od roku 2021 Shopify přešel na Functions jako jejich nástupce s podporou Rust a TypeScript, dostupných na všech plánech prostřednictvím veřejných app. Functions i Extensions jsou nasazovány jako součást aplikace přes Shopify CLI a podléhají schvalování v App Store, případně jsou dostupné jako custom apps. Tento ekosystém aplikací roste — průměrný merchant má nainstalováno desítky aplikací najednou.

    Bez centrálního přehledu bylo obtížné zjistit, které nainstalované aplikace aktivně využívají Extensions nebo Functions a kde konkrétně v obchodě jsou zapojeny. Nová sekce v Settings poskytuje merchantům jednoduché auditní rozhraní: vidí aktivní i neaktivní Extension sloty, zapojené Functions a status sběru dat přes Pixels — vše na jednom místě bez nutnosti procházet každou aplikaci zvlášť.

    Tento přehled doplňuje souběžnou funkci sledování API aktivity a oprávnění aplikací v Settings, společně tvoří ucelený nástroj pro správu a audit aplikačního ekosystému v Shopify Adminu.
  zdroje:
    - title: "See which apps use Extensions and Functions — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/see-which-apps-use-extensions-and-functions-to-power-your-checkout-online-store-and-more"
    - title: "Shopify Functions — dokumentace"
      url: "https://shopify.dev/docs/apps/build/functions"
    - title: "Tracking app activity a permissions ze Settings"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/track-app-activity-permissions/"
    - title: "Shopify Scripts budou deprecated 30. 6. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-scripts-deprecated-june-2026/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Settings v Adminu zobrazí, které app Extensions a Functions jsou aktivní napříč checkoutem, online store a POS, plus inactive opce a Pixel data collection status."
tagy: [admin, extensions, functions, audit]
---

## Co se mění
Settings v Adminu má novou sekci, která ukazuje **které apps používají Extensions a Functions** — v checkoutu, online storu, POS, atd. Plus zobrazení **inactive options** a **Pixel data collection status**.

Užitečné pro merchanty, kteří mají hodně instalovaných apps a chtějí vidět, co je aktivně zapojené.

## Použití v Integrátoru
**Nepoužíváme** — Admin UI nadstavba, ne API.
