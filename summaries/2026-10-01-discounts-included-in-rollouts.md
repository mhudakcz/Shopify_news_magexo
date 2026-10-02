---
date: 2026-10-01
title: "Discounts mohou být součástí Rollouts (plánované slevy, A/B test slev)"
title_en: "Discounts can now be included in Rollouts"
slug: discounts-included-in-rollouts
zdroj: https://shopify.dev/changelog/posts/discounts-can-now-be-included-in-rollouts
shrnuto_dne: 2026-10-02
kategorie: [nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "S Admin API pro slevy pracujeme, takže pokud čteme stav nebo platnost slev, bude potřeba doplnit connection Discount.rollouts a scope read_rollouts, jinak nám u slev spravovaných přes Rollouts unikne skutečný dosah."
dotcene_klienty: []
souvisejici: [rollouts-schedule-ab-test-themes-checkout, rollouts-granular-controls-launches-tests, rollouts-storefront-changes]
tldr: "Slevy lze nově zahrnout do Rollouts, takže se dají plánovat, testovat a nasazovat postupně; v Admin GraphQL API 2026-10 přibyla read-only connection Discount.rollouts a scope read_rollouts, a kdo čte stav slev jen z startsAt a endsAt, bude mít neúplný obrázek."
tagy: [admin-graphql-api, discounts, rollouts, action-required, launches]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (Markets › Rollouts), který obchodníkům umožňuje plánovat, postupně nasazovat a A/B testovat změny, aniž by je museli spouštět ručně v konkrétní čas. Původně šlo čistě o změny storefront tématu (březen 2026), v červnu 2026 přibyly checkout a customer account konfigurace a v září 2026 dostal Rollouts přepracovaný setup flow s multi-change podporou a conflict review. Do teď ale slevy do tohoto mechanismu nepatřily: jejich spuštění a ukončení se řídilo pouze nativními poli startsAt a endsAt přímo na slevě.

    Tato změna přidává slevy mezi věci, které lze zahrnout do Rollouts. Obchodník tak může slevovou kampaň spustit koordinovaně spolu s dalšími změnami (nové téma, upravený checkout), ověřit její dopad na části návštěvníků nebo ji nasadit jako dočasnou akci s definovaným koncem. Podle changelogu je pro čtení těchto dat v Admin GraphQL API 2026-10 nově k dispozici read-only connection rollouts napříč typy slev (Discount.rollouts). Slevy, které v žádném Rollout nejsou, se chovají stejně jako dřív.

    Důležitý je rozdíl v dosahu. Sleva s efektivním traffic 100 % je dostupná ve všech prodejních kanálech, ale pokud je Rollout aktivní jen pro část návštěvnosti, platí to výhradně pro Online Store. Pro vývojáře to znamená, že samotné startsAt, endsAt a status už nemusí říct, komu a kde je sleva skutečně dostupná. Podle changelogu navíc starší verze API odfiltrují slevy s částečným dosahem nebo se stavem, který nesedí na stav odvozený z nativních dat, takže při práci se slevami je vhodné přejít na verzi 2026-10 a ověřit si detaily v Discount Rollouts upgrade guide a v dokumentaci k Rollouts queries a webhooks.
  zdroje:
    - title: "Shopify: Discounts can now be included in Rollouts"
      url: "https://shopify.dev/changelog/posts/discounts-can-now-be-included-in-rollouts"
    - title: "Archiv: Rollouts, scheduling + A/B testing pro themes a checkout/CAU konfigurace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-schedule-ab-test-themes-checkout/"
    - title: "Archiv: Rollouts, přesnější timing kontroly, multi-change support, conflict review"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-granular-controls-launches-tests/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify rozšiřuje Rollouts o **slevy**. Obchodníci je teď mohou používat pro koordinované spuštění kampaně, testování na části zákazníků a dočasné promo akce, místo aby se spoléhali jen na nativní pole startsAt a endsAt. V Admin GraphQL API 2026-10 se to projevuje takto:

- **`Discount.rollouts`** — nová read-only connection napříč typy slev, přes kterou zjistíte, ve kterých Rollouts je sleva zahrnutá
- **Nový scope `read_rollouts`** — aplikace ho musí mít v oprávněních, aby connection vůbec mohla číst
- **Plán Rollout vs. nativní data** — schedule, rozdělení variant (treatment split) a stav aktivace/expirace Rollout se kombinují s dostupností slevy, kterou znáte z polí na slevě
- **Dosah podle traffic allocation** — při efektivním traffic 100 % je sleva dostupná ve všech prodejních kanálech; při částečném traffic je aktivní pouze v Online Store
- **Slevy mimo Rollouts** — chovají se beze změny
- **Starší verze API** — slevy s částečným dosahem nebo se stavem nesouhlasícím s tím, co vyplývá z nativních dat, se podle changelogu odfiltrují

Detaily jsou popsané v Discount Rollouts upgrade guide a v dokumentaci k Rollouts queries a webhooks.

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny (scheduling + A/B testy)
- **2026-06-05** — Rollouts rozšířen o checkout a customer account konfigurace
- **2026-09-22** — přepracovaný setup flow (timing podle záměru, multi-change, conflict review)
- **2026-10-01** — slevy lze zahrnout do Rollouts, Admin GraphQL API 2026-10 přidává `Discount.rollouts` a scope `read_rollouts`

## Dopad pro nás

**Pro vývojáře:** Změna je přidávací, takže nic samo od sebe nespadne, ale logika, která pozná aktivní slevu jen podle `status`, `startsAt` a `endsAt`, přestane stačit. Pokud aplikace nebo synchronizace slevy čte, je potřeba:

1. přidat scope `read_rollouts` do oprávnění aplikace,
2. u slev dotazovat `Discount.rollouts` a zjistit, jestli jsou součástí Rollout,
3. zkombinovat schedule Rollout s daty slevy,
4. zohlednit traffic allocation, protože částečný dosah platí jen pro Online Store.

Jde o tag action-required především pro ty, kdo upgradují na API 2026-10 a pracují se slevami; kdo slevy nečte, nemusí nic dělat. Přesná struktura polí uvnitř Rollout se vyplatí ověřit v upgrade guide, než se začne implementovat.

**Pro PM / PO:** Vzniká nová příležitost pro obchodníky, kteří dělají sezónní kampaně (Black Friday, Vánoce, výprodeje). Slevu lze naplánovat spolu s redesignem tématu nebo úpravou checkoutu a dá se i postupně rozjíždět nebo A/B testovat její rozsah, což doplňuje dřívější podporu Rollouts pro themes a checkout. Je třeba hlídat omezení, že **částečný traffic funguje jen v Online Store**: u obchodů s POS nebo dalšími kanály tedy test slevy pokryje pouze web a sleva se v ostatních kanálech chová jinak (100 % dosah = všechny kanály). Při nacenění kampaní a reportingu s tím počítat, stejně jako s tím, že nově mohou existovat slevy, jejichž dostupnost neurčují jen jejich vlastní data.

## Použití v Integrátoru

**Možná** — se slevami přes Admin API pracujeme, takže pokud synchronizujeme stav nebo platnost slev do jiných systémů, bude potřeba doplnit čtení `Discount.rollouts` a scope `read_rollouts`; pro slevy bez Rollouts se nic nemění.
