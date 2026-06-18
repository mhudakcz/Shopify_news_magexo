---
date: 2026-06-17
title: "Shopify Inbox AI sales associate — recommendations pro Shop sign-in zákazníky"
title_en: "Shopify Inbox AI sales associate — recommendations for Shop sign-in customers"
slug: shopify-inbox-ai-sales-associate
zdroj: https://www.shopify.com/inbox
shrinuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shopify Inbox je free app dostupná každému merchantovi — zvýšení konverze z chatu je relevantní pro e-commerce klienty s vyšší průměrnou hodnotou objednávky."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-online", "sign-in-shop-lead-forms", "editions-spring-2026-shop-app"]
editions_release: spring-2026
kontext:
  background: |
    Shopify Inbox je bezplatná chat aplikace integrovaná přímo do Shopify adminu, která umožňuje merchantům komunikovat se zákazníky v reálném čase na jejich online storu. Historicky šlo o nástroj primárně pro zákaznický support — odpovědi na dotazy o produktech, stav objednávky, reklamace. Shopify opakovaně zdůrazňuje, že 70 % konverzací v Inboxu probíhá se zákazníky, kteří jsou v procesu nákupního rozhodování, nikoli jen v post-purchase fázi.

    Spring '26 Editions přináší do Inboxu AI vrstvu označenou jako „AI sales associate". Jde o kvalitativní posun od reaktivního support kanálu k proaktivnímu prodejnímu asistentovi. Systém využívá identitu zákazníka přihlášeného přes Shop (Shopify's consumer SSO) — zná nákupní historii, preference a chování daného shopper — a na základě těchto dat generuje personalizované product recommendations přímo v průběhu chat konverzace. AI tak funguje jako zkušený prodavač, který ví, co zákazník dříve koupil, a může smysluplně navrhovat doplňky nebo alternativy.

    Tato funkce spadá do širší strategie Shopify propojovat Shop identitu zákazníka napříč celým merchant ekosystémem. Shop sign-in je součástí stejné sady jako 365-day customer sessions, refreshed customer accounts a Sign in with Shop na lead capture formulářích — všechny sdílejí jeden záměr: udržet zákazníka identifikovaného co nejdříve v session a utilizovat tuto identitu pro personalizaci. AI sales associate v Inboxu je přímou konverzní aplikací tohoto principu.

    Praktický dopad se projevuje zejména u B2C merchantů s opakujícími se zákazníky nebo s širším katalogem, kde je cross-sell a upsell relevantní. Chat jako kanál dříve vykazoval nízký ROI (obchodníci museli manuálně odpovídat), nyní AI přebírá velkou část práce a chat se stává automatizovanou prodejní linkou. Instalace Inbox je zdarma, bez dodatečných poplatků nad rámec Shopify tarifu.
  zdroje:
    - title: "Shopify Inbox — Turn browsers into buyers using the power of chat"
      url: "https://www.shopify.com/inbox"
    - title: "Shopify Editions Spring '26: Online — Storefront, customer accounts, B2B, Collective"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Inbox dostává AI sales associate, který pro zákazníky přihlášené přes Shop generuje personalizované product recommendations v reálném čase přímo v chatu — chat se mění z podpory na aktivní prodejní kanál."
tagy: [editions, inbox, ai, conversion, recommendations]
zdroj_kanal: editions
---

## Co se mění

Shopify Inbox přidává AI vrstvu označenou jako **AI sales associate**. Klíčová změna oproti dosavadnímu stavu: pro zákazníky identifikované přes **Shop sign-in** (Shopify SSO) AI dynamicky generuje personalizované product recommendations přímo v průběhu chat konverzace.

Dosud Inbox pracoval s nástroji jako jsou cart insights (co zákazník přidal do košíku), Shopify Magic FAQ a suggested replies. Všechny tyto funkce byly reaktivní — odpovídaly na to, co zákazník napsal, nebo mu nabídly obecné odpovědi. AI sales associate je první funkce, která aktivně navrhuje produkty na základě **profilu konkrétního zákazníka** (nákupní historie, preference, chování v Shop ekosystému), bez nutnosti, aby zákazník explicitně o produkty žádal.

Technický základ: funkce pracuje s identitou zákazníka přihlášeného přes Shop — ten samý mechanismus, který pohání Shop Pay prefill a personalizované doporučení v Shop app. Merchant nemusí nic konfigurovat nad rámec instalace Inbox aplikace; AI recommendations se aktivují automaticky pro přihlášené zákazníky.

Shopify Inbox je a zůstává **bezplatná aplikace** dostupná všem merchantům bez ohledu na plán.

## Časová osa

- **2026-06-17** — Editions Spring '26 announce; funkce dostupná (nebo ve fázi rollout pro eligible stores)

## Dopad pro nás

**Pro vývojáře:**
Shopify Inbox AI sales associate je plně managed Shopify funkce bez veřejného API ani konfiguračních hooks na straně developera. Merchant nainstaluje Inbox app a funkce pracuje automaticky — pro nás zde není žádný integration work ani custom development. Pokud by klient provozoval headless storefront a chtěl Inbox integrovat, standardním způsobem je Inbox chat widget (JavaScript embed), který se chová stejně jako na Liquid storefrontech. AI recommendations jsou součástí widgetu transparentně.

**Pro PM / PO:**
Inbox AI sales associate je přímočará příležitost ke konverzní optimalizaci pro klienty s e-commerce storefront — zejména pro obchody s opakujícími se zákazníky (fashion, kosmetika, spotřební zboží) a širším katalogem, kde cross-sell dává smysl. Argument pro klienta: 70 % Inbox konverzací probíhá se zákazníky v nákupním rozhodování, AI teď aktivně pomáhá toto rozhodnutí uzavřít. Instalace je zdarma. Doporučujeme prověřit, zda klienti Inbox aktivně používají nebo ho mají deinstalovaný — pokud ne, je to low-effort win.

## Použití v Integrátoru

Inbox je standalone Shopify app bez API surface relevantního pro integrátor; relevance spočívá v doporučení merchantovi, ne v technické integraci.

## Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
