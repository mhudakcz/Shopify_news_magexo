---
date: 2026-09-17
title: "Inventory Shipments API: nová canceled receive action"
title_en: "Adding a canceled receive action to the inventory shipments API"
slug: inventory-shipments-canceled-receive-action
zdroj: https://shopify.dev/changelog/adding-a-canceled-receive-action-to-the-inventory-shipments-api
shrnuto_dne: 2026-09-18
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sledujeme stav skladových zásilek přes inventoryShipmentReceive; nový CANCELED reason pokrývá případ, kdy část zboží fyzicky nikdy nedorazí, bez nutnosti zneužívat rejection status."
dotcene_klienty: []
souvisejici: [barcode-inventory-shipments, simpler-inventory-transfers, events-four-additional-topics]
tldr: "Shopify přidává do inventory shipments API novou reason hodnotu CANCELED, kterou lze u přijímané zásilky označit jednotky, jež nikdy nedorazí, místo obcházení pomocí rejection statusu."
tagy: [admin-graphql-api, inventory, shipments, cancellation, workflow]
zdroj_kanal: dev-changelog
kontext:
  background: |
    InventoryShipment je objekt Admin GraphQL API reprezentující fyzickou zásilku zboží v rámci inventory transferu mezi dvěma lokacemi. Příjemce potvrzuje jednotlivé položky mutací inventoryShipmentReceive, která dosud rozlišovala jen dva výsledky – ACCEPTED pro přijaté kusy a REJECTED pro kusy odmítnuté kvůli poškození nebo neshodě. Obě hodnoty se agregují do souhrnných počtů na úrovni shipmentu i jednotlivých line items.

    Problém nastával v situaci, kdy obchodník při příjmu zjistí, že určité kusy fyzicky nikdy nedorazí a nikdy nedorazí ani dodatečně – například je dodavatel omylem nenaložil, zásilka byla částečně ztracena, nebo šlo o chybnou položku na purchase orderu. Pro takový stav neexistovala vhodná kategorie: REJECTED implikuje, že zboží fyzicky dorazilo a bylo vráceno, zatímco ponechání položky jako neprijaté zkresluje reconciliaci a brání shipmentu v uzavření.

    Aktualizace přidává do enumu InventoryShipmentReceiveLineItemReason novou hodnotu CANCELED. Objekt InventoryShipment nově vystavuje pole totalCanceledQuantity a InventoryShipmentLineItem pole canceledQuantity, přičemž zrušené kusy se počítají do totalReceivedQuantity vedle přijatých a odmítnutých – vzniká tak úplný rozpad accepted/rejected/canceled na obou úrovních. Změna je součástí Admin GraphQL API verze 2026-10, účinné od 19. září 2026, a webhook inventory_shipments/receive_items od této verze nese i pole old_canceled_quantity a new_canceled_quantity.
  zdroje:
    - title: "Shopify: Adding a canceled receive action to the inventory shipments API"
      url: "https://shopify.dev/changelog/adding-a-canceled-receive-action-to-the-inventory-shipments-api"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Mutace `inventoryShipmentReceive` umí od API verze 2026-10 přijmout u položky nový reason `CANCELED` vedle stávajících `ACCEPTED` a `REJECTED`. Tím se řeší dlouhodobá mezera ve stavovém modelu inventory shipmentů: dosud nešlo korektně zaznamenat kusy, které se do skladu fyzicky nikdy nedostanou a už ani nedostanou, aniž by se zneužíval status "odmítnuto" nebo se položka nechala trvale viset jako nepřijatá.

Nově se zrušené kusy sčítají zvlášť – `InventoryShipment.totalCanceledQuantity` na úrovni celé zásilky a `InventoryShipmentLineItem.canceledQuantity` na úrovni konkrétní položky – a zároveň se započítávají do `totalReceivedQuantity`. Vzniká tak plný rozpad na accepted, rejected a canceled, díky kterému lze shipment uzavřít s přesnou evidencí, i když se ho nepodařilo doručit beze zbytku. Mutace i nadále vyžaduje idempotency key, který je pro `inventoryShipmentReceive` povinný od verze 2026-04.

## Časová osa

- 2026-04 – idempotency key se stává povinným parametrem mutace `inventoryShipmentReceive`
- 2026-09-17 – zveřejněn changelog k nové `CANCELED` receive action
- 2026-09-19 – změna účinná v Admin GraphQL API verzi 2026-10 a novější

## Dopad pro nás

**Pro vývojáře:** Kdekoli voláme `inventoryShipmentReceive` nebo čteme stav inventory shipmentů, má smysl přejít na API verzi 2026-10 a doplnit reason `CANCELED` tam, kde dosud řešíme neúplně doručené zásilky obchvatem (např. ruční korekcí na straně WMS nebo zneužitím `REJECTED`). Pokud na shipmenty navazuje vlastní reporting nebo dashboard, je potřeba do něj přidat i pole `totalCanceledQuantity` a `canceledQuantity`, jinak zůstane zrušené množství neviditelné. Webhook `inventory_shipments/receive_items` na verzi 2026-10+ nově nese `old_canceled_quantity` a `new_canceled_quantity` – konzumenti tohoto webhooku by je měli začít zpracovávat, protože čistě "canceled" receive vyvolá doručení jen na těchto novějších verzích.

**Pro PM / PO:** Jde o nízkou naléhavost a čistě API změnu bez dopadu na merchant-facing UI, ale je relevantní všude, kde obchodník řeší warehouse-to-warehouse transfery přes 3PL nebo vlastní WMS a dochází u něj k částečně nedoručeným zásilkám (chybný scan, špatná položka na PO, ztráta při přepravě). Bez této akce se takové situace dosud řešily provizorně a mohly zkreslovat sklady i reconciliaci nákladů.

## Použití v Integrátoru

Možná – pokud aktuálně synchronizujeme příjem skladových zásilek a stav `InventoryShipment`, stojí za zvážení doplnit zpracování `CANCELED` reason a nových polí `totalCanceledQuantity`/`canceledQuantity`, aby se trvale nedoručené kusy neztrácely v reportingu.
