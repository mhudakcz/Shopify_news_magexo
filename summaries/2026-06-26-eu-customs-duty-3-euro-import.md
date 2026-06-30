---
date: 2026-06-26
title: "Shopify podporuje nové €3 EU import customs duty (živé od 1. 7. 2026)"
title_en: "Shopify supports new €3 EU import customs duty (effective July 1, 2026)"
slug: eu-customs-duty-3-euro-import
zdroj: https://changelog.shopify.com/posts/new-3-eu-import-customs-duty-arrives-july-1
shrnuto_dne: 2026-06-30
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor pracuje s checkout duties nebo import tax calculation, může být nutné ověřit správné zobrazení nové €3 položky v celkové ceně."
dotcene_klienty: []
souvisejici: [managed-markets-uk-canada-launch, customer-tax-settings-admin-api, channel-specific-prices-markets]
tldr: "Od 1. 7. 2026 EU nahrazuje de minimis výjimku paušálním €3 clem za každou tariff line v zásilce; Shopify Managed Markets i import tax calculation to řeší automaticky bez konfigurace na straně merchantů."
tagy: [eu, customs-duty, managed-markets, import-tax, compliance]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Evropská unie od 1. července 2026 ruší dosavadní osvobození od cla pro nízkohodnotné zásilky (tzv. de minimis) a zavádí nový paušální customs duty ve výši €3 za každou tariff line v zásilce do hodnoty €150 zasílané do EU ze zemí mimo EU. Tariff line odpovídá jedné unikátní celní klasifikaci zboží — například zásilka s oblečením a kosmetikou tvoří dvě tariff lines, tedy €6. Zásilka s pouze jedním druhem zboží stojí €3.

    Tato změna je součástí širší reformy EU celního systému, která reaguje na masivní nárůst low-value cross-border e-commerce, zejména z Asie. Cílem EU je zajistit srovnatelné podmínky pro domácí prodejce, kteří DPH a clo platit musejí, a zároveň zjednodušit celní řízení pro zásilky pod €150 pomocí jediného paušálního poplatku místo výpočtu ad valorem duties.

    Praktický dopad pro merchanty prodávající z UK, USA nebo jiných zemí mimo EU do evropských zákazníků: při každém přeshraničním přechodu zboží do EU bude customs duty €3 per tariff line účtováno celními orgány. Zásilky pohybující se výhradně uvnitř EU změna neovlivní. Pro end-zákazníky to znamená nový řádek v poštovném/celních nákladech při objednávce ze zahraničního eshopu.

    Shopify tuto povinnost pokrývá automaticky — v Managed Markets (powered by Global-e jako merchant of record) je €3 duty kalkulováno, zobrazováno a vybíráno při checkoutu a Global-e ho odvádí celním orgánům s guaranteed pricing. V rámci standardního Import Tax & Duty Calculation je €3 zahrnut do celkové duty částky zobrazované při checkoutu, kterou pak merchant sám odvádí. Žádná manuální konfigurace na straně merchantů není nutná.
  zdroje:
    - title: "Shopify: Shopify supports new €3 EU import customs duty (effective July 1, 2026)"
      url: "https://changelog.shopify.com/posts/new-3-eu-import-customs-duty-arrives-july-1"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

EU od 1. července 2026 ruší de minimis výjimku pro nízkohodnotné zásilky a zavádí **paušální €3 customs duty per tariff line** na všechny zásilky do hodnoty €150 přicházející ze zemí mimo EU. Počet tariff lines odpovídá počtu unikátních celních klasifikací zboží v zásilce:

- Zásilka s jedním druhem zboží (např. pouze oděvy): **€3**
- Zásilka se čtyřmi druhy zboží (oděvy, kosmetika, boty, šperky): **€12**

Shopify tuto změnu implementoval do dvou nástrojů:

**Managed Markets** — poplatek se automaticky kalkuluje, zobrazuje a vybírá při checkoutu. Global-e jako merchant of record ho odvádí celním orgánům, merchantovi se nic nemění a cena pro zákazníka je guaranteed.

**Import Tax & Duty Calculation** — €3 duty je zahrnut do celkové duty částky zobrazované při checkoutu. Merchant tuto částku vybírá od zákazníka a sám ji odvádí celnímu orgánu.

Žádná konfigurace z pohledu obchodníka není nutná — Shopify vše řeší na pozadí.

## Časová osa

| Datum | Událost |
|---|---|
| Do 30. 6. 2026 | De minimis výjimka — zásilky pod €150 celně osvobozeny |
| **1. 7. 2026** | **Spuštění €3 EU customs duty per tariff line** |
| 1. 7. 2026+ | Managed Markets + Import Tax Calculation automaticky zahrnují nový poplatek |

## Dopad pro nás

Tato změna je relevantní především pro **merchanty prodávající z UK, USA nebo jiných zemí mimo EU do EU**. Intra-EU zásilky nejsou dotčeny.

Z pohledu agentury jde o compliance novinku — Shopify backend ji řeší automaticky, takže přímá akce na straně merchantů ani developmentu typicky není potřeba. Je ale vhodné:

1. Informovat klienty s cross-border prodejem mimo EU, že zákazníci uvidí nový řádek v nákladech na dovoz.
2. Ověřit, zda klient používá Managed Markets nebo Import Tax Calculation — obojí je pokryto.
3. Klienti, kteří nepoužívají ani jeden nástroj a spoléhají na vlastní celní výpočty, si musejí nový €3 poplatek implementovat sami.

## Použití v Integrátoru

Integrátor typicky nepracuje přímo s duty/tax výpočty na úrovni checkoutu, takže přímý dopad je nízký. Pokud však integrátor předává data o zásilkách nebo duty amounts do externího systému (ERP, celní deklarace), je vhodné ověřit, zda nová €3 položka bude v datech přítomna a správně mapována. Doporučujeme sledovat, zda Shopify přidá nové pole nebo typ pro tento poplatek v Orders API.
