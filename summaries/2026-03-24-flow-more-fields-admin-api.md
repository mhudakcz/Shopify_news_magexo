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
tldr: "Téměř všechna pole Shopify Admin API jsou nyní nativně dostupná ve Flow akcích — včetně těch, co vyžadovaly arguments. Eliminuje manuální HTTP request building."
tagy: [flow, admin-api, native-action]
souvisejici: [flow-new-actions-get-data]
---

## Co se mění
**Shopify Flow** nyní nativně volá **téměř všechna pole Admin API** — i ty, které vyžadují argumenty. Předtím spousta polí potřebovala manuální HTTP request action.

## Použití v Integrátoru
**Možná** — pokud klient buduje Flow workflows přes naše data, méně custom HTTP buildingu.
