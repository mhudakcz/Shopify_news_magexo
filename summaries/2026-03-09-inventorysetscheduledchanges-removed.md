---
date: 2026-03-09
title: "inventorySetScheduledChanges odstraněno bez náhrady v 2026-07"
title_en: "inventorySetScheduledChanges mutation is being removed with no replacement"
slug: inventorysetscheduledchanges-removed
zdroj: https://shopify.dev/changelog/inventorysetscheduledchanges-mutation-is-being-removed-with-no-replacement
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme inventory methods (inventoryActivate, setInventoryOnHandQuantities, updateInventoryItem). inventorySetScheduledChanges přímo nepoužíváme, ale prověřit, jestli některý workflow nezávisí."
dotcene_klienty: []

kontext:
  background: |
    Mutace `inventorySetScheduledChanges` byla součástí Shopify Admin GraphQL API a umožňovala aplikacím naplánovat změnu skladového množství na konkrétní budoucí datum — jinými slovy "zarezervovat" úpravu inventáře předem, aniž by se provedla ihned. Šlo o speciální funkci pro scénáře jako sezónní naskladnění, plánované výprodeje nebo časované delistingy produktů.

    Shopify tuto mutaci odstraňuje v rámci dlouhodobého úsilí o zjednodušení a sjednocení API pro správu inventáře. Rozhraní pro inventář prošlo v posledních verzích větší modernizací — přibyly nové fieldy jako `isActive` na `InventoryLevel` (2026-04), argument `includeInactive` pro query `inventoryLevels` (2026-04) a rozšířené change tracking pro inventory adjustments. Scheduled mutations do tohoto zjednodušeného modelu nezapadaly a Shopify se rozhodl je nevyvíjet dále.

    Přímá náhrada neexistuje. Vývojáři musí přechod na plánování řešit aplikačně — implementovat background job (cron, workflow scheduler), který v cílovém čase zavolá mutaci `setInventoryOnHandQuantities` nebo `inventoryAdjustQuantities`. Tento přístup dává vývojáři plnou kontrolu nad logikou plánování, ale vyžaduje vlastní infrastrukturu pro správu časovaných úloh.

    Odstranění se týká výhradně aplikací stavějících na Admin GraphQL API verze 2026-07 a novějších. Shopify doporučuje prohledat kódovou základnu a případné závislosti migrovat před 1. červencem 2026, kdy se nová verze API stává aktivní.
  zdroje:
    - title: "inventorySetScheduledChanges mutation is being removed with no replacement"
      url: "https://shopify.dev/changelog/inventorysetscheduledchanges-mutation-is-being-removed-with-no-replacement"
    - title: "isActive pole na InventoryLevel v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/isactive-field-inventorylevel/"
    - title: "includeInactive argument pro inventoryLevels v 2026-04"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/includeinactive-arg-inventorylevels/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Mutace inventorySetScheduledChanges je v API 2026-07 odstraněna — bez přímé náhrady."
tagy: [inventory, scheduled, deprecation, breaking]
editions_release: spring-2026
---

## Co se mění
Mutace `inventorySetScheduledChanges` (sloužila pro plánování budoucích změn inventury) je v API verze **2026-07** **odstraněna bez přímé náhrady**. Pro plánované změny inventury použít aplikační scheduler — volat `setInventoryOnHandQuantities` v okamžiku, kdy má změna proběhnout.

## Časová osa
- **2026-07-01** — mutace odstraněna

## Dopad pro nás
**Pro vývojáře:**
Pokud někde používáme `inventorySetScheduledChanges`, je třeba refactor: nahradit aplikační schedulerem (cron/workflow), který volá `setInventoryOnHandQuantities` v cílový čas. Naše core inventory methods změny nepřinášejí.

**Pro PM / PO:**
Pokud klient měl "scheduled inventory updates" feature postavenou na této mutaci, je třeba migrace. Žádný end-customer impact.

## Použití v Integrátoru
**Možná** — naše core inventory methods (4 v naší integraci) tuto mutaci nepoužívají, ale doporučuji grep před upgradem na 2026-07.

## Rizika a edge cases
- Bez náhrady — nutné aplikační workaround (background job)
