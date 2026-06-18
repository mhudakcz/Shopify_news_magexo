---
date: 2026-06-17
title: "Sponsored products v Catalog API (preview) — monetizace agentic experiences"
title_en: "Sponsored products with Catalog API (preview) — earn from agentic experiences"
slug: sponsored-products-catalog-api
zdroj: https://shopify.dev/docs/agents/catalog#earn-with-paid-placements
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme budovat vlastní agentic UI nebo AI shopping flow nad Shopify Global Catalog, můžeme zapojit affiliate promoted placements a monetizovat konverze."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "shopify-catalog-for-all", "storefront-catalog-mcp-ucp"]
editions_release: spring-2026
kontext:
  background: |
    Shopify Global Catalog je centralizovaný katalog produktů přes miliardy položek z celého Shopify ekosystému. Agenti (AI asistenti, chatboti, shopping nástoje) ho prohledávají přes standardizované nástroje jako `search_catalog`, `lookup_catalog` a `get_product` — bez nutnosti přímého napojení na konkrétní eshop.

    S nárůstem agentic commerce (nakupování skrze AI agenty bez přímé návštěvy eshopu) vzniká nová reklamní vrstva: sponsored/promoted placements. Jde o analogii Google Ads nebo Amazon Sponsored Products, ale uvnitř AI shopping flow — merchant zaplatí za to, aby jeho produkty byly zařazeny do výsledků agentního vyhledávání na vyšší pozici nebo s větší pravděpodobností doporučení.

    Developer preview umožňuje vývojářům (developerům AI agentů nebo shopping nástrojů) vydělávat affiliate komisi na nákupech, které jejich agent zprostředkuje. Systém je postaven na UTM parametrech a specifickém click ID (`shdid`), které identifikuje vývojáře pro výplatu. Attribution window je 7 dní od kliknutí, výplaty probíhají měsíčně po KYC verifikaci.

    V kontextu Shopify Editions Spring 2026 jde o jeden z klíčových stavebních kamenů businessového modelu pro agentic commerce — Shopify signalizuje, že tento nový kanál bude mít vlastní monetizační infrastrukturu srovnatelnou se zavedenými paid search platformami.
  zdroje:
    - title: "Shopify Editions Spring '26: Sponsored products with Catalog API (preview) — earn from agentic experiences"
      url: "https://shopify.dev/docs/agents/catalog#earn-with-paid-placements"
    - title: "Shopify Catalog API — přehled nástrojů search_catalog, lookup_catalog, get_product"
      url: "https://shopify.dev/docs/agents/catalog"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Global Catalog nově (v preview) podporuje sponsored/promoted placements — vývojáři AI agentů mohou opt-in do affiliate programu a vydělávat komisi z nákupů zprostředkovaných přes jejich agentic shopping flow."
tagy: [editions, agentic, monetization, catalog-api, preview]
zdroj_kanal: editions
---

## O čem to je

Shopify Catalog API v developer preview přidává podporu pro **sponsored (promoted) placements** — placené výsledky v agentic shopping flow. Vývojáři, kteří staví AI agenty nebo shopping nástroje napojené na Shopify Global Catalog, se mohou přihlásit do affiliate programu a začít vydělávat komisi na nákupech, které jejich agent zprostředkuje.

Technicky: při volání `search_catalog` se přidá parametr `"placements": ["affiliate"]` — Shopify pak do výsledků zamíchá promoted varianty produktů vedle organických. Promoted varianta se od organické liší přítomností objektu `placement` v odpovědi, který obsahuje typ placement a (pokud je zveřejněna) výši komise — např. `placement.commission.percentage.value: 1.5` pro 1,5 %. Pokud Shopify komisi nezveřejní, neznamená to nulu, rate je privátní.

Attribution tracking funguje přes URL parametry: všechny varianty dostávají `utm_source=shopify`, `utm_medium=catalog` a `shclid` (click ID). Promoted varianty navíc dostávají `shdid` — identifikátor vývojáře pro výplatu. Attribution window je **7 dní**, výplaty **měsíčně** po KYC verifikaci.

Přístup je momentálně **invite-only** přes waitlist (Google Form). Jde o developer preview, ne GA release.

## Časová osa
- 2026-06-17 — Editions Spring '26 announce, developer preview spuštěn
- GA datum zatím neoznámeno
- Waitlist přihlášení: dostupné ihned přes odkaz v dokumentaci

## Dopad pro nás

**Pro vývojáře:**
Pokud budeme stavět vlastní AI shopping agenta nebo integrovat Global Catalog do produktu, stojí za to se přihlásit na waitlist. Implementace je relativně přímočará — přidá se parametr `placements: ["affiliate"]` do search volání a zpracují se `placement` objekty v odpovědi. Nutno počítat s KYC procesem před první výplatou a s tím, že komise nemusí být veřejně zveřejněny. Důležité: výsledky Catalog API se nesmí cachovat — merchant může kdykoliv změnit ceny, dostupnost nebo prezentaci.

**Pro PM / PO:**
Jde o nový monetizační kanál relevantní v případě, že Magexo bude vyvíjet nebo provozovat AI agenty pro klienty. Přímá relevance pro současné projekty je nízká, ale je dobré tento trend sledovat — agentic commerce se formuje jako nový retail channel a sponsored placements budou jeho standardní součástí podobně jako PPC v klasickém e-commerce.

## Použití v Integrátoru

Aktuálně nepřímá relevance — pokud integrátor dostane agentic vrstvu nebo AI shopping komponentu, promoted placements API bude přirozeným rozšířením pro monetizaci.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)
