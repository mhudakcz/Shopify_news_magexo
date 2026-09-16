---
date: 2026-09-15
title: "Nový vzhled Shopify adminu — barvy, typografie, Sidekick jako floating chat"
title_en: "A new look for the Shopify admin"
slug: shopify-admin-new-look-2026
zdroj: https://changelog.shopify.com/posts/see-the-shopify-admin-s-new-look
shrnuto_dne: 2026-09-15
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-15
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o vizuální redesign nativního adminu bez API dopadu, ale mění layout admin navigace a pozici Sidekicka, což může ovlivnit screenshoty a UI kolem admin extensions."
dotcene_klienty: []
souvisejici: [app-intents-admin-full-page-navigation, sidekick-everywhere-mobile-watch, polaris-cdn-1-1-release-candidate]
tldr: "Shopify spouští postupný rollout nového vzhledu adminu — nové barvy a typografii, side navigaci se search/notifications a Sidekicka jako floating chat dostupný odkudkoliv."
tagy: [admin, redesign, ui, sidekick, navigation, polaris]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify spouští postupný rollout nového vzhledu admin rozhraní. Redesign se dotýká vizuální vrstvy napříč celým adminem: nové barvy, typografie, spacing a ikony, to vše uvnitř nového rámce stránky. Nejde o kosmetickou úpravu jednotlivých komponent, ale o změnu vizuálního jazyka celého produktu, se kterým merchanti i vývojáři pracují každý den.

    Druhou částí redesignu je reorganizace navigace. Search, notifikace a přepínač obchodu (store picker), které dosud žily odděleně, se přesouvají do postranní (side) navigace, jež navíc nově umí kolabovat — merchant si tak může uvolnit více místa pro obsah stránky, když vyhledávání ani notifikace zrovna nepotřebuje.

    Třetí a nejviditelnější změnou je Sidekick. Shopify AI asistent dosud fungoval jako postranní panel fixně ukotvený vedle obsahu stránky. Nově se přesouvá do plovoucího chatu (floating chat) ukotveného v dolní části stránky, dostupného odkudkoliv v adminu bez nutnosti otevírat vyhrazenou sekci. Rollout probíhá postupně a automaticky, bez nutnosti jakékoli akce ze strany merchanta — nejde o volbu opt-in vs. opt-out, nový vzhled se objevuje account po accountu a Shopify k tomu doplnil vysvětlující materiály v Help Center.
  zdroje:
    - title: "Shopify: A new look for the Shopify admin"
      url: "https://changelog.shopify.com/posts/see-the-shopify-admin-s-new-look"
  generated_at: 2026-09-15T12:00:00Z
  model: claude-sonnet-5
---
## Co se mění

Shopify redesignuje vizuální vrstvu adminu — nové barvy, typografii, spacing a ikony napříč všemi stránkami, zasazené do nového rámce. Search, notifikace a store picker se stěhují z horní lišty do postranní navigace, která se nově dá kolabovat a uvolnit tak víc místa pro obsah. Sidekick opouští pozici fixního side panelu a stává se plovoucím chatem ukotveným dole na stránce, dostupným z libovolného místa v adminu bez přepínání sekcí.

Rollout je postupný a automatický — merchant nemusí nic zapínat ani vypínat, nový vzhled prostě jednoho dne dorazí k jeho accountu. Shopify k redesignu vydal doplňující materiály v Help Center pro merchanty, kteří chtějí vědět víc o tom, co konkrétně se změnilo a proč.

## Časová osa

- 2026-09-15 — Shopify publikuje changelog a spouští postupný rollout nového vzhledu adminu; bez opt-in/opt-out, bez nutné akce merchanta

## Dopad pro nás

**Pro vývojáře:** Redesign je čistě first-party vizuální vrstva Shopify adminu bez vlastního API — nejde o breaking change v žádném admin ani checkout extension bodu. Reálný dopad je hlavně v tom, že screenshoty a nahrávky v interní dokumentaci, onboardingu klientů a training materiálech postupně zastarají, jakmile redesign dorazí k danému accountu. Pokud stavíme admin UI extensions nebo app home na Polaris komponentách, stojí za to ověřit layout v novém rámci stránky — hlavně kolem search/notifications, které se přesouvají do side navigace, a kolem Sidekicka, který teď žije jako floating chat a teoreticky se může vizuálně překrývat s vlastním UI na okraji stránky.

**Pro PM / PO:** Až redesign dorazí ke konkrétnímu klientovi, může přijít dotaz typu "proč to najednou vypadá jinak" — stojí za to mít po ruce krátkou odpověď, že jde o plánovaný Shopify rollout, ne o chybu nebo naši úpravu. Doporučuji postupně zkontrolovat a případně přegenerovat screenshoty v aktuálních onboarding a training materiálech, jakmile bude jasné, že daný obchod redesign už dostal.

## Použití v Integrátoru

Přímý dopad na Integrátor nemáme, protože jde o vizuální redesign nativního adminu bez API změny. Stojí za sledování, pokud bychom v budoucnu stavěli UI navázané na aktuální podobu admin navigace nebo Sidekicka.
