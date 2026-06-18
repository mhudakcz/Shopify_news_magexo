---
date: 2026-06-17
title: "Daily insights v Shopify Analytics — AI vypichuje denně klíčové trendy"
title_en: "Daily insights in Shopify Analytics — AI-surfaced trends"
slug: daily-insights-analytics-ai
zdroj: https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/overview-dashboard/using-the-overview-dashboard
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Daily insights jsou UI feature bez přímého API — integrátory mohou tuto funkcionalitu prezentovat merchantům jako nativní analytický nástroj bez nutnosti vlastní implementace."
dotcene_klienty: []
souvisejici: [editions-spring-2026, data-driven-insights-analytics-dashboard, spot-trends-analytics-insights]
editions_release: spring-2026
kontext:
  background: |
    Daily insights je panel v Shopify Analytics Overview dashboardu, který každý den automaticky zobrazuje 0–5 datově podložených pozorování o výkonu obchodu. AI analyzuje předchozí den a vybírá nejvýraznější pohyby ve třech oblastech: tržby (gross/net sales, průměrná hodnota objednávky, míra vracejících se zákazníků), sessions (návštěvnost, konverze, přidání do košíku) a fulfillment (rychlost plnění a doručení). Každý insight expiruje po 24 hodinách a je nahrazen aktuálnější sadou.

    Shopify Analytics se od roku 2025 systematicky posouvá od pasivního reportingu k proaktivnímu upozorňování — postupně přibyly Analytics Targets (nastavení výkonnostních cílů), srovnávací grafy více metrik najednou, anotace store eventů a automaticky generované insights na Home feedu. Daily insights jsou dalším krokem v tomto směru: místo aby merchant každé ráno otevíral reporty a hledal, co je jinak než včera, dostane rovnou prioritizovaný výběr toho nejrelevantnějšího.

    Funkce je dostupná pro obchody s průměrem alespoň 10 objednávek týdně za posledních 6 měsíců. Tento práh záměrně zahrnuje středně velké e-shopy, které mají dostatek dat pro statisticky spolehlivé závěry, ale typicky nemají dedikovaného analytika. Dashboard se přitom aktualizuje v reálném čase (každých ~60 sekund), takže insights jsou vždy vztaženy k aktuálnímu stavu dat.

    Z pohledu ekosystému daily insights navazují na ShopifyQL (dotazovací jazyk pro vlastní analytics dotazy) a doplňují možnost napojení na AI asistenta Sidekick pro follow-up analýzu. Celkový směr Shopify Analytics je jasný: snížit analytickou bariéru pro merchanty bez BI zázemí a zároveň nechat prostor pro hlubší analýzu těm, kteří ji chtějí.
  zdroje:
    - title: "Shopify Editions Spring '26: Daily insights in Shopify Analytics — AI-surfaced trends"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/overview-dashboard/using-the-overview-dashboard"
    - title: "Data-driven insights v analytics dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/data-driven-insights-analytics-dashboard/"
    - title: "Spot trends s novými Analytics insights"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/spot-trends-analytics-insights/"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Analytics každé ráno automaticky zobrazí 3–5 AI vybraných trendů z předchozího dne — bez nutnosti otevírat reporty stačí přečíst daily insights panel na dashboardu."
tagy: [editions, analytics, ai, insights, reporting]
zdroj_kanal: editions
---

## Co se mění

Shopify Analytics Overview dashboard nově obsahuje sekci **Daily insights** — každý den AI analyzuje data obchodu a zobrazí sadu nejvýraznějších pohybů a vzorců z předchozího dne. Merchant vidí přehledně zpracované závěry přímo na dashboardu, bez nutnosti otvírat jednotlivé reporty nebo psát ShopifyQL dotazy.

Každý insight je konkrétní datové pozorování s kontextem: například „Tržby z jednorázových objednávek jsou na cestě překonat minulý měsíc" nebo identifikace nového top produktu v konkrétním regionu. Systém sleduje tři oblasti:

- **Sales** — gross/net sales, počet objednávek, průměrná hodnota objednávky (AOV), míra vracejících se zákazníků
- **Sessions** — návštěvy, unikátní visitors, conversion rate, přidání do košíku, postup přes checkout
- **Fulfillments** — rychlost plnění objednávek, dodací lhůty, efektivita dopravy

Insights se obnovují denně a každý trvá 24 hodin. Obchod musí mít průměr alespoň 10 objednávek týdně za posledních 6 měsíců — pod touto hranicí není dostatek dat pro spolehlivé závěry.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, daily insights v GA

## Dopad pro nás

**Pro vývojáře:**
Daily insights jsou čistě UI feature v Shopify Admin dashboardu — nevyžadují žádnou implementaci na straně integrace. Není k dispozici GraphQL API pro čtení ani zápis insights. Pokud merchant potřebuje automatizaci na základě analytických dat, nadále platí kombinace ShopifyQL dotazů přes Admin API a vlastní alertovací logiky. Daily insights jsou určeny jako nativní merchant-facing nástroj, ne jako datový endpoint pro integrátory.

**Pro PM / PO:**
Feature ocení zejména menší a střední merchanté, kteří nemají čas každé ráno procházet analytics reporty. Jde o čistý UX benefit dostupný automaticky po splnění objemového prahu. Při onboardingu nebo review analytiky u klientů stojí za zmínku jako nativní alternativa k externím BI nástrojům pro základní monitoring trendů. Není co implementovat, stačí informovat.

## Použití v Integrátoru

Funkce se integrátoru přímo netýká — jde o nativní Shopify Admin UI bez API. Merchantům, kteří se ptají na monitoring výkonu bez vlastního BI, ji lze doporučit jako out-of-the-box řešení.

## Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Operations](/Shopify_news_magexo/zmena/editions-spring-2026-operations/)
