---
date: 2026-09-22
title: "Polaris CDN 1.1 je stable — RC z 31. 8. přechází na production"
title_en: "Polaris CDN 1.1 is now stable"
slug: polaris-cdn-1-1-stable
zdroj: https://shopify.dev/changelog/polaris-cdn-1-1-is-now-stable
shrnuto_dne: 2026-09-25
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme admin/checkout UI extensions na Polaris web components, stabilní 1.1 přináší nové komponenty a opravy formulářových prvků, které stojí za otestování na produkci."
dotcene_klienty: []
souvisejici: [polaris-cdn-1-1-release-candidate, polaris-cdn-semantic-versioning, polaris-web-components-migration-guides]
tldr: "Release candidate Polaris CDN 1.1 z konce srpna je teď stable a apps na něj mohou bez zásahu upgradovat na produkci."
tagy: [polaris, cdn, "1.1", stable, ui-components]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Koncem srpna 2026 vydal Shopify release candidate verze 1.1 pro Polaris Web Components distribuované přes CDN — první release, kde se naplno projevil nově zavedený semantic versioning tohoto kanálu. Po několika týdnech testování RC větev prošla do stable a stává se výchozí verzí na produkčních URL `polaris.js` a `polaris-1.js`.

    Přechod na stable přináší stejný obsah, jaký byl v RC: dvě nové komponenty — EmptyState pro prázdné seznamy, tabulky a stránky (se speciálním chováním uvnitř TableBody) a Number pro tabulkově zarovnané číselné hodnoty — a rozšíření existujících komponent o fontSize (Heading, Paragraph, Text), visibleMonths na DatePickeru (auto/1/2) a supplementalStart na Page. Vlastnost fontVariantNumeric na Text a Paragraph zůstává funkční, ale je nahrazována komponentou Number. Velkou část changelogu tvoří desítky bug fixů v overlay komponentách (Modal, Popover, Menu, Tooltip) a formulářových prvcích (DatePicker, Select, NumberField, TextArea, DateField, ColorPicker) — jde hlavně o správu focusu, event handling, pozicování a lokalizaci.

    Díky semantic versioningu je upgrade z RC na stable typicky drop-in — appky napojené na stabilní major URL dostanou novou minor verzi automaticky, bez nutnosti měnit kód. Vývojáři, kteří potřebují jistotu neměnného chování, si mohou místo toho přišpendlit konkrétní verzi přes `polaris-1.1.js`. Jediné riziko je u komponent s vlastním custom stylingem přes overlay nebo formulářové prvky, kde stojí za to bug fixy rychle zkontrolovat.
  zdroje:
    - title: "Shopify: Polaris CDN 1.1 is now stable"
      url: "https://shopify.dev/changelog/polaris-cdn-1-1-is-now-stable"
    - title: "Shopify: Polaris CDN 1.1 release candidate"
      url: "https://shopify.dev/changelog/polaris-cdn-1-1-release-candidate"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Release candidate Polaris CDN 1.1, který Shopify zveřejnil 31. 8. 2026, právě přešel do stable a stal se výchozí verzí na produkčních CDN URL. Nejde o žádnou novou funkcionalitu oproti RC — obsah je stejný, mění se jen status: appky napojené na stabilní major větev (`polaris.js`, `polaris-1.js`) dostávají 1.1 automaticky, bez nutnosti cokoliv měnit.

Novinkou jsou dvě komponenty — EmptyState pro prázdné seznamy a tabulky a Number pro zarovnané číselné hodnoty — plus rozšíření Heading/Paragraph/Text o fontSize, DatePickeru o visibleMonths a Page o supplementalStart. Property fontVariantNumeric se považuje za deprecated ve prospěch Number. Zbytek changelogu tvoří rozsáhlá sada bug fixů kolem focusu, event handlingu, pozicování a lokalizace v overlay a formulářových komponentách.

Díky semantic versioningu (zavedenému 18. 8. 2026) je přechod typicky bezproblémový drop-in upgrade. Jediné, co stojí za kontrolu, jsou komponenty s vlastním custom stylingem postaveným nad overlay nebo formulářovými prvky — tam mohly opravy chování mírně změnit vizuál nebo interakci.

## Časová osa

- 2026-08-31 — zveřejněn release candidate Polaris CDN 1.1
- 2026-09-22 — RC přechází do stable, výchozí verze na production CDN URL
- volitelně — vývojáři mohou zůstat na `polaris-1.1.js` pro přišpendlenou verzi

## Dopad pro nás

**Pro vývojáře:** Pokud appka nebo extension natahuje Polaris Web Components z legacy `polaris.js` nebo stabilní `polaris-1.js` URL, upgrade proběhne automaticky. Stojí za to na stagingu/produkci rychle proklikat komponenty s vlastním custom stylingem (hlavně modaly, popovery, DatePicker, Select) kvůli opraveným bug fixům z RC fáze. Novou komponentu Number má smysl nasadit všude, kde dosud řešíme zarovnání čísel přes fontVariantNumeric.

**Pro PM / PO:** Nízká urgentnost, čistě vývojářská záležitost bez dopadu na klienty ani termíny. Užitečné je vědět, že jde o první minor upgrade v novém semantic versioning schématu — tedy přesně ten typ změny, který by podle nového pravidla neměl nic rozbít.

## Použití v Integrátoru

Přímý dopad zatím nemáme, protože nejde o vlastní e-shop, ale pokud stavíme admin nebo checkout UI extensions na Polaris web components, stojí za to po přechodu na stable ověřit chování formulářových prvků a overlay komponent v produkci.
