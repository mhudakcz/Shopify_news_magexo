---
date: 2026-06-17
title: "Agentic plan — non-Shopify byznys může synchronizovat katalog a prodávat přes AI kanály"
title_en: "Agentic plan — non-Shopify businesses sync to Catalog and sell on AI channels"
slug: shopify-agentic-plan
zdroj: https://www.shopify.com/agentic-plan
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient provozuje byznys mimo Shopify ekosystém (vlastní PIM, ERP, jiná platforma), Agentic Plan je nový vstupní bod do Shopify Catalog bez nutnosti migrace — potenciálně zajímavé pro hybridní nebo headless scénáře."
dotcene_klienty: []
souvisejici: [agentic-commerce-build-commerce-agents, agentic-storefronts-admin-page]
editions_release: spring-2026
kontext:
  background: |
    Shopify Agentic Plan je nový typ obchodního plánu navržený pro subjekty, které neprovozují klasický Shopify online obchod. Namísto kompletního e-commerce řešení nabízí jedinou klíčovou funkci: synchronizaci produktového katalogu s Shopify Catalog infrastrukturou a prodej přes AI konverzační kanály (ChatGPT, Google AI Mode, Gemini, Microsoft Copilot, Perplexity, Shop app). Platba probíhá přímo v konverzaci prostřednictvím Shopify Checkout — merchant nepotřebuje vlastní web.

    Tento plán zapadá do dlouhodobé strategie Shopify, která od Editions Winter 2026 buduje Catalog jako federovanou infrastrukturní vrstvu přístupnou AI agentům. Technickým základem je MCP server (Model Context Protocol), resp. nástupnický protokol UCP (Unified Commerce Protocol), přes který AI platformy dotazují živá produktová data. Dosud byl tento ekosystém dostupný výhradně stávajícím Shopify merchantům — Agentic Plan ho otevírá externím hráčům: brandům na jiných platformách, PIM systémům, ERP řešením nebo order management systémům.

    Klíčovým lákadlem pro non-Shopify subjekty je pay-as-you-go cenový model bez měsíčního poplatku. Merchant platí pouze transakční poplatky (card processing od 1,9 % + fixní poplatek za transakci). Onboarding je navržen jako tříkrokový proces: přidat produkty, nastavit Shopify účet, začít prodávat. Shopify tvrdí, že merchant může být aktivní „do druhého dne". Součástí je také Knowledge Base app, která umožňuje merchantovi řídit, jak AI agenti prezentují jeho produkty a FAQ.

    Z pohledu Shopify je Agentic Plan monetizací Catalog infrastruktury jako samostatné SaaS vrstvy — Shopify se tak pozicionuje nejen jako e-commerce platforma, ale jako AI commerce infrastruktura dostupná bez ohledu na to, kde merchant aktuálně podniká. Pro Shopify to zároveň znamená rozšíření pool transakcí procházejících přes jeho Checkout.

  zdroje:
    - title: "Shopify Editions Spring '26: Agentic plan — non-Shopify businesses sync to Catalog and sell on AI channels"
      url: "https://www.shopify.com/agentic-plan"
    - title: "Agentic Commerce: Build Commerce Agents (Editions Winter 2026)"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Agentic Storefronts: nový dedicated admin page"
      url: "https://changelog.shopify.com/posts/a-new-home-for-agentic-storefronts-in-your-admin"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Agentic Plan umožňuje byznysům mimo Shopify ekosystém synchronizovat produktový katalog a přijímat objednávky přes AI platformy (ChatGPT, Copilot, Gemini, Perplexity) bez nutnosti vlastního e-shopu."
tagy: [editions, agentic, off-platform, catalog]
zdroj_kanal: editions
---

## Co se mění

Shopify spouští nový plán výhradně pro byznys, který nechce nebo nepotřebuje klasický Shopify online obchod. Stačí dodat produktová data — přes existující tech stack (PIM, ERP, OMS) nebo přímo — a Shopify zajistí synchronizaci s AI kanály a Checkout v konverzaci.

Podporované AI platformy ke dni launche:
- **ChatGPT** (OpenAI)
- **Google AI Mode** a **Gemini**
- **Microsoft Copilot**
- **Perplexity**
- **Shop app**
- Další platformy "coming soon"

Zákazník nakoupí přímo v AI konverzaci bez přesměrování na web. Shopify zpracuje Checkout, objednávka může být routována do stávajícího OMS merchantu.

Cenový model je **pay-as-you-go**: žádný měsíční poplatek, card processing od 1,9 % + fixní transakční poplatek.

## Časová osa

- **2026-02-04** — Editions Winter 2026 představuje Agentic Commerce framework (MCP/Catalog) pro existující Shopify merchanty
- **2026-04-22** — Storefront Catalog MCP server migruje na protokol UCP (Unified Commerce Protocol)
- **2026-05-11** — Agentic Storefronts dostávají vlastní admin dashboard pro stávající merchanty
- **2026-06-17** — Editions Spring 2026 announce: Agentic Plan otevírá ekosystém non-Shopify subjektům

## Dopad pro nás

**Pro vývojáře:**
Agentic Plan pravděpodobně využívá stejné Catalog / UCP API rozhraní jako stávající Agentic Storefronts. Pro integrace, kde klient provozuje PIM nebo ERP mimo Shopify, se otevírá možnost propojit tyto systémy přímo s Shopify Catalog bez plné migrace. Stojí za to sledovat, jakou technickou dokumentaci Shopify vydá pro feed/sync mechanismus — zejména zda půjde o GraphQL Admin API, REST feed nebo proprietární connector.

**Pro PM / PO:**
Plán je zajímavý pro klienty s hybridní architekturou (např. B2B na jiné platformě, samostatný PIM) nebo pro nové projekty, kde není potřeba klasický storefront. Vstupní bariéra je nízká (žádný měsíční poplatek), takže se hodí pro pilotní projekty zaměřené na AI commerce kanály. Konverzace s klienty by měla prozkoumat, zda mají zájem testovat prodej přes ChatGPT nebo Copilot bez nutnosti celé Shopify migrace.

## Použití v Integrátoru

Potenciálně relevantní pro hybridní scénáře — klient s existující non-Shopify platformou chce zpřístupnit katalog AI kanálům bez migrace; konkrétní API dokumentace zatím chybí.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)
