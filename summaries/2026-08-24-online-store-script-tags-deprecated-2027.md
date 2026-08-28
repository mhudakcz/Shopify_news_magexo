---
date: 2026-08-24
title: "Online Store Script Tags deprecated — konec 1. 3. 2027 (Action Required, migrace na Web Pixels/Theme App Extensions)"
title_en: "Script tags are deprecated and will stop running on March 1, 2027"
slug: online-store-script-tags-deprecated-2027
zdroj: https://shopify.dev/changelog/online-store-script-tags-deprecation
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-08-28

kategorie: [deprecation, breaking-change]
api_oblast: admin
api_verze: []
nalehavost: vysoka
customer_facing: false

ucinnost_od: 2026-08-24
deprecation_do: 2027-03-01
migrace_doporucena_do: 2026-10-01

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá starší analytics/tracking apps nebo custom app, které injektují JS na storefront přes ScriptTag API, je nutné ověřit a naplánovat migraci na Web Pixels API nebo Theme App Extensions ještě před 1. 3. 2027."
dotcene_klienty: []
souvisejici: [shopify-scripts-deprecated-june-2026, expiring-offline-tokens-all-public-apps-2027, editions-spring-2026-developer]

tldr: "Online Store Script Tags (ScriptTag API) přestanou od 1. 3. 2027 fungovat; mutace scriptTagCreate/scriptTagUpdate vrací chyby už od 1. 10. 2026 — migrace na Web Pixels API (analytics) nebo Theme App Extensions (UI/funkcionalita) je nutná."

kontext:
  background: |
    Script tags jsou legacy mechanismus, kterým aplikace historicky injektovaly vlastní JavaScript přímo do storefrontu obchodu — bez nutnosti zasahovat do kódu tématu. Fungovalo to přes REST resource ScriptTag a GraphQL mutace `scriptTagCreate` / `scriptTagUpdate` s `display_scope` nastaveným na `online_store`. Typicky se tímto způsobem nasazovaly starší analytics a tracking pixely nebo drobné UI úpravy storefrontu, které app nechtěla řešit přes theme kód.

    Shopify tento mechanismus ruší ve dvou krocích. Od 1. října 2026 začnou mutace `scriptTagCreate` a `scriptTagUpdate` vracet user errors — existující script tags ale zatím dál běží beze změny. Od 1. března 2027 pak Shopify přestane injektované skripty na storefrontu spouštět úplně, takže jakýkoli kód spoléhající na script tags přestane fungovat bez ohledu na to, jestli byl vytvořen dřív. (Script tags s `display_scope` na `order_status` mají samostatnou, dřívější deprecaci a tímto changelogem nejsou dotčené.)

    Náhrada se dělí podle účelu. Pro analytics a conversion tracking je určené **Web Pixels API** — nevyžaduje žádnou akci merchanta, pixel se instaluje automaticky s app. Pro UI a funkční rozšíření storefrontu (widgety, custom prvky v témě) jsou určené **Theme App Extensions** přes app embed blocks — ty ale merchant musí aktivovat v theme editoru, což je oproti současnému "zero-touch" script tagu extra krok při onboardingu i při upgradu existujících instalací.
  zdroje:
    - title: "Shopify: Script tags are deprecated and will stop running on March 1, 2027"
      url: "https://shopify.dev/changelog/online-store-script-tags-deprecation"
    - title: "Shopify Scripts budou deprecated 30. 6. 2026"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-scripts-deprecated-june-2026/"
    - title: "Expirující offline tokens povinné pro VŠECHNY public apps od 1. 1. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5

tagy: [online-store, script-tags, deprecation, web-pixels, theme-app-extensions, action-required, "2027-03-01"]
---

## Co se mění

Shopify ukončuje podporu **Online Store Script Tags** — starší způsob, jak apps injektovaly vlastní JavaScript na storefront bez zásahu do theme kódu, přes REST ScriptTag resource a GraphQL mutace `scriptTagCreate`/`scriptTagUpdate` s `display_scope: online_store`. Jde o dvoufázovou deprecaci: nejdřív se zablokuje vytváření a úprava nových script tags, následně přestanou fungovat i ty existující.

Náhrada závisí na účelu původního script tagu:

- **Analytics / conversion tracking** → **Web Pixels API** (žádná akce merchanta není potřeba, instaluje se automaticky s app)
- **UI prvky a funkcionalita v storefrontu** → **Theme App Extensions** (app embed blocks), které merchant aktivuje v theme editoru

Script tags s `display_scope: order_status` do tohoto changelogu nespadají — mají samostatnou, dřívější deprecaci.

## Časová osa

- **1. 10. 2026** — mutace `scriptTagCreate` a `scriptTagUpdate` (GraphQL i REST `POST`/`PUT`) začnou vracet user errors; existující script tags zatím dál běží beze změny
- **1. 3. 2027** — Shopify přestává injektovat a spouštět script tags na storefrontu úplně; veškerý kód, který na nich stavěl, přestane fungovat

## Dopad pro nás

**Pro vývojáře:** Pokud app (naše nebo třetí strana v ekosystému klienta) vytváří script tags s `display_scope: online_store`, je potřeba do 1. 10. 2026 přestat volat `scriptTagCreate`/`scriptTagUpdate` a najít náhradu — Web Pixels API pro tracking, Theme App Extensions (app embed block) pro UI/funkční kód. Migrace na Theme App Extensions znamená, že aktivace přechází z "zero-touch" (app si script tag nasadí sama) na krok, který musí provést merchant v theme editoru — je potřeba to zohlednit v onboarding flow a v komunikaci s klientem.

**Pro PM / PO:** Jde o `Action Required` položku s tvrdým deadline 1. 3. 2027 (a měkčím milníkem 1. 10. 2026, kdy se zablokuje tvorba nových script tags). Relevantní hlavně pro klienty s vlastními nebo staršími third-party apps, které mají legacy tracking pixely nebo drobné storefront customizace nasazené přes script tags — stojí za to při dalším auditu klientských apps zjistit, jestli se script tags používají, a pokud ano, naplánovat migraci s dostatečným předstihem před termínem.

## Použití v Integrátoru

**Možná** — přímo se nás týká jen tehdy, pokud u některého klienta stavíme nebo spravujeme app, která injektuje JS na storefront přes ScriptTag API. Doporučujeme prověřit klientské apps do 1. 10. 2026, než se zablokuje tvorba nových script tags.
