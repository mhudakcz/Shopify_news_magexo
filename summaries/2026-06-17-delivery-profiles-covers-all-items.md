---
date: 2026-06-17
title: "App-owned delivery profiles s coversAllItems v Admin GraphQL API 2026-07"
title_en: "Admin GraphQL API supports app-owned delivery profiles that cover all shippable items"
slug: delivery-profiles-covers-all-items
zdroj: https://shopify.dev/changelog/admin-graphql-api-now-supports-app-owned-delivery-profiles-that-cover-all-shippable-items
shrnuto_dne: 2026-06-18
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátory spravující shipping profily za klienty mohou využít coversAllItems pro zjednodušení přiřazení — jeden profil pokryje celý katalog bez nutnosti explicitního mapování každého variantu."
dotcene_klienty: []
souvisejici:
  - shipping-delivery-settings-redesign
  - shipping-line-fulfillmentorderlineitem
  - shipping-quick-sale
tldr: "Od API verze 2026-07 lze app-owned delivery profile nastavit jako pokrývající všechny shippable varianty v obchodě pomocí nového boolean pole coversAllItems — bez ručního přiřazování produktů."
tagy: [shipping, delivery-profile, admin-api, app-owned]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Delivery profiles v Shopify Admin GraphQL API umožňují aplikacím i obchodníkům definovat shipping pravidla — tedy které dopravní sazby a zóny platí pro které produkty. Každý profil tradičně vyžadoval explicitní seznam přiřazených produktových variant, aby bylo jasné, na které položky se vztahuje.

    Situace komplikovaná zejména pro third-party aplikace, které spravují shipping logiku programaticky: při každém přidání nového produktu do obchodu musely varianty ručně přiřadit ke správnému profilu. U obchodů s velkým nebo dynamickým katalogem to znamenalo potřebu event-driven synchronizace (webhook na product create/update) a riziko dočasné nekonzistence.

    Nové boolean pole `coversAllItems` na typu `DeliveryProfile` a `DeliveryProfileInput` tuto potřebu eliminuje: pokud je nastaveno na `true`, profil automaticky pokrývá všechny shippable produktové varianty v obchodě bez explicitního přiřazení. Funkce je dostupná výhradně pro app-owned profily — tedy profily spravované autorizovanou aplikací, nikoli profily vytvořené přímo obchodníkem.

    Praktický dopad je nejvýraznější pro aplikace budující custom shipping logiku, rate calculatory nebo shipping-as-a-service produkty. Místo komplexního mapování katalog-profil stačí jednou nastavit `coversAllItems: true` a profil se sám udržuje aktuální napříč celým sortimentem. Default hodnota je `false` (zpětně kompatibilní chování); při update existujícího profilu se hodnota zachová, pokud není explicitně změněna.
  zdroje:
    - title: "Shopify: Admin GraphQL API supports app-owned delivery profiles that cover all shippable items"
      url: "https://shopify.dev/changelog/admin-graphql-api-now-supports-app-owned-delivery-profiles-that-cover-all-shippable-items"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od Admin GraphQL API verze **2026-07** (účinné od 1. července 2026) přibývá na objektu `DeliveryProfile` nové boolean pole `coversAllItems`. Když je nastaveno na `true`, profil automaticky pokryje všechny shippable produktové varianty v obchodě — bez nutnosti každý variant explicitně přiřazovat k profilu.

Pole je dostupné jak pro čtení, tak pro zápis přes `DeliveryProfileInput`:

```graphql
# Přečtení hodnoty
query {
  deliveryProfiles(first: 10) {
    nodes {
      id
      name
      coversAllItems
    }
  }
}

# Nastavení profilu na "pokryj vše"
mutation {
  deliveryProfileUpdate(
    id: "gid://shopify/DeliveryProfile/123"
    profile: { coversAllItems: true }
  ) {
    profile {
      id
      coversAllItems
    }
    userErrors {
      field
      message
    }
  }
}
```

**Omezení:**
- Funkce je dostupná pouze pro **app-owned delivery profiles** (profily spravované autorizovanou aplikací).
- Na merchant-owned nebo non-shipping profily se `coversAllItems` nevztahuje.
- Default hodnota při vytvoření je `false`; při update se stávající hodnota zachová, pokud není explicitně přepsána.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Publikace v Shopify Changelog |
| 2026-07-01 | API verze 2026-07 dostupná; `coversAllItems` aktivní |

## Dopad pro nás

Změna je zpětně kompatibilní — existující integrace bez tohoto pole nejsou ovlivněny. Relevance nastává tehdy, když aplikace programaticky vytváří nebo spravuje delivery profiles za klienty:

- **Zjednodušení onboardingu:** Nový obchod může dostat jeden "universal" shipping profil s `coversAllItems: true` okamžitě při instalaci aplikace, bez nutnosti iterovat přes celý katalog.
- **Eliminace webhook synchronizace:** Odpadá potřeba naslouchat na `products/create` a `variants/add` eventy jen proto, aby se nové položky přiřadily k profilu.
- **Pozor na souběh:** Pokud obchod má více app-owned profilů a jeden z nich má `coversAllItems: true`, je třeba ověřit, jak se Shopify chová při konfliktu s jinými profily — priorita se řídí standardními pravidly delivery profile precedence.

## Použití v Integrátoru

Pro integrátory spravující shipping konfiguraci klientů tato změna nabízí potenciální zjednodušení setup flow. Místo vícekrokového procesu (vytvořit profil → vypsat produkty → přiřadit varianty) stačí vytvořit profil s `coversAllItems: true` a přiřazení se děje automaticky.

Před nasazením doporučujeme ověřit chování v případě, kdy obchod paralelně používá merchant-owned profily pro specifické produkty — `coversAllItems` by nemělo přepisovat explicitní přiřazení, ale je vhodné to otestovat na staging prostředí po 1. červenci 2026.
