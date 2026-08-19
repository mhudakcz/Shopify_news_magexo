---
date: 2026-08-13
title: "Automatický přepočet daní při změně shipping address u order (s preview)"
title_en: "Taxes now recalculate when you change an order shipping address"
slug: taxes-recalculate-order-shipping-address-merchant
zdroj: https://changelog.shopify.com/posts/taxes-now-recalculate-automatically-when-you-change-an-order-s-shipping-address
shrnuto_dne: 2026-08-19
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-08-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud řešíme opravy doručovací adresy na už existujících objednávkách (zákaznická podpora, post-order correction), stojí za to ověřit, jestli tento vestavěný Shopify preview stačí, nebo jestli vlastní flow musí přepočet a odsouhlasení rozdílu řešit samo."
dotcene_klienty: []
souvisejici: [orderupdate-shipping-address-recalculates-taxes, lineitem-price-after-discounts-before-taxes, customer-tax-settings-admin-api]
tldr: "Admin teď při ruční změně shipping address u objednávky rovnou přepočítá daně a před uložením ukáže merchantovi preview rozdílu v platbě."
tagy: [order-management, shipping, taxes, admin, recalculation, financial-accuracy]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Když merchant nebo zákaznická podpora po vytvoření objednávky opraví doručovací adresu — typicky proto, že zákazník zadal špatný stát, PSČ nebo celou zemi — daňová sazba na objednávce dosud zůstávala navázaná na původní destinaci. Adresa se v adminu změnila, ale `taxLines` a celkové částky přepočet nereflektovaly, takže objednávka mohla mít daně vypočítané pro jinou lokalitu, než kam skutečně mělo zboží jet. Obchodník musel rozdíl dopočítat ručně a sám se rozhodnout, jestli zákazníkovi rozdíl doúčtovat, nebo mu naopak něco vrátit.

    Od 13. 8. 2026 Shopify Admin tuto mezeru zavírá na úrovni uživatelského rozhraní: při editaci shipping address u objednávky admin automaticky přepočítá daně podle nové destinace a před uložením zobrazí preview — merchant vidí novou daňovou částku i výsledný rozdíl v platbě ještě předtím, než změnu potvrdí, a může se rozhodnout, jak rozdíl se zákazníkem vyrovnat. Jde o vylepšení existujícího admin flow pro editaci objednávky, ne o novou API funkci.

    Tahle merchant-facing změna navazuje na dřívější dev-side oznámení z 30. 7. 2026, které popisovalo stejný přepočet na úrovni `orderUpdate` mutace (GraphQL i REST Admin API) s účinností od 31. 8. 2026 — viz `orderupdate-shipping-address-recalculates-taxes`. Zatímco API-level chování mutace se mění až koncem srpna a týká se programatických úprav adresy, tahle položka popisuje, že samotné admin UI s přepočtem a preview je dostupné už teď. Přepočet se stejně jako u API verze uplatní jen tam, kde je bezpečný — u objednávek, které ještě nejsou (plně) fulfillnuté.
  zdroje:
    - title: "Shopify: Taxes now recalculate when you change an order shipping address"
      url: "https://changelog.shopify.com/posts/taxes-now-recalculate-automatically-when-you-change-an-order-s-shipping-address"
    - title: "orderUpdate změna shipping address znovu vypočítá daně (od 2026-08-31)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/orderupdate-shipping-address-recalculates-taxes/"
  generated_at: 2026-08-19T12:00:00Z
  model: claude-sonnet-5
---
## Co se mění

Shopify Admin od **13. 8. 2026** při ruční změně shipping address na objednávce:

- automaticky přepočítá daně podle nové doručovací destinace,
- před uložením zobrazí **preview** — novou daňovou částku a rozdíl v platbě oproti původnímu stavu,
- nechá na merchantovi, jak rozdíl se zákazníkem vyrovná (doúčtovat, nebo vrátit).

Jde o vylepšení admin UI pro editaci objednávky, ne o nové pole nebo endpoint v API. Přepočet se uplatní jen u objednávek, které lze ještě bezpečně upravit (nejsou plně fulfillnuté) — stejné omezení, jaké platí i pro API-level přepočet přes `orderUpdate`.

## Časová osa

- **2026-07-30** — Shopify oznámil na dev changelogu, že mutace `orderUpdate` (GraphQL i REST) bude při změně shipping address automaticky přepočítávat daně
- **2026-08-13** — merchant-facing rollout: admin UI pro editaci objednávky nabízí přepočet daní s preview před uložením
- **2026-08-31** — účinnost API-level změny chování mutace `orderUpdate`

## Dopad pro nás

**Pro vývojáře:** Samotná admin UI funkce nevyžaduje kód navíc — je to hotové chování v Shopify adminu. Relevantní zůstává API-level dopad popsaný u `orderupdate-shipping-address-recalculates-taxes`: pokud po úpravě shipping address čteme nebo cachujeme `taxLines`/totals (např. pro export do účetnictví nebo ERP), musíme po 31. 8. 2026 počítat s tím, že se tyto hodnoty mohou lišit od stavu před úpravou adresy, a znovu je načíst z API místo použití starší hodnoty.

**Pro PM / PO:** Merchanti, kteří opravují adresy po vytvoření objednávky, dostávají konečně transparentní přepočet přímo v adminu — vidí rozdíl v platbě dřív, než změnu potvrdí, a nemusí daně dopočítávat ručně mimo Shopify. Pro klienty s vlastním post-order support flow je vhodné ověřit, zda se na tento vestavěný preview dá spolehnout, nebo zda si podpora rozdíl dosud dopočítávala jinde.

## Použití v Integrátoru

Pokud řešíme opravy doručovací adresy na existujících objednávkách (zákaznická podpora, oprava chybné adresy), stojí za to zkontrolovat, jestli stačí spolehnout se na tento vestavěný Shopify preview, nebo jestli vlastní flow po address update musí přepočet a odsouhlasení rozdílu s zákazníkem řešit samostatně.
