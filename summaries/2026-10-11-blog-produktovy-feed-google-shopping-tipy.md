---
date: 2026-10-11
title: "Jak na produktový feed pro Google Shopping a tipy pro úspěch"
slug: blog-produktovy-feed-google-shopping-tipy
zdroj: https://www.shopify.com/cz/blog/produktovy-feed
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Kvalita feedu stojí na datech produktového katalogu (GTIN, brand, MPN, dostupnost, cena, obrázky), takže se týká každého e-shopu, který synchronizuje katalog z ERP nebo PIM do Shopify a dál do Google Merchant Center."
dotcene_klienty: []
souvisejici: ["blog-ppc-marketing-pruvodce", "blog-napojeni-na-marketplace-tipy", "blog-google-firmy"]
tldr: "Shopify CZ blog krok za krokem popisuje založení Google Merchant Center, napojení přes aplikaci Google a YouTube, šest typů feedů, povinné atributy produktů a tipy pro optimalizaci titulků, popisů a obrázků."
tagy: [google-shopping, product-feed, merchant-center, ppc, ecommerce]
zdroj_kanal: blog
kontext:
  background: |
    Produktový feed je datový soubor s informacemi o produktech, ze kterého Google Merchant Center čerpá data pro Shopping reklamy. Ty se zobrazují ve výsledcích vyhledávání jako karusel produktů s obrázkem, cenou, značkou a případně hodnocením a vedou přímo na produktovou stránku obchodu, kde se dokončuje nákup. Cílení probíhá podle kontextu vyhledávání, nikoli podle cookies třetích stran, takže jde o formát, který je vůči omezování trackingu relativně odolný.

    Postup spuštění má pět kroků. Nejdřív se založí účet v Merchant Center, zadá se URL obchodu a firemní údaje, URL se ověří (claim) a doplní se podmínky vrácení zboží, které by u českých obchodů měly odpovídat zákonné 14denní lhůtě pro odstoupení od smlouvy. Poté se v Shopify App Store nainstaluje aplikace Google a YouTube, která přidá nový sales channel a propojí Google účet. Následuje setup checklist, který je potřeba dokončit celý (obchod musí být veřejný, uvedené platební metody, cílová země, jazyk, pravidla dopravy a souhlas s podmínkami Google). Schválení produktů obvykle trvá 3 až 5 pracovních dnů a chyby nebo zamítnuté produkty se zobrazují v sekci Diagnostics. Dokud se neopraví, reklamy se nespustí.

    Článek rozlišuje šest typů feedů: hlavní feed pro Merchant Center, feed aktualizací skladu (množství, dostupnost, cena), feed promo akcí (povinná pole promotion_id, product_applicability, offer_type, long_title, promotion_effective_dates a redemption_channel), feed lokálních inventářních reklam, feed hodnocení produktů a feed pro dynamický remarketing (XML nebo TXT), který podle autora zřejmě zanikne spolu s cookies třetích stran. U produktů se vyžadují alespoň dva z trojice brand, MPN a GTIN, dále dostupnost (in stock, out of stock, preorder), stav (new, used), cena s daňovým nastavením, kategorie z oficiální taxonomie Google (6 215 kategorií a podkategorií), vlastní product type a u oblečení také gender, age group, size, color, size type a size system. Pravidla dopravy se nastavují centrálně v Merchant Center, ne na úrovni jednotlivých produktů. Custom labels slouží jen pro interní seskupování v reportingu a při nabídkách, Google je pro párování nepoužívá.

    Optimalizace se opírá o několik pravidel. Titulek má limit 150 znaků, začíná hlavním klíčovým slovem a nejdůležitějšími údaji (značka, model, barva, velikost) a neobsahuje promo texty, slevy, vágní názvy ani verzálky. Popis je věcný, bez storytellingu, s nejdůležitějšími informacemi v prvních větách. Obrázky musí mít bílé pozadí, produkt musí být dobře vidět a nesmí obsahovat přidaný text, vodoznaky ani loga, pokud nejsou součástí produktu. Mezi nejčastější chyby patří keyword stuffing, chybějící povinná pole, nevyhovující obrázky a ignorování chyb v Diagnostics. Mezi doplňkové aplikace pro generování feedů článek zmiňuje Simprosys (od 4,99 USD měsíčně) a Nabu (od 29,99 USD měsíčně, s bezplatnou úrovní).
  zdroje:
    - title: "Shopify: Jak na produktový feed pro Google Shopping a tipy pro úspěch"
      url: "https://www.shopify.com/cz/blog/produktovy-feed"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify CZ blog publikoval praktický průvodce produktovým feedem pro Google Shopping. Článek vysvětluje, co feed je, jak založit Google Merchant Center, jak jej propojit se Shopify přes aplikaci Google a YouTube a jak projít setup checklist až po schválení produktů. Popisuje šest typů feedů (hlavní, skladový, promo, lokální inventář, hodnocení produktů a dynamický remarketing), povinné a doporučené atributy včetně identifikátorů GTIN, MPN a brand, a pravidla pro obrázky, titulky a popisy. Nechybí ani seznam typických chyb a dvě aplikace třetích stran pro generování feedů, Simprosys a Nabu.

Klíčová praktická sdělení jsou tři. Zaprvé, kvalita feedu je vždy jen tak dobrá jako data v katalogu: chybějící GTIN, nepřesná dostupnost nebo cena, která nesedí s produktovou stránkou, vedou k zamítnutí produktů. Zadruhé, 150 znaků v titulku se vyplatí využít pro konkrétní informace (značka, model, barva, velikost), nikoli pro slogany. Zatřetí, sekci Diagnostics v Merchant Center je potřeba sledovat průběžně, protože ignorované chyby znamenají neběžící reklamy.

## Pro koho je to relevantní

Obsah je primárně určen merchantům, kteří chtějí spustit nebo zlepšit Google Shopping kampaně, a PPC specialistům, kteří feed spravují. Pro vývojáře a technické konzultanty je to vzdělávací FYI bez přímého dopadu na API nebo kód. Přesto stojí za zapamatování, že feed se skládá z dat, která do Shopify přicházejí ze synchronizace katalogu: identifikátory (GTIN, SKU jako MPN, brand), dostupnost, cena s DPH a kvalitní obrázky musí být v obchodě vyplněné správně a konzistentně, aby je aplikace Google a YouTube mohla beze ztrát přenést do Merchant Center. Při návrhu mapování produktových polí z ERP nebo PIM do Shopify se tedy vyplatí s feedem počítat už na začátku. Článek je také dobrým podkladem pro konzultace s merchanty, kteří řeší, proč se jim některé produkty v Google nezobrazují.
