---
date: 2026-11-11
title: "IP allowlists: podpora IP + ASN současně + limit 250 IPs (big expansion)"
title_en: "App IP allowlists now support IP addresses and ASNs together, and up to 250 IPs"
slug: ip-allowlists-combined-ips-asns-250-limit
zdroj: https://shopify.dev/changelog/posts/app-ip-allowlists-now-support-ip-addresses-and-asns-together
shrnuto_dne: 2026-11-16
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše aplikace volají Admin API z kombinace statických a dynamických (serverless) adres, nově je lze pokrýt jedním allowlistem."
dotcene_klienty: []
souvisejici: [app-ip-allowlists-serverless-asn-support, ip-allowlists-required-public-apps, ip-allowlist-admin-api-restriction]
tldr: "Allowlist aplikace nově kombinuje IP adresy a ASN, povoluje až 250 IP/CIDR (dříve 100) a až 10 ASN; povinnost allowlistu se blíží."
tagy: [security, ip-allowlist, asn, hybrid, scaling, compliance]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify umožňuje omezit přístup k API aplikace pomocí IP allowlistu. Dosud šlo o omezené seznamy adres a dynamické zdroje (serverless funkce) se tím řešily špatně.
    Novinka dovoluje v jednom allowlistu kombinovat IP adresy a ASN (čísla autonomních systémů). Limit IP adres nebo CIDR rozsahů roste ze 100 na 250, ASN lze přidat až 10 a lze je omezit na max. 10 zemí.
    Shopify uvádí, že allowlisty budou brzy povinné pro veřejné i custom aplikace, proto je vhodné je připravit a otestovat na reálném provozu.
  zdroje:
    - title: "Shopify: App IP allowlists now support IP addresses and ASNs together, and up to 250 IPs"
      url: "https://shopify.dev/changelog/posts/app-ip-allowlists-now-support-ip-addresses-and-asns-together"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění
Allowlist aplikace může obsahovat IP adresy i ASN současně. Požadavek je povolen, pokud odpovídá kterékoli nakonfigurované IP nebo ASN; ostatní požadavky končí chybou 403. Limit roste na 250 IP adres či CIDR rozsahů (dříve 100), ASN je max. 10 a lze je omezit na až 10 zemí (omezení zemí platí jen pro ASN).

Shopify doporučuje preferovat konkrétní IP, protože ASN pokrývá všechny adresy sítě poskytovatele včetně jiných zákazníků. ASN přidávat jen pro dynamické zdroje, např. serverless funkce, a zúžit je na země, kde aplikace běží.

## Časová osa
- 2026-11-11: zveřejnění novinky.
- 2026-11-12, 12:00 ET: změna je účinná.
- Brzy: allowlisty mají být povinné pro veřejné a custom aplikace.

## Dopad pro nás
**Pro vývojáře:** Hybridní konfigurace umožňuje spojit statické egress IP s ASN pro serverless služby. Před zapnutím vynucení je třeba otestovat allowlist proti nedávnému provozu, jinak hrozí 403.

**Pro PM / PO:** Zařadit audit zdrojů API provozu našich aplikací a přípravu allowlistů dříve, než se stanou povinnými.

## Použití v Integrátoru
Pokud Integrátor komunikuje s Admin API ze statických i dynamických adres, lze je pokrýt jedním allowlistem. Konkrétní zdroje provozu je nutné ověřit.
