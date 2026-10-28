---
date: 2026-10-28
title: "Multi-entity payments — connect různé providers per legal entity"
title_en: "Multi-entity payments"
slug: multi-entity-payments-legal-entities
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zdroj žádné API neuvádí. Funkce se ale může dotknout párování plateb a výplat podle entity v ERP a účetních exportech a mapování entity na interní kód přes BusinessEntity a legalEntityId (Admin API 2026-07). Je nutné ověřit, jak se u objednávky a transakce projeví platební provider připojený k dané entitě."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "multiple-legal-entities-shopify-payments", "businessentity-legalentityid-admin-api"]
editions_release: fall-2026
tldr: "Fall '26 rozšiřuje multi-entity prodej z jara o možnost připojit ke každé právní entitě vlastního platebního providera vedle Shopify Payments. Holdingy a skupiny typu s.r.o. plus GmbH plus LLC tak mohou mít v jednom obchodě pro každou entitu jiné platební řešení a dřívější workaround s více samostatnými Shopify stores přestává být pro platby nutný. Zdroj uvádí jen jednu větu, takže routing mezi entitami, dostupnost podle plánu a zemí i případné API je nutné ověřit v help docs."
tagy: [multi-entity, payments, legal-entities, b2b, holding, enterprise]
zdroj_kanal: editions
kontext:
  background: |
    Právní entita (legal entity) je registrovaný subjekt s vlastním IČO, DIČ a bankovním účtem, který nese vlastní daňové a účetní povinnosti. Skupiny firem typicky provozují prodej přes několik takových entit, například českou s.r.o., německou GmbH a americkou LLC. Shopify to historicky řešilo samostatnými stores, takže každá entita měla vlastní katalog, sklad, nastavení checkoutu i platební konfiguraci.

    Jarní edice Spring '26 začala tuto roli přebírat jedním obchodem: v jednom storu lze přes Markets připojit více účtů Shopify Payments navázaných na různé právní entity (viz archiv). Navázaly na to Tap to Pay po entitách, Shop Pay Installments napříč entitami a pole legalEntityId u BusinessEntity v Admin API 2026-07. Zbývalo omezení, že celé řešení stálo na Shopify Payments, který není dostupný ve všech zemích, kde skupina podniká.

    Fall '26 podle stránky Editions v sekci Payments nabízí, že Shopify Payments lze používat napříč celým byznysem a ke každé právní entitě připojit další platební providery. Zdrojová stránka k položce uvádí jen tuto jednu větu a odkaz na help doc o prodeji z více entit. Neuvádí stav live nebo coming soon (přehled Payments v archivu ji vede jako live), region, plán ani API. Proto tento článek rozlišuje, co je ve zdroji, co je náš výklad a co je nutné před slibováním ověřit.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Editions Fall '26: Payments (přehled tématu v archivu)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-payments/"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
    - title: "BusinessEntity vystaví legalEntityId v Admin API 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/businessentity-legalentityid-admin-api/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v tématu Payments (Editions Fall '26) uvádí, že merchant může **používat Shopify Payments napříč celým byznysem a ke každé právní entitě připojit další platební providery**. Platební konfigurace se tak dá nastavit **po entitách**, ne jednou pro celý obchod.

**Z jara víme:** [multi-entity Shopify Payments](/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/) umožnilo v jednom storu držet více účtů Shopify Payments pro různé právní entity (různé IČO a bankovní účty). Dřívější praxe podle archivu bývala řešit více entit samostatnými stores nebo expansion stores. Podzimní novinka posouvá tuto logiku od "více účtů Shopify Payments" k "pro každou entitu to platební řešení, které tam dává smysl".

**Ilustrativní scénář (náš výklad, ne příklad ze zdroje):** skupina s českou s.r.o., německou GmbH a americkou LLC. Německá a americká entita běží na Shopify Payments a pro českou entitu je připojen lokální nebo globální provider, například agregátor nebo Stripe. Podle dřívějších záznamů v archivu není Shopify Payments v ČR dostupný, takže přesně tento typ kombinace je pro české skupiny nejpravděpodobnější. Dostupnost je ale nutné ověřit u konkrétní entity.

**Co zdroj neříká:**
- podle čeho se při checkoutu vybere entita a tím i provider (market, lokace, jiné pravidlo)
- zda funkce platí pro všechny plány, nebo jen pro Plus a Advanced, a v jakých zemích
- kteří provideři a které platební aplikace se dají k entitě připojit a zda musí podporovat vazbu na entitu
- jak se per-entity konfigurace zobrazuje v Admin API a jak se projeví u objednávek, transakcí a výplat
- zda platí totéž pro POS a B2B checkout

Podrobnosti jsou v odkazovaném help docu o prodeji z více entit. Do jeho přečtení nelze o funkci slibovat víc než větu z Editions.

## Časová osa

- **15. 5. 2026** — multi-entity Shopify Payments v jedné zemi přes Markets (Spring '26)
- **17. 6. 2026** — Spring '26: Tap to Pay po entitách a Shop Pay mimo Shopify, viz [Tap to Pay pro multi-entity](/Shopify_news_magexo/zmena/tap-to-pay-multi-entity/)
- **1. 7. 2026** — pole `legalEntityId` u `BusinessEntity` v Admin API 2026-07, viz [BusinessEntity a legalEntityId](/Shopify_news_magexo/zmena/businessentity-legalentityid-admin-api/)
- **22. 9. 2026** — [Shop Pay Installments na více business entities](/Shopify_news_magexo/zmena/shop-pay-installments-multiple-business-entities/) v US, CA a UK
- **28. 10. 2026** — Editions Fall '26: připojení dalších platebních providerů ke každé právní entitě (přehled v archivu ji vede jako live)

## Dopad pro nás

**Pro vývojáře:**
- Zdrojová stránka neuvádí žádné nové API ani webhooky. Změna je primárně merchant-side nastavení.
- U obchodů s více entitami je potřeba prověřit, jak se v datech objednávky a transakce pozná **který provider a která entita** platbu zpracovaly. Pokud ERP nebo účetní export dnes předpokládá jednu bránu, musí se rozšířit o mapování entita na účet a provider.
- Párování výplat se komplikuje: každý provider vyplácí po svém a v jiném formátu a jiné měně. Reconciliaci je vhodné navrhovat per entita, ne per store.
- Pro stabilní mapování entity na interní kód nebo daňový registr je k dispozici `legalEntityId` na `BusinessEntity` (Admin API 2026-07, nullable, aditivní změna).
- Pokud obchod používá platební aplikaci třetí strany (Payments Apps API), ověřit, zda se aplikace dá připojit pouze k jedné entitě a jak se chová při současném provozu více providerů.

**Pro PM / PO:**
- Důležitý argument při scopingu holdingů a skupin firem. Dřív bylo pro oddělení plateb po entitách často nutné zvažovat více stores, což znamenalo duplicitní katalog, sklad a správu. Podle zdroje jde o **platební vrstvu**. Pokud skupina potřebuje i oddělené storefronty nebo katalogy, samostatné stores můžou být dál potřeba (náš výklad).
- Do discovery u obchodů s více entitami přidat otázky: kolik entit a v jakých zemích, který provider kde běží, kdo je prodávající v daném marketu, jak se mají párovat výplaty a kdo vystavuje faktury.
- Nalehavost střední: funkce je nová příležitost a argument pro konsolidaci do jednoho storu, ale nemá termín ani povinnou migraci. Před nabídkou ji ověřit v help docu a na testovacím storu.
- Rizika: nejasná dostupnost podle zemí a plánů, případné omezení POS a B2B, a také překryv s již běžícím workaroundem (více stores), u kterého je potřeba posoudit, zda se migrace vyplatí.

## Použití v Integrátoru

Přímé API volání funkce nevyžaduje, ale u obchodů s více entitami může ovlivnit synchronizaci plateb, výplat a účetních exportů, které je třeba dělit podle entity. Při auditu takového obchodu stojí za to ověřit, jak se provider připojený k entitě promítne do dat objednávky.
