---
date: 2026-11-18
title: "App Events: Admin UI extensions a embedded apps mohou posílat vlastní události"
title_en: "App Events — Send events from Admin UI extensions and embedded apps"
slug: app-events-admin-ui-extensions
zdroj: https://shopify.dev/changelog/posts/app-events-send-events-from-admin-ui-extensions-and-embedded-apps
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud u našich Admin UI extensions či embedded apps řešíme analytics/observability a dosud jsme ji posílali do vlastního backendu, teď můžeme publishovat App Events a mít to vidět nativně."
dotcene_klienty: []
souvisejici: []
tldr: "Admin UI extensions a embedded apps mohou nově posílat vlastní události (App Events) — základ pro pozorovatelnost aplikací přímo v Shopify prostředí."
tagy: [app-events, admin-extensions, embedded-apps, observability, events]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Admin UI extensions jsou malé komponenty zobrazené přímo v Shopify Adminu (například na detailu produktu nebo objednávky) a embedded apps jsou plnohodnotné aplikace běžící v Adminu v iframe. Dosud bylo sledování toho, co uživatelé v takových rozhraních skutečně dělají, na vývojářích: museli si postavit vlastní telemetrii a posílat data do vlastního backendu nebo analytického nástroje. Vlastní události, například „uživatel klikl na X" nebo „zdroj byl synchronizován", usnadňují debugging, měření využití funkcí i dohledávání chyb v produkci. Lze očekávat propojení s Dev Dashboardem a jeho monitoringem logů, přesné detaily je však nutné ověřit v dokumentaci.
  zdroje:
    - title: "Shopify: App Events — Send events from Admin UI extensions and embedded apps"
      url: "https://shopify.dev/changelog/posts/app-events-send-events-from-admin-ui-extensions-and-embedded-apps"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify zavádí mechanismus **App Events**. Admin UI extensions i embedded apps mohou nově odesílat vlastní události, například „uživatel klikl na X" nebo „zdroj byl synchronizován", do Shopify event busu. Aplikace tak získávají nativní cestu, jak dávat najevo, co se v jejich rozhraní v Adminu děje, bez nutnosti budovat vlastní sběr dat.

Cílem je lepší pozorovatelnost chování vlastních aplikací. Události mají být propojené se Shopify analytics a Dev Dashboardem. Přesné detaily (formát události, limity, způsob zobrazení) je třeba ověřit v dokumentaci, changelog je popisuje jen stručně.

## Dopad pro nás

**Pro vývojáře:** Doporučujeme přehodnotit, zda našim aplikacím nestačí nativní App Events místo vlastního telemetry pipeline. Pokud dnes posíláme události z Admin UI extensions či embedded apps do vlastního backendu, může se část této infrastruktury zjednodušit nebo úplně odpadnout. Před migrací je vhodné prověřit retenci dat, dostupné dotazy a případná omezení.

**Pro PM / PO:** Jednodušší debugging a lepší vhled do fungování našich aplikací v produkci. Snáze zjistíme, které funkce se skutečně používají a kde uživatelé narážejí na problémy, a to bez čekání na vlastní reporting.

Nejde o změnu s termínem ani riziko pro klienty, urgence je nízká.

## Použití v Integrátoru

Možná. Relevantní je to, pokud provozujeme vlastní Admin UI extension nebo embedded app. V takovém případě může nativní publikování událostí zjednodušit observabilitu a omezit potřebu vlastního řešení.
