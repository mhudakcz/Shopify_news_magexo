---
date: 2026-06-04
title: "Jak funguje platba kartou?"
slug: blog-platba-kartou
zdroj: https://www.shopify.com/cz/blog/jak-funguje-platba-kartou
zdroj_kanal: blog
shrnuto_dne: 2026-06-04

kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Payment processing primer."
kontext:
  background: |
    Platba kartou je dnes nejrozšířenější způsob bezhotovostního placení na internetu. Za každou transakcí stojí čtyři klíčoví aktéři: vydavatel karty (issuer banka zákazníka), acquirer (banka obchodníka přijímající platbu), platební procesor (technický zprostředkovatel mezi oběma bankami) a karetní síť (Visa nebo Mastercard), která provozuje clearingovou infrastrukturu a stanovuje pravidla.

    Karetní sítě vznikly v 60. a 70. letech 20. století jako mezinárodní clearingové domy — BankAmericard (pozdější Visa) v roce 1958 a Mastercard v roce 1966. Od té doby se jejich technologická páteř rozrostla o standardy jako PCI DSS pro bezpečnost dat a směrnici PSD2 v EU, která přinesla povinné silné ověření zákazníka (3D Secure 2.0). Tyto standardy přímo ovlivňují, jak musí obchodníci nakládat s platebními daty.

    Pro e-shopové obchodníky je klíčové pochopit rozdíl mezi autorizací (rezervace prostředků na kartě), capture (skutečné strháváním) a settlement (připsání peněz na obchodníkův účet, typicky T+1 až T+3). Platformy jako Shopify Payments proces zjednodušují tím, že acquirer, procesor i správu výplat (payout) sdružují do jednoho rozhraní a snižují nutnost přímé integrace s bankami.

    V českém prostředí Shopify Payments zatím není dostupný, takže obchodníci využívají certifikované třetí strany (GoPay, ČSOB, Comgate, Stripe). Volba brány ovlivňuje výši mezibankovních poplatků (interchange), podporované platební metody i rychlost výplat.
  zdroje:
    - title: "Jak funguje platba kartou? — Shopify Blog CZ"
      url: "https://www.shopify.com/cz/blog/jak-funguje-platba-kartou"
    - title: "Integrace platební brány: definice a výběr platebního API — Shopify Blog CZ"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-integrace-platebni-brany/"
    - title: "Přijímání plateb online — Shopify Blog CZ"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-prijimani-plateb-online/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Vysvětlení card payment flow — authorization, capture, settlement, fees. Issuer / acquirer / processor / card network. Pro merchanty plánující debut online. _Původně publikováno 20. 5. 2026 (audit doplnění)._"
tagy: [payments, card, processing, education]
souvisejici: [blog-integrace-platebni-brany]
---

## O čem to je
Card payment lifecycle primer: authorization → capture → settlement; role issuer / acquirer / processor / Visa-MasterCard network; přehled fees.

## Pro koho je to relevantní
Začátečnický audience. Pro nás reference content při sales discussions o payment gateways.
