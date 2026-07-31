---
date: 2026-07-27
title: "Quick nearby device login pro POS — přihlášení přes Bluetooth/QR z sousedního zařízení"
title_en: "Quick nearby device login"
slug: quick-nearby-device-login-pos
zdroj: https://changelog.shopify.com/posts/quick-nearby-device-login
shrnuto_dne: 2026-07-31
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "POS-specific UX funkce bez dopadu na API či datový model, ale relevantní při konzultacích o rychlém zprovoznění POS zařízení u retail klientů."
dotcene_klienty: []
souvisejici: [pos-devices-manage-from-admin, unified-pos-staff-management, cart-sharing-shopify-pos]
tldr: "Nové POS zařízení lze přihlásit přes Bluetooth nebo QR kód ze sousedního, již přihlášeného zařízení — bez ručního zadávání přihlašovacích údajů."
tagy: [pos, login, bluetooth, qr-code, ux, staff-onboarding, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Přidávání dalšího POS zařízení do prodejny — ať už kvůli nové pokladně, náhradě rozbitého tabletu, nebo posílení obsluhy o víkendu — dosud znamenalo, že zaměstnanec musel na novém zařízení ručně zadat přihlašovací údaje. To zabírá čas přesně ve chvílích, kdy je obchod potřebuje mít funkční co nejrychleji, typicky před otevřením nebo v návalu.

    Quick nearby device login tento krok zjednodušuje tím, že nové zařízení se může přihlásit přes již přihlášené zařízení nablízku. Primární cestou je Bluetooth — nové zařízení detekuje nablízku přihlášený POS, oprávněný zaměstnanec s rolí "POS Device Setup" schválí připojení a dokončí ho zadáním svého store manager PIN. Tam, kde Bluetooth není k dispozici nebo nefunguje spolehlivě, je alternativou naskenování QR kódu zobrazeného na již přihlášeném zařízení.

    Z bezpečnostních důvodů nové zařízení standardně zůstává přihlášené jen jeden den — po skončení akce nebo směny tak nezůstává aktivní přístup na zapůjčeném nebo dočasném hardwaru. Store manageři si ale mohou v nastavení POS channelu tuto dobu prodloužit, pokud dává smysl mít zařízení přihlášené trvale (např. fixní pokladna v prodejně). Zapnutí funkce, nastavení oprávnění a detaily konfigurace najdou merchanti v Shopify Help Center.
  zdroje:
    - title: "Shopify: Quick nearby device login"
      url: "https://changelog.shopify.com/posts/quick-nearby-device-login"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidává do POS **quick nearby device login** — rychlejší způsob, jak přihlásit nové zařízení do prodejny bez ručního zadávání přihlašovacích údajů. Místo toho stačí přiblížit nové zařízení k už přihlášenému:

- **Bluetooth** — nové zařízení detekuje nablízku přihlášený POS; zaměstnanec s rolí "POS Device Setup" schválí připojení a potvrdí ho svým store manager PIN.
- **QR kód** — alternativa tam, kde Bluetooth chybí nebo nefunguje spolehlivě; stačí naskenovat kód zobrazený na přihlášeném zařízení.

Nově přihlášené zařízení má standardně platnost přihlášení jen na jeden den, což omezuje riziko, že zůstane aktivní přístup na zařízení použitém jen dočasně (akce, brigáda, náhradní hardware). Store manageři mohou tuto dobu v nastavení POS channelu prodloužit, pokud je zařízení trvalou součástí prodejny.

## Časová osa

- **27. 7. 2026** — quick nearby device login oznámeno v Shopify merchant changelogu

## Dopad pro nás

**Pro vývojáře:** Jde o čistě POS-side onboarding flow bez dopadu na API, webhooky nebo datový model — nepřidává žádné nové GraphQL objekty ani pole, se kterými bychom pracovali v integraci.

**Pro PM / PO:** Užitečný argument v konzultacích s retail klienty s více pokladnami nebo sezónním navyšováním počtu zařízení (Vánoce, výprodeje, pop-up prodejny) — rychlejší onboarding nového hardwaru bez nutnosti mít po ruce heslo ke každému zařízení zvlášť.

## Použití v Integrátoru

Nepoužíváme — jde o POS onboarding funkci bez vazby na naši integrační logiku či synchronizaci dat.
