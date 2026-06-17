---
date: 2026-03-13
title: "Address autocomplete a validation: US, AU, CA, NL, FR"
title_en: "Address Autocomplete and Validation Improvements for US, AU, CA, NL, FR"
slug: address-autocomplete-validation-improvements
zdroj: https://changelog.shopify.com/posts/address-autocomplete-and-validation-improvements-for-us-au-ca-nl-fr
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme address methods (customerAddressCreate, customerAddressUpdate). Address validation v checkoutu může nově odmítnout/normalizovat adresu, kterou bychom zapsali přes API."
kontext:
  background: |
    Address autocomplete je funkce v Shopify checkoutu, která zákazníkům navrhuje kompletní adresy v reálném čase, jakmile začnou psát ulici nebo PSČ. Address validation pak ověřuje, zda zadaná adresa existuje a je formátována správně pro dané území — normalizuje ji na standardní formát poštovní doručitelnosti.

    Shopify tuto funkci historicky provozoval s pomocí externích poskytovatelů dat (jako Google Places). Přechod na vlastní infrastrukturu — „plně poháněnou Shopify" — je součástí širší strategie snižovat závislost na třetích stranách a získat plnou kontrolu nad kvalitou a latencí adresních dat. Zlepšení z března 2026 se konkrétně zaměřují na pět zemí s odlišnými adresními systémy: USA, Austrálii, Kanadu, Nizozemsko a Francii.

    V praxi tato vylepšení snižují míru chybně zadaných adres při dokončení objednávky, což vede k nižšímu počtu nedoručitelných zásilek a reklamací. Pro obchodníky fungující na mezinárodních trzích jde o přímý dopad na konverzní poměr checkoutu a spokojenost zákazníků. Validace adres doplňuje i další checkout funkce — například správu výchozích adres přihlášených zákazníků nebo fakturační validaci v B2B scénářích.
  zdroje:
    - title: "Address Autocomplete and Validation Improvements for US, AU, CA, NL, FR — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/address-autocomplete-and-validation-improvements-for-us-au-ca-nl-fr"
    - title: "Customers can set and manage default addresses in checkout"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customers-default-addresses-checkout/"
    - title: "Cart and Checkout Validation: billing address a PO number error targets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/cart-checkout-validation-billing-po/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Address autocomplete + validation zlepšen pro USA, Austrálii, Kanadu, Nizozemí, Francii — rychlejší response a přesnější návrhy."
tagy: [address, autocomplete, validation, international, checkout]
---

## Co se mění
**Address autocomplete a validation** ve checkoutu má lepší kvalitu pro **USA, Austrálii, Kanadu, Nizozemí a Francii**:
- Rychlejší response time
- Přesnější návrhy
- Lepší normalizace adres

## Dopad pro nás
**Pro vývojáře:**
Pokud naše integrace zapisují adresy přes `customerAddressCreate`, validation v Shopify checkoutu může se silnější validation odmítnout / normalizovat adresu jiným způsobem. Pravděpodobně transparentní, ale stojí za zmínit.

## Použití v Integrátoru
**Možná** — address methods používáme. Validation se týká checkoutu, naše API zápisy zůstávají platné.
