---
date: 2026-08-28
title: "Odolnější refreshes pro expiring offline access tokens"
title_en: "More resilient refreshes for expiring offline access tokens"
slug: offline-access-tokens-resilient-refreshes
zdroj: https://shopify.dev/changelog/more-resilient-refreshes-for-expiring-offline-access-tokens
shrnuto_dne: 2026-09-08
kategorie: [nova-prilezitost, fyi]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Aplikace s dlouhotrvajicimi offline-access integracemi a batch joby si tim snizuji riziko vypadku pri refresh race condition."
dotcene_klienty: []
souvisejici: [expiring-offline-tokens-required, expiring-offline-tokens-all-public-apps-2027, delegateaccesstoken-expiresin]
tldr: "Shopify prodloužil recovery okno pro refresh starého offline access tokenu až na 30 dní, což snižuje riziko výpadků při souběžných refresh operacích."
tagy: [admin-graphql-api, authentication, oauth, tokens, offline-access, refresh]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify postupně zavádí expirující offline access tokens (90denní životnost) pro public apps, což znamená, že aplikace musí tokeny pravidelně obnovovat pomocí refresh tokenu. Dosud platilo, že po vydání nového refresh tokenu měla aplikace jen omezené okno (60 minut) na dořešení případů, kdy starý refresh token byl použit vícekrát souběžně nebo se odpověď s novým tokenem ztratila kvůli výpadku sítě či chybě uložení.
    Tato krátká lhůta způsobovala false-negatives: pokud aplikace kvůli síťové chybě nebo race condition mezi paralelními procesy nestihla zaznamenat nový refresh token včas, další pokus o refresh starým tokenem selhal a app musela projít celým OAuth flow znovu, což u batch jobů a dlouhotrvajících integrací znamenalo zbytečné výpadky.
    Nová verze mechanismu tento problém řeší tím, že starý refresh token zůstává použitelný podstatně déle - až 30 dní od prvního použití, respektive dokud aplikace nezačne používat nový (replacement) refresh token. Životnost samotného access tokenu (90 dní) se tím nemění, jde čistě o odolnější recovery cestu pro refresh operaci.
  zdroje:
    - title: "Shopify: More resilient refreshes for expiring offline access tokens"
      url: "https://shopify.dev/changelog/more-resilient-refreshes-for-expiring-offline-access-tokens"
    - title: "Shopify docs: Offline access tokens"
      url: "https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/offline-access-tokens"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify upravil chování refresh mechanismu u expirujících offline access tokens tak, aby lépe zvládal síťové výpadky a souběžné (concurrent) refresh operace. Dříve mohla aplikace po vydání nového refresh tokenu použít ten starý už jen po dobu 60 minut - pokud se v té době nestihlo dokončit uložení nového tokenu (např. kvůli výpadku sítě nebo chybě v databázi), app přišla o možnost obnovy a musela projít celým OAuth flow znovu.

Nově platí, že starý refresh token zůstává funkční až 30 dní od prvního refreshe, respektive dokud ho aplikace nenahradí novým (replacement) tokenem - podle toho, co nastane dřív. Jakmile app jednou použije nový refresh token, ten starý se automaticky zneplatní. Životnost access tokenu (90 dní) se touto změnou nemění, jde jen o odolnější recovery okno pro samotnou refresh operaci.

Změna se týká Admin GraphQL API i Admin REST API a nevyžaduje žádnou migraci ani úpravu kódu - jde o změnu chování na straně Shopify. Doporučené postupy zůstávají stejné: refresh operace serializovat per shop a nový pár access-token/refresh-token ukládat atomicky.

## Časová osa

- **2026-08-28** - změna refresh mechanismu nasazena, recovery okno prodlouženo na 30 dní
- Navazuje na dřívější zavádění expirujících offline tokens (povinné pro nové public apps od 1. 4. 2026, pro všechny public apps od 1. 1. 2027)

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná, ale je vhodné ověřit, že aplikace i nadále serializují refresh operace per shop a ukládají access-token/refresh-token pár atomicky - Shopify explicitně upozorňuje, že delší recovery okno není důvod držet si staré tokeny navíc, jen pojistka proti race conditions a výpadkům. U aplikací s vlastní retry logikou stojí za to zkontrolovat, jestli nepočítají s tvrdým 60minutovým limitem, který už neplatí.

**Pro PM / PO:** Jde o interní vylepšení spolehlivosti na straně Shopify bez nutnosti komunikace s klienty. Relevantní hlavně pro apps s dlouhodobě běžícími integracemi a batch job workflows, kde dřívější krátké okno mohlo způsobit zbytečné výpadky vyžadující re-autorizaci.

## Použití v Integrátoru

Přímý dopad je nízký, protože jde o změnu na straně Shopify infrastruktury - je ale dobré mít na paměti při ladění vlastní refresh-token logiky u dlouhotrvajících integrací.
