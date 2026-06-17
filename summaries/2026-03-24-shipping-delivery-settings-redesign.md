---
date: 2026-03-24
title: "Shipping a delivery settings: čitelnější UI"
title_en: "Shipping and delivery settings are now easier to scan"
slug: shipping-delivery-settings-redesign
zdroj: https://changelog.shopify.com/posts/shipping-and-delivery-settings-are-now-easier-to-scan
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin UI redesign."
kontext:
  background: |
    Stránka Shipping and delivery v Shopify Adminu je centrálním místem, kde merchant konfiguruje veškerou logistiku doručení: přepravní profily (delivery profiles), zóny a sazby (shipping zones a rates), napojené dopravní účty (carrier accounts) a alternativní metody jako vyzvednutí nebo místní rozvoz. Každý delivery profile sdružuje produkty a lokace s příslušnými shipping zónami, čímž umožňuje diferencované sazby pro různé skupiny zboží.

    Správa dopravy patří k nejkomplexnějším sekcím Shopify Adminu — merchanté s rozsáhlým katalogem, více sklady nebo zahraničními trhy pracují s desítkami zón a profilů. Shopify průběžně modernizuje Admin UI v rámci svého design systému Polaris s cílem zlepšit skenování a snížit kognitivní zátěž. Redesign shipping stránky navazuje na stejnou iniciativu, která v únoru 2026 přepracovala vizuální hierarchii line items v objednávkách.

    Prakticky přináší reorganizace obsahu podle delivery method rychlejší orientaci bez nutnosti scrollovat nebo pamatovat si rozmístění. Trojsloupcové rozložení produktů, lokací a zón v profile rows a kontextová záhlaví sekcí s počty aktivních přepravců umožňují merchantovi okamžitý přehled. Všechna modální okna a formuláře zůstávají funkčně beze změny, redesign tedy nemá dopad na Admin API ani žádné aplikační integrace.

    Tato úprava úzce souvisí s paralelními vylepšeními shipping workflow vydanými v březnu 2026 — přibylá podpora dopravy v Quick Sale i rozšíření nastavení shipping options o per-option transit time a podmíněné free shipping thresholds.
  zdroje:
    - title: "Shipping and delivery settings are now easier to scan – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/shipping-and-delivery-settings-are-now-easier-to-scan"
    - title: "Updates to setting up shipping options – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/updates-to-setting-up-shipping-options"
    - title: "Shipping v Quick Sale – Shopify Archive"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shipping-quick-sale/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Shipping settings page reorganized podle delivery method s čistšími profile rows, sjednocenými listy a quick-glance context headers pro rychlejší navigaci."
tagy: [shipping, admin, ux]
---

## Co se mění
Shipping settings page má reorganizaci podle **delivery method**, s čistšími profile rows a context headers. Jednodušší orientace pro merchanty s mnoha shipping zónami.

## Použití v Integrátoru
**Nepoužíváme** — UI redesign.
