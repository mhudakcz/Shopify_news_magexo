---
date: 2026-07-01
title: "Market-driven shipping Admin API — konfigurace shipping rates per market"
title_en: "Market-driven shipping Admin API"
slug: market-driven-shipping-admin-api
zdroj: https://shopify.dev/changelog/market-driven-delivery-profiles-admin-api
shrnuto_dne: 2026-07-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor konfiguruje shipping pro klienty; nové market-level shipping fields v marketCreate/marketUpdate mutacích mohou zjednodušit správu shipping strategií per market bez nutnosti separátních delivery profilů."
dotcene_klienty: []
souvisejici:
  - "carrier-services-no-auto-shipping-profile"
  - "delivery-profiles-covers-all-items"
  - "create-channel-markets-graphql-api"
tldr: "Admin GraphQL API 2026-07 umožňuje konfigurovat shipping rates přímo na úrovni marketu — flat, value-based, weight-based i carrier-calculated — bez nutnosti vytvářet separátní delivery profiles pro každý region."
tagy: [shipping, markets, delivery, admin-api, carrier-service, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Markets umožňuje provozovat jeden obchod pro více geografických regionů s odlišnými cenami, měnami, jazyky a daněmi. Dosud bylo nutné pro každý market vytvářet samostatný delivery profile, pokud obchodník chtěl region-specifické shipping rates — to vedlo k duplicitní konfiguraci a vyšší komplexitě správy dopravy.

    Market-driven shipping je nový přístup, kde se shipping konfigurace ukládá přímo na market objekt. Od API verze 2026-07 GraphQL Admin API přidává pole `Market.delivery.shipping` (read) a rozšiřuje mutace `marketCreate` a `marketUpdate` o vstupní typ `delivery.shipping`, který nese celou konfiguraci dopravních možností daného marketu.

    API podporuje čtyři typy delivery options: `DeliveryFlatRateOptionDefinition` (pevná cena), `DeliveryValueBasedOptionDefinition` (závislé na hodnotě košíku), `DeliveryWeightBasedOptionDefinition` (podle hmotnosti zásilky) a `DeliveryCarrierCalculatedOptionDefinition` (real-time sazby od dopravce). Flat a value-based options podporují více rate groups; weight-based a carrier-calculated jsou omezeny na jednu. Rate groups lze omezit podmínkami `DeliveryRateGroupConditions` — například jen pro konkrétní kolekce nebo origin locations.

    Market, který nemá nastavenou vlastní shipping konfiguraci (hodnota `null`), dědí nastavení od parent marketu nebo shop defaultu. Pole `isEnabled: false` umožňuje skrýt shipping options v checkoutu bez smazání konfigurace — vhodné pro dočasné pozastavení dopravy do regionu. Pro vrácení marketu na dědění slouží `MarketUpdateInput.delivery.removeShipping`. Potřebná oprávnění jsou `read_markets` pro dotazy a `read_markets` + `write_markets` pro mutace.
  zdroje:
    - title: "Shopify: Market-driven shipping Admin API"
      url: "https://shopify.dev/changelog/market-driven-delivery-profiles-admin-api"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od Admin GraphQL API verze **2026-07** je možné konfigurovat shipping rates přímo na úrovni Market objektu:

- **Nové read pole:** `Market.delivery.shipping` — vrací aktuální shipping konfiguraci marketu (nebo `null` pokud market dědí od parenta).
- **Rozšířené mutace:** `marketCreate` a `marketUpdate` nyní přijímají `delivery.shipping` input s celou shipping konfigurací. `marketUpdate` také přidává `delivery.removeShipping` pro reset na dědění.
- **Čtyři typy shipping options:**
  - `DeliveryFlatRateOptionDefinition` — pevná cena dopravy
  - `DeliveryValueBasedOptionDefinition` — sazba závislá na hodnotě košíku
  - `DeliveryWeightBasedOptionDefinition` — sazba podle hmotnosti (max 1 rate group)
  - `DeliveryCarrierCalculatedOptionDefinition` — real-time sazby od dopravce (max 1 rate group)
- **Rate group conditions:** omezení platnosti skupin sazeb na kolekce nebo origin locations; volitelný `freeDeliveryMinimumValue` práh pro doprava zdarma.
- **`isEnabled: false`:** skryje shipping options v checkoutu bez smazání konfigurace.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | API verze 2026-07 dostupná, market-driven shipping fields aktivní |
| Průběžně | Merchant-facing UI pro market-driven shipping rollout (mimo scope této API změny) |

*Poznámka: Changelog uvádí "Effective at: January 20, 2030" — pravděpodobně jde o placeholder; API fields jsou dostupné od verze 2026-07.*

## Dopad pro nás

Změna je **aditivní** — žádné breaking changes, žádná migrace stávajících delivery profiles. Pro obchodníky, kteří dosud spravují shipping skrze separátní delivery profiles, zůstává stávající přístup funkční.

Nový přístup zjednodušuje scénáře, kde každý market potřebuje jiné shipping rates: místo vytváření a přiřazování delivery profilů stačí aktualizovat market objekt. Inheritance model (child dědí od parenta) snižuje duplicitu při konfiguraci.

Vyžadovaná oprávnění (`read_markets`, `write_markets`) jsou standardní pro market management — apps pracující s markety pravděpodobně tato oprávnění již mají.

## Použití v Integrátoru

Integrátor může být relevantní ve scénářích, kde pro klienta automatizuje nastavení nových markets (např. při expanzi do regionu). Nová shipping konfigurace v `marketCreate` mutaci umožňuje nastavit dopravní sazby atomicky v rámci jednoho volání — bez dodatečného kroku pro přiřazení delivery profile.

Carrier-calculated option (`DeliveryCarrierCalculatedOptionDefinition`) je zajímavá pro klienty, kteří mají vlastní carrier service integraci — market-level konfigurace může koexistovat se stávajícím carrier service setupem (viz také [carrier-services-no-auto-shipping-profile](carrier-services-no-auto-shipping-profile.md) — od API 2026-10 se carrier services nepřidávají automaticky do default profilu).

Doporučení: sledovat, zda Shopify vydá merchant-facing UI pro market-driven shipping, který by mohl ovlivnit, jak klienti budou chtít shipping konfigurovat. Pokud integrátor spravuje markets za klienty, zaznamenat nové fields jako dostupnou možnost při dalším feature planningu.
