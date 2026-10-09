---
date: 2026-10-06
title: "Shopify Analytics: nové purchase order reports (3 kusy) + rozšířené PO page metriky"
title_en: "Analyze purchase orders in Shopify Analytics"
slug: analytics-purchase-orders-reports
zdroj: https://changelog.shopify.com/posts/analyze-purchase-orders-in-shopify-analytics
shrnuto_dne: 2026-10-08
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Purchase orders a inventory transfers už řešíme jako součást skladových a nákupních toků, takže nové reporty mohou částečně nahradit ruční exporty a kontrolní výstupy pro klienty s vlastním nákupem zboží."
dotcene_klienty: []
souvisejici: [purchase-orders-create-inventory-transfers, inventory-shipments-canceled-receive-action, analytics-shipping-duty-profitability]
tldr: "Shopify Analytics nově obsahuje tři reporty nad purchase orders (náklady, transfery a otevřené objednávky bez transferu) a stránka Purchase Orders ukazuje další souhrnné metriky; data lze exportovat."
tagy: [analytics, purchase-orders, procurement, reports, exports]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Purchase orders (nákupní objednávky) jsou v Shopify nástrojem pro evidenci objednávek zboží u dodavatelů: merchant v nich eviduje položky, množství, nákupní ceny a dodavatele. Od června 2026 navíc purchase order při přechodu do stavu ready to receive automaticky vytváří propojený inventory transfer, přes který se zboží přijímá v adminu nebo na POS. Nákupní workflow tak je v Shopify dotažený od objednávky až po příjem na sklad.

    Reportingová strana ale dosud zaostávala. Kdo chtěl vědět, kolik nákup stojí včetně odhadovaných daní, které objednávky ještě čekají na dodání nebo jak daleko je příjem zboží, musel data skládat ručně, typicky exportem do tabulky nebo do externího systému (ERP, BI nástroj). Analytics se přitom v posledních měsících rozšiřuje o další datové domény (profitability, metafield a metaobject dimenze, annotations), purchase orders byly logickým dalším krokem.

    Změnový záznam z 6. října 2026 přidává do Shopify Analytics tři nové reporty nad purchase orders a rozšiřuje souhrnné metriky na stránce Purchase Orders. Post zároveň uvádí, že data purchase orders lze exportovat. Konkrétní exportní formáty, dostupnost podle tarifů ani harmonogram nasazení post neuvádí, proto je vhodné je před nabídkou klientům ověřit přímo v Shopify adminu a v nápovědě.
  zdroje:
    - title: "Shopify: Analyze purchase orders in Shopify Analytics"
      url: "https://changelog.shopify.com/posts/analyze-purchase-orders-in-shopify-analytics"
    - title: "Shopify Help: Purchase order reports"
      url: "https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/custom-reports/purchase-orders"
  generated_at: 2026-10-08T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Analytics nově umožňuje analyzovat a exportovat data o purchase orders. Přibyly **tři nové reporty**:

- **Purchase order costs** - pokrývá položky na jednotlivých objednávkách, jejich množství, nákupní ceny od dodavatele (supplier costs), odhadované daně a celkové náklady purchase orderu.
- **Purchase order transfers** - sleduje purchase orders napříč inventory transfery, shipmenty a příjmem zboží (receiving). Navazuje tak na červnovou změnu, kdy PO automaticky vytváří linked transfer.
- **Purchases on order** - seznam otevřených purchase orders, které byly zadány, ale nemají navázané žádné transfery. Prakticky jde o přehled objednávek, u kterých se zboží zatím nezačalo pohybovat.

Kromě toho **stránka Purchase Orders** zobrazuje další souhrnné metriky: *Purchase orders*, *On-order purchase orders*, *Total items ordered*, *Acceptance rate* a *Shipments due soon*. Post nedefinuje přesný výpočet jednotlivých metrik (například Acceptance rate), takže je dobré si je ověřit na reálných datech obchodu.

Data purchase orders lze exportovat. Post ale neuvádí formáty ani postup exportu, odkazuje pouze na nápovědu k purchase order reportům.

## Časová osa

- **2026-06-22** - Purchase orders začínají automaticky vytvářet linked inventory transfery (podklad pro report Purchase order transfers).
- **2026-10-06** - Shopify changelog oznamuje tři nové purchase order reporty v Analytics a rozšířené metriky na stránce Purchase Orders.
- **Rollout / tarify** - post nespecifikuje, od kdy a pro které plány je funkce dostupná.

## Dopad pro nás

**Pro vývojáře:** Jde o změnu v Analytics UI, ne o novou API funkcionalitu - post nezmiňuje nové objekty ani pole v Admin API. Reporty a metriky ale ukazují, jaká data Shopify o purchase orders eviduje (náklady na položku, odhadované daně, vazba PO na transfery a shipmenty), a to je užitečné jako vodítko, jak vypadá datový model nákupu a příjmu. Pokud dnes pro klienty skládáme vlastní přehledy nad purchase orders nebo transfery, stojí za to porovnat naše čísla s novými reporty a ověřit, zda je naše implementace ještě potřeba, nebo ji lze zjednodušit na odkaz na nativní report. Případné exporty je vhodné otestovat, než na nich začneme stavět automatizaci.

**Pro PM / PO:** Pro klienty, kteří nakupují zboží od dodavatelů a mají purchase orders v Shopify, je to nová příležitost: nativní přehled nákladů nákupu, otevřených objednávek bez transferu a stavu příjmu zboží bez nutnosti ručních exportů do tabulek nebo ERP. Dá se využít při konzultacích o skladových procesech a při zavádění purchase orders u klientů, kteří dosud nákup řešili mimo Shopify. Před slibováním konkrétních výstupů ale ověřte dostupnost podle tarifu klienta, formáty exportu a to, zda metriky odpovídají tomu, co klient reálně potřebuje sledovat. Naléhavost je nízká, nejde o breaking change ani o povinnou akci.

## Použití v Integrátoru

Přímý technický dopad je minimální, protože nejde o změnu API. Relevantní je hlavně pro klienty, u kterých sledujeme nákupní a skladové toky: nové reporty mohou nahradit část ručních kontrolních exportů a pomoci při ověřování, že purchase orders, transfery a příjem zboží sedí.
