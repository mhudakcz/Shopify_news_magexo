---
date: 2026-10-28
title: "Admin GraphQL: selling plans do draft order line items (předplatné v ručních objednávkách)"
title_en: "Add selling plans to draft order line items with the Admin GraphQL API"
slug: selling-plans-draft-orders-admin-api
zdroj: https://shopify.dev/changelog/posts/add-selling-plans-to-draft-order-line-items-with-the-admin-graphql-api
shrnuto_dne: 2026-11-02
kategorie: [nova-api]
api_oblast: admin
api_verze: ["2027-01"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud při práci s draft ordery (ruční objednávky, nabídky, faktury) řešíme i předplatné, lze selling plan nově nastavit přímo na line itemu přes draftOrderCreate nebo draftOrderUpdate. Změna je aditivní a subscription contracts zatím sami neimplementujeme, takže nás přímo netlačí."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-fulfillment", "orders-webhooks-selling-plan-id-line-items", "subscription-contract-calculation-api-new"]
tldr: "Admin GraphQL API verze 2027-01 umožňuje nastavit selling plan na line itemu draft orderu přes nové pole sellingPlanId a přečíst ho zpět přes sellingPlanApplication. Podporuje recurring a prepaid plány na variantách, ale ne B2B draft ordery a draftOrderComplete s takovým draftem zatím vrací chybu, takže objednávka vzniká přes fakturu (draftOrderInvoiceSend)."
tagy: [admin-api, graphql, draft-orders, selling-plans, subscriptions, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Selling plan je v Shopify popis toho, za jakých podmínek se produkt prodává s předplatným nebo jiným alternativním modelem platby, tedy frekvence dodávek, sleva nebo způsob placení. Dosud se k line itemu daly selling plany připojit v běžném nákupu přes storefront a checkout, ale draft order, tedy ruční objednávka vytvářená v adminu nebo přes API, s nimi pracovat neuměl. Obchodník, který chtěl zákazníkovi ručně připravit objednávku s předplatným, to musel řešit jinou cestou.

    Admin GraphQL API ve verzi 2027-01 přidává na vstup `DraftOrderLineItemInput` pole `sellingPlanId`, které lze použít v mutacích `draftOrderCalculate`, `draftOrderCreate` a `draftOrderUpdate`. Na výstupu přibývá pole `sellingPlanApplication` na objektech `DraftOrderLineItem` (uložený draft) a `CalculatedDraftOrderLineItem` (náhled výpočtu před uložením). Selling plan lze nastavit jen na řádku s produktovou variantou. Podporované jsou recurring a prepaid subscription plány; plány s pevnou fakturací, například pre-ordery a try before you buy, podporované nejsou. Mimo rozsah zůstávají i B2B draft ordery, custom line items a price override na řádcích se selling plánem.

    Důležité omezení: `draftOrderComplete` zatím s draftem obsahujícím selling plan řádek nepočítá. Vrátí user error a objednávku nevytvoří. Shopify jako obchvat uvádí odeslání faktury draft orderu přes `draftOrderInvoiceSend`, takže zákazník zaplatí v checkoutu. Přehled Editions Fall '26 v našem archivu uvádí v tématu Fulfillment položku Draft order subscriptions s popisem přidání předplatného do draft orderu a odeslání faktury k dokončení platby, takže jde pravděpodobně o stejnou funkci viděnou z API strany. Dev changelog navíc odkazuje na produktový changelog a nápovědu k přidání subscriptions do draft orderů.
  zdroje:
    - title: "Shopify: Add selling plans to draft order line items with the Admin GraphQL API"
      url: "https://shopify.dev/changelog/posts/add-selling-plans-to-draft-order-line-items-with-the-admin-graphql-api"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify: Subscriptions supported in draft orders (produktový changelog)"
      url: "https://changelog.shopify.com/posts/subscriptions-supported-in-draft-orders"
    - title: "Shopify nápověda: Create draft orders, Add subscriptions"
      url: "https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders/create-draft#add-subscriptions"
    - title: "Shopify.dev: DraftOrderLineItemInput, pole sellingPlanId (verze 2027-01)"
      url: "https://shopify.dev/docs/api/admin-graphql/2027-01/input-objects/DraftOrderLineItemInput#fields-sellingPlanId"
    - title: "Archiv: Editions Fall '26, téma Fulfillment"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-fulfillment/"
    - title: "Archiv: Order webhooky nově obsahují selling_plan_id na line items"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/orders-webhooks-selling-plan-id-line-items/"
    - title: "Archiv: Nové SubscriptionContractCalculation API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/subscription-contract-calculation-api-new/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Admin GraphQL API verze `2027-01` umožňuje přiřadit selling plan k line itemu draft orderu a přečíst ho zpět. Změna je čistě aditivní a Shopify uvádí, že není potřeba žádná akce, aby stávající aplikace dál fungovaly.

**Nové prvky API:**

- **`DraftOrderLineItemInput.sellingPlanId`** – vstupní pole pro nastavení selling plánu při vytváření nebo úpravě line itemu. Použitelné v `draftOrderCalculate`, `draftOrderCreate` a `draftOrderUpdate`.
- **`DraftOrderLineItem.sellingPlanApplication`** – vrací selling plan aplikovaný na řádek uloženého draft orderu.
- **`CalculatedDraftOrderLineItem.sellingPlanApplication`** – vrací aplikovaný plán ve výsledku `draftOrderCalculate`, takže výsledek lze zobrazit před uložením.

Příklad z changelogu (vytvoření draft orderu s jednou položkou na selling planu a zpětné přečtení plánu):

```graphql
mutation {
  draftOrderCreate(input: {
    lineItems: [{
      variantId: "gid://shopify/ProductVariant/1",
      quantity: 1,
      sellingPlanId: "gid://shopify/SellingPlan/1"
    }]
  }) {
    draftOrder {
      lineItems(first: 1) {
        nodes {
          sellingPlanApplication { sellingPlanId name }
        }
      }
    }
    userErrors { field message }
  }
}
```

**Co je podporované a co ne:**

- Podporované jsou **recurring a prepaid** subscription plány a jen na řádcích s **produktovou variantou**.
- Nepodporované jsou plány s pevnou fakturací (pre-ordery, try before you buy), **B2B draft ordery**, custom line items a price override na řádcích se selling plánem.
- **`draftOrderComplete` zatím nepodporuje drafty se selling plan řádky.** Volání vrátí user error a objednávka se nevytvoří. Obchvatem je `draftOrderInvoiceSend`: faktura se odešle a zákazník dokončí platbu v checkoutu.

Důležité upřesnění k popisu změny: původní zadání počítalo s B2B scénářem (obchodní zástupce připraví draft se subscription pro velkoobchodního zákazníka). Podle changelogu ale B2B draft ordery selling plany zatím nepodporují, takže tento scénář nyní nefunguje. Funkce míří na běžné ruční objednávky s předplatným.

## Časová osa

- **2026-10-28** – publikován changelog v dev changelogu Shopify
- **2027-01-01** – datum účinnosti uvedené v metadatech changelogu, vázané na API verzi `2027-01`
- **API verze starší než 2027-01** – changelog uvádí 2027-01 jako verzi, která podporu přidává; ve starších verzích tedy `sellingPlanId` ani `sellingPlanApplication` nečekáme
- *(bez termínu)* – podpora `draftOrderComplete` pro drafty se selling plánem; Shopify uvádí jen slovo zatím, bez data
- *(bez termínu)* – podpora B2B draft orderů a fixed-billing plánů; changelog žádný termín nezmiňuje

## Dopad pro nás

**Pro vývojáře:** Žádná breaking change, žádná povinná migrace. Praktické body při případném použití:

- Pole jsou dostupná od verze `2027-01`, takže před použitím je potřeba přepnout dotazy a mutace na tuto verzi.
- Selling plan nastavujeme přes `sellingPlanId` na řádku s `variantId`. Na custom line items a na řádky s price override ho nelze použít, takovou kombinaci je vhodné ošetřit už v naší logice, aby se nevracel zbytečný user error.
- `draftOrderCalculate` s `sellingPlanId` umožňuje náhled výsledku přes `CalculatedDraftOrderLineItem.sellingPlanApplication` před uložením.
- Pokud některý náš tok dokončuje draft ordery přes `draftOrderComplete`, drafty se selling plan řádky takto dokončit nelze. Je nutné přejít na `draftOrderInvoiceSend` a nechat zákazníka zaplatit v checkoutu, nebo takové drafty z automatického dokončování vyřadit a sledovat user errors.
- Changelog neuvádí, kdy a jak po zaplacení faktury vznikne subscription contract ani jak se chová návaznost na order webhooky. Tuto část je potřeba ověřit na vývojovém obchodě. K identifikaci řádků s předplatným v objednávkách se hodí [selling_plan_id v order webhookách](/Shopify_news_magexo/zmena/orders-webhooks-selling-plan-id-line-items/), pokud je webhook subscription na odpovídající API verzi.
- Pro správu už existujících kontraktů je relevantní [nové SubscriptionContractCalculation API](/Shopify_news_magexo/zmena/subscription-contract-calculation-api-new/); draft order s selling plánem tuto vrstvu nenahrazuje.

**Pro PM / PO:** Nízká naléhavost, funkce je užitečná jen pro obchody, které prodávají předplatné a část objednávek zadávají ručně (telefonické nebo e-mailové objednávky, nabídky na míru, převod zákazníka na předplatné). Hlavní hodnota je, že obchodník nemusí zákazníka posílat znovu na storefront, ale pošle mu fakturu s už nastaveným předplatným. Je potřeba jasně komunikovat dvě omezení: B2B draft ordery zatím nejsou podporované, takže velkoobchodní scénář s předplatným zatím postavit nelze, a objednávku nelze dokončit přes `draftOrderComplete`, vždy je potřeba faktura a platba v checkoutu. Doporučení je sledovat, zda Shopify omezení v dalších verzích uvolní, a funkci zatím nenabízet jako hotové řešení pro B2B.

## Použití v Integrátoru

Možné – pokud naše řešení vytvářejí nebo upravují draft ordery pro obchody s předplatným, lze selling plan nastavit přímo na line itemu po přechodu na API verzi 2027-01. Zatím jde spíš o sledování a ověření omezení (draftOrderComplete, B2B), změna nás přímo neblokuje.

## ⬅️ Související
🔗 [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Fulfillment](/Shopify_news_magexo/zmena/editions-fall-2026-fulfillment/)
🔗 [Order webhooky: selling_plan_id na line items](/Shopify_news_magexo/zmena/orders-webhooks-selling-plan-id-line-items/)
🔗 [Nové SubscriptionContractCalculation API](/Shopify_news_magexo/zmena/subscription-contract-calculation-api-new/)
