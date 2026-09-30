---
date: 2026-09-28
title: "Sidekick umí invokovat app intents bez tools (jednodušší integrace)"
title_en: "Sidekick can now invoke app intents without tools"
slug: sidekick-invoke-app-intents-without-tools
zdroj: https://shopify.dev/changelog/posts/sidekick-can-now-invoke-app-intents-without-tools
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro projekt stavěli app extension napojenou na Sidekicka, stačí nově deklarovat jen intents bez samostatného tools souboru, ale je nutné doplnit extensions_summary v shopify.app.toml."
dotcene_klienty: []
souvisejici: [app-intents-admin-full-page-navigation, sidekick-app-extensions-app-store-requirements, sidekick-app-extensions-third-party]
tldr: "Extension, která deklaruje pouze intents (bez tools souboru), je nově způsobilá pro Sidekicka; podmínkou je pole extensions_summary v sekci [sidekick] v shopify.app.toml, jinak deploy neprojde validací."
tagy: [sidekick, app-intents, ai, integration, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Od Editions Spring 2026 jej mohou třetí aplikace rozšiřovat pomocí Sidekick app extensions, takže merchant může z konverzace dotazovat data nebo spouštět akce v aplikacích, aniž by je otevíral zvlášť. Extension přitom dosud musela pro Sidekicka vystavit tools, tedy strojově popsané nástroje, které asistent umí volat.
    App intents jsou samostatný mechanismus Admin UI extensions. Extension na targetu admin.app.intent.link nebo admin.app.intent.render deklaruje v shopify.extension.toml blok [[extensions.targeting.intents]] a tím říká, jaké akce nebo objekty umí obsloužit. Merchant nebo Sidekick pak takový intent vyvolá a Shopify ho předá do příslušné extension. Dosud ale platilo, že aby se extension vůbec objevila jako Sidekick-eligible, musela mít i tools soubor, takže vývojáři museli pro jednu schopnost udržovat dvě různé deklarace.
    Změna z 28. září 2026 tuto podmínku uvolňuje. Extension je nově způsobilá pro Sidekicka, pokud deklaruje intents, tools, nebo obojí. Intent-only extension tak stačí popsat přes [[extensions.targeting.intents]] a Sidekick ji dokáže invokovat přímo. Cenou za zjednodušení je nový povinný údaj: aplikace s intent-only extensions musí v shopify.app.toml v sekci [sidekick] vyplnit pole extensions_summary, což je textový popis toho, co extensions umí, podle kterého Sidekick rozhoduje, kdy je použít. Bez tohoto pole selže validace při deployi.
  zdroje:
    - title: "Shopify: Sidekick can now invoke app intents without tools"
      url: "https://shopify.dev/changelog/posts/sidekick-can-now-invoke-app-intents-without-tools"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Dosud musela Admin UI extension, která chtěla být viditelná pro Sidekicka, obsahovat tools soubor. Podle changelogu z 28. září 2026 tato podmínka odpadá: extension je nově způsobilá pro Sidekicka, pokud deklaruje intents, tools, nebo obojí. Pro intent-only extension stačí konfigurační blok `[[extensions.targeting.intents]]` na targetu `admin.app.intent.link` nebo `admin.app.intent.render`.

Prakticky to znamená, že pokud už aplikace má extension s intenty (například pro otevření konkrétního workflow v aplikaci), nemusí k ní přidávat paralelní sadu tools jen proto, aby ji Sidekick uměl použít. Sidekick intent vyvolá přímo, v kontextu konverzace s merchantem.

Jediná nová povinnost se týká aplikací s intent-only extensions. Musí mít v `shopify.app.toml` v sekci `[sidekick]` vyplněné pole `extensions_summary`. Pokud chybí, deploy skončí chybou validace. Shopify v dokumentaci uvádí příklad v tomto duchu:

```toml
[sidekick]
extensions_summary = "Search and analyze product reviews, create review request campaigns..."
```

Shrnutí je důležité i věcně: je to text, ze kterého Sidekick vychází při rozhodování, zda a kdy danou aplikaci nabídnout. Dobře napsaný summary tedy přímo ovlivňuje, jak často a v jakých situacích se extension v konverzaci objeví. Pro App Store review zároveň platí dříve zavedené požadavky 2.2.8 a 2.2.9, tedy soulad mezi TOML konfigurací, listingem a runtime chováním a zákaz propagačního obsahu, takže summary musí odpovídat skutečným schopnostem extension.

Změna se týká Admin UI extensions intents API. Samotný mechanismus intentů, tedy čtení payloadu a resolving výsledku, se v tomto changelogu nemění.

## Časová osa

- **25. 9. 2026** — změna vytvořena v changelogu Shopify (draft).
- **28. 9. 2026** — changelog zveřejněn; intent-only extensions jsou způsobilé pro Sidekicka.
- **Od nasazení nové extension nebo aktualizace** — deploy aplikace s intent-only extensions vyžaduje `extensions_summary` v `[sidekick]`, jinak validace selže.

## Dopad pro nás

**Pro vývojáře:** Jde o zjednodušení, nikoli o breaking change. Stávající extensions s tools fungují beze změny. Pokud aplikace už má extension s `admin.app.intent.link` nebo `admin.app.intent.render`, může ji nově zpřístupnit Sidekickovi jen doplněním `extensions_summary` do `shopify.app.toml`, bez psaní a údržby samostatného tools souboru. Je potřeba počítat s tím, že bez tohoto pole deploy selže, takže při přidání sekce `[sidekick]` do CI pipeline nebo šablon aplikací stojí za to hlídat, aby se pole nezapomnělo. Pozor na kombinaci s dřívější změnou, kdy se intenty na `admin.app.intent.link` otevírají jako full-page navigace, protože layout stránky musí tomu odpovídat.

**Pro PM / PO:** Nižší bariéra vstupu do Sidekick ekosystému zlevňuje a zrychluje případné rozšíření aplikací o AI povrch: stačí popsat, co extension umí, a Sidekick ji dokáže nabídnout merchantovi. Jde o novou příležitost spíš do budoucna než o akutní úkol. Stojí za to zvážit u projektů, kde stavíme nebo plánujeme vlastní aplikaci či extension, zda by se merchantům vyplatilo ovládat některé workflow přes Sidekicka. Nalehavost je nízká, protože nic nepřestává fungovat a žádná lhůta neběží.

## Použití v Integrátoru

Netýká se přímo integračního API ani synchronizačních toků. Relevantní je jen v případě, že bychom pro nějaký projekt stavěli vlastní app extension s intenty, kde nově stačí intents a `extensions_summary` bez samostatných tools.
