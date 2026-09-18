---
date: 2026-09-16
title: "Events: změny payloadů a subscription configuration (Action Required)"
title_en: "Updates to Events payloads and subscription configuration"
slug: events-payloads-subscription-config-updates
zdroj: https://shopify.dev/changelog/updates-to-events-payloads-and-subscription-configuration
shrnuto_dne: 2026-09-18
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud u některého klienta používáme Events (NGE) subscriptions, je nutné zkontrolovat parsing fields_changed, syntax parent triggerů a závislost na rušených headerech."
dotcene_klienty: []
souvisejici: [next-generation-events-field-level-webhooks, next-generation-events-preview, events-four-additional-topics]
tldr: "Shopify mění strukturu Events payloadů a pravidla pro subscription konfiguraci – klasické webhooky nejsou dotčené, ale aplikace používající Events (NGE) musí upravit parsing i shopify.app.toml."
tagy: [events, webhooks, payloads, subscriptions, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Events (dříve komunikované jako Next Generation Events) jsou novější vrstva Shopify webhook infrastruktury, která místo fixního schématu klasických webhooků umožňuje deklarativně definovat field-level triggery, vlastní GraphQL payload a filtrovací podmínky přímo v `shopify.app.toml`. Systém je od května 2026 v developer preview na `unstable` API verzi a postupně rozšiřuje pokrytí topics (Product, Customer, Order, Collection, InventoryItem, Metaobject a další).

    Tato aktualizace mění čtyři konkrétní věci v chování Events. Pole `fields_changed` se mění z plochého pole na objekt se třemi poli – `added`, `updated` a `removed` – takže aplikace pozná, zda šlo o přidání, změnu nebo odebrání resource/vztahu, bez nutnosti dalšího dotazu. Syntax parent triggerů nově vyžaduje explicitní koncový wildcard `.*` (např. `product.variants` se mění na `product.variants.*`); leaf-level triggery jako `product.variants.price` zůstávají beze změny. Dále se ruší dvě doručovací hlavičky, `shopify-event-id` a `shopify-resource-id` – kód, který na nich závisí, přestane fungovat. Konečně subscription s akcí `update` nově musí obsahovat alespoň jedno trigger pole. Klasické webhook subscriptions (Webhook API) tyto změny nezasahují.

    Shopify pro migraci odkazuje na komunitní forum post s konkrétními kroky a příklady. Vzhledem k tomu, že Events zůstávají v `unstable` API verzi, jde o typický vzorec vývoje této funkce v preview – dřívější aktualizace přidávaly nové topics a triggery, tahle mění tvar payloadu a validaci konfigurace ještě před GA vydáním.
  zdroje:
    - title: "Shopify: Updates to Events payloads and subscription configuration"
      url: "https://shopify.dev/changelog/updates-to-events-payloads-and-subscription-configuration"
    - title: "Next Generation Events v developer preview — field-level control nad webhooks"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/next-generation-events-preview/"
    - title: "Události: čtyři nové topics pro webhook subscription"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/events-four-additional-topics/"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify upravuje tvar Events payloadů a pravidla pro subscription konfiguraci. Jde o čtyři samostatné změny:

- **`fields_changed` mění strukturu** – z plochého pole se stává objekt se třemi poli: `added`, `updated`, `removed`. Aplikace tak přímo z payloadu pozná, zda se resource/vztah přidal, upravil nebo odebral, bez dalšího API dotazu.
- **Parent trigger syntax vyžaduje wildcard** – trigger na celou parent cestu (např. `product.variants`) musí nově končit explicitním `.*`, tedy `product.variants.*`. Leaf-level triggery na konkrétní pole (`product.variants.price`) se nemění.
- **Ruší se dvě delivery hlavičky** – `shopify-event-id` a `shopify-resource-id` se přestávají posílat. Kód, který na těchto hlavičkách závisí, je potřeba upravit.
- **`update` subscription vyžaduje trigger** – subscription s akcí `update` musí mít definované alespoň jedno trigger pole; bez něj registrace přestane platit.

Klasické webhook subscriptions (starší Webhook API, mimo Events) touto změnou dotčeny nejsou.

## Časová osa

- **2026-05-22** – Next Generation Events spuštěny v developer preview
- **2026-06-17** – Editions Spring '26 povyšuje NGE na featured platform capability
- **2026-07-21 až 2026-08-26** – postupné přidávání dalších topics a metafield triggerů
- **2026-09-16** – účinnost změn payloadů (`fields_changed`, parent trigger syntax, delivery headers, `update` trigger requirement)
- *(bez určení)* – GA release Events zatím neohlášen; systém zůstává na `unstable` API verzi

## Dopad pro nás

**Pro vývojáře:** Pokud některá aplikace používá Events (NGE) subscriptions, je potřeba projít parsing logiku `fields_changed` (nový objektový tvar místo pole), zkontrolovat `shopify.app.toml` kvůli parent triggerům bez `.*` a odstranit případné závislosti na hlavičkách `shopify-event-id` / `shopify-resource-id`. `update` subscriptions bez trigger pole je nutné doplnit, jinak přestanou fungovat. Doporučené je zároveň aktualizovat Shopify API balíčky na nejnovější verzi a projít migrační kroky z komunitního forum postu, na který Shopify odkazuje.

**Pro PM / PO:** Relevantní jen pro klienty, kde už Events (NGE) v `unstable` verzi reálně používáme – klasické webhooky nejsou dotčené. Střední naléhavost, protože jde o breaking change s okamžitou účinností (16. 9. 2026), ne o deprecation s odkladem. Vhodné ověřit u týmu, zda některý klientský projekt Events subscriptions už nasadil.

## Použití v Integrátoru

Zatím spíš teoreticky – pokud bychom u některého klienta měli nasazené Events (NGE) subscriptions, je nutné projít parsing `fields_changed` a konfiguraci triggerů podle této změny.
