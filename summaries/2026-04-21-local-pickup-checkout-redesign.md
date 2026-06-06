---
date: 2026-04-21
title: "Redesign local pickup UX v checkoutu"
title_en: "Updates to local pickup user experience in checkout"
slug: local-pickup-checkout-redesign
zdroj: https://changelog.shopify.com/posts/updates-to-local-pickup-user-experience-in-checkout
zdroj_kanal: merchant-changelog
obrazek: https://cdn.shopify.com/static/checkout/Checkout%20pickup%20changelog%20.png
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: checkout
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Checkout UI redesign. API mutations pro pickup volby nedotčeny."
kontext:
  background: |
    Local pickup (vyzvednutí v prodejně) je doručovací metoda v Shopify checkoutu, při níž zákazník místo zásilkového doručení vybere konkrétní fyzickou lokaci obchodu a zboží si tam osobně vyzvedne. Shopify tuto metodu váže na nakonfigurované lokace (locations) obchodu, u nichž merchant povolí pickup — systém pak v checkoutu nabídne pouze lokace s dostupnou zásobou dané položky.

    Funkce local pickup je v Shopify dostupná řadu let, původně však prezentovala všechny doručovací možnosti v jediném vertikálním seznamu. Tento přístup způsoboval problémy s orientací zejména u objednávek s více položkami nebo obchodů s rozsáhlou sítí výdejních míst. Redesign z dubna 2026 přechází na inline layout, kde jsou shipping a pickup volby zobrazeny vedle sebe, přičemž nejbližší dostupná lokace je předvybrána automaticky na základě polohy zákazníka.

    Změna přímo navazuje na sérii pickup vylepšení: B2B zákazníci získali podporu local pickup ve Winter 2026, multi-location obchody mohou od března 2026 automaticky přesunovat zásobu mezi lokacemi pro splnění pickup objednávek a Plus/Enterprise merchants mají v feature preview možnost kombinovat ship a pickup v jedné objednávce. Redesign UX tak představuje viditelnou vrstvu nad stále komplexnějším zázemím pickup logistiky.

    Z pohledu zákazníka snižuje redesign počet kroků při výběru doručení a eliminuje potřebu procházet dlouhý scrollovatelný seznam. Modální okno pro výběr alternativní lokace doplňuje přehled o dostupnosti a mapové zobrazení, čímž usnadňuje rozhodování zejména na mobilních zařízeních.
  zdroje:
    - title: "Updates to local pickup user experience in checkout"
      url: "https://changelog.shopify.com/posts/updates-to-local-pickup-user-experience-in-checkout"
    - title: "Pickup in Store pro B2B zákazníky"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-in-store-b2b/"
    - title: "Pickup in store: auto-transfer z více lokací"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pickup-multiple-locations-transfer/"
    - title: "Ship + pickup v jedné objednávce"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ship-and-pickup-one-order-preview/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Checkout redesign zobrazí shipping a pickup volby inline, s nejbližší pickup lokací nahoře a modálem pro výběr jiné lokace — rychlejší rozhodnutí customera."
tagy: [checkout, pickup, ux, mobile]
---

## Co se mění
**Local pickup** v checkoutu má redesign:
- Shipping a pickup options se zobrazují **inline** vedle sebe (ne přepínač jako dřív)
- **Nejbližší pickup lokace** se zobrazí jako první default
- Modál pro výběr jiné lokace, s mapou a dostupností

Cíl: rychlejší rozhodnutí + méně friction pro customera.

## Použití v Integrátoru
**Nepoužíváme** — UI/UX redesign checkoutu. Naše integrace mohou číst delivery method z orderu (vč. pickup), payload se nemění.
