---
date: 2026-07-16
title: "Managed Markets: EU buyer cancellation + return requests (14-day withdrawal compliance)"
title_en: "Shopify Managed Markets now supports EU buyer cancellation and return requests"
slug: managed-markets-eu-buyer-cancellation-returns
zdroj: https://changelog.shopify.com/posts/shopify-managed-markets-now-supports-eu-buyer-cancellation-and-return-requests
shrnuto_dne: 2026-07-21
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Objednávky z Managed Markets do EU mohou nově procházet automatizovaným cancellation/return flow přes Global-e, což je vhodné zohlednit u order-status webhooků a custom reportingu pro klienty s EU cross-border prodejem."
dotcene_klienty: []
souvisejici: [managed-markets-duties-inclusive-pricing, managed-markets-uk-canada-launch, eu-customs-duty-3-euro-import]
tldr: "Shopify Managed Markets nově automaticky zajišťuje 14denní právo na zrušení objednávky a vrácení zboží pro EU zákazníky v souladu s evropským právem na odstoupení od smlouvy."
tagy: [managed-markets, eu, cancellation, returns, compliance, right-of-withdrawal]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Managed Markets je Shopify služba pro cross-border prodej, ve které Shopify přes partnera Global-e (jako merchant of record) přebírá odpovědnost za výpočet cla, daní a celní compliance při prodeji do zahraničí. EU spotřebitelské právo přitom vyžaduje tzv. Right of Withdrawal — zákazník má nárok zrušit objednávku nebo vrátit zboží do 14 dnů od nákupu bez udání důvodu, a to bez ohledu na to, odkud prodejce zboží odesílá.

    Doposud musel merchant tuto povinnost řešit sám, ať už vlastním customer service procesem nebo integrací s externím returns řešením. Nová funkce přidává do Managed Markets managed pravidlo, které pro EU-bound objednávky automaticky umožňuje zákazníkovi požádat o zrušení nebo vrácení zboží přímo přes standardní Shopify buyer rozhraní (např. sekce objednávky v zákaznickém účtu nebo order status stránka), v souladu s 14denní lhůtou vyžadovanou evropskou legislativou.

    Aktivace je automatická a nevyžaduje žádné nastavení navíc — funguje pro všechny merchanty používající Managed Markets pro EU destinace. Jedinou povinností, která zůstává na merchantovi, je zajištění return shipping labelu pro vrácené zboží. Shopify tím snižuje compliance zátěž spojenou s přeshraničním prodejem do EU a zároveň sjednocuje zákaznickou zkušenost s cancellation/return procesem napříč trhy, kde Managed Markets působí.
  zdroje:
    - title: "Shopify: Shopify Managed Markets now supports EU buyer cancellation and return requests"
      url: "https://changelog.shopify.com/posts/shopify-managed-markets-now-supports-eu-buyer-cancellation-and-return-requests"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Managed Markets nově zahrnuje **managed 14-day cancellation and return rule** pro objednávky mířící do EU, čímž pokrývá požadavky evropského práva na odstoupení od smlouvy (Right of Withdrawal). Zákazníci mohou požádat o zrušení objednávky nebo vrácení zboží přímo přes standardní Shopify buyer rozhraní, bez nutnosti kontaktovat merchanta manuálně nebo procházet externím returns portálem.

Proces běží přes Global-e jako merchant of record — stejně jako u výpočtu cla a daní v rámci Managed Markets. Merchantovi zůstává jediná povinnost: zajistit return shipping label pro vrácené zboží. Feature se aktivuje automaticky pro EU-bound objednávky, žádná konfigurace v adminu není potřeba.

## Časová osa

- 2026-07-16 — Shopify changelog oznamuje podporu EU buyer cancellation a return requests v Managed Markets

## Dopad pro nás

**Pro vývojáře:** Feature nemá vlastní dedikovaný Admin API scope — jde o merchant-facing rozšíření uvnitř Managed Markets/Global-e flow. Nepřímý dopad může být v tom, že EU objednávky procházející tímto cancellation/return procesem mohou generovat odlišné stavy nebo eventy (cancellation, refund, return) oproti standardnímu flow. Pokud klient zpracovává order/fulfillment webhooky ve vlastním reportingu nebo ERP integraci, je vhodné ověřit, že tyto stavy jsou správně zachyceny a nezpůsobují nekonzistence v evidenci vratek.

**Pro PM / PO:** Relevantní téma pro klienty s Managed Markets prodávající do EU — snižuje se compliance riziko spojené s Right of Withdrawal a zjednodušuje se customer service u cross-border objednávek, protože zákazník řeší cancellation/return přímo v Shopify rozhraní. Stojí za to zmínit u klientů, kteří řeší EU regulatorní požadavky na vracení zboží nebo si stěžují na manuální zátěž spojenou s přeshraničními reklamacemi.

## Použití v Integrátoru

Přímý technický dopad na naši integraci je nízký, jde o merchant-facing compliance rozšíření bez nové API funkcionality. Konzultační relevance spočívá v ověření, že objednávková data z EU Managed Markets flow (cancellations, returns) jsou správně zpracována v navazujících systémech klienta.
