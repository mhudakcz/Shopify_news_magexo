---
date: 2026-03-30
title: "Vytváření pickup orders v Shopify POS"
title_en: "Create pickup orders in Shopify POS"
slug: create-pickup-orders-pos
zdroj: https://changelog.shopify.com/posts/create-pickup-orders-in-shopify-pos
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS feature."
kontext:
  background: |
    Pickup order je objednávka, při níž zákazník zaplatí předem a zboží si fyzicky vyzvedne v prodejně ke konkrétnímu datu nebo termínu v budoucnosti. Pick-and-pack workflow označuje proces přípravy objednávky: pracovník prochází sklad, vychystá položky a připraví je k výdeji. V kontextu Shopify POS jde o standardizovaný postup správy otevřených objednávek přímo z aplikace prodejny.

    Shopify POS prošel od roku 2023 výraznou modernizací s cílem sjednotit online a offline prodejní kanály pod jedinou platformu. Předchozí verze POS umožňovaly pouze přímý prodej přes pokladnu — objednávky s odloženým vyzvednutím bylo nutné zakládat ručně přes Shopify Admin. Tlak ze strany maloobchodníků s made-to-order zbožím (šperky na zakázku, výrobky na míru, sezónní předprodeje) vedl k tomu, že Shopify integroval tuto funkci přímo do POS aplikace.

    Prakticky tato změna propojuje fyzické prodejní místo s fulfillment workflow: personál může přijmout platbu přímo na prodejně a zároveň vytvořit objednávku, která čeká na přípravu nebo dodání zboží. Funkce navazuje na další vylepšení v oblasti pickup: automatické transfery zásob z více lokací pro pickup objednávky, pickup v B2B checkoutu nebo redesign výběru lokace v online checkoutu.

    Tím se pickup orders v POS stávají součástí širší omnichannel strategie: zákazník nakoupí osobně, zboží se připraví podle standardního pick-and-pack procesu a vyzvednutí proběhne ve sjednoceném toku spolu s ostatními kanály.
  zdroje:
    - title: "Create pickup orders in Shopify POS"
      url: "https://changelog.shopify.com/posts/create-pickup-orders-in-shopify-pos"
    - title: "Pickup in store: auto-transfer z více lokací"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-multiple-locations-transfer/"
    - title: "Pickup in Store pro B2B zákazníky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-in-store-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "POS v11.3 umožňuje personálu vytvořit budoucí pickup orders přímo v prodejně — pomocí stávajícího pick-and-pack workflow pro made-to-order a customizované zboží."
tagy: [pos, pickup, order, made-to-order]
---

## Co se mění
POS v11.3: personál může v prodejně vytvořit **future pickup order** s pomocí existujícího pick-and-pack workflow. Vhodné pro made-to-order zboží, customizované produkty, situace „zaplať teď, vyzvedneš později".

## Použití v Integrátoru
**Nepoužíváme** — POS feature.
