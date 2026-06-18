---
date: 2026-06-17
title: "Sidekick vytváří zákazníky + generuje test events pro Shopify Flow"
title_en: "Sidekick creates customers + generates Flow test events"
slug: sidekick-creates-customers-tests
zdroj: https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick/help-and-guidance
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Obě funkce jsou merchant-side nástroje v Shopify adminu. Sidekick customer creation není API-facing, ale workflow testing může zrychlit QA klientů s komplexními Flow automatizacemi — téma k nabídnutí při Shopify Flow implementacích."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "flow-test-events-existing-data", "editions-spring-2026-sidekick"]
editions_release: spring-2026
kontext:
  background: |
    Sidekick je AI asistent zabudovaný přímo do Shopify administrace — LLM-based chatbot, který rozumí kontextu konkrétního obchodu a dokáže nejen odpovídat na dotazy, ale i provádět akce. Na rozdíl od generických AI chatbotů má Sidekick přístup k datům obchodu (objednávky, zákazníci, produkty, analytika) a může formuláře přímo vyplňovat. Vizuálně označuje změněná pole fialovou barvou, aby merchant mohl vše překontrolovat před potvrzením.

    V Spring '26 Editions Shopify rozšiřuje Sidekick ze singleplayer admin chatboxu na platformu prostupující celým ekosystémem: mobilní aplikace, Apple Watch, třetí aplikace (Judge.me, Klaviyo, Loop, Smile) a nové produktivní funkce. Dvě z devíti položek tohoto tématu jsou přímé workflow akcelerátory pro každodenní práci merchantů: tvorba zákazníků přirozeným popisem a automatické generování testovacích scénářů pro Shopify Flow.

    Funkce "Sidekick creates customers" odstraňuje nutnost ručního klikání přes zákaznický formulář — merchant napíše v přirozené řeči celý popis zákazníka (jméno, e-mail, adresa, poznámky, tagy) a Sidekick pole vyplní najednou. Schválení zůstává na merchantovi. Funkce "Automation tests with Sidekick" jde o level dál: Sidekick přečte strukturu Flow workflow (triggers, conditions, actions), vyhledá v obchodě existující záznamy, které pokryjí jednotlivé logické větve, a vygeneruje připravené test cases — výsledek lze editovat, mazat nebo doplnit vlastními edge cases.

    Obě funkce jsou součástí strategie Shopify snižovat tření při opakujících se operacích v adminu. Zákaznická formulářová práce je zvláště relevantní pro B2B obchody, kde merchant ručně zadává veloobjemy zákaznických záznamů. Workflow testing pak navazuje na sérii nástrojů pro governance Flow automatizací (version history, rollback, workflow notes), které Shopify vydával postupně ve stejném cyklu.
  zdroje:
    - title: "Shopify Editions Spring '26: Sidekick creates customers + generates Flow test events"
      url: "https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick/help-and-guidance"
    - title: "Flow: Sidekick generates test cases for your workflows – Shopify Changelog"
      url: "https://changelog.shopify.com/posts/flow-sidekick-generates-test-cases-for-your-workflows"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Sidekick ve Spring '26 zvládá dvě nové věci: vyplnit zákaznický formulář z plain-language popisu a automaticky vygenerovat testovací scénáře pro Shopify Flow workflows z reálných dat obchodu."
tagy: [editions, sidekick, automation, flow]
zdroj_kanal: editions
---

## Co se mění

Spring '26 přidává Sidekicku dvě nové akce v Shopify adminu:

**1. Tvorba zákazníků přirozeným popisem**
Merchant napíše (nebo diktuje) popis zákazníka v přirozené řeči — například "John Smith, john@example.com, adresa 123 Main St, New York, firemní zákazník, tag: wholesale" — a Sidekick vyplní všechna odpovídající pole zákaznického formuláře najednou. Vyplněná pole jsou vizuálně označena fialovou barvou. Merchant překontroluje a potvrdí. Žádné manuální klikání přes desítky políček.

**2. Generování test events pro Shopify Flow**
Sidekick analyzuje strukturu workflow (triggers, conditions, actions) a v obchodě vyhledá reálná data — objednávky, zákazníky, produkty — která pokryjí jednotlivé logické větve. Výsledkem jsou připravené test cases. Merchant může jednotlivé scénáře editovat, mazat nebo přidat vlastní edge cases. Celé testování probíhá bez ručního sestavování vzorových dat.

Obě funkce jsou live jako součást Editions Spring '26 (17. 6. 2026).

## Časová osa
- 2026-05-14 — Changelog záznam Flow test events (Sidekick generates test cases for your workflows)
- 2026-06-17 — Editions Spring '26 announce; obě funkce potvrzeny jako live

## Dopad pro nás

**Pro vývojáře:**
Obě funkce jsou čistě merchant-side — žádné API ani extension povrch. Žádný kód na naší straně. Pokud klient implementuje komplexní Flow workflow s více větvemi a podmínkami, lze Sidekick-generované test cases doporučit jako součást QA procesu před aktivací. Snižuje riziko tichých chyb na produkci (workflow větev, která se nikdy nespustí, protože testovací data nebyla reprezentativní).

**Pro PM / PO:**
Zákaznická funkce (customer create) je relevantní zejména pro B2B klienty, kde admini ručně zadávají zákaznické záznamy ve větším objemu — stojí za zmínku při onboardingu nebo workshopech. Flow testing je quality-of-life upgrade pro každého, kdo spravuje automatizace; při implementaci nebo auditu Flow workflows je to přirozená součást předání.

## Použití v Integrátoru
Funkce nejsou API-facing a nezasahují do integračního povrchu. Relevantní jako doporučení klientům při Flow implementacích — zmiňovat v rámci QA fáze Shopify Flow projektů.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Sidekick](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/)
