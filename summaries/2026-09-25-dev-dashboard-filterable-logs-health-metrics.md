---
date: 2026-09-25
title: "Developer Dashboard: filterable logs + health metrics pro custom apps"
title_en: "Filterable logs and health metrics for custom apps are now in the Developer Dashboard"
slug: dev-dashboard-filterable-logs-health-metrics
zdroj: https://changelog.shopify.com/posts/filterable-logs-and-health-metrics-for-custom-apps-are-now-in-the-developer-dashboard
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "U custom apps, které spravujeme pro merchanty, získáváme zdarma přehled o objemu API requestů, error rate a doručování webhooků bez nutnosti nasazovat samostatný APM nástroj."
dotcene_klienty: []
souvisejici: [new-dev-dashboard-command-center, app-events-dev-dashboard, monitor-admin-web-vitals-dev-dashboard]
tldr: "Developer Dashboard u custom apps nově ukazuje objem API requestů, error rate, zdraví doručování webhooků a rychlost načítání embedded admin stránek s jasnými prahy, plus jednotný filtrovatelný stream logů."
tagy: [dev-dashboard, logs, health-metrics, custom-apps, observability, api-metrics]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Custom apps jsou aplikace vytvořené na míru pro jeden konkrétní obchod, typicky agenturou nebo interním vývojářem, a nejsou distribuované přes Shopify App Store. Dlouho k nim existovalo jen málo nativní observability. Když integrace přestala fungovat, bylo nutné dohledávat příčinu v logu vlastního serveru, v nástroji třetí strany (APM, log management) nebo v samotném Shopify admin rozhraní, které o stavu API volání a webhooků moc neřeklo.

    Shopify v posledních měsících systematicky rozšiřuje Dev Dashboard jako centrální diagnostické místo. Na jaře a v létě 2026 sem přibylo sledování admin web vitals a app events a 25. září 2026 Shopify oznámil přepracovaný Dev Dashboard s přehledem apps, stores a logů. Dnešní novinka tento trend dotahuje pro custom apps: stejný typ metrik a logů, který byl dosud spojený hlavně s distribuovanými apps, je teď dostupný i pro aplikace na míru.

    Shopify v oznámení uvádí, že stejná data vidí agentury a vývojáři, kteří custom app pro obchod staví, takže merchant i jeho dodavatel se mohou opírat o jeden společný zdroj pravdy při řešení incidentů. Ze zdrojového oznámení nejsou zřejmé konkrétní prahové hodnoty, retence logů ani žádný rollout plán. Pro orientaci, předchozí oznámení o novém Dev Dashboardu uvádělo u logů 30denní retenci a 7denní okno dotazu, ale pro custom apps to změříme až v praxi.
  zdroje:
    - title: "Shopify: Filterable logs and health metrics for custom apps are now in the Developer Dashboard"
      url: "https://changelog.shopify.com/posts/filterable-logs-and-health-metrics-for-custom-apps-are-now-in-the-developer-dashboard"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify 25. září 2026 rozšířil **Developer Dashboard** o dvě věci pro **custom apps**: sadu health metrik a filtrovatelný stream logů.

**Health metriky** zahrnují čtyři ukazatele:

- **API request volume** — kolik API requestů app posílá,
- **Error rate** — podíl requestů, které skončily chybou,
- **Webhook delivery health** — zdraví doručování webhooků do endpointu aplikace,
- **Page load speed** — rychlost načítání embedded admin stránek aplikace.

U každé metriky je podle Shopify zobrazen jasný práh, takže na první pohled poznáte, jestli je hodnota v pořádku, nebo ne. Nemusíte tedy sami rozhodovat, co je ještě přijatelná error rate nebo dostatečně rychlý load.

**Filterable logs** sjednocují všechny API requesty, webhook deliveries a app events do jednoho prohledávatelného streamu. Když se app chová divně, nemusíte přepínat mezi několika zdroji; filtrem zúžíte záznamy na konkrétní typ události nebo chybu a dohledáte příčinu na jednom místě.

Nové rozhraní je dostupné v Developer Dashboardu (`dev.shopify.com/dashboard`) a dokumentace je na `shopify.dev/docs/apps/build/dev-dashboard`. Podle oznámení vidí stejná data také agentury a vývojáři, kteří custom app pro obchod vytvářejí. Není potřeba nic zapínat ani konfigurovat.

## Časová osa

- **25. září 2026** — health metriky a filtrovatelné logy jsou dostupné pro custom apps v Developer Dashboardu.
- **Bez dalšího termínu** — Shopify neuvádí žádné postupné zapínání ani plánované rozšíření této konkrétní funkce.

## Dopad pro nás

**Pro vývojáře:** Nejpraktičtější přínos je rychlejší diagnostika. Jednotný log stream s filtrováním nahrazuje část toho, co jsme dosud dohledávali ve vlastních logech nebo v externím APM, a metriky s prahy ukážou problém dřív, než ho nahlásí merchant. Stojí za to projít si, jak se metriky počítají a jak dlouho se logy drží, protože oznámení tyto detaily neuvádí. Externí monitoring kvůli tomu rušit nebudeme; Dev Dashboard vidí jen komunikaci se Shopify, nikoli vnitřek našeho serveru, databázi ani frontu úloh.

**Pro PM / PO:** Jde o změnu interního vývojářského nástroje bez přímého dopadu na storefront nebo merchanty. Nepřímý přínos je kratší čas řešení incidentů u custom apps a objektivnější podklad pro komunikaci s merchantem, například při otázce, zda vypadly webhooky, nebo jestli app narazila na rate limit. Nalehavost je nízká, je to příležitost, ne povinnost.

## Použití v Integrátoru

Pokud pro merchanty provozujeme custom apps, dává smysl přidat Dev Dashboard do troubleshooting checklistu vedle stávajících logů; samostatnou akci ani změnu kódu to nevyžaduje.
