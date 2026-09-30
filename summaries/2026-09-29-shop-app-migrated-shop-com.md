---
date: 2026-09-29
title: "Shop web experience se přesunul z shop.app na shop.com"
title_en: "Shop is now at shop.com"
slug: shop-app-migrated-shop-com
zdroj: https://changelog.shopify.com/posts/shop-is-now-at-shop-com
shrnuto_dne: 2026-09-30
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý technický dopad nemá, jen pokud merchant někde odkazuje na shop.app (marketing, deep linky, bookmarky), stojí za to odkazy časem aktualizovat na shop.com."
dotcene_klienty: []
souvisejici: [editions-spring-2026-shop-app, shop-app-conversational-ai-search, shop-campaigns-performance-analytics-tools]
tldr: "Webová část Shopu se přesunula z domény shop.app na shop.com, staré odkazy se přesměrovávají a store, produkty ani channel settings se nemění."
tagy: [shop-app, shop-com, domain-migration, branding]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shop je spotřebitelská nákupní platforma Shopify, která agreguje obchody, sleduje zásilky a umožňuje nákup přes Shop Pay. Pro merchanty je zároveň prodejním kanálem, přes který se jejich produkty dostávají k zákazníkům mimo vlastní storefront. Webová část Shopu dosud žila na doméně shop.app, vedle ní existuje mobilní aplikace Shop.
    Shopify nyní oznámil, že webový zážitek Shopu se přesouvá na doménu shop.com. Jde o čistě doménovou změnu, tedy brand consolidation pod jednou krátkou a snadno zapamatovatelnou adresou. Podle oznámení zůstává vše ostatní beze změny: store, produkty i channel settings se přenášejí tak, jak jsou, a existující odkazy na shop.app se automaticky přesměrovávají na shop.com.
    Pro merchanta se tak nic nevyžaduje. Smysl má jen pozvolna projít místa, kde se na shop.app odkazuje ručně, například bio na sociálních sítích, reklamní kampaně, newslettery, tištěné materiály, FAQ nebo uložené záložky. Přesměrování zajistí, že odkazy nepřestanou fungovat, ale nové materiály je rozumné psát rovnou s doménou shop.com. Změna navazuje na dlouhodobé rozšiřování Shopu jako samostatné značky a prodejního kanálu, o kterém jsme psali například v souvislosti s Editions Spring 26.
  zdroje:
    - title: "Shopify: Shop is now at shop.com"
      url: "https://changelog.shopify.com/posts/shop-is-now-at-shop-com"
    - title: "Editions Spring '26: Shop app — AI search, omnichannel a Shop Minis"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-shop-app/"
    - title: "Shop app — konverzační AI vyhledávání založené na vkusu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shop-app-conversational-ai-search/"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přesunul webový zážitek Shopu z domény **shop.app** na **shop.com**. Jde výhradně o změnu webové adresy, pod kterou zákazníci Shop na webu najdou. Samotný obsah, nákupní funkce ani nastavení na straně merchanta se podle oznámení nemění.

Store, produkty a channel settings zůstávají beze změny a přenášejí se přesně tak, jak jsou. Existující odkazy na shop.app se automaticky přesměrovávají na shop.com, takže se nerozbijí deep linky ani záložky, které zákazníci nebo merchanti už mají.

Oznámení neuvádí žádný dopad na API ani na integrace. Merchant nemusí nic zapínat, migrovat ani znovu publikovat.

## Časová osa

- 2026-09-29 – změna zveřejněna v Shopify merchant changelogu, shop.com je od tohoto data adresou webového zážitku Shopu
- Průběžně – odkazy na shop.app se přesměrovávají na shop.com, ruční aktualizace externích odkazů je volitelná a dle vlastního uvážení

## Dopad pro nás

**Pro vývojáře:** Žádná povinná akce. Pokud máme v kódu, šablonách nebo konfiguraci obchodů natvrdo zapsané odkazy na shop.app (například v patičce, v transakčních e-mailech nebo ve strukturovaných datech), funguje díky přesměrování dál vše, ale při nejbližší úpravě se vyplatí odkaz změnit na shop.com. Stejně tak stojí za kontrolu případné allowlisty domén nebo CSP pravidla, pokud by se na shop.app explicitně odkazovalo. Z oznámení ale takový požadavek nevyplývá, jde jen o preventivní kontrolu.

**Pro PM / PO:** Informativní novinka bez termínu a bez nutnosti zásahu. Relevantní hlavně pro merchanty, kteří propagují svoji přítomnost v Shopu, například v marketingových materiálech, reklamách, sociálních profilech nebo newsletterech. Stačí merchanta stručně upozornit, že nové materiály mají používat shop.com, a staré odkazy mohou zůstat, dokud se nebudou přirozeně aktualizovat.

## Použití v Integrátoru

Přímé využití nemá, jde o doménovou změnu bez dopadu na API a synchronizace. Jediná praktická souvislost je případná aktualizace pevně zapsaných odkazů na shop.app u obchodů, které Shop aktivně propagují.
