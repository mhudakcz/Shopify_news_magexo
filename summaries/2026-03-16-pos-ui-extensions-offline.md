---
date: 2026-03-16
title: "POS UI extensions umí běžet bez network access"
title_en: "POS UI extensions can now run without network access"
slug: pos-ui-extensions-offline
zdroj: https://shopify.dev/changelog/pos-ui-extensions-can-now-run-without-network-access
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: pos
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se POS UI extensions. Neděláme POS extensions."
dotcene_klienty: []

kontext:
  background: |
    POS UI extensions jsou rozšíření uživatelského rozhraní pro Shopify Point of Sale, která umožňují vývojářům přidávat vlastní funkcionalitu přímo do prodejního rozhraní. Rozlišují se tři typy cílů: Tile (dlaždice na domovské obrazovce), Action (spouštěče workflow, modální okna) a Block (vložený obsah na nativních obrazovkách). Jsou napsané v TypeScript/JSX s Preact a konfigurované přes soubor `shopify.extension.toml`.

    Shopify POS extensions jsou součástí širší rodiny UI extensions zahrnující také checkout extensions a customer account extensions. Jejich společným záměrem je rozšiřitelnost bez nutnosti forku nativního kódu aplikace. Motivací pro offline podporu je realita maloobchodního prostředí — prodejci na pop-up trzích, venkovních akcích nebo ve velkých prostorách s nestabilním Wi-Fi potřebují, aby jejich přizpůsobená POS logika fungovala i bez internetu.

    Příznak `runs_offline = true` v sekci `[extensions.supported_features]` souboru `extension.toml` aktivuje offline režim od POS verze 11.0. V tomto režimu mají extensions přístup k API, která nepotřebují síť: Storage API, Locale API, Scanner API a Camera API. Tato schopnost zvyšuje spolehlivost celého prodejního procesu a rozšiřuje použitelnost POS extensions do fyzicky náročnějších prostředí.

    Do budoucna lze očekávat rozšiřování offline-first přístupu i na další části POS ekosystému, protože Shopify dlouhodobě posiluje odolnost svého maloobchodního řešení vůči výpadkům konektivity.
  priklad: |
    [extensions.supported_features]
    runs_offline = true
  zdroje:
    - title: "Shopify Changelog: POS UI extensions can now run without network access"
      url: "https://shopify.dev/changelog/pos-ui-extensions-can-now-run-without-network-access"
    - title: "Shopify Docs: POS UI Extensions API"
      url: "https://shopify.dev/docs/api/pos-ui-extensions"
    - title: "Archiv: UI Extensions tester"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ui-extensions-tester/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "POS extensions s flag runs_offline=true zůstanou funkční i při výpadku sítě."
tagy: [pos, ui-extensions, offline]
editions_release: spring-2026
---

## Co se mění
POS UI extensions mohou nastavit flag `runs_offline = true` v manifest. Při výpadku sítě extension zůstane funkční (offline mode), místo aby zhasla. Vhodné pro extensions, které pracují s lokálním stavem.

## Použití v Integrátoru
**Nepoužíváme** — POS UI extensions neimplementujeme.
