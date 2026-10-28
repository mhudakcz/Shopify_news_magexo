---
date: 2026-10-28
title: "ChatGPT Ads — sponsored placements v chat conversations, tracking v Admin"
title_en: "ChatGPT Ads"
slug: chatgpt-ads-sponsored-placements
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Z oznámení nevyplývá žádné API ani zásah do kódu, jde o aplikaci pro merchanty. Nepřímo se nás může dotknout kvalita produktových dat z ERP a PIM (ceny, sklad, popisy), která ovlivní, jak se produkty v sponzorovaných umístěních zobrazí, a atribuce prodejů z ChatGPT v reportingu obchodů."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-marketing", "sponsored-products-catalog-api", "chatgpt-sidebar-shopify-plugin"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidává do Marketingu položku ChatGPT Ads: obchod může inzerovat v konverzacích v ChatGPT pomocí sponzorovaných umístění a výkon sleduje v administraci v aplikaci ChatGPT Ads z Shopify App Store. Stránka Editions neuvádí dostupnost, trhy, cenu ani stav (live nebo preview), takže pro české obchody jde zatím o sledování, ne o akci."
tagy: [chatgpt-ads, agentic, sponsored, advertising, openai]
zdroj_kanal: editions
kontext:
  background: |
    Reklama v AI asistentech se v archivu objevuje postupně od jara. V Editions Spring '26 se Shop Campaigns rozšířily o inventář ChatGPT (vedle Microsoft Monetize a Pinterestu) a stejné vydání v preview ukázalo sponzorovaná umístění v Catalog API, kde vývojáři AI agentů mohou vydělávat provizi z nákupů, které jejich agent zprostředkuje. Campaign Autopilot pak při spuštění v červnu uváděl ChatGPT Ads jako kanál, který přibude později, a v srpnu při přidání Microsoft Advertising zůstával ChatGPT Ads mezi avizovanými kanály.

    Fall '26 dělá z ChatGPT Ads samostatnou položku v tématu Marketing, a to poslední z devíti. Podle Editions mohou obchody inzerovat přímo v konverzacích a zvyšovat viditelnost sponzorovanými umístěními, výkon se sleduje v administraci v aplikaci ChatGPT Ads a položka odkazuje na výpis aplikace v Shopify App Store s tlačítkem Get app. Je to tedy první případ, kdy je placená viditelnost uvnitř konverzace s AI asistentem nabídnutá merchantům jako hotová aplikace v adminu, ne jen jako zdroj inventáře uvnitř jiného produktu.

    Zdroj je ale mimořádně stručný: jediná věta bez čísel. Neuvádí stav (live, preview, early access), podporované trhy, cenový model, formáty reklam, způsob cílení ani to, jak se produkty do odpovědí vybírají. Smluvní rámec mezi Shopify a OpenAI na stránce popsaný není. Cokoli nad rámec této věty je v článku označeno jako otázka k ověření, ne jako fakt.
  zdroje:
    - title: "Shopify Editions Fall '26 — Marketing: ChatGPT Ads"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Sponsored products v Catalog API (preview)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/sponsored-products-catalog-api/"
    - title: "Archiv: Editions Spring '26 — Marketing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-marketing/"
    - title: "Archiv: Campaign Autopilot — AI-řízené marketing kampaně napříč kanály"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/campaign-autopilot-ai-marketing/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 v tématu Marketing uvádí jako poslední, devátou položku **ChatGPT Ads**. Z oznámení vyplývá:

- obchod může **inzerovat v konverzacích** v ChatGPT a **zvýšit viditelnost sponzorovanými umístěními** (sponsored placements),
- výkon se **sleduje v administraci** v aplikaci **ChatGPT Ads**,
- položka odkazuje na výpis aplikace v **Shopify App Store** s tlačítkem Get app.

Ilustrační příklad, který jde nad rámec zdroje: uživatel se v ChatGPT zeptá na běžecké boty a mezi odpověďmi se mu může objevit sponzorovaný produkt z e-shopu, který za umístění platí. Jak přesně se umístění zobrazuje a podle čeho se vybírá, stránka Editions nepopisuje.

**Co stránka Editions neuvádí:**

- stav (live, preview nebo early access) a datum spuštění,
- podporované země a jazyky, tedy ani to, zda je kanál dostupný pro české obchody,
- cenový model (aukce, platba za proklik, platba za prodej) a minimální rozpočet,
- formáty reklam a způsob cílení,
- jaká produktová data aplikace používá (katalog z Shopify, vlastní feed) a jaká oprávnění si při instalaci říká,
- zda půjdou výsledky číst přes Admin API nebo ShopifyQL, nebo jen v rozhraní aplikace,
- kdo aplikaci vydává a jaký je smluvní vztah mezi Shopify a OpenAI.

**Co to není** (ať se položky nepletou, v Editions jsou blízko sebe):

- **Shop Campaigns s inventářem ChatGPT** z jara: reklama spravovaná v Shopify Shop Campaigns s platbou za prodej. ChatGPT Ads je samostatná položka s vlastní aplikací, vztah k Shop Campaigns zdroj nepopisuje.
- **Sponzorovaná umístění v Catalog API** ([viz článek](/Shopify_news_magexo/zmena/sponsored-products-catalog-api/)): jde o vývojářskou stranu, provize pro tvůrce AI agentů, v preview.
- **Sidebar Shopify v ChatGPT** ([viz článek](/Shopify_news_magexo/zmena/chatgpt-sidebar-shopify-plugin/)): správa obchodu z chatu, žádná reklama.

## Časová osa

- 2026-06-17: Editions Spring '26: Shop Campaigns dostávají inventář ChatGPT, Catalog API ukazuje sponzorovaná umístění v preview, Campaign Autopilot avizuje ChatGPT Ads jako budoucí kanál
- 2026-08-04: Campaign Autopilot přidává Microsoft Advertising, ChatGPT Ads stále mezi avizovanými kanály
- 2026-10-28: Editions Fall '26: ChatGPT Ads jako samostatná položka s aplikací v App Store
- Datum dostupnosti, trhy, cena a stav (live nebo preview): **neuvedeno**, ověřit ve výpisu aplikace v Shopify App Store

## Dopad pro nás

**Pro vývojáře:**
Jde o aplikaci pro merchanty, ne o změnu API nebo theme, takže pro stávající projekty není nutná žádná úprava kódu. Body, které stojí za ověření, jakmile bude aplikace dostupná pro vývojový nebo testovací obchod:

- **Oprávnění aplikace.** Před instalací zkontrolovat, jaké přístupy si aplikace říká (produkty, objednávky, zákazníci, pixel nebo web pixel). Rozsah z dostupných zdrojů není zřejmý.
- **Produktová data.** Pokud reklamy čerpají z produktů v Shopify, bude kvalita titulků, popisů, cen a skladu přímo ovlivňovat to, co se zobrazí. U obchodů se zdrojem pravdy v ERP nebo PIM se vyplatí mít data konzistentní, aby reklama neukazovala zastaralou cenu nebo vyprodaný produkt.
- **Atribuce a měření.** Zjistit, jak se návštěvy z ChatGPT značí (UTM parametry, referrer, vlastní pixel) a zda se propsají do GA4, server-side trackingu a stávajících reportů. Pokud obchod používá vlastní měření, hrozí, že se prodeje z ChatGPT Ads zapíšou do jiného kanálu než v Shopify.
- **Přístup k datům.** Z oznámení nelze poznat, zda půjde výkon číst přes Admin API nebo ShopifyQL (u metrik Shop Campaigns v ShopifyQL to Editions uvádí, u ChatGPT Ads ne). Pro obchody s vlastním reportingem je to klíčový bod.
- **Ochrana soukromí a souhlasy.** Nejasné, jaká data se předávají do OpenAI a zda reklama v chatu podléhá stejným pravidlům jako ostatní reklamní kanály. Před zapnutím to vyjasnit s odpovědnou osobou za ochranu dat.

**Pro PM / PO:**
Nalehavost je nízká: položka je jedna věta bez data, trhů a ceny, takže se pro české obchody nedá teď naplánovat. Je ale dobré ji mít na radaru, protože reklama uvnitř AI konverzace se podle tohoto vydání a jarních oznámení formuje jako nový placený kanál vedle vyhledávání a nákupních reklam.

- **Co dělat teď:** nic neslibovat obchodům. Zkontrolovat výpis aplikace ChatGPT Ads v Shopify App Store a ověřit, zda je k dispozici pro české obchody a v jakém stavu.
- **Až bude dostupné:** zvážit pilot s jedním nebo dvěma obchody s kvalitním produktovým katalogem a malým rozpočtem, s předem domluvenými metrikami (ROAS, náklady na získání zákazníka, podíl nových zákazníků) a srovnáním s Google nákupními reklamami nebo Performance Max.
- **Rizika:** neznámá cena, neprůhledná atribuce a nezralost kanálu. Není jasné, jak se bude reklama v chatu lišit od organického doporučení z pohledu důvěry zákazníka, proto počítat s tím, že první výsledky nemusí být srovnatelné s ostatními kanály.
- **Doporučení:** sledovat Editions a nápovědu Shopify, doplnit článek, jakmile budou známy dostupnost, cena a rozsah dat.

## Použití v Integrátoru

Přímé použití zatím nevidíme: jde o merchant aplikaci bez API, které bychom mohli volat. Nepřímo bude záležet na kvalitě produktových dat synchronizovaných z ERP a PIM a na tom, jak se prodeje z ChatGPT promítnou do reportingu.

## ⬅️ Související

🔗 [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Marketing](/Shopify_news_magexo/zmena/editions-fall-2026-marketing/)
🔗 [Sponsored products v Catalog API (preview)](/Shopify_news_magexo/zmena/sponsored-products-catalog-api/)
🔗 [ChatGPT sidebar pro Shopify](/Shopify_news_magexo/zmena/chatgpt-sidebar-shopify-plugin/)
