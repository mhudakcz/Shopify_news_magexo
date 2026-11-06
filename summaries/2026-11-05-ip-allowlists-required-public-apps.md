---
date: 2026-11-05
title: "⚠️ IP allowlists NYNÍ POVINNÉ pro public apps v App Store (breaking)"
title_en: "IP allowlists are now required for public apps"
slug: ip-allowlists-required-public-apps
zdroj: https://shopify.dev/changelog/posts/ip-allowlists-are-now-required-for-public-apps
shrnuto_dne: 2026-11-06
kategorie: [nova-api, nova-prilezitost, breaking]
api_oblast: admin
nalehavost: kriticka
customer_facing: false
ucinnost_od: 2026-11-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se nás, pokud některá naše aplikace je veřejná (distribuovaná přes Shopify App Store) a volá Admin API; u custom aplikací a aplikací vytvořených v Dev Dashboardu nebo v adminu se nic nemění."
dotcene_klienty: []
souvisejici: [ip-allowlist-admin-api-restriction, securing-your-app-together-shopify, editions-fall-2026-developer, editions-fall-2026, expiring-offline-tokens-all-public-apps-2027]
tldr: "IP allowlist, dosud dobrovolný, je nově povinný pro všechny public apps: do 12. listopadu 2026 ho musí mít aplikace používající bulk operations, do 20. listopadu 2026 všechny ostatní, jinak jim hrozí selhání bulk operací, respektive vyřazení z App Store a zákaz nových instalací."
tagy: [security, ip-allowlist, public-apps, app-store, breaking, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Před týdnem, 27. října 2026, Shopify představil v Dev Dashboardu IP allowlist jako dobrovolnou funkci: vývojář zadá adresy nebo CIDR rozsahy svých serverů a Shopify pak odmítá požadavky na Admin API s tokeny aplikace, které nepřijdou z povolených sítí. Důvod je jednoduchý. Uniklý token jde jinak použít odkudkoli na světě, kdežto s allowlistem je mimo povolené sítě k ničemu.

    Dnešní post z dobrovolné funkce dělá požadavek. Týká se všech public apps, tedy aplikací distribuovaných přes Shopify App Store. Nevztahuje se na custom aplikace ani na aplikace vytvořené obchodníky v Dev Dashboardu nebo v adminu. Shopify uvádí jako cíl lepší ochranu obchodníků a změna navazuje na bezpečnostní balík, který se rozvinul kolem Editions Fall '26 a blogu Securing your app, together.

    Termíny jsou velmi krátké a odstupňované podle toho, jestli aplikace používá bulk operations. Aplikace s bulk operations musí mít allowlist do 12. listopadu 2026, ostatní do 20. listopadu 2026. Aplikace, které volají Admin API z infrastruktury obchodníka, mají podle Shopify co nejrychleji přejít na architekturu, která omezuje vystavení Admin API tokenů; pro ně existuje formulář na žádost o prodloužení termínu.
  zdroje:
    - title: "Shopify: IP allowlists are now required for public apps"
      url: "https://shopify.dev/changelog/posts/ip-allowlists-are-now-required-for-public-apps"
    - title: "Shopify Docs: Restrict API access with an IP allowlist"
      url: "https://shopify.dev/docs/apps/build/dev-dashboard/ip-allowlist"
    - title: "Shopify Docs: Distribution, capabilities and requirements"
      url: "https://shopify.dev/docs/apps/launch/distribution#capabilities-and-requirements"
    - title: "Archiv: Admin API IP allowlist restrictions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ip-allowlist-admin-api-restriction/"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

IP allowlist pro Admin API přestává být volitelným bezpečnostním nástrojem a stává se podmínkou pro všechny public apps v Shopify App Store. Vývojář musí v Dev Dashboardu nastavit, z jakých sítí jeho aplikace smí volat Admin API. Pokud aplikace běží na statických egress IP adresách, povolí se konkrétní adresy nebo CIDR rozsah. Pokud má dynamické adresy, povolí se ASN hostingového poskytovatele a uvedou se země, ve kterých aplikace běží. Samostatný návod pro serverless prostředí post neuvádí; nejblíže je varianta s ASN a zeměmi, detaily je třeba ověřit v dokumentaci.

Povinnost se netýká custom aplikací ani aplikací vytvořených obchodníky v Dev Dashboardu nebo v adminu. Aplikace, které volají Admin API z infrastruktury obchodníka, mají podle Shopify přejít na architekturu s omezeným vystavením tokenů a mohou požádat o prodloužení termínů.

## Časová osa

- 27. 10. 2026: IP allowlist představen jako dobrovolná funkce v Dev Dashboardu.
- 5. 11. 2026: Shopify oznamuje, že je allowlist povinný pro public apps.
- 12. 11. 2026, 23:59 ET: bulk operations z public apps bez allowlistu přestanou fungovat.
- 20. 11. 2026, 23:59 ET: public apps bez allowlistu budou vyřazeny z App Store a zablokovány pro nové instalace.

## Dopad pro nás

**Pro vývojáře:** Je nutné rychle zjistit, které naše aplikace jsou public apps, a z jakých adres volají Admin API. U statických IP stačí zadat adresy nebo CIDR, u dynamických ASN poskytovatele a země. Podle zkušenosti z dobrovolné verze je vhodné nejdřív otestovat nastavení proti nedávnému provozu, aby se omylem nezablokoval legitimní provoz včetně bulk operations, které mají termín už 12. listopadu. Pokud některé volání vede z infrastruktury obchodníka, je potřeba přepracovat architekturu nebo podat žádost o prodloužení.

**Pro PM / PO:** Jde o kritickou změnu s termínem v řádu dnů. Nesplnění znamená vyřazení z App Store a ztrátu nových instalací, u aplikací s bulk operations navíc výpadek těchto funkcí už za týden. Doporučuji ihned určit odpovědnou osobu, zmapovat aplikace a v případě rizika využít formulář na prodloužení. Pro obchodníky se nic viditelného nemění, ale zvyšuje se bezpečnost jejich dat a lze to využít v bezpečnostních auditech.

## Použití v Integrátoru

Pokud je naše synchronizační aplikace distribuovaná jako public app, musí mít do 12. respektive 20. listopadu nastavený allowlist svých serverových adres. Pro custom nasazení u jednotlivých obchodů se změna netýká.
