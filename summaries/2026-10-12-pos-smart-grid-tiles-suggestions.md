---
date: 2026-10-12
title: "POS Smart Grid: suggestions na často používané produkty + slevy"
title_en: "Smart grid tiles suggestions"
slug: pos-smart-grid-tiles-suggestions
zdroj: https://changelog.shopify.com/posts/smart-grid-tiles-suggestions
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o konfiguraci POS layoutu v Adminu a POS aplikaci, API ani extensions se to netýká; relevantní jen pro retail obchody s POS."
dotcene_klienty: []
souvisejici: [pos-smart-grid-discount-tiles, new-pos-editor, faster-discount-entry-pos]
tldr: "Shopify POS Smart Grid nově sám navrhuje tiles pro nejčastěji používané produkty a slevy podle dat obchodu; merchant každý návrh jen přidá nebo odmítne, případně dostane i návrh na odebrání nepoužívaných tiles."
tagy: [pos, smart-grid, suggestions, personalization, retail, discounts]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Smart Grid je konfigurovatelná mřížka na domovské obrazovce Shopify POS aplikace. Obchodníci do ní přidávají tzv. tiles, tedy zkratky pro produkty, kolekce, zákaznické akce nebo slevy, aby personál při obsluze u pokladny nemusel nic složitě vyhledávat. Kvalita celého layoutu ale závisí na tom, jak pečlivě ho někdo nastaví a udržuje, a v praxi se u řady prodejen po úvodním nastavení už nemění.

    Nová funkce tento problém řeší tím, že Shopify navrhuje tiles samo. Doporučení vychází výhradně z dat samotného obchodu, konkrétně z katalogu, objednávek a aktivity v POS, a týkají se produktů a slev, které personál používá nejčastěji. Každý návrh obsahuje vysvětlení, proč se doporučuje, a merchant se rozhoduje, zda tile přidá, nebo zamítne. Smart Grid se nezmění, dokud merchant změnu sám neprovede a neuloží. Návrhy se zobrazují jednak v POS v rámci flow pro přidání tile, jednak v Shopify Adminu při úpravě šablony Smart Gridu v POS editoru. V editoru se navíc mohou objevit návrhy na odebrání tiles, které se za poslední rok nepoužily.

    Změna navazuje na dlouhodobý trend zjednodušování POS konfigurace v roce 2026. Dříve přišly dropdown výběr slev pro discount tiles, rychlejší zadávání slev a sjednocený POS editor, který dnes tvoří rozhraní pro tuto novinku. Funkce je čistě na straně konfigurace POS layoutu a nevyžaduje žádné změny v API ani v aplikacích třetích stran. Changelog neuvádí omezení podle plánu ani regionu, takže dostupnost je potřeba ověřit přímo v POS editoru konkrétního obchodu.
  zdroje:
    - title: "Shopify: Smart grid tiles suggestions"
      url: "https://changelog.shopify.com/posts/smart-grid-tiles-suggestions"
    - title: "Shopify Help Center: Smart grid, Add suggested tiles"
      url: "https://help.shopify.com/en/manual/sell-in-person/getting-started/smart-grid#add-suggested-tiles"
    - title: "Archiv: Smart Grid, dropdown výběr slev místo manual entry"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-discount-tiles/"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
**Smart Grid** (konfigurovatelný layout domovské obrazovky Shopify POS) nově umí **navrhovat tiles** pro produkty a slevy, které personál v obchodě používá nejčastěji. Návrhy se generují pouze z vlastních dat obchodu, tedy z katalogu, objednávek a aktivity v POS. Shopify tím chce přiblížit často používané akce k pokladně a zkrátit čas hledání bestsellerů nebo běžných slev.

Jak návrhy fungují:
- každý návrh obsahuje **vysvětlení, proč se doporučuje**,
- merchant u každého rozhoduje mezi **Add** a **Dismiss**,
- na Smart Gridu se nic nezmění, dokud merchant změnu sám neprovede a **neuloží**.

Kde je najdete:
- **POS aplikace:** flow Add tile,
- **Shopify Admin:** při úpravě šablony Smart Gridu v POS editoru,
- **návrhy na odebrání:** v POS editoru se mohou zobrazit i doporučení odstranit tiles, které se za poslední rok nepoužily.

## Časová osa
- **2026-10-12:** novinka publikovaná v Shopify merchant changelogu, bez uvedeného data postupného nasazení.
- Dostupnost podle plánu nebo regionu changelog neuvádí, funkce se objevuje v POS editoru a v Add tile flow.
- Není potřeba žádná migrace ani akce na straně merchanta, návrhy jsou čistě volitelné.

## Dopad pro nás
**Pro vývojáře:** Bez dopadu na API, webhooks ani POS UI extensions. Jde o konfiguraci layoutu v Adminu a v POS aplikaci. Nic se nemění v datovém modelu ani v integracích, takže není co upravovat ani testovat.

**Pro PM / PO:** Drobná, ale praktická příležitost u retail obchodů s kamennou prodejnou na Shopify POS. Při onboardingu nebo revizi POS layoutu lze návrhy využít jako rychlý výchozí bod, zejména u prodejen, kde se Smart Grid po spuštění nikdy neladil. Doporučení je vhodné projít společně s merchantem, protože se opírá o historická data, a ta nemusí odrážet sezónní akce nebo nové produkty. Zvlášť užitečné je upozornit na návrhy odebrání nepoužívaných tiles, které čistí přeplněné layouty. Naléhavost je nízká, jde o quality-of-life vylepšení.

## Použití v Integrátoru
Přímo **nepoužíváme**, jde o konfiguraci POS layoutu bez vazby na API. Může se hodit jako tip pro obchody s POS při nastavování Smart Gridu.
