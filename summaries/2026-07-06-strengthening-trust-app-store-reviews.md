---
date: 2026-07-06
title: "Posílení důvěry v App Store reviews — enforcement proti nedůvěryhodným recenzím"
title_en: "Strengthening trust in App Store reviews"
slug: strengthening-trust-app-store-reviews
zdroj: https://shopify.dev/changelog/strengthening-trust-in-app-store-reviews
shrnuto_dne: 2026-07-28
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta vyvíjíme nebo spravujeme veřejnou App Store aplikaci, může se jí enforcement dotknout přímo."
dotcene_klienty: []
souvisejici: [app-store-req-1-3-honest-review-practices, partner-identity-verification, new-app-submission-experience-partner-dashboard]
tldr: "Shopify zavedlo dvě nová opatření proti nedůvěryhodným recenzím v App Store: samostatný zákaz incentivizace recenzí a rozšířenou detekci neautentických hodnocení, jejichž postupné odstraňování probíhá v následujících týdnech."
tagy: [app-store, reviews, trust, enforcement, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    App Store review systém slouží merchantům jako hlavní signál důvěryhodnosti při výběru aplikace — vysoké hodnocení a počet recenzí často rozhoduje o tom, kterou aplikaci si obchodník nainstaluje. Pokud jsou recenze zmanipulované (ať už nákupem, incentivizací, nebo generováním přes bot účty), signál přestává být spolehlivý a znevýhodňuje vývojáře, kteří hrají podle pravidel.

    Tento changelog navazuje na dřívější aktualizaci pravidla 1.3 (Honest and Transparent Review Practices) z téhož dne a přidává k ní dvě konkrétní enforcement vrstvy: samostatnou politiku proti incentivizovaným recenzím (odemykání nebo podmiňování funkcí aplikace výměnou za recenzi) a rozšířené autenticity signály, kterými Shopify detekuje recenze nepocházející od reálných uživatelů. Shopify uvádí, že už identifikoval aplikace porušující tato pravidla a že u incentivizovaných recenzí bude odstraněna významná část recenzní báze dotčené aplikace, zatímco nedůvěryhodné recenze budou postupně unpublishovány v následujících týdnech.

    Prakticky jde o pokračování širšího trendu, kterým Shopify v posledních měsících zpřísňuje důvěryhodnost celého partnerského a App Store ekosystému — spolu s identity verification pro partnery a přísnějším review pravidlem 1.3 tvoří tři souběžné kroky směrem k tomu, aby merchant mohl důvěřovat tomu, co v App Store vidí a s kým spolupracuje.
  zdroje:
    - title: "Shopify: Strengthening trust in App Store reviews"
      url: "https://shopify.dev/changelog/strengthening-trust-in-app-store-reviews"
    - title: "Nové App Store požadavky 1.3 — čestné a transparentní recenzní praktiky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-store-req-1-3-honest-review-practices/"
    - title: "Identity verification pro Shopify Partners spuštěna"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/partner-identity-verification/"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zavádí dvě samostatná opatření na ochranu důvěryhodnosti App Store recenzí:

- **Review Incentivization Policy** — explicitní zákaz odemykání, podmiňování nebo jinak vázat funkce aplikace na to, že merchant napíše recenzi. Jde o oddělenou, přesněji formulovanou politiku vedle obecného pravidla 1.3.
- **Untrusted Review Detection** — rozšířené autenticity signály, kterými Shopify identifikuje a odstraňuje recenze, které nepocházejí od reálných, ověřitelných uživatelů (např. bot účty nebo koordinovaná aktivita).

Shopify uvádí, že už má identifikované aplikace porušující obě pravidla. U incentivizovaných recenzí hrozí odstranění významné části recenzní báze dané aplikace. U nedůvěryhodných recenzí bude jejich unpublishing probíhat postupně v následujících týdnech — Shopify zároveň upozorňuje, že i legitimní aplikace mohou v tomto procesu přijít o recenze, pokud jsou navázané na nedůvěryhodnou aktivitu (např. sdílené účty nebo review farmy).

Vývojářům Shopify doporučuje: používat Reviews API pro legitimní žádosti o recenzi, formulovat žádosti neutrálním jazykem ve správný moment (nikoli plošně nebo pod nátlakem), aktivně reagovat na negativní recenze místo jejich potlačování, a v případě sporného odstranění recenze kontaktovat Shopify Support.

## Časová osa

- **6. července 2026** — zveřejnění a okamžitá platnost obou opatření (incentivization policy + untrusted review detection)
- **Následující týdny** — postupné (gradual) unpublishing identifikovaných nedůvěryhodných recenzí
- Shopify již před spuštěním identifikoval aplikace porušující pravidla

## Dopad pro nás

**Pro vývojáře:** Pokud pro klienta spravujeme veřejnou App Store aplikaci, je potřeba zkontrolovat, zda in-app prompty pro recenze neobsahují jakoukoli formu odemykání funkcí nebo jiné odměny výměnou za hodnocení, a zda žádost o recenzi používá neutrální formulaci. Doporučené řešení je Reviews API namísto vlastních in-app promptů.

**Pro PM / PO:** Pokud klientská aplikace zaznamená v následujících týdnech pokles počtu recenzí bez zjevné příčiny, je vhodné ověřit, zda nejde o důsledek tohoto enforcementu (unpublishing nedůvěryhodných recenzí), a případně eskalovat na Shopify Support místo interní diagnostiky.

## Použití v Integrátoru

Přímá souvislost s naší integrací není — jde o procesní/compliance pravidlo Shopify App Store, nikoli o API změnu. Relevantní je jen tam, kde pro klienta vyvíjíme nebo spravujeme veřejně publikovanou App Store aplikaci.
