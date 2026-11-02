---
date: 2026-10-28
title: "Flow: trigger Product updated — automatizace reaguje na změnu až pěti vybraných polí produktu"
title_en: "Shopify Flow: Product updated trigger"
slug: flow-product-updated-trigger
zdroj: https://changelog.shopify.com/posts/shopify-flow-product-updated-trigger
zdroj_kanal: merchant-changelog
editions_release: fall-2026
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý dopad na kód nemáme, changelog neuvádí žádné API. Trigger ale může u merchantů nahradit část logiky, která dnes stojí na webhooku změny produktu a porovnávání hodnot, pokud stačí sledovat nejvýše pět polí, a hodí se jako spouštěč workflow, který pak volá externí systém nebo naše akce."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-operations", "flow-permissions-version-history", "flow-triggers-inventory-transfer", "flow-trigger-lifecycle-callback-relative-urls"]
tldr: "Shopify Flow má nový trigger Product updated, který spustí workflow při změně vybraných polí produktu nebo jeho variant (tagy, ceny, metafieldy, status a další). Vybrat lze nejvýše pět polí a trigger neposkytuje původní hodnoty, jen aktuální."
tagy: [shopify-flow, triggers, products, automation, metafields]
kontext:
  background: |
    Shopify Flow je no-code automatizační nástroj přímo v administraci. Workflow v něm vždy začíná triggerem, tedy událostí, na kterou má reagovat, a pokračuje volitelnou podmínkou a akcemi. Nový trigger Product updated spustí workflow, když se změní produkt nebo jeho varianta. Při nastavení merchant vybere, která pole se mají sledovat, a workflow se spustí jen tehdy, když se změní některé z vybraných polí. Podle changelogu lze vybrat nejvýše 5 polí a mezi příklady jsou tagy, metafieldy a ceny. Dokumentace v nápovědě doplňuje, že vybrat je potřeba aspoň jedno pole, že každá zvolená definice nebo namespace metafieldů se počítá do limitu pěti a že lze sledovat i pole variant (například cenu nebo název varianty), skupiny polí pro média, options, bundles a combined listings i běžná pole produktu jako status, tagy, title, vendor nebo typ produktu. Typický příklad z changelogu: nastavit hodnotu metafieldu podle jiných polí produktu.

    Trigger zapadá do Flow položek z Editions Fall '26 v tématu Operations, kde je uvedeno, že Flow triggery spouštějí automatizaci při změně ceny, tagu, metafieldu nebo jiného pole (viz [přehled tématu Operations](/Shopify_news_magexo/zmena/editions-fall-2026-operations/)). Že jde právě o tuto položku, je náš předpoklad, protože Editions stránka ji popisuje jen jednou větou a changelog na Editions neodkazuje. Archiv navíc ukazuje, že Flow v roce 2026 roste ve všech směrech: nové triggery pro inventory transfers, nativní akce nad většinou Admin API a v rámci Editions i oprávnění a historie verzí. Co přesně nový trigger nahrazuje nebo doplňuje z dřívějších product triggerů, changelog neříká, takže to neuvádíme.

    Pro merchanty je hlavní změnou jednodušší sestavení workflow, které má reagovat na změnu produktu, bez vlastní aplikace nebo webhooku. Pro vývojáře je důležité vědět, co trigger neumí: dává jen aktuální hodnoty (nové ceny nelze porovnat s původní), počet sledovaných polí je omezený, změny množství zásob nepokrývá (na to je samostatný trigger pro změnu inventory quantity varianty) a nevhodný je také pro scénáře typu přegeneruj vše při jakékoli změně. Dostupnost podle plánu ani rollout changelog neuvádí.
  zdroje:
    - title: "Shopify: Shopify Flow: Product updated trigger"
      url: "https://changelog.shopify.com/posts/shopify-flow-product-updated-trigger"
    - title: "Shopify Help Center: Product updated (Flow trigger)"
      url: "https://help.shopify.com/en/manual/shopify-flow/reference/triggers/product-updated"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Operations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-operations/"
    - title: "Archiv: Flow permissions a version history"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/flow-permissions-version-history/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Flow dostává trigger **Product updated**. Workflow s tímto triggerem se spustí, když se změní produkt nebo jeho varianta, ale jen tehdy, když se změní některé z polí, která merchant při nastavení triggeru vybral. Changelog to popisuje jako snazší způsob, jak reagovat na změny produktu, například nastavit hodnotu metafieldu podle jiných polí produktu.

Jak trigger funguje, podle changelogu a nápovědy:

- **Sledovaná pole:** vybrat se musí aspoň jedno pole a nejvýše **pět**. Dostupné jsou běžná pole produktu (status, tagy, title, vendor, typ produktu), pole variant (například `variants.price` a `variants.title`) a skupiny polí pro média, options, bundles a combined listings. Každá vybraná definice nebo namespace metafieldů se počítá do limitu pěti.
- **Spuštění:** workflow běží jen při změně vybraného pole. Změna pole, které sledované není, ho nespustí.
- **Nové produkty:** vytvoření produktu spustí workflow jen tehdy, když sledujete pole z oblasti médií, options, variant, bundles nebo combined listings. Samotná pole na úrovni produktu při vytvoření workflow nespustí. Pro nové produkty je určený trigger Product created.
- **Výstupní proměnné:** Product a Shop jsou k dispozici vždy. Product Variant, Product Option, Media a Combined Listing Product se objeví jen tehdy, když sledujete související pole, a při změně jiného pole mohou být prázdné. Před použitím v akci proto patří do workflow podmínka, která ověří, že hodnota existuje.
- **Jen aktuální hodnoty:** trigger neposkytuje původní hodnoty změněných polí. Novou cenu workflow dostane, původní ne.
- **Akce:** použít lze libovolnou akci, která přijímá produkt, například přidání nebo odebrání tagu, správa kolekcí, publikování a skrytí nebo aktualizace metafieldů produktu.

**Co stojí za pozornost oproti tomu, jak se novinka může číst:** nejde o trigger na jakoukoli změnu jakéhokoli pole. Limit je pět polí a změny množství zásob trigger nepokrývá, protože pro ně nápověda odkazuje na samostatný trigger pro změnu inventory quantity varianty.

**Co zdroj neříká:**

- **Dostupnost.** Changelog neuvádí plán, země ani postupný rollout. Datum 28. 10. 2026 je datum zveřejnění, ne potvrzené datum nasazení u každého obchodu.
- **Vztah k dalším product triggerům.** Z dokumentace nevyplývá, zda nový trigger nahrazuje starší specializované triggery, nebo je jen doplňuje.
- **Frekvence a dávkování.** Nic není uvedeno o tom, jak se chová při hromadné úpravě tisíců produktů (import, bulk editor, aplikace). Před nasazením u velkého katalogu ho stojí za to otestovat.
- **Propojení s Editions.** Editions stránka zmiňuje Flow triggery na změnu ceny, tagu a metafieldu jednou větou. Že je to tato položka, předpokládáme, ale zdroj to nepotvrzuje.

## Časová osa

- **2026-03-24** — Flow získává většinu polí Admin API jako nativní akce ([flow-more-fields-admin-api](/Shopify_news_magexo/zmena/flow-more-fields-admin-api/))
- **2026-04-30** — nové Flow triggery pro inventory transfers ([flow-triggers-inventory-transfer](/Shopify_news_magexo/zmena/flow-triggers-inventory-transfer/))
- **2026-10-08** — zjednodušené lifecycle callbacky pro vlastní Flow trigger extensions ([flow-trigger-lifecycle-callback-relative-urls](/Shopify_news_magexo/zmena/flow-trigger-lifecycle-callback-relative-urls/))
- **2026-10-28** — Editions Fall '26, téma Operations: Flow triggery na změnu ceny, tagu a metafieldu ([editions-fall-2026-operations](/Shopify_news_magexo/zmena/editions-fall-2026-operations/)) a oprávnění s historií verzí ([flow-permissions-version-history](/Shopify_news_magexo/zmena/flow-permissions-version-history/))
- **2026-10-28** — changelog Shopify Flow: Product updated trigger; rollout a plány neuvedeny

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbíjí a nic není povinné. Changelog neuvádí žádné API ani scope, takže pro stávající kód se nemění nic. Tři věci stojí za ověření, a jde o naše úvahy, ne o údaje ze zdroje:

- **Alternativa k webhooku na změnu produktu.** Reakce na změnu pole se dosud typicky řešila webhookem na aktualizaci produktu a vlastní logikou, která porovnávala hodnoty. Pokud merchant potřebuje jen pár konkrétních polí (tag, cenu, jeden dva metafieldy) a následná akce je přímo ve Flow, může být trigger jednodušší než vlastní endpoint. Pokud ale potřebujeme původní hodnotu (staré a nové ceny), širší sadu polí než pět nebo spolehlivou synchronizaci celého produktu do externího systému, webhook a vlastní logika zůstávají vhodnější volbou, protože trigger dává jen aktuální stav a sleduje omezený počet polí.
- **Pozor na smyčky.** Častý vzorec je změnit metafield nebo tag podle jiných polí produktu. Pokud akce workflow mění pole, které trigger sám sleduje, hrozí, že workflow spustí samo sebe. Sledovaná pole a pole měněná v akcích je dobré držet oddělená a v podmínce ověřit, že změna je potřeba. Chování Flow při takové smyčce ve zdroji popsané není.
- **Prázdné výstupní proměnné.** Product Variant, Option, Media a Combined Listing Product mohou být při změně jiného pole prázdné. Pokud pro merchanty stavíme workflow nebo šablony, je nutné před každým použitím těchto proměnných přidat podmínku na existenci hodnoty.

**Pro PM / PO:** Je to příležitost, ne povinnost. Merchantům s menšími a středními katalogy může trigger umožnit automatizaci, na kterou dřív potřebovali vývojáře: když se změní cena nebo tag, nastav metafield, přidej produkt do kolekce, skryj ho nebo ho publikuj. Doporučení:

- Projít u aktivních merchantů, jaké automatizace dnes řeší ručně nebo vlastním kódem na základě změny produktu, a vybrat ty, kde stačí sledovat nejvýše pět polí.
- Při návrhu workflow počítat s tím, že trigger zná jen aktuální hodnoty. Požadavky typu upozorni, když cena klesne o více než 20 %, nebo reaguj na to, co bylo původně v poli, tento trigger sám nesplní.
- U velkých katalogů a hromadných importů nejdřív otestovat na vývojovém obchodě, kolik běhů workflow se při hromadné změně spustí. Zdroj o chování při hromadných úpravách mlčí.
- Nepočítat s ním pro hlídání skladových zásob, na to Shopify uvádí samostatný trigger.

Nalehavost je střední. Žádný termín není a nic se nemění ve stávajících workflow, ale jde o užitečné zjednodušení, které stojí za to nabídnout při příštím auditu automatizací u merchantů.

## Použití v Integrátoru

**Možná** — nejde o API ani změnu kódu, ale u merchantů, kteří řeší automatizace nad změnou tagů, cen nebo metafieldů, může trigger nahradit vlastní webhook handler a odlehčit integraci. Pokud potřebujeme původní hodnoty nebo širší sadu polí, zůstává vhodnější webhook s vlastní logikou.
