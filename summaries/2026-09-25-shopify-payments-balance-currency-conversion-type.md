---
date: 2026-09-25
title: "BalanceTransaction GraphQL type: podpora currency conversion type"
title_en: "Shopify Payments Balance Transaction GraphQL type supports currency conversion type"
slug: shopify-payments-balance-currency-conversion-type
zdroj: https://shopify.dev/changelog/posts/shopify-payments-balance-transaction-graphql-type-supports-currency-conversion-type
shrnuto_dne: 2026-09-30
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud někdy budeme číst Shopify Payments balance transactions přes Admin GraphQL, půjde nově rozlišit FX konverze od běžných plateb; akutní potřeba není známa, ale stojí to za sledování u klientů s multi-currency payouts."
dotcene_klienty: []
souvisejici: [shopify-payments-balance-activity-report, multi-currency-payouts-australia-france, shopify-payments-multi-currency-bank-account-per-currency]
tldr: "Enum ShopifyPaymentsTransactionType v Admin GraphQL API (verze 2026-10) nově obsahuje hodnotu CURRENCY_CONVERSION, takže aplikace v balance transactions odliší měnové konverze od běžných plateb."
tagy: [admin-graphql-api, shopify-payments, balance-transaction, currency-conversion, multi-currency]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Payments vede pro každého obchodníka balance, tedy zůstatek, na který se připisují tržby z plateb a z kterého se odečítají refundy, poplatky, chargebacky a výplaty (payouts). Každý takový pohyb je v Admin GraphQL API reprezentován jako balance transaction a jeho povaha je popsána enum hodnotou ShopifyPaymentsTransactionType (například charge, refund, payout nebo adjustment). Aplikace pro účetnictví, reconciliaci a finanční reporting nad těmito daty typicky třídí pohyby právě podle této hodnoty.

    Dosud enum pro měnové konverze nenabízel samostatnou hodnotu. Jakmile obchodník prodává ve více měnách a používá multi-currency payouts, vznikají v balance pohyby související s přepočtem kurzem a pro aplikace bylo složitější je oddělit od standardních plateb. Nová hodnota CURRENCY_CONVERSION tuto mezeru zavírá a umožňuje konverze identifikovat přímo z typu transakce, bez heuristik nad částkami nebo měnami.

    Změna navazuje na sérii úprav Shopify Payments z posledních měsíců: rozšiřování multi-currency payouts do dalších zemí, zrušení limitu bankovních účtů na měnu a nový activity report v administraci, který ukazuje pohyby balance za zvolené období. Tyto novinky byly převážně merchant-facing v adminu, zatímco tato změna dává stejnou granularitu i vývojářům přes API. Samotný changelog je stručný: potvrzuje pouze přidání hodnoty enumu ve verzi 2026-10, bez ukázek dotazů a bez dalších polí.
  zdroje:
    - title: "Shopify: Shopify Payments Balance Transaction GraphQL type supports currency conversion type"
      url: "https://shopify.dev/changelog/posts/shopify-payments-balance-transaction-graphql-type-supports-currency-conversion-type"
    - title: "Shopify Payments activity report — pohyby balance ve zvoleném období"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-payments-balance-activity-report/"
    - title: "Multi-currency payouts nyní v Austrálii a Francii"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/multi-currency-payouts-australia-france/"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

V **Admin GraphQL API** přibývá do enumu **`ShopifyPaymentsTransactionType`** nová hodnota **`CURRENCY_CONVERSION`**. Enum popisuje druh jednotlivých pohybů na Shopify Payments balance, takže aplikace nyní mohou měnové konverze rozpoznat přímo z typu transakce a nemusejí je složitě odvozovat z jiných polí.

Změna je **aditivní**: žádná existující hodnota enumu se nemění ani neodebírá a changelog neuvádí žádnou povinnou akci. Je vázaná na verzi API **2026-10**. Post je velmi stručný a neobsahuje příklady dotazů ani další pole, takže konkrétní podobu odpovědí (například jak se konverze zobrazí u multi-currency payouts) je vhodné ověřit v dokumentaci a na testovacím obchodě.

## Časová osa

- **2026-07-27** — Zrušen limit bankovních účtů na měnu u multi-currency payouts v Shopify Payments.
- **2026-08-22** — Nový Shopify Payments activity report v adminu (přehled pohybů balance za období).
- **2026-09-11** — Multi-currency payouts spuštěny v Austrálii a Francii.
- **2026-09-25** — Oznámena hodnota `CURRENCY_CONVERSION` v `ShopifyPaymentsTransactionType` (Admin GraphQL API, verze 2026-10).

## Dopad pro nás

**Pro vývojáře:** Kdo dnes čte balance transactions Shopify Payments přes Admin GraphQL, měl by s novou hodnotou počítat. Pokud kód nebo generované typy (codegen) zpracovávají enum přes striktní `switch` bez výchozí větve, může se po přechodu na verzi 2026-10 objevit neznámá hodnota, která vyvolá chybu nebo skončí v nesprávné kategorii. Doporučení: přidat explicitní obsluhu `CURRENCY_CONVERSION` (nebo bezpečný fallback) a při upgradu API verze ji pokrýt testem. Pokud žádné balance transactions nečteme, není potřeba nic dělat.

**Pro PM / PO:** Jde o příležitost spíš než o riziko. U klientů s více měnami a multi-currency payouts, kteří řeší reconciliaci nebo účetní uzávěrky, lze nově postavit přehled, který odděluje náklady a pohyby z měnových konverzí od běžných plateb. Akutní dopad na konkrétního klienta není znám, proto nízká naléhavost. Stojí za to zmínit při diskusích o finančním reportingu, kde klienti dnes spoléhají na ruční práci s exporty.

## Použití v Integrátoru

Není známo, že by naše integrace balance transactions Shopify Payments četly, takže změna pravděpodobně nic nemění a netřeba nic upravovat. Pokud by vznikl požadavek na finanční reconciliaci nebo reporting nad Shopify Payments, nová hodnota by usnadnila oddělení FX konverzí od běžných plateb.
