---
date: 2026-08-18
title: "Co je webhook — k čemu slouží a jak funguje"
slug: blog-co-je-webhook-vysvetleni-ecommerce
zdroj: https://www.shopify.com/cz/blog/co-je-webhook
shrnuto_dne: 2026-08-19
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Základní vysvětlení konceptu, na kterém stojí naše integrace (order sync, ERP, marketing automation) — užitečné jako referenční materiál pro komunikaci s klienty."
dotcene_klienty: []
souvisejici: [next-generation-events-field-level-webhooks, metafield-triggers-additional-webhook-topics, inventory-transfer-webhooks-origin-destination]
tldr: "Shopify vysvětluje, co je webhook a jak automatické HTTP notifikace nahrazují ruční pollování dat mezi aplikacemi."
tagy: [webhooks, api, integration, developer, automation, ecommerce]
zdroj_kanal: blog
kontext:
  background: |
    Webhook je mechanismus, kterým si dvě aplikace automaticky předávají data v okamžiku, kdy nastane určitá událost — bez toho, aby si je muselo kdokoli ručně vyžádat. Shopify tento koncept přirovnává k poštovní schránce: iniciující systém odešle na předem definovanou callback URL HTTP POST požadavek s daty ve formátu JSON nebo XML, jakmile se stane to, na co je webhook nastavený (nová objednávka, změna skladové zásoby, potvrzená platba a podobně). Přijímající aplikace tak dostává notifikaci v reálném čase, místo aby musela stav opakovaně kontrolovat.

    Článek staví webhooky do kontrastu s klasickým API voláním. Zatímco API umožňuje obousměrnou komunikaci a vyžaduje, aby klient aktivně žádal o data (polling), webhook je jednosměrný a reaktivní — spouští se sám, jen když nastane sledovaná událost. To znamená menší zátěž na obě strany, méně zbytečných dotazů a rychlejší reakci na změny, protože data nečekají na další "kolo" dotazování.

    Jako typické use cases Shopify uvádí automatické aktualizace skladu při poklesu zásob, notifikaci účetnímu oddělení a zákaznické podpoře po potvrzení platby, spuštění procesu vratky se souběžnou aktualizací skladu, založení záznamu v CRM při registraci nového zákazníka, nebo propojení telefonní podpory s příchozím hovorem. Ukázkový scénář z e-shopu: zákazník odešle objednávku, webhook s detaily (adresa, produkty, platba) doletí na URL platební brány nebo fulfillmentového systému a ten automaticky vygeneruje přepravní štítek — bez jakéhokoli ručního zásahu.
  zdroje:
    - title: "Shopify: Co je webhook — k čemu slouží a jak funguje"
      url: "https://www.shopify.com/cz/blog/co-je-webhook"
  generated_at: 2026-08-19T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify v tomto blogovém článku vysvětluje webhook jako základní stavební kámen propojování aplikací v e-commerce. Princip je jednoduchý: když v jednom systému nastane definovaná událost, ten automaticky odešle HTTP POST požadavek s daty na cílovou callback URL druhé aplikace. Žádné dotazování dopředu, žádné čekání — notifikace přichází v okamžiku, kdy je potřeba.

Článek si dává záležet na srovnání s API. Kde API vyžaduje, aby si klient o data aktivně řekl (a typicky se ptá opakovaně, i když se nic nezměnilo), webhook funguje obráceně — mlčí, dokud se něco nestane, a pak sám pošle zprávu. Pro merchanty to v praxi znamená menší zátěž systémů a rychlejší reakci: sklad, účetnictví, CRM nebo zákaznická podpora se dozví o změně prakticky okamžitě, ne až při dalším naplánovaném dotazu.

Praktické příklady, které Shopify zmiňuje — synchronizace skladových zásob, potvrzení plateb, spouštění vratek, zakládání zákazníků v CRM — jsou přesně ty typy integrací, se kterými se běžně pracuje při propojování e-shopu s externími systémy (účetnictví, ERP, marketingové nástroje). Jde o obsahově edukativní text bez oznámení nové funkce nebo API změny.

## Pro koho je to relevantní

Text je určen především merchantům a lidem rozhodujícím o e-shopu, kteří se s pojmem webhook setkávají poprvé nebo chtějí srozumitelně vysvětlit rozdíl vůči API někomu ve firmě. Pro nás jde primárně o referenční materiál — vysvětluje principy, na kterých fungují integrace synchronizující objednávky, sklad nebo platby mezi Shopify a externími systémy. Přímý dopad na existující projekty nemá, žádná akce není potřeba.
