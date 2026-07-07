---
date: 2026-07-03
title: "Markets APIs podporují MarketRegionSubdivision — sub-region markets (2026-07)"
title_en: "Markets APIs now support MarketRegionSubdivision"
slug: markets-region-subdivision-api
zdroj: https://shopify.dev/changelog/markets-apis-now-support-marketregionsubdivision
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-07-07
ucinnost_od: 2026-07-03

kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka

customer_facing: false
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Relevantní pro klienty s multi-market setupem co potřebují sub-region granularitu."
dotcene_klienty: []

souvisejici:
  - "market-driven-shipping-admin-api"
  - "create-channel-markets-graphql-api"
  - "italy-sardinian-provinces-update"

tldr: "Admin GraphQL API 2026-07 přidává nový typ MarketRegionSubdivision, který umožňuje definovat markety na úrovni sub-regionů (státy USA, německé spolkové země apod.). Aktuálně podporováno pouze pro shipping; ostatní konfigurace jako Discounts nebo Catalogs zatím nejsou dostupné."

tagy: [markets, region, subdivision, admin-api, "2026-07"]

generated_at: 2026-07-07T10:00:00Z
model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API ve verzi `2026-07` zavádí nový stabilní typ **MarketRegionSubdivision**, který rozšiřuje stávající Markets API o podporu sub-regionů na úrovni administrativních celků — například americké státy, kanadské provincie nebo německé spolkové země. Dosud bylo možné definovat market pouze na úrovni celé země; nový typ umožňuje granulárnější targeting.

Klíčová nová položka je `market.conditions.regionsCondition`, která slouží jako hlavní přístupový bod pro čtení členství sub-regionů v daném marketu. Shopify zároveň označuje přímé pole `market.regions` za zastaralé — toto pole může při sub-region marketech vracet neúplná data, proto je migrace na `regionsCondition` pathway povinná pro správnou funkčnost.

Dostupnost v API: **Admin GraphQL API 2026-07**, stabilní (ne preview). Datum spuštění: 27. června 2026.

**Důležité omezení:** Sub-region markety aktuálně podporují **pouze shipping**. Konfigurace Discounts, Catalogs, Theme contextualization a Market metafields nejsou podporovány a při pokusu o jejich použití vrátí validační chybu.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-27 | Funkce dostupná v Admin GraphQL API 2026-07 |
| 2026-07-03 | Publikace v dev changelog |
| TBD | Rozšíření podpory na Discounts, Catalogs a další oblasti |

## Dopad pro nás

Přímý dopad na stávající Integrátor je nízký — jde o nový typ, který nepřepisuje existující chování, pouze rozšiřuje možnosti. Zásadnější je **deprecation pole `market.regions`**: aplikace, které toto pole čtou pro výpis regionů marketu, by měly přejít na `market.conditions.regionsCondition.regions`, aby dostávaly kompletní data i v případě sub-region marketů.

Pro klienty, kteří aktuálně provozují multi-market setup a zvažují granulární targeting (např. různé shipping sazby pro jednotlivé státy USA), otevírá tato změna nové možnosti konfigurace přímo přes API. Integrátor by mohl takové nastavení zprostředkovat bez nutnosti ručního UI zásahu v Shopify Adminu.

## Použití v Integrátoru

Pokud Integrátor čte nebo synchronizuje market konfigurace, je třeba ověřit, zda se dotazy spoléhají na `market.regions`. Pokud ano, je vhodné přidat fallback nebo migraci na `market.conditions.regionsCondition.regions` — zvláště u klientů, kde Shopify admin může sub-region markety vytvořit i mimo Integrátor.

Pro nové funkcionality: implementace sub-region shipping targeting (např. per-state shipping rates v USA) je nyní dostupná přes API. Tato granularita může být hodnotná pro klienty s komplexní logistikou nebo regionálně diferenciovanými cenami dopravy. Vzhledem k omezení pouze na shipping je rozšíření na ostatní oblasti (slevy, katalogy) zatím blokováno na straně Shopify.
