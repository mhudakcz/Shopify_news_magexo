---
date: 2026-11-13
title: "Market.metafields — case-insensitive keys ve Storefront API 2027-01 (breaking)"
title_en: "Market.metafields matches keys in any case as of Storefront API version 2027-01"
slug: market-metafields-case-insensitive-storefront-2027-01
zdroj: https://shopify.dev/changelog/posts/market-metafields-matches-keys-in-any-case-as-of-storefront-api-version-2027-01
shrnuto_dne: 2026-11-16
kategorie: [nova-api, breaking]
api_oblast: storefront
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud čteme metafieldy marketů přes Storefront API, je třeba ověřit, že klíče používáme ve stejné velikosti písmen, v jaké jsou uložené."
dotcene_klienty: []
souvisejici: [storefront-api-incontext-channelid, automaticdiscounts-query-removed-2027-01, metafieldinteger-collection-condition-removed-2027-01, shop-user-metafields-functions]
tldr: "Od Storefront API 2027-01 vrací Market.metafields metafield i při jiné velikosti písmen klíče, stejně jako Market.metafield; dřívější verze zůstávají beze změny."
tagy: [markets, metafields, storefront-api, case-insensitive, breaking, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Storefront API umožňuje číst metafieldy objektu Market, tedy hodnoty vázané na konkrétní trh (například texty, příznaky nebo konfigurace pro daný trh). Dosud existovaly dva přístupy: Market.metafield (jednotné číslo) a Market.metafields (množné číslo, načtení více klíčů najednou).

    Tyto dva přístupy se v dřívějších verzích API chovaly odlišně. Market.metafield hledal klíč bez ohledu na velikost písmen a vracel metafield z nejspecifičtějšího trhu kupujícího, zatímco Market.metafields vyžadoval přesnou shodu velikosti písmen. Pro stejný namespace a klíč tak mohly oba dotazy vrátit různé výsledky.

    Verze 2027-01 toto chování sjednocuje. Market.metafields nově také ignoruje velikost písmen. Změna je označena jako breaking, protože aplikace nebo storefronty, které na striktní shodu spoléhaly, mohou začít dostávat jiná data.
  zdroje:
    - title: "Shopify: Market.metafields matches keys in any case as of Storefront API version 2027-01"
      url: "https://shopify.dev/changelog/posts/market-metafields-matches-keys-in-any-case-as-of-storefront-api-version-2027-01"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Ve Storefront API verze 2027-01 vrací pole `Market.metafields` metafield i tehdy, když se požadovaný klíč liší velikostí písmen od klíče uloženého na trhu. Ve verzích 2026-10 a starších funguje striktní shoda. Příklad: pokud trh ukládá `custom.colour`, dotaz na `Colour` vrátí v 2026-10 hodnotu `null`, ale v 2027-01 vrátí uložený metafield.

Dotčené jsou aplikace a vlastní storefronty, které na 2027-01 a novější čtou `metafields` na objektu `Market` (přes `Localization.market` nebo `Country.market`) a zároveň buď žádají klíč v jiné velikosti písmen, než v jaké je uložen, nebo mají napříč trhy stejný klíč uložený v různých velikostech. Aplikace, které používají správnou velikost písmen nebo pouze `Market.metafield`, dotčené nejsou.

## Časová osa

- 2026-11-06: změna vytvořena v changelogu
- 2026-11-13: zveřejněno na shopify.dev
- Verze 2026-10 a starší: chování se nemění (striktní shoda)
- Verze 2027-01: case-insensitive shoda klíčů pro `Market.metafields`

## Dopad pro nás

**Pro vývojáře:** Pro každý čtený metafield trhu spusťte dotaz přes `Market.metafield` i `Market.metafields` se stejným namespace a klíčem a porovnejte výsledky. Pokud se shodují, není třeba nic měnit. Pokud ne, upravte kód i metafieldy tak, aby nezávisely na velikosti písmen: žádejte každý klíč přesně tak, jak je uložen, a napříč všemi trhy používejte jednotnou velikost písmen. Výsledek `Market.metafield` ukazuje, co vrátí `Market.metafields` ve verzi 2027-01.

**Pro PM / PO:** Jde o breaking změnu až při upgradu na 2027-01, bez akutního termínu. Do plánu upgradu na tuto verzi je vhodné zařadit audit konzumentů Storefront API, kteří čtou metafieldy marketů, zejména u multi-market obchodů s nekonzistentně pojmenovanými klíči.

## Použití v Integrátoru

Pokud Integrátor nebo napojené storefronty čtou metafieldy marketů přes Storefront API, je před přechodem na 2027-01 vhodné ověřit shodu klíčů podle návodu výše. Aktuálně nevíme o konkrétním použití, proto je dopad označen jako možný.
