---
date: 2026-06-29
title: "App pixel activity log v Customer events — track data access changes přes apps"
title_en: "View data access changes with the new app pixel activity log"
slug: app-pixel-activity-log
zdroj: https://changelog.shopify.com/posts/view-data-access-changes-with-the-new-app-pixel-activity-log
shrnuto_dne: 2026-06-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme nebo doporučujeme klientům app pixels, tento log je klíčový podklad pro GDPR audit a security review."
dotcene_klienty: []
souvisejici: ["track-app-activity-permissions", "next-generation-events-preview", "customer-data-erasure-recent-orders"]
tldr: "Shopify přidal activity log pro app pixels v Customer events — merchant vidí historii všech změn data access ze strany apps od 3. června 2026."
tagy: [app-pixel, customer-events, security, transparency, gdpr]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    App pixels jsou JavaScript snippety, které nainstalované aplikace (např. Facebook Pixel, Google Analytics, sledovací nástroje) vkládají do Shopify storu prostřednictvím Customer Events API. Umožňují appkám zachytávat buyer data — kliknutí, zobrazení produktů, nákupy — přímo v browseru zákazníka. Přístup k těmto datům lze přepínat mezi dvěma režimy: "Always on" (data flow nepřerušen) a "Optimized" (Shopify automaticky pozastavuje data access na základě detekce vzorů, typicky pokud zákazník nevyjádřil souhlas s trackingem).

    Do teď neexistoval způsob, jak si merchant přehledně zobrazil, kdy a proč se data access pro konkrétní app pixel změnil. Shopify nyní zavedl activity log dostupný přímo z detail stránky každého app pixelu v sekci Settings > Customer events. Log zaznamenává každou změnu od 3. června 2026 — včetně toho, zda šlo o automatickou akci systému (Optimized mode) nebo manuální zásah merchantem.

    Praktický dopad je nejvýraznější u merchantů s větším počtem nainstalovaných tracking apps, kteří potřebují dokumentovat datové toky pro GDPR compliance nebo interní security audit. Log umožňuje filtrování podle data pomocí date pickeru, takže dohledání konkrétní události při auditu je přímočaré. Historie je dostupná od 3. června 2026, starší záznamy neexistují.

  zdroje:
    - title: "Shopify: View data access changes with the new app pixel activity log"
      url: "https://changelog.shopify.com/posts/view-data-access-changes-with-the-new-app-pixel-activity-log"
    - title: "Shopify Help: App pixels — View activity log"
      url: "https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels#view-activity-log"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify zavedl **activity log pro app pixels** v sekci Settings > Customer events. Pro každý nainstalovaný app pixel je nyní dostupná chronologická historie změn data access s těmito detaily:

- **Typ změny**: "Data access granted" nebo "Data access paused"
- **Timestamp** každé události
- **Původ změny**: automatická akce Shopify systému (Optimized mode) vs. manuální zásah merchantem
- **Date picker** pro filtrování záznamů podle konkrétního data nebo rozsahu

Historie začíná od **3. června 2026** — starší záznamy nejsou dostupné. Přístup k logu: Settings > Customer events > vybrat app pixel > menu ikona > View details.

## Časová osa

| Datum | Událost |
|-------|---------|
| 3. 6. 2026 | Shopify začal zaznamenávat změny data access (retroaktivně nedostupné) |
| 29. 6. 2026 | Activity log zpřístupněn všem merchantům s app pixels |

## Dopad pro nás

Změna je primárně merchant-facing a nevyžaduje žádné technické úpravy na straně integrací. Klíčové body:

- **GDPR compliance**: Merchant má k dispozici auditní stopu datových toků ze strany app pixels — kdo měl přístup k buyer datům a kdy se to změnilo. To je relevantní při dokumentaci zpracování osobních údajů vůči DPA nebo při zákaznických auditech.
- **Security review**: Při podezření na neoprávněný data access (např. po kompromitaci app nebo neočekávaném chování tracking skriptu) lze přesně dohledat, od kdy a jak se přístup změnil.
- **Optimized mode transparentnost**: Shopify v Optimized režimu automaticky přepíná data access na základě consent signálů. Log odhaluje, kdy a proč k tomu došlo — dosud to bylo pro merchanty nepřehledné.

## Použití v Integrátoru

Integrátor přímo s app pixel activity logem nepracuje — jde o UI funkci v Shopify admin. Pokud však klientům pomáháme s nastavením Customer Events, GDPR dokumentací nebo security audity, activity log je nový podklad, na který je vhodné upozornit. Relevantní zejména u klientů s větším počtem nainstalovaných marketing apps (Meta Pixel, Google Tag, Klaviyo apod.).
