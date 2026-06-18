---
date: 2026-06-17
title: "Storefront search s AI fuzzy matching — toleruje překlepy a neobvyklé fráze"
title_en: "Storefront search delivers more results — typo and phrasing tolerance"
slug: storefront-search-ai-fuzzy
zdroj: https://help.shopify.com/en/manual/online-store/storefront-search
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Headless storefronts využívající Storefront API search query mohou těžit z vylepšené relevance výsledků bez nutnosti jakýchkoliv změn na straně integrace."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "editions-spring-2026-online"]
editions_release: spring-2026
kontext:
  background: |
    Storefront search na Shopify je vyhledávací vrstva dostupná všem online obchodům — zákazníci ji používají k hledání produktů, stránek a blogových článků přímo ve storefront. Vyhledávání funguje jak v nativních Liquid šablonách (téma), tak přes Storefront API pro headless implementace, kde si merchant buduje vlastní frontend.

    Historicky bylo storefront search citlivé na přesný tvar dotazu — překlep nebo neobvyklá formulace vedla k prázdné stránce výsledků (zero-result page). Merchanté to řešili ručním zadáváním synonym ve Shopify Search & Discovery apce, což je manuální a nikdy úplné řešení. Zero-result searches jsou přímá ztráta konverze: zákazník, který nenajde, co hledá, odchází.

    Shopify nyní do vyhledávací infrastruktury integruje AI fuzzy matching — model toleruje překlepy (typo tolerance) i odlišnou frazi dotazu (phrasing tolerance). Systém automaticky přiřazuje nesprávně napsaná slova k nejbližšímu reálnému výrazu v katalogu a rozumí parafrázi (např. „teniska" vs. „sportovní boty"). Výsledkem je výrazné snížení podílu zero-result searches a vyšší pravděpodobnost, že zákazník najde relevantní produkt.

    Tato funkce je součástí Editions Spring '26 a je dostupná automaticky — merchant nemusí provádět žádnou konfiguraci ani aktivaci. Pro headless storefronty využívající Storefront API zůstává rozhraní beze změny; vylepšení se projeví na úrovni relevance vrácených výsledků.
  zdroje:
    - title: "Shopify Editions Spring '26: Storefront search delivers more results — typo and phrasing tolerance"
      url: "https://help.shopify.com/en/manual/online-store/storefront-search"
    - title: "Editions Spring '26: Online — přehled všech storefront položek"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify storefront search nyní automaticky toleruje překlepy a neobvyklé fráze díky AI fuzzy matching — zákazníci nacházejí produkty i při nedokonalých dotazech, bez nutnosti konfigurace na straně merchanta."
tagy: [editions, storefront, search, ai, ux]
zdroj_kanal: editions
---

## Co se mění

Shopify upgradovalo vyhledávací infrastrukturu storefront o **AI-powered fuzzy matching**, který pokrývá dva typy nedokonalých dotazů:

- **Typo tolerance** — překlepy jsou automaticky mapovány na nejbližší slovo v katalogu (např. „chlepec" → „chlapec", „snekaers" → „sneakers"). Zákazník dostane relevantní výsledky i bez opravy dotazu.
- **Phrasing tolerance** — různé formulace stejného záměru vedou ke stejným výsledkům. Systém rozumí parafrázi a synonymům i bez ručního nastavení synonym skupin v Search & Discovery apce.

Funkce je **zapnutá automaticky** pro všechny online obchody. Nevyžaduje žádné změny v tématu, žádnou konfiguraci apky ani úpravy API volání. Pro headless storefronty využívající Storefront API se vylepšení projeví transparentně — dotazy vracejí relevantnější výsledky při stejném rozhraní.

Doplňkově Shopify stále podporuje manuální konfiguraci synonym, produktových boostů a filtrů přes Search & Discovery apku — tyto nástroje a nový AI matching se vzájemně doplňují.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; funkce dostupná automaticky pro všechny online obchody

## Dopad pro nás

**Pro vývojáře:**
Žádná breaking change ani nutná migrace. Storefront API search query funguje beze změny — vylepšení jsou na úrovni search enginu. Pokud klient provozuje headless storefront s vlastní search implementací postavenou nad Storefront API, výsledky se automaticky zlepší. Je vhodné otestovat chování na existujících zero-result search queries a ověřit, že nová tolerance nevrací nesouvisející produkty (edge case: velmi krátké nebo obecné dotazy).

**Pro PM / PO:**
Jde o bezúdržbové zlepšení UX bez nákladů na implementaci. Pro klienty s vyšším podílem mobilního provozu (kde překlepy vznikají častěji) může mít měřitelný dopad na konverzi. Stojí za zmínku při pravidelném reportingu nebo při diskuzi o výkonu search kanálu. Pokud klient dosud nepoužívá Shopify Search & Discovery apku, je nyní ještě méně důvodů hledat alternativní search řešení třetí strany.

## Použití v Integrátoru

Funkce je čistě na straně Shopify search infrastruktury — integrátorská integrace (Storefront API dotazy) funguje beze změny a automaticky těží z vylepšené relevance.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Online](/Shopify_news_magexo/zmena/editions-spring-2026-online/)
