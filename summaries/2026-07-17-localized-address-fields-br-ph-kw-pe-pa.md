---
date: 2026-07-17
title: "Localized address fields pro Brazílii, Filipíny, Kuvajt, Peru a Panamu (checkout + admin)"
title_en: "Localized address fields rolling out to checkout and Shopify admin for Brazil, Philippines, Kuwait, Peru and Panama"
slug: localized-address-fields-br-ph-kw-pe-pa
zdroj: https://changelog.shopify.com/posts/localized-address-fields-are-rolling-out-to-checkout-and-shopify-admin
shrnuto_dne: 2026-08-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor renderuje nebo validuje adresní formuláře pro tyto trhy vlastní logikou mimo Shopify checkout/admin, je třeba formáty polí sladit s novými lokálními konvencemi."
dotcene_klienty: []
souvisejici: [address-autocomplete-validation-improvements, brazil-cnpj-alphanumeric, italy-sardinian-provinces-update]
tldr: "Shopify postupně nasazuje lokalizovaná adresní pole pro Brazílii, Filipíny, Kuvajt, Peru a Panamu v checkoutu i v adminu, bez nutnosti zásahu merchanta."
tagy: [address, i18n, brazil, philippines, kuwait, peru, panama, checkout, admin]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify postupně nasazuje lokalizovaná adresní pole pro pět zemí – Brazílii, Filipíny, Kuvajt, Peru a Panamu. Cílem je, aby formuláře pro zadávání adresy odpovídaly místním konvencím (pořadí a název polí, formát PSČ, výběr states/provinces) místo generického "one size fits all" formátu adresy, který Shopify dříve používal univerzálně pro všechny trhy.

    Změna se dotýká checkoutu na storefrontu, profilu zákazníka v customer account, správy adres zákazníka v Shopify adminu i editace doručovací adresy u objednávky. Podle changelogu merchant nemusí dělat žádnou akci – rollout probíhá automaticky na pozadí a nasazuje se postupně, bez uvedeného přesného data dokončení.

    Přínos je primárně na straně kupujících v těchto zemích: adresní pole odpovídající lokálním zvyklostem snižují chybovost při zadávání adresy, což se promítá do menšího počtu neúspěšných doručení a hladšího checkout flow. Pro merchanty jde o čistě pozitivní změnu bez rizika – nejde o breaking change ani o povinnou migraci, spíše o postupné vylepšení kvality dat o adresách na podporovaných trzích.
  zdroje:
    - title: "Shopify: Localized address fields rolling out to checkout and Shopify admin for Brazil, Philippines, Kuwait, Peru and Panama"
      url: "https://changelog.shopify.com/posts/localized-address-fields-are-rolling-out-to-checkout-and-shopify-admin"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšiřuje lokalizaci adresních formulářů na dalších pět trhů: Brazílii, Filipíny, Kuvajt, Peru a Panamu. Místo jednoho univerzálního tvaru adresního pole se checkout, customer account i Shopify admin přizpůsobí místním konvencím – jiné pořadí polí, jiný způsob zadávání čísla domu/ulice, jiný formát PSČ nebo výběr states/provinces podle toho, co je pro danou zemi standardní.

Změna se projeví na čtyřech místech: v checkoutu při zadávání doručovací adresy, v profilu zákazníka v customer account, ve správě adres zákazníka v adminu a při editaci doručovací adresy u existující objednávky. Shopify explicitně uvádí, že rollout je automatický a merchant nemusí nic konfigurovat ani migrovat.

Jde o pokračování dlouhodobého trendu, kdy Shopify postupně nahrazuje generický adresní formulář lokalizovanými variantami – podobně jako dřívější úpravy autocomplete a validace pro US/AU/CA/NL/FR nebo úpravy CNPJ validace pro Brazílii z předchozích changelogů.

## Časová osa

- **2026-07-17** – Shopify publikuje changelog o postupném nasazení lokalizovaných adresních polí pro BR/PH/KW/PE/PA
- Rollout probíhá postupně (rolling deployment), bez konkrétně uvedeného data dokončení
- Merchant nemusí podnikat žádnou akci – změna se aplikuje automaticky

## Dopad pro nás

**Pro vývojáře:** Pokud pro klienty na těchto trzích (BR/PH/KW/PE/PA) nestavíme vlastní adresní formuláře mimo nativní Shopify checkout/admin (např. custom storefront s vlastním address formem, nebo server-side validace adres v rámci vlastní logiky), stojí za to prověřit, zda naše validace/formátování odpovídá nově zavedeným lokálním konvencím. U standardního Shopify checkoutu a adminu nemusíme dělat nic – Shopify změnu nasadí sám.

**Pro PM / PO:** Nízká urgence, žádný breaking change. Relevantní hlavně pro klienty prodávající do Brazílie, Filipín, Kuvajtu, Peru nebo Panamy – lze to zmínit jako drobné vylepšení kvality doručení v těchto zemích, bez nutnosti jakéhokoli zásahu z naší strany.

## Použití v Integrátoru

Přímý dopad na naše integrace je nepravděpodobný – týká se to primárně nativního Shopify checkoutu a adminu. Relevance vzniká jen tam, kde bychom paralelně k Shopify replikovali adresní formuláře nebo validaci pro tyto konkrétní trhy.
