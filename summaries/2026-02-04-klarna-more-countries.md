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
