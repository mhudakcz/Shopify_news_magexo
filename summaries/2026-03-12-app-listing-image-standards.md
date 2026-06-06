---
date: 2026-03-12
title: "Jasnější standardy pro app listing obrázky"
title_en: "Clearer standards for app listing images"
slug: app-listing-image-standards
zdroj: https://shopify.dev/changelog/clearer-standards-for-app-listing-images
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Shopify App Store listings. Nepublikujeme apps."
dotcene_klienty: []

kontext:
  background: |
    App listing obrázky jsou screenshoty a grafiky, které vývojáři přidávají k záznamu své aplikace v Shopify App Store. Jsou to vizuální prvky zobrazené přímo na stránce aplikace a slouží potenciálním zákazníkům jako první ukázka toho, jak aplikace vypadá a co umí.

    Shopify App Store spravuje přísný proces schvalování aplikací prostřednictvím sady číslovaných požadavků (requirements). Sekce 4.4 se historicky věnuje media obsahu v listingu — pravidla pro obrázky procházejí postupným zpřísňováním s cílem zajistit, aby zákazníci mohli kvalifikovaně porovnávat aplikace ještě před instalací. Motivací je snížení počtu instalací vedených klamavou nebo opakující se grafikou.

    Pro vývojáře publikující aplikace v App Store platí tyto nové povinnosti od 26. března 2026: obrázky musí zobrazovat skutečné uživatelské rozhraní aplikace bez generického pozadí a každý snímek v galerii musí zobrazovat jinou část funkcionality. Porušení těchto pravidel může vést k odmítnutí nebo stažení aplikace při následném auditu.

    Tato změna zapadá do širšího trendu zpřísňování kvality v App Store — souběžně Shopify zavedlo structured tracking auditů i nových submission reviewů přímo v Partner Dashboardu, kde vývojáři mohou sledovat konkrétní nesplněné požadavky a komunikovat přímo s reviewery.
  zdroje:
    - title: "Clearer standards for app listing images – Shopify Changelog"
      url: "https://shopify.dev/changelog/clearer-standards-for-app-listing-images"
    - title: "Nový workflow pro submission aplikace v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/new-app-submission-experience-partner-dashboard/"
    - title: "App quality checks konsolidovány v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-quality-checks-partner-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Requirements 4.4.4 a 4.4.5 vyžadují jasné, unikátní app listing obrázky bez pozadí a duplikátů."
tagy: [app-store, listings, marketing]
---

## Co se mění
Shopify App Store zpřísňuje standardy pro listing obrázky:
- **4.4.4** — obrázky musí jasně ukazovat UI aplikace bez generického pozadí
- **4.4.5** — žádné duplicitní obrázky napříč slidy

## Použití v Integrátoru
**Nepoužíváme** — týká se publikovaných App Store apps. Naše integrace jsou custom apps.
