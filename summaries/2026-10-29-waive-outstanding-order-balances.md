---
date: 2026-10-29
title: "Waive outstanding order balances — odpustit nedoplatek bez špinění audit trail"
title_en: "Waive outstanding order balances"
slug: waive-outstanding-order-balances
zdroj: https://changelog.shopify.com/posts/waive-outstanding-order-balances
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-10-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Changelog nezmiňuje žádné API, takže kód se nemění. Odpuštěná částka ale mění to, co je u objednávky ještě k zaplacení, a to se může dotknout synchronizace plateb, finančního stavu objednávek a účetních exportů u obchodů, které stavíme."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-fulfillment, staff-permissions-payments-payouts-disputes-tax, buyer-requested-order-edits-apis]
tldr: "Merchant může na stránce objednávky odpustit nedoplacený zůstatek místo jeho vymáhání a později ho zase odebrat. Shopify odpuštěné částky samo upravuje při editaci objednávky, refundech a vratkách, ukazuje je kupujícímu a vykazuje je jako write-off ve statistikách a v novém reportu Write-offs by order. Zdroj neuvádí API, plány ani datum nasazení."
tagy: [orders, balances, write-off, accounting, operations]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Objednávka na Shopify může skončit s nedoplaceným zůstatkem z mnoha důvodů: zákazník zaplatil o kousek méně, po úpravě objednávky vznikl rozdíl, který už nikdo nedoplatil, nebo se část platby nepovedla dokončit. Dosud bylo u takového zůstatku na výběr dvojí: dál ho vymáhat, nebo objednávku nechat viset v neuzavřeném stavu. Changelog z 29. října 2026 přidává třetí cestu. Na kartě platby na stránce objednávky lze zůstatek odpustit (waive), tedy rozhodnout, že se už vybírat nebude, a stejnou cestou lze odpuštěnou částku zase odebrat.

    Funkce se nepočítá jako bokem ručně upravená platba, ale jako samostatná položka, kterou Shopify drží v souladu s životem objednávky. Při editaci objednávky, refundech a zpracování vratek odpuštěné částky samo přepočítává. Pokud celková částka objednávky klesne pod odpuštěnou částku, Shopify vrátí jen přebytek, a to od nejstarší odpuštěné částky. Odpuštěný zůstatek je vidět tam, kde dává smysl, tedy v zákaznických účtech, v checkoutu a v e-mailových notifikacích. Pro reporting přibyly write-off metriky a dimenze a všechny obchody dostávají nový výchozí report Write-offs by order. Právo odpouštět je vázané na nové oprávnění Waive order balances v adminu, které mají ve výchozím stavu vysoce privilegované role jako Store admin.

    V Editions Fall '26 je položka zařazena do tématu Fulfillment mezi úpravy objednávek a plateb po jejich vytvoření (Editions ji popisuje jako odpuštění nevybraného zůstatku odpisem, který drží finanční a daňové záznamy v pořádku). Do archivu tak přichází jako samostatný článek k jedné ze 11 položek tématu, které dosud žily jen v přehledu. Změna míří na merchanty, kteří řeší drobné nedoplatky ručně, zejména u ručních a B2B objednávek, a dává jim správně označený odpis místo obcházení systému. Zdroj nezmiňuje žádné API, plány ani země a nepopisuje, zda a jak se akce zapisuje do activity logu. To jsou body, které je před nasazením potřeba ověřit v adminu.
  zdroje:
    - title: "Shopify: Waive outstanding order balances"
      url: "https://changelog.shopify.com/posts/waive-outstanding-order-balances"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Merchant může na stránce objednávky, na kartě platby, odpustit zůstatek, který zákazník ještě má zaplatit. Zůstatek tím přestává být nedoplatkem k vymáhání a vede se jako odpuštěná částka. Stejnou cestou jde odpuštěnou částku z objednávky zase odebrat, takže jde o vratné rozhodnutí.

Podle changelogu to funguje takto:

- **Automatické úpravy.** Při editaci objednávky, refundech a zpracování vratek Shopify odpuštěné částky samo upravuje. Pokud celková částka objednávky klesne pod odpuštěnou částku, vrátí se jen přebytek, a to od nejstarší odpuštěné částky.
- **Viditelnost pro kupujícího.** Odpuštěný zůstatek se zobrazuje všude, kde je relevantní: v zákaznických účtech, v checkoutu a v e-mailových notifikacích.
- **Řízení přístupu.** Odpouštět smí jen člen týmu s novým oprávněním **Waive order balances**. Vysoce privilegované role, například Store admin, ho mají ve výchozím stavu zapnuté.
- **Reporting.** Přibyly metriky a dimenze pro write-offs a výchozí report **Write-offs by order**, který je k dispozici u všech obchodů.

Zdroj ani Editions neuvádějí konkrétní příklady použití. Typické scénáře si tedy domýšlíme my: drobný rozdíl po přepočtu měny, zůstatek po úpravě objednávky, který už nemá smysl vymáhat, nebo dohodnutá sleva po reklamaci, kterou obchod nechce vést jako slevu na zboží.

**Co changelog neříká:**

- **API.** Žádné mutace, pole ani verze API nejsou zmíněné. Nevíme tedy, jak odpuštěnou částku přečtou nebo zapíšou aplikace.
- **Audit log.** Post nepopisuje, zda se odpuštění zapisuje do activity logu včetně jména člena týmu. Nadpis tohoto článku staví na tom, že odpis je oddělený od platby, ne na zdokumentovaném záznamu o autorovi.
- **Dostupnost a rollout.** Plány, země ani termín nasazení funkce samotné post neuvádí. Výslovně se uvádí jen to, že report Write-offs by order je k dispozici u všech obchodů.
- **Daně a platební metody.** Není popsáno, jak odpis ovlivní vybranou daň ani zda jde odpustit zůstatek u jakékoli platební metody.

## Časová osa

- **2026-07-07** — granulární staff permissions pro finanční agendu (platby, spory, výplaty, daňové dokumenty), viz [staff-permissions-payments-payouts-disputes-tax](/Shopify_news_magexo/zmena/staff-permissions-payments-payouts-disputes-tax/)
- **2026-10-01** — API pro žádosti kupujících o úpravu objednávky (verze 2026-10), viz [buyer-requested-order-edits-apis](/Shopify_news_magexo/zmena/buyer-requested-order-edits-apis/)
- **2026-10-28** — Editions Fall '26, téma Fulfillment uvádí balance write-offs mezi úpravami objednávek a plateb ([editions-fall-2026-fulfillment](/Shopify_news_magexo/zmena/editions-fall-2026-fulfillment/))
- **2026-10-29** — changelog Waive outstanding order balances (označení Feature, Admin, New release); report Write-offs by order je k dispozici u všech obchodů
- **Termín nasazení samotné funkce** — není uveden

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Changelog nezmiňuje API ani scope, takže pro integrační kód se nemění nic, co by šlo ze zdroje ověřit. Tři body stojí za kontrolu, všechny jsou naše úvahy a nejsou údaji ze zdroje:

- **Výpočet zůstatku v synchronizacích.** Pokud ERP, účetní export nebo platební synchronizace počítají nedoplatek jako rozdíl mezi celkem objednávky a přijatými platbami, odpuštěná částka tento rozdíl nevysvětlí. Na vývojovém obchodě je potřeba zkusit odpustit zůstatek a podívat se, jak se objednávka a její finanční stav objeví v Admin GraphQL API (například hodnoty outstanding částky a stavu platby), a teprve podle toho upravit logiku.
- **Odpuštění po editaci, refundu a vratce.** Protože Shopify odpuštěné částky samo upravuje, může se částka na objednávce změnit bez zásahu člověka. Synchronizace, která čte objednávku jen jednou po vytvoření, může mít zastaralá čísla. Webhooky a události, které by tuto změnu oznámily, zdroj nezmiňuje.
- **Oprávnění.** Pokud některé z našich řešení používá staff účet pro práci s objednávkami nebo platbami, nové oprávnění Waive order balances se mu samo nepřidá. Pro nastavení vlastních rolí je to další přepínač, který je potřeba vědomě rozhodnout.

**Pro PM / PO:** Funkce je užitečná u obchodů, které dnes drobné nedoplatky řeší obcházkou, například ručním refundem a novou objednávkou nebo poznámkou v objednávce. Doporučujeme zkontrolovat tři věci:

- **Kdo smí odpouštět.** Projít vlastní role a rozhodnout, komu patří právo Waive order balances. Odpis je finanční rozhodnutí, takže dává smysl držet ho u účetní nebo vedoucího provozu, ne u celého týmu zákaznické podpory.
- **Jak to uvidí zákazník.** Odpuštěná částka se ukáže v zákaznickém účtu, v checkoutu a v e-mailech. Před nasazením u zákaznicky citlivých objednávek je vhodné zkusit, jak přesně to vypadá.
- **Jak to uvidí účetní.** Report Write-offs by order je k dispozici u všech obchodů. Je dobré si ho otevřít a porovnat s tím, jak účetní odpisy dnes vykazuje, hlavně u obchodů s B2B platebními podmínkami a zálohami (viz [dynamic-payment-terms-deposits-b2b](/Shopify_news_magexo/zmena/dynamic-payment-terms-deposits-b2b/)).

Nalehavost je nízká. Žádný termín ani změna chování stávajících objednávek nejsou uvedené a použití je dobrovolné. Role a postup schvalování odpisů ale lze promyslet už teď a po zpřístupnění funkce je jen zapnout.

## Použití v Integrátoru

**Možná** — nejde o API ani změnu kódu, ale odpuštěná částka mění zůstatek u objednávky, který se může propisovat do plateb, finančního stavu a účetních exportů. Při předávání obchodu stojí za to ověřit, jak se odpuštění objeví v datech objednávky a zda synchronizace s ERP s odpuštěným zůstatkem počítá.
