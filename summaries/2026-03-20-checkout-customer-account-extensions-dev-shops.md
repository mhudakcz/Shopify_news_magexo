---
date: 2026-03-20
title: "Checkout & Customer Account UI extensions defaultně v new dev shops"
title_en: "Checkout and Customer Account UI extensions available by default in new development shops"
slug: checkout-customer-account-extensions-dev-shops
zdroj: https://shopify.dev/changelog/checkout-and-customer-account-ui-extensions-available-by-default-in-new-development-shops
shrnuto_dne: 2026-04-29

kategorie: [fyi]
api_oblast: checkout
api_verze: ["2026-01"]
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se development shops pro vývoj UI extensions. Neděláme UI extensions."
dotcene_klienty: []

kontext:
  background: |
    UI extensions jsou stavební bloky, které vývojáři Shopify aplikací používají k vizuálnímu rozšíření nativního rozhraní Shopify — konkrétně procesu placení (checkout) nebo zákaznického účtu. Nejde o klasické skripty injektované do stránky, ale o sandboxované komponenty renderované přímo Shopify runtime prostředím, které merchant umisťuje přes editor v administraci. Checkout UI extensions vyžadují plán Shopify Plus, zatímco customer account UI extensions jsou dostupné na všech plánech.

    Development shops jsou testovací prostředí, která si vývojáři nebo partneři zakládají přes Partner Dashboard. Slouží k vývoji a ověřování aplikací bez dopadu na živé obchody. Historicky bylo nutné checkout a customer account UI extensions v development shopech explicitně aktivovat — tato bariéra zpomalovala onboarding vývojářů a přidávala zbytečný krok při zakládání nového projektu.

    Zpřístupnění těchto extensions ve výchozím stavu v nových development shopech signalizuje, že Shopify považuje obě technologie za dostatečně stabilní pro standardní vývojové workflow. Prakticky to zkrátí čas od vytvoření dev shopu po první funkční prototyp extension. Úzce s tímto tématem souvisí i release testovací knihovny `@shopify/ui-extensions-tester`, která automatizované testování UI extensions přinesla ve stejném vývojovém cyklu.

  zdroje:
    - title: "Changelog: Checkout and Customer Account UI extensions available by default in new development shops"
      url: "https://shopify.dev/changelog/checkout-and-customer-account-ui-extensions-available-by-default-in-new-development-shops"
    - title: "Shopify Docs: Build checkout experiences"
      url: "https://shopify.dev/docs/apps/build/checkout"
    - title: "@shopify/ui-extensions-tester pro automatizované testy UI extensions"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/ui-extensions-tester/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Nové development shops mají automaticky přístup k checkout UI extensions (Plus) a customer account extensions (všechny plány)."
tagy: [development-shop, ui-extensions, checkout, customer-accounts]
editions_release: spring-2026
---

## Co se mění
**Nově vytvořené development shops** v Partner Dashboardu mají defaultně dostupné:
- Checkout UI extensions (na Plus plan dev shops)
- Customer Account UI extensions (na všech dev shops)

Dříve bylo nutné explicitní enablement.

## Použití v Integrátoru
**Nepoužíváme** — neděláme UI extensions. Pokud bychom v budoucnu, dev shop setup je teď jednodušší.
