---
date: 2026-09-28
title: "WebMCP: podpora pro checkout — AI agenti mohou dokončit nákup"
title_en: "WebMCP support for checkout"
slug: webmcp-checkout-support
zdroj: https://shopify.dev/changelog/posts/webmcp-support-for-checkout
shrnuto_dne: 2026-09-30
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Checkout s WebMCP nástroji funguje bez konfigurace, ale agenti při něm pracují nad stávajícím checkout UI stavem, takže stojí za to ověřit chování checkout UI extensions, které blokují pokračování."
dotcene_klienty: []
souvisejici: [webmcp-liquid-hydrogen-storefronts, universal-commerce-protocol-ucp, storefronts-ucp-2026-08-25-support]
tldr: "Shopify rozšířil WebMCP o checkout — browser agenti mohou přes čtyři standardizované nástroje číst a upravovat checkout i dokončit nákup, bez nového API a bez konfigurace obchodu, a při 3D Secure nebo blokujících UI extensions předají řízení zpět kupujícímu."
tagy: [webmcp, checkout, agentic-commerce, ai-agents, ucp]
zdroj_kanal: dev-changelog
kontext:
  background: |
    WebMCP je browser-side varianta Model Context Protocol: stránka v prohlížeči registruje nástroje, které může AI agent nebo browser assistant volat jako běžné API, místo aby simuloval kliky nebo parsoval DOM. Shopify tento standard nejdřív zapojil do online storefrontů — od 5. srpna 2026 jsou WebMCP nástroje dostupné na všech Liquid storefrontech a v Hydrogen developer preview a pokrývají vyhledávání v katalogu, detail produktu a správu košíku.

    Nový changelog z 28. září 2026 tuto vrstvu dotahuje až do checkoutu. Browser agenti teď mohou číst a upravovat checkout během session kupujícího a Shopify to popisuje jako dokončení podpory agentů napříč celou nákupní cestou — od objevování produktů přes práci s košíkem po checkout a potvrzení objednávky. Nástroje běží uvnitř checkout-web nad existujícím stavem checkout UI, takže nevznikají žádné nové API ani žádná konfigurace na straně obchodníka.

    Širší kontext tvoří Shopify agentic commerce strategie a protokoly jako UCP (Universal Commerce Protocol), přes které se agenti s obchody domlouvají na schopnostech pro discovery a checkout. WebMCP pro checkout je browser-side doplněk těchto serverových cest: agent, který už v prohlížeči pracuje s kupujícím, může nákup doručit až do konce, zatímco citlivé kroky zůstávají u člověka.
  zdroje:
    - title: "Shopify: WebMCP support for checkout"
      url: "https://shopify.dev/changelog/posts/webmcp-support-for-checkout"
    - title: "Shopify dev docs: WebMCP tools for checkout"
      url: "https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp"
    - title: "Shopify dev docs: Building commerce agents"
      url: "https://shopify.dev/docs/agents"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify rozšířil WebMCP o checkout surface. Browser agenti teď mohou během session kupujícího číst a upravovat checkout a po potvrzení kupujícím ho také dokončit. Změna navazuje na WebMCP nástroje pro storefronty a košík a podle Shopify uzavírá podporu agentů napříč celou nákupní cestou — od vyhledání produktu a práce s košíkem přes checkout až po potvrzení objednávky.

Nově jsou k dispozici čtyři nástroje:

- `navigate_to_storefront` — přechod zpět na storefront.
- `get_checkout` — čtení stavu checkoutu, zpráv a po dokončení také detailů objednávky.
- `update_checkout` — úprava podporovaných polí checkoutu.
- `complete_checkout` — odeslání checkoutu po potvrzení kupujícím.

Nástroje běží uvnitř checkout-web nad stávajícím stavem checkout UI. Nevzniká žádné nové API a od obchodníka není potřeba žádná konfigurace. Všude, kde je vstup kupujícího nezbytný — typicky 3D Secure autentizace nebo blokující UI extensions — nástroje předají řízení zpět kupujícímu, takže agent tyto kroky neobchází.

Changelog neuvádí omezení podle prohlížeče. U storefrontových WebMCP nástrojů šlo v srpnu o Chromium origin trial, takže stojí za to ověřit v dokumentaci, jak je to s podporou prohlížečů u checkoutu.

## Časová osa

- **8. července 2026** — experimentální WebMCP nástroje se poprvé objevují v Hydrogen developer preview.
- **5. srpna 2026** — WebMCP nástroje pro storefronty a košík jsou dostupné na všech Liquid storefrontech a v Hydrogen developer preview.
- **28. září 2026** — WebMCP pokrývá i checkout (`navigate_to_storefront`, `get_checkout`, `update_checkout`, `complete_checkout`), bez nutnosti konfigurace.

## Dopad pro nás

**Pro vývojáře:** Není potřeba žádná instalace ani migrace, nástroje pracují nad existujícím checkout UI stavem. Praktický dopad se týká obchodů s vlastními checkout customizacemi — UI extensions, které blokují pokračování, budou při agentním nákupu předávat řízení kupujícímu, takže je dobré vědět, jak se v takovém případě chovají a že agent jejich logiku nepřeskočí. Pokud vyvíjíme vlastní commerce agenty nebo testujeme agentní nákup, stojí za to projít dokumentaci ke čtyřem novým nástrojům a vyzkoušet celý tok od košíku po potvrzení objednávky.

**Pro PM / PO:** Nízká naléhavost, žádná akce není nutná — funkce je informativní a běží bez konfigurace. Z pohledu příležitosti jde o další důležitý krok agentic commerce: AI agenti v prohlížeči mohou doručit nákup až do konce, což je dobrý argument pro konverzace s obchodníky, které zajímá agentní nakupování. Platby a citlivé kroky (3D Secure) zůstávají pod kontrolou kupujícího.

## Použití v Integrátoru

Přímý dopad je minimální — WebMCP pro checkout se aktivuje automaticky a nevyžaduje změny v našich synchronizacích. Hodí se sledovat jako součást širšího agentic commerce ekosystému (WebMCP, UCP, Checkout Kit), zejména u projektů s nestandardními checkout extensions.
