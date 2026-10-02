---
date: 2026-10-01
title: "Order webhooks: selling_plan_id na line items (subscription identifikace)"
title_en: "Orders webhooks now include selling_plan_id on line items"
slug: orders-webhooks-selling-plan-id-line-items
zdroj: https://shopify.dev/changelog/posts/orders-webhooks-now-include-selling_plan_id-on-line-items
shrnuto_dne: 2026-10-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud zpracováváme order webhooky pro projekty s předplatným, můžeme z payloadu rovnou rozlišit subscription a jednorázové položky a vypustit dodatečné Admin API volání."
dotcene_klienty: []
souvisejici: [inventory-transfer-webhooks-origin-destination, subscription-contracts-without-payment-methods, purchase-type-filtering-app-discounts-enforced]
tldr: "Order webhooky v API verzi 2026-10 a novější obsahují na každém line item pole selling_plan_id (u jednorázových položek null), takže subscription aplikace a reporting poznají předplatné bez dalšího Admin API dotazu."
tagy: [events, webhooks, orders, subscriptions, selling-plan, line-items]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Selling plany jsou v Shopify základem pro prodej s předplatným a dalších alternativních modelů platby – určují, za jakých podmínek (frekvence, sleva, cyklus) se produkt prodává. Když zákazník koupí položku přes selling plan, vznikne order jako u každého jiného nákupu, ale pro aplikace, které předplatné spravují nebo o něm reportují, je klíčové vědět, které line items se k plánu vážou. Do této chvíle order webhook payload tuto informaci na úrovni line item neobsahoval, a aplikace tak musely po přijetí webhooku dohledávat detaily dalším voláním Admin API.

    Nová změna přidává do order webhooků na každý line item pole `selling_plan_id`. U položek prodaných přes selling plan obsahuje identifikátor plánu, u běžných jednorázových položek vrací `null`. Jde tedy o drobné, ale praktické rozšíření payloadu: jedna objednávka může obsahovat mix předplatného i jednorázových produktů a rozlišení na úrovni jednotlivých řádků je přesně to, co analytika, routing nebo reporting potřebují. Pole identifikuje plán, nikoli konkrétní subscription contract, takže pro detail kontraktu (stav, platební metoda, příští billing) bude dál nutný Admin API dotaz.

    Změna se týká API verze `2026-10` a novější. Starší API verze zůstávají beze změny a Shopify uvádí, že aplikace nemusí nic upravovat, aby jim dál fungovaly. Protože tvar payloadu webhooku se řídí verzí, na kterou je subscription navázaná, projeví se nové pole u konkrétní aplikace až po přepnutí webhook subscription na 2026-10. Pole je navíc čistě aditivní, takže existující parsery by ho měly bez problémů ignorovat.
  zdroje:
    - title: "Shopify: Orders webhooks now include selling_plan_id on line items"
      url: "https://shopify.dev/changelog/posts/orders-webhooks-now-include-selling_plan_id-on-line-items"
    - title: "Shopify: Webhook topics – dokumentace"
      url: "https://shopify.dev/docs/api/admin-rest/latest/resources/webhook#event-topics"
    - title: "Inventory transfer webhooks: origin + destination location ID v 2026-07"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/inventory-transfer-webhooks-origin-destination/"
    - title: "Subscription contracts bez payment method"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contracts-without-payment-methods/"
    - title: "Purchase-type filtering pro app discounts nyní vynucováno na checkoutu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/purchase-type-filtering-app-discounts-enforced/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Order webhooky nově nesou na každém položkovém řádku (`line_items[]`) pole `selling_plan_id`:

- **Subscription položka** – pole obsahuje identifikátor selling plánu, přes který byla položka prodána.
- **Jednorázová položka** – pole je `null`.

Díky tomu lze přímo z payloadu webhooku rozlišit, které řádky objednávky patří k předplatnému a které ne, a to i u objednávek s kombinovaným košíkem. Odpadá tak dodatečné Admin API volání, které aplikace dosud dělaly jen proto, aby selling plan dohledaly.

Změna platí pro API verzi `2026-10` a novější. Starší verze zůstávají beze změny a není potřeba žádná akce, aby stávající aplikace dál fungovaly. Pole `selling_plan_id` identifikuje plán, ne konkrétní subscription contract – pro detaily kontraktu bude dál potřeba dotaz na Admin API.

Drobná poznámka k ověření: ukázka v changelogu uvádí hodnotu jako číslo, zatímco textový popis mluví o string identifikátoru. Přesný formát (číselné ID, nebo Global ID) proto doporučujeme potvrdit na reálném payloadu z vývojového obchodu a parser psát tolerantně k oběma variantám.

## Časová osa

- **2026-10-01** – publikován changelog, pole `selling_plan_id` dostupné v payloadu order webhooků od API verze `2026-10`
- **API verze 2026-10 a novější** – nové pole v payloadu; shrnutí zdrojové stránky zmiňuje i datum 2026-09-10 spojené s touto verzí (pravděpodobně dřívější zpřístupnění verze), což je vhodné ověřit na originálu
- **API verze před 2026-10** – beze změny, pole se v payloadu neobjevuje
- *(bez termínu)* – žádná deprecation ani povinná migrace, jde o aditivní rozšíření

## Dopad pro nás

**Pro vývojáře:** Aplikace a integrace, které z order webhooků zjišťují, zda jde o předplatné, mohou po přepnutí subscription na API verzi `2026-10` číst `selling_plan_id` přímo z `line_items[]` a vypustit navazující Admin API dotaz. To snižuje latenci i spotřebu rate limitu, zejména při vyšším objemu objednávek. Parser je vhodné napsat tak, aby `null` považoval za jednorázovou položku, a ověřit datový typ pole na skutečném payloadu. Pro detail kontraktu (stav, platební metoda, další billing) bude stále nutné sáhnout na Admin API.

**Pro PM / PO:** Nízká naléhavost, žádná povinná akce. Příležitost je v subscription analytice (podíl předplatného v objednávce, rozdělení tržeb podle plánu), v routování objednávek podle typu položek a v dunning procesech, kde je potřeba rychle poznat, že selhání se týká předplatného. U projektů, které dnes selling plan dohledávají dodatečným voláním, jde o jednoduchou optimalizaci s malým rizikem. Další kontext k předplatnému v ekosystému viz související články o subscription contracts a purchase-type filteringu.

## Použití v Integrátoru

Možné – pokud při zpracování order webhooků rozlišujeme subscription a jednorázové položky, lze dohledání selling plánu nahradit čtením pole z payloadu po přechodu na API verzi 2026-10. Zatím jde spíš o sledování a drobnou optimalizaci při příští úpravě webhook handleru.
