---
date: 2026-11-06
title: "Cartes Bancaires debit v store (FR) — GA na WisePad 3 + POS Terminal"
title_en: "Accept Cartes Bancaires debit payments in store in France"
slug: cartes-bancaires-debit-france-pos-ga
zdroj: https://changelog.shopify.com/posts/accept-cartes-bancaires-debit-payments-in-store-in-france
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přímý dopad na API není, ale u klientů s francouzskými prodejnami se mohou změnit typy plateb a poplatky v POS objednávkách, které se synchronizují do ERP."
dotcene_klienty: []
souvisejici: [pos-local-payment-methods-asia-eu, pos-sales-attribution-per-associate, ach-payments-b2b]
tldr: "Shopify POS ve Francii nově přijímá debetní karty Cartes Bancaires na terminálech WisePad 3 a POS Terminal, takže obchodníci nemusí platit poplatky přes Visa/Mastercard."
tagy: [cartes-bancaires, france, debit, pos, wisepad-3, pos-terminal]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Cartes Bancaires je francouzské domácí kartové schéma, přes které teče většina místních kartových transakcí. Mnoho francouzských debetních karet je co-badged, tedy nese značku CB i Visa nebo Mastercard, a část z nich je pouze CB (debit-only).
    Shopify Payments na POS dosud takové debit-only karty ve Francii nepřijímalo. Podpora byla oznámena v rámci Editions Fall 2026 a nyní je obecně dostupná.
    Změna se týká výhradně prodeje v kamenných prodejnách ve Francii na zařízeních WisePad 3 a Shopify POS Terminal. Changelog neuvádí žádné další podmínky, jako je tarif nebo opt-in.
  zdroje:
    - title: "Shopify: Accept Cartes Bancaires debit payments in store in France"
      url: "https://changelog.shopify.com/posts/accept-cartes-bancaires-debit-payments-in-store-in-france"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Payments na POS nově přijímá debit-only karty Cartes Bancaires při platbách v obchodě. Podpora je dostupná pro obchodníky s Shopify POS ve Francii a funguje na čtečkách WisePad 3 a na zařízení POS Terminal. Zákazníci, kteří mají jen francouzskou debetní kartu CB, tak mohou platit bez náhradního řešení.

Z changelogu vyplývá jen to, že jde o rozšíření podporovaných značek karet. Seznam podporovaných značek je popsán v nápovědě Shopify k POS.

## Časová osa

- Editions Fall 2026: funkce oznámena.
- 2026-11-06: obecná dostupnost (GA) ve Francii.
- Bez dalších termínů a bez nutnosti akce ze strany obchodníka, podle zveřejněných informací.

## Dopad pro nás

**Pro vývojáře:** Changelog nezmiňuje žádnou změnu API ani webhooků. Je vhodné ověřit, zda se u POS transakcí z francouzských poboček neobjeví nové hodnoty názvu platební brány nebo značky karty, a zda s nimi počítá mapování plateb.

**Pro PM / PO:** Jde o příležitost pro klienty s retailem ve Francii: přijímání CB debetu zvyšuje pokrytí zákaznických karet. Dopad na poplatky závisí na podmínkách Shopify Payments a je třeba je ověřit v dokumentaci. Pro české obchodníky bez francouzských prodejen je změna bez dopadu.

## Použití v Integrátoru

Přímé použití není, API se nemění. Při synchronizaci POS plateb do ERP stojí za to zkontrolovat mapování platebních metod u francouzských lokalit.
