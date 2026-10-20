---
date: 2026-10-15
title: "Royal Mail pickup points v UK checkout (customer vybere lokaci z mapy)"
title_en: "Offer Royal Mail pickup points at checkout"
slug: royal-mail-pickup-points-checkout-uk
zdroj: https://changelog.shopify.com/posts/offer-royal-mail-pickup-points-at-checkout
shrnuto_dne: 2026-10-20
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nativní rozšíření shipping settings o Royal Mail pickup points bez API dopadu — relevantní pro merchanty s UK trhem, kteří dnes řeší výdejní místa přes externí appku nebo vlastní carrier service."
dotcene_klienty: []
souvisejici: [dhl-express-uk-de-fr-it-es, shipping-delivery-settings-redesign, delivery-options-functions-metafields]
tldr: "Merchanti s UK lokací si v Shopify adminu mohou zapnout Royal Mail jako pickup point provider, takže zákazník v checkoutu vybere výdejní místo z mapy nebo seznamu a vidí jeho adresu, otevírací dobu i cenu."
tagy: [royal-mail, uk, pickup-points, checkout, shipping, convenience]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Výdejní místa (pickup points) jsou v Evropě i ve Velké Británii běžnou alternativou k doručení na adresu. Zákazník si zásilku vyzvedne tam, kde mu to vyhovuje, a obchodník se vyhne části neúspěšných doručení, kdy nikdo není doma. Shopify už dříve umožňoval nabízet pickup points u vybraných dopravců a v posledních měsících průběžně rozšiřuje nativní shipping možnosti, včetně redesignu shipping a delivery nastavení a nových carrierů v UK a EU.
    Tato novinka přidává Royal Mail jako pickup point provider pro celou Velkou Británii. V checkoutu si zákazník vybere konkrétní lokaci z mapy nebo ze seznamu a u každé vidí název, adresu, otevírací dobu a cenu dopravy ještě před potvrzením volby. Pro obchodníka jde o nativní integraci, kterou zapne v nastavení shipping a delivery, bez instalace další appky.
    Praktický přínos je dvojí. Snižuje se riziko failed deliveries, protože zásilka čeká na výdejním místě, a vzniká možnost diskrétnějšího doručení, což se hodí například u dárků nebo u oblečení s častými vratkami. Zdroj žádné omezení neuvádí, jedinou zmíněnou podmínkou je, že lokace, ze které se zásilky expedují, musí být ve Velké Británii.
  zdroje:
    - title: "Shopify: Offer Royal Mail pickup points at checkout"
      url: "https://changelog.shopify.com/posts/offer-royal-mail-pickup-points-at-checkout"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Royal Mail je nově dostupný jako pickup point provider napříč Velkou Británií. Zákazník v checkoutu zvolí výdejní místo buď z mapy, nebo ze seznamu, a u každé lokace vidí její název, adresu, otevírací dobu i cenu dopravy. Rozhodnutí tedy dělá s úplnou informací ještě před dokončením objednávky.

Zapnutí je čistě konfigurační a probíhá v Shopify adminu:

1. Settings > Shipping and delivery.
2. V sekci Additional delivery methods otevřít Pickup points.
3. Vybrat lokaci ve Velké Británii a zapnout pro ni shipping to pickup points.
4. Upravit shipping rate tak, aby zahrnoval Royal Mail, a nastavit cenu, kterou chce obchodník účtovat.

Cena za pickup point doručení si tedy určuje obchodník sám v rámci shipping rate. Shopify v oznámení neuvádí žádné další prerequisites ani omezení, podmínkou je pouze UK lokace. Podrobný postup je v Shopify Help Center v článku o Royal Mail, v sekci o domestic shippingu.

## Časová osa

- 2026-10-15 — Shopify oznamuje dostupnost Royal Mail pickup points v checkoutu pro UK v merchant changelogu.
- Bez deadline — funkce je opt-in, merchant si ji zapíná sám v shipping settings, žádná migrace ani povinná akce se nekoná.

## Dopad pro nás

**Pro vývojáře:** Jde o nativní funkci admin nastavení bez nové veřejné API metody a bez breaking change. Pokud u merchanta řešíme vlastní delivery logiku, například Delivery Customization Function nebo carrier service, stojí za to ověřit, jak se nové Royal Mail pickup point možnosti v checkoutu chovají vedle stávajících delivery options, zejména při přejmenování, řazení nebo skrývání možností. Žádný kód měnit nemusíme.

**Pro PM / PO:** Příležitost pro merchanty, kteří prodávají do UK a dnes nabízejí jen doručení na adresu nebo řeší výdejní místa přes externí appku. Nativní řešení může zjednodušit shipping stack a snížit počet neúspěšných doručení. Hodí se zmínit při account review obchodů s UK trhem, hlavně u kategorií s vysokou mírou vratek (apparel) nebo diskrétních zásilek (dárky). Před nasazením doporučujeme zkontrolovat nastavení cen shipping rate a ověřit checkout flow na testovací objednávce.

## Použití v Integrátoru

Přímo nevyužíváme, jde o nativní konfiguraci Shopify adminu bez dopadu na API. Je dobré ji mít na paměti u merchantů s UK trhem jako jednoduchou alternativu k externím řešením výdejních míst.
