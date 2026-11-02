---
date: 2026-10-28
title: "Shop SDK lead capture — Rich Authorization Requests (OAuth 2.0 fine-grained consent)"
title_en: "Shop SDK lead capture now supports Rich Authorization Requests"
slug: shop-sdk-lead-capture-rich-authorization
zdroj: https://shopify.dev/changelog/posts/shop-sdk-lead-capture-now-supports-rich-authorization-requests
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nemáme ověřeno, že by některý z našich obchodů používal Shop SDK lead capture. Pokud ano, jde o nepovinné rozšíření bez nutnosti zásahu, ale čtení získaných dat vyžaduje serverovou část a client secret."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-shop", "sign-in-shop-lead-forms"]
tldr: "Shop SDK lead capture umí přes nový atribut authorizationDetails (Rich Authorization Requests) vyžádat konkrétní údaje o shopperovi, tedy jméno, příjmení, telefon a datum narození, a shopper je před souhlasem doplní. Je to nepovinné, stávající integrace fungují beze změny."
tagy: [shop-sdk, oauth, rar, lead-capture, consent, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shop SDK lead capture je způsob, jak do formuláře na sběr kontaktů přidat přihlášení přes Shop účet. Aplikace tak může získat identitu shoppera bez ručního vyplňování. Dosud se rozsah sdílených údajů řídil pevnými scopes `shop_app:user:profile` a `shop_app:user:phone`. Ty vrátí jméno a telefon, které už má shopper ve Shop profilu uložené, ale chybějící hodnoty se u shoppera nedoptávají.

    Nově lead capture přijímá atribut `authorizationDetails` založený na Rich Authorization Requests (RAR). RAR je rozšíření OAuth 2.0, které místo obecného scope posílá strukturovaný popis toho, co aplikace chce (obecně je standardizované v RFC 9396, samotný post toto číslo neuvádí). V Shopify má každá položka pole `type` a seznam `datatypes`, kde každý datový typ má `name` a příznak `required`. Žádat lze o jméno, příjmení, telefon a datum narození, a to i o údaje, které shopper ve Shop profilu zatím nemá. Před udělením souhlasu je shopper vyzván k doplnění chybějících polí. Povinná musí vyplnit, nepovinná může přeskočit. Formát je opt-in a stávající integrace zůstávají beze změny. Žádaná data se nevrací přímo v události v prohlížeči. Do `onComplete` přijde jen `shopConsentToken`, který server vymění přes mutaci `fetchTokensForUser` v Shop Partners API.

    Změna vyšla 28. 10. 2026, tedy ve stejný den jako Editions Fall 26. Téma Shop v Editions tuto položku neuvádí, ale tematicky navazuje na položku o slevových kódech získaných přes lead capture formuláře a na dřívější rozšíření Sign in with Shop na další formuláře. To je naše propojení, zdroj samotný na Editions neodkazuje. Pro vývojáře aplikací s lead capture jde o přesnější a explicitnější způsob sběru osobních údajů. Zda to pomáhá s požadavky GDPR, post neřeší a je to věc posouzení na straně merchanta, my to tady netvrdíme.
  zdroje:
    - title: "Shopify: Shop SDK lead capture now supports Rich Authorization Requests"
      url: "https://shopify.dev/changelog/posts/shop-sdk-lead-capture-now-supports-rich-authorization-requests"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shop SDK: lead capture guide"
      url: "https://shopify.dev/docs/api/shop/guides/use-cases/lead-capture"
    - title: "Shop SDK: Get Shop user information"
      url: "https://shopify.dev/docs/api/shop/guides/use-cases/user-information"
    - title: "Editions Fall '26: Shop app — destinace shop.com, universal checkout a sync brandu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-shop/"
    - title: "Sign in with Shop nově funguje na více lead capture forms"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/sign-in-shop-lead-forms/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-5-5
---

## Co se mění

Shop SDK lead capture nově přijímá atribut `authorizationDetails`. Je to serializované JSON pole, kde každá položka obsahuje:

- `type` (v příkladu ze zdroje `urn:shopify:shop_app:data-sharing:v1`),
- `datatypes`, tedy seznam požadovaných údajů, kde každý má `name` a příznak `required`.

Takto lze vyžádat **jméno, příjmení, telefonní číslo a datum narození**, včetně údajů, které shopper ve Shop profilu zatím uložené nemá. Dosavadní scopes `shop_app:user:profile` a `shop_app:user:phone` vracejí jen už existující jména a telefony a chybějící hodnoty nedoplňují.

Jak to funguje pro shoppera:

- Před autorizací je shopper vyzván k doplnění požadovaných polí, která ještě nesdílel.
- **Povinná** pole musí vyplnit, **nepovinná** může přeskočit.
- Pokud chceš kromě toho získat identifikátor uživatele a e-mail, nastav `attributes.scope` na `'shop_app:oauth'`. E-mail tedy není součástí `authorizationDetails`, ale řeší se scopem.

Jak to funguje pro vývojáře:

1. Při vytváření instance lead capture předej serializované pole jako `attributes.authorizationDetails`.
2. V `onComplete` pošli `shopConsentToken` na svůj server, pokud existuje. Událost sama žádaná data neobsahuje.
3. Na serveru token vyměň mutací `fetchTokensForUser` v Shop Partners API a autorizovaná pole načti z odpovědi nebo ze Shop Users API. Pole, která shopper neposkytl nebo nemají hodnotu, přicházejí jako `null`. Čtení vyžaduje client secret a důvěryhodný server.

Chování, které je potřeba ošetřit:

- Pokud shopper autorizaci **odmítne**, `onComplete` nemá `shopConsentToken`, a to ani když se přihlásil. Je to očekávaný výsledek, ne chyba.
- Autorizované telefonní číslo může **přepsat jiné telefonní číslo** na zákaznickém záznamu obchodu. Už existující jména se nepřepisují.
- Pokud `onComplete` obsahuje `customerUpdateErrors`, aktualizace zákaznického záznamu v obchodě selhala.
- Poškozený JSON v `authorizationDetails` vrátí v `onError` chybu `invalid_authorization_details`.

Změna je **nepovinná**. Zdroj označuje Action required jako No a stávající integrace fungují beze změny.

## Časová osa

- **2026-10-22** — vytvoření záznamu v changelogu (podle metadat zdroje)
- **2026-10-26** — účinnost změny (podle metadat zdroje, 12:00 ET)
- **2026-10-28** — zveřejnění changelog příspěvku, tedy ve stejný den jako Editions Fall 26
- **2026-10-29** — poslední aktualizace příspěvku
- **Termín migrace:** žádný, jde o opt-in funkci. Zdroj neuvádí žádnou verzi API ani datum, ke kterému by se něco rušilo.

## Dopad pro nás

**Pro vývojáře:** Pokud někde používáme nebo budeme nasazovat Shop SDK lead capture, nový atribut umožňuje sbírat jméno, příjmení, telefon a datum narození přímo v jednom kroku s přihlášením, bez dalšího formuláře. Cena za to je serverová část: výměna consent tokenu přes `fetchTokensForUser`, uložený client secret a ošetření `null` hodnot. Před nasazením je potřeba otestovat čtyři scénáře: dokončená autorizace, přeskočené nepovinné pole, odmítnutá autorizace a nevalidní JSON v `authorizationDetails`. Zvláštní pozornost zaslouží přepis telefonního čísla na zákaznickém záznamu, protože může změnit data, na která se napojují další systémy (newsletter, CRM, ERP).

**Pro PM / PO:** Funkce nic nenutí měnit a nemá deadline, takže jde o příležitost, ne o povinnost. Dává smysl zvážit ji u obchodů, kde formuláře na sběr kontaktů už fungují a kde je kvalita údajů (telefon, datum narození) pro marketing nebo personalizaci důležitá. Při žádosti o datum narození a telefon je dobré dopředu rozhodnout, která pole jsou skutečně povinná. Čím víc povinných polí, tím vyšší riziko, že shopper formulář opustí. Právní stránku sběru osobních údajů (účel, souhlas, GDPR) zdroj neřeší a je potřeba ji posoudit zvlášť s merchantem.

## Použití v Integrátoru

Zatím nemáme potvrzeno, že by Shop SDK lead capture byl součástí integrací, které spravujeme. Jde o frontendovou a aplikační vrstvu přihlášení přes Shop, nikoli o synchronizaci dat. Pokud ho některý obchod používá, stojí za to ověřit, zda přepis telefonního čísla na zákaznickém záznamu nekoliduje s jeho synchronizací do navazujících systémů.
