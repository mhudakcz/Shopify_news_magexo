---
date: 2026-10-16
title: "Checkout MCP + Cart MCP: podpora UCP buyer consent (marketing opt-ins v agentic checkout)"
title_en: "Checkout MCP and Cart MCP now support UCP buyer consent"
slug: checkout-cart-mcp-ucp-buyer-consent
zdroj: https://shopify.dev/changelog/posts/checkout-mcp-and-cart-mcp-now-support-ucp-buyer-consent
shrnuto_dne: 2026-10-20
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo testujeme AI agenta, který dokončuje nákup přes Checkout MCP nebo Cart MCP, musí umět zobrazit a předat souhlasy kupujícího; u běžných synchronizací se nic nemění."
dotcene_klienty: []
souvisejici: [storefronts-ucp-2026-08-25-support, storefront-mcp-cart-tools-deprecated-ucp, whatsapp-consent-checkout]
tldr: "Checkout MCP a Cart MCP podporují od UCP 2026-08-25 rozšíření dev.ucp.shopping.buyer_consent, takže kupující může přímo v AI agentovi udělit nebo odmítnout marketingové a privacy souhlasy (email, SMS, analytics, sale or sharing) a obchod je dostane spolu s košíkem, checkoutem i objednávkou."
tagy: [checkout-mcp, cart-mcp, ucp, buyer-consent, marketing, agentic-commerce]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Universal Commerce Protocol (UCP) je otevřený protokol, přes který si AI agenti a platformy vyjednávají se Shopify obchody, co který obchod umí v oblasti discovery, košíku a checkoutu. Obchod své schopnosti inzeruje v discovery profilu na cestě /.well-known/ucp a agent ve svém profilu deklaruje, která rozšíření chce používat. Cart MCP a Checkout MCP jsou serverové cesty, přes které agent košík a checkout vytváří, upravuje a dokončuje. Od 28. srpna 2026 obchody inzerují UCP verzi 2026-08-25, která tuto změnu umožňuje.

    Dosud chyběl standardizovaný způsob, jak v agentním nákupu zachytit rozhodnutí kupujícího o marketingu a ochraně soukromí. Když kupující dokončoval objednávku v AI agentovi, obchod nemusel dostat žádný opt-in na email nebo SMS a přicházel o možnost navázat s kupujícím vztah. Nové rozšíření dev.ucp.shopping.buyer_consent tuto mezeru řeší: agent kupujícímu ukáže konkrétní volby včetně popisu a odkazů na zásady obchodu a jeho odpovědi pošle zpět spolu s košíkem nebo checkoutem. Shopify je pak uloží a předá obchodu i s objednávkou.

    Rozšíření je podmíněné vyjednáním. Dotčené jsou jen agenti, kteří používají UCP 2026-08-25 a rozšíření ve svém profilu deklarují. Integrace bez deklarace nebo na starší verzi UCP se nemění. Právní stránku (GDPR, ePrivacy a české předpisy o obchodních sděleních) Shopify v oznámení neřeší. Je to náš komentář: agent, který souhlasy sbírá, odpovídá za to, že je kupující skutečně udělil on sám, a proto je příznak source důležitý.
  zdroje:
    - title: "Shopify: Checkout MCP and Cart MCP now support UCP buyer consent"
      url: "https://shopify.dev/changelog/posts/checkout-mcp-and-cart-mcp-now-support-ucp-buyer-consent"
    - title: "Shopify dev docs: Carts and Checkout MCP for agents"
      url: "https://shopify.dev/docs/agents/carts-and-checkout"
    - title: "Shopify dev docs: Agent profiles and UCP negotiation"
      url: "https://shopify.dev/docs/agents/profiles"
    - title: "UCP specification: Buyer consent extension"
      url: "https://ucp.dev/2026-08-25/specification/shopping/extensions/buyer-consent/"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Checkout MCP a Cart MCP nově podporují UCP rozšíření `dev.ucp.shopping.buyer_consent` od verze protokolu `2026-08-25`. Kupující může přímo v agentovi dělat privacy a marketingová rozhodnutí, například se přihlásit k odběru emailů nebo SMS, a obchod tyto volby dostane spolu s košíkem, checkoutem i objednávkou. Obchody rozšíření inzerují ve svém discovery profilu na `/.well-known/ucp` a platí pro cart i checkout.

Když agentův profil vyjedná `dev.ucp.shopping.buyer_consent` ve verzi `2026-08-25`, odpovědi Checkout MCP a Cart MCP obsahují objekt `buyer.consent`. Ten vypisuje každý podporovaný účel souhlasu (consent purpose) s aktuálním stavem, popisem a odkazy na zásady obchodu. Shopify obchody inzerují minimálně tyto účely:

- `dev.ucp.consent.analytics`
- `dev.ucp.consent.preferences`
- `dev.ucp.consent.sale_or_sharing`
- `dev.ucp.consent.marketing` se segmenty `email` a `sms`

Oznámení WhatsApp nezmiňuje. Marketingový souhlas je tedy v tomto rozšíření popsaný jen pro email a SMS. WhatsApp opt-in v nativním checkoutu je samostatná funkce (viz související článek).

Jak agent souhlasy předává:

- Volby kupujícího posílá při vytvoření, úpravě nebo dokončení košíku či checkoutu.
- Hodnotu `source: "platform"` nastavuje jen u voleb, které kupující skutečně udělal v agentním flow.
- Pokud agent souhlas nepošle, Shopify použije výchozí nastavení obchodu pro zemi kupujícího. Když je země neznámá, výchozí stav je opt-out.
- Některé volby vyžadují kontaktní údaj. Například SMS opt-in bez telefonního čísla vrátí varování `missing_consent_data` a checkout nelze dokončit, dokud se údaj nedodá.

Oznámení nedefinuje hodnoty stavu ani úplnou strukturu jednotlivých účelů a neuvádí názvy request parametrů mimo `source`. Ty je nutné dohledat v UCP specifikaci rozšíření. Nejsou tam ani žádné ukázky kódu ani deprecations.

## Časová osa

- **17. 6. 2026** — Spring '26 Edition uvádí UCP jako otevřený standard pro agentic commerce
- **24. 6. 2026** — nástroje košíku na Storefront MCP jsou deprecated ve prospěch UCP Cart MCP
- **28. 8. 2026** — Shopify obchody začínají inzerovat podporu UCP `2026-08-25`
- **10. 9. 2026** — WhatsApp marketing consent je dostupný v nativním checkoutu
- **16. 10. 2026** — Checkout MCP a Cart MCP podporují `dev.ucp.shopping.buyer_consent`

## Dopad pro nás

**Pro vývojáře:** Kdo staví nebo testuje agenta nad Checkout MCP nebo Cart MCP, má čtyři kroky:

1. Deklarovat `dev.ucp.shopping.buyer_consent` ve verzi `2026-08-25` v profilu agenta.
2. Při vykreslení košíku a checkoutu zobrazit každou volbu s popisem a odkazy na zásady z `buyer.consent`.
3. Odeslat volby kupujícího při create, update i complete volání, s `source: "platform"` jen pro volby udělené kupujícím.
4. Při varování `missing_consent_data` vyžádat chybějící kontaktní údaj (typicky telefon) a zkusit volání znovu.

Pozor na výchozí chování: bez odeslaných voleb platí defaulty obchodu podle země a při neznámé zemi opt-out, takže agent, který souhlasy ignoruje, obchodu žádné opt-iny nepřinese. Naopak předvyplnění voleb bez skutečného rozhodnutí kupujícího je přesně to, čemu se příznak `source` má vyhnout. Existující integrace bez deklarace rozšíření nebo na starší verzi UCP fungují beze změny.

**Pro PM / PO:** Střední naléhavost, žádná akce není povinná. Je to příležitost pro obchodníky, kteří chtějí prodávat přes AI agenty a zároveň si budovat vlastní zákaznickou bázi. Opt-in na email a SMS v agentním nákupu dává obchodu marketingový touchpoint, který by jinak chyběl. U zakázek s AI nebo agentic tématem stojí za to zmínit, že consent flow musí být součástí zadání agenta a že pro compliance (GDPR, ePrivacy a české předpisy o obchodních sděleních) je důležité, aby volby opravdu činil kupující. Právní posouzení konkrétního nasazení oznámení neřeší, doporučujeme ho konzultovat s obchodníkem.

## Použití v Integrátoru

Přímo toto rozšíření nevoláme a běžné synchronizace se nemění. Relevantní je jen u případných AI agentů nad Checkout MCP a Cart MCP, kde musí být souhlasy kupujícího součástí nákupního toku.
