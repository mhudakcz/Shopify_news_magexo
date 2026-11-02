---
date: 2026-10-28
title: "Improved admin search — jedno pole hledá sections/pages/apps + umí asknout Sidekick"
title_en: "Improved search for Shopify's admin"
slug: improved-admin-search-sidekick-flow
zdroj: https://changelog.shopify.com/posts/search-shopify-s-admin-and-ask-sidekick-from-one-flow
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o first-party změnu UI nativního adminu bez API, takže přímý dopad na naše moduly nečekáme. Dotýká se jen toho, jak merchanti v adminu hledají a jak najdou nainstalované aplikace, což ovlivní školení, podporu a screenshoty v dokumentaci."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-operations", "admin-refresh-sidekick-access", "shopify-admin-new-look-2026", "sidekick-floating-chat-admin-home", "search-filter-saved-views-orders-products"]
editions_release: fall-2026
tldr: "Vyhledávání v redesignovaném desktopovém adminu je podle Shopify výrazně rychlejší a z jednoho místa hledá admin stránky, zdroje, nastavení i nainstalované aplikace; otevírá se zkratkou Cmd+K nebo Ctrl+K. Tlačítko Ask Sidekick po vyhledání uvádí až Help Center, ne samotný changelog. Bez API dopadu, rollout bez uvedeného data."
tagy: [admin, search, sidekick, ux, navigation, redesign]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Changelog z 28. října 2026 popisuje jedinou věc: v redesignovaném desktopovém adminu je vyhledávání výrazně rychlejší a z jednoho místa najde admin stránky, zdroje (resources), nastavení a nainstalované aplikace. Merchant k němu přistoupí zkratkou Command+K na Macu nebo Control+K na Windows. Text je krátký a podmíněný: updated search je k dispozici jen tehdy, když už je dostupné pro daný obchod. Datum, plány ani země neuvádí a o Sidekickovi se v něm nepíše ani slovo, přestože adresa článku mluví o tom, že se Sidekick dá zeptat z jednoho flow.

    Tu druhou polovinu doplňuje Help Center, na který changelog odkazuje. Podle něj search na desktopu po vyhledání nabízí tlačítko Ask Sidekick, kterým merchant pokračuje v hledání v chatu. Hledat se dá napříč aplikacemi, zákazníky, objednávkami, opuštěnými checkouty, produkty, prodejními kanály a dalšími částmi adminu, výsledky jde zúžit filtry (například Discounts, Locations, Markets, Metafields, Pages, Reports, Settings) a lomítko v poli ukáže všechny dostupné filtry. V mobilní aplikaci místo Sidekicka vedou výsledky na App Store a Help Center. Help Center je ale obecná dokumentace, takže z textu nepoznáme, co přesně je na novém vyhledávání nové a co v adminu fungovalo už dřív.

    Souvislosti v archivu: vyhledávání se po zářijovém redesignu přesunulo do sbalitelné postranní navigace a Sidekick se stal plovoucím chatem na každé stránce. Editions Fall '26 řadí rychlejší vyhledávání do tématu Operations jako součást admin refreshe a téma Sidekick líčí jako přesun Sidekicka do středu adminu. Tlačítko Ask Sidekick ve vyhledávání je podle našeho čtení další vstupní brána do stejné vrstvy, ale Editions ani changelog to takto výslovně netvrdí. Od jarního sjednoceného search, filter a saved views baru na seznamových stránkách se tato změna liší rozsahem: tam jde o hledání uvnitř jedné sekce, tady o globální hledání napříč adminem.

    Pro merchanty je to drobné zrychlení každodenní práce a pro nás hlavně změna toho, co se při školení a podpoře ukazuje. Žádné API, oprávnění ani extension point se s touto položkou nemění a nic se nedeprekuje. Nejasné zůstává, jak search pracuje s obsahem aplikací (jen název aplikace, nebo i její stránky), zda chování závisí na plánu nebo zemi a kdy se změna dostane do všech obchodů.
  zdroje:
    - title: "Shopify: Improved search for Shopify's admin"
      url: "https://changelog.shopify.com/posts/search-shopify-s-admin-and-ask-sidekick-from-one-flow"
    - title: "Shopify Help Center: Admin search"
      url: "https://help.shopify.com/en/manual/shopify-admin/admin-search"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v redesignovaném desktopovém adminu zrychluje vyhledávání a sjednocuje ho do jednoho flow. Podle changelogu z 28. října 2026 najde merchant z jednoho místa admin stránky, zdroje, nastavení a nainstalované aplikace. Vyhledávání se otevírá zkratkou **Command+K** na Macu nebo **Control+K** na Windows. Updated search se objeví, až bude dostupné pro daný obchod, takže nasazení je postupné a bez akce merchanta.

Changelog sám Sidekick nezmiňuje. Souvislost se Sidekickem pochází z Help Center, na který článek odkazuje: na desktopu po vyhledání nabízí search tlačítko **Ask Sidekick**, kterým se v hledání pokračuje v chatu. Stejná dokumentace uvádí, co všechno se hledá (aplikace, zákazníci, objednávky, opuštěné checkouty, produkty, prodejní kanály), jaké jsou filtry (Discounts, Locations, Markets, Metafields, Pages, Reports, Settings), že lomítko v poli ukáže všechny filtry a že poslední hledání se ukládá jen v zařízení uživatele. Na desktopu se zobrazí až 7 výsledků a tlačítko Show more přidává dalších až 20. V mobilní aplikaci tlačítko Ask Sidekick není, výsledky tam odkazují na App Store a Help Center a přibývá sken čárového kódu.

Co zdroje neříkají: kdy rollout začal a skončí, jestli závisí na plánu nebo zemi, jak velké je zrychlení, zda search prohledává i vnitřní stránky aplikací a které z popsaných funkcí jsou na novém vyhledávání skutečně nové. Příklad otázky pro Sidekick, jak ho zná marketingový popis položky, ve zdrojích není.

## Časová osa

- **2026-04-13** — sjednocený search, filter a saved views bar na seznamových stránkách (Orders, Products a další), hledání uvnitř jedné sekce
- **2026-09-15** — nový vzhled adminu: vyhledávání se stěhuje do sbalitelné postranní navigace, Sidekick se stává plovoucím chatem
- **2026-10-28** — changelog Improved search for Shopify's admin a Editions Fall '26 (téma Operations, admin refresh); updated search je dostupné postupně, jakmile ho obchod dostane
- **dále** — termín dokončení nasazení Shopify nezveřejnil

## Dopad pro nás

**Pro vývojáře:** Nejde o breaking change a neváže se k tomu žádné API, oprávnění ani extension point. Praktické kroky jsou jen kontrolní. Až obchod updated search dostane, ověřit v něm, jak se najdou aplikace, které pro něj spravujeme: zda se hledá jen podle názvu aplikace, nebo i podle jejích stránek, a jestli výsledek vede na správné místo (to zdroje nepopisují). Pokud některá naše app home nebo admin UI extension používá vlastní klávesovou zkratku Command+K či Control+K, stojí za to zkusit, jestli se nepere se zkratkou adminu. To je naše hypotéza, žádný zdroj o kolizi nehovoří.

**Pro PM / PO:** Dopad je na návyky merchantů a na naše materiály, ne na funkčnost. Doporučujeme:

1. **Přidat zkratku do školení a podpory.** Command+K a Control+K jsou nejrychlejší cesta k nastavení, stránkám i aplikacím, takže se hodí do onboardingu nových uživatelů obchodu.
2. **Neslibovat Ask Sidekick jako hotovou věc.** Tlačítko dokládá jen Help Center, ne changelog, a chybí informace o dostupnosti. Před slibem merchantovi si ho ukázat přímo v adminu jeho obchodu a pamatovat, že v mobilní aplikaci chybí.
3. **Počítat s různými stavy adminu.** Dva členové týmu nebo dva obchody mohou vidět starou i novou verzi vyhledávání, takže při vzdálené podpoře se vyplatí nejdřív ověřit, co merchant vidí.
4. **Nalehavost je nízká.** Nic se nerozbije a není potřeba akce, jde o drobné zrychlení bez termínu.

## Použití v Integrátoru

Přímý dopad na Integrátor nemáme, protože jde o změnu uživatelského rozhraní nativního adminu bez API. Sledovat to má smysl hlavně u aplikací s vlastním admin UI, kde je dobré ověřit, jak je search najde a zda se nekříží s klávesovou zkratkou adminu.
