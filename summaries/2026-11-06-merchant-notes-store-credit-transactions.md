---
date: 2026-11-06
title: "Admin API: merchant notes na store credit transactions (audit trail)"
title_en: "Merchant notes on store credit transactions"
slug: merchant-notes-store-credit-transactions
zdroj: https://shopify.dev/changelog/posts/merchant-notes-on-store-credit-transactions
shrnuto_dne: 2026-11-11
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá store credit (goodwill refundy, B2B kredit), můžeme při připisování nebo odečítání kreditu zapisovat důvod do poznámky a získat audit trail pro zákaznickou podporu a účetnictví."
dotcene_klienty: []
souvisejici: [store-credit-b2b, editions-fall-2026-payments]
tldr: "Od verze GraphQL Admin API 2027-01 lze při připsání nebo odečtení store creditu uložit interní poznámku (až 5 000 znaků), kterou vidí jen obchodník."
tagy: [store-credit, transactions, notes, admin-api, audit, customer-service]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Store credit je v Shopify virtuální zůstatek evidovaný u zákazníka, který lze použít při dalších nákupech. V Admin API ho zastupuje objekt StoreCreditAccount a jeho historii tvoří StoreCreditAccountTransaction. Dosud transakce nesla pouze částku a typ pohybu, takže se z ní nedalo zjistit, proč byl kredit udělen nebo odebrán.

    Novinka přidává volitelné pole note do vstupů StoreCreditAccountCreditInput a StoreCreditAccountDebitInput a stejnojmenné pole do typu StoreCreditAccountTransaction. Poznámku lze uložit při vytvoření transakce a pak ji už nelze upravit. Je viditelná jen obchodníkovi, nikoli zákazníkovi. Maximální délka je 5 000 znaků, delší text vrátí chybu NOTE_TOO_LONG a transakce se nevytvoří. U transakcí typu expiration vrací pole vždy null.

    Změna se hodí hlavně pro zákaznickou podporu a účetnictví, které potřebují doložit důvod goodwill kreditu, například kompenzace za pozdní dodání. Souvisí s dřívějším rozšířením store creditu na B2B company locations, kde je dohledatelnost pohybů ještě důležitější. Existující integrace fungují beze změn a nejsou potřeba žádné nové přístupové scopy.
  zdroje:
    - title: "Shopify: Merchant notes on store credit transactions"
      url: "https://shopify.dev/changelog/posts/merchant-notes-on-store-credit-transactions"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Mutace `storeCreditAccountCredit` a `storeCreditAccountDebit` nově přijímají volitelný parametr `note` (String). Uložená poznámka se vrací v poli `StoreCreditAccountTransaction.note` u transakcí typu credit, debit a debit-revert; pokud nebyla zadána, je hodnota `null`. U expiračních transakcí je vždy `null`.

Poznámka je určena jen obchodníkům, zákazník ji nevidí. Limit je 5 000 znaků, při překročení se vrátí user error `NOTE_TOO_LONG` a transakce se nevytvoří. Poznámku nelze po vytvoření transakce upravit. Nové pole je dostupné od verze `2027-01`, ve verzích `2026-10` a starších neexistuje. Nejsou potřeba nové scopy, platí stávající `read_store_credit_account_transactions` a `write_store_credit_account_transactions`.

## Časová osa

- 2026-10-09: uvedená účinnost změny (podle metadat stránky)
- 2026-11-06: zveřejnění v dev changelogu
- Verze `2027-01` a novější: pole `note` je dostupné v API
- Verze `2026-10` a starší: pole nejsou k dispozici

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná, stávající volání fungují beze změn. Pro využití novinky je potřeba cílit na API verzi `2027-01` nebo novější, přidat `note` do vstupu credit/debit a vybírat `note` v dotazech na transakce. Ošetřete chybu `NOTE_TOO_LONG` (limit 5 000 znaků) a počítejte s tím, že poznámku nelze později opravit, takže ji je třeba správně sestavit hned při vytvoření.

**Pro PM / PO:** Jde o drobné vylepšení auditní stopy. U klientů, kteří připisují kredit jako kompenzaci nebo refund, můžeme navrhnout automatické zapisování důvodu a původu (například číslo reklamace nebo jméno operátora). Přínos mají týmy zákaznické podpory a účetnictví. Urgence je nízká.

## Použití v Integrátoru

Pokud některý klient připisuje nebo odečítá store credit přes Admin API, můžeme po přechodu na verzi `2027-01` do volání doplnit poznámku s důvodem a odkazem na zdrojový případ. Aktuálně nic nevyžaduje změnu.
