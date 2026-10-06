---
date: 2026-10-06
title: "Pay suppliers internationally from Balance — US merchanti platí dodavatele v zahraničí"
title_en: "Pay suppliers internationally from Balance"
slug: pay-suppliers-internationally-from-balance
zdroj: https://changelog.shopify.com/posts/pay-suppliers-internationally-from-balance
shrnuto_dne: 2026-10-06
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-06
pouzivame_v_integratoru: ne
dukaz_integratoru: "Jde o US-only funkci Shopify Balance bez API a bez dopadu na naše integrace; relevance je jen informační pro US merchanty, kteří nakupují zboží u zahraničních dodavatelů."
dotcene_klienty: []
souvisejici: [domestic-wire-transfers-balance, shopify-balance-domestic-wire-transfers, editions-spring-2026-finance]
tldr: "Shopify Balance pro US merchanty nově umožňuje International Payments, tedy platby zahraničním dodavatelům přímo z Balance účtu, s transparentním pricingem a bez dodatečného nastavení."
tagy: [shopify-balance, international-payments, suppliers, b2b, finance, us]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify Balance je podnikatelský finanční účet, který Shopify nabízí výhradně merchantům v USA. Slouží k příjmu výplat z Shopify Payments, správě hotovosti a platbám kartou nebo bankovním převodem přímo uvnitř ekosystému Shopify. Dosud pokrýval především domácí platby: ACH převody a od léta 2026 také domestic wire transfery. Pro platby do zahraničí musel merchant dosud sáhnout po externí službě nebo po klasickém bankovním účtu.

    Platby zahraničním dodavatelům jsou typická bolest obchodníků, kteří dropshipují nebo nakupují zboží například v Asii či Evropě. Tradiční mezinárodní bankovní převody bývají pomalé a jejich celková cena se často skládá z více částí, například z poplatku odesílající banky, poplatků zprostředkujících bank a kurzové marže. Alternativy jako Wise nebo Payoneer tento problém řeší, ale vyžadují samostatný účet, další přihlášení a oddělené účetnictví. Konkrétní ceny těchto služeb zde neporovnáváme, protože je changelog neuvádí.

    Nová funkce International Payments zapadá do dlouhodobé strategie Shopify vybudovat pro merchanty uzavřenou finanční smyčku: tržby přijdou na Balance, a výdaje na dodavatele z něj odejdou bez opuštění platformy. Changelog je velmi stručný. Uvádí, že oprávnění američtí merchanti mohou platit dodavatele v zahraničí z aplikace Balance, že cena je transparentní a že není potřeba žádné další nastavení. Podporované země a měny, konkrétní poplatky ani kritéria oprávnění v postu uvedené nejsou a odkazuje se na článek v Shopify Help Center.
  zdroje:
    - title: "Shopify: Pay suppliers internationally from Balance"
      url: "https://changelog.shopify.com/posts/pay-suppliers-internationally-from-balance"
    - title: "Domestic wire transfers ze Shopify Balance"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/domestic-wire-transfers-balance/"
    - title: "Shopify Balance: domestic wire transfers (US)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-balance-domestic-wire-transfers/"
  generated_at: 2026-10-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

**Shopify Balance** pro merchanty v USA přidává funkci **International Payments**. Oprávnění merchanti mohou z Balance účtu posílat peníze **zahraničním dodavatelům** a nemusí k tomu používat samostatnou službu ani klasický bankovní účet. Changelog uvádí tři hlavní body:

- **Platby do zahraničí přímo z Balance:** podle postu se platba zadává v aplikaci Balance (mobilní aplikace).
- **Transparentní pricing:** cena má být před odesláním jasně dohledatelná. Konkrétní sazby, poplatky ani kurzové podmínky post neuvádí.
- **Žádný dodatečný setup:** funkce nevyžaduje zvláštní aktivaci ani další účet.

Funkce je dostupná pouze **oprávněným US merchantům**. Podrobná kritéria oprávnění, seznam podporovaných zemí a měn ani očekávané doručovací lhůty changelog nespecifikuje, a proto je třeba je ověřit v odkazovaném článku v Shopify Help Center nebo přímo v Balance. Nejde o změnu API, žádné nové GraphQL pole ani mutace se neobjevují.

Z pohledu positioningu jde o doplnění dřívějších novinek Balance (domestic wire transfers, ACH). International Payments míří na stejný segment jako Wise, Payoneer nebo klasické bank wire transfery. Argumentem je pohodlí: zůstatek, platba i historie transakcí jsou na jednom místě v Shopify.

## Časová osa

- **2026-06-04 / 2026-06-17** — Shopify Balance získává domestic wire transfery ($10 za převod) v rámci Editions Spring '26.
- **2026-10-06** — Zveřejněn changelog post a funkce International Payments je dostupná oprávněným US merchantům v Balance.

## Dopad pro nás

**Pro vývojáře:** Žádný přímý dopad. Funkce se ovládá z Balance a changelog nezmiňuje žádné API, webhook ani GraphQL typ. Nic se nemusí upravovat ve stávajících appkách. Jedinou možnou souvislostí je případný custom finanční report nad exporty z Balance, kde by se mezinárodní platby mohly objevit jako samostatný typ pohybu. To je ale zatím jen předpoklad, který post nepotvrzuje.

**Pro PM / PO:** Jde o **novou příležitost** pro US merchanty, kteří nakupují zboží nebo služby v zahraničí, typicky dropshipping, private label výroba v Asii nebo nákup od evropských dodavatelů. Pokud již Balance používají, mohou zvážit konsolidaci plateb dodavatelům do jednoho místa. Před přechodem je rozumné porovnat reálné náklady (poplatek plus kurzová marže) s dosavadní službou, protože post cenu nespecifikuje. Pro merchanty mimo USA včetně českého trhu je funkce irelevantní, protože Shopify Balance je dostupné jen v USA. Naléhavost je střední: nevyžaduje žádnou akci, ale hodí se jako téma pro konzultace o finančních procesech US obchodů.

## Použití v Integrátoru

Funkce se nás technicky netýká: Balance není součástí našich integrací a nová funkce nevystavuje žádné API. Má smysl jen jako informace při diskusích o platbách dodavatelům u US obchodů.
