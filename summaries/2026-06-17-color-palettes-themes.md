---
date: 2026-06-17
title: "Color palettes v Themes: nový color_palette setting type"
title_en: "Color palettes in Themes — new color_palette setting type"
slug: color-palettes-themes
zdroj: https://shopify.dev/changelog/color-palettes
shrnuto_dne: 2026-06-19
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienty stavíme nebo upravujeme theme, color_palette zjednodušuje správu barev na jednom místě místo roztroušených color scheme nastavení."
dotcene_klienty: []
souvisejici:
  - "redesigned-theme-editor-navigation"
  - "customize-themes-per-market"
  - "rollouts-schedule-ab-test-themes-checkout"
tldr: "Shopify přidává nový typ nastavení color_palette do themes, který merchantům umožňuje spravovat barvy celého theme z jednoho centrálního místa."
tagy: [theme, design, color-palette, settings]
zdroj_kanal: dev-changelog
kontext:
  background: |
    `color_palette` je nový input setting type pro Shopify themes, který zavádí centralizovanou barevnou paletu. Merchant ji edituje na jednom místě jako mřížku pojmenovaných barev (2–20 barev ve formátu hex), přičemž každá změna se automaticky propisuje do celého theme — bez nutnosti procházet jednotlivé sections nebo bloky.

    Dosud se barvy spravovaly přes tzv. color schemes, kde každé schema definovalo vlastní sadu barev a developer je musel ručně synchronizovat napříč theme. Nová paleta tento vzor nahrazuje: v `settings_schema.json` se definuje jeden objekt `color_palette` s pojmenovanými klíči (např. `primary`, `secondary`, `accent`), které pak slouží jako výchozí hodnoty pro jakékoliv `color` nebo `color_background` nastavení v libovolné section nebo bloku.

    Z hlediska Liquid přístupu stačí `{{ settings.colors.primary }}` — každý barevný klíč vrací plnohodnotný color object se všemi filtry. Merchant může barvy z palety přepsat lokálně na úrovni section nebo bloku, takže flexibilita zůstává zachována. Klíče přidané při aktualizaci theme se v merchantově paletě objeví automaticky; pokud merchant barvu smaže, Shopify ho vyzve k výběru náhrady.

    Color schemes i nadále fungují, takže existující themes žádnou změnu nevyžadují. Shopify však avizuje, že budoucí vývoj platform-side se bude soustředit na palety, nikoliv na starý systém color schemes. Pro nové themes a Theme Store submissions je použití palet doporučenou, nikoli povinnou praxí.
  zdroje:
    - title: "Shopify Changelog: Color palettes in Themes — new color_palette setting type"
      url: "https://shopify.dev/changelog/color-palettes"
    - title: "Shopify Docs: color_palette input setting"
      url: "https://shopify.dev/docs/themes/architecture/settings/input-settings#color_palette"
  generated_at: 2026-06-19T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přidává nový typ nastavení `color_palette` pro theme `settings_schema.json`. Jedná se o objekt pojmenovaných hex barev (2–20 položek), který tvoří centrální paletu celého theme.

**Klíčové vlastnosti:**

- Definuje se výhradně v `settings_schema.json` (ne v sections), s povinnými atributy `type`, `id` a `default`.
- Podporuje pouze standardní atribut `id` — `label`, `info` ani `visible_if` nejsou k dispozici.
- Klíče musí začínat písmenem a obsahovat jen písmena, číslice a podtržítka; hodnoty jsou hex barvy bez alpha kanálu.
- V Liquid je přístup přes `{{ settings.<id>.<key> }}`, iterace přes `{% for color in settings.<id> %}`.
- Barvy palety lze použít jako výchozí hodnotu pro libovolné `color` nebo `color_background` nastavení syntaxí `"default": "{{ settings.colors.primary }}"`.

**Příklad definice palety:**

```json
{
  "type": "color_palette",
  "id": "colors",
  "default": {
    "primary": "#121212",
    "secondary": "#FFFFFF",
    "accent": "#FF4416"
  }
}
```

**Chování při aktualizacích:** Nové klíče přidané vývojářem se merchantovi automaticky zobrazí s výchozí hodnotou. Merchantem upravené barvy mají přednost. Při smazání barvy merchantem Shopify nabídne výběr náhrady.

Color schemes zůstávají plně funkční — žádná breaking change pro stávající themes.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-17 | Oznámení v Shopify Changelog |
| 2026-06-30 | Feature dostupná (účinnost od) |
| Budoucnost | Shopify bude dále rozvíjet palety místo color schemes |

## Dopad pro nás

Změna se týká výhradně theme developmentu — backendu, API ani Integrátoru se netýká. Pokud pro klienty vyvíjíme nebo upravujeme custom theme, nový `color_palette` setting zjednodušuje správu barevné identity:

- Merchant má jedno místo pro editaci barev místo procházení desítek color scheme nastavení.
- Vývojář má čistší architekturu — barvy se definují jednou a referencují všude.
- Stávající themes nevyžadují žádnou migraci, color schemes i nadále fungují.

Nalehavost je nízká — jde o novou možnost, ne o povinnou změnu. Relevantní při tvorbě nových themes nebo při větším redesignu existujících.

## Použití v Integrátoru

`color_palette` je čistě theme-side feature bez přímého dopadu na Integrátor. Pokud ale Integrátor generuje nebo importuje theme konfiguraci (např. při onboardingu klienta nastavuje barvy přes Theme API), je vhodné do budoucna počítat s tím, že nové themes budou používat `color_palette` místo color scheme objektů. Struktura settings_data.json se tak změní — místo více scheme objektů bude jeden palette objekt.
