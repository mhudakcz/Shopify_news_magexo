---
date: 2026-10-28
title: "Channel product mapping — customize product data per channel s auto-sync"
title_en: "Channel product mapping"
slug: channel-product-mapping-sync
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Synchronizace produktových dat (názvy, popisy, obrázky, ceny) z ERP nebo PIM do Shopify počítá s jedním zdrojovým produktem. Pokud merchant začne data upravovat zvlášť pro každý prodejní kanál, je potřeba ověřit, zda a jak se tyto úpravy projeví v Admin API a zda je naše synchronizace nepřepíše. Editions stránka žádné API neuvádí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-merchandising", "channel-specific-prices-markets", "compare-at-prices-shared-agentic-channels"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidává v tématu Merchandising mapování produktových dat pro každý prodejní kanál zvlášť přímo v adminu, přičemž se každý kanál sám udržuje aktuální, když se katalog mění. Stránka neuvádí, která pole jde upravit, které kanály funkci podporují, ani zda a jak se to projeví v API, takže jde zatím o příležitost k ověření, ne o hotové řešení."
tagy: [merchandising, channel-mapping, multi-channel, products, sync]
zdroj_kanal: editions
kontext:
  background: |
    Obchod, který prodává přes víc kanálů, naráží na jednoduchý problém: jeden produkt v katalogu má jeden název, popis, sadu obrázků a cen, ale každý kanál po něm chce něco jiného. Marketplace nebo srovnávač vyžaduje striktní názvy a atributy, vlastní e-shop si může dovolit vyprávěcí popis, POS potřebuje krátký název pro pokladnu a kanály postavené na headless storefrontu si data skládají po svém. Běžně se to řeší oklikami: úpravami v aplikaci konkrétního kanálu, pravidly ve feedu, metafieldy čtenými vlastním kódem, nebo v krajním případě duplicitními produkty, které je pak nutné udržovat souběžně (jde o naše shrnutí obvyklé praxe, ne o tvrzení ze zdroje).

    Shopify v posledních měsících kanálovou dimenzi katalogu postupně rozšiřuje. V červnu 2026 přibyly channel markets, tedy trhy vázané na prodejní kanál s vlastními cenami, dostupností a měnou (viz článek o channel-specific prices přes Markets). V květnu se varianty staly publikovatelnými nezávisle na produktu, takže jde řídit viditelnost jednotlivých SKU po kanálech. V říjnu se compare-at price začala předávat AI shopping agentům a viditelnost se řídí v nastavení catalog mapping. Fall '26 Editions k tomu přidávají položku Product data mapping by channel v tématu Merchandising.

    Popis na Editions stránce je velmi stručný: merchant může produktová data upravit a namapovat pro každý prodejní kanál z adminu, přičemž se každý kanál automaticky udržuje aktuální, jak se katalog mění. U položky je odkaz na nápovědu (help doc), ale stránka sama neuvádí stav dostupnosti, podporované kanály, seznam polí, ani žádné API. Všechny technické závěry níže jsou proto naše úvahy a hypotézy, ne tvrzení Shopify.
  zdroje:
    - title: "Shopify Editions Fall '26 (Merchandising, položka Product data mapping by channel)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Channel-specific prices přes Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/channel-specific-prices-markets/"
    - title: "Archiv: Compare-at prices sdíleny AI shopping agentům"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/"
    - title: "Archiv: Publish a unpublish variant nezávisle od produktu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 Editions v tématu **Merchandising** uvádí položku **Product data mapping by channel**. Podle popisu na Editions stránce může merchant:

- **upravit a namapovat produktová data pro každý prodejní kanál zvlášť**, a to přímo v adminu,
- spoléhat na to, že se **každý kanál sám udržuje aktuální**, když se katalog mění.

Cílem je odstranit potřebu držet pro různé kanály odlišné kopie téhož produktu. Místo duplikátů zůstává jeden zdrojový produkt a kanál dostává jeho upravenou prezentaci.

Co Editions stránka **neuvádí** (ověřeno čtením stránky, u položky je jen odkaz na nápovědu):

- **které pole jde přemapovat.** Naše hypotéza je, že půjde o prezentační data jako název, popis, obrázky a případně atributy; zda to zahrnuje i ceny, ze zdroje nevyplývá. Ceny per kanál se dnes řeší jinde, přes channel markets ([channel-specific-prices-markets](/Shopify_news_magexo/zmena/channel-specific-prices-markets/)), takže s nimi lze čekat jiný mechanismus.
- **které kanály funkci podporují.** Stránka mluví jen o každém prodejním kanálu. Že se to týká POS, headless storefrontu, Google Shopping nebo Shop, je naše domněnka, ne potvrzení.
- **co přesně znamená udržování aktuálnosti.** Z textu nepoznáme, zda se změna základního produktu propíše i do polí, která má merchant pro daný kanál přepsaná, nebo zda přepsání vítězí. To je klíčová otázka pro každého, kdo katalog synchronizuje z externího systému.
- **stav dostupnosti.** Stránka u položky nemá štítek jako coming soon ani early access, ale ani výslovně neříká, že je funkce dostupná všem a od kdy.
- **dopad na API.** Žádné pole, mutace ani nová verze API se nezmiňují.

Terminologicky položka připomíná nastavení catalog mapping, které už známe z říjnového změnového logu k compare-at cenám pro AI agenty ([compare-at-prices-shared-agentic-channels](/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/)). Zda jde o rozšíření téže části adminu, nebo o samostatnou funkci, stránka neříká.

## Časová osa

- 2026-05-07 — varianty lze publikovat a skrývat per kanál nezávisle na produktu, API 2026-07 ([publish-unpublish-variants-independently](/Shopify_news_magexo/zmena/publish-unpublish-variants-independently/))
- 2026-06-17 — channel markets: vlastní ceny, dostupnost a měna pro prodejní kanál ([channel-specific-prices-markets](/Shopify_news_magexo/zmena/channel-specific-prices-markets/))
- 2026-10-09 — compare-at price se sdílí AI shopping agentům, přepínač v catalog mapping ([compare-at-prices-shared-agentic-channels](/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/))
- 2026-10-28 — Editions Fall '26: Product data mapping by channel oznámeno v tématu Merchandising, s odkazem na nápovědu
- Datum rolloutu, dostupnost podle plánů ani verzi API Editions stránka neuvádí, je nutné ověřit v nápovědě Shopify

## Dopad pro nás

**Pro vývojáře:**
Žádná breaking change a žádná povinná migrace, z textu Editions nevyplývá nové API ani nový scope. Zároveň je to funkce, která může tiše změnit data, na která se spoléháme, proto stojí za to ověřit několik věcí dřív, než ji někomu doporučíme (jde o naše úvahy, ne o tvrzení Shopify):

- **Vidíme per-kanálové úpravy v API?** Pokud ano, jakým polem nebo vztahem a v jaké verzi API. Pokud ne, čteme z API jen základní produkt a to, co zákazník vidí v kanálu, se může lišit od toho, co máme v datech. Pro feedy a marketplace sync je to zásadní rozdíl.
- **Přepíše naše synchronizace kanálové úpravy?** Když z ERP nebo PIM zapíšeme nový název či popis do základního produktu, ověřit na vývojovém obchodě, zda se kanálová úprava zachová, nebo zda se přepíše zdrojovou hodnotou. Stejně tak v opačném směru: zda se kanálová úprava nějak vrací do zdrojového produktu, nebo zůstává jen v kanálu.
- **Kolize s metafieldy a pravidly ve feedu.** Obchody, které dnes drží kanálové varianty textů v metafieldech nebo v pravidlech feedové aplikace, mohou mít po zapnutí funkce dva zdroje pravdy. Před migrací je dobré zmapovat, odkud se kanálová data berou.
- **Konzistence s publikací a trhy.** Kanálová data se budou potkávat s nezávislou publikací variant, s channel markets (ceny, dostupnost, měna) i s catalog mapping. Ověřit, ve kterém pořadí se tyto vrstvy aplikují a co vyhrává při konfliktu.
- **Hromadné operace.** Pokud merchant upravuje kanálová data pro tisíce produktů, zjistit, zda existuje import či bulk operace, nebo zda je to jen ruční editace v adminu.

**Pro PM / PO:**
Je to příležitost pro obchody s více kanály, kde dnes ručně udržují odlišné texty a obrázky nebo mají duplicitní produkty. Pokud funkce funguje tak, jak popis naznačuje, ušetří opakované úpravy a sníží riziko, že se produkt v jednom kanálu rozejde s ostatními. Hodnota roste s počtem kanálů a s tím, jak se jejich požadavky na data liší.

Priorita je střední, protože jde o potenciálně dobrý základ pro naši práci s katalogem, ale zatím víme jen to, co stojí v jedné větě na Editions stránce. Doporučujeme: (1) přečíst odkazovanou nápovědu a zapsat si podporovaná pole a kanály, (2) vyzkoušet to na vývojovém obchodě, zvlášť chování při změně základního produktu, (3) teprve poté přidat téma do nabídek pro obchody s marketplace nebo více kanály. Do té doby neslibovat konkrétní pole, kanály ani termín.

## Použití v Integrátoru

Aktuálně nic z této funkce nevyužíváme, protože nemáme potvrzené API. Pokud se ukáže, že jsou kanálové úpravy čitelné přes Admin API, musíme počítat s tím, že naše synchronizace produktových dat zapisuje do základního produktu a ten může být v kanálu přepsaný.
