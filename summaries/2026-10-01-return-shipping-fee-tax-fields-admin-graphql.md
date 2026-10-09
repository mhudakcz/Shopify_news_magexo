---
date: 2026-10-01
title: "Admin GraphQL: nová tax pole pro return shipping fees"
title_en: "New tax fields for return shipping fees in the GraphQL Admin API"
slug: return-shipping-fee-tax-fields-admin-graphql
zdroj: https://shopify.dev/changelog/posts/new-return-shipping-fee-tax-fields
shrnuto_dne: 2026-10-08
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud u US obchodů řešíme returns, refundy nebo export daňových dat do účetnictví, lze nově číst daň z return shipping fee přímo z Admin GraphQL API místo jejího dopočítávání mimo Shopify."
dotcene_klienty: []
souvisejici: [tax-return-shipping-fees-us, return-policy-profiles-graphql-admin, us-tax-calculation-fulfillment-location-routing]
tldr: "Admin GraphQL API 2026-10 přidává pole taxAmountSet (odhad daně) a finalizedTaxAmountSet (skutečně účtovaná daň) na return shipping fees, takže aplikace mohou daň z vratek číst místo počítat; souvisí s automatickým zdaněním od 23. 10. 2026."
tagy: [admin-graphql-api, returns, tax, shipping-fees, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Poplatek za return shipping, který merchant účtuje zákazníkovi při vrácení zboží, byl z pohledu daně dlouho slabé místo. Shopify Tax ho u US objednávek běžně nezdaňoval, takže obchody a aplikace s vlastní return, refund nebo účetní logikou daň buď vůbec neevidovaly, nebo ji dopočítávaly mimo Shopify. Samotná Admin GraphQL API přitom neměla žádný způsob, jak výši této daně přečíst.

    Shopify proto v merchant changelogu z 25. 9. 2026 oznámil, že od 23. 10. 2026 bude u objednávek odesílaných do USA počítat daň z return shipping fees automaticky, pokud obchod používá Shopify Tax nebo Tax Platform. Tento dev-changelog z 1. 10. 2026 je jeho vývojářskou stránkou: s verzí 2026-10 zpřístupňuje částky, které daňový provider pro return shipping fee spočítal, a to ve dvou nových polích. Jde o aditivní změnu, od aplikací se nic nevyžaduje.

    Důležité upřesnění rozsahu: změna zpřístupňuje pouze celkové částky daně ve formátu MoneyBag, tedy v měně obchodu i v prezentační měně. Post neuvádí žádné tax lines, sazby ani zdroj daně per return shipping charge, takže detailní rozpad daně přes toto API zatím k dispozici není. Pro přesné financial reporting aplikace je to užitečný základ, ale ne úplný daňový rozpad.
  zdroje:
    - title: "Shopify: New tax fields for return shipping fees in the GraphQL Admin API"
      url: "https://shopify.dev/changelog/posts/new-return-shipping-fee-tax-fields"
    - title: "Shopify: Tax is now calculated on return shipping fees"
      url: "https://changelog.shopify.com/posts/tax-is-now-calculated-on-return-shipping-fees"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Admin GraphQL API ve verzi **2026-10** přidává dvě pole, která vystavují daň z **return shipping fees** spočítanou daňovým providerem obchodu.

- **`CalculatedReturnShippingFee.taxAmountSet`** (`MoneyBag!`, nenullable) — odhad daně z return shipping fee v měně obchodu i v prezentační měně. Pole je dostupné v query `returnCalculate`. Pokud se na poplatek žádná daň nevztahuje, vrací nulu.
- **`ReturnShippingFee.finalizedTaxAmountSet`** (`MoneyBag`, nullable) — daň, která byla skutečně naúčtována a zafixována při zpracování vratky. Dokud vratka není zpracovaná, vrací `null`. Pokud se žádná daň neúčtuje, vrací nulu.

Doporučené použití podle Shopify:

- **`taxAmountSet`** slouží k zobrazení odhadu daně při vytváření vratky.
- **`finalizedTaxAmountSet`** slouží k odsouhlasení (reconciliation) daně, která byla skutečně naúčtována.

Obě hodnoty se mohou lišit, protože daňový provider může při zpracování vratky vrátit jinou částku než při odhadu. Aplikace proto nesmí odhad považovat za finální číslo. Související dokumentace odkazuje na objekty `CalculatedReturnShippingFee` a `ReturnShippingFee`, query `returnCalculate` a mutaci `returnProcess`.

Co changelog **neobsahuje**: žádné pole pro tax lines, sazby ani zdroj daně, žádný příklad dotazu a žádnou informaci o tom, jaké hodnoty pole vracejí před 23. 10. 2026. Akce od vývojářů není požadována.

## Časová osa

- 2026-09-25 — Shopify v merchant changelogu oznamuje, že od 23. 10. 2026 se bude počítat daň z return shipping fees u US objednávek
- 2026-10-01 — Admin GraphQL API 2026-10 vystavuje `taxAmountSet` a `finalizedTaxAmountSet`
- 2026-10-23 — start automatického výpočtu daně z return shipping fees pro obchody v USA, které používají Shopify Tax nebo Tax Platform

## Dopad pro nás

**Pro vývojáře:** Jde o aditivní změnu bez breaking changes, která je dostupná jen od verze API 2026-10, takže ji nelze použít na starších pinned verzích. Pokud aplikace nebo vlastní returns flow u US obchodů dopočítává daň z return shipping fees sama, dá se po přechodu na 2026-10 nahradit čtením hodnot ze Shopify. Praktický vzor je dvoukrokový: při vytváření vratky zobrazit `taxAmountSet` z `returnCalculate`, po zpracování vratky načíst `finalizedTaxAmountSet` a podle něj zaúčtovat nebo odsouhlasit daň v refund, účetních nebo ERP exportech. Je třeba ošetřit `null` u `finalizedTaxAmountSet` pro nezpracované vratky a počítat s tím, že odhad a finální hodnota se můžou lišit. Souvisí to přímo s rizikem dvojího započtení z oznámení z 25. 9.: stávající ruční workaroundy pro daň z return shipping fees je potřeba před 23. 10. vypnout nebo upravit a nové pole použít jako jediný zdroj pravdy. Protože changelog neuvádí chování před 23. 10., doporučujeme chování polí ověřit na dev store a nespoléhat na předpoklad, že před tímto datem vrací nulu. Také je dobré počítat s tím, že detailní rozpad daně (tax lines, sazby, zdroj) zde dostupný není.

**Pro PM / PO:** Nová příležitost především pro aplikace a obchody, které potřebují přesný financial reporting u US vratek: daň z return shipping fees lze nově získat programově, což zjednodušuje odsouhlasení refundů a daňových reportů. Priorita je nízká, protože nejde o breaking change ani o termín na straně API. Termínově důležitější je merchant-side změna z 23. 10. 2026, kvůli níž je vhodné se u obchodů prodávajících do USA zeptat, zda nepoužívají vlastní postup pro daň z return shipping fees, a domluvit jeho úpravu. Pro EU ani ostatní trhy se touto změnou nic nemění.

## Použití v Integrátoru

Přímo zatím nepoužíváme, jde o nový read-only datový bod v Admin GraphQL API 2026-10. Relevantní je pro US obchody s vlastní return, refund nebo účetní logikou, kde lze daň z return shipping fees číst přímo ze Shopify místo jejího dopočítávání.
