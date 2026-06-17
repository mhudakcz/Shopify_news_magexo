---
date: 2026-05-07
title: "Publish/unpublish product variants nezávisle od produktu (API 2026-07)"
title_en: "Publish and unpublish product variants independently from product"
slug: publish-unpublish-variants-independently
zdroj: https://shopify.dev/changelog/publish-and-unpublish-product-variants-independently-from-product
zdroj_kanal: dev-changelog
editions_release: spring-2026
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

kontext:
  background: |
    Publishable je GraphQL interface v Shopify Admin API, který definuje sadu polí a mutací pro ovládání viditelnosti zdroje napříč distribučními kanály. Původně ho implementovaly pouze typy Product a Collection — každý takový zdroj lze publikovat nebo skrýt na konkrétní prodejní kanál (online obchod, Shop aplikace, marketplace) prostřednictvím mutací publishablePublish a publishableUnpublish. Interface zahrnuje pole jako resourcePublicationsV2, publishedOnPublication a availablePublicationsCount.

    Shopify postupně rozšiřuje model publikování směrem k větší granularitě. Zatímco dříve bylo publikování vždy záležitostí celého produktu, rostoucí poptávka po multi-channel distribucích — zejména s nárůstem B2B a marketplace kanálů — ukázala potřebu jemnějšího řízení na úrovni jednotlivých SKU. Souběžně Shopify zvýšil limit variant na 2 048 per produkt, čímž otevřel prostor pro rozsáhlé produktové matice, kde plošné publikování celého produktu přestává být praktické.

    Rozšíření Publishable interface na ProductVariant umožňuje merchantům cíleně řídit dostupnost konkrétních SKU per kanál bez nutnosti duplikovat produkty nebo měnit jejich celkový stav. To má přímý dopad na produktové feedy, synchronizaci s ERP systémy a výkon na sales channel aplikacích, které musí nově respektovat stav publikace na úrovni variant. Opt-out model (varianty jsou výchozně publikovány spolu s produktem) zajišťuje zpětnou kompatibilitu.
  zdroje:
    - title: "Shopify Changelog: Publish and unpublish product variants independently from product"
      url: "https://shopify.dev/changelog/publish-and-unpublish-product-variants-independently-from-product"
    - title: "Shopify Admin GraphQL: Publishable interface"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable"
    - title: "Archiv: Limit variant per produkt zvýšen z 100 na 2048"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/2048-variants-per-product/"
    - title: "Archiv: Multi-channel support pro sales channel apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multi-channel-sales-channel-apps/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
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
