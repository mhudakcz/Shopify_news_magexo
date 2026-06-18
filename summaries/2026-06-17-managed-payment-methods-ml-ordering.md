---
date: 2026-06-17
title: "Managed payment methods — ML dynamicky řadí platební metody pro conversion"
title_en: "Managed payment methods — ML-driven ordering for conversion"
slug: managed-payment-methods-ml-ordering
zdroj: https://help.shopify.com/en/manual/payments/shopify-payments/managed-payment-methods
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrace čte pořadí platebních metod z checkoutu nebo Payments API, ML ordering může změnit prezentaci metod — dobré mít na radaru při UI testování checkoutu."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-payments", "local-payment-methods-more-countries"]
editions_release: spring-2026
kontext:
  background: |
    Managed Payment Methods je funkce Shopify Payments, která automaticky aktivuje a dynamicky řadí platební metody v checkoutu pro každého zákazníka individuálně. Systém vybírá, které metody zobrazit jako první, na základě ML modelu zohledňujícího geografii kupujícího, historii nákupů, lokální trendy a kontext košíku.

    Historicky museli merchanté konfigurovat pořadí platebních metod ručně — globální nastavení, které se neadaptovalo na individual buyer context. Shopify Payments sice postupně přidával lokální metody (Bancontact pro Belgii, BLIK pro Polsko, MobilePay pro Skandinávii atd.), ale ordering byl statický. ML-driven ordering je logickým dalším krokem: místo jednoho globálního nastavení platforma průběžně optimalizuje, co zákazník vidí jako první.

    Technicky je Managed Payment Methods vázaná na Shopify Network Intelligence (SNI) — volitelnou personalizační vrstvu v Customer privacy settings. SNI sbírá agregované signály o nákupním chování napříč Shopify sítí a napájí ML modely. Merchant, který SNI aktivuje, tím propojuje svůj store s inferenční vrstvou Shopify. Deaktivace SNI automaticky deaktivuje celou funkci Managed Payment Methods. Funkce spravuje pouze Shopify Payments lokální metody — kartové sítě (Visa, Mastercard, Amex), dárkové karty, manuální metody ani třetí platební aplikace do ML orderingu nezahrnuje.

    Praktický dopad je přímý: merchant přestává ručně udržovat konfiguraci pořadí metod pro každý market a region. Platforma to dělá automaticky a průběžně optimalizuje, čímž efektivně nahrazuje manuální A/B testování platebních metod. Existující checkout customizace zůstávají zachovány, individual metody lze i nadále ručně vypnout bez deaktivace celé funkce. Žádné dodatečné poplatky — platí standardní Shopify Payments transakční sazby.
  zdroje:
    - title: "Shopify Help: Managed payment methods"
      url: "https://help.shopify.com/en/manual/payments/shopify-payments/managed-payment-methods"
    - title: "Editions Spring '26: Payments — Shop Pay anywhere, multi-currency, USDC"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-spring-2026-payments/"
    - title: "Local payment methods (MobilePay, TWINT, BLIK, Przelewy24) ve více evropských zemích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-payment-methods-more-countries/"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Payments automaticky řadí lokální platební metody v checkoutu pomocí ML — per-shopper, per-region, per-cart — bez manuální konfigurace ze strany merchanta."
tagy: [editions, payments, ml, ai, checkout, conversion]
zdroj_kanal: editions
---

## Co se mění

**Managed Payment Methods** přináší ML-driven personalizaci pořadí platebních metod do Shopify Payments checkout flow. Systém pro každý nákup individuálně vyhodnotí, které platební metody jsou pro daného zákazníka nejrelevantnější, a zobrazí je jako první.

Konkrétní signály, které ML model používá:
- **Lokace zákazníka** — preferované platební metody se liší region od regionu (Bancontact v Belgii, BLIK v Polsku, MobilePay ve Skandinávii)
- **Historie nákupů** — pokud zákazník dříve platil konkrétní metodou, model to zohledňuje
- **Lokální trendy** — agregované signály z Shopify Network Intelligence (SNI) napříč trhem

Merchant nepřestává mít kontrolu: jednotlivé platební metody lze ručně deaktivovat bez toho, aby se celá funkce vypla. Existující checkout customizace (Checkout Blocks, UI přizpůsobení) zůstávají nedotčeny.

**Požadavky pro aktivaci:**
1. Shopify Payments musí být aktivní na storu
2. Shopify Network Intelligence (SNI) musí být zapnuto v Customer privacy settings

**Co funkce neřídí:**
- Kartové sítě (Visa, Mastercard, Amex)
- Gift cards
- Manuální platební metody (hotovost, dobírka)
- Třetí platební aplikace a custom integrace

**Cena:** Žádné dodatečné poplatky — platí standardní Shopify Payments sazby.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, funkce označena jako live
- 2026-06-17 — Dokumentace dostupná na help.shopify.com

## Dopad pro nás

**Pro vývojáře:**
Přímý API impact neexistuje — ML ordering probíhá na Shopify straně, bez nové GraphQL API nebo webhook. Pokud integrace nebo custom checkout extension pracuje s pořadím platebních metod nebo je zobrazuje v UI, je vhodné ověřit, zda ordering dynamicky reflektuje Shopify rozhodnutí, nebo je fixně override. U Checkout UI Extensions a Checkout Blocks platí, že existující customizace jsou zachovány — ale prezentační logika by neměla předpokládat fixní pořadí Shopify Payments metod.

**Pro PM / PO:**
Pro klienty s Shopify Payments a mezinárodním prodejem (zejména EU, multi-country setup) je to relevantní argument: automatická optimalizace checkout konverze bez nutnosti ručního A/B testování nebo agenturní práce na payment method konfiguraci. Podmínkou je souhlas s aktivací SNI — to je rozhodnutí klienta v rovině privacy policy a customer data settings.

## Použití v Integrátoru

Potenciálně relevantní, pokud integrace obsahuje UI prezentující platební metody nebo pracuje s jejich pořadím v checkout kontextu — ML ordering může změnit, co zákazník vidí jako první bez explicitní admin konfigurace.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Payments](/Shopify_news_magexo/zmena/editions-spring-2026-payments/)
