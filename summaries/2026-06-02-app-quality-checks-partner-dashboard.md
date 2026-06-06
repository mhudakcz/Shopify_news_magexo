---
date: 2026-06-02
title: "App quality checks (audits) konsolidovány v Partner Dashboardu"
title_en: "App quality checks now managed in Partner Dashboard"
slug: app-quality-checks-partner-dashboard
zdroj: https://shopify.dev/changelog/app-quality-checks-now-managed-in-partner-dashboard
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Partner Dashboard UI feature pro publikované App Store aplikace. Naše integrace běží jako custom apps pro klienty, ne jako veřejné App Store apps."
dotcene_klienty: []
souvisejici: [new-app-submission-experience-partner-dashboard]

kontext:
  background: |
    App audity jsou pravidelné nebo reaktivní přezkumy již publikovaných aplikací v Shopify App Store. Zatímco submission review probíhá jednorázově před prvním zveřejněním aplikace, audit nastává kdykoli poté — například při signifikantní aktualizaci, po obdržení stížností od merchantů nebo v rámci plošné kontroly konkrétní kategorie aplikací. Cílem je ověřit, zda aplikace stále splňuje sadu číslovaných požadavků Shopify týkajících se funkčnosti, bezpečnosti, UI a etických standardů.

    Historicky byl celý komunikační kanál pro audity výhradně e-mailový, bez přehledné evidence toho, které konkrétní požadavky byly porušeny a v jaké fázi opravy se nacházejí. Vývojáři tak ručně párovali e-mailové připomínky s textem požadavků, přičemž přehlédnutí jediné poznámky mohlo vést k opakovanému zamítnutí. Shopify v posledních měsících systematicky modernizuje ekosystém App Store — zavedení structured tracking pro nové submission reviews (duben 2026) a přísnějších standardů pro listing obrázky (březen 2026) jsou součástí téhož trendu.

    Konsolidace auditů pod Partner Dashboard (sekce App > Distribution) zkracuje smyčku zpětné vazby a sjednocuje zkušenost vývojáře napříč celým životním cyklem aplikace. Requirement-level tracking a in-dashboard messaging s reviewery odstraňují závislost na externím e-mailovém klientovi a usnadňují sledování stavu oprav v týmech, kde na jedné aplikaci pracuje více vývojářů.
  zdroje:
    - title: "App quality checks now managed in Partner Dashboard – Shopify Changelog"
      url: "https://shopify.dev/changelog/app-quality-checks-now-managed-in-partner-dashboard"
    - title: "Nový workflow pro submission aplikace v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/new-app-submission-experience-partner-dashboard/"
    - title: "Jasnější standardy pro app listing obrázky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-listing-image-standards/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Partner Dashboard nově konsolidoval i feedback z app audits (kontroly publikovaných aplikací) pod App > Distribution. Stejný structured tracking jako u nových submissions — žádný email-only flow."
tagy: [partners, app-store, audits, dashboard]
---

## Co se mění
**Partner Dashboard** rozšiřuje review management system také o **app audits** — kontroly už publikovaných aplikací (předtím dostupné jen pro nové submissions). Pod sekcí **App > Distribution** najdou developeři:
- Structured tracking pro audit findings
- Workflow features (status, fix submission)
- In-dashboard messaging s Shopify reviewery

Dosud byl audit feedback komunikován primárně přes e-mail.

## Použití v Integrátoru
**Nepoužíváme** — týká se publikovaných App Store aplikací. Naše integrace jsou custom apps pro konkrétní klienty.

## Související
- [Nový workflow pro submission v Partner Dashboardu](../zmena/new-app-submission-experience-partner-dashboard/)
