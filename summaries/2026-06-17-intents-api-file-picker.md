---
date: 2026-06-17
title: "Apps mohou nově otevřít Shopify file picker přes Intents API"
title_en: "Apps can now open Shopify file picker with Intents API"
slug: intents-api-file-picker
zdroj: https://shopify.dev/changelog/intents-api-file-picker
shrnuto_dne: 2026-06-18
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bude Integrátor potřebovat vybírat soubory z Shopify Files knihovny (např. přílohy, obrázky), může využít tento nativní picker místo vlastního řešení."
dotcene_klienty: []
souvisejici: ["admin-intents-settings", "more-admin-intents-settings", "2026-06-17-editions-spring-2026-developer"]
tldr: "Shopify Intents API rozšiřuje nový intent `pick:shopify/File`, který aplikacím umožní otevřít nativní file picker a získat ID vybraných souborů z Shopify knihovny."
tagy: [intents-api, file-picker, app-bridge, extension]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Intents API je součást App Bridge a umožňuje embedded aplikacím a UI extensions spouštět nativní akce přímo v adminu bez nutnosti budovat vlastní UI komponenty od základu. Intents fungují na principu záměru (intent) — aplikace vyvolá pojmenovaný intent, Shopify ho zpracuje ve svém prostředí a vrátí výsledek. Dosud byly intenty zaměřeny hlavně na navigaci a Settings pages.

    Nový intent `pick:shopify/File` přidává přístup k nativnímu file pickeru, který obchodníci znají z Shopify adminu. Tato komponenta je standardní součástí Shopify UI a umožňuje procházet a vybírat soubory nahrané do Shopify Files (sekce Obsah → Soubory). Vývojáři dříve museli buď spoléhat na vlastní upload řešení, nebo vynechat výběr ze stávající knihovny souborů úplně.

    Díky novému intentu mohou aplikace otevřít file picker jediným voláním `shopify.intents.invoke('pick:shopify/File')` a po výběru získají pole ID vybraných souborů v `response.data.ids`. Picker podporuje filtrování podle typu média, předvýběr souborů a multi-select. Intent je dostupný z App Home (iframe) i z UI extensions.

  zdroje:
    - title: "Shopify: Apps can now open Shopify file picker with Intents API"
      url: "https://shopify.dev/changelog/intents-api-file-picker"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify Intents API získalo nový intent `pick:shopify/File`, který umožňuje aplikacím programově otevřít nativní Shopify file picker. Merchant může vybrat jeden nebo více souborů ze své knihovny Shopify Files a aplikace dostane zpět jejich ID.

Základní použití:

```js
const activity = await shopify.intents.invoke('pick:shopify/File');
const response = await activity.complete;

if (response.code === 'ok') {
  console.log('Selected file IDs:', response.data.ids);
}
```

Picker podporuje:
- **Filtrování podle typu média** — zobrazit jen obrázky, videa atd.
- **Předvýběr souborů** — předat ID souborů, které mají být označené při otevření
- **Multi-select** — umožnit výběr více souborů najednou

Intent je dostupný jak z **App Home (iframe)**, tak z **UI extensions**.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Intent `pick:shopify/File` dostupný ve Shopify Intents API |

## Dopad pro nás

Přímý dopad je nízký — tato funkce cílí na vývojáře embedded Shopify aplikací a UI extensions, kteří potřebují nechat merchanty vybírat soubory z Shopify Files knihovny. Nejedná se o změnu Admin GraphQL API ani o nový REST endpoint.

Pro projekty, kde aplikace pracuje se soubory (obrázky, PDF, přílohy) a chce umožnit merchantovi vybrat existující soubor z jeho Shopify knihovny, jde o čistší alternativu k budování vlastního file picker UI. Eliminuje nutnost vlastní implementace listování souborů přes Files API a správu stavu výběru.

## Použití v Integrátoru

Pokud by Integrátor v budoucnu obsahoval embedded admin UI nebo UI extension, kde merchant vybírá soubor ze Shopify Files (například pro přiřazení přílohy k objednávce nebo produktu), `pick:shopify/File` je přímý a UX-konzistentní způsob jak to řešit. Aktuálně Integrátor embedded admin UI nemá, takže využití je zatím hypotetické.
