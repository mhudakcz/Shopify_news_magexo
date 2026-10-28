---
date: 2026-10-28
title: "Editions Fall '26: Developer — Polaris 2.0, konec script tagů, expirující tokeny a Hydrogen jako reference pro headless"
slug: editions-fall-2026-developer
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [editions-theme]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Developer téma sdružuje změny, které se mohou dotknout apps a extensions, které stavíme nebo udržujeme: Polaris 2.0 pro embedded App Home UI, konec script tagů (1. 3. 2027), povinné expirující offline tokeny (leden 2027) a novinky v Admin API a Functions. Je potřeba ověřit, zda někde používáme ScriptTag API nebo dlouhodobé offline tokeny."
dotcene_klienty: []
souvisejici: ["editions-fall-2026"]
editions_release: fall-2026
tldr: "Developer téma Fall '26 (přes 50 položek) je nejhustší část Editions: Polaris 2.0 je stable se semantic versioningem na CDN, Hydrogen 2026-10 je GA a spolu s Vercel Shop a novou architekturou témat se stává referenční cestou pro headless, AI Toolkit a agentní CLI mění způsob vývoje apps, agenti dostávají Shop MCP, WebMCP a UCP, a bezpečnost je hlavní osa: script tagy skončí 1. 3. 2027 a expirující offline tokeny je nutné zavést před lednem 2027."
tagy: [editions, developer, "fall-2026", polaris, hydrogen, ai-toolkit, security, script-tags, expiring-tokens, agentic-commerce, mcp, ucp, dev-dashboard, app-pricing, pos-extensions]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Editions Fall '26 s mottem Exponential vyšlo 28. října 2026 a Developer je v něm tematicky nejširší část. Položky jsou na zdrojové stránce rozdělené do pěti bloků: agentic experiences (Catalog API, Shop MCP, WebMCP, UCP), platform primitives (Polaris, POS, Admin API, Functions, sign-in), tooling (Dev Dashboard, CLI, App Pricing, výdělky partnerů), secure ecosystem (security check, script tagy, tokeny) a storefronts (Hydrogen, nová architektura témat, Vercel Shop, mock.shop). Tento článek je přehled celého tématu, ne náhrada samostatných článků, které jednotlivé položky popisují podrobně.

    Téma navazuje na Developer část Editions Spring '26 z 17. června 2026. Tehdy Shopify oznámil AI Toolkit, přepis Hydrogenu jako framework-agnostic knihovny v developer preview, migraci Polaris pro checkout extensions s termínem 1. října 2026 a bezpečnější práci s tokeny. Fall '26 tyto linie dotahuje: Hydrogen je od 14. října 2026 v GA, Polaris Web Components 2.0 jsou od 22. října stable a Next Generation Events jsou od API verze 2026-10 GA pro 18 topics. Přibývá také nová vrstva pro agenty jako nakupující, tedy jedno MCP pro shopping a checkout, WebMCP nástroje a rozšíření UCP.

    Důležité je, že téma nemá jen novinky, ale i termíny. Mutace scriptTagCreate a scriptTagUpdate vracejí chyby od 1. října 2026 a script tagy přestanou běžet 1. března 2027. Expirující offline tokeny musí podle Editions public apps zavést před lednem 2027, jinak hrozí, že aplikace nezůstane listovaná. Pro apps v programu Built for Shopify platí podle dříve publikovaného přehledu termín migrace na Polaris 2.0 do 1. května 2027. Velká část položek už má v archivu samostatný článek z uplynulých týdnů, protože Shopify je zveřejňoval postupně v dev changelogu ještě před Editions.
  zdroje:
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Polaris 2.0 stable — nový design system Shopify Admin"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-2-0-stable/"
    - title: "Archiv: Hydrogen 2026-10 GA — framework-agnostic JavaScript library"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/hydrogen-2026-10-ga-framework-agnostic/"
    - title: "Archiv: Online Store Script Tags deprecated — konec 1. 3. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/online-store-script-tags-deprecated-2027/"
    - title: "Archiv: Expirující offline tokens povinné pro všechny public apps od 1. 1. 2027"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/"
    - title: "Archiv: Shopify AI Toolkit — security check"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-ai-toolkit-security-check/"
    - title: "Archiv: Editions Spring '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-developer/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem tahle Edition téma je

Developer téma Fall '26 je nejhustší část celých Editions: přes 50 položek napříč agentními protokoly, platformními primitivy, nástroji pro vývojáře, bezpečností a storefronty. Společný jmenovatel je, že Shopify dnes staví platformu pro dva nové typy uživatelů najednou. Prvním jsou **AI agenti jako vývojáři**: Shopify CLI je optimalizované pro neinteraktivní vstup a výstup, agenti umí vytvářet a mazat development stores, Hydrogen přichází s 20 skills pro coding agenty, nová architektura témat obsahuje Markdown soubory určené agentům a bezpečnostní kontrolu aplikace spustí jeden prompt. Druhým jsou **AI agenti jako nakupující**: jedno MCP přidá do libovolného agenta shopping a Shop Pay checkout, WebMCP nástroje zpřístupní celou cestu zákazníka od hledání po checkout a Catalog API dostává filtry, informace o slevách, personalizaci a beta hledání i mimo Shopify.

Druhá linka je **zpřísňování ekosystému**. Script tagy se ruší (od 1. října 2026 nejdou vytvářet, od 1. března 2027 přestanou běžet), expirující offline tokeny jsou před lednem 2027 podmínkou pro to, aby public app zůstala listovaná, a přibývají IP allowlisting, unikátní názvy aplikací, validace recenzí a firemní údaje partnera u žádostí o přístup. Zároveň Shopify dává vývojářům stabilnější základ: Polaris 2.0 je stable a CDN drží semantic versioning, takže si vývojář sám volí, kdy přejde na další verzi. Hydrogen je GA jako framework-agnostic knihovna, spolu s Vercel Shop a novou architekturou témat se stává referenční cestou pro headless Shopify. Oproti Spring '26, kde šlo hlavně o preview, jsou dnes mnohé klíčové položky stable nebo GA.

## Top 3 highlights v tomto tématu

- **Bezpečnostní migrace: konec script tagů a expirující offline tokeny** — dva termíny, které jako jediné z tohoto tématu nejsou dobrovolné. *Script tagy:* Editions uvádí, že apps už script tagy nemohou vytvářet ani upravovat a musí přejít na theme app extensions nebo web pixels. Podle archivu mutace `scriptTagCreate` a `scriptTagUpdate` vracejí chyby od 1. 10. 2026 a existující script tagy přestanou fungovat 1. 3. 2027. Náhrada závisí na účelu: analytika a tracking patří do Web Pixels API (bez akce merchanta), UI a funkční prvky do Theme App Extensions, které merchant musí aktivovat v theme editoru. *Tokeny:* public apps musí přejít na expirující offline access tokeny před lednem 2027, jinak hrozí, že nezůstanou listované; přístupové tokeny lze podle Editions získat i přímo přes client credentials. Archiv uvádí termín 1. 1. 2027 a OAuth refresh flow. Jako pomocník slouží nový security check (`shopify app security check`), který lokálně projde kód, konfiguraci extensions a závislosti a ke každému nálezu vrátí soubor, řádek, závažnost a návrh opravy; Shopify doporučuje pouštět ho před odesláním do review a při každém release. **Pro vývojáře** to znamená audit ScriptTag API a offline tokenů ještě teď. **Pro merchanty a PM** to znamená, že starší tracking apps a widgety injektované script tagy po 1. 3. 2027 přestanou fungovat a že app bez migrace tokenů může z App Store zmizet. [→ script tagy](/Shopify_news_magexo/zmena/online-store-script-tags-deprecated-2027/) · [→ expirující tokeny](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/) · [→ security check](/Shopify_news_magexo/zmena/shopify-ai-toolkit-security-check/) · [→ osm kroků pro vývojáře](/Shopify_news_magexo/zmena/securing-your-app-together-shopify/)

- **Polaris 2.0 stable + semantic versioning na CDN** — Polaris Web Components 2.0 jsou od 22. 10. 2026 stable a Editions k nim přidává 14 nových component APIs (typografie, čísla a progress, empty-state komponenty) a verzování na CDN, takže si vývojář sám vybírá, kdy upgradovat. Přechod není automatický: `polaris.js` a `polaris-1.js` dál servírují Polaris 1.1 a na 2.0 se přechází změnou script tagu na `polaris-2.js`; pro zafixování verze slouží `polaris-2.0.js`. U React Router šablony je nutné shodně nastavit `polarisUrl` v `AppProvider` i v `shopifyApp` a doinstalovat `@shopify/polaris-types@^2.0.0`. Podle archivu je jediný známý tvrdý termín 1. 5. 2027 pro apps v programu Built for Shopify. **Pro vývojáře** je to signál naplánovat migraci embedded App Home UI s ověřením na stagingu (zejména vlastní CSS a komponenty Table, Section, Page, Select, Modal, TextField). **Pro PM** je to položka do roadmapy před květnem 2027, ne akutní požár. Nezaměňovat s dřívějším termínem 1. 10. 2026 ze Spring '26, který se týkal checkout a customer account UI extensions. [→ Polaris 2.0 stable](/Shopify_news_magexo/zmena/polaris-2-0-stable/) · [→ semantic versioning na CDN](/Shopify_news_magexo/zmena/polaris-cdn-semantic-versioning/) · [→ novinky v rc.1](/Shopify_news_magexo/zmena/polaris-2-0-0-rc-1-whats-new/)

- **Hydrogen jako reference pro headless: GA, Vercel Shop a nová architektura témat** — Hydrogen 2026-10 je od 14. 10. 2026 GA jako framework-agnostic JavaScript library s ready-to-deploy starters pro React Router a Next.js, 20 skills pro coding agenty, customer accounts, predictive search a deploy na Vercel jedním kliknutím. Vercel Shop je produkční Next.js šablona postavená na novém Hydrogen SDK, kterou spravuje Vercel. Vedle toho Editions ukazuje novou architekturu témat: stránky se skládají v Liquid z bloků, typovaných kontraktů a dílčích aktualizací, Markdown soubory vedou agenty, Tailwind styling je zabudovaný a nový způsob úprav online store se na této architektuře staví; v archivu je zatím jen developer preview tagů `{% block %}` a `{% partial %}`. **Pro vývojáře** mizí dilema Hydrogen versus vlastní Next.js storefront, protože Hydrogen může běžet jako commerce knihovna uvnitř Next.js. **Pro PM** to znamená produkční, oficiálně podporovanou variantu pro poptávky po vlastním front-endu, i když headless zůstává dražší na vývoj i údržbu než Liquid téma. Existující Hydrogen storefronty fungují dál bez akce. [→ Hydrogen 2026-10 GA](/Shopify_news_magexo/zmena/hydrogen-2026-10-ga-framework-agnostic/) · [→ Hydrogen na libovolném stacku (preview)](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/) · [→ deploy na Vercel](/Shopify_news_magexo/zmena/hydrogen-deploys-to-vercel/) · [→ Liquid block a partial tagy](/Shopify_news_magexo/zmena/liquid-block-partial-tags-preview/)

## Všechny položky (přes 50)

Položky jsou rozdělené na to, co je vidět přímo merchantům a jejich týmu, a na to, co řeší vývojáři. Stavové štítky (beta, early access, coming soon) přebíráme ze zdrojové stránky Editions; kde štítek chybí, je položka bez označení. Datum nebo stav, které zdrojová stránka neuvádí, doplňujeme jen tam, kde je v archivu samostatný článek.

### Pro merchanty a jejich týmy (12 položek)

- **Zobrazení slev v agentic search (Catalog API)** — nakupující v agentních prostředích uvidí, že je produkt zlevněný a o kolik. Viditelnost se podle archivu řídí přepínačem v nastavení catalog mappingu. [→ detail](/Shopify_news_magexo/zmena/compare-at-prices-shared-agentic-channels/)

- **Retail locations pro agenty (UCP)** — agent může ukázat fyzické prodejny značek na Shopify. V archivu jde o schopnosti `location.search` a `location.lookup` v UCP 2026-08-25; nejde o skladový stav, rezervaci ani pickup checkout. [→ detail](/Shopify_news_magexo/zmena/ucp-location-search-retail-stores/)

- **Daň z return shipping fees** — poštovné za vratky se počítá přes Shopify Tax a je vidět v adminu přes Return APIs. Podle archivu se u US objednávek daň počítá automaticky od 23. 10. 2026, takže je třeba zkontrolovat stávající ruční workaroundy. [→ detail](/Shopify_news_magexo/zmena/return-shipping-fee-tax-fields-admin-graphql/)

- **App events v analytics** — apps mohou posílat události, které se zobrazí vedle dat obchodu v analytice. Samostatný článek zatím nemáme.

- **Analytics annotations přes GraphQL Admin API** — apps zapisují anotace, které ukazují, co se změnilo a která app změnu provedla, takže se dá snáz vysvětlit zlom v grafech. Samostatný článek zatím nemáme.

- **Propojené metaobjects v analytics** — pole metaobjects se stávají dimenzemi v ShopifyQL vedle metafieldů kategorií. Podle archivu jde o capability `analyticsQueryable` v Admin API 2027-01. [→ detail](/Shopify_news_magexo/zmena/metaobject-analytics-queryable-admin-api/)

- **Rychleji se načítající stránky online store** — Shopify doručuje na každou stránku jen CSS, které skutečně používá. Samostatný článek zatím nemáme.

- **Firemní údaje partnera u žádostí o přístup** — partner si v Dev Dashboardu doplní údaje o organizaci a merchant je vidí u collaborator requests, což usnadňuje rozhodnutí o přístupu. [→ detail](/Shopify_news_magexo/zmena/partner-details-collaborator-requests/)

- **Validace recenzí v App Store** — recenze se kontrolují vůči důvěryhodnosti obchodu, identitě a aktivitě aplikace, aby hodnocení odráželo skutečné uživatele. [→ posílení důvěry v recenze](/Shopify_news_magexo/zmena/strengthening-trust-app-store-reviews/) · [→ požadavek 1.3](/Shopify_news_magexo/zmena/app-store-req-1-3-honest-review-practices/)

- **Unikátní názvy aplikací** — názvy musí být jedinečné a rozpoznatelné, aby merchanti aplikace nezaměňovali. Existující apps s duplicitním názvem mohou být vyzvány k přejmenování. [→ detail](/Shopify_news_magexo/zmena/app-store-req-4-1-2-unique-app-name/)

- **Lokalizované odhadované ceny aplikací** — ceny v App Store listingu, ve výběru plánu i při schvalování poplatků se zobrazují v lokální měně. Samostatný článek zatím nemáme.

- **Požadavky plánů na schopnosti obchodu (plan capability requirements)** — merchant si může předplatit jen plány, které v jeho obchodě skutečně fungují. Samostatný článek zatím nemáme.

### Pro vývojáře: agentic experiences (10 položek)

- **Jedno MCP pro shopping v každém agentovi nebo aplikaci** — nakupující se přihlásí přes Shop, hledá v Shopify Catalogu a platí přes Shop Pay. Archiv popisuje server `mcp.shop.com` s 17 nástroji a upozorňuje, že při spuštění nejsou k dispozici webhooky. [→ detail](/Shopify_news_magexo/zmena/shop-mcp-shopping-checkout-any-agent/)

- **WebMCP nástroje pro celou cestu zákazníka** — obchody registrují strukturované nástroje, přes které agent vyhledává, vytváří košík a dojde až k checkoutu. Podpora je ve všech Liquid storefrontech i v Hydrogenu a rozšířená o checkout. [→ Liquid a Hydrogen](/Shopify_news_magexo/zmena/webmcp-liquid-hydrogen-storefronts/) · [→ checkout](/Shopify_news_magexo/zmena/webmcp-checkout-support/)

- **Více filtrů a detailů v Catalog API** — filtr na produkty s 3D modelem nebo videem a u každého produktu prodejní ceny a bezpečnostní upozornění. [→ filtr podle media type](/Shopify_news_magexo/zmena/catalog-search-filter-by-media-type/) · [→ compare-at jako list_price](/Shopify_news_magexo/zmena/catalog-api-compare-at-prices-list-price/)

- **Catalog API hledá i produkty mimo Shopify (beta)** — nákupní zážitky z nabídky obchodů na Shopify i mimo něj. Samostatný článek zatím nemáme; základ popisuje [Catalog API pro AI agenty](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/).

- **Personalizované výsledky hledání** — výsledky pro nakupující přihlášené přes Shop. Samostatný článek zatím nemáme; příprava personalizace je zmíněná v [přehledu Catalog API](/Shopify_news_magexo/zmena/shopify-catalog-api-deep-dive/).

- **Provize z Catalog API (early access)** — vývojář vydělává provizi, kterou obchod nastaví v Shop Campaigns, plus 0,3 % od Shopify z každého prodeje, který přes Catalog API přivede. Souvisí se sponzorovanými placementy v preview. [→ sponsored products](/Shopify_news_magexo/zmena/sponsored-products-catalog-api/)

- **Shop Pay v libovolné aplikaci** — Shop Pay lze přidat do apps a nákupních zážitků. Základ je Shop Pay Wallet API pro značky mimo Shopify. [→ Shop Pay mimo Shopify](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)

- **Sjednocený checkout v aplikaci** — produkty ze Shopify Catalogu s checkoutem napříč značkami přes Shop Pay. Samostatný článek zatím nemáme.

- **Permalinky pro košík a checkout (UCP /buy)** — odkazy s produkty, údaji o zákazníkovi, slevami a atribucí. Samostatný článek zatím nemáme; základ protokolu je [Universal Commerce Protocol](/Shopify_news_magexo/zmena/universal-commerce-protocol-ucp/).

- **UCP /ask endpoint** — odpovídá na dotazy k obchodu podle faktů, které obchod zveřejnil. Samostatný článek zatím nemáme.

Související agentní změny z posledních týdnů: [Checkout MCP a Cart MCP s UCP buyer consent](/Shopify_news_magexo/zmena/checkout-cart-mcp-ucp-buyer-consent/), [storefronty podporují UCP 2026-08-25](/Shopify_news_magexo/zmena/storefronts-ucp-2026-08-25-support/), [stavba AI agentů nad Shopify katalogem](/Shopify_news_magexo/zmena/agentic-commerce-build-commerce-agents/). **Pozor na blízký termín:** starý Global Catalog REST API přestane 2. 11. 2026 odpovídat a je nutné přejít na Global Catalog MCP (UCP). [→ detail sunsetu](/Shopify_news_magexo/zmena/global-catalog-rest-api-sunset-2026-11-02/)

### Pro vývojáře: platform primitives (14 položek)

- **14 nových component APIs v Polarisu** — typografie, čísla a progress a empty-state komponenty. Podrobný výčet v archivu nemáme; změny v release candidate popisuje [rc.1 changelog](/Shopify_news_magexo/zmena/polaris-2-0-0-rc-1-whats-new/), stable verze [Polaris 2.0 stable](/Shopify_news_magexo/zmena/polaris-2-0-stable/).

- **Pinning verze Polarisu (semantic versioning na CDN)** — vývojář si vybere, kdy upgraduje, a verzi může připnout. [→ detail](/Shopify_news_magexo/zmena/polaris-cdn-semantic-versioning/)

- **Logování app events z UI extensions** — jeden řádek kódu zaloguje aktivitu v checkoutu a v customer accounts. Samostatný článek zatím nemáme.

- **POS Printing API** — tisk účtenek, štítků a dalšího obsahu z POS UI extensions přímo na hardwarovou tiskárnu přes `shopify.printing`. [→ detail](/Shopify_news_magexo/zmena/pos-ui-extensions-printing-api-hardware/)

- **POS background extensions** — trvale běžící extensions, které reagují na dokončení transakce nebo začátek a konec cash session. Samostatný článek zatím nemáme.

- **POS Storage API** — sdílené klíče úložiště s reaktivními daty napříč targety jedné extension (`shopify.storage.current`, API 2026-10). Ve stejné verzi vyšla i virtualizovaná komponenta `s-pos-list`. [→ storage](/Shopify_news_magexo/zmena/pos-ui-extensions-reactive-storage/) · [→ s-pos-list](/Shopify_news_magexo/zmena/pos-ui-s-pos-list-virtualized/)

- **Dotazy na purchase orders v Admin API** — přístup k purchase orders, řádkům a stavům pro ERP a skladové integrace. Samostatný článek zatím nemáme; souvisí [automatické transfery z purchase orders](/Shopify_news_magexo/zmena/purchase-orders-create-inventory-transfers/) a [nové reporty nad purchase orders](/Shopify_news_magexo/zmena/analytics-purchase-orders-reports/).

- **Rollout resources v Admin API** — dotazy na zdroje v aktivním rolloutu a webhooky o změnách; v archivu jde o API 2026-10 a scope `read_rollouts`. [→ detail](/Shopify_news_magexo/zmena/rollouts-queries-webhooks-admin-graphql/)

- **Checkout Kit v4** — vkládá Shopify checkout do webu, nativních mobilních aplikací i agentních zážitků. Samostatný článek zatím nemáme.

- **Metafields u delivery customizations** — Shopify Functions čtou metafields na doručovacích volbách. Samostatný článek zatím nemáme.

- **Detailní data ze Shop sign-in** — granulární consent scopes, kde uživatel řídí, co se sdílí. Samostatný článek zatím nemáme.

- **One-tap sign-in pro aplikace** — propojuje seznamy přání, oblíbené položky a recenze se Shop účty. Samostatný článek zatím nemáme.

- **Metaobjects ve Shopify Functions (coming soon)** — Functions načtou správné metaobjects pro každý checkout, například pro pravidla bundlů, doručení a způsobilosti; dokumentace míří na API 2027-01. Spring '26 už přinesl čtení app-owned metaobjects ve Functions, přesný rozsah nové verze je třeba ověřit v dokumentaci. [→ Spring '26 Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)

- **Oficiální balíčky pro Python a PHP** — nové SDK balíčky `shopify/shopify-app-php` a `shopifyapp` pro Python, dosud podporované jen komunitně. [→ detail](/Shopify_news_magexo/zmena/shopify-app-sdks-php-python/)

### Pro vývojáře: tooling a monetizace (12 položek)

- **Přepracovaný Dev Dashboard** — správa apps a stores, podle Editions včetně billingu a výplat na jednom místě. V archivu jde o přehled revenue, apps index, jednotný stores index a logy s 30denní retencí; billing a payouts byly v září teprve avizované. [→ nový Dev Dashboard](/Shopify_news_magexo/zmena/new-dev-dashboard-command-center/) · [→ logy a health metrics](/Shopify_news_magexo/zmena/dev-dashboard-filterable-logs-health-metrics/)

- **Listings, pricing a app ads v Dev Dashboardu (coming soon)** — odesílání listingů, nastavení cen a spouštění reklam na aplikace. Samostatný článek zatím nemáme.

- **Store index v Dev Dashboardu** — seznam všech typů obchodů a žádost o přístup přímo ze seznamu. [→ detail](/Shopify_news_magexo/zmena/new-dev-dashboard-command-center/)

- **Správa apps, témat a stores z agenta** — Shopify CLI je optimalizované pro neinteraktivní vstup a výstup, takže ho agent ovládá spolehlivěji. Samostatný článek zatím nemáme; související jsou [commerce skills pro AI agenty](/Shopify_news_magexo/zmena/shopify-ai-toolkit-commerce-skills/) a [konsolidace skills pod jediný skill shopify](/Shopify_news_magexo/zmena/ai-toolkit-skills-consolidated-shopify/).

- **Development stores z CLI** — agenti mohou stores vytvářet, vypisovat a mazat; archiv uvádí Shopify CLI 4.8 a limit 250 dev stores na organizaci. [→ detail](/Shopify_news_magexo/zmena/shopify-cli-create-delete-dev-stores/)

- **Stripe Projects CLI** — jeden příkaz vytvoří Shopify store, účet a předplatné. Samostatný článek zatím nemáme.

- **Events napříč 18 topics** — produkty, kolekce, zákazníci, společnosti, objednávky, fulfillment, sklad, obsah a vlastní data. V archivu jde o Next Generation Events GA od API 2026-10. [→ detail](/Shopify_news_magexo/zmena/next-gen-events-generally-available/) · [→ čtyři nové topics](/Shopify_news_magexo/zmena/events-four-additional-topics/)

- **Migrace na Shopify App Pricing** — vestavěný nástroj přesune předplatné z Billing API; merchanti podle archivu nemusí poplatky znovu schvalovat. [→ přesun stávajících subscriptions](/Shopify_news_magexo/zmena/app-pricing-move-existing-subscriptions/) · [→ migrační nástroj](/Shopify_news_magexo/zmena/app-pricing-migration-tool/)

- **Výdělky partnerů** — příjmy z předplatného a online GMV za čtyři roky, na všech plánech. Samostatný článek zatím nemáme.

- **Private plans** — neomezený počet privátních plánů, každý pro libovolný počet obchodů. [→ detail](/Shopify_news_magexo/zmena/app-pricing-unlimited-private-plans-target-stores/)

- **Add-ony u položek v Theme Store** — k listingu tématu lze přiřadit add-on. Samostatný článek zatím nemáme.

- **Roční plán s měsíčními poplatky za využití (coming soon)** — jedno předplatné bez vlastního billing kódu. Samostatný článek zatím nemáme.

### Pro vývojáře: bezpečnost (5 položek)

- **Security checks ve vývojovém workflow** — zranitelnosti najde jeden prompt, AI Toolkit je pomůže opravit a znovu zkontrolovat. [→ security check](/Shopify_news_magexo/zmena/shopify-ai-toolkit-security-check/) · [→ osm kroků pro vývojáře](/Shopify_news_magexo/zmena/securing-your-app-together-shopify/)

- **Konec script tagů** — apps už je nemohou vytvářet ani upravovat; migrace na theme app extensions nebo web pixels. Zdrojová stránka datum neuvádí, archiv ano: chyby od 1. 10. 2026, konec běhu 1. 3. 2027. [→ detail](/Shopify_news_magexo/zmena/online-store-script-tags-deprecated-2027/)

- **IP allowlisting** — omezení IP adres, ze kterých může aplikace volat API, což blokuje zneužití uniklého tokenu. Podle blogu o zabezpečení aplikací Shopify slíbil detaily a termíny sdílet předem. [→ souvislosti](/Shopify_news_magexo/zmena/securing-your-app-together-shopify/)

- **Expirující offline tokeny** — migrace před lednem 2027, aby app zůstala listovaná; přístupové tokeny lze získat přes client credentials. [→ detail](/Shopify_news_magexo/zmena/expiring-offline-tokens-all-public-apps-2027/)

- **Dotazy na produkční logy z CLI (coming soon)** — vyšetřování chyb bez opuštění editoru. Související je [filtrovatelný stream logů v Dev Dashboardu](/Shopify_news_magexo/zmena/dev-dashboard-filterable-logs-health-metrics/).

### Pro vývojáře: storefronty (4 položky)

- **Headless commerce primitiva připravená pro agenty (Hydrogen)** — produkční storefronty s customer accounts, predictive search, vestavěnými agent skills a deployem na Vercel jedním kliknutím. [→ Hydrogen 2026-10 GA](/Shopify_news_magexo/zmena/hydrogen-2026-10-ga-framework-agnostic/) · [→ preview](/Shopify_news_magexo/zmena/hydrogen-any-stack-preview/) · [→ Vercel](/Shopify_news_magexo/zmena/hydrogen-deploys-to-vercel/) · [→ update z 8. 10.](/Shopify_news_magexo/zmena/hydrogen-developer-preview-update-oct-8/) · [→ update z 2. 10.](/Shopify_news_magexo/zmena/hydrogen-developer-preview-update-oct-2/) · [→ update z 2. 9.](/Shopify_news_magexo/zmena/hydrogen-dev-preview-update-sep-2/)

- **Nová architektura témat** — stránky v Liquid z bloků, typovaných kontraktů a dílčích aktualizací, Markdown soubory pro agenty a zabudovaný Tailwind. V archivu zatím jen developer preview tagů `{% block %}` a `{% partial %}`. [→ detail](/Shopify_news_magexo/zmena/liquid-block-partial-tags-preview/)

- **Vercel Shop** — produkční Next.js šablona Vercelu postavená na novém Hydrogen SDK. Samostatný článek zatím nemáme; zmiňuje ho [Hydrogen 2026-10 GA](/Shopify_news_magexo/zmena/hydrogen-2026-10-ga-framework-agnostic/).

- **mock.shop jako agentic reference library** — zkopírováním promptu se postaví obchod a publikuje se do Shopify. Samostatný článek zatím nemáme.

### Související změny API mimo Editions

Do stejné vlny patří i dva záznamy z dev changelogu, které na stránce Editions nejsou, ale vývojáře Admin API se týkají:

- **Exkluzivní timestamp filtry** — od Admin GraphQL API 2026-10 filtr s operátorem `>` přeskočí celou sekundu, takže polling podle posledního viděného času může tiše vynechat záznamy; řešením je `>=` a deduplikace podle id. [→ detail](/Shopify_news_magexo/zmena/exclusive-timestamp-filters-admin-api/)

- **Odpojení identity provider subject zákazníka** — mutace `identityProviderSubjectDelete` v Admin GraphQL API 2027-01 odpojí zákazníka od subjectu v externím IdP bez smazání účtu. [→ detail](/Shopify_news_magexo/zmena/unlink-customer-identity-provider-subject-admin-api/)

## Co tu ještě nemáme

Následující položky nemají v archivu samostatný článek a budou zatím žít jen v tomto přehledu a na stránce Editions. Pořadí odpovídá tomu, kolik praktického dopadu čekáme:

- **Agentní primitiva UCP a Catalog API** — UCP /buy permalinky, UCP /ask endpoint, sjednocený checkout v aplikaci, Shop Pay v libovolné aplikaci, Catalog API pro produkty mimo Shopify (beta) a personalizované hledání přes Shop sign-in. Je to nová vrstva, kterou stojí za to sledovat pro projekty s agentními kanály; chybí dedikovaný popis endpointů a příklady volání.

- **Checkout Kit v4** — vkládání checkoutu do webu, nativních aplikací a agentních zážitků. Pro mobilní a headless projekty by stálo za samostatný článek s popisem změn proti předchozí verzi.

- **Sign-in vrstva: granulární Shop consent a one-tap sign-in** — dopad na to, jaká data apps od zákazníka získají a jak se propojují seznamy přání a recenze se Shop účty.

- **Functions: metafields u delivery customizations a metaobjects (coming soon)** — rozšíření logiky checkoutu řízené konfigurací; u metaobjects zbývá ověřit rozsah oproti Spring '26 a verzi API 2027-01.

- **POS: background extensions** a logování app events z UI extensions — praktické pro vývojáře retailových a checkout rozšíření.

- **Analytics: app events a anotace přes GraphQL Admin API** — apps tak mohou vysvětlit zlom v grafech přímo v analytice.

- **Dotazy na purchase orders v Admin API** — důležité pro ERP integrace; souvisí s dříve popsanými reporty a transfery, ale samotné dotazy dosud nemají vlastní článek.

- **Monetizace a obchodní model pro vývojáře** — výdělky partnerů za čtyři roky, add-ony u Theme Store, lokalizované odhadované ceny, roční plán s měsíčními poplatky za využití (coming soon), požadavky plánů na schopnosti obchodu a listings, pricing a app ads v Dev Dashboardu (coming soon).

- **Nástroje pro agenty** — Stripe Projects CLI, CLI optimalizované pro neinteraktivní vstup a výstup, dotazy na produkční logy z CLI (coming soon) a mock.shop jako agentic reference library.

- **Storefronty a výkon** — Vercel Shop, plný popis nové architektury témat (typované kontrakty, dílčí aktualizace, Tailwind) a doručování pouze použitého CSS na každou stránku. Zrychlení načítání online store je pro merchanty jedna z nejviditelnějších změn celého tématu.

- **Detail 14 nových component APIs v Polarisu 2.0** — výčet komponent a příklady použití; archiv zatím popisuje stable release a změny v rc.1, ale ne jednotlivé nové komponenty.

## ⬅️ Zpět na hub

[Editions Fall '26 — hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
