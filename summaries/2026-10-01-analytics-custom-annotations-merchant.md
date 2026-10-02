---
date: 2026-10-01
title: "Analytics: merchant si přidá vlastní annotations na time-series reports"
title_en: "Add your own notes to Shopify Analytics"
slug: analytics-custom-annotations-merchant
zdroj: https://changelog.shopify.com/posts/add-your-own-notes-to-shopify-analytics
shrnuto_dne: 2026-10-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchant si nově zaznamenává business context (kampaně, změny dodavatele, cen) sám přímo v Analytics, takže u klientů lze doporučit pravidelné poznámky k hlavním změnám v obchodě a případné app-added annotations tím jen doplnit."
dotcene_klienty: []
souvisejici: [app-added-annotations-analytics-charts, view-app-added-annotations-analytics, annotations-analytics-events]
tldr: "Merchant a jeho tým si teď mohou v Shopify Analytics přidávat vlastní annotations k time-series reportům s titulkem, popisem, datem nebo rozsahem a typem, takže vysvětlení výkyvů zůstane přímo u dat."
tagy: [analytics, annotations, time-series, business-context, reporting]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Annotations jsou kontextové značky v Shopify Analytics, které se zobrazují u time-series reportů a vysvětlují, co se v obchodě odehrálo v daném dni nebo období, aniž by měnily samotná data v reportu. Dosud je do Analytics vkládaly Shopify samo (systémové a produktové události, viz článek z 2026-05-05) a nainstalované aplikace přes Annotations API (články z 2026-07-24 a 2026-07-29). Tato novinka z 2026-10-01 přidává poslední chybějící zdroj: poznámky může psát přímo merchant a jeho tým.

    Při vytváření annotace se v panelu annotations zadává titulek, popis, datum nebo rozsah dat a typ annotace. Typ lze vybrat z předdefinovaných kategorií nebo si vytvořit vlastní. Shopify jako příklady uvádí spuštění kampaně, změnu dodavatele, promo akci nebo zlepšení interního procesu. Merchant tak může k výkyvu v datech zaznamenat i to, co Shopify ani žádná aplikace nevidí, například výpadek, změnu cen nebo jednání s dodavatelem.

    Existující annotations lze upravovat, mazat a u každé je vidět, kdo ji vytvořil. Annotations jdou také vyhledávat a filtrovat, takže se v jednom místě sejdou poznámky od týmu, od integrovaných aplikací i od Shopify. Přístup mají staff účty s oprávněním Reports. Vysvětlení tak zůstává uložené vedle performance dat pro pozdější použití, například při týdenním review nebo při předávání agendy novému členovi týmu.
  zdroje:
    - title: "Shopify: Add your own notes to Shopify Analytics"
      url: "https://changelog.shopify.com/posts/add-your-own-notes-to-shopify-analytics"
    - title: "App-added annotations na Analytics chartech — apps přidávají business context"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-added-annotations-analytics-charts/"
    - title: "App-added annotations viditelné na Analytics chartech (merchant-side)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/view-app-added-annotations-analytics/"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Merchant a jeho staff si nově mohou přidávat vlastní annotations k time-series reportům v Shopify Analytics. V annotations panelu se zadává titulek, popis, datum nebo rozsah dat a typ annotace, přičemž typ je buď z předdefinovaných kategorií, nebo vlastní. Annotation slouží k zachycení business contextu: spuštění kampaně, změna dodavatele, promo akce, změna cen, výpadek nebo zlepšení interního procesu.

Existující annotations lze editovat a mazat a u každé je vidět, kdo ji vytvořil. Annotations se dají vyhledávat a filtrovat napříč zdroji, tedy poznámky od kolegů, od aplikací i od Shopify samotného. Vidí je staff členové s oprávněním Reports. Vysvětlení výkyvu tak zůstává přímo vedle performance dat a nezávisí na externí dokumentaci, sdíleném spreadsheetu nebo paměti jednotlivců. Annotations stále nemění podkladová data reportu, jde čistě o kontextovou vrstvu.

## Časová osa

- 2026-05-05 — Annotations jako Shopify-generovaná vrstva kontextu v Analytics (produktové a systémové eventy)
- 2026-07-24 — app-added annotations: aplikace mohou annotations do chartů vkládat přes Annotations API
- 2026-07-29 — merchant-side pohled: annotations od aplikací jsou viditelné a označené jménem nebo logem appky
- 2026-10-01 — tento changelog: merchant a jeho tým si přidávají vlastní annotations přímo v Analytics

## Dopad pro nás

**Pro vývojáře:** Žádná API změna se v changelogu neuvádí, jde o merchant-facing funkci v adminu. Pro appky, které annotations posílají přes Annotations API, to znamená, že se jejich annotations budou v Analytics míchat s poznámkami od merchanta i od Shopify. Dává smysl držet jméno a ikonu appky srozumitelné a texty annotací stručné, aby se mezi lidskými poznámkami neztratily.

**Pro PM / PO:** Užitečný a levný argument vůči klientům, kteří řeší, proč se jim v datech hýbou tržby nebo konverze. Doporučení je zavést si v týmu klienta drobný zvyk: každou větší změnu (kampaň, změna ceníku, nový dodavatel, výpadek, release na webu) zapsat jako annotation. Při pozdějším vyhodnocování pak nemusí nikdo dohledávat, co se v daném týdnu dělo. Dává to smysl i pro naše dodávky, například release nové funkce nebo změny v košíku lze zaznamenat jako annotation a zpětně je spárovat s dopadem na metriky. Funkce je dostupná jen pro staff s oprávněním Reports, takže je potřeba ověřit, kdo v klientově týmu ji reálně může používat.

## Použití v Integrátoru

Aktuálně nepoužíváme, jde o funkci v merchantově adminu bez dopadu na naše integrace. Relevantní jako doporučení pro klienty a případně jako doplněk k app-added annotations, pokud bychom pro klienta stavěli appku s marketingovou, cenovou nebo supply-chain logikou.
