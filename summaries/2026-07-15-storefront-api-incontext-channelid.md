---
date: 2026-07-15
title: "Storefront API @inContext podporuje channelId argument (2026-10)"
title_en: "Storefront API @inContext supports channelId"
slug: storefront-api-incontext-channelid
zdroj: https://shopify.dev/changelog/new-channelid-argument-for-incontext-directive-in-storefront-api-2026-10
shrnuto_dne: 2026-07-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Headless storefronty postavené na Storefront API mohou nově přepínat sales channel context přímo v query; pokud integrátor pracuje s cenami/dostupností per channel, je to relevantní rozšíření."
dotcene_klienty: []
souvisejici: [channel-specific-prices-markets, create-channel-markets-graphql-api, storefront-catalog-mcp-ucp]
tldr: "Storefront API 2026-10 přidává channelId argument do @inContext directive — headless storefronty tak mohou v jedné query přepnout ceny, dostupnost a měnu podle konkrétního sales channelu."
tagy: [storefront-api, incontext, channels, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Direktiva `@inContext` ve Storefront API existuje delší dobu a slouží k nastavení buyer contextu pro GraphQL query — typicky argumenty `country` a `language`, které ovlivňují lokalizaci obsahu, měnu a dostupnost produktů. Používá se přímo na query nebo mutaci, takže jedna GraphQL operace vrátí data přizpůsobená danému kontextu bez nutnosti dalších requestů.

    Verze API 2026-10 (účinná od 15. 7. 2026) rozšiřuje `@inContext` o nový argument `channelId`. Ten navazuje na channel markets představené v předchozích edicích (Spring 2026) — merchanté mohou mít pro různé sales channels (vlastní headless storefront, Facebook Shop, Google Shopping apod.) odlišné ceny, dostupnost produktů a měnu. Dosud musely headless aplikace tuto logiku řešit vlastními prostředky nebo se spoléhat na výchozí channel; nový argument umožňuje explicitně zvolit, pro jaký channel se má daná query vyhodnotit — `availableForSale`, `priceRange` a další pole pak odpovídají nastavení konkrétního channelu.

    Prakticky to znamená, že headless storefront s více sales channels (např. B2C e-shop a wholesale channel na stejném shopu) může jedním API klientem servírovat obsah pro oba kanály a přepínat kontext per request přidáním `channelId` do stejné query, místo správy více konfigurací nebo API klientů. Přístup je omezen na channels vytvořené vlastním API klientem; pokud `channelId` není zadán, použije se první channel vlastněný daným klientem.

  zdroje:
    - title: "Shopify: Storefront API @inContext supports channelId"
      url: "https://shopify.dev/changelog/new-channelid-argument-for-incontext-directive-in-storefront-api-2026-10"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Storefront API verze **2026-10** přidává nový volitelný argument `channelId` do direktivy `@inContext`. Kromě dosavadních `country` a `language` tak lze v jedné GraphQL query zvolit i konkrétní sales channel, jehož ceny, dostupnost produktů a měnu má odpověď respektovat.

Příklad použití:

```graphql
query Product($handle: String!, $channelId: ID!)
  @inContext(channelId: $channelId) {
  product(handle: $handle) {
    availableForSale
    priceRange { minVariantPrice { amount currencyCode } }
  }
}
```

Klíčová omezení:
- Použít lze pouze ID channelů vytvořených vlastním API klientem.
- Pokud `channelId` není v query uveden, použije se první channel vlastněný daným API klientem.

Feature přímo navazuje na channel markets (Spring Edition 2026) a nové GraphQL Admin API pro jejich vytváření — `channelId` v `@inContext` je storefront-side protějšek, který umožňuje tato nastavení skutečně využít při čtení katalogu.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-07-15 | Changelog publikován, argument dostupný v API verzi 2026-10 |
| 2026-10 | API verze 2026-10 se stává stabilní |

## Dopad pro nás

**Pro vývojáře:** Headless storefronty a integrace nad Storefront API mohou nově řešit multi-channel scénáře (různé ceny/dostupnost pro B2C vs. wholesale, vlastní storefront vs. marketplace feed) jedním API klientem a jednou sadou queries — stačí parametrizovat `channelId` podle toho, pro jaký channel se obsah vykresluje. Bez toho by bylo nutné buď mít samostatné API klienty per channel, nebo řešit rozdíly v ceně/dostupnosti vlastní logikou mimo Shopify.

**Pro PM / PO:** Jde o doplňkovou, neprolomující (additive) změnu — nic se nemění pro klienty, kteří channel markets nevyužívají. Relevance roste s počtem klientů, kteří provozují headless storefront a zároveň prodávají přes více sales channels s odlišnými ceníky.

## Použití v Integrátoru

Pokud headless storefront řešení pracuje se Storefront API a klient používá channel markets, je vhodné zvážit přidání `channelId` argumentu do relevantních queries místo případných workaroundů pro přepínání cen/dostupnosti per channel. Priorita je nízká — jde o volitelné rozšíření bez dopadu na stávající chování.
