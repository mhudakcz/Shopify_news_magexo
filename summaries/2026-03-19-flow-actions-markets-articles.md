---
date: 2026-03-19
title: "Flow: nové akce pro získání dat o markets a articles"
title_en: "Flow: New actions to get data about markets and articles"
slug: flow-actions-markets-articles
zdroj: https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-markets-and-articles
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Flow extension. Markets/articles endpoints nepoužíváme."
kontext:
  background: |
    Shopify Flow rozlišuje dva typy akcí: akce, které provádějí změny (vytvoření tagu, odeslání e-mailu, HTTP request), a akce pro načítání dat — tzv. "get data" akce. Ty slouží k tomu, aby workflow mohlo pracovat s aktuálními hodnotami ze store v průběhu svého běhu, nikoli pouze s daty z triggeru. Výsledek "get data" akce je dostupný jako proměnná v podmínkách i v následujících krocích workflow.

    Shopify Markets reprezentuje infrastrukturu pro mezinárodní prodej — každý market je skupina zemí se společnou měnou, jazykem a cenovými pravidly. Blog articles jsou záznamy obsahu vázané na blog resource v administraci; obchodníci je používají k informování zákazníků o novinkách, návodech nebo produktových aktualitách. Oba tyto zdroje byly dříve v rámci Flow dostupné pouze jako triggery nebo metadata v objednávkách, nikoli jako samostatně dotazovatelné entity.

    Možnost načíst až 100 záznamů markets nebo articles v rámci jednoho workflow otvírá automatizační scénáře, které dříve vyžadovaly custom aplikaci nebo ruční krok: například workflow, které každý den zkontroluje seznam aktivních markets a odešle report, nebo automatické zpracování nově publikovaných článků — přidání tagu, notifikace do Slacku nebo synchronizace s externím CMS.

    Přidání "get data" akcí pro Markets a Articles navazuje na trend rozšiřování Flow jako datové orchestrační vrstvy — v témže období Flow získalo i notes pro dokumentaci workflows a plánuje se napojení na další Shopify zdroje dat.
  zdroje:
    - title: "Flow: New actions to get data about markets and articles — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/flow-new-actions-to-get-data-about-markets-and-articles"
    - title: "Shopify Flow — přehled dokumentace"
      url: "https://help.shopify.com/en/manual/shopify-flow"
    - title: "Flow: dokumentování workflows s notes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-document-workflows-notes/"
    - title: "Theme customizace per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-themes-per-market/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Flow přidává Get market data a Get article data akce — vrací až 100 záznamů customizovaných market info nebo blog article details."
tagy: [flow, markets, articles]
---

## Co se mění
**Flow** dostává 2 nové akce: **Get market data** a **Get article data**. Vrací až 100 záznamů s market info (currency, languages, regions) nebo blog article details.

## Použití v Integrátoru
**Nepoužíváme** — markets/articles endpoints leží mimo naši codebase.
