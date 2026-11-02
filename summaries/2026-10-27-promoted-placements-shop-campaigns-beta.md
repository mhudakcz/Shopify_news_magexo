---
date: 2026-10-27
title: "Promoted Placements beta — nyní integrováno se Shop Campaigns (dev earnings)"
title_en: "Promoted Placements beta now includes Shop Campaigns"
slug: promoted-placements-shop-campaigns-beta
zdroj: https://shopify.dev/changelog/posts/promoted-placements-beta-now-includes-shop-campaigns
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme stavět vlastního AI agenta nebo shopping aplikaci nad Catalog API, můžeme přes Promoted Placements vydělávat provizi i z obchodů, které ji financují přes Shop Campaigns; jinak jde o sledování trendu."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-agentic", "sponsored-products-catalog-api", "shop-campaigns-shopifyql"]
tldr: "Promoted Placements beta v Catalog API nově zahrnuje Shop Campaigns: když výsledek search_catalog pochází od obchodu se Shop Campaigns, vývojář získá kromě základní sazby Shopify i provizi, kterou tento obchod financuje. Akce není vyžadována a přístup mají jen účastníci bety."
tagy: [promoted-placements, shop-campaigns, developer-earnings, catalog-api, monetization]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Promoted Placements je program, ve kterém vývojáři AI agentů a shopping aplikací vydělávají provizi z nákupů zprostředkovaných přes Catalog API. Technicky se využívá nástroj search_catalog: varianta produktu, která je promoted placement, nese v odpovědi objekt placement a v něm sazbu provize. Program Shopify představil v červnu 2026 jako sponsored products s Catalog API (developer preview, přístup na pozvánku).

    Změna z 27. října 2026 propojuje program se Shop Campaigns, tedy s reklamním nástrojem, kterým obchody platí za prodeje vyvolané reklamou. Pokud obchod provozuje Shop Campaigns se zapnutými externími platformami, může nově zahrnout i Catalog API. Provize, kterou obchod financuje, se pak přičte k základní sazbě Shopify a vývojář, jehož agent prodej zprostředkoval, ji dostane. Pole placement.commission.percentage.value vrací jednu celkovou hodnotu, takže sazba se mezi produkty liší. Changelog sám žádné číslo neuvádí, dokumentace Promoted Placement uvádí základní sazbu 0,3 % a upozorňuje, že pro developer preview se může před obecnou dostupností změnit.

    Strategicky to zapadá do podzimních Editions: příspěvek vyšel den před zveřejněním Editions Fall '26 a stránka Editions ho mezi položkami tématu Agentic neuvádí, ale tematicky navazuje na Shopify jako backend pro agentic shopping a na rozšiřování Shop Campaigns (v Editions Fall '26 jde o nové trhy a platbu jen za prodej). Pro obchody je to další místo, kam může plynout jejich reklamní provize. Pro vývojáře agentů je to způsob, jak z doporučování produktů v AI konverzaci vydělat víc než jen základní sazbu, ale zatím jen pro pozvané účastníky bety.
  zdroje:
    - title: "Shopify: Promoted Placements beta now includes Shop Campaigns"
      url: "https://shopify.dev/changelog/posts/promoted-placements-beta-now-includes-shop-campaigns"
    - title: "Shopify dev docs: Promoted Placement"
      url: "https://shopify.dev/docs/agents/catalog/promoted-placement"
    - title: "Shopify dev docs: Catalog"
      url: "https://shopify.dev/docs/agents/catalog"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Promoted Placements je nově v betě a zahrnuje Shop Campaigns. Když výsledek `search_catalog` pochází od obchodu, který provozuje Shop Campaigns, vývojář získá provizi, kterou tento obchod financuje, a to navíc k základní sazbě Shopify. Shopify v changelogu uvádí, že žádná akce není vyžadována.

Co z příspěvku plyne technicky:

- Obchody, které provozují Shop Campaigns se zapnutými externími platformami, mohou nově zahrnout Catalog API.
- U takových produktů vrací `placement.commission.percentage.value` celkovou sazbu, tedy provizi obchodu plus základní sazbu Shopify. Je to jedna hodnota v procentech, ne rozpis na dvě složky.
- Kupující, který klikne na produkt s provizí financovanou obchodem, je přesměrován do Shop (shop.com).
- Nárok mají organizace v betě Promoted Placements, které přijaly podmínky a zapnuly volbu Earn commission u uloženého katalogu. Přístup je na pozvánku a vede přes waitlist uvedený v dokumentaci.

Pokyny pro vývojáře z changelogu: u `search_catalog` dál posílat `catalog.catalog_id` zapsaného katalogu, kupující směrovat na URL varianty přesně tak, jak ji Shopify vrátí, a pokud agent sazby zobrazuje nebo vykazuje, číst je z `placement.commission.percentage.value`, protože se liší podle produktu. Provize se týká jen výsledků `search_catalog` a jen produktů od obchodů na Shopify.

Doplnění z dokumentace Promoted Placement (v changelogu není):

- Základní sazba je podle dokumentace 0,3 % (30 bps) z přiřazených nákupů způsobilých produktů a může se před obecnou dostupností změnit.
- Provize navíc od Shop Campaigns se podle dokumentace vztahuje jen na produkty v aktivní kampani v USA a vyplácí se v USD. Vyšší sazba platí pouze tehdy, když kupující nákup dokončí v Shop (mobilní aplikace nebo shop.com); jinak vývojář dostane jen základní sazbu, pokud na ni má nárok.
- Atribuce je last non-direct click s oknem 7 dní. Vratky, storna a refundace související provizi ruší.
- Odkazy se nesmí přesměrovávat, maskovat vlastní doménou ani upravovat. Košíkové a checkout toky, které přidávají jen ID variant, atribuci k objednávce nepřenášejí.
- Vývojář musí uživatelům sdělit, že může na nákupech vydělat provizi, a promoted výsledky označit tak, aby šly odlišit od organických.
- `lookup_catalog` a `get_product` objekt `placement` nevracejí, sazby se dají zjistit jen přes `search_catalog`.

## Časová osa

- 2026-06-17 — Editions Spring '26: sponsored products s Catalog API, developer preview na pozvánku (viz související článek)
- 2026-10-27 — Promoted Placements beta zahrnuje Shop Campaigns; changelog uvádí, že akce není vyžadována
- 2026-10-28 — Editions Fall '26 přináší navazující položky kolem Shop Campaigns (nové trhy, metriky přes ShopifyQL)
- Datum obecné dostupnosti (GA) zatím nebylo oznámeno

## Dopad pro nás

**Pro vývojáře:** Pokud stavíme vlastního shopping agenta nebo aplikaci nad Catalog API, vyplatí se přihlásit do waitlistu a ověřit, zda se organizace dostane do bety. Změna nic nerozbíjí a nic nevyžaduje, ale mění, jak číst sazby: nepočítat s pevnou hodnotou a nikdy ji nehardcodovat, brát vždy `placement.commission.percentage.value` z konkrétního výsledku. Důležité je vést kupujícího přes URL varianty beze změn, jinak se atribuce ztratí. Pozor také na to, že agent, který místo odkazu na variantu staví košík nebo checkout z ID variant, o provizi přijde. Pro evropské nasazení je třeba počítat s povinností označit promoted výsledky a uvést, že agent může z nákupu vydělat; dokumentace odkazuje na pravidla pro skrytou reklamu v USA, EU i Velké Británii a doporučuje konzultaci s právníkem.

**Pro PM / PO:** Jde o novou příležitost k monetizaci, ne o změnu, kterou by bylo nutné řešit. Dopad na stávající projekty je nulový: nemění se synchronizace produktů, cen ani skladu. Praktická hodnota pro české a evropské obchody je zatím omezená, protože podle dokumentace se provize financovaná přes Shop Campaigns týká kampaní v USA a výplat v USD, a výplata jde přes Partner payout až po ověření konverze. Obchodům, které Shop Campaigns používají, stojí za to zmínit, že se jejich provize může dostat i k agentům třetích stran, pokud mají zapnuté externí platformy; zda je to pro konkrétní obchod výchozí nastavení nebo vědomá volba, changelog neuvádí a je to nutné ověřit v adminu. Nejasné zůstává, jak velká bývá provize financovaná obchody, jak se bude vyvíjet základní sazba a kdy a v jakých zemích bude program dostupný obecně.

## Použití v Integrátoru

Možná. Na stávající synchronizaci produktů, cen a skladu to nemá vliv; relevantní by to bylo teprve tehdy, kdyby Integrátor dostal agentic vrstvu nebo AI shopping komponentu nad Catalog API, kde by Promoted Placements mohly být způsobem, jak z doporučování produktů vydělávat.

## ⬅️ Související

🔗 [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Agentic](/Shopify_news_magexo/zmena/editions-fall-2026-agentic/)
🔗 [Sponsored products v Catalog API (preview)](/Shopify_news_magexo/zmena/sponsored-products-catalog-api/)
🔗 [Metriky Shop Campaigns přes ShopifyQL](/Shopify_news_magexo/zmena/shop-campaigns-shopifyql/)
