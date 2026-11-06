---
date: 2026-11-05
title: "IP allowlists: podpora ASN (Autonomous System Numbers) pro serverless apps"
title_en: "App IP allowlists now support apps with serverless hosting through ASNs"
slug: app-ip-allowlists-serverless-asn-support
zdroj: https://shopify.dev/changelog/posts/app-ip-allowlists-now-support-apps-with-serverless-hosting
shrnuto_dne: 2026-11-06
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrační appky běží na serverless hostingu s dynamickými IP, půjde je nově zabezpečit povolením ASN poskytovatele; u statických IP stačí ponechat stávající allowlist."
dotcene_klienty: []
souvisejici: [ip-allowlist-admin-api-restriction, securing-your-app-together-shopify]
tldr: "IP allowlist v Dev Dashboardu nově umí místo konkrétních IP povolit sítě podle ASN, takže jej mohou používat i aplikace na serverless hostingu bez stabilních IP adres."
tagy: [security, ip-allowlist, asn, serverless, vercel, cloudflare, aws-lambda]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v říjnu 2026 zavedl možnost omezit přístup k Admin API pomocí IP allowlistu na úrovni aplikace. Smyslem je omezit dopad úniku přístupového tokenu: i když token někdo získá, požadavky z cizích IP adres budou odmítnuty.
    Klasický IP allowlist ale předpokládá, že aplikace volá Shopify ze stabilních adres. Serverless platformy (například Vercel, Cloudflare Workers nebo AWS Lambda) výstupní IP adresy dynamicky střídají, takže konkrétní rozsahy nelze rozumně vypsat ani udržovat.
    Nová podpora ASN (Autonomous System Number, identifikátor sítě poskytovatele) tento problém řeší. Místo seznamu IP povolíte sítě hostingového poskytovatele a případně omezíte země provozu. Shopify zároveň oznámil, že IP allowlist bude povinný pro všechny veřejné aplikace, datum zatím nezveřejnil.
  zdroje:
    - title: "Shopify: App IP allowlists now support apps with serverless hosting through ASNs"
      url: "https://shopify.dev/changelog/posts/app-ip-allowlists-now-support-apps-with-serverless-hosting"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

V sekci IP allowlist na stránce Settings aplikace v Dev Dashboardu jsou nově dvě možnosti: IP adresy, nebo Networks (ASN). Aplikace bez statických IP, typicky na serverless hostingu, mohou povolit ASN svého hostingového poskytovatele.

Pravidla se nastavují takto: až 10 ASN a až 10 zemí. Shopify doporučuje pravidla nejdřív otestovat proti nedávnému provozu a teprve potom zapnout vynucování. Požadavky mimo povolené sítě dostanou odpověď 403.

Doporučení Shopify: aplikace volající ze statických IP si je mají v allowlistu ponechat; aplikace s dynamickými výstupními IP mají povolit ASN poskytovatele a uvést země, kde běží. Shopify také uvádí, že IP allowlist bude povinný pro všechny veřejné aplikace (datum zatím není stanoveno) a už nyní doporučuje jeho používání všem.

## Časová osa

- 2026-11-04: změna účinná (Dev Dashboard).
- 2026-11-05: zveřejnění v changelogu.
- Termín povinného IP allowlistu pro všechny veřejné aplikace: zatím neoznámen.

## Dopad pro nás

**Pro vývojáře:** Zjistit, kde jednotlivé appky běží a zda mají stabilní výstupní IP. U serverless nasazení dohledat ASN poskytovatele a země provozu a nastavit je v Dev Dashboardu. Před zapnutím vynucování využít testování proti nedávnému provozu, aby se předešlo neočekávaným odpovědím 403. Příspěvek sám nespecifikuje, na která API se allowlist vztahuje; souvisejícím zdrojem je změna pro Admin API.

**Pro PM / PO:** Jde o bezpečnostní opatření, které bude brzy povinné pro veřejné aplikace. Doporučujeme zařadit krátký úkol na revizi hostingu a nastavení allowlistu, dokud není stanoven termín. Riziko je provozní: špatně nastavené pravidlo může zablokovat legitimní volání.

## Použití v Integrátoru

Pokud integrační komponenty běží na serverless nebo jiném hostingu s proměnlivými IP, je ASN allowlist cesta, jak splnit budoucí požadavek bez udržování seznamu adres. U komponent se stabilními IP stačí stávající nastavení ponechat.
