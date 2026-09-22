---
date: 2026-09-21
title: "Shopify Analytics: přesnější session measurement (lepší bot filtering)"
title_en: "Shopify Analytics session measurement improvements"
slug: analytics-session-measurement-bot-filtering
zdroj: https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements
shrnuto_dne: 2026-09-22
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-21
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud reportujeme klientům session-based metriky, po 21. 9. 2026 uvidí skok v datech - je potřeba to vysvětlit jako novou baseline, ne jako propad výkonu."
dotcene_klienty: []
souvisejici: [reduced-bot-noise-abandoned-checkouts, cumulative-metrics-analytics, set-track-targets-shopify-analytics]
tldr: "Shopify od 21. 9. 2026 přesněji odlišuje lidské návštěvníky od botů, takže sessions a navazující metriky mohou klesnout - jde o čistší data, ne o propad výkonu obchodu."
tagy: [analytics, sessions, bots, traffic, measurement, accuracy]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Analytics počítá sessions jako základní jednotku návštěvnosti, ze které se odvozuje řada dalších metrik - conversion rate, add-to-cart rate, bounce rate, pageviews per session i online store visitors. Klasifikace toho, co je "reálná" session a co automatizovaný bot traffic, přitom dlouhodobě nebyla napříč platformou úplně konzistentní. Do dat se tak mohl promítat provoz generovaný scrapery, monitoring nástroji nebo jinými automatizovanými klienty, který uměle nafukoval traffic metriky, aniž by odpovídal skutečné aktivitě nakupujících.
    
    Aktualizace mění způsob, jakým Analytics session měří a klasifikuje. Platforma se nově zaměřuje primárně na human visitors a konzistentněji rozpoznává a odděluje bot/systémový traffic napříč všemi reporty. Zároveň si dává pozor, aby neztratila validní zákaznické journeys, které z technických důvodů nemusí obsahovat standardní pageview eventy (např. rychlé interakce přes cache nebo prefetch). Cílem je čistší obraz reálné aktivity nakupujících, ne změna metodiky měření objednávek.
    
    Dopad se projeví hlavně na session-based metrikách: sessions, conversion rate, add-to-cart rate, checkout metriky, bounce rate, pageviews per session, online store visitors a search counts se po 21. 9. 2026 mohou zobrazovat jinak, typicky s poklesem díky odečtení dřív nesprávně započítaného bot trafficu. Naopak orders, sales a customer counts touto změnou vůbec nejsou dotčeny - jde čistě o zpřesnění measurement, ne o změnu v obchodních datech. Shopify proto doporučuje brát data od 21. 9. 2026 jako novou baseline při porovnávání session-based metrik v čase.
  zdroje:
    - title: "Shopify: Shopify Analytics session measurement improvements"
      url: "https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements"
  generated_at: 2026-09-22T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify upravil interní logiku měření a klasifikace sessions v Analytics. Nově se platforma zaměřuje primárně na **human visitors** a konzistentněji napříč všemi reporty rozpoznává a odděluje bot/systémový traffic, který dřív mohl být nesprávně započítáván jako reálná návštěvnost.

Součástí změny je i opatrnější zacházení s validními zákaznickými journeys, které nemusí obsahovat standardní pageview eventy - ty zůstávají v datech zachovány, aby nedošlo k podhodnocení skutečné aktivity.

Dotčené metriky:

- Sessions
- Conversion rate
- Add-to-cart rate
- Checkout metriky
- Bounce rate
- Pageviews per session
- Online store visitors
- Search counts

Naopak **orders, sales a customer counts se touto změnou nemění** - jde výhradně o zpřesnění měření návštěvnosti, ne o zásah do obchodních dat.

## Časová osa

- **21. 9. 2026** - vylepšené session measurement aktivní pro všechny merchanty
- Od tohoto data doporučuje Shopify brát data jako **novou baseline** při srovnávání session-based metrik s obdobím před změnou
- Beze změny pro orders/sales/customer data - žádná migrace ani akce potřeba

## Dopad pro nás

**Pro vývojáře:** Žádná API ani datová struktura se nemění, jde o interní přepočet na straně Shopify. Pokud stahujeme session-based metriky přes ShopifyQL nebo Analytics API pro klientské reporty/dashboardy, je dobré si poznamenat datum 21. 9. 2026 jako předěl - srovnání "před/po" bez kontextu by mohlo vypadat jako propad výkonu, i když jde jen o vyčištění bot trafficu.

**Pro PM / PO:** Stojí za to preventivně upozornit klienty, kterým pravidelně reportujeme sessions, conversion rate nebo bounce rate, že po 21. 9. 2026 uvidí skok v datech. Jde o zpřesnění metodiky, ne o reálný propad návštěvnosti nebo výkonu e-shopu - orders a sales zůstávají beze změny, takže je to dobrý argument při vysvětlování rozdílu v grafech.

## Použití v Integrátoru

Přímá akce není potřeba - jde o transparentní změnu na straně Shopify Analytics. Relevantní je hlavně pro monitoring/reporting scénáře, kde session-based metriky sledujeme v čase a mohli bychom si jinak mylně vyložit pokles jako problém na straně klienta.
