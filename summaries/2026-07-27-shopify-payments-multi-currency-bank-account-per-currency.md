---
date: 2026-07-27
title: "Shopify Payments: bankovní účet pro každou payout měnu (odstranění 8-currency limitu)"
title_en: "Add a bank account for every payout currency in Shopify Payments"
slug: shopify-payments-multi-currency-bank-account-per-currency
zdroj: https://changelog.shopify.com/posts/add-a-bank-account-for-every-payout-currency
zdroj_kanal: merchant-changelog
shrnuto_dne: 2026-07-28

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-27

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchanti s mezinárodním prodejem mohou žádat o nastavení bankovních účtů pro více payout měn; jde o konfiguraci na straně Shopify Payments, ne o API integraci."
dotcene_klienty: []

souvisejici: [multi-currency-payout-expansion, multiple-legal-entities-shopify-payments, clearer-payout-balance-shopify-payments]

tldr: "Shopify Payments zrušil limit 8 měn pro bankovní účty u multi-currency payouts — merchant si teď může nastavit samostatný bankovní účet pro každou podporovanou payout měnu a dostávat peníze bez FX konverze."

tagy: [shopify-payments, multi-currency, payouts, banking, international]

kontext:
  background: |
    Multi-currency payouts jsou funkcí Shopify Payments, která umožňuje merchantům přijímat výplaty přímo v měně, ve které zákazník zaplatil — bez automatické konverze do domácí měny obchodu. Místo toho, aby Shopify převedl tržby v eurech na dolary a poslal jednu souhrnnou platbu, může merchant držet eura na eurovém účtu a nakládat s nimi bez zbytečné směny. Předpokladem je, že má u dané měny založený odpovídající bankovní účet.

    Doteď platilo omezení: merchant si mohl v rámci multi-currency payouts nastavit bankovní účty maximálně pro 8 měn současně. Pro menší obchody to obvykle stačilo, ale rostoucí počet merchantů prodávajících globálně (přes Shopify Markets do desítek zemí) na tento limit narážel — chyběly jim účty pro další měny a přebytečné tržby se tak musely konvertovat s FX poplatky a kurzovým rizikem, přesně tomu, čemu měly multi-currency payouts předcházet.

    Aktualizace z 27. července 2026 limit 8 měn ruší. Merchant si nyní může založit bankovní účet pro každou payout měnu, kterou Shopify Payments v dané zemi podporuje, a dostávat tak výplaty v původní měně napříč celým svým mezinárodním sortimentem měn — bez nucené konverze a bez navazujících konverzních poplatků. Prakticky to pomáhá merchantům, kteří v zahraničních měnách zároveň platí náklady (dodavatele, mzdy poboček, lokální daně) — mohou tyto prostředky držet přímo v cizí měně místo opakovaného převodu tam a zpět. Funkce zůstává omezená na oprávněné (eligible) plány a regiony a výplaty v nedomácí měně mohou být zpoplatněny podle podmínek Shopify Payments pro danou lokalitu.
  zdroje:
    - title: "Shopify: Add a bank account for every payout currency in Shopify Payments"
      url: "https://changelog.shopify.com/posts/add-a-bank-account-for-every-payout-currency"
    - title: "Shopify Help: Managing multi-currency payouts with Shopify Payments"
      url: "https://help.shopify.com/en/manual/payments/shopify-payments/store-currency/payouts-in-multiple-currencies"
  generated_at: 2026-07-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Payments odstranil dosavadní limit 8 měn pro bankovní účty u multi-currency payouts. Merchant si nově může nastavit samostatný bankovní účet pro každou podporovanou payout měnu — bez ohledu na to, kolik jich reálně používá. Výplata tak přijde přímo ve stejné měně, ve které zákazník zaplatil, místo automatické konverze do domácí měny obchodu.

Přínos je zejména pro merchanty prodávající globálně přes více Shopify Markets: eliminují FX konverzní poplatky, snižují expozici vůči kurzovým výkyvům a mohou držet zůstatky přímo v měnách, které potřebují na straně nákladů (dodavatelé, mzdy zahraničních poboček, lokální daně). Funkce zůstává vázaná na oprávněné (eligible) plány a regiony a výplaty v nedomácí měně mohou být zpoplatněny podle standardních podmínek Shopify Payments.

## Časová osa

- **2026-07-27** — Limit 8 měn zrušen, funkce aktivní pro oprávněné Shopify Payments merchanty.

## Dopad pro nás

**Pro vývojáře:** Jde o konfigurační změnu v nastavení bankovních účtů na straně Shopify Payments/Shopify admin, nemá dopad na Admin API, webhooky ani datové modely objednávek. Žádná akce na naší straně není potřeba.

**Pro PM / PO:** Relevantní zejména pro klienty s mezinárodním prodejem přes více měn/trhů, kteří si dosud stěžovali na FX poplatky nebo na to, že jim docházely „sloty" pro bankovní účty. U takových klientů má smysl proaktivně upozornit, že limit padl a mohou si domluvit další účty přímo se svou bankou/Shopify Payments podporou.

## Použití v Integrátoru

Přímo se naší integrace netýká — jde o nativní konfiguraci Shopify Payments bez dopadu na API vrstvu. Relevantní je jen jako doporučení pro klienty s mezinárodním payout setupem.
