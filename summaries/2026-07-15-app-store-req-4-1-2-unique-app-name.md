---
date: 2026-07-15
title: "App Store požadavek 4.1.2 — unikátní název aplikace"
title_en: "Updated App Store requirements: 4.1.2 Use a unique name for your app"
slug: app-store-req-4-1-2-unique-app-name
zdroj: https://shopify.dev/changelog/updated-app-store-requirements-4-1-2-use-a-unique-name-for-your-app
shrnuto_dne: 2026-07-16
kategorie: [deprecation, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud vyvíjíme nebo spravujeme Shopify aplikaci publikovanou v App Store, musí její název splňovat pravidlo 4.1.2."
dotcene_klienty: []
souvisejici: [app-store-req-1-3-honest-review-practices, sidekick-app-extensions-app-store-requirements, app-listing-image-standards]
tldr: "Shopify zavedlo nový App Store požadavek 4.1.2 — každá aplikace musí mít unikátní, nezaměnitelný název; existující aplikace s duplicitními nebo matoucími názvy mohou být vyzvány k přejmenování, jinak hrozí delisting."
tagy: [app-store, requirements, naming, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify zavedlo nový App Store requirement 4.1.2 — Use a unique name for your app. Pravidlo vyžaduje, aby název aplikace jasně odrážel brand vývojáře a nebyl duplicitní nebo matoucně podobný jiné existující aplikaci či Shopify produktu. Cílem je zabránit situacím, kdy si merchanti pletou aplikace kvůli identickým nebo napodobujícím názvům, a posílit tak důvěru a orientaci (discoverability) v App Store.

    Shopify nebude vymáhat pravidlo okamžitě plošně — místo toho bude neshodné aplikace kontrolovat ve vlnách (waves) a poskytne vývojářům konkrétní lhůtu na nápravu. Pravidlo se dotýká tří scénářů: existující aplikace s potenciálně nevyhovujícím názvem by měly proaktivně řešit rebranding ještě před tím, než dojde k vymáhání; nové žádosti o publikaci musí od začátku volit odlišující název reprezentující vlastní brand bez napodobování konkurence nebo matení uživatelů; a vývojáři, jejichž název aplikace někdo kopíruje, mohou podat report Shopify, k čemuž je ale potřeba doložit platnou registrovanou ochrannou známku.

    Prakticky jde o rozšíření dosavadních App Store Requirements o formální, explicitně pojmenované pravidlo namísto obecného očekávání. Pro vývojáře a agentury spravující více Shopify aplikací to znamená nutnost při zakládání nové app v Partner Dashboardu předem ověřit, že zvolený název není duplicitní nebo zavádějící, a u existujících aplikací zvážit revizi názvu, pokud by mohl kolidovat s jinou aplikací nebo Shopify produktem.
  zdroje:
    - title: "Shopify: Updated App Store requirements: 4.1.2 Use a unique name for your app"
      url: "https://shopify.dev/changelog/updated-app-store-requirements-4-1-2-use-a-unique-name-for-your-app"
    - title: "Shopify Dev Docs: App Store Requirements — Use a unique name for your app"
      url: "https://shopify.dev/docs/apps/launch/shopify-app-store/app-store-requirements#use-a-unique-name-for-your-app"
  generated_at: 2026-07-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidalo do App Store Requirements nový bod **4.1.2 — Use a unique name for your app**. Název aplikace nesmí být duplicitní ani matoucně podobný jinému názvu v App Store, a musí jasně reprezentovat brand vývojáře bez napodobování konkurenčních aplikací nebo Shopify produktů.

Vymáhání nebude okamžité a plošné — Shopify bude procházet existující aplikace ve vlnách a nevyhovujícím vývojářům poskytne lhůtu na přejmenování. Aplikace, které lhůtu nedodrží, riskují delisting z App Store.

Pravidlo pokrývá tři situace:

- **Existující aplikace** s potenciálně problematickým názvem — doporučeno řešit rebranding proaktivně, dřív než přijde vyzvání od Shopify
- **Nové žádosti o publikaci** — název musí být odlišující už od podání
- **Spory o kopírování názvu** — dotčený vývojář může podat report Shopify, vyžadována je ale platná registrovaná ochranná známka

## Časová osa

- **2026-07-15** — požadavek 4.1.2 zveřejněn v Shopify changelogu a je účinný
- **Průběžně** — Shopify audituje existující aplikace ve vlnách a případně vyzývá k přejmenování v dané lhůtě

## Dopad pro nás

**Pro vývojáře:** Při zakládání nové Shopify aplikace v Partner Dashboardu je potřeba předem ověřit, že zvolený název není duplicitní ani zavádějící vůči existujícím aplikacím nebo Shopify produktům. U již publikovaných aplikací, které spravujeme, stojí za to preventivně zkontrolovat, zda název nekoliduje s něčím jiným v App Store.

**Pro PM / PO:** Riziko je nízké a týká se jen situací, kdy pro klienta vyvíjíme nebo spravujeme vlastní Shopify aplikaci publikovanou v App Store. Pokud by Shopify vyzval k přejmenování, jde primárně o marketingové/brandové rozhodnutí klienta, nikoli o technický zásah.

## Použití v Integrátoru

Přímý dopad na Integrátor není — jde o procesní/compliance pravidlo App Store, nikoli o API nebo technickou změnu.
