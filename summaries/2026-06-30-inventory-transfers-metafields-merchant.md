---
date: 2026-06-30
title: "Metafields na inventory transfers v Shopify admin — lot numbers, serial numbers, RFID"
title_en: "Define and manage metafields on inventory transfers (merchant UI)"
slug: inventory-transfers-metafields-merchant
zdroj: https://changelog.shopify.com/posts/define-and-manage-metafields-on-inventory-transfers
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s inventory transfers přes Admin GraphQL API; pokud klienti přidají vlastní metafields na transfery, může být potřeba je číst nebo synchronizovat se systémy jako ERP/WMS."
dotcene_klienty: []
souvisejici:
  - "inventory-transfer-metafields-admin-api"
  - "purchase-orders-create-inventory-transfers"
  - "simpler-inventory-transfers"
tldr: "Shopify merchants mohou od 30. června 2026 definovat a spravovat vlastní metafields na inventory transfers přímo v admin UI — bez custom apps lze trackovat lot numbers, serial numbers, RFID identifikátory i logistické detaily."
tagy: [inventory, transfer, metafield, admin, logistics]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Inventory transfers jsou v Shopify mechanismus pro přesun zboží mezi sklady a pobočkami. Dosud bylo možné na transfery ukládat pouze standardní Shopify data — merchanté kteří potřebovali trackovat dodatečné informace (čísla šarží, sériová čísla, RFID tagy, celní data) museli používat buď externí aplikace, nebo řešení postavená nad custom apps. Tato flexibilita chyběla zejména v regulovaných odvětvích (farmacie, potravinářství) a při logisticky komplexních operacích.

    Dne 17. června 2026 Shopify vydal metafield podporu pro inventory transfers na úrovni Admin GraphQL API (viz dev changelog). Nyní, 30. června 2026, přichází párová merchant UI vrstva — Settings > Metafields and metaobjects > Transfers umožňuje definovat vlastní field definitions bez jediného řádku kódu. Hodnoty pak lze zadávat přímo na stránkách Transfer Create a Transfer Details.

    Prakticky to znamená: merchant provozující e-shop s elektrotechnikou může na každý transfer přidat pole "Sériová čísla" nebo "RFID batch ID"; potravinářský e-shop může evidovat čísla šarží a datum expirace; logistický koordinátor může ukládat číslo nákladního účtu nebo celní referenci. Při duplikaci transferu se metafield hodnoty zkopírují, přičemž definice s unikátními hodnotami (např. sériová čísla) jsou prázdné — systém na to upozorní. Metafields s povolenou volbou "Filter or group data in Analytics" jsou dostupné i v Shopify Analytics pro reporting.

    Tato změna je součástí širší snahy Shopify o zpřístupnění pokročilých inventory operací přirodzeně v admin UI. Spolu s redesignem inventory transfers (květen 2026) a automatickým vytvářením transferů z purchase orders (červen 2026) tvoří ucelenější inventory management workflow, kde custom metadata hrají klíčovou roli při integraci s ERP a WMS systémy.
  zdroje:
    - title: "Shopify: Define and manage metafields on inventory transfers (merchant UI)"
      url: "https://changelog.shopify.com/posts/define-and-manage-metafields-on-inventory-transfers"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---
## Co se mění

Shopify přidal nativní podporu custom metafields pro inventory transfers v merchant admin UI. Nová sekce **Settings > Metafields and metaobjects > Transfers** umožňuje definovat vlastní field definitions — bez nutnosti custom app nebo API přístupu.

Konkrétní workflow:
- Definice metafields: Settings > Metafields and metaobjects > Transfers
- Zadávání hodnot: stránky Transfer Create a Transfer Details
- Duplikace transferu: metafield hodnoty se zkopírují (hodnoty s unikátním constraintem zůstanou prázdné a systém upozorní)
- Analytics integrace: metafields s povolenou volbou "Filter or group data in Analytics" jsou dostupné pro Shopify Analytics reporting

Typické use cases zahrnují lot numbers, serial numbers, RFID identifikátory, freight account numbers, celní reference a synchronizační klíče pro ERP/WMS systémy.

## Časová osa

| Datum | Událost |
|---|---|
| 17. 6. 2026 | Metafields pro inventory transfers v Admin GraphQL API (dev changelog) |
| 30. 6. 2026 | Merchant UI vrstva — Settings, Transfer Create, Transfer Details |

Funkce je dostupná okamžitě od 30. 6. 2026 bez nutnosti opt-in.

## Dopad pro nás

Jde o čistě merchant-facing funkci v admin UI — z pohledu integrace žádná povinná akce nevzniká. Relevance nastává v momentě, kdy klient začne metafields na transfery aktivně používat a chce je synchronizovat se svým ERP nebo WMS.

Konkrétní scénáře k hlídání:
- Klient s logisticky komplexním provozem (potravinářství, pharma, elektrotechnika) může záhy přidat lot/serial tracking na transfery
- Pro integrační projekty, kde čteme nebo zapisujeme inventory transfers přes Admin GraphQL API, mohou přibýt nová pole k mapování
- Data dříve vedená v Stocky (pokud klient migroval) mohou být nyní standardizovaná jako metafields na transferech

Doporučení: při příštím discovery s klienty, kteří provozují více skladů, zmínit tuto možnost jako alternativu k custom řešením.

## Použití v Integrátoru

Integrátor pracuje s inventory transfers přes Admin GraphQL API. Merchant-side metafields jsou přístupné přes stejné API endpointy, které jsme již pokryli v changelog ze 17. 6. 2026 (viz `inventory-transfer-metafields-admin-api`).

Pokud klient využije nové metafield definitions a bude požadovat jejich synchronizaci do externího systému, stačí rozšířit existující transfer query o metafields fragment — žádná strukturální změna integrátoru není potřeba, jde o přírůstkové mapování.
