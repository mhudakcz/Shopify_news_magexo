---
date: 2026-06-17
title: "USDC platby — multi-chain support + automatický cashback na Base"
title_en: "USDC payments — multi-chain support + automatic cashback on Base"
slug: usdc-payments-base-cashback
zdroj: https://help.shopify.com/en/manual/payments/shopify-payments/usdc-payments
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud budeme budovat checkout integrace pro klienty v crypto/Web3 prostoru, bude třeba ošetřit omezení USDC objednávek (žádné částečné zachycení, žádné subscriptions, žádné post-purchase upsells)."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-payments", "editions-spring-2026"]
editions_release: spring-2026
kontext:
  background: |
    USDC (USD Coin) je stablecoin — kryptoměna, jejíž hodnota je 1:1 navázána na americký dolar. Na rozdíl od volatilních kryptoměn jako Bitcoin nebo Ethereum se kurz USDC nemění, což ho dělá praktickým platebním nástrojem pro e-commerce. Shopify Payments jako první velká platební platforma začleňuje USDC nativně do checkout flow bez nutnosti třetí strany nebo samostatné crypto peněženky zákazníka — zákazník platí z běžné crypto peněženky stejně, jako by zadával číslo karty.

    Podpora USDC v Shopify Payments existuje od roku 2022, ale původně pokrývala jen jednu blockchain síť. Spring '26 Editions rozšiřuje podporu na pět EVM-kompatibilních sítí: Base, Ethereum L1, Optimism, Polygon a Arbitrum. Zákazník si při checkoutu zvolí, z které sítě chce platit; merchant žádnou konfiguraci per-chain neprovádí — Shopify orchestruje příjem platby a merchantovi vyplatí buď USDC, nebo fiat podle jeho nastavení. Klíčový rozdíl oproti dřívějšímu stavu je tedy na straně zákazníka: nemusí mít USDC na konkrétní síti, má širší výběr.

    Hlavní nový incentiv je cashback program vázaný na síť Base (Coinbase L2). Zákazníci, kteří zaplatí USDC přes Base, automaticky obdrží cashback v USDC — bez registrace, bez kupónu, bez akce ze strany merchantů. Reward se připisuje 30 dní po nákupu přímo do zákazníkovy Base peněženky a je zastropován na 100 USDC na transakci. Cashback financuje a vyplácí Shopify (resp. Coinbase Base ekosystém), ne merchant. Jde o strategický tah: Base je Coinbase L2 chain a Shopify/Coinbase touto motivací cíleně posouvají stablecoin platby do mainstreamu a budují usage Base sítě.

    Merchant může USDC příjmy dál zpracovávat dvěma způsoby: převést je automaticky na lokální fiat měnu v rámci standardních Shopify Payments výplat, nebo si nárokovat USDC přímo do vlastní crypto peněženky (per claim, vždy je třeba peněženku znovu připojit). Způsob je na výběr v nastavení Shopify Payments. Omezení jsou jasná: USDC objednávky nepodporují částečné zachycení platby, subscriptions, spory ze strany zákazníka ani post-purchase upsells — jde o finální a nereverzibilní on-chain transakce.
  zdroje:
    - title: "Shopify Help: USDC payments"
      url: "https://help.shopify.com/en/manual/payments/shopify-payments/usdc-payments"
    - title: "Shopify Editions Spring '26: Payments — Shop Pay anywhere, multi-currency, USDC"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Payments nově přijímá USDC na pěti EVM chains (Base, Ethereum, Optimism, Polygon, Arbitrum) a zákazníci platící přes Base získávají automatický USDC cashback — bez nutnosti jakékoliv konfigurace ze strany merchantů."
tagy: [editions, payments, crypto, usdc, stablecoin, base]
zdroj_kanal: editions
---

## Co se mění

Shopify Payments rozšiřuje nativní podporu USDC stablecoin plateb ze jedné sítě na pět EVM-kompatibilních chains: **Base, Ethereum L1, Optimism, Polygon, Arbitrum**. Zákazník si v checkoutu sám zvolí, z které sítě platí — merchant nic nekonfiguruje a dostane platbu ve své preferované měně (USDC nebo fiat).

Klíčová novinka je **cashback program na Base síti**: zákazníci platící USDC přes Base automaticky obdrží cashback v USDC do 30 dnů po nákupu. Odměna je zastropována na 100 USDC na transakci a vyplácena přímo Shopify/Base ekosystémem — merchant z toho neplatí nic a cashback ani nemusí nastavovat.

Merchant může USDC výplaty zpracovat dvěma způsoby:
- **Automatická konverze na fiat** — USDC se převede do lokální měny a zahrne do standardních Shopify Payments výplat.
- **Claim USDC do vlastní peněženky** — merchant si nárokuje USDC přímo; peněženku je třeba připojit pro každý claim zvlášť.

**Omezení USDC objednávek** (důležité pro integrátory):
- Žádné částečné zachycení platby (partial capture)
- Žádné subscriptions
- Zákazník nemůže zahájit dispute
- Post-purchase upsells nejsou povoleny

Eligibilita: aktivní Shopify Payments v podporovaném regionu (většina Severní Ameriky, Evropy; Hong Kong z APAC). Zástupce účtu musí mít bydliště v USDC-způsobilém regionu (KYC/regulatory compliance).

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; multi-chain USDC + Base cashback spuštěno

## Dopad pro nás

**Pro vývojáře:**
Samotná platba USDC běží plně na Shopify Payments vrstvě — integrátor se nemusí zabývat blockchain logikou. Relevantní je znát omezení USDC objednávek: pokud budujeme checkout flow s partial capture, subscription billing nebo post-purchase upsell extensí, musíme ošetřit, že tyto funkce pro USDC objednávky nejsou dostupné. Cashback na Base je plně automatický a nevyžaduje žádný kód ze strany app developera.

**Pro PM / PO:**
Feature je primárně zajímavá pro klienty, kteří mají zákazníky v crypto/Web3 prostoru nebo cílí na technologicky zdatné nakupující. Cashback program (financovaný Shopify/Base, ne merchantem) je neobvyklý incentiv, který lze zmínit jako benefit — zákazník dostane odměnu bez toho, aby merchant cokoliv platil navíc. Pro většinu standardních e-commerce klientů jde zatím o nízkou prioritu.

## Použití v Integrátoru

Při integraci platebních workflow je třeba počítat s tím, že USDC objednávky nepodporují partial capture ani subscriptions — pokud integrovaný systém tyto operace iniciuje, je nutné přidat podmíněnou logiku podle platební metody.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Payments](/Shopify_news_magexo/zmena/editions-spring-2026-payments/)
