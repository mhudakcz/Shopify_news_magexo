---
date: 2026-04-27
title: "Skenování QR slevových kódů v POS"
title_en: "Scan discount codes"
slug: pos-scan-discount-codes
zdroj: https://changelog.shopify.com/posts/scan-discount-codes-in-shopify-pos
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: pos
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "POS-side čtení QR kódů, navazuje na admin generování QR kódů pro slevy. Naše discount methods jsou nedotčené."
kontext:
  background: |
    QR kód slevového kódu je dvourozměrný čárový kód kódující URL ve formátu `https://{shop}.myshopify.com/discount/{CODE}`. Namísto ručního opisování alfanumerického kódu stačí namířit fotoaparát nebo čtečku čárových kódů — aplikace URL rozpozná a slevový kód automaticky aplikuje na košík. Shopify podporuje tento formát pro produktové slevy i slevy na celou objednávku; automatické slevy (automatic discounts) QR kódy nevyužívají.

    Shopify POS prochází od roku 2026 soustavnou modernizací slevového workflow. Počáteční stav vyžadoval ruční zadávání kódů s rizikem překlepů; Smart Grid přinesl dropdown výběr z aktivních kódů; POS v11.2 urychlil numerický zadávací panel a surfacuje naposledy použité kódy. Skenování QR kódů tuto linii uzavírá: sleva může cestovat z marketingového materiálu (leták, plakát, e-mail) přímo do pokladního systému bez mezilidského přepisu.

    Praktické využití zahrnuje in-store letákové akce, polici s QR kódem pro zákazníka nebo personálem skenovaný slevový voucher vytištěný ze zákaznického e-mailu. Stejný QR kód funguje i v online prostředí — zákazník ho načte mobilem při nákupu na e-shopu. Klíčová technická poznámka: pokud kód obsahuje speciální znaky (mezery, hashe, plusy), Admin aplikuje dvojité URL encoding — to je třeba zohlednit při vlastní generaci QR kódů mimo Shopify Admin.
  zdroje:
    - title: "Shopify Changelog: Scan discount codes in Shopify POS"
      url: "https://changelog.shopify.com/posts/scan-discount-codes-in-shopify-pos"
    - title: "Shopify Changelog: Scannable discount codes (Admin QR generování)"
      url: "https://shopify.dev/changelog/scannable-discount-codes"
    - title: "Archiv: Smart Grid – dropdown výběr slev místo manual entry"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-discount-tiles/"
    - title: "Archiv: Rychlejší zadávání slev v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/faster-discount-entry-pos/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Personál i zákazník mohou v POS aplikovat slevové kódy oskenováním QR kódu generovaného z Adminu — rychlejší checkout, méně chyb při ručním zadávání."
tagy: [pos, discount, qr-code]
souvisejici: [scannable-discount-codes-qr]
---

## Co se mění
POS dovoluje **oskenovat QR kód** s discount kódem. QR kódy generuje Admin (viz [Skenovatelné QR kódy slev](../zmena/scannable-discount-codes-qr/)), POS je čte. Spojuje admin a in-store flow.

## Použití v Integrátoru
**Nepoužíváme** — UI flow mezi Admin a POS. Naše discount API metody nedotčeny.
