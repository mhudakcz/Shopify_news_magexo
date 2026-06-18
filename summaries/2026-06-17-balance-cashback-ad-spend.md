---
date: 2026-06-17
title: "Cashback na ad spend ze Shopify Balance — odměny za platby reklamy"
title_en: "Cashback on ad spend from Shopify Balance"
slug: balance-cashback-ad-spend
zdroj: https://help.shopify.com/en/manual/finance/shopify-balance/rewards/cashback-rewards
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Shopify Balance cashback je čistě finanční benefit pro merchanty — vývojáři ani integrátor ho přímo neovlivňují, ale může být relevantní při poradenství klientům o nastavení platebních nástrojů."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-finance", "editions-spring-2026-payments"]
editions_release: spring-2026
kontext:
  background: |
    Shopify Balance je firemní bankovní účet integrovaný přímo do Shopify administrace, určený primárně pro US merchanty. Umožňuje přijímat výplaty z tržby, platit za Shopify služby a spravovat cash flow bez nutnosti propojení s externí bankou. K účtu patří fyzická i virtuální platební karta.

    Cashback rewards program pro Shopify Balance přidává motivaci využívat Balance jako primární platební prostředek. U standardních Shopify výdajů (shipping labels, App Store, témata, domény) platí 2% cashback přes kartu. Nová ad spend vrstva přináší 1% cashback specificky na platby reklamních kampaní (Google, Meta) provedené přes ACH nebo wire transfer přímo ze Balance účtu.

    Tato vrstva je dostupná merchantům, kteří splní alespoň jednu z podmínek: v předchozím měsíci utratili přes Shopify Credit minimálně 10 000 USD, nebo získali v posledních 12 měsících Capital funding minimálně 10 000 USD. Cashback na ad spend je tedy de facto benefit pro větší, aktivnější merchanty, kteří již využívají Shopify finanční ekosystém.

    Limity jsou jasně nastavené: standardní cashback je zastropován na 2 000 USD ročně, zatímco ad spend cashback má vlastní strop 100 000 USD qualifying spend ročně (tedy max. 1 000 USD v odměnách). Výplata probíhá měsíčně zpět na Balance účet. Snapchat kampaně mají speciální sazbu 10% přes kartu. Ročně limity resetují k 1. lednu bez přenosu zůstatku.
  zdroje:
    - title: "Shopify Balance: Cashback rewards"
      url: "https://help.shopify.com/en/manual/finance/shopify-balance/rewards/cashback-rewards"
    - title: "Editions Spring '26: Finance — Balance, Capital a Tax CA"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Balance nyní vrací 1 % cashback na platby reklamních kampaní (Google, Meta) provedené ACH nebo wire transferem — benefit pro větší merchanty aktivně využívající Shopify finanční produkty."
tagy: [editions, balance, finance, cashback, ads]
zdroj_kanal: editions
---

## Co se mění

Shopify Balance rozšiřuje svůj cashback program o speciální vrstvu pro ad spend. Merchantům, kteří splní podmínky způsobilosti, vrací Shopify 1 % z hodnoty reklamních plateb pro Google a Meta kampaně — za předpokladu, že platba proběhne přímo ze Balance účtu formou ACH nebo wire transfer (nikoli kartou).

Vedle toho zůstávají v platnosti standardní sazby: 2 % cashback při platbě Balance kartou za Shopify produkty (shipping labels, App Store aplikace, témata, domény, marketing přes Google/Facebook/Instagram/Pinterest/TikTok) a výjimečných 10 % za Snapchat ad kampaně placené kartou.

**Podmínky způsobilosti pro ad spend cashback (ACH/wire):**
- Shopify Credit spend ≥ 10 000 USD v předchozím měsíci, NEBO
- Shopify Capital funding ≥ 10 000 USD v posledních 12 měsících

**Limity:**
- Standardní cashback: max. 2 000 USD/rok
- Ad spend cashback: max. 100 000 USD qualifying spend/rok → max. 1 000 USD v odměnách/rok
- Výplata: měsíčně zpět na Balance účet
- Reset limitů: 1. ledna každého roku, bez přenosu nevyčerpaného zůstatku

## Časová osa
- 2026-06-17 — Editions Spring '26 announce; cashback na ad spend dostupný pro způsobilé Balance merchanty

## Dopad pro nás

**Pro vývojáře:**
Žádný přímý technický dopad — cashback je finanční mechanismus na straně Shopify, bez API nebo app extension. Není potřeba žádná integrace ani změna kódu. Jediné relevantní místo je případné zobrazení Balance stavu/odměn přes Admin API (Finance objekty), pokud by klient chtěl reportovat cashback v externím systému — ale to dnes dostupné není.

**Pro PM / PO:**
Benefit je relevantní pro US merchanty na vyšších plánech, kteří aktivně inzerují a splňují finanční podmínky (Shopify Credit nebo Capital). Pro agenturu jde o poradenský argument při doporučování Shopify Balance jako primárního platebního nástroje u vhodných klientů. V EU/CZ kontextu Balance zatím není dostupný — sledovat regionální rollout.

## Použití v Integrátoru

Cashback program není technicky integrovatelný — není zde API ani webhook. Relevantní pouze jako obchodní argument při konzultacích o finanční infrastruktuře Shopify merchantů.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Finance](/Shopify_news_magexo/zmena/editions-spring-2026-finance/)
