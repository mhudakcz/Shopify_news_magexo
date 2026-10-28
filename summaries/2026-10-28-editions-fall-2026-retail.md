---
date: 2026-10-28
title: "Editions Fall '26: Retail / POS — Shopify POS přerůstá z jednoduché pokladny v plnohodnotný retail operační systém"
slug: editions-fall-2026-retail
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Plánované inventury, barcode vyhledávání a lokalizace prodejen se dotýkají synchronizace zásob po lokacích s ERP nebo WMS. Zbytek tématu jsou čistě POS a Admin funkce bez vlivu na API."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-spring-2026-retail"]
editions_release: fall-2026
tldr: "Retail je v Editions Fall '26 největší investiční oblast, 20 položek. Plánované inventury, atribuce prodejů jednotlivým prodavačům, jednotná správa uživatelů POS i Adminu, activity log a hromadná správa personálu posouvají Shopify POS od lite pokladny k plnohodnotnému retail systému. K tomu přibývá rozpoznání zákazníků v prodejně, rychlejší checkout, lokální platební metody a vyhledání prodejen AI agenty."
tagy: [editions, retail, "fall-2026", pos, stock-counts, staff-management, receipts, omnichannel, local-payments]
zdroj_kanal: editions
kontext:
  background: |
    Retail téma Shopify Editions je dlouhodobě místem, kde Shopify ukazuje, jak vážně bere prodej v kamenných prodejnách. V jarní edici 2026 stála v jeho středu přestavba pokladny POS v11, multi-entity prodej a správa hotovosti. Podzimní edice Fall '26 s názvem Exponential na to navazuje, ale s jiným těžištěm. Místo jedné velké přestavby přináší 20 položek, které zasahují do každé vrstvy provozu prodejny: do checkoutu, zákaznických dat, skladu, zařízení, personálu, účtenek i plateb.

    Pro obchodníka, který prodává online i na prodejně, je zajímavé hlavně to, co Shopify řeší mimo samotné pokladní okno. Jde o inventury, přehled o tom, kdo která zařízení a účty používá, doložitelnost akcí personálu a přiřazení tržeb konkrétním prodavačům. Právě tyto vlastnosti dosud často chyběly a obchodníci je řešili aplikacemi třetích stran nebo ruční evidencí. Shopify je teď přidává přímo do Adminu a POS.

    Zdrojová stránka Editions u položek tématu Retail neuvádí čísla verzí POS, tarifní omezení (kromě poznámky, že organizační role ve správě personálu jsou vyhrazené pro Shopify Plus) ani konkrétní data nasazení a žádná z nich není označená jako připravovaná. Pro většinu funkcí proto před nabídkou obchodníkovi stojí za to ověřit dostupnost přímo v jeho obchodě a v nápovědě Shopify. Čtyři položky tématu už v archivu pokrýváme samostatnými články z merchant a dev changelogů, ostatní žijí jen v tomto přehledu a na stránce Editions.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Stock counts v Shopify Admin"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/stock-counts-shopify-admin/"
    - title: "Archiv: POS Smart Grid, návrhy dlaždic"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-smart-grid-tiles-suggestions/"
    - title: "Archiv: POS podporuje více barcodes per variant"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/"
    - title: "Archiv: UCP location search pro retail prodejny"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem téma je

Retail je v Editions Fall '26 největší investiční oblastí vůbec: **20 položek** v jednom tématu. Když se ale na seznam podíváte pozorněji, nejde o jednu velkou novinku jako loni na jaře s POS v11, nýbrž o sadu funkcí, které dohromady mění charakter produktu. Shopify POS bylo dlouho vnímané jako pokladna pro menší prodejny, která se hodí jako doplněk e-shopu. Tahle edice do něj přidává věci, bez kterých se větší retail provoz neobejde: **plánované inventury, atribuci tržeb jednotlivým prodavačům, jednotnou správu uživatelů v POS i Adminu, activity log s vyhledáním podle jména a hromadnou správu personálu přes CSV**.

Náš výklad: Shopify tím posouvá POS z kategorie lite pokladna do kategorie **plnohodnotný retail operační systém**. Kolem tohoto jádra stojí další tři proudy. První je **omnichannel identita zákazníka**: rozpoznání zákazníka už na pokladně, dokončení opuštěného online košíku v prodejně, sdílené uložené košíky napříč zařízeními a lokální doručení přímo z POS. Druhý je **provozní disciplína a evropská lokalizace**: správa zařízení, stav připojení, šablony účtenek s daňovými souhrny pro EU, VB a Kanadu a nové lokální platební metody. Třetí je **viditelnost prodejen pro AI agenty**, kteří umí najít fyzické prodejny obchodníka.

## Top 3 highlights

### 1. Plánované inventury a vyhledávání čárových kódů

Obchodník nastaví inventuru v Adminu podle položek, lokace a časového okna, personál ji počítá v POS nebo v Adminu a před úpravou skladu se zkontrolují rozdíly. Je vidět, kdo co napočítal. Podrobnosti o tomto workflow máme v [samostatném článku o stock counts](/Shopify_news_magexo/zmena/stock-counts-shopify-admin/). K tomu se přidává univerzální vyhledávání čárových kódů: naskenovat nebo vyhledat lze GTIN, kódy dodavatelů i vlastní identifikátory a POS najde správnou variantu, viz [více barcodes na jednu variantu](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/). Editions v jiné části (Fulfillment) navíc zmiňuje skenování čárových kódů z libovolné stránky Adminu, ale bez uvedení tarifu, regionu nebo data.

**Pro merchanty:** inventura přestává být tabulkou nebo samostatnou aplikací. Vzniká auditní stopa a schválení rozdílů před změnou skladu. Kvalita výsledku ale stojí na kvalitě čárových kódů u produktů.
**Pro vývojáře:** schválená inventura mění množství on-hand, takže ovlivní každou synchronizaci skladu s ERP nebo WMS. Je potřeba dopředu domluvit, který systém je pro inventuru hlavní, jinak hrozí dvojí evidence téže činnosti.

### 2. Správa personálu: atribuce prodejů, jednotní uživatelé, activity log, hromadné úpravy

Čtyři položky dohromady tvoří vrstvu governance, kterou větší prodejny potřebují. **Atribuce prodejů** přiřazuje každý prodej prodavači, který ho udělal, takže lze hodnotit výkon jednotlivců. **Jednotná správa** umožňuje spravovat uživatele POS i Adminu společně, včetně ovládání sezónního personálu a podpory více rolí; podle Editions jsou organizační role vyhrazené pro Shopify Plus. **POS activity log** vypisuje refundace, vrácení, ruční slevy a otevření zásuvky podle jména zaměstnance. A **hromadné aktualizace** umožňují účty personálu vytvářet, pozastavovat a znovu aktivovat nahráním CSV.

**Pro merchanty:** je to odpověď na typické provozní otázky, tedy kdo dal slevu, kdo otevřel zásuvku a komu patří tržba, a také na každoroční nábor a odchod sezónních zaměstnanců. Dosud se to často řešilo aplikacemi třetích stran nebo ručně.
**Pro vývojáře:** popisy v Editions nezmiňují nová API. Pokud ale obchodník počítá provize nebo reporty výkonu mimo Shopify, stojí za to ověřit, jestli a v jaké podobě se atribuce prodejů dostane do dat objednávek, než se na ni začne spoléhat.

### 3. Rozpoznání zákazníka v prodejně a propojení online a offline košíků

POS nově rozpozná víc zákazníků při platbě v prodejně se Shopify Payments, a to díky síti lidí, kteří už jinde v Shopify Payments platili. Podle Shopify se držitelé účtu Shop poznají, ať už mluví s online agentem, nebo platí u pokladny, a digitální účtenky z prodejny chodí do aplikace Shop. Shopify k tomu uvádí, že známý zákazník v prodejně má o více než 60 procent vyšší lifetime value než neznámý. Na tom staví další položky: personál může dokončit **opuštěný online košík** známého zákazníka přímo v prodejně, **uložené košíky se sdílejí mezi zařízeními** a přežijí střídání směn a **lokální doručení** lze nabídnout v checkoutu a spravovat, vyřizovat a sledovat v POS.

**Pro merchanty:** zákazník přestává být na pokladně anonymní a online a offline košík se stávají jedním příběhem. U retail provozů s e-shopem to otevírá jednodušší cross-sell, dokončení nákupu po telefonickém nebo chatovém dotazu a doručení z prodejny. Rozpoznání zákazníka je ale dané sítí Shopify Payments, takže ho nelze brát jako náhradu vlastní zákaznické databáze.
**Pro vývojáře:** Editions neuvádí, zda a jak se rozpoznání zákazníka projeví v API. Obchodníci s vlastním CRM nebo věrnostním programem by měli ověřit, jak se nově rozpoznaný zákazník páruje s existujícími záznamy, aby nevznikaly duplicity.

## Všechny položky

Číslování odpovídá pořadí na stránce Editions. Položky 8 a 9 jsou na stránce uvedené samostatně. Tam, kde máme v archivu samostatný článek, je položka odkazem.

### Pro merchanty

**Checkout a zákazníci**

| # | Položka | Co přináší |
|---|---|---|
| 1 | **In-store customer recognition** | POS rozpozná víc zákazníků při platbě v prodejně se Shopify Payments |
| 2 | **Faster checkout** | Méně klepnutí u hotovostních a dělených plateb, rychlejší účtenky, lepší zpracování karet |
| 3 | **POS search** | Vyhledávání produktů, objednávek, zákazníků, kolekcí i konceptů s filtry |
| 4 | **[Smart grid](/Shopify_news_magexo/zmena/pos-smart-grid-tiles-suggestions/)** | Dlaždice se přizpůsobí způsobu prodeje a Shopify navrhuje nové, jak obchod roste |
| 5 | **Local delivery v checkoutu** | Lokální doručení jako možnost dopravy, správa, vyřízení a sledování těchto objednávek v POS |
| 6 | **Abandoned cart pickup** | Personál dokončí v prodejně opuštěný online košík známého zákazníka |
| 7 | **Persistent mobile cart** | Košík zůstává viditelný na mobilních POS zařízeních, snazší procházení a přidávání položek |
| 11 | **Shared recent carts** | Uložený košík převezme kterýkoli prodavač a detaily přežijí střídání směn |

**Zařízení a provoz**

| # | Položka | Co přináší |
|---|---|---|
| 8 | **Device management** | V Adminu stav, lokace, typ a verze aplikace každého zařízení, možnost odebrat přístup ztracenému zařízení |
| 9 | **Connectivity status** | Domovská obrazovka POS ukazuje, co je offline (internet, služby Shopify nebo hardware), a navrhuje další kroky |
| 10 | **[Scheduled stock counts](/Shopify_news_magexo/zmena/stock-counts-shopify-admin/)** | Inventury podle položek, lokace a časového okna, kontrola změn před úpravou skladu |
| 13 | **[Universal barcode search](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/)** | Sken nebo vyhledání libovolného kódu (GTIN, kódy dodavatelů, vlastní identifikátory) najde správnou variantu |

**Personál a governance**

| # | Položka | Co přináší |
|---|---|---|
| 14 | **Sales attribution per associate** | Každý prodej je přiřazen prodavači, který ho udělal |
| 15 | **Unified user management** | Společná správa uživatelů POS a Adminu, sezónní personál, více rolí (organizační role jen pro Shopify Plus) |
| 16 | **POS activity log** | Refundace, vrácení, ruční slevy a otevření zásuvky podle jména zaměstnance |
| 17 | **Bulk staff management** | Vytvoření, pozastavení a opětovná aktivace účtů nahráním CSV |

**Účtenky a platby**

| # | Položka | Co přináší |
|---|---|---|
| 12 | **Receipt templates** | Šablony tištěných účtenek podle značky, automatické daňové souhrny pro EU, VB a Kanadu |
| 18 | **Local payment methods** | Alipay, WeChat Pay, Satispay, Scalapay a GrabPay v prodejně přes Shopify Payments |
| 19 | **Cartes Bancaires ve Francii** | Platby debetními Cartes Bancaires na zařízeních WisePad 3 a POS Terminal |

### Pro vývojáře

| # | Položka | Co přináší |
|---|---|---|
| 20 | **[Location discovery pro AI agenty](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/)** | Agenti najdou fyzické prodejny obchodníka a nasměrují kupující k nejbližší prodejně |

Do vývojářské perspektivy patří i položky tématu, které sice nemají vlastní API oznámení, ale mění data, na která se integrace napojují: schválené inventury (č. 10) mění sklad po lokacích, kódy z vyhledávání (č. 13) závisejí na čistotě dat o čárových kódech a atribuce prodejů (č. 14) a rozpoznání zákazníka (č. 1) se mohou projevit v datech objednávek a zákazníků. Popisy v Editions o tom nic nespecifikují, takže je lepší to ověřit na testovacím obchodě.

Související novinky z archivu, které nejsou na seznamu Editions, ale týkají se vývoje POS rozšíření: [reaktivní přístup k úložišti v POS UI extensions](/Shopify_news_magexo/zmena/pos-ui-extensions-reactive-storage/) a [virtualizovaný seznam s-pos-list](/Shopify_news_magexo/zmena/pos-ui-s-pos-list-virtualized/) v API verzi 2026-10.

## Co tu ještě nemáme

Většina položek tématu zatím žije jen v tomto přehledu a na stránce Editions. Samostatný článek v archivu nemají:

- **Zákazníci a košíky:** rozpoznání zákazníků v prodejně, opuštěný online košík v POS, sdílené uložené košíky, trvalý mobilní košík.
- **Checkout a vyhledávání:** rychlejší checkout (hotovost, dělené platby, účtenky), vyhledávání v POS s filtry.
- **Doručení:** lokální doručení v checkoutu a jeho správa v POS.
- **Zařízení:** správa POS zařízení a stav připojení.
- **Personál:** atribuce prodejů, jednotná správa uživatelů, activity log, hromadná správa přes CSV.
- **Účtenky a platby:** šablony účtenek s daňovými souhrny pro EU, VB a Kanadu, lokální platební metody (Alipay, WeChat Pay, Satispay, Scalapay, GrabPay) a Cartes Bancaires ve Francii.

Nejzajímavější kandidáti na hloubkové zpracování, jakmile Shopify zveřejní podrobnější dokumentaci, jsou správa personálu s atribucí prodejů a šablony účtenek s daňovými souhrny. U plateb Editions neuvádí seznam zemí pro lokální platební metody, a proto před nabídkou obchodníkovi stojí za ověření dostupnosti pro konkrétní zemi.

Pokrytí v archivu: samostatné články máme pro [stock counts](/Shopify_news_magexo/zmena/stock-counts-shopify-admin/), [Smart grid](/Shopify_news_magexo/zmena/pos-smart-grid-tiles-suggestions/), [více barcodes na variantu](/Shopify_news_magexo/zmena/pos-multiple-barcodes-per-variant/) a [location search pro AI agenty](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/).

---

## Zpět na hub

[Shopify Editions Fall '26 — přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)

Předchozí edice: [Editions Spring '26: Retail](/Shopify_news_magexo/zmena/editions-spring-2026-retail/)
