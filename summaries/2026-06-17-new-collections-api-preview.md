---
date: 2026-06-17
title: "Nová Collections API (preview) — composable source groups + variant-level conditions"
title_en: "New Collections API (preview) — composable source groups + variant conditions"
slug: new-collections-api-preview
zdroj: https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/collectionConditionsSourceCreate
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Apps nebo integrace, které pracují s kolekcemi (merchandising, katalog, B2B segment), by měly sledovat nové typy conditions — zejména variant-level targeting, který doposud nebyl přes API možný."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-developer", "next-generation-events-preview"]
editions_release: spring-2026
kontext:
  background: |
    Collections API je část Shopify Admin GraphQL, která umožňuje programaticky spravovat kolekce produktů — tedy skupiny, které jsou základem navigace obchodu, automatizovaného merchandisingu a segmentace katalogu. Stávající API pracuje se statickými (manuálními) kolekcemi a automated collections s jednoduchými podmínkami na úrovni celého produktu (tag, cena, typ apod.). Nová verze API přichází jako preview v API verzi `2026-07`.

    Klíčovou novinkou je zavedení konceptu **CollectionConditionsSource** — samostatného, sdílitelného objektu, který definuje podmínky a selekce pro zařazení produktů do kolekce. Jeden source může být připojen k více kolekcím najednou, čímž vznikají **composable source groups**: kolekce přestává být monolitická entita a stává se kompozicí nezávislých zdrojů s vlastní logikou inclusion/exclusion. Tato změna zásadně mění způsob, jakým jsou kolekce modelovány na datové vrstvě.

    Druhou velkou změnou je **variant-level targeting**: field `targetType` na objektu `CollectionConditionsSource` umožňuje specifikovat, zda podmínky matchují celý produkt nebo konkrétní varianty. To otevírá scénáře, které doposud nebyly v Admin API dostupné — například kolekce obsahující jen varianty produktu v určité barvě nebo velikosti, aniž by byly zařazeny ostatní varianty téhož produktu. Storefront a merchandising logika se tak může přiblížit složitějším katalogům (fashion, automotive, B2B).

    Přístupová oprávnění pro nové mutations (`collectionConditionsSourceCreate`, `collectionConditionsSourceUpdate`) a query (`collectionConditionsSources`) vyžadují scope `write_products` resp. `read_products`. API není dostupné na Starter a Retail plánech. Protože jde o preview, breaking changes jsou možné před GA releasem — apps stavějící na nové Collections API by měly počítat s potřebou aktualizace před tím, než funkce opustí preview stav.
  zdroje:
    - title: "Shopify Editions Spring '26: New Collections API (preview) — composable source groups + variant conditions"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/mutations/collectionConditionsSourceCreate"
    - title: "CollectionConditionsSource object (Admin GraphQL 2026-07)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-07/objects/CollectionConditionsSource"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Preview rebuild Collections API v Admin GraphQL 2026-07 zavádí sdílitelné source objekty (jeden zdroj podmínek pro více kolekcí) a variant-level conditions — apps pracující s kolekcemi by se měly začít připravovat na migraci."
tagy: [editions, collections-api, preview, admin, variants]
zdroj_kanal: editions
---

## Co se mění

Shopify v API verzi `2026-07` (preview) kompletně přestavuje způsob, jakým fungují automatizované kolekce. Místo toho, aby podmínky byly pevně svázány s konkrétní kolekcí, zavádí nový objekt **CollectionConditionsSource** — samostatnou, sdílitelnou jednotku definující inclusion/exclusion logiku.

Zásadní změny:

- **Composable source groups**: Jedna kolekce může mít více source objektů. Sources lze sdílet napříč kolekcemi — změna jednoho source se tedy projeví ve všech připojených kolekcích najednou.
- **Variant-level conditions**: Field `targetType` umožňuje podmínkám matchovat konkrétní varianty produktu (nikoli jen celý produkt). Poprvé lze v Admin API vytvořit kolekci obsahující např. jen červené varianty bez ohledu na ostatní varianty téhož produktu.
- **Sdílitelnost přes apps**: Field `shareable` označuje sources vytvořené appkou, které jsou spravovatelné přes `collectionConditionsSourceUpdate` mutation. App může spravovat vlastní sources nezávisle na zbytku kolekce.

Nové GraphQL operace v `2026-07`:
- Mutation `collectionConditionsSourceCreate` — vytvoří nový sdílitelný source
- Mutation `collectionConditionsSourceUpdate` — upraví source vlastněný calling app
- Query `collectionConditionsSources` — seznam sources vlastněných app s cursor paginací

Scope: `write_products` (mutations), `read_products` (query). Nedostupné na Starter a Retail plánech.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, API verze `2026-07` preview release
- TBD — GA release (preview status = breaking changes možné)

## Dopad pro nás

**Pro vývojáře:**
Jakákoli app nebo integrace, která programaticky vytváří nebo upravuje automated collections přes Admin GraphQL, bude muset projít revizí proti novému schématu. Stávající přístup (podmínky přímo na kolekci) bude pravděpodobně deprecated. Doporučuje se prozkoumat `collectionConditionsSourceCreate` mutation a naplánovat migraci ještě v preview fázi — čím dříve, tím menší riziko při GA releasu. Variant-level targeting je nový primitiv, který v interních toolech nebo merchandising scriptletch doposud nebylo možné použít.

**Pro PM / PO:**
Nová Collections API je primárně vývojářská záležitost — obchodníci ji nevidí přímo. Nicméně umožní novou generaci merchandising apps a katalogových nástrojů: kolekce kompozované z více zdrojů, přesnější segmentace na úrovni variant, efektivnější správa velkých katalogů. Pro klienty s komplexními katalogy (fashion, automotive, B2B) stojí za to sledovat, jaké nové apps na nové API postaví.

## Použití v Integrátoru

Apps nebo scripty pro automatizované řízení kolekcí (merchandising, B2B katalogy, feed management) by měly sledovat vývoj nové Collections API — variant-level targeting může otevřít nové scénáře segmentace produktů, které doposud nebyly technicky proveditelné.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
