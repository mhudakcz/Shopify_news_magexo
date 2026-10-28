---
date: 2026-10-28
title: "Scheduled catalogs by market — pricing + publishing changes s automatickým rollbackem"
title_en: "Scheduled catalogs by market with rollback"
slug: scheduled-catalogs-market-rollback
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Katalogy a ceníky spravujeme přes Admin API, takže plánované změny cen a publikování produktů i jejich automatický návrat po skončení akce mohou měnit stav, který naše synchronizace očekává. Fall stránka žádné API pro zápis neuvádí, rollouty lze zatím jen číst."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-online", "rollouts-schedule-test-catalog-changes", "rollouts-queries-webhooks-admin-graphql"]
editions_release: fall-2026
tldr: "Editions Fall '26 uvádí, že změny cen a publikování produktů lze naplánovat jako katalogy, nasadit napříč markety a po skončení akce je automaticky vrátit zpět. Jde o část Rollouts. Stránka neuvádí dostupnost, plán, datum ani API a rollback popisuje jako návrat po skončení akce, ne jako reakci na problém."
tagy: [catalogs, scheduling, markets, pricing, rollback, b2b]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 (název Exponential) vyšlo 28. října 2026. V tématu Online store je mezi položkami o Rollouts i jedna věta o katalozích: změny cen a publikování produktů se plánují jako katalogy, nasazují se napříč markety a po skončení akce se automaticky vrátí zpět. Stránka k položce neuvádí stav dostupnosti, plán, datum ani API a nezmiňuje B2B.

    Rollouts jsou nástroj v administraci (Markets › Rollouts) pro plánování, postupné nasazování a testování změn. Od března 2026 pokrývaly theme, od června checkout a customer accounts, od 23. října 2026 podle archivního článku i změny katalogů: aktivaci, deaktivaci nebo přepnutí existujícího katalogu v naplánovaný čas. Editions k tomu přidává formulaci o automatickém návratu po skončení akce, kterou changelog z 23. října (v našem shrnutí) výslovně nezmiňoval. Je pravděpodobné, že jde o tutéž funkci popsanou jinými slovy, stránka to ale neříká.

    Katalog je ve Shopify objekt, který sdružuje produkty, ceník a publikační pravidla a navazuje na market nebo na B2B kupující. Dokud plánování a návrat nebyly součástí Rollouts, znamenala sezónní akce s jinými cenami per market buď ruční přepínání v dohodnutý čas, nebo vlastní skripty a aplikace. Související vývojářská strana je dostupná od API verze 2026-10, kde lze Rollouts včetně změn zdrojů číst (scope read_rollouts) a odebírat webhooky; zápis zatím API nenabízí.
  zdroje:
    - title: "Shopify Editions Fall '26 (Online store)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Rollouts — scheduled + staged catalog changes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-schedule-test-catalog-changes/"
    - title: "Archiv: Rollouts — queries + webhooks v Admin GraphQL API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-queries-webhooks-admin-graphql/"
    - title: "Archiv: Editions Fall '26 — Online store"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-online/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Fall '26 v tématu Online store uvádí položku, která má u Shopify podobu jedné věty: změny cen a publikování produktů lze naplánovat jako **katalogy**, nasadit je napříč **markety** a po skončení akce se samy automaticky **vrátí zpět**. Je to jedna z položek kolem Rollouts, tedy plánovaného spuštění, události nebo experimentu.

V praxi z toho plyne:

- **Plánování cen a publikování** — nový ceník nebo jiná dostupnost produktů se připraví předem jako katalog a spustí se v naplánovaný čas, bez ručního zásahu.
- **Nasazení napříč markety** — stejnou akci lze rozložit přes více marketů. Stránka nerozlišuje, zda jeden plán pokryje více marketů najednou, nebo se plánuje po jednom.
- **Automatický rollback** — po skončení akce se původní stav vrátí sám, takže nikdo nemusí v poslední den promo akce ručně rušit slevu nebo skrývat produkty.

**Co stránka neříká:**

- **Rollback při problému.** Rollback je popsán jako návrat po skončení akce. O automatickém návratu při chybě, výpadku nebo poklesu konverze se na stránce nic nepíše. Pokud se s touto představou v týmu pracuje, je to zatím domněnka, ne slib Shopify.
- **Co přesně se vrací.** Zda jde o přepnutí zpět na původní katalog, nebo o obnovu uloženého stavu, není uvedeno. Rozdíl je podstatný, pokud se původní ceny během akce změnily (viz níže).
- **B2B.** Položka B2B nezmiňuje. B2B katalogy jsou technicky také katalogy, ale zda je lze v Rollouts plánovat stejně jako market katalogy, je potřeba ověřit.
- **Dostupnost, plán, datum a API.** Žádný z těchto údajů u položky není. Při spuštění v březnu 2026 byly Rollouts podle našeho archivu uváděny pro plány Advanced a Plus, takže dostupnost pro konkrétní tarif je nutné ověřit v nápovědě.

Vztah k archivu: změny katalogů v Rollouts jsme popsali už u [rollouts-schedule-test-catalog-changes](/Shopify_news_magexo/zmena/rollouts-schedule-test-catalog-changes/) (changelog z 23. října). Nová je především formulace o rollbacku po skončení akce a zařazení do Editions přehledu jako samostatné položky 10, viz [Online store](/Shopify_news_magexo/zmena/editions-fall-2026-online/).

## Časová osa

- **2026-03-31** — Rollouts spuštěny pro theme změny (scheduling a A/B testy)
- **2026-06-05** — rozšíření na checkout a customer account konfigurace
- **2026-06-08** — dávkové úpravy v katalogovém editoru ([improved-catalog-publishing](/Shopify_news_magexo/zmena/improved-catalog-publishing/))
- **2026-06-17** — channel markets: ceny, dostupnost a měna per prodejní kanál ([channel-specific-prices-markets](/Shopify_news_magexo/zmena/channel-specific-prices-markets/))
- **2026-09-22** — přepracovaný setup flow Rollouts (multi-change, conflict review)
- **2026-10-01** — Rollouts čitelné přes Admin GraphQL API 2026-10 (scope `read_rollouts`), včetně změn zdrojů
- **2026-10-23** — změny katalogů v Rollouts (aktivace, deaktivace, přepnutí, test mezi katalogy)
- **2026-10-28** — Editions Fall '26: plánované změny cen a publikování jako katalogy napříč markety s automatickým rollbackem; datum dostupnosti neuvedeno

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Riziko je jiné: stav katalogu se bude měnit sám podle plánu a po skončení akce i zpět, bez jediného volání z naší strany. Synchronizace cen nebo dostupnosti z ERP či PIM, která porovnává nebo přepisuje ceny v katalogu nebo ceníku, se může s rolloutem střetnout. Může přepsat naplánovaný stav, nebo po rollbacku narazit na hodnoty, které sama nezapsala.

Doporučený postup:

- Brát stav z API, ne z posledního vlastního zápisu. Admin GraphQL API 2026-10 umí rollouty číst včetně změn zdrojů a posílá webhooky o životním cyklu, o efektivní alokaci a o změnách zdrojů. Po přijetí webhooku se doporučuje dotčený rollout načíst znovu (refetch). Potřebný je scope `read_rollouts`, existující instalace mohou vyžadovat novou autorizaci. Detaily: [rollouts-queries-webhooks-admin-graphql](/Shopify_news_magexo/zmena/rollouts-queries-webhooks-admin-graphql/). Zápis rolloutů přes API zatím není.
- Pro dotčené katalogy a markety omezit nebo pozastavit cenovou synchronizaci po dobu rolloutu a po rollbacku udělat kontrolní načtení.
- Na vývojovém obchodě ověřit, co přesně rollback vrací. Konkrétně: pokud se během akce změní cena v původním katalogu, jaká cena platí po návratu. Stránka to nepopisuje.
- Přesné názvy webhook topiců a tvar objektů pro změny katalogů dohledat v API referenci, Editions je neuvádí.

**Pro PM / PO:** Příležitost je u obchodů, které prodávají do více zemí s různými cenami a termíny akcí, například ČR, SK a PL. Akční ceník a publikování se připraví dopředu, spustí se per market a na konci se samy vrátí, takže klesá riziko zapomenuté slevy nebo ručního přepínání o půlnoci. Sezónní nasazení (Black Friday, Vánoce, výprodeje) je nejpřirozenější první použití.

U B2B merchantů s dynamickou cenotvorbou je to potenciálně zajímavé, ale jde o naši hypotézu. Editions o B2B u této položky nemluví a dosud jsme neověřili, zda se B2B katalogy v Rollouts plánují stejně jako market katalogy. Než to někomu slíbíme, je potřeba to vyzkoušet.

Nalehavost je střední. Deadline žádný není, ale do Black Friday zbývá zhruba měsíc a kdo chce funkci v sezóně použít, měl by ji vyzkoušet v předstihu na jednom marketu a ověřit dostupnost podle plánu. U obchodů, kde ceny přicházejí z ERP, je důležité předem domluvit, kdo je zdrojem pravdy během rolloutu.

## Použití v Integrátoru

**Možná** — katalogy a ceníky spravujeme přes Admin API, takže plánovaný start i automatický návrat změn může měnit stav, který naše synchronizace očekává. U obchodů s rollouty s tím počítat a využít nové read-only queries a webhooky.
