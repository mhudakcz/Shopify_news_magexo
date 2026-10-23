---
date: 2026-10-19
title: "Admin API: exclusive > timestamp filters nyní vylučují celou sekundu (breaking)"
title_en: "Exclusive > timestamp filters exclude the full second"
slug: exclusive-timestamp-filters-admin-api
zdroj: https://shopify.dev/changelog/posts/exclusive-timestamp-filters
shrnuto_dne: 2026-10-23
kategorie: [breaking]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-19
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše synchronizační logika nebo polling skripty používají čas posledního zpracovaného záznamu jako exkluzivní dolní mez (created_at:>T) v query argumentu Admin GraphQL API, po přechodu na verzi 2026-10 mohou tiše přeskočit záznamy vzniklé ve stejné sekundě."
dotcene_klienty: []
souvisejici: [invalid-metafield-queries-error-2026-10, more-order-filtering-capabilities, release-notes-2026-10]
tldr: "Od Admin GraphQL API 2026-10 filtr s operátorem > na timestamp bez zlomků sekund přeskočí celou sekundu z hodnoty, takže polling podle posledního viděného času může tiše vynechat záznamy ze stejné sekundy; řešením je >= a deduplikace podle id."
tagy: [admin-api, graphql, timestamp, filters, breaking, created-at, updated-at]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Admin GraphQL API umožňuje filtrovat connection queries (například `orders`, `products` nebo `customers`) pomocí argumentu `query` v search syntaxi. Součástí jsou i filtry na časové značky jako `created_at` a `updated_at` s operátory `>`, `>=`, `<` a `<=`. Typické použití je inkrementální synchronizace: aplikace si pamatuje čas posledního zpracovaného záznamu a při dalším běhu se ptá na vše novější, tedy `created_at:>'2026-09-15T12:00:02Z'`.

    Problém vzniká z nesouladu přesností. API vrací časové značky jako `createdAt` zaokrouhlené na celé sekundy, ale některé resources interně ukládají i zlomky sekund. Do verze 2026-07 se hodnota za `>` bez zlomků porovnávala s okamžikem `12:00:02.000000`. Záznam vytvořený v `12:00:02.500` tak filtru vyhověl, přestože API ve výstupu ukazovalo `createdAt` jako `12:00:02Z`, tedy stejnou hodnotu, jakou jsme do filtru poslali. Stejný záznam zároveň vyhovoval i filtru `<=` se stejnou hodnotou, takže se oba filtry překrývaly.

    Od API verze 2026-10 se `>` s hodnotou bez zlomků sekund chová tak, že začíná až za koncem dané sekundy (v příkladu Shopify `12:00:02.999999`). Záznam vyhoví `>T` jen tehdy, když je jeho vrácená časová značka skutečně pozdější než T, a `>T` a `<=T` se tak už nepřekrývají. Shopify změnu označuje jako Update a uvádí, že akce není povinná. Prakticky ale mění výsledky queries, takže u aplikací, které na `>` staví inkrementální čtení, jde o behaviorální breaking change při upgradu na 2026-10. Aplikace na verzi 2026-07 a starší nepotřebují žádnou úpravu.
  zdroje:
    - title: "Shopify: Exclusive > timestamp filters exclude the full second"
      url: "https://shopify.dev/changelog/posts/exclusive-timestamp-filters"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od verze **2026-10** GraphQL Admin API platí, že exkluzivní dolní mez `>` na timestamp filtru v `query` argumentu **vynechá celou sekundu** uvedenou v hodnotě. Příklad ze zdroje: filtr `created_at:>'2026-09-15T12:00:02Z'` už nevrátí objednávku vytvořenou v `12:00:02.500`.

**Před 2026-10:** `>T` se porovnávalo s `T.000000`, takže prošly i záznamy z pozdější části téže sekundy. Ty měly ve výstupu `createdAt` rovné `T` a zároveň vyhovovaly `<=T`, takže se filtry překrývaly.

**Od 2026-10:** `>T` bez zlomků sekund začíná za koncem sekundy T (`T.999999`). Záznam vyhoví jen tehdy, když je jeho vrácená časová značka striktně pozdější než T. Filtry `>T` a `<=T` se už nepřekrývají.

**Beze změny ve všech verzích:**

- operátory `>=`, `<` a `<=`,
- hodnoty jen s datem, například `created_at:>2026-09-15`,
- hodnoty se zlomky sekund, například `created_at:>'2026-09-15T12:00:02.250Z'`.

**Koho se to týká:** aplikací, které v `query` argumentu connection queries posílají `>` s timestampem bez zlomků sekund. Příklad Shopify používá `created_at` na query `orders`. Pole `updated_at` zdroj výslovně nejmenuje, ale popsané pravidlo se týká timestamp filtrů obecně, takže doporučujeme ověřit i queries s `updated_at` na test shopu.

**Doporučená migrace od Shopify:** před přechodem na 2026-10 najít queries, které používají timestamp z dřívější odpovědi jako `>` mez (typicky načtení záznamů novějších, než je poslední viděný). Pokud nesmíte přijít o záznamy vzniklé ve stejné sekundě, přepnout na `>=` a duplicity odstranit podle `id`. Příklad ze zdroje:

```graphql
query OrdersSinceLastSync {
  orders(first: 50, sortKey: CREATED_AT, query: "created_at:>='2026-09-15T12:00:02Z'") {
    nodes { id createdAt }
  }
}
```

## Časová osa

- **2026-10-01** — vychází stabilní API verze 2026-10, od které nové chování platí
- **2026-10-19** — changelog zveřejněn, uvedená účinnost
- **2026-10-21** — Shopify post naposledy aktualizoval
- **API 2026-07 a starší** — původní chování beze změny, žádná úprava není potřeba
- **Před upgradem na 2026-10** — vhodný čas na audit queries s `>` na timestampech

## Dopad pro nás

**Pro vývojáře:** Projděte Admin GraphQL queries v synchronizačních jobech, reconciliation skriptech a pollingu, které používají `created_at:>` nebo `updated_at:>` s hodnotou převzatou z `createdAt` / `updatedAt` předchozí odpovědi. Po přechodu na 2026-10 už takový filtr nevrátí záznamy ze stejné sekundy, které jsme při minulém běhu ještě neviděli, a nic nespadne ani nevyhodí error. Chybějící data se projeví až později jako díra v synchronizaci. Řešení je přepnout na `>=` s uloženým časem posledního záznamu a deduplikovat podle `id`, nebo si držet množinu už zpracovaných `id` pro poslední sekundu. Filtry se zlomky sekund, date-only hodnoty a operátory `>=`, `<`, `<=` se nemění. Změnu ověřte na test shopu proti 2026-10 ještě před ostrým upgradem verze, ideálně testem se dvěma záznamy vytvořenými v jedné sekundě.

**Pro PM / PO:** Shopify změnu nepovažuje za povinnou akci a naléhavost je střední. Riziko je ale zákeřné, protože při upgradu API verze nehrozí viditelný výpadek, nýbrž tichá ztráta jednotlivých záznamů v inkrementálních synchronizacích (například objednávek). Do plánu přechodu na 2026-10 proto patří krátký audit polling a reconciliation logiky a regresní test na hraniční případ stejné sekundy. Na starších API verzích nehrozí žádný dopad, takže se nejedná o akutní problém, ale o položku checklistu upgradu.

## Použití v Integrátoru

Možná — pokud naše synchronizační logika čte objednávky nebo jiné resources inkrementálně přes `created_at:>` nebo `updated_at:>` s poslední viděnou hodnotou, je před přechodem na 2026-10 potřeba přejít na `>=` a deduplikovat podle `id`.
