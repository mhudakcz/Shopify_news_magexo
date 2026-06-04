---
date: 2026-06-04
title: "Expirující offline tokens povinné pro VŠECHNY public apps od 1. 1. 2027"
title_en: "Expiring offline access tokens required for all public apps as of January 1, 2027"
slug: expiring-offline-tokens-all-public-apps-2027
zdroj: https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-all-public-apps-as-of-january-1-2027
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

deprecation_do: 2027-01-01
migrace_doporucena_do: 2026-12-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se public apps (App Store). Naše integrace běží jako custom apps, ale pokud bychom kdy publikovali, je to deadline. Plus existující public apps musí migrovat."
dotcene_klienty: []
souvisejici: [expiring-offline-tokens-required]

tldr: "Rozšíření z dubna 2026: nyní VŠECHNY existující public apps musí přejít na expirující offline tokens do 1. 1. 2027 (předtím povinné jen pro nové). Plný OAuth refresh flow. _Původně publikováno 20. 5. 2026 (audit doplnění)._"
tagy: [auth, oauth, security, public-app, breaking, 2027-deadline]
---

## Co se mění
Předchozí oznámení z dubna 2026 ([viz Expiring offline tokens required for new apps](../zmena/expiring-offline-tokens-required/)) **rozšířeno**: deadline pro **všechny existující public apps** je **1. 1. 2027**. Bez migrace přestanou tokeny fungovat.

Co je třeba:
- OAuth refresh token handling
- Token expiration tracking
- Graceful re-auth flow při expiry

## Časová osa
- **2026-04-01** — povinné pro nové public apps
- **2027-01-01** — **povinné pro všechny existující public apps** (nový deadline)
- Doporučeno: migrovat do **prosince 2026** s rezervou

## Dopad pro nás
**Pro vývojáře:**
Aktuálně relevantní jen pokud máme publikovanou public app (nemáme — všechno custom). Ale pokud bychom kdy publikovali, refresh flow je povinný.

**Pro PM / PO:**
Sales argument vs. třetí strany s custom apps: „máme refresh token flow ready, můžeme publikovat kdy chceš".

## Použití v Integrátoru
**Možná** — nepřímý dopad, viz dopad pro vývojáře.
