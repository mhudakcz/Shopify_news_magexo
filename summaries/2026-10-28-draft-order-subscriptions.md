---
date: 2026-10-28
title: "Draft orders: subscription support — sales rep připraví subscription a pošle k invoice"
title_en: "Subscriptions supported in draft orders"
slug: draft-order-subscriptions
zdroj: https://changelog.shopify.com/posts/subscriptions-supported-in-draft-orders
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše řešení vytvářejí draft ordery nebo zpracovávají objednávky s předplatným, část objednávek může nově vznikat z draftu zaplaceného přes fakturu. Produktový changelog žádné API neuvádí, programová stránka je popsaná v souvisejícím článku o Admin GraphQL 2027-01."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-fulfillment", "selling-plans-draft-orders-admin-api", "orders-webhooks-selling-plan-id-line-items"]
editions_release: fall-2026
tldr: "Do draft orderu lze přidat subscription produkty ze subscription aplikací. Po odeslání faktury zákazník v checkoutu objednávku zkontroluje a zaplatí. Post neuvádí API, omezení ani B2B podporu a související dev changelog uvádí, že B2B draft ordery selling plany zatím nepodporují."
tagy: [draft-orders, subscriptions, selling-plans, b2b, sales-rep, invoicing]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Draft order je v Shopify ruční objednávka, kterou obchodník nebo jeho pracovník vytvoří v adminu (nebo přes API) místo toho, aby ji zákazník složil sám na storefrontu. Typicky se používá pro telefonické a e-mailové objednávky, nabídky na míru nebo objednávky vystavené jménem zákazníka. Hotový draft se zákazníkovi pošle jako faktura s odkazem do checkoutu, kde ho zaplatí. Dosud se předplatné (subscription produkty spravované subscription aplikacemi přes selling plany) do draftu přidat nedalo, takže obchodník musel zákazníka poslat zpátky na storefront, aby si předplatné objednal sám.

    Produktový changelog Shopify z 28. 10. 2026 (štítek New Orders) uvádí, že subscription produkty ze subscription aplikací lze nově přidat do draft orderů, takže obchodník může zákazníkovi nastavit opakovaný nákup. Po odeslání faktury dostane zákazník odkaz do checkoutu, kde objednávku zkontroluje a dokončí platbu. Post odkazuje na nápovědu Shopify, sekci Add subscriptions v návodu na vytvoření draft orderu. Nic dalšího neuvádí: žádné API, verzi, omezení, podporované plány ani země a žádné datum. Položka Draft order subscriptions je zároveň uvedená v Editions Fall '26 v tématu Fulfillment, ve skupině objednávek vedle dodatečných slev a write-off nevybraných zůstatků. Jde o úpravy, které Shopify zařazuje mezi nástroje pro ruční a B2B objednávky, ale u této položky se B2B výslovně nezmiňuje.

    Pro merchanty to znamená, že obchodník nebo sales rep (v praxi kdokoli z personálu s právem vytvářet draft ordery) může předplatné domluvit se zákazníkem po telefonu či e-mailu a rovnou mu poslat fakturu, aniž by zákazník musel znovu procházet storefront. Pro vývojáře existuje programová stránka téže funkce v dev changelogu (Admin GraphQL verze 2027-01, pole sellingPlanId na řádku draft orderu). Detaily a omezení, mimo jiné to, že B2B draft ordery selling plany zatím nepodporují, jsou v našem článku o API straně. Původní zadání pro tento článek počítalo s B2B scénářem (opakovaný nákup předjednaný obchodním zástupcem), ale produktový changelog B2B ani konkrétní příklad opakované objednávky neuvádí, takže tento scénář nelze brát jako potvrzený.
  zdroje:
    - title: "Shopify: Subscriptions supported in draft orders"
      url: "https://changelog.shopify.com/posts/subscriptions-supported-in-draft-orders"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify nápověda: Create draft orders, Add subscriptions"
      url: "https://help.shopify.com/en/manual/fulfillment/managing-orders/create-orders/create-draft#add-subscriptions"
    - title: "Archiv: Admin GraphQL, selling plans do draft order line items"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/selling-plans-draft-orders-admin-api/"
    - title: "Archiv: Editions Fall '26, téma Fulfillment"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-fulfillment/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v produktovém changelogu oznámil, že do draft orderů lze přidávat **subscription produkty ze subscription aplikací**. Obchodník tak může zákazníkovi ručně připravit objednávku s opakovaným nákupem. Postup podle postu:

1. Pracovník obchodu vytvoří draft order a přidá do něj subscription produkt (sekce Add subscriptions v nápovědě Shopify).
2. Obchodník draft odešle zákazníkovi jako **fakturu**.
3. Zákazník dostane odkaz do **checkoutu**, kde objednávku zkontroluje a dokončí platbu.

**Co post neuvádí:** žádné API ani API verzi, žádné požadavky (například které subscription aplikace funkci podporují), žádná omezení, dostupnost podle plánu nebo země a žádné datum účinnosti. Formulace can now naznačuje, že funkce je v Adminu dostupná už od zveřejnění, ale podmínky je potřeba ověřit v konkrétním obchodě.

**Upřesnění k původnímu popisu změny:** zadání pro tento článek mluvilo o B2B workflow s předjednaným opakovaným obchodem (sales rep připraví například měsíční auto-ship dané položky). Produktový changelog nic takového neuvádí, mluví obecně o merchantech a zákaznících. Navíc náš článek o API straně ([selling plans v draft orders](/Shopify_news_magexo/zmena/selling-plans-draft-orders-admin-api/)) podle dev changelogu uvádí, že **B2B draft ordery selling plany zatím nepodporují**. B2B scénář s předplatným proto zatím nelze předpokládat. Za sales repa zde považujeme kohokoli z personálu, kdo smí vytvářet draft ordery.

**Návaznost na API:** dev changelog popisuje programovou stránku téže funkce, tedy pole `sellingPlanId` na řádku draft orderu v Admin GraphQL API verze 2027-01, podporu recurring a prepaid plánů a to, že `draftOrderComplete` s takovým draftem zatím vrací chybu a objednávka se vytváří přes fakturu (`draftOrderInvoiceSend`). Podle toho článku dev changelog odkazuje právě na tento produktový post, takže jde o jednu funkci viděnou z pohledu merchanta i z API strany. Přesné podrobnosti jsou v něm, tento článek je nepřebírá.

## Časová osa

- **2026-10-28** — post zveřejněn v produktovém changelogu Shopify a položka Draft order subscriptions je zároveň v Editions Fall '26 (téma Fulfillment)
- **2027-01** — API verze, ve které dev changelog přidává `sellingPlanId` na řádky draft orderu (podle souvisejícího článku, datum účinnosti 2027-01-01)
- *(bez termínu)* — dostupnost podle plánů a zemí, seznam podporovaných subscription aplikací; produktový changelog nic neuvádí
- *(bez termínu)* — podpora B2B draft orderů a dokončení takových draftů přes `draftOrderComplete`; Shopify uvádí jen slovo zatím, bez data

## Dopad pro nás

**Pro vývojáře:** Žádná breaking change a žádná povinná migrace, produktový changelog vůbec nepopisuje technickou změnu. Praktické body k ověření:

- Programová práce s předplatným v draftech je až v Admin GraphQL verzi 2027-01. Zda a jak se funkce chová přes API ve starších verzích, ze zdroje nevyplývá. Pokud ji budeme chtít používat, počítejme s přechodem na tuto verzi.
- Po zaplacení faktury vznikne běžná objednávka. Zdroj ale neuvádí, kdy přesně se vytvoří subscription contract a jak se to projeví v order webhookách. Tuto část je nutné ověřit na vývojovém obchodě se subscription aplikací. K rozlišení řádků s předplatným v objednávkách lze použít [selling_plan_id v order webhookách](/Shopify_news_magexo/zmena/orders-webhooks-selling-plan-id-line-items/) (API verze 2026-10 a novější).
- Pokud některý náš tok dokončuje draft ordery automaticky přes `draftOrderComplete`, drafty s předplatným tak podle dev changelogu dokončit nelze. Je potřeba počítat s fakturou a platbou v checkoutu a ošetřit user errors.
- Objednávky vzniklé z draftu zaplaceného přes fakturu mohou mít jiný zdroj a jiné časování než objednávky ze storefrontu. Kde synchronizujeme objednávky do ERP nebo skladu, vyplatí se ověřit, že se předplatné z draftu zpracuje stejně jako z checkoutu.

**Pro PM / PO:** Nízká naléhavost, jde o příležitost pro merchanty s předplatným, kteří část objednávek zadávají ručně (telefonické a e-mailové objednávky, nabídky na míru, převod stávajícího zákazníka na předplatné). Hlavní přínos je, že zákazník nemusí znovu procházet storefront, obchodník mu pošle fakturu s už nastaveným předplatným. Při komunikaci s merchanty je třeba být opatrný:

- Nelze slíbit B2B scénář (obchodní zástupce domluví opakovanou objednávku velkoobchodnímu zákazníkovi). Produktový changelog B2B nezmiňuje a dev changelog uvádí, že B2B draft ordery selling plany zatím nepodporují.
- Nevíme, které subscription aplikace funkci podporují a zda je omezena plánem nebo zemí. Před nabídkou je nutné ověřit v Adminu konkrétního obchodu a v nápovědě Shopify.
- Doporučení: zmapovat obchody, které mají subscription aplikaci a zároveň zadávají ruční objednávky, a ověřit funkci na jednom z nich nebo na vývojovém obchodě.

## Použití v Integrátoru

Možné — pokud naše řešení vytvářejí draft ordery nebo zpracovávají objednávky s předplatným, mohou nově narazit na objednávky vzniklé z draftu zaplaceného přes fakturu. Zatím jde o sledování a ověření chování na vývojovém obchodě, žádná změna nás přímo neblokuje.

## ⬅️ Související
🔗 [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
🔗 [Theme overview: Fulfillment](/Shopify_news_magexo/zmena/editions-fall-2026-fulfillment/)
🔗 [Admin GraphQL: selling plans do draft order line items](/Shopify_news_magexo/zmena/selling-plans-draft-orders-admin-api/)
🔗 [Order webhooky: selling_plan_id na line items](/Shopify_news_magexo/zmena/orders-webhooks-selling-plan-id-line-items/)
