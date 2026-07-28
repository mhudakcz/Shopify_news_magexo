---
date: 2026-07-27
title: "Shopify POS: cart sharing — přesun košíku mezi zařízeními a staff"
title_en: "Cart sharing on Shopify POS"
slug: cart-sharing-shopify-pos
zdroj: https://changelog.shopify.com/posts/cart-sharing-on-shopify-pos
shrnuto_dne: 2026-07-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "POS-specific UI feature bez dopadu na naši integraci, ale relevantní při konzultacích o retail workflow a POS nasazení u klientů s kamennými prodejnami."
dotcene_klienty: []
souvisejici: [pos-v11-rebuild-deep-dive, staff-attribution-pos-improvements, unified-pos-staff-management]
tldr: "POS Pro nyní umožňuje zaměstnancům stavět košíky a přepínat mezi nimi napříč zařízeními — košíky se ukládají automaticky, takže je může dokončit i jiný člen týmu na jiném zařízení."
tagy: [pos, cart, retail, staff, multi-device, workflow]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS (Point of Sale) je nativní aplikace pro fyzický retail, kterou zaměstnanci obsluhy používají na tabletech a telefonech k budování košíku a zpracování prodeje přímo na prodejně. Dosud byl košík typicky vázaný na jedno zařízení a jednoho zaměstnance — pokud prodej přebral kolega nebo se zákazník přesunul od poradenského pultu k pokladně, obsluha musela košík znovu sestavovat od nuly.

    Cart sharing tuto vazbu ruší. Zaměstnanec může rozestavěný košík uložit a kterýkoli jiný člen týmu jej otevře na libovolném jiném zařízení a dokončí prodej. Košíky se ukládají automaticky, bez ručního kroku, a nová dedikovaná cart view přehledně organizuje otevřené košíky — ve výchozím stavu filtrované na aktuálně přihlášeného zaměstnance, s možností zobrazit i košíky kolegů. Převod košíku na draft order je jedna akce.

    Typický scénář je floor-to-register workflow: prodejní poradce sestaví košík se zákazníkem u produktu na mobilním zařízení, předá jej dál, a jiný zaměstnanec košík dokončí a zpracuje platbu na pokladně. Užitečné je to i při dlouhých konzultačních prodejích (nábytek, elektronika, luxusní zboží) nebo při směnových rotacích, kdy prodej nestihne dokončit ten, kdo jej začal. Funkce je součástí POS v11.11 a je dostupná pro všechny POS Pro merchanty.
  zdroje:
    - title: "Shopify: Cart sharing on Shopify POS"
      url: "https://changelog.shopify.com/posts/cart-sharing-on-shopify-pos"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify POS (verze 11.11) přidává **cart sharing** — sdílení košíku napříč zařízeními a zaměstnanci. Staff může stavět košíky a rychle mezi nimi přepínat; jakýkoli člen týmu je může převzít a dokončit prodej na jiném zařízení. Košíky se ukládají automaticky, takže při předání práce nedochází ke ztrátě rozestavěného nákupu.

Nová dedikovaná cart view organizuje otevřené košíky do přehledného seznamu — ve výchozím zobrazení jen ty vlastní, s možností filtrovat i košíky ostatních. Konverze košíku na draft order zůstává jedna akce. Funkce cílí na floor-to-register scénáře, směnové rotace a customer handoff, kde dosud musel zaměstnanec košík sestavovat znovu od začátku.

Funkce je dostupná pro všechny **POS Pro** merchanty, žádná další konfigurace ani doplněk se nevyžaduje.

## Časová osa

- **27. 7. 2026** — cart sharing dostupný pro všechny POS Pro merchanty v POS v11.11

## Dopad pro nás

**Pro vývojáře:** Jde o čistě POS-side UI/UX funkci bez dopadu na API či datový model objednávek — draft order z sdíleného košíku vzniká stejným způsobem jako dosud, žádná nová pole ani webhooky se nemění.

**Pro PM / PO:** Relevantní téma pro konzultace s retail klienty, kteří provozují kamenné prodejny s víc zaměstnanci na směně nebo řeší dlouhé konzultační prodeje (nábytek, elektro, showroomy) — stojí za zmínku jako argument pro upgrade na POS Pro.

## Použití v Integrátoru

Nepoužíváme — jde o POS-specific UI feature bez vazby na naši integrační logiku či synchronizaci dat.
