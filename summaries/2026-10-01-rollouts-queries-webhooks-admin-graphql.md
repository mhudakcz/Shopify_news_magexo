---
date: 2026-10-01
title: "Rollouts: queries + webhooks v Admin GraphQL API"
title_en: "Rollouts queries and webhooks in the Admin GraphQL API"
slug: rollouts-queries-webhooks-admin-graphql
zdroj: https://shopify.dev/changelog/posts/read_rollouts
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Dnes Rollouts v naší integraci nepoužíváme, ale pokud bude potřeba reagovat na časově řízené změny cen, katalogů nebo témat u klienta, půjde stav rolloutu číst přes API místo ručního sledování."
dotcene_klienty: []
souvisejici: [rollouts-granular-controls-launches-tests, rollouts-schedule-ab-test-themes-checkout, rollouts-storefront-changes]
tldr: "Admin GraphQL API od verze 2026-10 umí číst Rollouts (queries rollouts a rollout(id:)) a posílá webhooky o jejich životním cyklu, efektivní alokaci traffic a změnách zdrojů; vyžaduje scope read_rollouts."
tagy: [admin-graphql-api, rollouts, webhooks, api, launches]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (Markets › Rollouts), který obchodníkům umožňuje plánovat, nasazovat a A/B testovat změny storefront tématu, checkoutu i customer account stránek. Od března 2026 (storefront/theme změny) přes červen 2026 (checkout a customer account konfigurace) až po zářijové přepracování setup flow (intent-based timing, multi-change, conflict review) šlo ale výhradně o merchant-facing UI. Aplikace a integrace se k tomu, co a kdy se na storefrontu mění, nemohly programově dostat.

    Tento changelog tuto mezeru zavírá na read straně. Admin GraphQL API dostává dva nové root queries — rollouts pro výpis a vyhledávání a rollout(id:) pro načtení konkrétního rolloutu — a k tomu sadu webhooků. Aplikace tak mohou zjistit schedule rolloutu (aktivace a ukončení), nastavený traffic split (trafficAllocation), skutečně platnou alokaci (effectiveTrafficAllocation), rozdělení mezi varianty (treatment split) a také to, jaké změny rollout provádí u discounts, catalogs, themes a checkout/accounts konfigurací. Webhooky pokrývají tři kategorie notifikací: lifecycle rolloutu, změny efektivní alokace a změny zdrojů, kterých se rollout týká. Shopify doporučuje po přijetí webhooku dotčené Rollouts znovu načíst (refetch), aby integrace zůstala aktuální.

    Pro přístup je potřeba nový access scope read_rollouts; pro podkladové zdroje (například discounts nebo catalogs) navíc platí jejich stávající scopes a existující instalace mohou vyžadovat novou autorizaci od merchanta. Changelog je zařazen do API verze 2026-10 a neuvádí přesné názvy webhook topiců ani příklady dotazů, ty je potřeba dohledat v referenci objektu Rollout. Pro aplikace čtoucí discounts odkazuje Shopify na samostatnou dokumentaci k tomu, jak se discounts s Rollouts propojují. Jde výhradně o čtení; changelog nezmiňuje mutations pro vytváření nebo úpravu rolloutů.
  zdroje:
    - title: "Shopify: Rollouts queries and webhooks in the Admin GraphQL API"
      url: "https://shopify.dev/changelog/posts/read_rollouts"
    - title: "Archiv: Rollouts — přesnější timing kontroly, multi-change support, conflict review"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-granular-controls-launches-tests/"
    - title: "Archiv: Rollouts — scheduling + A/B testing pro themes a checkout/CAU konfigurace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rollouts-schedule-ab-test-themes-checkout/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zpřístupňuje **Rollouts přes Admin GraphQL API** (verze 2026-10), zatím v read-only podobě:

- **Queries** — `rollouts` (výpis a vyhledávání) a `rollout(id:)` (přímé načtení podle ID)
- **Co jde zjistit** — schedule rolloutu (čas aktivace a ukončení), nastavený `trafficAllocation`, aktuálně platný `effectiveTrafficAllocation`, rozdělení mezi varianty (treatment split) a resource changes u discounts, catalogs, themes a checkout/accounts konfigurací
- **Webhooky** — tři kategorie notifikací: lifecycle rolloutu, změny efektivní alokace a změny zdrojů (resource-change); changelog neuvádí konkrétní názvy topiců
- **Scope** — nový `read_rollouts`; pro podkladové zdroje platí jejich stávající scopes, existující instalace mohou potřebovat re-autorizaci od merchanta
- **Doporučený vzor** — po přijetí webhooku dotčený Rollout znovu načíst (refetch) a nespoléhat na payload jako na plný stav

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny
- **2026-06-05** — rozšíření na checkout a customer account konfigurace
- **2026-09-22** — přepracovaný setup flow (intent-based kontroly, multi-change, conflict review)
- **2026-10-01** — queries a webhooky v Admin GraphQL API, verze 2026-10, scope `read_rollouts`

## Dopad pro nás

**Pro vývojáře:** Jde o novou, čistě aditivní API funkci, takže nic stávajícího nerozbíjí. Pokud aplikace nebo integrace potřebují vědět, že u klienta běží časově omezená akce nebo A/B test (například jiná cenotvorba přes discounts, jiné catalogs nebo jiné téma), mohou to nově číst místo hádání z jiných signálů. Praktický postup je přidat scope `read_rollouts`, počítat s re-autorizací už nainstalovaných aplikací a webhooky brát jako signál k refetch, ne jako zdroj pravdy. Přesné názvy webhook topiců a tvar objektu Rollout je potřeba ověřit v API referenci, v changelogu nejsou.

**Pro PM / PO:** Pro klienty, kteří přes Rollouts plánují sezónní kampaně, Black Friday skiny nebo A/B testy checkoutu, vzniká prostor pro dohled a návaznost na externí systémy, například pozastavit synchronizaci cen nebo upozornit tým, když se rollout spustí, skončí nebo se změní jeho efektivní alokace. Nejde o povinnou změnu a nalehavost je nízká; je to užitečný argument v konzultacích o CRO a o koordinaci kampaní napříč systémy. Zápis rolloutů přes API zatím není součástí oznámení.

## Použití v Integrátoru

**Zatím nepoužíváme** — Rollouts v naší integraci dnes nefigurují, ale nové queries a webhooky dávají smysl zvážit tam, kde klient plánuje časově řízené změny cen, katalogů nebo témat a naše synchronizace na ně musí reagovat.
