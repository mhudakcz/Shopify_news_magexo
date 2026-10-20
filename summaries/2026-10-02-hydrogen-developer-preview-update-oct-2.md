---
date: 2026-10-02
title: "Hydrogen developer preview update — 2. 10. 2026"
title_en: "Hydrogen developer preview update: October 2, 2026"
slug: hydrogen-developer-preview-update-oct-2
zdroj: https://shopify.dev/changelog/posts/hydrogen-developer-preview-update-october-2-2026
shrnuto_dne: 2026-10-20
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-02
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Update se týká jen headless storefrontů postavených na Hydrogen preview; přechod na API 2026-10, Customer Accounts v šabloně a consent-aware analytika mohou být relevantní pro budoucí headless projekty, ne pro backendové synchronizace."
dotcene_klienty: []
souvisejici: [hydrogen-dev-preview-update-sep-2, release-notes-2026-10, customer-address-apis-countrycode]
tldr: "Hydrogen developer preview z 2. října přechází na Storefront a Customer Account API 2026-10, přidává Customer Accounts (přihlášení a historii objednávek) do React Router šablony a analytické destinace čekají na souhlas zákazníka; zároveň odstraňuje několik starých API, takže existující preview projekty vyžadují úpravy."
tagy: [hydrogen, developer-preview, storefront-api, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro headless storefronty. Od Editions Spring '26 existuje jako framework-agnostic developer preview, tedy sada commerce primitives (Storefront API, cart, checkout, analytika) v čistém JavaScriptu, kterou lze zapojit do libovolného server-rendered JS stacku. Předchozí updaty preview kanálu přidaly caching, Customer Account API a WebMCP nástroje (8. 7.), Vue bindings a GraphQL TypeScript tooling (30. 7.), cart attributes a lokální HTTPS (18. 8.) i variant links s cart refresh (2. 9.).

    Update z 2. října 2026 je větší než předchozí drobné inkrementy. Preview se posouvá na verzi 2026-10 Storefront API a Customer Account API (dosud 2026-04) a zahrnuje tak změny z vydání 2026-07 i 2026-10. React Router šablona dostává funkční Customer Accounts: ikona účtu vede na stránku /account, kde se zákazník může přihlásit, odhlásit a zobrazit objednávky. Analytické destinace se nově registrují přes `analytics.addDestination()` a události vydávají až po udělení souhlasu zákazníka, včetně událostí, které nastaly dřív, než byla destinace zaregistrována.

    Shopify u změny uvádí Action required: No, ale release notes obsahují odstranění API, která mohou rozbít existující preview projekty (`analytics.subscribe()`, `analytics.destroy()`, samostatné cart komponenty, typ `EventPayloads`). Preview nemá garantovanou stabilitu API a GA release se v tomto updatu neoznamuje. Detailní seznam změn je v release notes, krok-za-krokem migrační návod není součástí.
  zdroje:
    - title: "Shopify: Hydrogen developer preview update: October 2, 2026"
      url: "https://shopify.dev/changelog/posts/hydrogen-developer-preview-update-october-2-2026"
    - title: "Hydrogen developer preview release notes — October 2, 2026"
      url: "https://hydrogen.shopify.dev/update/developer-preview-release-notes-october-2-2026"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify vydal 2. října 2026 další update framework-agnostic Hydrogen developer preview. Changelog zdůrazňuje tři změny:

- **API verze 2026-10** — Hydrogen nově používá verzi 2026-10 Storefront API i Customer Account API (předtím 2026-04).
- **Customer Accounts v React Router šabloně** — nové projekty obsahují přihlášení a historii objednávek. Při lokálním HTTPS se Customer Account URL registrují automaticky.
- **Consent-aware analytické destinace** — každá destinace čeká na souhlas zákazníka a po jeho udělení dostane i události, které nastaly před její registrací, takže se během rozhodování zákazníka neztratí žádná data.

Release notes přidávají další podrobnosti:

- **Customer Accounts v šabloně** — ikona účtu otevírá `/account` (přihlášení, odhlášení, objednávky). Vyžaduje reálný obchod, `SHOP_ID`, `PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID`, `SESSION_SECRET` a HTTPS; lokálně slouží příkaz `dev:https`.
- **Automatická registrace URL** — `localHttps()` při startu dev serveru zaregistruje callback, JavaScript origin a logout URL přes Shopify CLI (vyžaduje `@shopify/cli-hydrogen` 13.0.4 nebo novější). Pokud registrace selže, hodnoty se vypíšou pro ruční zadání.
- **Buy permalinks** — `handleShopifyRoutes` nově kromě `/cart/{items}` přeposílá do obchodu i UCP permalinky `/buy/{items}`.
- **Tracking values** — `getTrackingValues()` vrací `uniqueToken` a `visitToken` zákazníka (prázdné řetězce, pokud tracking není povolen); předává se i jako druhý argument callbacku `subscribe`.
- **`hydrogen setup` v prázdné složce** — umí vytvořit React Router šablonu, nebo nainstalovat jen AI coding skills.
- **Změny API 2026-10** — adresní mutace zákazníka používají `countryCode` místo `territoryCode`, `Order.shippingTitle` je odstraněno (použít `Order.shippingLine.title`), odstraněny jsou `Customer.lastIncompleteCheckout` a typy Checkout, `Cart.discountAllocations` a `CartDiscountAllocation.discountApplication` jsou deprecated ve prospěch `Cart.discountApplications`, `CartDeliveryGroup.discountAllocations` a `CartDiscountAllocation.sourceDiscountApplication`, `ShopPayPaymentRequestSession.paymentRequest` je deprecated a může být null. Příkaz `hydrogen gql check --fail-on-warn` může nově selhat kvůli nově deprecated polím.
- **Analytika a consent** — `analytics.subscribe()` a `analytics.destroy()` jsou odstraněny, používá se `analytics.addDestination()` s názvem. Každou destinaci je potřeba registrovat jen jednou (ne v komponentě, která se opakovaně připojuje a odpojuje), jinak vznikají duplicitní události. Pro vlastní consent banner (`consent: {mode: "custom-banner"}` na `ShopifyScripts`) je nutná asynchronní funkce `setup()`, která synchronizuje volbu z consent provideru do `window.Shopify.customerPrivacy`; analytické události na ni čekají.
- **Cookies** — každá odpověď se `Set-Cookie` dostane `Cache-Control: private, no-store` a přepíše vaše vlastní cache hlavičky. `ShopifyScripts` už nenastavuje legacy cookies `_shopify_y` a `_shopify_s` (existující vyprší při dalším consent requestu, který Hydrogen proxyuje) a hlavička `Sec-GPC` se přeposílá Shopify.
- **Odstraněné exporty** — samostatné `CartProvider`, `useCart`, `useCartActions` a `useCartForm` z `@shopify/hydrogen/react` (nahrazují je verze z `createCartComponents<typeof cartHandlers>()`; `useCartActions()` nadále nabízí `refresh()`), typ `EventPayloads` (nahrazen `PayloadFor<"product_viewed">` nebo `AnalyticsEventMap[AnalyticsEventName]`) a pole `locations`, `path` a `extensions` na `StorefrontApiError`, která se nikdy nevyplňovala.
- **Opravy** — přesměrování při loginu a logoutu (`return_to`, `redirect`) zůstávají na vaší doméně, JSONP požadavky se odmítají dřív než dorazí ke Shopify, `formatMoney().amount` zachovává minus u záporných hodnot, deduplikace cart analytiky funguje i bez vlastního `CartFragment`, predictive search respektuje nastavený limit, product form zůstává napojený na cart v React StrictMode a `@shopify/hydrogen/ts-plugin` se načítá v editorech (GraphQL hover docs a doplňování v `gql()`). Šablony React Router a Next.js fungují s mock.shop bez tokenu. V React Router šabloně navíc funguje ikona košíku a řazení kolekcí bez JavaScriptu a obsah (název obchodu, logo, platební ikony, hero, novinky) se čte z obchodu.

## Časová osa

- **Spring 2026 (Editions)** — spuštěn framework-agnostic Hydrogen developer preview
- **2026-07-08** — caching, WebMCP tools, Customer Account API, typed routes
- **2026-07-30** — Vue bindings, GraphQL TypeScript tooling, analytika přes ShopifyScripts
- **2026-08-18** — cart attributes, cart-session attribution, lokální HTTPS
- **2026-09-02** — variant links, cart refresh, automatické lokální HTTPS certifikáty
- **2026-10-01** — Storefront API a Customer Account API verze 2026-10 jsou stabilní
- **2026-10-02** — tento update: přechod na 2026-10, Customer Accounts v šabloně, consent-aware analytika
- **2026-10-09** — datum, které changelog uvádí v metadatech jako effective; Shopify označuje akci jako nevyžadovanou
- **GA release** — v tomto updatu neoznámen

## Dopad pro nás

**Pro vývojáře:** Pro nové preview projekty jde hlavně o pohodlnější start, protože šablona má hotové přihlášení a historii objednávek a lokální HTTPS pro Customer Account se registruje samo. Pro existující preview projekty je update nutné číst jako breaking: odstraněné `analytics.subscribe()` a `analytics.destroy()`, samostatné cart exporty a typ `EventPayloads` vyžadují úpravy kódu a přechod na 2026-10 znamená přejmenování `territoryCode` na `countryCode`, náhradu `Order.shippingTitle` a revizi práce se slevami v cartu. Pozor také na cache: odpovědi se `Set-Cookie` mají nově `no-store` a přepíší vlastní cache hlavičky. Pokud kód nebo reporting spoléhá na cookies `_shopify_y` a `_shopify_s`, je potřeba přejít na `getTrackingValues()`. Shopify neposkytuje migrační návod, rozdíl lze zjistit přes `git diff e58f34891..5fa006e3b`.

**Pro PM / PO:** Update je podstatnější než předchozí drobné inkrementy: preview se zarovnává s aktuální verzí API a získává použitelné zákaznické účty a analytiku respektující souhlas, což jsou body, na které se u headless storefrontů v EU často narazí. Zároveň se potvrzuje, že preview nemá garantovanou stabilitu rozhraní, takže existující prototypy je potřeba počítat s dalším vývojářským časem na migraci. Pro produkční nasazení stále doporučujeme sledovat oznámení GA jako reálný milník; preview je vhodné pro prototypy a ověření proveditelnosti.

## Použití v Integrátoru

Přímo se nás netýká, jde o frontendový storefront framework, ne o synchronizační vrstvu. Relevantní by bylo jen tehdy, pokud bychom v nějakém projektu stavěli headless storefront na Hydrogen preview a řešili Customer Accounts nebo consent-aware analytiku.
