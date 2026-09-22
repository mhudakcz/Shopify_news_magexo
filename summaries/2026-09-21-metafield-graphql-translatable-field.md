---
date: 2026-09-21
title: "Metafield GraphQL Object: nový translatable boolean field"
title_en: "New translatable boolean field for Metafield GraphQL Object"
slug: metafield-graphql-translatable-field
zdroj: https://shopify.dev/changelog/is-translatable-metafield-field
shrnuto_dne: 2026-09-22
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor pracuje s metafieldy v translation workflow, může nově číst translatable přímo na Metafield objektu místo dotazování přes translatableResources."
dotcene_klienty: []
souvisejici: [invalid-metafield-queries-error-2026-10, metafields-definition-required-customer-account-api, metafieldsset-dynamic-complexity-cost]
tldr: "Admin GraphQL API dostal na objektu Metafield nový nenullable boolean field translatable, který rovnou říká, jestli lze hodnotu metafieldu přeložit, bez nutnosti dotazovat se přes translatableResources."
tagy: [admin-graphql-api, metafields, translation, i18n, localization]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Metafields slouží k ukládání libovolných strukturovaných dat k produktům, objednávkám, zákazníkům a dalším resources v Shopify. Část těchto hodnot je určena k lokalizaci pro různé jazykové varianty obchodu (např. popisky, texty, štítky), zatímco jiné jsou svou povahou statické a k překladu se nehodí (např. interní ID, technické kódy nebo čísla). Aplikace pracující s translation tools a i18n workflow proto potřebují spolehlivě rozlišit, který metafield je přeložitelný a který ne.
    
    Dosud k tomu bylo nutné dotazovat se na resource přes pole translatableResources a filtrovat výsledky podle deprecated enum hodnoty TranslatableResourceType.METAFIELD. Tento přístup vyžadoval extra GraphQL volání navíc k běžnému čtení metafieldu a spoléhal na enum, který Shopify označuje za zastaralý. V praxi to vedlo k tomu, že aplikace musely buď hádat na základě typu metafieldu, nebo si udržovat vlastní mapování přeložitelných definic, což bylo náchylné na chyby při změnách na straně Shopify.
    
    Od API verze 2026-10 (changelog zveřejněn 21. 9. 2026) přidává Shopify přímo na objekt Metafield nenullable pole translatable: Boolean!. Aplikace tak mohou zjistit přeložitelnost metafieldu jediným čtením spolu s ostatními daty metafieldu, bez dodatečného dotazu na translatableResources a bez závislosti na deprecated enum hodnotě. Starší API verze (2026-07 a nižší) zůstávají beze změny.
  zdroje:
    - title: "Shopify: New translatable boolean field for Metafield GraphQL Object"
      url: "https://shopify.dev/changelog/is-translatable-metafield-field"
  generated_at: 2026-09-22T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Admin GraphQL API rozšiřuje objekt **Metafield** o nový nenullable field **`translatable: Boolean!`**. Field přímo indikuje, jestli lze hodnotu daného metafieldu přeložit — podle pravidel, která na platformě vynucuje samotné Shopify.

Dřívější postup vyžadoval zjišťovat přeložitelnost nepřímo, přes pole `translatableResources` a filtrování podle deprecated enum hodnoty `TranslatableResourceType.METAFIELD`. Nově stačí číst `translatable` přímo na `Metafield` objektu ve stejném dotazu, kde se čtou i ostatní data metafieldu — bez extra volání a bez závislosti na zastaralém enumu.

## Časová osa

- **2026-09-21** — changelog zveřejněn, field `translatable` dostupný na Metafield objektu od API verze 2026-10
- **API 2026-07 a starší** — beze změny, dřívější postup přes `translatableResources` zůstává funkční

## Dopad pro nás

**Pro vývojáře:** Stojí za to projít místa, kde se dnes zjišťuje přeložitelnost metafieldů přes `translatableResources` s `TranslatableResourceType.METAFIELD`, a zvážit přechod na přímé čtení `translatable` na `Metafield` objektu — ušetří to jedno GraphQL volání a odstraní závislost na deprecated enum hodnotě. Změna je čistě aditivní, není potřeba nic měnit ihned.

**Pro PM / PO:** Jde o nízkou naléhavost bez dopadu na běžný provoz — nic se nerozbíjí, jen přibývá pohodlnější cesta, jak zjistit přeložitelnost metafieldu. Relevantní hlavně pro nástroje a workflow zaměřené na překlady a lokalizaci obsahu.

## Použití v Integrátoru

Možná — pokud Integrátor v budoucnu potřebuje rozlišovat přeložitelné a statické metafieldy (např. pro export do translation tools), je tento field jednodušší cestou než dosavadní dotaz přes `translatableResources`.
