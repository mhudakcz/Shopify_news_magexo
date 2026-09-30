---
date: 2026-09-29
title: "Odolnější token exchange při migrace tokenů bez user session (bg workflow apps)"
title_en: "More resilient token exchanges when migrating tokens without a user session"
slug: token-exchanges-resilient-migration-no-session
zdroj: https://shopify.dev/changelog/posts/more-resilient-token-exchanges-when-migrating-tokens-without-a-user-session
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost, fyi]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se migrace non-expiring offline tokenů na expirující bez user session, tedy scénáře backend workerů a batch jobů; relevantní, pokud někdy budeme takovou migraci u vlastní nebo veřejné aplikace provádět."
dotcene_klienty: []
souvisejici: [offline-access-tokens-resilient-refreshes, expiring-offline-tokens-all-public-apps-2027, expiring-offline-tokens-required]
tldr: "Když se při automatické migraci non-expiring offline tokenu na expirující ztratí odpověď s novým párem tokenů, lze nově výměnu až 7 dní opakovat původním tokenem a dostat stejný pár zpět."
tagy: [admin-graphql-api, authentication, tokens, oauth, migration, background-jobs]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Offline access token je přihlašovací údaj, který aplikace používá pro přístup k Admin API bez přítomnosti uživatele, typicky pro webhooky, plánované synchronizace a další práci na pozadí. Historicky byly tyto tokeny trvalé (non-expiring). Shopify je postupně nahrazuje expirující variantou, kde access token žije krátce a k jeho obnově slouží refresh token s 90denní životností. Pro nové public apps je expirující varianta povinná od dubna 2026 a pro všechny public apps od 1. 1. 2027, takže existující aplikace musí své uložené trvalé tokeny převést.
    Převod se dělá přes token exchange, kdy aplikace vymění původní trvalý token za nový pár access token a refresh token. Dá se provést i bez user session, tedy čistě z backendu, například z batch jobu nebo workeru, který prochází všechny nainstalované obchody. Slabé místo takového převodu je, že výměna je z pohledu původního tokenu jednorázová. Pokud Shopify pár vystaví, ale odpověď se aplikaci nedoručí nebo ji aplikace nestihne uložit (timeout, pád workeru, chyba databáze), původní token už nemusel jít znovu použít a aplikace o přístup k obchodu přišla.
    Nový mechanismus tohle okno zavírá. Při opakování výměny s původním tokenem v době do sedmi dnů vrací Shopify stejný pár access token a refresh token jako při první výměně, takže aplikace jen doplní chybějící uložení. Navazuje na srpnové zodolnění samotného refreshe (prodloužené recovery okno pro starý refresh token); tato změna řeší stejný typ problému o krok dřív, při prvotní migraci.
  zdroje:
    - title: "Shopify: More resilient token exchanges when migrating tokens without a user session"
      url: "https://shopify.dev/changelog/posts/more-resilient-token-exchanges-when-migrating-tokens-without-a-user-session"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify zodolnil migraci non-expiring offline tokenů na expirující offline access tokeny v případě, že se migrace provádí bez user session. Pokud první pokus o token exchange selže na straně aplikace (ztracená odpověď, neúspěšné uložení), může ho aplikace nově zopakovat s původním tokenem až po dobu sedmi dnů od první výměny. Shopify při takovém opakování vrátí stejný pár access token a refresh token, který vydal poprvé.

Detaily chování při tomto recovery:

- opakovaná výměna vrací identický pár access token a refresh token,
- platnost access tokenu se v případě potřeby prodlouží, aby ho aplikace stihla použít,
- platnost refresh tokenu se nemění,
- recovery okno je maximálně sedm dní od první výměny.

Recovery okno skončí v okamžiku, kdy uplyne sedm dní, kdy aplikace úspěšně provede refresh, nebo kdy pro daný obchod získá nový token jiným způsobem. Změna se týká Admin GraphQL API i Admin REST API a nevyžaduje žádnou úpravu kódu, jde o změnu chování na straně Shopify. Shopify ale doporučuje několik postupů:

- po neúspěšné migraci ji opakovat původním tokenem v rámci sedmi dnů,
- access token, refresh token a hodnoty expirace ukládat společně (atomicky),
- po úspěšné migraci původní non-expiring token zahodit,
- chybu `invalid_subject_token` ošetřit získáním nových tokenů přes ID-token exchange nebo authorization code grant.

## Časová osa

- **2026-08-28** - Shopify zodolnil refresh expirujících offline tokenů (viz související článek)
- **2026-09-29** - změna token exchange bez user session nasazena, platí okamžitě
- **do 7 dnů od první výměny** - okno, ve kterém lze výměnu opakovat původním tokenem
- **2027-01-01** - deadline pro povinné expirující offline tokeny u všech public apps, do té doby je třeba migraci dokončit

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná, změna jen snižuje riziko při hromadné migraci. Pokud plánujeme převod uložených trvalých tokenů před lednovým deadlinem, stojí za to navrhnout migrační job jako idempotentní: nový pár tokenů zapsat atomicky, při chybě ukládání výměnu zopakovat původním tokenem a původní token zahodit až po potvrzeném uložení. Kód by měl počítat i s tím, že po uplynutí sedmi dnů nebo po úspěšném refreshi už recovery nefunguje a `invalid_subject_token` znamená nutnost nové autorizace přes ID-token exchange nebo authorization code grant. Předpoklady o jednorázovosti výměny ve stávající retry logice je vhodné zrevidovat.

**Pro PM / PO:** Jde o zpřesnění spolehlivosti na straně Shopify bez nutnosti komunikace navenek. Pro plánování migrace na expirující tokeny to znamená menší riziko, že se při hromadném převodu některé obchody ztratí a bude potřeba je znovu autorizovat. Samotný deadline 1. 1. 2027 se nemění, takže migrační práce je vhodné držet v plánu.

## Použití v Integrátoru

Přímý dopad je nízký, protože naše integrace běží jako custom apps a povinnost se týká public apps. Pokud bychom někdy migrovali uložené offline tokeny bez user session, nově zavedené sedmidenní recovery okno nám sníží riziko ztráty přístupu k obchodu.
