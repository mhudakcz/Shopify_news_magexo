---
date: 2026-06-17
title: "Domestic wire transfers ze Shopify Balance — $10 per transfer"
title_en: "Domestic wire transfers from Shopify Balance ($10 per transfer)"
slug: domestic-wire-transfers-balance
zdroj: https://help.shopify.com/en/manual/finance/shopify-balance/managing-account/transfers
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Wire transfers se netýkají API integrace, ale klienti s US Balance účtem, kteří platí vendorům a dodavatelům, mohou tuto funkci ocenit a ptát se na ni."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "editions-spring-2026-finance", "ach-payments-b2b"]
editions_release: spring-2026
kontext:
  background: |
    Domestic wire transfer je metoda mezibankovního převodu peněz v USA, která na rozdíl od ACH (Automated Clearing House) probíhá ve stejný den — za cenu vyššího poplatku. Wire transfery využívají sítě jako Fedwire nebo SWIFT (pro mezinárodní převody) a jsou preferovány při časově kritických platbách nebo transakcích vyšší hodnoty, kde záleží na rychlosti vypořádání. ACH je levnější, ale zpravidla trvá 1–3 pracovní dny.

    Shopify Balance je firemní účet pro americké merchanty provozovaný přímo v rámci Shopify platformy. Doposud podporoval pouze ACH transfery (zdarma, ale pomalé) a debetní platby kartou. Absence wire transferu nutila merchanty přepínat mezi Balance a klasickým bankovním účtem vždy, když potřebovali okamžitě zaplatit dodavateli, výrobci nebo logistickému partnerovi — typicky situace, kde prodlení znamená problém ve supply chainu.

    Přidání domestic wire transferu za paušální poplatek $10 per transfer uzavírá tuto mezeru. Merchanté mohou nově odesílat i časově citlivé platby vendorům a dodavatelům přímo z Balance, aniž by museli udržovat paralelní bankovní účet jen pro wire operace. Jde o součást širší strategie Shopify vybudovat uzavřenou finanční smyčku — platby od zákazníků přichází na Balance, z Balance jdou výdaje zpět do byznysu bez odchodu z platformy.

    Funkce zapadá do Finance tématu Editions Spring 2026, které přineslo také cashback na reklamní výdaje z Balance a možnost vkládat hotovost u partnerských retailerů. Celkový směr je konzistentní: Shopify se profiluje jako plnohodnotná finanční platforma pro merchanty, nejen platební brána.

  zdroje:
    - title: "Shopify Help: Transfers from Shopify Balance"
      url: "https://help.shopify.com/en/manual/finance/shopify-balance/managing-account/transfers"
    - title: "Shopify Editions Spring '26: Finance theme overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Balance nově umožňuje odesílat domestic wire transfery v USA za $10 per transfer — platby přicházejí stejný den, pokud jsou odeslány před 13:00 EST, a eliminují nutnost přepínat na klasický bankovní účet pro platby vendorům."
tagy: [editions, balance, wire-transfer, treasury]
zdroj_kanal: editions
---

## Co se mění

Shopify Balance přidává podporu **US domestic wire transferů** jako alternativu k dosavadním ACH převodům. Klíčové parametry:

- **Poplatek:** $10 USD per transfer (ACH je nadále zdarma)
- **Timing:** Převody odeslané před 13:00 EST jsou vypořádány **tentýž den**; po 13:00 nebo o víkendech a svátcích jsou zpracovány následující pracovní den
- **Příjemce:** Merchant přidá příjemce se směrovacím (routing) číslem a číslem účtu; wire transfery mají zpravidla jiné routing číslo než ACH — systém na to upozorňuje
- **Tracking:** Po odeslání wire transferu obdrží merchant referenční sledovací číslo, které může sdílet s příjemcem pro dohledání platby

Proces je plně integrovaný v Shopify admin — v sekci Balance se zvolí "Send money", metoda "US domestic wire" a zdrojový Balance účet. Denní limit transferů je zobrazován přímo na Balance stránce.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; funkce dostupná pro US merchanty se Shopify Balance účtem

## Dopad pro nás

**Pro vývojáře:**
Funkce je čistě merchant-facing a nevystavuje žádné nové API endpointy ani GraphQL mutace — probíhá výhradně přes Shopify admin UI. Není potřeba žádná integrace ani změna v existujících apps. Jedinou relevancí je, pokud bychom budovali custom finance dashboard pro klienta, který exportuje Balance transakce — wire transfer se v historii zobrazí jako samostatný typ transakce.

**Pro PM / PO:**
Funkce je zajímavá pro americké merchanty, kteří pravidelně platí dodavatelům, výrobcům nebo 3PL partnerům a dosud museli přepínat na tradiční bankovní účet pro časově citlivé platby. Poplatek $10 je standardní a v kontextu B2B plateb zanedbatelný. Pro klienty mimo USA (EU, ČR) je funkce irelevantní — Shopify Balance není v Evropě dostupné.

## Použití v Integrátoru

Žádná přímá relevance pro API integraci; pokud klient provozuje Shopify Balance v USA a ptá se na wire transfery, jde o nativní Shopify funkci bez nutnosti custom vývoje.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Finance](/Shopify_news_magexo/zmena/editions-spring-2026-finance/)
