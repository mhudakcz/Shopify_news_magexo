---
date: 2026-10-28
title: "Scheduled stock counts — plán cycle counts per item/location/time s review"
title_en: "Scheduled stock counts"
slug: scheduled-stock-counts-pos-admin
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Plánované inventury po lokacích se pravidelně promítnou do on-hand množství, takže se dotknou každé synchronizace skladu s ERP nebo WMS u obchodníků s více prodejnami. Samotné plánování je funkce Adminu a POS a Editions u ní neuvádí žádné API."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-retail", "stock-counts-shopify-admin", "pos-run-stock-counts"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidávají k inventurám plánování: obchodník v Adminu nastaví count podle položek, lokace a časového rámce, personál ho počítá v POS nebo v Adminu a před úpravou skladu se zkontrolují rozdíly. Pro prodejny s více lokacemi je to krok od jednorázové inventury k pravidelnému cycle countingu. Opakování (denně, týdně) ani dostupnost stránka Editions neuvádí, takže je před nabídkou potřeba ověřit na obchodě."
tagy: [pos, stock-counts, cycle-count, scheduling, inventory, retail-ops]
zdroj_kanal: editions
kontext:
  background: |
    Cycle counting je způsob, jak udržet přesný sklad bez zastavení provozu: místo jedné velké inventury ročně se průběžně počítají menší části sortimentu, třeba nejrychleji rotující nebo nejdražší zboží častěji a zbytek méně často. Funguje ale jen tehdy, když je počítání naplánované, rozdělené mezi lokace a někdo hlídá, že se skutečně stalo. Obchodníci s více prodejnami to dosud řešili tabulkami, kalendářem nebo aplikacemi třetích stran a výsledky pak ručně přepisovali jako úpravy množství.

    Shopify na tuto mezeru postupně nabíjí vlastní nástroj. V červenci 2026 ukázal v unstable Admin GraphQL API preview primitiv pro fyzický sklad včetně counts. Koncem září přišly stock counts v POS, kde personál počítá a Admin slouží k plánování a schválení, a 20. října kompletní workflow přímo v Shopify Adminu. Editions Fall '26 k tomu přidávají v tématu Retail položku Scheduled stock counts in POS (v pořadí stránky položka 10 z 20) a v tématu Fulfillment příbuznou položku Native stock counts.

    Podle stránky Editions lze count v Adminu nastavit podle položky, lokace a časového rámce, vidět kdo co napočítal a před úpravou skladu zkontrolovat změny. Fulfillment položka dodává, že plánovat lze po obchodech, počítat skenováním nebo ručním zadáním a že logy jsou k dispozici v Adminu i POS. Stránka neuvádí datum, tarif, region ani verzi POS a nespecifikuje, zda jde o opakované plány (denně, týdně), nebo o jednotlivé counts s datem. Opakování proto bereme jako náš výklad slova timeframe, ne jako potvrzenou vlastnost.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Stock counts v Shopify Admin"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/stock-counts-shopify-admin/"
    - title: "Archiv: POS cycle a full stock counts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-run-stock-counts/"
    - title: "Archiv: Editions Fall '26 Retail"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-retail/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 popisují dvě příbuzné položky, které spolu tvoří plánování inventur:

- **Retail, Scheduled stock counts in POS:** obchodník v Adminu nastaví count podle **položky, lokace a časového rámce**. Je vidět, kdo co napočítal, a změny se zkontrolují dřív, než se upraví sklad.
- **Fulfillment, Native stock counts:** counts lze plánovat **po obchodech**, počítat skenováním čárových kódů nebo ručním zadáním a mít podrobné logy v Adminu i v POS. Counts naplánované v Adminu se personálu zobrazí v POS.

Plán má tedy tři osy: **co** se počítá (položky), **kde** (lokace) a **kdy** (časový rámec). Čtvrtým prvkem je **review před aplikací**: počítání samo sklad nemění, o rozdílech se rozhoduje zvlášť. Stejný princip platil už u dřívějších novinek, kde odeslání countu z POS inventář neupravilo a teprve schválení v Adminu aplikovalo rozdíly. Základní workflow, tedy vytvoření, přidělení personálu, souběžné počítání a oprávnění, popisuje [samostatný článek o stock counts v Adminu](/Shopify_news_magexo/zmena/stock-counts-shopify-admin/) a [článek o počítání v POS](/Shopify_news_magexo/zmena/pos-run-stock-counts/). Tento článek se soustředí na to, co přidává plánování.

Pro obchodníka s více lokacemi je rozdíl zásadní. Jednorázový count je nástroj na inventuru. Plán po lokacích a časových oknech je nástroj na **cycle counting jako provozní rutinu**: každá prodejna má svůj rozpis, kdo co kdy počítá, a vedení vidí, co se napočítalo a co se rozcházelo.

Co stránka Editions **neříká** a co je potřeba před jakýmkoli slibem ověřit:

- **Opakování.** Editions mluví o časovém rámci. Zda lze nastavit pravidelný plán (denně, týdně), nebo jen jednotlivé counts s datem, z popisu nevyplývá. Opakování je náš výklad a očekávání.
- **Výběr položek.** Stránka píše o položkách. Zda lze rozsah zadat i podle kategorie, kolekce či jiného pravidla, není uvedeno.
- **Denní doba a upozornění.** Stránka nezmiňuje čas v rámci dne ani připomínky pro personál.
- **Dostupnost.** Chybí datum, status, tarif, region i verze POS. U dřívější novinky o stock counts v POS byly podmínkou POS Pro a verze 11.16 nebo novější. Zda stejné platí pro plánování, není potvrzeno.
- **API.** Editions u položky neuvádí žádnou novou metodu ani změnu schématu.

## Časová osa

- **2026-07-17** — v unstable Admin GraphQL API feature preview Physical inventory (bins, counts), jen pro vývojáře a mimo produkci.
- **2026-09-28** — stock counts v POS: počítání na prodejně, plánování a schválení v Admin.
- **2026-10-20** — kompletní workflow stock counts přímo v Shopify Adminu, včetně přidělování personálu a oprávnění.
- **2026-10-28** — Editions Fall '26 zmiňují plánované counts podle položky, lokace a časového rámce s kontrolou změn před úpravou skladu.
- **Dostupnost plánování** — stránka Editions neuvádí datum, rollout ani omezení. Do ověření v obchodě ji nepovažujeme za potvrzenou pro žádný konkrétní plán či region.

## Dopad pro nás

**Pro vývojáře:** Nejde o breaking change a nic se nemění v API, takže není co migrovat. Týká se nás nepřímo a hlavně u obchodníků s více lokacemi. Pokud se counts opakují podle rozpisu, schvalování rozdílů se stane **pravidelným zdrojem změn on-hand množství**, a ne výjimečnou událostí jako u roční inventury. Synchronizace skladu s ERP nebo WMS tedy musí počítat s tím, že se množství po lokacích mění ve vlnách, typicky po schválení countu, a že tyto změny nepřicházejí z objednávek ani transferů. Doporučujeme na vývojovém obchodě vyzkoušet:

- jak se schválený count projeví v inventory událostech a webhookách, které synchronizace odebírá (změny inventory levels), a zda lze změnu rozpoznat jako výsledek inventury, třeba přes auditní údaje o úpravách skladu v inventory adjustment groups,
- co se stane, když se mezi napočítáním a schválením změní sklad prodejem nebo příjmem (zda se rozdíl počítá vůči stavu v okamžiku počítání, nebo schválení; Editions o tom nic neuvádí),
- zda po schválení nepřepíše množství jiný zdroj pravdy, pokud externí systém drží vlastní inventurní proces.

Je dobré dopředu domluvit, který systém je pro inventuru hlavní, jinak hrozí dvojí evidence téže činnosti. Primitiva physical inventory v unstable API zůstávají mimo produkční použití, takže plánování zatím nelze řídit programově, ledaže Shopify API doplní později.

**Pro PM / PO:** Jde o novou příležitost pro obchodníky s kamennými prodejnami a více lokacemi, kteří dnes plánují cycle counts v tabulkách, kalendáři nebo v placených aplikacích. Nativní plán s review přináší auditní stopu a méně ručního přepisování. Můžeme ho nabídnout jako zjednodušení provozu a případnou úsporu nákladů za aplikaci třetí strany, ale ne dřív, než si ověříme dostupnost a hlavně to, zda plánování umí opakování a výběr podle kategorie, protože bez nich se o plnohodnotný cycle counting nejedná. Při konzultaci stojí za to hlídat tři věci: **rozpis** (které zboží se počítá jak často a na které lokaci), **oprávnění** (kdo smí počítat a kdo schvalovat) a **pravidla pro větší rozdíly** před schválením, třeba hranici, od které rozdíl řeší vedoucí prodejny. Kvalita výsledku stojí také na čistých čárových kódech u produktů, viz [více barcodes na variantu](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/). Nalehavost je střední: nic nevyprší ani se nerozbije, ale merchanti se o funkci dozvědí z Editions a začnou se ptát.

## Použití v Integrátoru

Přímý dopad na naši integraci nemáme, plánování countů je funkce Adminu a POS a Editions u ní neuvádí žádné API. Relevantní je u obchodníků, kterým synchronizujeme sklad po lokacích s ERP nebo WMS, protože pravidelně schvalované counts budou opakovaným zdrojem změn on-hand množství.

---

Související: [Editions Fall '26: Retail](/Shopify_news_magexo/zmena/editions-fall-2026-retail/) · [Editions Fall '26: přehled](/Shopify_news_magexo/zmena/editions-fall-2026/)
