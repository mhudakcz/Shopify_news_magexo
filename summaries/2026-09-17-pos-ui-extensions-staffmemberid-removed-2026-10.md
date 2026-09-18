---
date: 2026-09-17
title: "POS UI Extensions 2026-10: session.currentSession.staffMemberId odstraněn (breaking)"
title_en: "Removed session.currentSession.staffMemberId from POS UI Extensions (2026-10)"
slug: pos-ui-extensions-staffmemberid-removed-2026-10
zdroj: https://shopify.dev/changelog/removed-session-currentsession-staffmemberid-from-pos-ui-extensions-2026-10
shrnuto_dne: 2026-09-18
kategorie: [breaking-change, deprecation]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-09-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud Integrátor obsahuje POS UI extension s vlastní logikou navázanou na staff identitu, čtení staffMemberId přestane fungovat pro API verzi 2026-10."
dotcene_klienty: []
souvisejici: [staff-attribution-pos-improvements, unified-pos-staff-management, pos-extensions-background-target]
tldr: "Shopify od API verze 2026-10 odstranil pole session.currentSession.staffMemberId z POS UI Extensions — vývojáři musí přejít na reaktivní session.staffMember.value?.id."
tagy: [pos-extensions, session, staff, breaking, action-required, "2026-10"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    POS UI Extensions Session API doposud nabízelo statické pole session.currentSession.staffMemberId, přes které mohla extension zjistit ID aktuálně přihlášeného zaměstnance na pokladně. Pole se ale nikdy automaticky needuplo — pokud se na dané pokladně zaměstnanec přepnul (např. při směně), extension o tom nevěděla, dokud nedošlo k novému čtení hodnoty nebo re-renderu.

    S API verzí 2026-10 Shopify toto statické pole úplně odstranil ve prospěch reaktivní alternativy. Nové doporučené API je session.staffMember.value?.id, což je reaktivní signál — extensiony postavené na Preact se při změně automaticky překreslí, případně lze na změny navázat explicitně přes session.staffMember.subscribe(). Zůstane tak zachována aktuální hodnota i po přepnutí zaměstnance uprostřed session, bez nutnosti ručního refreshe.

    Změna je breaking pouze pro extensiony cílené na API verzi 2026-10 a novější — starší verze API zůstávají beze změny a staffMemberId v nich dál funguje. Samostatné pole session.staffMemberId, dostupné pro receipt targety, tímto odstraněním dotčeno není a chová se stejně jako dřív. Účinnost změny je od 17. září 2026.
  zdroje:
    - title: "Shopify: Removed session.currentSession.staffMemberId from POS UI Extensions (2026-10)"
      url: "https://shopify.dev/changelog/removed-session-currentsession-staffmemberid-from-pos-ui-extensions-2026-10"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify v API verzi 2026-10 odstranil z POS UI Extensions Session API statické pole `session.currentSession.staffMemberId`. Extensiony, které toto pole dosud čtly, přestanou fungovat, pokud cílí na 2026-10 nebo novější verzi API.

Náhradou je reaktivní `session.staffMember.value?.id`. Jde o signál, na který lze navázat dvěma způsoby: extensiony postavené na Preact se při změně hodnoty (typicky při přepnutí zaměstnance na pokladně) automaticky překreslí samy, ostatní mohou explicitně naslouchat přes `session.staffMember.subscribe()`. Výhoda oproti původnímu statickému poli je, že hodnota se drží aktuální i v průběhu session — bez nutnosti ručně vyvolávat nové čtení.

Důležité je, že se mění pouze Session API pro POS UI Extensions. Pole `session.staffMemberId` dostupné pro receipt targety zůstává beze změny a tímto odstraněním není nijak dotčeno.

## Časová osa

- 17. 9. 2026 — changelog zveřejněn, pole odstraněno pro API verzi 2026-10, účinnost okamžitá
- Extensiony na starších API verzích (2026-07 a dřívější) nejsou touto změnou dotčeny a mohou dál používat původní statické pole

## Dopad pro nás

**Pro vývojáře:** Jde o breaking change vyžadující akci — pokud některá POS UI extension čte `session.currentSession.staffMemberId` a je (nebo bude) postavená na API verzi 2026-10, je nutné přejít na `session.staffMember.value?.id` a případně doplnit `session.staffMember.subscribe()` tam, kde se s hodnotou pracuje mimo Preact re-render cyklus. Bez úpravy dojde při upgradu na 2026-10 k runtime chybě nebo k tomu, že hodnota zůstane nedefinovaná.

**Pro PM / PO:** Dopad je omezený na klienty s vlastní POS UI extension, která pracuje se staff identitou (např. commission tracking, custom attribution logika navázaná na konkrétního zaměstnance). Pokud takovou extension žádný klient nemá, změna je bez dopadu. Doporučeno ověřit u klientů s vlastním POS setupem, zda plánují upgrade extensions na API 2026-10.

## Použití v Integrátoru

Pokud by Integrátor v budoucnu obsahoval POS UI extension s logikou vázanou na staff identitu, bude nutné při přechodu na API 2026-10 použít `session.staffMember.value?.id` místo odstraněného pole. Aktuálně netočíme žádnou POS extension závislou na tomto poli, ale je vhodné to hlídat u budoucích retailových zakázek.
