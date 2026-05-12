---
date: 2026-05-07
title: "Publish/unpublish product variants nezávisle od produktu (API 2026-07)"
title_en: "Publish and unpublish product variants independently from product"
slug: publish-unpublish-variants-independently
zdroj: https://shopify.dev/changelog/publish-and-unpublish-product-variants-independently-from-product
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-12

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: true

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 30+ product methods včetně variant operations (appendProductVariantImages, getAllProductVariants, getProductVariantBySku, createProductOptions). ProductVariant nyní implementuje Publishable interface — můžeme variantu publikovat/skrýt per channel bez ovlivnění product-level publishing."
dotcene_klienty: []
souvisejici: [2048-variants-per-product]

tldr: "Od API 2026-07 je ProductVariant typu Publishable — varianty lze publikovat/skrýt per channel nezávisle na úrovni produktu. Užitečné pro klienty s velkou produktovou maticí, kteří chtějí granulární kontrolu."
tagy: [product, variant, publish, channel, breaking-friendly]
---

## Co se mění
V Admin GraphQL API verze **2026-07** typ `ProductVariant` implementuje **Publishable** interface (stejně jako Product). Důsledek:
- Variantu lze **publikovat / unpublikovat per sales channel**, nezávisle na publikaci produktu
- Stejné Publishable mutace (`publishablePublish`, `publishableUnpublish`) fungují pro variants
- Produkt může být published, ale konkrétní varianta hidden (např. „velikost XXL jen na e-shopu, ne na Shop appce")

Souvisí s [Limit 2048 variant per produkt](../zmena/2048-variants-per-product/) — granulárnější control u velkých matic.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše product/variant queries (`getAllProductVariants`, `getProductVariantBySku`) mohou nově dostat `publishedOnChannel` selektor per variantu. Pro mutace lze rozšířit `publishablePublish` flow o variant-level targeting.

Audit: pokud naše sync flow z ERP do Shopify aktuálně publikuje produkt jako celek, můžeme nově nabídnout granulárnější model (např. „tyto SKU ano, tyto ne na konkrétní kanál"). Backwards compatible.

**Pro PM / PO:**
Funkce pro **B2B / multi-channel** klienty. Typický scénář: klient prodává různé varianty na různých marketplaces (např. velkoodběratelské balení jen B2B kanál, retail balení DTC).

## Použití v Integrátoru
**Ano** — máme heavy product/variant use. Refactor opportunity pro multi-channel sync flow. Vyžaduje upgrade API na 2026-07.

## Rizika a edge cases
- Hidden variant zůstává v databázi a může být cílem fulfillmentu — sync flow s WMS musí filtrovat podle published status
- Frontend (theme) musí ošetřit, že produkt má varianty, ale některé jsou hidden na daném kanálu
