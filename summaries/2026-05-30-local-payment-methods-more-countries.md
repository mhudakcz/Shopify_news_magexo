---
date: 2026-05-30
title: "Local payment methods (MobilePay, TWINT, BLIK, Przelewy24) ve více evropských zemích"
title_en: "Local payment methods are now available in more countries"
slug: local-payment-methods-more-countries
zdroj: https://changelog.shopify.com/posts/more-local-payment-methods-are-now-available-in-additional-countries
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost]
api_oblast: billing
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Payments config (merchant-side). Naše integrace čte finální payment method z orderu, žádný direct impact."
dotcene_klienty: []
souvisejici: [klarna-more-countries]

tldr: "Shopify Payments rozšiřuje local payment methods (MobilePay, TWINT, BLIK, Przelewy24) do dalších evropských zemí — méně friction v checkoutu pro lokální zákazníky."
tagy: [payments, europe, local, shopify-payments, mobilepay, twint, blik, przelewy24]
---

## Co se mění
**Shopify Payments** rozšiřuje **local payment methods** do dalších evropských zemí:
- **MobilePay** — Dánsko, Finsko (původně už v některých zemích)
- **TWINT** — Švýcarsko (rozšíření)
- **BLIK** — Polsko (rozšíření)
- **Przelewy24** — Polsko

Cíl: nižší friction v checkoutu pro zákazníky, kteří preferují lokální preferred payment method před kartou.

## Dopad pro nás
**Pro vývojáře:**
Žádný API impact. Pokud naše integrace čte payment method z orderu pro reporting / ERP sync, payment method enum hodnoty zůstávají stejné — jen se nově mohou objevit ve více storeech.

**Pro PM / PO:**
Pro klienty s EU expanze (Markets, multi-country setup) je to argument: „Shopify má nativně podporu pro lokální payment methods, nemusí to klient řešit přes third-party gateway." Relevant zejména pro CZ/SK/PL/CH klienty.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Payments setup je merchant config, naše integrace operují s finálními order daty.
