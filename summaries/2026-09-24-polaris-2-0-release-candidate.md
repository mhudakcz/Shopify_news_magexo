---
date: 2026-09-24
title: "Polaris 2.0 release candidate — nová major verze UI komponent"
title_en: "Polaris 2.0 release candidate"
slug: polaris-2-0-release-candidate
zdroj: https://shopify.dev/changelog/polaris-2-0-release-candidate
shrnuto_dne: 2026-09-25
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom stavěli nebo upravovali embedded App Home UI na Polarisu, RC 2.0 určuje finální styling po GA a termín, do kdy musí custom Polaris themes zvládnout migraci."
dotcene_klienty: []
souvisejici: [shopify-admin-new-look-2026, prepare-app-shopify-admin-new-look, polaris-cdn-1-1-release-candidate]
tldr: "Shopify vydal release candidate Polaris 2.0 pro embedded App Home appky — nový styling navazující na redesign adminu z 15. 9., adopce je explicitní (opt-in), ale Built for Shopify appky musí migrovat do 1. 5. 2027."
tagy: [polaris, "2.0", release-candidate, ui-components, migration]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify uzavírá smyčku kolem zářijového redesignu adminu vydáním release candidate verze Polaris 2.0 pro embedded App Home rozhraní. Zatímco Admin UI extensions a App Home UI extensions postavené na Polaris komponentách dostaly nový vizuální styl automaticky už s rolloutem redesignu 15. 9., appky s vlastním embedded App Home postaveným na klasické knihovně Polaris React na tuto chvíli čekaly — a právě to je Polaris 2.0 RC, na které dev-changelog z 18. 9. odkazoval jako na blížící se krok.

    RC je dostupné hned k testování přes CDN (`https://cdn.shopify.com/shopifycloud/polaris-2.0-rc.js`) a komponenty se chovají adaptivně — automaticky odpovídají aktuální podobě adminu daného obchodu, ať už jde o starý, nebo nový design, takže appka nevypadá rozbitě ani u merchantů, kterým redesign ještě nedorazil. Adopce je výslovně opt-in: appka na RC 2.0 nepřejde sama od sebe, migraci musí vývojář provést vědomě. Součástí balíčku je i nová CSS proměnná `--shopify-safe-area-inset-bottom`, kterou má smysl použít u jakéhokoli obsahu ukotveného ke spodnímu okraji stránky — jinak hrozí vizuální kolize s plovoucím Sidekick chatem, který se do dolní části adminu přesunul právě s redesignem.

    Migrace navazuje na dříve publikovaný guide Polaris React → Polaris Web Components a doporučuje začít u komponent Page, Section a Button, protože právě ty mají na celkový vzhled appky největší dopad. Pro appky v programu Built for Shopify je migrace nakonec povinná — s tvrdým deadlinem 1. 5. 2027. Pro appky mimo tento program zatím žádný závazný termín changelog neuvádí, RC je ale otevřená příležitost otestovat kompatibilitu custom Polaris themes s novým designovým jazykem předem.
  zdroje:
    - title: "Shopify: Polaris 2.0 release candidate"
      url: "https://shopify.dev/changelog/polaris-2-0-release-candidate"
    - title: "Archiv: Připravte app na nový vzhled Shopify adminu — Polaris migration guide"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/prepare-app-shopify-admin-new-look/"
    - title: "Archiv: Nový vzhled Shopify adminu — barvy, typografie, Sidekick jako floating chat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-admin-new-look-2026/"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify vydal **release candidate Polaris 2.0** pro appky s embedded App Home, který dotahuje vizuální redesign adminu oznámený 15. 9. i na klasickou knihovnu Polaris React. Appky si nový styling natáhnou přes CDN a komponenty se automaticky přizpůsobí aktuální podobě adminu daného obchodu (starý i nový design). Migrace je **explicitní (opt-in)** — appka na RC nepřejde bez zásahu vývojáře — a přidává i CSS proměnnou `--shopify-safe-area-inset-bottom` pro obsah ukotvený ke spodnímu okraji stránky, aby nekolidoval s novým plovoucím Sidekick chatem.

## Časová osa

- 2026-08-31 — dostupný release candidate Polaris Web Components 1.1 (mezikrok před 2.0)
- 2026-09-15 — start rolloutu nového vzhledu Shopify adminu
- 2026-09-18 — Shopify publikuje developer guidance k přípravě appek na redesign, avizuje Polaris 2.0 RC
- 2026-09-24 — vydán release candidate Polaris 2.0
- 2027-05-01 — deadline pro migraci appek v programu Built for Shopify

## Dopad pro nás

**Pro vývojáře:** Relevantní jen pokud máme nebo budeme mít embedded App Home appku na Polaris React nebo Polaris Web Components. Doporučený postup je vyzkoušet RC na stagingu, začít migraci u komponent Page, Section a Button (největší vizuální dopad) a projít vlastní custom Polaris theme na potenciální breaking changes. Admin UI extensions a App Home UI extensions na Polaris komponentách nic řešit nemusí — nový styling se aplikuje automaticky.

**Pro PM / PO:** Bez zásahu klienta a bez customer-facing dopadu — jde o vývojářskou přípravu appek na dřívější redesign adminu. Jediný tvrdý termín je 1. 5. 2027 pro appky v programu Built for Shopify; jinak jde o doporučené, ne vynucené testování před GA.

## Použití v Integrátoru

Přímý dopad zatím nemáme, protože nejde o vlastní embedded App Home appku na Polaris React mimo web components. Relevantní by to bylo, pokud bychom takovou appku v budoucnu stavěli nebo upravovali custom Polaris theme.
