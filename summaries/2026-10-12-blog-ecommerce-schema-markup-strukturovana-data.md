---
date: 2026-10-12
title: "E-commerce schema markup a strukturovaná data"
slug: blog-ecommerce-schema-markup-strukturovana-data
zdroj: https://www.shopify.com/cz/blog/schema-markup
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Schema markup se skládá z produktových dat (cena, dostupnost, GTIN, značka, SKU), takže jeho kvalita přímo závisí na tom, jak pečlivě se katalog plní a synchronizuje do Shopify."
dotcene_klienty: []
souvisejici: [blog-generative-engine-optimization-ai-hledani, customize-llms-txt-agents-md, blog-ai-seo]
tldr: "Shopify vysvětluje, jak pomocí JSON-LD a slovníku Schema.org popsat produkty, ceny, recenze a zásady vracení tak, aby je pochopily vyhledávače i AI nákupní asistenti, a které typy schémat si musí obchod doplnit sám."
tagy: [schema-markup, structured-data, seo, json-ld, rich-snippets, ecommerce]
zdroj_kanal: blog
kontext:
  background: |
    Schema markup je standardizovaný způsob zápisu strukturovaných dat nad slovníkem Schema.org. Vyhledávačům a velkým jazykovým modelům říká, co na stránce je — produkt, jeho cena, dostupnost, hodnocení nebo zásady vracení — aniž by si to musely domýšlet z textu a vzhledu stránky. Nejčastěji se píše ve formátu JSON-LD, tedy jako samostatný blok v značce script, obvykle v sekci head. Alternativou je Microdata, kde se atributy vkládají přímo do existujících HTML značek. Google data z markupu využívá pro Shopping Graph, který napájí zobrazení produktů ve vyhledávání, v obrázcích, v nákupech i v odpovědích generovaných AI.
    Viditelným výstupem jsou rich snippets, tedy obohacené výsledky ve vyhledávání. Mohou zobrazit hvězdičkové hodnocení, počet recenzí, cenu, dostupnost na skladě nebo informace o vrácení zboží ještě před prokliknutím. Shopify odkazuje na dokumentaci Google Search Central, podle které správně nasazená strukturovaná data zvyšují míru prokliku. Schema přitom není sama o sobě rozhodující ranking faktor. Je to spíš dodatečný kontext, který pomáhá posoudit signály EEAT a zpřehledňuje to, co by crawler při procházení kódu mohl přehlédnout. Autoři proto doporučují nasazovat jednotlivé typy postupně a sledovat dopad.
    Na Shopify generuje základní JSON-LD pro produkty a články Liquid filtr structured_data, v tématu typicky v souboru main-product.liquid. Pokrývá název, cenu, dostupnost a URL. Cokoli dalšího, například GTIN, značku, SKU, recenze, náklady na dopravu nebo zásady vracení, je potřeba doplnit ručně v kódu tématu, nebo aplikací z App Store. Článek rozebírá typy Organization (podtyp OnlineStore na úvodní straně), LocalBusiness, Product s povinným obalem Offer, cenu a slevu přes UnitPriceSpecification se StrikethroughPrice, BreadcrumbList, hodnoty dostupnosti ze Schema.org, ItemList pro kategorie a také Video, FAQPage, Review, Article a MerchantReturnPolicy. U zásad vracení připomíná, že od úpravy Googlu z března 2025 je povinné pole returnPolicyCountry. Postup nasazení má pět kroků: vložení, test v Testu rozšířených výsledků, ověření v nástroji pro kontrolu URL, požádání o novou indexaci a údržba s ohledem na GDPR a čistě veřejná data. Pro AI crawlery zmiňuje také soubor llms.txt a robots.txt. Rámec doplňují čísla od Shopify, podle kterých v roce 2025 meziročně vzrostla návštěvnost z AI osmkrát a objednávky z AI patnáctkrát.
  zdroje:
    - title: "Shopify: E-commerce schema markup a strukturovaná data"
      url: "https://www.shopify.com/cz/blog/schema-markup"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify blog v praktickém návodu vysvětluje, co je schema markup a proč na něm záleží u e-shopu. Jde o strojově čitelný popis obsahu stránky ve slovníku Schema.org, nejčastěji ve formátu JSON-LD. Díky němu vyhledávač pozná, že určitý údaj je cena, jiný dostupnost a další počet recenzí, a může je zobrazit přímo ve výsledcích jako rich snippet. Stejná data využívají i AI nákupní asistenti a generativní vyhledávání, protože se z nich dá spolehlivě vyčíst, co se prodává, za kolik a zda to je skladem.

Důležité je, co Shopify dělá samo a co ne. Základní JSON-LD pro produkty a články generuje Liquid filtr structured_data, takže název, cena, dostupnost a URL na produktové stránce typicky fungují bez zásahu. Všechno ostatní si musí obchod doplnit: popis a obrázky, GTIN, značku, SKU, recenze, náklady na dopravu, zásady vracení, schéma pro organizaci nebo kategorie. Článek prochází jednotlivé typy (Organization, LocalBusiness, Product s Offer, BreadcrumbList, ItemList, Video, FAQPage, Review, Article, MerchantReturnPolicy) a upozorňuje na několik detailů, které se často dělají špatně. Cena musí být uvnitř bloku Offer. Původní cena při slevě se značí jako StrikethroughPrice. BreadcrumbList potřebuje alespoň dvě položky s absolutními URL. U zásad vracení je od března 2025 povinná země, pro kterou politika platí.

Doporučený postup je pětikrokový: vložit markup (úpravou tématu, nebo aplikací, například Schema Plus for SEO and JSON-LD), otestovat ho v Testu rozšířených výsledků a nejdřív opravit chyby v povinných polích, ověřit vykreslení několika stránek v nástroji pro kontrolu URL v Search Console, požádat o novou indexaci (u větších změn znovu odeslat sitemap) a průběžně hlídat, aby v datech nebylo nic osobního. Do schématu patří jen veřejné informace z katalogu, ne jména zákazníků ani čísla objednávek. Autoři také opakují, že schema je podpůrný signál, ne zázračný ranking faktor, a doporučují nasazovat typy po jednom. Pro český trh zdůrazňují, že schema i texty na webu mají odpovídat zákonné 14denní lhůtě pro odstoupení od smlouvy u nákupů na dálku.

Jde o edukativní blogový text, nikoli o oznámení nové funkce nebo změny API. Čísla o růstu AI návštěvnosti a objednávek pocházejí od samotného Shopify, takže je vhodné brát je jako orientační.

## Pro koho je to relevantní

Hlavně pro majitele e-shopů, SEO specialisty a vývojáře témat, kteří řeší viditelnost v Google výsledcích, Google Nákupech a v AI asistentech. Praktický dopad má zejména kontrola toho, co automatický JSON-LD z Shopify skutečně pokrývá. U většiny obchodů chybí GTIN, značka, recenze, doprava a MerchantReturnPolicy s povinnou zemí, a přitom právě tato pole rozhodují o tom, zda se zobrazí hvězdičky, cena nebo informace o vrácení. Hodí se projít produktové stránky v Testu rozšířených výsledků a porovnat výstup s reálnými daty v katalogu.

Z pohledu implementace platí jednoduchá souvislost: schema je jen tak dobré, jako data, ze kterých vzniká. Pokud se GTIN, značka, SKU, ceny a stav zásob plní nebo synchronizují z externího systému nepřesně, projeví se to i ve strukturovaných datech, a tedy ve výsledcích vyhledávání a v doporučeních AI. Změna API ani nové Shopify funkce se tu nekoná, ale text dobře doplňuje dřívější novinky o GEO, o souborech llms.txt a agents.md a o AI SEO, které popisují stejnou snahu udělat katalog čitelný pro stroje.
