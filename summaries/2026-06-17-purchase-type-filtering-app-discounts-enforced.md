---
date: 2026-06-17
title: "Purchase-type filtering pro app discounts nyní vynucováno na checkoutu"
title_en: "Purchase-type filtering now enforced for app discounts"
slug: purchase-type-filtering-app-discounts-enforced
zdroj: https://shopify.dev/changelog/purchase-type-filtering-now-enforced-for-app-discounts
shrnuto_dne: 2026-06-18
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor vytváří nebo spravuje app discounts přes Admin GraphQL API, musí ověřit, že pole appliesOnSubscription a appliesOnOneTimePurchase jsou nastavena správně, jinak se po dubnu 2027 může chování slev na checkoutu změnit."
dotcene_klienty: []
souvisejici:
  - appliesonsubscription-default-true-app-discounts
  - storefront-cart-discount-fields
  - multiple-product-discounts-cart-line
tldr: "Od dubna 2027 Shopify začne na checkoutu skutečně vynucovat nastavení appliesOnSubscription a appliesOnOneTimePurchase na app discounts — pole, která dříve existovala v API, ale neměla žádný efekt."
tagy: [discount, subscription, checkout, enforcement]
zdroj_kanal: dev-changelog
kontext:
  background: |
    App discounts jsou slevy spravované externími aplikacemi přes Admin GraphQL API pomocí mutací `discountCodeAppCreate` a `discountAutomaticAppCreate`. Na těchto vstupních typech (`DiscountCodeAppInput`, `DiscountAutomaticAppInput`) existují dvě pole pro filtrování podle typu nákupu: `appliesOnSubscription` a `appliesOnOneTimePurchase`. Tato pole určují, zda má sleva platit pro jednorázové nákupy, předplatné (subscriptions), nebo obojí.

    Historicky tato pole v API sice existovala, ale Shopify je na úrovni platformy nevynucoval — sleva se aplikovala bez ohledu na jejich nastavení. Vývojáři mohli tato pole nastavovat, aniž by to mělo jakýkoli viditelný efekt na chování při checkoutu.

    Shopify nyní oznámil, že od **3. dubna 2027** začne filtrování podle purchase type skutečně vynucovat. Filtrace probíhá na úrovni platformy po spuštění discount funkce — řádky cílené funkcí, které neodpovídají nastavené konfiguraci purchase type, budou z aplikace slevy vyloučeny. Aby nedošlo k nečekanému rozbití existujících slev, Shopify automaticky backfilloval všechny existující app discounts: `appliesOnSubscription: true` a `appliesOnOneTimePurchase: true`, čímž zachoval dosavadní chování.

    Pro vývojáře, kteří chtějí slevu omezit pouze na subscription nebo pouze na jednorázové nákupy, je nyní správný čas tato pole záměrně nastavit. Po dubnu 2027 bude každý discount, který má jedno z polí nastaveno na `false`, skutečně vylučovat odpovídající typ nákupu z aplikace slevy na checkoutu.

  zdroje:
    - title: "Shopify: Purchase-type filtering now enforced for app discounts"
      url: "https://shopify.dev/changelog/purchase-type-filtering-now-enforced-for-app-discounts"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Pole `appliesOnSubscription` a `appliesOnOneTimePurchase` na `DiscountCodeAppInput` a `DiscountAutomaticAppInput` v Admin GraphQL API byla dosud ignorována — Shopify je nevynucoval a sleva se aplikovala na všechny typy nákupů bez ohledu na jejich hodnotu.

Od **3. dubna 2027** bude Shopify tato pole skutečně vynucovat na úrovni platformy. Filtrování probíhá po běhu discount funkce: pokud je `appliesOnSubscription: false`, sleva se neuplatní na subscription line items, i když je discount funkce na ně cílí. Stejně tak pro `appliesOnOneTimePurchase: false`.

Shopify provedl automatický backfill všech existujících app discounts na hodnoty `true` pro obě pole, takže dosavadní chování zůstává zachováno. Žádná okamžitá akce není nutná — ale vývojáři, kteří chtějí rozlišit chování slevy podle typu nákupu, mohou tato pole začít záměrně využívat již dnes.

## Časová osa

| Datum | Událost |
|---|---|
| 17. 6. 2026 | Oznámení, backfill existujících discountů na `true/true` |
| 3. 4. 2027 | Purchase-type filtering začne být skutečně vynucováno na checkoutu |

## Dopad pro nás

Pokud Integrátor nebo klientské aplikace vytvářejí app discounts přes Admin GraphQL API, je potřeba ověřit, jak jsou pole `appliesOnSubscription` a `appliesOnOneTimePurchase` nastavena. Automatický backfill zajistil, že existující slevy budou fungovat stejně jako dosud. Nové slevy vytvářené po 17. 6. 2026 by měla mít tato pole explicitně nastavena, aby bylo chování po dubnu 2027 předvídatelné.

Pokud má být sleva omezena pouze na předplatné nebo pouze na jednorázové nákupy, je nyní správný čas toto záměrně nastavit a otestovat před enforcement datem.

## Použití v Integrátoru

Integrátor pracuje s Admin GraphQL API pro správu slev. Doporučuje se projít všechna místa, kde se volají mutace `discountCodeAppCreate`, `discountCodeAppUpdate`, `discountAutomaticAppCreate` nebo `discountAutomaticAppUpdate`, a ujistit se, že hodnoty `appliesOnSubscription` a `appliesOnOneTimePurchase` odpovídají záměru dané slevy. Pokud mají slevy platit pro oba typy nákupů (výchozí chování), hodnoty `true/true` jsou správné a nevyžadují změnu.
