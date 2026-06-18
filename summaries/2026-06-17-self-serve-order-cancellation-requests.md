---
date: 2026-06-17
title: "Self-serve order cancellation: zákazníci mohou rušit nedoručené objednávky přímo z customer account"
title_en: "Order cancellation requests — self-serve before fulfillment or payment"
slug: self-serve-order-cancellation-requests
zdroj: https://help.shopify.com/manual/fulfillment/managing-orders/returns/self-serve-cancellations
shrnuto_dne: 2026-06-17
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá self-serve returns flow v customer accounts, nyní zákazníci mohou request cancellation pro nedoručené/nezaplacené orders. Snižuje support tickets."
dotcene_klienty: []
souvisejici: ["editions-spring-2026", "editions-spring-2026-operations"]
editions_release: spring-2026
kontext:
  background: |
    Shopify self-serve returns systém umožňuje zákazníkům zahájit vrácení zboží přímo z customer account — bez nutnosti kontaktovat support nebo psát emaily. Zákazník se přihlásí pomocí emailového ověřovacího kódu (bez hesla), vybere doručené položky, které chce vrátit, uvede důvod a odešle žádost. Merchant ji pak ručně schválí nebo zamítne. Celý flow je dostupný přes Settings > Customer accounts v Shopify admin.

    Historicky bylo zrušení objednávky (cancellation) výhradně merchant-side operace. Zákazník, který chtěl objednávku stornovat ještě před odesláním, musel napsat email nebo zavolat na support — a doufat, že merchant stihne reagovat dříve, než objednávka odjede ze skladu. Tato nutnost ručního kontaktu generovala velký objem support tiketů pro relativně jednoduchou operaci, zvláště u obchodníků s delší dobou zpracování.

    Spring '26 rozšiřuje self-serve returns systém o nový typ žádosti: cancellation request. Zákazníci mohou nově přímo v customer account kliknout na "Cancel items" u objednávky, vybrat konkrétní položky, které nebyly dosud odeslány (unfulfilled), přidat důvod a odeslat žádost. Merchant ji obdrží emailem a v admin rozhraní se rozhodne schválit nebo zamítnout — cancellation request sám o sobě stav objednávky nemění. U smíšených objednávek (část odeslána, část ne) lze současně podat return request na odeslané položky a cancellation request na neodeslané.

    Aktivace probíhá v Settings > Customer accounts — merchant přepne toggle "Self-serve returns and cancellations" a z dropdown menu zvolí, zda chce nabídnout "Return and cancel requests", "Return requests only" nebo "Cancel requests only". Pravidla pro vrácení a zrušení (return and cancellation rules) umožňují nastavit časová omezení nebo vyloučit konkrétní produkty a kolekce. Zákazníci musí mít přístup k novým customer accounts (buď plná migrace, nebo přidání customer accounts URL do patičky obchodu).
  zdroje:
    - title: "Shopify Help: Self-serve cancellations setup"
      url: "https://help.shopify.com/manual/fulfillment/managing-orders/returns/self-serve-cancellations"
    - title: "Shopify Help: Self-serve returns setup (související feature)"
      url: "https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/self-serve-returns/setup"
    - title: "Shopify Editions Spring '26"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T12:00:00Z
  model: claude-sonnet-4-6
tldr: "Spring '26 rozšiřuje self-serve returns systém o cancellation requests. Zákazníci mohou v customer account přímo požádat o zrušení objednávky, která ještě nebyla odeslána nebo zaplacena — bez kontaktování supportu. Merchant cancellation schvaluje."
tagy: [editions, returns, cancellation, customer-accounts, fulfillment, self-serve, customer-service]
zdroj_kanal: editions
---

## Co se mění

Spring '26 přidává do self-serve systému nový typ žádosti: **cancellation request**. Zákazníci mohou nově přímo v customer account podat žádost o zrušení položek, které ještě nebyly odeslány (unfulfilled) nebo zaplaceny.

Zákazník flow:
1. Přihlásí se do customer account přes emailový ověřovací kód (bez hesla)
2. Otevře konkrétní objednávku a klikne na **"Cancel items"**
3. Vybere položky k zrušení, uvede důvod (kategorický výběr dle produktového typu)
4. Odešle žádost — objednávka zůstává beze změny až do rozhodnutí merchanta

Merchant flow:
- Obdrží automatický email s notifikací o nové cancellation request
- V admin rozhraní žádost schválí nebo zamítne — stav objednávky se mění pouze při schválení
- U smíšených objednávek (část odeslána, část ne) zákazník může souběžně podat return request pro odeslané položky a cancellation request pro neodeslané

**Eligibilní objednávky:** položky, které ještě nebyly odeslány (unfulfilled). Cancellation requestů nelze podat více než 250 line items najednou. Schválení cancellationu u subscription objednávky neruší automaticky subscription — to vyžaduje zvláštní krok.

**Aktivace:** Settings > Customer accounts > toggle "Self-serve returns and cancellations" > dropdown "Cancel requests only" nebo "Return and cancel requests". Volitelně lze nastavit pravidla (return and cancellation rules) pro časová omezení nebo vyloučení produktů/kolekcí.

**Podmínka:** zákazníci musí mít přístup k novým customer accounts (plná migrace nebo customer accounts URL v patičce / stránce s refund policy).

## Časová osa

- **2026-06-17** — Editions Spring '26 announce, feature dostupná

## Dopad pro nás

**Pro vývojáře:**
Cancellation request je nativní UI feature v customer account — nevyžaduje žádný kód na naší straně. Je ale vhodné zkontrolovat, zda klientovo customer account theme nebo custom extension nepřebíjí standardní order status page, kde se tlačítko "Cancel items" zobrazuje. Pokud klient používá vlastní customer account UI (Hydrogen headless nebo custom extension), je potřeba ověřit, zda nový cancellation flow je v té implementaci přístupný, nebo zda ho zákazníci obejdou standardní cestou přes Shopify hosted customer accounts.

**Pro PM / PO:**
Relevantní pro klienty, kteří dostávají opakované dotazy nebo support tikety s žádostí "ještě to nezaplaťte / zrušte mi to". Particularly B2C obchody s delší dobou přípravy objednávky (made-to-order, pre-order, dropshipping) mohou výrazně snížit support zatížení. Funkce funguje jen s novými customer accounts — pokud klient ještě neprovedl migraci ze starých (classic) accounts, toto je dalším dobrým argumentem pro upgrade.

## Použití v Integrátoru

Tato feature se přímo netýká backendové integrace, ale pokud klient pracuje s order lifecycle (webhook na order cancellation, automatická synchronizace stavu objednávky do ERP) a má aktivované customer accounts, je vhodné ověřit, že jejich integrace správně zpracuje cancellation iniciovanou zákazníkem — tedy webhook `orders/cancelled` s původcem na straně zákazníka, ne pouze merchant-initiated cancel.

## ⬅️ Související

🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Operations](/Shopify_news_magexo/zmena/editions-spring-2026-operations/)
