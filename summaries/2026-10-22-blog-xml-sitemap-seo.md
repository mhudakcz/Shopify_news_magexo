---
date: 2026-10-22
title: "Jak vytvořit XML sitemapu pro lepší SEO webu"
slug: blog-xml-sitemap-seo
zdroj: https://www.shopify.com/cz/blog/xml-sitemap
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sitemapa na Shopify vzniká automaticky z aktivních produktů, kolekcí a stránek, takže stav a dostupnost produktů plněných z externích systémů přímo ovlivňuje, co se do ní dostane."
dotcene_klienty: []
souvisejici: [blog-ecommerce-schema-markup-strukturovana-data, blog-obrazkove-seo-8-tipu-2026, blog-seo-marketing-definice-typy-2026]
tldr: "Shopify vysvětluje, co je XML sitemapa, jaké má typy a limity a jak ji odeslat do Google Search Console; na Shopify se generuje automaticky na /sitemap.xml, takže je potřeba hlavně hlídat, co do ní patří."
tagy: [xml-sitemap, seo, google-search-console, indexace, technicke-seo]
zdroj_kanal: blog
kontext:
  background: |
    XML sitemapa je strukturovaný soubor, který vyjmenovává veřejně dostupné stránky webu a pomáhá vyhledávacím robotům pochopit jeho strukturu. Může být jediný soubor, nebo takzvaný sitemap index, který odkazuje na dílčí sitemapy rozdělené podle typu obsahu, tedy zvlášť produkty, kolekce, stránky a články blogu. U každé adresy lze uvést značku loc s URL, lastmod s datem poslední změny a changefreq s odhadovanou frekvencí změn. Image sitemapa navíc přidává adresy obrázků a další údaje. Článek jako příklad ukazuje nadřazenou sitemapu značky Lola, která odkazuje na čtyři dílčí soubory pro produkty, stránky, kolekce a blogy. Shopify ji generuje a aktualizuje automaticky v reálném čase.
    Přínosy podle článku jsou rychlejší objevení a indexace nového nebo upraveného obsahu, snazší nalezení stránek s málo interními odkazy, lepší využití crawl budgetu na důležitý obsah a nižší riziko, že se do indexu dostanou zastaralé, nerelevantní nebo neveřejné stránky. Sitemapa také pomáhá odhalit duplicity, zapomenuté testovací stránky a neaktuální sekce. Kromě standardní sitemapy článek popisuje image, video, Google News, mobilní a hreflang variantu. Mobilní je dnes vzácná, protože se místo oddělených mobilních adres používá responzivní design. Hreflang sitemapa pomáhá označit jazykové a regionální verze stránky. Pro vytvoření jsou tři cesty: generování přes CMS, plugin nebo aplikace, případně ruční tvorba, která vyžaduje průběžnou údržbu. U pluginů je důležité hlídat, aby nevznikla druhá sitemapa vedle té, kterou už vytváří CMS.
    Odeslání probíhá tak, že se web ověří v Google Search Console a v sekci Sitemaps se zadá adresa sitemapy. Doporučuje se ji uvést i v souboru robots.txt, což moderní e-shopové platformy včetně Shopify obvykle řeší samy. Jedna sitemapa smí mít nejvýše 50 000 URL a 50 MB v nekomprimované podobě. Při překročení limitu se rozdělí na více souborů a ty se vypíšou v sitemap indexu. Na Shopify není potřeba nic instalovat. Sitemapa se vytvoří na adrese domena/sitemap.xml hned po spuštění obchodu, dílčí sitemapy pro produkty, kolekce, stránky a blogy se udržují samy a pro mezinárodní verze vznikají samostatné soubory. Do sitemapy se dostanou aktivní stránky, produkty, kolekce a články přiřazené do prodejního kanálu Online store. Pokud má být něco vynecháno, mění se nastavení dostupnosti nebo prodejního kanálu v administraci. Jde o edukativní blogový text bez oznámení nové funkce a bez dopadu na API.
  zdroje:
    - title: "Shopify: Jak vytvořit XML sitemapu pro lepší SEO webu"
      url: "https://www.shopify.com/cz/blog/xml-sitemap"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify blog v praktickém návodu vysvětluje, co je XML sitemapa a proč ji u e-shopu řešit. Jde o soubor, který vyhledávačům přehledně nabízí seznam veřejných stránek webu, případně rozdělený do více dílčích sitemap podle typu obsahu. Díky tomu roboti Googlu, Seznamu a dalších vyhledávačů rychleji najdou nový nebo změněný obsah, dostanou se i ke stránkám, na které vede málo interních odkazů, a nemusí plýtvat crawl budgetem na nepodstatné adresy. Autor z týmu Shopify popisuje sitemapu jako přesný plánek webu pro vyhledávače.

Článek prochází šest typů sitemap: standardní (loc, lastmod, changefreq), obrázkovou pro lepší viditelnost v Google Images, video sitemapu, Google News sitemapu pro zpravodajské weby, mobilní variantu pro oddělené mobilní adresy a hreflang sitemapu pro jazykové a regionální verze. Vytvořit ji lze třemi způsoby: automaticky přes CMS, přes plugin či aplikaci, nebo ručně. Ruční správa se podle textu vyplatí jen tam, kde ji někdo bude pravidelně udržovat. U pluginů autor upozorňuje na riziko duplicitní sitemapy vedle té, kterou už generuje platforma, a doporučuje mít jednu autoritativní verzi.

Technická část je stručná. Web je třeba ověřit v Google Search Console, v sekci Sitemaps zadat adresu sitemapy a odkaz na ni mít také v robots.txt. Platí limit 50 000 URL a 50 MB nekomprimovaně na soubor, větší weby se dělí pomocí sitemap indexu. Pro Shopify článek potvrzuje, že sitemapa vzniká automaticky na adrese domena/sitemap.xml, včetně dílčích sitemap pro produkty, kolekce, stránky a blogy a samostatných souborů pro mezinárodní verze. Vynechání stránky se řeší změnou dostupnosti nebo prodejního kanálu v administraci. Závěrečné FAQ rozlišuje XML sitemapu určenou pro roboty od HTML sitemapy, která pomáhá návštěvníkům s navigací a zkracuje cestu k obsahu.

Dvě poznámky mimo samotný článek. Oficiální dokumentace Googlu uvádí, že hodnoty changefreq a priority ignoruje a lastmod bere v úvahu jen tehdy, když je dlouhodobě přesné. Značku changefreq proto nemá smysl ladit. A sitemapu, kterou Shopify generuje, nelze upravovat ručně jako soubor. Co se v ní objeví, se řídí stavem produktů, kolekcí, stránek a článků v administraci, a případné vyloučení z indexace je nutné řešit zvlášť v nastavení daného objektu nebo v tématu.

## Pro koho je to relevantní

Hlavně pro SEO specialisty, majitele e-shopů a vývojáře témat, kteří spravují Shopify obchody a chtějí mít jistotu, že se všechny důležité adresy dostanou do indexu. Praktický dopad má kontrola tří věcí. Zaprvé, zda je sitemapa odeslaná v Google Search Console a zda tam nehlásí chyby nebo neočekávaně nízký počet nalezených stránek. Zadruhé, zda se do ní nedostávají koncepty, testovací produkty nebo archivované položky, které mají zůstat mimo index. Zatřetí, zda aplikace pro SEO nepřidává druhou sitemapu, která by se s tou nativní překrývala.

Souvislost s katalogovými daty je přímá. Co se do sitemapy dostane, určuje stav produktu a jeho přiřazení k prodejnímu kanálu, takže pokud se produkty vytvářejí, aktivují nebo archivují hromadně z externího systému, odráží se to rovnou v tom, co vyhledávače uvidí. U větších katalogů s tisíci variant a kolekcí se vyplatí vědět, že Shopify rozděluje sitemapu do dílčích souborů samo a limity 50 000 URL na soubor řeší bez zásahu. Text dobře doplňuje dřívější novinky o schema markupu, obrázkovém SEO a obecných typech SEO, protože sitemapa je technický základ, na který ostatní kroky navazují. Nejde o změnu API ani o novou funkci, takže žádná akce není nutná.
