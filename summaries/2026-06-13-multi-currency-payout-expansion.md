---
date: 2026-06-13
title: "Multi-currency payouts rozšířeny v US, HK a SG (Shopify Payments)"
title_en: "Expanded multi-currency payout support in US, HK and SG"
slug: multi-currency-payout-expansion
zdroj: https://changelog.shopify.com/posts/expanded-multi-currency-payout-support-in-us-hk-and-sg
shrnuto_dne: 2026-06-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-13
pouzivame_v_integratoru: ne
dukaz_integratoru: "Geo-expanze Shopify Payments featury, naší integrace se netýká."
dotcene_klienty: []
souvisejici:
  - multiple-legal-entities-shopify-payments
  - clearer-payout-balance-shopify-payments
  - multi-currency-gift-cards
kontext:
  background: |
    Multi-currency payouts jsou funkcí Shopify Payments, která umožňuje merchantům přijímat výplaty (payouts) přímo v cizích měnách na oddělené bankovní účty — bez automatické konverze do domácí měny. Místo toho, aby Shopify převedl tržby v eurech do USD a odeslal jednotnou platbu, může merchant držet eura na euroúčtu a disponovat jimi bez zbytečné směny.

    Merchants prodávající ve více regionech naráží na problém FX poplatků a kurzového rizika: každá konverze stojí peníze a při velkém objemu transakcí se náklady výrazně kumulují. Multi-currency payouts tento problém eliminují tím, že každá měna protéká vlastním platebním kanálem od zákazníka až po bankovní účet merchantu.

    Červnová aktualizace rozšiřuje podporu do tří klíčových trhů. Merchanté v USA nově získávají payouts v CAD, EUR, AUD a GBP — tedy čtyři přidané měny. Merchanté v Singapuru a Hongkongu mohou nově přijímat payouts v EUR, GBP a JPY. Funkce je dostupná oprávněným (eligible) Shopify Payments merchantům v daných regionech.
  zdroje:
    - title: "Shopify Changelog: Multi-currency payouts expansion"
      url: "https://changelog.shopify.com/posts/expanded-multi-currency-payout-support-in-us-hk-and-sg"
    - title: "Shopify Help: Payouts in multiple currencies"
      url: "https://help.shopify.com/en/manual/payments/shopify-payments/store-currency/payouts-in-multiple-currencies"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Payments rozšiřuje multi-currency payouts: US merchanté mohou nově přijímat výplaty v CAD, EUR, AUD a GBP; merchanté v Singapuru a Hongkongu nově v EUR, GBP a JPY — bez konverzních poplatků."
tagy: [payout, payments, multi-currency, markets, shopify-payments]
zdroj_kanal: merchant-changelog
---

## Co se mění

Shopify Payments rozšiřuje funkci multi-currency payouts o nové regiony a měny. Způsobilí merchanté v USA mohou od 13. června 2026 přijímat výplaty v CAD, EUR, AUD a GBP — což jsou pro americký trh zcela nové payout měny. Merchanté v Singapuru a Hongkongu získávají podporu pro EUR, GBP a JPY.

Výplaty v cizí měně probíhají bez nucené konverze: příjmy v dané měně jsou vyplaceny přímo na příslušný bankovní účet merchantu vedený v téže měně.

## Časová osa

- **2026-06-13** — Funkce aktivní pro způsobilé Shopify Payments merchanty v US, SG a HK.

## Dopad pro nás

Změna se týká výhradně nastavení bankovních účtů a payout preferencí na straně merchantu v Shopify admin. Jde o geo-expanzi existující Shopify Payments featury bez dopadu na API, integraci ani backendové procesy. Pro naše projekty není potřeba žádná akce.

## Použití v Integrátoru

Funkce se naší integrace netýká — multi-currency payouts jsou nativní Shopify Payments capability spravovaná přímo Shopify. Integrátor s payouts nepracuje a tato změna nevyžaduje žádnou úpravu.
