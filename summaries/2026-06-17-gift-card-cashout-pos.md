---
date: 2026-06-17
title: "Cash out gift card přímo v Shopify POS"
title_en: "Gift card cashout in Shopify POS"
slug: gift-card-cashout-pos
zdroj: https://help.shopify.com/en/manual/sell-in-person/shopify-pos/payment-management/gift-cards/cashing-out
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Gift card cashout probíhá pouze v POS UI bez API zásahu — relevantní hlavně pro retail klienty v US jurisdikcích, kde je cashout zákonnou povinností."
dotcene_klienty: []
souvisejici: ["editions-spring-2026-retail", "giftcardcashouttransaction-resolvable", "gift-card-local-currency"]
editions_release: spring-2026
kontext:
  background: |
    Gift card cashout (proplacení dárkové karty v hotovosti) je funkce, která umožňuje merchantovi vyplatit zákazníkovi zbývající zůstatek na dárkové kartě přímo jako hotovost, namísto toho, aby zůstatek zůstal na kartě jako kredit. Jde o compliance feature — ne o novinku v obchodním modelu, ale o naplnění zákonné povinnosti, která ve více amerických státech (např. Kalifornie, Massachusetts) nařizuje, aby merchant umožnil vyplacení nízkých zůstatků gift card na požádání zákazníka.

    Pozadí těchto zákonů ("gift card redemption laws" nebo "cash back laws") spočívá v ochraně spotřebitele: dárkové karty s velmi nízkým zůstatkem (obvykle pod $5–15 USD dle státu) mají pro zákazníka prakticky nulovou hodnotu, protože obvykle nestačí na plnou transakci. Zákon proto merchantovi nařizuje na žádost zůstatek proplatit v hotovosti. Nesoulad s těmito pravidly může vést k pokutám nebo stížnostem státního regulátora.

    Shopify POS tuto funkcionalitu nově řeší nativně přímo v UI aplikace. Dříve neexistoval standardní flow pro cashout — merchant musel operaci obejít ručním procesem (refund, custom transaction) nebo ji vůbec nepodporoval. Nová funkce přidává tlačítko "Cash out balance" přímo na detail gift card v POS, takže zaměstnanec prodejny může celý proces dokončit bez úniku z POS prostředí.

    Z pohledu Shopify ekosystému cashout POS doplňuje souběžnou API změnu: typ `GiftCardCashOutTransaction` je od API verze 2026-07 resolvable z rozhraní `GiftCardTransaction` v GraphQL Admin API, takže systémy třetích stran mohou cashout transakce číst a zahrnout do reportingu nebo účetní integrace.

  zdroje:
    - title: "Shopify Editions Spring '26: Gift card cashout in Shopify POS"
      url: "https://help.shopify.com/en/manual/sell-in-person/shopify-pos/payment-management/gift-cards/cashing-out"
    - title: "GiftCardCashOutTransaction is now resolvable from GiftCardTransaction (Admin API 2026-07)"
      url: "https://shopify.dev/changelog/giftcardcashouttransaction-now-resolvable-from-giftcardtransaction"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify POS nově umožňuje přímý cashout gift card s nízkým zůstatkem (pod $15 USD) — compliance feature pro US retailery v jurisdikcích s redemption laws."
tagy: [editions, pos, gift-cards, compliance]
zdroj_kanal: editions
---

## Co se mění

Shopify POS nyní obsahuje nativní flow pro **cash out gift card**: pokud má zákazník gift card se zůstatkem pod $15 USD (nebo lokálním ekvivalentem), zaměstnanec prodejny může na detail karty otevřít volbu "Cash out balance", potvrdit částku a vyplatit hotovost přímo z pokladní zásuvky. Karta je poté deaktivována.

Funkce je dostupná pouze pokud obchod přijímá hotovostní platby. Karty s vyšším zůstatkem nebo neaktivní karty volbu nezobrazí — POS automaticky vyhodnotí způsobilost. Cashout lze spustit přes tři cesty: sken čárového kódu, vyhledání zákazníka nebo lookup podle objednávky.

Jde o **compliance feature**, nikoliv obchodní model — cílem je splnit zákonné požadavky US států (Kalifornie, Massachusetts a dalších), které nařizují merchantovi umožnit vyplacení nízkých zůstatků gift card na žádost zákazníka. Nesoulad s těmito pravidly může mít právní důsledky pro retail provozovatele.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce; funkce live v Shopify POS
- 2026-07-01 — API verze 2026-07: `GiftCardCashOutTransaction` resolvable z `GiftCardTransaction` v GraphQL Admin API

## Dopad pro nás

**Pro vývojáře:**
Cashout samotný nevyžaduje žádnou integraci — celý flow se odehraje v POS UI. Pokud ale klient má účetní nebo reportingovou integraci nad gift card transakcemi, je dobré vědět, že od API 2026-07 přibude nový typ `GiftCardCashOutTransaction` v union rozhraní `GiftCardTransaction`. Integrace pracující s gift card transakcemi by měly tento typ ošetřit, aby nedocházelo k tiché ignoraci cashout pohybů v přehledech.

**Pro PM / PO:**
Relevantní pro US retail klienty, zejména ty operující v Kalifornii nebo Massachusetts. Pro klienty mimo US je funkce k dispozici, ale nemají zákonnou povinnost ji aktivně nabízet. Při onboardingu nových US retail klientů stojí za zmínku jako out-of-the-box compliance řešení — dřív bylo potřeba podobný flow řešit workaroundem nebo třetí stranou.

## Použití v Integrátoru

Gift card cashout probíhá plně v POS UI bez API zásahu; relevance pro integraci nastává pouze pokud klient sleduje gift card transakce přes Admin API — pak je třeba ošetřit nový typ `GiftCardCashOutTransaction` dostupný od verze 2026-07.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Retail](/Shopify_news_magexo/zmena/editions-spring-2026-retail/)
