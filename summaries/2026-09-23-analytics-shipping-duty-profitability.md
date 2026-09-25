---
date: 2026-09-23
title: "Analytics: profitability data zahrnují shipping + cla, i pro multi-currency"
title_en: "Improved shipping and duty data in Analytics"
slug: analytics-shipping-duty-profitability
zdroj: https://changelog.shopify.com/posts/improved-shipping-and-duty-data-in-analytics
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-09-25

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-23

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienty s cross-border prodejem stavíme reporting nad profitability daty, po této změně se čísla marží posunou - je dobré to umět vysvětlit jako zpřesnění, ne jako propad výkonu."
dotcene_klienty: []

souvisejici: [managed-markets-duties-inclusive-pricing, analytics-session-measurement-bot-filtering, multi-currency-payouts-australia-france]

tldr: "Shopify Analytics nyní do profitability reportů počítá i shipping náklady a cla na stejné objednávce a lépe pracuje s objednávkami v různých měnách, takže marže cross-border prodejů jsou realističtější."

tagy: [analytics, profitability, shipping, duties, multi-currency, reporting]

kontext:
  background: |
    Shopify Analytics nabízí profitability reporty (např. "Profit margin by order" nebo "Average profit margin by market"), které merchantům počítají skutečnou marži objednávky po odečtení nákladů - tedy nejen cenu produktu, ale i náklady na dopravu, daně a další poplatky. U cross-border prodeje ale dosud tyto reporty neměly úplný obrázek: shipping costs a cla (duties) se u objednávek, kde se vyskytovaly obě položky současně, nezapočítávaly konzistentně, a orders v cizí měně se v profitability datech promítaly nepřesně nebo mezerovitě.

    Zářijová aktualizace tento gap uzavírá. Profitability data nově zahrnují jak duties, tak ostatní shipping náklady, pokud se objeví na stejné objednávce - dřív se mohlo stát, že se do marže promítla jen jedna z těchto položek nebo žádná. Zároveň Shopify vylepšil zpracování multi-currency objednávek, takže náklady a marže se počítají spolehlivě i tam, kde zákazník platil v jiné měně, než je domácí měna obchodu.

    Merchanti tak mohou po nasazení změny zaznamenat posun čísel ve vlastních i Shopify-created reportech - konkrétně Shopify zmiňuje reporty "Average profit margin by market" a "Profit margin by order" jako místa, kde se hodnoty shipping costs, duties nebo profit values mohou změnit. Nejde o chybu ani výkyv v byznysu, ale o zpřesnění výpočtu, které je nejcitelnější u merchantů s pravidelným cross-border prodejem do více zemí a měn.
  zdroje:
    - title: "Shopify: Improved shipping and duty data in Analytics"
      url: "https://changelog.shopify.com/posts/improved-shipping-and-duty-data-in-analytics"
  generated_at: 2026-09-25T12:00:00Z
  model: claude-sonnet-5
---

## Co se mění

Shopify upravil výpočet **profitability dat** v Analytics tak, aby lépe odrážel skutečné náklady cross-border objednávek. Nově se do marže objednávky započítávají **duties i ostatní shipping náklady společně**, pokud se obě položky vyskytují na stejné objednávce - dřív mohl výpočet jednu z nich vynechat nebo zobrazit nekonzistentně.

Vedle toho Shopify vylepšil podporu pro **objednávky v různých měnách** (multi-currency), takže se náklady a marže počítají spolehlivě i u zákazníků, kteří platili v jiné měně, než je domácí měna obchodu.

V praxi to znamená, že se merchantům mohou po aktualizaci **posunout hodnoty** shipping costs, duties nebo profit values ve vlastních i Shopify-created reportech - Shopify konkrétně jmenuje reporty **"Average profit margin by market"** a **"Profit margin by order"**.

## Časová osa

- **2026-09-23** - Shopify changelog oznamuje vylepšená shipping a duty data v Analytics profitability reportech.

## Dopad pro nás

**Pro vývojáře:** Jde o interní přepočet metodiky na straně Shopify Analytics, ne o změnu Admin API nebo datového modelu objednávek. Pokud pro klienty stavíme vlastní reporting nebo dashboardy nad profitability/margin daty (ať už přes ShopifyQL, export z Analytics, nebo vlastní výpočet nad order/shipping/duty poli), je vhodné po 23. 9. 2026 očekávat posun v číslech u cross-border objednávek a nezaměnit ho za chybu ve vlastním výpočtu.

**Pro PM / PO:** Stojí za to preventivně upozornit klienty s cross-border prodejem (zejména ty, kteří pravidelně sledují profit margin per market nebo per order), že po této aktualizaci uvidí jinou marži u zahraničních objednávek - typicky přesnější, protože se nyní správně počítají shipping i duty náklady dohromady a lépe se zohledňují objednávky v cizí měně. Je to dobrý argument při vysvětlování rozdílu v datech i příležitost připomenout klientům, že mají k dispozici přesnější podklad pro cenotvorbu a pricing rozhodnutí u zahraničních trhů.

## Použití v Integrátoru

Přímý technický dopad na Integrátor je nízký - jde o změnu výpočtu na straně Shopify Analytics bez nové API funkcionality. Relevantní je hlavně jako kontext pro klienty, u kterých reportujeme profitability/margin metriky nad cross-border objednávkami.
