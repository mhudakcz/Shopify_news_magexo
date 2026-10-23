---
date: 2026-10-20
title: "Metaobject analytics: queryable capability v Admin API (ShopifyQL + reports)"
title_en: "Metaobject analytics queryable capability available in the Admin API"
slug: metaobject-analytics-queryable-admin-api
zdroj: https://shopify.dev/changelog/posts/metaobject-analytics-queryable-capability-available-in-the-admin-api
shrnuto_dne: 2026-10-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2027-01"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pracujeme s metaobject definicemi v custom data modelech; nová capability je volitelná a při přechodu na API 2027-01 ji lze zapnout tam, kde merchant chce nad těmito daty reportovat."
dotcene_klienty: []
souvisejici: [shopify-analytics-full-stack-app-platform, location-metafields-analytics-dimensions, streamlined-metaobject-api]
tldr: "Od Admin GraphQL API 2027-01 lze u metaobject definic číst a nastavovat capability analyticsQueryable (pole eligible a enabled), čímž se metaobjects sjednocují s metafields v analytics; změna je volitelná a nevyžaduje žádnou akci."
tagy: [metaobjects, analytics, admin-api, shopifyql, reports, graphql, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Metaobjects jsou v Shopify vlastní strukturované datové typy, které si merchant nebo aplikace definuje sama. Typicky se používají pro B2B cenové úrovně, produktové bundly, věrnostní levely, FAQ nebo specifikace. Každý metaobject má definici (MetaobjectDefinition) s poli různých typů a samotné záznamy nesou hodnoty těchto polí.

    Shopify Analytics se v poslední době otevírá vlastním datům obchodu. Metafields lze označit jako analytics-queryable, takže se v reportech a v ShopifyQL objeví jako dimensions a filtry. Příkladem je volba pro filtrování a seskupování dat v Analytics u location metafields nebo souhrnné oznámení o analytics jako full-stack platformě pro aplikace. Metaobject definice dosud žádný takový přepínač v Admin API neměly, takže analytika nad custom data modely musela jít jinou cestou, typicky přes export do externího BI nástroje.

    Nová capability analyticsQueryable tuto mezeru zavírá na úrovni API. Metaobject definice dostávají stejný druh přepínače jako metafield definice a čtou se i zapisují stejným mechanismem jako ostatní capabilities definice. Changelog sám ShopifyQL ani custom reports explicitně nejmenuje, popisuje jen read a write rozhraní capability a pravidla způsobilosti. Konkrétní chování v dotazech a reportech proto vychází z analogie s analytics-queryable metafields a před slibováním merchantovi je potřeba ho ověřit v dokumentaci ShopifyQL.
  zdroje:
    - title: "Shopify: Metaobject analytics queryable capability available in the Admin API"
      url: "https://shopify.dev/changelog/posts/metaobject-analytics-queryable-capability-available-in-the-admin-api"
    - title: "Shopify: Metaobjects in Shopify apps (custom data)"
      url: "https://shopify.dev/docs/apps/build/custom-data/metaobjects"
    - title: "Shopify: GraphQL Admin API reference"
      url: "https://shopify.dev/docs/api/admin-graphql"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Od verze GraphQL Admin API **2027-01** mohou aplikace číst a nastavovat novou capability **`analyticsQueryable`** na metaobject definicích. Shopify tím metaobject definice sjednocuje s metafield definicemi, které už analytics-queryable příznak mají.

**Čtení.** Objekt `MetaobjectCapabilities.analyticsQueryable` má dvě pole:

- `eligible` říká, zda definice capability vůbec může používat. Definice je způsobilá, pokud alespoň jedno její pole používá typ kompatibilní s analytics.
- `enabled` říká, zda je capability právě zapnutá.

```graphql
capabilities {
  analyticsQueryable {
    eligible
    enabled
  }
}
```

**Zápis.** Capability se nastavuje při vytvoření nebo úpravě definice přes:

- `MetaobjectCapabilityCreateInput.analyticsQueryable`
- `MetaobjectCapabilityUpdateInput.analyticsQueryable`
- `MetaobjectCapabilityAnalyticsQueryableInput.enabled`

**Další změny schématu:**

- enum `MetaobjectCapabilityType` obsahuje novou hodnotu `ANALYTICS_QUERYABLE`,
- enum `MetaobjectUserErrorCode` obsahuje nový kód `CAPABILITY_NOT_ELIGIBLE`, který mutace vrátí, když se capability pokusíme zapnout na nezpůsobilé definici.

Ilustrativní náčrt zápisu (názvy inputů jsou z changelogu, přesný tvar mutace je třeba ověřit proti schématu 2027-01):

```graphql
mutation {
  metaobjectDefinitionUpdate(
    id: "gid://shopify/MetaobjectDefinition/123"
    definition: { capabilities: { analyticsQueryable: { enabled: true } } }
  ) {
    metaobjectDefinition { capabilities { analyticsQueryable { eligible enabled } } }
    userErrors { field message code }
  }
}
```

Doporučený postup podle Shopify: před zapnutím zkontrolovat `eligible`, při create i update nastavit `analyticsQueryable.enabled` v capability inputu a v `userErrors` ošetřit `CAPABILITY_NOT_ELIGIBLE`, aby uživatel dostal srozumitelnou zpětnou vazbu.

**Kompatibilita.** Pole, input, hodnotu enumu i chybový kód vidí jen aplikace na verzi 2027-01 nebo novější. Aplikace na starších verzích změna nijak neovlivní. Changelog také výslovně uvádí, že není vyžadována žádná akce, pokud aplikace nechce řídit, zda lze metaobject definici dotazovat v analytics.

**Co changelog neříká.** Neuvádí, které typy polí jsou analytics-compatible, jak se metaobject data v dotazech propojují s ostatními daty obchodu (například s objednávkami nebo produkty) ani žádné číselné limity či kvóty.

## Časová osa

- **2026-10-09** — post vytvořen v Shopify changelogu
- **2026-10-20** — zveřejněn a naposledy aktualizován
- **2027-01-01** — capability dostupná v GraphQL Admin API verzi 2027-01
- **Starší verze API** — beze změny, capability nevidí

## Dopad pro nás

**Pro vývojáře:** Změna je čistě aditivní a nic existujícího nerozbije. Pokud aplikace vytváří nebo upravuje metaobject definice, má po přechodu na 2027-01 nový přepínač. Prakticky to znamená přidat `analyticsQueryable` do capability inputu, před zapnutím číst `eligible` a v mutacích zpracovat `CAPABILITY_NOT_ELIGIBLE`. U definic bez analytics-compatible pole capability zapnout nelze, takže je dobré s tím počítat už při návrhu definice. Pro verze starší než 2027-01 žádný kód měnit nemusíme.

**Pro PM / PO:** Je to příležitost pro merchanty, kteří drží obchodní logiku v metaobjectech (cenové úrovně B2B, bundly, věrnostní levely) a chtějí nad ní dělat reporting v nativním Shopify Analytics místo samostatné pipeline do externího BI. Zároveň je to zatím jen API základ. Changelog nepopisuje, jak přesně se metaobject data objeví v ShopifyQL a v reportech, takže než nabídneme konkrétní reporting jako službu, je nutné to ověřit na vývojovém obchodě s verzí 2027-01. Urgence je střední, protože funkce nastupuje až s verzí 2027-01 a nic nevypíná.

## Použití v Integrátoru

Metaobject definice používáme u custom data modelů a analytics-queryable je pro ně nový volitelný přepínač, takže žádná okamžitá akce nehrozí. Při práci s definicemi na verzi 2027-01 ho zvažte tam, kde merchant chce nad custom daty reportovat, a zahrňte ho do kontroly dotčených mutací.
