---
date: 2026-08-26
title: "Události: čtyři nové topics pro webhook subscription"
title_en: "Four additional topics are now available for Events"
slug: events-four-additional-topics
zdroj: https://shopify.dev/changelog/four-additional-topics-are-now-available-for-events
shrnuto_dne: 2026-08-28
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Synchronizace custom dat (metaobjekty, definice metafieldů) a skladových přesunů dnes typicky běží na pollingu nebo filtrování plných webhook payloadů; přímý event na tyto resource typy by tuto logiku zjednodušil."
dotcene_klienty: []
souvisejici: [metafield-triggers-additional-webhook-topics, next-generation-events-field-level-webhooks, next-generation-events-preview]
tldr: "Events nyní podporují čtyři další topics – Metaobject, MetafieldDefinition, MetaobjectDefinition a InventoryTransfer – takže aplikace mohou reagovat na změny custom dat a skladových přesunů bez pollingu nebo dodatečných API dotazů."
tagy: [events, webhooks, subscriptions, topics, "admin-graphql-api"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Events (dříve komunikované jako Next Generation Events) je novější vrstva Shopify webhook infrastruktury, která místo fixního schématu klasických webhooků umožňuje deklarativně definovat, na co přesně se aplikace přihlašuje – konkrétní pole, vlastní GraphQL payload i podmínky doručení. Subscription se zapisuje do `shopify.app.toml`, takže je verzovatelná a auditovatelná spolu se zdrojovým kódem aplikace. Systém postupně rozšiřuje pokrytí topics od původního Product a Customer přes Order, Collection, InventoryItem a další, přidávané v předchozích aktualizacích.

    Tato aktualizace přidává čtyři další topics: Metaobject, MetafieldDefinition, MetaobjectDefinition a InventoryTransfer. Aplikace tak mohou reagovat přímo na změny custom obsahu (metaobjekty), na změny v definicích custom dat (kdy vznikne nebo se upraví metafield/metaobject definice) a na pohyby zásob mezi lokacemi. Stejně jako u dříve zavedených metafield triggerů lze i zde cílit na konkrétní pole – dokumentace uvádí příklad subscription na změnu pole `title` u Metaobject resourců typu „books", kdy je doručen payload obsahující jen relevantní změněné pole, nikoli celý objekt.

    Prakticky to rozšiřuje use-case Events i na integrace, které spravují vlastní datové modely v metaobjektech (např. redakční obsah, custom katalogové struktury) nebo sledují stav definic metafieldů kvůli validaci a mapování schémat, a na skladové systémy sledující přesuny zásob mezi lokacemi. Dosud musely tyto změny zjišťovat pollingem nebo přes klasické webhooky s plným payloadem. Events zůstávají v `unstable` API verzi jako součást developer preview; pro topics, které Events zatím nepokrývají, Shopify i nadále doporučuje standardní webhooky.
  zdroje:
    - title: "Shopify: Four additional topics are now available for Events"
      url: "https://shopify.dev/changelog/four-additional-topics-are-now-available-for-events"
    - title: "Shopify: Metafield triggers and additional topics are now available for Events"
      url: "https://shopify.dev/changelog/metafield-triggers-and-additional-topics-are-now-available-for-events"
    - title: "Events – developer dokumentace"
      url: "https://shopify.dev/docs/apps/build/events"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Events rozšiřují nabídku podporovaných topics o čtyři nové:

- **Metaobject** – reakce na změny custom obsahu definovaného přes metaobjekty, včetně field-level triggerů (např. jen na změnu pole `title` u konkrétního typu metaobjektu).
- **MetafieldDefinition** a **MetaobjectDefinition** – sledování změn v samotných definicích custom dat, tedy kdy vznikne, upraví se nebo zanikne schéma metafieldu či metaobjektu.
- **InventoryTransfer** – events na skladové přesuny zásob mezi lokacemi.

Mechanika je stejná jako u ostatních Events topics: subscription se definuje v `shopify.app.toml`, lze cílit na konkrétní pole a doručený payload obsahuje jen relevantní změněná data místo celého resource. Events zůstávají v `unstable` API verzi jako developer preview.

## Časová osa

- **2026-05-22** – Next Generation Events spuštěny v developer preview
- **2026-06-17** – Editions Spring '26 povyšuje NGE na featured platform capability
- **2026-07-21** – přidány metafield triggery a šest nových topics (Order, Collection, InventoryItem, InventoryShipment, Location a další)
- **2026-08-26** – přidány čtyři další topics: Metaobject, MetafieldDefinition, MetaobjectDefinition, InventoryTransfer
- *(bez určení)* – GA release s plným pokrytím topics zatím neohlášen; Events zůstávají na `unstable` API verzi

## Dopad pro nás

**Pro vývojáře:** Rozšíření pokrytí na Metaobject a definice metafieldů/metaobjektů dává smysl pro aplikace, které spravují vlastní datové modely přímo v Shopify (custom katalogové struktury, redakční obsah) a dnes musí změny zjišťovat pollingem nebo GraphQL dotazy po cronu. InventoryTransfer topic zase doplňuje pokrytí skladových workflow vedle již dostupných InventoryItem a InventoryShipment. Stále platí, že jde o `unstable` API verzi – vhodné pro evaluaci a přípravu migrace, ne pro okamžité produkční nasazení bez zvážení rizika breaking changes.

**Pro PM / PO:** Relevantní pro klienty, kteří v Shopify spravují custom datové struktury přes metaobjekty (např. rozšířený obsah produktů, redakční sekce) nebo řeší časté přesuny zásob mezi více lokacemi. Nižší priorita než předchozí aktualizace Events – jde o rozšíření pokrytí topics, ne o novou funkcionalitu. Vhodné sledovat souhrnně s vývojem celého Events systému směrem ke GA.

## Použití v Integrátoru

Možná – pokud bychom u některého klienta spravovali custom data přes metaobjekty nebo řešili synchronizaci skladových přesunů, tyto nové topics by umožnily nahradit polling přímým eventem. Zatím jde o `unstable` verzi, takže spíš do sledování než k okamžitému nasazení.
