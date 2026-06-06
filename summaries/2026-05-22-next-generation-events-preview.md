---
date: 2026-05-22
title: "Next Generation Events v developer preview — field-level control nad webhooks"
title_en: "Next Generation Events now available in developer preview"
slug: next-generation-events-preview
zdroj: https://shopify.dev/changelog/next-generation-events-now-available-in-developer-preview
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-26

kategorie: [nova-api, nova-prilezitost]
api_oblast: webhooks
api_verze: []
nalehavost: stredni
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme webhook subscriptions (pubsub). Next Gen Events nabízí field-level control a definici payloadu — menší a přesnější webhooky, žádné zbytečné re-fetche z webhook handleru."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Shopify webhooky jsou mechanismus pro reaktivní integraci: aplikace se přihlásí k odběru topic (např. `products/update`) a Shopify jim zasílá HTTP POST při každé změně daného objektu. Tradiční webhooky trpí třemi slabinami — fixním schématem payloadu, absencí filtrace na úrovni polí a neurčitostí v tom, která konkrétní změna event spustila.

    Next Generation Events (NGE) jsou nová generace tohoto systému, vyvíjená jako přímá odpověď na tyto limity. Klíčový přínos je trojí: vývojář deklaruje, při změně kterých konkrétních polí se event má odeslat (field-level trigger), definuje vlastní GraphQL query pro obsah payloadu, a každé doručení obsahuje explicitní seznam `fields_changed` s úplnými cestami entit. Konfigurace se provádí v `shopify.app.toml`, čímž je versionovatelná a auditovatelná.

    Praktický dopad spočívá v radikálním snížení objemu webhook traffic u aplikací s vysokou frekvencí změn — například u e-shopů s dynamickým přeceňováním nebo rozsáhlou správou zákazníků. Výsledkem jsou menší payloady, jednodušší handler logika a nižší riziko dosažení rate-limitů v navazujících systémech jako ERP nebo WMS.

    NGE se vztahuje k širšímu trendu deklarativní konfigurace Shopify aplikací (viz `shopify.app.toml` jako zdroj pravdy) a doplňuje existující nástroje jako App Events dashboard, který umožňuje monitorovat výkon a využití webhooků přímo v Dev Dashboardu.
  zdroje:
    - title: "Next Generation Events now available in developer preview — Shopify Changelog"
      url: "https://shopify.dev/changelog/next-generation-events-now-available-in-developer-preview"
    - title: "Shopify Webhooks — developer dokumentace"
      url: "https://shopify.dev/docs/apps/build/webhooks"
    - title: "App Events: usage a performance data v Dev Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-events-dev-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Next Generation Events v developer preview přidávají field-level control nad firing eventů, definici payloadu a triggers. Live jsou topics Product a Customer, subscriptions konfigurovatelné v shopify.app.toml."
tagy: [webhook, events, developer-preview, granular]
---

## Co se mění
**Next Generation Events** (NGE) — nový event/webhook framework v developer preview:
- **Field-level control** — kdy se má event fire (např. „jen když se změní `price` nebo `inventory`", ne na každý update)
- **Payload definition** — kontrola, jaká pole jsou v event payloadu (menší + přesnější)
- **Delivery triggers** — granular kontrola podmínek
- Subscriptions konfigurovatelné v `shopify.app.toml` (nikoli runtime API)

Live topics: **Product** a **Customer**. Další postupně.

## Dopad pro nás
**Pro vývojáře:**
Webhook handler dnes často dostává full payload a musí filtrovat. NGE umožní subscribe jen na konkrétní field changes → méně volání, menší payloady, jednodušší handler logika. Konfigurace deklarativní (toml) = audit-friendly.

**Pro PM / PO:**
Pro klienty s vysokým objemem orderů/customers znamená méně zbytečných webhook hits a tím lepší performance + nižší riziko rate-limit u downstream systémů (ERP / WMS).

## Použití v Integrátoru
**Možná** — máme webhook subscription methods (`createPubSubWebhookSubscription`, `updatePubSubWebhookSubscription`). Až NGE opustí preview, lze refactor na granular subscriptions. Aktuálně preview.
