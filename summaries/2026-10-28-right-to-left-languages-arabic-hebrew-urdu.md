---
date: 2026-10-28
title: "Right-to-left jazyky — Arabic, Hebrew, Urdu (full RTL podpora)"
title_en: "Right-to-left languages: Arabic, Hebrew, Urdu"
slug: right-to-left-languages-arabic-hebrew-urdu
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Bez API dopadu; relevantní jen u obchodů mířících na arabsky, hebrejsky nebo urdsky mluvící trhy, kde spravujeme custom theme, sekce, snippety nebo komponenty checkoutu a customer accounts, které je nutné ověřit v RTL režimu."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-online", "admin-3-new-languages-rtl", "translate-adapt-auto-sync-8-languages-eu"]
editions_release: fall-2026
tldr: "Fall '26 v tématu Online store připomíná, že obchod lze spustit v arabštině, hebrejštině a urdu (jazyky psané zprava doleva, které podle Shopify čte přes 600 milionů lidí). Podpora RTL už byla oznámena 2. října, takže jde spíš o zařazení do Editions než o novou funkci; pro české merchanty je relevantní jen při expanzi na Střední východ nebo do jižní Asie."
tagy: [i18n, rtl, arabic, hebrew, urdu, storefront, languages]
zdroj_kanal: editions
kontext:
  background: |
    RTL (right-to-left) jazyky se píší zprava doleva a vyžadují nejen přeložené texty, ale i zrcadlené rozvržení rozhraní: pořadí navigace, zarovnání textu, směr ikon se směrem (šipky, carousely, breadcrumbs) nebo směr progress barů. Arabština, hebrejština a urdu patří mezi nejrozšířenější RTL jazyky a pokrývají velké trhy na Středním východě, v jižní Asii a v Izraeli. Pro obchod, který tam chce prodávat, je RTL podpora platformy podmínkou použitelného storefrontu, ne kosmetickým detailem.

    Editions stránka Fall '26 uvádí v tématu Online store jedinou větu: obchod lze spustit v arabštině, hebrejštině nebo urdu a oslovit tak přes 600 milionů lidí. Položka odkazuje na nápovědu s požadavky na RTL jazyky, není označena jako coming soon a neuvádí žádné datum, plán ani cenu. Číslo 600 milionů je jediný údaj, který stránka k položce uvádí. Jde tedy o marketingové shrnutí, ne o technickou specifikaci, a konkrétní chování je nutné ověřit v nápovědě.

    Samotná podpora není zcela nová. Podle archivního článku z 2. října 2026 Shopify tehdy zpřístupnil Admin v arabštině, urdu a hebrejštině a rozšířil RTL podporu na storefronty, výslovně včetně checkoutu, customer accounts a kolekce témat Horizon. Fall '26 tuto změnu zařazuje do přehledu novinek jako položku pro online store. Obsah spravovaný merchantem (produkty, kolekce, stránky) se sám nepřekládá a řeší se přes Translate & Adapt nebo jiný překladový nástroj. Pokud jde o formulaci o zrcadlení všech themes, Editions stránka ji neuvádí; potvrzená je podpora u Horizon, checkoutu a customer accounts, u ostatních themes a custom kódu je nutné počítat s ověřením.
  zdroje:
    - title: "Shopify Editions Fall '26 (Online store)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Admin now supports 3 new languages"
      url: "https://changelog.shopify.com/posts/admin-now-available-in-3-new-languages"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 má v tématu **Online store** položku o spuštění obchodu v **arabštině, hebrejštině nebo urdu**. Všechny tři jsou jazyky psané zprava doleva (RTL) a Shopify uvádí, že je čte přes 600 milionů lidí. Položka odkazuje na nápovědu s požadavky na RTL jazyky. Stránka neuvádí žádný stav dostupnosti typu beta nebo coming soon, žádné datum ani omezení podle tarifu, takže ji lze číst jako funkci, která je již k dispozici.

Co za tím technicky stojí, vyplývá z archivního článku o [Adminu ve třech nových jazycích a RTL podpoře](/Shopify_news_magexo/zmena/admin-3-new-languages-rtl/) z 2. října 2026:

- RTL podpora se týká administrace i storefrontů, výslovně včetně **checkoutu**, **customer accounts** a kolekce témat **Horizon**.
- Jazyk zobrazení administrace se určuje podle nastavení zařízení uživatele, pokud je k dispozici.
- Obsah spravovaný merchantem (produktové stránky, kolekce, vlastní texty) zůstává v jazycích, které si majitel obchodu sám nakonfiguroval. Překlad obsahu lze zapnout přes aplikaci Translate & Adapt.

Editions položka sama žádné API změny, nová pole ani webhooky nepopisuje. Pro nás jde proto o lokalizační a storefrontovou změnu bez API povrchu.

## Časová osa

- 2026-10-02 — changelog Shopify: Admin dostupný v arabštině, urdu a hebrejštině, RTL podpora napříč Admin a storefronty (checkout, customer accounts, Horizon)
- 2026-10-28 — Editions Fall '26: RTL jazyky zařazeny jako položka tématu Online store, bez dalšího data a bez označení coming soon
- Přesný rozsah a termín dokončení rolloutu Shopify neuvádí

## Dopad pro nás

**Pro vývojáře:** Bez API dopadu. Praktický význam mají custom theme a vlastní komponenty. Horizon, checkout a customer accounts RTL podle changelogu zvládají nativně, ale starší nebo vlastní témata, vlastní sekce, snippety a app embed bloky se v RTL mohou vykreslit rozbitě. Následující body jsou naše doporučení z obecných RTL zásad, ne informace od Shopify:

- Používat CSS logical properties (`margin-inline-start`, `padding-inline-end`, `inset-inline-start`) místo pevných `left` a `right`.
- Projít zrcadlení ikon se směrem (šipky, carousely, breadcrumbs, galerie produktů) a směr animací a posuvníků.
- Ověřit smíšený obsah: čísla, SKU, URL a e-maily uvnitř RTL textu se mohou zobrazit v nečekaném pořadí, pomáhá atribut `dir` nebo element `bdi`.
- Zkontrolovat fonty, zda mají kvalitní glyfy pro arabské, urdské (včetně stylu nastaliq) a hebrejské písmo.
- Otestovat formuláře a adresní pole, protože zarovnání vstupů a pořadí prvků bývá v RTL častým zdrojem chyb.
- Při práci na SEO počítat s jazykovými variantami a hreflang, viz [přepínač automatických hreflang tagů](/Shopify_news_magexo/zmena/automatic-hreflang-toggle-admin/).

**Pro PM / PO:** Nízká naléhavost. Pro obchody v ČR a SK ani pro EU trhy se nic nemění. Položka je relevantní jen pro merchanty, kteří uvažují o expanzi na Střední východ, do jižní Asie (urdu) nebo do Izraele. V kombinaci s [Shopify Payments v UAE na plánu Advanced](/Shopify_news_magexo/zmena/shopify-payments-uae-advanced-plan/) a [lokalizovanými adresními poli pro Kuvajt a další země](/Shopify_news_magexo/zmena/localized-address-fields-br-ph-kw-pe-pa/) se tento region stává reálnějším cílem než dříve. Pokud takový projekt přijde, je dobré do rozsahu zahrnout:

- RTL testování custom komponent a themes, protože platforma automaticky řeší jen své vlastní rozhraní.
- Překlad obsahu obchodu, který se sám nepřeloží. Auto-sync v Translate & Adapt je podle archivního článku [uvedený pro vybrané EU země](/Shopify_news_magexo/zmena/translate-adapt-auto-sync-8-languages-eu/) a Česko, Slovensko ani Polsko ve výčtu nejsou, takže dostupnost je potřeba ověřit přímo v administraci.
- Lokalizaci mimo jazyk samotný: měna, platební metody, doručení a právní texty pro cílové trhy.

Číslo 600 milionů je marketingový údaj Shopify o počtu čtenářů, ne odhad obratu ani zájmu pro konkrétní obchod. Rozhodnutí o expanzi by mělo stát na datech o poptávce, ne na této položce.

## Použití v Integrátoru

Bez přímého API dopadu, jde o lokalizaci storefrontu a administrace. Užitečné jako reference při plánování obchodů pro trhy s RTL jazyky a při testování custom theme komponent v RTL režimu.

## ⬅️ Související
🔗 [Editions Fall '26 — přehled všech témat](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Editions Fall '26 — Online store](/Shopify_news_magexo/zmena/editions-fall-2026-online/)
🔗 [Admin ve třech nových jazycích (RTL)](/Shopify_news_magexo/zmena/admin-3-new-languages-rtl/)
🔗 [Translate & Adapt: auto-sync překladů](/Shopify_news_magexo/zmena/translate-adapt-auto-sync-8-languages-eu/)
