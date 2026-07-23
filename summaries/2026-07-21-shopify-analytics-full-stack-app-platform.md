---
date: 2026-07-21
title: "Shopify Analytics: full-stack platforma pro apps (model, query, embed, enrich)"
title_en: "Full-stack capabilities to power app analytics"
slug: shopify-analytics-full-stack-app-platform
zdroj: https://shopify.dev/changelog/full-stack-capabilities-to-power-app-analytics
shrnuto_dne: 2026-07-23
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro klienta stavěli vlastní analytics UX v appce, tato platforma (ShopifyQL, web komponenty, Annotations, Metric Targets) by nahradila vlastní reporting pipeline."
dotcene_klienty: []
souvisejici: [annotations-analytics-events, analytics-metric-targets-admin-api, location-metafields-analytics-dimensions]
tldr: "Shopify Analytics se mění na full-stack platformu pro apps — vlastní data jako dimensions, ShopifyQL se schématem, hotové web komponenty pro grafy a API pro annotations a targets."
tagy: [analytics, apps, platform, embed, storefronts, dev-platform]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Analytics dlouhodobě fungovalo hlavně jako hotový reporting nástroj v adminu — merchant se díval na předpřipravené grafy a dashboardy, ale vývojáři aplikací neměli snadný způsob, jak stejná data a stejnou vizuální vrstvu využít ve vlastní appce. Kdo chtěl v aplikaci nabídnout analytics, musel si postavit vlastní pipeline na sběr, agregaci i vykreslení dat od nuly.

    Tento changelog shrnuje, že Shopify Analytics se posouvá na full-stack platformu podél čtyř os: modelování (metafields označené jako "queryable" se stávají dimensions v ShopifyQL, k tomu přibývá early-access App Events pro vlastní eventy emitované appkou), dotazování (ShopifyQL API nově má schéma-level dokumentaci s typy a příklady, což umožňuje stabilní, verzované query i podporu pro LLM/AI toolchainy), embedování (nové web komponenty jako `<s-shopifyql-metric-card>` a `<s-metrics-bar>` vykreslí graf jedním elementem bez vlastní charting knihovny či řešení lokalizace) a obohacování (Annotations API pro vkládání kontextových značek do grafů s app atribucí, Metric Targets API pro programové nastavení a sledování cílů).

    Prakticky to znamená, že aplikace už nemusí re-implementovat celou analytickou pipeline, pokud chce nabídnout vlastní analytics UX — může postavit na existující infrastruktuře Shopify a soustředit se na vlastní logiku a vlastní data (metafields, App Events), zatímco query engine, vizualizace a distribuce dat do adminu zůstávají na platformě.
  zdroje:
    - title: "Shopify: Full-stack capabilities to power app analytics"
      url: "https://shopify.dev/changelog/full-stack-capabilities-to-power-app-analytics"
  generated_at: 2026-07-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify spojuje čtyři dříve oddělené kusy analytické infrastruktury do jedné platformy pro vývojáře aplikací:

- **Model** — metafields označené jako analytics-queryable se objeví jako dimensions přímo v ShopifyQL; k tomu přibývá early-access **App Events**, díky kterým appka může emitovat vlastní eventy a dotazovat se na ně vedle standardních store dat.
- **Query** — ShopifyQL API dostává schéma-level dokumentaci (typy, příklady), takže dotazy jsou stabilní, verzované a lépe strojově čitelné — včetně podpory pro LLM/AI toolchainy.
- **Embed** — nové Analytics Web Components (`<s-shopifyql-metric-card>`, `<s-metrics-bar>`) umožňují vykreslit graf nebo metriku jedním HTML elementem bez vlastní charting knihovny a bez ruční práce s lokalizací čísel a formátů.
- **Enrich** — Annotations API dovoluje partnerům přidávat do grafů kontextové značky s atribucí ke konkrétní appce; Metric Targets API umožňuje merchantům programově nastavovat a sledovat vlastní cíle.

Změny dopadají na Admin GraphQL API, App Events API, metafields/metaobjects a ShopifyQL a jsou vázané na API verzi 2026-10.

## Časová osa

- 2026-04-29 — Metric Targets dorazily do GraphQL Admin API jako samostatná funkce
- 2026-05-05 — Annotations API zpřístupněno pro kontextové značky v grafech
- 2026-06-30 — location metafields jako dimensions/filters v Analytics
- 2026-07-21 — tento changelog shrnuje výše uvedené kusy pod jednotnou "full-stack" platformu a přidává ShopifyQL schéma-dokumentaci, web komponenty a early-access App Events

## Dopad pro nás

**Pro vývojáře:** Pokud bychom v rámci naší integrace stavěli appku s vlastním analytics panelem, nově nemusíme řešit vlastní agregační vrstvu ani vykreslování grafů — stačí ShopifyQL dotaz a hotová web komponenta. Early-access App Events stojí za sledování, pokud klient potřebuje kombinovat vlastní business eventy s nativními store daty v jednom reportu.

**Pro PM / PO:** Jde o rozšíření developer platformy, ne o merchant-facing změnu — žádný dopad na stávající klientské projekty, pokud aktivně nestavíme vlastní analytics modul v appce. Relevantní spíš jako argument při plánování budoucích analytických featur ("nemusíme stavět vlastní dashboard, Shopify to nabízí nativně").

## Použití v Integrátoru

Aktuálně nepoužíváme — v naší integrátorské práci nestavíme vlastní analytics UI v appce. Relevantní by to bylo až u budoucího projektu, kde by klient chtěl vlastní metriky nebo eventy zobrazit přímo v adminu.
