---
date: 2026-05-11
title: "App Events: usage a performance data v Dev Dashboardu"
title_en: "App Events: See app usage and performance data in your Dev Dashboard"
slug: app-events-dev-dashboard
zdroj: https://shopify.dev/changelog/app-events-see-app-usage-and-performance-data-in-your-dev-dashboard
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-19

kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "App Events API umožňuje custom event tracking pro naše custom integrace. Pokud bychom chtěli measure usage / billing klientových operací, je to nová možnost."
dotcene_klienty: []
souvisejici: [shopify-app-pricing-usage-subscriptions]

kontext:
  background: |
    App Events API je REST rozhraní Shopify, které umožňuje vývojářům aplikací odesílat vlastní pojmenované události na centrální endpoint `https://api.shopify.com/app/unstable/events`. Každý požadavek přenáší jeden event identifikovaný polem `event_handle` spolu s identifikátorem obchodu, časovým razítkem a unikátním klíčem idempotence. Shopify ukládá přijatá data po dobu 30 dní a zpřístupňuje je v Dev Dashboard Logs.

    Dev Dashboard byl zaveden jako sjednocený nástroj pro vývojáře Shopify aplikací, kde lze sledovat webhooky, volání Admin API a výkon embedded apps. App Events jej rozšiřuje o vlastní aplikační telemetrii — namísto budování samostatné analytické infrastruktury vývojáři přesměrují data přímo do prostředí, které merchant i vývojář již zná. Autentizace probíhá přes OAuth client credentials flow; tokeny jsou platné 60 minut a API je limitováno na 500 požadavků za sekundu na aplikaci.

    Klíčové propojení existuje se systémem Shopify App Pricing (dříve Managed Pricing), kde lze každý `event_handle` namapovat na billing metr nakonfigurovaný v Partner Dashboardu. Tím lze implementovat usage-based fakturaci nativně v ekosystému Shopify bez vlastní platební infrastruktury. Events s hodnotou v poli `attributes.value` se přenášejí do billing pipeline; chyby účtování jsou viditelné výhradně v Dev Dashboard Logs, nikoliv v samotné API odpovědi, která vždy vrací `202 Accepted`.

    Kombinace App Events a App Pricing otevírá cestu k modelům „pay per use" pro Shopify aplikace — vývojáři tak mohou transparentně sledovat i účtovat operace jako zpracování objednávek, synchronizace dat nebo odesílání notifikací přímo přes platformu.
  priklad: |
    POST https://api.shopify.com/app/unstable/events
    Authorization: Bearer <jwt_token>
    Content-Type: application/json

    {
      "shop_id": "gid://shopify/Shop/1234567890",
      "event_handle": "order_processed",
      "timestamp": "2026-05-11T10:00:00Z",
      "idempotency_key": "unique-key-abc123",
      "attributes": { "value": 1 }
    }
  zdroje:
    - title: "App Events: See app usage and performance data in your Dev Dashboard"
      url: "https://shopify.dev/changelog/app-events-see-app-usage-and-performance-data-in-your-dev-dashboard"
    - title: "Shopify Docs: App Events API"
      url: "https://shopify.dev/docs/apps/build/app-events"
    - title: "Shopify App Pricing: usage + subscriptions billing kombinace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/"
    - title: "Admin Web Vitals monitoring přesunut do Dev Dashboard"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/admin-web-vitals-dev-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "App Events API umožňuje posílat události do Shopify single endpointu. Data se zobrazí v Dev Dashboard Logs vedle webhooks a API calls. Events lze převést na usage-based billing přes Shopify App Pricing."
tagy: [app-events, dev-dashboard, billing, usage, monitoring]
---

## Co se mění
**App Events API** umožňuje app developerům posílat **vlastní events** na Shopify single endpoint. Tyto events se zobrazí v **Dev Dashboard Logs** vedle webhooks a API calls — sjednocený view o aktivitě app pro merchant.

Klíčové: events lze **konvertovat na usage-based billing charges** přes nový Shopify App Pricing — měření aktivity → fakturace klientovi.

## Dopad pro nás
**Pro vývojáře:**
Pokud bychom chtěli vidět granular usage data o naší integraci (kolik orders / customers / produktů jsme syncovali za klienta), App Events lze využít. Buď čistě pro monitoring, nebo pro **usage-based billing** (přes Shopify App Pricing).

**Pro PM / PO:**
Pokud někdy budeme nabízet integraci s billing model „pay per X synced records", tahle kombinace App Events + App Pricing dovolí to implementovat nativně přes Shopify.

## Použití v Integrátoru
**Možná** — relevantní hlavně pokud budeme dělat usage-based pricing. Pro stávající flat-fee integrace nemá direct dopad.

## Související
- [Shopify App Pricing — charge for usage/subscriptions](../zmena/shopify-app-pricing-usage-subscriptions/)
