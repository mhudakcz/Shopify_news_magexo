---
date: 2026-10-22
title: "Shopify workflow v Shopify Flow: Další velký krok v automatizaci je tu!"
slug: blog-shopify-workflow-automatizace-flow
zdroj: https://www.shopify.com/cz/blog/shopify-workflow
shrnuto_dne: 2026-10-23
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Flow je nativní merchant nástroj bez dopadu na API, ale plánovaná workflow s načítáním dat mohou nahradit část noční logiky, cron skriptů a ručních reportů, takže se hodí jako argument při doporučování automatizací."
dotcene_klienty: []
souvisejici: [blog-shopify-flow-novinky-automatizace, flow-new-actions-get-data, flow-auto-buy-shipping-labels]
tldr: "Shopify Flow nově umí spouštět workflow podle plánu (jednorázově nebo opakovaně), načítat data o zákaznících, objednávkách a produktech akcí Get data a sčítat je akcemi Count a Sum, přičemž článek ukazuje šest hotových šablon."
tagy: [shopify-flow, workflow, automatizace, cz, zacatecnici]
zdroj_kanal: blog
kontext:
  background: |
    Shopify Flow je nativní no-code automatizační nástroj v administraci Shopify. Workflow se v něm klasicky skládá ze tří bloků: triggeru (událost, která workflow spustí), volitelné podmínky a akce. Trigger je přitom vždy navázaný na událost v obchodě, například na vytvoření objednávky nebo změnu skladu. Merchant tak mohl automatizovat reakce na to, co se právě stalo, ale hůř se mu řešily úlohy typu každé ráno zkontroluj, co se zadrhlo.

    Český blogový článek z 22. října 2026 tuto mezeru zavírá dvěma novinkami. První je plánované spouštění workflow (Scheduled time trigger), které se spustí jednorázově nebo opakovaně v nastavený čas. Druhá je akce Get data, která workflow umožní vyhledat zákazníky, objednávky nebo produkty podle zadaného dotazu. Technicky zdatní uživatelé si mohou napsat vlastní dotaz, pro běžné případy jsou k dispozici připravené. K tomu přibývají agregační akce Count (počet) a Sum (součet), díky nimž lze například jedním e-mailem shrnout počet zpožděných objednávek a jejich celkovou hodnotu.

    Článek je koncipovaný jako úvod pro začátečníky a stojí na šesti hotových šablonách, které lze otevřít přímo z textu. Neobsahuje cenu, konkrétní limity ani seznam omezení. Zmiňuje jen dostupnost plánovaných workflow a načítání dat v plánech Shopify, Advanced a Plus. Dřívější novinka o Get data akcích (březen 2026) uváděla, že vracejí až 100 záznamů na dotaz, ale zda stejný strop platí i zde, článek neříká.
  zdroje:
    - title: "Shopify: Shopify workflow v Shopify Flow: Další velký krok v automatizaci je tu!"
      url: "https://www.shopify.com/cz/blog/shopify-workflow"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

**Plánované workflow.** Shopify Flow se dosud spouštěl hlavně událostmi v obchodě. Nově může workflow začínat triggerem Scheduled time, u kterého se nastaví datum, čas a to, zda se spustí jednou, nebo se bude opakovat. Hodí se všude, kde se nic nestalo, ale přesto je potřeba něco pravidelně zkontrolovat, například denní přehled nevyřízených objednávek.

**Get data jako první krok.** Plánovaný trigger není svázaný s žádným objektem v obchodě, takže workflow nemá s čím pracovat. Proto musí každé plánované workflow začínat akcí Get data, která načte potřebné záznamy o zákaznících, objednávkách nebo produktech. Tento krok zároveň funguje jako filtr, protože vrátí jen sadu, kterou definuje dotaz, třeba všechny nevyřízené objednávky. Na rozdíl od klasické schématické podoby trigger, podmínka, akce tedy plánované workflow začíná načtením dat a teprve potom pokračuje dál.

**For each a agregace.** Když Get data vrátí seznam, je potřeba smyčka For each, která následné akce provede pro každý záznam zvlášť, například označí tagem každou zpožděnou objednávku. Bez ní by Flow nevěděl, na kterou položku má akci aplikovat. Akce Count a Sum pak nad načteným seznamem spočítají počet nebo součet, což se hodí pro souhrnné e-maily a zprávy.

**Šest šablon z článku.**
1. Zpožděné objednávky: denně najde objednávky neodeslané do dvou dnů, označí je tagem a pošle e-mail s počtem a celkovou hodnotou.
2. Opakované objednávky: při vytvoření objednávky zkontroluje, zda stejný zákazník nezadal za posledních 24 hodin další objednávku na stejnou adresu, a pozdrží expedici, aby se zásilky daly poslat společně.
3. Vyprodané produkty: denní e-mail se seznamem produktů, které nejsou skladem.
4. Chargebacky: denně najde objednávky spojené s chargebackem a označí zákazníka.
5. Věrnostní tagy: při nové objednávce spočítá zákazníkovy objednávky za posledních šest měsíců a podle toho přiřadí věrnostní tag.
6. Nedokončené objednávky: denní zpráva do Slacku se seznamem otevřených nedokončených objednávek a jejich počtem.

Zajímavé je, že dvě ze šesti šablon (opakované objednávky a věrnostní tagy) plánování nepotřebují a reagují na událost, takže článek funguje i jako rozcestník mezi oběma styly. Článek zároveň neobsahuje deset use cases, jak by mohl naznačovat název nebo úvodní popis. Témata jako refund escalation nebo fraud flagging v něm nejsou rozpracovaná. Nejblíže má k fraud tématu šablona s chargebacky a k loyalty tématu šablona s věrnostními tagy.

## Pro koho je to relevantní

Hlavní cílovka jsou začínající merchanti a menší e-shop týmy, které zatím Flow nepoužívají nebo ho znají jen z jednoduchých reakcí na události. Připravené šablony jsou nejrychlejší cesta, jak si na vlastním obchodě vyzkoušet, jak spolu Get data a For each fungují, a doporučení článku je začít právě jimi. Praktický přínos je hlavně u rutin, které se dnes dělají ručně nebo pomocí externích skriptů: denní kontrola zpožděných zásilek, přehled vyprodaných produktů nebo upozornění na nedokončené objednávky.

Pro agentury a implementační týmy je to hlavně námět do rozhovoru s merchantem. Část pravidelných reportů a jednoduchých tagovacích úloh, které se jinak řeší vlastním kódem nebo plánovanými úlohami mimo Shopify, lze nově postavit nativně a bez údržby infrastruktury. Je ale dobré ověřit dvě věci. Dostupnost je podle článku vázaná na plány Shopify, Advanced a Plus, a pro velké obchody je potřeba prověřit, kolik záznamů akce Get data vrátí na jedno spuštění. Souvisí to i s dřívějšími novinkami kolem Flow, například s generováním test events ze skutečných dat a s novou akcí pro automatický nákup shipping labels.

Z hlediska priority jde o informativní novinku bez dopadu na veřejné API a bez nutnosti akce. Existující workflow se nemění a nové funkce jsou volitelné.
