---
date: 2026-05-30
title: "Local payment methods (MobilePay, TWINT, BLIK, Przelewy24) ve více evropských zemích"
title_en: "Local payment methods are now available in more countries"
slug: local-payment-methods-more-countries
zdroj: https://changelog.shopify.com/posts/more-local-payment-methods-are-now-available-in-additional-countries
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-06-04

kategorie: [nova-prilezitost]
api_oblast: billing
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Payments config (merchant-side). Naše integrace čte finální payment method z orderu, žádný direct impact."
dotcene_klienty: []
souvisejici: [klarna-more-countries]

kontext:
  background: |
    Lokální platební metody jsou způsoby platby rozšířené pouze v konkrétních regionech nebo zemích — zpravidla jako digitální peněženky, bankovní převodní systémy nebo mobilní aplikace. Zákazníci jim důvěřují více než mezinárodním kartovým sítím a jejich přítomnost v checkoutu prokazatelně snižuje míru opuštění košíku. Příklady: MobilePay (Skandinávie), TWINT (Švýcarsko), BLIK (Polsko), Przelewy24 (Polsko a okolí).

    Shopify Payments historicky cílil primárně na anglosaské trhy. Podpora lokálních metod v Evropě se rozrůstala postupně — Winter 2026 Editions přinesly např. Klarna do ČR a dalších zemí. Expanze lokálních metod je součástí širší strategie Shopify Markets, která umožňuje jeden store provozovat ve více zemích s lokalizovanými zážitky včetně měny, jazyka a právě platebních metod.

    V praxi obchodník aktivuje metody přes Settings > Payments a Shopify je pak automaticky zobrazuje zákazníkům v oprávněných zemích bez nutnosti třetí strany nebo custom integrace. To je relevantní zejména pro EU e-shopy expandující do Polska, Skandinávie nebo Švýcarska — lokální platební metoda může být rozhodujícím faktorem konverze v těchto trzích.

    Tato změna navazuje na rostoucí tlak evropské regulace (PSD2, open banking) a na fakt, že podíl plateb přes lokální metody v některých zemích překračuje platby kartou. Shopify tím snižuje bariéru vstupu na tyto trhy pro merchants, kteří dříve potřebovali integraci přes specializovanou platební bránu.
  zdroje:
    - title: "More local payment methods are now available in additional countries"
      url: "https://changelog.shopify.com/posts/more-local-payment-methods-are-now-available-in-additional-countries"
    - title: "Klarna nově dostupná v ČR a 7 dalších zemích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/klarna-more-countries/"
    - title: "Více legal entities v jedné zemi přes Shopify Payments + Markets"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multiple-legal-entities-shopify-payments/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify Payments rozšiřuje local payment methods (MobilePay, TWINT, BLIK, Przelewy24) do dalších evropských zemí — méně friction v checkoutu pro lokální zákazníky."
tagy: [payments, europe, local, shopify-payments, mobilepay, twint, blik, przelewy24]
---

## Co se mění
**Shopify Payments** rozšiřuje **local payment methods** do dalších evropských zemí:
- **MobilePay** — Dánsko, Finsko (původně už v některých zemích)
- **TWINT** — Švýcarsko (rozšíření)
- **BLIK** — Polsko (rozšíření)
- **Przelewy24** — Polsko

Cíl: nižší friction v checkoutu pro zákazníky, kteří preferují lokální preferred payment method před kartou.

## Dopad pro nás
**Pro vývojáře:**
Žádný API impact. Pokud naše integrace čte payment method z orderu pro reporting / ERP sync, payment method enum hodnoty zůstávají stejné — jen se nově mohou objevit ve více storeech.

**Pro PM / PO:**
Pro klienty s EU expanze (Markets, multi-country setup) je to argument: „Shopify má nativně podporu pro lokální payment methods, nemusí to klient řešit přes third-party gateway." Relevant zejména pro CZ/SK/PL/CH klienty.

## Použití v Integrátoru
**Nepoužíváme** — Shopify Payments setup je merchant config, naše integrace operují s finálními order daty.
