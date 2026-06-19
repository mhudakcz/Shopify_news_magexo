---
date: 2026-06-17
title: "Nová pole purchaseType a recurringCycleLimit v discount UI extension API"
title_en: "New purchaseType and recurringCycleLimit fields in discount UI extension API"
slug: discount-ui-extension-purchasetype-recurringcyclelimit
zdroj: https://shopify.dev/changelog/new-purchasetype-and-recurringcyclelimit-fields-available-in-the-discount-ui-extension-api
shrnuto_dne: 2026-06-18
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme nebo budujeme discount app s podporou subscriptions, tato pole umožňují obchodníkovi nastavit rozsah slevy přímo v UI extension bez nutnosti volat GraphQL Admin API."
dotcene_klienty: []
souvisejici:
  - "appliesonsubscription-default-true-app-discounts"
  - "actor-field-subscription-billing"
  - "create-unpaid-orders-subscription-billing"
tldr: "Discount UI extensions nyní podporují pole purchaseType a recurringCycleLimit, takže obchodníci mohou přímo v rozšíření nastavit, zda sleva platí pro jednorázové nákupy, subscriptions nebo oboje, a na kolik fakturačních cyklů."
tagy: [discount, ui-extension, subscription, api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Discount UI extensions jsou rozšíření pro Shopify admin, která umožňují vývojářům aplikací přidávat vlastní konfigurační rozhraní přímo do sekce slev. Obchodník tak může v jednom místě nastavit parametry slevové logiky poskytované třetí stranou, aniž by musel opouštět Shopify admin nebo pracovat s externím rozhraním aplikace.

    Dosud bylo nastavení `purchaseType` (zda se sleva vztahuje na jednorázové nákupy, subscription objednávky nebo oboje) a `recurringCycleLimit` (počet fakturačních cyklů, po které subscription sleva platí) dostupné výhradně přes GraphQL Admin API. Vývojáři discount aplikací tedy nemohli tato pole vystavit obchodníkovi přímo v UI extension — museli je řešit v samostatném rozhraní aplikace, nebo tato konfigurace chyběla úplně.

    Od verze API 2026-04 jsou obě pole dostupná v discount UI extension API pro typy `DiscountCodeApp` i `DiscountAutomaticApp`. Hodnota `recurringCycleLimit` rovna 0 znamená neomezený počet cyklů. Shopify hodnoty vynucuje filtrem purchase type při checkout, takže vývojář nemusí řešit aplikaci pravidel samostatně.

  zdroje:
    - title: "Shopify: New purchaseType and recurringCycleLimit fields in discount UI extension API"
      url: "https://shopify.dev/changelog/new-purchasetype-and-recurringcyclelimit-fields-available-in-the-discount-ui-extension-api"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Do discount UI extension API přibyla dvě nová pole dostupná od API verze **2026-04**:

- **`purchaseType`** — určuje, zda se sleva vztahuje na jednorázové nákupy (`ONE_TIME`), subscription objednávky (`SUBSCRIPTION`) nebo oboje (`BOTH`). Toto pole bylo dříve přístupné pouze přes GraphQL Admin API.
- **`recurringCycleLimit`** — definuje počet fakturačních cyklů, po které subscription sleva platí. Hodnota `0` znamená neomezený počet cyklů.

Obě pole jsou podporována pro discount typy `DiscountCodeApp` i `DiscountAutomaticApp`. Vynucení hodnot probíhá automaticky přes purchase type filtering při checkout — vývojář nemusí psát vlastní validaci.

Žádná akce není ze strany stávajících aplikací vyžadována. Pole jsou volitelná a integrují se aktualizací konfigurace discount UI extension v rámci discounts pluginu.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-17 | Publikováno v Shopify Changelogu |
| 2026-04 (API verze) | Dostupnost od API verze 2026-04 |

## Dopad pro nás

Tato změna se nás týká v případě, kdy vyvíjíme nebo spravujeme Shopify aplikaci, která staví na discount UI extensions s podporou subscriptions. Pole `purchaseType` a `recurringCycleLimit` dosud nebylo možné obchodníkovi zpřístupnit přímo v admin UI extension, což vedlo k nutnosti buď přidat samostatné konfigurační rozhraní v aplikaci, nebo tuto granularitu vůbec nepodporovat.

Pro projekty, kde discount logika pokrývá subscription cykly (například opakované slevy pro věrnostní programy nebo subscription boxy), jde o relevantní doplnění. Nalehavost je nízká — existující integrace fungují dál beze změny, nová pole jsou čistě aditivní.

## Použití v Integrátoru

Pokud integrujeme discount aplikaci s podporou subscriptions, lze nyní v konfiguraci UI extension vystavit obchodníkovi volbu `purchaseType` (ONE_TIME / SUBSCRIPTION / BOTH) a nastavit `recurringCycleLimit`. Shopify se postará o vynucení těchto pravidel na checkout, takže aplikační logika se zjednodušuje. Referenční dokumentace pro vstupní objekty je dostupná přes `DiscountAutomaticAppInput` a `DiscountCodeAppInput` v Admin GraphQL API docs.
