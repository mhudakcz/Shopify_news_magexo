---
date: 2026-05-07
title: "Bots a AI agents musí identifikovat přes Web Bot Auth (jinak nižší rate limit)"
title_en: "Bots and agents should identify themselves via Web Bot Auth"
slug: bots-agents-web-bot-auth
zdroj: https://shopify.dev/changelog/bots-and-agents-should-identify-themselves-via-web-bot-auth
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-12

kategorie: [breaking-change, integrace]
api_oblast: storefront
api_verze: []
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-05-07

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefront API rate limity. Pokud naše integrace v custom flow scrapují / volají Storefront API jménem klienta (např. AI asistent, sync služba), může se nově narazit na nižší rate limit, pokud nedáme Web Bot Auth signature."
dotcene_klienty: []
souvisejici: [agentic-commerce-build-commerce-agents]

kontext:
  background: |
    Web Bot Auth je otevřený webový standard pro digitální identifikaci automatizovaných klientů — botů, crawlerů a AI agentů — při přístupu k HTTP zdrojům. Technicky stojí na HTTP Message Signatures (RFC 9421), kde operátor podepíše každý request asymetrickým klíčem, čímž prokáže svou totožnost serveru bez nutnosti sdílet tajné tokeny. Výsledkem je ověřitelná, nefalsifikovatelná identita volajícího.

    Shopify Storefront API je veřejně přístupné a historicky bylo terčem nadměrného provozu od neidentifikovaných botů a scraperů. Web Bot Auth řeší tento problém zavedením tří úrovní důvěryhodnosti: nepodepsané requesty dostávají nejpřísnější rate limity, podepsané requesty Web Bot Auth mají limity vyšší a obchodníci, kteří se zaregistrují u Shopify přes kontaktní formulář, mohou získat nejvyšší tier. Shopify Admin navíc umožňuje obchodníkům generovat hotové Web Bot Auth podpisy přímo pro jejich agenty.

    Změna se týká především agentic commerce use cases — AI asistentů a shopping agentů, kteří volají Storefront API jménem zákazníka nebo operátora. Bez správně implementovaného podpisu hrozí vyšší výskyt chyb HTTP 429 a degradovaný výkon. Standard Web Bot Auth přímo doplňuje ostatní Shopify AI infrastrukturu, jako jsou soubory `/llms.txt` a `/agents.md` pro řízení AI crawlerů či Catalog MCP server pro strukturovaný přístup k produktovému katalogu.

  zdroje:
    - title: "Shopify Changelog: Bots and agents should identify themselves via Web Bot Auth"
      url: "https://shopify.dev/changelog/bots-and-agents-should-identify-themselves-via-web-bot-auth"
    - title: "Agentic Commerce: stavba AI agentů nad Shopify katalogem"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Customizable /llms.txt, /llms-full.txt a /agents.md v theme editoru"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-llms-txt-agents-md/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify zavádí přísnější rate limity pro boty a AI agenty na Storefront API. Operátoři by měli podepisovat requesty přes Web Bot Auth pro vyšší rate limit. Action Required pro custom AI integrace."
tagy: [storefront, rate-limit, bot, ai-agent, web-bot-auth, security]
---

## Co se mění
Shopify začíná **přísněji omezovat rate limit** na Storefront API pro **boty a AI agenty**. Doporučená cesta k vyššímu rate limitu: **Web Bot Auth** — operátor podepíše každý request, aby Shopify věděl, kdo to volá.

Bez Web Bot Auth = degraded performance (nižší throughput, vyšší 429 chance).

## Časová osa
- **2026-05-07** — nasazení přísnějších limitů

## Dopad pro nás
**Pro vývojáře:**
Týká se hlavně **agentic** use cases (AI asistent, který volá Storefront API jménem uživatele). Pokud máme/budeme mít takový flow, je třeba implementovat Web Bot Auth signing:
- Request signing přes HTTP Message Signatures
- Identifikace operátora v hlavičkách
- Registrace u Shopify (pro vyšší trust tier)

**Pro PM / PO:**
Týká se klientů, kteří plánují **AI asistenty / chatboty** napojené na Shopify katalog. Bez Web Bot Auth zákazník zažije pomalejší / failující odpovědi.

## Použití v Integrátoru
**Možná** — naše core integrace běží přes Admin API (jiný rate limit režim). Storefront API používáme minimálně. Ale pokud klient přidá AI flow, je to nutné brát v úvahu.

## Rizika a edge cases
- Web Bot Auth je nový standard; ne všechny knihovny ho ještě podporují
- Bez signing fallback na nižší rate limit, ale Storefront API zůstává funkční
