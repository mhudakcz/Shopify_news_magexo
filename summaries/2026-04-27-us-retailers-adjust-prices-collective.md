---
date: 2026-04-27
title: "US retaileři mohou upravit retail ceny na Shopify Collective"
title_en: "U.S. retailers can adjust retail prices on Shopify Collective"
slug: us-retailers-adjust-prices-collective
zdroj: https://changelog.shopify.com/posts/u-s-retailers-can-adjust-retail-prices-on-shopify-collective
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Collective je B2B marketplace funkce. Aktuálně Collective neintegrujeme."
kontext:
  background: |
    Shopify Collective je marketplace platforma provozovaná přímo v rámci Shopify ekosystému, která propojuje dvě strany: suppliery (značky a výrobci nabízející produkty) a retailery (obchodníci, kteří tyto produkty prodávají svým zákazníkům pod vlastním storefront). Na rozdíl od klasických dropshippingových aplikací třetích stran je Collective nativně integrováno do Shopify adminu, přičemž zásoby, objednávky a produkty se synchronizují automaticky.

    Klíčovým konceptem v Collective je cenová synchronizace (price sync): ve výchozím nastavení retailer přebírá maloobchodní ceny přímo od supplieru bez možnosti je upravit. Tento model zajišťoval cenovou konzistenci napříč prodejními kanály, ale omezoval obchodní flexibilitu retailerů — například při lokálních propagačních akcích, speciálních zákaznických segmentech nebo při zavádění produktu na jiný trh.

    Nová funkce dává US retailerům možnost price sync vypnout a nastavit vlastní maloobchodní ceny nezávisle na cenách supplieru — ať už vyšší nebo nižší. Tato flexibilita zapadá do širšího trendu Shopify posilovat autonomii retailerů v B2B a dropshipping kontextu. Supplier přitom vidí nastavenou cenu na detailu objednávky, jeho nákladová část se nemění. Změna je dostupná pouze v USA, kde Collective od svého spuštění v roce 2022 primárně operuje.

    Collective se tak přibližuje způsobu, jakým fungují B2B ceníkové katalogy — kde může každý partner mít vlastní ceny nezávisle na maloobchodním storefront. Pro retailery zvyklé na B2B katalogy (Price Lists) jde o konzistentní logiku: každý prodejní kanál si spravuje ceny autonomně.
  zdroje:
    - title: "U.S. retailers can adjust retail prices on Shopify Collective"
      url: "https://changelog.shopify.com/posts/u-s-retailers-can-adjust-retail-prices-on-shopify-collective"
    - title: "Shopify B2B pro všechny plány"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Compare-at prices v B2B catalogs"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/compare-at-prices-catalogs/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "US retaileři na Shopify Collective mohou nyní vypnout price sync a nastavit vlastní retail ceny nad nebo pod cenami suppliera. Suppliers vidí nastavené ceny v order detail."
tagy: [collective, b2b, pricing, marketplace, us-only]
---

## Co se mění
Shopify Collective (B2B marketplace propojující supplier brands a retailery) umožňuje **US retailerům** vypnout sync supplier-listed cen a nastavit **vlastní retail ceny**. Supplier vidí nastavenou cenu na order detail page.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Collective je separátní marketplace flow, neimplementujeme.
