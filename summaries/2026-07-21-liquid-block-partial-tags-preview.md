---
date: 2026-07-21
title: "Liquid: block a partial tagy — kompozice šablon (developer preview)"
title_en: "Liquid templates can now compose pages with blocks and partials"
slug: liquid-block-partial-tags-preview
zdroj: https://shopify.dev/changelog/developer-preview-liquid-block-and-partial-tags
shrnuto_dne: 2026-07-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Liquid theme developmentu — pokud bychom pro klienta stavěli nebo upravovali theme, nový composition model může zjednodušit re-use komponent oproti sections + snippets."
dotcene_klienty: []
souvisejici: [automatic-css-subsetting-stylesheet-tags, redesigned-theme-editor-navigation, customize-themes-per-market]
tldr: "Shopify zavádí v developer preview nové Liquid tagy `{% block %}` a `{% partial %}`, které umožňují skládat strukturu stránky přímo v šabloně místo přes sections a snippets."
tagy: [liquid, templates, blocks, partials, "theme-development", "developer-preview"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Liquid je šablonovací jazyk, na kterém stojí celý Shopify theme systém — soubory sekcí (sections), bloků (blocks) a útržků (snippets) se skládají dohromady přes JSON templates a tag `{% render %}`, aby vznikla výsledná stránka. Tento model funguje, ale rozděluje logiku jedné stránky do více souborů a formátů (Liquid, JSON schema, JSON template), což ztěžuje orientaci — zejména pro AI coding agenty, kteří potřebují pochopit celou strukturu stránky najednou.

    Developer preview přidává dva nové tagy přímo do jazyka Liquid. `{% block %}` renderuje znovupoužitelné theme blocks s pojmenovanými vstupy a obsahem těla — funguje podobně jako dnešní `{% render %}`, ale je navržen jako nativní stavební prvek kompozice, ne jen volání útržku. `{% partial %}` definuje serverem renderované HTML regiony, které lze přes JavaScript obnovit bez nutnosti reloadu celé stránky — hodí se typicky pro dynamické části jako je obsah košíku nebo filtrování produktů. Shopify k tomu zároveň rozšiřuje Theme Check o nová pravidla, která odhalí syntaktické chyby, nadměrnou komplexitu, příliš velké soubory nebo nesoulad se schématem.

    Prakticky jde o alternativní model kompozice, nikoli náhradu současné architektury — existující themes se sections, theme settings a JSON templates fungují beze změny dál. Vývojáři si mohou nový přístup vyzkoušet na development store s Liquid July '26 preview, případně na skeleton theme release candidate, a Shopify sbírá feedback přes komunitní fórum ještě před tím, než se rozhodne o dalším směru vývoje.
  zdroje:
    - title: "Shopify: Liquid templates can now compose pages with blocks and partials"
      url: "https://shopify.dev/changelog/developer-preview-liquid-block-and-partial-tags"
  generated_at: 2026-07-23T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify v **developer preview** přidává do Liquid dva nové tagy pro skládání stránek:

- **`{% block %}`** — renderuje znovupoužitelný theme block s pojmenovanými vstupy a obsahem těla, podobně jako dnešní `{% render %}`, ale jako nativní kompoziční prvek.
- **`{% partial %}`** — definuje serverem renderovanou HTML oblast, kterou lze přes JavaScript obnovit bez reloadu celé stránky (typicky pro dynamický obsah jako košík nebo filtry).

Cílem je, aby struktura stránky mohla žít přímo v jedné Liquid šabloně místo rozprostření přes sections, snippets a JSON templates — Shopify to prezentuje mimo jiné jako výhodu pro coding agenty, kteří tak vidí a upravují vše na jednom místě. Theme Check dostává nová pravidla pro validaci syntaxe, komplexity, velikosti souborů a souladu se schématem. Existující themes fungují beze změny — jde o alternativní model, ne o náhradu sections/blocks architektury.

## Časová osa
- **2026-07-21** — developer preview oznámen, dostupný na development store s Liquid July '26 preview a na skeleton theme release candidate

## Dopad pro nás

**Pro vývojáře:** Jde zatím o experimentální preview bez garance finální podoby API — nedává smysl nasazovat do produkčních klientských themes. Stojí za to sledovat, protože nový composition model může časem zjednodušit re-use komponent oproti dnešnímu skládání sections + snippets, hlavně u komplexnějších custom themes.

**Pro PM / PO:** Nemá zákaznický dopad — jde o interní vývojářský nástroj v rané fázi. Není potřeba komunikovat klientům, jen sledovat vývoj pro budoucí theme projekty.

## Použití v Integrátoru
Zatím nepoužíváme — jde o developer preview bez produkční stability. Relevantní by to bylo pouze u budoucích theme development zakázek, ne u naší integrace samotné.
