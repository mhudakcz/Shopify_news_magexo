---
date: 2026-08-13
title: "DHL Express labels dostupné v UK, DE, FR, IT, ES (domestic + international)"
title_en: "DHL Express is now available in the UK, Germany, France, Italy, and Spain"
slug: dhl-express-uk-de-fr-it-es
zdroj: https://changelog.shopify.com/posts/dhl-express-is-now-available-in-the-uk-germany-france-italy-and-spain
shrnuto_dne: 2026-08-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Rozšiřuje nativní carrier pool v Shopify Shipping o DHL Express pro EU trhy — relevantní pro klienty s objednávkami z/do UK, DE, FR, IT, ES."
dotcene_klienty: []
souvisejici: [ups-return-labels-shopify-shipping, shipping-options-setup-updates, carrier-services-no-auto-shipping-profile]
tldr: "Merchanti v UK, Německu, Francii, Itálii a Španělsku si teď mohou přímo v Shopify adminu vytvořit DHL Express label pro domácí i mezinárodní zásilky, bez appky a měsíčního poplatku."
tagy: [shipping, dhl, dhl-express, labels, europe, uk, germany, france, italy, spain]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Shipping už delší dobu umožňuje merchantům nakupovat přepravní štítky přímo z adminu bez nutnosti instalovat samostatnou dopravní appku nebo zakládat vlastní účet u carriera. Doteď byl výběr rychlých kurýrních služeb (typu DHL Express) pro evropské merchanty omezený — řada obchodníků musela pro expresní mezinárodní zásilky sahat po externích appkách nebo si zřizovat samostatný DHL účet mimo Shopify.
    Tato novinka rozšiřuje nativní carrier pool o DHL Express pro pět klíčových evropských trhů: UK, Německo, Francii, Itálii a Španělsko. Podporované jsou jak domácí (domestic), tak mezinárodní (international) zásilky, což pokrývá typický use case menších a středních e-shopů expedujících napříč EU a do UK.
    Stejně jako u ostatních nativních carrierů v Shopify Shipping platí model "žádná appka, žádný měsíční poplatek, platba jen za vytištěný label" — merchant si štítek vytvoří přímo z detailu objednávky tlačítkem "Create shipping label", Shopify automaticky vygeneruje i celní dokumentaci pro mezinárodní zásilky a zákazník navíc získá přístup k DHL On Demand Delivery (přesměrování, přeplánování nebo vyzvednutí zásilky na výdejním místě).
  zdroje:
    - title: "Shopify: DHL Express is now available in the UK, Germany, France, Italy, and Spain"
      url: "https://changelog.shopify.com/posts/dhl-express-is-now-available-in-the-uk-germany-france-italy-and-spain"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidává DHL Express do nabídky nativních přepravců dostupných přímo v Shopify Shipping, a to pro pět evropských trhů — Velkou Británii, Německo, Francii, Itálii a Španělsko. Merchanti sídlící v těchto zemích tak nově mohou vytvářet DHL Express labely přímo z detailu objednávky v adminu, bez instalace třetí appky a bez zřizování vlastního smluvního účtu u DHL.

Funkce pokrývá jak domestic (vnitrostátní), tak international (přeshraniční) zásilky. U mezinárodních zásilek Shopify automaticky připraví potřebnou celní dokumentaci, což merchantovi ubírá administrativní zátěž spojenou s exportem mimo EU nebo mimo UK. Zákazníci navíc díky DHL On Demand Delivery dostávají možnost zásilku přesměrovat, přeplánovat doručení nebo si ji vyzvednout na výdejním místě DHL.

Cenově jde o stejný model jako u dalších nativních carrierů v Shopify Shipping: funkce je dostupná na libovolném Shopify plánu, bez appky, bez měsíčního poplatku — platí se pouze za skutečně vytištěný label za zvýhodněnou sazbu vyjednanou Shopify.

## Časová osa

- 2026-08-13 — Shopify oznamuje dostupnost DHL Express labelů pro UK, DE, FR, IT, ES v merchant changelogu.

## Dopad pro nás

**Pro vývojáře:** Jde o čistě adminové/UI rozšíření nativního carrier poolu, žádná nová veřejná API metoda ani breaking change v Admin API. Pokud řešíme vlastní shipping/label integrace pro klienty v těchto pěti zemích, stojí za to ověřit, jestli klient nechce místo dosavadního externího carrieru (nebo appky) přejít na nativní DHL Express přímo v adminu — může to zjednodušit fulfillment flow a ušetřit poplatek za appku.

**Pro PM / PO:** Relevantní hlavně pro klienty expedující z/do UK, Německa, Francie, Itálie nebo Španělska, kteří dnes řeší DHL Express přes samostatný účet nebo externí appku. Může jít o argument pro konsolidaci shipping stacku a snížení nákladů — stojí za zmínku při account review u EU klientů s exportem mimo domácí trh.

## Použití v Integrátoru

Přímo nevyužíváme, jde o nativní funkci Shopify adminu bez API dopadu. Je ale dobré mít ji na paměti u klientů s objednávkami z/do UK, DE, FR, IT nebo ES jako možnou alternativu k jejich současnému DHL/carrier řešení.
