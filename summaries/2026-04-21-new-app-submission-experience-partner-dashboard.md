---
date: 2026-04-21
title: "Nový workflow pro submission aplikace v Partner Dashboardu"
title_en: "New app submission experience in the Partner Dashboard"
slug: new-app-submission-experience-partner-dashboard
zdroj: https://shopify.dev/changelog/new-app-submission-experience-in-the-partner-dashboard
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se publikování aplikací do Shopify App Store. Naše integrace běží jako custom apps."
dotcene_klienty: []
souvisejici: [app-uninstall-reasons-update]

kontext:
  background: |
    Shopify Partner Dashboard je správní platforma pro vývojáře aplikací, kde spravují celý životní cyklus App Store aplikace — od vývoje přes submission až po sledování výkonu publikované aplikace. Submission je formální žádost o zveřejnění aplikace v Shopify App Store, při níž tým Shopify reviewerů ověřuje, zda aplikace splňuje sadu číslovaných požadavků rozdělených do kategorií (funkčnost, bezpečnost, App Store listing, Theme App Extensions a další).

    Historicky byl feedback z review i z následných auditů publikovaných aplikací sdělován výhradně e-mailem, bez strukturovaného přehledu toho, které konkrétní požadavky byly splněny a které ne. Vývojáři tak museli sami párovat e-mailové připomínky s příslušnými sekcemi požadavků, což zvyšovalo riziko přehlédnutí nebo opakovaného odmítnutí. Souběžně Shopify začleňuje AI nástroje do vývojářských workflow — například Shopify AI toolkit, jehož self-review funkce umožňuje automatizovanou předkontrolou ještě před samotným odesláním.

    Nový submission workflow přímo v dashboardu (sekce App > Distribution) přináší structured tracking jednotlivých requirementů s jejich aktuálním stavem, inline komunikaci s reviewery a automatické pre-submission kontroly. Tím se sbližuje zkušenost vývojářů s review procesem s moderními CI/CD workflow, kde jsou chyby viditelné okamžitě a kontextově. Změna je součástí širšího trendu zkvalitňování App Store ekosystému, který zahrnuje i přísnější standardy pro listing média a konsolidaci auditů publikovaných aplikací pod stejné rozhraní.
  zdroje:
    - title: "New app submission experience in the Partner Dashboard – Shopify Changelog"
      url: "https://shopify.dev/changelog/new-app-submission-experience-in-the-partner-dashboard"
    - title: "App quality checks konsolidovány v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-quality-checks-partner-dashboard/"
    - title: "Jasnější standardy pro app listing obrázky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-listing-image-standards/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Partner Dashboard nabízí requirement-level tracking, přímý feedback od reviewerů a AI self-review nástroje pro submission."
tagy: [partners, app-store, submission]
---

## Co se mění
Partner Dashboard zavádí nový submission workflow s tracking jednotlivých requirementů, přímým feedbackem od Shopify reviewerů a AI-powered self-review toolem, který má zlepšit kvalitu žádostí.

## Použití v Integrátoru
**Nepoužíváme** — týká se publikování aplikací do Shopify App Store. Naše integrace běží jako custom apps pro klienty.
