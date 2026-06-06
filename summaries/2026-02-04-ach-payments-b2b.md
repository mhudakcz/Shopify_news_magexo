---
date: 2026-02-04
title: "ACH platby pro B2B v Shopify"
title_en: "ACH Payments for B2B"
slug: ach-payments-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost]
api_oblast: billing
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "ACH je US payment method. Naši čeští/EU klienti to nepoužívají. Relevantní jen pro klienty s US B2B operacemi."
dotcene_klienty: []

kontext:
  background: |
    ACH (Automated Clearing House) je americká mezibankovní clearingová síť provozovaná organizací Nacha, která zprostředkovává elektronické převody přímo mezi bankovními účty. Na rozdíl od platebních karet nevyžaduje karetní sítě jako Visa nebo Mastercard, čímž se výrazně snižují transakční poplatky — typicky zlomek procenta oproti 2–3 % u karet. ACH se v USA používá pro mzdy, přímé inkaso, úhrady faktur i vládní platby.

    V B2B obchodním kontextu je ACH historicky preferovanou platební metodou, protože velkoobchodní transakce mívají vysokou hodnotu a nízkou frekvenci. Shopify B2B dosud spoléhal zejména na kreditní karty nebo ruční fakturaci; přidání nativní podpory ACH přes Shopify Payments zaplňuje mezeru pro americké velkoobchodní prodejce, kteří chtějí spravovat platby přímo v platformě bez třetí strany. Funkce je dostupná výhradně v USA v rámci Shopify Plus.

    Prakticky jde o dvě možnosti: zákazník zaplatí ACH přímo při checkoutu, nebo merchant nabije uložený bankovní účet zákazníka přímo z administrace — vhodné pro opakované objednávky a sjednané platební podmínky. Tato funkce doplňuje další Winter 2026 novinky pro B2B jako dynamické platební podmínky (Net 30/60), store credit na úrovni company location nebo zálohy na objednávky.

  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Dynamické payment terms a deposits pro B2B"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/"
    - title: "Store credit pro B2B company locations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/store-credit-b2b/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "B2B zákazníci v US mohou nově platit ACH bankovními převody přímo z Shopify checkoutu."
tagy: [b2b, payments, ach, us]
---

## Co se mění
Shopify B2B podporuje **ACH platby** (US bankovní převod) jako platební metodu. Merchant může z admin panelu nabíjet uložené ACH účty zákazníků (autorized debit) — typicky pro recurring B2B billing.

## Použití v Integrátoru
**Nepoužíváme** — ACH je US-specific. Pokud bychom napojili US B2B klienta, relevantní.
