---
date: 2026-08-05
title: "Inventory pro draft orders a transfery přechází z reserved na committed"
title_en: "Draft order and transfer/shipment inventory is moving from reserved to committed"
slug: draft-order-transfer-inventory-reserved-to-committed
zdroj: https://shopify.dev/changelog/draft-order-and-transfer-shipment-inventory-is-moving-from-reserved-to-committed
shrnuto_dne: 2026-08-11
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor čte InventoryLevel.quantities přes Admin API pro sync dostupnosti; pokud někde filtruje konkrétně na `reserved`, po přechodu draft orders a transferů na `committed` může vidět nižší reserved hodnoty, než odpovídá realitě."
dotcene_klienty: []
souvisejici: [isactive-field-inventorylevel, purchase-orders-create-inventory-transfers, draft-order-deposit-fields-admin-caa]
tldr: "Shopify přesouvá inventory drženou draft orders a otevřenými transfery/shipmenty z bucketu reserved do committed — apps filtrující na reserved musí přejít na committed."
tagy: [admin-graphql-api, inventory, draft-orders, transfers, committed, reserved, breaking]
zdroj_kanal: dev-changelog
kontext:
  background: |
    InventoryLevel v Admin GraphQL API rozděluje množství zásoby na jednotlivé „buckety" — available, on_hand, committed, reserved, incoming a další — které se čtou přes pole `quantities(names: [...])`. Committed dosud znamenal inventory alokovanou k potvrzeným (confirmed) objednávkám, zatímco reserved sloužil pro dočasné, ještě nepotvrzené holdy — typicky draft orders před přeměnou na order, nebo otevřené inventory transfery a shipmenty mezi lokacemi.

    Toto rozdělení v praxi vytvářelo nejasnou hranici mezi dvěma stavy, které z pohledu dostupnosti zboží znamenaly totéž: kus zboží není volný k prodeji, protože na něj čeká jiná transakce. Shopify proto sémantiku zjednodušuje — inventory držená draft orders a otevřenými transfery/shipmenty se od 5. srpna 2026 nově započítává do bucketu `committed` místo `reserved`. Change se týká pouze aktivních (nedokončených, nezrušených) draft orders a transferů; u již uzavřených záznamů se historické hodnoty nepřepočítávají.

    Pro merchants je dopad kosmetický — available a on_hand množství zůstávají nezměněná, obchodník jen uvidí jednorázový posun mezi reserved a committed v adjustment reportu. Pro apps, které nad InventoryLevel staví vlastní logiku dostupnosti, je ale potřeba ověřit, zda někde explicitně query-jí nebo agregují `reserved` jako signál pro draft order/transfer holdy — po změně tam uvidí nižší hodnoty, protože stejné množství se objeví pod `committed`.
  zdroje:
    - title: "Shopify: Draft order and transfer/shipment inventory is moving from reserved to committed"
      url: "https://shopify.dev/changelog/draft-order-and-transfer-shipment-inventory-is-moving-from-reserved-to-committed"
    - title: "InventoryLevel — Admin GraphQL API"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify konsoliduje inventory sémantiku napříč draft orders a inventory transfery/shipmenty. Množství, které dosud apps viděly pod bucketem `reserved`, se nyní objeví pod `committed` — stejně jako inventory alokovaná potvrzeným objednávkám.

- **Draft orders** — dokud draft order není přeměněna na skutečnou objednávku, držené množství se počítá jako `committed`, ne `reserved`.
- **Inventory transfery a shipmenty** — otevřené (nedokončené) transfery mezi lokacemi započítávají svou inventory stejně, do `committed`.
- **Available a on_hand beze změny** — jde čistě o přeskupení mezi „unavailable" buckety, celková dostupnost zboží se nemění.
- **Jednorázová korekce** — u aktivních draft orders a transferů dojde k jednomu přepočtu; uzavřené/zrušené záznamy se retroaktivně neupravují.
- **Zpětná kompatibilita** — existující kód dál funguje beze změny, pouze čísla za `reserved` klesnou a za `committed` odpovídajícím způsobem stoupnou.

## Časová osa

- **2026-08-05** — změna účinná pro všechny merchants a apps; draft orders a otevřené transfery/shipmenty se od tohoto data počítají jako committed.

## Dopad pro nás

**Pro vývojáře:** Pokud kód nebo report explicitně query-je `InventoryLevel.quantities(names: ["reserved"])` a interpretuje výsledek jako „draft order nebo transfer holdy", je potřeba přejít na `committed`. Kód, který čte oba buckety a sčítá je do jedné metriky „nedostupné zásoby", není touto změnou ovlivněn — total zůstává stejný, jen se přesouvá mezi kategoriemi.

**Pro PM / PO:** Jde o čistě technickou, back-office změnu bez dopadu na zákazníka a bez akce nutné ze strany merchanta. Relevantní je jen pro klienty, jejichž custom reporting nebo dashboard rozlišuje reserved vs. committed jako oddělené metriky — tam může jednorázově „skočit" číslo v reportu k 5. 8. 2026.

## Použití v Integrátoru

Integrátor čte inventory stavy přes Admin API pro sync dostupnosti mezi Shopify a externími systémy. Stojí za to jednorázově prověřit, zda některá reportingová nebo sync logika filtruje konkrétně na `reserved` s předpokladem, že jde o draft order/transfer holdy — po této změně by taková logika viděla neúplná čísla.
