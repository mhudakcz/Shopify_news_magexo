---
date: 2026-03-26
title: "Updates v setting up shipping options"
title_en: "Updates to setting up shipping options"
slug: shipping-options-setup-updates
zdroj: https://changelog.shopify.com/posts/updates-to-setting-up-shipping-options
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shipping setup UI v Adminu."
kontext:
  background: |
    Shipping options (dříve nazývané "rates") jsou konfigurovatelné možnosti dopravy, které se zákazníkovi zobrazují při pokladně. Každá možnost sdružuje název přepravní metody, cenu, podmínky spouštění (hmotnost nebo hodnota košíku) a informaci o době doručení. Obchodník je spravuje v rámci shipping zón uvnitř delivery profilů v Shopify Adminu.

    Historicky bylo nastavení shipping rates poměrně strohé — jedna sazba, jedna podmínka, žádný popis. Shopify v průběhu let přidávalo carrier-calculated rates a podmíněné sazby, avšak správa zůstávala roztříštěná. Březnová 2026 aktualizace je součástí širší iniciativy přepracování Admin UX, která zahrnovala také redesign celé stránky Shipping and delivery pro přehlednější orientaci a rozšíření dopravy v Quick Sale.

    Prakticky přibyla tři klíčová zlepšení: (1) per-option transit time — každá možnost dopravy může mít vlastní odhad doby doručení viditelný zákazníkem; (2) vlastní popis option — obchodník může přidat krátký text objasňující podmínky; (3) automatický free shipping threshold — po překročení nastavené hodnoty nebo hmotnosti se zákazníkovi nabídne doprava zdarma bez nutnosti ručního slevového kódu. Podmínky lze kombinovat na základě hmotnosti i ceny objednávky.

    Tato vylepšení nemají dopad na Admin GraphQL API — jde o konfiguraci v UI, nikoli o nové API typy. Avšak shipping data se promítají do fulfillment flow; od API 2026-07 lze navíc na FulfillmentOrderLineItem přímo dotazovat pole shippingLine, které vrací použitou shipping method i s náklady.
  zdroje:
    - title: "Updates to setting up shipping options – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/updates-to-setting-up-shipping-options"
    - title: "Shipping and delivery settings are now easier to scan – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/shipping-and-delivery-settings-are-now-easier-to-scan"
    - title: "Shipping a delivery settings: čitelnější UI – archiv"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-delivery-settings-redesign/"
    - title: "shippingLine pole na FulfillmentOrderLineItem – archiv"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-line-fulfillmentorderlineitem/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shipping setup zjednodušený — per-option transit time, custom descriptions, free shipping thresholds, podpora weight a price range podmínek."
tagy: [shipping, admin, setup]
---

## Co se mění
Shipping setup v Adminu je čitelnější: per-option transit time, custom descriptions, free shipping thresholds — vše s podporou weight i price range conditions.

## Použití v Integrátoru
**Nepoužíváme** — Admin shipping config.
