---
date: 2026-04-24
title: "Customer.taxSettings dostupné v Admin API od 2026-07"
title_en: "Customer tax settings now available in Admin API"
slug: customer-tax-settings-admin-api
zdroj: https://shopify.dev/changelog/customer-tax-settings-now-available-in-admin-api
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-07"]
nalehavost: stredni
customer_facing: false

ucinnost_od: 2026-07-01
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 20+ customer methods v naší integraci (createCustomer, getCustomer, getCustomerByEmail …) a 6 storefront. Nové pole taxSettings lze přidat do existujících queries, pokud klient potřebuje VAT/tax IDs."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Objekt `CustomerTaxSettings` reprezentuje daňové nastavení konkrétního zákazníka v Shopify. Klíčovým polem je `taxId` — daňové identifikační číslo (DIČ, resp. IČ DPH, VAT ID), které zákazník dobrovolně vyplní při checkoutu. Toto číslo slouží jako doklad registrace k DPH a je nezbytné pro správné vystavování dokladů v přeshraničním obchodě uvnitř i vně EU.

    Shopify rozlišuje daňová nastavení na dvou úrovních: pro firemní lokace v rámci B2B (`CompanyLocation.taxSettings.taxRegistrationId`, dostupné od API 2025-01) a pro individuální zákazníky (`Customer.taxSettings`). Zatímco B2B pole bylo přístupné vývojářům dříve, zákaznické `taxSettings` zůstávalo interní součástí platformy. Zpřístupnění v API 2026-07 sjednocuje přístup k daňovým identifikátorům napříč oběma typy subjektů.

    Praktické využití spočívá zejména v automatizaci B2B procesů: aplikace mohou načíst VAT číslo zákazníka a předat ho do ERP systémů, fakturačních nástrojů nebo účetních synchronizací bez nutnosti manuálního přepisu. Zvláště relevantní je tato funkce pro merchanty prodávající do zemí EU s povinností ověřování DIČ nebo pro cross-border obchod vyžadující daňovou dokumentaci.

    Shopify paralelně rozšiřuje B2B funkcionality i na plány mimo Shopify Plus (od dubna 2026), což zvyšuje počet merchantů, kteří budou tuto funkcionalitu potřebovat. Pole `taxId` je nepovinné — zákazník ho při nákupu nemusí vyplnit — takže aplikace musí počítat s hodnotou `null`.
  zdroje:
    - title: "Customer tax settings now available in Admin API — Shopify Changelog"
      url: "https://shopify.dev/changelog/customer-tax-settings-now-available-in-admin-api"
    - title: "Shopify zpřístupňuje B2B features všem plánům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
    - title: "Updated list of tax-inclusive countries pro dynamic pricing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/tax-inclusive-countries-update/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6

tldr: "Od API 2026-07 lze v Admin API číst tax IDs (VAT) zákazníků sebrané při checkoutu."
tagy: [customer, tax, vat, b2b]
---

## Co se mění
Od API verze **2026-07** je pole `taxSettings` na objektu `Customer` v Admin GraphQL API veřejně dostupné. Lze přes něj číst tax IDs (např. **VAT číslo**), které zákazník zadal při checkoutu. Dříve bylo pole interní; nově ho mohou aplikace dotazovat stejně jako jiné customer fields.

## Časová osa
- **2026-07-01** — API 2026-07 začíná platit, pole `taxSettings` veřejně přístupné

## Dopad pro nás
**Pro vývojáře:**
Pokud existující customer queries (např. `getCustomer`, `getCustomerByEmail`) potřebují vrátit VAT číslo pro B2B fakturaci, můžeme nově přidat `taxSettings` selektor. Funkce je opt-in — staré queries fungují beze změny. Vyžaduje upgrade API verze klienta na 2026-07.

**Pro PM / PO:**
Nová příležitost pro klienty s **B2B nebo mezinárodními** scénáři: VAT číslo se dá automaticky propsat do faktur, ERP synců, daňových reportů. Šetří manuální vstup při zakládání B2B zákazníků.

## Použití v Integrátoru
**Možná** — máme 20+ customer methods v naší integraci. Nové pole můžeme přidat do existujících queries, pokud konkrétní klient potřebuje číst VAT/tax IDs. Vyžaduje update API verze v configu na 2026-07.

## Rizika a edge cases
- Vyžaduje upgrade na API 2026-07 — zkontrolovat, že žádné jiné používané pole není v 2026-07 deprecated
- Pole nemusí být vyplněno (zákazník nemusel VAT zadat) — front-end musí ošetřit `null`
