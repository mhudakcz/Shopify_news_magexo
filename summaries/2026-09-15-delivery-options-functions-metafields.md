---
date: 2026-09-15
title: "Delivery options ve Shopify Functions input nyní exponují metafields"
title_en: "Delivery options in Shopify Functions input now expose their metafields"
slug: delivery-options-functions-metafields
zdroj: https://shopify.dev/changelog/delivery-options-in-shopify-functions-input-now-expose-their-metafields
shrnuto_dne: 2026-09-15
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Netykame se primo, ale pokud klient stavi Delivery Customization Function napojenou na nase carrier/config data, muze je nove cist rovnou z metafieldu na delivery option misto parsovani handlu."
dotcene_klienty: []
souvisejici: [shop-user-metafields-functions, metaobject-access-shopify-functions, customer-createdat-shopify-functions-2026-10]
tldr: "Shopify Functions API 2026-10 pridava na CartDeliveryOption pole metafield, takze Delivery Customization Function muze cist custom data z delivery option (carrier config, priority tier, cenova pravidla) primo, bez obchazeni pres handle nebo title."
tagy: [shopify-functions, delivery, metafields, admin-graphql-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Functions pro doručení fungují ve dvou krocích, které řeší různé typy funkcí. Delivery option generator functions (Pickup Point Delivery Option Generator, Local Pickup Delivery Option Generator) vytvářejí konkrétní doručovací možnosti v košíku — typicky s vlastní logikou výběru výdejního místa nebo dopravce. Delivery Customization Function pak tyto vygenerované možnosti dál upravuje: přejmenovává je, řadí, skrývá nebo mění jejich cenu podle byznys pravidel obchodníka. Dosud ale downstream Delivery Customization Function neměla žádný čistý způsob, jak přečíst data, která upstream generator function k dané delivery option přiřadila — musela se spoléhat na parsování textu z handle nebo title, což se rozpadalo při přejmenování možnosti obchodníkem nebo při lokalizaci do jiného jazyka.

    Od API verze 2026-10 objekt CartDeliveryOption ve vstupním grafu Functions nově obsahuje pole metafield(namespace: String, key: String!): Metafield, které vrací hodnotu, typ a jsonValue. Platí to pro libovolnou Function, jejíž input graph obsahuje cart.deliveryGroups.deliveryOptions — tedy především Delivery Customization Function. Starší Order Discounts a Product Discounts API naproti tomu cart.deliveryGroups nadále vrací prázdné, takže se jich změna netýká. Metafields na delivery options existují jen po dobu checkoutu a po jeho dokončení se nikam nepersistují — jde o efemérní data vázaná na aktuální košík, ne o trvalý záznam u objednávky. Přístup k nim se řídí standardními pravidly vlastnictví metafieldů: Function může číst app-reserved namespace vlastní aplikace i nepředponované sdílené namespace.

    Změna navazuje na širší trend rozšiřování toho, co mohou Shopify Functions číst přímo ve vstupním schématu bez dalšího API volání za běhu — v roce 2026 postupně přibyl přístup k app-owned metaobjectům, k Shop User Metafields a k poli createdAt na Customer objektu. Jde o čistě aditivní doplnění bez dopadu na existující nasazené funkce; k využití stačí funkci přepnout na API 2026-10 a pole si vyžádat v input query.
  zdroje:
    - title: "Shopify: Delivery options in Shopify Functions input now expose their metafields"
      url: "https://shopify.dev/changelog/delivery-options-in-shopify-functions-input-now-expose-their-metafields"
  generated_at: 2026-09-15T12:00:00Z
  model: claude-sonnet-5
---
## Co se mění

Shopify Functions API verze 2026-10 přidává na objekt `CartDeliveryOption` pole `metafield(namespace: String, key: String!): Metafield`, které vrací `value`, `type` a `jsonValue`. Funkce (typicky Delivery Customization Function) tak může přímo v input query přečíst metafields přiřazené ke konkrétní delivery option — například vlastní konfiguraci dopravce, prioritní tier nebo cenová pravidla, která tam zapsala jiná funkce (delivery option generator) nebo aplikace.

Dřív se podobná data musela propašovat do handle nebo title dané delivery option, což se rozpadalo při přejmenování obchodníkem nebo při lokalizaci do jiného jazyka. Nové pole tento workaround nahrazuje čistým čtením strukturovaných dat. Platí to pro všechny Functions, jejichž input graph obsahuje `cart.deliveryGroups.deliveryOptions` — starší Order Discounts a Product Discounts API zůstávají beze změny, protože `cart.deliveryGroups` u nich zůstává prázdné. Metafields na delivery options jsou navíc čistě efemérní — existují jen po dobu checkoutu a po jeho dokončení se nikam nepersistují.

## Časová osa

- **2026-09-15** — changelog publikován, pole `metafield` dostupné jako součást API 2026-10, žádná migrace existujících funkcí není nutná.

## Dopad pro nás

**Pro vývojáře:** Pokud klient provozuje vlastní Delivery Customization Function a zároveň generator function (nebo appku), která delivery options obohacuje o metadata, lze nově tato data číst přímo přes `metafield(namespace, key)` v input query místo parsování handle/title. Nutné je přepnout funkci na API 2026-10 a pamatovat na to, že metafields na delivery option žijí jen v rámci aktuálního checkoutu.

**Pro PM / PO:** Nízká prioritita a čistě aditivní změna — relevantní jen pro klienty, kteří kombinují vlastní Shopify Functions pro generování a customizaci doručovacích možností (carrier-specific pricing, prioritní doprava, vlastní výdejní místa).

## Použití v Integrátoru

Možná — MageXo Shopify Functions samo nedeployuje, ale pokud klientova Delivery Customization Function navazuje na naše data (např. carrier konfigurace nebo cenová pravidla uložená v metafieldu na delivery option), může je nově číst přímo místo dosavadního obcházení přes handle nebo title.
