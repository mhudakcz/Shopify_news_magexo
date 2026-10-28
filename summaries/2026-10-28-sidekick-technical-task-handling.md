---
date: 2026-10-28
title: "Sidekick: multi-step technical tasks — kód, web search, remember kontext"
title_en: "Sidekick technical task handling"
slug: sidekick-technical-task-handling
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Sidekick je merchant-facing vrstva v adminu a nemá API povrch pro naše moduly. Nepřímý dopad je v tom, že merchant může nově přes Sidekicka dělat vícekrokové úpravy a psát kód bez vývojáře, takže změny v obchodě mohou vznikat mimo naše skripty a ticketový proces. Přímé použití v našich integracích zatím nevidíme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-sidekick", "shopify-canvas-bespoke-store-design", "sidekick-app-extensions-third-party"]
editions_release: fall-2026
tldr: "Editions Fall '26 popisují Sidekicka jako pracovníka, který zvládá složité vícekrokové workflows, připraví více změn najednou, počítá, píše kód, hledá na webu a pamatuje si předchozí požadavky, takže je stačí zadat jen jednou. Stránka Editions u položky neuvádí dostupnost, plány, regiony ani limity, takže chování je potřeba ověřit přímo v adminu dřív, než ho někomu slíbíme."
tagy: [sidekick, ai, agentic-worker, multi-step, code]
zdroj_kanal: editions
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Do Fall '26 se vyvíjel hlavně do šířky: Editions Spring 2026 ho přinesly do mobilní aplikace, na Apple Watch, do Online Store Editoru a do třetích aplikací přes Sidekick app extensions. V říjnu 2026 přibyl do editoru checkoutu a customer accounts a v nástroji Canvas začal za merchanta psát a validovat kód theme. Role byla pořád podobná: asistent, který odpovídá, radí a provede jednotlivou akci.

    Položka Fall '26 s názvem More technical tasks with Sidekick mění to, jak daleko jeden požadavek dosáhne. Podle stránky Editions Sidekick zvládá složité vícekrokové workflows, umí připravit několik změn najednou, provádět výpočty, psát kód a vyhledávat na webu. Navíc si požadavky pamatuje, takže je merchant nemusí opakovat. Poznámky u položky dodávají, že Sidekick pohání nový zážitek úprav online store v Canvasu a že lépe rozumí byznysu merchanta včetně aplikací, které používá. Stránka také uvádí, že denní počet Sidekick sessions meziročně vzrostl 4,2krát, což ukazuje, proč na něj Shopify sází.

    Důležité je, co stránka neříká. Položka nemá status dostupnosti (live, preview, coming soon), nespecifikuje plány ani regiony a neuvádí limity: kolik kroků může jeden úkol mít, kam přesně kód zapisuje, co a jak dlouho si Sidekick pamatuje ani zda se paměť sdílí mezi členy teamu. Tento článek proto vychází pouze z popisu na stránce Editions a z navazujících záznamů v archivu. Související položky stejného tématu jsou dávkové změny po jednom schváleném plánu a markdown soubory, kterými lze Sidekicka naučit strukturu theme. Obě mají vlastní popis na stránce Editions a jsou shrnuty v přehledu tématu Sidekick.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Design a fully bespoke store with Canvas"
      url: "https://changelog.shopify.com/posts/design-a-fully-bespoke-store-with-canvas"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Sidekick se podle Editions Fall '26 posouvá od režimu otázka a odpověď k roli agentního pracovníka. Stránka u položky More technical tasks with Sidekick uvádí pět konkrétních schopností:

- **Složité vícekrokové workflows.** Merchant zadá cíl a Sidekick ho rozloží na kroky, místo aby čekal na každý další pokyn.
- **Připravení více změn najednou.** Formulace na stránce mluví o stagingu změn. Neříká, zda se změny po přípravě rovnou aplikují, nebo čekají na potvrzení. Na blízkou položku Editions o dávkových změnách s jedním schváleným plánem to ale ukazuje spíš jako návrh ke kontrole (náš výklad, ne výslovné tvrzení).
- **Výpočty.** Například přepočty cen, marží nebo množství, které merchant dosud dělal v tabulce.
- **Psaní kódu.** Stránka neupřesňuje, o jaký kód jde ani kam se zapisuje. V archivu víme, že v Canvasu Sidekick píše a validuje kód theme. U jiných povrchů (Flow, aplikace, Functions) to z Editions nevyplývá.
- **Vyhledávání na webu.** Sidekick může při řešení úkolu čerpat i z externích informací.

K tomu přibývá **paměť požadavků**: Sidekick si pamatuje, o co merchant dříve žádal, takže stačí zadat požadavek jednou. Editions nespecifikuje rozsah paměti: zda přetrvává mezi konverzacemi u jednoho uživatele, nebo je vázaná na obchod a sdílená celým teamem.

Poznámky u položky přidávají dvě souvislosti. Sidekick pohání nový způsob úprav online store v Canvasu (viz [Shopify Canvas: vizuální workspace pro bespoke obchody](/Shopify_news_magexo/zmena/shopify-canvas-bespoke-store-design/)) a lépe rozumí byznysu merchanta včetně aplikací v jeho stacku. Druhé navazuje na to, že aplikace se do Sidekicka dostávají přes app extensions (viz [Sidekick napojený na třetí aplikace](/Shopify_news_magexo/zmena/sidekick-app-extensions-third-party/)).

Širší kontext tématu je v přehledu [Editions Fall '26: Sidekick](/Shopify_news_magexo/zmena/editions-fall-2026-sidekick/), kde je tato položka vedena jako číslo 1 v části pro vývojáře a tvůrce themes.

## Časová osa

- **Spring '26 Editions** — Sidekick se rozšiřuje na mobil, Apple Watch, Online Store Editor a třetí aplikace.
- **1. 10. 2026** — spuštění Canvasu, kde Sidekick píše a validuje kód theme.
- **13. 10. 2026** — Sidekick v editoru checkoutu a customer accounts.
- **28. 10. 2026** — Editions Fall '26 popisují vícekrokové technické úkoly, kód, web search a paměť požadavků.
- **Dostupnost** — stránka Editions u této položky neuvádí datum, status ani rollout. Do ověření v adminu nebo v changelogu ji nepovažujeme za potvrzenou pro žádný konkrétní plán či region.

## Dopad pro nás

**Pro vývojáře:** Nejde o breaking change a nic se nemění v API, takže není co migrovat. Praktický dopad je v tom, že merchant může část ad-hoc úprav (hromadné změny dat, výpočty, drobné úpravy kódu v theme) zadat Sidekickovi místo nám. Stojí za to zjistit, co přesně tím vzniká. Doporučujeme vyzkoušet na vývojovém obchodě, kam Sidekick kód zapisuje, zda lze změny prohlédnout a vrátit zpět, jak se zapisují do historie a jak se chová, když úkol selže uprostřed vícekrokového plánu. U web searche je rozumné počítat s tím, že vstupem do úkolu se stává i externí obsah, a výstupy kódu proto kontrolovat stejně jako kód od třetí strany. To je náš úsudek, Editions o bezpečnostním modelu nic neuvádí. U obchodů, které spravujeme, si je dobré dohodnout, jak se změny provedené Sidekickem budou dohledávat, aby se při ladění nesrovnalostí v datech nebo vzhledu nezapomnělo, že úprava mohla vzniknout i touto cestou.

**Pro PM / PO:** Tato položka mění poměr mezi tím, co merchant zvládne sám, a tím, co jde přes tickety. Slibuje nižší potřebu vývojáře u drobných úprav, což může uvolnit kapacitu, ale i zvýšit riziko nekontrolovaných změn v živém obchodě. Doporučujeme: (1) ověřit dostupnost a chování ve vybraném obchodě, než ho někomu nabídneme jako službu, (2) rozhodnout, jak se bude řešit odpovědnost za kód, který Sidekick vygeneroval (kdo ho zkontroluje a kdo za něj ručí v podpoře), (3) zvážit nabídku školení nebo pravidel práce se Sidekickem pro merchanty. Nalehavost je střední: nic nepřestává fungovat a žádná lhůta neběží, ale merchanti se o funkci dozvědí z Editions a začnou se ptát.

Otevřené otázky, které stránka nezodpovídá a které je třeba ověřit před jakýmkoli slibem: dostupnost a plány, limity počtu kroků a změn, rozsah a umístění paměti, přístupová práva (zda Sidekick respektuje staff permissions u citlivých dat) a způsob vracení změn zpět.

## Použití v Integrátoru

Netýká se přímo integračních API ani synchronizačních toků, Sidekick je merchant-facing vrstva v adminu. Nepřímo může být relevantní při ladění nesrovnalostí v datech nebo themes, protože změny teď mohou vznikat i vícekrokovými úkoly zadanými Sidekickovi mimo naše skripty.
