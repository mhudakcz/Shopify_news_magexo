---
date: 2026-05-03
title: "Označení fulfillments bez trackingu jako delivered"
title_en: "Mark fulfillments without tracking as delivered"
slug: mark-fulfillments-delivered-without-tracking
zdroj: https://changelog.shopify.com/posts/mark-fulfillments-without-tracking-as-delivered
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme fulfillment methods (createFulfillment, getFulfillmentOrderByOrderId atd.). Tato UI změna umožňuje merchantovi manuálně označit delivery — pokud naše integrace syncuje fulfillment statusy, může se hodit i programaticky."
tldr: "Personál může nově označit shipping fulfillments bez carrier trackingu jako delivered přímo z Fulfilled card nebo Orders page — pomáhá merchantům s nepodporovanými carriery udržovat přesný delivery status."
tagy: [fulfillment, delivery, admin-ui]
---

## Co se mění
V Shopify Adminu lze nyní **manuálně označit fulfillment jako delivered** i bez carrier trackingu. Funguje na Fulfilled card a Orders page. Užitečné pro merchanty s lokálními kurýry nebo carrier mimo standardní integrace.

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace syncuje fulfillment status do downstream systému (ERP, CRM), nově se může objevit `delivered` status i bez tracking eventu. Naše `getOrdersFulfillmentOrdersWithLineItemsByOrderIds` query může vrátit tento stav.

## Použití v Integrátoru
**Možná** — fulfillment methods používáme. Doporučuji ověřit, jestli sync flow správně handluje delivered status bez tracking number.
