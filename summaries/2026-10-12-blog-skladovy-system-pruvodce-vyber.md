---
date: 2026-10-12
title: "Skladový systém — průvodce výběrem softwaru"
slug: blog-skladovy-system-pruvodce-vyber
zdroj: https://www.shopify.com/cz/blog/skladovy-system
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Referenční přehled kritérií pro výběr skladového systému a jeho napojení na Shopify inventory, POS a ERP, užitečný při konzultacích o tom, kdy stačí nativní sklad a kdy je potřeba externí WMS nebo ERP."
dotcene_klienty: []
souvisejici: [blog-logisticky-system, blog-shopify-shipping-vs-shipstation, blog-unified-commerce-vs-omnichannel]
tldr: "Shopify v blogovém průvodci vysvětluje, co umí skladový systém, rozlišuje čtyři typy od tabulek po ERP a porovnává čtyři řešení (nativní Shopify inventory, Katana, Cin7 Core, NetSuite) podle ceny a vhodnosti, přičemž o ShipStation ani ShipHero se nezmiňuje."
tagy: [wms, warehouse-management, inventory, logistics, software]
zdroj_kanal: blog
kontext:
  background: |
    Článek vychází z běžného problému rostoucích e-shopů, které evidují zásoby v tabulkách nebo v několika nepropojených nástrojích. Dokud prodávají přes jeden kanál z jednoho místa, to funguje. Jakmile přibudou další prodejní kanály, pobočky nebo tržiště, přestávají sedět stavy skladu, objednávky se vyřizují podle nepřesných dat a tým tráví čas ručním přepisováním. Shopify proto skladový systém (inventory management system, IMS) popisuje jako software, který sleduje produkty, stavy zásob, objednávky a dodavatele od příjmu zboží přes prodej a vrácení až po expedici. Rozlišuje tři způsoby vedení evidence: manuální, periodickou (stavy se přepočítávají v pevných intervalech) a průběžnou (stavy se mění automaticky při každém příjmu, prodeji a vrácení).

    Z hlediska typů článek uvádí čtyři kategorie. Systémy na bázi tabulek jsou levné, ale náchylné k lidským chybám. Základní systémy pro sledování zásob řeší počítání kusů, ale obvykle nemají předpovídání poptávky ani generování nákupních objednávek. Automatizované cloudové systémy aktualizují stavy v reálném čase a integrují se s prodejními a expedičními nástroji. Systémy integrované s ERP jsou určené pro omnichannel prodej s více sklady, kanály nebo prodejnami. Jako kritéria výběru zmiňuje monitoring zásob a upozornění na nízké stavy, sladění prodeje napříč kanály včetně rezervace zásob pro B2B odběratele, synchronizaci více skladů, reporting, předpovídání poptávky, automatické nákupní objednávky, sjednocené oceňování zásob (FIFO nebo vážený průměr), sledování šarží a expirací, integrace s POS, ERP, účetnictvím a 3PL a celkové náklady vlastnictví (TCO).

    Ve srovnání čtyř řešení vystupuje na prvním místě nativní Shopify inventory (součást všech tarifů, doplněné Shopify Flow, Sidekick, vlastními reporty, order routingem, Inventory API a POS rozšířeními). Dále je to Katana pro výrobce (bezplatný tarif do 30 SKU a 3 poboček, placené od 299 USD měsíčně), Cin7 Core pro rostoucí obchodníky se složitějším řízením (od 349 USD měsíčně plus poplatky za uživatele, integrace a POS) a NetSuite Inventory Management pro firmy, které už NetSuite ERP používají (individuální cena, napojení přes NetSuite ERP Connector). Článek zdůrazňuje, že jde o obsah od prodejce. Tvrzení typu nižší TCO až o 36 procent než u konkurence nebo číselné výsledky u případových studií (například Cozykids, The Inspiration Company, Starlight Knitting Society, Tomlinson's) nejsou v textu nezávisle doložené. Důležité je i to, co v článku chybí: výslovně se nezmiňuje ShipStation ani ShipHero, nerozlišuje samostatně SMB a enterprise přístup a nepopisuje klasický standalone WMS pro velké sklady s řízením pozic v regálech a pohybu palet. Jde tedy spíše o průvodce řízením zásob na úrovni obchodníka než o hloubkový výběr WMS pro logistické centrum.
  zdroje:
    - title: "Shopify: Skladový systém — průvodce výběrem softwaru"
      url: "https://www.shopify.com/cz/blog/skladovy-system"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Blogový průvodce Shopify (odhadem 15 minut čtení), který vysvětluje, co skladový systém dělá, jak se liší jednotlivé typy a na co se zaměřit při výběru. Začíná definicí systému pro řízení zásob a rozdílem mezi periodickou a průběžnou evidencí. Pak představuje čtyři typy: tabulky, základní sledování zásob, automatizované cloudové systémy a systémy integrované s ERP. Následuje seznam funkcí, které by dobrý systém měl mít: upozornění na nízké stavy, synchronizace více skladů a kanálů, rezervace zásob pro B2B odběratele (příklad s 1 500 kusy na skladě, z nichž 1 250 je přislíbeno B2B), reporting, předpovídání poptávky, automatické nákupní objednávky, oceňování zásob a sledování šarží.

Jádrem článku je srovnání čtyř řešení. Nativní Shopify inventory je součástí všech tarifů a nevyžaduje integraci. Katana míří na výrobce a nabízí bezplatný tarif (30 SKU, 3 pobočky) a placené plány od 299 USD měsíčně. Cin7 Core začíná na 349 USD měsíčně a cílí na obchodníky se složitějším řízením. NetSuite Inventory Management je určený pro stávající uživatele NetSuite ERP a cena je individuální. Pro Shopify jsou v článku uvedené nástroje Flow, Sidekick, vlastní reporty, pravidla pro routing objednávek, Inventory API a POS rozšíření. Postup výběru má pět kroků: poznat varovné signály (nepřesné objednávky, ruční procesy, problémy napříč sklady), určit potřeby, spočítat TCO, ověřit integrace a zohlednit náročnost zaškolení týmu.

Je potřeba číst s vědomím, že jde o marketingový obsah. Čísla o úsporách, o nižším TCO a o výsledcích značek pocházejí od vendora. Článek také neřeší témata, která zadání naznačovalo: ShipStation a ShipHero v textu nejsou, rozdíl mezi SMB a enterprise není vyložen samostatně a klasický standalone WMS (pozice v regálech, vychystávací trasy, palety) zůstává mimo záběr. K otázce dopravy a expedičního softwaru se hodí starší srovnání Shopify Shipping a ShipStation.

## Pro koho je to relevantní

Pro obchodníky, kteří přerostli tabulky nebo jednoduché sledování zásob a řeší, zda jim stačí nativní sklad ve Shopify (více lokací, převody mezi sklady, POS, Flow, order routing), nebo potřebují externí systém. Rozhodovací hranice podle článku vede přes složitost: jeden až několik kanálů a poboček zvládne nativní Shopify, výrobu a plánování materiálu pokrývá Katana, složitější řízení více skladů a B2B Cin7 Core a ERP prostředí typu NetSuite dává smysl tam, kde už ERP existuje.

Pro nás je to referenční podklad při konzultacích o architektuře skladu: kdy stačí Inventory API a nativní lokace, kdy je potřeba externí WMS nebo ERP jako zdroj pravdy a jak důležité je ověřit integrace s POS, účetnictvím a 3PL ještě před výběrem. Pro vývojáře z toho neplyne žádná akce ani deadline, nejde o změnu API ani funkcí. Související materiály jsou starší článek o logistických systémech, srovnání Shopify Shipping a ShipStation a text o unified commerce, který popisuje stejný koncept sdíleného skladu napříč kanály z jiného úhlu. Priorita je nízká, jde o orientační čtení pro plánování a obchodní rozhovory.
