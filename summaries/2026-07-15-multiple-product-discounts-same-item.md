---
date: 2026-07-15
title: "Více product discounts na stejnou položku současně (tagged combination)"
title_en: "Multiple product discounts on the same item"
slug: multiple-product-discounts-same-item
zdroj: https://changelog.shopify.com/posts/multiple-product-discounts-on-the-same-item
shrnuto_dne: 2026-07-21
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme discount methods. Pokud klient kombinuje seasonal a affiliate/loyalty slevy na stejný produkt, nová combination logika mění, jak se výsledná cena a slevy reportují — relevantní pro objednávkové exporty a reporting."
dotcene_klienty: []
souvisejici: [multiple-product-discounts-cart-line, add-tags-to-discounts, target-discounts-specific-markets]
tldr: "Merchant může nově kombinovat více product discounts na stejnou položku pomocí tagů a pravidel kombinace — např. sezónní slevu a affiliate slevu na stejné botě se sečtou automaticky bez konfliktu."
tagy: [discounts, product-discounts, stackable, checkout, promotions]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Product discount je typ slevy, která se aplikuje přímo na konkrétní položku v košíku — typicky procentuální nebo pevná sleva na produkt či kolekci — na rozdíl od order discount (sleva z celé objednávky) nebo shipping discount. Dříve platilo, že na jednu položku šlo v praxi bezpečně aplikovat jen jednu automatickou product discount najednou; kombinace více překrývajících se akcí (např. sezónní kampaň plus partnerská/loyalty sleva) vyžadovala buď ruční sloučení logiky do jedné akce, nebo split-testing kampaní, aby se slevy nekřížily.

    Nová funkce staví na tagovacím systému slev zavedeném v API 2026-04 (pole `tags` na `DiscountCode` a `DiscountAutomatic`). Merchant nyní může slevy roztřídit do skupin pomocí tagů — např. `seasonal`, `loyalty`, `affiliate` — a následně nastavit, které tagované skupiny se smí kombinovat na stejné položce. Shopify pak při checkoutu automaticky aplikuje všechny odpovídající slevy podle definovaných pravidel, bez ručního zásahu a bez konfliktů mezi překrývajícími se promo akcemi. Podporované jsou jak kombinace více automatických product discounts na stejné položce, tak kombinace slevového kódu s automatickou product discount na stejné položce.

    Prakticky to řeší bolestivý scénář „split campaigns" — kdy merchant musel dřív ručně rozhodovat, zda zákazník s věrnostním kódem smí čerpat i sezónní slevu na tentýž produkt, nebo musel kampaně stavět tak, aby se vzájemně vylučovaly. Nově stačí nastavit pravidla kombinace jednou přes tagy a systém je vynucuje konzistentně napříč všemi objednávkami. Změna navazuje na sérii úprav Discount Functions API z jara 2026 (tagy na slevách, stacking na cart line) a posouvá Shopify blíž k flexibilitě, kterou dřív nabízely jen custom Shopify Scripts.
  zdroje:
    - title: "Shopify: Multiple product discounts on the same item"
      url: "https://changelog.shopify.com/posts/multiple-product-discounts-on-the-same-item"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify umožňuje merchantům kombinovat **více product discounts na stejnou položku** pomocí tagů a pravidel kombinace. Merchant otaguje slevy (např. `seasonal`, `loyalty`, `affiliate`) a určí, které tagované skupiny se smí sčítat. Při checkoutu se pak všechny odpovídající slevy aplikují automaticky a bez konfliktu — např. 20% sezónní sleva na zimní kolekci plus $10 affiliate sleva na konkrétní boty se sečtou na jedné položce. Funguje jak pro kombinace více automatických slev, tak pro kombinaci slevového kódu s automatickou product discount.

## Časová osa
- **2026-07-15** — funkce zveřejněna v merchant changelogu

## Dopad pro nás
**Pro vývojáře:** Pokud pro klienta čteme nebo reportujeme aplikované slevy na objednávce (např. přes discount allocations na line item), je potřeba počítat s tím, že na jedné položce se nyní může legitimně objevit více product discounts současně — nejen jedna. Stojí za kontrolu, zda naše zpracování objednávek správně sčítá a rozlišuje více souběžných discount allocations na stejném řádku.

**Pro PM / PO:** Užitečný sales talk pro klienty s komplexnějšími promo strukturami (seasonal + loyalty/affiliate programy), kteří dřív museli kampaně ručně oddělovat, aby se nekřížily. Snižuje potřebu split-testingu kampaní.

## Použití v Integrátoru
**Možná** — máme discount methods, ale samotné nastavení tagů a kombinačních pravidel dělá merchant v Adminu. Relevantní hlavně pro reporting a čtení discount dat na objednávkách.

## Související
- [Více product discounts na jednu cart line](../zmena/multiple-product-discounts-cart-line/)
- [Tagy na slevách v Admin API](../zmena/add-tags-to-discounts/)
- [Cílení slev na konkrétní markets](../zmena/target-discounts-specific-markets/)
