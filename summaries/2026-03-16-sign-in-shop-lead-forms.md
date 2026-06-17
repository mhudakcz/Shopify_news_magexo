---
date: 2026-03-16
title: "Sign in with Shop nově funguje na více lead capture forms"
title_en: "Sign in with Shop now works on more lead capture forms"
slug: sign-in-shop-lead-forms
zdroj: https://changelog.shopify.com/posts/shopify-forms-update-with-sign-in-with-shop
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-05

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Forms + Shop SSO feature."
kontext:
  background: |
    Sign in with Shop je jednotný přihlašovací mechanismus (SSO) postavený na Shop účtech Shopify. Zákazník si jednou vytvoří Shop účet a poté se může přihlásit do libovolného obchodu, který tuto funkci podporuje, bez nutnosti znovu vyplňovat osobní údaje. Jde o součást širší platformy Shop Pay.

    Shopify Forms je nativní aplikace sloužící k vytváření a správě marketingových formulářů — pop-upů, bannerů a inline formulářů pro sběr e-mailových adres a telefonních čísel. Historicky byla integrace Sign in with Shop omezena pouze na formuláře nabízející slevový kód a vyžadovala aktivní Shop Pay na daném obchodě. Tato omezení bránila obchodníkům, kteří nechtějí zákazníky pobízet slevami nebo kteří primárně používají jiné platební metody.

    Rozšíření kompatibility otevírá cestu k plnohodnotnému budování zákaznické základny bez nutnosti finančních pobídek. Zákazníci identifikovaní přes Shop mohou být při pozdějším checkoutu automaticky rozpoznáni, což zkracuje nákupní cestu. Funkce se týká B2C e-shopů na Shopify, kde je klíčovým ukazatelem míra konverze formulářů a rychlost první objednávky.

    V ekosystému Shopify tato změna doplňuje snahy o propojení Shop aplikace s merchant storefronty přes sdílenou identitu zákazníka — podobně jako rozvoj Shop Minis a přizpůsobení product detail pages v Shop appce.
  zdroje:
    - title: "Shopify Changelog: Shopify Forms update with Sign in with Shop"
      url: "https://changelog.shopify.com/posts/shopify-forms-update-with-sign-in-with-shop"
    - title: "Shop Minis únor 2026 update — UGC tagging, SafeArea, CLI commands"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-minis-february-2026-update/"
    - title: "Customizace product detail pages na Shop appce přes blocks"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customize-shop-product-pages-blocks/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Sign in with Shop rozšířen na lead forms bez slev a non-Shop Pay storefronty — 1-tap rozpoznání + přímé account creation pro vyšší konverzi."
tagy: [shop, forms, lead-capture, sso]
---

## Co se mění
**Sign in with Shop** (Shop Pay's SSO) nyní funguje na:
- Lead forms **bez slev** (předtím vyžadováno mít discount jako incentive)
- Storefronts **bez Shop Pay** jako primární payment

Nabízí 1-tap rozpoznání + přímé account creation pro vyšší konverzi.

## Použití v Integrátoru
**Nepoužíváme** — frontend SSO feature.
