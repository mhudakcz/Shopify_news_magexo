---
date: 2026-10-12
title: "Průměrná doba načítání stránky a webu — statistiky 2027"
slug: blog-prumerna-doba-nacitani-stranky-statistiky-2027
zdroj: https://www.shopify.com/cz/blog/prumerna-doba-nacitani-stranky
shrnuto_dne: 2026-10-14
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Prahové hodnoty Core Web Vitals a čísla o dopadu pomalého načítání na konverze lze použít jako argumentační podklad při performance auditech e-shopů, bez přímého dopadu na kód."
dotcene_klienty: []
souvisejici: [blog-rychlost-nacitani-stranek-shopify-optimalizace, monitor-admin-web-vitals-dev-dashboard, online-store-script-tags-deprecated-2027]
tldr: "Shopify blog shrnuje benchmarky rychlosti webu pro rok 2027: žádný univerzální průměr neexistuje, rozhodují prahy Core Web Vitals (LCP do 2,5 s, INP do 200 ms, CLS do 0,1) a podle Shopify analýzy stojí každých 100 ms zpoždění zhruba 3,5 % konverzí."
tagy: [page-speed, performance, core-web-vitals, conversion, benchmarks, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Článek na českém Shopify blogu začíná poněkud nečekaným tvrzením: jedna univerzální průměrná doba načítání stránky ani celého webu podle něj neexistuje, protože výsledek závisí na obsahu, serveru, kódu a dalších faktorech. Místo jediného čísla proto doporučuje hodnotit rychlost přes Core Web Vitals, které se posuzují na 75. percentilu samostatně pro mobil a desktop. Prahové hodnoty jsou následující: LCP (Largest Contentful Paint) do 2,5 s je dobrý, nad 4 s špatný; INP (Interaction to Next Paint) do 200 ms je dobrý, nad 500 ms špatný; CLS (Cumulative Layout Shift) do 0,1 je dobrý, nad 0,25 špatný. Jako doplňkové metriky článek uvádí FCP (do 1,8 s) a TTFB (do 0,8 s). Orientační pravidlo z FAQ, že by web měl na desktopu naskočit do zhruba 3 sekund a na mobilu do 5 sekund, je v textu uvedeno bez zdroje.

    Největší část článku tvoří statistiky o dopadu rychlosti na chování zákazníků. Shopify uvádí vlastní analýzu aktivních obchodů z roku 2026, podle které každých 100 ms zpoždění snižuje konverzi přibližně o 3,5 %. Yottaa Web Performance Index 2025 zase uvádí, že zkrácení mobilního načítání o jednu sekundu zvedlo konverze o 3 %, a že stránky načítané déle než 4 sekundy měly o 22 % nižší konverzi a bounce rate 63 %, tedy o 17 procentních bodů vyšší než rychlejší stránky. Další citované průzkumy (Contentsquare, Conviva, Clutch, Queue-it) se shodují, že pomalý web ničí důvěru: například 44 % spotřebitelů vnímá pomalý web jako přímý důvod nedůvěry a 87 % by raději počkalo na spolehlivý web než mít okamžitý přístup na pomalý nebo chybný. Zmiňovaný benchmark Catchpoint ukazuje i geografické rozdíly, kdy homepage jednoho velkého retailera naskočila v Helsinkách za 2 sekundy, ale v Tokiu za 28,7 sekundy.

    Z technických benchmarků vychází najevo, že mobil je stále slabší místo. Podle Web Almanac 2025 splňuje Core Web Vitals 48 % mobilních webů oproti 56 % desktopových a mobil generuje téměř 65 % webového provozu. Chrome UX Report z května 2026 (přes 18,4 milionu domén) uvádí celkovou úspěšnost 55,9 %, přičemž nejhůře dopadá LCP (68,6 %), následuje CLS (81,3 %) a INP (86,6 %). Medián velikosti homepage vzrostl na 2,7 MB (meziročně +7,8 %), medián JavaScriptu na mobilu činí 632 KB a podle Yottaa tvoří aplikace třetích stran 44 % celkové doby načítání stránky, přičemž každá pomalá aplikace snižuje konverzi v průměru o 0,29 procentního bodu. Pro měření článek doporučuje Google PageSpeed Insights, GTmetrix, Pingdom a nově také Shopify web performance reporty v sekci Analytics > Reports, které shrnují posledních 30 dní reálných dat návštěvníků pro LCP, INP a CLS. Mezi praktickými tipy figurují komprese obrázků, odstranění nepotřebného JavaScriptu, odinstalace nepoužívaných aplikací, audit skriptů třetích stran, filtr image_url v Liquidu a globální CDN, kterou Shopify poskytuje bez příplatku.
  zdroje:
    - title: "Shopify: Průměrná doba načítání stránky a webu — statistiky 2027"
      url: "https://www.shopify.com/cz/blog/prumerna-doba-nacitani-stranky"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify blog v novém článku sbírá aktuální statistiky o rychlosti načítání webů a staví je do kontextu e-commerce. Hlavní sdělení je, že neexistuje jedno správné číslo, které by šlo označit za průměrnou dobu načítání. Rychlost je potřeba posuzovat přes Core Web Vitals (LCP, INP, CLS), případně přes FCP a TTFB, vždy zvlášť pro mobil a desktop a na 75. percentilu reálných návštěv. Článek k tomu přikládá přehledovou tabulku prahů dobrý / vyžaduje zlepšení / špatný a připomíná, že podle Chrome UX Reportu splňuje všechny tři hlavní metriky jen necelých 56 % webů.

Druhá polovina textu ukazuje, kolik pomalý web stojí. Jádrem je Shopify analýza aktivních obchodů z roku 2026 s odhadem ztráty zhruba 3,5 % konverzí na každých 100 ms zpoždění, doplněná o data z Yottaa, Contentsquare, Conviva, Clutch a Queue-it o bounce rate, opouštění nákupů a důvěře zákazníků. Články z dřívějška přitom operují s jinými čísly (například s dopadem celé sekundy nebo desetiny sekundy), takže stojí za to při přípravě argumentů pro obchodníky vždy uvádět konkrétní zdroj a rok. Závěr článku se věnuje měření (PageSpeed Insights, GTmetrix, Pingdom, nové Shopify performance reporty v administraci) a praktickým krokům: komprese obrázků, úklid JavaScriptu a aplikací, audit skriptů třetích stran, filtr image_url v Liquidu a využití vestavěné CDN. Text zároveň propaguje nástroj Shopify Speed Audit.

## Pro koho je to relevantní

Jde o evergreen obsahový článek bez jakéhokoli API nebo produktového dopadu, takže nevyžaduje žádnou akci. Využijeme ho hlavně jako zdroj aktuálních čísel při performance auditech e-shopů a při komunikaci s obchodníky: přehled prahů Core Web Vitals, statistika o dopadu zpoždění na konverzi a zejména zjištění, že aplikace třetích stran tvoří téměř polovinu doby načítání, dobře podpoří doporučení uklidit nepoužívané aplikace a konsolidovat trackovací skripty. Tematicky navazuje na dřívější článek o optimalizaci rychlosti načítání pro Shopify e-shopy, na přesun monitoringu web vitals do Dev Dashboardu a na deprecaci Online Store Script Tags, kde se správa vkládaných skriptů stává nutností. Pro vývojáře témat je užitečná zmínka o Shopify web performance reportech v sekci Analytics, které umožňují sledovat reálná data LCP, INP a CLS bez externích nástrojů.
