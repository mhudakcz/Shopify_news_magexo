---
date: 2026-07-24
title: "Neplatné metafield queries vrací error v Admin GraphQL API 2026-10 (Action Required)"
title_en: "Invalid metafield queries now return errors in the GraphQL Admin API"
slug: invalid-metafield-queries-error-2026-10
zdroj: https://shopify.dev/changelog/invalid-metafield-queries-now-return-errors-in-the-graphql-admin-api
shrnuto_dne: 2026-07-28
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-07-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše integrace filtruje produkty, objednávky nebo jiné resources podle metafieldů v Admin GraphQL API, je nutné ověřit, že každý použitý metafield má definition s configuration.filterable=true — jinak po přechodu na 2026-10 začnou tyto queries vracet error místo tichého ignorování filtru."
dotcene_klienty: []
souvisejici: [metafields-definition-required-customer-account-api, metafield-triggers-additional-webhook-topics, more-order-filtering-capabilities]
tldr: "Od API verze 2026-10 vrátí Admin GraphQL API tvrdý error, pokud query filtruje podle metafieldu, který nemá nastavené filtering — dřív se takový filtr tiše ignoroval a query jen vrátila nesprávná (nefiltrovaná) data."
tagy: [admin-graphql-api, metafields, breaking, filtering, action-required, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Metafields umožňují ukládat libovolná strukturovaná data k produktům, objednávkám, zákazníkům a dalším resources v Shopify. Aby bylo možné podle metafieldu efektivně filtrovat v Admin GraphQL API (například `products(query: "metafields.custom.barva:cervena")`), musí mít daný metafield vytvořenou definition a v ní explicitně zapnutou vlastnost `configuration.filterable: true`. Bez tohoto nastavení Shopify metafield pro filtrovací účely nezná ani neindexuje.

    Dosud platilo, že pokud aplikace poslala query s filtrem na metafield, který filtering nemá zapnuté (chybějící definition, nesprávný typ, nebo definition bez filterable flagu), Shopify tento neplatný predikát tiše ignorovala. Query proběhla bez chyby, ale vrátila jiná data, než vývojář očekával — typicky celou nefiltrovanou sadu výsledků. Tato chyba se často projevila až v produkci, protože lokální testy s malým datasetem rozdíl nemusely odhalit.

    Od API verze 2026-10 (účinnost od 24. 7. 2026, kdy byl changelog zveřejněn, s plným vynucením při přechodu na danou verzi) Shopify toto chování mění na explicitní error. Query s filtrem na nefiltrovatelný metafield selže s jasnou chybovou zprávou místo tichého vrácení nesprávných výsledků. Cílem je odhalit problém při vývoji a testování, ne až u zákazníka v produkci. Aplikace na starších API verzích (2026-07 a nižší) zatím zachovávají původní tiché chování, dokud migraci neprovedou.
  zdroje:
    - title: "Shopify: Invalid metafield queries now return errors in the GraphQL Admin API"
      url: "https://shopify.dev/changelog/invalid-metafield-queries-now-return-errors-in-the-graphql-admin-api"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od API verze **2026-10** vrátí Admin GraphQL API **error**, pokud query obsahuje filtr podle metafieldu, který není nakonfigurován pro filtrování. Typické příčiny chyby:

- metafield **nemá vytvořenou definition** vůbec,
- definition existuje, ale **`configuration.filterable` není nastaveno na `true`**,
- **typ metafieldu neodpovídá** použitému filtru (např. filtr na rozsah čísel proti textovému poli).

Dřívější chování — tiché ignorování neplatného filtru a vrácení nefiltrovaných (nesprávných) výsledků — končí. Queries s korektně nakonfigurovanými filtrovatelnými metafieldy fungují beze změny.

## Časová osa

- **2026-07-24** — changelog zveřejněn, oznámena povinnost akce před přechodem na 2026-10
- **API 2026-10** — nové (přísnější) chování je vynuceno; aplikace na této verzi dostávají error místo tichého selhání
- **API 2026-07 a starší** — dočasně beze změny, ale doporučeno migrovat s předstihem

## Dopad pro nás

**Pro vývojáře:** Je potřeba projít všechny Admin GraphQL queries, které filtrují podle metafieldů (typicky `products`, `orders`, `customers` s `query:` argumentem obsahujícím `metafields.<namespace>.<key>:...`), a pro každý použitý metafield ověřit definition. Pokud definition chybí nebo nemá `configuration.filterable: true`, je nutné buď definition doplnit/upravit mutací `metafieldDefinitionUpdate`, nebo query přepsat tak, aby daný filtr nepoužívala. Doporučené je otestovat proti API 2026-10 ještě před ostrým přechodem, aby se chyba odhalila v testovacím prostředí, ne v produkci.

**Pro PM / PO:** Jde o breaking change s vysokou naléhavostí — pokud klientská integrace na neplatný filtr spoléhá (byť neúmyslně, protože dosud "fungoval" tiše), po přechodu na 2026-10 přestane vracet data a vyhodí error. Je vhodné prioritizovat audit filtrovacích queries dřív, než se API verze v projektech aktualizuje, aby nedošlo k výpadku funkčnosti bez varování.

## Použití v Integrátoru

Možná — pokud naše integrace filtruje resources podle metafieldů v Admin GraphQL API, je potřeba zkontrolovat definice použitých metafieldů (filterable flag) před přechodem na API 2026-10.
