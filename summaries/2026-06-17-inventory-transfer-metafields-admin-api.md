---
date: 2026-06-17
title: "Metafields na inventory transfers v Admin GraphQL API 2026-07"
title_en: "Define and set metafields on inventory transfers in Admin GraphQL API"
slug: inventory-transfer-metafields-admin-api
zdroj: https://shopify.dev/changelog/define-and-set-metafields-on-inventory-transfers-in-the-admin-graphql-api
shrnuto_dne: 2026-06-18
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s inventory transfers a může potřebovat ukládat vlastní metadata (např. ERP reference, handling instrukce) přímo na transfer objektu."
dotcene_klienty: []
souvisejici:
  - "inventory-transfer-webhooks-origin-destination"
  - "flow-triggers-inventory-transfer"
  - "shop-user-metafields-functions"
tldr: "Od API verze 2026-07 lze definovat a zapisovat metafields přímo na inventory transfers pomocí MetafieldOwnerType.TRANSFER a čtyř upravených mutací."
tagy: [inventory, transfer, metafield, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Inventory transfers slouží v Shopify k přesunu zásob mezi sklady a lokacemi. Před touto změnou nebylo možné na transfer objektu ukládat vlastní metadata — vývojáři museli obcházet toto omezení přes jiné entity nebo externí systémy, což komplikovalo integraci s ERP a WMS systémy.

    Shopify v API verzi 2026-07 přidává plnou podporu metafields pro inventory transfers. Nový owner type `MetafieldOwnerType.TRANSFER` umožňuje nejprve definovat metafield definitions (s validacemi, typy a namespace) a poté hodnoty zapisovat přímo při vytváření nebo úpravě transferu — bez nutnosti dalšího API volání.

    Prakticky to znamená, že aplikace nyní mohou k transferu přiložit libovolná strukturovaná data: číslo objednávky z ERP, instrukce pro manipulaci, přiřazený tým revize nebo jiná provozní metadata. Při duplikaci transferu se metafields automaticky zkopírují, takže opakující se přesuny zásob nepotřebují ruční doplňování dat.
  zdroje:
    - title: "Shopify: Define and set metafields on inventory transfers in Admin GraphQL API"
      url: "https://shopify.dev/changelog/define-and-set-metafields-on-inventory-transfers-in-the-admin-graphql-api"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---
## Co se mění

Od Admin GraphQL API verze **2026-07** je možné definovat metafields pro inventory transfers a zapisovat je přímo v rámci vytváření nebo editace transferu. Klíčové změny:

- Nový owner type **`MetafieldOwnerType.TRANSFER`** pro definici metafield definitions specifických pro transfery.
- Čtyři mutace nyní přijímají metafield input:
  - `inventoryTransferCreate`
  - `inventoryTransferCreateAsReadyToShip`
  - `inventoryTransferEdit`
  - `inventoryTransferDuplicate` — při duplikaci se metafields automaticky zkopírují.
- Metafields lze plně validovat (typy, namespace, klíče) stejně jako u ostatních Shopify objektů s metafield podporou.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Funkce dostupná v Admin GraphQL API 2026-07 |

Změna nevyžaduje žádnou migraci — jde o additivní rozšíření API. Existující integrace zůstávají bez zásahu.

## Dopad pro nás

Dopad je **nízký** — jde o novou volitelnou možnost API, nikoli breaking change. Pro projekty pracující s inventory transfers (přesuny zásob mezi sklady) se otevírá možnost ukládat kontextová data přímo na transfer objekt místo jejich správy ve vlastní databázi nebo přes jiné entity.

Vývojáři by měli sledovat, zda jejich integrace s inventory API využívá transfery a zda by přidání custom metadat zjednodušilo business logiku — například propojení transferu s interním číslem zakázky nebo přiřazení odpovědné osoby.

## Použití v Integrátoru

Pokud Integrátor vytváří nebo spravuje inventory transfers, je nyní možné připojit ERP referenci nebo jiné provozní metadata přímo k transfer objektu. Stačí nejprve vytvořit `MetafieldDefinition` s `ownerType: TRANSFER` a poté předat metafield hodnoty v inputu mutace `inventoryTransferCreate` nebo `inventoryTransferEdit`. Tím odpadá potřeba ukládat tato data bokem a následně je párovat.
