---
date: 2026-10-01
title: "Co je nového v Polaris 2.0.0-rc.1 (changelog release candidate)"
title_en: "What's new in Polaris 2.0.0-rc.1"
slug: polaris-2-0-0-rc-1-whats-new
zdroj: https://shopify.dev/changelog/posts/what-s-new-in-polaris-2-0-0-rc-1
shrnuto_dne: 2026-10-08
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo upravujeme embedded App Home UI na Polarisu, rc.1 přináší restyl Table, opravy layoutu Section/Page a rychlejší mounting, které stojí za ověření na stagingu před GA."
dotcene_klienty: []
souvisejici: [polaris-2-0-release-candidate, polaris-cdn-1-1-stable, shopify-admin-new-look-2026]
tldr: "Polaris 2.0.0-rc.1 přináší restyl Table a dalších komponent podle nového vzhledu adminu, opravy layoutu Section a Page, event handlingu a rychlejší mounting; changelog neuvádí žádné breaking changes ani GA datum."
tagy: [polaris, "2.0", release-candidate, ui-components, changelog]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Polaris 2.0 je nová major verze UI komponent pro embedded App Home rozhraní, která dotahuje vizuální redesign Shopify adminu z poloviny září. Samotný release candidate jsme v agregátoru popsali v overview článku z 24. 9. (opt-in migrace, CDN distribuce, CSS proměnná pro spodní safe area, deadline 1. 5. 2027 pro appky v programu Built for Shopify). Tento článek doplňuje detail z changelogu k verzi 2.0.0-rc.1, tedy co konkrétně se v kandidátské verzi změnilo na úrovni jednotlivých komponent.

    Changelog je organizovaný do tří částí. Část Components přináší restyl komponenty Table podle aktualizovaného vzhledu adminu, možnost umístit Tooltip do supplemental slotu komponenty Section, podporu karet stejné výšky v rámci jednoho Gridu, sjednocenou výšku Select s TextField a ostatními inputy, pilulkový tvar Badge na mobilu a drobné vizuální opravy (kontrast titulku Banneru, stín saturation-well u ColorPickeru v rozích). Část Layout řeší hlavně chování Section a Page na úzkých displejích a konzistentní spacing, včetně oprav slotovaných akcí a disclosure ikon při dynamickém vkládání markupu.

    Třetí část se týká spolehlivosti, stavu a výkonu: globální stav `globalThis.polaris` přežije opakované načtení bundlu na stejné stránce, akce v Modalu při nastaveném `commandFor` vyvolají bublající click, kliknutí na accessory v TextFieldu se dostane k React handlerům `onClick` a mounting i updaty jsou rychlejší, zejména na stránkách bez Reactu. Důležité je, co post neobsahuje: žádné API changes, breaking changes, migration notes oproti Polaris 1.x, instalační pokyny ani datum GA. Pole Action required je u záznamu nastaveno na No a datum 2. 10. 2026 je účinnost záznamu v changelogu, ne oznámení GA. Detailní migrační postup zůstává v dříve publikovaných guidech k přechodu z Polaris React na web components.
  zdroje:
    - title: "Shopify: What's new in Polaris 2.0.0-rc.1"
      url: "https://shopify.dev/changelog/posts/what-s-new-in-polaris-2-0-0-rc-1"
    - title: "Archiv: Polaris 2.0 release candidate — nová major verze UI komponent"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-2-0-release-candidate/"
    - title: "Archiv: Polaris CDN 1.1 je stable"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-cdn-1-1-stable/"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify zveřejnil v dev changelogu detailní výpis změn pro **Polaris 2.0.0-rc.1**. Release candidate přibližuje další komponenty aktualizovanému stylu adminu, opravuje chyby v layoutu a event handlingu a zrychluje mounting i updaty. Záznam je označený jako Polaris / Update, bez nutné akce a bez uvedených dotčených API.

**Komponenty**

- `Table` je přestylovaná podle nového vzhledu Shopify adminu.
- `Tooltip` lze umístit do supplemental slotu komponenty `Section`.
- `Section` podporuje karty stejné výšky v rámci jednoho `Grid`.
- `Select` má stejnou výšku jako `TextField` a další inputy.
- `Badge` má na mobilu pilulkový tvar.
- `Banner` má lepší kontrast titulku.
- `ColorPicker` má opravený stín saturation-well v rozích.

**Layout**

- Na úzkých displejích se primární akce komponenty `Section` přesouvá pod kartu.
- Nadpis a podnadpis `Section` mají těsnější spacing.
- Nadpisy aside `Section` používají výchozí barvu textu.
- Ikony v `Menu` používají v klidovém stavu sekundární barvu ikon.
- Je opraveno stylování aside `Section` na `Page`.
- Sekundární akce na `Page` a `Section` si drží disclosure ikonu, i když se `Menu` nebo label přidá až po mountu.
- První vnořená `Section` se zarovnává stejně jako ostatní první potomci.
- Slotované akce už nemizí, když se markup komponenty vloží do již připojeného elementu.

**Spolehlivost, stav a výkon**

- Stav `globalThis.polaris` zůstává zachovaný, pokud stránka načte bundle opakovaně.
- Akce v `Modal` vyvolají bublající click, pokud je nastaveno `commandFor`.
- Kliknutí na accessory v `TextField` se dostane k React handlerům `onClick`.
- Mounting a updaty jsou rychlejší, zejména na stránkách bez Reactu.
- Nesouvisející změny atributů vyvolávají méně re-renderů u `ChoiceList`, `Menu`, `Modal`, `Select` a pickerů.

**Co v postu chybí:** žádné API changes, breaking changes ani migration notes oproti Polaris 1.x, žádné instalační pokyny a žádné datum GA. Pokud potřebujete migrační detaily, drží se stále dříve publikované guidy a overview RC z 24. 9.

## Časová osa

- 2026-08-31 — release candidate Polaris CDN 1.1 (mezikrok před 2.0)
- 2026-09-15 — start rolloutu nového vzhledu Shopify adminu
- 2026-09-22 — Polaris CDN 1.1 přechází do stable
- 2026-09-24 — overview release candidate Polaris 2.0
- 2026-10-01 — publikován changelog k Polaris 2.0.0-rc.1 (účinnost záznamu uvedena jako 2. 10., poslední aktualizace 6. 10.)
- GA Polaris 2.0 — datum zatím nebylo oznámeno
- 2027-05-01 — deadline migrace pro appky v programu Built for Shopify (podle overview článku z 24. 9.)

## Dopad pro nás

**Pro vývojáře:** Relevantní jen tehdy, pokud máme nebo budeme mít embedded App Home na Polarisu a testujeme RC. Z changelogu stojí za pozornost hlavně restyl `Table`, změny v chování `Section` a `Page` na úzkých displejích (primární akce se přesouvá pod kartu), sjednocená výška `Select` s `TextField` a opravy event handlingu v `Modal` (`commandFor`) a `TextField` (accessory a `onClick`). Pokud máme vlastní CSS nebo theme nad Polaris komponentami, je vhodné projít vizuálně zejména tabulky, formuláře a stránky s aside sekcemi. Protože post neuvádí breaking changes ani migration notes, rizika nelze z changelogu vyčíst a je potřeba ověřit je na stagingu.

**Pro PM / PO:** Bez dopadu na běžící projekty a bez customer-facing změny. Nejde o akční položku (Action required: No), spíš o doplňující informaci pro týmy, které RC už testují. GA datum nebylo oznámeno, takže plánování vychází stále z deadlinu 1. 5. 2027 pro appky v programu Built for Shopify.

## Použití v Integrátoru

Přímý dopad zatím nemáme, protože nespravujeme vlastní embedded App Home appku na Polarisu. Změny by se nás týkaly, pokud bychom takovou appku v budoucnu stavěli nebo upravovali její Polaris theme.
