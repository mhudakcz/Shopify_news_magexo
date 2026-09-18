---
date: 2026-09-15
title: "metafieldsSet mutation: dynamic complexity cost dle počtu metafields v požadavku"
title_en: "Dynamic complexity cost for metafieldsSet mutation"
slug: metafieldsset-dynamic-complexity-cost
zdroj: https://shopify.dev/changelog/dynamic-complexity-cost-for-metafieldsset-mutation
shrnuto_dne: 2026-09-18
kategorie: [fyi]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor zapisuje metafieldy hromadně přes metafieldsSet (import katalogu, bulk aktualizace napříč objednávkami či produkty), musí počítat s vyšší a proměnlivou cenou volání podle typu resources a podle toho upravit throttling logiku."
dotcene_klienty: []
souvisejici: [invalid-metafield-queries-error-2026-10, metafield-triggers-additional-webhook-topics, bulk-queries-4x-faster]
tldr: "Mutace metafieldsSet už neúčtuje fixních 10 bodů za volání, ale cenu poskládanou z ceny za každý distinct typ resource, jehož metafieldy v požadavku měníte - hromadné zápisy napříč více objednávkami nebo produkty tak mohou vyčerpat rate limit mnohem rychleji než dřív."
tagy: [admin-graphql-api, metafields, rate-limit, complexity, mutation]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Admin GraphQL API měří zátěž jednotlivých operací pomocí systému nákladových bodů (query/mutation cost), které se odečítají z throttle bucketu aplikace. Dokud se bucket nevyčerpá, aplikace může volat API bez čekání; jakmile dojde k vyčerpání, další požadavky se zpožďují nebo vrací throttling chybu. Mutace `metafieldsSet`, která umožňuje v jednom volání zapsat metafieldy na libovolný počet různých resources (produkty, varianty, objednávky, kolekce, zákazníky, shop), měla dosud fixní cenu 10 bodů bez ohledu na to, kolik metafieldů nebo jak náročných resources se v požadavku zapisovalo.

    Od 15. 9. 2026 Shopify tento model mění na dynamický. Nová cena se skládá ze základu 10 bodů plus součtu nákladů za každý distinct typ resource ownera, který se v mutaci vyskytuje - bez ohledu na to, kolik metafieldů se u daného resource zapisuje (deset metafieldů na jednom produktu stojí stejně jako jeden). Váhy podle typu: Order 10 bodů, Product 4 body, ProductVariant 2 body, Collection/Customer/Shop po 1 bodu, ostatní typy 0 bodů. Cena tedy roste s rozmanitostí zapisovaných resources, ne s objemem dat na jeden resource.

    Praktický dopad je citelný hlavně u hromadných zápisů napříč více resources stejného typu s vysokou váhou. Podle příkladů ze changelogu stojí zápis na dvou produktech a jedné variantě 20 bodů (10 + 4+4 + 2), zápis 25 metafieldů na jediném produktu jen 14 bodů (10 + 4), ale hromadný zápis napříč 25 různými objednávkami vyskočí na 260 bodů (10 + 25×10) místo dosavadních 10. Shopify proto doporučuje seskupovat metafieldy podle resource ownera do co nejméně volání, nerozdělovat operace s vysokým fan-out do mnoha samostatných requestů, sledovat skutečnou cenu přes cost extensions v odpovědi a mít připravenou throttling/retry logiku.
  zdroje:
    - title: "Shopify: Dynamic complexity cost for metafieldsSet mutation"
      url: "https://shopify.dev/changelog/dynamic-complexity-cost-for-metafieldsset-mutation"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Mutace `metafieldsSet` v Admin GraphQL API přechází z fixní ceny 10 bodů na **dynamic complexity cost**. Nová cena = základ 10 bodů + součet nákladů za každý **distinct typ resource ownera**, jehož metafieldy se v daném volání zapisují:

- **Order** — 10 bodů
- **Product** — 4 body
- **ProductVariant** — 2 body
- **Collection, Customer, Shop** — 1 bod každý
- ostatní typy ownerů — 0 bodů

Klíčové je, že se počítá typ ownera, ne počet metafieldů ani počet konkrétních resources stejného typu navíc nad rámec ceny za daný typ — cena roste s tím, kolik *různých typů* resources v jednom požadavku kombinujete, nikoli s objemem dat na jeden resource.

## Časová osa

- **2026-09-15** — nový cost model pro `metafieldsSet` zveřejněn a nasazen, platí okamžitě bez migračního okna

## Dopad pro nás

**Pro vývojáře:** Je potřeba projít místa, kde se `metafieldsSet` volá hromadně (importy katalogu, bulk update metafieldů, synchronizace s ERP/PIM), a ověřit, jaké kombinace typů resources se v jednotlivých voláních zapisují. Zápisy soustředěné na jeden typ resource (např. jen produkty) zdraží minimálně, ale požadavky mixující více objednávek, produktů a variant v jednom volání mohou najednou stát řádově víc bodů než dřív. Doporučené je sledovat skutečnou cenu přes `extensions.cost` v odpovědi a případně přeskupit dávky tak, aby se metafieldy seskupovaly podle resource ownera do menšího počtu specializovaných volání.

**Pro PM / PO:** Jde o změnu bez breaking chování na úrovni API kontraktu (mutace funguje stejně, mění se jen cena), ale u integrací s hromadnými zápisy metafieldů může znamenat citelně nižší efektivní throughput a delší dobu synchronizačních jobů, pokud se rate-limiting logika nepřizpůsobí. Vhodné je nechat prověřit importní/synchronizační scénáře u klientů, kteří metafieldy zapisují ve velkém objemu napříč různými typy resources.

## Použití v Integrátoru

Možná — pokud Integrátor zapisuje metafieldy hromadně přes `metafieldsSet` (import katalogu, bulk aktualizace napříč objednávkami či produkty), je vhodné ověřit dopad nového cost modelu na throttling logiku a případně požadavky přeskupit podle typu ownera.
