---
date: 2026-10-23
title: "UK VAT: přesnější výpočet dle fulfillment location (ne jen store address)"
title_en: "More accurate UK VAT based on fulfillment location"
slug: uk-vat-fulfillment-location-accuracy
zdroj: https://changelog.shopify.com/posts/more-accurate-uk-vat-based-on-fulfillment-location
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro UK obchody s více sklady synchronizujeme VAT nebo daňové částky objednávek do ERP či účetnictví, mohou se po změně lišit od dřívějších hodnot, zejména u objednávek nad 135 GBP routovaných mimo UK."
dotcene_klienty: []
souvisejici: [us-tax-calculation-fulfillment-location-routing, blog-shopify-order-routing-chytre-smerovani, customer-tax-settings-admin-api]
tldr: "Od 23. 10. 2026 se VAT u objednávek do Velké Británie počítá podle fulfillment location z order routing, a objednávka nad 135 GBP odeslaná ze skladu mimo UK se bere jako import bez VAT v checkoutu."
tagy: [uk-vat, taxes, fulfillment-location, multi-location, compliance, b2b]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Tax dosud u objednávek do Velké Británie nevycházel z toho, odkud se zásilka skutečně odesílá. Pro merchanty s jedním skladem to nebyl problém, ale u obchodů s více lokacemi (typicky UK sklad plus sklad v EU nebo jinde) se výpočet VAT nemusel shodovat s reálnou cestou zboží. Po Brexitu je přitom právě místo odeslání rozhodující: zásilka z UK skladu je domácí dodávka, zásilka ze skladu mimo UK je dovoz.

    Nové chování sjednocuje UK s tím, jak Shopify Tax už počítá daň u amerických objednávek. VAT u objednávek směřujících do Great Britain se odvozuje z fulfillment location, kterou pro objednávku vybraly order routing settings. Klíčové je pravidlo kolem hranice 135 GBP (před daní a dopravou): pokud je objednávka nad touto částkou a je routovaná na lokaci mimo UK, bere se jako import a VAT se v checkoutu neúčtuje. To platí i tehdy, když má obchod UK lokaci. Britská pravidla pro zásilky do 135 GBP počítají s tím, že VAT vybírá prodejce už při prodeji, nad touto hranicí se VAT řeší při dovozu.

    Změna se netýká objednávek do 135 GBP, objednávek do Northern Ireland ani již existujících objednávek. Zdrojový post nezmiňuje reverse charge, B2B scénáře ani jiné prahy než 135 GBP, takže tyto oblasti z něj nelze odvozovat. Merchant má dvě cesty: upravit order routing tak, aby se tyto objednávky přiřazovaly na UK lokaci, nebo v checkoutu vybírat duties a import taxes. Detaily popisuje help článek Shopify o účtování VAT u objednávek nad 135 GBP.
  zdroje:
    - title: "Shopify: More accurate UK VAT based on fulfillment location"
      url: "https://changelog.shopify.com/posts/more-accurate-uk-vat-based-on-fulfillment-location"
    - title: "Shopify Help: Charging VAT on orders over 135 GBP"
      url: "https://help.shopify.com/manual/taxes/uk/uk-tax-migrate#charge-vat-over-threshold"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Tax nově počítá **VAT u objednávek do Great Britain** podle **fulfillment location vybrané order routing settings**, ne podle store nebo billing adresy. Jde o stejný princip, který už Shopify používá u amerických objednávek.

Prakticky to znamená:

- Objednávka **nad 135 GBP** (před daní a dopravou) routovaná na lokaci **mimo UK** je považována za **import** a **VAT se v checkoutu neúčtuje**. Platí to i tehdy, když má obchod UK lokaci, jen ji order routing pro danou objednávku nevybral.
- Objednávka routovaná na UK lokaci se počítá jako domácí dodávka a VAT se účtuje běžně.
- Změna je automatická, nevyžaduje žádné zapnutí. Konfigurace ale vstupuje do hry, pokud chce merchant původní chování zachovat (viz níže).

**Nedotčeno změnou:** objednávky do 135 GBP, objednávky do Northern Ireland a již existující objednávky.

**Možnosti merchanta:** upravit order routing tak, aby se dotčené objednávky přiřazovaly na UK lokaci, nebo v checkoutu vybírat duties a import taxes.

Post se nezmiňuje o reverse charge, B2B výjimkách ani o jiných prazích než 135 GBP.

## Časová osa

- **2026-10-23** — změna účinná, VAT pro objednávky do Great Britain se řídí fulfillment location
- **Existující objednávky** — beze změny, nová logika se na ně nevztahuje

## Dopad pro nás

**Pro vývojáře:** Nejde o API změnu a žádný kód měnit nemusíme. Pokud ale čteme nebo exportujeme `taxLines`, celkové částky nebo ship-from lokaci UK objednávek do ERP či účetnictví, mohou po 23. 10. 2026 vycházet jinak než dřív. U objednávek nad 135 GBP routovaných mimo UK očekávejme nulové VAT v checkoutu, což může zlobit validace typu daň větší než nula nebo párování na faktury. Stojí za to ověřit, zda mapování nepředpokládá VAT u každé UK objednávky.

**Pro PM / PO:** Pro obchody s UK i EU sklady jde o zpřesnění, ale i o **riziko**: pokud order routing posílá větší UK objednávky ze skladu mimo UK, zákazník najednou neplatí VAT v checkoutu a řeší ho při dovozu (nebo ho musí vybrat merchant jako import tax). To mění cenu pro zákazníka i cash flow. Doporučení je projít routing pravidla pro UK trh a rozhodnout, zda objednávky nad 135 GBP směrovat na UK lokaci, nebo zapnout výběr duties a import taxes v checkoutu. Nová příležitost je v poradenství pro multi-location merchanty prodávající do UK (audit routingu, compliance).

## Použití v Integrátoru

**Možná** — přímo žádnou funkci nepoužíváme, jde o změnu výpočtu uvnitř Shopify Tax. Relevantní je jen tam, kde pro UK obchody s více sklady synchronizujeme daňové částky nebo ship-from lokaci do externích systémů.

## Rizika a edge cases

- Objednávka nad 135 GBP routovaná mimo UK nebude mít VAT v checkoutu, což se může projevit jako neočekávaný pokles celkové ceny a nesoulad s účetními doklady.
- Změna závisí na order routing pravidlech: stejná objednávka může skončit s jiným VAT podle toho, kterou lokaci routing vybere (např. při vyprodání zásob na UK skladu).
- Northern Ireland se řídí jinými pravidly a změna se ho netýká.
- Reverse charge a B2B scénáře post neřeší, ověřit je třeba v help dokumentaci Shopify nebo u daňového poradce.
