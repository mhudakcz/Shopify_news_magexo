---
date: 2026-10-29
title: "Varianty se spravují přímo na stránce produktu (jedna view místo samostatné sekce)"
title_en: "Variants are now managed on the product page"
slug: variants-managed-product-page
zdroj: https://changelog.shopify.com/posts/variants-are-now-managed-on-the-product-page
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o změnu rozhraní adminu bez zmínky o API, takže stávající synchronizace se nemění. Nepřímý dopad je v tom, že obchodníci budou snáz hromadně upravovat ceny a pole variant ručně, což se může střetnout s hodnotami, které do adminu zapisuje synchronizace z ERP nebo PIM."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-merchandising", "product-variants-multiple-barcodes-merchant", "variant-packaging-dimensions-per-variant", "publish-unpublish-variants-independently"]
tldr: "Shopify přesouvá správu variant přímo na stránku produktu: detail produktu zůstává vidět, varianty se dají hledat, filtrovat, seskupovat podle option a hromadně upravovat v detailním nebo tabulkovém zobrazení. Plus a vyšší plány si to mohou zapnout hned přes Test Drives, 12. prosince se jim zapne automaticky a pro všechny obchody se to bude postupně zapínat od prosince."
tagy: [variants, product-editor, admin, ui, merchandising]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Správa variant v administraci Shopify se dosud točila kolem oddělené obrazovky: produkt měl vlastní stránku s hlavními údaji a varianty (velikosti, barvy, materiály) se upravovaly zvlášť, jednotlivě na podstránkách. Dokud měl produkt tři varianty, nebylo to na překážku. U katalogů s desítkami nebo stovkami variant to znamená hodně proklikávání a ztrátu přehledu o tom, jak vypadá produkt jako celek.

    Změna ze 29. října 2026 přesouvá správu variant přímo na stránku produktu. Údaje o produktu zůstávají na očích, varianty se hledají, filtrují a seskupují podle option a dají se přepnout mezi detailním a tabulkovým zobrazením pro rychlé úpravy. Hlavní pole, například cena nebo údaje o dopravě, lze měnit u více variant najednou. Shopify to zdůvodňuje potřebou zjednodušit správu produktů, jak katalogy a počty variant rostou. Je to uživatelské dotažení položky Variants managed from the product page z tématu Merchandising v Editions Fall '26, kde šlo zatím jen o stručnou zmínku bez detailů a bez samostatného článku.

    Pro obchodníky je to hlavně úspora času při práci s velkými katalogy a nižší riziko chyb při hromadných úpravách. Pro vývojáře a integrace je to změna bez přímého technického dopadu: post nezmiňuje žádné API ani změnu datového modelu. Nepřímý dopad je v chování lidí. Když je hromadná úprava cen a polí jednoduchá a po ruce, přibude ručních zásahů do dat, která jinak plní synchronizace z externího systému. Změna se zapíná postupně, takže chvíli budou v provozu obě podoby adminu.
  zdroje:
    - title: "Shopify: Variants are now managed on the product page"
      url: "https://changelog.shopify.com/posts/variants-are-now-managed-on-the-product-page"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Správa variant se přesouvá z oddělených obrazovek přímo na **stránku produktu**. Podle changelogu Shopify (označení Improvement, oblast Admin) platí:

- **Detail produktu zůstává viditelný.** Varianty se upravují bez opuštění stránky produktu, takže obchodník při práci vidí, jak varianty zapadají do celého produktu.
- **Hledání, filtrování a seskupování.** Varianty lze dohledat vyhledáváním, filtrovat a seskupovat podle option (například podle barvy nebo velikosti). U produktů s mnoha variantami je to zásadní rozdíl oproti postupnému procházení seznamu.
- **Dvě zobrazení.** Přepíná se mezi detailním zobrazením a tabulkovým zobrazením pro rychlé úpravy více řádků najednou.
- **Hromadné úpravy.** Základní pole, například cenu a údaje o dopravě, lze změnit u více variant současně.

Shopify změnu zdůvodňuje tím, že s růstem katalogů a počtu variant je potřeba správu produktů zjednodušit.

**Co post neuvádí:** změna pořadí variant (reorder) v changelogu zmíněna není, takže nepředpokládejme, že s touto změnou přišla, a ověřme to po zapnutí v adminu. Post také neuvádí žádné API ani změnu datového modelu a nepopisuje, jak se nové rozhraní chová u rozšíření adminu a aplikací, které se na stránce produktu zobrazují.

## Časová osa

- **2026-10-29**: zveřejnění změny. Obchodníci na plánu Plus a vyšším si ji mohou zapnout hned v nastavení Test Drives.
- **2026-12-12**: plány Plus a vyšší se automaticky přihlásí k nové správě variant.
- **Od prosince 2026**: postupné nasazení pro všechny obchody. Nová podoba se v adminu objeví sama, bez nutnosti cokoli nastavovat.
- **Mimo časovou osu**: Shopify odkazuje na blogový článek o redesignu variant a na stránku nápovědy ke správě variant. Přesnou podobu nových obrazovek je dobré brát odtud.

## Dopad pro nás

**Pro vývojáře:** Změna se týká rozhraní adminu a post k ní neuvádí žádné API. Stávající čtení a zápis variant přes Admin API by se tedy neměly měnit a není co migrovat. Doporučujeme ověřit tři věci:

- Pokud máme aplikace s rozšířením adminu na stránce produktu (bloky, akce, vložené obrazovky), po zapnutí nové správy variant ověřit, jak se v novém rozložení zobrazují. Post to nepopisuje.
- Hromadné změny ceny nebo dopravních údajů u mnoha variant najednou znamenají dávku událostí o změně produktu a variant. Webhooky a fronty, které na to reagují, by měly zvládnout nárazové zatížení a být idempotentní.
- Jednodušší ruční úpravy zvyšují šanci, že obchodník přepíše hodnotu, kterou do variant zapisuje synchronizace z ERP nebo PIM, nebo že ji synchronizace přepíše zpět. Je potřeba mít jasno, který systém je zdrojem pravdy pro cenu a další pole, a podle toho případně pole v adminu omezit nebo to s obchodníkem domluvit.

**Pro PM / PO:** Jde o zlepšení použitelnosti bez termínového tlaku. Největší přínos mají obchody s velkými katalogy a s mnoha variantami: rychlejší hromadné úpravy a méně proklikávání. U menších katalogů bude zlepšení spíše pocitové. Praktické kroky jsou lehké: dát obchodníkům, kteří s variantami pracují, vědět, že se admin v prosinci změní, a aktualizovat interní návody a školicí materiály, pokud obsahují snímky obrazovek stávající správy variant. Obchody na plánu Plus si novou správu mohou vyzkoušet předem přes Test Drives, což je dobrá příležitost projít ji s obchodníkem ještě před automatickým přihlášením 12. prosince. Změnu je vhodné vnímat i společně s dalšími novinkami z tématu Merchandising v Editions Fall '26, hlavně s až 20 čárovými kódy na variantu a s rozměry balení na úrovni varianty. Post k nim nic neuvádí, takže to, jak se budou v nové správě variant upravovat, je třeba ověřit.

## Použití v Integrátoru

**Možná, jen nepřímo.** Samotná změna se synchronizace nedotýká, protože post neuvádí žádné API, ale hromadné ruční úpravy variant v adminu mohou kolidovat s daty, která do variant zapisuje synchronizace z ERP nebo PIM. Hodí se projít, která pole (cena, dopravní údaje, čárové kódy) mají být spravována jen synchronizací a která smí měnit obchodník.
