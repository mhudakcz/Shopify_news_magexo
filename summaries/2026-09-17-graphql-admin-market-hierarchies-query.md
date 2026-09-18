---
date: 2026-09-17
title: "Query market hierarchies přes GraphQL Admin API (parent-child relationships)"
title_en: "Query market hierarchies with the GraphQL Admin API"
slug: graphql-admin-market-hierarchies-query
zdroj: https://shopify.dev/changelog/market-relationships
shrnuto_dne: 2026-09-18
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme market-aware pricing nebo shipping u projektu s hierarchií trhů, nová query zjednoduší zjišťování vztahů bez vlastní heuristiky nad zeměmi."
dotcene_klienty: []
souvisejici: [markets-region-subdivision-api, shopify-markets-graph-view, create-channel-markets-graphql-api]
tldr: "Admin GraphQL API verze 2026-10 přidává query marketRelationships a nová pole parentMarkets/childMarkets pro čtení parent-child vztahů mezi markets a sub-regiony."
tagy: [admin-graphql-api, markets, hierarchy, region, parent-child]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Markets umožňuje jednomu obchodu obsluhovat desítky trhů zároveň a mnoho z nich je organizováno hierarchicky — nadřazený market (např. EU) může mít podřízené sub-markets po jednotlivých zemích (např. Francie) a ty se dále mohou dělit na regionální úroveň (např. Île-de-France). Admin GraphQL API doteď neumožňovalo tyto vztahy číst přímo — aplikace si je musely odvozovat nepřímo, typicky porovnáváním seznamů zemí a regionů napříč jednotlivými markets, což bylo nespolehlivé a náročné na údržbu.

    Verze 2026-10 Admin GraphQL API přidává novou query marketRelationships, která vrací connection objektů MarketRelationship — každý obsahuje childMarket a volitelně parentMarket. Souběžně přibývají na typu Market čtyři nová pole: parentMarkets a parentMarketsCount, childMarkets a childMarketsCount, díky kterým lze procházet hierarchii oběma směry přímo z konkrétního trhu. Pro sledování konzistence dat přibyla i query marketRelationshipsStatus s neprůhledným verzovacím identifikátorem — pokud se materializované vztahy na pozadí přepočítají, verze se změní a aplikace by po detekci změny měla restartovat stránkování, protože cursors se po rebuildu mohou lišit, i když samotná ID vztahů zůstávají stabilní, dokud přímý vztah trvá.

    Změna nevyžaduje žádnou povinnou migraci u stávajících aplikací, jde o čistě aditivní rozšíření schématu. Využít ji mohou zejména aplikace s market-aware cenotvorbou nebo dopravou, kterým dosud chyběl spolehlivý způsob, jak zjistit, že konkrétní trh spadá pod širší hierarchii (např. že Francie patří pod EU market), bez vlastní heuristiky nad seznamy zemí a regionů.
  zdroje:
    - title: "Shopify: Query market hierarchies with the GraphQL Admin API"
      url: "https://shopify.dev/changelog/market-relationships"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Admin GraphQL API ve verzi 2026-10 přidává schopnost přímo dotazovat parent-child vztahy mezi markets. Nová query `marketRelationships` vrací connection objektů `MarketRelationship`, z nichž každý nese `childMarket` a volitelně `parentMarket`. Typ `Market` zároveň dostává čtyři nová pole — `parentMarkets`, `parentMarketsCount`, `childMarkets` a `childMarketsCount` — takže hierarchii lze procházet oběma směry přímo od konkrétního trhu, bez nutnosti stavět si vlastní logiku nad seznamy zemí a regionů.

Pro sledování konzistence dat slouží nová query `marketRelationshipsStatus`, která vrací neprůhledný verzovací identifikátor. Když Shopify na pozadí přepočítá materializované vztahy, identifikátor se změní a aplikace by po detekci této změny měla restartovat stránkování — cursors se totiž po rebuildu mohou lišit, zatímco samotná ID vztahů zůstávají stabilní, pokud přímý vztah mezi markets trvá dál.

## Časová osa

- **2026-09-17** — changelog zveřejněn, nové query a pole dostupné od API verze 2026-10
- **2026-10** — plánovaný release API verze 2026-10, ve které je rozšíření oficiálně součástí schématu
- Žádný deprecation ani povinná migrace se s touto změnou nepojí — jde o čistě aditivní rozšíření

## Dopad pro nás

**Pro vývojáře:** Aplikace se scope `read_markets` mohou po upgrade na API verzi 2026-10 nahradit vlastní heuristiku odvozování vztahů markets voláním `marketRelationships` nebo nových polí `parentMarkets`/`childMarkets` na typu `Market`. Při práci s hierarchií je potřeba sledovat `marketRelationshipsStatus.version` a po jeho změně stránkování restartovat od začátku, protože se cursors po rebuildu mohou lišit.

**Pro PM / PO:** Jde o technické rozšíření bez viditelného dopadu pro koncového zákazníka. Relevantní je hlavně pro projekty s komplexnějším multi-market nastavením — typicky nadřazený trh se sub-markets po jednotlivých zemích a regionech — kde nová query usnadní logiku cenotvorby nebo dopravy závislou na tom, do které části hierarchie trhů kupující patří.

## Použití v Integrátoru

Pokud v budoucnu budeme u některého projektu řešit market-aware pricing nebo shipping s hierarchií trhů (nadřazený market a jeho sub-markets/regiony), nová query zjednoduší zjišťování těchto vztahů bez nutnosti vlastní heuristiky nad zeměmi.
