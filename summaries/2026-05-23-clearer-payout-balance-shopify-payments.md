---
date: 2026-05-23
title: "Čitelnější payout balance a reserve info v Shopify Payments"
title_en: "Clearer payout balance and reserve information in Shopify Payments"
slug: clearer-payout-balance-shopify-payments
zdroj: https://changelog.shopify.com/posts/clearer-payout-balance-and-reserve-information-in-shopify-payments
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-05-26

kategorie: [fyi]
api_oblast: billing
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "UI změna v Shopify Payments dashboardu. Naše integrace finance vrstvu nesahá."
dotcene_klienty: []

kontext:
  background: |
    Payout balance je částka naakumulovaných tržeb v Shopify Payments, která je připravena k výplatě na bankovní účet obchodníka. Vypočítává se jako hrubé tržby snížené o vrácené platby (refunds), spory (disputes) a poplatky (fees). Oddělenou položkou jsou rezervy (reserves) — prostředky dočasně zadržované jako pojistka proti rizikům, jako jsou chargebacky nebo refundy, a holds, tedy krátkodobé blokace konkrétních transakcí.

    Shopify Payments je integrovaná platební brána dostupná ve vybraných zemích, která zpracovává platby přímo v ekosystému Shopify bez nutnosti třetí strany. Stránka Payouts v administraci historicky zobrazovala souhrn těchto položek pod různými technickými názvy, které nebyly vždy intuitivní pro obchodníky bez finančního zázemí. Přejmenování „To be paid" na „Payout balance" je součástí sjednocování terminologie napříč Finance platformou Shopify.

    Tato terminologická úprava nemění načasování výplat, výši rezerv ani podmínky. Jde o čistě prezentační změnu, která má snížit počet dotazů na podporu a zlepšit finanční gramotnost obchodníků ve správě vlastních cash flow. Podobnou logikou řídilo Shopify i redesign Balance mobilní aplikace ze stejného období — obě změny jsou součástí průběžného úsilí o konzistentnější UX finančních nástrojů.
  zdroje:
    - title: "Shopify Changelog: Clearer payout balance and reserve information in Shopify Payments"
      url: "https://changelog.shopify.com/posts/clearer-payout-balance-and-reserve-information-in-shopify-payments"
    - title: "Balance mobile app: redesign UI"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/balance-app-new-look/"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Payouts page má jasnější labeling — 'To be paid' přejmenováno na 'Payout balance' s vysvětlujícím textem o tom, jak se počítá."
tagy: [payments, payout, ui, balance]
---

## Co se mění
**Shopify Payments Payouts page** má cleaner labeling:
- **„To be paid" → „Payout balance"** (jasnější název)
- Doprovodný explanatory text o tom, jak se balance vypočítá (gross sales − fees − reserves − holds)

UI-only změna, žádná API nebo logic.

## Použití v Integrátoru
**Nepoužíváme** — finance UI feature.
