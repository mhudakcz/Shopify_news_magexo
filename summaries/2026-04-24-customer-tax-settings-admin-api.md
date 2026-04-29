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
dukaz_integratoru: "Máme 20+ customer methods v shopify-client/admin/customers (createCustomer, getCustomer, getCustomerByEmail …) a 6 storefront. Nové pole taxSettings lze přidat do existujících queries, pokud klient potřebuje VAT/tax IDs."
dotcene_klienty: []
souvisejici: []

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
**Možná** — máme 20+ customer methods v `shopify-client/admin/customers`. Nové pole můžeme přidat do existujících queries, pokud konkrétní klient potřebuje číst VAT/tax IDs. Vyžaduje update API verze v configu na 2026-07.

## Rizika a edge cases
- Vyžaduje upgrade na API 2026-07 — zkontrolovat, že žádné jiné používané pole není v 2026-07 deprecated
- Pole nemusí být vyplněno (zákazník nemusel VAT zadat) — front-end musí ošetřit `null`
