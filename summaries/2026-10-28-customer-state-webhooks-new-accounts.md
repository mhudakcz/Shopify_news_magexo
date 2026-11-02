---
date: 2026-10-28
title: "First sign-in: Customer.state + customers/enable webhook (new customer accounts)"
title_en: "First sign-ins to new customer accounts set Customer.state and send customers/enable webhooks"
slug: customer-state-webhooks-new-accounts
zdroj: https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable
shrnuto_dne: 2026-11-02
kategorie: [nova-api]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud synchronizujeme zákazníky do CRM, ERP nebo e-mailingu přes webhooky customers/update či customers/enable, první přihlášení do nových customer accounts je teď spouští. Bez ověření v kódu nevíme, jestli jsou naše handlery idempotentní."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, unlink-customer-identity-provider-subject-admin-api, sync-customer-data-identity-provider, next-generation-events-field-level-webhooks]
tldr: "První přihlášení zákazníka do nových customer accounts (jakoukoli metodou) nově nastaví `Customer.state` na `ENABLED` a odešle webhooky `customers/enable` i `customers/update`. Změna platí od 17. 10. 2026, Shopify ji označuje jako bez nutné akce, ale integrace využívající webhooky mohou dostat další události a zákazníky aktivované hromadnou migrací webhooky nikdy nedostaly."
tagy: [customers, webhooks, customer-state, new-accounts, admin-api, breaking]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Pole `Customer.state` v Admin GraphQL API říká, v jakém stavu je zákaznický účet. Dosud se u nových customer accounts po prvním přihlášení stav nezměnil a zákazník zůstával v `DISABLED`, zatímco v legacy customer accounts se aktivací účtu přepnul na `ENABLED`. Shopify tento rozdíl odstraňuje: první přihlášení do nových customer accounts nově nastaví `ENABLED` a zároveň odešle webhooky `customers/enable` a `customers/update`. Platí to pro všechny metody přihlášení (e-mailový kód, Shop, Google, Facebook, Apple i třetí strany jako identity provider). Změna se projeví i v Liquidu, kde `customer.has_account` dřív pro takové zákazníky vracelo `false` a po prvním přihlášení vrací `true`.

    Změna je malá, ale zapadá do širšího směru, kterým Shopify v podzimních novinkách sjednocuje zákaznickou identitu. Editions Fall '26 z 28. října 2026 přinesly vrstvu kolem Shop sign-in (granulární consent scopes, one-tap sign-in, Shop sign-in i pro weby mimo Shopify) a Developer téma uvádí Next Generation Events jako GA s 18 topics včetně zákazníků. Tento konkrétní changelog post v archivních přehledech Editions uvedený není, vyšel ale týž den jako běžná položka vývojářského changelogu. Z dostupných zdrojů nelze říct, že jde o součást Editions, jen o časovou a tematickou souvislost.

    Dopad závisí na tom, co aplikace dělá s lifecycle událostmi zákazníka. Aplikace, které na `customers/enable` nebo `customers/update` posílají uvítací zprávy, přidělují věrnostní body nebo zakládají záznamy v CRM, mohou dostat události v jiný okamžik než dřív. Zásadní je i historie. Zákazníci, kteří se přihlásili od 27. 5. 2024 do data změny, byli jednorázově přepnuti na `ENABLED` bez odeslání webhooků, takže aplikace spoléhající jen na webhooky o nich nevědí. Naopak zákazníci, kteří se od 27. 5. 2024 nepřihlásili, zůstávají `DISABLED` a jejich příští přihlášení spustí stav i oba webhooky, tedy může přijít vlna událostí po kampani nebo sezónním návratu zákazníků. Shopify post označuje jako Update bez nutné akce a nepřiřazuje mu API verzi, takže se chová stejně napříč verzemi.
  zdroje:
    - title: "Shopify: First sign-ins to new customer accounts set Customer.state and send customers/enable webhooks"
      url: "https://shopify.dev/changelog/posts/first-sign-ins-to-new-customer-accounts-now-set-customer-state-and-send-customers-enable"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Docs: Customer.state (GraphQL Admin API)"
      url: "https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.state"
    - title: "Shopify Docs: webhook topic customers/enable"
      url: "https://shopify.dev/docs/api/webhooks/latest?reference=toml#list-of-topics-customers/enable"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Při **prvním přihlášení zákazníka do nových customer accounts** Shopify nově:

- nastaví `Customer.state` na **`ENABLED`** (do té doby zůstával `DISABLED`),
- odešle webhook **`customers/enable`**,
- odešle webhook **`customers/update`**.

Chování je sjednocené s aktivací účtu v legacy customer accounts. Platí pro všechny způsoby přihlášení: e-mailový kód, Shop, Google, Facebook, Apple a třetí strany (identity provider).

Související změna je v Liquidu. Pro zákazníky, kteří se přihlásili do nových customer accounts, dřív vracelo `customer.has_account` hodnotu `false`, protože byli `DISABLED`. Po prvním přihlášení teď vrací `true`.

**Existující zákazníci:**

- Kdo se přihlásil mezi **27. 5. 2024** a datem změny, byl jednorázovou aktualizací přepnut na `ENABLED`, **bez odeslání webhooků**.
- Tato jednorázová aktualizace nemusela změnit `updated_at` u všech dotčených zákazníků, takže podle `updated_at` je nelze spolehlivě dohledat. Shopify doporučuje dotazovat se přímo na `Customer.state`.
- Kdo se od 27. 5. 2024 nepřihlásil, zůstává `DISABLED`. Jeho příští přihlášení se bere jako první přihlášení a spustí změnu stavu i oba webhooky.

**Koho se to týká** (podle Shopify): aplikace, integrace a themes, které čtou `Customer.state` z Admin GraphQL API, odebírají webhooky `customers/enable` nebo `customers/update`, zpracovávají události `customer.state` z Events API, nebo v Liquidu používají `customer.has_account`.

Post je v changelogu označen jako **Update** a **bez nutné akce**, bez vazby na konkrétní verzi API. Dotčené povrchy jsou GraphQL Admin API, App Events API a Events & webhooks. Tag `breaking` v tomto článku vyjadřuje naše hodnocení rizika pro integrace, ne klasifikaci ze strany Shopify.

## Časová osa

- **2024-05-27:** zákazníci, kteří se přihlásili od tohoto data, byli později jednorázově přepnuti na `ENABLED` (bez webhooků).
- **2026-10-16:** záznam v changelogu vytvořen (podle metadat stránky).
- **2026-10-17:** změna vstupuje v platnost (první přihlášení nastavuje `ENABLED` a posílá webhooky).
- **2026-10-28:** Shopify změnu zveřejňuje v dev changelogu, tedy 11 dní po nasazení.
- **Průběžně:** každý zákazník, který se od 27. 5. 2024 nepřihlásil, vyvolá při příštím přihlášení změnu stavu a oba webhooky.

## Dopad pro nás

**Pro vývojáře:** Změna je aditivní a Shopify ji nepovažuje za zásah vyžadující akci, přesto stojí za krátkou kontrolu. Praktické body:

- **Více událostí než dřív.** Jedno první přihlášení vyvolá `customers/enable` a zároveň `customers/update`. Handler na `customers/update` tak dostane navíc událost, která nevznikla úpravou profilu. Handlery musí být idempotentní a nesmí na každé `customers/update` spouštět nákladnou synchronizaci nebo odesílat zprávy.
- **Načasování akcí.** Rozhodněte, jestli je první přihlášení správný okamžik pro uvítací e-mail, přidělení věrnostních bodů nebo založení záznamu v CRM. Dřív tuto událost nic neposílalo, takže logika navázaná na jiné lifecycle události se může chovat jinak.
- **Backfill.** Zákazníci přepnutí jednorázovou aktualizací webhooky nikdy nedostali. Pokud integrace spoléhá jen na webhooky, tyto zákazníky nezná. Doplňte dotaz na `Customer.state` (například jednorázový průchod přes zákazníky v `ENABLED`) a nespoléhejte na `updated_at`.
- **Vlna událostí.** Dormantní zákazníci (bez přihlášení od 27. 5. 2024) vyvolají události až při návratu. Po e-mailové kampani nebo v sezóně slev (Black Friday) může přijít nárazový provoz webhooků, na který je potřeba mít kapacitu fronty a rate limity cílových systémů.
- **Zpětná kontrola.** Změna platí od 17. 10., takže v logách stojí za to ověřit, jestli od tohoto data nepřibylo `customers/update` bez odpovídající změny dat.
- **Themes.** Zkontrolujte kód používající `customer.has_account`. Pro zákazníky, kteří se přihlásili do nových customer accounts, nově vrací `true`, což může změnit zobrazení například výzev k registraci nebo přihlášení.

**Pro PM / PO:** Naléhavost střední, nejde o výpadek ani deprecation, ale o změnu chování, která se může projevit až v provozu (duplicitní uvítací zprávy, dvojí přidělení bodů, zahlcení CRM). U klientů s novými customer accounts a napojením na CRM, loyalty nebo e-mailing je vhodné krátce ověřit, na jaké události jsou vázané, a zeptat se, zda zákazníky aktivované před změnou nepotřebují dohnat. Je to také drobný argument pro audit integrací kolem zákaznických účtů. Shopify neuvádí, jestli lze chování vypnout nebo omezit, takže plánujte s tím, že jde o trvalou změnu.

## Použití v Integrátoru

Přímé využití webhooků `customers/enable` ani pole `Customer.state` jsme v tomto přehledu neověřovali, takže vztah k našim synchronizacím zákazníků hodnotíme jako možný. U integrací, které přes `customers/update` přenášejí zákazníky do ERP či CRM, je vhodné ověřit idempotenci a případně doplnit kontrolní dotaz na `Customer.state`.
