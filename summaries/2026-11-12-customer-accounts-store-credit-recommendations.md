---
date: 2026-11-12
title: "Customer accounts: store credit balance + personalized recommendations (CA upgrade)"
title_en: "Customer accounts now show store credit and personalized product recommendations"
slug: customer-accounts-store-credit-recommendations
zdroj: https://changelog.shopify.com/posts/customer-accounts-now-show-store-credit-and-personalized-product-recommendations
shrnuto_dne: 2026-11-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá store credit nebo B2B kredit, zůstatek se nově zobrazí zákazníkovi v hlavičce účtu a zvyšuje to hodnotu synchronizace kreditů z externích systémů."
dotcene_klienty: []
souvisejici: [merchant-notes-store-credit-transactions, store-credit-b2b, customer-account-web-component]
tldr: "Hlavička nových customer accounts nově zobrazuje zůstatek store creditu a přihlášeným zákazníkům bez objednávky nabízí personalizovaná doporučení produktů z katalogu obchodu."
tagy: [customer-accounts, store-credit, recommendations, personalization, retention]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Customer accounts jsou aktuální generace zákaznických účtů v Shopify, kde zákazník vidí objednávky, adresy a další údaje o svém profilu. Starší (legacy) účty se postupně nahrazují a novinky se objevují jen v nové verzi.

    Novinka přidává do hlavičky účtu na každé stránce aktuální zůstatek store creditu. Přihlášeným zákazníkům, kteří u obchodu zatím nenakoupili, se navíc zobrazují personalizovaná doporučení produktů z katalogu obchodu. Pořadí vychází z odhadu preferencí daného zákazníka, který počítá Shopify.

    Změna se týká obchodů na nejnovější verzi customer accounts. Obchody na legacy účtech musí nejdřív přejít na novou verzi, Shopify k tomu doporučuje pomoc Sidekicku. Zřejmým přínosem je větší viditelnost kreditu a tím vyšší šance, že ho zákazník uplatní při dalším nákupu.
  zdroje:
    - title: "Shopify: Customer accounts now show store credit and personalized product recommendations"
      url: "https://changelog.shopify.com/posts/customer-accounts-now-show-store-credit-and-personalized-product-recommendations"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Hlavička zákaznického účtu nově na každé stránce zobrazuje zůstatek store creditu přihlášeného zákazníka. Zákazníci, kteří jsou přihlášení, ale ještě u obchodu nenakoupili, vidí personalizovaná doporučení produktů z katalogu. Pořadí určuje odhad preferencí zákazníka od Shopify. Funkce platí pro obchody na nejnovější verzi customer accounts.

## Časová osa

- 2026-11-12: změna zveřejněna a dostupná v nové verzi customer accounts.
- Obchody na legacy customer accounts: nutný přechod na novou verzi, bez něj se novinky nezobrazí.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani nové scopy nejsou uvedeny. Pokud synchronizujeme store credit z externích systémů, bude zůstatek přímo viditelný zákazníkům, takže na správnost a včasnost zápisu záleží víc. Zkontrolovat, zda mají dotčené obchody nasazené novou verzi customer accounts a zda vlastní úpravy hlavičky účtu s novým prvkem nekolidují.

**Pro PM / PO:** Příležitost pro klienty s kreditovými nebo věrnostními programy a pro B2B kredit. Je to další argument pro migraci z legacy účtů a pro návrh retenčních kampaní postavených na kreditu. Priorita nízká, vhodné nabídnout při nejbližší revizi účtů.

## Použití v Integrátoru

Pokud synchronizujeme store credit z ERP nebo CRM, zůstatek se nově promítne do hlavičky účtu zákazníka. Přímá změna integrace není potřeba.
