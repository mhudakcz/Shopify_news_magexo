---
date: 2026-06-17
title: "Shop app — konverzační AI vyhledávání založené na vkusu"
title_en: "Shop app conversational AI search"
slug: shop-app-conversational-ai-search
zdroj: https://open.shop.app/E2jp6/n66j/ko3q
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shop app konverzační discovery je nový organický kanál pro merchanty — zákazníci nacházejí produkty přes chat bez reklamního spend, což je relevantní pro e-commerce klienty distribuující zboží přes Shop app."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "editions-spring-2026-shop-app", "storefront-search-ai-fuzzy"]
editions_release: spring-2026
kontext:
  background: |
    Shop app je bezplatná mobilní nákupní aplikace Shopify pro zákazníky — původně tracker zásilek, postupně přeměněná na plnohodnotný shopping kanál s algoritmickým feedem, personalizovanými doporučeními a platbami přes Shop Pay. Dnes má desítky milionů aktivních shopperů a pro Shopify merchanty představuje organický discovery kanál oddělený od jejich vlastního storefront.

    Historicky bylo vyhledávání v Shop appce keyword-based — zákazník zadal přesný název produktu nebo kategorie a systém hledal shodu v katalogu. Tento přístup funguje dobře pro zákazníky, kteří přesně vědí, co chtějí, ale nedokáže pomoci při vágním záměru, popisném vyhledávání nebo discovery módu, kdy zákazník pouze tuší, co by ho mohlo zaujmout. Alternativní kanály jako TikTok Shop nebo Instagram Shopping ztratily keyword search zcela ve prospěch algoritmického doporučování na základě engagement signálů.

    Shop app nyní přidává konverzační AI search layer: zákazník popisuje co hledá v přirozené větě (např. „něco na letní trekking pod 2000 Kč" nebo „dárek pro mámu, která ráda zahradničí"), systém zpracuje záměr, dotaz obohatí o taste profil daného zákazníka (preference odvozené z nákupní historie a chování v aplikaci) a vrátí relevantní produkty napříč celým Shop katalogem. Jde o přímý posun od keyword matching k záměr-based discovery.

    Praktický dopad pro merchanty je dvojí. Za prvé, nová discovery surface zvyšuje šanci, že zákazník narazí na jejich produkt bez nutnosti reklamního spend — podmínkou je mít kompletní product metadata (títuly, tagy, popisky, kategorie), protože AI search indexuje tato data při budování relevance. Za druhé, merchanté nemusí nic technicky konfigurovat: funkce pracuje se stávajícím katalogem dostupným přes Shop app automaticky. Shopify staví tuto funkci jako přímou alternativu k placeným sociálním discovery kanálům — organický dosah poháněný AI místo reklamního rozpočtu.
  zdroje:
    - title: "Shopify Editions Spring '26: Shop app conversational AI search"
      url: "https://open.shop.app/E2jp6/n66j/ko3q"
    - title: "Editions Spring '26: Shop app — přehled všech položek tématu"
      url: "https://www.shopify.com/editions/spring2026"
    - title: "Storefront search s AI fuzzy matching — toleruje překlepy a neobvyklé fráze"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/storefront-search-ai-fuzzy/"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shop app nahrazuje keyword search konverzačním AI vyhledáváním — zákazníci popisují záměr v přirozené větě, systém vrací personalizované výsledky na základě taste profilu, pro merchanty jde o nový organický discovery kanál."
tagy: [editions, shop-app, ai, search, discovery]
zdroj_kanal: editions
---

## Co se mění

Shop app přechází od keyword search ke **konverzačnímu AI vyhledávání**. Zákazník místo přesného názvu produktu nebo kategorie popisuje záměr v přirozené větě — systém záměr interpretuje, obohatí ho o **taste profil zákazníka** (odvozený z nákupní historie a chování v aplikaci) a vrátí personalizované výsledky z celého Shop katalogu.

Klíčové vlastnosti nového search:

- **Přirozený jazyk** — dotazy ve větách, nikoli klíčová slova. Zákazník nemusí znát přesný název produktu.
- **Taste profiling** — výsledky jsou přizpůsobeny konkrétnímu zákazníkovi na základě jeho dřívějšího chování v Shop ekosystému (nákupní historie, prohlížené produkty, oblíbené kategorie).
- **Záměr-based discovery** — systém vyhodnocuje záměr za dotazem, nejen lexikální shodu. Vágní nebo popisné dotazy (stylistické nebo příležitostní) vedou k relevantním výsledkům.
- **Automatická aktivace** — funkce pracuje se stávajícím produktovým katalogem merchantů dostupným přes Shop app bez nutnosti konfigurace.

Pro merchanty, jejichž produkty jsou distribuovány přes Shop app, jde o nový discovery kanál poháněný AI bez reklamního spend — kvalita expozice závisí na kompletnosti product metadat (títuly, tagy, popisky, kategorie produktu).

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; funkce oznámena jako součást Shop app update

## Dopad pro nás

**Pro vývojáře:**
Konverzační AI search v Shop app je plně managed funkce Shopify bez veřejného API ani developer hooks. Z pohledu integrace zde není žádný implementation work — funkce pracuje se stávajícím produktovým katalogem, který je již součástí Shop app distribuce. Pokud klient chce maximalizovat viditelnost v AI search, doporučení se týká datové kvality: kompletní product titles, descriptive tagy, strukturované kategorie a vyplněné product types. To jsou standardní best practices platné i jinde (SEO, Storefront search), nikoli nové integrace.

**Pro PM / PO:**
Jde o relevantní příležitost pro merchanty, kteří prodávají přes Shop app a záleží jim na organickém dosahu. AI konverzační search snižuje bariéru discovery pro zákazníky v exploration módu — je to direct response na dominanci TikTok/Instagram discovery u mladší demografické skupiny shopperů. Pro klienty, kteří dosud Shop app aktivně nevyužívají jako kanál, je to dobrý moment zkontrolovat stav distribuce a metadat. Nevyžaduje žádné technické úpravy ani budget.

## Použití v Integrátoru

Funkce je plně na straně Shop app infrastruktury bez API surface pro integrátor. Relevance spočívá v doporučení merchantům optimalizovat product metadata pro vyšší viditelnost v AI-driven discovery.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Shop app](/Shopify_news_magexo/zmena/editions-spring-2026-shop-app/)
