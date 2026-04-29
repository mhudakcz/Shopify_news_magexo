---
date: 2026-04-01
title: "delegateAccessTokenCreate vrací expiresIn"
title_en: "delegateAccessTokenCreate mutation now returns expiresIn"
slug: delegateaccesstoken-expiresin
zdroj: https://shopify.dev/changelog/delegateaccesstokencreate-mutation-now-returns-expiresin
shrnuto_dne: 2026-04-29

kategorie: [nova-api]
api_oblast: admin
api_verze: ["2026-04"]
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-04-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se delegate access tokens (typicky pro service-to-service auth). Pokud používáme tento pattern pro klientské integrace, můžeme číst expiresIn pro lepší token rotation."
dotcene_klienty: []

tldr: "Mutace delegateAccessTokenCreate nově vrací expiresIn (sekundy do expirace)."
tagy: [auth, token, oauth, security]
---

## Co se mění
Mutace `delegateAccessTokenCreate` v API **2026-04** nově vrací pole `expiresIn` — počet sekund do expirace tokenu. Dříve klient musel hodnotu odhadovat z konvence (typicky 24 hodin).

## Časová osa
- **2026-04-01** — API 2026-04 začíná platit

## Dopad pro nás
**Pro vývojáře:**
Pokud používáme delegate access tokens (např. pro krátkodobé service-to-service auth k Shopify Admin API), můžeme z odpovědi číst `expiresIn` a implementovat čistší token refresh logic. Bez breaking change.

## Použití v Integrátoru
**Možná** — záleží, jestli někde voláme `delegateAccessTokenCreate`. Pokud ano, lze rozšířit query selektor o `expiresIn`.
