---
date: 2026-04-15
title: "Odstranění deprecated PRIVATE/PUBLIC_READ enumů na metaobject definitions"
title_en: "Removing deprecated PRIVATE and PUBLIC_READ enums on metaobject definitions"
slug: removing-private-publicread-enums-metaobjects
zdroj: https://shopify.dev/changelog/removing-deprecated-private-and-publicread-enums-on-metaobject-definitions
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-07-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 12 metaobject methods v naší integraci včetně createMetaobjectDefinition, updateMetaobjectDefinition. Pokud někde nastavujeme MetaobjectAdminAccess explicitně na PRIVATE/PUBLIC_READ, je nutné migrovat na nové hodnoty."
dotcene_klienty: []
souvisejici: []

tldr: "API 2026-07 odstraňuje hodnoty PRIVATE a PUBLIC_READ z MetaobjectAdminAccess enumu — používáme metaobjects, prověřit."
tagy: [metaobject, deprecation, access-control, breaking]
---

## Co se mění
Enum `MetaobjectAdminAccess` v Admin GraphQL API od verze **2026-07** odstraňuje obsoletní hodnoty `PRIVATE` a `PUBLIC_READ`. Důvod: tyto hodnoty měly nejednoznačné chování při kombinaci s ostatními access pravidly. Migrace je na zbývající jasně definované hodnoty (`MERCHANT_READ`, `MERCHANT_READ_WRITE`, případně `PUBLIC_READ_WRITE`).

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, hodnoty odstraněny

## Dopad pro nás
**Pro vývojáře:**
Prověřit `createMetaobjectDefinition` a `updateMetaobjectDefinition` calls — pokud někde předáváme `access: PRIVATE` nebo `access: PUBLIC_READ`, zvolit cílovou hodnotu (typicky `MERCHANT_READ`). Konkrétní mapping záleží na intent: PRIVATE → MERCHANT_READ, PUBLIC_READ → PUBLIC_READ_WRITE pokud má smysl write.

**Pro PM / PO:**
Pokud klient používá metaobjects pro custom data structures, je nutné při migraci na 2026-07 prověřit přístupová pravidla. Žádný přímý dopad pro koncového uživatele, ale špatná migrace může způsobit "access denied" chyby.

## Použití v Integrátoru
**Ano** — máme 12 metaobject methods včetně `createMetaobjectDefinition`, `updateMetaobjectDefinition` v naší integraci. Je třeba projít kód a ověřit explicitní použití hodnot `PRIVATE`/`PUBLIC_READ` před upgradem na 2026-07.

## Rizika a edge cases
- Existující metaobject definitions s deprecated enum hodnotami mohou přestat fungovat po upgradu API verze
- Nutné otestovat na staging před produkcí
- Pokud klient má metaobjects přímo přes Shopify Admin (mimo náš kód), tam migrovat samostatně
