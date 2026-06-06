---
date: 2026-04-27
title: "Returns a exchanges přímo v cartu pro POS"
title_en: "Returns and exchanges in cart for POS"
slug: pos-returns-exchanges-cart
zdroj: https://changelog.shopify.com/posts/returns-and-exchanges-in-cart-for-pos
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-specific UI feature. Naše integrace neimplementují POS extensions."
kontext:
  background: |
    Shopify Point of Sale (POS) je aplikace pro fyzické prodejny, která umožňuje zpracovávat transakce přímo na místě prodeje — na tabletu nebo telefonu. Vrácení zboží (return) a výměna (exchange) jsou standardní součástí retailového provozu: zákazník přinese produkt zpět a obsluha musí rozhodnout o refundu nebo náhradním zboží.

    Historicky Shopify POS zpracovával tyto operace v oddělených obrazovkách — obsluha musela opustit košík, přepnout do jiného flow a po dokončení se vrátit. Toto roztříštění zpomalovalo práci na pokladně a zvyšovalo riziko chyb při přepínání kontextu. Sloučení do jednoho cart-based workflow je přirozeným vývojem směrem k plynulejšímu retailovému UX.

    Nová oprávnění (Return permissions) a nastavení schválení manažerem dávají provozovatelům prodejen přesnou kontrolu nad tím, kdo může zahájit vrácení, spravovat restocking nebo dokončit probíhající return — bez nutnosti volat správce kvůli každé operaci. To je relevantní zejména pro sítě prodejen s různými úrovněmi zaměstnaneckých práv.

    Tato funkce úzce souvisí s dalšími POS vylepšeními v 11.5, jako je změna zaokrouhlování fixních slev na položky nebo možnost naskenovat slevové kódy přímo v košíku — Shopify systematicky posiluje POS jako plnohodnotnou alternativu k dedikovaným pokladním systémům.
  zdroje:
    - title: "Shopify Changelog: Returns and exchanges in cart for POS"
      url: "https://changelog.shopify.com/posts/returns-and-exchanges-in-cart-for-pos"
    - title: "POS 11.5: změna zaokrouhlování fixních slev na položky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-115-rounding-line-item-discounts/"
    - title: "Aplikace slev na položky přímo z refund page"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/apply-discounts-refund-page/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shopify POS v11.5 zpracuje returns, refundy a exchanges přímo v cartu s novými Return permissions a manager approval settings pro lepší operational control."
tagy: [pos, returns, exchanges, refund]
---

## Co se mění
Shopify **POS v11.5** zpracovává **returns, refundy a exchanges** přímo v cartu (předtím samostatný flow). Přidávají Return permissions a manager approval settings — větší kontrola nad tím, kdo může schvalovat returns.

## Použití v Integrátoru
**Nepoužíváme** — POS UI feature. Pro klienty s retailem stojí zato zmínit, jako moderní POS workflow.
