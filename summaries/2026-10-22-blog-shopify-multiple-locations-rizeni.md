---
date: 2026-10-22
title: "Shopify multiple locations: Jak řídit různé prodejny z jedné administrace"
slug: blog-shopify-multiple-locations-rizeni
zdroj: https://www.shopify.com/cz/blog/shopify-multiple-locations
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud obchodník používá odlišné ceny a sortiment podle prodejny nebo regionu, musí s tím počítat každá synchronizace cen a katalogu s ERP, protože jedna cena produktu už nemusí platit všude."
dotcene_klienty: []
souvisejici: [blog-shopify-order-routing-chytre-smerovani, stock-counts-shopify-admin, channel-specific-prices-markets]
tldr: "Český blog Shopify ukazuje, jak pomocí regionálních a retail-store markets nastavit v jedné administraci odlišný katalog, ceny a slevy pro každou prodejnu; článek ale nepopisuje rozdělení zásob ani order routing."
tagy: [multi-location, inventory, fulfillment, lokace, operations]
zdroj_kanal: blog
kontext:
  background: |
    Obchodník, který provozuje víc kamenných prodejen, brzy zjistí, že ne všechny mají hrát podle stejných pravidel. Vlajková prodejna prodává aktuální sezónu za plnou cenu, outlet dolaďuje zbytky z minulých kolekcí, víkendový pop-up má vlastní nabídku a pobočka v zahraničí účtuje v jiné měně. Bez nativní podpory to končí tabulkami, duplicitními e-shopy nebo ručním přepisováním cen na pokladně. Shopify v článku ukazuje, že tohle jde řešit z jedné administrace pomocí Shopify Markets a architektury s více lokacemi, tedy s jedním katalogem produktů, jednou databází zákazníků a společným přehledem tržeb.

    Mechanismus stojí na dvou úrovních marketů. Regionální markets pokrývají širší území, například celou zemi, a prodejny v ní z nich dědí ceny, katalog i akce. Retail-store markets pak sdružují konkrétní skupiny lokací, třeba pražské outlety, brněnskou vlajkovou prodejnu nebo pop-up stánky. Pokud prodejna spadá pod obě úrovně, vyhrává ta konkrétnější, takže outlet může mít vlastní ceník, i když leží ve stejné zemi jako prodejna v centru. Pokladna uplatní nejspecifičtější pravidlo automaticky. Článek uvádí čtyři typické scénáře: odlišný katalog pro vlajkové prodejny a outlety, jiné ceny na prodejně než online (například kvůli doprovodným službám), regionální akce omezené na jedno město nebo typ prodejny a mezinárodní retail z jednoho obchodu, kde má každá země vlastní právnickou entitu, účet Shopify Payments a vyúčtování v místní měně. Rozsah funkcí se řídí tarifem. POS Lite nabízí jen regionální markets, POS Pro přidává retail-store markets a slevy pro vybrané skupiny prodejen a Shopify Plus navíc prodej přes více samostatných právnických entit a programovatelná pravidla slev.

    Je dobré vědět, co článek neřeší. Zadání zmiňovalo rozdělení zásob mezi lokace, order routing, priority fulfillmentu a párování s POS. Žádné z těchto témat v textu nenajdeme. Jde výhradně o ceny, katalogy a promo akce podle prodejny, nikoli o skladové stavy nebo o to, ze které lokace objednávka odejde. Pro ty se hodí navazující materiály o order routingu a o stock counts. Nejde o oznámení nové funkce ani o změnu API, ale o vysvětlující a prodejně laděný text, který Shopify aktualizoval 22. října 2026. Praktické omezení je v tom, že chybí postup nastavení krok za krokem. Migrace z několika samostatných expansion stores navíc podle FAQ není self-serve a vyžaduje spolupráci se Shopify Merchant Success včetně 301 přesměrování kvůli SEO. U mezinárodního prodeje článek doporučuje poradit se s místním daňovým nebo právním poradcem, protože požadavky na právnické entity se mohou lišit, například u krátkodobých pop-upů.
  zdroje:
    - title: "Shopify: Shopify multiple locations: Jak řídit různé prodejny z jedné administrace"
      url: "https://www.shopify.com/cz/blog/shopify-multiple-locations"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Český blogový článek Shopify o tom, jak z jedné administrace řídit víc prodejen s odlišným sortimentem, cenami a akcemi. Základem je Shopify Markets ve dvou úrovních. Regionální markets určují výchozí pravidla pro celou zemi nebo oblast a retail-store markets je pro vybrané skupiny prodejen přepisují. Platí princip, že vyhrává nejkonkrétnější pravidlo, takže pražský outlet může mít vlastní ceník a vlastní slevy, přestože sdílí zemi s prodejnou v centru města. Shopify pravidla vynucuje automaticky na pokladně a obchodník je nemusí hlídat ručně.

Článek ukazuje čtyři použití. Vlajkové prodejny a outlety čerpají z jednoho katalogu, ale každá skupina vidí jiný výběr a jiné ceny. Cena v prodejně se může lišit od ceny online, například když nákup zahrnuje poradenství, a POS i e-shop zobrazují každý svou hodnotu bez externích aplikací. Regionální akce zůstanou regionální, takže zahajovací nabídka pop-upu se nerozšíří na ostatní prodejny. A značka s pobočkami v několika zemích může provozovat jeden online obchod, přičemž každá země má vlastní právnickou entitu, Shopify Payments účet a vyúčtování v místní měně. Podle tarifů stačí na regionální markets POS Lite, retail-store markets a slevy pro skupiny prodejen vyžadují POS Pro a prodej přes více právnických entit je záležitostí Shopify Plus.

Pozor na rozsah. Z textu nevyplývá nic o rozdělení zásob mezi lokace, o order routingu, o prioritách fulfillmentu ani o párování POS zařízení, přestože tagy článku na inventory a fulfillment odkazují. Tyto oblasti pokrývají jiné novinky v našem přehledu, například vysvětlení order routingu a nativní stock counts. Článek je spíš poradenský než technický, nepopisuje konkrétní kroky v administraci a uváděná čísla (12 vlajkových prodejen a 4 outlety) jsou jen ilustrační příklady. Souvisí také s dřívější novinkou o channel-specific cenách přes Markets a s podporou Tap to Pay pro multi-entity byznysy.

## Pro koho je to relevantní

Hlavně pro obchodníky s více kamennými prodejnami, kteří dnes řeší ceny a sortiment tabulkami, duplicitními obchody nebo ručními změnami na pokladně, a pro ty, kdo se chystají expandovat do dalších zemí. Nejvíc jim pomůže rozhodnutí o tarifu, protože hranice mezi POS Lite, POS Pro a Plus určuje, jestli půjde nastavit ceny a slevy podle skupiny prodejen, nebo jen podle regionu.

Pro nás jde o orientační podklad při konzultacích o architektuře multi-location a omnichannel řešení. Pokud obchodník využije odlišné ceny a katalogy podle prodejny, je potřeba ověřit, jak s tím naše napojení cen, produktů a skladu na ERP počítá, protože jedna cena produktu už nemusí platit ve všech kanálech a lokacích. Pro vývojáře z článku neplyne žádná akce ani termín, nejde o změnu API. Dostupnost podle tarifu a konkrétní kroky nastavení je třeba před nabídkou ověřit v nápovědě Shopify nebo přímo v obchodě. Priorita je nízká, jde o čtení pro orientaci.
