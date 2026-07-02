---
date: 2026-07-01
title: "Brazil CNPJ validace nově podporuje alfanumerické identifikátory"
title_en: "Brazil CNPJ validation now supports alphanumeric identifiers"
slug: brazil-cnpj-alphanumeric
zdroj: https://changelog.shopify.com/posts/brazil-cnpj-validation-now-supports-alphanumeric-identifiers
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost, fyi]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor provádí vlastní CNPJ validaci na straně serveru nebo ve formulářích, je třeba upravit regex tak, aby akceptoval alfanumerické znaky v prvních 12 pozicích."
dotcene_klienty: []
souvisejici: ["address-autocomplete-validation-improvements", "cart-checkout-validation-billing-po", "italy-sardinian-provinces-update"]
tldr: "Shopify Checkout nyní akceptuje nový alfanumerický formát CNPJ zavedený brazilskou daňovou správou Receita Federal — merchanté prodávající v Brazílii a partneři s vlastní CNPJ validací musí ověřit kompatibilitu."
tagy: [brazil, cnpj, validation, compliance, regional]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    CNPJ (Cadastro Nacional da Pessoa Jurídica) je brazilské daňové identifikační číslo podnikatelských subjektů, vydávané federální daňovou správou Receita Federal. Historicky mělo CNPJ výhradně numerický formát se 14 číslicemi — 12 základních číslic, lomítko, dvě check digits. Brazilský zákon o DPH a celní clearance vyžaduje CNPJ při přeshraničním prodeji do Brazílie, a Shopify jej proto sbírá v checkoutu jako povinné daňové ID.

    Receita Federal zavedla nový alfanumerický formát CNPJ, který vstoupí v platnost pro nově registrované subjekty. V novém formátu může prvních 12 pozic identifikátoru obsahovat jak číslice, tak písmena (velká), zatímco poslední dvě pozice (check digits) zůstávají výhradně numerické. Příkladem nového formátu je `12.ABC.345/01DE-35`. Stávající numerické CNPJs zůstávají platné a jsou nadále akceptovány beze změny.

    Shopify od 1. července 2026 rozšířil validaci CNPJ v checkoutu tak, aby oba formáty — původní numerický i nový alfanumerický — prošly validací. Zákazníci z Brazílie, kteří mají nový typ CNPJ, tak mohou bez problémů dokončit nákup. Pro merchanty na standardním Shopify checkoutu jde o transparentní změnu bez nutnosti jakékoliv konfigurace.

    Dopad se projevuje především u partnerů a aplikací, které implementují vlastní CNPJ validaci — například vlastní checkout extensions, formuláře B2B, nebo backendová zpracování objednávek. Tyto implementace musí přestat předpokládat, že CNPJ obsahuje pouze číslice, a aktualizovat validační logiku (regex nebo parser) tak, aby akceptovala alfanumerické znaky v prvních 12 pozicích identifikátoru.
  zdroje:
    - title: "Shopify: Brazil CNPJ validation now supports alphanumeric identifiers"
      url: "https://changelog.shopify.com/posts/brazil-cnpj-validation-now-supports-alphanumeric-identifiers"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Brazilská daňová správa Receita Federal zavedla nový alfanumerický formát CNPJ (Cadastro Nacional da Pessoa Jurídica — daňové ID pro firmy). Nové CNPJs mohou mít v prvních 12 pozicích libovolnou kombinaci číslic a velkých písmen, přičemž poslední dvě pozice (check digits) zůstávají numerické. Příklad nového formátu: `12.ABC.345/01DE-35`.

Shopify Checkout od 1. července 2026 akceptuje oba formáty:
- **Původní numerický formát** — nadále validní, žádná změna chování
- **Nový alfanumerický formát** — nově podporovaný

Partneři a aplikace implementující vlastní CNPJ validaci musí zajistit, že jejich regex nebo parser **neomezuje CNPJ výhradně na číslice**. Shopify explicitně doporučuje tuto kontrolu provést.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-07-01 | Shopify zavádí podporu alfanumerického CNPJ ve validaci checkoutu |
| Průběžně | Receita Federal začíná vydávat nové alfanumerické CNPJs novým subjektům |

## Dopad pro nás

Pro merchanty na standardním Shopify checkoutu jde o transparentní změnu — žádná akce není potřeba. Brazilští zákazníci s novým typem CNPJ nyní mohou dokončit objednávku bez chyby validace.

Pokud integrátor nebo partnerská aplikace implementuje vlastní CNPJ validaci (např. ve vlastní checkout extension, B2B formuláři nebo při zpracování objednávek na backendu), je třeba:

1. Zkontrolovat existující validační logiku — zejména regexpy omezené na `[0-9]`
2. Aktualizovat pattern tak, aby akceptoval `[A-Z0-9]` v prvních 12 pozicích
3. Check digits (pozice 13–14) zůstávají `[0-9]`

## Použití v Integrátoru

Pokud integrátor provádí vlastní CNPJ validaci na straně serveru nebo v UI formulářích, může aktuálně odmítat nové alfanumerické CNPJs jako neplatné. Doporučeno ověřit validační logiku a případně upravit regex pattern.

Příklad bezpečného patternu (základní): `^[A-Z0-9]{2}\.[A-Z0-9]{3}\.[A-Z0-9]{3}\/[A-Z0-9]{4}-[0-9]{2}$`

Pro merchanty cílící výhradně na brazilský trh bez vlastní validační logiky není žádná akce nutná.
