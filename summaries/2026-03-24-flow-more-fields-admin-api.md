---
date: 2026-03-24
title: "Flow: více polí z Admin API jako native action"
title_en: "Flow: More fields from Shopify Admin API are available"
slug: flow-more-fields-admin-api
zdroj: https://changelog.shopify.com/posts/flow-more-of-shopify-s-admin-api-is-now-a-native-action
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow rozšiřuje native action coverage Admin API. Méně potřeba custom HTTP requestů — relevantní pokud nabízíme custom Flow workflows."
kontext:
  background: |
    Shopify Flow je bezplatná platforma pro vizuální automatizaci e-commerce procesů, dostupná od plánu Basic. Workflow se skládá z triggeru, volitelných podmínek a jedné nebo více akcí. Akce jsou klíčovým stavebním kamenem: provádějí konkrétní operace — změna tagu, odeslání e-mailu, aktualizace záznamu. Native actions jsou akce přímo vestavěné do Flow, které Shopify spravuje a udržuje automaticky.

    Před touto změnou mnoho polí Admin API — zejména těch, která vyžadují argumenty (například `product.inCollection(collectionId)`) — nebylo v nativních akcích Flow dostupných. Vývojáři museli tato data získávat přes akci „Send HTTP request", která vyžaduje ruční sestavení dotazu, ošetření odpovědí a průběžnou údržbu při změnách API. Tento přístup zvyšoval technickou složitost no-code workflows a ztěžoval jejich správu.

    Rozšíření native coverage znamená, že obchodníci i vývojáři mohou přistupovat k téměř všem polím Admin API přímo z editoru Flow, bez nutnosti psát HTTP requesty. Nativní pole se automaticky přizpůsobují změnám API na straně Shopify. Tato změna zapadá do širšího trendu rozšiřování Flow o pokročilejší datové akce — v březnu 2026 přibyly souběžně i nové „Get data" akce pro workflow runs, abandoned checkouts a inventory items.

    Do budoucna lze očekávat, že rostoucí native coverage sníží závislost na Send HTTP request a přiblíží Flow plnohodnotnému no-code rozhraní nad celým Admin API grafem.

  zdroje:
    - title: "Flow: More of Shopify's Admin API is now a native action"
      url: "https://changelog.shopify.com/posts/flow-more-of-shopify-s-admin-api-is-now-a-native-action"
    - title: "Flow: nové 'Get data' akce pro workflows, abandoned checkouts, inventory, pages"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-new-actions-get-data/"
    - title: "Shopify Flow — přehled dokumentace"
      url: "https://help.shopify.com/en/manual/shopify-flow"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Téměř všechna pole Shopify Admin API jsou nyní nativně dostupná ve Flow akcích — včetně těch, co vyžadovaly arguments. Eliminuje manuální HTTP request building."
tagy: [flow, admin-api, native-action]
souvisejici: [flow-new-actions-get-data]
---

## Co se mění
**Shopify Flow** nyní nativně volá **téměř všechna pole Admin API** — i ty, které vyžadují argumenty. Předtím spousta polí potřebovala manuální HTTP request action.

## Použití v Integrátoru
**Možná** — pokud klient buduje Flow workflows přes naše data, méně custom HTTP buildingu.
