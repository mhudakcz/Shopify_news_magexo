---
date: 2026-06-17
title: "Nový Collection model a APIs nyní GA — multiple product group sources, app-owned sources, variant-level membership"
title_en: "New Collection model and APIs now available (GA)"
slug: new-collection-model-apis-ga
zdroj: https://shopify.dev/changelog/new-collection-model-and-apis-now-available
shrnuto_dne: 2026-06-23
kategorie: [nova-api, nova-prilezitost, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracuje s Admin API a pravděpodobně dotazuje nebo spravuje kolekce (merchandising, katalog, B2B segment) — po 1. 7. 2026 budou kolekce využívající nové sources neviditelné pro dotazy přes pre-2026-07 API verze."
dotcene_klienty: []
souvisejici: ["new-collections-api-preview", "editions-spring-2026-developer", "shop-user-metafields-functions"]
tldr: "Nový Collection model je od API 2026-07 GA: jednotný ruleSet nahrazují composable CollectionSource objekty, kolekce mohou mít více zdrojů najednou, apps mohou vlastnit sdílené zdroje a podmínky lze aplikovat na úrovni variant — apps musí migrovat queries/mutations před 1. 7. 2026."
tagy: [collections, admin-api, functions, breaking, ga]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Collections API je součástí Admin GraphQL a umožňuje programaticky spravovat skupiny produktů, které tvoří základ navigace obchodu, automatizovaného merchandisingu a segmentace katalogu. Stávající model pracuje s jedním `ruleSet` per kolekce — sadou podmínek (tag, typ, cena, metafield) na úrovni celého produktu. Tento monolitický přístup neumožňoval kombinovat více nezávislých logik v rámci jedné kolekce ani sdílet podmínky napříč kolekcemi.

    Nový model nahrazuje `ruleSet` polem `sources`, které může obsahovat více objektů typu `CollectionSource`. Existují dva typy: `CollectionConditionsSource` (conditions + manual selections s volitelným exclusion targeting na úrovni `PRODUCTS` nebo `VARIANTS`) a `CollectionSubCollectionsSource` (membership odvozená z referencovaných kolekcí). Apps mohou vytvářet **app-owned sources** — sdílené objekty připojitelné k více kolekcím najednou — přes nové mutations `collectionConditionsSourceCreate`, `collectionConditionsSourceUpdate` a `collectionConditionsSourceDelete`. Zdroj lze smazat nebo upravit výhradně vlastnící appkou; smazáním se automaticky odpojí ze všech kolekcí.

    Třetí klíčovou novinkou je **variant-level membership** v Shopify Functions: nová pole `inAnyCollection(ids: [ID!]!): Boolean!` a `inCollections(ids: [ID!]!): [CollectionMembership!]!` na objektu `ProductVariant` umožňují Functions logice zkontrolovat příslušnost konkrétní varianty ke kolekci — tedy ne celého produktu, ale jen vybraných variant (barva, velikost, konfigurace). To otevírá složitější merchandisingové scénáře typické pro fashion, automotive nebo B2B katalogy.

    Kritický aspekt migrace: kolekce, které využívají nové features (vícezdrojový model, exclusion conditions, app-owned sources), jsou **filtrované z výsledků dotazů** přes pre-2026-07 API verze. Apps, které neprovedou upgrade na `2026-07`, tedy přestanou vidět část kolekcí v obchodě. Šablona pro migraci: `Collection.ruleSet` → `Collection.sources`; mutation argumenty `collectionCreate(input:)` / `collectionUpdate(input:)` → nová syntaxe s `collection:` argumentem.
  zdroje:
    - title: "Shopify: New Collection model and APIs now available (GA)"
      url: "https://shopify.dev/changelog/new-collection-model-and-apis-now-available"
    - title: "Collection object — Admin GraphQL 2026-07"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/Collection"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify uvedlo do GA (General Availability) nový Collection model dostupný v API verzi **2026-07** (účinné od 1. 7. 2026). Změny jsou trojího druhu:

**1. Multiple product group sources (composable architecture)**
Pole `Collection.ruleSet` je deprecated a nahrazeno polem `Collection.sources` (`[CollectionSource!]!`). Kolekce nyní může mít více zdrojů — každý s vlastními podmínkami a manuálními selekcemi. Dva typy sources:
- `CollectionConditionsSource` — typed conditions + manual selections, volitelné exclusion conditions cílící na `PRODUCTS` nebo `VARIANTS`
- `CollectionSubCollectionsSource` — membership odvozená z referencovaných kolekcí (sub-collections)

Nové pole `Collection.subCollectionEligibility` indikuje, zda a jak je kolekce způsobilá jako sub-collection (inclusion/exclusion stavy).

**2. App-owned shareable sources**
Apps mohou vytvářet znovupoužitelné `CollectionConditionsSource` objekty vlastněné appkou a připojovat je k více kolekcím najednou. Nové mutations a queries:
- `collectionConditionsSourceCreate` / `collectionConditionsSourceUpdate` / `collectionConditionsSourceDelete`
- `collectionConditionsSources(appId:)` a `collectionConditionsSourcesByApp`
- Pouze vlastnící app může source upravit nebo smazat; smazáním se source automaticky odpojí ze všech kolekcí

Nové query `collectionConditionMetafieldDefinitions` vrací metafield definice scoped na konkrétní app.

**3. Variant-level membership v Shopify Functions**
Na objektu `ProductVariant` jsou dostupná dvě nová pole použitelná v rámci Shopify Functions:
- `inAnyCollection(ids: [ID!]!): Boolean!` — vrací true, pokud je varianta členem alespoň jedné z uvedených kolekcí
- `inCollections(ids: [ID!]!): [CollectionMembership!]!` — vrací per-collection data o membership

**Deprecated fields a mutations:**
| Deprecated | Náhrada |
|---|---|
| `Collection.ruleSet` | `Collection.sources` |
| `collectionCreate(input:)` | `collectionCreate(collection:)` |
| `collectionUpdate(input:)` | `collectionUpdate(collection:)` |
| `collectionAddProducts` | sources + selections |
| `collectionByHandle` query | `collectionByIdentifier` |

## Časová osa

| Datum | Událost |
|---|---|
| Jaro 2026 (Editions) | Preview v API 2026-07 |
| **2026-06-17** | **GA release** |
| **2026-07-01** | API 2026-07 se stává stable; kolekce s novými features neviditelné přes starší API |

## Dopad pro nás

Apps nebo integrace dotazující nebo spravující kolekce přes Admin GraphQL API musí před 1. 7. 2026 provést dvě věci:

1. **Aktualizovat collection queries** — nahradit `ruleSet` za `sources` v GraphQL selektech.
2. **Aktualizovat collection mutations** — přejít z deprecated `input:` argumentu na nový `collection:` argument v `collectionCreate` a `collectionUpdate`.

Pokud migrace neproběhne, apps přestanou vidět kolekce využívající nový model (multiple sources, exclusion conditions, app-owned sources) — výsledky dotazů budou tiše filtrované bez chybové hlášky.

Nový model je zpětně kompatibilní v tom smyslu, že existující jednoduché kolekce (single ruleSet, bez nových features) zůstávají přístupné přes staré API dokud není obnovena přes nové mutations.

## Použití v Integrátoru

Integrátor pravděpodobně dotazuje kolekce v rámci synchronizace katalogu nebo merchandisingové logiky. Klíčové body:

- **Okamžité:** Ověřit, zda integrátor čte `Collection.ruleSet` nebo používá deprecated mutation argumenty — pokud ano, naplánovat migraci na `Collection.sources` a `collection:` argument před 1. 7. 2026.
- **Střednědobě:** App-owned sources otevírají možnost implementovat sdílenou segmentační logiku — jeden source objekt definující podmínky pro skupinu klientů a připojitelný k jejich kolekcím najednou. Relevantní pro B2B segmentaci nebo multi-merchant scénáře.
- **Variant-level targeting** je relevantní pro klienty s fashion nebo automotive katalogem, kde varianta (barva, velikost, konfigurace) je základní obchodní jednotkou, nikoliv produkt jako celek.
