---
date: 2026-10-23
title: "Sidekick: generování obrázků s průhledným pozadím (PNG + alpha)"
title_en: "Generate images with transparent backgrounds in Sidekick"
slug: sidekick-transparent-background-images
zdroj: https://changelog.shopify.com/posts/generate-images-with-transparent-backgrounds-in-sidekick
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchant-side funkce v adminu bez API a extension povrchu; může zkrátit přípravu ilustrací, ikon a dekorativních grafik pro theme a marketing, takže je vhodná jako tip při školení merchantů."
dotcene_klienty: []
souvisejici: [editions-spring-2026-sidekick, shopify-canvas-bespoke-store-design, sidekick-checkout-accounts-customize]
tldr: "Sidekick umí v Shopify adminu vytvářet obrázky s průhledným pozadím; stačí v promptu napsat, že má být pozadí průhledné, žádný přepínač v UI changelog neuvádí. Hodí se na ilustrace, ikony a další grafiky pro obchod a marketing."
tagy: [sidekick, ai, image-generation, transparent-background, png, media]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Od Editions Spring 2026 se rozšiřuje z admin chatboxu na další povrchy: mobilní aplikaci, Online Store Editor, třetí aplikace přes Sidekick app extensions a v říjnu 2026 také do editoru checkoutu a customer accounts. V rámci Canvas (nový vizuální workspace pro bespoke obchody) navíc Sidekick zapisuje a validuje kód theme. Generování obrázků je v tomhle ekosystému další vrstva: merchant nepotřebuje grafika ani externí nástroj, aby získal jednoduchou ilustraci nebo ikonu.

    Zatím měly AI generované obrázky praktický problém, který zná každý, kdo je dával do theme nebo do banneru: výstup má obvykle plné pozadí. Pokud merchant chce ilustraci položit na barevnou sekci, na fotku nebo do bannerů s jiným odstínem pozadí, musí si ji nejdřív vyříznout v externím editoru. Novinka z 23. října 2026 tohle odstraňuje u obrázků, které vznikají přímo v Sidekicku.

    Důležité je přesné znění změny. Shopify uvádí, že Sidekick teď umí vytvářet obrázky s průhledným pozadím pro ilustrace, ikony a další grafiky pro obchod a marketing. Postup je čistě promptový: merchant otevře Sidekick v adminu a do zadání připíše požadavek na průhledné pozadí, příkladem v changelogu je ruční kresba listu. Changelog neuvádí žádný samostatný přepínač v UI generátoru, neuvádí výstupní formát souboru, rozlišení ani omezení podle plánu nebo regionu. Označení PNG s alpha kanálem v titulku vychází z toho, že průhlednost u rastrové grafiky běžně nese právě alfa kanál; konkrétní formát doporučujeme ověřit po stažení vygenerovaného souboru.
  zdroje:
    - title: "Shopify: Generate images with transparent backgrounds in Sidekick"
      url: "https://changelog.shopify.com/posts/generate-images-with-transparent-backgrounds-in-sidekick"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Sidekick nově zvládá generovat obrázky s průhledným pozadím. Merchant tak dostane ilustraci, ikonu nebo jinou grafiku bez plného pozadí a může ji rovnou položit na barevnou sekci, banner nebo na jinou fotku, aniž by ji musel vyřezávat v externím editoru.

**Jak se to používá.** Žádný přepínač se v changelogu nezmiňuje. Merchant otevře Sidekick v Shopify adminu, popíše obrázek, který chce, a do promptu přidá požadavek na průhledné pozadí. Příklad ze zdroje: vytvoř ručně kreslenou ilustraci listu s průhledným pozadím.

**Co zdroj neuvádí.** Post nespecifikuje výstupní formát (předpokládáme PNG nebo jiný formát s alfa kanálem), rozlišení, limity počtu generování ani dostupnost podle plánu a regionu. Také nezmiňuje, zda lze průhledné pozadí vytvořit z existující fotky produktu, nebo jen u nově generovaných obrázků. Před slibováním konkrétního použití merchantům proto stojí za to chování krátce vyzkoušet.

Pozor na očekávání. Funkce míří na ilustrace, ikony a grafiky. Že by nahrazovala produktovou fotografii nebo vyřezávání reálných produktů, changelog netvrdí.

## Časová osa

- **2026-10-23** — oznámení v Shopify Changelogu; funkce je dostupná v Sidekicku v adminu.
- Žádné deadliny, migrace ani verze API se neuvádějí. Datum postupného zapnutí pro všechny obchody changelog nespecifikuje.

## Dopad pro nás

**Pro vývojáře:** Žádná změna v API, extensions ani Functions, takže není potřeba žádná úprava kódu. Jde o merchant-side funkci v adminu. Z technického pohledu je užitečné jen vědět, že u theme s barevnými nebo gradientovými sekcemi může merchant ke grafikám nově použít soubory s průhledností. U vygenerovaných souborů je dobré zkontrolovat skutečný formát a velikost, než se nasadí do theme, kvůli rychlosti načítání. Případné optimalizace (komprese, srcset) zůstávají na straně theme a CDN.

**Pro PM / PO:** Nízká naléhavost, jde o příležitost, ne o riziko. Merchanti si mohou sami připravit jednoduché ilustrace, ikony, badges nebo dekorativní prvky pro sekce a marketingové materiály, což může zkrátit drobné zakázky na grafiku. Při komunikaci s merchanty je dobré neslibovat víc, než zdroj říká: výsledek je AI generovaná grafika, kterou je potřeba vizuálně zkontrolovat (hrany, artefakty u průhlednosti, soulad s brand manuálem). Pro loga a prvky s pevnou identitou značky zůstává správným zdrojem originální podklad od majitele značky. Funkci lze zařadit jako tip do školení merchantů, kteří spravují theme a marketing sami.

## Použití v Integrátoru

Přímo nepoužíváme, jde o merchant-facing funkci v Sidekicku bez API povrchu. Může se hodit jako doporučení při předávání obchodu a při školení merchantů, kteří si sami připravují grafiku pro theme a kampaně.
