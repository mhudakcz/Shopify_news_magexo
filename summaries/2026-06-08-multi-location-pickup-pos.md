---
date: 2026-06-08
title: "Multi-location pickup nově v POS"
title_en: "Multi-location pickup is now available in POS"
slug: multi-location-pickup-pos
zdroj: https://changelog.shopify.com/posts/multi-location-pickup-is-now-available-in-pos
shrnuto_dne: 2026-06-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-08
pouzivame_v_integratoru: ne
dukaz_integratoru: "POS feature, naší integrace se přímo netýká."
dotcene_klienty: []
souvisejici: [pickup-multiple-locations-transfer, create-pickup-orders-pos, ship-and-pickup-one-order-preview]
kontext:
  background: |
    Shopify POS Pro je prémiový tarif POS aplikace určený pro fyzické prodejny. Pickup order je objednávka, při níž zákazník zaplatí předem a zboží si fyzicky vyzvedne v konkrétní prodejně — personál ji zpracovává standardním pick-and-pack workflow. Pickup-enabled location je prodejna explicitně označená v Shopify Admin jako dostupná pro vyzvednutí, přičemž každá taková lokace udržuje vlastní zásoby.

    Shopify od roku 2024 systematicky rozšiřuje multi-location a omnichannel schopnosti POS: nejprve přidal možnost vytvářet pickup orders přímo z POS (březen 2026), poté automatické inventory transfery z více lokací při nedostatku zásob (březen 2026) a mixed shipping+pickup checkout pro Plus/Enterprise (červen 2026). Nyní tento roadmap pokračuje umožněním výběru pickup lokace přímo při zakládání objednávky v POS — personál dosud musel pickup vždy přiřadit k aktuální prodejně.

    Prakticky tato změna umožňuje personálu stávající prodejny přijmout a zaplatit objednávku, přičemž vyzvednutí může proběhnout v jakékoli jiné pickup-enabled lokaci ve stejné zemi. Zákazník je tak obsloužen v prodejně, která mu je nejblíže nebo kterou právě navštíví, i kdyby samotné zboží bylo dostupné pouze jinde. Live inventory zobrazení pro každou lokaci pomáhá personálu okamžitě rozhodnout, kde a zda lze objednávku splnit.
  zdroje:
    - title: "Shopify Changelog: Multi-location pickup in POS"
      url: "https://changelog.shopify.com/posts/multi-location-pickup-is-now-available-in-pos"
    - title: "Pickup in store: auto-transfer z více lokací"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-multiple-locations-transfer/"
    - title: "Vytváření pickup orders v Shopify POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/create-pickup-orders-pos/"
  generated_at: 2026-06-08T06:11:45Z
  model: claude-sonnet-4-6
tldr: "POS v11.8 (POS Pro) umožňuje personálu přiřadit pickup order k libovolné pickup-enabled lokaci ve stejné zemi — přímo z košíku, s live přehledem zásob na každé lokaci."
tagy: [pos, pickup, location, fulfillment]
zdroj_kanal: merchant-changelog
editions_release: spring-2026
---

## Co se mění

POS verze 11.8 přináší interaktivní řádek **Pickup location** v košíku POS Pro aplikace. Personál může při zakládání objednávky jedním tapem přepnout na jinou pickup-enabled lokaci v rámci stejné země a okamžitě vidí **live inventory** pro každou dostupnou prodejnu.

Technické požadavky:
- POS verze 11.8 nebo novější
- POS Pro tarif
- Minimálně dvě pickup-enabled lokace ve stejné zemi

## Časová osa

- **2026-06-08** — funkce spuštěna, dostupná v POS v11.8+

## Dopad pro nás

POS feature. Naše integrace pracuje s Admin API a fulfillment orders na backendu — výběr pickup lokace v POS UI se naší vrstvy přímo nedotýká.

Pickup orders vytvořené přes multi-location POS se v Admin GraphQL API projeví standardně jako `FulfillmentOrder` s `deliveryMethod: PICK_UP` přiřazený k příslušné lokaci — stejně jako dříve. Žádný rework není potřeba.

## Použití v Integrátoru

**Nepoužíváme** — POS feature, naší integrace se přímo netýká.
