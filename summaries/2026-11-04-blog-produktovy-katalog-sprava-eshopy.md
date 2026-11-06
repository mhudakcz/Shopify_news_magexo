---
date: 2026-11-04
title: "Správa pro produktový katalog: Průvodce pro e-shopy (2027)"
slug: blog-produktovy-katalog-sprava-eshopy
zdroj: https://www.shopify.com/cz/blog/produktovy-katalog
shrnuto_dne: 2026-11-06
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Katalogová data (SKU, varianty, metapole, média) jsou základ každé synchronizace produktů mezi ERP, PIM a Shopify."
dotcene_klienty: []
souvisejici: [blog-pim-system-pruvodce-software-2027, blog-shopify-3d-scanner-ios-produktovy-katalog, blog-shopify-multiple-locations-rizeni]
tldr: "Shopify publikoval průvodce správou produktového katalogu: jeden zdroj pravdy, vlastník každého pole a PIM až ve chvíli, kdy složitost dat přesáhne nativní nástroje."
tagy: [katalog, pim, produkty, data-management, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Správa produktového katalogu je proces tvorby, organizace, doplňování, aktualizace a distribuce údajů o zboží napříč prodejními kanály. Zahrnuje názvy, popisy, fotky, kategorie, specifikace, varianty, ceny, zásoby a data pro jednotlivé trhy. Článek ji popisuje jako základ důvěry zákazníků, konverzí i viditelnosti ve vyhledávačích a AI nástrojích.

    Průvodce shrnuje limity a možnosti Shopify. Produkt může mít až tři parametry variant a 2 048 kombinací, až 250 médií (obrázky, 3D modely, videa) a až 250 štítků. Dále zmiňuje standardní taxonomii, vlastní metapole, hromadný editor, ruční a chytré kolekce, automatizace přes Shopify Flow a správu kanálů, trhů a B2B katalogů z jednoho záznamu. Shopify Catalog synchronizuje data do AI nákupních platforem a mapování umí číst i metapole. Pokročilé B2B funkce jsou od dubna 2026 dostupné na všech standardních tarifech, na základních tarifech se třemi aktivními velkoobchodními katalogy.

    Doporučení jsou praktická: jediný zdroj pravdy, standardizovaná pole s přiděleným vlastníkem, mapování požadavků kanálů na stejný záznam a pravidelné kontroly konzistence a zásob. Dedikovaný PIM dává smysl až u více dodavatelů, formálního schvalování, složitých regulatorních dat nebo syndikace mimo Shopify. Statistiky a případové studie (Akeneo, Salsify, Baymard, Antonioli, Skullcandy) pocházejí od vendora nebo komerčně zainteresovaných zdrojů, proto je vhodné je brát s rezervou.
  zdroje:
    - title: "Shopify: Správa pro produktový katalog: Průvodce pro e-shopy (2027)"
      url: "https://www.shopify.com/cz/blog/produktovy-katalog"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify publikoval obsáhlého průvodce správou produktového katalogu. Vysvětluje, z čeho se katalog skládá (identifikátory jako SKU a GTIN, atributy, taxonomie, metapole, varianty, ceny, zásoby a média) a jak jej v Shopify spravovat pomocí kolekcí, hromadných úprav, štítků, Shopify Flow a správy kanálů, trhů a B2B katalogů. Zmiňuje i limity platformy, například tři parametry variant s 2 048 kombinacemi a 250 médií na produkt.

Hlavní myšlenka je, že chaos v datech stojí tržby i vratky, a proto je potřeba jeden zdroj pravdy, standardizovaná pole a jasný vlastník každého z nich. Dedikovaný PIM článek doporučuje až tehdy, když složitost přesáhne nativní nástroje, tedy u více dodavatelů, schvalovacích procesů, regulatorních dat nebo syndikace mimo Shopify. Číselné údaje a případové studie pocházejí z vendorských zdrojů a je vhodné je ověřit.

## Pro koho je to relevantní

Hlavně pro merchanty s větším sortimentem, zhruba od 500 SKU, kteří řeší, zda jim stačí nativní Shopify, nebo už potřebují PIM. Pro implementační týmy je článek užitečným podkladem při návrhu datového modelu (metapole, taxonomie, varianty) a při diskusi o zdroji pravdy mezi ERP, PIM a Shopify. Nejde o změnu API ani o akutní téma, proto je nalehavost nízká. Souvisí s tématy PIM systémů, 3D skenování produktů a řízení více skladových lokací.
