---
date: 2026-11-14
title: "App security updates — co je dál povinné (follow-up post-IP-allowlist)"
title_en: "App security updates: Thank you, plus what's required next"
slug: app-security-updates-thank-you-whats-next
zdroj: https://shopify.dev/changelog/blog/app-security-updates-thank-you-plus-what-s-required-next
shrnuto_dne: 2026-11-16
kategorie: [nova-prilezitost, breaking]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-11-14
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud provozujeme public app nebo custom app instalovanou mimo vlastní organizaci, musíme mít IP allowlist (public apps do 20. listopadu 2026, custom apps pro existující instalace od 1. ledna 2027); povinné MFA se týká všech partnerských účtů."
dotcene_klienty: []
souvisejici: [app-security-updates-november-2026-ip, ip-allowlists-required-public-apps, app-ip-allowlists-serverless-asn-support, expiring-tokens-migration-january-2027]
tldr: "Shopify děkuje za adopci IP allowlistů a připomíná další povinnosti: public apps musí mít allowlist do 20. listopadu 2026, custom apps instalované mimo organizaci od 1. ledna 2027 a brzy přijde povinné MFA pro všechny partnerské účty."
tagy: [security, app-security, partners, checklist, bulletin, roadmap]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v říjnu a na začátku listopadu 2026 zavedl IP allowlist pro tokeny Admin API a postupně z něj udělal povinný požadavek pro public apps. Tento navazující bulletin z 14. listopadu 2026 děkuje partnerům za dosavadní adopci a shrnuje, co zbývá udělat.

    Public apps volající Admin API potřebují allowlist do 20. listopadu 2026 (23:59 ET). Aplikace bez něj budou odstraněny z App Store a zablokovány pro nové instalace, existující instalace ale zůstanou funkční. Po doplnění allowlistu se aplikace automaticky vrátí. Bulk operace z aplikací bez allowlistu se už blokují. Partnerem vytvořené aplikace musí navíc v Partner Dashboardu (API access requests) povolit bulk queries a mutations a při 31 dnech bez bulk operace je nutné je povolit znovu.

    Nově lze v allowlistu kombinovat IP adresy, rozsahy CIDR a ASN hostingových poskytovatelů, až 250 položek. Omezení podle zemí platí jen pro ASN, takže konkrétní IP adresy dávají nejsilnější ochranu. Od týdne po zveřejnění se stává povinným také vícefaktorové ověření (MFA) pro všechny partnerské účty, doporučené jsou passkeys. Podezřelou aktivitu je třeba hlásit na partner-security-reports@shopify.com.
  zdroje:
    - title: "Shopify: App security updates: Thank you, plus what's required next"
      url: "https://shopify.dev/changelog/blog/app-security-updates-thank-you-plus-what-s-required-next"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify shrnuje stav bezpečnostní migrace aplikací a upřesňuje, co je dál povinné. Public apps volající Admin API musí mít IP allowlist, jinak vypadnou z App Store a nepůjdou nově instalovat. Rozšiřuje se také okruh povinností: custom apps instalované mimo vlastní organizaci vývojáře musí allowlist mít pro nové instalace od 20. listopadu 2026 a pro existující instalace od 1. ledna 2027. Aplikace používané jen uvnitř organizace a merchant-created apps se netýkají.

Novinkou je flexibilnější allowlist (IP, CIDR i ASN, max. 250 položek) a povinné MFA pro všechny partnerské účty.

## Časová osa

- 14. listopadu 2026: zveřejnění bulletinu, blokace bulk operací bez allowlistu již probíhá
- Týden po zveřejnění: MFA povinné pro všechny partnerské účty
- 20. listopadu 2026, 23:59 ET: termín allowlistu pro public apps; stejné datum platí pro nové instalace custom apps mimo organizaci
- 1. ledna 2027: allowlist povinný i pro existující instalace custom apps mimo organizaci; jedna aplikace bez něj může blokovat instalaci všech vašich aplikací v cizích obchodech
- Leden 2027: navazující migrace na expirující tokeny (viz související novinky)

## Dopad pro nás

**Pro vývojáře:** Ověřit, které naše aplikace jsou public nebo custom instalované mimo organizaci, a doplnit allowlist (u serverless hostingu použít ASN). U partnerem vytvořených aplikací povolit bulk operace v Partner Dashboardu a hlídat 31denní lhůtu. Zapnout MFA na všech partnerských účtech, ideálně passkeys.

**Pro PM / PO:** Termín 20. listopadu je velmi blízko. Je třeba rychle zjistit, zda se nás týká, a naplánovat kontrolu custom apps před 1. lednem 2027, protože jedna nevyhovující aplikace může zablokovat instalace ostatních.

## Použití v Integrátoru

Pokud Integrátor běží jako public nebo mimo-organizační custom app volající Admin API, potřebuje IP allowlist a povolené bulk operace; ověřte to před 20. listopadem 2026.
