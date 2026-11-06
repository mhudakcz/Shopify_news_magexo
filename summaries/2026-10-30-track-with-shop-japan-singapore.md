---
date: 2026-10-30
title: "Track with Shop expansion do Japan + Singapore (order tracking v Shop app)"
title_en: "Track with Shop expands to Japan and Singapore"
slug: track-with-shop-japan-singapore
zdroj: https://changelog.shopify.com/posts/track-with-shop-expands-to-japan-and-singapore
shrnuto_dne: 2026-11-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý technický dopad nemá; pokud integrace posílají tracking čísla a carriera do fulfillmentů, kvalita těchto dat ovlivní, jak dobře půjde zásilka v Shop app sledovat."
dotcene_klienty: []
souvisejici: [editions-fall-2026-shop, shop-app-migrated-shop-com, verified-tracking-shopify-collective, ordercreate-multiple-tracking-numbers-fulfillment]
tldr: "Track with Shop se rozšiřuje do Japonska a Singapuru: kupující s adresou v těchto zemích uvidí tlačítko pro sledování objednávky v Shop app a Shop je nově dostupný i v japonštině."
tagy: [shop-app, tracking, japan, singapore, international, logistics]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Track with Shop je funkce, která kupujícím umožňuje sledovat doručení objednávek v mobilní aplikaci Shop. Merchant ji má zapnutou ve svém obchodě a na thank you page, order status page a v notifikačních e-mailech se pak zobrazuje tlačítko, které zákazníka vyzve ke stažení aplikace a sledování zásilky.
    Shopify nyní oznámil rozšíření této funkce do Japonska a Singapuru. Kupující s doručovací adresou v těchto zemích uvidí výzvy ke sledování objednávky přes Shop. Zároveň je Shop v japonštině dostupný napříč aplikací Shop i na Shop.com, takže kupující mohou procházet a spravovat objednávky ve svém jazyce.
    Pro české merchanty, kteří prodávají do asijsko-pacifického regionu, jde o drobnou příležitost: zákazníci dostanou důvěrně známý způsob sledování zásilky bez další práce na straně obchodu, pokud je obchod způsobilý a Track with Shop má zapnutý. Post neuvádí harmonogram nasazení, další kritéria způsobilosti ani cenu. Změna navazuje na dlouhodobé posilování Shopu jako spotřebitelské platformy, o kterém jsme psali například u Editions Fall 26 a při přesunu webu na shop.com.
  zdroje:
    - title: "Shopify: Track with Shop expands to Japan and Singapore"
      url: "https://changelog.shopify.com/posts/track-with-shop-expands-to-japan-and-singapore"
    - title: "Editions Fall '26: Shop"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-shop/"
    - title: "Shop web experience se přesunul z shop.app na shop.com"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-app-migrated-shop-com/"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Kupující s doručovací adresou v Japonsku nebo Singapuru nově uvidí výzvy ke sledování objednávky přes Shop. U způsobilých obchodů s povoleným Track with Shop se tlačítko zobrazí na thank you page, na order status page a v e-mailech s notifikacemi o objednávce. Tlačítko vybízí k instalaci aplikace Shop a sledování doručení. Shop je navíc nově k dispozici v japonštině, a to jak v aplikaci, tak na Shop.com.

## Časová osa

- 2026-10-30: Shopify oznámil rozšíření do Japonska a Singapuru.
- Přesný harmonogram nasazení ani další kritéria způsobilosti post neuvádí.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani nutná úprava kódu. Kvalita tracking dat (číslo zásilky, carrier) ve fulfillmentech ale ovlivňuje, jak spolehlivě půjde zásilka v Shop app sledovat.

**Pro PM / PO:** Drobná příležitost pro merchanty prodávající do APAC. Stojí za to ověřit, že mají Track with Shop zapnutý a že jejich obchod je způsobilý. Zapnutí je nastavení v obchodě, ne vývojová práce.

## Použití v Integrátoru

Přímé použití nemáme. Nepřímo záleží na tom, zda integrace předávají do fulfillmentů správná tracking čísla a carriery.
