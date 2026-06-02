---
date: 2026-05-29
title: "Customizable /llms.txt, /llms-full.txt a /agents.md v theme editoru"
title_en: "Customize /llms.txt, /llms-full.txt and /agents.md"
slug: customize-llms-txt-agents-md
zdroj: https://shopify.dev/changelog/customize-llmstxt-llms-fulltxt-and-agentsmd
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-02

kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Theme editor feature pro AI guidance soubory. Naše integrace nesahá na theme editor."
dotcene_klienty: []
souvisejici: [agentic-commerce-build-commerce-agents, shopify-catalog-for-all]

tldr: "Obchody mají nově customizable šablony pro `agents.md`, `/llms.txt` a `/llms-full.txt` přístupné z theme editoru. Každá cesta může servírovat různý obsah s automatickým fallbackem na default."
tagy: [llms, ai, agents, themes, agentic-commerce]
---

## Co se mění
Shopify themes podporují customizaci tří **AI-readable cest**:
- **`/llms.txt`** — krátký guidance pro LLM crawlery (jako robots.txt pro AI)
- **`/llms-full.txt`** — rozšířená verze s detailním kontextem (produkty, kategorie, brand voice)
- **`/agents.md`** — instructions pro AI agenty (formát komunity adopted Cursor/Claude/atd.)

Šablony přístupné z **Online Store theme editoru**. Každá cesta může mít custom obsah (per market / per locale), s automatickým fallbackem na Shopify default.

## Dopad pro nás
**Pro vývojáře:**
Žádný direct API impact pro naše integrace. Pokud bychom dělali theme work pro klienta s AI komerčním flow (chatbot, AI shopping assistant), jsou tyto cesty oficiálně podporované.

**Pro PM / PO:**
Roste důležitost **AI-readable contentu** v Shopify ekosystému (souvisí s Agentic Commerce, Storefront Catalog MCP, AI Toolkit). Klienti s headless / AI-first strategií budou hledat někoho, kdo umí ty `llms.txt` / `agents.md` správně napsat.

## Použití v Integrátoru
**Nepoužíváme** — theme editor feature. Pro budoucí AI-driven projekty u klientů relevantní.

## Související
- [Agentic Commerce: build commerce agents](../zmena/agentic-commerce-build-commerce-agents/)
- [Shopify Catalog for All](../zmena/shopify-catalog-for-all/)
