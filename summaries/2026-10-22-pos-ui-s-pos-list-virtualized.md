---
date: 2026-10-22
title: "POS UI 2026-10: <s-pos-list> — virtualized list komponenta s custom row templates"
title_en: "POS UI extensions 2026-10 adds s-pos-list, a virtualized list with custom row templates"
slug: pos-ui-s-pos-list-virtualized
zdroj: https://shopify.dev/changelog/posts/pos-ui-extensions-2026-10-adds-s-pos-list-a-virtualized-list-with-custom-row-templates
shrnuto_dne: 2026-10-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom v POS UI extension zobrazovali delší seznam (produkty, zákazníci, objednávky) na API verzi 2026-10, je <s-pos-list> správná volba místo mapování řádků do s-scroll-box."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-offline, pos-ui-extensions-2026-07-per-unit-discounts, pos-ui-cart-mutations-reject-unconfirmed-2026-10, pos-extension-screen-navigation-detect]
tldr: "POS UI extensions v API verzi 2026-10 (POS 11.17.0 a novější) mají novou komponentu <s-pos-list>, která recykluje views řádků při scrollování a umožňuje vlastní row templates; nahrazuje starý List a řeší pomalé nebo neúspěšné zobrazení velmi dlouhých seznamů."
tagy: [pos-ui-extensions, virtualized-list, performance, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions umožňují aplikacím vkládat vlastní obrazovky, dlaždice a modály přímo do Shopify POS. Uživatelské rozhraní se v nich skládá z Polaris web components (elementy s prefixem `s-`, například `s-text`, `s-badge` nebo `s-image`). Starší komponenta `List` skončila s API verzí 2025-07 a Polaris web components do teď žádnou list komponentu neměly. Kdo v extension zobrazoval seznam produktů, zákazníků nebo objednávek, musel řádky namapovat do `s-scroll-box`.

    Právě tento přístup je problém u větších dat. Mapování řádků do `s-scroll-box` vytvoří view pro každý jednotlivý řádek, takže doba zobrazení i paměťová náročnost rostou s délkou seznamu a velmi dlouhé seznamy se někdy nepodaří zobrazit vůbec. Nová komponenta `s-pos-list` je virtualized: recykluje views řádků podle toho, jak uživatel scrolluje, takže existuje jen tolik views, kolik je potřeba pro viditelnou část seznamu. Řádky se předávají jako obyčejná data a pro každý typ řádku se definuje vlastní šablona z web components, díky čemuž lze v jednom seznamu míchat nadpisy, oddělovače i běžné řádky s obsahem.

    Komponenta vyžaduje extension na API verzi 2026-10 a Shopify POS 11.17.0 nebo novější. Starší API verze včetně 2026-07 ji neobsahují a extensions, které zůstanou na starší verzi nebo dál používají `List`, nejsou ničím dotčené, takže změna nevyžaduje žádnou akci. Shopify uvádí test na iPadu s čipem A16: při nejsložitějším layoutu řádku z komponenty `List` zobrazil a scrolloval `s-pos-list` velké seznamy stejně rychle jako `List` z API verze 2025-07. Changelog přitom neobsahuje úplný přehled props ani ukázky kódu, proto je pro implementaci nutné vycházet z reference komponenty.
  zdroje:
    - title: "Shopify: POS UI extensions 2026-10 adds s-pos-list, a virtualized list with custom row templates"
      url: "https://shopify.dev/changelog/posts/pos-ui-extensions-2026-10-adds-s-pos-list-a-virtualized-list-with-custom-row-templates"
    - title: "Shopify: POS list component reference (POS UI extensions 2026-10)"
      url: "https://shopify.dev/docs/api/pos-ui-extensions/2026-10/web-components/layout-and-structure/pos-list"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění
POS UI extensions v API verzi **2026-10** dostaly novou komponentu **`<s-pos-list>`**. Jde o **virtualized list**: renderují se jen viditelné řádky a views řádků se při scrollování recyklují. Řádky se komponentě předávají jako plain data a každý druh řádku má vlastní **row template** postavený z web components, takže jeden seznam může kombinovat nadpisy, oddělovače a obsahové řádky.

Komponenta nahrazuje starý `List`, který skončil s API verzí 2025-07. V Polaris web components dosud žádná list komponenta nebyla, takže se řádky mapovaly do `s-scroll-box`. To vytváří view pro každý řádek, a doba zobrazení i paměť proto rostou s velikostí seznamu. `s-pos-list` tento problém řeší recyklací views.

Podle changelogu odpovídají staré props těmto novým konstruktům:

- **`data` → `rows`:** každý řádek si ponechá `id` a přidá `templateFor`, který určuje použitou šablonu.
- **`leftSide` / `rightSide` → row templates:** šablony se skládají například z `s-image`, `s-text`, `s-badge` a `s-switch`. Pro řádky, které dřív neměly `onPress`, slouží šablona s `type="text"`.
- **Row-level `onPress` → `onRowClick`:** klepnutý řádek se čte z `event.detail.item`.
- **`isLoadingMore` / `onEndReached` → `loadingMore` / `onLoadMore`.**
- **`listHeaderComponent` → child element se `slot="header"`:** například vyhledávací pole. Header se scrolluje spolu s řádky.
- **`title` → `s-heading` nad seznamem:** zůstává pevně na místě, zatímco se řádky scrollují.
- **`imageDisplayStrategy` → řeší šablona:** oblast pro obrázek se buď vykresluje vždy, nebo se obalí do `{{#if}}` nad polem řádku.

V testu na iPadu (A16) s nejsložitějším layoutem řádku z `List` zobrazil a scrolloval `s-pos-list` velké seznamy stejně rychle jako `List` z API verze 2025-07.

## Časová osa
- **8. října 2026** — záznam v changelogu vytvořen (podle metadat postu).
- **12. října 2026** — efektivní datum změny.
- **22. října 2026** — post zveřejněn a aktualizován.
- **Nadále** — komponenta je dostupná jen v API verzi 2026-10 a na Shopify POS 11.17.0 a novějším. Starší API verze (včetně 2026-07) ji neobsahují a existující extensions fungují beze změny.

## Dopad pro nás
**Pro vývojáře:** Pokud budeme psát POS UI extension se seznamem, který může narůst (katalog produktů, zákazníci, objednávky), je `s-pos-list` na API verzi 2026-10 preferovaná cesta místo mapování do `s-scroll-box`. Přechod z `List` není přepis jedna ku jedné: je potřeba přemapovat props podle seznamu výše a layout řádků postavit znovu jako templates. Při přechodu na 2026-10 testujte na POS 11.17.0 nebo novějším, zda se dlouhé seznamy načítají a scrollují očekávaně, a před adopcí ověřte, jakou verzi POS mají zařízení daného obchodu. Souběžně stojí za to projít další změny téže API verze, například odmítání nepotvrzených Cart API mutací a nový event `navigatesuccess`.

**Pro PM / PO:** Akce není vyžadována a nic se nerozbije. Jde o příležitost pro merchanty s rozsáhlými katalogy nebo seznamy v POS extensions: plynulejší scrollování a menší riziko, že se velký seznam vůbec nezobrazí. Cena je jednorázová práce na přepsání row layoutů, takže má smysl spojit ji s plánovanou adopcí API verze 2026-10 a nedělat ji izolovaně.

## Použití v Integrátoru
**Možná dotčeno** — POS UI extensions přímo nevyvíjíme, ale pokud by taková extension vznikla a zobrazovala delší seznamy na API verzi 2026-10, použijeme `s-pos-list` s row templates místo mapování řádků do `s-scroll-box`.
