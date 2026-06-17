---
date: 2026-06-17
title: "Shopify Editions Spring '26 — 187 updates v 10 tématech"
title_en: "Shopify Editions | Spring '26"
slug: editions-spring-2026
zdroj: https://www.shopify.com/editions/spring2026
shrnuto_dne: 2026-06-17

kategorie: [editions-hub]
api_oblast: other
nalehavost: vysoka
customer_facing: true

ucinnost_od: 2026-06-17

pouzivame_v_integratoru: ano
dukaz_integratoru: "Editions je centrální release Shopify pokrývající celou platformu — zasahuje napříč Admin API, Storefront, POS, Checkout, Functions, Payments. Pro nás indikuje směr platformy na příští 6 měsíců."
dotcene_klienty: []
souvisejici: []

editions_release: spring-2026

tldr: "Velký půlroční release: 187 updates seskupených do 10 témat. Hlavní směr — Shopify se staví jako infrastruktura pro AI commerce (Agentic Commerce Platform, Universal Commerce Protocol, Catalog API), současně přepisuje POS (v11), uvolňuje Shop Pay i mimo Shopify, a vyhazuje AI Toolkit pro developery (Claude Code/Cursor integrace, automatická Polaris migrace)."
tagy: [editions, agentic, sidekick, pos, checkout, B2B, marketing, AI, developer, hydrogen]
zdroj_kanal: editions

kontext:
  background: |
    Shopify Editions jsou dvakrát ročně koncentrované release events (typicky únor/srpen, ale Spring '26 vyšel 17. června 2026), které agregují měsíce changelog práce do jednoho narativu. Slouží jak merchantům (přehled co je v platformě nového), tak vývojářům (roadmap APIs a extensions), tak interně Shopify (PR moment a strategický signál směru platformy).

    Spring '26 zřetelně dominuje téma **Agentic Commerce**: Shopify staví Universal Commerce Protocol (UCP) jako standard pro nakupování přes AI agenty (ChatGPT, Copilot, Perplexity), Catalog API jako infrastrukturu pro indexaci produktů AI vyhledávači, a Cart/Checkout MCP servery jako spojku mezi AI agentem a Shopify objednávkou. Sidekick (Shopify vlastní AI asistent v admin) se rozšířil na Apple Watch, do třetích aplikací (Klaviyo, Judge.me) a do mobilní aplikace.

    Druhým velkým směrem je **infrastruktura pro vývojáře** — Shopify AI Toolkit umožňuje řízení obchodu z Claude Code, Cursor, Codex i VS Code; Hydrogen byl přepsán jako framework-agnostic (funguje s Next.js a libovolným stackem); Polaris dostal AI-asistovanou migrační cestu (deadline 1. 10. 2026). Tradiční changelog položky najdete v archivu — Editions je jejich kurátorský přehled.
  zdroje:
    - title: "Shopify Editions | Spring '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/spring2026"
    - title: "Shopify Editions přehled (předchozí releases)"
      url: "https://www.shopify.com/editions"
    - title: "Shopify developer dokumentace pro Agentic Commerce"
      url: "https://shopify.dev/docs/agents"
  generated_at: 2026-06-17T08:00:00Z
  model: claude-opus-4-7
---

## TL;DR pro spěchajícího PM-a

Pokud máš 30 sekund, čti tohle:

1. **Agentic Commerce** = strategický směr. Shopify dělá z platformy infrastrukturu pro nakupování přes AI agenty. Pokud klient prodává něco, co lidi hledají přes ChatGPT/Copilot, **měli bychom o tom vědět**.
2. **POS v11** je major rewrite — performance, multi-entity, lepší inventář. Pro retail klienty je to viditelná změna.
3. **Hydrogen rebuild** — funguje s Next.js a jakýmkoli frameworkem. Pro Hydrogen klienty *signifikantní* změna v ekosystému.
4. **Polaris deadline 1. 10. 2026** — Checkout/Customer Account UI extensions musí být přepsané. Pokud nějaké máme, **patří to do Q3 roadmapy**.
5. **Shop Pay anywhere** — i mimo Shopify storefronts. Otevírá nové prodejní téma.

## 10 témat releasu

### 🤖 Agentic (11 položek)
*„The only platform you need to be in every AI channel"*

Shopify se staví jako vrstva mezi produkty a AI nákupy. Klíčové komponenty:
- **Universal Commerce Protocol (UCP)** — otevřený standard pro agentic commerce (discovery → cart → checkout)
- **Catalog API** — agenti dotahují produktová data v reálném čase, podporují image search, lookup po ID/URL, Shop sign-in pro personalizaci
- **Cart MCP + Checkout MCP** — Model Context Protocol servery propojující AI agenty se Shopify checkoutem
- **Agentic plan** — i non-Shopify byznys může synchronizovat katalog a prodávat přes AI kanály
- **Sponsored products** — monetizace via Catalog API (preview)

**Pro vývojáře:** `https://shopify.dev/docs/agents` je nový hub. Klient se Shopify Catalog se může zviditelnit v ChatGPT/Copilot s minimální prací.

### 💬 Sidekick (9 položek)
*AI asistent zabudovaný do Shopify*

Sidekick (vlastní LLM-based assistant) se rozšířil napříč platformou:
- **Apple Watch app** — dotaz na business data z hodinek
- **V mobilní aplikaci na každé obrazovce** — text nebo hlas
- **Funguje s třetími apps** — Judge.me, Klaviyo, Loop, Smile (přes app extensions)
- **Generuje aplikace** — Sidekick app editor s code editorem a verze
- **Automation tests** — Sidekick vyrobí test events pro Shopify Flow
- **Vytváří zákazníky** — popíšeš zákazníka v plain language, Sidekick vyplní formulář
- **Multi-task** — Sidekick běží v pozadí napříč okny
- **Follow-up otázky** — multiple choice pro upřesnění úkolu

### 🌐 Online (26 položek)
*Storefront, customer accounts, B2B, Collective*

Klíčové:
- **AI sales associate v online store** — Shopify Inbox s product recommendations pro Shop sign-in zákazníky
- **Storefront search** — funguje i s překlepy / neobvyklou frazí
- **SimGym** — AI simulovaný shopper analyzuje jakékoli téma (insights, A/B testy)
- **Rollouts** — schedule, gradual rollout, A/B test pro themes a checkout
- **Markets graph view** — vizualizace markets setupu
- **Variant-level publishing** — kontrola variant per kanál/market
- **Refreshed customer accounts** — nová navigace, recommendations
- **365-day sessions** — zákazníci zůstanou přihlášení rok
- **B2B for all plans** — company profiles + volume pricing + 3 katalogy bez extra ceny
- **Shopify Collective rozšiřuje do Austrálie** + Verified Tracking badge pro dodavatele

### 🛒 Retail (19 položek)
*Point of sale & in-store*

Hvězda: **POS v11 rebuild**.
- **Fastest-ever POS** — over 1 minute saved per transaction (always-present cart)
- **Faster search** — inline suggestions, reduced latency
- **Returns + exchanges + new sales v jednom košíku**
- **Multi-entity selling** napříč retail lokacemi (různé právní subjekty z jednoho store)
- **Tap to Pay pro multi-entity**
- **Cash management** — pravidla, reason codes, drawer tracking, audit trail
- **Scannable discounts (QR)**
- **Verifone Victa Mobile** — handheld co je i terminál v doku
- **Keyboard shortcuts** pro POS workflow
- **Pickup orders mezi lokacemi**

### 📢 Marketing (12 položek)
*Campaign automation, messaging, ads*

Nejvýraznější: **Campaign Autopilot** — AI-řízené marketing kampaně co se učí a optimalizují napříč kanály.

Další:
- **Shop Campaigns na více kanálech** — ChatGPT, Microsoft Monetize (programmatic), Pinterest
- **WhatsApp marketing** v Shopify Messaging
- **SMS marketing automations** (abandoned cart, browse abandonment)
- **Smart email delivery** — AI prioritizace pro konverzi
- **Marketing data v analytics** — spend/ROAS/impressions vedle sales
- **Discount links přiřazené ke kampaním** pro attribution
- **Fixed bundles na Google Shopping + Meta**
- **WhatsApp consent management** v customer profilech

### ⚙️ Operations (47 položek — největší téma)
*Admin, analytics, inventory, shipping, international*

Hodně různého. Highlights:

**AI/Vibe coding:**
- **Vibe coding partners** — Manus, Replit, V0, Lovable (popíšeš obchod, spustí ti Shopify store)
- **Store management v agentech** — Claude, ChatGPT, Perplexity ti řídí store

**Analytics:**
- **Daily insights** — Shopify analyzuje data a vypichuje trendy
- **Scatter plots, radar, bubble, sunburst** — nové typy grafů
- **Metric targets** — set + visual tracking
- **Annotations** — visual markery pro vysvětlení změn metrik
- **Filtering by metafields** — custom data v reportingu

**Inventory:**
- **SKU sharing required** napříč lokacemi (bez duplikace)
- **Faster sync** během high-traffic events
- **Pickup z více zdrojů**
- **Shipment-level barcode** (GS1-128)
- **Inventory adjustment workflows** s full audit trail

**Shipping/International:**
- **Managed Markets v UK + Kanadě**
- **FedEx One Rate** (US), **DHL Kleinpaket** (DE)
- **Delivery carrier auto-detection** (manual tracking)
- **Shipping labels v lokální měně**
- **Duty calculation breakdown**

### 📱 Shop app (9 položek)
*Mobilní app + customer discovery*

- **Conversational search** — discovery přes konverzaci, recommendations podle taste/history
- **Online → in-person** — Shop app napojuje na retail location (pickup + returns)
- **Shop skill pro personal AI agenty** (OpenClaw, Hermes) — shoppers via agentů
- **Blocks v Shop Editor** — slideshows, collections, videa na product pages
- **Demand indicators** — "trending" badges, low inventory flags
- **Shop Minis napříč app** — home feed + navigation + product pages

### 💳 Payments (19 položek)
*Payment methods, Shop Pay, checkout*

- **Shop Pay anywhere** — i mimo Shopify storefronts (off-platform brands)
- **Managed payment methods** — Shopify Payments dynamicky řadí metody pro konverzi
- **Ship + pickup v jednom checkoutu**
- **Shop Pay v UAE, Mexico (MSI installments), víc local methods**
- **USDC cashback** pro platby na Base
- **Multi-currency payouts** US/HK/SG (víc měn)
- **Enhanced fraud prevention** — improved ML modely pro card testing
- **Chargeback health monitoring**
- **Redesigned checkout** s VAT ID validací + lepší address autocomplete

### 💰 Finance (7 položek)
*Balance, Capital, Tax*

- **Cashback z Balance pro ad spend**
- **Shopify Tax v Kanadě**
- **Cash deposity do Balance** v partnerských retailech
- **Capital splacení z Shopify Payments balance**
- **Capital flex repayment control**
- **Capital ve Francii**
- **Domestic wire transfers** z Balance ($10/transfer)

### 👨‍💻 Developer (53 položek — druhé největší téma)
*APIs, extensions, tooling*

**AI Toolkit ecosystem:**
- **Shopify AI Toolkit** — řídí store z Claude Code, Cursor, Codex, VS Code, Hermes
- **Shopify Dev MCP** — všechny API verze, optimalizovaný token usage
- **AI Toolkit pro Polaris migration** — agent ti přepíše Checkout/CAU extensions (deadline 1. 10. 2026)
- **AI Toolkit pro checkout extension audit** — performance check

**Hydrogen:**
- **All-new Hydrogen na any stack** (preview) — agent-first, funguje s Next.js a libovolným frameworkem

**Platform:**
- **Streamlined Metaobject API** — `values` property místo manual field handling
- **Metaobject data v checkout functions** + **bez scopes pro app-owned metaobjects**
- **Shop User Metafields v Functions** — buyer-specific data v checkout
- **Cart metafields carry over to orders** (přes `cartToOrderCopyable`)
- **Next Generation Events** (preview) — field-level webhooks s custom GraphQL payloady
- **App Events API** — monitor performance v Dev Dashboard
- **App automation tokens** pro CI/CD (nahrazuje CLI tokens)
- **Parallel reads** pro bulk queries (4× rychleji)
- **GraphQL + bulk operations z Shopify CLI**
- **Shopify CLI 4.0** — semver + auto-updates + odebrané deprecated flags
- **Stronger app security** — expiring tokens s OAuth 2.0 refresh

**POS Extensions:**
- **POS UI extensions offline** + **Camera API** + **localization**
- **Cash management extensions** — register-centric APIs

**Discounts/Storefronts:**
- **Admin UI extensions pro discount configuration**
- **Color palettes pro themes**
- **Customer account web component** (Shopify-managed sign-in)
- **Standard storefront events and actions**
- **New Collections API** (preview) — composable source groups

**Apps:**
- **Shop Minis API** — home feed + navigation + product pages
- **Built for Shopify** — returns/subscriptions apps musí používat Customer Account API
- **No backend required** — Build App Home jako UI extension

## 🎯 Game-changery podle priority

Když musíš vybrat 7 položek na sledování:

| # | Položka | Proč to matters |
|---|---|---|
| 1 | **Agentic Commerce Platform (UCP + Catalog API + MCPs)** | Strategický pivot Shopify. Pokud klient prodává něco, co lidi hledají v AI, je to pro něj nová akviziční cesta. |
| 2 | **Campaign Autopilot** | AI marketing co se sám učí — alternativa k ručně řízeným kampaním. |
| 3 | **Hydrogen any stack (preview)** | Major architektonická změna. Hydrogen klienti by si měli ohlídat migration path. |
| 4 | **POS v11 rebuild** | Performance + multi-entity. Pro retail klienty viditelná změna. |
| 5 | **Shopify AI Toolkit (dev)** | Pro nás (vývojáře) přímo použitelný nástroj — řízení Shopify z Claude Code. |
| 6 | **Polaris migration deadline 1. 10. 2026** | Hard deadline. Pokud máme klienty s Checkout/CAU extensions na ≤2025-07, **patří do Q3 plánu**. |
| 7 | **Shop Pay anywhere (off-platform)** | Otevírá nové prodejní téma — Shop Pay i pro brand bez Shopify storu. |

## 📅 Deadliny ke sledování

| Datum | Co se stane |
|---|---|
| **2026-10-01** | Polaris web components — Checkout/CAU extensions na ≤2025-07 nepůjde deployovat |
| **2027-01-01** | Expiring offline tokens povinné pro všechny public apps |
| **2026-07-01** | API verze 2026-07 začíná platit (vše s `api_verze: 2026-07` v archivu) |

## 🚧 Jak dál — postupné rozkládání

Tento hub je **vstupní bod**. Postupně budeme rozkládat:
- **Theme overview články** (10×) — detailnější rozbor každého z 10 témat
- **Standalone články** pro top items co tu ještě nejsou (Campaign Autopilot, Hydrogen rebuild, UCP, POS v11 deep-dive, …)
- **Sekce „Z této Edition už máme v archivu"** níže odkazuje na existující články, které pokrývají Editions items

Pokud chceš zaměřit přípravu na konkrétní téma, projdi níže sekci s mapováním na archiv — řekne ti, co už máme zachyceno, a co je nové oznámení.
