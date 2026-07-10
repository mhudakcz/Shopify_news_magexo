---
date: 2026-07-02
title: "useBuyerJourneyIntercept API v checkout UI extensions deprecated (2026-07)"
title_en: "Deprecating the useBuyerJourneyIntercept API on checkout UI extensions"
slug: usebuyerjourneyintercept-deprecated
zdroj: https://shopify.dev/changelog/deprecating-the-usebuyerjourneyintercept-api-on-checkout-ui-extensions
shrnuto_dne: 2026-07-10
kategorie: [deprecation, breaking-change]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některý klient používá checkout UI extension s blokující validací přes useBuyerJourneyIntercept, bude nutné ji přepsat na cart/checkout validation Function; naše integrace samotné tento hook nenasazuje."
dotcene_klienty: []
souvisejici: [shopify-scripts-deprecated-june-2026, cart-checkout-validation-billing-po, prerequisites-product-discount-functions]
tldr: "Shopify ruší hook useBuyerJourneyIntercept a capability block_progress v checkout UI extensions; validační logiku je nutné přesunout do server-side Shopify Functions."
tagy: [checkout, ui-extension, deprecation, functions, action-required, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    useBuyerJourneyIntercept byl Preact hook dostupný v checkout UI extensions, který aplikacím umožňoval zachytit průchod zákazníka checkoutem a podmíněně jej zablokovat (capability block_progress) — typicky kvůli vlastní validaci košíku, kontrole podmínek nebo odmítnutí slevového kódu. Extension běžela na klientovi (v prohlížeči zákazníka) a rozhodnutí o blokaci se dělalo v rámci checkout UI vrstvy.

    Shopify dlouhodobě přesouvá byznys logiku z klientských UI extensions na server, protože klientský přístup nefunguje konzistentně napříč všemi checkout povrchy — express peněženkami (Shop Pay, Apple Pay), zrychleným checkoutem ani agentic checkoutem, kde žádné UI extension vrstvy neběží. Server-side Shopify Functions (cart and checkout validation Function) naopak aplikují stejnou logiku vždy, bez ohledu na to, jakým kanálem zákazník nakupuje. Souběžně byla i discount Function API rozšířena o možnost odmítnout slevový kód s vlastní chybovou zprávou, což pokrývá druhý běžný use case bloku useBuyerJourneyIntercept.

    Prakticky to znamená, že existující extensions s useBuyerJourneyIntercept a block_progress zatím zůstávají funkční na svých současných API verzích, ale Shopify je označil jako deprecated s výhledem na budoucí odstranění. Aplikace, které tuto validaci používají — typicky custom compliance pravidla, omezení nákupu podle atributů košíku nebo vlastní odmítání slevových kódů — by měly logiku přepsat do cart/checkout validation Function (pro blokující validaci) nebo do discount Function (pro odmítání slevových kódů), a to ještě před oznámeným sunset datem.
  zdroje:
    - title: "Shopify: Deprecating the useBuyerJourneyIntercept API on checkout UI extensions"
      url: "https://shopify.dev/changelog/deprecating-the-usebuyerjourneyintercept-api-on-checkout-ui-extensions"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify ruší podporu pro `useBuyerJourneyIntercept` hook a jemu odpovídající capability `block_progress` v konfiguraci `shopify.extension.toml` u checkout UI extensions. Tento hook se dosud používal k tomu, aby aplikace mohly během průchodu checkoutem podmíněně zablokovat pokračování zákazníka — například kvůli vlastnímu ověření obsahu košíku nebo odmítnutí neplatného slevového kódu.

Náhradou jsou dvě serverové Shopify Functions:

- **Cart and checkout validation Function** — pro blokující validaci obchodních pravidel, která se aplikuje konzistentně na všech checkout povrchech, včetně express peněženek a agentic checkoutu.
- **Discount Function API** — nově podporuje odmítnutí slevového kódu s vlastní chybovou zprávou, takže pokrývá druhý typický use case dosavadního `useBuyerJourneyIntercept`.

Stávající extensions s tímto hookem zůstávají zatím funkční na svých současných API verzích, ale je nutné počítat s tím, že podpora bude v budoucnu odstraněna.

## Časová osa

- **2026-07-01** — účinnost oznámení, API verze 2026-07
- **2026-07-02** — publikace changelog položky
- Sunset datum pro definitivní odstranění nebylo v changelogu upřesněno; doporučená akce je migrace při nejbližší příležitosti

## Dopad pro nás

**Pro vývojáře:** Pokud některá naše checkout UI extension (nebo extension klienta, kterou spravujeme) používá `useBuyerJourneyIntercept` s `block_progress` k blokování checkoutu, je třeba logiku přepsat do server-side Function ještě před vynuceným odstíněním. Blokující validaci (např. omezení podle obsahu košíku, compliance pravidla) patří do cart/checkout validation Function; odmítání slevových kódů patří do discount Function. Je vhodné provést audit existujících extensions napříč klientskými shopy a ověřit, zda se tento hook někde používá.

**Pro PM / PO:** Jde o technickou deprecation bez přímého dopadu na zákazníky e-shopu — pokud se ale migrace neprovede včas, hrozí, že po budoucím odstranění hooku přestane fungovat blokující validace v checkoutu (např. vynucení podmínek nákupu). Doporučujeme zařadit kontrolu affected extensions do backlogu jako preventivní úkol, ne jako urgentní zásah.

## Použití v Integrátoru

Naše integrace tento hook aktivně nenasazuje. Relevantní je pouze u klientů, kteří mají vlastní checkout UI extension s blokující logikou — u nich doporučíme včasnou migraci na Shopify Functions.
