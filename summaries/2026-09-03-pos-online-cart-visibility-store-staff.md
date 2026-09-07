---
date: 2026-09-03
title: "POS staff vidí online cart identifikovaného zákazníka (dokončit nákup in-store)"
title_en: "Permitted store staff can now see an identified customer online cart in POS"
slug: pos-online-cart-visibility-store-staff
zdroj: https://changelog.shopify.com/posts/permitted-store-staff-can-now-see-an-identified-customer-s-online-cart-in-pos
shrnuto_dne: 2026-09-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-03
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme POS workflow nebo synchronizaci abandoned checkoutů, tato funkce mění, co je staff schopen vidět a dokončit přímo v obchodě — relevantní při konzultacích o unified commerce."
dotcene_klienty: []
souvisejici: [reduced-bot-noise-abandoned-checkouts, staff-attribution-pos-improvements, pos-v11-rebuild-deep-dive]
tldr: "Oprávnění zaměstnanci v Shopify POS nyní vidí položky z opuštěného online košíku identifikovaného zákazníka a mohou mu pomoct nákup dokončit přímo v obchodě."
tagy: [pos, cart, online-offline, retail, customer-experience, unified-commerce]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify přidává do POS novou funkci pro unified commerce: pokud zákazník začal nákup online a checkout nedokončil, oprávněný zaměstnanec v obchodě jej po vyhledání zákazníka uvidí — konkrétně produkty, které zůstaly v jeho digitálním košíku. Cílem je zachytit online-to-offline konverzi v momentě, kdy zákazník fyzicky dorazí do prodejny, a umožnit staffu aktivně nabídnout dokončení nákupu nebo poradit s výběrem.

    Funkce má několik podmínek, které musí být splněny současně: obchod musí běžet na Shopify POS verze 11.14 nebo novější, v Admin nastavení musí být zapnuté oprávnění "View abandoned checkouts" pro daného zaměstnance, zákazník musí být identifikovaný přes e-mailovou adresu a musí mít existující abandoned checkout, který ještě splňuje podmínky zobrazení. POS session navíc musí mít nastavený location context. Shopify zdůrazňuje, že se zobrazují pouze produkty z online košíku — nikoli obecná browsing history zákazníka na webu, takže jde o cílenou, ne plošnou viditelnost chování.

    Jde o rozšíření dřívějšího trendu sbližování online a offline dat v POS (staff attribution, multi-location pickup, POS v11 rebuild) — Shopify postupně stírá hranici mezi e-shopem a kamennou prodejnou tak, aby zaměstnanec u pokladny měl k dispozici kontext, který dřív byl dostupný jen v administraci nebo vůbec.
  zdroje:
    - title: "Shopify: Permitted store staff can now see an identified customer online cart in POS"
      url: "https://changelog.shopify.com/posts/permitted-store-staff-can-now-see-an-identified-customer-s-online-cart-in-pos"
  generated_at: 2026-09-08T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify POS nově umožňuje oprávněným zaměstnancům vidět obsah online košíku zákazníka, který přišel nakoupit do kamenného obchodu, ale svůj online nákup předtím nedokončil. Když staff v POS vyhledá a identifikuje zákazníka (typicky přes e-mail), systém mu zobrazí produkty z jeho abandoned checkoutu. Zaměstnanec tak může aktivně nabídnout pomoc — poradit s výběrem, ověřit dostupnost skladem, nebo rovnou pomoct nákup dokončit přímo na prodejně.

Zobrazení je podmíněné a poměrně striktně omezené: vyžaduje POS v11.14+, explicitně zapnuté oprávnění "View abandoned checkouts" v Admin nastavení role daného zaměstnance, identifikovaného zákazníka s platnou e-mailovou adresou a existující eligible abandoned checkout. POS session zároveň musí mít nastavenou lokaci. Viditelná je pouze obsah online košíku — ne obecná historie procházení webu, takže funkce cíleně řeší jeden konkrétní scénář (nedokončený nákup), nikoli sledování chování zákazníka jako takové.

Funkčně jde o klasický unified commerce use case: propojení online a offline zákaznické cesty tak, aby přechod mezi kanály byl pro zákazníka neviditelný a pro obchod neztrácel konverzní příležitost.

## Časová osa

- 2026-09-03 — funkce publikována na Shopify changelogu, dostupná pro obchody s POS v11.14 a vyšší

## Dopad pro nás

**Pro vývojáře:** Funkce běží čistě na straně Shopify POS a Admin nastavení oprávnění — nevyžaduje žádnou API integraci ani úpravu na naší straně. Pokud pro klienta řešíme POS role a permissions (např. přes staff management), je dobré vědět, že "View abandoned checkouts" nyní ovlivňuje i tuto viditelnost košíku, nejen dřívější reporting abandoned checkoutů v adminu.

**Pro PM / PO:** Jde o produktovou vlastnost s nulovým dopadem na naše integrace, ale s reálnou hodnotou pro retail klienty s kamennou prodejnou i e-shopem zároveň — stojí za zmínku v konzultacích o POS workflow nebo při plánování unified commerce strategie klienta.

## Použití v Integrátoru

Přímo se integrátoru netýká — funkce je čistě POS/Admin nativní. Relevantní je jen jako kontext při řešení POS oprávnění nebo abandoned checkout dat pro klienty s vlastní prodejnou.
