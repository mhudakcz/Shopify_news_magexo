---
date: 2026-08-06
title: "Standard storefront events a actions podporují cart attributes"
title_en: "Standard storefront events and actions now support cart attributes"
slug: standard-storefront-events-cart-attributes
zdroj: https://shopify.dev/changelog/events-and-actions-cart-attributes-support
shrnuto_dne: 2026-08-11
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme cart attributes (gift message, delivery instructions, custom personalizace) na Liquid storefrontu, nový event nahrazuje polling/DOM hacky čistým addEventListener."
dotcene_klienty: []
souvisejici: [standard-storefront-events-actions, app-pixel-activity-log, next-generation-events-preview]
tldr: "Standardní storefront action updateCart nově zpracovává i cart attributes a nový event shopify:cart:attributes-update se spustí při jejich změně, ať už ji provede app, theme nebo jiná app."
tagy: [storefront-events, cart-attributes, actions, platform]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Cart attributes jsou volitelná custom klíč-hodnota data navázaná na košík — typicky gift message, poznámka pro doručení, kód dárkového balení nebo jiná personalizační informace, kterou zákazník vyplní před checkoutem. Doteď šla tato data měnit jen přímým voláním Storefront API (cartAttributesUpdate mutation), bez jakéhokoli standardizovaného oznamovacího mechanismu pro okolní kód na stránce.

    To je problém v okamžiku, kdy na stránce běží víc nezávislých skriptů — vlastní app widget, theme JS a případně další třetí app — a každý potřebuje vědět, že se atributy změnily, aby mohl aktualizovat svoje UI. Bez eventu museli developeři buď pollovat cart state, nebo si mezi sebou domlouvat vlastní custom eventy, což je přesně ta fragmentace, kterou standard storefront events a actions (zavedený v květnu 2026) měl řešit.

    Tato změna rozšiřuje existující `updateCart` action a event systém tak, aby cart attributes byly first-class součástí stejného kontraktu jako cart lines. `updateCart` nyní přijímá i změny attributes a nový event `shopify:cart:attributes-update` se vyvolá pokaždé, když se atributy změní — nezávisle na tom, jestli update spustila vlastní app, theme, nebo konkurenční třetí app. Event nese kompletní novou sadu atributů plus promise reprezentující výsledek operace, takže UI může atributy zobrazit okamžitě (optimistic update) a v případě, že cart update odmítne, změnu vrátit zpět.

  zdroje:
    - title: "Shopify: Standard storefront events and actions now support cart attributes"
      url: "https://shopify.dev/changelog/events-and-actions-cart-attributes-support"
    - title: "Shopify docs: shopify:cart:attributes-update event"
      url: "https://shopify.dev/docs/api/storefront-events-and-actions/events/cart-attributes-update"
    - title: "Shopify docs: updateCart action"
      url: "https://shopify.dev/docs/api/storefront-events-and-actions/actions/update-cart"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Standard storefront events a actions — sdílená komunikační vrstva mezi Liquid themes a apps, kterou Shopify představil letos na jaře — se rozšiřuje o cart attributes.

**Action `updateCart`** nově umí atributy zapisovat stejně jako cart lines. Není tedy nutné volat samostatnou Storefront API mutaci vedle standardní action — obojí (lines i attributes) se řeší přes jedno rozhraní `Shopify.actions.updateCart`.

**Nový event `shopify:cart:attributes-update`** se spustí při jakékoli změně atributů, ať už k ní došlo přes standardní action, přímé Storefront API volání z jiné app, nebo z theme kódu. Payload obsahuje plnou novou sadu atributů a promise s výsledkem operace — app tak může UI aktualizovat hned (optimisticky) a případně vrátit zpět, pokud cart update na serveru selže.

Klíčový rozdíl oproti stavu před touto změnou: dřív neexistoval žádný standardizovaný způsob, jak se dozvědět, že se cart attributes změnily, pokud jste je neměnili sami. Teď to platí symetricky pro všechny zdroje změny — vlastní app se dozví o zásahu jiné app nebo theme, aniž by musela pollovat.

## Časová osa

- **31. 5. 2026** — standard storefront events a actions spuštěny na všech Liquid storefrontech (bez podpory cart attributes)
- **6. 8. 2026** — `updateCart` a nový event `shopify:cart:attributes-update` rozšiřují standard o cart attributes

Změna je opět additivní — žádná migrace, žádný opt-in.

## Dopad pro nás

**Pro vývojáře:** Pokud na Liquid storefrontu implementujeme funkci závislou na cart attributes (gift message, poznámka k doručení, kód personalizace), je teď k dispozici standardní event namísto vlastního polling řešení nebo custom DOM eventu. Pro zápis atributů lze použít stejnou `updateCart` action jako pro cart lines — méně různých API na údržbu.

**Pro PM / PO:** Přímý dopad na běžící projekty je nízký — jde o doplnění existující, teprve pár měsíců staré platformové funkce. Relevantní je especially tam, kde klient chce personalizaci objednávky (dárkové zprávy, instrukce pro kurýra) a chceme, aby se to chovalo konzistentně napříč vlastními widgety a případnými dalšími apps na storefrontu.

## Použití v Integrátoru

Relevance je podmíněná — týká se jen situací, kde na Liquid storefrontu řešíme cart attributes a potřebujeme reagovat na jejich změnu z UI. Pro headless/Hydrogen řešení nebo projekty bez custom cart attributes zůstává dopad nulový.
