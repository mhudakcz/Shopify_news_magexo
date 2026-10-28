---
date: 2026-10-28
title: "Local payment methods — MB WAY (Portugal) + OXXO (Mexico) pro online"
title_en: "More local payment methods (MB WAY, OXXO)"
slug: local-payment-methods-mb-way-oxxo
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zdroj Editions u položky neuvádí žádné API ani webhooky, jde o konfiguraci Shopify Payments na straně merchanta. Dotknout se nás může jen zpracování objednávek: u OXXO (voucher zaplacený později v hotovosti) objednávka vznikne dřív, než je zaplacena, takže synchronizace do ERP a fulfillmentu musí respektovat stav platby. Jde o náš odhad, zdroj to výslovně neříká."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-payments", "local-payment-methods-more-countries", "managed-payment-methods-ml-ordering"]
editions_release: fall-2026
tldr: "Shopify Payments nově umožňuje online platby přes MB WAY (Portugalsko, mobilní platba schvalovaná v aplikaci) a OXXO (Mexiko, hotovostní voucher placený později podle platebních instrukcí). Editions o položce uvádí jedinou větu bez zemí obchodníka, měn a termínů, takže pro české merchanty jde o signál směru a o podklad pro obchody expandující do Portugalska nebo Mexika, ne o funkci k okamžitému zapnutí."
tagy: [payments, mb-way, oxxo, portugal, mexico, local-methods]
zdroj_kanal: editions
kontext:
  background: |
    Lokální platební metody jsou způsoby platby rozšířené v jedné zemi nebo regionu, kterým tamní zákazníci důvěřují víc než mezinárodním kartovým sítím. Jejich absence v checkoutu je častý důvod opuštěného košíku při expanzi na nový trh. Shopify je v Payments přidává postupně: jarní přehled v archivu zmiňuje MobilePay, TWINT, BLIK a Przelewy24, podzimní Editions Fall '26 (Exponential, 28. 10. 2026) přidávají Alipay, WeChat Pay, Satispay, Scalapay, GrabPay a online platby přes MB WAY a OXXO.

    MB WAY je portugalská mobilní platba: zákazník v checkoutu zadá telefonní číslo a platbu potvrdí v aplikaci. OXXO je mexický hotovostní voucher: zákazník objedná online, dostane platební instrukce (čárový kód nebo referenční číslo) a zaplatí později v kamenné prodejně, proto je populární u lidí bez bankovního účtu nebo platební karty. Obě metody se podle nápovědy Shopify zobrazují jen zákazníkovi z podporované země a při použití vhodné měny. Editions tržní podíly neuvádí. Údaje, že MB WAY má v Portugalsku přes 60 % trhu a OXXO tvoří přes čtvrtinu e-commerce plateb v Mexiku, pocházejí z podkladů k tomuto přehledu a nejsou potvrzené zdrojem.

    Zdrojová stránka Editions položku popisuje jedinou větou a odkazuje na nápovědu Shopify. Nezmiňuje status (coming soon ani early access), země obchodníka, měny ani termíny. Nápověda doplňuje jen obecná pravidla: země mimo domovskou zemi obchodu musí být nastavené jako markety a platby lokálními metodami se vyplácejí spolu s kartovými v běžných výplatách Shopify Payments.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka, téma Payments)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Shopify Help Center: Local payment methods in Shopify Payments"
      url: "https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods"
    - title: "Local payment methods (MobilePay, TWINT, BLIK, Przelewy24) ve více evropských zemích"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/local-payment-methods-more-countries/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Payments v rámci Editions Fall '26 (téma Payments) rozšiřuje nabídku lokálních platebních metod. Dvě z nich míří do iberského a latinskoamerického regionu a Editions je popisuje formulací, že jsou dostupné pro **online platby**:

- **MB WAY (Portugalsko)** — mobilní platba. Zákazník v checkoutu autorizuje platbu ve své mobilní aplikaci, bez zadávání čísla karty. Zařazeno mezi metody typu mobilní peněženka a platba přes aplikaci.
- **OXXO (Mexiko)** — hotovostní voucher. Zákazník objedná online, v checkoutu dostane platební instrukce (čárový kód nebo referenční číslo) a zaplatí později, typicky hotově v prodejně sítě OXXO. Platba tedy není okamžitá.

Ve stejné položce Editions jmenuje také Alipay, WeChat Pay, Satispay, Scalapay a GrabPay. Tento článek se věnuje jen MB WAY a OXXO. Přehled celého tématu najdete v [Editions Fall '26: Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/).

**Pravidla, která uvádí nápověda Shopify:**

- Metoda se zákazníkovi nabídne jen tehdy, když je ze země, kterou metoda podporuje (Portugalsko u MB WAY, Mexiko u OXXO), a při platbě v odpovídající měně.
- Aby šlo metodu nabízet v zemi mimo domovskou zemi obchodu, musí být tato země nastavená jako market.
- Objednávky zaplacené lokálními metodami se vyplácejí v rámci běžných výplat Shopify Payments společně s kartovými platbami.

**Co zdroj neuvádí** (je nutné ověřit v nápovědě k jednotlivým metodám):

- v jakých zemích musí mít obchod sídlo, aby metody mohl zapnout (zejména pro Mexiko),
- konkrétní měny (náš odhad: EUR u MB WAY a MXN u OXXO, ale zdroj to nepotvrzuje),
- platnost voucheru u OXXO a co se stane s objednávkou, která nebyla zaplacena,
- pravidla refundů,
- zda a jak se metody objeví u POS, položka mluví jen o online platbách.

Tržní podíly (MB WAY přes 60 % v Portugalsku, OXXO přes 25 % e-commerce plateb v Mexiku) Editions neuvádí. Berte je jako orientační údaj z podkladů k tomuto přehledu, ne jako tvrzení Shopify.

## Časová osa

| Datum | Událost |
|-------|---------|
| 28. 10. 2026 | Vychází Shopify Editions Fall '26 (Exponential) s touto položkou v tématu Payments. |
| od 28. 10. 2026 | Položka není na stránce označená jako coming soon ani early access. Přehled Payments ji vede jako live, přesto doporučujeme dostupnost ověřit přímo v adminu konkrétního obchodu. |
| neuvedeno | Regionální rollout, postupné zapínání pro jednotlivé země obchodníka ani jiné termíny zdroj nezmiňuje. |

Žádná změna není breaking, žádné ukončení podpory ani povinná migrace se neodehrává. Nalehavost je nízká: jde o volitelné rozšíření, které nikdo nemusí zapínat.

## Dopad pro nás

**Pro vývojáře:**

- Zdroj nezmiňuje žádné nové API, webhooky ani změny schématu. Jde o konfiguraci Shopify Payments v adminu.
- V objednávkách se mohou objevit nové hodnoty identifikující platební metodu u transakcí. Reporting, účetní export nebo mapování plateb v ERP by měly na neznámou hodnotu reagovat rozumným výchozím chováním a nepadat.
- U **OXXO** počítejte s tím, že objednávka vzniká dřív, než je zaplacena (zákazník platí později v hotovosti). Zdroj nepopisuje, jaký stav objednávka v mezidobí má ani jak se po zaplacení změní, takže to je nutné vyzkoušet na testovací objednávce. Fulfillment a ERP nesmí zboží uvolnit jen na základě vzniku objednávky. Neuhrazený voucher může po vypršení skončit zrušenou objednávkou a vrácením zásob (náš odhad, zdroj to neuvádí).
- U **MB WAY** je platba autorizovaná v aplikaci zákazníka. Zdroj opět nespecifikuje časový limit potvrzení, tedy chování při neschválení nebo vypršení je nutné ověřit.
- Ceny v lokální měně (zejména MXN) vstupují přes Markets a price lists. Při rozšíření na nový market je potřeba počítat s měnovým zaokrouhlením a s tím, jak se cena promítne do exportů.
- Platby se vyplácejí v rámci běžných výplat Shopify Payments, takže párování výplat zůstává v jednom proudu. Případné odlišné zdržení u hotovostních voucherů zdroj nepopisuje.

**Pro PM / PO:**

- **Pro české merchanty přímý dopad žádný.** Metody se zobrazují jen zákazníkům z Portugalska a Mexika, takže tuzemský checkout se nemění.
- **Použitelné argumentem při expanzi.** Obchod, který zvažuje Portugalsko nebo Mexiko, nemusí hned řešit bránu třetí strany, protože Shopify Payments pokryje lokální oblíbenou metodu nativně. Portugalsko je navíc v eurozóně, takže MB WAY se dá snáze zkusit u obchodu, který už prodává v EUR.
- **Platby nejsou jediná překážka.** Mexický trh vyžaduje také španělskou lokalizaci, řešení dopravy, daní a cel. Lokální platba je nutná podmínka konverze, ne dostatečná. Podle archivu je Managed Markets cestou pro cross-border, viz [Editions Fall '26: Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/).
- **Předpoklady ověřit před nabídkou merchantovi:** dostupnost Shopify Payments pro zemi, kde má obchod sídlo, nastavení cílových zemí jako marketů, podporované měny a pravidla pro voucher u OXXO (platnost, refundy).
- **Souvislosti v archivu:** na jaře Shopify přidal MobilePay, TWINT, BLIK a Przelewy24 ([lokální metody ve více evropských zemích](/Shopify_news_magexo/zmena/local-payment-methods-more-countries/)) a pořadí metod v checkoutu řadí ML ([managed payment methods](/Shopify_news_magexo/zmena/managed-payment-methods-ml-ordering/)). MB WAY a OXXO pokračují ve stejném směru.

## Použití v Integrátoru

Přímo nepoužíváme, jde o konfiguraci Shopify Payments na straně merchanta. Pozornost si zaslouží jen zpracování objednávek placených OXXO v synchronizaci s ERP a fulfillmentem, kde objednávka vzniká dřív než platba.
