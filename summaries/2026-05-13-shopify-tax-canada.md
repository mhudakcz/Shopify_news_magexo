---
date: 2026-05-13
title: "Shopify Tax rozšířena na Kanadu (GST, HST, PST, QST)"
title_en: "Shopify Tax has expanded to Canada"
slug: shopify-tax-canada
zdroj: https://changelog.shopify.com/posts/shopify-tax-has-expanded-to-canada
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Tax product feature pro Canadian merchants. Tax calculations probíhají v Shopify side, naše integrace dostávají finální amounts v orderech."
dotcene_klienty: []

kontext:
  background: |
    Shopify Tax je nativní daňová služba integrovaná přímo do Shopify Adminu, která merchantům poskytuje automatizované výpočty daně z prodeje, kategorizaci produktů a přehledy daňových povinností — bez potřeby aplikací třetích stran. Cílem je minimalizovat manuální konfiguraci a zajistit soulad s lokálními daňovými pravidly na různých trzích.

    Kanadský daňový systém patří k nejvíce fragmentovaným na světě: GST (federální daň), HST (harmonizovaná daň kombinující federální a provinční složku), PST (čistě provinční daň), QST (Quebecká obdoba PST) a RST se aplikují různě v závislosti na provincii, kategorii zboží i způsobu dopravy. Shopify Tax dříve pokrýval USA, EU a Velkou Británii; expanze na Kanadu v květnu 2026 rozšiřuje geografický dosah o tento složitý multi-jurisdikční trh.

    Pro merchanty prodávající v Kanadě znamená tato funkce automatické přiřazení správné daňové kategorie produktu, výpočet sazby per provincie při checkoutu a sledování prahu, od kterého vzniká povinnost daňové registrace v další provincii (tzv. tax liability insights). Shopify zároveň zobrazuje jednotlivé sazby zákazníkovi přímo v košíku, čímž zajišťuje transparentnost a soulad s kanadskými spotřebitelskými normami.

    Funkce navazuje na širší Shopify daňový ekosystém: zákaznická daňová čísla jsou přístupná přes `Customer.taxSettings` v Admin API od verze 2026-07, zatímco pro mezinárodní trhy s tax-inclusive zobrazením cen slouží dynamic tax-inclusive pricing v rámci Shopify Markets.
  zdroje:
    - title: "Shopify Tax has expanded to Canada — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/shopify-tax-has-expanded-to-canada"
    - title: "Shopify Tax — Shopify Help Center"
      url: "https://help.shopify.com/en/manual/taxes/shopify-tax"
    - title: "Customer.taxSettings dostupné v Admin API od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customer-tax-settings-admin-api/"
    - title: "Updated list of tax-inclusive countries pro dynamic pricing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/tax-inclusive-countries-update/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Tax nyní dostupná pro kanadské merchanty — pokročilé kalkulace GST/HST/PST/QST/RST. Smart categorization, shipping tax na individual goods, tax liability insights per provincie."
tagy: [tax, canada, gst, hst, multi-jurisdiction]
---

## Co se mění
**Shopify Tax** product (pokročilé tax kalkulace, dříve US/EU) rozšířen na **Kanadu**:
- GST, HST, PST, QST, RST kalkulace per provincii
- **Smart categorization** — automatické tax rules pro produkty
- Shipping tax na individual goods (ne flat per order)
- **Tax liability insights** per provincii — kdy je třeba registrovat tax in another province

## Použití v Integrátoru
**Nepoužíváme** — Shopify Tax je merchant config v Adminu, tax částky v orderu už zahrnují vše. Naše ERP sync dostává final amounts.
