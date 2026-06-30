---
date: 2026-06-26
title: "Carrier services nebudou automaticky přidávány do default shipping profile (2026-10)"
title_en: "Carrier services will no longer be automatically added to the default shipping profile"
slug: carrier-services-no-auto-shipping-profile
zdroj: https://shopify.dev/changelog/carrier-services-will-no-longer-be-automatically-added-to-the-default-shipping-profile
shrnuto_dne: 2026-06-30
kategorie: [breaking-change, deprecation]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor může vytvářet carrier services pro dopravní integraci; po změně je nutné explicitně přidat carrier rates do shipping profilů."
dotcene_klienty: []
souvisejici: ["shipping-options-setup-updates", "delivery-profiles-covers-all-items", "shipping-line-fulfillmentorderlineitem"]
tldr: "Od Admin API 2026-10 vytvoření carrier service automaticky nepřidá carrier-calculated rates do General shipping profile — apps musí rates přidat explicitně přes Shipping Profile API."
tagy: [carrier-service, shipping-profile, breaking, action-required, admin-api]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Carrier service je v Shopify mechanismus, který umožňuje třetím stranám (apps) dynamicky počítat přepravní sazby na základě obsahu košíku, adresy doručení a dalších parametrů. Po vytvoření carrier service přes GraphQL mutaci `carrierServiceCreate` nebo REST endpoint `POST /admin/api/{version}/carrier_services.json` byl carrier v minulosti automaticky zaregistrován do General (výchozí) shipping profile obchodu — konkrétně do všech způsobilých shipping zones.

    Toto automatické chování bylo navrženo pro zjednodušení onboardingu, ale způsobovalo problémy: rates se zobrazovaly zákazníkům bez ohledu na to, zda je obchodník skutečně nakonfiguroval, a apps nemohly kontrolovat, do kterých profilů a zón se carrier přidá. S příchodem API verze 2026-10 Shopify toto chování ruší a přenechává plnou kontrolu na developerech.

    Prakticky to znamená, že po vytvoření carrier service prostřednictvím API nebude žádná carrier-calculated rate automaticky viditelná v checkoutu. App nebo obchodník musí carrier rates explicitně přidat do požadovaného shipping profilu pomocí Shipping Profile API. Apps, které spoléhají na staré automatické chování a neaktualizují svůj installation flow, skončí ve stavu, kdy carrier service existuje, ale žádné rates se zákazníkům nezobrazují.

  zdroje:
    - title: "Shopify: Carrier services will no longer be automatically added to the default shipping profile"
      url: "https://shopify.dev/changelog/carrier-services-will-no-longer-be-automatically-added-to-the-default-shipping-profile"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Od **Admin API verze 2026-10** vytvoření carrier service přes `carrierServiceCreate` (GraphQL) nebo `POST /admin/api/{version}/carrier_services.json` (REST) **již automaticky nepřidá** carrier-calculated rates do General shipping profile obchodu.

Staré chování (automatické přidání do všech způsobilých shipping zones výchozího profilu) zůstane zachováno pouze pro API verze starší než 2026-10 až do jejich suncetu.

Po změně musí app explicitně použít Shipping Profile API a:
- buď provést programatické přidání carrier rates do konkrétního shipping profilu a shipping zones,
- nebo zobrazit obchodníkovi instrukce pro ruční konfiguraci v Shopify Admin (Settings > Shipping and delivery).

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-26 | Oznámení změny v dev-changelogu |
| **2026-10** (přibližně říjen 2026) | Nové chování aktivní pro API 2026-10 a novější |
| Sunset starých verzí | Automatické chování přestane fungovat úplně |

Staré API verze (2026-07 a dříve) zachovají původní automatické chování až do svého plánovaného suncetu.

## Dopad pro nás

Pokud Integrátor nebo jiná interní app vytváří carrier service jako součást instalačního flow (např. pro propojení dopravce třetí strany), je nutné tento flow aktualizovat tak, aby po vytvoření carrier service explicitně přidal rates do příslušného shipping profilu přes API.

Bez aktualizace bude carrier service sice vytvořena, ale žádné rates se zákazníkům v checkoutu nezobrazí — tichá chyba bez viditelného error stavu.

Doporučený postup:
1. Po `carrierServiceCreate` zavolat Shipping Profile API pro napojení rates na požadovaný profil a zones.
2. Alternativně přidat onboarding krok s instrukcí pro obchodníka (manuální konfigurace v Adminu).
3. Aktualizovat před migrací na API verzi 2026-10.

## Použití v Integrátoru

Integrátor může komunikovat se Shopify přes carrier service API při implementaci vlastní dopravní logiky (custom carriers, dopravní kalkulátory). Pokud taková integrace existuje nebo se plánuje, je potřeba ověřit, zda installation flow spoléhá na staré automatické přidání do shipping profile, a případně přidat explicitní krok přes Shipping Profile API. Priorita: střední — změna se projeví až s verzí 2026-10, ale preparation je vhodná předem.
