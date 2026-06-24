---
date: 2026-06-19
title: "Chyba ITEM_NOT_STOCKED_AT_LOCATION odstraněna z inventory APIs v 2026-10"
title_en: "Removal of ITEM_NOT_STOCKED_AT_LOCATION error"
slug: item-not-stocked-at-location-error-removed
zdroj: https://shopify.dev/changelog/removal-of-itemnotstockedatlocation-error
shrnuto_dne: 2026-06-23
kategorie: [deprecation, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor provádí inventory adjustmenty přes Admin API; pokud máme error handling pro ITEM_NOT_STOCKED_AT_LOCATION v retry/error flow, musíme ho před migrací na 2026-10 odstranit."
dotcene_klienty: []
souvisejici:
  - "track-inventory-locations-without-fulfillment"
  - "inventory-adjustment-full-change-tracking"
  - "inventorysetscheduledchanges-removed"
tldr: "Od API verze 2026-10 Shopify přestane emitovat error ITEM_NOT_STOCKED_AT_LOCATION z inventory mutací — apps musí odstranit tento error code ze svého error handlingu."
tagy: [inventory, error-handling, multi-location, admin-api, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify historicky vyžadoval, aby byl item nejprve \"nastokován\" na konkrétní lokaci, než bylo možné adjustovat jeho inventory quantities. Pokud app zavolala mutaci jako `InventoryAdjustQuantities` pro lokaci, kde položka nebyla nastokována, API vrátilo error `ITEM_NOT_STOCKED_AT_LOCATION`. Toto chování bylo ochranou před neúmyslnými adjustmenty na neaktivních nebo nepřiřazených lokacích.

    V rámci širší SKU sharing iniciativy Shopify postupně odstraňuje prerekvizitu stocking: inventory lze nově adjustovat na jakékoli lokaci bez nutnosti ji nejprve explicitně aktivovat nebo nastokovat. Tato změna byla oznámena dříve jako součást funkce „track inventory at locations without fulfillment activation" a přinesla zásadní zjednodušení multi-location inventory managementu.

    Protože podmínka, která chybu vyvolávala, již fakticky neexistuje, error code `ITEM_NOT_STOCKED_AT_LOCATION` je od API verze 2026-10 zcela odstraněn ze čtyř mutations: `InventoryAdjustQuantities`, `InventoryMoveQuantities`, `InventorySetOnHandQuantities` a jejich `UserErrorCode` enumů. Apps, které tento error aktuálně zachytávají v retry logice nebo error flow, musí příslušný handling kód odstranit — error již nebude nikdy emitován.

  zdroje:
    - title: "Shopify: Removal of ITEM_NOT_STOCKED_AT_LOCATION error"
      url: "https://shopify.dev/changelog/removal-of-itemnotstockedatlocation-error"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od API verze **2026-10** Shopify odstraňuje error code `ITEM_NOT_STOCKED_AT_LOCATION` z těchto čtyř Admin API mutations:

- `InventoryAdjustQuantities`
- `InventoryMoveQuantities`
- `InventorySetOnHandQuantities`
- `InventorySetQuantitiesUserErrorCode`

Error nebude nadále emitován, protože podmínka, která ho vyvolávala, již neexistuje. Inventory quantities lze nyní adjustovat na jakékoli lokaci bez prerekvizity stocking. Apps, které tento error code aktuálně zachytávají (například v retry smyčkách nebo v podmíněném error handlingu), musí příslušný kód před přechodem na API 2026-10 odstranit.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-19 | Oznámení v Shopify dev changelogu |
| 2026-10 | Error `ITEM_NOT_STOCKED_AT_LOCATION` zcela odstraněn z inventory API mutations |

Přesné datum vydání verze 2026-10 odpovídá standardnímu quarterly release cyklu Shopify (orientačně říjen 2026).

## Dopad pro nás

Tato změna je **technicky nenápadná, ale snadno přehlédnutelná** při upgradu API verze. Pokud naše integrace obsahuje error handling, který testuje na `ITEM_NOT_STOCKED_AT_LOCATION`:

- Error code musí být odstraněn z podmínek (`if error.code === "ITEM_NOT_STOCKED_AT_LOCATION"`)
- Retry logika postavená na tomto erroru musí být revidována nebo odstraněna
- Enum hodnota přestane existovat v GraphQL schématu od verze 2026-10 — build může selhat, pokud ji staticky referencujeme

Samotná funkčnost inventory adjustmentů se nemění; rozšiřuje se (lze adjustovat i na dříve „nenastokovaných" lokacích). Jde čistě o cleanup zastaralého error kódu.

## Použití v Integrátoru

Integrátor komunikuje s Shopify Admin API a provádí inventory operace. Je třeba prověřit, zda v kódu integrátoru existuje handling pro `ITEM_NOT_STOCKED_AT_LOCATION` — typicky v blocích zpracovávajících `userErrors` nebo `errors` z inventory mutations. Před migrací na API verzi 2026-10 je nutné tyto reference odstranit, aby nedošlo k build chybě (neplatný enum) nebo mrtvému kódu, který zakrývá jiné reálné chyby.
