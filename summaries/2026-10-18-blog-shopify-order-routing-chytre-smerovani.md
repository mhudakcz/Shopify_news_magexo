---
date: 2026-10-18
title: "Shopify Order Routing — chytré směřování objednávek"
slug: blog-shopify-order-routing-chytre-smerovani
zdroj: https://www.shopify.com/cz/blog/shopify-order-routing
shrnuto_dne: 2026-10-20
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "U multi-location merchantů order routing rozhoduje, ze které lokace objednávka odejde, což ovlivňuje data o fulfillmentu, doručovací lhůty i napojení na sklad nebo 3PL."
dotcene_klienty: []
souvisejici: [us-tax-calculation-fulfillment-location-routing, blog-skladovy-system-pruvodce-vyber, blog-unified-commerce-vs-omnichannel]
tldr: "Shopify v českém blogovém článku vysvětluje, jak order routing automaticky vybírá fulfillment lokaci pro každou objednávku podle čtyř přednastavených pravidel s nastavitelnou prioritou, takže odpadá ruční přiřazování u obchodů s více sklady a prodejnami."
tagy: [order-routing, fulfillment, multi-location, shopify-tools, logistics]
zdroj_kanal: blog
kontext:
  background: |
    Obchod, který vyřizuje objednávky z jednoho skladu, žádné rozhodování o lokaci neřeší. Jakmile ale přibudou další sklady, kamenné prodejny nebo externí logistik (3PL), začne se u každé objednávky objevovat otázka, odkud ji poslat. Ruční výběr lokace u každé objednávky nešel dobře škálovat. Zdržuje expedici, závisí na tom, kdo zrovna objednávku zpracovává, a snadno vede k tomu, že se zboží posílá z nevýhodného místa, třeba z druhého konce země nebo dokonce z jiné země. Shopify proto nabízí order routing, tedy automatické směrování objednávek podle pravidel, která si obchodník nastaví předem.
    
    Podle článku funguje order routing ve třech krocích. Přijde objednávka, Shopify zjistí, které lokace mají objednané položky skladem, a mezi nimi vybere tu, kterou určí nastavená logika. Obchodník si vybírá ze čtyř přednastavených pravidel a jejich pořadí určuje přetažením, takže pravidlo výš má vyšší prioritu. První pravidlo posílá zboží z nejbližší lokace podle vzdálenosti mezi adresou zákazníka a jednotlivými sklady, což snižuje cenu dopravy a zkracuje dobu doručení. Druhé drží objednávku v cílovém trhu, což se hodí tam, kde by nejbližší sklad ležel v jiné zemi a objednávka by kvůli tomu řešila clo, daně nebo druhého přepravce a hůře dohledatelné zásilky. Třetí pravidlo minimalizuje dělené zásilky, takže objednávka jde z lokace, která má většinu nebo všechny položky, a zákazník dostane méně balíků. Čtvrté pravidlo řadí lokace podle priority, například sklady před prodejnami nebo lokace s vysokými náklady na skladování dříve, aby se zásoby rychleji vyprodaly. Lokace se stejnou prioritou lze seskupit do jedné úrovně.
    
    Článek je praktický úvod, ne technická dokumentace ani oznámení nové funkce. Doporučení jsou jednoduchá: kdo prodává do zahraničí, má pravidlo cílového trhu dát vysoko, kdo má rozházené zásoby, použije minimalizaci dělených zásilek, a kdo má sklady i prodejny, dá sklady na první místo a prodejny nechá jako zálohu. Nepopisuje postup nastavení krok za krokem, omezení, ani to, které tarify funkci obsahují. Odkazuje na anglickou nápovědu Shopify. V zadání zmíněné pravidlo nejnižších nákladů a vlastní pravidla pro lokace v textu jako samostatné volby nejsou, článek uvádí právě čtyři výše popsaná pravidla. Funkce samotná přitom není nová. Order routing už Shopify Tax od srpna 2026 zohledňuje při výpočtu daně v USA, takže jde spíš o vysvětlující obsah k existující funkci.
  zdroje:
    - title: "Shopify: Shopify Order Routing — chytré směřování objednávek"
      url: "https://www.shopify.com/cz/blog/shopify-order-routing"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Český blogový článek Shopify, který vysvětluje, jak order routing automaticky posílá každou objednávku do nejvhodnější fulfillment lokace. Lokací může být sklad, prodejna nebo 3PL. Mechanismus je jednoduchý. Po přijetí objednávky Shopify ověří, které lokace mají zboží skladem, a pak aplikuje pravidla, která obchodník nastavil. Pravidla jsou čtyři a obchodník je seřadí podle důležitosti přetažením.

Jde o pravidla nejbližší lokace, setrvání v cílovém trhu, minimalizace dělených zásilek a pořadí lokací podle priority. Nejbližší lokace šetří na dopravě a zrychluje doručení. Cílový trh se hodí pro prodej do více zemí, protože brání zbytečnému přeshraničnímu odeslání s clem a druhým přepravcem. Minimalizace dělených zásilek snižuje počet balíků na objednávku, takže se platí dopravné jen jednou. Pořadí lokací umožňuje dát přednost skladům před prodejnami nebo zvýhodnit lokaci, jejíž zásoby chce obchodník rychleji vyprodat, a lokace se stejnou prioritou lze seskupit. Článek jako přínosy uvádí škálovatelnost, kontrolu nad rozhodováním, nižší náklady na dopravu, rychlejší doručení a vyšší věrnost zákazníků.

Je dobré vědět, co v textu chybí. Není tam návod na nastavení, limity, informace o tarifech ani ceně, a nejsou tam ani samostatná pravidla pro nejnižší náklady nebo vlastní pravidla pro lokace, jak naznačovalo zadání. Pro tyto detaily článek odkazuje na anglickou nápovědu Shopify, kterou je potřeba ověřit před nasazením. Také nejde o novou funkci. Order routing už Shopify používá například při výpočtu US daně podle fulfillment lokace.

## Pro koho je to relevantní

Hlavně pro merchanty s více lokacemi, tedy s několika sklady, kombinací skladu a kamenných prodejen, externím logistikem nebo prodejem do více zemí. U nich pravidla nahrazují ruční přiřazování lokace u každé objednávky a výsledek se projeví v nákladech na dopravu, v rychlosti doručení i v počtu balíků.

Pro nás je to orientační podklad při konzultacích o architektuře skladu a fulfillmentu. Hodí se ve chvíli, kdy se řeší, jestli stačí nativní multi-location nastavení Shopify s order routingem, nebo je potřeba externí systém. Pokud pro merchanta synchronizujeme objednávky se skladem, ERP nebo 3PL, stojí za to ověřit, z jaké lokace objednávky skutečně odcházejí, protože se to po zapnutí nebo změně pravidel může změnit. Pro vývojáře z článku neplyne žádná akce ani termín, nejde o změnu API. Souvisí s ním starší poznámka o výpočtu US daně podle fulfillment lokace, průvodce výběrem skladového systému a text o unified commerce. Priorita je nízká, jde o čtení pro orientaci.
