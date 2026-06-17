---
date: 2026-03-11
title: "Tracking app activity a permissions ze Settings"
title_en: "Track app activity and permissions from Settings"
slug: track-app-activity-permissions
zdroj: https://changelog.shopify.com/posts/track-app-activity-and-permissions-from-settings
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "App audit UI v Adminu. Naše custom apps mohou být v něm vidět, ale ze strany merchant view, ne developer view."
kontext:
  background: |
    Shopify aplikace při instalaci požadují sadu přístupových oprávnění (access scopes), která jim umožňují volat Admin API a přistupovat k datům obchodu — produktům, objednávkám, zákazníkům nebo platebním informacím. Každá aplikace deklaruje, které scopy potřebuje, a merchant je při instalaci musí odsouhlasit. Až dosud však neexistoval jednoduchý způsob, jak průběžně sledovat, jak intenzivně aplikace tato oprávnění skutečně využívají.

    V Shopify ekosystému roste počet nainstalovaných aplikací rok od roku, přičemž průměrný merchant používá desítky apps zároveň. Tlak na transparentnost posílilo i globální prosazování GDPR a podobných předpisů — merchanté jsou odpovědní za to, jaká data jejich apps sbírají a jak s nimi nakládají. Paralelně Shopify zpřísňuje bezpečnostní požadavky na stranu developerů: od dubna 2026 jsou povinné expirující offline access tokeny pro nové veřejné aplikace.

    Nový přehled v Settings přináší merchantům přímý pohled na chování instalovaných apps bez nutnosti kontaktovat vývojáře nebo procházet dokumentaci. Viditelnost API volání za posledních 30 dní pomáhá identifikovat nepoužívané nebo příliš aktivní aplikace, což přímo ovlivňuje rozhodování o app stacku a nákladech.

    Tento trend transparentnosti doplňuje paralelní funkce Settings, která ukazuje, které apps využívají Extensions a Functions napříč checkoutem a online store — dohromady tvoří ucelený audit panel pro správu aplikačního ekosystému.
  zdroje:
    - title: "Track app activity and permissions from Settings — Shopify Changelog"
      url: "https://changelog.shopify.com/posts/track-app-activity-and-permissions-from-settings"
    - title: "Expirující offline access tokens povinné pro nové public apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-required/"
    - title: "Settings ukáže, které apps používají Extensions a Functions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/see-which-apps-use-extensions-functions/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Settings > Apps zobrazí Admin API activity, data privacy access, app history a Pixel connections — pro informované rozhodování o app stack merchanta."
tagy: [admin, apps, audit, security, privacy]
---

## Co se mění
**Settings > Apps** zobrazuje:
- **Admin API activity** per app (volání, frequency)
- **Data privacy access** detaily (GDPR-relevant)
- **App history** (instalace / updates)
- **Pixel connections**

Cíl: merchant vidí, co konkrétní app dělá, a může se rozhodnout, jestli ji chce.

## Použití v Integrátoru
**Nepoužíváme** — Admin UI feature. Pro našich klientech znamená, že naše integrace bude lépe viditelné v jejich app audit (pro security review apod.).
