---
date: 2026-05-01
title: "Tracking inventury na lokacích, které nefulfillují"
title_en: "Track inventory that isn't for sale or fulfillment"
slug: track-inventory-locations-without-fulfillment
zdroj: https://changelog.shopify.com/posts/manage-inventory-at-locations-without-activating-them-for-fulfillment
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). Tracking inventory na non-fulfillment lokacích rozšiřuje možnosti — typicky pro warehouse/skladovací prostory bez prodeje."
kontext:
  background: |
    Lokace (Location) je v Shopify libovolné fyzické nebo virtuální místo, kde merchant uchovává zásoby nebo odkud plní objednávky — může jít o kamennou prodejnu, externí sklad, distribuční hub nebo dropshippingového partnera. Každá lokace může mít pro konkrétní produkt aktivovaný tzv. fulfillment — teprve pak je dostupné množství z dané lokace zahrnuto do prodeje a automatického přiřazování objednávek.

    Shopify multi-location inventory, dostupné od roku 2018 a postupně rozšiřované, přineslo potřebu rozlišovat lokace, které zásoby fyzicky drží, od těch, které je i prodávají. Do této změny bylo možné vidět a upravovat množství on-hand pouze na lokacích s aktivním fulfillmentem; sklady, sezónní depa nebo místa určená jen pro interní přesuny tak zůstávala mimo přehled v Adminu. To ztěžovalo celkový přehled o fyzickém stavu zásob v celém distribučním řetězci.

    Tato funkce úzce navazuje na API změny v 2026-04: pole `isActive` na objektu `InventoryLevel` a argument `includeInactive` na `inventoryLevels` rovněž řeší viditelnost zásob mimo aktivní fulfillment lokace — jde o součásti jednoho širšího záměru Shopify posilovat auditní a skladové možnosti platformy. Pro merchants s komplexní logistikou to znamená, že celý inventář — včetně rezervních skladů — lze spravovat na jednom místě.

    S touto viditelností roste i hodnota inventory transfer funkcí a auditních nástrojů: committed množství na non-fulfillment lokacích reflektují existující objednávky a umožňují přesnější plánování přesunů zásob mezi sklady.
  zdroje:
    - title: "Shopify Changelog: Manage inventory at locations without activating them for fulfillment"
      url: "https://changelog.shopify.com/posts/manage-inventory-at-locations-without-activating-them-for-fulfillment"
    - title: "isActive pole na InventoryLevel v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/isactive-field-inventorylevel/"
    - title: "includeInactive argument pro inventoryLevels v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/includeinactive-arg-inventorylevels/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "On-hand inventura lze nyní zobrazit a upravovat na lokacích, které neslouží fulfillmentu — vizuální indikátor ukazuje 'not used for fulfillment'."
tagy: [inventory, location, warehouse]
---

## Co se mění
Merchant může nyní **trackovat on-hand inventory** na lokacích, které **nejsou aktivované pro fulfillment** — typicky externí sklady, vratná skladovací místa, distribuční huby. Vizuální indikátor v Adminu odlišuje takové lokace od fulfillment lokací.

## Dopad pro nás
**Pro vývojáře:**
Naše inventory queries (`inventoryActivate`, `getInventoryItemBySku`, `setInventoryOnHandQuantities`) mohou nově vracet/upravovat data i pro non-fulfillment lokace. Pokud naše sync flow filtruje location by `fulfillmentService` flag, je dobré zkontrolovat, jestli tato data nově nejsou potřeba.

**Pro PM / PO:**
Užitečné pro klienty s komplexní distribuční sítí — nemusí každou lokaci aktivovat pro fulfillment, jen aby viděli stav inventury.

## Použití v Integrátoru
**Možná** — záleží, jak naše sync flow handluje location filter. Doporučuji audit při dalším upgrade inventory integrace.
