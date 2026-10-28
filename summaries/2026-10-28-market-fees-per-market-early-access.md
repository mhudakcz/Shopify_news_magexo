---
date: 2026-10-28
title: "Market fees per market — set product + collection fees per market (collected at checkout)"
title_en: "Market fees per market (early access)"
slug: market-fees-per-market-early-access
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Poplatek vybraný v checkoutu se musí nějak promítnout do objednávky (samostatná položka, součet, daň, refundy), což ovlivňuje synchronizaci objednávek do ERP a účetnictví i výpočet marže. Editions žádné API ani způsob zápisu neuvádí, takže zatím jde jen o riziko k ověření na vývojovém obchodě."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "managed-markets-duties-inclusive-pricing", "customize-checkout-accounts-by-market"]
editions_release: fall-2026
tldr: "Editions Fall '26 přidává v early access poplatky nastavené per market pro produkty a kolekce, které se vybírají automaticky v checkoutu a mají vestavěný finanční reporting. Stránka neuvádí tarif, země, zdanění ani API, takže jde zatím o signál pro obchody s více markety, ne o hotovou funkci k nasazení."
tagy: [market-fees, pricing, checkout, early-access, international]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 (název Exponential) vyšlo 28. října 2026. V tématu Payments je mezi položkami karta o poplatcích: podle stránky lze nastavit poplatky pro produkty a kolekce per market, vybírají se automaticky v checkoutu a součástí je finanční reporting. Položka je označena jako early access a má odkaz na help doc. Stránka k ní neuvádí tarif, region mimo formulaci per market, datum obecné dostupnosti ani žádné API.

    Markets jsou ve Shopify způsob, jak jeden obchod obsluhuje více zemí. Každý market může mít vlastní jazyk, měnu, ceny a katalog a postupně přibývají další per-market přepisy. Podle archivu přišlo nejdřív přizpůsobení theme, na jaře 2026 checkout a customer accounts per market a v létě Managed Markets s cenami včetně cel, daní a poplatků. Market fees jsou další vrstva stejného směru: nejen jiná cena a jiný vzhled podle trhu, ale i jiný poplatek podle trhu.

    Dosud se obchodní poplatek za konkrétní zemi (například příplatek za manipulaci u objednávek do jedné země) musel řešit oklikou. Typicky úpravou ceny produktu v katalogu daného marketu, aplikací třetí strany nebo vlastní checkout logikou. Nativní nastavení, které poplatek rovnou vybere v checkoutu a započítá ho do reportingu, by tyto obejití mohlo nahradit. Zda to tak opravdu funguje, zatím nevíme, protože položka je v early access a Editions ji popisuje jednou větou.
  zdroje:
    - title: "Shopify Editions Fall '26 (Payments)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Payments"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-payments/"
    - title: "Archiv: Managed Markets — automatické duties-inclusive pricing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/"
    - title: "Archiv: Customizace checkoutu a customer accounts per Market"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 v tématu Payments uvádí položku o **poplatcích per market**. Podle zdrojové stránky lze nastavit poplatky pro **produkty a kolekce** v jednotlivých marketech, Shopify je **vybírá automaticky v checkoutu** a součástí je **finanční reporting**. Status je **early access**.

V praxi z toho plyne:

- **Rozsah poplatku** — poplatek se váže na produkt nebo na kolekci, ne na celou objednávku. Stránka neříká, zda lze zadat pevnou částku, procento, nebo obojí.
- **Per market** — stejný produkt může mít v jednom marketu poplatek a v jiném ne, případně jiný. Příklad z našeho zadání je příplatek za manipulaci u objednávek do Francie. Je to náš ilustrativní příklad, stránka konkrétní případ neuvádí.
- **Výběr v checkoutu** — kupující poplatek zaplatí jako součást objednávky, bez ruční fakturace navíc. Jak přesně se v checkoutu zobrazí (samostatný řádek, součást mezisoučtu), stránka nepopisuje. Předpoklad samostatné položky je naše domněnka.
- **Reporting** — finanční reporting je zmíněn jako součást funkce. Nevíme, zda jde o samostatný report, nebo o sloupec v existujících přehledech plateb a objednávek.

**Co stránka neříká:**

- **Co přesně je poplatek.** Náš výklad je, že jde o obchodní poplatek merchanta, ne o dopravu ani daň (ty mají vlastní nastavení v Shopify). Stránka tuto hranici výslovně netahá, takže je to zatím jen čtení kontextu. Název může také svádět k záměně s poplatkem Managed Markets, který je podle archivu součástí duties-inclusive ceny. Stránka obě věci nespojuje, vztah je potřeba ověřit.
- **Daň a právní pohled.** Zda se z poplatku počítá DPH, jak se zobrazí v celkové ceně pro spotřebitele a jak se chová při refundu, není uvedeno. U B2C prodeje v EU je potřeba ověřit, jak se poplatek promítá do celkové ceny a DPH.
- **Dostupnost.** Žádný tarif, země ani datum obecné dostupnosti. Early access obvykle znamená omezený přístup na žádost, podmínky jsou v help docu.
- **API.** Stránka nezmiňuje Admin API, webhooky ani Functions. Zda lze poplatky nastavovat nebo číst programově, nevíme.

Vztah k archivu: položka je v přehledu [Editions Fall '26: Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/) vedená jako market fees v early access. Souvisí s tím, že Shopify po jednotlivých vrstvách přidává per-market přepisy, viz [checkout a customer accounts per market](/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/) a [Managed Markets s cenami včetně cel](/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/).

## Časová osa

- **2026-03-16** — customizace checkoutu a customer accounts per market ([customize-checkout-accounts-by-market](/Shopify_news_magexo/zmena/customize-checkout-accounts-by-market/))
- **2026-07-10** — Managed Markets s automatickým duties-inclusive pricing ([managed-markets-duties-inclusive-pricing](/Shopify_news_magexo/zmena/managed-markets-duties-inclusive-pricing/))
- **2026-10-28** — Editions Fall '26: poplatky pro produkty a kolekce per market v early access, datum obecné dostupnosti neuvedeno

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Je to early access a Editions k položce neuvádí žádné API. Riziko je jiné a zatím teoretické: poplatek vybraný v checkoutu se musí objevit někde v objednávce a ten, kdo objednávky zpracovává dál (ERP, účetnictví, fulfillment, reporting), s ním musí počítat.

Co ověřit, jakmile bude přístup k dispozici, nejlépe na vývojovém obchodě:

- Jak se poplatek zapíše do objednávky. Jde o samostatnou položku, o součást mezisoučtu nebo o samostatný řádek poplatku? Objeví se v existujících polích objednávky v Admin API (například v additionalFees), nebo jen v celkové ceně? Pokud jen v celkové ceně, rozdíl mezi součtem položek a částkou objednávky může rozhodit párování v ERP.
- Jak se poplatek chová při částečném refundu, vrácení zboží a při storno objednávky.
- Zda se z poplatku počítá daň a jak vypadá daňový rozpad pro účetnictví.
- Zda se nepřekrývá s tím, co už u obchodu řeší jinak. Pokud obchod dnes vybírá příplatek přes aplikaci, checkout extension nebo úpravu ceny v katalogu marketu, hrozí po zapnutí nativní funkce dvojí účtování. Takové řešení by se při přechodu muselo vypnout.
- Zda lze poplatky nastavovat nebo číst programově. Dokud API není zdokumentované, správa poplatků bude pravděpodobně jen ručně v administraci. To je náš předpoklad.

**Pro PM / PO:** Příležitost je u obchodů s více markety, které mají náklady vázané na konkrétní zemi a dnes je buď pohlcují, nebo schovávají do ceny produktu. Poplatek per market a per kolekce by umožnil účtovat jen tam, kde náklad skutečně vzniká, a držet základní cenu produktu čistou. Použitelnost pro české a evropské obchody je náš odhad. Stránka žádné země ani typy poplatků nejmenuje.

Co s tím dělat:

- Nechat si u obchodů s více markety zmapovat, jaké náklady dnes vázané na zemi řeší oklikou (příplatky přes aplikace, vyšší cena v katalogu marketu, ruční doúčtování). Tyto případy jsou kandidáty na první test.
- Zjistit v help docu, jak se o early access žádá, a rozhodnout, zda se vyplatí přihlásit jeden obchod jako pilot.
- Před slibováním čehokoli obchodu s B2C prodejem v EU ověřit, jak se poplatek zobrazuje v celkové ceně a jak se počítá DPH. Právní stránku je vhodné konzultovat s obchodem.

Nalehavost je nízká. Žádný deadline není, funkce je v early access a podmínky nejsou veřejné. Stačí položku sledovat a vrátit se k ní, až se objeví changelog nebo dokumentace.

## Použití v Integrátoru

**Možná** — poplatek vybraný v checkoutu se musí promítnout do objednávek, které synchronizujeme do ERP a účetnictví, takže u obchodů s touto funkcí je potřeba ověřit mapování součtů a daní. Dokud Shopify neuvede API, jde jen o riziko ke sledování, ne o práci k zahájení.
