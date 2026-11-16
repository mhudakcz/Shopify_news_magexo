---
date: 2026-11-13
title: "Market metafields: tie-breaking mezi equally specific markets podle market handle (alphabetical)"
title_en: "Market metafields break ties between equally specific markets by market handle"
slug: market-metafields-tie-breaking-market-handle
zdroj: https://shopify.dev/changelog/posts/market-metafields-break-ties-between-equally-specific-markets-by-market-handle
shrnuto_dne: 2026-11-16
kategorie: [nova-api]
api_oblast: storefront
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient čte market metafields přes Storefront API, Liquid nebo Functions a má překrývající se markets, může se hodnota po rolloutu změnit."
dotcene_klienty: []
souvisejici: [graphql-admin-market-hierarchies-query, delivery-options-functions-metafields, customize-themes-per-market]
tldr: "Když kupujícímu odpovídá více stejně specifických markets se stejným metafieldem, Shopify nově vrací hodnotu z marketu s nejnižším handle místo naposledy upravené hodnoty."
tagy: [markets, metafields, tie-breaking, storefront-api, graphql]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Markets umožňují nastavit metafields přímo na úrovni marketu, například banner nebo texty specifické pro region. Kupující může odpovídat více marketům najednou, typicky když se regiony překrývají (například market Kanada plus USA a market Kanada plus Mexiko). Pokud jeden market není specifičtější než druhý, vznikne tzv. tie a bylo nutné rozhodnout, která hodnota metafieldu se použije.

    Dosud vyhrávala naposledy aktualizovaná hodnota. Čas poslední úpravy ale není v administraci vidět, takže obchodník nemohl ovlivnit ani předvídat, co kupující uvidí. Úprava metafieldu na jednom marketu navíc mohla nečekaně změnit obsah pro kupující v překrývajícím se marketu.

    Nově se tie řeší deterministicky podle handle marketu. Handle je v administraci viditelný a editovatelný, takže obchodník může o vítězi rozhodnout sám. Specificita marketu má stále přednost před handle.
  zdroje:
    - title: "Shopify: Market metafields break ties between equally specific markets by market handle"
      url: "https://shopify.dev/changelog/posts/market-metafields-break-ties-between-equally-specific-markets-by-market-handle"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Pokud kupujícímu odpovídají dva nebo více stejně specifické markets, které nastavují stejný metafield, vrací `Market.metafield` a `Market.metafields` hodnotu z marketu s nejnižším handle. Dříve vyhrávala naposledy aktualizovaná hodnota. Specifičtější market má i nadále přednost.

Handle se porovnávají znak po znaku podle bytové hodnoty. U handlů z malých písmen, číslic a pomlček to odpovídá abecednímu řazení (pomlčky před číslicemi, číslice před písmeny).

Příklad: kupující z Kanady odpovídá marketům `canada-us` a `canada-mexico`, oba nastavují `custom.banner`. Nově dostane hodnotu z `canada-mexico`, protože se řadí dříve.

Dotčená rozhraní: Storefront API (`Market.metafield`, `Market.metafields`), Liquid (`localization.market.metafields`) a Function API, jejichž vstup obsahuje market (např. delivery customization). Změna platí pro všechny verze API. Hodnoty se liší jen tehdy, když se sejdou všechny podmínky: tie mezi stejně specifickými markets, žádný specifičtější market metafield nenastavuje, tied markets mají různé hodnoty a naposledy upravená hodnota nepochází z marketu s nejnižším handle.

## Časová osa

- 2026-11-10: změna oznámena v changelogu.
- 2026-11-13: publikace novinky; rollout probíhá postupně.
- Nejdříve se nasazuje u obchodů, kde se hodnoty pro kupující nezmění.
- Obchodníky, kterých se změna může týkat, bude Shopify kontaktovat, aby mohli předem upravit handle marketů.

## Dopad pro nás

**Pro vývojáře:** Pro app partnery není vyžadována žádná akce. Je vhodné projít klienty s překrývajícími se markets, kde se stejný metafield nastavuje na více marketech, a ověřit, že vítěz podle handle odpovídá záměru. Chování je nově deterministické, takže zmizí těžko reprodukovatelné rozdíly závislé na čase poslední úpravy. Pozor na testy a fixtures, které předpokládaly pořadí podle updatu.

**Pro PM / PO:** Riziko je nízké a týká se jen multi-market obchodů s překryvy. Doporučujeme upozornit dotčené klienty, že o vítězi nově rozhoduje viditelný handle marketu, a v případě potřeby handle přejmenovat dřív, než se změna u obchodu projeví.

## Použití v Integrátoru

Pokud synchronizace nebo konfigurace čte market metafields přes Storefront API či Functions, hodnoty u překrývajících se markets se mohou po rolloutu změnit. Přímý zásah do kódu není nutný, stačí zkontrolovat konfiguraci handlů u dotčených klientů.
