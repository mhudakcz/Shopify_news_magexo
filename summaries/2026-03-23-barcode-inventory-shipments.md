---
date: 2026-03-23
title: "Barcode support pro inventory shipments API"
title_en: "Adding barcode support to inventory shipments API"
slug: barcode-inventory-shipments
zdroj: https://shopify.dev/changelog/adding-barcode-support-to-inventory-shipments-api
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem, getInventoryItemBySku). Inventory shipments API je samostatný flow pro warehouse transfers — pokud klient má warehouse/3PL, pravděpodobně relevantní."
dotcene_klienty: []

kontext:
  background: |
    Inventory shipment je entita v Shopify Admin GraphQL API reprezentující fyzickou zásilku zboží putující mezi dvěma skladovými lokacemi v rámci jednoho obchodu. Na rozdíl od inventory levelu — který zachycuje aktuální stav zásob na konkrétním místě — inventory shipment popisuje pohyb v čase: co bylo odesláno, odkud, kam a v jakém množství. Objekt prochází stavovým cyklem podobným fulfillment orders a je součástí nadřazeného inventory transferu.

    Shopify zavedl multi-location inventory v roce 2018 a od té doby rozšiřuje API nástroje pro správu přesunů zásob. Inventory transfers — zastřešující pojem pro warehouse-to-warehouse pohyby — prošly v roce 2026 výrazným redesignem: workflow nyní podporuje volitelné vytváření shipmentů, inline tracking informace a nový stav Ready to Ship. Čárové kódy jsou přitom klíčovou součástí operativního workflow ve skladech napojených na 3PL nebo WMS systémy, kde ruční zadávání dat zvyšuje chybovost.

    Přiřazení unikátního čárového kódu na úrovni zásilky — nikoli na úrovni jednotlivých SKU — umožňuje příjemci naskenovat celý shipment jedním tahem a potvrdit příjem okamžitě. Barcode je volitelný řetězec o délce max. 255 znaků, unikátní v rámci obchodu, a lze jej kdykoli přepsat nebo vymazat. Pro napojení na WMS nebo 3PL systémy to otevírá cestu k automatizaci příjmu zboží bez ručního zadávání a výrazně snižuje latenci při zpracování transferů.
  priklad: |
    mutation {
      inventoryShipmentSetBarcode(
        id: "gid://shopify/InventoryShipment/123"
        barcode: "ABC123XYZ"
      ) {
        inventoryShipment { id barcode }
        userErrors { message field }
      }
    }
  zdroje:
    - title: "Adding barcode support to inventory shipments API"
      url: "https://shopify.dev/changelog/adding-barcode-support-to-inventory-shipments-api"
    - title: "inventoryShipmentSetBarcode — Shopify Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetBarcode"
    - title: "Redesign inventory transfers — jednodušší workflow"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/simpler-inventory-transfers/"
    - title: "inventoryTransferDelete: INVALID_STATE error pro běžící product import"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/inventorytransferdelete-invalid-state/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "API 2026-04 přidává barcode pole a inventoryShipmentSetBarcode mutaci pro inventory shipments."
tagy: [inventory, barcode, shipment, warehouse]
editions_release: spring-2026
---

## Co se mění
API verze **2026-04** přidává pole `barcode` na inventory shipments a mutaci `inventoryShipmentSetBarcode` pro labeling shipmentů. Cíl: usnadnit tracking inventory transferů mezi sklady přes barcode skenery.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Naše inventory methods (`updateInventoryItem`, `setInventoryOnHandQuantities`) jsou na inventory levels, ne shipments. Pokud klient potřebuje warehouse transfer flow s barcode trackingem, mutace je nová možnost.

**Pro PM / PO:**
Vhodné pro klienty se sklady (multi-location) — lepší tracking pohybu zboží.

## Použití v Integrátoru
**Možná** — záleží na klientovi. Pokud nějaký B2B/Plus klient má warehouse transfers s barcode integrací, přidat příslušnou metodu.
