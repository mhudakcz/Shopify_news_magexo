---
date: 2026-06-29
title: "POS devices spravované přímo z admin — Devices view v POS channel"
title_en: "View and manage all your POS devices from Shopify admin"
slug: pos-devices-manage-from-admin
zdroj: https://changelog.shopify.com/posts/view-and-manage-all-your-pos-devices-from-shopify-admin
shrnuto_dne: 2026-06-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-29
pouzivame_v_integratoru: ne
dukaz_integratoru: "Jde o UI feature v Shopify admin, neposkytuje nové API ani data endpoint — integrátor není dotčen."
dotcene_klienty: []
souvisejici: ["pos-v11-rebuild-deep-dive", "unified-pos-staff-management", "staff-attribution-pos-improvements"]
tldr: "Shopify admin nově obsahuje Devices view v POS channel — centrální přehled všech POS zařízení s online/offline statusem, verzí aplikace a možností vzdáleného odhlášení."
tagy: [pos, device-management, admin, retail]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS je fyzický pokladní systém, který maloobchodní obchodníci provozují na tabletech, telefonech a mobilních zařízeních. Dosud neexistoval centrální přehled pro správu celého parku zařízení — každou provozovnu bylo třeba kontrolovat zvlášť nebo se spoléhat na externí MDM software.

    Nová Devices view je dostupná přímo v POS channel v Shopify admin. Zobrazuje všechna registrovaná zařízení s online/offline statusem, nainstalovanou verzí POS aplikace a časovým razítkem posledního připojení (last seen). Funkce pracuje pouze se zařízeními, která provozují POS verzi 11.9 nebo vyšší.

    Pro multi-location retail klienty jde o zásadní zjednodušení IT správy — místo per-location kontrol existuje jeden central view pro celý fleet tabletů, telefonů a čteček karet. Administrátor může vzdáleně odhlásit ztracené nebo odcizené zařízení a kompletně ho odebrat ze systému. Shopify nadále doporučuje MDM software pro správu verzí aplikací při větším počtu zařízení.
  zdroje:
    - title: "Shopify: View and manage all your POS devices from Shopify admin"
      url: "https://changelog.shopify.com/posts/view-and-manage-all-your-pos-devices-from-shopify-admin"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---
## Co se mění

Shopify přidal do POS channel v admin novou sekci **Devices**. Jde o centralizovaný přehled (dashboard) všech zařízení, která v daném obchodě provozují Shopify POS.

**Co Devices view zobrazuje:**
- Online/offline status každého zařízení v reálném čase
- Nainstalovanou verzi POS aplikace
- Datum a čas posledního připojení (last seen)

**Co Devices view umožňuje:**
- Vzdálené odhlášení zařízení (remote logout) — klíčové při ztrátě nebo krádeži
- Odebrání zařízení ze systému
- Správu oprávnění zaměstnanců pro práci se zařízeními

**Technická podmínka:** Devices view zobrazuje pouze zařízení s POS verzí 11.9 nebo vyšší.

Cesta v Shopify admin: **Sales channels → Point of Sale → Devices**.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-29 | Obecná dostupnost — Devices view live v POS channel |

## Dopad pro nás

Funkce je čistě adminové UI bez nového API nebo webhook triggeru. Pro naše klienty s fyzickými prodejnami (retail) to znamená:

- **Multi-location retaileři** — IT správa celého device parku bez nutnosti navštěvovat každou provozovnu nebo udržovat separátní MDM řešení pro základní monitoring.
- **Bezpečnostní incidenty** — Remote logout ztracených/odcizených zařízení lze provést okamžitě přímo z admin, bez fyzického přístupu k zařízení.
- **Verze aplikace** — Rychlá kontrola, zda všechna zařízení běží na aktuální verzi POS, usnadňuje troubleshooting a onboarding nových zařízení.

Dopad je nízký, protože jde o interní operační nástroj bez vlivu na zákaznické journey nebo obchodní procesy v integrátoru.

## Použití v Integrátoru

Devices view neposkytuje nové API endpointy ani webhooky — jde výhradně o UI nástroj v Shopify admin. Integrátor není dotčen a není potřeba žádná aktualizace logiky synchronizace.

Pokud by Shopify v budoucnu vystavil Device Management API (pro automatizovanou správu fleetů), bylo by relevantní ho zapojit do reporting nebo alerting pipelines pro retail klienty.
