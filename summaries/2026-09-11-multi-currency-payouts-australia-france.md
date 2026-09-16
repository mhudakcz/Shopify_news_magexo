---
date: 2026-09-11
title: "Multi-currency payouts nyní v Austrálii (13 měn) a Francii (18 měn) — Advanced + Plus"
title_en: "Multi-currency payouts now available in Australia and France"
slug: multi-currency-payouts-australia-france
zdroj: https://changelog.shopify.com/posts/multi-currency-payouts-now-available-in-australia-and-france
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-09-15

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-11

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant-side nastavení payout měn ve Shopify Payments, nemá dopad na API, ale je relevantní jako kontext pro klienty na Advanced/Plus prodávající z Austrálie nebo Francie."
dotcene_klienty: []

souvisejici: [shopify-payments-multi-currency-bank-account-per-currency, multi-currency-payout-expansion, multiple-legal-entities-shopify-payments]

tldr: "Multi-currency payouts ve Shopify Payments jsou nově dostupné i merchantům v Austrálii (13 měn) a Francii (18 měn) na plánech Advanced a Plus, což jim umožňuje přijímat výplaty bez nucené FX konverze."

tagy: [shopify-payments, multi-currency, payouts, australia, france, international, "advanced-plus"]

kontext:
  background: |
    Multi-currency payouts jsou funkcí Shopify Payments, která merchantům umožňuje přijímat výplaty přímo v měně, ve které zákazník zaplatil — bez automatické konverze do domácí měny obchodu. Místo jedné souhrnné platby přepočtené kurzem si merchant může nechat peníze vyplácet na bankovní účet vedený přímo v dané cizí měně, čímž se vyhne opakovaným FX poplatkům a kurzovému riziku při každém payoutu.

    Zářijová aktualizace rozšiřuje tuto funkci do dalších dvou regionů. Australští merchanti na Shopify Payments mohou nově přijímat payouts ve 13 měnách (mj. AUD, NZD, USD, EUR, GBP, CAD, JPY, SGD, HKD) na australské nebo zahraniční bankovní účty. Francouzští merchanti získávají podporu 18 měn s EUR jako výchozí (mj. USD, GBP, CAD, CHF, CZK, DKK, HUF, JPY, NOK, NZD, PLN, RON, SEK, SGD, ZAR). Funkce je dostupná na plánech Advanced a Shopify Plus.

    Rozšíření navazuje na červencovou změnu, která u multi-currency payouts zrušila limit 8 bankovních účtů na měnu (viz "Shopify Payments: bankovní účet pro každou payout měnu"), i na červnovou geo-expanzi do US, Hongkongu a Singapuru. Shopify tak postupně dorovnává payout možnosti napříč regiony — cílem je, aby merchanti prodávající mezinárodně mohli držet tržby v původní měně a omezit náklady spojené s nucenou konverzí.
  zdroje:
    - title: "Shopify: Multi-currency payouts now available in Australia and France"
      url: "https://changelog.shopify.com/posts/multi-currency-payouts-now-available-in-australia-and-france"
    - title: "Shopify Payments: bankovní účet pro každou payout měnu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-payments-multi-currency-bank-account-per-currency/"
    - title: "Multi-currency payouts rozšířeny v US, HK a SG"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multi-currency-payout-expansion/"
  generated_at: 2026-09-15T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify Payments rozšiřuje funkci **multi-currency payouts** o dva nové regiony. Merchanti v **Austrálii** mohou nově přijímat výplaty ve **13 měnách** (AUD, NZD, USD, EUR, GBP, CAD, NOK, SEK, DKK, CHF, JPY, SGD, HKD) na australské i zahraniční bankovní účty. Merchanti ve **Francii** získávají podporu **18 měn** s EUR jako výchozí (AUD, CAD, CHF, CZK, DKK, GBP, HKD, HUF, JPY, NOK, NZD, PLN, RON, SEK, SGD, USD, ZAR).

Funkce je dostupná na plánech **Advanced** a **Shopify Plus**. Výplata tak přijde přímo ve stejné měně, ve které zákazník zaplatil, místo automatické konverze do domácí měny obchodu — merchant se vyhne opakovaným FX poplatkům a kurzovému riziku při každém payoutu.

## Časová osa

- **2026-06-13** — Multi-currency payouts rozšířeny do US, Hongkongu a Singapuru.
- **2026-07-27** — Zrušen limit 8 bankovních účtů na měnu u multi-currency payouts.
- **2026-09-11** — Multi-currency payouts spuštěny v Austrálii (13 měn) a Francii (18 měn) na Advanced a Plus plánech.

## Dopad pro nás

**Pro vývojáře:** Jde o čistě merchant-side nastavení payout měn a bankovních účtů ve Shopify Payments — žádný dopad na Admin API, webhooky ani datové modely objednávek. Žádná akce na naší straně není potřeba.

**Pro PM / PO:** Relevantní pro klienty na Advanced nebo Plus plánu prodávající z Austrálie nebo Francie do zahraničí. U takových klientů má smysl proaktivně zmínit, že si teď mohou nastavit payouts v původní měně a omezit tak FX ztráty — zejména v návaznosti na zrušení limitu 8 bankovních účtů z července.

## Použití v Integrátoru

Přímo se naší integrace netýká — jde o nativní konfiguraci Shopify Payments bez dopadu na API vrstvu. Relevantní jen jako doporučení pro klienty s mezinárodním payout setupem v Austrálii nebo Francii.
