---
date: 2026-06-17
title: "Commerce skills pro AI agenty — Claude Code, Codex, Cursor, Hermes ovládají Shopify"
title_en: "Commerce skills for your favorite AI agent — Claude Code, Codex, Cursor, Hermes"
slug: shopify-ai-toolkit-commerce-skills
zdroj: https://shopify.dev/docs/apps/build/ai-toolkit
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "AI agenti s commerce skills mohou urychlit vývoj Shopify appek a témat přímo v IDE bez nutnosti přepínat do Partner Dashboardu."
dotcene_klienty: []
souvisejici: ["store-management-via-ai-agents", "vibe-coding-partners-shopify", "bots-agents-web-bot-auth"]
editions_release: spring-2026
kontext:
  background: |
    Shopify AI Toolkit je sada nástrojů propojující Shopify platformu s populárními AI dev agenty. Výsledkem je přímý přístup k Shopify Admin API, CLI schopnostem, dokumentaci a validaci kódu přímo z prostředí jako Claude Code, Cursor, VS Code, Codex (OpenAI) nebo Hermes — bez nutnosti opouštět IDE.

    Toolkit vznikl v reakci na rychlý nástup AI-asistovaného vývoje (tzv. vibe-coding), kde agenti dosud nedokázali spolehlivě generovat správný Shopify kód — místo toho "hádali" implementaci API a produkovali chybný nebo zastaralý kód. Shopify toolkit tento problém řeší tím, že agentovi servíruje aktuální GraphQL Admin API schémata, validaci, CLI příkazy i celou dokumentaci jako MCP (Model Context Protocol) server.

    V praxi to znamená, že developer otevře svůj oblíbený AI agent (např. Claude Code nebo Cursor), nainstaluje Shopify plugin nebo individuální "commerce skills" přes npm, a agent okamžitě získá schopnost scaffoldovat aplikace, spravovat store, volat Admin API nebo validovat kód oproti aktuálnímu Shopify schématu — vše bez přepínání do Partner Dashboardu nebo hledání v dokumentaci.

    Toolkit je dostupný ve třech režimech: jako plugin (doporučeno, automaticky se aktualizuje), jako samostatné commerce skills instalovatelné přes npm, nebo jako Dev MCP Server pro lokální napojení bez autentizace. Vyžaduje Node.js 18 nebo novější a kompatibilní AI nástroj.
  zdroje:
    - title: "Shopify Editions Spring '26: Commerce skills for your favorite AI agent — Claude Code, Codex, Cursor, Hermes"
      url: "https://shopify.dev/docs/apps/build/ai-toolkit"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify AI Toolkit přináší 'commerce skills' pro Claude Code, Cursor, Codex a Hermes — AI agenti teď mohou přímo buildovat, testovat a spravovat Shopify apps a storefroty z IDE bez přepínání do Partner Dashboardu."
tagy: [editions, ai-toolkit, developer, claude, cursor, codex, mcp]
zdroj_kanal: editions
---

## Co se mění

Shopify vydává **AI Toolkit** — sadu MCP-based schopností (tzv. commerce skills), které propojují Shopify platformu s AI vývojovými nástroji. Podporované integrace při launchi: **Claude Code**, **Codex** (OpenAI), **Cursor**, **Gemini CLI**, **Hermes** a **Visual Studio Code**.

Commerce skills pokrývají tři hlavní oblasti:

- **GraphQL Admin API skills** — agent zná aktuální schéma, může generovat a validovat mutations a queries přímo v editoru
- **Store execute via CLI** — spouštění CLI příkazů (scaffolding, deploy, dev preview) přímo z chatu s agentem
- **Dokumentace a validace** — agent čte aktuální Shopify docs a ověřuje kód oproti schématu, nikoli jen tréninkové data

Toolkit je distribuován třemi způsoby:
1. **Plugin (doporučeno)** — instaluje se jednou, automaticky se aktualizuje s novými capabilities
2. **Individuální npm skills** — výběrová instalace konkrétních schopností
3. **Dev MCP Server** — lokální napojení bez autentizace pro rychlý start

Požadavky: Node.js 18+, kompatibilní AI nástroj.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce, Shopify AI Toolkit veřejně dostupný
- (Toolkit se průběžně rozrůstá o nové commerce skills — plugin zajistí automatické aktualizace)

## Dopad pro nás

**Pro vývojáře:**
Shopify AI Toolkit zásadně mění workflow při vývoji Shopify apps a témat s AI asistencí. Dosud agent "hádal" Shopify API, produkoval kód podle zastaralých tréninkových dat a developer musel opravovat chyby ručně. Nyní agent s nainstalovanými commerce skills ví přesně, jaké GraphQL mutations existují, jaký je jejich signature, a může rovnou scaffoldovat appku nebo spustit `shopify app dev` z chatu. Doporučuji otestovat zejména kombinaci Claude Code + Shopify plugin pro vývoj nových extensions nebo theme customizací — potenciální zrychlení je výrazné.

**Pro PM / PO:**
Toolkit je primárně developerský nástroj — zákazníci ho nevidí. Pro klienty je relevantní nepřímo: rychlejší a spolehlivější vývoj Shopify řešení s méně chybami způsobenými zastaralou znalostí API. Při prodeji nových projektů lze zmínit moderní AI-asistovaný development workflow jako součást naší práce.

## Použití v Integrátoru

Commerce skills zatím nepokrývají specifické integrace (ERP, PIM, WMS), ale toolkit může urychlit vývoj custom Shopify apps a API napojení — relevantní pro budoucí rozšíření vývojového workflow.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
