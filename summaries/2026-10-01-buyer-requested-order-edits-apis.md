---
date: 2026-10-01
title: "Nové APIs pro buyer-requested order edits (customer-initiated úpravy)"
title_en: "New APIs for buyer-requested order edits"
slug: buyer-requested-order-edits-apis
zdroj: https://shopify.dev/changelog/posts/new-apis-for-buyer-requested-order-edits
shrnuto_dne: 2026-10-06
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2026-10"]
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše synchronizace objednávek do ERP nebo OMS předpokládá, že upravit objednávku může jen merchant, žádosti zákazníka o odebrání položek mají nově vlastní objekt, mutace a webhooky, které je třeba zachytit."
dotcene_klienty: []
souvisejici: [self-serve-order-cancellation-requests, ordercancel-mutation-structured-jobresult, release-notes-2026-10]
tldr: "Admin GraphQL API a Customer Account API ve verzi 2026-10 přidávají objekt RequestedOrderEdit, mutace pro vytvoření, vyřešení a zamítnutí žádosti zákazníka o odebrání nevyfulfillnutých položek, webhooky requested_order_edit/* a stav žádosti na objednávce; dosud k tomu neexistoval žádný záznam v API."
tagy: [admin-graphql-api, customer-account-api, orders, order-edits, buyer-requested, customer-self-service, webhooks, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Dosud byla úprava objednávky po jejím vytvoření v praxi záležitostí merchanta nebo aplikace, která pro něj pracuje. Zákazník, který si po zadání objednávky rozmyslel některou položku, musel napsat nebo zavolat support a doufat, že obchod stihne zareagovat dřív, než objednávka odejde ze skladu. Self-serve returns a cancellations v customer accounts (Spring '26) už zákazníkům dovolily podat žádost o zrušení položek přímo z účtu, ale podle changelogu k takovým žádostem o úpravu objednávky neexistoval žádný záznam viditelný v API. Aplikace, které řeší fulfillment, ERP nebo support, proto neměly jak o žádostech zákazníků zjistit ani na ně programově reagovat.

    Verze 2026-10 tuto mezeru zaplňuje. V Admin GraphQL API přibývá objekt RequestedOrderEdit, mutace requestedOrderEditCreate, requestedOrderEditResolve a requestedOrderEditDecline a query requestedOrderEditCalculate. Na objektu Order přibývá connection requestedOrderEdits a pole displayRequestedEditStatus, objednávky lze vyhledávat přes filtr requested_order_edit_status. V Customer Account API je pro zákazníkovu stranu mutation orderRequestEdit (s podporou idempotency přes direktivu @idempotent) a query requestedOrderEditCalculate. Životní cyklus žádosti pokrývají tři webhook topics: requested_order_edit/created, requested_order_edit/resolved a requested_order_edit/declined. Admin operace vyžadují scopes read_orders (queries) a write_orders (mutations).

    Důležité je, co changelog říká a co neříká. Zákazník podle něj může požádat o odebrání nevyfulfillnutých (unfulfilled) line items z objednávky. Změna adresy, změna množství ani výměna produktu v oznámení zmíněny nejsou, takže na ně nelze spoléhat. Mutation requestedOrderEditResolve označuje žádost jako ručně vyřešenou a requestedOrderEditDecline ji zamítá, ale oznámení nepopisuje, co přesně se při vyřešení stane s objednávkou (zda se úprava aplikuje automaticky, nebo ji musí provést merchant či aplikace samostatně), ani seznam hodnot stavu žádosti. Query requestedOrderEditCalculate vrací vypočtený finanční dopad žádosti ještě před jejím vytvořením, takže jde zobrazit náhled refundu nebo změny částky. Před implementací je nutné ověřit přesná pole a hodnoty ve schématu 2026-10.
  zdroje:
    - title: "Shopify: New APIs for buyer-requested order edits"
      url: "https://shopify.dev/changelog/posts/new-apis-for-buyer-requested-order-edits"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify ve verzi **2026-10** zpřístupňuje v API celý flow žádosti zákazníka o úpravu objednávky. Podle changelogu jde o **odebrání nevyfulfillnutých (unfulfilled) line items**; změna adresy, množství nebo výměna produktu se v oznámení nezmiňuje.

**Admin GraphQL API**

- objekt `RequestedOrderEdit`
- mutation `requestedOrderEditCreate` pro vytvoření žádosti
- mutation `requestedOrderEditResolve`, která označí žádost jako ručně vyřešenou
- mutation `requestedOrderEditDecline`, která žádost zamítne
- query `requestedOrderEditCalculate`, která vrací vypočtený finanční dopad žádosti ještě před jejím vytvořením
- na objektu `Order` nová connection `requestedOrderEdits` a pole `displayRequestedEditStatus`
- nový search filtr `requested_order_edit_status` pro dotazy nad objednávkami

**Customer Account API**

- mutation `orderRequestEdit`, kterou zákazník žádost podává; podporuje volitelný idempotency key přes direktivu `@idempotent`, takže opakovaný request vrátí původně vytvořený objekt místo duplicity
- query `requestedOrderEditCalculate` pro výpočet dopadu na straně zákazníka

**Webhooks**

- `requested_order_edit/created`
- `requested_order_edit/resolved`
- `requested_order_edit/declined`

**Access scopes:** pro Admin API `read_orders` (queries) a `write_orders` (mutations). Changelog neuvádí, zda se scopes pro Customer Account API liší.

**Co changelog neříká:** nepopisuje, co přesně se s objednávkou stane po `requestedOrderEditResolve` (zda se úprava aplikuje automaticky), jaké hodnoty nabývá `displayRequestedEditStatus` ani zda platí nějaká časová nebo množstevní omezení. Neuvádí žádný deadline ani breaking change, jde o aditivní novinku.

## Časová osa

- 2026-06-17 — Spring '26 Edition přidává self-serve cancellation requests v customer accounts; schvaluje je merchant (související kontext)
- 2026-10-01 — Shopify oznamuje nové APIs pro buyer-requested order edits ve verzi 2026-10
- 2026-10-01 — verze 2026-10 se stává stabilní, podporovaná do 16. 10. 2027 (podle release notes)

## Dopad pro nás

**Pro vývojáře:** Nic se nerozbije a není nutné nic měnit, ale pro aplikace pracující s objednávkami přibývá nový zdroj událostí, který je dobré zachytit.

- Přihlásit se k webhooks `requested_order_edit/created`, `requested_order_edit/resolved` a `requested_order_edit/declined`, pokud aplikace reaguje na změny objednávek, například synchronizuje stav do ERP, OMS nebo skladu.
- Pro rozhodování o žádostech použít `requestedOrderEditResolve` a `requestedOrderEditDecline`, před tím volitelně `requestedOrderEditCalculate` pro náhled finančního dopadu. Ověřit scopes `read_orders` a `write_orders`.
- Do dotazů nad objednávkami přidat `displayRequestedEditStatus` nebo `requestedOrderEdits` a filtrovat přes `requested_order_edit_status`, aby šlo najít objednávky s čekající žádostí.
- Neodhadovat chování po `requestedOrderEditResolve`. Changelog nespecifikuje, zda se úprava na objednávce provede sama, proto to ověřit ve schématu 2026-10 a otestovat na development store, včetně vazby na fulfillment (žádost se týká jen nevyfulfillnutých položek) a na refund.
- Pokud vyvíjíme vlastní customer account UI nebo extension, `orderRequestEdit` používat s `@idempotent`, aby retry po výpadku sítě nevytvořil duplicitní žádost.
- Při upgradu na 2026-10 počítat i s dalšími změnami ve stejné verzi, viz release notes 2026-10.

**Pro PM / PO:** Zákazník dostává možnost požádat o úpravu objednávky sám, bez e-mailu nebo telefonátu, a merchant ji schvaluje nebo zamítá. To snižuje počet support dotazů typu mohu z objednávky ještě něco odebrat a dává merchantům strukturovaný záznam namísto neformální komunikace. Příležitost je hlavně u obchodů s delším časem zpracování objednávky a u obchodů s napojeným ERP nebo skladem, kde dosud vedla každá úprava k ruční práci. Zároveň je to riziko pro aplikace, které předpokládají, že objednávku upravuje jen merchant: žádosti zákazníků se teď objeví jako nová událost a pokud na ně aplikace nereaguje, mohou zůstat nevyřízené. Rozsah je omezený na odebrání nevyfulfillnutých položek, takže nejde o plnohodnotné customer-initiated editování objednávky, a očekávání merchantů je dobré podle toho nastavit. Změna je primárně pro vývojáře aplikací; zda a jak se viditelně projeví v customer account UI, changelog neuvádí.

## Použití v Integrátoru

Pokud synchronizační flow mezi Shopify a ERP nebo OMS počítá s tím, že objednávku mění jen merchant, stojí za to zvážit odběr webhooků `requested_order_edit/*`, aby se žádosti zákazníků o odebrání položek nemíjely a šlo je propagovat do navazujících systémů. Přímý dopad je zatím nízký, protože jde o aditivní novinku a rozsah je omezen na nevyfulfillnuté položky; adopci lze spojit s přechodem na API verzi 2026-10.
