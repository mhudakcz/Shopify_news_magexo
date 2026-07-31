---
date: 2026-07-30
title: "orderUpdate změna shipping address znovu vypočítá daně (od 2026-08-31)"
title_en: "Updating an order shipping address now recalculates taxes"
slug: orderupdate-shipping-address-recalculates-taxes
zdroj: https://shopify.dev/changelog/updating-an-orders-shipping-address-returns-accurate-financial-data
shrnuto_dne: 2026-07-31
kategorie: [breaking-change]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-08-31
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Order update flow může měnit shipping address na existujících objednávkách; pokud po takové úpravě čteme nebo cachujeme totals/tax lines (např. pro export do ERP), musíme počítat s tím, že se hodnoty od 2026-08-31 automaticky přepočítají."
dotcene_klienty: []
souvisejici: [lineitem-price-after-discounts-before-taxes, tax-inclusive-countries-update, customer-tax-settings-admin-api]
tldr: "Od 31. 8. 2026 orderUpdate mutation (GraphQL i REST) při změně shipping address u nevyfulfillnutých objednávek automaticky přepočítá daně podle nové destinace — dřív zůstaly staré, často neplatné daně."
tagy: [admin-graphql-api, admin-rest-api, order-update, taxes, breaking, "2026-08-31"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Mutace `orderUpdate` (a její REST ekvivalent) slouží k úpravě objednávky po jejím vytvoření — typicky se používá při opravě chybně zadané doručovací adresy, ať už na žádost zákazníka, nebo když ji opraví zákaznická podpora či automatizovaná app. Dosud tato mutace uložila novou adresu, ale daňové řádky (`taxLines`) a celkové částky (`totalTaxSet`, totals) ponechala beze změny — tedy odpovídaly původní, nikoliv nové destinaci. V praxi to znamenalo, že např. přesun objednávky z jednoho státu USA do druhého s jinou daňovou sazbou vedl k finančním datům, která neodpovídala realitě, a obchodník musel daně dopočítat ručně nebo si vytvořit vlastní workaround.

    Od 31. 8. 2026 Shopify tuto mezeru zavírá: aktualizace shipping address přes `orderUpdate` automaticky spustí přepočet daní podle nové destinace, takže `taxLines`, `totalTaxSet` a navazující totals zůstanou konzistentní s aktuální adresou. Přepočet je ale podmíněný a nastane pouze tam, kde je bezpečný — u zcela nevyfulfillnutých objednávek. U částečně fulfillnutých objednávek (kde už část položek fyzicky opustila sklad s daní vypočítanou pro původní destinaci) nebo u objednávek, které nejsou editovatelné, se přepočet neprovede, aby nedošlo k retroaktivní změně daní na již odeslaném zboží.

    Změna se týká jak GraphQL, tak REST Admin API a nevyžaduje upgrade API verze — jde o změnu chování existující mutace k pevnému datu, ne o nové pole. Apps, které po úpravě adresy čtou nebo cachují finanční data objednávky (např. pro fakturaci, ERP export nebo zákaznický servis), by si měly ověřit, že po tomto datu znovu načítají `taxLines`/totals místo použití dřívějších hodnot. Webhook `orders/edited` navíc notifikuje odběratele, že k přepočtu došlo, takže ho lze využít k invalidaci lokální cache namísto pollingu.
  zdroje:
    - title: "Shopify: Updating an order shipping address now recalculates taxes"
      url: "https://shopify.dev/changelog/updating-an-orders-shipping-address-returns-accurate-financial-data"
    - title: "LineItem.priceAfterAllDiscountsBeforeTaxesSet field now available"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/lineitem-price-after-discounts-before-taxes/"
    - title: "Customer.taxSettings dostupné v Admin API od 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/customer-tax-settings-admin-api/"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Od **31. 8. 2026** mutace `orderUpdate` (GraphQL i REST Admin API) při změně shipping address na objednávce automaticky přepočítá daně podle nové destinace.

- **Dřív:** nová adresa se uložila, ale `taxLines`/`totalTaxSet` zůstaly beze změny — odpovídaly staré destinaci
- **Nově:** daně se přepočítají na novou adresu — ale **jen u zcela nevyfulfillnutých objednávek**
- **Přepočet se neprovede** u částečně fulfillnutých objednávek (aby se neměnily daně na již odeslaném zboží) nebo u objednávek, které nejsou editovatelné
- Nevyžaduje upgrade API verze — je to změna chování existující mutace, ne nové pole
- Webhook `orders/edited` notifikuje o proběhlém přepočtu

## Časová osa

- **2026-07-30** — Shopify zveřejnil changelog s oznámením
- **2026-08-31** — chování se mění, `orderUpdate` začíná automaticky přepočítávat daně u shipping address úprav

## Dopad pro nás

**Pro vývojáře:**
Jakýkoli kód, který po úpravě shipping address (přes `orderUpdate` nebo REST `PUT /orders/{id}.json`) čte nebo cachuje `taxLines`, `totalTaxSet` či jiné totals, by po 31. 8. 2026 měl počítat s tím, že se tyto hodnoty mohou lišit od stavu před úpravou. Doporučené kroky:
- Po address update vždy znovu načíst `taxLines`/totals, nespoléhat na dříve uložené hodnoty
- Zkontrolovat post-order address correction workflows (zákaznická podpora, opravy chybných adres) — pokud finanční data posílají dál (faktura, ERP export), musí použít přepočtenou verzi
- Využít webhook `orders/edited` k invalidaci lokální cache místo pollingu
- Ověřit chování zvlášť u částečně fulfillnutých objednávek, kde k přepočtu nedojde

**Pro PM / PO:**
Jde o opravu dlouhodobě nepřesného chování — obchodníci, kteří opravují adresy po vytvoření objednávky, dostanou konečně správné daně bez ruční intervence. Riziko je jen tam, kde app/integrace spoléhala na to, že se daně po address update nemění (např. reporting postavený na "zamrzlých" totals).

## Použití v Integrátoru

Pokud order update flow umožňuje měnit shipping address na existujících objednávkách, stojí za to zkontrolovat, zda se čtené totals/tax lines po takové úpravě znovu načítají z API, nebo zda se používá dříve uložená (potenciálně zastaralá) hodnota.
