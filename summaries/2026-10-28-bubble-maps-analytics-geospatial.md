---
date: 2026-10-28
title: "Shopify Analytics: bubble maps — geospatial view sales per region (hotspots identifikace)"
title_en: "Find your sales hotspots with bubble maps in Shopify Analytics"
slug: bubble-maps-analytics-geospatial
zdroj: https://changelog.shopify.com/posts/find-your-sales-hotspots-with-bubble-maps-in-shopify-analytics
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o funkci v administraci bez zmínky o API, ale mapa prodejů podle doručovacích adres může nahradit ruční geografické exporty a pomoci při rozhodování o skladových lokacích a regionálním marketingu u obchodů, které řešíme."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-operations, bubble-sunburst-charts-analytics, scatter-plots-radar-charts-analytics, analytics-purchase-orders-reports]
tldr: "Shopify Analytics nově umí bubble maps: blízké doručovací nebo fakturační adresy se seskupí do bublin podle zvolené metriky (objednávky, tržby), takže je na první pohled vidět, kde se prodává nejvíc. Mapa je nový report, jde ji přidat do libovolného reportu přes pole adresy i na dashboard."
tagy: [analytics, bubble-maps, geospatial, reports, visualization, insights]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics dostalo vizualizaci bubble map. Obchodník, který odesílá objednávky, dosud musel koncentraci prodejů podle místa zjišťovat tak, že report seskupil podle města nebo regionu, nebo data vyexportoval do tabulky. Bubble map to dělá přímo v reportu: blízké doručovací nebo fakturační adresy seskupí do bublin, jejichž velikost odpovídá zvolené metrice, například počtu objednávek nebo celkovým tržbám. Mapu lze přibližovat, posouvat a po kliknutí na bublinu zobrazit detail.

    Funkce je ve změnovém záznamu z 28. října 2026 popsána třemi místy použití: nový report Order hotspots by shipping location, libovolný report po přidání pole Shipping address nebo Billing address a karty na dashboardu. Tentýž den ji Shopify uvedl v přehledu Editions Fall '26 v tématu Operations pod názvem Geospatial maps. Navazuje tak na sérii nových typů vizualizací, které Analytics dostávalo v průběhu roku (scatter a radar charts 4. června, bubble a sunburst charts 17. června).

    Pro merchanty je hlavní hodnota v rychlé orientaci. Shopify jako příklady rozhodnutí uvádí, kde držet zásoby, ze které lokality expedovat a kam zacílit regionální marketing. Z toho se dá odvodit i opačný pohled (náš výklad, ne formulace Shopify): místa bez bublin nebo s malými bublinami ukazují kandidáty na marketingový tlak. Pozor ale na to, že mapa ukazuje absolutní hodnotu zvolené metriky, ne penetraci vůči počtu obyvatel, takže malá bublina může znamenat i malé město. Post také neuvádí, na jaké geografické úrovni se adresy seskupují (stát, region, město, PSČ), ani dostupnost podle tarifů a případné API nebo ShopifyQL rozhraní, takže před slibováním konkrétních výstupů je vhodné funkci ověřit v adminu.
  zdroje:
    - title: "Shopify: Find your sales hotspots with bubble maps in Shopify Analytics"
      url: "https://changelog.shopify.com/posts/find-your-sales-hotspots-with-bubble-maps-in-shopify-analytics"
    - title: "Shopify Help Center: Bubble map"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/selecting-visualizations#bubble-map"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Analytics přidává vizualizaci **bubble map** pro obchodníky, kteří odesílají objednávky. Mapa seskupuje blízké doručovací nebo fakturační adresy do bublin a velikost každé bubliny určuje zvolená metrika (například počet objednávek nebo celkové tržby). Mapu lze přibližovat, posouvat a kliknutím na bublinu získat podrobnější pohled. Odpadá tím nutnost seskupovat report podle města či regionu nebo data exportovat do tabulky.

Bubble map se objevuje na třech místech:

- **Nový report Order hotspots by shipping location**, hotová mapa prodejních hotspotů podle doručovacích adres.
- **Libovolný report**, do kterého se přidá pole **Shipping address** nebo **Billing address**.
- **Karty na dashboardu**, takže mapu lze mít trvale na očích.

Funkce je dostupná všem, kdo mají přístup k reportům v Analytics. Post nezmiňuje žádné omezení podle tarifu.

Co post neříká: na jaké geografické úrovni se adresy seskupují (země, region, město, PSČ), jak se bubliny chovají při různém přiblížení, ani zda je výsledek dostupný mimo administraci (Admin API, ShopifyQL). Zadání mluví o regionech, městech a PSČ, ale zdroj uvádí jen seskupování blízkých adres, proto tyto úrovně berte jako nepotvrzené, dokud je neověříte přímo v reportu.

## Časová osa

- **2026-06-04** - Analytics dostává scatter plots a radar charts.
- **2026-06-17** - Přibývají bubble charts a sunburst charts.
- **2026-10-28** - Shopify changelog oznamuje bubble maps jako právě uvolněnou funkci a stejný den je uvádí v Editions Fall '26 (téma Operations, položka Geospatial maps).
- **Rollout / tarify** - post uvádí, že funkce byla právě uvolněna, bez dalšího harmonogramu a bez podmínek podle plánů.

## Dopad pro nás

**Pro vývojáře:** Jde o změnu v uživatelském rozhraní Analytics, post nezmiňuje žádné nové objekty, pole ani verzi API. Žádný kód není potřeba měnit. Jediná technická otázka je, zda lze stejná data získat programaticky (například přes ShopifyQL nad adresou objednávky), pokud bychom pro někoho stavěli vlastní geografické přehledy nebo automatizace. Ze zdroje to nepoznáme, takže před jakýmkoli závazkem je to nutné ověřit v dokumentaci. Pokud dnes pro některý obchod skládáme prodeje podle regionů z exportů, stojí za to porovnat naše čísla s novým reportem.

**Pro PM / PO:** Pro obchody, které odesílají zboží a řeší rozmístění zásob, výběr expedičního místa nebo regionální kampaně, je to nová příležitost bez nákladů navíc: rychlý vizuální přehled, kde se prodává, přímo v reportech a na dashboardu. Dá se využít v konzultacích o skladových lokacích (viz také [reporty nad purchase orders](/Shopify_news_magexo/zmena/analytics-purchase-orders-reports/)) a při plánování marketingu pro CZ a SK trh, kde může být zajímavé porovnání koncentrace objednávek mezi velkými městy a zbytkem země. Doporučená opatrnost: bubliny ukazují absolutní hodnoty, ne podíl na populaci, a post nezmiňuje úroveň seskupení, takže závěry o málo zasažených regionech je dobré podložit i dalšími daty. Naléhavost je nízká, nejde o breaking změnu ani o povinnou akci.

## Použití v Integrátoru

Přímý technický dopad je minimální, protože nejde o změnu API. Relevantní je hlavně při konzultacích o skladových lokacích, expedici a regionálním marketingu u obchodů, kde nativní mapa prodejů může nahradit ruční geografické exporty.
