---
date: 2026-04-01
title: "Multi-channel support pro sales channel apps"
title_en: "Multi-channel support for sales channel apps"
slug: multi-channel-sales-channel-apps
zdroj: https://shopify.dev/changelog/multi-channel-support-for-sales-channel-apps
shrnuto_dne: 2026-04-29

kategorie: [nova-api, fyi]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se sales channel apps (typicky integrace s externími marketplaces — Amazon, Google Shopping). Neděláme sales channel apps."
dotcene_klienty: []

kontext:
  background: |
    Sales channel aplikace jsou speciální kategorií Shopify aplikací, jejichž úkolem je propojit obchod s prodejními plochami mimo Shopify — typicky s externími marketplaces a platformami jako Google Shopping, Meta nebo Amazon. Na rozdíl od běžných aplikací mají privilegovaný přístup k publikačnímu systému Shopify a spravují vlastní kanál (channel), přes který řídí viditelnost produktů.

    Historicky platilo omezení: jedna sales channel aplikace mohla na daném shopu spravovat pouze jeden kanál. To komplikovalo scénáře, kde jeden dodavatel provozuje více trhů nebo účtů pod jednou aplikací — například oddělenou integraci pro různé země nebo různé reklamní účty stejné platformy. Vývojáři toto obcházeli zakládáním více samostatných aplikací, což zvyšovalo komplexitu správy.

    API verze 2026-04 přináší nové mutace `channelCreate`, `channelUpdate`, `channelDelete` a query `channel` / `channelByHandle`, které umožňují spravovat více kanálů pod jednou aplikací. Každý kanál má vlastní specifikaci, externí účet a ID. Starší mutace jako `publishablePublishToCurrentChannel` a pole `AppInstallation.channel` jsou označeny jako zastaralé a budou postupně odstraněny.

    Tato změna je relevantní zejména pro partnery budující komplexní marketplace integrátory nebo multi-region řešení. Pro standardní data-sync aplikace (synchronizace ERP, ceníků, skladů) se nic nemění, protože ty Sales Channel klasifikaci nevyužívají.
  zdroje:
    - title: "Shopify Changelog: Multi-channel support for sales channel apps"
      url: "https://shopify.dev/changelog/multi-channel-support-for-sales-channel-apps"
    - title: "Shopify Docs: Build sales channel apps"
      url: "https://shopify.dev/docs/apps/build/sales-channels"
    - title: "Publish/unpublish product variants nezávisle od produktu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Sales channel apps mohou nyní mít více kanálů per shop s oddělenými specifikacemi."
tagy: [sales-channel, marketplace, multi-channel]
editions_release: spring-2026
---

## Co se mění
Aplikace typu **Sales Channel** (oficiální klasifikace v Shopify pro integrace prodávající přes externí marketplace — Amazon, Google Shopping, Facebook atd.) mohou v API 2026-04 mít **více kanálů per shop** s oddělenými specifikacemi a accounts. Dříve byl 1 kanál per app per shop.

## Použití v Integrátoru
**Nepoužíváme** — neděláme sales channel apps. Naše integrace jsou typicky data-sync (ERP, marketplace) bez Sales Channel klasifikace.
