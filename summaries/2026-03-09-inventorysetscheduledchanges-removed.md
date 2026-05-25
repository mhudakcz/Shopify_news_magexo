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

tldr: "Mutace inventorySetScheduledChanges je v API 2026-07 odstraněna — bez přímé náhrady."
tagy: [inventory, scheduled, deprecation, breaking]
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
