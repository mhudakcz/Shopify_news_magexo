---
date: 2026-08-31
title: "Polaris CDN 1.1 release candidate"
title_en: "Polaris CDN 1.1 release candidate"
slug: polaris-cdn-1-1-release-candidate
zdroj: https://shopify.dev/changelog/polaris-cdn-1-1-release-candidate
shrnuto_dne: 2026-09-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-31
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme admin/checkout UI extensions na Polaris web components, RC verze ukazuje, co přijde v dalším stabilním release a co se mění v chování formulářových prvků."
dotcene_klienty: []
souvisejici: [polaris-web-components-migration-guides, removing-outdated-polaris-docs, shopify-ai-toolkit-polaris-migration]
tldr: "Shopify vydal release candidate Polaris CDN 1.1 s novými komponentami a desítkami bug fixů, které lze otestovat přes RC URL ještě před oficiálním vydáním."
tagy: [polaris, cdn, "1.1", release-candidate, ui-components]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Polaris Web Components se od nedávna distribuují přes Shopify CDN a s verzí 1.1 přichází poprvé pořádné zavedení semantic versioningu pro tento kanál. To znamená, že aplikace budou moct cílit na konkrétní major/minor verzi a nebudou překvapené neohlášenou změnou chování pod kapotou. Release candidate slouží přesně k tomu, aby si vývojáři vyzkoušeli nadcházející verzi ještě předtím, než se stane výchozí.

    RC 1.1 přináší dvě nové komponenty: EmptyState pro prázdné seznamy, tabulky a stránky (se speciálním chováním uvnitř TableBody) a Number pro číselné hodnoty s tabulkovými číslicemi, díky nimž se sloupce čísel pěkně zarovnají pod sebou. Zároveň se rozšiřují existující komponenty — fontSize přibylo na Heading, Paragraph a Text, DatePicker dostal vlastnost visibleMonths (auto/1/2) a Page nově podporuje supplementalStart pro obsah před hlavním obsahem stránky. Vlastnost fontVariantNumeric na Text a Paragraph se naopak označuje jako deprecated ve prospěch nové komponenty Number.

    Největší část changelogu ale tvoří oprava chyb — týká se overlay komponent (Modal, Popover, Menu, Tooltip) i formulářových prvků (DatePicker, Select, NumberField, TextArea, DateField, ColorPicker), konkrétně správy focusu, event handlingu, pozicování a lokalizace. Pro testování je k dispozici samostatná RC URL (https://cdn.shopify.com/shopifycloud/polaris-1.1-rc.js), takže production aplikace zůstávají nedotčené, dokud tým sám nepřepne na novou verzi.
  zdroje:
    - title: "Shopify: Polaris CDN 1.1 release candidate"
      url: "https://shopify.dev/changelog/polaris-cdn-1-1-release-candidate"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify vydává release candidate verze 1.1 pro Polaris Web Components distribuované přes CDN. Jde o první release, kde se pořádně projevuje semantic versioning tohoto distribučního kanálu — aplikace si tak budou moct řídit, na jakou verzi cílí, a nebudou vystaveny nečekaným změnám chování při běžném refresh cache.

Přibývají dvě nové komponenty (EmptyState pro prázdné stavy seznamů a tabulek, Number pro zarovnané číselné hodnoty) a rozšiřují se stávající — fontSize na typografických elementech, visibleMonths na DatePickeru a supplementalStart na Page. Zároveň se deprecatuje fontVariantNumeric ve prospěch nové komponenty Number. Většinu obsahu changelogu ale tvoří rozsáhlá sada bug fixů v overlay komponentách a formulářových prvcích — týkají se focusu, event handlingu, pozicování a lokalizace, tedy přesně těch věcí, které umí v produkci nejvíc bolet.

Pro testování je k dispozici samostatná RC URL, takže aplikace mohou verzi vyzkoušet, aniž by ovlivnily production provoz postavený na aktuální stabilní verzi.

## Časová osa

- 2026-08-31 — zveřejněn release candidate Polaris CDN 1.1, k dispozici RC URL pro testování
- dále — očekává se, že po testovací fázi RC přejde do GA (přesné datum GA changelog neuvádí)

## Dopad pro nás

**Pro vývojáře:** Pokud máme app home nebo extensions postavené na Polaris web components z CDN, stojí za to RC 1.1 vyzkoušet na stagingu — hlavně kvůli bug fixům v DatePickeru, Selectu a dalších form controls, které se dřív mohly projevovat jako drobné UX bugy (focus, pozicování dropdownů). Nová komponenta Number je vhodná náhrada za fontVariantNumeric všude, kde zobrazujeme tabulky čísel.

**Pro PM / PO:** Jde o nízkou urgentnost a čistě vývojářskou záležitost — nemá dopad na klienty ani na termíny. Zajímavé je hlavně zavedení semantic versioningu, které do budoucna sníží riziko, že se nám CDN komponenty „samy" změní pod rukama bez upgrade kroku.

## Použití v Integrátoru

Přímý dopad zatím nemáme, protože nejde o produkční release. Pokud bychom stavěli admin nebo checkout UI extensions na Polaris web components, je vhodné RC verzi zařadit do testovacího plánu před tím, než se stane výchozí.
