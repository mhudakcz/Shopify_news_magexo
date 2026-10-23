---
date: 2026-10-22
title: "Rozdělení objednávky: co to je a tipy pro platformu Shopify"
slug: blog-rozdeleni-objednavky-shopify
zdroj: https://www.shopify.com/cz/blog/rozdeleni-objednavky
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Rozdělená objednávka se v Shopify projeví jako více zásilek z různých lokací, což ovlivňuje, kolik fulfillmentů a tracking čísel k jedné objednávce přijde do napojeného skladu, ERP nebo 3PL."
dotcene_klienty: []
souvisejici: [blog-shopify-order-routing-chytre-smerovani, fulfill-orders-in-batches, blog-skladovy-system-pruvodce-vyber]
tldr: "Český blogový článek Shopify vysvětluje, proč se objednávky dělí na více zásilek (sklady v různých lokacích, pre-ordery, personalizované zboží, přání zákazníka), jaké to má nevýhody a jak se rozdělování vyhnout pomocí předpovědi poptávky a pravidla order routingu Minimalizovat rozdělení objednávky."
tagy: [split-order, fulfillment, multi-location, shipping, operations]
zdroj_kanal: blog
kontext:
  background: |
    Rozdělená objednávka (split order) vzniká ve chvíli, kdy se zboží z jednoho nákupu neodešle v jednom balíku, ale v několika zásilkách. Obchod s jedním skladem a plně naskladněným sortimentem to řešit nemusí. Jakmile ale přibudou další sklady, kamenné prodejny, externí logistik (3PL), produkty na předobjednávku nebo zboží vyráběné na zakázku, začne se běžně stávat, že v okamžiku objednávky nejsou všechny položky na jednom místě nebo ve stejném stavu. Obchodník pak volí mezi dvěma možnostmi: počkat, až bude kompletní, nebo poslat dostupné zboží hned a zbytek dodat později. Rozdělení je v praxi obvykle kompromis ve prospěch rychlosti doručení.

    Článek jako důvody rozdělení uvádí pět situací. Zásoby rozložené ve více lokacích. Zboží na zakázku nebo předobjednávku, kdy se dostupné položky odešlou první a zbytek následuje, aniž by zákazník zadával novou objednávku. Objemné zboží nebo velké množství, které se nevejde do jedné krabice. Přání zákazníka poslat položky na různé adresy nebo v různé dny, třeba vánoční dárky příbuzným. A personalizované produkty, například s gravírováním nebo monogramem, které potřebují další zpracování nebo pocházejí z jiné lokace. K nativním funkcím Shopify text uvádí, že Shopify Checkout zvládá dělené zásilky automaticky. Pokud jsou položky v různých lokacích, checkout objednávku rozdělí a dopravu spočítá podle nastavení skupin lokací (location groups). Patří-li lokace do různých skupin, zákazník v checkoutu uvidí volbu dalších možností přepravy a může si zvolit dopravu pro každou položku zvlášť, místo jedné společné sazby. V odpovědích na časté otázky článek doplňuje, že Shopify rozděluje objednávky automaticky u pre-orderů, předplatného i zboží odesílaného z různých míst a že krok dopravy v checkoutu ukazuje celkový počet zásilek.

    Druhá půlka textu se věnuje nevýhodám a prevenci. Nevýhody jsou tři: vyšší náklady (balení, doprava, práce, režie), větší množství odpadu a emisí z dopravy a složitější vracení zboží, protože zákazník může začít vracet část objednávky dřív, než dorazí zbytek. Jako tipy, jak se rozdělení vyhnout, článek doporučuje předpověď poptávky, tedy zjistit, které produkty se kupují společně, a držet je ve stejné lokaci (zmiňuje sledování zásob v reálném čase, RFID štítky a nástroje jako Sortly, Zoho Inventory, NetSuite nebo Cin7), dostatečné zásobení skladů a order routing s pravidlem Minimalizovat rozdělení objednávky, které upřednostní lokace s kompletním zbožím. Důležité je, co v textu chybí. Zadání zmiňovalo Shopify Flow a Shopify Fulfillment Network, ale článek je jako řešení nerozebírá: Flow se objevuje jen jako odkaz v menu a Fulfillment Network ani samostatné fulfillment ordery nejsou zmíněny. Text také nepopisuje nastavení krok za krokem, omezení ani dostupnost podle tarifu a u nápovědy k dělenému doručení odkazuje na stránku, která je podle článku zatím jen v angličtině a slovenštině. Jde tedy o vysvětlující, spíše úvodní obsah, ne o oznámení nové funkce nebo změnu API.
  zdroje:
    - title: "Shopify: Rozdělení objednávky: co to je a tipy pro platformu Shopify"
      url: "https://www.shopify.com/cz/blog/rozdeleni-objednavky"
    - title: "Shopify Order Routing — chytré směřování objednávek"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/blog-shopify-order-routing-chytre-smerovani/"
    - title: "Batch fulfillment — vyřídit až 250 objednávek najednou (pick, print, pack)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/fulfill-orders-in-batches/"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Český blogový článek Shopify z kategorie Prodej online (asi šest minut čtení), který vysvětluje, co je rozdělená objednávka a kdy je rozumné ji použít. Rozdělená objednávka znamená, že jeden nákup doputuje ve více zásilkách. Typický příklad z textu: obchod s vzácnými deskami dostane objednávku, jejíž část je na předobjednávku. Dvě položky odejdou ze dvou míst ve stejný den a zbylá se odešle až po vydání. Zákazník dostane dostupné zboží dřív a obchod nemusí čekat na kompletní objednávku.

Článek rozebírá pět důvodů rozdělení: zásoby ve více lokacích, zboží na zakázku nebo pre-order, objemné položky, přání zákazníka (jiné adresy nebo termíny) a personalizované zboží. Z nativních funkcí Shopify zmiňuje Shopify Checkout, který dělené zásilky řeší automaticky a počítá dopravu podle nastavení location groups. Pokud lokace patří do různých skupin, zákazník si může vybrat dopravu pro každou položku zvlášť. Dále zmiňuje správu zásob a nákup štítků v administraci.

Poctivě pojmenovává i nevýhody: vyšší náklady na balení a dopravu, víc odpadu a emisí a složitější vracení, protože zákazník může část vrátit dřív, než dorazí zbytek. Jako prevenci doporučuje předpověď poptávky a držení často společně kupovaných produktů v jedné lokaci, dobré zásobení a order routing s pravidlem Minimalizovat rozdělení objednávky. To dává přednost lokacím, které mají všechny položky skladem, takže objednávka odejde v co nejmenším počtu balíků.

Je potřeba vědět, co v článku není. Shopify Flow a Shopify Fulfillment Network, které zadání zmiňovalo jako možná řešení, text nerozebírá. Flow se objevuje jen jako odkaz v menu a nejsou tam ani žádné konkrétní postupy nastavení, limity nebo informace o tarifech. Také nejde o novou funkci ani o změnu API, je to vysvětlující a částečně marketingový obsah.

## Pro koho je to relevantní

Hlavně pro merchanty s více sklady, kombinací skladu a prodejen, externím logistikem nebo s pre-ordery a personalizovaným zbožím, protože právě tam se rozdělování objednávek děje pravidelně. Pro ně je užitečné vědět, že rozdělení nemusí být chyba v procesu, ale přímý důsledek rozložení zásob, a že jeho četnost lze snížit pravidly order routingu a lepším plánováním zásob.

Pro nás je to orientační podklad při konzultacích o fulfillmentu a architektuře skladu, spolu s textem o order routingu a průvodcem výběrem skladového systému. Z pohledu vývojářů je užitečné počítat s tím, že rozdělená objednávka typicky znamená více fulfillmentů a více tracking čísel k jedné objednávce, případně více fulfillment orders v různých lokacích. Článek to přímo nepopisuje, jde o naše doplnění z obecné znalosti Shopify. Pokud pro merchanta synchronizujeme objednávky se skladem, ERP nebo 3PL, stojí za to ověřit, že integrace zvládá částečné vyřízení objednávky a víc zásilek k jedné objednávce, a že se na ně správně váže stav objednávky, e-maily zákazníkovi i vratky. Z článku neplyne žádná akce ani termín. Priorita je nízká, jde o čtení pro orientaci.
