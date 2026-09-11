---
date: 2026-09-08
title: "Customer Address API: nový countryCode field (Checkout UI deprecation)"
title_en: "Customer Address APIs now support countryCode"
slug: customer-address-apis-countrycode
zdroj: https://shopify.dev/changelog/customer-address-apis-now-support-countrycode
shrnuto_dne: 2026-09-11
kategorie: [nova-api, deprecation]
api_oblast: customer
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud čteme/zapisujeme adresy zákazníků přes Customer Account API, měli bychom přejít na countryCode."
dotcene_klienty: []
souvisejici: [localized-address-fields-br-ph-kw-pe-pa, customers-default-addresses-checkout, checkout-blocks-non-compliant-addresses]
tldr: "Customer Account API dostává nové pole countryCode (ISO 3166 alpha-2) pro adresy zákazníků; starší textové/kódové pole (territoryCode) je deprecated, ale zatím funkční ve verzi 2026-10 a starších."
tagy: [customer-account-api, checkout-ui, address, countrycode, iso-3166, deprecation]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Adresy zákazníků v Shopify se dlouhodobě potýkaly s nejednoznačným zápisem země — textové nebo volně formátované hodnoty vedly k edge case scénářům (typicky záměna "Georgia" jako americký stát vs. "Georgia" jako stát). Od API verze 2026-10 přidává Shopify k objektům CustomerAddress a CustomerAddressInput nové pole countryCode, které používá silně typovaný enum CountryCode a očekává formát ISO 3166-1 alpha-2 (např. US, CZ, GB).

    Stávající pole pro zemi (territoryCode) zůstává v API verzi 2026-10 a starších plně funkční a deprecated je pouze formálně — nejde o okamžité odstranění ani breaking change. Pokud aplikace pošle v mutaci obě hodnoty současně, countryCode má přednost. Shopify zatím nezveřejnil žádný konkrétní termín odstranění staršího pole.

    Změna se dotýká primárně Customer Account API a navazuje na širší snahu Shopify sjednotit práci s adresami napříč Checkout UI, adminem a customer account plochou — podobně jako dřívější lokalizace adresních polí pro vybrané země nebo native pravidla pro blokování nesprávně formátovaných adres v checkoutu.
  zdroje:
    - title: "Shopify: Customer Address APIs now support countryCode"
      url: "https://shopify.dev/changelog/customer-address-apis-now-support-countrycode"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšiřuje Customer Account API o nové pole `countryCode` na objektech `CustomerAddress` a `CustomerAddressInput`. Pole používá silně typovaný enum `CountryCode` a očekává hodnoty ve formátu ISO 3166-1 alpha-2 (dvoupísmenné kódy jako `US`, `CZ`, `DE`). Cílem je odstranit nejednoznačnosti, které vznikaly u volně zapisovaného textového pole pro zemi — typickým příkladem je záměna amerického státu Georgia s eponymní zemí.

Dosavadní pole `territoryCode` je nyní formálně označeno jako deprecated, ale zůstává plně funkční v API verzi 2026-10 i starších — Shopify negarantuje žádný konkrétní termín odstranění. Pokud klientská aplikace při mutaci pošle obě pole zároveň, přednost dostává nové `countryCode`.

## Časová osa

- **2026-09-08** — changelog zveřejněn, `countryCode` dostupný od API verze 2026-10
- **2026-10** — plánovaný release API verze 2026-10, ve které je pole oficiálně součástí schématu
- Termín odstranění `territoryCode` zatím není stanoven

## Dopad pro nás

**Pro vývojáře:** V dotazech a mutacích nad Customer Account API (queries/mutations pracující s adresami zákazníka) je vhodné přejít na `countryCode` a posílat validní ISO 3166-1 alpha-2 hodnoty místo textového/alpha-3/numerického zápisu země. Žádná okamžitá migrace není vynucená — aplikace na starších API verzích fungují beze změny.

**Pro PM / PO:** Jde o neviditelnou technickou změnu bez dopadu na zákazníka v UI. Relevantní je hlavně pro projekty, kde vlastní kód čte nebo zapisuje adresy zákazníků přes Customer Account API a kde by mělo smysl zpřesnit validaci země při příští úpravě daného modulu.

## Použití v Integrátoru

Pokud některý z našich projektů pracuje s adresami zákazníků přes Customer Account API, stojí za zvážení přechod na `countryCode` při nejbližší příležitosti (např. spolu s jinou úpravou stejného modulu) — jde o menší, nekritickou úpravu bez tlaku na okamžitou migraci.
