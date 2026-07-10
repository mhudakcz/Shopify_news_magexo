---
date: 2026-07-08
title: "Bezpečnostní update Shopify Mobile Android — vyžaduje Android 11+"
title_en: "Security update Shopify Mobile App on Android"
slug: shopify-mobile-android-security-update
zdroj: https://changelog.shopify.com/posts/security-update-shopify-mobile-app-ios-android
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-08
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchanti spravující obchod z mobilu (Shopify app na Androidu) mohou po updatu narazit na nekompatibilitu se starším zařízením."
dotcene_klienty: []
souvisejici: [sidekick-everywhere-mobile-watch, online-store-editor-sidekick-mobile, expiring-offline-tokens-required]
tldr: "Shopify mobilní aplikace pro Android nově vyžaduje Android 11 nebo novější; starší zařízení aplikaci ztratí a musí přejít na správu obchodu přes mobilní prohlížeč."
tagy: [mobile, android, security, ios, update]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Mobile App je oficiální aplikace, přes kterou merchanti spravují svůj obchod z telefonu nebo tabletu — sledují objednávky, upravují produkty, komunikují se zákazníky a mají přehled o tržbách bez nutnosti otevírat plnou admin konzoli v prohlížeči.
    Shopify nasadil bezpečnostní update aplikace pro Android, který zároveň zvyšuje minimální požadovanou verzi operačního systému na Android 11. Zařízení s Androidem 10 a staršími už novou verzi aplikace nenainstalují ani nespustí. Update se týká pouze Android verze aplikace, iOS a POS systémy zůstávají beze změny.
    Pro merchanty, kterým zařízení nevyhovuje novým nárokům, zůstává plná funkčnost admin rozhraní zachována přes mobilní prohlížeč na admin.shopify.com — jde tedy o omezení nativní aplikace, ne o ztrátu přístupu ke správě obchodu jako takové.
  zdroje:
    - title: "Shopify: Security update Shopify Mobile App on Android"
      url: "https://changelog.shopify.com/posts/security-update-shopify-mobile-app-ios-android"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify vydal bezpečnostní update mobilní aplikace Shopify pro Android. Součástí updatu je zvýšení minimálních systémových požadavků na **Android 11 a novější** — na zařízeních se staršími verzemi (Android 10 a nižší) aplikaci nově nepůjde aktualizovat ani spustit.

Shopify k tomu uvádí, že jde o bezpečnostní opatření a že **všichni uživatelé musí aktualizovat na nejnovější verzi aplikace**. Změna se týká výhradně Android verze mobilní aplikace — iOS aplikace, POS systémy ani webová admin konzole nejsou tímto updatem dotčeny.

Merchanti, kteří na starším Android zařízení novou verzi aplikace nedostanou, mohou dál plně spravovat svůj obchod přes **admin.shopify.com v mobilním prohlížeči** — funkčnost správy obchodu tedy zůstává dostupná, jen bez nativní aplikace.

## Časová osa

- **8. 7. 2026** — Shopify zveřejnil bezpečnostní update Shopify Mobile App pro Android a nové minimum Android 11+.
- **Průběžně** — merchanti na zařízeních s Androidem 10 a staršími přestávají dostávat aktualizace aplikace a měli by přejít na admin.shopify.com v prohlížeči, nebo zvážit upgrade zařízení.

## Dopad pro nás

**Pro vývojáře:** Přímý dopad na kód integrace není žádný — jde o nativní mobilní aplikaci Shopify, ne o API, webhook ani Admin/Storefront rozhraní. Nic v Integrátoru se kvůli tomuto updatu měnit nemusí.

**Pro PM / PO:** Stojí za to o změně vědět při komunikaci s merchanty, kteří spravují obchod z mobilu — pokud si stěžují, že jim aplikace na Androidu přestala fungovat nebo nejde aktualizovat, důvod je právě tento (zastaralý Android). Řešení je buď upgrade OS/zařízení, nebo dočasně správa obchodu přes mobilní prohlížeč.

## Použití v Integrátoru

Update se netýká žádné funkcionality Integrátoru ani API, na kterých stavíme — jde čistě o klientskou mobilní aplikaci Shopify pro merchanty. Relevantní je jen jako informace pro support/PM při řešení dotazů merchantů.
