---
date: 2026-10-01
title: "ShopifyqlQueryResponse: nové pole parseWarnings (debugging ShopifyQL dotazů)"
title_en: "Added parseWarnings to ShopifyqlQueryResponse"
slug: shopifyql-response-parsewarnings
zdroj: https://shopify.dev/changelog/posts/added-parsewarnings-to-shopifyqlqueryresponse
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud nad polem shopifyqlQuery stavíme reporting nebo dashboard, stačí přidat parseWarnings do selection setu a varování logovat či zobrazit; jinak se nás změna netýká a nic se nerozbije."
dotcene_klienty: []
souvisejici: [shopifyql-matches-customer-behavior, shop-campaigns-shopifyql, shopify-analytics-full-stack-app-platform]
tldr: "Odpověď ShopifyQL dotazu přes Admin GraphQL API nově obsahuje pole parseWarnings s nefatálními upozorněními (například na pole určená k vyřazení), takže dotaz proběhne a vývojář se o problému dozví dřív, než přestane fungovat."
tagy: [admin-graphql-api, shopifyql, debugging, warnings, analytics]
zdroj_kanal: dev-changelog
kontext:
  background: |
    ShopifyQL je dotazovací jazyk Shopify pro e-commerce analytiku. Syntaxí připomíná SQL (klauzule FROM a SHOW, volitelně WHERE, GROUP BY, ORDER BY) a nad daty o tržbách, sezeních, zákaznících nebo zásobách běží přes Admin GraphQL API, v editoru v administraci i přes Python SDK. V API se spouští polem shopifyqlQuery, které vrací objekt ShopifyqlQueryResponse s výsledkem v tableData a s chybami parseru v parseErrors.
    Dosud měl vývojář k dispozici jen dvě situace: dotaz je v pořádku a vrátí data, nebo je chybný a vrátí parseErrors. Žádná střední cesta neexistovala. Jakmile Shopify začalo ve schématech označovat pole jako určená k vyřazení nebo upravovat chování, aplikace se o tom dozvěděla až ve chvíli, kdy dotaz přestal fungovat.
    Nové pole parseWarnings tuto mezeru zaplňuje. Dotaz proběhne a vrátí data jako dřív, ale vedle nich přijde seznam nefatálních upozornění. Je to logický krok ve vývoji ShopifyQL v posledních měsících, kdy Shopify rozšiřuje analytics engine pro aplikace třetích stran (operátor MATCHES, schéma pro Shop Campaigns, full-stack platforma pro analytics v apps) a s tím roste potřeba kvalitní zpětné vazby při psaní dotazů.
  zdroje:
    - title: "Shopify: Added parseWarnings to ShopifyqlQueryResponse"
      url: "https://shopify.dev/changelog/posts/added-parsewarnings-to-shopifyqlqueryresponse"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Objekt `ShopifyqlQueryResponse` v Admin GraphQL API dostal nové pole `parseWarnings`. Vrací seznam upozornění, která parser ShopifyQL zjistil při zpracování dotazu, ale která nebrání jeho provedení. Pokud žádná upozornění nejsou, pole vrátí prázdný seznam. Podle changelogu pole zachycuje nefatální problémy, například použití polí, u kterých je naplánované vyřazení (deprecation).

Rozdíl proti stávajícímu `parseErrors` je v tom, že chyby dotaz zastaví, kdežto varování ho nechají proběhnout. Výsledek dotazu v `tableData` tak dostanete jako obvykle a `parseWarnings` přijde vedle něj.

Aby se varování vrátila, je potřeba pole explicitně přidat do selection setu dotazu `shopifyqlQuery`. Samo od sebe se do odpovědi nepřidá. Příklad z changelogu:

```graphql
query {
  shopifyqlQuery(query: "FROM sales SHOW total_sales SINCE -7d") {
    tableData { columns { name } rows }
    parseWarnings
    parseErrors
  }
}
```

Poznámka k rozsahu: changelog jmenuje jako příklad pouze pole určená k vyřazení. Jaké další kategorie varování parser vrací (například upozornění na výkon nebo implicitní převody typů) post nevyjmenovává, takže to je třeba ověřit v referenci `ShopifyqlQueryResponse` pro verzi 2026-10, než se na konkrétní typ hlášení začne spoléhat v logice aplikace.

## Časová osa

- **2026-10-01:** změna zveřejněna v developer changelogu Shopify.
- **API verze 2026-10:** pole je dokumentované v referenci `shopifyqlQuery` a `ShopifyqlQueryResponse` pro tuto verzi. Dostupnost ve starších verzích changelog neuvádí.
- **Bez termínu povinné akce:** jde o aditivní změnu. Stávající dotazy fungují beze změny, dokud pole `parseWarnings` nepřidáte do selection setu.

## Dopad pro nás

**Pro vývojáře:** Změna je zpětně kompatibilní a aditivní, nic se nerozbije. U každého místa, kde se volá `shopifyqlQuery`, má smysl zvážit dvě věci. Za prvé přidat `parseWarnings` do selection setu a výsledek aspoň logovat (nejlépe s textem dotazu a identifikátorem obchodu), aby se o blížící se deprecation vědělo dřív než při výpadku reportu. Za druhé u aplikací s vlastním SQL-like builderem, kde dotaz skládá uživatel, varování zobrazit přímo v UI vedle chyb, podobně jako to dělají linting nástroje. Pozor na to, že varování může přijít i u dotazu, který jsme si sami sestavili před měsíci, takže logování je užitečné i pro dotazy zapsané pevně v kódu.

**Pro PM / PO:** Nízká naléhavost, žádná akce není nutná. Je to drobné, ale užitečné zlepšení kvality: u analytických funkcí postavených nad ShopifyQL se snižuje riziko, že nám dashboard nebo report přestane fungovat kvůli vyřazenému poli bez předchozího upozornění. Pokud nějaká aplikace nabízí uživatelům vlastní tvorbu dotazů, jde i o příležitost zlepšit jejich zkušenost levně, bez zásahu do jádra. Do plánování stačí zařadit malý úkol typu přidat pole do dotazů a vypsat varování do logu nebo do UI.

## Použití v Integrátoru

Přímé použití zatím nevidíme: pokud neposkytujeme reporting nebo dashboard nad `shopifyqlQuery`, změna se nás netýká. Pokud takový reporting stavíme nebo budeme stavět, přidání `parseWarnings` do selection setu a logování varování je minimální úprava s okamžitým přínosem pro ladění.
