---
date: 2026-10-28
title: "Digital products z AI agents — jeden prompt vytvoří priced + fulfilled produkt + shareable link"
title_en: "Digital products from agents"
slug: digital-products-from-agents
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Digitální produkty vytvořené agentem vznikají přímo v adminu obchodu mimo naše synchronizace a do navazujících systémů (ERP, sklad, feedy) mohou doručit produkt bez skladu, váhy a dopravy. Zároveň jde o nový prodejní model pro tvůrce a prodejce info produktů, který stojí za to znát při konzultacích."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "store-management-via-ai-agents", "shop-mcp-shopping-checkout-any-agent"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidávají možnost předat digitální soubor AI agentovi (Claude, ChatGPT nebo jinému) a ten v adminu vytvoří produkt s cenou, plněním objednávky a sdílitelným odkazem k nákupu. Pro tvůrce a prodejce info produktů odpadá ruční zakládání produktu, pro nás je to hlavně nový zdroj produktů vzniklých mimo admin a mimo naše synchronizace."
tagy: [digital-products, agentic, ai, shareable-link]
zdroj_kanal: editions
kontext:
  background: |
    Digitální produkty (e-booky, PDF průvodci, šablony, presety, kurzy, vstupenky) jsou pro tvůrce a malé prodejce nejrychlejší cesta k prvnímu prodeji, protože nemají sklad, dopravu ani vratky zboží. Zbývá ale překážka při zakládání: nahrát soubor, napsat popis, nastavit cenu, zapnout plnění objednávky a získat odkaz, který půjde sdílet. Shopify na tuto vrstvu dosud nabízel samostatnou aplikaci Digital Products a v Editions Fall '26 ji vylepšuje.

    Fall '26 s přezdívkou Exponential posouvá založení takového produktu do konverzace s AI agentem. Podle stránky Editions merchant předá digitální soubor agentovi (jmenovitě Claude nebo ChatGPT, případně jiný agent podle volby) a ten v adminu vytvoří produkt s plněním objednávky, cenou a sdílitelným odkazem k nákupu. Položka stojí na vrstvě connectorů, které Shopify pro Claude, ChatGPT a Perplexity představil už ve Spring '26 a které Fall '26 rozšiřuje o Microsoft Copilot, Gemini, Meta Muse a Grok. Stejné téma Editions doplňuje dvěma sousedními položkami: prodejem přístupu přes URL u produktu (šablony, rezervace) a zmíněnou vylepšenou aplikací Digital Products.

    Stránka Editions u položky neuvádí tarify, trhy, limity ani typy souborů a odkazuje na nápovědu. Příklad zadání v článku (prodávej mi tenhle PDF za 29 dolarů) je naše ilustrace, ne citát Shopify. Po vydání nápovědy a po vlastním testu v dev obchodě je potřeba tento článek doplnit.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential (položka Digital products in agents)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Store management with agents — Claude, ChatGPT, Perplexity (connectory ze Spring '26)"
      url: "https://www.shopify.com/build-with-ai#chat-connectors"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Podle Editions Fall '26 stačí předat digitální soubor AI agentovi a ten v adminu obchodu vytvoří produkt, který je rovnou připravený k prodeji: s cenou, nastaveným plněním objednávky a sdílitelným odkazem k nákupu. Jako agenti se jmenují Claude a ChatGPT, případně jiný agent podle volby merchanta.

Typické zadání by mohlo vypadat takto: *prodávej mi tenhle PDF za 29 dolarů*. Agent soubor nahraje, založí produkt, nastaví cenu a vrátí odkaz, který merchant pošle publiku, vloží do newsletteru nebo do příspěvku na sociálních sítích. Jde o naši ilustraci, konkrétní podobu promptu ani odpovědi agenta stránka neuvádí.

Co z Editions vyplývá:

- **Vstup:** digitální soubor a pokyn v přirozeném jazyce.
- **Výstup:** produkt v adminu (merchant ho tam dál vidí a může upravit jako každý jiný), cena, plnění objednávky a sdílitelný odkaz k nákupu.
- **Dostupnost:** položka není označena jako coming soon a odkazuje na nápovědu. Tarify, podporované trhy ani limity stránka neuvádí.
- **Sousední položky ve stejném tématu:** vylepšená aplikace Shopify Digital Products pro zahájení nebo rozšíření prodeje digitálních produktů a možnost přidat k produktu URL a cenu a prodávat přístup k věcem typu šablony nebo rezervace. Zda agentní postup stojí na aplikaci Digital Products, stránka neříká.
- **Souvislost:** navazuje na connectory pro řízení obchodu z AI agentů ze Spring '26 (Claude, ChatGPT, Perplexity), viz [Řízení Shopify storu z AI agentů](/Shopify_news_magexo/zmena/store-management-via-ai-agents/). Fall '26 tuto vrstvu rozšiřuje na další agenty, viz [přehled tématu Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/).

Co Editions neříká a co je nutné ověřit v nápovědě nebo testem:

- jaké typy a velikosti souborů jsou podporované,
- jak probíhá doručení (stažení po platbě, e-mail, platnost odkazu, počet stažení),
- zda agent produkt rovnou publikuje, nebo ho nechá jako koncept ke schválení merchantem,
- v jaké měně a pro které trhy se cena nastaví a jak se počítá daň,
- jaká oprávnění connector pro vytváření produktů dostává,
- jak se odkaz k nákupu chová (vlastní stránka produktu, nebo přímo checkout).

## Časová osa

- 2026-06-17 — Spring '26: connectory pro řízení obchodu z Claude, ChatGPT a Perplexity (technický základ pro tuto položku)
- 2026-10-28 — Editions Fall '26 (Exponential): položka Digital products in agents je představena a není označena jako coming soon
- Datum plošné dostupnosti, omezení podle tarifu nebo trhu: neuvedeno, ověřit v nápovědě odkazované z Editions

## Dopad pro nás

Nalehavost je nízká. Nejde o změnu API ani o povinnou akci, ale o nový způsob, jak v obchodě vznikají produkty, a o nový prodejní model, který se dá nabídnout tvůrcům.

**Pro vývojáře:**

- **Produkty vznikají mimo naše toky.** Digitální produkt založený agentem se v obchodě objeví jako kterýkoli jiný produkt, takže ho zachytí i webhooky na vytvoření a změnu produktu. Synchronizace do ERP, PIM nebo feedů musí unést produkt bez fyzického zboží: bez skladu, bez váhy a bez dopravy. U obchodu, který digitální produkty začne prodávat, stojí za to ověřit, jak se takové produkty v API tváří (zejména příznak, že varianta nevyžaduje dopravu, a sledování zásob), a podle toho je v synchronizacích rozlišit nebo vyřadit.
- **Objednávky bez expedice.** Řádky digitálních produktů nemají co expedovat. Logika, která čeká na vyskladnění, číslo zásilky nebo potvrzení z ERP, nesmí takové objednávky držet jako neuzavřené. Ověřit export objednávek, expediční fronty a notifikace zákazníkům.
- **Oprávnění a drift.** Agent mění katalog přes connector, mimo admin a mimo naše synchronizace. Pokud je zdrojem pravdy o cenách a názvech jiný systém, hlídat, aby ruční nebo agentní produkty nepřepisovaly ani nekolidovaly s importem.
- **Feedy a kanály.** Digitální produkt nemusí patřit do všech produktových feedů a marketplace kanálů. Před spuštěním prodeje zkontrolovat, kam se nový produkt automaticky publikuje.
- **API plocha.** Stránka Editions o žádném novém API nehovoří. Nečekáme změnu v Admin API, jen nový zdroj dat, který je potřeba znát.

**Pro PM / PO:**

- **Nová příležitost pro konkrétní segment.** Tvůrci, školitelé, poradci a malé značky, které prodávají e-booky, šablony, průvodce nebo presety, získávají cestu od hotového souboru k prodejnímu odkazu v jedné konverzaci. Typicky tím odpadá ruční zakládání produktu v adminu. U takových zájemců má smysl ukázat to na demu jako součást onboardingu nebo konzultace.
- **Co ověřit před doporučením českému nebo evropskému obchodu.** V EU se u digitálního obsahu řeší DPH podle země zákazníka, souhlas kupujícího s okamžitým dodáním a ztrátou práva odstoupit od smlouvy a obchodní podmínky. Zda a jak tyto náležitosti pokrývá agentní postup, z Editions nevyplývá. Totéž platí pro autorská práva a licenci k nahrávanému souboru, za ty odpovídá merchant.
- **Ochrana obsahu.** Sdílitelný odkaz a soubor ke stažení neznamená ochranu proti dalšímu šíření. Zda Shopify nabízí omezení stažení nebo vodoznak, stránka neuvádí.
- **Doporučený postup.** Počkat na nápovědu odkazovanou z Editions, v dev obchodě propojit Claude nebo ChatGPT a zkusit celý průchod: vznik produktu, jeho stav (koncept, nebo aktivní), cenu a měnu, daň, doručení souboru po platbě a výsledek v objednávce. Teprve potom ho nabízet jako součást služby.

## Použití v Integrátoru

Digitální produkty vytvořené agentem se v obchodě objeví mimo naše toky, proto je při příští revizi synchronizace produktů a objednávek vhodné ověřit, že produkty bez skladu a dopravy nic nerozbijí. Jinak jde zatím o sledování a o podklad pro konzultace, žádná změna v Integrátoru se nevyžaduje.

## Související

- [Editions Fall '26, hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Editions Fall '26: Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/)
- [Řízení Shopify storu z AI agentů — Claude, ChatGPT, Perplexity](/Shopify_news_magexo/zmena/store-management-via-ai-agents/)
- [Shop MCP — shopping a Shop Pay checkout pro libovolného AI agenta](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/)
