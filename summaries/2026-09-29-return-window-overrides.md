---
date: 2026-09-29
title: "Return window overrides — různé periody vratek per market/collection/product"
title_en: "Return window overrides now available"
slug: return-window-overrides
zdroj: https://changelog.shopify.com/posts/return-window-overrides-now-available
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme return workflow nebo reporting vratek, lhůta pro vrácení už nemusí být jednotná pro celý katalog, protože ji merchant může měnit per market a per collection, product nebo variant."
dotcene_klienty: []
souvisejici: [managed-markets-eu-buyer-cancellation-returns, self-serve-order-cancellation-requests, ups-return-labels-shopify-shipping]
tldr: "Merchant může nově v return and cancellation rules nastavit pro konkrétní market jinou délku return window pro vybrané collections, products nebo variants; při překryvu platí nejkratší lhůta a final sale vždy přebíjí."
tagy: [returns, return-window, market-overrides, policy, collections, products]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Return window je počet dní, po které může zákazník požádat o vrácení zboží. Shopify dosud pracoval hlavně s jednou výchozí lhůtou (případně s lhůtou nastavenou per market), takže obchod s pestrým sortimentem musel volit kompromis. Buď jednu dlouhou lhůtu, která je drahá u sezónního nebo rychle zastarávajícího zboží, nebo jednu krátkou, která odrazuje kupující u dražších produktů. Výjimky se proto často řešily mimo platformu, ručně přes support nebo v aplikaci třetí strany pro returns.

    Nová funkce přidává vrstvu výjimek nad market pravidla. Merchant v Shopify adminu vybere konkrétní market rules a určí cíl výjimky, tedy collection, product nebo variant, a nastaví pro něj jinou délku return window. Typický příklad z oznámení je 14denní lhůta pro sezónní kolekci Holiday 2026 při zachování 90denní výchozí lhůty pro zbytek obchodu. Stejný mechanismus se hodí pro perishable a final-sale kategorie (kratší lhůta), pro luxury nebo elektroniku (delší lhůta) i pro regulatorní rozdíly mezi trhy, například EU s 14 dny oproti US s 30 dny.

    Pravidla pro vyhodnocení jsou jednoduchá, ale důležitá. Override má přednost před výchozí lhůtou, pokud položka odpovídá zvolené kolekci, produktu nebo variantě. Když se na jednu položku vztahuje více overrides, vyhrává nejkratší return period. Označení final sale přebíjí všechna return window pravidla úplně. Položky bez odpovídajícího override se řídí výchozí nebo market-specific lhůtou. Changelog neuvádí žádný API povrch, omezení podle plánu ani samostatné datum účinnosti, takže jde zatím o admin funkci s odkazem na dokumentaci return window overrides.
  zdroje:
    - title: "Shopify: Return window overrides now available"
      url: "https://changelog.shopify.com/posts/return-window-overrides-now-available"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify admin nově umožňuje nastavit **return window overrides**, tedy výjimky z výchozí délky lhůty pro vrácení zboží. Nastavení je v **Settings > Policies > Return and cancellation rules**. Merchant tam zvolí specific market rules a následně cíl výjimky, kterým může být collection, product nebo variant. Pro tento cíl pak platí jiná lhůta než pro zbytek sortimentu.

Mechanika vyhodnocení:

- Override nahrazuje výchozí return window, pokud položka odpovídá zvolenému cíli.
- Když se na položku vztahuje více overrides současně, použije se **nejkratší** return period.
- Označení **final sale** přebíjí return window pravidla úplně, takže final-sale položka vratku nepřipouští bez ohledu na lhůty.
- Položky bez odpovídajícího override se řídí výchozí nebo market-specific lhůtou.

Příklad z oznámení: kolekce Holiday 2026 může mít lhůtu 14 dní, zatímco výchozí lhůta v celém obchodě zůstává 90 dní. Stejně tak lze oddělit perishable a final-sale kategorie (kratší lhůta) od luxury zboží a elektroniky (delší lhůta) nebo nastavit odlišné periody pro trhy s jinou regulací.

## Časová osa

- 2026-06-17 — Shopify rozšiřuje self-serve returns o cancellation requests a pravidla pro vrácení a zrušení s možností vyloučit konkrétní produkty a kolekce (související kontext)
- 2026-07-16 — Managed Markets automaticky pokrývá 14denní právo na odstoupení pro EU objednávky (související kontext)
- 2026-09-29 — Shopify oznamuje dostupnost return window overrides v adminu

## Dopad pro nás

**Pro vývojáře:** Changelog nezmiňuje žádné nové Admin API pole ani mutation, proto nelze předpokládat programový přístup k overrides. Před jakoukoli implementací je potřeba ověřit dokumentaci. Praktické riziko je v logice, která lhůtu odvozuje z jedné globální konstanty, například hardcoded 30 dní v notifikacích, custom returns portálu nebo reportech zpožděných vratek. Taková logika bude po zapnutí overrides nepřesná, protože lhůta se může lišit per market a per položka v jedné objednávce. Doporučený postup je nechat rozhodování o tom, zda je položka vratná, na Shopify pravidlech a vlastní výpočty používat jen jako informativní. Stojí za kontrolu i aplikace v kategorii returns, které musí od 1. 12. 2026 používat Customer Account API pro buyer-facing flow.

**Pro PM / PO:** Jde o novou příležitost pro merchanty s heterogenním sortimentem nebo s prodejem do více zemí, protože část returns politiky lze nově řešit nativně místo ruční výjimky nebo další aplikace. Stojí za to otevřít téma u obchodů se sezónními kolekcemi, s potravinami či kosmetikou a s dražším zbožím, kde má smysl lhůtu prodloužit jako konkurenční výhodu. Je potřeba upozornit na dvě věci. Za prvé, pravidlo nejkratší lhůty může při nepozorném nastavení zkrátit return window pod zákonné minimum, například pod 14 dní pro EU spotřebitele, takže overrides je nutné nastavovat s ohledem na právní povinnosti konkrétního trhu. Za druhé, nastavení by mělo být viditelně komunikováno zákazníkům v return policy a na produktových stránkách, aby rozdílné lhůty nevedly k nárůstu support dotazů.

## Použití v Integrátoru

Přímý technický dopad je zatím nízký, protože oznámení nepopisuje žádné API. Relevance je především konzultační: při návrhu return workflow, notifikací a reportingu vratek je třeba počítat s tím, že lhůta pro vrácení už nemusí být jednotná napříč katalogem a trhy.
