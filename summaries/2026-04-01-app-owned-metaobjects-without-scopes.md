---
date: 2026-04-01
title: "App-owned metaobjects ($app prefix) nepotřebují access scopes"
title_en: "App-owned metaobjects can be used without access scopes"
slug: app-owned-metaobjects-without-scopes
zdroj: https://shopify.dev/changelog/metaobject-scopes-not-required-for-app-metaobjects
shrnuto_dne: 2026-04-29

kategorie: [nova-api, integrace]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: ano
dukaz_integratoru: "Máme 12 metaobject methods. Pokud používáme app-owned metaobjects ($app:* prefix) v naších custom apps, můžeme zjednodušit OAuth scope manifest."
dotcene_klienty: []
souvisejici: [removing-private-publicread-enums-metaobjects]

tldr: "App-owned metaobjects identifikované $app prefixem už nepotřebují access scopes v API 2026-04+."
tagy: [metaobject, scopes, oauth, simplification]
---

## Co se mění
Od API verze **2026-04** mohou aplikace pracovat s **app-owned metaobjects** (identifikované `$app:` prefixem v `type` field) bez nutnosti deklarovat specific access scopes v OAuth manifest. App-owned metaobjects jsou data izolovaná pro konkrétní app — Shopify nepotřebuje další permission, protože app může k vlastním datům přistupovat default.

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace ukládá custom data do metaobjects pomocí `$app:` namespace, můžeme z OAuth scope manifestu odebrat příslušné `read_metaobjects`/`write_metaobjects` scope (pro tyto specifické metaobjects). Méně permissions = méně friction při app installation.

**Pro PM / PO:**
Tichá technická změna — uživatel/merchant uvidí během installace méně requested permissions u nově nasazených apps.

## Použití v Integrátoru
**Ano** — `shopify-client/admin/metaobjects` má 12 metod. Pokud používáme `$app:*` namespace pro vlastní data structures (typicky settings, custom mapping), můžeme po upgradu na 2026-04 cleanup OAuth scopes.
