---
date: 2026-07-06
title: "Nové App Store požadavky 1.3 — čestné a transparentní recenzní praktiky"
title_en: "Updated App Store Requirements: 1.3 Always Use Honest and Transparent Review Practices"
slug: app-store-req-1-3-honest-review-practices
zdroj: https://shopify.dev/changelog/updated-app-store-requirements-13-always-use-honest-and-transparent-review-practices
shrnuto_dne: 2026-07-07
kategorie: [deprecation, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud máme klienta s vlastní Shopify app, musí compliance s 1.3 policy zajistit."
dotcene_klienty: []
souvisejici: ["sidekick-app-extensions-app-store-requirements", "app-listing-image-standards", "new-app-submission-experience-partner-dashboard"]
tldr: "Shopify zpřísnil vymáhání pravidla 1.3 o čestných recenzích v App Store — zakázáno je jakékoli motivování uživatelů k psaní recenzí, přesvědčivý jazyk nad rámec neutrální žádosti i zveřejňování falešných hodnocení. Porušení může vést k odstranění recenzí, democi aplikace nebo ukončení partnerského účtu."
tagy: [app-store, requirements, reviews, compliance, developer]
zdroj_kanal: dev-changelog

kontext:
  background: |
    Shopify aktualizovalo sekci 1.3 svých App Store Requirements, která pokrývá čestné a transparentní recenzní praktiky. Tato sekce vychází z Partner Program Agreement, konkrétně ze sekce C.2.1 týkající se falešných a motivovaných recenzí. Hlavní novinkou je zpřísněné vymáhání existujících pravidel a rozšíření výčtu zakázaných praktik, které mohou ovlivnit hodnocení aplikací v App Store.

    Zakázány jsou nyní explicitně následující aktivity: nabízení jakýchkoli incentiv (v rámci aplikace i mimo ni) výměnou za recenzi, soliciting recenzí pomocí přesvědčivého nebo manipulativního jazyka nad rámec neutrální žádosti, a publikování falešných nebo nedůvěryhodných recenzí. Shopify také upravilo svůj filtrovací algoritmus, který automaticky odstraňuje recenze nesplňující standardy důvěryhodnosti, přičemž tyto recenze jsou automaticky obnoveny, jakmile standardy splní.

    Následky za porušení pravidla 1.3 jsou výrazně přísnější než dříve: Shopify může odstranit dotčené recenze, demotovat nebo odstranit aplikaci z App Store, případně ukončit celý partnerský účet vývojáře. Vývojáři jsou vyzváni, aby využívali Reviews API pro sběr autentických recenzí přímo od uživatelů a recenze vyžadovali pouze neutrálním jazykem bez jakýchkoli slibů nebo odměn.

    Pravidlo se vztahuje na všechny aplikace publikované v Shopify App Store bez výjimky. Pro Magexo je toto relevantní zejména v případech, kdy pro klienty vyvíjíme nebo spravujeme Shopify aplikace určené k publikaci v App Store — v takovém případě musí klient i my zajistit, že sběr recenzí a komunikace se zákazníky odpovídá pravidlům 1.3.

  zdroje:
    - title: "Shopify Changelog: Updated App Store Requirements 1.3"
      url: "https://shopify.dev/changelog/updated-app-store-requirements-13-always-use-honest-and-transparent-review-practices"
    - title: "Shopify Dev Docs: App Store Requirements"
      url: "https://shopify.dev/docs/apps/launch/app-store/app-store-requirements"
  generated_at: 2026-07-07T10:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zpřesnilo a zpřísnilo vymáhání pravidla **1.3 — Always Use Honest and Transparent Review Practices** v rámci App Store Requirements. Toto pravidlo existovalo dříve jako součást Partner Program Agreement (sekce C.2.1), nyní je ale explicitně rozvedeno a aktivně vymáháno s jasně definovanými sankcemi.

Zakázané praktiky zahrnují:

- **Incentivizaci recenzí** — jakékoli odměny, slevy nebo výhody nabízené výměnou za napsání recenze (a to jak v aplikaci, tak mimo ni)
- **Manipulativní jazyk** — přesvědčivé formulace při žádosti o recenzi, které přesahují neutrální request
- **Falešné recenze** — publikování nebo facilitování nedůvěryhodných hodnocení

Shopify navíc upravilo algoritmus pro filtrování recenzí: recenze nesplňující standardy důvěryhodnosti jsou automaticky skryty a obnoveny teprve po splnění podmínek.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-06 | Aktualizace App Store Requirements 1.3 — okamžitá platnost |
| Průběžně | Automatické filtrování recenzí probíhá kontinuálně |

Pravidlo platí okamžitě od 6. července 2026 pro všechny aplikace v App Store.

## Dopad pro nás

Magexo vlastní publikované Shopify aplikace neprovozuje, takže přímý dopad je nízký. Relevantní je v situaci, kdy vyvíjíme nebo spravujeme Shopify aplikaci pro klienta, která je nebo bude publikována v App Store.

V takovém případě je nutné:

1. Zkontrolovat, zda aplikace neobsahuje in-app prompty s pobídkami k hodnocení (např. slevové kupóny za recenzi)
2. Ověřit formulace při žádosti o review — texty musí být neutrální, bez nátlaku nebo přesvědčivého jazyka
3. Využívat Shopify Reviews API jako preferovaný kanál pro sběr autentických recenzí
4. Informovat klienta o rizicích porušení (demotion/delisting aplikace, ukončení partner účtu)

## Použití v Integrátoru

Pokud Integrátor v budoucnu obsahuje modul pro správu nebo monitoring Shopify aplikací klientů, měl by zahrnovat checklist compliance kontroly zahrnující i pravidlo 1.3. Pro nyní není přímá integrace v Integrátoru potřeba — jde o procesní/compliance pravidlo, nikoli technickou API změnu.
