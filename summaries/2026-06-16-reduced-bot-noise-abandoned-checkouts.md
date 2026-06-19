---
date: 2026-06-16
title: "Méně bot noise v abandoned checkouts — bot-driven kart checkouty nyní nevytvářejí abandoned records"
title_en: "Reduced bot noise in abandoned checkouts (stolen card detection)"
slug: reduced-bot-noise-abandoned-checkouts
zdroj: https://changelog.shopify.com/posts/reduced-bot-noise-in-abandoned-checkouts
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-16
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor zpracovává abandoned checkout webhooky nebo exportuje záznamy pro recovery kampaně, tato změna zlepšuje kvalitu dat — méně false-positive záznamů = čistší podklady pro automatizace."
dotcene_klienty: []
souvisejici:
  - "sms-marketing-automations-messaging"
  - "flow-new-actions-get-data"
  - "smart-email-delivery-shopify-messaging"
tldr: "Shopify od 16. června 2026 přestává vytvářet abandoned checkout záznamy pro session iniciované boty testujícími ukradené karty — merchantům tak zůstanou v recovery listách jen reální zákazníci."
tagy: [abandoned-checkout, bot, fraud, marketing, recovery]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Abandoned checkout recovery je jedna z nejefektivnějších marketingových taktik v e-commerce: zákazník přidá zboží do košíku, nedokončí nákup a merchant mu pošle reminder email nebo SMS. Shopify tuto funkci podporuje nativně — každý nekompletní checkout se zaloguje jako abandoned record a stane se podkladem pro recovery automatizace.

    Problém nastával v momentě, kdy boty testující ukradené čísla karet zahájily checkout session, ale transakci nikdy nedokončily. Shopify tyto session dříve zaznamenával stejným způsobem jako legitimní opuštěné košíky, čímž docházelo k zahlcení recovery listů bezcennými záznamy. Merchanté tak posílali recovery emaily a SMS na adresy, za kterými nestáli skuteční zákazníci — pouze automatizované bot-driven pokusy o card testing.

    Shopify nyní na úrovni platformy detekuje takovéto bot-generated checkout session (typicky identifikované jako stolen card testing) a pro ně abandoned checkout record vůbec nevytváří. Recovery listy tak obsahují výhradně záznamy od skutečných kupujících, kteří nákup z jakéhokoli legitimního důvodu nedokončili. Dopad je přímý: vyšší relevance recovery kampaní, nižší náklady na zbytečně odeslané zprávy a přesnější metriky (conversion rate, recovery rate).

    Z pohledu integrace se tato změna projeví jako přirozené „čištění" dat — abandoned checkout webhooky nebo API volání vrátí méně záznamů, ale každý z nich bude mít vyšší hodnotu. Merchanté využívající Shopify Email, třetí strany (Klaviyo, Omnisend apod.) nebo vlastní automatizace přes Flow pocítí zlepšení kvality podkladových dat bez nutnosti jakékoli konfigurace na jejich straně.
  zdroje:
    - title: "Shopify: Reduced bot noise in abandoned checkouts (stolen card detection)"
      url: "https://changelog.shopify.com/posts/reduced-bot-noise-in-abandoned-checkouts"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify upravil logiku tvorby abandoned checkout záznamů: checkouty iniciované boty za účelem testování ukradených karet (tzv. card testing / stolen card detection) **nadále nevytvářejí abandoned checkout record**.

Dříve každý nekompletní checkout — bez ohledu na to, zda šlo o reálného zákazníka nebo automatizovaný bot — zanechal záznam v abandoned checkouts. Merchanté tak měli recovery listy plné bot-generated entries, které nemohly vést k žádné skutečné konverzi.

Po změně platí:

- Bot-driven session identifikovaná jako card testing → **žádný abandoned record nevznikne**
- Legitimní zákazník, který nedokončil checkout → **abandoned record vznikne standardně**
- Existující záznamy nejsou zpětně odstraněny; změna platí pro nové session od 16. června 2026

Shopify tuto filtraci provádí automaticky na úrovni platformy bez nutnosti jakéhokoli nastavení ze strany merchanta nebo vývojáře.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-06-16 | Změna aktivní na celé platformě Shopify |
| průběžně | Postupné čištění nových abandoned checkout listů |

## Dopad pro nás

Změna je **pasivní a automatická** — žádná akce není potřeba. Praktický dopad:

- **Recovery automatizace** (Shopify Email, Klaviyo, Omnisend, Flow): dostávají čistší vstupní data bez nutnosti přeconfigurace
- **Abandoned checkout webhooky** (`checkouts/create`, `checkouts/update`): sníží se frekvence událostí iniciovaných boty; pokud integrátor filtroval bot-noise manuálně, tato logika bude nadbytečná
- **Metriky**: abandoned checkout rate a recovery rate se mohou zdánlivě změnit — ve skutečnosti jde o zpřesnění, nikoli zhoršení výkonu
- **Fakturace za SMS/email**: méně zbytečně odeslaných zpráv → nižší náklady na recovery kampaně

Žádná breaking change v API nebo datové struktuře nenastala. Změna je čistě na straně Shopify backendu.

## Použití v Integrátoru

Pokud integrátor zpracovává abandoned checkout data (přes REST API `/admin/api/checkouts.json` nebo webhooky), tato změna **zlepšuje kvalitu vstupních dat** bez nutnosti úpravy kódu. Stojí za zvážení:

1. **Audit existujících filtrů**: pokud integrátor obsahuje vlastní logiku pro filtrování bot-like checkout session, lze ji po ověření zjednodušit nebo odstranit
2. **Dokumentace metrik**: informovat klienty, že pokles počtu abandoned checkouts nemusí znamenat problém, ale zpřesnění dat
3. **Flow automatizace** navázané na abandoned checkout triggery zůstávají funkční — jen spouštějí méně zbytečných akcí
