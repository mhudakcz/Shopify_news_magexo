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
