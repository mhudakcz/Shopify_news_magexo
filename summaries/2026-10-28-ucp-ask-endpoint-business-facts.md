---
date: 2026-10-28
title: "UCP ask endpoint — odpovědi na dotazy o storu grounded v published business facts"
title_en: "UCP ask endpoint"
slug: ucp-ask-endpoint-business-facts
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Endpoint přímo nevoláme. Týká se nás nepřímo tam, kde pro obchod stavíme AI asistenta nebo chatbota a odpovědi o dopravě, vracení a kontaktech mu dnes dodáváme vlastním vyhledáváním nad dokumenty obchodu. Zároveň záleží na tom, jaká fakta obchodník publikuje v Knowledge base v adminu."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "knowledge-base-shopify-admin", "universal-commerce-protocol-ucp"]
editions_release: fall-2026
tldr: "Editions Fall '26 v developer tématu (agentic experiences) uvádějí UCP /ask endpoint, který odpovídá na dotazy k obchodu a opírá se o fakta, která obchod sám zveřejnil. Stránka neuvádí štítek, datum, formát volání ani autentizaci, takže jde zatím o směr, ne o hotové API. Smysl dává společně s Knowledge base a automaticky generovanými policies, protože právě z nich se publikovaná fakta skládají."
tagy: [ucp, ask-endpoint, agentic, business-facts, policies, developer]
zdroj_kanal: editions
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený protokol, přes který si AI agenti a platformy vyjednávají se Shopify obchody, co který obchod umí. Obchod své schopnosti (capabilities) inzeruje v discovery profilu na cestě /.well-known/ucp a agent ve svém profilu deklaruje, které z nich chce používat. Dosud UCP pokrývalo hlavně nákupní cestu: katalog, košík, checkout, sledování objednávek a od října 2026 také hledání retail prodejen. Chybějící kus tvořily dotazy, které nejsou o produktu, ale o obchodu samotném: jak vypadá vrácení zboží, kdo a jak se dá kontaktovat, jaká jsou pravidla dopravy.

    Editions Fall '26 (Exponential, 28. října 2026) v developer tématu, v bloku agentic experiences, uvádí UCP /ask endpoint. Zdrojová stránka o něm říká jen to, že odpovídá na dotazy k obchodu a opírá se o fakta, která zveřejnil sám obchod. Štítek (beta, early access, coming soon) ani datum u položky nejsou. Druhá polovina obrazu je na stejné stránce jinde: v agentic části je položka o obchodních údajích v AI kanálech, kde merchant kontroluje a schvaluje fakta sdílená s agenty včetně policies a FAQ, a v části Operations se policies pro vrácení, kontakt, dopravu a obchodní podmínky generují automaticky a drží se v sync s nastavením obchodu. V archivu to odpovídá Knowledge base v adminu, kde se nic nedostane k agentům, dokud to merchant nepublikuje.

    Tento článek proto popisuje jen to, co je jisté ze stránky Editions, a odděluje to od našeho výkladu. Nevíme, jak se endpoint volá, přes jaký transport, s jakou autentizací ani v jakém tvaru vrací odpověď. Zadání článku z naší analýzy zmiňovalo jako příklady faktů také doby doručení a otevírací dobu, ale stránka Editions je u /ask neuvádí, jmenuje jen policies a FAQ. Že /ask nahrazuje vlastní RAG nad dokumenty obchodu, je náš výklad, ne tvrzení Shopify.
  zdroje:
    - title: "Shopify Editions Fall '26 (developer, agentic experiences: UCP /ask endpoint)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Knowledge base nativně v Shopify Admin — fakta pro AI agenty"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/"
    - title: "Archiv: Automaticky generované store policies"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/auto-generated-store-policies/"
    - title: "Archiv: Universal Commerce Protocol (UCP) — otevřený standard pro agentic commerce"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/"
    - title: "Archiv: UCP location search — AI agenti najdou retail stores"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v developer tématu Editions Fall '26, v bloku agentic experiences, uvádí **UCP /ask endpoint**: endpoint v Universal Commerce Protocol, který **odpovídá na dotazy k obchodu** a **opírá se o fakta, která obchod sám zveřejnil**. Agent se tedy může zeptat například na podmínky vrácení zboží a odpověď nemá vycházet z domněnek jazykového modelu, ale z publikovaných údajů obchodu.

Kde se ta publikovaná fakta berou, ukazují další dvě položky stejných Editions a odpovídající články v archivu:

- **Obchodní údaje v AI kanálech.** Merchant kontroluje a schvaluje fakta, která se sdílejí s agenty, včetně policies a FAQ. Nativní podobu v adminu popisuje [Knowledge base](/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/) v Sales Channels > Agentic. Shopify fakta navrhne ze stránek storefrontu a nic se k agentům nedostane, dokud to merchant nepublikuje.
- **Automaticky generované policies.** Vrácení a reklamace, kontakt, doprava a obchodní podmínky se generují a drží v sync s nastavením obchodu, viz [automaticky generované store policies](/Shopify_news_magexo/zmena/auto-generated-store-policies/).

**Co stránka Editions výslovně neříká** (a nelze to z ní vyčíst):

- jak se endpoint volá (cesta, metoda, formát požadavku) a zda jde o nástroj na MCP endpointu, nebo o samostatné rozhraní,
- jak se agent autentizuje a zda se na /ask vztahují trust tiery a rate limity UCP,
- v jakém tvaru je odpověď, zda obsahuje odkaz na zdrojové fakt a co endpoint vrátí, když odpověď mezi publikovanými fakty není,
- zda a jak se odpovědi lokalizují (pro nás klíčová otázka u českých a slovenských obchodů),
- stav dostupnosti (položka nemá štítek ani datum), verzi UCP a případná omezení podle plánu nebo regionu.

Zadání z naší analýzy uvádělo jako příklady dotazů také doby doručení a otevírací dobu. Stránka Editions u /ask jmenuje jen policies a FAQ. Doprava je mezi automaticky generovanými policies, takže dotaz na pravidla dopravy je věrohodný. Konkrétní doby doručení nebo otevírací doba jsou zatím nepotvrzené. Podobně hledání prodejen v UCP dnes [nefiltruje podle otevírací doby](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/) a taková filtrace by končila chybou `invalid_input`.

**Náš výklad:** pro obecné dotazy typu "jaká je return policy" nebo "jak vás kontaktovat" by agent nemusel mít vlastní retrieval nad dokumenty obchodu. Platforma by odpověď vzala z faktů, která merchant už schválil. Platí to jen pro to, co merchant publikoval. Návody k produktům, B2B podmínky, interní znalostní báze nebo obsah nad rámec policies a FAQ zůstávají mimo, a tedy dál potřebují vlastní zdroj. Odpověď "grounded" také neznamená správná: je tak dobrá, jak dobrá jsou publikovaná fakta.

## Časová osa

- **17. 6. 2026**, Spring '26 Edition: UCP uvedeno jako otevřený standard pro agentic commerce, viz [Universal Commerce Protocol](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/).
- **28. 8. 2026**: storefronty začínají inzerovat UCP verzi `2026-08-25`.
- **8. 10. 2026**: Shopify oznamuje automaticky generované policies udržované v sync s nastavením obchodu.
- **21. a 22. 10. 2026**: location capabilities v UCP `2026-08-25` a odpovídající changelog, viz [UCP location search](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/).
- **26. 10. 2026**: Knowledge base je dostupná přímo v adminu, samostatná appka končí **15. 1. 2027**.
- **28. 10. 2026**, Editions Fall '26: UCP /ask endpoint uveden v developer tématu. Bez štítku a bez data.
- Datum dostupnosti, verze UCP a případný termín jakékoli migrace: neuvedeno, ověřit v dokumentaci na shopify.dev/docs/agents.

## Dopad pro nás

Nalehavost je střední. Žádný termín nehoří a žádná akce není povinná, ale jde o další vrstvu agentního nakupování, která bude záviset na tom, co obchodník publikuje. Právě na to se dá připravit už teď.

**Pro vývojáře:**

- **Počkat na dokumentaci, nic nehardcodovat.** Bez cesty, schématu a pravidel autentizace nelze endpoint bezpečně integrovat. Sledovat shopify.dev/docs/agents a changelog. Ověřit, zda se /ask objeví v discovery profilu na `/.well-known/ucp` jako capability, stejně jako [location capabilities](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/). Je to rozumné očekávání vyplývající z toho, jak UCP dnes funguje, ne potvrzený fakt.
- **Vlastní agenty a chatboty nad Shopify obchodem rozdělit na dvě třídy dotazů.** Dotazy na policies, kontakt a FAQ jsou kandidáti na /ask, dotazy na obsah mimo publikovaná fakta zůstávají na vlastním retrievalu. Počítat s hybridem, ne s vypnutím existujícího řešení.
- **Navrhnout fallback.** Co udělá agent, když /ask odpověď nemá, vrátí chybu nebo je pomalý: odkáže na stránku s policy, přepne na vlastní vyhledávání nebo předá člověku. Do doby, než bude známé chování endpointu, to nelze doladit, ale rozhraní stojí za to oddělit už teď.
- **Po vydání dokumentace udělat srovnávací pilot** na jednom obchodě: stejná sada dotazů (vrácení, doprava, kontakt, platba) přes vlastní RAG a přes /ask, porovnat přesnost, jazyk odpovědí a latenci.
- **Zkontrolovat zdroj pravdy.** Pokud storefront nebo aplikace zobrazuje text policies, ověřit, že se čte z aktuální policy a nekopíruje se do vlastní konfigurace. Opsaný text by se přestal držet v sync a rozešel by se s tím, co o obchodu řeknou agenti.

**Pro PM / PO:**

- **Příležitost: audit publikovaných faktů.** U obchodů na agentic kanálech projít Knowledge base v adminu (Sales Channels > Agentic > Knowledge base): zda jsou fakta navržená ze storefrontu správná, zda jsou publikovaná a zda obsahují to, na co se zákazníci ptají nejčastěji. Dobrá FAQ a aktuální policies jsou předpoklad toho, aby odpovědi agentů byly užitečné.
- **Související termín.** Samostatná aplikace Knowledge Base přestává být dostupná **15. 1. 2027** a obchody s více než 1 000 fakty je musí do té doby doplnit ručně, jak popisuje [článek o Knowledge base](/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/). Samotné /ask s tím termínem nesouvisí, ale stejný obsah bude pravděpodobně zdrojem odpovědí.
- **Odpovědnost zůstává u obchodníka.** Policies, které Shopify generuje, nejsou právní poradenství a merchant odpovídá za jejich soulad se zákonem. Pokud je agent bude citovat zákazníkům, platí to dvojnásob. U českého a slovenského prodeje si před publikací ohlídat zejména znění o odstoupení od smlouvy a reklamacích.
- **Nastavit očekávání.** Zatím nevíme, jak /ask funguje, jak se lokalizuje ani kdy bude dostupné. Neslibovat zákazníkům konkrétní chování ani termíny. Titulek o nahrazení RAG je naše zjednodušení, takže ho nepřebírat do nabídek.
- **Do roadmapy agentních projektů** zařadit krok "příprava obchodních faktů" vedle datové kvality katalogu. Je to levná práce, která zlepší odpovědi agentů bez ohledu na to, jak /ask nakonec dopadne.

## Použití v Integrátoru

Endpoint přímo nevoláme a žádná synchronizace se nemění. Nepřímo je relevantní u projektů s vlastním AI asistentem, kde může oficiální cesta k faktům o obchodu časem nahradit část vlastního vyhledávání, a u obchodů na agentic kanálech, kde stojí za to při auditu zkontrolovat Knowledge base.

## Související

- [Editions Fall '26, hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/)
- [Knowledge base nativně v Shopify Admin](/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/)
- [Universal Commerce Protocol (UCP)](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/)
- [UCP location search](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/)
- [Automaticky generované store policies](/Shopify_news_magexo/zmena/auto-generated-store-policies/)
