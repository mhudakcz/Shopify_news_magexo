---
date: 2026-10-09
title: "Translate & Adapt (EU): auto-sync překladů pro až 8 jazyků (dřív 2)"
title_en: "Translate & Adapt EU Update: Auto-sync translations for up to 8 languages"
slug: translate-adapt-auto-sync-8-languages-eu
zdroj: https://changelog.shopify.com/posts/translate-adapt-auto-sync-translations-for-up-to-8-languages
shrnuto_dne: 2026-10-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Bez API dopadu; relevantní pro multi-market EU obchody, kde se překlady řeší přes Translate & Adapt, a pro workflow, která překlady doplňují nebo kontrolují vlastním kódem."
dotcene_klienty: []
souvisejici: [admin-3-new-languages-rtl, metafield-graphql-translatable-field, automatic-hreflang-toggle-admin]
tldr: "Translate & Adapt nově umí pro EU merchanty každý týden automaticky překládat nový a upravený obsah (Auto-sync) a limit jazyků, které za vás Shopify přeloží, vzrostl z 2 na 8. Auto-sync je ve výchozím stavu vypnutý a zapíná se zvlášť pro každý publikovaný jazyk."
tagy: [translate-adapt, i18n, translation, eu, multilanguage, auto-sync]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Translate & Adapt je nativní aplikace Shopify pro správu překladů obchodu. Umožňuje překládat produkty, kolekce, stránky, navigaci, e-mailové šablony i další obsah do jazyků, které má merchant publikované v nastavení Languages, a to ručně nebo s pomocí automatického překladu. Typický problém multijazyčných obchodů není první překlad, ale jeho udržování: jakmile merchant upraví popis produktu, cenu v textu nebo akční banner, přeložené verze zůstanou ve starém stavu, dokud je někdo znovu nepřeloží.

    Podle changelogu měli EU merchanti dosud tuto aktualizaci řešit ručně: upravený obsah bylo nutné přeložit znovu a překlady na storefrontu tak snadno zastarávaly. Nově lze zapnout Auto-sync pro libovolný publikovaný jazyk. Shopify pak každý týden automaticky přeloží nový a upravený obsah, přičemž ručně napsané překlady nepřepisuje. Auto-sync je opt-in, zapíná se přepínačem v detailu jazyka a lze jej kdykoli vypnout. Tlačítko Auto-translate bylo přejmenováno na Translate now a slouží k okamžitému překladu bez čekání na týdenní synchronizaci.

    Zásadní je pravidlo slotů. Počet jazyků, které za vás Shopify přeloží, se zvýšil ze 2 na 8 a každý jazyk, u kterého použijete Auto-sync, Translate now nebo obojí, spotřebuje jeden slot. Změna se podle changelogu týká EU merchantů v Rakousku, Belgii, Dánsku, Francii, Německu, Irsku, Itálii, Nizozemsku, Španělsku, Švédsku, Švýcarsku a Spojeném království. Česká republika, Slovensko ani Polsko ve výčtu uvedeny nejsou, takže dostupnost pro tamní obchody je třeba ověřit přímo v administraci. Changelog neuvádí cenu, požadavky na plán ani konkrétní den a čas týdenní synchronizace.
  zdroje:
    - title: "Shopify: Translate & Adapt EU Update: Auto-sync translations for up to 8 languages"
      url: "https://changelog.shopify.com/posts/translate-adapt-auto-sync-translations-for-up-to-8-languages"
    - title: "Shopify Help Center: Keeping translations up to date"
      url: "https://help.shopify.com/manual/international/languages/translate-adapt-app/automatic-translation"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Aplikace **Translate & Adapt** získala pro EU merchanty **Auto-sync**: automatickou týdenní synchronizaci překladů. Dřív bylo nutné upravený obsah překládat znovu ručně, takže přeložené verze storefrontu často zaostávaly za originálem. S Auto-sync Shopify každý týden přeloží **nový i upravený obsah** pro jazyky, u kterých je funkce zapnutá. **Ručně napsané překlady se nepřepisují**, takže lidské korektury zůstávají zachované.

Auto-sync lze zapnout pro libovolný **publikovaný jazyk**. Je ve výchozím stavu **vypnutý**. Zapíná se v Translate & Adapt: vybrat jazyk a přepnout toggle **Auto-sync**. Pro každý jazyk lze funkci kdykoli zapnout i vypnout.

Zároveň se přejmenovalo tlačítko **Auto-translate** na **Translate now**. Slouží k okamžitému přeložení obsahu bez čekání na další týdenní běh.

Největší praktická změna je **limit jazyků**: počet jazyků, které za vás Shopify přeloží, vzrostl z **2 na 8**. Počítá se po jednom slotu na jazyk. Slot spotřebuje jazyk, u kterého použijete Auto-sync, Translate now, nebo obojí. Jako příklad pro multi-market EU obchod jde o kombinace typu DE, FR, IT, ES, NL a další; konkrétní sada jazyků je ale na merchantovi, changelog žádné nevypisuje.

Dostupnost je podle changelogu pro EU merchanty v Rakousku, Belgii, Dánsku, Francii, Německu, Irsku, Itálii, Nizozemsku, Španělsku, Švédsku, Švýcarsku a Spojeném království. Česká republika, Slovensko a Polsko mezi nimi uvedeny nejsou. Cena, požadavky na plán ani přesný čas týdenního běhu se v changelogu neuvádějí.

## Časová osa

- **2026-10-09** — changelog zveřejněn, Auto-sync a limit 8 jazyků oznámeny pro EU merchanty
- Týdenní synchronizace běží automaticky pro jazyky se zapnutým Auto-sync; konkrétní den a čas changelog neuvádí
- Přesný rozsah a termín dokončení rolloutu changelog neuvádí

## Dopad pro nás

**Pro vývojáře:** Changelog neuvádí žádnou změnu API, nový webhook ani GraphQL pole, jde o změnu v administraci a v chování aplikace. Praktické body vycházejí z našeho úsudku, ne z changelogu:

- Pokud obchod doplňuje překlady vlastním kódem (například přes translations API nebo import z externího systému), je dobré ověřit, jak se to chová s Auto-sync. Changelog uvádí jen to, že ručně napsané překlady se nepřepisují; jak Shopify posuzuje překlady zapsané programově, neuvádí.
- Strojově přeložený obsah se může objevit na storefrontu bez zásahu člověka. U obsahu s přesným zněním (právní texty, názvy značek, technické parametry) to stojí za zvážení před zapnutím pro daný jazyk.
- Souvisí to s nedávným polem `Metafield.translatable` v Admin GraphQL API, které ukazuje, zda lze hodnotu metafieldu překládat, a s lokalizací Adminu popsanou v souvisejících článcích.

**Pro PM / PO:** Nízká naléhavost, ale užitečná příležitost pro obchody prodávající do více zemí EU. Dosud bylo udržování překladů ruční práce, případně řešení přes aplikaci třetí strany (to je naše obecná poznámka, ne informace z changelogu). Nově může být nativní Translate & Adapt dostatečný pro až 8 jazyků a udržování přeložených verzí lze automatizovat. Doporučený postup:

- U obchodů s EU trhy ověřit, které publikované jazyky mají největší obrat, a sloty využít přednostně pro ně.
- Počítat s tím, že každý jazyk, který se překládá přes Translate now nebo Auto-sync, zabírá jeden z 8 slotů.
- Zvážit kontrolní krok pro klíčový obsah, protože automatický překlad nenahrazuje lidskou korekturu.
- U českých a slovenských obchodů zjistit, zda je funkce vůbec dostupná, protože ČR a SK nejsou ve výčtu zemí uvedeny.

## Použití v Integrátoru

Bez přímého API dopadu. Užitečné jako reference při plánování multijazyčných EU obchodů a při rozhodování, zda překlady řešit nativní aplikací, nebo vlastním workflow.
