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

> 💡 **Tip pro orientaci:** zvýrazněné položky s odkazem (modře) vedou na detailní rozbor v archivu. Bez odkazu = Shopify ji v Editions oznámilo, ale nemá samostatný changelog článek (žije buď v theme overview pod tématem, nebo přímo ve zdrojové dokumentaci). Pod článkem najdeš grid 10 témat a auto-generovaný seznam 180+ propojených archivních článků.

## TL;DR pro spěchajícího PM-a

Pokud máš 30 sekund, čti tohle:

1. **[Agentic Commerce](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)** = strategický směr. Shopify dělá z platformy infrastrukturu pro nakupování přes AI agenty. Pokud klient prodává něco, co lidi hledají přes ChatGPT/Copilot, **měli bychom o tom vědět**. Podívej se na [Universal Commerce Protocol](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/) a [Catalog API](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/).
2. **[POS v11](/Shopify_news_magexo/zmena/pos-v11-rebuild-deep-dive/)** je major rewrite — performance, multi-entity, lepší inventář. Pro retail klienty je to viditelná změna.
3. **[Hydrogen rebuild](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/)** — funguje s Next.js a jakýmkoli frameworkem. Pro Hydrogen klienty *signifikantní* změna v ekosystému.
4. **[Polaris deadline 1. 10. 2026](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/)** — Checkout/Customer Account UI extensions musí být přepsané. Pokud nějaké máme, **patří to do Q3 roadmapy**.
5. **[Shop Pay anywhere](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)** — i mimo Shopify storefronts. Otevírá nové prodejní téma.

## 10 témat releasu

### 🤖 [Agentic (11 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-agentic/)
*„The only platform you need to be in every AI channel"*

Shopify se staví jako vrstva mezi produkty a AI nákupy. Klíčové komponenty:
- **[Universal Commerce Protocol (UCP)](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/)** — otevřený standard pro agentic commerce (discovery → cart → checkout)
- **[Catalog API](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/)** — agenti dotahují produktová data v reálném čase, podporují image search, lookup po ID/URL, Shop sign-in pro personalizaci
- **Cart MCP + Checkout MCP** — Model Context Protocol servery propojující AI agenty se Shopify checkoutem (viz [UCP detail](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/))
- **[Agentic plan](/Shopify_news_magexo/zmena/shopify-agentic-plan/)** — i non-Shopify byznys může synchronizovat katalog a prodávat přes AI kanály
- **[Sponsored products](/Shopify_news_magexo/zmena/sponsored-products-catalog-api/)** — monetizace via Catalog API (preview)

**Pro vývojáře:** `https://shopify.dev/docs/agents` je nový hub. Klient se Shopify Catalog se může zviditelnit v ChatGPT/Copilot s minimální prací.

### 💬 [Sidekick (9 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-sidekick/)
*AI asistent zabudovaný do Shopify*

Sidekick (vlastní LLM-based assistant) se rozšířil napříč platformou:
- **[Apple Watch app + mobilní app](/Shopify_news_magexo/zmena/sidekick-everywhere-mobile-watch/)** — dotaz na business data z hodinek, text/hlas na každé obrazovce v mobilu
- **[Funguje s třetími apps](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/)** — Judge.me, Klaviyo, Loop, Smile (přes app extensions)
- **Generuje aplikace** — Sidekick app editor s code editorem a verze
- **[Vytváří zákazníky + automation tests](/Shopify_news_magexo/zmena/sidekick-creates-customers-tests/)** — popíšeš zákazníka v plain language, Sidekick vyplní formulář; nebo vyrobí test events pro Shopify Flow
- **Multi-task** — Sidekick běží v pozadí napříč okny
- **Follow-up otázky** — multiple choice pro upřesnění úkolu

### 🌐 [Online (26 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
*Storefront, customer accounts, B2B, Collective*

Klíčové:
- **[AI sales associate v online store](/Shopify_news_magexo/zmena/shopify-inbox-ai-sales-associate/)** — Shopify Inbox s product recommendations pro Shop sign-in zákazníky
- **[Storefront search](/Shopify_news_magexo/zmena/storefront-search-ai-fuzzy/)** — funguje i s překlepy / neobvyklou frazí
- **[SimGym](/Shopify_news_magexo/zmena/simgym-ai-store-analysis/)** — AI simulovaný shopper analyzuje jakékoli téma (insights, A/B testy)
- **[Rollouts](/Shopify_news_magexo/zmena/rollouts-schedule-ab-test-themes-checkout/)** — schedule, gradual rollout, A/B test pro themes a checkout
- **[Markets graph view](/Shopify_news_magexo/zmena/shopify-markets-graph-view/)** — vizualizace markets setupu
- **[Variant-level publishing](/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/)** — kontrola variant per kanál/market
- **[Refreshed customer accounts](/Shopify_news_magexo/zmena/refreshed-signin-page-customer-accounts/)** — nová navigace, recommendations
- **365-day sessions** — zákazníci zůstanou přihlášení rok
- **[B2B for all plans](/Shopify_news_magexo/zmena/b2b-for-all-merchants/)** — company profiles + volume pricing + 3 katalogy bez extra ceny
- **[Shopify Collective rozšiřuje do Austrálie](/Shopify_news_magexo/zmena/shopify-collective-australia/)** + [Verified Tracking badge](/Shopify_news_magexo/zmena/verified-tracking-shopify-collective/) pro dodavatele
- **[Shopify Smart Pricing app](/Shopify_news_magexo/zmena/shopify-smart-pricing-app/)** — AI pricing tips per produkt

### 🛒 [Retail (19 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-retail/)
*Point of sale & in-store*

Hvězda: **[POS v11 rebuild](/Shopify_news_magexo/zmena/pos-v11-rebuild-deep-dive/)**.
- **Fastest-ever POS** — over 1 minute saved per transaction (always-present cart)
- **[Faster search](/Shopify_news_magexo/zmena/pos-find-products-inline-search/)** — inline suggestions, reduced latency
- **[Returns + exchanges + new sales v jednom košíku](/Shopify_news_magexo/zmena/pos-returns-exchanges-cart/)**
- **[Multi-entity selling](/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/)** napříč retail lokacemi (různé právní subjekty z jednoho store)
- **[Tap to Pay pro multi-entity](/Shopify_news_magexo/zmena/tap-to-pay-multi-entity/)**
- **[Cash management](/Shopify_news_magexo/zmena/retail-cash-management-capabilities/)** — pravidla, reason codes, drawer tracking, audit trail
- **[Scannable discounts (QR)](/Shopify_news_magexo/zmena/scannable-discount-codes-qr/)**
- **[Verifone Victa Mobile](/Shopify_news_magexo/zmena/verifone-victa-mobile-pos/)** — handheld co je i terminál v doku
- **[Keyboard shortcuts](/Shopify_news_magexo/zmena/pos-keyboard-shortcuts-navigation/)** pro POS workflow
- **[Multi-location pickup orders](/Shopify_news_magexo/zmena/multi-location-pickup-pos/)** mezi lokacemi
- **[Gift card cashout](/Shopify_news_magexo/zmena/gift-card-cashout-pos/)** — compliance feature pro některé jurisdikce

### 📢 [Marketing (12 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-marketing/)
*Campaign automation, messaging, ads*

Nejvýraznější: **[Campaign Autopilot](/Shopify_news_magexo/zmena/campaign-autopilot-ai-marketing/)** — AI-řízené marketing kampaně co se učí a optimalizují napříč kanály.

Další:
- **Shop Campaigns na více kanálech** — ChatGPT, Microsoft Monetize (programmatic), Pinterest
- **[WhatsApp marketing](/Shopify_news_magexo/zmena/whatsapp-marketing-channel-shopify/)** v Shopify Messaging
- **[SMS marketing automations](/Shopify_news_magexo/zmena/sms-marketing-automations-messaging/)** (abandoned cart, browse abandonment)
- **[Smart email delivery](/Shopify_news_magexo/zmena/smart-email-delivery-shopify-messaging/)** — AI prioritizace pro konverzi
- **Marketing data v analytics** — spend/ROAS/impressions vedle sales
- **[Discount links přiřazené ke kampaním](/Shopify_news_magexo/zmena/track-discounts-marketing-campaigns/)** pro attribution
- **Fixed bundles na Google Shopping + Meta**
- **WhatsApp consent management** v customer profilech *(samostatný článek zatím není — viz Editions zdroj)*

### ⚙️ [Operations (47 položek — největší téma)](/Shopify_news_magexo/zmena/editions-spring-2026-operations/)
*Admin, analytics, inventory, shipping, international*

Hodně různého. Highlights:

**AI/Vibe coding:**
- **[Vibe coding partners](/Shopify_news_magexo/zmena/vibe-coding-partners-shopify/)** — Manus, Replit, V0, Lovable (popíšeš obchod, spustí ti Shopify store)
- **[Store management v agentech](/Shopify_news_magexo/zmena/store-management-via-ai-agents/)** — Claude, ChatGPT, Perplexity ti řídí store

**Analytics:**
- **[Daily insights](/Shopify_news_magexo/zmena/daily-insights-analytics-ai/)** — Shopify analyzuje data a vypichuje trendy
- **[Scatter plots, radar, bubble, sunburst](/Shopify_news_magexo/zmena/scatter-plots-radar-charts-analytics/)** — nové typy grafů
- **[Metric targets](/Shopify_news_magexo/zmena/analytics-metric-targets-admin-api/)** — set + visual tracking
- **[Annotations](/Shopify_news_magexo/zmena/annotations-analytics-events/)** — visual markery pro vysvětlení změn metrik
- **Filtering by metafields** — custom data v reportingu

**Inventory:**
- **SKU sharing required** napříč lokacemi (bez duplikace)
- **Faster sync** během high-traffic events
- **Pickup z více zdrojů**
- **[Shipment-level barcode](/Shopify_news_magexo/zmena/barcode-inventory-shipments/)** (GS1-128)
- **[Inventory adjustment workflows](/Shopify_news_magexo/zmena/inventory-adjustment-full-change-tracking/)** s full audit trail

**Shipping/International:**
- **[Managed Markets v UK + Kanadě](/Shopify_news_magexo/zmena/managed-markets-uk-canada-launch/)**
- **FedEx One Rate** (US), **DHL Kleinpaket** (DE)
- **Delivery carrier auto-detection** (manual tracking)
- **Shipping labels v lokální měně**
- **Duty calculation breakdown**

### 📱 [Shop app (9 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-shop-app/)
*Mobilní app + customer discovery*

- **[Conversational search](/Shopify_news_magexo/zmena/shop-app-conversational-ai-search/)** — discovery přes konverzaci, recommendations podle taste/history
- **Online → in-person** — Shop app napojuje na retail location (pickup + returns)
- **[Shop skill pro personal AI agenty](/Shopify_news_magexo/zmena/shop-skill-personal-ai-agents/)** (OpenClaw, Hermes) — shoppers via agentů
- **[Blocks v Shop Editor](/Shopify_news_magexo/zmena/customize-shop-product-pages-blocks/)** — slideshows, collections, videa na product pages
- **Demand indicators** — "trending" badges, low inventory flags
- **[Shop Minis napříč app](/Shopify_news_magexo/zmena/shop-minis-march-april-update/)** — home feed + navigation + product pages

### 💳 [Payments (19 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-payments/)
*Payment methods, Shop Pay, checkout*

- **[Shop Pay anywhere](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)** — i mimo Shopify storefronts (off-platform brands)
- **[Managed payment methods](/Shopify_news_magexo/zmena/managed-payment-methods-ml-ordering/)** — Shopify Payments dynamicky řadí metody pro konverzi
- **[Ship + pickup v jednom checkoutu](/Shopify_news_magexo/zmena/ship-and-pickup-one-order-preview/)**
- **[Shop Pay v UAE, Mexico (MSI installments), víc local methods](/Shopify_news_magexo/zmena/local-payment-methods-more-countries/)**
- **[USDC cashback](/Shopify_news_magexo/zmena/usdc-payments-base-cashback/)** pro platby na Base
- **[Multi-currency payouts](/Shopify_news_magexo/zmena/multi-currency-payout-expansion/)** US/HK/SG (víc měn)
- **Enhanced fraud prevention** — improved ML modely pro card testing
- **Chargeback health monitoring**
- **[Redesigned checkout](/Shopify_news_magexo/zmena/redesigned-checkout-spring-2026/)** s VAT ID validací + lepší address autocomplete

### 💰 [Finance (7 položek)](/Shopify_news_magexo/zmena/editions-spring-2026-finance/)
*Balance, Capital, Tax*

- **[Cashback z Balance pro ad spend](/Shopify_news_magexo/zmena/balance-cashback-ad-spend/)**
- **[Shopify Tax v Kanadě](/Shopify_news_magexo/zmena/shopify-tax-canada/)**
- **Cash deposity do Balance** v partnerských retailech
- **Capital splacení z Shopify Payments balance**
- **Capital flex repayment control**
- **[Capital ve Francii](/Shopify_news_magexo/zmena/capital-launches-france/)**
- **[Domestic wire transfers](/Shopify_news_magexo/zmena/domestic-wire-transfers-balance/)** z Balance ($10/transfer)

### 👨‍💻 [Developer (53 položek — druhé největší téma)](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
*APIs, extensions, tooling*

**AI Toolkit ecosystem:**
- **[Shopify AI Toolkit](/Shopify_news_magexo/zmena/shopify-ai-toolkit-commerce-skills/)** — řídí store z Claude Code, Cursor, Codex, VS Code, Hermes
- **Shopify Dev MCP** — všechny API verze, optimalizovaný token usage
- **[AI Toolkit pro Polaris migration](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/)** — agent ti přepíše Checkout/CAU extensions (deadline 1. 10. 2026)
- **AI Toolkit pro checkout extension audit** — performance check

**Hydrogen:**
- **[All-new Hydrogen na any stack](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/)** (preview) — agent-first, funguje s Next.js a libovolným frameworkem

**Platform:**
- **[Streamlined Metaobject API](/Shopify_news_magexo/zmena/streamlined-metaobject-api/)** — `values` property místo manual field handling
- **[Metaobject data v checkout functions](/Shopify_news_magexo/zmena/metaobject-access-shopify-functions/)** + **[bez scopes pro app-owned metaobjects](/Shopify_news_magexo/zmena/app-owned-metaobjects-without-scopes/)**
- **[Shop User Metafields v Functions](/Shopify_news_magexo/zmena/shop-user-metafields-functions/)** — buyer-specific data v checkout
- **Cart metafields carry over to orders** (přes `cartToOrderCopyable`)
- **[Next Generation Events](/Shopify_news_magexo/zmena/next-generation-events-field-level-webhooks/)** (preview) — field-level webhooks s custom GraphQL payloady
- **[App Events API](/Shopify_news_magexo/zmena/app-events-dev-dashboard/)** — monitor performance v Dev Dashboard
- **[App automation tokens](/Shopify_news_magexo/zmena/app-deployment-cicd-tokens/)** pro CI/CD (nahrazuje CLI tokens)
- **Parallel reads** pro bulk queries (4× rychleji)
- **GraphQL + bulk operations z Shopify CLI**
- **[Shopify CLI 4.0](/Shopify_news_magexo/zmena/shopify-cli-40-semver-autoupdates/)** — semver + auto-updates + odebrané deprecated flags
- **[Stronger app security](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/)** — expiring tokens s OAuth 2.0 refresh

**POS Extensions:**
- **[POS UI extensions offline](/Shopify_news_magexo/zmena/pos-ui-extensions-offline/)** + **Camera API** + **localization**
- **Cash management extensions** — register-centric APIs

**Discounts/Storefronts:**
- **[Admin UI extensions pro discount configuration](/Shopify_news_magexo/zmena/build-app-home-ui-extension/)**
- **Color palettes pro themes**
- **[Customer account web component](/Shopify_news_magexo/zmena/customer-account-web-component/)** (Shopify-managed sign-in)
- **Standard storefront events and actions**
- **[New Collections API](/Shopify_news_magexo/zmena/new-collections-api-preview/)** (preview) — composable source groups

**Apps:**
- **Shop Minis API** — home feed + navigation + product pages
- **Built for Shopify** — returns/subscriptions apps musí používat Customer Account API
- **[No backend required](/Shopify_news_magexo/zmena/build-app-home-ui-extension/)** — Build App Home jako UI extension

## 🎯 Game-changery podle priority

Když musíš vybrat 7 položek na sledování:

| # | Položka | Proč to matters |
|---|---|---|
| 1 | **[Agentic Commerce Platform](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/)** (UCP + [Catalog API](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/) + MCPs) | Strategický pivot Shopify. Pokud klient prodává něco, co lidi hledají v AI, je to pro něj nová akviziční cesta. |
| 2 | **[Campaign Autopilot](/Shopify_news_magexo/zmena/campaign-autopilot-ai-marketing/)** | AI marketing co se sám učí — alternativa k ručně řízeným kampaním. |
| 3 | **[Hydrogen any stack (preview)](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/)** | Major architektonická změna. Hydrogen klienti by si měli ohlídat migration path. |
| 4 | **[POS v11 rebuild](/Shopify_news_magexo/zmena/pos-v11-rebuild-deep-dive/)** | Performance + multi-entity. Pro retail klienty viditelná změna. |
| 5 | **[Shopify AI Toolkit (dev)](/Shopify_news_magexo/zmena/shopify-ai-toolkit-commerce-skills/)** | Pro nás (vývojáře) přímo použitelný nástroj — řízení Shopify z Claude Code. |
| 6 | **[Polaris migration deadline 1. 10. 2026](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/)** | Hard deadline. Pokud máme klienty s Checkout/CAU extensions na ≤2025-07, **patří do Q3 plánu**. |
| 7 | **[Shop Pay anywhere (off-platform)](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)** | Otevírá nové prodejní téma — Shop Pay i pro brand bez Shopify storu. |

## 📅 Deadliny ke sledování

| Datum | Co se stane |
|---|---|
| **2026-10-01** | [Polaris web components](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/) — Checkout/CAU extensions na ≤2025-07 nepůjde deployovat |
| **2027-01-01** | [Expiring offline tokens](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/) povinné pro všechny public apps |
| **2026-07-01** | API verze 2026-07 začíná platit (vše s `api_verze: 2026-07` v archivu) |

## 📂 Jak je Editions pokrytá v našem archivu

Tento hub je vstupní bod. Pokrytí Editions Spring '26 v archivu sestává ze tří vrstev:

1. **10 theme overview článků** — detailní rozbor každého z 10 témat (viz grid pod článkem)
2. **36 standalone deep-dive článků** pro klíčové položky (Campaign Autopilot, Hydrogen rebuild, UCP, POS v11, Catalog API atd.) — všechny jsou inline propojené v sekcích výše
3. **148 cross-referenced changelog článků** — všechny předchozí změny, které Editions agreguje do narativu (viz auto-generovaný seznam pod theme grid)

Celkem **195 propojených článků** v rámci `editions_release: spring-2026`.
