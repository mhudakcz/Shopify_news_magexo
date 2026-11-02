---
date: 2026-10-28
title: "Shopify App Store: estimated local-currency prices (FX conversion v listing)"
title_en: "Shopify App Store: Estimated local-currency prices"
slug: app-store-estimated-local-currency-prices
zdroj: https://shopify.dev/changelog/posts/estimated-local-currency-prices
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Odhadované ceny v lokální měně se týkají aplikací listovaných v App Store, které účtují přes Shopify App Pricing nebo Billing API v USD. Naše integrace běží jako custom apps mimo App Store billing, takže jde o referenční informaci, ale pomáhá při doporučování aplikací třetích stran českým merchantům."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, app-pricing-move-existing-subscriptions, shopify-app-pricing-usage-subscriptions]
tldr: "Merchanti s billing měnou jinou než USD (včetně CZK, celkem 14 měn) vidí od 28. 10. 2026 v App Store i v adminu odhadované ceny aplikací ve své měně místo čistých USD. Vývojáři nic neměnit nemusí a dál nastavují ceny v USD, Shopify každý poplatek stále přepočítává při jeho vystavení."
tagy: [app-store, pricing, currency, fx, international, partners]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Aplikace v Shopify App Store dosud vývojáři cenili v USD a merchant, jehož účet je fakturován v jiné měně, u nich viděl jen dolarovou cenu a upozornění, že všechny poplatky se účtují v USD. To dělalo z porovnání plánů a odhadu měsíčních nákladů zbytečnou početní úlohu, zejména mimo USA. Shopify nyní tuto mezeru zavírá: pro merchanty fakturované v jedné ze 14 podporovaných měn (AUD, CAD, CHF, CZK, DKK, EUR, GBP, INR, JPY, NOK, PLN, RON, SEK a SGD) zobrazuje odhadovanou cenu v jejich billing měně, například ve tvaru 17,67 EUR za měsíc. Odhad se ukazuje v listingu aplikace a na kartách aplikací v App Store, na stránce výběru plánu, na stránce schválení poplatku a v detailech fakturace aplikace v adminu. U každého odhadu je upozornění s použitým směnným kurzem a odkazem na nápovědu k fakturaci v lokální měně.
    
    Je důležité, co se nemění. Vývojáři dál nastavují ceny v USD, ať už přes Shopify App Pricing, nebo přes Billing API, a nemusí nic upravovat. Shopify stále převádí každý konkrétní poplatek do billing měny merchanta v okamžiku, kdy ho vystavuje, takže skutečně účtovaná částka se může od odhadu mírně lišit podle kurzu v daný den. Merchanti fakturovaní v USD vidí dál dolarové ceny. Poplatky vytvořené přes Billing API přímo v jiné podporované měně zobrazují svou vlastní částku a ceny na stránkách, které si aplikace spravuje sama (například vlastní web nebo pricing stránka), se nepřepočítávají.
    
    Změna zapadá do širší linie Editions Fall '26, kde Developer téma obsahuje i položku Lokalizované odhadované ceny aplikací, vedle monetizačních novinek jako migrační nástroj App Pricing, neomezené private plány nebo výdělky partnerů za čtyři roky. Pro merchanty mimo USA, tedy i pro české obchody, snižuje tření při rozhodování, jestli si aplikaci pořídit. Pro vývojáře a partnery je to příležitost, protože jejich listing teď působí lokálně bez jakékoli práce navíc. Jediná praktická povinnost je zkontrolovat, jestli podpůrné materiály, screenshoty nebo ceníky v dokumentaci odpovídají tomu, co merchanti nově vidí.
  zdroje:
    - title: "Shopify: Shopify App Store: Estimated local-currency prices"
      url: "https://shopify.dev/changelog/posts/estimated-local-currency-prices"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Help Center: Local currency billing"
      url: "https://help.shopify.com/en/manual/your-account/manage-billing/local-currency"
    - title: "Shopify dev docs: Estimated prices in local currencies"
      url: "https://shopify.dev/docs/apps/launch/billing#estimated-prices-in-local-currencies"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
    - title: "Archiv: App Pricing — přesun stávajících subscriptions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-move-existing-subscriptions/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify od 28. 10. 2026 zobrazuje merchantům, kteří jsou fakturováni v jiné měně než USD, **odhadované ceny aplikací v jejich billing měně**. Dosud tito merchanti viděli pouze dolarovou cenu a hlášku, že všechny poplatky se účtují v USD. Nově vidí například cenu ve tvaru 17,67 EUR za měsíc.

Odhad se zobrazuje na těchto místech:

- listing aplikace a karty aplikací v **Shopify App Store**,
- stránka **výběru plánu**,
- stránka **schválení poplatku** (charge approval),
- detaily **fakturace aplikace** v adminu.

U každého odhadu je upozornění s použitým směnným kurzem a odkazem do Help Centra na stránku o fakturaci v lokální měně. Funkce platí pro merchanty fakturované v jedné ze 14 měn: **AUD, CAD, CHF, CZK, DKK, EUR, GBP, INR, JPY, NOK, PLN, RON, SEK a SGD**. Česká koruna je tedy mezi nimi.

**Co zůstává stejné:**

- Vývojáři dál nastavují ceny v USD (Shopify App Pricing nebo Billing API) a nemusí nic měnit.
- Shopify stále převádí každý poplatek do billing měny merchanta v okamžiku jeho vystavení, takže jde o odhad, ne o garantovanou cenu.
- Merchanti fakturovaní v USD vidí dál USD.
- Poplatky vytvořené přes Billing API přímo v jiné podporované měně zobrazují svou vlastní částku.
- Ceny na stránkách, které si aplikace spravuje sama, se nepřepočítávají.

## Časová osa

- **28. 10. 2026** — změna zveřejněna v dev changelogu a platí od 12:00 ET, ve stejný den vychází Editions Fall '26, kde je položka uvedena jako lokalizované odhadované ceny aplikací v Developer tématu.
- Žádné další termíny ani verze API se k této změně neváží. Shopify označuje akci jako nepovinnou (action required: No).

## Dopad pro nás

**Pro vývojáře:** Žádná změna v kódu ani v konfiguraci plánů. Ceny zůstávají v USD v Shopify App Pricing nebo v Billing API a odhad v lokální měně dopočítává Shopify. Praktická kontrola se týká pouze podpůrného obsahu: pokud dokumentace, FAQ nebo screenshoty ukazují ceny plánů, ověřte, že odpovídají tomu, co merchanti nově vidí. Dává smysl také pamatovat, že u poplatků vytvořených přímo v jiné měně se zobrazí tato částka, ne převod.

**Pro PM / PO:** Pro české merchanty fakturované v CZK se zjednodušuje posuzování aplikací třetích stran, protože cenu plánů uvidí rovnou v korunách. Při doporučování aplikací můžeme odhad v CZK použít jako orientační údaj, ale vždy s poznámkou, že jde o odhad podle aktuálního kurzu a skutečná částka se určí při vystavení poplatku. Jde o drobnou novou příležitost pro vlastní aplikace v App Store, kde listing nově působí lokálně bez další práce. Akutní akce není potřeba, nalehavost je nízká.

## Použití v Integrátoru

**Možná** — naše integrace běží jako custom apps mimo App Store billing, takže se jich změna přímo netýká. Hodí se jako referenční informace při výběru a doporučování aplikací třetích stran a pro případné budoucí publikování vlastní aplikace do App Store.
