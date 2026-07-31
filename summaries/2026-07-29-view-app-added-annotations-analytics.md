---
date: 2026-07-29
title: "App-added annotations viditelné na Analytics chartech (merchant-side)"
title_en: "View app-added annotations on your analytics charts"
slug: view-app-added-annotations-analytics
zdroj: https://changelog.shopify.com/posts/view-app-added-annotations-on-your-analytics-charts
shrnuto_dne: 2026-07-31
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud bychom pro klienta stavěli appku s marketingovou, cenovou nebo supply-chain logikou, merchant by teď reálně viděl naše annotations přímo v Analytics chartu i s identifikací appky — je tedy vhodné navrhnout klientovi, aby na to počítal."
dotcene_klienty: []
souvisejici: [app-added-annotations-analytics-charts, annotations-analytics-events, shopify-analytics-full-stack-app-platform]
tldr: "Merchant teď v Shopify Analytics vidí i annotations přidané aplikacemi — v grafu se u nich zobrazí jméno nebo logo konkrétní appky, aby bylo jasné, odkud kontext pochází."
tagy: [analytics, annotations, apps, business-events, dashboard, insights]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Annotations jsou vizuální značky v Shopify Analytics chartech, které u konkrétního data nebo časového rozsahu zobrazí popisek s vysvětlením, co se v obchodě odehrálo — bez toho, aby měnily samotná čísla v reportu. Tento changelog popisuje merchant-side pohled na annotations přidané aplikacemi: co přesně merchant uvidí, když má nainstalovanou appku, která annotations posílá skrz Annotations API.

    V grafu se annotation zobrazí u obchodní události typu product launch, marketingová kampaň, sale event, změna dodavatele, spuštění landing page, popup store nebo jiný business milestone. Klíčový detail je, že Shopify admin u annotace vždy uvede, která konkrétní app ji přidala — jménem nebo logem — takže si merchant může souvislost mezi appkou a výkyvem v datech ověřit na první pohled, bez dohledávání v seznamu instalovaných aplikací.

    Annotations lze zobrazit napříč běžnými metrikami: sales, sessions, conversion rate, average order value, počet prodaných kusů, returns i fulfillment performance. Typický scénář: merchant se dívá na graf tržeb, vidí nárůst a annotation mu rovnou ukáže, že ve stejný den spustila konkrétní marketingová appka kampaň — nemusí si to domýšlet ani hledat kontext jinde v adminu. Shopify zároveň explicitně zdůrazňuje, že annotations neupravují podkladová data reportu, jde čistě o vysvětlující vrstvu navrch.

    Jde o přímé pokračování changelogu z 2026-07-24 (app-added annotations), který popisoval samotnou možnost appek annotations vkládat. Tato novinka z 2026-07-29 je jeho merchant-facing zrcadlo — potvrzuje, že funkce je live a popisuje ji z pohledu toho, co merchant v adminu skutečně vidí a jak si díky ní spojí business event s pohybem metriky.
  zdroje:
    - title: "Shopify: View app-added annotations on your analytics charts"
      url: "https://changelog.shopify.com/posts/view-app-added-annotations-on-your-analytics-charts"
    - title: "App-added annotations na Analytics chartech — apps přidávají business context"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-added-annotations-analytics-charts/"
    - title: "Annotations: kontext store events přímo v analytics"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/annotations-analytics-events/"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Merchant nově v Shopify Analytics chartech vidí i annotations, které do nich vložily nainstalované aplikace — nejen ty generované samotným Shopify. U každé takové annotace admin zobrazí jméno nebo logo appky, která ji přidala, takže je hned jasné, odkud business context pochází. Annotations se dají zobrazit u metrik jako sales, sessions, conversion rate, average order value, počet prodaných kusů, returns nebo fulfillment performance a typicky vysvětlují product launch, marketingovou kampaň, sale event, změnu dodavatele, spuštění landing page nebo popup store.

Annotations nemění data v reportu — jde čistě o kontextovou vrstvu navrch, díky které merchant nemusí domýšlet, proč se metrika pohnula, ale rovnou vidí, jaká obchodní událost (a jaká appka) za tím stojí.

## Časová osa

- 2026-05-05 — Annotations jako Shopify-generovaná vrstva kontextu v Analytics (produktové a systémové eventy)
- 2026-07-21 — full-stack analytics platforma pro apps zmiňuje Annotations API jako jednu z os pro partnery
- 2026-07-24 — app-added annotations: appky mohou samy annotations do chartů vkládat
- 2026-07-29 — tento changelog: merchant-facing potvrzení — annotations od appek jsou v adminu viditelné a identifikované jménem/logem appky

## Dopad pro nás

**Pro vývojáře:** Pokud appka annotations přes Annotations API posílá, tento changelog potvrzuje, že merchant uvidí i identitu appky u annotace. To znamená, že jméno a ikona appky by měly být nastavené a srozumitelné — merchant si podle nich bude appku spojovat s konkrétním vysvětlením výkyvu v datech.

**Pro PM / PO:** Jde o merchant-facing dokreslení funkce z 2026-07-24, ne o novou technickou změnu. Užitečné jako argument vůči klientům, kteří chtějí, aby appka uměla sama vysvětlit svůj dopad na tržby nebo konverzi přímo v Analytics, bez nutnosti vlastního reportingového UI.

## Použití v Integrátoru

Aktuálně annotations do klientovy Analytics neposíláme. Relevantní do budoucna, pokud bychom pro klienta stavěli appku s marketingovou, cenovou nebo supply-chain logikou — merchant by pak viděl vysvětlení výkyvů přímo v grafu, jasně přiřazené naší appce.
