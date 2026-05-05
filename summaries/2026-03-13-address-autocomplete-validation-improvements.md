---
date: 2026-03-13
title: "Address autocomplete a validation: US, AU, CA, NL, FR"
title_en: "Address Autocomplete and Validation Improvements for US, AU, CA, NL, FR"
slug: address-autocomplete-validation-improvements
zdroj: https://changelog.shopify.com/posts/address-autocomplete-and-validation-improvements-for-us-au-ca-nl-fr
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme address methods (customerAddressCreate, customerAddressUpdate). Address validation v checkoutu může nově odmítnout/normalizovat adresu, kterou bychom zapsali přes API."
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
