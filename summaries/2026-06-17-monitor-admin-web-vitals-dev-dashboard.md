---
date: 2026-06-17
title: "Monitor admin web vitals v Dev Dashboard — LCP, INP, CLS"
title_en: "Monitor admin web vitals in Dev Dashboard"
slug: monitor-admin-web-vitals-dev-dashboard
zdroj: https://shopify.dev/changelog/monitor-admin-web-vitals-in-the-dev-dashboard
shrnuto_dne: 2026-06-19
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme v budoucnu budovat admin app s Built for Shopify certifikací, toto je centrální místo pro sledování výkonnostních metrik."
dotcene_klienty: []
souvisejici:
  - "app-quality-checks-partner-dashboard"
  - "editions-spring-2026-developer"
  - "editions-spring-2026"
tldr: "Shopify přesunul sledování Core Web Vitals pro admin aplikace z Partner Dashboard do Dev Dashboard — data jsou stejná, místo přístupu se změnilo."
tagy: [dev-dashboard, web-vitals, performance, built-for-shopify]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Core Web Vitals (CWV) jsou standardizované metriky výkonu webu definované Googlem: LCP (Largest Contentful Paint) měří rychlost načítání hlavního obsahu, INP (Interaction to Next Paint) hodnotí responzivitu vůči interakcím uživatele a CLS (Cumulative Layout Shift) sleduje vizuální stabilitu stránky. Pro Shopify admin aplikace jsou tyto metriky klíčové pro hodnocení v rámci programu Built for Shopify.

    Shopify dosud zobrazoval výkonnostní data admin aplikací v Partner Dashboardu. S rozvojem Dev Dashboardu — vývojářského nástroje centralizujícího diagnostiku, logy a metriky pro Shopify aplikace — bylo rozhodnuto přesunout monitoring CWV právě tam, aby měli vývojáři vše na jednom místě.

    Prakticky to znamená, že reporty LCP, INP a CLS se nyní zobrazují přímo v Dev Dashboardu s denními a 28denními P75 souhrny a pass/fail indikátory podle prahových hodnot Built for Shopify. Data jsou totožná s těmi, která používá Shopify App Store pro hodnocení compliance — žádná informace se neztrácí. Stávající URL v Partner Dashboardu automaticky přesměrovávají na nové umístění.

    Pro vývojáře, kteří již mají nastavenou telemetrii, není potřeba cokoliv měnit — stačí přejít do Dev Dashboardu a najít sekci s výkonem. Tato změna je součástí širšího trendu Shopify konsolidovat developerské nástroje a metriky mimo Partner Dashboard do specializovaného vývojářského prostředí.
  zdroje:
    - title: "Shopify: Monitor admin web vitals in Dev Dashboard"
      url: "https://shopify.dev/changelog/monitor-admin-web-vitals-in-the-dev-dashboard"
  generated_at: 2026-06-19T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přesunul monitoring Core Web Vitals (LCP, INP, CLS) pro admin aplikace z Partner Dashboardu do **Dev Dashboardu**. Stará metrika FID (First Input Delay) byla zrušena a nahrazena INP (Interaction to Next Paint) v souladu s aktuálními Web Vitals standardy.

Nové umístění nabízí:

- **Denní a 28denní P75 rollups** — přehled výkonu v čase
- **Pass/fail indikátory** — přímé srovnání s požadavky Built for Shopify
- **Konzistenci s App Store** — zobrazená data jsou identická s těmi, která Shopify používá při hodnocení compliance aplikace

Stávající telemetrie funguje beze změn. Staré URL z Partner Dashboardu automaticky přesměrovávají na nové místo v Dev Dashboardu.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Monitoring CWV dostupný v Dev Dashboardu, přesměrování z Partner Dashboardu aktivní |

## Dopad pro nás

Dopad je nízký — jedná se o přesun UI, nikoliv o změnu dat nebo API. Pokud vyvíjíme nebo spravujeme admin aplikaci sledovanou v Partner Dashboardu, je třeba přepnout záložky: metriky výkonu jsou nyní v Dev Dashboardu.

Žádná změna kódu, konfigurace ani telemetrie není nutná.

## Použití v Integrátoru

Přímá relevance je zatím nízká, protože Integrátor není publikovaný admin app s Built for Shopify hodnocením. Pokud by se to změnilo, Dev Dashboard je nyní správné místo pro sledování výkonnostních metrik a jejich souladu s App Store požadavky.
