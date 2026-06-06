---
date: 2026-06-04
title: "Feature preview: vylepšení customer accounts"
title_en: "Feature preview: Customer account improvements"
slug: feature-preview-customer-account-improvements
zdroj: https://shopify.dev/changelog/feature-preview-customer-account-improvements
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Máme 20+ customer methods. Customer account improvements potenciálně rozšiřují co lze přes Customer Account API udělat. Aktuálně preview, sledovat."
dotcene_klienty: []
souvisejici: [unified-branding-checkout-customer-accounts]

kontext:
  background: |
    New Customer Accounts je hostovaný zákaznický portál Shopify, kde kupující spravují objednávky, adresář a profil. Na rozdíl od starších Classic Customer Accounts (postavených na Liquid šablonách) jsou New Customer Accounts spravovány přímo Shopify a rozšiřitelné přes Customer Account Extensions — bloky UI kódu registrované v extension targets.

    Mechanismus Feature Preview umožňuje obchodníkům a vývojářům opt-in do připravovaných designových změn ještě před jejich obecným vydáním (GA). Preview se aktivuje v nastavení dev shopu a je časově omezený — slouží primárně k testování kompatibility stávajících extensions s novým layoutem. Shopify doporučuje pro toto preview API verzi 2025-10 nebo novější a postupný přechod na Polaris webové komponenty. Všechny stávající extension targets zůstávají podporovány, jejich vizuální prezentace se však může měnit.

    Vylepšení se dotýkají zejména B2B scénářů: přihlašovací toky pro firemní zákazníky (přepínání mezi společnostmi, přihlášení do více obchodů) a správa adresáře jsou oblasti, kde komplexní potřeby B2B kupujících přesahují standardní DTC flow. Redesign na single-column layout a zlepšená viditelnost navigace navazuje na paralelní práce na unified brandingu a per-market customizaci checkoutu a zákaznických účtů.

    Změny jsou součástí širší konsolidace zákaznické cesty — od unified branding API (2026-04) přes redesign sign-in stránky až po tyto UX úpravy portálu. Cílem je konzistentní zákaznická zkušenost bez fragmentace konfigurace napříč dotčenými plochami.
  zdroje:
    - title: "Shopify Dev Changelog: Feature preview customer account improvements"
      url: "https://shopify.dev/changelog/feature-preview-customer-account-improvements"
    - title: "Shopify Dev: Feature preview — customer account improvements (docs)"
      url: "https://shopify.dev/docs/apps/build/customer-accounts/feature-preview-customer-account-improvements"
    - title: "Archiv: Unified branding napříč checkout, customer accounts a sign-in"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-branding-checkout-customer-accounts/"
    - title: "Archiv: Redesign sign-in page customer accounts"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/refreshed-signin-page-customer-accounts/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Feature preview customer account improvements — vylepšené UX pro customer accounts (B2B login flows, multi-store, address management). Lze aktivovat v admin dev settings. _Původně publikováno 20. 5. 2026 (audit doplnění)._"
tagy: [customer-account, feature-preview, b2b]
---

## Co se mění
Shopify spouští **feature preview** pro customer account improvements. Klíčové oblasti:
- **B2B login flows** (multi-store + company switching)
- **Vylepšené address management**
- **Unified accounts** napříč market boundaries

Preview lze opt-in v admin → Settings → Dev preview.

## Použití v Integrátoru
**Možná** — sledovat. Po GA může impact customer integrace flow (zejména B2B klientů).
