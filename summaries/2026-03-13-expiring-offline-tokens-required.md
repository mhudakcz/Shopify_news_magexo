---
date: 2026-03-13
title: "Expirující offline access tokens povinné pro nové public apps od 1. 4. 2026"
title_en: "Expiring offline access tokens required for new public apps as of April 1, 2026"
slug: expiring-offline-tokens-required
zdroj: https://shopify.dev/changelog/expiring-offline-access-tokens-required-for-public-apps-april-1-2026
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, deprecation]
api_oblast: admin
api_verze: []
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se public apps (Shopify App Store). Naše integrace běží jako custom apps, ale pokud bychom v budoucnu publikovali public app, OAuth flow musí podporovat refresh tokens."
dotcene_klienty: []

tldr: "Public apps vytvořené po 1. 4. 2026 musí používat expirující offline access tokens (s refresh)."
tagy: [auth, oauth, security, public-app]
---

## Co se mění
**Public apps** vytvořené **po 1. dubnu 2026** musí používat **expirující offline access tokens** s explicit refresh flow. Dříve mohly mít trvalé tokeny. Cíl: vyšší security posture, méně rizika z dlouhodobě platných credentials.

## Časová osa
- **2026-04-01** — povinné pro nové public apps

## Dopad pro nás
**Pro vývojáře:**
Náš shopify-client je strukturován pro custom apps (privátní pro každého klienta). Pokud kdy publikujeme do App Store, OAuth handshake musí ukládat `expires_in` a refresh token, plus implementovat refresh middleware.

**Pro PM / PO:**
Pokud uvažujeme o publikaci nějaké funkcionality jako veřejné app pro Shopify App Store, architectural impact — vyžaduje refresh flow.

## Použití v Integrátoru
**Možná** — aktuálně neimpactuje custom apps. Při budoucí publikaci public app je třeba zohlednit.
