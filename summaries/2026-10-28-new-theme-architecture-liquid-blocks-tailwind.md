---
date: 2026-10-28
title: "Nová theme architektura — Liquid blocks s typed contracts, partial updates, built-in Tailwind"
title_en: "New theme architecture (Liquid blocks + Tailwind)"
slug: new-theme-architecture-liquid-blocks-tailwind
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se Liquid themes: pokud pro obchody stavíme nebo upravujeme theme, nová architektura mění způsob, jakým se skládá stránka, jak se v ní používají bloky a jak ji čtou AI agenti. Editions k ní neuvádí žádné API pro integrace, takže přímé použití v našich modulech zatím nevidíme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "liquid-block-partial-tags-preview", "shopify-canvas-whole-store-designer"]
editions_release: fall-2026
tldr: "Shopify na Editions Fall '26 ukazuje novou architekturu témat pro online store: stránky se skládají v Liquid z bloků s typovanými kontrakty a dílčími aktualizacemi, Markdown soubory vedou AI agenty a Tailwind styling je zabudovaný. Podle poznámky na stránce se na ní staví nový způsob úprav online store. Odkaz míří do dokumentace developer preview, takže jde o experimentální základ bez termínu GA a bez migrační cesty pro stávající themes."
tagy: [themes, liquid, blocks, tailwind, developer-preview, agents, architecture]
zdroj_kanal: editions
kontext:
  background: |
    Dosavadní Shopify theme stojí na modelu sections, bloků, snippetů a JSON templates. Struktura jedné stránky je rozprostřená do více souborů a formátů (Liquid, JSON schema, JSON template) a spojuje se přes tagy jako render. Tento model je zavedený a funguje, ale špatně se čte jako celek, což komplikuje práci lidem i AI coding agentům, kteří potřebují pochopit celou stránku najednou.

    V červenci 2026 Shopify v developer preview představil nové Liquid tagy block a partial. Tag block renderuje znovupoužitelné theme blocks s pojmenovanými vstupy a obsahem těla, tag partial definuje serverem renderované HTML regiony, které lze přes JavaScript obnovit bez reloadu celé stránky. K tomu přibyla nová pravidla Theme Check. Šlo o alternativní model kompozice, existující themes zůstávaly beze změny. Samostatný článek je v archivu: Liquid block a partial tagy.

    Editions Fall '26 (motto Exponential) tuto linii zasazuje do širšího rámce jako položku New theme architecture v části Developer, v bloku storefronty. Stránka ji shrnuje větou, že stránky se skládají v Liquid z bloků, typovaných kontraktů a dílčích aktualizací, že agenty lze vést pomocí Markdown souborů a že Tailwind styling je zabudovaný. Poznámka pod položkou říká, že nový způsob úprav online store je postavený na této architektuře, a odkazuje na sekci Canvas. Tlačítko vede do dokumentace, jejíž cesta obsahuje developer-preview. Podobně Markdown soubory zmiňuje i téma Sidekick: učí Sidekick, jak je theme postavený.

    Co stránka neříká: neuvádí datum GA ani oficiální stav dostupnosti, neuvádí, jak se typované kontrakty zapisují a co přesně kontrolují, jak funguje zabudovaný Tailwind (build krok, výstup CSS, vztah k automatickému CSS subsettingu) a zda bude architektura fungovat s Theme Store themes, app blocks a theme app extensions. Obsah o partial updates a pojmenovaných vstupech vychází z červencového developer preview, jde o náš výklad, že Fall '26 popisuje stejný základ. Přesné chování je nutné ověřit v dev docs.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify dev docs: Themes developer preview"
      url: "https://shopify.dev/docs/storefronts/themes/getting-started/developer-preview"
    - title: "Archiv: Liquid block a partial tagy — kompozice šablon (developer preview)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/liquid-block-partial-tags-preview/"
    - title: "Archiv: Canvas — whole-store designer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-canvas-whole-store-designer/"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Na Editions Fall '26 je v části Developer položka **New theme architecture**. Shopify ji popisuje jako způsob, jak **skládat stránky v Liquid z bloků, typovaných kontraktů a dílčích aktualizací**. K tomu dodává, že **AI agenty lze vést Markdown soubory** a že je **zabudovaný Tailwind styling**.

Z těch čtyř prvků je potřeba rozlišit, co vychází ze zdroje a co z našeho výkladu:

- **Liquid stránky skládané z bloků** — stránka se sestavuje přímo z bloků v Liquid, ne přes kombinaci sections, snippetů a JSON templates. Navazuje na tagy `{% block %}` a `{% partial %}` z [červencového developer preview](/Shopify_news_magexo/zmena/liquid-block-partial-tags-preview/).
- **Typované kontrakty (typed contracts)** — Editions je uvádí jen jako pojem. Jak se zapisují a co kontrolují, stránka nepopisuje. V červenci preview zmiňovalo pojmenované vstupy bloků a pravidla Theme Check pro soulad se schématem, což s tím pravděpodobně souvisí, ale je to náš odhad k ověření v dokumentaci.
- **Dílčí aktualizace (partial updates)** — podle červencového preview jde o serverem renderované HTML regiony, které lze přes JavaScript obnovit bez reloadu celé stránky (typicky košík nebo filtry). Že se překreslí jen změněné bloky, je rozumné čtení tohoto mechanismu, ne doslovné tvrzení Editions.
- **Markdown soubory pro agenty a zabudovaný Tailwind** — Markdown soubory slouží jako vodítko pro AI agenty, aby věděli, jak je theme postavený. Tailwind je součást architektury, takže styling nemusí řešit každý theme vlastním řešením. Vztah k dosavadním `{% stylesheet %}` tagům a automatickému CSS subsettingu stránka neuvádí.

**Souvislost s úpravami online store:** poznámka pod položkou říká, že nový způsob úprav online store je postavený na této architektuře, a odkazuje na sekci Canvas na stejné stránce. Canvas jsme popsali [při spuštění](/Shopify_news_magexo/zmena/shopify-canvas-bespoke-store-design/) i [v rámci Fall '26](/Shopify_news_magexo/zmena/shopify-canvas-whole-store-designer/). Z toho vyplývá, že architektura je technický základ pro nové editační prostředí vedle dnešního theme editoru. Zda jde výhradně o Canvas, nebo o další editor, stránka neříká.

**Stav:** odkaz vede do dokumentace developer preview a stránka sama nezmiňuje GA. Počítáme proto s experimentálním stavem bez záruky stabilního API. Podle červencového preview jde o **alternativní model, ne náhradu** sections a bloků: existující themes měly fungovat beze změny. Fall '26 tento slib nepotvrzuje ani nemění.

## Časová osa

- **2026-07-21** — developer preview Liquid tagů `{% block %}` a `{% partial %}`, dostupné na development store s Liquid July '26 preview a na skeleton theme release candidate
- **2026-10-01** — spuštění Canvasu, který zapisuje kód do souborů theme (omezení první fáze: Theme Store themes, Markets, translations, app blocks a app embeds)
- **2026-10-28** — Editions Fall '26 řadí novou architekturu témat mezi položky Developer a uvádí odkaz na dokumentaci developer preview
- **Bez data** — GA architektury, podpora Theme Store themes, app blocks a theme app extensions, migrační cesta ze stávajících themes a podrobný popis typovaných kontraktů a Tailwindu; stránka datum neuvádí, stav sledovat v dev docs a changelogu

## Dopad pro nás

**Pro vývojáře:** Nic se nemusí měnit hned, stávající themes fungují dál. Doporučujeme:

1. Projít dokumentaci developer preview a vyzkoušet architekturu na development store, ne na produkčním obchodu. Zjistit, jak vypadají typované kontrakty, co dělá zabudovaný Tailwind a jak se partial updates chovají proti dnešním AJAX a section rendering řešením v košíku a filtrech.
2. Ověřit kompatibilitu s tím, co v theme běžně používáme: app blocks, theme app extensions, překlady a Markets. Canvas to při spuštění nepodporoval a Fall '26 nic nového neslibuje.
3. Posoudit, jak se nový model bude hodit pro práci s coding agenty. Markdown soubory a jednotná struktura stránky mohou zlepšit spolehlivost úprav, ale je to zatím hypotéza.
4. U obchodů, kde theme držíme v repozitáři a nasazujeme přes CLI nebo GitHub, počítat s rizikem driftu, pokud merchant začne měnit kód mimo náš proces přes nové editační prostředí. Ověřit na vývojovém obchodu, jak lze takové theme verzovat.
5. Pokud používáme vlastní build Tailwindu v theme, sledovat, zda ho zabudovaná varianta nahradí, nebo s ním bude kolidovat.

**Pro PM / PO:** Nemá to zákaznický dopad a není potřeba nic komunikovat merchantům. Jde o směr vývoje theme systému, ne o termínovanou změnu. Doporučujeme:

- U nových theme zakázek v nejbližších měsících zůstat u ověřené architektury sections a bloků a preview nenabízet jako produkční řešení.
- Sledovat oznámení o GA a o podpoře Theme Store themes a aplikací, protože ta rozhodne, zda se architektura stane výchozí volbou.
- Počítat s tím, že pokud se architektura ujme, změní se způsob odhadování theme práce (méně rozprostřených souborů, více práce s agenty), ale bez ověřených čísel s tím neplánovat úsporu.
- Souvislost s Canvasem a Sidekickem je příležitost k tématu školení merchantů a ke zpřesnění nabídky úprav vzhledu, viz [Canvas](/Shopify_news_magexo/zmena/shopify-canvas-whole-store-designer/).

## Použití v Integrátoru

Zatím nepoužíváme: jde o architekturu storefront themes, ne o API pro integrace. Relevantní je jen pro případné theme zakázky a pro posouzení, jak nové editační prostředí zasáhne do theme kódu u obchodů, které spravujeme.

## ⬅️ Zpět na hub

[Editions Fall '26 — Developer](/Shopify_news_magexo/zmena/editions-fall-2026-developer/) · [Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
