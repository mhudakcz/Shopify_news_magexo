---
date: 2026-11-12
title: "Self-serve removal apps z App Store (bez Shopify support interakce)"
title_en: "Remove your app from the Shopify App Store yourself"
slug: remove-app-from-app-store-self-serve
zdroj: https://shopify.dev/changelog/posts/remove-your-app-from-the-shopify-app-store-yourself
shrnuto_dne: 2026-11-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se jen veřejně listovaných aplikací v App Store; naše integrace běží jako custom apps, ale postup sunsetu (appSubscriptionCancel, appUninstall) je relevantní, pokud bychom některou aplikaci veřejně listovali."
dotcene_klienty: []
souvisejici: [app-store-submission-build-grow-expand, partner-directory-verified-profiles]
tldr: "Partner může odstranit svou aplikaci z App Store sám v Partner Dashboardu bez support ticketu; je nutné zvolit sunset datum nejméně 30 dní dopředu a krok je nevratný."
tagy: [app-store, partners, self-serve, sunset, delisting]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Dosud bylo odstranění aplikace z Shopify App Store záležitostí support ticketu. Partner musel požádat Shopify a čekat na vyřízení, což zdržovalo ukončování starších aplikací, slučování dvou aplikací do jedné nebo rebranding.

    Nově je odstranění self-serve. V Partner Dashboardu v sekci Apps, konkrétní aplikace, Distribution, je tlačítko Remove from App Store. Partner zvolí sunset datum, které musí být minimálně 30 dní v budoucnu, aby obchodníci měli čas přejít na alternativu.

    Aplikace zmizí z App Store okamžitě, takže ji už nelze najít ani nainstalovat. Stávající instalace fungují až do sunset data. Shopify obchodníky neinformuje, neruší jejich poplatky ani aplikaci neodinstaluje, tyto kroky musí provést partner sám.
  zdroje:
    - title: "Shopify: Remove your app from the Shopify App Store yourself"
      url: "https://shopify.dev/changelog/posts/remove-your-app-from-the-shopify-app-store-yourself"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění
Partneři mohou odstranit svou aplikaci z Shopify App Store sami přes Partner Dashboard (Apps, aplikace, Distribution, tlačítko Remove from App Store), bez kontaktování Shopify Support. Při odstranění se zadává sunset datum nejméně 30 dní dopředu. Aplikace je z App Store stažena okamžitě, instalace běží do sunset data. Odstranění je trvalé: pro opětovný listing je nutné aplikaci odeslat do review jako novou.

## Časová osa
- 2026-11-12: self-serve odstranění je dostupné v Partner Dashboardu.
- Okamžitě po potvrzení: aplikace zmizí z App Store, nelze ji nově instalovat.
- Minimálně 30 dní od potvrzení: nejbližší možné sunset datum.
- Do sunset data: partner informuje obchodníky, zruší předplatná přes `appSubscriptionCancel` a odinstaluje aplikaci ze zbylých obchodů přes `appUninstall`.

## Dopad pro nás
**Pro vývojáře:** Pokud někdy budeme aplikaci ukončovat, je nutné si předem připravit skript pro hromadné zrušení předplatných (`appSubscriptionCancel`) a odinstalaci (`appUninstall`), protože to Shopify neudělá za nás. Krok nelze vrátit zpět.

**Pro PM / PO:** Ukončení aplikace je rychlejší a nezávisí na support frontě, ale zodpovědnost za komunikaci s obchodníky a za ukončení fakturace zůstává na partnerovi. Je vhodné plánovat komunikační kampaň s předstihem minimálně 30 dní.

## Použití v Integrátoru
Naše integrace jsou zatím custom apps mimo App Store, takže se nás změna přímo netýká. Je užitečná jako postup pro případné budoucí ukončení veřejně listované aplikace.
