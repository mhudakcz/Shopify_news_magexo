---
date: 2026-09-30
title: "App intents pro discount apps — deep-link flow z admina"
title_en: "Use app intents for your discount app"
slug: use-app-intents-discount-app
zdroj: https://shopify.dev/changelog/posts/use-app-intents-for-your-discount-app
shrnuto_dne: 2026-10-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro projekt stavěli vlastní discount app nad Shopify Functions, nově ji lze přes shopify/Discount intenty napojit na create a edit flow v adminu a na Sidekicka bez migrace stávajícího kódu."
dotcene_klienty: []
souvisejici: [sidekick-invoke-app-intents-without-tools, app-intents-admin-full-page-navigation, discount-ui-extension-purchasetype-recurringcyclelimit]
tldr: "Aplikace s vlastními typy slev postavenými na Shopify Functions mohou registrovat app intenty shopify/Discount, díky nimž Sidekick spouští jejich create a edit flow a nabízí je v disambiguation pickeru; migrace není potřeba."
tagy: [app-intents, discounts, deep-linking, admin, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Discount apps v Shopify adminu dnes fungují tak, že aplikace pomocí Shopify Functions dodá vlastní logiku slevy (například množstevní nebo balíčkovou slevu) a merchant ji vytváří a upravuje v konfiguračním UI. To UI buď poskytuje Admin UI extension přímo v sekci slev, nebo se merchant přes deklarované cesty (extension.ui.paths) dostane na stránku aplikace. Až dosud ale chyběl standardizovaný způsob, jak na konkrétní create nebo edit flow slevové aplikace odkázat z jiných míst adminu a z konverzace se Sidekickem.
    App intents jsou mechanismus Admin UI extensions, kterým aplikace deklaruje, jaké akce nad jakým typem objektu umí obsloužit. Extension se registruje na target admin.app.intent.link, který navigaci směruje na existující stránku aplikace (React Router), nebo na admin.app.intent.render, který vykreslí zaměřenou Admin UI extension přímo v adminu (vyžaduje API verzi 2026-04 nebo novější). Intenty na admin.app.intent.link se od 19. srpna 2026 otevírají jako full-page navigace a od 28. září 2026 stačí pro způsobilost vůči Sidekickovi deklarovat samotné intenty bez tools souboru.
    Změna z 30. září 2026 (API verze 2026-10) přidává podporu pro intenty typu shopify/Discount. Aplikace s discount typy postavenými na Shopify Functions je může registrovat a Sidekick pak umí spustit jejich create a edit flow a zobrazit je v disambiguation pickeru, tedy ve výběru, kdy merchant chce slevu vytvořit a je potřeba rozhodnout, kterou aplikaci použít. Intent se konfiguruje přes meta-schéma shopify-intent.json s odkazem na základní schéma shopify/discount.json a s hodnotou matchValue na functionId, která váže intent na konkrétní Function. Edit flow přenáší GID slevy v hodnotě intentu. Stávající implementace nevyžadují žádnou migraci a extension.ui.paths dál funguje.
  zdroje:
    - title: "Shopify: Use app intents for your discount app"
      url: "https://shopify.dev/changelog/posts/use-app-intents-for-your-discount-app"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšiřuje app intents o podporu slevových aplikací. Aplikace, které vytvářejí vlastní typy slev přes Shopify Functions, nově mohou registrovat intenty `shopify/Discount`. Díky tomu Sidekick (AI asistent v adminu) umí spustit create a edit flow takové slevy a aplikace se objeví i v disambiguation pickeru, kde se merchant rozhoduje, jakým typem slevy chce pokračovat. Funkce je dostupná od API verze **2026-10**.

Intent podporuje akce `create` a `edit`. Konfigurace jde přes meta-schéma `shopify-intent.json`, které odkazuje na základní schéma `shopify/discount.json`; intent se na konkrétní Function váže pomocí `matchValue` na `functionId`. U edit flow nese hodnota intentu GID upravované slevy, takže aplikace ví, kterou slevu má otevřít.

Registrovat lze dva targety:

- **`admin.app.intent.link`** — navigace na existující stránku aplikace postavenou na React Router. Vhodné pro aplikace, které už mají vlastní embedded UI pro konfiguraci slev.
- **`admin.app.intent.render`** — vykreslení zaměřené Admin UI extension přímo v adminu (vyžaduje API 2026-04 nebo novější).

Pro nové implementace Shopify doporučuje buď postavit discount UI extension (ta se podle changelogu promuje automaticky), nebo registrovat jeden z výše uvedených targetů. Stávající aplikace nemusí nic migrovat a vlastnost `extension.ui.paths` dál funguje, app intents se ale doporučují kvůli lepší integraci se Sidekickem. Každý registrovaný intent se počítá do limitu intentů na aplikaci.

Je tu jedno známé omezení. Discount flow na `admin.app.intent.link` je zatím pouze webové: slevy aplikace se sice zobrazí v seznamu slev v mobilní aplikaci Shopify, ale klepnutí na ně neotevře edit flow aplikace.

## Časová osa

- **30. 9. 2026** — changelog zveřejněn, intenty `shopify/Discount` jsou dostupné v API verzi 2026-10.
- **Do doby podpory webových flow v mobilní aplikaci** — edit flow na `admin.app.intent.link` se z mobilního seznamu slev neotevře.
- **Bez termínu** — žádná lhůta pro migraci neběží, stávající řešení fungují beze změny.

## Dopad pro nás

**Pro vývojáře:** Jde o aditivní změnu, nikoli breaking change. Pokud stavíme nebo spravujeme discount app nad Shopify Functions, můžeme si zvolit, zda zůstat u `extension.ui.paths`, nebo přidat intent a získat napojení na Sidekicka a disambiguation picker. Při volbě targetu je dobré mít na paměti, že `admin.app.intent.link` se otevírá jako full-page navigace, takže stránka musí fungovat na plnou šířku okna, a že pro `admin.app.intent.render` je potřeba API 2026-04 nebo novější. U edit flow je nutné správně zpracovat GID slevy z hodnoty intentu a ověřit, že `matchValue` na `functionId` míří na správnou Function. Intenty se počítají do limitu na aplikaci, takže stojí za to je rozdělit rozumně a nepřidávat zbytečné duplicity.

**Pro PM / PO:** Nová příležitost spíše do budoucna než akutní úkol. U projektů s vlastní slevovou logikou (množstevní slevy, balíčky, věrnostní mechaniky) se může vyplatit nabídnout merchantům možnost zakládat a upravovat slevy přes Sidekicka a mít aplikaci viditelnou už ve výběru typu slevy. Je třeba předem upozornit merchanty, kteří hodně používají mobilní aplikaci Shopify, že editace slev aplikace tam zatím nefunguje. Nalehavost je nízká, nic nepřestává fungovat a žádná lhůta neběží.

## Použití v Integrátoru

Netýká se přímo integračního API ani synchronizačních toků. Relevantní je jen v případě, že bychom pro některý projekt stavěli vlastní discount app nad Shopify Functions, kde lze nově přidat intenty `shopify/Discount` pro napojení na create a edit flow v adminu a na Sidekicka.
