---
date: 2026-11-11
title: "⚠️ IP allowlists NYNÍ POVINNÉ i pro custom apps installed outside org (breaking)"
title_en: "IP allowlists are now required for custom apps installed outside your organization"
slug: ip-allowlists-required-custom-apps-outside-org
zdroj: https://shopify.dev/changelog/posts/ip-allowlists-are-now-required-for-custom-apps-installed-outside-your-organization
shrnuto_dne: 2026-11-16
kategorie: [nova-api, nova-prilezitost, breaking]
api_oblast: admin
nalehavost: kriticka
customer_facing: false
ucinnost_od: 2026-11-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se nás, pokud některá naše custom aplikace běží na obchodech mimo naši organizaci (typicky aplikace pro klienty); u aplikací jen v naší organizaci se nic nemění."
dotcene_klienty: []
souvisejici: [ip-allowlists-required-public-apps, ip-allowlist-admin-api-restriction, editions-fall-2026-developer, securing-your-app-together-shopify]
tldr: "IP allowlist je nově povinný i pro custom apps nainstalované na obchodech mimo vlastnící organizaci: od 20. listopadu 2026 pro nové instalace, od 1. ledna 2027 i pro stávající, jinak hrozí blokace instalací dalších aplikací."
tagy: [security, ip-allowlist, custom-apps, breaking, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v posledních týdnech systematicky zpřísňuje ochranu přístupu k Admin API. Dobrovolný IP allowlist v Dev Dashboardu se nejprve stal povinným pro public apps v App Store (5. listopadu) a nyní se pravidlo rozšiřuje i na custom aplikace nainstalované na obchodech mimo organizaci, která je vlastní. Jde typicky o aplikace, které agentura vytvořila jednou a nasazuje je u více obchodníků.

    Důvod je bezpečnostní. Uniklý token lze jinak použít z libovolné sítě na světě, kdežto allowlist omezuje, odkud smí Admin API volat jen známé servery aplikace. Dopad úniku přístupových údajů se tak výrazně snižuje.

    Změna se netýká aplikací instalovaných pouze v rámci vlastní organizace, aplikací vytvořených obchodníky v Dev Dashboardu nebo v adminu a public apps, které mají vlastní samostatný požadavek. Shopify nepopisuje jiné sankce než omezení instalací pro partnery s aplikací bez allowlistu.
  zdroje:
    - title: "Shopify: IP allowlists are now required for custom apps installed outside your organization"
      url: "https://shopify.dev/changelog/posts/ip-allowlists-are-now-required-for-custom-apps-installed-outside-your-organization"
    - title: "Shopify Docs: Restrict API access with an IP allowlist"
      url: "https://shopify.dev/docs/apps/build/dev-dashboard/ip-allowlist"
    - title: "Archiv: IP allowlists povinné pro public apps"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ip-allowlists-required-public-apps/"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

IP allowlist pro Admin API je povinný také pro custom aplikace, které jsou nainstalované na obchodech mimo organizaci, jež je vlastní. Vývojář musí pro každou takovou aplikaci nastavit, z jakých sítí smí volat Shopify. Pokud aplikace používá statické egress IP adresy, povolí se tyto adresy nebo jejich CIDR rozsah. Pokud jsou adresy dynamické, povolí se ASN hostingového poskytovatele a uvedou se země, ve kterých aplikace běží.

Výjimky: aplikace instalované jen v rámci vlastní organizace, aplikace vytvořené obchodníky v Dev Dashboardu nebo v adminu a public apps (ty mají samostatný požadavek).

## Časová osa

- 5. 11. 2026: povinný allowlist pro public apps.
- 11. 11. 2026: oznámeno rozšíření na custom apps mimo organizaci.
- 20. 11. 2026, 23:59 ET: aplikace bez allowlistu nelze nově instalovat.
- 1. 1. 2027, 23:59 ET: allowlist je nutný i pro stávající instalace. Jediná aplikace bez allowlistu může partnerovi zablokovat instalaci jakékoli aplikace na cizí obchody.

## Dopad pro nás

**Pro vývojáře:** Je potřeba projít všechny aplikace nainstalované mimo naši organizaci, zjistit jejich výstupní IP adresy nebo ASN hostingu a allowlist nastavit nejpozději do 20. listopadu pro nové instalace a do 1. ledna 2027 pro všechny. Před nasazením je vhodné ověřit nastavení proti reálnému provozu, aby se omylem nezablokovaly legitimní požadavky.

**Pro PM / PO:** Jde o kritickou změnu s krátkým termínem. Riziko je blokace nových instalací a od ledna 2027 i omezení instalací dalších aplikací u klientů. Doporučuji určit odpovědnou osobu, udělat inventuru custom aplikací u klientů a zařadit nastavení allowlistů do plánu před 20. listopadem. Pro obchodníky se nic viditelného nemění, jde o zvýšení bezpečnosti.

## Použití v Integrátoru

Pokud je naše synchronizační aplikace nasazena jako custom app na obchodech klientů mimo naši organizaci, musí mít nastavený allowlist svých serverových adres. U instalací uvnitř naší organizace se změna netýká.
