---
date: 2026-06-17
title: "Tap to Pay pro multi-entity byznysy napříč retail lokacemi"
title_en: "Tap to Pay for multi-entity businesses"
slug: tap-to-pay-multi-entity
zdroj: https://help.shopify.com/en/manual/sell-in-person/shopify-pos/payment-management/tap-to-pay-iphone
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Retail klienti s více právními subjekty mohou nově akceptovat NFC platby bez nutnosti fyzického terminálu na každé entitě — relevantní při konzultacích o POS nasazení a multi-entity architektuře."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-retail", "pos-v11-rebuild-deep-dive"]
editions_release: spring-2026
kontext:
  background: |
    Tap to Pay na iPhonu je funkce Shopify POS, která z kompatibilního iPhonu udělá platební terminál schopný přijímat bezkontaktní platby — kreditními a debetními kartami i digitálními peněženkami (Apple Pay, Google Pay). Platba probíhá přiložením karty nebo zařízení zákazníka k horní části telefonu bez potřeby jakéhokoli externího hardwaru. Funkce automaticky aktivuje PIN pad tam, kde to karetní schéma nebo výše transakce vyžaduje.

    Tap to Pay bylo ve Shopify POS dostupné pro jednotlivé obchody již od roku 2022 (US), postupně se rozšiřovalo do Australie, UK, Kanady a Evropy. Původní omezení ale spočívalo v tom, že multi-entity byznysy — holdingové struktury, franchisy nebo operátoři více značek pod jedním Shopify store — museli pro každou právní entitu spravovat Tap to Pay odděleně a naráželi na technická omezení při aktivaci napříč entitami sdílejícími jednu POS instalaci.

    Spring '26 toto omezení odstraňuje: Tap to Pay lze nyní aktivovat samostatně pro každou entitu v rámci jednoho Shopify store, přičemž každá entita si zachovává vlastní Shopify Payments účet a vlastní platební tok. Jde o přímé navazování na širší multi-entity selling strategii POS v11 — fyzický retail komplexních obchodních struktur dostává stejnou flexibilitu, jakou B2B a online kanály mají již delší dobu.

    Praktický dopad je elimnace potřeby dedikovaného platebního hardwaru per entita. Tam kde dříve multi-entity provozovatel potřeboval samostatný terminál (nebo složitou konfiguraci) pro každý právní subjekt, dnes stačí iPhone přiřazený dané lokaci. Snižuje to kapitálové náklady při otevírání nových lokací a urychluje onboarding nových entit do stávající retailové infrastruktury.

  zdroje:
    - title: "Shopify Help: Tap to Pay on iPhone for Shopify POS"
      url: "https://help.shopify.com/en/manual/sell-in-person/shopify-pos/payment-management/tap-to-pay-iphone"
    - title: "Shopify Editions Spring '26: Retail theme overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Multi-entity byznysy (franchisy, holdingy) mohou od Spring '26 aktivovat Tap to Pay na iPhonu samostatně pro každou právní entitu napříč retail lokacemi — žádný dedikovaný terminál per subjekt není potřeba."
tagy: [editions, pos, payments, multi-entity, tap-to-pay]
zdroj_kanal: editions
---

## Co se mění

Shopify Editions Spring '26 rozšiřuje Tap to Pay na iPhonu o explicitní podporu **multi-entity byznysů** — obchodních struktur, kde pod jedním Shopify store operuje více právních subjektů (franchisy, holdingové struktury, operátoři více značek).

Každá entita si nyní může aktivovat Tap to Pay **samostatně** přes vlastní Shopify Payments účet. Aktivace probíhá v POS Settings > Payments pro danou entitu, potvrzením Apple ID a přijetím podmínek Apple. Po aktivaci je funkce okamžitě dostupná na všech kompatibilních iPhonech přihlášených do daného store účtu entity.

Technické požadavky zůstávají nezměněné oproti standardnímu Tap to Pay:
- iPhone XS nebo novější
- iOS 16.7+ (US, AU, UK), iOS 17.0+ (FR, IT, NL), iOS 17.4+ (CA)
- Aktivní Shopify Payments pro danou entitu
- Location services povoleny, test mode vypnut

Podporované platební metody: VISA, Mastercard, Amex, Interac (CA), Discover a Diners Club (US), eftpos AU (AU).

## Časová osa

- 2022 — Tap to Pay spuštěno pro US (single-entity POS)
- 2023–2025 — postupná expanze: AU, UK, CA, FR, IT, NL
- 2026-06-17 — Editions Spring '26: multi-entity aktivace per entita

## Dopad pro nás

**Pro vývojáře:**
Tap to Pay není feature exponovaná přes Admin API — aktivace i konfigurace probíhá výhradně přes POS aplikaci a Shopify admin UI. Z vývojářského pohledu není potřeba implementační práce. Relevantní je pouze tehdy, pokud customizujeme POS UI Extensions pro retail klienty s multi-entity architekturou — tam stojí za to ověřit, zda extensions správně odráží aktivní platební metody per entita.

**Pro PM / PO:**
Pro retail klienty s více provozovnami pod různými IČ jde o přímou úsporu hardwarových nákladů — každá entita nepotřebuje vlastní fyzický terminál, stačí přiřazený iPhone. Při konzultacích o POS nasazení je vhodné zmínit tuto možnost u klientů rozšiřujících svou retailovou síť formou franchisingu nebo holdingové struktury. Omezení: funkce vyžaduje Shopify Payments, který není dostupný v ČR/SK — pro lokální trh je tedy relevantní pouze pro klienty operující v podporovaných regionech (US, CA, UK, AU, části EU).

## Použití v Integrátoru

Přímá relevance pro API integraci je nízká — funkce nevyžaduje žádné API volání. Při návrhu multi-entity POS architektur stojí za zmínku jako nativní alternativa k externímu platebnímu hardwaru.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Retail](/Shopify_news_magexo/zmena/editions-spring-2026-retail/)
