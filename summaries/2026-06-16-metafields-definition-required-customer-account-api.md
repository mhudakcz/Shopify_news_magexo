---
date: 2026-06-16
title: "Metafields na app resources musí mít definition pro Customer Account API"
title_en: "Metafields require definition for Customer Account API access"
slug: metafields-definition-required-customer-account-api
zdroj: https://shopify.dev/changelog/metafields-now-require-a-definition-to-be-accessed-through-the-customer-account-api
shrnuto_dne: 2026-06-18
kategorie: [deprecation, breaking-change]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor ukládá vlastní app metafields a zobrazuje je zákazníkům přes Customer Account API nebo UI extensions, je nutné pro každý takový metafield vytvořit definition s odpovídajícími customer account permissions."
dotcene_klienty: []
souvisejici:
  - "deprecation-checkout-metafields"
  - "shop-user-metafields-functions"
  - "built-for-shopify-returns-subscriptions-customer-account-api"
tldr: "App metafields na app resources bez definition přestanou být dostupné přes Customer Account API — je potřeba vytvořit definici a nastavit správná oprávnění."
tagy: [metafield, customer-account-api, definition, breaking]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Metafields jsou mechanismus Shopify pro ukládání libovolných strukturovaných dat k objektům jako jsou objednávky, zákazníci, produkty nebo samotná aplikace (app resource). Každý metafield může, ale nemusí, mít tzv. definition — formální záznam v Shopify, který definuje namespace, klíč, datový typ a přístupová oprávnění pole. Bez definition existovaly metafields pouze jako volná klíč-hodnota data přístupná primárně z Admin API.

    Customer Account API je moderní GraphQL API navržené pro headless a custom customer account zkušenosti — Hydrogen storefronty, customer UI extensions a webové komponenty. Aby API mohlo bezpečně exponovat data třetích stran zákazníkovi, potřebuje explicitní souhlas a definici přístupu. Dosud bylo možné číst app metafields přes Customer Account API i bez definition, pokud existovalo příslušné customer accounts permission.

    Od 16. června 2026 Shopify toto implicitní chování ukončuje. App metafields uložené na app resources, které nemají vytvořenou definition s nakonfigurovanými customer account permissions, jednoduše nevrátí žádnou hodnotu. Aplikace spoléhající na čtení těchto polí v customer account UI extensions nebo Hydrogen storefrontech se mohou rozbít tiše — bez chyby, ale s prázdnými daty.

  zdroje:
    - title: "Shopify: Metafields require definition for Customer Account API access"
      url: "https://shopify.dev/changelog/metafields-now-require-a-definition-to-be-accessed-through-the-customer-account-api"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od **16. června 2026** platí nové pravidlo: app metafields uložené na **app resources** musí mít vytvořenou **metafield definition** s odpovídajícími `customerAccounts` permissions, aby byly dostupné přes **Customer Account API**.

Konkrétní dopad:

- **Metafields bez definition** → Customer Account API vrátí prázdnou hodnotu (žádná chyba, jen `null`)
- **Metafields s definicí, ale bez customer accounts permissions** → stejný výsledek, data nejsou vystavena
- **Metafields na Customer a Order resources** → touto změnou **nejsou dotčeny**

Povinné kroky pro každý dotčený metafield:

1. Spustit mutaci `metafieldDefinitionCreate` pro každý store, kde je app nainstalovaná
2. V definici nastavit `access.customerAccounts` na odpovídající hodnotu (read nebo read-write)
3. Alternativně — pro nové nebo přepracované aplikace — deklarovat metafields přímo v `shopify.app.toml` pomocí `[app_metafields]` sekce (declarative approach), čímž Shopify CLI vytvoří a spravuje definice automaticky

## Časová osa

| Datum | Událost |
|---|---|
| **16. 6. 2026** | Změna je aktivní — app metafields bez definition přestávají vracet hodnoty přes Customer Account API |

Změna je **okamžitá** — není oznámeno žádné přechodné období ani deprecated varování. Postižené aplikace se mohly rozbít ke dni vydání changelog záznamu.

## Dopad pro nás

Tato změna se týká výhradně **app metafields** — tedy metafields, které aplikace ukládá na vlastní app resource a čte zpět přes Customer Account API nebo zákaznické UI extensions. Netýká se admin-only použití (čtení z Admin API zůstává beze změny) ani standardních metafields na Customer a Order objektech.

Pokud vyvíjíme nebo provozujeme aplikaci, která:
- zobrazuje vlastní data zákazníkům v customer account UI extensions,
- čte app metafields v Hydrogen nebo jiném headless storefrontu přes Customer Account API,

pak je nutné zkontrolovat, zda mají všechna taková pole vytvořenou definition a správně nastavená `customerAccounts` oprávnění.

## Použití v Integrátoru

Relevance závisí na tom, zda Integrátor ukládá vlastní app metafields a exponuje je zákazníkům. Pokud ukládáme data (např. preference zákazníka, interní tagy, stavy z ERP) na app resource a čteme je v customer account kontextu, je nutná migrace: buď přes `metafieldDefinitionCreate` mutation volanou per-store, nebo přes TOML deklaraci v repozitáři aplikace.

Doporučený postup pro nové implementace je TOML-first přístup — Shopify CLI pak garantuje konzistentní stav definic napříč všemi instalacemi.
