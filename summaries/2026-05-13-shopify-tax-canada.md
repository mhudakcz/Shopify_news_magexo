---
date: 2026-05-13
title: "Shopify Tax rozšířena na Kanadu (GST, HST, PST, QST)"
title_en: "Shopify Tax has expanded to Canada"
slug: shopify-tax-canada
zdroj: https://changelog.shopify.com/posts/shopify-tax-has-expanded-to-canada
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Tax product feature pro Canadian merchants. Tax calculations probíhají v Shopify side, naše integrace dostávají finální amounts v orderech."
dotcene_klienty: []

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
