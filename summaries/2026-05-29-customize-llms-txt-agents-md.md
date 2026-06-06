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

kontext:
  background: |
    Soubory `llms.txt` a `agents.md` jsou otevřené komunitní standardy pro strojově čitelné instrukce určené AI systémům. Formát `llms.txt` navrhl Jeremey Howard (fast.ai) v roce 2024 jako analogii k `robots.txt` — místo zákazů ale poskytuje strukturovaný obsah webu pro jazykové modely. `agents.md` je podobný standard pro instrukce AI agentům, popularizovaný vývojářskými nástroji jako Cursor nebo Claude Code.

    Shopify zareagoval na nástup agentic commerce tím, že tyto soubory zavedl jako součást výchozí infrastruktury každého obchodu. Automaticky generovaný obsah zahrnuje základní informace o sortimentu, brand voice a navigační struktuře. Obchodníci tak nemusí nic nastavovat ručně — AI crawlery i agenti dostanou standardizovaný vstup okamžitě. Tato vrstva doplňuje Storefront Catalog MCP server, který zpřístupňuje produktová data AI agentům přes Model Context Protocol.

    Možnost vlastní šablony v theme editoru je klíčová pro obchody s pokročilou AI strategií. Přizpůsobení umožňuje řídit, jak AI asistenti prezentují produkty, jaký tón komunikace volí nebo jaká omezení respektují. Hierarchický fallback (vlastní šablona → sdílená `agents.md` šablona → Shopify default) zajišťuje, že obchody bez technického zázemí mají vždy rozumný základ.

    Tato funkce je součástí širší Shopify strategie budování infrastruktury pro agentic commerce, která zahrnuje také Web Bot Auth (identifikace agentů při přístupu ke Storefront API) a Shopify AI Toolkit.
  zdroje:
    - title: "Shopify Changelog: Customize /llms.txt, /llms-full.txt and /agents.md"
      url: "https://shopify.dev/changelog/customize-llmstxt-llms-fulltxt-and-agentsmd"
    - title: "Agentic Commerce: Build Commerce Agents (Shopify Editions Winter 2026)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/"
    - title: "Bots a AI agents: Web Bot Auth"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/bots-agents-web-bot-auth/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
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
