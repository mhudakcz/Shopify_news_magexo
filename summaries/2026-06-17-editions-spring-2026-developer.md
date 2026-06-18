---
date: 2026-06-17
title: "Editions Spring '26: Developer — AI Toolkit, Hydrogen rebuild, Polaris, Functions (53 položek)"
slug: editions-spring-2026-developer
zdroj: https://www.shopify.com/editions/spring2026
shrnuto_dne: 2026-06-17
kategorie: [editions-theme]
api_oblast: other
nalehavost: vysoka
customer_facing: false
pouzivame_v_integratoru: ano
dukaz_integratoru: "Developer téma — Shopify Functions, Metaobjects, Admin/Storefront API, Polaris/Hydrogen. Pokrývá změny relevantní pro naší integraci a klientské extensions/apps. Sledovat Polaris deadline 1.10.2026."
dotcene_klienty: []
souvisejici: ["editions-spring-2026"]
editions_release: spring-2026
tldr: "Developer téma Spring '26 (53 položek): Shopify AI Toolkit propojuje Claude Code, Cursor, Codex a Hermes přímo se Shopify platformou; Hydrogen byl přepsán jako framework-agnostic (funguje s Next.js a libovolným stackem); Polaris migrace musí proběhnout do 1. října 2026 (tvrdý CLI deadline); Functions dostávají metaobject data, billing address a Shop User Metafields; Next Generation Events zavádějí field-level webhooks."
tagy: [editions, developer, ai-toolkit, hydrogen, polaris, functions, api, metaobjects]
zdroj_kanal: editions
---

## O čem tahle Edition téma je

Developer téma Spring '26 je nejrozsáhlejší vývojářská aktualizace Shopify za poslední roky — 53 položek pokrývajících celý stack od CLI a webhooků přes Metaobjects a Functions až po POS extensions a storefront komponenty. Centrální narativ je **AI-first developer experience**: Shopify AI Toolkit umožňuje řídit a programovat obchody přímo z Claude Code, Cursor, Codexu a VS Code přes MCP server s optimalizovaným token usage. Souběžně Shopify přepsal Hydrogen jako stack-agnostic framework (funguje s Next.js nebo jakýmkoliv meta-frameworkem) a otevřel ho agentic-first workflow.

Druhý klíčový příběh je **Polaris deadline 1. října 2026**: Checkout a Customer Account UI extensions postavené na API verzi 2025-07 nebo starší přestanou být deployovatelné přes Shopify CLI. AI Toolkit pro Polaris migraci automatizuje konverzi React kódu na Preact + Polaris web components — jde o nejdůležitější akci, kterou musí mít každý tým s aktivními extensions v Q3 roadmapě.

Ve třetím pásmu jsou rozšíření **Shopify Functions** (metaobject data, Shop User Metafields, billing address a PO number targets), zjednodušení **Metaobject API** (nová `values` property v 2026-07), **Next Generation Events** s field-level webhooks a bezpečnostní vrstva kolem app tokenů a OAuth refresh flow.

## Top 3 highlights v tomto tématu

- **Shopify AI Toolkit ecosystem** — plný toolchain pro AI-asistovaný vývoj nad Shopify. Dev MCP server zpřístupňuje dokumentaci a API schémata všech API verzí v Claude Code, Cursor, Codex i Hermes s optimalizovaným token usage; AI Toolkit pro Polaris migraci automatizuje přepis extensions; AI Toolkit pro checkout extension audit odhaluje performance problémy. Toto není doplněk — je to nový primární interface, přes který Shopify očekává, že budou vývojáři pracovat.

- **All-new Hydrogen na libovolném stacku (preview)** — přepsání Hydrogenu jako framework-agnostic knihovny je architektonicky zásadní. Hydrogen přestává být pevně vázaný na Remix a Shopify Oxygen — místo toho jde o agent-first sadu primitiv, která funguje nad Next.js nebo libovolným meta-frameworkem. Vývojáři, kteří odmítali Hydrogen kvůli vendor-lock-in, mají nyní cestu, jak využít Hydrogen utility s vlastním deploymentem. Aktuálně v preview.

- **Polaris migrace — deadline 1. října 2026** — toto je jediný tvrdý datum v celém Developer tématu. Shopify CLI od 1. října 2026 zablokuje deploy extensions cílených na API verzi 2025-07 nebo starší. Pro Checkout UI extensions a Customer Account UI extensions to znamená povinný přechod na Preact + Polaris web components. AI Toolkit migraci výrazně urychluje, ale manuální dočištění edge cases bude potřeba. Pokud klient má aktivní extensions, **patří to do Q3 sprintu nejpozději v září 2026**.

## Všechny položky (53 celkem)

### AI Toolkit ecosystem (5 položek)

- **Commerce skills pro AI agenty (Claude Code, Codex, Cursor, Hermes)** — Shopify AI Toolkit přináší sadu skills/tools, které umožňují AI agentům řídit Shopify obchod: číst produkty, spravovat orders, nastavovat shipping, triggerovat Flow workflows. Funguje přes MCP protokol nebo jako skills pro podporované agenty. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-ai-toolkit/)

- **Shopify Dev MCP — optimalizovaný token usage** — Dev MCP server byl přepracován tak, aby minimalizoval spotřebu kontextových tokenů při dotazech na dokumentaci a API schémata. Výsledkem jsou kratší a přesnější odpovědi agentů při generování Shopify GraphQL kódu. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-ai-toolkit/)

- **Shopify Dev MCP pro všechny API verze** — Dev MCP server nyní pokrývá dokumentaci a schémata pro všechny aktuálně podporované verze Admin a Storefront API (nikoli jen nejnovější). Vývojáři pracující s legacy API verzemi u klientů mají přístup ke správným typům a polím bez přepínání dokumentace. Live.

- **AI Toolkit pro Polaris migraci (deadline 1. 10. 2026)** — automatizuje konverzi Checkout a Customer Account UI extensions: přepíše React na Preact, nahradí zastaralé komponenty Polaris alternativami a aktualizuje extension API. Migrace přes CLI blokuje deploy extensions na API 2025-07 nebo starší po 1. říjnu 2026. **Kritická akce pro Q3.** Live. [→ detail](/Shopify_news_magexo/zmena/shopify-ai-toolkit-polaris-migration/)

- **AI Toolkit pro optimalizaci checkout extensions** — AI Toolkit audit mode projde existující Checkout UI extension, identifikuje performance bottlenecky (velké bundle size, zbytečné re-rendery, nevhodné patterns) a navrhne konkrétní opravy. Live.

### Hydrogen (1 položka)

- **All-new Hydrogen na libovolném stacku (preview)** — Hydrogen byl přepsán jako framework-agnostic toolkit s agent-first architekturou. Vývojáři mohou používat Hydrogen primitiva (cart, session, i18n, predictive search) s Next.js nebo jiným meta-frameworkem, bez nutnosti Remix nebo Shopify Oxygen. Preview. [→ detail existující Hydrogen update](/Shopify_news_magexo/zmena/hydrogen-april-2026-release/)

### Platform / API (27 položek)

- **More control over events (field-level webhooks)** — Next Generation Events v developer preview umožňují subscribe na změny konkrétních polí (např. jen `price` nebo `inventory`) místo celého resource. Custom GraphQL payload query a `fields_changed` v každém doručení. Konfigurováno deklarativně v `shopify.app.toml`. Live topics: Product, Customer. Preview. [→ detail](/Shopify_news_magexo/zmena/next-generation-events-preview/)

- **GraphQL + bulk operations z CLI** — Shopify CLI nyní podporuje spouštění GraphQL queries a bulk operations přímo z příkazové řádky bez nutnosti vlastního scriptu. Urychluje ad-hoc správu dat a debugging. Live.

- **App Events API** — API pro sledování performance a využití webhooků přímo v Dev Dashboardu. Vývojáři vidí delivery rates, chyby a latenci pro jednotlivé event subscriptions. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/)

- **Lokalizovaný Dev Dashboard** — Developer Dashboard je nyní dostupný v lokalizovaných jazykových verzích, čímž se zpřístupňuje vývojářům, kteří nepracují primárně v angličtině. Live.

- **Všechny partner stores v Dev Dashboardu** — Dev Dashboard zobrazuje všechny partner a development stores na jednom místě bez nutnosti přepínání mezi organizacemi. Live.

- **Přepracovaná Polaris dokumentace** — docs pro Polaris design system byly kompletně reorganizovány: nová struktura s komponentní referencí, migration guides a příklady pro Checkout, Admin a POS extensions. Live.

- **Metafields v ShopifyQL** — ShopifyQL analytický jazyk nově podporuje filtrování a agregaci přes metafields. Obchodníci a vývojáři mohou sestavovat reporty zahrnující custom data (produktová specifikace, custom customer segmentace). Live.

- **Auto-upgrades + semver v Shopify CLI** — Shopify CLI 4.0 zavádí semantic versioning a automatické self-upgrady. Odstraněn deprecated flag `--force` u `app deploy` (nahrazen `--allow-updates` / `--allow-deletes`). Kritické pro CI/CD pipeline. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-cli-40-semver-autoupdates/)

- **Bezpečnější app deploymenty (CI/CD)** — App automation tokens jsou app-scoped přihlašovací tokeny pro CI/CD pipeline nahrazující organization-wide CLI tokeny. Snižují blast radius při leaku tokenu. Live.

- **Streamlined Metafields a Metaobjects API (values property)** — nová `values` property na metaobjects v API 2026-07 umožňuje číst a zapisovat data jako přímý JSON objekt bez manuální serializace/deserializace. Stávající `field`/`fields` zůstávají. Live. [→ detail](/Shopify_news_magexo/zmena/streamlined-metaobject-api/)

- **No backend required pro lightweight apps (App Home jako UI extension)** — App Home (úvodní stránka embedded app) lze postavit jako UI extension místo iframe. Žádný vlastní server, native Polaris styling, bundle limit 64 KB. Od API 2026-07. Live. [→ detail](/Shopify_news_magexo/zmena/build-app-home-ui-extension/)

- **Konfigurace slev s Admin UI extensions** — discount configuration screen lze nyní rozšiřovat Admin UI extensions — vývojáři přidávají vlastní pole a logiku přímo do discount-tvorby v admin bez nutnosti custom stránky. Live.

- **Accelerated checkout support pro add-ons** — checkout extensions s add-on logikou (upsell, extended warranty, gifting) lze nyní označit jako kompatibilní s accelerated checkout flow (Shop Pay, Apple Pay). Live.

- **Declarative metaobjects bez scopů** — app-owned metaobjects s `$app:` prefixem konfigurované v `shopify.app.toml` nevyžadují explicitní OAuth scopy `read_metaobjects`/`write_metaobjects`. Méně friction při instalaci. Live. [→ detail](/Shopify_news_magexo/zmena/app-owned-metaobjects-without-scopes/)

- **Metaobject data v checkout functions** — Shopify Functions mohou od API 2026-07 číst app-owned metaobjects přímo v runtime. Umožňuje komplexní checkout logiku řízenou konfigurací uloženou v metaobjects. Live. [→ detail](/Shopify_news_magexo/zmena/shop-user-metafields-functions/)

- **Billing address a PO number v Shopify Functions** — Cart and Checkout Validation Functions nyní mohou cílit error messages na `billing_address` a `po_number`. Klíčové pro B2B validaci PO čísel a fakturační adresy na serverové vrstvě bez UI extensions. Live. [→ detail](/Shopify_news_magexo/zmena/cart-checkout-validation-billing-po/)

- **Role-based access pro partners** — Partner Dashboard umožňuje přiřazovat granulární role členům týmu (developer, billing, analytics) místo binárního owner/member modelu. Live.

- **Vylepšené webhook monitoring** — Dev Dashboard zobrazuje delivery success rate, latenci a historii chyb pro každou webhook subscription. Urychluje debugging doručovacích problémů. Live.

- **App automation tokens** — viz bezpečnější app deploymenty výše; app-scoped CI/CD tokeny nahrazující organization tokens. Live.

- **Admin performance monitoring** — Dev Dashboard přidává výkonnostní metriky pro embedded apps: čas načítání App Bridge, render časy extensions. Pomáhá identifikovat performance problémy v produkci. Live.

- **Parallel reads pro bulk queries (4× rychleji)** — Admin API bulk operations nově provádí čtení paralelně, což u komplexních bulk queries přináší až 4× rychlejší výsledky. Kritické pro synchronizační skripty a data migrace. Live.

- **Jednodušší billing se Shopify App Pricing** — Shopify App Pricing (dříve Managed Pricing) podporuje kombinaci subscription + usage-based charges konfigurovanou z Partner Dashboardu. Nová real-time billing data API. Live. [→ detail](/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/)

- **Shop Minis v dalších částech Shop app** — Shop Minis (embedded mini-apps v Shop app) jsou nově dostupné v home feed, navigaci a product pages — nejen v obchodním profilu. Nové extension targets a Intents API. Live.

- **Refreshed API pro branding checkoutu a accounts** — nová mutace `checkoutAndAccountsConfigurationUpdate` nahrazuje deprecated `checkoutBrandingUpsert`. Unified branding config pro checkout, customer accounts i sign-in z jednoho API. Plus only. Live. [→ detail](/Shopify_news_magexo/zmena/checkout-accounts-configuration-api/)

- **WhatsApp marketing consent (Customer Account + Admin APIs)** — Customer Account a Admin API umožňují programově spravovat WhatsApp marketing consent zákazníků. Relevantní pro klienty s WhatsApp marketing integrací. Live.

- **Access to sign-in with Shop** — Apps mohou nyní žádat o přístup k Shop sign-in flow, čímž přinášejí zákazníkům přihlášení přes Shop účet mimo nativní Shopify kontext. Live.

- **Prerequisites v product discount functions** — Discount Functions API 2026-04 podporují prerekvizity pro Buy X, Get Y slevy. Podmíněná sleva přímo v WASM function bez obcházení. Live. [→ detail](/Shopify_news_magexo/zmena/prerequisites-product-discount-functions/)

- **Bulk editing extensions pro slevy** — Admin UI extensions mohou rozšiřovat bulk discount editing workflow — custom pole a validace při hromadné editaci slev. Live.

- **Cash management extensions** — POS register-centric API pro cash management: extensions mohou číst stav pokladny, zaznamenávat cash movements a navazovat na audit trail. Live.

- **SKU sharing jako výchozí chování** — SKU jsou nyní sdílené napříč lokacemi jako výchozí nastavení (bez duplikace). Apps pracující s inventory by měly ověřit kompatibilitu. Live.

- **Multi-channel support pro sales channel apps** — Sales channel apps mohou nyní spravovat listingy a inventory pro více kanálů z jedné app instance. Zjednodušuje stavbu multi-channel integrace. Live.

- **Ship and pick up v jedné objednávce (test apps)** — Feature preview pro Plus/Enterprise: zákazník si v jednom checkoutu vybere ship nebo pickup per položku. Výsledná objednávka obsahuje multiple fulfillment orders s různými delivery methods — apps musí ošetřit. Preview. [→ detail](/Shopify_news_magexo/zmena/ship-and-pickup-one-order-preview/)

- **Silnější app security (expiring tokens, OAuth refresh)** — Offline access tokens pro public apps budou mít expirace + OAuth 2.0 refresh flow (GA deadline 2027-01-01). Token rotation snižuje riziko zneužití dlouhodobých tokenů. Live. [→ detail](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/)

### POS Extensions (4 položky)

- **POS UI extensions activation status** — Extension může programově zjistit svůj activation status v POS runtime. Umožňuje podmíněné chování based on lifecycle stavu. Live.

- **POS UI extensions bez sítě** — Extensions s `runs_offline = true` v `extension.toml` zůstanou funkční při výpadku sítě. Vhodné pro pop-up prodeje a nestabilní prostředí. Live. [→ detail](/Shopify_news_magexo/zmena/pos-ui-extensions-offline/)

- **Lokalizované POS UI extensions** — POS extensions mají přístup k locale API pro přizpůsobení UI jazyka a formátů podle nastavení POS terminálů. Live.

- **Camera access pro POS UI extensions** — Extensions mohou žádat o přístup ke kameře zařízení. Odemyká scénáře jako QR scanning, barcode čtení nebo foto custom produktů přímo z extension. Live.

### Storefront komponenty (5 položek)

- **Inventory API upgrady (idempotency)** — Inventory API mutace nyní podporují idempotency klíče, což eliminuje duplicitní adjustmenty při retry logice v aplikacích. Live. [→ detail](/Shopify_news_magexo/zmena/inventory-adjustment-full-change-tracking/)

- **Subscription payment methods nativně nahrazeny** — Subscription contracts mohou být vytvářeny i bez `paymentMethodId` (volitelné od API 2026-04), payment method lze doplnit later. Zjednodušuje onboarding subscription zákazníků. Live. [→ detail](/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/)

- **Cart metafields carry over to orders (cartToOrderCopyable)** — Cart metafields označené `cartToOrderCopyable: true` jsou automaticky zkopírovány na výslednou objednávku. Eliminuje nutnost vlastního middleware pro přenos custom dat z košíku. Live.

- **Pre-populate email na sign-in (login_hint)** — Customer Account authentication flow podporuje `login_hint` parametr pro předvyplnění emailové adresy. Zlepšuje UX v embedded přihlašovacích formulářích. Live.

- **Customer account web component** — Shopify-spravovaná webová komponenta pro sign-in flow na custom storefrontech a headless implementacích. Žádný vlastní auth kód — komponenta řeší session management. Live.

- **Standard storefront events and actions** — Shopify Web Pixel API rozšiřuje sadu standardních events (page view, product viewed, cart updated) o standardizované storefront actions — konzistentní event taxonomy napříč Shopify i custom storefronty. Live.

### Apps a App Store (6 položek)

- **Streamlined app store submission** — Zjednodušený proces review submission: nová struktura formuláře, lepší feedback od review týmu a rychlejší turnaround pro standardní app typy. Live. [→ detail](/Shopify_news_magexo/zmena/app-quality-checks-partner-dashboard/)

- **Built for Shopify category requirement** — Apps v kategorii returns a subscriptions musí pro Built for Shopify certifikaci využívat Customer Account API. Nastavuje standard kvality pro tyto kategorie. Live.

- **Intents pro Shop Minis** — Shop Minis API přidává Intents — deklarativní akce, které Shop Minis mohou vyvolat (open product, add to cart, open URL). Zjednodušuje stavbu interaktivních mini-apps. Live.

- **Color palettes pro témata** — Témata mohou definovat pojmenované color palettes v `settings_schema.json`. Merchanté vybírají paletu místo jednotlivých barev — konzistentnější brand customization s méně konfigurací. Live.

- **New Collections API (preview)** — Nové Collections API přichází s composable source groups — kolekce mohou mít více datových zdrojů (produkty, metaobjects, external data). Preview, zavede se jako náhrada za stávající Collection Query syntax. Preview.

- **Shop User Metafields v Functions** — Functions od API 2026-07 čtou metafields buyer identity (Shop User) — umožňuje personalizovanou checkout logiku based na loyalty tier, B2B statusu nebo custom limits zákazníka. Live. [→ detail](/Shopify_news_magexo/zmena/shop-user-metafields-functions/)

## Co tu ještě nemáme

Následující položky nemají zatím samostatný archivní článek — kandidáti na standalone coverage:

- **All-new Hydrogen na libovolném stacku** — architektonická změna frameworku si zaslouží dedikovaný deep-dive: co přesně agent-first znamená, jak vypadá Next.js integrace, migration path pro stávající Remix/Oxygen projekty. Existující článek (`hydrogen-april-2026-release`) pokrývá pouze 2026.4 release, ne nový stack-agnostic přepis.

- **Commerce skills pro AI agenty (kompletní coverage)** — existující `shopify-ai-toolkit` artikel pokrývá toolkit obecně, ale chybí dedikovaný článek pro konkrétní commerce skills (co přesně agent zvládne, limity, jak se konfigurují v Claude Code vs. Cursor).

- **Shopify Dev MCP — optimalizovaný token usage a multi-API version** — technický detail token optimalizace a multi-version support by byl užitečný pro tým při rozhodování o adopci.

- **New Collections API (preview)** — composable source groups jsou architektonicky zajímavá změna; chybí detailní popis datového modelu a migration path ze stávajícího Collection Query.

- **Cart metafields cartToOrderCopyable** — praktická změna pro přenos custom dat z košíku na order; hodí se vlastní mini-článek s ukázkou use case a GraphQL mutation.

- **App automation tokens (CI/CD)** — security model pro CI/CD tokeny je důležitý pro vývojáře; chybí krok za krokem migration guide z org-wide CLI tokenů.

- **Standard storefront events and actions** — nová event taxonomy je podstatná pro analytics integrátory; chybí přehled nových event typů a aktualizace pixel trackerů.

- **Customer account web component** — zero-dependency sign-in komponenta pro headless storefronty; chybí implementační příklad.

- **Role-based access pro partners** — granulární role v Partner Dashboardu mají dopad na jak organizujeme přístup pro klientské týmy; stojí za stručný popis.

## ⬅️ Zpět na hub

[Editions Spring '26 — hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
