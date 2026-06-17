---
date: 2026-04-23
title: "Nové důvody odinstalace aplikace v Partner Dashboardu"
title_en: "Update to app uninstall reasons"
slug: app-uninstall-reasons-update
zdroj: https://shopify.dev/changelog/update-to-app-uninstall-reasons
zdroj_dokumentace: null
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

ucinnost_od: null
deprecation_do: null
migrace_doporucena_do: null

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Partner Dashboardu pro publikované apps ve Shopify App Store. Naše integrace běží jako custom apps pro konkrétní klienty."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    Důvody odinstalace aplikace (uninstall reasons) jsou strukturované kategorie zpětné vazby, které Shopify sbírá od merchantů v okamžiku, kdy odinstalují aplikaci z App Store. Merchant musí před dokončením odinstalace vybrat jednu z nabízených možností — proces je povinný. Kategorie pokrývají oblasti jako testování, náklady, problémy s podporou, nekompatibilitu s obchodem nebo dočasné pozastavení provozu.

    Shopify App Store existuje od roku 2009 a analytika odinstalací byla dlouhodobě omezená na hrubá čísla bez kontextu. Vývojáři měli potíže rozlišit, zda aplikaci opouštějí zákazníci kvůli ceně, technickým problémům nebo prostě proto, že ji pouze testovali. Granulárnost nových kategorií přímo reaguje na tuto mezeru — cílem Shopify je poskytnout vývojářům „jasné a použitelné poznatky" o chování merchantů.

    V praxi tato data umožňují vývojářům App Store aplikací lépe prioritizovat vývoj: vysoký podíl odinstalací s důvodem „problémy s integrací" signalizuje technický dluh, zatímco „vysoké náklady" otevírají diskusi o cenovém modelu. Nové kategorie jsou viditelné v sekci App Analytics v Partner Dashboardu a doplňují metriky jako install rate nebo aktivní instalace.

  zdroje:
    - title: "Shopify Changelog: Update to app uninstall reasons"
      url: "https://shopify.dev/changelog/update-to-app-uninstall-reasons"
    - title: "Nové rozhraní pro odesílání aplikací v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/new-app-submission-experience-partner-dashboard/"
    - title: "Kontroly kvality aplikací v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-quality-checks-partner-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6

tldr: "Partner Dashboard má nové, granulárnější důvody odinstalace včetně 'testing' a 'compatibility issues'."
tagy: [partners, app-store, uninstall, metrics]
editions_release: spring-2026
---

## Co se mění
Partner Dashboard zavádí **revidované důvody odinstalace** aplikací z Shopify App Store. Nové možnosti zahrnují například „testing", „compatibility issues" a další granulárnější kategorie, aby přesněji odrážely důvody merchantů.

## Dopad pro nás
**Pro vývojáře:**
Žádný kódový dopad. Změna je v UI Partner Dashboardu pro vlastníky publikovaných aplikací.

**Pro PM / PO:**
Pokud bychom v budoucnu publikovali aplikaci na Shopify App Store, přesnější uninstall důvody by pomohly při interpretaci adoption metrik.

## Použití v Integrátoru
**Nepoužíváme** — týká se publikovaných aplikací ve Shopify App Store. Naše integrace běží jako custom apps pro konkrétní klienty, ne jako veřejné App Store apps.
