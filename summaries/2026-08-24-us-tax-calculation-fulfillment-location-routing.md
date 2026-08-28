---
date: 2026-08-24
title: "US daňový výpočet: přesnost dle fulfillment location z order routing settings"
title_en: "US tax calculation accuracy improvements based on fulfillment location"
slug: us-tax-calculation-fulfillment-location-routing
zdroj: https://changelog.shopify.com/posts/shopify-tax-is-now-compatible-with-order-routing
shrnuto_dne: 2026-08-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta synchronizujeme daňové částky nebo ship-from lokaci objednávky do ERP/účetnictví, může se po této změně měnit, ze které location se daň u multi-location merchantů počítá."
dotcene_klienty: []
souvisejici: [shopify-tax-canada, taxes-recalculate-order-shipping-address-merchant, orderupdate-shipping-address-recalculates-taxes]
tldr: "Shopify Tax teď pro US objednávky počítá daň podle fulfillment location vybrané order routing pravidly, ne podle výchozí lokace obchodu."
tagy: [shopify-tax, us-tax, order-routing, fulfillment, accuracy, sales-tax]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Tax je nativní daňová služba integrovaná do Shopify Adminu, která merchantům počítá sales tax bez nutnosti aplikací třetích stran. V USA se výše i typ daně (origin-based vs. destination-based nexus) odvozuje mimo jiné od místa, odkud se zboží fyzicky odesílá — takzvané ship-from location. Dosud Shopify Tax pro tento výpočet používal výchozí lokaci obchodu (default store location), bez ohledu na to, který sklad nebo fulfillment center objednávku ve skutečnosti vyřizoval.

    U multi-location merchantů to byl reálný problém: order routing settings mohou objednávku směrovat na jiný sklad, než je výchozí location účtu — typicky podle blízkosti k zákazníkovi, dostupnosti zásob nebo nákladů na dopravu. Pokud se daň počítala podle jiné location, než odkud zboží skutečně odešlo, mohla sazba neodpovídat state nexus pravidlům platným pro skutečné místo odeslání, což vedlo k nepřesnému výběru sales tax a komplikacím při reconciliaci a daňových reportech.

    Od 24. 8. 2026 je Shopify Tax kompatibilní s order routing: pro standardní objednávky se daň počítá podle fulfillment location, kterou pro danou objednávku vybraly order routing settings, a u local pickupu podle adresy pickup location. Order záznamy navíc nově ukazují, která ship-from location byla pro výpočet daně použita, což zpřesňuje evidenci a usnadňuje audit. Jde o úpravu logiky uvnitř Shopify Tax, ne o nové pole nebo endpoint v API.
  zdroje:
    - title: "Shopify: US tax calculation accuracy improvements based on fulfillment location"
      url: "https://changelog.shopify.com/posts/shopify-tax-is-now-compatible-with-order-routing"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Tax pro **US objednávky** nově počítá sales tax podle **fulfillment location vybrané order routing settings** pro danou konkrétní objednávku, místo dosavadního výchozího chování založeného na defaultní store location:

- U standardních objednávek se daň odvozuje z location, kterou order routing pravidla přiřadila k dané objednávce.
- U local pickupu se daň počítá podle adresy pickup location.
- Order záznamy nově zobrazují, která ship-from location byla pro výpočet daně použita.

Změna je relevantní hlavně pro **multi-location merchanty**, kde různé fulfillment centra mohou spadat pod odlišná state nexus pravidla (origin-based i destination-based). Jde o úpravu interní logiky Shopify Tax, nepřidává se žádné nové API pole ani endpoint.

## Časová osa

- **2026-08-24** — Shopify Tax kompatibilní s order routing, US výpočty daně nově respektují fulfillment location

## Dopad pro nás

**Pro vývojáře:** Přímý dopad na kód nemáme — nejde o API změnu, kterou bychom museli implementovat. Pokud ale pro klienta čteme nebo cachujeme `taxLines`, ship-from location, nebo tyto hodnoty exportujeme do ERP/účetnictví, stojí za to ověřit, že po této změně odpovídají skutečné fulfillment location dané objednávky, a ne staré výchozí lokaci obchodu.

**Pro PM / PO:** Pro US multi-location merchanty jde o zpřesnění, které snižuje riziko špatně vybrané sales tax a usnadňuje reconciliaci daňových záznamů. Vhodné je zmínit klientům s více sklady/fulfillment centry v USA — dřívější nesrovnalosti v tax reportech mohly mít původ právě v tomto chování a teď by se měly srovnat.

## Použití v Integrátoru

Přímo nepoužíváme — jde o interní změnu výpočtu v Shopify Tax. Relevantní je jen tam, kde synchronizujeme daňové částky nebo ship-from location objednávky do externích systémů u amerických multi-location klientů.
