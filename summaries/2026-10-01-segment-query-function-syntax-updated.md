---
date: 2026-10-01
title: "Segment query language: aktualizovaná function syntax (breaking)"
title_en: "Updated function syntax on the segment query language"
slug: segment-query-function-syntax-updated
zdroj: https://shopify.dev/changelog/posts/updated-function-syntax-on-the-segment-query-language
shrnuto_dne: 2026-10-02
kategorie: [breaking-change]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud někde sestavujeme nebo ukládáme segment query stringy pro Admin GraphQL API, budou starší funkce ve tvaru fn() = true potřebovat přepis na fn MATCHES (); jinak se nás změna netýká."
dotcene_klienty: []
souvisejici: [shopifyql-matches-customer-behavior, target-discounts-specific-markets, customer-createdat-shopify-functions-2026-10]
tldr: "Segment query language v Admin GraphQL API 2026-10 mění zápis funkcí z fn() = true na fn MATCHES (parametry) a ruší pojmenovaná data jako 30_days_ago ve prospěch offsetů typu -30d; aplikace generující segment queries musí syntax přepsat."
tagy: [admin-graphql-api, segments, query-language, customer-segments, breaking]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Segment query language je dotazovací jazyk Shopify pro Customer Segmentation, tedy tvorbu dynamických skupin zákazníků podle atributů a chování, například kdo nakoupil určitý produkt, kdo otevřel e-mail nebo odkud je. Segment je v Admin GraphQL API reprezentován textovým query stringem, který aplikace posílají do mutací pro vytvoření a úpravu segmentů a do dotazů na členy segmentu. Stejný jazyk používá i editor segmentů přímo v administraci Shopify.

    Dosud se behaviorální podmínky zapisovaly jako volání funkce porovnané s hodnotou, například `shopify_email.opened() = true` nebo `products_purchased(quantity: 5) = true`. Nová syntax používá operátor MATCHES a parametry v závorkách s plnohodnotnými operátory: `shopify_email.opened MATCHES ()` a `products_purchased MATCHES (quantity = 5)`. Díky tomu jsou nově dostupné i parametrické podmínky, které stará forma neuměla, třeba `quantity != 5` nebo `quantity > 5`. Je to stejný zápis, který už Shopify zavedl v ShopifyQL pro filtrování analytických reportů podle chování zákazníků, takže segmentace a analytika sdílejí jednotnou, SQL podobnou logiku.

    Součástí změny je i deprecace čtyř pojmenovaných dat: `12_months_ago`, `90_days_ago`, `30_days_ago` a `7_days_ago`. Shopify místo nich doporučuje relativní date offsety, například `12_months_ago` se přepisuje na `-12m`. Změna je v changelogu označena jako Breaking API Change a vztahuje se na vývojáře, kteří segment query language používají v Admin GraphQL API (verze 2026-10).
  priklad: |
    # Dříve
    shopify_email.opened() = true
    products_purchased(quantity: 5) = true

    # Nově
    shopify_email.opened MATCHES ()
    products_purchased MATCHES (quantity = 5)
    products_purchased MATCHES (quantity > 5)
  zdroje:
    - title: "Shopify: Updated function syntax on the segment query language"
      url: "https://shopify.dev/changelog/posts/updated-function-syntax-on-the-segment-query-language"
    - title: "Shopify Help Center: Customer segmentation reference, components"
      url: "https://help.shopify.com/en/manual/customers/customer-segmentation/reference-guide/components"
    - title: "MATCHES operator v ShopifyQL pro filtraci dle chování zákazníků"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopifyql-matches-customer-behavior/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Segment query language, tedy jazyk, kterým se v Shopify definují dynamické zákaznické segmenty, dostává novou syntax pro zápis funkcí. Změna je v changelogu vedená jako **Breaking API Change** a týká se Admin GraphQL API ve verzi 2026-10.

**Funkce bez parametrů:**

- Dříve: `shopify_email.opened() = true`
- Nově: `shopify_email.opened MATCHES ()`

**Funkce s parametry:**

- Dříve: `products_purchased(quantity: 5) = true`
- Nově: `products_purchased MATCHES (quantity = 5)`

Nový zápis není jen kosmetika. Parametry uvnitř závorek podporují plnohodnotné porovnávací operátory, které stará forma nenabízela. Nově lze napsat například `products_purchased MATCHES (quantity != 5)` nebo `products_purchased MATCHES (quantity > 5)`. Syntax se tím sjednocuje s operátorem `MATCHES`, který Shopify před časem zavedl v ShopifyQL pro analytické reporty, a celkově se jazyk přibližuje konvencím známým z SQL.

**Deprecace pojmenovaných dat.** Společně se syntaxí funkcí Shopify označil za deprecated čtyři pojmenované relativní hodnoty data: `12_months_ago`, `90_days_ago`, `30_days_ago` a `7_days_ago`. Nahrazují je date offsety. Changelog uvádí příklad `12_months_ago` na `-12m`. Po analogii lze očekávat `-90d`, `-30d` a `-7d`, ale tento přepis si před nasazením ověřte v referenci segment query language, protože changelog uvádí výslovně jen příklad s měsíci.

Shrnutí mapování staré a nové syntaxe:

- `shopify_email.opened() = true` se mění na `shopify_email.opened MATCHES ()`
- `products_purchased(quantity: 5) = true` se mění na `products_purchased MATCHES (quantity = 5)`
- `12_months_ago` se mění na `-12m`
- `90_days_ago`, `30_days_ago`, `7_days_ago` se mění na offsety v téže podobě, tedy dny s příponou `d`

## Časová osa

- **1. 10. 2026** — změna zveřejněna v dev changelogu a vázána na Admin GraphQL API verzi 2026-10.
- **Dříve vydané verze API** — changelog v dostupném výtahu neuvádí, jak přesně se bude nová i stará syntax chovat napříč verzemi a jak dlouho bude stará forma ještě přijímána. Běžný předpoklad je, že aplikace zafixované na starší verzi API zůstanou beze změny do chvíle, než přejdou na 2026-10. Tento bod je potřeba ověřit přímo v dokumentaci, než se na něj spolehne plán migrace.
- **Deprecace pojmenovaných dat** — oznámena ve stejném changelogu; konkrétní datum úplného odstranění nebylo ve zdroji uvedeno.

## Dopad pro nás

**Pro vývojáře:** Zkontrolovat všechna místa, kde aplikace nebo skripty skládají, ukládají nebo parsují segment query stringy pro Admin GraphQL API. Typicky jde o mutace pro vytvoření a úpravu segmentů, o dotazy na členy segmentu a o šablony či konfigurace, kde jsou query stringy uložené jako text. Doporučený postup je projít kód a konfigurace hledáním vzorů `() =` a `: ` uvnitř funkčních volání, přepsat je na `MATCHES (...)`, nahradit `*_ago` konstanty offsety a pokrýt změnu testy proti verzi 2026-10. Pokud aplikace query stringy pouze předává z uživatelského vstupu, je potřeba ověřit, zda validace nebo UI nenabízí uživateli starou formu. Samostatně si ověřit, jak Shopify naloží se segmenty, které už v obchodě existují ve staré syntaxi, protože to ze zdroje jednoznačně nevyplývá.

**Pro PM / PO:** Střední naléhavost. Změna je označená jako breaking, ale týká se jen těch, kdo programově pracují se segmenty přes API. Merchanti, kteří segmenty skládají v administraci Shopify, o změnu nezakopnou, protože editor se řídí aktuálním jazykem. U klientů s aplikacemi třetích stran, které segmenty vytvářejí automaticky (marketingová automatizace, loyalty, e-mailing), stojí za to zjistit, zda dodavatel počítá s verzí 2026-10. Příležitost: nové operátory `!=` a `>` v parametrech funkcí otevírají přesnější segmenty, například zákazníky s více než pěti kusy konkrétního produktu.

## Použití v Integrátoru

Přímo to pravděpodobně nepoužíváme, ale pokud některá naše vrstva nad Admin GraphQL API generuje nebo ukládá segment query stringy, musí se syntax před přechodem na API 2026-10 přepsat. Jinak jde o informaci pro případ, že se klient zeptá na změny v segmentaci zákazníků.
