---
date: 2026-06-04
title: "Přijímání plateb on-line"
slug: blog-prijimani-plateb-online
zdroj: https://www.shopify.com/cz/blog/prijimani-plateb-online
zdroj_kanal: blog
shrnuto_dne: 2026-06-04

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Payment acceptance primer."
kontext:
  background: |
    Přijímání plateb online označuje celý technický a obchodní řetězec, který umožňuje zákazníkovi zaplatit v digitálním prostředí — od zadání platebních údajů přes jejich šifrované předání platební bráně až po finální zúčtování mezi bankami. Klíčovými aktéry jsou vydavatel karty (issuer), banka obchodníka (acquirer), karetní síť (Visa, Mastercard) a samotná platební brána jako technologický prostředník.

    V Evropě platí od roku 2019 přísná pravidla směrnice PSD2, která vyžaduje dvoufaktorové ověření zákazníka (SCA — Strong Customer Authentication) u většiny online transakcí. To zásadně ovlivnilo checkout UX: obchodníci musí integrovat brány s podporou 3D Secure 2.0 nebo jiného SCA mechanismu, jinak riskují zamítání transakcí vydavatelskou bankou. PCI DSS je pak nezávislý průmyslový standard definující bezpečnostní požadavky na infrastrukturu, která zpracovává čísla karet.

    Pro český trh je specifická absence Shopify Payments — platforma v ČR nenabízí nativní platební řešení, a obchodníci proto volí mezi lokálními agregátory (GoPay, Comgate, ČSOB Pay) a globálními poskytovateli (Stripe, Adyen). Lokální agregátoři mají výhodu podpory bankovních tlačítek (platba přes internetové bankovnictví), která jsou na českém trhu velmi rozšířena.
  zdroje:
    - title: "Přijímání plateb online — Shopify Blog CZ"
      url: "https://www.shopify.com/cz/blog/prijimani-plateb-online"
    - title: "Integrace platební brány: definice a výběr platebního API — Shopify Blog CZ"
      url: "https://www.shopify.com/cz/blog/integrace-platebni-brany"
    - title: "Jak funguje platba kartou? — Shopify Blog CZ"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-platba-kartou/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Online payment acceptance pro CZ e-shopy — payment gateway výběr (Shopify Payments, GoPay, ČSOB, Stripe), security, fees, recurring + one-time billing. _Původně publikováno 20. 5. 2026 (audit doplnění)._"
tagy: [payments, czechia, gateway, beginner]
souvisejici: [blog-platba-kartou, blog-integrace-platebni-brany]
---

## O čem to je
Payment acceptance primer pro CZ e-shop: výběr gateway (Shopify Payments vs. GoPay vs. ČSOB vs. Stripe), security/PCI, fees, recurring billing.

## Pro koho je to relevantní
CZ začátečníci. **Pro nás reference content při sales hovorech o payment processing setup.**
