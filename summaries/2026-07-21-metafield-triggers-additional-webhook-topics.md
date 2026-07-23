---
date: 2026-07-21
title: "Nové webhook topics + metafield triggers v Events/webhooks"
title_en: "Metafield triggers and additional topics are now available for Events"
slug: metafield-triggers-additional-webhook-topics
zdroj: https://shopify.dev/changelog/metafield-triggers-and-additional-topics-are-now-available-for-events
shrnuto_dne: 2026-07-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše integrace řeší synchronizaci custom dat (metafieldy produktů, objednávek) s externími systémy typicky pollingem nebo zpracováním plných webhook payloadů; přímý trigger na konkrétní metafield by tuto logiku výrazně zjednodušil."
dotcene_klienty: []
souvisejici: [next-generation-events-field-level-webhooks, next-generation-events-preview, metafields-definition-required-customer-account-api]
tldr: "Events (Next Generation Events) nyní umí subscribovat přímo na změny konkrétních metafieldů a přibylo šest nových topics (Order, Collection, InventoryItem, InventoryShipment, Location a další), takže reaktivní zpracování custom dat se obejde bez pollingu."
tagy: [webhooks, events, metafields, triggers, "admin-graphql-api"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Events (dříve komunikované jako Next Generation Events) je novější vrstva Shopify webhook infrastruktury, která oproti klasickým webhookům umožňuje deklarativně definovat, na co přesně se aplikace přihlašuje — konkrétní pole, vlastní GraphQL payload i podmínky doručení. Konfigurace se zapisuje do `shopify.app.toml`, takže je verzovatelná a auditovatelná spolu se zdrojovým kódem aplikace.

    Tato aktualizace přidává dvě věci najednou. Za prvé metafield triggery: aplikace se může přihlásit na konkrétní kombinaci namespace a key u vybraného metafieldu (podporovány jsou custom i `$app` metafieldy, s vynucením standardních access práv) a topic se spustí jen tehdy, když se změní právě sledovaná hodnota — ne při jakékoli jiné úpravě resource. Za druhé přibylo šest nových topics (Order, Collection, InventoryItem, InventoryShipment, Location a další), na které dosud šlo reagovat jen přes klasické webhooky nebo opakované dotazování. Metafield subscriptions jsou navíc dostupné napříč Product, Order, Customer, Collection a Location.

    Prakticky to znamená, že integrace s ERP, PIM nebo skladovými systémy, které dnes ukládají vlastní stav do metafieldů a musí zjišťovat změny buď pollingem, nebo filtrováním plných webhook payloadů v kódu, mohou tuto logiku přesunout do konfigurace. Payload doručené události navíc obsahuje pole `fields_changed`, které přesně identifikuje, který trigger se spustil — handler tak nemusí sám dohledávat, co přesně se změnilo. Events zůstávají v `unstable` API verzi jako součást developer preview; pro topics, které Events zatím nepokrývají, Shopify doporučuje standardní webhooky.
  zdroje:
    - title: "Shopify: Metafield triggers and additional topics are now available for Events"
      url: "https://shopify.dev/changelog/metafield-triggers-and-additional-topics-are-now-available-for-events"
    - title: "More control over events — Next Generation Events s field-level triggery"
      url: "https://shopify.dev/docs/apps/build/events"
    - title: "Next Generation Events now available in developer preview"
      url: "https://shopify.dev/changelog/next-generation-events-now-available-in-developer-preview"
  generated_at: 2026-07-23T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Events (nástupce klasických Shopify webhooků, dosud v `unstable` API verzi jako developer preview) rozšiřuje svou nabídku o dvě propojené novinky:

- **Metafield triggery** — subscription lze nakonfigurovat tak, aby se spustila jen při změně konkrétního metafieldu (přesná kombinace namespace + key), místo aby aplikace dostávala oznámení o jakékoli změně celého resource. Funguje jak pro custom, tak pro `$app` metafieldy, s dodržením existujících access práv. Bez explicitně definovaného triggeru dostávají aplikace metafield eventy ve výchozím (širším) chování.
- **Šest nových topics** — Order, Collection, InventoryItem, InventoryShipment a Location doplňují dosud podporované Product a Customer. Metafield subscriptions jsou dostupné napříč Product, Order, Customer, Collection a Location.

Technicky se subscription definuje v `shopify.app.toml` pomocí `query_variables`, takže se z Admin API stáhnou jen skutečně potřebná data. Doručený payload obsahuje pole `fields_changed` s přesným výčtem toho, který trigger změnu vyvolal — handler tedy nemusí sám rekonstruovat, co se stalo.

## Časová osa

- **2026-05-22** — Next Generation Events spuštěny v developer preview
- **2026-06-17** — Editions Spring '26 povyšuje NGE na featured platform capability (field-level triggery, custom GraphQL payload, filter expressions)
- **2026-07-21** — přidány metafield triggery a šest nových topics
- *(bez určení)* — GA release s plným pokrytím topics zatím neohlášen; Events zůstávají na `unstable` API verzi

## Dopad pro nás

**Pro vývojáře:** Pokud webhook handler dnes přijímá plný payload resource a teprve v kódu porovnává, zda se změnil konkrétní metafield (typický pattern u synchronizace s ERP/PIM přes custom pole), lze tuto logiku přesunout do `shopify.app.toml` a nechat filtrování na Shopify straně. Menší payloady, méně zbytečných invokací handleru, přesnější signalizace přes `fields_changed`. Nevýhoda zůstává stejná jako u celého NGE — `unstable` API verze, tedy zatím ne pro produkční nasazení bez zvážení rizika breaking changes.

**Pro PM / PO:** Relevantní zejména pro klienty, kteří ukládají provozní stav (sklad, ceníkové zdroje, stavy z externích systémů) do metafieldů a chtějí na jejich změnu reagovat v reálném čase bez pollingu. Nové topics (zejména Order, InventoryItem, InventoryShipment) rozšiřují use-case i mimo Product/Customer, které byly dosud jediné podporované. Stále jde o developer preview — vhodné sledovat, ne nasazovat do produkce bez plánu na migraci po GA.

## Použití v Integrátoru

Možná — pokud naše integrace při synchronizaci s externími systémy dnes spoléhá na polling metafieldů nebo na filtrování plných webhook payloadů v kódu, metafield triggery by tuto část logiky zjednodušily. Vhodné sledovat, kdy Events opustí `unstable` verzi.
