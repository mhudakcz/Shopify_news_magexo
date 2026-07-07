---
date: 2026-07-03
title: "OrderDisplayFulfillmentStatus vrací nový FULFILLMENT_NOT_REQUIRED enum v 2026-10"
title_en: "OrderDisplayFulfillmentStatus now returns FULFILLMENT_NOT_REQUIRED for orders with no items to fulfill"
slug: order-fulfillment-status-not-required-enum
zdroj: https://shopify.dev/changelog/orderdisplayfulfillmentstatus-now-returns-fulfillmentnotrequired
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-07-07
ucinnost_od: 2026-10-01
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud čteme OrderDisplayFulfillmentStatus, musíme přidat handling pro FULFILLMENT_NOT_REQUIRED."
dotcene_klienty: []
souvisejici:
  - shipping-line-fulfillmentorderlineitem
  - mark-fulfillments-delivered-without-tracking
  - fulfillmentorderreportprogress
tagy: [order, fulfillment, enum, admin-api, "2026-10"]
tldr: "Admin API 2026-10 přidává novou enum hodnotu FULFILLMENT_NOT_REQUIRED do OrderDisplayFulfillmentStatus. Vrací se pro objednávky, kde není co plnit (plně stornované nebo refundované před fulfillmentem). Apps s exhaustivním mapováním enum hodnot musí aktualizovat switch/if logiku."
generated_at: 2026-07-07T10:00:00Z
model: claude-sonnet-4-5
---

## Co se mění

Od API verze 2026-10 rozšiřuje Shopify enum `OrderDisplayFulfillmentStatus` o novou hodnotu `FULFILLMENT_NOT_REQUIRED`. Tato hodnota se vrací pro objednávky, u nichž zbývá k fulfillmentu nula položek — typicky objednávky plně stornované nebo refundované předtím, než byl fulfillment vůbec zahájen. Dřívější verze API pro tyto případy vracely `UNFULFILLED`, což bylo matoucí, protože `UNFULFILLED` semanticky říká „ještě nebylo splněno", zatímco `FULFILLMENT_NOT_REQUIRED` říká „splnit není co".

Kromě storno/refund scénářů patří do této kategorie i objednávky tvořené výhradně digitálními produkty nebo dárkovými poukazy (gift cards), kde fyzický fulfillment z podstaty nevzniká. Jde o aditivní, zpětně kompatibilní změnu — starší verze API se nemění a nadále vrací `UNFULFILLED`.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-07-03 | Zveřejnění v Shopify dev changelogu |
| 2026-10-01 | Dostupnost v API verzi 2026-10 |
| Starší API verze | Beze změny — `FULFILLMENT_NOT_REQUIRED` se nevrací |

Změna je aktivní od okamžiku migrace na API verzi 2026-10. Apps běžící na starší verzi ji nikdy neobdrží.

## Dopad pro nás

Přímý dopad závisí na tom, zda naše integrační vrstva čte pole `displayFulfillmentStatus` na objektu `Order` a jak s hodnotou nakládá. Apps, které mají exhaustivní switch/if logiku nebo TypeScript union type nad všemi enum hodnotami, obdrží po migraci na 2026-10 novou hodnotu, na níž nebyly připraveny. To může způsobit pád na `default` větvi (ideální případ), nebo tichý nesprávný výsledek, pokud kód neznámé hodnoty ignoruje.

Apps, které enum hodnoty neporovnávají exhaustivně nebo mají ošetřenu neznámou hodnotu obecnou větví, nevyžadují žádnou úpravu. Jednorázový audit míst, kde čteme `OrderDisplayFulfillmentStatus`, je přesto doporučen před upgradem na 2026-10.

## Použití v Integrátoru

Integráthor pravděpodobně čte stav objednávky při synchronizaci do ERP nebo externího WMS. Pokud pipeline mapuje `OrderDisplayFulfillmentStatus` na interní stav (např. „čeká na expedici" / „expedováno" / „stornováno"), je nutné přidat větev pro `FULFILLMENT_NOT_REQUIRED` — sémanticky nejblíže „neexpedovat, položky k fulfillmentu neexistují".

Konkrétní kroky při upgradu na 2026-10:
1. Vyhledat v kódu Integrátoru všechny reference na `OrderDisplayFulfillmentStatus` nebo `displayFulfillmentStatus`.
2. Ověřit, zda existuje exhaustivní výčet hodnot (switch, if-else chain, enum mapping).
3. Přidat `FULFILLMENT_NOT_REQUIRED` jako explicitní případ — ne jako fallthrough na `UNFULFILLED`.
4. Otestovat na testovací objednávce tvořené dárkovým poukazem nebo digitálním produktem.
