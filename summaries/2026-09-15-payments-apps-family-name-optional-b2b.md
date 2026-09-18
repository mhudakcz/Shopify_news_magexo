---
date: 2026-09-15
title: "Payments Apps API: family_name volitelné pro B2B orders"
title_en: "family_name is optional for B2B orders in Payments Apps API requests"
slug: payments-apps-family-name-optional-b2b
zdroj: https://shopify.dev/changelog/family_name-is-optional-for-b2b-orders-in-payments-apps-api-requests
shrnuto_dne: 2026-09-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: ne
dukaz_integratoru: "Tyka se Payments Apps API pro platebni poskytovatele - nedelame vlastni payment apps, jde spis o signal k tomu, jak ma vypadat B2B checkout validace u firemnich objednavek."
dotcene_klienty: []
souvisejici: [rejection-reason-codes-payments-apps, b2b-for-all-merchants, payment-mandates-id-field]
tldr: "Shopify potvrzuje, ze pole family_name je v Payments Apps API requestech pro B2B objednavky volitelne, protoze firemni nakup nemusi mit vazbu na konkretni prijmeni osoby."
tagy: [payments-apps-api, b2b, family-name, company, optional]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Payments Apps API je rozhraní, přes které platební poskytovatelé (payment apps) přijímají od Shopify požadavky na zpracování platby — payment session requesty obsahují mimo jiné `shipping_address` a `billing_address` s poli jako `first_name` a `family_name`. Dosud dokumentace vyžadovala `family_name` jako povinné pole u obou adres, což odpovídalo standardnímu B2C modelu, kde platí konkrétní fyzická osoba se jménem i příjmením.

    U B2B objednávek ale tento předpoklad neplatí vždy. Nákup může provádět firemní entita (company), kde není nutná vazba na konkrétní kontaktní osobu — objednávku identifikuje `company_name`, zatímco pole vázaná na jméno a příjmení mohou zůstat prázdná nebo nedávají smysl. API takové requesty ve skutečnosti už dříve akceptovalo, dokumentace ale reálné chování nereflektovala a `family_name` popisovala jako povinné pro všechny typy objednávek.

    Shopify proto aktualizoval changelog a referenční dokumentaci Payments Apps API tak, aby jasně uváděly, že u B2B objednávek je `family_name` volitelné. Jde čistě o zpřesnění dokumentace k existujícímu chování API, nikoliv o změnu kontraktu nebo nový release verze API — payment apps, které `family_name` u B2B requestů dosud vyžadovaly jako povinné, mohou nesprávně odmítat validní objednávky a měly by si validační logiku zkontrolovat.
  zdroje:
    - title: "Shopify: family_name is optional for B2B orders in Payments Apps API requests"
      url: "https://shopify.dev/changelog/family_name-is-optional-for-b2b-orders-in-payments-apps-api-requests"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify upřesnil dokumentaci Payments Apps API: pole `family_name` v `shipping_address` a `billing_address` payment session requestu je pro **B2B objednávky volitelné**. U standardních B2C requestů zůstává `family_name` povinné beze změny.

Změna nepřidává nové API pole ani novou verzi API — jde o zpřesnění reference k chování, které API na pozadí už podporovalo. Prakticky se to týká payment apps, které si samy implementují validaci vstupních dat: pokud dosud tvrdě vyžadovaly neprázdné `family_name` u všech requestů, u B2B objednávek s pouze `company_name` mohly platné requesty chybně zamítat.

## Časová osa

- **2026-09-15** — Shopify publikuje changelog a aktualizuje referenční dokumentaci Payments Apps API.

## Dopad pro nás

**Pro vývojáře:** Přímý dopad na nás je minimální — nevyvíjíme vlastní payment apps, takže se nás validace `family_name` v Payments Apps API netýká přímo. Stojí za zapamatování jako referenční příklad: u B2B toků obecně nelze spoléhat na to, že pole vázaná na osobu (jméno, příjmení) budou vždy vyplněná, protože nákupčím může být firma bez konkrétní kontaktní osoby v daném kroku.

**Pro PM / PO:** Nejde o změnu s dopadem na naše dodávky ani o něco, co je potřeba komunikovat merchantům. Je to spíš potvrzení obecného trendu — Shopify postupně sjednocuje B2B checkout tak, aby fungoval i pro čistě firemní objednávky bez nutnosti fiktivního příjmení.

## Použití v Integrátoru

Nepoužíváme — jde o Payments Apps API určené payment poskytovatelům, nikoliv o rozhraní, se kterým pracujeme při B2B integracích na straně merchanta.
