---
date: 2026-06-30
title: "Location metafields jako dimensions a filters v Analytics — store tiers, fulfillment capabilities"
title_en: "Use location metafields as dimensions and filters in Analytics"
slug: location-metafields-analytics-dimensions
zdroj: https://changelog.shopify.com/posts/use-location-metafields-as-dimensions-and-filters-in-analytics
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s location daty; pokud klient používá location metafields pro store tier nebo fulfillment capabilities, mohly by být relevantní pro reporting nebo synchronizaci location atributů."
dotcene_klienty: []
souvisejici:
  - "inventory-transfers-metafields-merchant"
  - "order-attribution-sales-channel-apps"
  - "pos-devices-manage-from-admin"
tldr: "Location metafields (tier obchodu, fulfillment možnosti, interní kódy) lze nyní zapnout jako dimensions a filters v Analytics reports — stačí aktivovat volbu v definici metafieldu v Settings."
tagy: [analytics, location, metafield, reporting, segmentation]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics dosud umožňoval segmentovat data podle produktů, variant, zákazníků a objednávek — ale ne podle vlastností konkrétních location. Multi-location retailers tak nemohli v nativních reportech snadno porovnávat výkon poboček podle vlastních kategorií, jako jsou výkonnostní tiery, typy fulfillmentu nebo interní identifikátory.

    Nová funkce to mění: každý location metafield lze označit jako "Filter or group data in Analytics" přímo v definici metafieldu (Settings > Metafields and metaobjects > Locations). Po aktivaci je metafield dostupný jako dimension i filter ve všech Analytics reportech, stejně jako to funguje u product nebo order metafieldů.

    Praktické use cases zahrnují klasifikaci poboček do výkonnostních tierů (Tier 1/2/3), uložení SAN čísel nebo vendor kódů pro ERP integraci, označení provozních capabilities (pickup, curbside, drive-thru), přiřazení doručovacích zón nebo PSČ oblastí a kontaktních údajů specifických pro danou location. Výsledkem je granulární reporting bez nutnosti exportovat data do externích nástrojů.

    Funkce je dostupná od 30. června 2026 a nevyžaduje žádné API změny — jde o čistě merchantské nastavení v Shopify admin.
  zdroje:
    - title: "Shopify: Use location metafields as dimensions and filters in Analytics"
      url: "https://changelog.shopify.com/posts/use-location-metafields-as-dimensions-and-filters-in-analytics"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify nově umožňuje používat **location metafields jako dimensions a filters** v Analytics reportech. Dosud byly v Analytics dostupné metafieldy produktů, variant, zákazníků a objednávek — location metafieldy chyběly.

**Jak zapnout:**
1. Jít do **Settings > Metafields and metaobjects > Locations**
2. Otevřít požadovanou definici metafieldu
3. Aktivovat volbu **"Filter or group data in Analytics"**

Po aktivaci je metafield ihned dostupný jako dimension i filter ve všech Analytics reportech.

**Podporované use cases podle Shopify:**
- **Store tiers** — klasifikace poboček jako Tier 1 / 2 / 3 podle výkonu
- **Interní identifikátory** — SAN čísla, vendor kódy pro ERP systémy
- **Fulfillment capabilities** — označení služeb: pickup, curbside delivery, drive-thru
- **Delivery zones** — přiřazení PSČ oblastí nebo doručovacích zón
- **Kontaktní údaje** — emaily nebo telefony specifické pro danou location

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-30 | Funkce dostupná pro všechny merchanty |

Změna nevyžaduje žádné API migrace ani kódové úpravy — aktivace je čistě přes Shopify admin.

## Dopad pro nás

Funkce je relevantní pro **multi-location merchanty**, kteří chtějí segmentovat Analytics podle vlastních location atributů bez exportu do externích nástrojů (Google Sheets, Looker, apod.).

Pro naše klienty s méně než 5 lokacemi nebo bez vlastních location metafieldů je dopad minimální. Pokud ale klient eviduje store tiers nebo fulfillment capabilities v metafieldech, tato funkce jim okamžitě zpřístupní granulární reporting v nativním Shopify Analytics.

Z pohledu **implementace** jde o nulový effort — zapnutí jedné volby v admin panelu.

## Použití v Integrátoru

Integrátor pracuje s location daty (warehouse mapping, fulfillment routing). Pokud klient používá location metafieldy pro store tier nebo provozní capabilities, mohly by být tyto hodnoty zajímavé i pro reporting nebo synchronizaci přes Integrátor.

Konkrétní action: při onboardingu multi-location klientů ověřit, zda mají definované location metafieldy a zda by jim pomohl reporting podle těchto dimenzí. Aktivace je triviální a může zvýšit vnímanou hodnotu nativního Analytics.
