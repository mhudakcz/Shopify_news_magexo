---
date: 2026-02-04
title: "Klarna nově dostupná v ČR a 7 dalších zemích"
title_en: "Klarna in More Countries"
slug: klarna-more-countries
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: checkout
api_verze: []
nalehavost: vysoka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Klarna jako checkout payment method je merchant-side setup, ne API integrace. Ale pro naše ČR klienty je to velký feature."
dotcene_klienty: []

kontext:
  background: |
    Klarna je švédská fintech společnost založená v roce 2005, která patří mezi světové lídry v segmentu Buy Now, Pay Later (BNPL). Model BNPL umožňuje zákazníkům rozdělit platbu za nákup do několika splátek — obvykle bezúročných — nebo ji zcela odložit na pozdější datum. Na rozdíl od klasické kreditní karty nevyžaduje Klarna zdlouhavé schvalování a integrace probíhá přímo v checkoutu e-shopu.

    Shopify Payments je vlastní platební brána Shopify, která agreguje různé platební metody — karty, lokální metody i BNPL poskytovatele jako Klarna, Afterpay nebo Shop Pay Installments. Shopify dlouhodobě rozšiřuje geografické pokrytí Shopify Payments, protože merchantům zjednodušuje správu: místo separátní smlouvy s každým poskytovatelem stačí jeden účet. Klarna byla před tímto rozšířením dostupná především v severských zemích, USA, UK a Německu.

    Z praktického hlediska může dostupnost Klarna v checkoutu zvýšit konverzní poměr, zejména u produktů s vyšší cenou — zákazník, který by jinak odložil nákup kvůli momentální finanční situaci, dokončí objednávku díky splátkovému plánu. Pro ČR merchants jde o první nativní BNPL integraci přímo přes Shopify Payments bez nutnosti instalovat třetí stranu.

    Paralelně Shopify rozšiřuje i další lokální platební metody v Evropě (BLIK, TWINT, MobilePay, Przelewy24), což naznačuje strategický záměr pokrýt regionální preference napříč EU trhy a snižovat tzv. payment friction v checkoutu.

  zdroje:
    - title: "Shopify Editions Winter 2026 — Klarna in More Countries"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Local payment methods are now available in more countries"
      url: "https://changelog.shopify.com/posts/more-local-payment-methods-are-now-available-in-additional-countries"
    - title: "Shopify news archiv: Local payment methods — více zemí"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-payment-methods-more-countries/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6

tldr: "Klarna (BNPL — Buy Now, Pay Later) je nově dostupná v Česku, Belgii, Dánsku, Finsku, Francii, Švýcarsku, Irsku, Portugalsku."
tagy: [klarna, payments, bnpl, czechia, checkout]
---

## Co se mění
**Klarna** (Buy Now, Pay Later platební metoda) je nově dostupná v **8 dalších zemích včetně České republiky**: Belgie, Dánsko, Finsko, Francie, Švýcarsko, Česko, Irsko, Portugalsko. Pro ČR merchanty velký krok — klientovi lze nabídnout odložené platby.

## Dopad pro nás
**Pro PM / PO:**
**Velmi důležité pro naše ČR/EU klienty.** Pokud má klient e-shop v ČR, můžeme mu doporučit Klarna jako checkout option pro zvýšení konverze (BNPL je v ČR populární). Žádný kódový dopad — merchant si Klarna aktivuje v Shopify Payments settings.

**Pro vývojáře:**
Žádný API impact pro naše integrace. Pokud čteme payment method z orderu, Klarna se objeví jako další enum hodnota.

## Použití v Integrátoru
**Nepoužíváme** přímo — checkout payment method volí merchant. Naše order sync rozšíří payment method enum hodnoty bez breaking change.
