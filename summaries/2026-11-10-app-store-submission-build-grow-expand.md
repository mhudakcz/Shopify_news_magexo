---
date: 2026-11-10
title: "App Store submission requirements — přísnější pravidla pro listing dalších aplikací a odstranění apps bez instalací"
title_en: "Shopify App Store submission requirements: build, grow, then expand"
slug: app-store-submission-build-grow-expand
zdroj: https://shopify.dev/changelog/posts/shopify-app-store-submission-requirements-build-grow-then-expand
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se publikování aplikací do Shopify App Store; naše integrace běží jako custom apps, ale pravidla jsou relevantní, pokud bychom některou aplikaci chtěli listovat veřejně."
dotcene_klienty: []
souvisejici: [new-app-submission-experience-partner-dashboard, partner-identity-verification, app-quality-checks-partner-dashboard]
tldr: "Shopify zpřísnil pravidla App Store: pro listing další aplikace je potřeba 10 instalací u stávajících, delší cooldowny po zamítnutí, identity verification a automatické odstranění apps s nulou instalací po šesti měsících."
tagy: [app-store, submission, partners, developer-experience, lifecycle]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Store je hlavní distribuční kanál pro veřejné aplikace. Každá aplikace prochází review, při kterém tým Shopify ověřuje splnění číslovaných požadavků na funkčnost, bezpečnost a kvalitu listingu. Posledních měsíců Shopify postupně zvyšuje kvalitu katalogu, například novým submission workflow v Partner Dashboardu, konsolidací kontrol kvality a ověřováním identity partnerů.

    Nově zveřejněná změna navazuje na tento trend. Cílem je, aby v App Store zůstaly aplikace, které obchodníci skutečně používají. Titulek příspěvku mluví o postupu build, grow, expand, ale samotný text změnu popisuje jako čtyři konkrétní pravidla, nikoli jako tři samostatné fáze s odlišnými požadavky.

    Pravidla se týkají listingu dalších aplikací, opakovaného odesílání zamítnutých aplikací, nových submissions a existujících aplikací bez instalací. Aplikace, které splňují prahy instalací a jsou nainstalované alespoň na jednom obchodě s placeným plánem, změnou dotčeny nejsou.
  zdroje:
    - title: "Shopify: Shopify App Store submission requirements: build, grow, then expand"
      url: "https://shopify.dev/changelog/posts/shopify-app-store-submission-requirements-build-grow-then-expand"
    - title: "Shopify: App submission review guide, submission limits"
      url: "https://shopify.dev/docs/apps/launch/app-store-review/submit-app-for-review#submission-limits"
    - title: "Shopify: App usefulness check"
      url: "https://shopify.dev/docs/apps/launch/app-store-review/app-quality-checks#app-usefulness-check"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify aktualizoval pravidla pro submission a listing v App Store tak, aby v něm zůstávaly aplikace, které merchanti opravdu používají. Změna zahrnuje čtyři body.

- **Adopce před dalším listingem:** každá existující aplikace musí mít alespoň 10 instalací na obchodech s plným (placeným) plánem, než lze listovat další aplikaci.
- **Delší cooldowny po zamítnutí:** s každým opakovaným zamítnutím se prodlužuje čekací doba. Opětovné odeslání bez smysluplných úprav tak znamená delší pauzu; nejdřív je třeba zapracovat feedback z review.
- **Identity verification:** vývojáři odesílající nové aplikace musí projít ověřením identity, které lze dokončit v partnerském účtu ještě před submission.
- **Odstranění aplikací bez instalací:** aplikace s nulou instalací po šesti měsících jsou automaticky odstraněny z App Store.

Poznámka k titulku: příspěvek sice mluví o build, grow, expand, ale tělo nedefinuje tři fáze s různými požadavky. Popis tří fází z původního zadání se ze zdroje nepotvrdil.

## Časová osa
- 2026-11-10: zveřejnění changelogu, pravidla platí od tohoto dne (metadata příspěvku uvádějí účinnost k 2026-11-04).
- Před každým novým nebo opakovaným submission: ověřit adopční práh, identity verification a konec případného cooldownu.
- Průběžně: kontrola instalací u listovaných aplikací, aby nedošlo k odstranění po šesti měsících bez instalace.

## Dopad pro nás
**Pro vývojáře:** Pokud bychom publikovali aplikaci do App Store, je nutné předem projít identity verification a u každého dalšího listingu doložit 10 instalací u stávajících aplikací. Před resubmission po zamítnutí důkladně zapracovat feedback, jinak hrozí delší cooldown.

**Pro PM / PO:** Vstup do App Store je méně vhodný pro rychlé experimenty s více aplikacemi najednou. Je lepší plánovat jednu dobře adoptovanou aplikaci a teprve poté rozšiřovat portfolio. Listované aplikace bez instalací je třeba hlídat kvůli automatickému odstranění.

## Použití v Integrátoru
Zatím nepoužíváme, naše integrace běží jako custom apps mimo App Store. Pravidla by se nás týkala pouze při rozhodnutí o veřejném listingu.
