---
date: 2026-07-01
title: "Deprecation isCumulative arg v marketingEngagementCreate — Action Required"
title_en: "Deprecation of cumulative marketing engagements"
slug: cumulative-marketing-engagements-deprecated
zdroj: https://shopify.dev/changelog/deprecation-of-cumulative-marketing-engagements
shrnuto_dne: 2026-07-02
kategorie: [deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor posílá marketingové engagement eventy přes Admin GraphQL API — pokud používá isCumulative: true, musí přejít na per-event (non-cumulative) zasílání dat."
dotcene_klienty: []
souvisejici:
  - "cumulative-metrics-analytics"
  - "track-discounts-marketing-campaigns"
  - "marketing-automations-moving"
tldr: "Argument isCumulative v mutaci marketingEngagementCreate je deprecated a jeho default se mění na false — integrace posílající kumulativní metriky musí přejít na zasílání jednotlivých engagement eventů."
tagy: [marketing, engagements, deprecation, admin-api, action-required, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Mutace `marketingEngagementCreate` v Admin GraphQL API slouží k reportování engagement metrik marketingových aktivit a kanálů — jako jsou impressions, clicks, sessions, ad spend nebo konverze. Argument `isCumulative` (boolean) říkal systému, jak interpretovat zasílané hodnoty: při `true` šlo o agregátní součty za celou dobu kampaně, při `false` o data platná jen pro konkrétní časový úsek.

    Shopify se rozhodl cumulative mód opustit a standardizovat na non-cumulative (per-period) zasílání eventů. Argument `isCumulative` je od 1. července 2026 označen jako deprecated a jeho výchozí hodnota se mění na `false`. Integrace, které jej dříve explicitně nastavovaly na `true`, mohou prozatím pokračovat, ale migrace je potřebná — Shopify nespecifikoval tvrdý deadline, nicméně podpora cumulative dat může být budoucí verzí API odebrána.

    Praktický dopad závisí na tom, jak konkrétní integrace engagement data sbírá a odesílá. Pokud integrace zasílá průběžné součty (např. celkový počet kliků od spuštění kampaně), je nutné přepracovat logiku tak, aby se místo toho posílaly přírůstkové hodnoty za každý reporting interval zvlášť. Jde o změnu v datovém modelu a případně i v plánování cron jobů nebo webhooků, které data sbírají.
  zdroje:
    - title: "Shopify: Deprecation of cumulative marketing engagements"
      url: "https://shopify.dev/changelog/deprecation-of-cumulative-marketing-engagements"
    - title: "Shopify Admin GraphQL: marketingEngagementCreate"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/mutations/marketingEngagementCreate"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Argument `isCumulative` v mutaci `marketingEngagementCreate` (Admin GraphQL API) je **deprecated** od API verze 2026-07. Jeho výchozí hodnota se mění z `true` na `false`.

**Před změnou** bylo možné (a bylo to výchozí chování) posílat kumulativní metriky — tj. průběžně rostoucí součty od začátku kampaně:

```graphql
marketingEngagementCreate(
  marketingActivityId: "gid://shopify/MarketingActivity/123"
  marketingEngagement: {
    occurredOn: "2026-07-01"
    isCumulative: true          # deprecated
    clicksCount: 15420          # celkový součet od spuštění
    impressionsCount: 284000
  }
)
```

**Po migraci** je správný přístup posílat **non-cumulative** hodnoty — tedy přírůstek za konkrétní reportovací období:

```graphql
marketingEngagementCreate(
  marketingActivityId: "gid://shopify/MarketingActivity/123"
  marketingEngagement: {
    occurredOn: "2026-07-01"
    isCumulative: false         # nebo vynechat (nový default)
    clicksCount: 312            # pouze clicks za 1. července
    impressionsCount: 5800
  }
)
```

Mutation signature ani ostatní `MarketingEngagementInput` fieldy se nemění. Mění se pouze sémantika zasílaných čísel.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-07-01 | `isCumulative` označeno jako deprecated, default změněn na `false` |
| TBD | Plné odstranění argumentu (Shopify nespecifikoval datum) |

Migrace není časově naléhavá v měřítku hodin — Shopify umožňuje přechod "whenever convenient". Doporučujeme ji naplánovat v rámci nejbližšího releasu integrace.

## Dopad pro nás

Pokud naše integrace (nebo integrace klienta) volá `marketingEngagementCreate` s `isCumulative: true`, je nutné:

1. **Změnit logiku sběru dat** — místo průběžného součtu sbírat a odesílat delta hodnoty za každý interval.
2. **Odebrat nebo nastavit `isCumulative: false`** — vyhnout se budoucímu breaking change při odebrání argumentu.
3. **Zkontrolovat historická data** — non-cumulative eventy se agregují jinak; případná backfill data by mohla zdvojit počty.

Pokud integrace již posílá non-cumulative data (nebo `isCumulative: false`), není žádná akce potřebná.

## Použití v Integrátoru

Integrátor komunikuje s Admin GraphQL API a potenciálně volá `marketingEngagementCreate` při synchronizaci marketingových dat. Je nutné prověřit:

- Zda je mutace vůbec volána (search v codebase: `marketingEngagementCreate`, `isCumulative`).
- Pokud ano, zda je `isCumulative` explicitně `true` — to je případ vyžadující migraci.
- Pokud argument není přítomen nebo je `false`, integrace je již kompatibilní s novým výchozím chováním.

Scope `write_marketing_events` je vyžadován pro volání mutace — přítomnost tohoto scopu v konfiguraci klienta je dobrý indikátor, že integrace tuto mutaci využívá.
