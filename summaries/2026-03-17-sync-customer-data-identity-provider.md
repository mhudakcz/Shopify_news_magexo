---
date: 2026-03-17
title: "Auto-sync customer dat z external identity provider (Plus)"
title_en: "Automatically sync customer data from your identity provider"
slug: sync-customer-data-identity-provider
zdroj: https://changelog.shopify.com/posts/enrich-customer-records-with-data-from-external-identity-providers
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 26 customer methods. Pokud klient (Plus) používá external IdP (Auth0, Okta, atd.) pro customer accounts, tato nativní sync feature může nahradit část naší custom integrace."
dotcene_klienty: []

tldr: "Plus merchanti s external identity provider (Auth0, Okta…) mohou auto-syncovat name, email, phone, addresses a tags do Shopify customer records bez custom middleware."
tagy: [customer, identity, idp, plus, sso]
---

## Co se mění
**Plus merchanti** používající external identity providers (Auth0, Okta, Azure AD atd.) mohou nyní **automaticky synchronizovat customer data** do Shopify customer records:
- name, email, phone
- addresses
- tags

Bez custom middleware.

## Dopad pro nás
**Pro vývojáře:**
Pokud máme custom integraci, která syncuje data z klientského IdP do Shopify customers (typicky přes `createCustomer` / `updateCustomer`), nativní řešení může nahradit / zjednodušit část kódu. Audit existujících klientů s SSO setupem.

**Pro PM / PO:**
Diskovery question pro Plus klienty: „máte SSO / external IdP?" Pokud ano, nativní sync může ušetřit licence a zkrátit projekt.

## Použití v Integrátoru
**Možná** — relevantní pro Plus klienty s external auth. Audit case-by-case.
