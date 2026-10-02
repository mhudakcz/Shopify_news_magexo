---
date: 2026-10-01
title: "Nové SubscriptionContractCalculation API pro subscription management (Action Required)"
title_en: "New SubscriptionContractCalculation API for subscription management"
slug: subscription-contract-calculation-api-new
zdroj: https://shopify.dev/changelog/posts/new-subscriptioncontractcalculation-api-for-subscription-management
shrnuto_dne: 2026-10-02
kategorie: [nova-api, deprecation]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Subscription contracts zatím neimplementujeme, takže nás změna přímo netlačí; pokud bychom subscriptions přidávali, stavíme rovnou na novém API a ne na SubscriptionDraft."
dotcene_klienty: []
souvisejici: [subscription-contract-calculation-api-early-access, subscription-contracts-without-payment-methods, actor-field-subscription-billing]
tldr: "Shopify uvolnil SubscriptionContractCalculation API v API verzi 2026-10 jako všeobecně dostupné; SubscriptionDraft zůstává funkční, ale nové funkce už nedostane, takže aplikace s vlastní správou subscription kontraktů mají migrovat."
tagy: [admin-graphql-api, subscriptions, contracts, calculation, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Subscription kontrakt je v Shopify Admin GraphQL API objekt popisující opakovaný nákup zákazníka, tedy položky, frekvenci, dodací a fakturační politiku a vazbu na platební metodu. Aplikace pro správu předplatného je dosud vytvářely a upravovaly přes `SubscriptionDraft`, tedy přes sérii dílčích draft mutací, které se musely nakonec potvrdit. Tento model žil vedle běžného checkoutu, takže se logika výpočtu cen, dopravy a dalších prvků mohla postupně rozcházet s tím, co zákazník vidí při placení.

    SubscriptionContractCalculation API je nástupce tohoto modelu. Změny kontraktu zpracovává přes stejný checkout engine, který Shopify používá pro běžné objednávky. Podle changelogu se tak při výpočtu uplatní i Shopify Functions, konkrétně cart transforms a delivery customizations. Úpravy kontraktu přitom odpovídají tomu, co subscriber skutečně uvidí při fakturaci. Součástí je také náhled celého spočítaného kontraktu před uložením, který obsahuje součty, dostupné způsoby doručení i varování, takže aplikace může změnu zobrazit merchantovi nebo zákazníkovi dřív, než se cokoli zapíše. Protože výpočet běží přes sdílený checkout engine, dává smysl očekávat i konzistentnější práci s měnami, daněmi a dopravou. Konkrétní podoba těchto edge cases ale z changelogu přímo nevyplývá a je potřeba ji ověřit v dokumentaci.

    Jde o všeobecně dostupnou (GA) verzi, která navazuje na early access z 27. 7. 2026. Je dostupná v API verzi 2026-10. `SubscriptionDraft` zůstává funkční, ale nedostává nové funkce, a Shopify vývojářům výslovně doporučuje migrovat. Changelog je označen jako Action Required, ale konkrétní datum vypnutí starého API v něm uvedeno není. Pro migraci Shopify nabízí samostatný migrační průvodce a aktualizované build guides pro subscriptions.
  zdroje:
    - title: "Shopify: New SubscriptionContractCalculation API for subscription management"
      url: "https://shopify.dev/changelog/posts/new-subscriptioncontractcalculation-api-for-subscription-management"
    - title: "Shopify Docs: Migrate to SubscriptionContractCalculation API"
      url: "https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/migrate-to-subscription-calculation-api"
    - title: "Shopify Docs: SubscriptionContractCalculation (2026-10)"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-10/unions/SubscriptionContractCalculation"
    - title: "SubscriptionContractCalculation API: early access pro výpočet subscription contracts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contract-calculation-api-early-access/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify uvedl jako všeobecně dostupné (GA) nové Admin GraphQL API **SubscriptionContractCalculation**, které je v API verzi **2026-10** určené pro správu subscription kontraktů a nahrazuje early access verzi z 27. 7. 2026. Nově navržený model počítá změny kontraktu přes stejný **checkout engine**, který Shopify používá pro běžné objednávky. Podle changelogu to přináší tři věci:

- **Shopify Functions při výpočtu kontraktu**: cart transforms a delivery customizations se uplatní i u subscription kontraktů, takže se pravidla definovaná pro checkout nemusí duplikovat.
- **Soulad s billingem**: úpravy kontraktu odpovídají tomu, co subscriber uvidí při skutečné fakturaci.
- **Náhled před uložením**: aplikace může získat kompletní spočítaný kontrakt (součty, delivery options a warnings) ještě předtím, než se cokoli trvale zapíše.

Starší **SubscriptionDraft** API zůstává funkční, ale nové funkce už nedostává. Shopify proto doporučuje, aby vývojáři, kteří dnes SubscriptionDraft používají, přešli na SubscriptionContractCalculation. Zmíněné zlepšení práce s edge cases kolem měn, daní a dopravy plyne ze sdíleného checkout enginu, ale samotný changelog ho nerozebírá, takže detaily je potřeba ověřit v migračním průvodci a v dokumentaci unionu `SubscriptionContractCalculation`.

## Časová osa

- **27. 7. 2026**: early access SubscriptionContractCalculation API na release candidate verzi 2026-10.
- **1. 10. 2026**: GA v API verzi 2026-10, changelog označen jako Action Required.
- **Termín vypnutí SubscriptionDraft**: v changelogu neuveden. API zatím funguje dál, bez nových funkcí.

## Dopad pro nás

**Pro vývojáře:** Aplikace, které přes `SubscriptionDraft` vytvářejí nebo upravují subscription kontrakty, by měly naplánovat migraci na nový výpočetní model. Shopify k tomu poskytuje migrační průvodce a aktualizované build guides. Vzhledem k tomu, že pro SubscriptionDraft není oznámen konkrétní termín ukončení, jde o střední naléhavost: není třeba panikařit, ale nová práce na subscriptions by už měla stavět na novém API. Aplikace, které kontrakty jen čtou, tato změna přímo nezasahuje. Při migraci stojí za to ověřit, jak se nový výpočet chová u měn, daní a dopravy, a otestovat chování s cart transform a delivery customization Functions, pokud je merchant používá.

**Pro PM / PO:** Hlavním přínosem je, že cena a doručení u subscription kontraktu se počítají stejně jako v běžném checkoutu a že lze před uložením získat náhled s totály a varováními. To snižuje riziko rozdílů mezi tím, co merchant nastaví, a tím, co zákazník dostane zaúčtováno. Pro projekty merchantů, které subscriptions nepoužívají nebo je řeší hotovou aplikací třetí strany, nemá změna přímý dopad. Pokud merchant používá vlastní subscription aplikaci, stojí za to se zeptat jejího dodavatele, zda už migrace na nové API probíhá.

## Použití v Integrátoru

Subscription contracts zatím neimplementujeme, takže migrace není potřeba. Pokud bychom subscriptions v budoucnu přidávali, postavíme je rovnou na SubscriptionContractCalculation API a SubscriptionDraft nepoužijeme.
