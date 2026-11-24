---
date: 2026-11-20
title: "POS účtenky: email a SMS teď používají stejnou šablonu jako tiskovou"
title_en: "Email and text receipts now match your printed receipt"
slug: pos-receipts-unified-template-email-text-printed
zdroj: https://changelog.shopify.com/posts/email-and-text-receipts-now-match-your-printed-receip
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-11-20
pouzivame_v_integratoru: ne
dukaz_integratoru: "Jde o POS merchant workflow — nastavuje se v Shopify Adminu pod Settings → Notifications → In-store receipts; integrátor do toho nezasahuje."
dotcene_klienty: []
souvisejici: []
tldr: "POS emailované a textové účtenky teď používají stejnou šablonu jako tisková účtenka; order/return/exchange e-maily jsou konsolidované pod Settings → Notifications → In-store receipts, a zcustomizovaný POS e-mail bude potřebovat přidat receipt link ručně."
tagy: [pos, receipts, email, sms, templates, notifications]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Dosud museli obchodníci udržovat zvlášť tiskovou účtenku v POS receipt editoru a zvlášť e-mailové šablony pro objednávku, vratku a výměnu, takže zákazník dostal stejný doklad v různé podobě podle kanálu. Shopify to sjednocuje: jedna šablona z POS receipt editoru nově pohání tisk, e-mail i SMS. Pro merchanta to znamená méně údržby a konzistentní vzhled, ale dopad na dřívější customizaci e-mailů, která se řešila odděleně. Konsolidované šablony najdete v Adminu pod Settings → Notifications → In-store receipts.
  zdroje:
    - title: "Shopify: Email and text receipts now match your printed receipt"
      url: "https://changelog.shopify.com/posts/email-and-text-receipts-now-match-your-printed-receip"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Emailované i textové (SMS) účtenky z POS nově používají stejnou šablonu jako tisková účtenka z POS receipt editoru. Zákazník tedy dostane stejně vypadající doklad bez ohledu na to, jakým kanálem si ho nechá poslat. Příjemci SMS navíc dostanou účtenku přímo v těle zprávy, nejen odkaz.

Šablony order, return a exchange e-mailů jsou konsolidované na jednom místě: Settings → Notifications → **In-store receipts**. Místo tří oddělených úprav tedy spravujete jednu šablonu.

Pozor na customizaci: pokud má obchodník upravenou vlastní POS e-mailovou šablonu, bude do ní potřeba ručně přidat **receipt link**. Automaticky se nedoplní.

## Dopad pro nás

**Pro PM / PO:** Klientům, kteří používají POS a mají zcustomizovanou e-mailovou šablonu, dejte vědět, že si musí doplnit receipt link, jinak jim může v e-mailu chybět odkaz na účtenku. Ostatním klientům stačí rozhodnout, zda chtějí upravovat jednu šablonu pro všechny kanály (tisk, e-mail, SMS), nebo zůstat u výchozího vzhledu. Změna je již účinná od 2026-11-20, takže ji doporučujeme projít co nejdřív u klientů s fyzickými prodejnami.

**Pro vývojáře:** Žádný vývoj se nevyžaduje.

## Použití v Integrátoru

Ne. Jde čistě o nastavení v Shopify Adminu (Settings → Notifications → In-store receipts), integrátor do této oblasti nezasahuje.
