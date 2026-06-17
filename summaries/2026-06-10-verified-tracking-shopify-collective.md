---
date: 2026-06-10
title: "Verified Tracking badge a shipping metriky pro Shopify Collective dodavatele"
title_en: "Shipping performance metrics and Verified Tracking badge in Shopify Collective"
slug: verified-tracking-shopify-collective
zdroj: https://changelog.shopify.com/posts/shipping-performance-metrics-and-verified-tracking-badge-in-shopify-collective
shrnuto_dne: 2026-06-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-10
pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Collective supplier kvality feature, naší integrace se netýká."
dotcene_klienty: []
souvisejici: [us-retailers-adjust-prices-collective, ship-and-pickup-one-order-preview, blog-velkoobchod-doplnky]
kontext:
  background: |
    Shopify Collective je platforma umožňující retailerům prodávat produkty externích supplierů přímo ve svém e-shopu — bez nutnosti vlastního skladu. Supplier zpřístupní svůj katalog a inventory, retailer přidá produkty do svého obchodu a Shopify zajistí propojení objednávek, fulfillmentu a payoutů mezi oběma stranami.

    V marketplace setupu jsou trust signály klíčovým faktorem pro rozhodování retailerů, které suppliery si do svého portfolia přidají. Konzistentní tracking zásilek a plnění termínů přímo ovlivňuje zákaznickou zkušenost na straně retailera, a tedy i jeho ochotu s daným supplierem spolupracovat dlouhodobě.

    Verified Tracking badge je vizuální označení, které supplier získá na svém profilu v sekci Discovery, pokud udržuje dostatečnou úroveň carrier tracking coverage napříč svými objednávkami. Systém sleduje tři metriky: carrier tracking coverage, on-time fulfillment a on-time delivery. Výpočet vychází ze všech objednávek v supplierově store — nejen těch z Collective — takže stávající shipping výkon se automaticky promítá do kvalifikace pro badge.

    Shopify supplierům zobrazuje aktuální hodnoty těchto metrik přímo na homepage aplikace Collective Supplier, včetně informace o tom, jaký gap zbývá uzavřít a jaké kroky k tomu vedou. Konkrétní procentuální prahy pro získání badge nejsou v tomto oznámení zveřejněny.
  zdroje:
    - title: "Shopify Changelog: Verified Tracking badge in Collective"
      url: "https://changelog.shopify.com/posts/shipping-performance-metrics-and-verified-tracking-badge-in-shopify-collective"
    - title: "Shopify Collective – přehled pro suppliery"
      url: "https://help.shopify.com/en/manual/sell-online/collective/collective-for-suppliers"
  generated_at: 2026-06-11T07:44:45Z
  model: claude-sonnet-4-6
tldr: "Shopify Collective suppliéři nyní vidí tři shipping metriky (carrier tracking coverage, on-time fulfillment, on-time delivery) přímo v aplikaci a mohou získat Verified Tracking badge zobrazovaný na jejich profilu v Discovery — čímž se zvyšuje jejich viditelnost pro nové retailery."
tagy: [collective, supplier, shipping, tracking, badge]
zdroj_kanal: merchant-changelog
editions_release: spring-2026
---

## Co se mění

Shopify přidalo do ekosystému Collective dvě propojené novinky pro suppliery:

**Shipping performance metriky** — na homepage aplikace Collective Supplier se nově zobrazují tři ukazatele výkonnosti dopravy:
- **Carrier tracking coverage** — podíl zásilek s aktivním carrier trackingem
- **On-time fulfillment** — plnění objednávek ve slíbeném termínu
- **On-time delivery** — doručení zákazníkovi ve slíbeném termínu

Metriky jsou počítány ze všech objednávek v supplierově store (nejen Collective objednávek), takže supplier vidí svůj reálný shipping výkon v kontextu celého svého podnikání.

**Verified Tracking badge** — suppliéři, kteří udržují konzistentní carrier tracking coverage, mohou získat badge zobrazovaný na jejich profilu v sekci Discovery. Badge slouží jako trust signál pro retailery hledající nové suppliery.

Systém supplierům transparentně ukazuje aktuální hodnotu každé metriky, vzdálenost od požadované úrovně a doporučené kroky ke zlepšení.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-10 | Feature spuštěna v produkci pro všechny Collective suppliery |

## Dopad pro nás

Tato změna se týká výhradně supplierů v ekosystému Shopify Collective a jejich viditelnosti vůči retailerům. Nemá žádný vliv na API, webhooky ani funkcionalitu, kterou využíváme v Integrátoru nebo pro naše klienty.

Z hlediska awareness je vhodné zmínit klientům, kteří jsou nebo uvažují o tom stát se Collective suppliery, že konzistentní tracking zásilek má přímý dopad na jejich discoverability v platformě.

## Použití v Integrátoru

Nepoužíváme. Jedná se o supplier-side quality feature v rámci Shopify Collective — naší integrace se netýká.
