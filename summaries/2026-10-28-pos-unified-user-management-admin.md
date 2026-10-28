---
date: 2026-10-28
title: "Unified user management — POS + Admin users v jednom roles systému + seasonal controls"
title_en: "Unified user management POS + Admin"
slug: pos-unified-user-management-admin
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Editions u položky neuvádí žádné nové API, scopes ani webhooky, jde o správu uživatelů v Adminu a POS. Nepřímý dotyk existuje jen tehdy, když se při synchronizaci objednávek nebo POS dat pracuje s identitou personálu, například s atribucí prodejů. Tuto vazbu je potřeba ověřit na testovacím obchodě."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-retail", "unified-pos-staff-management", "bulk-staff-setup-csv-import"]
editions_release: fall-2026
tldr: "Editions Fall '26 zařazuje do Retail tématu společnou správu uživatelů POS a Adminu se sezónními kontrolami personálu a podporou více rolí; organizační role jsou jen pro Shopify Plus. Jde o UI a governance změnu bez zmíněného API. Základ funkce už v archivu máme z června 2026, Editions ji zařazuje jako součást širší vrstvy správy personálu."
tagy: [pos, admin, users, roles, permissions, seasonal, retail-ops]
zdroj_kanal: editions
kontext:
  background: |
    Do jara 2026 byly účty prodavačů v POS a uživatelé Adminu v praxi dvě oddělené evidence. POS personál se zakládal a nastavoval v POS kanálu, admin uživatelé měli vlastní nastavení v Settings > Users. Obchodník s více prodejnami tak často udržoval duplicitní účty a různě nastavená oprávnění a hůř dohledával, kdo má k čemu přístup. Základ sjednocení jsme v archivu zachytili už v červnu 2026 jako změnu z merchant changelogu, včetně organizačních rolí pro Shopify Plus, pozastavení sezónních zaměstnanců bez ztráty historie a přiřazení více rolí jednomu uživateli.

    Editions Fall '26 stejnou oblast zařazuje do tématu Retail jako samostatnou položku. Na stránce Editions je uvedená pod názvem o správě uživatelů POS a Adminu společně v Adminu a její popis zmiňuje sezónní kontroly personálu a podporu více rolí s poznámkou, že organizační role jsou vyhrazené pro Shopify Plus. Stránka u položky neuvádí datum nasazení, verzi POS ani žádné API. Pokud jde o dostupnost, nic neoznačuje funkci jako připravovanou.

    Náš výklad: sezónní kontroly bereme jako podporu pro cyklické najímání a pozastavování brigádníků, na kterou v archivu navazuje pozastavení a opětovná aktivace účtů a hromadný import přes CSV. Automatické pozastavení účtu k danému datu ale Editions výslovně neuvádí a my ho jako ověřenou funkci nepředkládáme. Spolu s atribucí prodejů a activity logem tvoří položka vrstvu governance, kterou potřebují větší retailové provozy.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Unified staff management pro POS a admin v Settings > Users"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-pos-staff-management/"
    - title: "Archiv: Bulk staff setup přes CSV import"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/bulk-staff-setup-csv-import/"
    - title: "Archiv: POS activity log pro high-risk register akce"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pos-activity-log-high-risk-actions/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v Editions Fall '26 v tématu Retail uvádí položku o tom, že uživatele POS a Adminu lze spravovat společně na jednom místě v Adminu. Dříve šlo o dvě oddělené agendy: POS personál měl své účty a oprávnění v POS kanálu, admin uživatelé měli vlastní nastavení. Teď má obchodník jeden systém uživatelů a rolí.

Co Editions u položky výslovně uvádí:

- **Společná správa POS a Admin uživatelů** v Adminu, bez přepínání mezi dvěma místy.
- **Sezónní kontroly personálu** (seasonal staff controls), určené pro obchody, které personál v sezóně navyšují a po ní zase omezují.
- **Podpora více rolí** (multi-role) u jednoho uživatele, takže stejný člověk může mít například roli pro POS i roli pro backoffice.
- **Organizační role jen pro Shopify Plus.** Role platné napříč více obchody jsou vyhrazené pro tarif Plus.

Co Editions neuvádí, a proto to nepředkládáme jako fakt: konkrétní podobu sezónních kontrol (například automatické pozastavení účtu k danému datu), počet nebo seznam rolí, ani změny v API. V archivu přitom máme související funkce, které tuto oblast doplňují: [pozastavení a opětovnou aktivaci účtů](/Shopify_news_magexo/zmena/unified-pos-staff-management/) bez ztráty historie a [hromadnou správu přes CSV](/Shopify_news_magexo/zmena/bulk-staff-setup-csv-import/).

Důležité je i zařazení: základ sjednocené správy už v archivu máme z června 2026. Editions ji tedy znovu staví do kontextu retailové edice, nepředstavuje zcela novou funkci od nuly. Prakticky to znamená, že obchodník ji pravděpodobně už najde v Settings > Users, ale nové může být doplnění o sezónní kontroly, které je potřeba ověřit v konkrétním obchodě.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-11 | Sjednocená správa POS a admin uživatelů v Settings > Users, podle merchant changelogu s automatickou migrací stávajících přístupů |
| 2026-06-29 | POS activity log s přiřazením zaměstnance u rizikových akcí na pokladně |
| 2026-08-21 | Hromadné vytvoření, pozastavení a reaktivace účtů přes CSV |
| 2026-10-28 | Editions Fall '26 zařazuje společnou správu uživatelů do tématu Retail, bez uvedeného data nasazení |

Stránka Editions u této položky neuvádí datum ani verzi POS a nic neoznačuje jako připravované. Pokud jde o funkce nad rámec června, před nabídkou obchodníkovi doporučujeme ověřit dostupnost přímo v jeho obchodě.

## Dopad pro nás

**Pro vývojáře:** Editions u položky neuvádí nové API, scopes ani webhooky, takže nečekáme změnu v datovém modelu. Stojí za to ověřit na testovacím obchodě tři věci. Zaprvé, jestli se po sjednocení uživatelů nemění identifikátory personálu, na které se mohou vázat objednávky nebo POS data v externích systémech, například při výpočtu provizí. Zadruhé, jak se u sezónně pozastavených uživatelů chovají přístupy aplikací a integrací, pokud jsou navázané na konkrétní uživatelský účet. Zatřetí, jestli omezení organizačních rolí na Shopify Plus neovlivní návrh oprávnění u obchodů na nižším tarifu.

**Pro PM / PO:** Je to dobré téma pro retailové projekty s více prodejnami a sezónním personálem. Obchodníkovi lze doporučit konsolidaci duplicitních účtů, jasné pojmenování rolí a pravidelný rytmus pozastavování brigádníků po sezóně. Hodí se to zejména před vánočním náborem, kdy se personál nejvíc mění. Při nabídce je potřeba otevřeně říct, že organizační role jsou jen pro Shopify Plus a že automatické pozastavení k datu Editions neslibuje. Funkce je merchant-facing, nic na naší straně se implementovat nemusí, jde o provozní doporučení a nastavení při onboardingu nebo auditu přístupů.

## Použití v Integrátoru

Přímo tuto funkci nevyužíváme, jde o správu uživatelů v Adminu a POS bez zmíněného API dopadu. Může se hodit jako doporučení při onboardingu retailových projektů s více prodejnami a jako bod ke kontrole, pokud synchronizujeme data vázaná na personál (atribuce prodejů).
