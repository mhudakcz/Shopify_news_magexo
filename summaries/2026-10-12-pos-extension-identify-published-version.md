---
date: 2026-10-12
title: "POS UI extensions: identifikace published verze (version tracking)"
title_en: "Identify the published version running in a POS extension"
slug: pos-extension-identify-published-version
zdroj: https://shopify.dev/changelog/posts/identify-the-published-version-running-in-a-pos-extension
shrnuto_dne: 2026-10-14
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme u retailových zakázek psát vlastní POS UI extensions, půjde přes shopify.extension.version zjistit, jaký build běží na zařízení obchodníka, a spárovat ho s hlášeným problémem."
dotcene_klienty: []
souvisejici: [pos-ui-extensions-offline, pos-ui-cart-mutations-reject-unconfirmed-2026-10, release-notes-2026-10]
tldr: "POS UI extensions na API verzi 2026-10 mohou přečíst shopify.extension.version a zjistit, jaký published build na zařízení běží; hodnota je neprůhledný název (ne číslo verze) a v lokálním dev serveru je undefined."
tagy: [pos-extensions, versioning, debugging, telemetry]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI extensions běží přímo v aplikaci Shopify POS na zařízeních obchodníků, tedy na tabletech, telefonech a pokladních terminálech v pobočkách. Shopify POS umí bundly extensions cachovat a spouštět je i offline, takže na různých zařízeních může v jednu chvíli běžet různý build téže extension. Dev Dashboard eviduje jednotlivé verze extension na stránce Versions a každá verze vzniká nasazením přes `shopify app deploy`.

    Dosud neexistoval jednoduchý způsob, jak z kódu běžící extension zjistit, který z těchto published buildů právě vykonává. Při řešení problému nahlášeného obchodníkem tak bylo těžké odpovědět na základní otázku, jestli dotyčné zařízení vůbec používá verzi, která obsahuje opravu. Nová vlastnost `shopify.extension.version` tuto informaci zpřístupňuje přímo v runtime.

    Hodnota se shoduje s názvem verze, který vidíte na stránce Versions v Dev Dashboardu a který jste nastavili při `shopify app deploy`. Jde o neprůhledný název, ne o číslo verze, takže se hodí na porovnání na shodu, nikoli na řazení nebo porovnávání větší/menší. Při běhu z lokálního dev serveru je hodnota `undefined`. Vlastnost je dostupná jen u extensions, které cílí na API verzi 2026-10; starší verze zůstávají beze změny a nic se jim nerozbije.
  zdroje:
    - title: "Shopify: Identify the published version running in a POS extension"
      url: "https://shopify.dev/changelog/posts/identify-the-published-version-running-in-a-pos-extension"
    - title: "Shopify: Changelog filtrovaný na API verzi 2026-10"
      url: "https://shopify.dev/changelog?api_version=2026-10"
    - title: "Shopify: Changelog filtrovaný na POS Extensions"
      url: "https://shopify.dev/changelog?api_type=pos-extensions"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

V POS UI extensions s API verzí **2026-10** je nově k dispozici vlastnost **`shopify.extension.version`**. Vrací název verze extension, která na zařízení právě běží. Je to ta samá hodnota, kterou vidíte na stránce Versions v Dev Dashboardu a kterou jste zadali při `shopify app deploy`.

**Co je potřeba vědět o hodnotě:**

- Je to **neprůhledný název**, ne číslo verze. Porovnávejte ji na **rovnost**, nepokoušejte se ji řadit ani vyhodnocovat jako semver.
- Při běhu z **lokálního dev serveru** je `undefined`. Kód proto musí tento případ ošetřit, jinak se v logu nebo telemetrii objeví prázdné hodnoty.
- Dostupná je **jen u extensions cílících na API verzi 2026-10**. Extensions na starších verzích se nemění a žádná akce se po nich nevyžaduje.

Důvod změny je praktický: POS umí cachovat bundly extensions a spouštět je offline, takže na různých zařízeních může běžet různý published build. Nová vlastnost umožňuje zjistit, který build je to na konkrétním zařízení.

Changelog neobsahuje kódový příklad. Ilustračně by použití vypadalo zhruba takto:

```ts
// Ilustrační příklad, v changelogu není
const version = shopify.extension.version ?? 'local-dev';
reportError(error, { extensionVersion: version });
```

**Typické využití (naše doporučení, ne tvrzení z changelogu):**

- přidání verze do error reportingu (Sentry nebo jiný log aggregator), aby bylo jasné, který build chybu vyrobil,
- dohledání, zda zařízení z hlášení od obchodníka už běží na verzi s opravou,
- označení událostí verzí při sledování A/B testů nebo postupného rolloutu feature flagů.

## Časová osa

- **1. 10. 2026** — API verze 2026-10 je stabilní (viz release notes 2026-10).
- **12. 10. 2026** — changelog zveřejněn, označen jako nová funkce, bez nutné akce.
- **Extensions na 2026-07 a starších** — beze změny, vlastnost `shopify.extension.version` v nich dostupná není.
- **Od povýšení na `api_version = "2026-10"`** — vlastnost je k dispozici v dané extension.

## Dopad pro nás

**Pro vývojáře:** Žádná akce není vynucená. Pokud máme nebo budeme mít POS UI extension, stojí za to při povýšení na 2026-10 přidat `shopify.extension.version` do metadat chybových hlášek a logů a v lokálním vývoji počítat s hodnotou `undefined`. Název verze při `shopify app deploy` je dobré nastavovat tak, aby byl srozumitelný člověku (například datum nebo identifikátor releasu), protože právě tento řetězec uvidíme v logu a nepůjde z něj odvodit pořadí. Díky offline cachování POS je užitečné verzi logovat opakovaně, nejen při startu, protože zařízení může po nějakou dobu běžet na starším bundlu.

**Pro PM / PO:** Jde o malé, ale praktické zlepšení podpory. Při reportu od obchodníka půjde rychleji ověřit, jestli na jeho zařízení už běží verze s opravou, a není nutné hádat podle času nasazení. Doporučujeme zahrnout hodnotu verze do šablony hlášení incidentu u projektů s POS. Změna nepřináší riziko, protože se uplatní jen u extensions, které se samy povýší na API verzi 2026-10.

## Použití v Integrátoru

**Možná dotčeno** — vlastní POS UI extensions aktuálně nevyvíjíme, ale u budoucích retailových zakázek je vhodné `shopify.extension.version` rovnou zapojit do error reportingu a podpory, abychom uměli párovat hlášené problémy s konkrétním published buildem.
