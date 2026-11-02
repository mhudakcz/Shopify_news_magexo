---
date: 2026-10-27
title: "Translate & Adapt US/CAN: auto-sync překladů až pro 8 jazyků (bez manual re-translate)"
title_en: "Translate & Adapt US/CAN Update: Auto-sync translations for up to 8 languages"
slug: translate-adapt-auto-sync-8-languages
zdroj: https://changelog.shopify.com/posts/translate-adapt-us-can-update-auto-sync-translations-for-up-to-8-languages
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Bez API dopadu, jde o změnu v administraci Translate & Adapt. Relevantní jen pro obchody z USA a Kanady a pro workflow, která překlady doplňují nebo kontrolují vlastním kódem."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-online, translate-adapt-auto-sync-8-languages-eu, metafield-graphql-translatable-field]
tldr: "Translate & Adapt nově umí i pro merchanty z USA a Kanady každý týden automaticky překládat nový a upravený obsah (Auto-sync) a limit jazyků, které za vás Shopify přeloží, vzrostl z 2 na 8. Auto-sync je ve výchozím stavu vypnutý, zapíná se zvlášť pro každý publikovaný jazyk a ručně napsané překlady nepřepisuje."
tagy: [translate-adapt, i18n, auto-sync, languages, us-ca]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Translate & Adapt je nativní aplikace Shopify pro správu překladů obchodu. Překládá se v ní obsah do jazyků, které má merchant publikované v nastavení Languages, ručně nebo automaticky. Typický problém multijazyčných obchodů není první překlad, ale jeho udržování: jakmile merchant upraví popis produktu nebo banner, přeložené verze zůstanou ve starém stavu, dokud je někdo znovu nepřeloží.

    Changelog z 27. října 2026 přináší pro merchanty ve Spojených státech a v Kanadě Auto-sync: zapnutelnou automatickou aktualizaci překladů pro libovolný publikovaný jazyk. Shopify pak každý týden přeloží nový a upravený obsah, přičemž ručně napsané překlady nikdy nepřepisuje. Počet jazyků, které Shopify přeloží automaticky, roste z 2 na 8. Auto-sync je opt-in a zapíná se přepínačem v detailu jazyka. Tlačítko Auto-translate se přejmenovalo na Translate now a překládá okamžitě, bez čekání na týdenní běh. Každý jazyk, u kterého použijete Auto-sync, Translate now nebo obojí, spotřebuje jeden z 8 slotů.

    Jde o regionální rozšíření funkce, kterou Shopify oznámil 9. října pro EU merchanty (viz související článek). Den po tomto changelogu vyšel Editions Fall '26 a v tématu Online uvádí položku Translate & Adapt synchronizace, aniž by určil regiony. Dopad pro nás je malý: changelog se týká jen USA a Kanady, takže české obchody se Shopify Markets mimo tyto země ho zatím nevyužijí. Cenu, požadavky na plán, přesný čas týdenního běhu ani termíny dalšího rolloutu changelog neuvádí a nezmiňuje ani žádnou změnu API.
  zdroje:
    - title: "Shopify: Translate & Adapt US/CAN Update: Auto-sync translations for up to 8 languages"
      url: "https://changelog.shopify.com/posts/translate-adapt-us-can-update-auto-sync-translations-for-up-to-8-languages"
    - title: "Shopify Help Center: Automatic translation in Translate & Adapt"
      url: "https://help.shopify.com/manual/international/languages/translate-adapt-app/automatic-translation"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Aplikace **Translate & Adapt** získala pro merchanty ve **Spojených státech a v Kanadě** funkci **Auto-sync**, tedy automatickou týdenní synchronizaci překladů. Dřív bylo nutné upravený obsah překládat znovu ručně, takže přeložené verze storefrontu často zaostávaly za originálem. S Auto-sync Shopify každý týden přeloží **nový i upravený obsah** pro jazyky, u kterých je funkce zapnutá. **Ručně napsané překlady se nepřepisují**, takže lidské korektury zůstávají zachované.

Auto-sync lze zapnout pro libovolný **publikovaný jazyk**. Je ve výchozím stavu **vypnutý**. Zapíná se v Translate & Adapt: vybrat jazyk a přepnout toggle **Auto-sync**. Pro každý jazyk lze funkci kdykoli zapnout i vypnout.

Synchronizace běží **týdně**, nepropaguje tedy každou editaci okamžitě. Pro okamžitý překlad slouží tlačítko **Translate now**, které vzniklo přejmenováním dřívějšího **Auto-translate**.

Praktická změna je i **limit jazyků**: počet jazyků, které za vás Shopify přeloží, vzrostl z **2 na 8**. Slot spotřebuje každý jazyk, u kterého použijete Auto-sync, Translate now, nebo obojí. Konkrétní sadu jazyků si volí merchant, changelog žádnou nevypisuje.

Dostupnost je omezená na merchanty z **USA a Kanady**. Další regiony, termíny rolloutu, cenu ani požadavky na plán changelog neuvádí.

## Časová osa

- **2026-10-09** — stejná funkce oznámena pro EU merchanty ([EU varianta](/Shopify_news_magexo/zmena/translate-adapt-auto-sync-8-languages-eu/))
- **2026-10-27** — changelog zveřejněn, Auto-sync a limit 8 jazyků oznámeny pro USA a Kanadu
- **2026-10-28** — Editions Fall '26 uvádí v tématu [Online](/Shopify_news_magexo/zmena/editions-fall-2026-online/) položku Translate & Adapt synchronizace, bez určení regionů
- Týdenní synchronizace běží automaticky pro jazyky se zapnutým Auto-sync; konkrétní den a čas changelog neuvádí
- Přesný termín dokončení rolloutu changelog neuvádí

## Dopad pro nás

**Pro vývojáře:** Changelog neuvádí žádnou změnu API, nový webhook ani GraphQL pole, jde o změnu v administraci a v chování aplikace. Praktické body vycházejí z našeho úsudku, ne z changelogu:

- Pokud obchod doplňuje překlady vlastním kódem (například přes Translations API nebo import z externího systému), je dobré ověřit, jak se to chová s Auto-sync. Changelog uvádí jen to, že ručně napsané překlady se nepřepisují; jak Shopify posuzuje překlady zapsané programově, neuvádí.
- Changelog nezmiňuje, že by šel Auto-sync zapínat přes API, takže počítejte s ruční volbou v administraci pro každý jazyk.
- Strojově přeložený obsah se může na storefrontu objevit bez zásahu člověka. U obsahu s přesným zněním (právní texty, názvy značek, technické parametry) to stojí za zvážení před zapnutím pro daný jazyk.
- Souvisí to s polem `Metafield.translatable` v Admin GraphQL API, které ukazuje, zda lze hodnotu metafieldu překládat (viz [související článek](/Shopify_news_magexo/zmena/metafield-graphql-translatable-field/)).

**Pro PM / PO:** Nízká naléhavost. Změna se týká jen merchantů z USA a Kanady, takže pro běžný český nebo evropský obchod nemá přímý dopad. Dostupnost pro Česko, Slovensko ani Polsko žádný z obou changelogů (EU ani US/CAN) neuvádí. Doporučený postup:

- U obchodů a entit v USA nebo Kanadě ověřit, které publikované jazyky mají největší obrat, a sloty využít přednostně pro ně.
- Počítat s tím, že každý jazyk překládaný přes Translate now nebo Auto-sync zabírá jeden z 8 slotů.
- Před kampaněmi (například Black Friday 27. 11.) nespoléhat jen na týdenní běh: čerstvě upravený obsah je potřeba přeložit přes Translate now. To je náš úsudek z týdenní periodicity, ne tvrzení changelogu.
- Zvážit kontrolní krok pro klíčový obsah, protože automatický překlad nenahrazuje lidskou korekturu.
- Sledovat, zda Shopify funkci rozšíří i na další regiony. Zatím je v archivu jen EU a US/CAN varianta a Editions regiony nespecifikuje.

## Použití v Integrátoru

Bez přímého API dopadu. Užitečné jako reference při plánování multijazyčných obchodů pro USA a Kanadu a při rozhodování, zda překlady řešit nativní aplikací, nebo vlastním workflow.
