---
date: 2026-06-17
title: "Nové App Store requirements pro Sidekick app extensions"
title_en: "New App Store requirements for Sidekick app extensions"
slug: sidekick-app-extensions-app-store-requirements
zdroj: https://shopify.dev/changelog/sidekick-app-extensions-app-store-requirements
shrnuto_dne: 2026-06-18
kategorie: [deprecation, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom v budoucnu vyvíjeli Sidekick extension pro partnera, musíme zajistit soulad App Store listingu s faktickým chováním extension a vyloučit jakýkoliv propagační obsah."
dotcene_klienty: []
souvisejici: ["sidekick-app-extensions-third-party", "editions-spring-2026-sidekick", "sidekick-everywhere-mobile-watch"]
tldr: "Shopify přidalo dvě nová povinná pravidla (2.2.8 a 2.2.9) pro Sidekick app extensions: extension musí odpovídat funkčnímu zaměření aplikace a nesmí obsahovat propagační nebo reklamní obsah."
tagy: [sidekick, app-store, extensions, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Sidekick je AI asistent Shopify integrovaný přímo do administrace obchodu. Třetí strany mohou svým aplikacím přidávat tzv. Sidekick app extensions — nástroje a akce, které Sidekick nabízí merchantům v kontextu jejich obchodu. Tato oblast se rychle rozrůstá, zejména po Editions Spring 2026.

    S rostoucím počtem Sidekick extensions začalo Shopify zpřísňovat pravidla jejich kvality. Do stávajícího App Store review procesu přibyly dvě nové požadavky (requirements 2.2.8 a 2.2.9) platné od 17. června 2026, které se zaměřují na konzistenci a čistotu chování extension.

    Requirement 2.2.8 vyžaduje funkční soulad: TOML konfigurace extension, veřejný App Store listing a skutečné runtime chování musí být navzájem konzistentní — nástroje a akce vystavené Sidekicku musí logicky reprezentovat core funkcionalitu aplikace. Requirement 2.2.9 zakazuje jakýkoliv propagační obsah: extension nesmí zobrazovat reklamy, cross-sell jiné služby ani žádat o hodnocení aplikace. Obě pravidla jsou účinná okamžitě, bez přechodného období.

  zdroje:
    - title: "Shopify: New App Store requirements for Sidekick app extensions"
      url: "https://shopify.dev/changelog/sidekick-app-extensions-app-store-requirements"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify zavedlo dvě nová povinná pravidla pro všechny Sidekick app extensions v App Store:

**Requirement 2.2.8 — Functional Alignment**
Extension configuration (TOML), veřejný App Store listing a skutečné runtime chování musí být navzájem materiálně konzistentní. Nástroje a akce vystavené Sidekicku musí logicky reprezentovat core funkcionalitu aplikace. Nelze například v listingu popisovat extension jako nástroj pro správu produktů a ve skutečnosti nabízet akce zcela nesouvisející s tímto zaměřením.

**Requirement 2.2.9 — No Promotional Content**
Sidekick extensions nesmí obsahovat žádné propagační prvky: zakázány jsou reklamy, cross-sell jiných služeb i výzvy k hodnocení aplikace. Extension slouží výhradně jako funkční asistent merchantovi, nikoliv jako marketingový kanál.

Obě pravidla platí od **17. června 2026** bez přechodného období.

## Časová osa

| Datum | Událost |
|---|---|
| 17. 6. 2026 | Nové requirements 2.2.8 a 2.2.9 vstupují v platnost |
| Průběžně | App Store review bude nová pravidla uplatňovat na nové i aktualizované extensions |

Shopify explicitně neuvádí lhůtu pro úpravu stávajících extensions, ale absence přechodného období naznačuje, že existující extensions by měly být prověřeny co nejdříve.

## Dopad pro nás

Přímý dopad nastane pouze v případě, že vyvíjíme nebo plánujeme vyvíjet Sidekick app extension pro vlastní nebo klientskou aplikaci. V takovém případě je nutné:

1. **Auditovat TOML konfiguraci** extension a ujistit se, že deklarované nástroje odpovídají skutečnému chování.
2. **Zkontrolovat App Store listing** — popis funkcí extension musí být konzistentní s tím, co extension skutečně dělá v runtime.
3. **Odstranit propagační prvky** — žádné cross-sell bannery, výzvy k recenzi ani reklama na příbuzné aplikace.

Pro čistě integrátorské projekty bez vlastní Sidekick extension je dopad nyní nulový.

## Použití v Integrátoru

V současné době Integrátor vlastní Sidekick extension neobsahuje. Pravidla jsou ale relevantní jako referenční standard pro případ, že by Integrátor v budoucnu Sidekick extension získal nebo vyvíjel. Zejména requirement 2.2.8 (funkční soulad) je důležitý při návrhu — rozsah extension musí přesně odpovídat dokumentovanému zaměření aplikace, aby extension prošla App Store review bez komplikací.
