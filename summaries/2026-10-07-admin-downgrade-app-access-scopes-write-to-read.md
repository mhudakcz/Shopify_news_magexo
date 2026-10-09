---
date: 2026-10-07
title: "Apps mohou snížit access scopes z write na read (bez re-install)"
title_en: "Downgrade app access scopes from write to read"
slug: admin-downgrade-app-access-scopes-write-to-read
zdroj: https://shopify.dev/changelog/posts/downgrade-app-access-scopes-from-write-to-read
shrnuto_dne: 2026-10-08
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se aplikací se Shopify-managed installation, které mají v konfiguraci optional write scopes; pokud nějaká naše aplikace takové scopes deklaruje, může je po dokončení write operací snížit na read."
dotcene_klienty: []
souvisejici: [track-app-activity-permissions, function-run-log-access-scopes, app-owned-metaobjects-without-scopes]
tldr: "Od Admin GraphQL API 2027-01 může app s Shopify-managed installation zavolat mutaci appDowngradeAccessScopes a svůj optional write scope nahradit odpovídajícím read scope, bez re-install a bez ztráty read přístupu."
tagy: [admin-graphql-api, access-scopes, oauth, permissions, principle-of-least-privilege, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Access scopes určují, ke kterým datům a operacím Admin API má aplikace přístup. Merchant je schvaluje při instalaci a aplikace je může využívat jen v rozsahu, který dostala. Většina zdrojů má scopes ve dvojicích read a write (například read_orders a write_orders), kde write scope zahrnuje i čtení. U aplikací se Shopify-managed installation se scopes deklarují v konfiguraci aplikace a dělí se na povinné a volitelné (optional_scopes). Volitelné scopes aplikace nepotřebuje hned při instalaci a může si je vyžádat až ve chvíli, kdy je skutečně potřeba.
    Dosud bylo možné volitelný scope odebrat přes appRevokeAccessScopes, ale tím aplikace přicházela o přístup úplně. Pro typický scénář, kdy aplikace write oprávnění potřebuje jen jednorázově (například pro počáteční nastavení, migraci dat nebo import) a později už stačí číst, chyběl mezistupeň. Aplikace musela buď držet write oprávnění trvale, nebo se vzdát i čtení a znovu o něj žádat merchanta.
    Nová mutace appDowngradeAccessScopes tuto mezeru zaplňuje a je praktickým vyjádřením principu nejmenších oprávnění (principle of least privilege). Aplikace si po dokončení práce, která vyžadovala zápis, sama sníží oprávnění na čtení. Zmenšuje se tím dopad případného úniku tokenu nebo chyby v kódu a merchant vidí u aplikace užší oprávnění, což pomáhá důvěře i bezpečnostním auditům. Změna je aditivní a pro existující aplikace nevyžaduje žádnou akci.
  zdroje:
    - title: "Shopify: Downgrade app access scopes from write to read"
      url: "https://shopify.dev/changelog/posts/downgrade-app-access-scopes-from-write-to-read"
    - title: "Shopify: appDowngradeAccessScopes (Admin GraphQL reference)"
      url: "https://shopify.dev/docs/api/admin-graphql/unstable/mutations/appDowngradeAccessScopes"
    - title: "Shopify: API access scopes"
      url: "https://shopify.dev/docs/api/usage/access-scopes"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Od Admin GraphQL API verze `2027-01` mohou aplikace se Shopify-managed installation volat mutaci `appDowngradeAccessScopes`. Ta nahradí vybrané volitelné write scopes jejich odpovídajícími read scopes. Aplikace tak může sama snížit své oprávnění, aniž by se musela přeinstalovat nebo znovu žádat merchanta o souhlas se čtením.

Mutace přijímá v argumentu `scopes` seznam handlů write scopes. V odpovědi vrací pole `downgraded` (úspěšně snížené scopes, každý s `handle`) a pole `userErrors` (validační chyby s `field` a `message`). Ilustrativní volání:

```graphql
mutation {
  appDowngradeAccessScopes(scopes: ["write_orders"]) {
    downgraded { handle }
    userErrors { field message }
  }
}
```

Omezení a pravidla, na která je třeba myslet:

- mutace působí jen na instalaci volající aplikace (nelze měnit oprávnění jiné aplikace),
- požadované scopes musí být deklarované v `optional_scopes`,
- požadované scopes musí být write scopes, ke kterým existuje odpovídající read scope,
- povinné (required) scopes snížit nelze,
- write scopes, které aplikace aktuálně nemá uděleny, se ignorují,
- pokud jakýkoli z požadovaných scopes neprojde validací, je celý požadavek zamítnut a scopes instalace zůstanou beze změny (all-or-nothing).

Související upřesnění se týká `appRevokeAccessScopes`. Odebrání write scope odebere zároveň i read přístup, ale jen v případě, že tento read přístup pocházel výhradně z onoho write scope. Pokud aplikace potřebuje čtení zachovat, má použít právě `appDowngradeAccessScopes`.

Změna je označená jako nová, pro existující aplikace není vyžadována žádná akce.

## Časová osa

- **2026-10-01** - datum účinnosti uvedené v metadatech changelog postu
- **2026-10-07** - Shopify změnu oznámil v developer changelogu, mutace je zdokumentovaná v referenci verze unstable
- **Admin GraphQL API 2027-01** - verze, od které je mutace `appDowngradeAccessScopes` dostupná podle oznámení

## Dopad pro nás

**Pro vývojáře:** Žádná akce není nutná. Pokud některá naše aplikace deklaruje optional write scopes, stojí za to zvážit jejich snižování po dokončení kroků, které zápis vyžadují. Praktické poznámky:

- Volat mutaci až po vypnutí nebo dokončení všech kódových cest, které write scope používají, jinak se jejich mutace začnou po snížení oprávnění vracet s chybou přístupu.
- Vždy zkontrolovat `userErrors`. Kvůli all-or-nothing chování stačí jeden neplatný handle (například povinný scope nebo scope bez read varianty) a nesníží se žádný.
- Aktuálně udělené scopes lze ověřit přes `currentAppInstallation`, aby kód nespoléhal na předpoklady o stavu instalace.
- Mutace vyžaduje verzi API `2027-01`, případně unstable, takže na starších verzích zatím nebude k dispozici.
- Odlišovat použití: `appDowngradeAccessScopes` pro zachování čtení, `appRevokeAccessScopes` pro úplné odebrání přístupu.

**Pro PM / PO:** Jde o příležitost zlepšit bezpečnostní profil aplikací bez dopadu na merchanty, protože nedochází k žádné nové žádosti o souhlas ani k přeinstalaci. Užší oprávnění se dobře komunikují v security dotaznících a při auditech a posilují důvěru merchantů. Doporučení je zařadit snižování oprávnění jako volitelnou položku do roadmapy u aplikací, kde write přístup slouží jen k jednorázovým operacím. Nejde o časově kritickou změnu.

## Použití v Integrátoru

Přímý dopad je nízký a závisí na tom, zda naše aplikace používají Shopify-managed installation a optional write scopes. Pokud ano, jde o snadný způsob, jak po dokončení jednorázového zápisu (počáteční nastavení, migrace) omezit oprávnění na čtení.
