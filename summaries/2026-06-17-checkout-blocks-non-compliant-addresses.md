---
date: 2026-06-17
title: "Checkout Blocks: address format validation pro všechny merchanty + deprecation Address Blocker"
title_en: "Checkout Blocks: Prevent non-compliant shipping addresses + Address Blocker deprecation"
slug: checkout-blocks-non-compliant-addresses
zdroj: https://changelog.shopify.com/posts/checkout-blocks-block-non-compliant-shipping-addresses-at-checkout
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme checkout flow nebo zpracováváme doručovací adresy, je dobré vědět, že validace probíhá na straně Shopify checkout pravidel — vlastní validace adres v integrátoru může být redundantní."
dotcene_klienty: []
souvisejici: ["checkout-blocks-order-value-limits-all-plans", "address-autocomplete-validation-improvements", "visual-updates-checkout-blocks"]
tldr: "Shopify zpřístupnil nativní checkout pravidlo pro blokování nesprávně formátovaných doručovacích adres všem merchantům; dosavadní Address Blocker block bude k 31. 8. 2026 deprecated a existující konfigurace budou automaticky migrovány."
tagy: [checkout, address, validation, deprecation, address-blocker]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Checkout Blocks je nativní Shopify nástroj, který umožňuje merchantům definovat pravidla pro checkout bez nutnosti custom kódu nebo třetí strany. Pravidla se konfigurují přes Shopify admin (Settings → Checkout → Checkout rules) a jsou vynucována konzistentně napříč všemi checkout experiences — včetně standardního online checkoutu i nových agentic commerce flows.

    Doposud existoval separátní Address Blocker block jako součást Checkout Blocks app, který umožňoval blokovat konkrétní adresy nebo formáty. Shopify tento přístup sjednocuje pod nové nativní pravidlo „Address format validation", které nabízí stejnou nebo větší funkcionalitu, ale v rámci standardizovaného rámce checkout pravidel dostupného všem merchantům bez ohledu na plán.

    Praktický dopad pro merchanty je dvojí: za prvé získávají možnost vynucovat správný formát doručovacích adres přímo v checkoutu (zákazník dostane inline chybovou hlášku a nemůže objednat, dokud adresu neopraví), což snižuje problémy s doručením a chargeback rizika. Za druhé, stávající uživatelé Address Blocker blocku nemusí nic dělat — Shopify provede automatickou migraci jejich nastavení na nové pravidlo v průběhu nadcházejících týdnů.

  zdroje:
    - title: "Shopify: Checkout Blocks: Prevent non-compliant shipping addresses + Address Blocker deprecation"
      url: "https://changelog.shopify.com/posts/checkout-blocks-block-non-compliant-shipping-addresses-at-checkout"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify zpřístupnil nové nativní checkout pravidlo **Address format validation** všem merchantům od 17. června 2026. Pravidlo umožňuje blokovat dokončení objednávky, pokud zákazník zadá doručovací adresu v nesprávném formátu — zákazník vidí inline chybovou zprávu a musí adresu opravit, než může pokračovat.

Zároveň Shopify oznamuje **deprecation Address Blocker blocku** k **31. srpnu 2026**. Stávající konfigurace Address Blocker budou automaticky migrovány na nové pravidlo bez nutnosti zásahu ze strany merchantů.

Klíčové body:

- Pravidlo je dostupné v Shopify admin: **Settings → Checkout → Checkout rules → Address format validation**
- Vynucování probíhá konzistentně v checkoutu i v agentic commerce experiences
- Zákazník nemůže dokončit objednávku, dokud adresu neopraví — snižuje se riziko nedoručení a operativní zátěž zákaznické podpory
- Automatická migrace Address Blocker konfigurací — merchant nemusí nic dělat

## Časová osa

| Datum | Událost |
|-------|---------|
| 17. 6. 2026 | Address format validation dostupná všem merchantům |
| průběh léta 2026 | Automatická migrace Address Blocker konfigurací |
| **31. 8. 2026** | **Deprecation Address Blocker blocku** |

## Dopad pro nás

Tato změna je primárně merchant-facing a konfiguruje se přes Shopify admin bez API. Pro naši práci je relevantní v těchto situacích:

- **Klienti s Address Blocker**: Pokud má klient aktivní Address Blocker block, je dobré ho informovat o automatické migraci a blížícím se deprecation termínu (31. 8. 2026), aby si v adminovi ověřil, že migrace proběhla správně.
- **Checkout integrace**: Pokud pro klienta integrujeme nebo testujeme checkout flow, nová validace adres může ovlivnit testovací scénáře — je třeba počítat s tím, že nesprávně formátované adresy budou blokovány na úrovni Shopify checkout pravidel.
- **Dokumentace a onboarding**: Při setup nových Shopify stores pro klienty stojí za zmínku tato nová možnost validace, zejména pro merchanty, kteří dodávají do zemí s přísnými požadavky na formát adres.

## Použití v Integrátoru

Tato funkce nemá přímé API rozhraní — konfiguruje se výhradně přes Shopify admin. Pro integrátor to znamená, že vlastní validace doručovacích adres na straně integrátoru (pokud existuje) může být redundantní vůči nativní Shopify validaci. Doporučujeme zdokumentovat tuto vrstvu validace, aby nedocházelo k nejasnostem při debugging checkout issues u klientů, kteří mají pravidlo aktivní.
