---
date: 2026-11-13
title: "Custom draft order discounts — nyní v presentment currency (ne shop currency)"
title_en: "Custom draft order discounts now use presentment currency"
slug: custom-draft-order-discounts-presentment-currency
zdroj: https://changelog.shopify.com/posts/custom-draft-order-discounts-now-use-presentment-currency
shrnuto_dne: 2026-11-16
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud vytváříme nebo čteme draft ordery s vlastní slevou v jiné měně než shop currency, může se změnit význam částky slevy. Post žádné API detaily neuvádí, proto je potřeba ověřit na testovacím shopu."
dotcene_klienty: []
souvisejici: [draft-order-subscriptions, selling-plans-draft-orders-admin-api, editions-fall-2026, editions-fall-2026-payments]
tldr: "Vlastní slevy přidané do draft orderu se nově počítají v presentment currency draftu, ne v měně shopu. Post neuvádí žádné API detaily ani datum účinnosti."
tagy: [draft-orders, discounts, multi-currency, presentment, markets]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Draft order je ruční objednávka vytvořená obchodníkem nebo sales repem v adminu (případně přes API), která se zákazníkovi posílá jako faktura s odkazem do checkoutu. Používá se pro telefonické a e-mailové objednávky, nabídky na míru nebo B2B zakázky. Při prodeji do více zemí má draft presentment currency, tedy měnu, ve které zákazník cenu vidí, a ta se může lišit od shop currency, tedy základní měny obchodu.

    Produktový changelog Shopify z 13. 11. 2026 (štítek Changed Admin) uvádí, že vlastní slevy (custom discounts) přidané do draft orderu nově používají presentment currency draftu místo shop currency. Důvodem je podle postu snazší interpretace částek slevy, pokud zákazník platí v jiné měně než je výchozí měna obchodu. Post odkazuje na nápovědu Shopify, sekci o aplikaci slevy na celou objednávku.

    Post neuvádí žádné API detaily, verzi ani datum účinnosti. Praktický příklad, že sleva 10 EUR na draftu pro zákazníka v eurech už není přepočtem z dolarové částky, je naše interpretace zadání a post ho výslovně neuvádí. Obdobně není potvrzeno, zda se změna týká i slev vytvářených přes API, nebo jen zadávání v adminu. Doporučujeme to ověřit na vývojovém shopu.
  zdroje:
    - title: "Shopify: Custom draft order discounts now use presentment currency"
      url: "https://changelog.shopify.com/posts/custom-draft-order-discounts-now-use-presentment-currency"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Vlastní slevy přidané na draft order se nově počítají v presentment currency draftu, ne v měně shopu. Shopify to zdůvodňuje tím, že částky slev jsou čitelnější, když zákazník platí v jiné měně než je výchozí měna obchodu. Změna je zařazena jako Changed Admin. Post neuvádí žádné API detaily.

## Časová osa

- 2026-11-13: zveřejnění novinky v produktovém changelogu Shopify.
- Datum nasazení ani případné postupné zapínání post neuvádí, uvažujeme účinnost od data zveřejnění.

## Dopad pro nás

**Pro vývojáře:** Post nezmiňuje API, takže není jasné, zda se chování změnilo i pro slevy zadané přes Admin GraphQL. Pokud vytváříme draft ordery s custom discount nebo je zpětně čteme a porovnáváme částky, je vhodné na testovacím shopu ověřit, v jaké měně se sleva zadává a vrací, a případně upravit přepočty.

**Pro PM / PO:** Zjednodušuje to ruční a B2B fakturaci napříč markety, protože sales rep může zadat slevu přímo v měně zákazníka. Riziko je nízké, hlavně je třeba informovat obchodníky, že zadávaná částka je nově v měně draftu.

## Použití v Integrátoru

Relevantní jen tehdy, pokud pracujeme s draft ordery a jejich slevami v multi-currency obchodech. Jinak nemá změna žádný přímý dopad.
