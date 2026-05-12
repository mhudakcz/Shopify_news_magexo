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
