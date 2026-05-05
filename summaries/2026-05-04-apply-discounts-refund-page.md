---
date: 2026-05-04
title: "Aplikace slev na položky přímo z refund page"
title_en: "Apply discounts to items on the refund page"
slug: apply-discounts-refund-page
zdroj: https://changelog.shopify.com/posts/apply-discounts-to-items-on-the-refund-page
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI feature v Adminu na refund page. Naše integrace nesahá na slevy během refundu."
tldr: "Merchant může nově přidat, upravit nebo odebrat slevu na položkách přímo na refund page bez navigace jinam — usnadňuje refund flow a zajišťuje přesné sales/tax reporty."
tagy: [refund, discount, admin-ui]
---

## Co se mění
Refund flow v Shopify Adminu nově umožňuje **přidat / změnit / odstranit slevu** přímo na refund page, bez nutnosti opouštět stránku. Cíl: přesnější tax a sales reporting při komplexních refundech.

## Použití v Integrátoru
**Nepoužíváme** — UI feature. Naše order/refund integrace volají standardní Admin API endpoints, tahle změna se nás přímo netýká.
