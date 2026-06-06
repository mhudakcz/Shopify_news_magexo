---
date: 2026-02-04
title: "Bin locations v Order Printer App pro picklisty"
title_en: "Bin Locations in Order Printer App"
slug: bin-locations-order-printer
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Order Printer apps (printout templating). Neimplementujeme custom Order Printer integrations."
dotcene_klienty: []

kontext:
  background: |
    Bin location (skladová pozice) je označení fyzického místa ve skladu — zpravidla kombinace čísla regálu, police a přihrádky (například „A3-05") — jednoznačně identifikující, kde leží konkrétní SKU. Tento koncept pochází z klasického warehouse managementu (WMS) a je standardem v logistice pro zrychlení procesu vychystávání (picking) objednávek.

    Order Printer je oficiální bezplatná aplikace Shopify umožňující tisk faktur, dodacích listů, balicích štítků a picklistů přímo z administrace. Historicky sloužila primárně jako nástroj pro formátování tisknutelných dokumentů přes HTML/CSS/Liquid šablony. Přidání podpory bin locations v rámci Editions Winter 2026 posunuje aplikaci směrem k nástrojům pro provozní efektivitu skladu.

    V praxi to znamená, že merchant může ke každému SKU přiřadit skladovou pozici — buď hromadně přes CSV import, nebo pomocí hromadného editoru — a tato pozice se automaticky zobrazí na vytištěném picklistu. Pickeři tak při vychystávání nemusí skladovou pozici znát nazpaměť ani prohledávat systém — mají ji přímo na papíru. Jde o funkci cílenou na obchodníky s fyzickými sklady, kteří nepoužívají plnohodnotný WMS.

    Funkce úzce souvisí s dalšími sklady zaměřenými novinkami Shopify, jako je sledování inventury na lokacích bez fulfillmentu nebo barcode podpora pro inventory shipments API.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Order Printer App – Shopify Help"
      url: "https://help.shopify.com/en/manual/orders/order-printer"
    - title: "Tracking inventury na lokacích bez fulfillmentu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/track-inventory-locations-without-fulfillment/"
    - title: "Barcode support pro inventory shipments API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/barcode-inventory-shipments/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Order Printer App umí přiřadit bin locations k SKU přes CSV nebo bulk editor — užitečné pro warehouse picking."
tagy: [order, fulfillment, warehouse, bin-location]
---

## Co se mění
**Order Printer App** (oficiální Shopify aplikace pro tisk faktur, picklistů, balících štítků) podporuje **bin locations** — přiřazení skladového umístění (číslo regálu, kontejneru) ke SKU. Lze hromadně nahrát CSV nebo bulk editorem. Při tisku picklistu se bin location zobrazí, takže pickeři vědí, kde produkt najít.

## Použití v Integrátoru
**Nepoužíváme** — Order Printer feature. Pokud klient má warehouse a chce vybavit pickery picklistou s lokacemi, je to nice-to-have.
