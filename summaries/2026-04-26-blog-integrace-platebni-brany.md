---
date: 2026-04-26
title: "Integrace platební brány: definice a výběr platebního API"
slug: blog-integrace-platebni-brany
zdroj: https://www.shopify.com/cz/blog/integrace-platebni-brany
zdroj_kanal: blog
obrazek: https://cdn.shopify.com/b/shopify-brochure2-assets/20dc090c90b403648217bda0aeaa3995.jpg
shrnuto_dne: 2026-05-05

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Edukační article o platebních branách. Pro nás je relevantní jako reference content při sales/discovery o B2B clients s custom payment requirements."
kontext:
  background: |
    Platební brána je technologická vrstva mezi e-shopem, zákazníkem a bankovní infrastrukturou. Její hlavní úlohou je bezpečně zachytit platební údaje, zašifrovat je a předat ke zpracování karetní síti nebo bance — to vše v reálném čase bez přímého kontaktu obchodníka s číslem karty.

    Shopify zavedl vlastní platební řešení Shopify Payments v roce 2013 jako alternativu k externím branám, čímž snížil transakční poplatky a zjednodušil správu výplat. Zároveň platforma poskytuje otevřené Payment Apps API, které umožňuje certifikovaným třetím stranám integrovat vlastní brány s plnou podporou v administraci.

    V praxi existují čtyři hlavní typy platebních API: transakční (jednorázové platby), subskripční (opakované strhávání), tokenizační (náhrada citlivých dat za token) a výplatní (B2B hromadné převody). Výběr správného typu závisí na obchodním modelu — předplatné vyžaduje jiné API než standardní checkout.

    Pro český trh hraje klíčovou roli podpora bankovních tlačítek (platba přes internetové bankovnictví), kterou nativně nabízejí agregátoři jako GoPay nebo Comgate. Shopify Payments zatím v ČR k dispozici není, takže místní obchodníci musí využívat certifikované alternativní brány propojené přes Payment Apps framework.
  zdroje:
    - title: "Integrace platební brány: definice a výběr platebního API — Shopify Blog CZ"
      url: "https://www.shopify.com/cz/blog/integrace-platebni-brany"
    - title: "Rejection reason codes pro platební aplikace — Shopify changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rejection-reason-codes-payments-apps/"
    - title: "mTLS certifikáty pro platební brány — Shopify changelog"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/mtls-payments-cert-renewal/"
    - title: "Přijímání plateb online — Shopify Blog CZ"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-prijimani-plateb-online/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Vysvětlení integrace platebních bran a jak vybrat správné API. Comparison Shopify Payments, Stripe, GoPay, PayU, ČSOB pro CZ trh."
tagy: [payments, payment-gateway, api, integration, czechia]
---

## O čem to je
Co je platební brána, jak ji integrovat, jak vybrat — Shopify Payments vs. third-party (Stripe, GoPay, PayU). Pro CZ trh řeší lokální options.

## Pro koho je to relevantní
**Pro nás zajímavé** — klienti často řeší výběr platebního provideru. Můžeme ho použít jako reference content při discovery hovorech. Naše integrace často propojují alternative payment providers (např. když klient nechce Shopify Payments).
