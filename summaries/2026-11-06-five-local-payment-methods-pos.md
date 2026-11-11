---
date: 2026-11-06
title: "5 nových local payment methods v store přes Shopify Payments (POS)"
title_en: "Accept five new local payment methods in store with Shopify Payments"
slug: five-local-payment-methods-pos
zdroj: https://changelog.shopify.com/posts/accept-five-new-local-payment-methods-in-store-with-shopify-payments
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nové platební metody z POS se mohou objevit v datech transakcí a objednávek (nové názvy platebních gateway), které integrace synchronizuje do ERP a účetnictví."
dotcene_klienty: []
souvisejici:
  - "editions-fall-2026-retail"
  - "pos-local-payment-methods-asia-eu"
  - "local-payment-methods-more-countries"
tldr: "Shopify POS nově přijímá přes Shopify Payments platby Alipay, WeChat Pay, Satispay, Scalapay a GrabPay pomocí QR kódu; dostupnost se liší podle země a metody se zapínají v nastavení plateb."
tagy: [pos, shopify-payments, local-methods, alipay, wechat, satispay, scalapay, grabpay, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Payments už dříve rozšiřovalo nabídku lokálních platebních metod, zpočátku hlavně pro online checkout. Na podzimních Editions 2026 se v části o retailu objevila zmínka, že POS dostane další lokální metody pro Asii a Evropu.

    Změnou ze 6. listopadu 2026 se tento záměr mění v oficiální vydání pro obchodníky. V kamenné prodejně lze přijímat pět nových metod: Alipay, WeChat Pay, Satispay, Scalapay a GrabPay. Zákazník platí naskenováním QR kódu ve své aplikaci. Požadavkem je Shopify Payments u způsobilého obchodu a zapnutí každé metody v nastavení plateb v administraci, žádná další integrace není potřeba.

    Pro českého obchodníka je nejzajímavější Alipay a WeChat Pay u prodejen s vysokým podílem turistů, například v centru Prahy. Satispay a Scalapay jsou zaměřené na Itálii a GrabPay na jihovýchodní Asii. Dostupnost podle zemí a poplatky stránka neuvádí, ty je nutné ověřit v nápovědě k lokálním platbám.
  zdroje:
    - title: "Shopify: Accept five new local payment methods in store with Shopify Payments"
      url: "https://changelog.shopify.com/posts/accept-five-new-local-payment-methods-in-store-with-shopify-payments"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS rozšiřuje přijímání plateb přes Shopify Payments o pět lokálních metod: Alipay, WeChat Pay, Satispay, Scalapay a GrabPay. Platba probíhá tak, že zákazník naskenuje QR kód. Funkce je dostupná pouze pro způsobilé obchody se Shopify Payments, nevyžaduje žádné další integrace a každou metodu je potřeba zapnout v nastavení plateb v administraci. Dostupnost se liší podle země, přesný seznam je v nápovědě Shopify. Poplatky changelog neuvádí.

## Časová osa

- Podzim 2026: metody zmíněny v retailové části Editions Fall 2026.
- 2026-11-06: oficiální vydání pro obchodníky, dostupné ihned.

## Dopad pro nás

**Pro vývojáře:** Nové metody se budou v objednávkách a transakcích z POS projevovat novými názvy platebních gateway. Je vhodné ověřit, že mapování platebních metod v integracích (ERP, účetnictví, párování plateb) neselže na neznámé hodnotě. Žádná změna API se neoznamuje.

**Pro PM / PO:** Příležitost pro obchodníky s kamennými prodejnami v turistických lokalitách, kde se hodí Alipay a WeChat Pay. Před nabídkou klientovi je nutné ověřit dostupnost pro Českou republiku a poplatky v nápovědě Shopify. Naléhavost je nízká, jde o volitelné rozšíření.

## Použití v Integrátoru

Přímé použití nehrozí, ale nové platební metody z POS mohou vstupovat do synchronizace objednávek a plateb. Stačí zkontrolovat, že mapování platebních metod počítá s novými hodnotami.
