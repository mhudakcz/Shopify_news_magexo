---
date: 2026-06-30
title: "Order attribution pro sales channel apps — granular handles a Admin GraphQL API"
title_en: "Configure order attribution for sales channel apps"
slug: order-attribution-sales-channel-apps
zdroj: https://shopify.dev/changelog/order-attribution-definitions-are-available-in-order-channel-filters
shrnuto_dne: 2026-07-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor funguje jako sales channel app, může pomocí nových attribution definic rozlišit, přes jaký surface (TikTok, Meta, vlastní endpoint) objednávka vznikla — relevantní pro reporting."
dotcene_klienty: []
souvisejici: ["multi-channel-sales-channel-apps", "order-cart-token-field", "staff-attribution-pos-improvements"]
tldr: "Od API verze 2026-07 mohou sales channel apps definovat granulární attribution handles a přiřazovat je objednávkám přes Admin GraphQL i Storefront API."
tagy: [order-attribution, sales-channel, extension, admin-api, storefront-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Order attribution označuje mechanismus, kterým Shopify identifikuje, odkud objednávka pochází — tj. přes jaký prodejní kanál nebo surface zákazník nakoupil. Dosud bylo možné přiřadit objednávku pouze na úrovni celé aplikace nebo kanálu, bez možnosti rozlišit konkrétní zdroj v rámci jedné sales channel app (např. TikTok Shop vs. TikTok Live, nebo různé Meta kampaně).

    Nová funkce v API verzi 2026-07 umožňuje sales channel apps definovat vlastní attribution definitions — pojmenované handles, které popisují konkrétní source objednávky. Tyto definice lze vytvářet a spravovat přes Admin GraphQL API (mutation `orderAttributionDefinitionUpsert`, query `orderAttributionDefinitions`). Při tvorbě objednávky nebo cartu se handle předává jako `sourceName`, a pokud odpovídá schválené definici, Shopify jej zaznamená jako granulární attribution source.

    Praktický dopad je zejména pro apps prodávající přes více surfaces najednou — typicky TikTok, Meta nebo jiné social commerce integrace. Místo jednoho generického záznamu "objednávka z kanálu X" merchant v reportingu uvidí přesný zdroj (např. "tiktok-live", "meta-reels-ad"). Pro čtení výsledné attribution slouží nové pole `Order.attribution`, které nahrazuje dřívější deprecated field `Order.channelInformation`.

  zdroje:
    - title: "Shopify: Configure order attribution for sales channel apps"
      url: "https://shopify.dev/changelog/order-attribution-definitions-are-available-in-order-channel-filters"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od API verze **2026-07** (uvolněno 9. června 2026) mohou sales channel apps konfigurovat **granulární order attribution definitions** — pojmenované handles, které přesněji popisují zdroj objednávky v rámci jednoho kanálu.

Nové možnosti implementace:

- **Channel-based definition** — definice se nastaví přímo při vytváření channel connection.
- **Static attribution source** — přes extension `order_attribution_config` v kódu aplikace.
- **Dynamic definitions** — plná správa přes Admin GraphQL API.

Klíčové GraphQL operace:

| Operace | Typ | Popis |
|---|---|---|
| `orderAttributionDefinitionUpsert` | mutation | Vytvoří nebo aktualizuje attribution definition |
| `orderAttributionDefinitions` | query | Výpis existujících definic |
| `orderCreate` | mutation | Při tvorbě objednávky se předá attribution handle |
| `cartCreate` (Storefront API) | mutation | Handle se předává přes pole `sourceName` |

Nové pole `Order.attribution` (Admin GraphQL) vrací resolved attribution detail a je doporučenou náhradou za deprecated `Order.channelInformation`. Pokud předaný handle neodpovídá žádné schválené definici, Shopify automaticky fallbackuje na app-level attribution.

## Časová osa

| Datum | Událost |
|---|---|
| 9. června 2026 | Funkce dostupná v API verzi 2026-07 |
| 30. června 2026 | Oznámení v Shopify dev changelog |

## Dopad pro nás

Tato změna se týká pouze **sales channel apps** — tedy aplikací, které vytvářejí vlastní prodejní kanál v Shopify Admin. Standardní integrace nebo merchant-side appky tuto funkci nevyužijí.

Pokud vyvíjíme nebo spravujeme sales channel app prodávající přes více surfaces (např. social commerce, marketplace integrace), je vhodné:

1. Definovat attribution handles pro každý surface přes `orderAttributionDefinitionUpsert`.
2. Předávat handle při `orderCreate` nebo `cartCreate`.
3. Přečíst výslednou attribution přes `Order.attribution` (a přestat spoléhat na `Order.channelInformation`).

Merchant-facing dopad: detailnější přehled, odkud objednávky přicházejí, v Shopify Analytics a reportech.

## Použití v Integrátoru

Pokud Integrátor vystupuje jako sales channel app (má vlastní channel connection v Shopify), může pomocí nových attribution definitions rozlišit konkrétní source objednávky — například při napojení na více externích platforem nebo endpoint typů. To zpřesní reporting pro merchants, kteří chtějí vidět výkonnost jednotlivých surfaces zvlášť.

Migrace z `Order.channelInformation` na `Order.attribution` by měla proběhnout v rámci přechodu na API 2026-07, pokud toto pole aktuálně čteme.
