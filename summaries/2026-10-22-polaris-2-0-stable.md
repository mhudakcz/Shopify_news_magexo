---
date: 2026-10-22
title: "🎨 Polaris 2.0 stable — nový design system Shopify Admin (CDN release)"
title_en: "Polaris 2.0 is now stable"
slug: polaris-2-0-stable
zdroj: https://shopify.dev/changelog/posts/polaris-cdn-2-0-is-now-stable
shrnuto_dne: 2026-10-23
kategorie: [nova-api, nova-prilezitost, breaking]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-10-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud stavíme nebo udržujeme embedded App Home UI na Polaris web components, 2.0 je finální verze, na kterou je potřeba plánovitě přejít přes nový script tag polaris-2.js."
dotcene_klienty: []
souvisejici: [polaris-2-0-release-candidate, polaris-2-0-0-rc-1-whats-new, shopify-admin-new-look-2026]
tldr: "Polaris Web Components 2.0 je stable na CDN jako první major verze se semantic versioningem — sladěná s redesignem adminu, na 2.0 se nepřechází automaticky, ale změnou script tagu na polaris-2.js."
tagy: [polaris, design-system, admin-ui, components, stable, "2.0", cdn]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Polaris Web Components 2.0 je od 22. 10. 2026 dostupné na stabilních kanálech Polaris CDN. Jde o první major release od zavedení semantic versioningu na CDN (oznámeného koncem srpna) a zároveň o finální podobu UI komponent, které odpovídají přepracovanému Shopify adminu s novým rámem, navigací a vizuálním stylem. Redesign adminu startoval 15. 9. 2026, release candidate Polaris 2.0 vyšel 24. 9. a changelog k verzi 2.0.0-rc.1 jsme popsali na začátku října. Stable verze tuto řadu uzavírá.

    Klíčové je, že 2.0 se k appce nedostane samo. Shopify to v changelogu výslovně uvádí: legacy URL `polaris.js` a stejně tak `polaris-1.js` dál obsluhují Polaris 1.1 a `polaris.js` se na 2.x nepřesune. Appka přejde na novou major verzi až ve chvíli, kdy vývojář změní script tag na `https://cdn.shopify.com/shopifycloud/polaris-2.js`. Kdo chce zůstat na konkrétní verzi i po vydání dalších 2.x releasů, připne si `polaris-2.0.js`. U appek postavených na šabloně pro React Router je navíc nutné nastavit stejnou hodnotu `polarisUrl` v `AppProvider` i v serverové konfiguraci `shopifyApp` (vyžaduje `@shopify/shopify-app-react-router` ve verzi 2.1.0 nebo novější) a pro TypeScript doinstalovat `@shopify/polaris-types@^2.0.0`.

    Důležité je, co samotný changelog záznam neobsahuje. Pole Action required je u něj nastavené na No a post nevypisuje žádný seznam breaking changes, popis design tokenů, jednotlivých změn komponent ani codemody či konkrétní deadline; odkazuje na dokumentaci Update your app for Polaris 2 a na stránku o verzování web components. Jakožto major verze podle semver ale může zasáhnout do chování a vzhledu komponent, proto kategorie breaking odpovídá tomu, že před přechodem je nutné projít migrační dokumentaci a appku ověřit na stagingu. Jediný známý tvrdý termín pochází z dřívějšího overview release candidate: appky v programu Built for Shopify musí migrovat do 1. 5. 2027.
  zdroje:
    - title: "Shopify: Polaris 2.0 is now stable"
      url: "https://shopify.dev/changelog/posts/polaris-cdn-2-0-is-now-stable"
    - title: "Shopify Docs: Update your app for Polaris 2"
      url: "https://shopify.dev/docs/apps/build/app-home/polaris2"
    - title: "Shopify Docs: Versioning for web components"
      url: "https://shopify.dev/docs/api/app-home/v2.0/web-components/versioning"
    - title: "Archiv: Polaris 2.0 release candidate — nová major verze UI komponent"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-2-0-release-candidate/"
    - title: "Archiv: Co je nového v Polaris 2.0.0-rc.1"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/polaris-2-0-0-rc-1-whats-new/"
    - title: "Archiv: Nový vzhled Shopify adminu — barvy, typografie, Sidekick jako floating chat"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-admin-new-look-2026/"
  generated_at: 2026-10-23T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify označil **Polaris Web Components 2.0 za stable** a zpřístupnil je na stabilních kanálech Polaris CDN. Je to první major verze v rámci semantic versioningu na CDN a její vzhled odpovídá redesignovanému Shopify adminu (nový frame, navigace a vizuální styl z rolloutu 15. 9.).

**Přechod není automatický.** Appka na Polaris 2.0 sama nepřejde, musí se změnit script tag:

```html
<script src="https://cdn.shopify.com/shopifycloud/polaris-2.js"></script>
```

- `polaris.js` a `polaris-1.js` dál servírují Polaris 1.1, `polaris.js` se na 2.x nepřesune.
- Pro zafixování na 2.0 i po dalších 2.x releasech slouží `polaris-2.0.js`.
- **React Router template apps:** stejnou hodnotu `polarisUrl` je potřeba nastavit v `AppProvider` i v serverové konfiguraci `shopifyApp`; vyžaduje to `@shopify/shopify-app-react-router` 2.1.0 nebo novější.
- **TypeScript:** doinstalovat `@shopify/polaris-types@^2.0.0`.

**Co v postu chybí:** žádný výčet breaking changes, popis design tokenů, jednotlivých změn komponent, codemodů ani nový deadline. Details jsou v dokumentaci Update your app for Polaris 2 a ve stránce o verzování web components. Protože jde o major verzi, je rozumné počítat s tím, že se změní vzhled a případně i chování některých komponent, a ověřit to na stagingu.

## Časová osa

- 2026-08-31 — oznámen semantic versioning na Polaris CDN
- 2026-09-15 — start rolloutu nového vzhledu Shopify adminu
- 2026-09-22 — Polaris CDN 1.1 přechází do stable
- 2026-09-24 — release candidate Polaris 2.0
- 2026-10-01 — changelog k verzi 2.0.0-rc.1
- 2026-10-22 — **Polaris 2.0 stable** na CDN (publikováno 10:00 ET, účinnost 12:00 ET)
- 2027-05-01 — deadline migrace pro appky v programu Built for Shopify (podle overview release candidate z 24. 9.)

## Dopad pro nás

**Pro vývojáře:** Pokud spravujeme embedded App Home na Polaris web components, je čas naplánovat přechod: otestovat appku na staging prostředí s `polaris-2.js`, projít migrační dokumentaci a zkontrolovat zejména vlastní CSS, custom Polaris theme a komponenty, které se v rc.1 měnily (Table, Section, Page, Select, Modal, TextField). Pro produkci doporučujeme po ověření přišpendlit konkrétní verzi (`polaris-2.0.js`), dokud nebudeme chtít další 2.x updaty. U React Router šablony nezapomenout na shodný `polarisUrl` v `AppProvider` i v `shopifyApp` a na aktualizaci `@shopify/shopify-app-react-router` a `@shopify/polaris-types`. Admin UI extensions a App Home UI extensions na Polaris komponentách nový styling dostávají automaticky podle dřívějšího guidance.

**Pro PM / PO:** Záznam má Action required: No a přechod je dobrovolný, takže nic neshoří ze dne na den. Přesto jde o vysokou prioritu plánování, protože major verze přináší nový vzhled a potenciální breaking changes a pro appky v Built for Shopify platí tvrdý deadline 1. 5. 2027. Doporučený postup: sepsat, které appky v portfoliu jedou na Polaris, odhadnout pracnost migrace (script tag, ověření komponent, staging) a zařadit ji do roadmapy s dostatečným předstihem před květnem 2027.

## Použití v Integrátoru

Přímý dopad máme jen tehdy, pokud stavíme nebo upravujeme embedded App Home UI nebo custom Polaris theme; pak je 2.0 cílová verze a přechod proběhne změnou script tagu na `polaris-2.js` po ověření na stagingu. Pro běžné e-shopové projekty bez vlastní admin appky se nás to netýká.
