---
date: 2026-05-06
title: "Více admin intents podporuje Settings (notifications, payments, gift cards…)"
title_en: "More admin intents now support Settings"
slug: more-admin-intents-settings
zdroj: https://shopify.dev/changelog/more-admin-intents-now-support-settings
zdroj_kanal: dev-changelog
shrnuto_dne: 2026-05-07

kategorie: [nova-api, fyi]
api_oblast: other
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin intents jsou App Bridge feature pro routing v embedded apps. Neimplementujeme embedded apps."
dotcene_klienty: []
souvisejici: [admin-intents-settings]

kontext:
  background: |
    Contextual overlay je vzor uživatelského rozhraní, při němž se cílová Settings stránka otevře jako vrstva nad aktuální aplikací — obchodník upraví nastavení a bez přechodu jinam se vrátí zpět. Tento přístup snižuje kontextový skok: uživatel nemusí opustit pracovní tok aplikace, aby doplnil chybějící konfiguraci. V Shopify Admin intentech je overlay aktivován parametrem v API volání, nikoli samostatnou navigací.

    Rozšíření o skupiny Notifications, Payments a Gift cards je strategicky důležité, protože právě tato nastavení nejčastěji chybí nově nainstalovaným aplikacím pro notifikace nebo platby. Vývojáři mohli dříve obchodníka jen odkázat textem; nyní ho mohou přímo zavést na konkrétní konfigurační kartu. Delivery profiles (profily doručování) jsou klíčové pro logistické a multi-lokační aplikace, Business details pak pro onboarding aplikací vyžadujících ověření firmy.

    Rozšíření o sedm nových Settings editorů navazuje na březnovou vlnu (2026), kdy intenty získaly podporu základních Settings stránek (obchod, lokace, platby). Každá iterace přidává specifičtější vstupní body, čímž se snižuje hloubka navigace potřebná pro kompletní nastavení embedded aplikace v Shopify Adminu.

    Tento trend ukazuje, že Shopify postupně zpřístupňuje celý strom Settings přes intent API — cílem je, aby embedded aplikace mohla celý onboarding obchodníka zvládnout bez přesměrování na jiné URL.
  zdroje:
    - title: "More admin intents now support Settings — Shopify Changelog"
      url: "https://shopify.dev/changelog/more-admin-intents-now-support-settings"
    - title: "Admin intents now support Settings — Shopify Changelog"
      url: "https://shopify.dev/changelog/admin-intents-now-support-settings"
    - title: "Admin intents podporují Settings pages"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/admin-intents-settings/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "7 nových Settings intents pro admin apps — editors pro notifications, payment capture, gift cards, delivery profiles, business details s contextual overlays."
tagy: [app-bridge, intents, settings]
---

## Co se mění
Admin intents (App Bridge feature pro deep-linking do Shopify Adminu z embedded apps) podporují **7 nových Settings editors**:
- Notifications
- Payment capture
- Gift cards
- Delivery profiles
- Business details
- (a 2 další)

Apps mohou otevřít editor s **contextual overlay** (modálem nad jejich aplikací).

## Použití v Integrátoru
**Nepoužíváme** — App Bridge feature pro embedded apps. Naše integrace běží server-side, ne jako embedded UI.
