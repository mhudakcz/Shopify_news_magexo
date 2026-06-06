---
date: 2026-03-19
title: "Collect Credit remittances přes Shopify Payments v Texasu"
title_en: "Collect Credit remittances through Shopify Payments in Texas"
slug: credit-remittances-shopify-payments-texas
zdroj: https://changelog.shopify.com/posts/collect-credit-remittances-through-shopify-payments-in-texas
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Credit feature pro US Texas, finance."
kontext:
  background: |
    Shopify Credit je finanční produkt Shopify určený přímo pro obchodníky, který jim poskytuje přístup k předfinancování nebo nákupnímu kreditu na obchodní výdaje. Liší se od Shopify Capital (podnikatelské zálohy/půjčky) tím, že jde o kreditní linku — obchodník čerpá prostředky na provozní náklady a následně je splácí. Model „Pay over Time from Sales" znamená, že splátky jsou automaticky strhávány z denních výplat Shopify Payments ještě před připsáním zbytku na bankovní účet obchodníka.

    Mechanismus remittance (automatického splácení přes Shopify Payments) Shopify zavedlo nejprve pro Shopify Capital a postupně jej rozšiřuje na další finanční produkty. Jde o technicky elegantní přístup: místo ACH přímého debetu (který je závislý na bankovním spojení a může selhat) Shopify strží splátku přímo z toku peněz procházejícího přes vlastní platební bránu. Pro obchodníka to zjednodušuje správu — není potřeba hlídat datum splatnosti nebo zajistit dostatek prostředků na bankovním účtu.

    Rozšíření do Texasu bylo vyvoláno novými právními požadavky tohoto státu, které vstoupily v platnost 12. ledna 2026. Tento krok ilustruje, jak musí Shopify přizpůsobovat finanční funkce rozdílné regulaci jednotlivých amerických států — podobný proces proběhl i u Capital remittance, která se v dubnu 2026 rozšířila na všechny státy USA. Alternativní způsob splácení (Pay in Full) zůstává i nadále realizován přes ACH přímý debet.
  zdroje:
    - title: "Collect Credit remittances through Shopify Payments in Texas"
      url: "https://changelog.shopify.com/posts/collect-credit-remittances-through-shopify-payments-in-texas"
    - title: "Capital Remittance via Shopify Payments Expands to all states of the US"
      url: "https://changelog.shopify.com/posts/capital-remittance-via-shopify-payments-expands-to-all-states-of-the-us"
    - title: "Capital Remittance přes Shopify Payments rozšířena na všechny státy USA"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/capital-remittance-shopify-payments-us/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Credit remittance přes Shopify Payments dostupné v Texasu pro 'Pay over Time from Sales' financing — částky se odečítají z denních payouts."
tagy: [credit, payments, us-only, texas]
---

## Co se mění
**Shopify Credit** remittance (splácení) přes Shopify Payments dostupná v **Texasu** pro „Pay over Time from Sales" financing model.

## Použití v Integrátoru
**Nepoužíváme** — US-only finance feature.
