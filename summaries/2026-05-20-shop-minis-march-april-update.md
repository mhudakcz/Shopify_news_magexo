---
date: 2026-05-20
title: "Shop Minis březen/duben 2026 update — optional consent, intents, runtime permissions"
title_en: "Shop Minis March April 2026 update"
slug: shop-minis-march-april-update
zdroj: https://shopify.dev/changelog/shop-minis-march-april-2026-update
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-21

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shop Minis SDK changes. Neimplementujeme Shop Minis."
dotcene_klienty: []
souvisejici: [shop-minis-february-2026-update]

tldr: "Shop Minis podporují optional consent (uživatel může odmítnout scope a pokračovat). Nové hooks useCheckScopesConsent / useRequestScopesConsent / useCheckPermissions pro runtime permission checks. Intents pro contextual distribuci."
tagy: [shop-minis, mobile, consent, permissions]
---

## Co se mění
**Shop Minis** (mini-app framework v Shop app) update:
- **Optional consent** — uživatel může odmítnout scope a aplikace pokračuje s omezenou funkcionalitou
- Nové **runtime permission hooks**:
  - `useCheckScopesConsent` — zjistit, co user povolil
  - `useRequestScopesConsent` — explicit request
  - `useCheckPermissions` — runtime check kombinace
- **Intents** — Shop Minis se spouští z relevantních kontextů (např. product detail → otevřít related Mini)

## Použití v Integrátoru
**Nepoužíváme** — Shop Minis framework.

## Související
- [Shop Minis únor 2026 update](../zmena/shop-minis-february-2026-update/)
