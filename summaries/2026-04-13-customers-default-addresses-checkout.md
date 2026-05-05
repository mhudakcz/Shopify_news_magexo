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
