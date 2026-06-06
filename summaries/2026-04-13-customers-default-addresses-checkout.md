---
date: 2026-04-13
title: "Customers mohou nastavit a spravovat default adresy v checkoutu"
title_en: "Customers can set and manage default addresses in checkout"
slug: customers-default-addresses-checkout
zdroj: https://changelog.shopify.com/posts/customers-can-now-set-and-manage-default-addresses-in-checkout
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme customer methods (customerAddressCreate, customerAddressUpdate, updateCustomerDefaultAddress). Změna v checkoutu může ovlivnit, jak se default address propaguje — ale naše API metody zůstávají platné."
kontext:
  background: |
    Výchozí adresa (default address) je v Shopify primární doručovací adresa přiřazená zákaznickému účtu, která se automaticky předvyplní při zahájení checkoutu. Každý zákazník může mít v adresáři více adres, přičemž právě jedna nese příznak výchozí — tuto hodnotu uchovává pole `defaultAddress` na objektu `Customer` ve Storefront i Admin API.

    Historicky Shopify neukládal explicitní volbu zákazníka: systém aplikoval heuristiku „naposledy použité adresy" — do pole `defaultAddress` se automaticky propagovala adresa z posledního dokončeného nákupu. Tato pasivní logika fungovala bez viditelného ovládacího prvku a zákazník ji nemohl vědomě přepsat. Shopify postupně posiluje autonomii zákazníků v celém nákupním procesu — od address autocomplete a validace (březen 2026) přes per-market checkout customizaci až po správu adres v customer accounts.

    Prakticky tato změna ovlivňuje checkout UX: zákazník vidí jasný ovládací prvek pro nastavení výchozí adresy přímo v průběhu nákupu i v profilu účtu. Pro vývojáře pracující s `customerDefaultAddressUpdate` mutací Storefront API se rozhraní nemění — mutace přijímá `addressId` a `customerAccessToken` a vrací aktualizovaný objekt `Customer`. Dopad je tedy primárně na straně merchant UX a zákaznické spokojenosti, nikoliv na straně API kompatibility.

    Tato změna je součástí širší vlny vylepšení customer accounts, která zahrnuje i feature preview pro B2B login flows, multi-store účty a pokročilou správu adres — ohlášeno Shopify v červnu 2026.
  zdroje:
    - title: "Customers can now set and manage default addresses in checkout — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/customers-can-now-set-and-manage-default-addresses-in-checkout"
    - title: "Shopify Storefront API: customerDefaultAddressUpdate mutation"
      url: "https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate"
    - title: "Archiv: Address autocomplete a validation (US, AU, CA, NL, FR)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/address-autocomplete-validation-improvements/"
    - title: "Archiv: Feature preview — vylepšení customer accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/feature-preview-customer-account-improvements/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Logged-in customer si může nastavit default adresu místo dosavadní logiky 'last-used'. Správa dostupná z checkoutu i account profilu."
tagy: [checkout, customer, address, default]
---

## Co se mění
Logged-in zákazník si nyní může v checkoutu **nastavit default adresu** (nebo změnit). Předtím Shopify používal **last-used** logiku — adresa z poslední objednávky byla default. Nově je to explicitní volba customera.

## Dopad pro nás
**Pro vývojáře:**
Naše customer address methods (`customerAddressCreate`, `customerAddressUpdate`, `deleteCustomerAddress`, `updateCustomerDefaultAddress`) zůstávají beze změny. Pokud naše integrace volá `updateCustomerDefaultAddress`, default behavior se může mírně lišit od dřívější last-used heuristiky — testovat při refactoru.

## Použití v Integrátoru
**Možná** — máme storefront `updateCustomerDefaultAddress`. Logika beze změny, jen merchant flow se vylepšil.
