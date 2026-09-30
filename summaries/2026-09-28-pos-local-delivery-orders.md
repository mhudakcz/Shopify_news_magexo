---
date: 2026-09-28
title: "POS: local delivery orders — checkout s existing delivery zones/rates"
title_en: "Local delivery orders in Shopify POS"
slug: pos-local-delivery-orders
zdroj: https://changelog.shopify.com/posts/local-delivery-orders-in-shopify-pos
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "POS-side UI feature bez zásahu do API, ale relevantní při konzultacích o unified commerce u merchantů s kamennou prodejnou a nadrozměrným nebo zakázkovým zbožím."
dotcene_klienty: []
souvisejici: [create-pickup-orders-pos, multi-location-pickup-pos, cart-sharing-shopify-pos]
tldr: "POS Pro (v11.16+) umožňuje personálu přímo u pokladny vytvořit local delivery order — zákazník zůstane v prodejně, doručení se spočítá z delivery zones a rates, které merchant už má nastavené pro online store."
tagy: [pos, local-delivery, retail, unified-commerce, checkout]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Local delivery je nativní Shopify metoda doručení, kterou merchant nastavuje pro konkrétní location v Shopify adminu. Definuje se pomocí delivery zones (oblast, kam prodejna sama doručuje, typicky podle PSČ nebo okruhu od prodejny) a k nim přiřazených rates (cena doručení, případně minimální hodnota objednávky). V online checkoutu se tato možnost nabídne zákazníkovi automaticky, pokud jeho adresa spadá do některé zóny. Doručení pak zajišťuje merchant vlastními silami — vlastním řidičem, kurýrem nebo dodávkou — mimo běžné carrier services.

    Shopify POS dosud uměl dvě větve mimo okamžitý prodej u pokladny. Ship to customer (odeslání zásilky na adresu) a pickup orders (zaplatí se v prodejně, zboží se vyzvedne později; viz související články). Local delivery z POS chybělo. Pokud zákazník v prodejně koupil nábytek, velký spotřebič nebo zakázkovou věc, musel si ji buď odvézt sám, nebo personál řešil doručení mimo systém — poznámkou k objednávce, telefonátem, případně tím, že zákazník zadal samostatnou online objednávku. Takový ruční postup znamená riziko chyb v adrese, nesprávně účtované doručení a rozdělené objednávky v reportech.

    Novinka zapadá do dlouhodobého směřování unified commerce, tedy sjednocení online a offline prodeje nad jedním datovým modelem. Personál v POS využije tytéž delivery zones a rates jako online store, takže nevzniká druhá sada pravidel, kterou by bylo nutné udržovat. Současně Shopify v rámci této změny přejmenoval a rozšířil staff permissions pro vytváření a plnění shipping, pickup a delivery objednávek. Je to přirozené navázání na předchozí POS novinky: pickup orders, výběr pickup lokace a sdílení košíku mezi zařízeními, které cílí na dlouhé konzultační prodeje.
  zdroje:
    - title: "Shopify: Local delivery orders in Shopify POS"
      url: "https://changelog.shopify.com/posts/local-delivery-orders-in-shopify-pos"
    - title: "Create pickup orders in Shopify POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/create-pickup-orders-pos/"
    - title: "Multi-location pickup nově v POS"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multi-location-pickup-pos/"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify POS (verze **11.16 a novější**, pouze tarif **POS Pro**) nově umožňuje personálu vytvořit **local delivery order** přímo při checkoutu. Zákazník je v prodejně, zaplatí u pokladny a zboží se mu doručí na adresu. Nemusí zadávat samostatnou online objednávku a personál nemusí doručení řešit ručními poznámkami.

Postup pro personál:

1. V košíku přidat **shipping**.
2. POS vyhodnotí, zda adresa zákazníka spadá do některé z nastavených delivery zones.
3. Pokud ano, **Local delivery** se zobrazí mezi ostatními shipping options.
4. Personál zvolí local delivery, potvrdí telefonní číslo zákazníka a zadá případné instrukce k doručení.
5. Po dokončení checkoutu se adresa a cena doručení zobrazí v košíku, na účtence i na customer display.
6. Objednávka se plní přímo z POS standardním postupem pro local delivery.

Funkce využívá **delivery zones a rates, které merchant už má nastavené pro online store**, žádná další konfigurace sazeb se nevyžaduje. Local delivery musí být zapnuté pro danou location v Shopify adminu.

**Nová oprávnění pro personál:**
- Vytvoření objednávky vyžaduje **Create shipping and delivery orders** (dříve **Ship to customer**).
- Plnění objednávky vyžaduje **Fulfill shipping, pickup, and delivery orders** (dříve **Fulfill shipping and pickup orders**).

**Omezení:**
- Všechny fyzické položky v objednávce musí být doručeny. Local delivery nelze kombinovat se shippingem ani pickupem v jedné objednávce.
- Do objednávky lze přidat gift cards a digitální položky.
- Doručení je možné jen do stejné země, ve které je location.

## Časová osa

- **2026-09-28** — změna oznámena v Shopify changelogu; funkce je dostupná v POS v11.16 a novějších pro merchanty na POS Pro.
- **Bez data ukončení** — jde o nový nástroj, nikoli o deprecaci. Merchant si ho zapne nastavením local delivery pro location a úpravou rolí personálu.

## Dopad pro nás

**Pro vývojáře:** Changelog neuvádí žádný dopad na API ani na datový model. Očekáváme, že objednávka z POS se v Admin GraphQL API chová jako jiné local delivery objednávky, tedy s `FulfillmentOrder`, jehož `deliveryMethod` je typu `LOCAL`. Doporučujeme to při prvním reálném případu ověřit na dev store, zejména pokud náš kód nebo napojený ERP a WMS větví logiku podle typu doručení (shipping vs. pickup) a mohl by `LOCAL` u POS objednávek nezpracovat. Změna v oprávněních se týká jen rolí personálu v adminu. Nemění scopes aplikací.

**Pro PM / PO:** Jde o dobrý argument při konzultacích s merchanty, kteří mají kamennou prodejnu a prodávají nábytek, nadrozměrné nebo zakázkové zboží. Stojí za to zmínit tři věci: doručení lze prodat přímo u pokladny se stejnými zónami a cenami jako online, funkce vyžaduje POS Pro a v11.16+, a před spuštěním je potřeba zkontrolovat nastavení local delivery na location a přidělit personálu nová oprávnění. Stávající role se starým názvem oprávnění je vhodné projít, aby personál mohl objednávky nejen vytvářet, ale i plnit.

## Použití v Integrátoru

Přímo nepoužíváme — jde o POS-side UI feature bez vazby na naši synchronizační logiku. Týká se nás jen nepřímo, pokud integrace zpracovává fulfillment orders s deliveryMethod `LOCAL` z POS objednávek.
