---
date: 2026-09-22
title: "marketCurrencySettingsUpdate mutation odstraněna v Admin GraphQL (breaking)"
title_en: "Removing marketCurrencySettingsUpdate mutation"
slug: marketcurrencysettingsupdate-mutation-removed
zdroj: https://shopify.dev/changelog/removing-marketcurrencysettingsupdate-mutation
shrnuto_dne: 2026-09-25
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud někde voláme marketCurrencySettingsUpdate pro nastavení měny marketu, je nutné přejít na marketCreate/marketUpdate ještě před verzí 2027-01."
dotcene_klienty: []
souvisejici: [create-channel-markets-graphql-api, market-driven-shipping-admin-api, graphql-admin-market-hierarchies-query]
tldr: "Mutation marketCurrencySettingsUpdate je odstraněna z Admin GraphQL API ve verzi 2027-01; nastavení měny marketu se od teď dělá přímo přes marketCreate a marketUpdate."
tagy: [admin-graphql-api, markets, currency, breaking, deprecation, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Mutation marketCurrencySettingsUpdate byla deprecated už při spuštění Markets Home ve verzi API 2025-04. Od té doby technicky zůstávala ve schématu, ale prakticky byla mrtvá — každé volání vracelo chybu místo toho, aby cokoliv skutečně nastavilo. Apps, které ji přesto volaly, tak dlouhodobě dostávaly jen error bez funkčního efektu.

    Zářijový changelog (22. 9. 2026) oznamuje finální krok: ve verzi Admin GraphQL API 2027-01 mutation spolu s navázanými typy MarketCurrencySettingsUpdatePayload, MarketCurrencySettingsUserError a MarketCurrencySettingsUserErrorCode úplně mizí ze schématu. Verze 2026-10 a starší si mutation ve schématu ještě podrží po dobu své podporované životnosti, i když zůstává nefunkční. Po odstranění se chování zásadně mění — dotaz odkazující na neexistující pole už neprojde ani validací a celý GraphQL request selže, místo aby vrátil jen mutation-specific chybu jako dosud.

    Náhrada je jednoduchá a bez nutnosti extra volání: nové markety se měnou nastavují přes marketCreate, existující přes marketUpdate — obě mutace přijímají currency nastavení přímo ve svém inputu, takže samostatná mutation na měnu navíc není potřeba. Postiženy jsou hlavně apps s vlastními multi-currency market setup workflows, které si tento krok historicky nechávaly jako separátní volání.
  zdroje:
    - title: "Shopify: Removing marketCurrencySettingsUpdate mutation"
      url: "https://shopify.dev/changelog/removing-marketcurrencysettingsupdate-mutation"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify odstraňuje mutation `marketCurrencySettingsUpdate` z Admin GraphQL API, spolu s typy `MarketCurrencySettingsUpdatePayload`, `MarketCurrencySettingsUserError` a `MarketCurrencySettingsUserErrorCode`. Mutation byla deprecated už při launchi Markets Home ve verzi 2025-04 a od té doby byla fakticky nefunkční — každé volání vracelo chybu. Ve verzi API **2027-01** mizí úplně ze schématu; verze 2026-10 a starší ji po dobu své podpory ještě obsahují (i nadále nefunkční).

Náhrada: nastavení měny marketu se dělá přímo přes `marketCreate` (nové markety) a `marketUpdate` (existující markety) — obě mutace přijímají currency nastavení ve svém inputu, takže samostatné volání navíc odpadá.

## Časová osa

- **2025-04** — mutation `marketCurrencySettingsUpdate` deprecated při launchi Markets Home; od té doby funkčně mrtvá
- **2026-09-22** — publikován changelog o finálním odstranění ze schématu
- **2026-10 a starší** — mutation zůstává ve schématu po dobu podporované životnosti dané verze (stále nefunkční)
- **2027-01** — mutation a související typy mizí ze schématu; request odkazující na tato pole selže na validaci celý

## Dopad pro nás

**Pro vývojáře:** Je potřeba projít kód a najít případná volání `marketCurrencySettingsUpdate`. Pokud existují, nahradit je nastavením currency přímo v inputu `marketCreate` nebo `marketUpdate` — a to ještě před přechodem na API verzi 2027-01, protože po ní request s odkazem na odstraněná pole neprojde ani validací.

**Pro PM / PO:** Jde o čistě technickou, breaking změnu bez viditelného dopadu na zákazníka — pokud je kód opraven včas. Riziko je jen u projektů s vlastním multi-currency market setupem, kde se currency nastavovalo přes tuto mutation odděleně od vytvoření/úpravy marketu.

## Použití v Integrátoru

Pokud v naší Shopify integraci existuje kód volající `marketCurrencySettingsUpdate` pro multi-currency market setup, je potřeba ho před verzí 2027-01 přesměrovat na `marketCreate`/`marketUpdate` s currency nastavením v inputu.
