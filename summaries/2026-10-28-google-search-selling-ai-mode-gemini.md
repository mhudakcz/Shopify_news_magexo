---
date: 2026-10-28
title: "Google Search selling — AI Mode + Gemini + Shopify checkout"
title_en: "Google Search selling"
slug: google-search-selling-ai-mode-gemini
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nový prodejní kanál v Google AI površích bude pravděpodobně čerpat z produktových dat v Shopify, která se u nás plní synchronizací z ERP nebo PIM, a objednávky z něj přibudou v adminu vedle ostatních kanálů, takže je potřeba ověřit, že je naše zpracování objednávek a skladu zvládne."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "agentic-storefronts-admin-page", "meta-ai-channel-agentic-storefronts"]
editions_release: fall-2026
tldr: "Podle Editions Fall '26 bude možné prodávat přes Google Search včetně AI Mode a přes aplikaci Gemini s checkoutem poháněným Shopify, objednávky se spravují v adminu. Stránka neuvádí termín, trhy ani požadavky, proto je pro české obchody prvním krokem ověřit dostupnost a zkontrolovat kvalitu produktových dat."
tagy: [agentic, google, ai-mode, gemini, checkout, shop-pay, discovery]
zdroj_kanal: editions
kontext:
  background: |
    Dosud se produkty z Shopify do Googlu dostávaly hlavně přes produktový feed do Google Merchant Center a přes aplikaci Google a YouTube. Zákazník v takovém případě v Googlu produkt uvidí (v nákupních výsledcích nebo v reklamě), ale nákup dokončuje na webu obchodu. Google Search se přitom u většiny e-shopů řadí mezi hlavní zdroje návštěv, ať už přes organické výsledky, nebo přes placené kampaně.

    Fall '26 Editions v tématu Agentic přidávají položku Sell in Google Search, AI Mode and the Gemini app. Podle jediné věty, kterou stránka uvádí, zákazníci nakupují přímo v chatu, checkout běží na Shopify a merchant spravuje objednávky v adminu. Jde tedy o stejný princip jako u dalších AI kanálů v Agentic Storefronts (ChatGPT, Perplexity, Copilot, od září také Meta): produkty se dostanou k AI asistentovi a nákup se dokončí v konverzaci, aniž by zákazník musel přejít na web obchodu. Nově se tento princip rozšiřuje na Google Search a Gemini, tedy na povrchy s výrazně větším dosahem než samostatné AI chatboty.

    Stránka Editions u položky neuvádí datum spuštění, podporované země, tarify ani poplatky a odkazuje jen na nápovědu, která nebyla součástí zdroje. Také nepopisuje, odkud se produkty do Googlu berou. Archiv u ostatních AI kanálů dokumentuje, že produkty se sdílí přes Shopify Catalog a že merchant řídí přístup ke katalogu i k přímému checkoutu. Že totéž platí i pro Google, je zatím jen rozumný předpoklad, ne potvrzený fakt. Souběžně existuje samostatná položka Connect your store to Google Gemini, která se týká správy obchodu z Gemini (produkty, objednávky, inventář), ne prodeje zákazníkům, a obě položky se nesmí zaměňovat.
  zdroje:
    - title: "Shopify Editions Fall '26 — Exponential"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v Editions Fall '26 (téma Agentic) oznamuje položku **Sell in Google Search, AI Mode and the Gemini app**. Stránka ji popisuje jednou větou: zákazníci nakupují v chatu, checkout je poháněný Shopify a objednávky merchant spravuje v adminu. K tomu odkazuje na nápovědu.

Z toho plyne:

- **Nové prodejní povrchy.** Produkty z Shopify se mají zobrazovat nejen ve výsledcích Google Search, ale i v AI Mode a v aplikaci Gemini, a to s možností dokončit nákup přímo tam.
- **Checkout od Shopify.** Platbu a zpracování objednávky zajišťuje Shopify, takže objednávka končí ve stejném adminu jako objednávky z webu. Zda a jak se zde uplatní Shop Pay, stránka u této položky nepíše; Shop Pay v agentech uvádí jako samostatnou položku.
- **Správa v adminu.** Merchant nemá spravovat další systém, objednávky z Googlu mají být vidět v adminu.
- **Potenciální akviziční kanál bez SEO.** Pro obchody, které nemají silné organické pozice, může jít o způsob, jak se v Googlu objevit přes produktová data, nikoli přes optimalizaci obsahu. Jde o náš výklad, ne o tvrzení Shopify.

Co stránka **neuvádí**: datum spuštění, stav (live nebo preview), podporované země a jazyky, tarify a poplatky, požadavky na produktová data ani to, zda je nutný Google Merchant Center účet nebo aplikace Google a YouTube. Také není jasné, jestli se produkty do Googlu dostávají přes Shopify Catalog stejně jako u ostatních AI kanálů. Archiv u Meta AI kanálu dokumentuje sdílení z katalogu ve výchozím stavu a dva přepínače (přístup ke katalogu a přístup k přímému checkoutu). Je rozumné čekat podobný model, ale potvrzení chybí.

Nezaměňovat: položka **Connect your store to Google Gemini** je connector pro správu obchodu z Gemini (produkty, objednávky, inventář) a s prodejem zákazníkům nesouvisí. Zmínka o Google Shopping u scheduled changes a A/B testů v tématu Online je rovněž jiná funkce.

## Časová osa

- **2026-10-28** — Editions Fall '26 zveřejněny, položka je uvedena v tématu Agentic. Stránka neuvádí stav ani datum dostupnosti; pole ucinnost_od v hlavičce článku proto značí jen den oznámení, ne spuštění.
- **Termín spuštění pro CZ a EU** — neznámý. Je třeba dohledat v nápovědě, na kterou položka odkazuje, nebo v changelogu.
- **2026-11-02** — související termín: starý Global Catalog REST API přestává odpovídat a je třeba přejít na Global Catalog MCP ([detail](/Shopify_news_magexo/zmena/global-catalog-rest-api-sunset-2026-11-02/)). Týká se jen těch, kdo jej volají, ale Catalog je pravděpodobná datová páteř AI kanálů.
- **2027-01-15** — související termín: končí samostatná appka pro firemní fakta agentů, nativní Knowledge base v adminu ji nahrazuje ([detail](/Shopify_news_magexo/zmena/knowledge-base-shopify-admin/)).

## Dopad pro nás

**Pro vývojáře:**

- K položce zatím není známé žádné nové API ani webhook. Nic není potřeba programovat dřív, než vyjde nápověda nebo changelog. Stojí za to je sledovat a ověřit, zda objednávky z Googlu nesou rozlišitelný zdroj (sales channel, source) a zda je lze filtrovat v exportech a v synchronizacích objednávek do ERP.
- Zpracování objednávek z nového kanálu je potřeba otestovat jako každý nový kanál: měna a DPH, dopravní sazby, Markets, platební metody, adresní formát a dobírka, pokud je u obchodu běžná. Checkout poháněný Shopify bude čerpat z nastavení obchodu, ale detailní chování u českých obchodů zatím neznáme.
- Sklad a ceny se do AI povrchů dostávají z dat v Shopify. U obchodů, kde jsou zdrojem pravdy ERP nebo PIM, je proto důležitá aktuálnost dostupnosti a cen. Prodej zboží, které už není skladem, v konverzaci s AI asistentem je horší zážitek než na webu, protože zákazník nemá kontext obchodu.
- Datová kvalita rozhoduje o viditelnosti: názvy, atributy, GTIN a značky, obrázky, dostupnost, ceny a compare-at ceny. Compare-at ceny se agentům sdílejí přes přepínač v nastavení catalog mappingu ([detail](/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/)) a měly by odpovídat reálné předchozí ceně. Pro evropské obchody je související i buyer consent v Checkout a Cart MCP ([detail](/Shopify_news_magexo/zmena/checkout-cart-mcp-ucp-buyer-consent/)).

**Pro PM / PO:**

- Nalehavost je vysoká kvůli dosahu, ne kvůli termínu: Google Search je pro většinu e-shopů jeden z hlavních zdrojů návštěv a prodej přímo v AI Mode a Gemini může být první AI kanál s opravdu velkým dosahem. Zároveň je to zatím oznámení bez termínů, takže slibovat konkrétním obchodům nic nelze.
- První úkol je dohledat podmínky: dostupnost pro Česko a EU, tarify, poplatky, povinná příprava dat a vztah k Google Merchant Center. Bez toho nelze říct, zda je to příležitost pro konkrétní obchod už v sezoně Black Friday.
- Příležitost pro nabídku: audit kvality produktových dat pro AI kanály (atributy, GTIN, obrázky, popisy, ceny) a kontrola nastavení v Agentic Storefronts. Hodí se pro obchody s malým organickým provozem, které nemají kapacitu na SEO.
- Riziko: sdílení produktů do AI kanálů u jiných kanálů běží ve výchozím stavu zapnuté ([příklad Meta](/Shopify_news_magexo/zmena/meta-ai-channel-agentic-storefronts/)). Pokud obchod nechce zboží nabízet v AI površích (omezený sortiment, B2B ceny, regulované zboží), je dobré dopředu ověřit, jaká nastavení Google varianta nabídne.

## Použití v Integrátoru

Přímé použití zatím není, žádné API k položce nebylo oznámeno. Nepřímo se týká synchronizace produktů, cen a skladu z ERP nebo PIM do Shopify a zpracování objednávek z nových kanálů, protože kvalita těchto dat rozhoduje o tom, jak se obchod v Google AI površích zobrazí.

## Související

- [Editions Fall '26: Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/) — přehled tématu, ze kterého položka pochází
- [Agentic Storefronts v adminu](/Shopify_news_magexo/zmena/agentic-storefronts-admin-page/) — místo, kde se AI kanály spravují a měří
- [Meta jako AI channel](/Shopify_news_magexo/zmena/meta-ai-channel-agentic-storefronts/) — nejbližší precedens: sdílení z katalogu a přepínač přímého checkoutu
- [Produktový feed pro Google Shopping](/Shopify_news_magexo/zmena/blog-produktovy-feed-google-shopping-tipy/) — současný způsob, jak se produkty dostávají do Googlu
