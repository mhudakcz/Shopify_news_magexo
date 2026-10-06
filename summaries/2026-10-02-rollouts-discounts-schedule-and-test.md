---
date: 2026-10-02
title: "Rollouts: scheduling + testing discounts spolu s theme/checkout změnami"
title_en: "Schedule and test discounts with Rollouts"
slug: rollouts-discounts-schedule-and-test
zdroj: https://changelog.shopify.com/posts/schedule-and-test-discounts-with-rollouts
shrnuto_dne: 2026-10-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-02
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde primárně o merchant-facing UI v adminu, ale pokud čteme stav nebo platnost slev přes Admin API, můžou existovat slevy řízené Rollouts, jejichž dostupnost neurčují jen startsAt a endsAt."
dotcene_klienty: []
souvisejici: [discounts-included-in-rollouts, rollouts-granular-controls-launches-tests, rollouts-schedule-ab-test-themes-checkout]
tldr: "V novém adminu lze slevy zahrnout do Rollouts: nabídku spustit nejdřív na části online store traffic, porovnat konverze proti stávajícím slevám a pak rozšířit, a to i v jednom rolloutu spolu se změnami theme a checkoutu."
tagy: [rollouts, discounts, scheduling, ab-testing, campaigns, launches]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Rollouts je nástroj v Shopify administraci (Markets › Rollouts), který obchodníkům umožňuje plánovat, postupně nasazovat a A/B testovat změny bez ručního přepínání v konkrétní čas. Začínal v březnu 2026 u změn storefront theme, v červnu 2026 se rozšířil o checkout a customer account konfigurace a v září 2026 dostal přepracovaný setup flow s multi-change podporou, intent-based timingem (launch, event, test) a conflict review přímo při konfiguraci.

    Slevy do této vrstvy dosud nepatřily. Jejich start a konec se řídil nativními daty startsAt a endsAt na samotné slevě, takže koordinovaná kampaň (nový theme, upravený checkout a k tomu nová sleva) znamenala několik oddělených kroků, které musel merchant sladit ručně. Tento merchant changelog z 2. října 2026 popisuje stejnou novinku jako vývojářský changelog z 1. října, jen z pohledu obchodníka: ve flow pro vytvoření rolloutu lze nově přidat i slevu.

    Podle changelogu lze novou nabídku spustit pro část návštěvnosti online store a po ověření ji rozšířit, otestovat změnu slevy proti stávajícím nabídkám a prohlédnout si výsledky konverzí a také naplánovat slevu společně se změnami theme a checkoutu v jednom rolloutu. Pravidla způsobilosti zákazníků u slev se nemění a samostatné plánování slevy přes start a end date funguje dál. Funkce je dostupná v novém adminu, k plánům nebo tierům changelog nic neuvádí, detaily jsou v nápovědě k Rollouts.
  zdroje:
    - title: "Shopify: Schedule and test discounts with Rollouts"
      url: "https://changelog.shopify.com/posts/schedule-and-test-discounts-with-rollouts"
    - title: "Shopify Help: Rollouts"
      url: "https://help.shopify.com/en/manual/markets/rollouts"
    - title: "Archiv: Discounts mohou být součástí Rollouts (plánované slevy, A/B test slev)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/discounts-included-in-rollouts/"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify rozšiřuje **Rollouts** o **slevy**. Merchant je nově může přidat do rolloutu stejně jako změny theme nebo checkoutu a získává tři věci:

- **Postupné spuštění nabídky** — novou slevu lze nasadit jen na část návštěvnosti online store a po ověření ji rozšířit na všechny
- **Test proti stávajícím nabídkám** — změnu slevy lze porovnat s tím, co už běží, a prohlédnout si výsledky konverzí
- **Koordinovaná kampaň** — slevu lze naplánovat spolu se změnami theme a checkoutu v jednom rolloutu, takže se spustí a skončí společně (typicky Black Friday: sleva + nový theme + checkout banner v jednom timed launch)

Co se nemění: pravidla způsobilosti zákazníků u slev zůstávají stejná a samostatné plánování slevy přes start a end date funguje dál. Rollout je tedy volitelná nadstavba, ne náhrada. Funkce je dostupná v novém adminu, nápověda je na stránce Rollouts v Shopify Help.

Jde o merchant-side pohled na novinku, kterou vývojářský changelog z 1. října popisuje z API strany (read-only connection `Discount.rollouts` a scope `read_rollouts` v Admin GraphQL API 2026-10). Pro vývojáře je proto důležitější navazující článek, tento popisuje spíš to, co uvidí a udělá obchodník.

## Časová osa

- **2026-03-31** — Rollouts spuštěn pro storefront/theme změny (scheduling + A/B testy)
- **2026-06-05** — Rollouts rozšířen o checkout a customer account konfigurace
- **2026-09-22** — přepracovaný setup flow (intent-based timing, multi-change, conflict review)
- **2026-10-01** — slevy lze zahrnout do Rollouts (vývojářský changelog, Admin GraphQL API 2026-10)
- **2026-10-02** — merchant changelog: schedule a test slev v Rollouts, kombinace s theme a checkout změnami

## Dopad pro nás

**Pro vývojáře:** Na straně merchant UI není co implementovat. Pokud ale aplikace nebo synchronizace čte slevy z Admin API a rozhoduje o jejich platnosti jen podle `status`, `startsAt` a `endsAt`, může být výsledek neúplný u slev řízených Rollouts, zejména při částečném traffic. Detaily (scope `read_rollouts`, connection `Discount.rollouts`, chování starších verzí API) jsou v souvisejícím článku o slevách v Rollouts, před implementací je vhodné ověřit upgrade guide.

**Pro PM / PO:** Reálná příležitost pro sezónní kampaně. Slevu už není nutné spouštět ručně o půlnoci zvlášť od změny theme a checkoutu, a lze ji navíc ověřit na části návštěvnosti, než se nasadí všem. Při konzultacích s merchanty stojí za to nabídnout tři scénáře: koordinovaný launch (Black Friday, Vánoce), test výše nebo typu slevy proti stávající nabídce a dočasnou akci s definovaným koncem. Je potřeba počítat s tím, že test na části traffic se týká online store, takže u obchodů s dalšími prodejními kanály se výsledky testu nedají automaticky přenést na celý prodej. Nalehavost je nízká, jde o nástroj navíc, ne o změnu, kterou by bylo nutné řešit hned.

## Použití v Integrátoru

**Možná** — samotná novinka je merchant-facing UI a nic v našem kódu nemění, ale pokud synchronizujeme stav nebo platnost slev přes Admin API, je u slev zahrnutých do Rollouts potřeba počítat i s jejich dostupností podle rolloutu, viz související článek o `Discount.rollouts`.
