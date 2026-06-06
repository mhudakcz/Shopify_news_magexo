---
date: 2026-02-04
title: "Pickup in Store pro B2B zákazníky"
title_en: "Pickup in Store for B2B"
slug: pickup-in-store-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme draft order a fulfillment methods. B2B pickup flow vyžaduje konkrétní setup na úrovni location + delivery method, naše integrace mohou číst/zapisovat objednávky včetně pickup option."
dotcene_klienty: []

kontext:
  background: |
    Pickup in Store (vyzvednutí v prodejně) je doručovací metoda, při níž zákazník v checkoutu vybere konkrétní fyzickou lokaci merchantovy sítě a objednávku si tam osobně vyzvedne místo standardního zásilkového doručení. Shopify tuto metodu označuje interně jako local pickup a váže ji na nakonfigurované lokace (locations) obchodu s povoleným vyzvednutím.

    Historicky byla možnost local pickup dostupná výhradně pro DTC (direct-to-consumer) zákazníky. B2B segment v Shopify pracuje s entitami Company a CompanyLocation, které modelují firemní kupující a jejich pobočky — tyto entity mají vlastní checkout flow odlišný od běžného spotřebitelského nákupu. Rozšíření pickup option i na B2B checkout bylo logickým krokem k sjednocení omnichannel zkušenosti pro podnikové zákazníky, kteří si zboží například odvážejí sami ze skladu nebo z pobočky.

    Z praktického hlediska propojuje tato funkce B2B objednávky s offline distribučními uzly merchantovy sítě: velkoobchodní kupující si může při objednávce vybrat konkrétní sklad nebo prodejnu jako místo odběru. Pro fulfillment systémy a ERP integrace to znamená, že objednávka bude mít nastavenou delivery method jako pickup, nikoli shipping — tuto hodnotu je nutné správně zpracovat a předat do downstream systémů.

    Funkce je součástí širší vlny B2B vylepšení v rámci Shopify Editions Winter 2026, kam patří také dynamické platební podmínky, store credit pro B2B nebo pravidla pro schvalování objednávek. Společně posouvají Shopify blíže k plnohodnotnému B2B-first řešení pro komplexní velkoobchodní provoz.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Redesign local pickup UX v checkoutu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-pickup-checkout-redesign/"
    - title: "Rules for Order Review: dynamická pravidla pro schvalování objednávek"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rules-order-review-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "B2B zákazníci si mohou v checkoutu zvolit vyzvednutí v prodejně místo doručení."
tagy: [b2b, fulfillment, pickup, checkout]
---

## Co se mění
**Pickup in Store** doručovací metoda je nyní k dispozici pro **B2B kupující** v Shopify checkoutu. Dříve byla omezena na DTC zákazníky. Spojuje B2B objednávky s offline distribučními uzly merchanta.

## Použití v Integrátoru
**Možná** — pokud klient s B2B aktivuje pickup, naše integrace by měla správně přečíst delivery option a propsat ho do downstream systému (ERP, fulfillment).
