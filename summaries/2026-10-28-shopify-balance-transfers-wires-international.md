---
date: 2026-10-28
title: "Shopify Balance transfers — domestic wires + international payments v local currency"
title_en: "Shopify Balance transfers"
slug: shopify-balance-transfers-wires-international
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zdroj neuvádí žádné API pro transfery z Balance a naše integrace se Shopify Balance nepracují. Relevance je informační: týká se finančních procesů amerických obchodů a případně budoucího reportingu nad exporty z Balance."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-operations", "pay-suppliers-internationally-from-balance", "domestic-wire-transfers-balance"]
editions_release: fall-2026
tldr: "Editions Fall '26 zmiňuje, že ze Shopify Balance lze posílat domestic wires, sledovat platby a platit zahraniční dodavatele v jejich lokální měně. Balance je zatím jen pro obchody v USA, takže pro české a evropské obchody jde o informaci o směřování Shopify, ne o funkci k nasazení."
tagy: [shopify-balance, transfers, wires, banking, international, fintech]
zdroj_kanal: editions
kontext:
  background: |
    Shopify Balance je podnikatelský finanční účet, který Shopify nabízí obchodům v USA. Slouží k příjmu výplat ze Shopify Payments, správě hotovosti a platbám přímo uvnitř Shopify. Pro merchanty je to způsob, jak nemusí držet paralelní účet u klasické banky nebo u fintech služby, když potřebují zaplatit dodavatele, výrobce nebo logistického partnera.

    Platby dodavatelům v zahraničí jsou typická bolest obchodníků, kteří nakupují zboží v Asii nebo v Evropě. Tradiční mezinárodní převod bývá pomalejší a jeho cena se skládá z více částí (poplatek banky, poplatky zprostředkujících bank, kurzová marže). Zahraniční dodavatel navíc často preferuje platbu ve své lokální měně. V USA tento segment obsluhují fintech banky a platební služby, například Mercury nebo Brex, a Shopify se k nim přibližuje tím, že stejné funkce přidává přímo do Balance. Zmínka o Mercury a Brex pochází z naší analýzy trhu, Editions stránka konkurenci nezmiňuje.

    Zdrojová stránka Editions Fall '26 zmiňuje Balance jen jednou, v tématu Operations, a jen jednou větou: z Balance lze posílat domestic wires a sledovat platby a platit mezinárodní dodavatele v jejich lokální měně rychleji a levněji. Stránka neuvádí podporované země a měny, platební sítě (SEPA, SWIFT, ACH, Fedwire), konkrétní poplatky, limity, rychlost ani dostupnost podle plánů. Zmínky o platebních sítích v tomto článku jsou proto náš výklad a před slibováním čehokoli merchantovi je třeba je ověřit v Shopify Help Center.
  zdroje:
    - title: "Shopify Editions | Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Pay suppliers internationally from Balance"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/pay-suppliers-internationally-from-balance/"
    - title: "Archiv: Domestic wire transfers ze Shopify Balance"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/domestic-wire-transfers-balance/"
    - title: "Archiv: Editions Fall '26 — Operations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-operations/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Editions Fall '26 v tématu Operations (část Finance) uvádí, že **Shopify Balance** slouží k odesílání peněz z podnikatelského účtu. Zdroj jmenuje tři věci:

- **Domestic wires:** odeslání domácího wire převodu přímo z Balance.
- **Sledování plateb:** po odeslání lze platbu dohledat.
- **Platby zahraničním dodavatelům v lokální měně:** dodavatel dostane peníze ve své měně a Shopify to označuje za rychlejší a levnější než tradiční cestu.

Z našeho předchozího sledování víme, že **nejde o úplně novou věc**. Domestic wires v Balance máme v archivu už z června (Editions Spring '26, poplatek 10 USD za převod, viz [článek o domestic wires](/Shopify_news_magexo/zmena/domestic-wire-transfers-balance/)) a mezinárodní platby dodavatelům z Balance se objevily v changelogu 6. 10. 2026 (viz [Pay suppliers internationally from Balance](/Shopify_news_magexo/zmena/pay-suppliers-internationally-from-balance/)). Fall '26 je tedy spíš souhrn a zařazení do širší story o Operations, než nová funkce s vlastním datem. Nová je v Editions hlavně formulace o lokální měně a o sledování plateb.

Co zdroj **neříká**, a my to proto nepotvrzujeme:

- jaké země a měny jsou podporované,
- jaké platební sítě se pod tím skrývají. Náš výklad: v USA ACH a Fedwire pro domácí převody, pro mezinárodní platby v lokální měně by dávaly smysl SEPA v eurozóně a SWIFT jinde. Žádný z těchto názvů ve zdroji není,
- jaké jsou poplatky a kurzová marže (formulace rychleji a levněji je marketingové tvrzení bez čísel),
- jaká je doba doručení, limity a podmínky oprávnění,
- zda je Balance dostupný mimo USA. Podle archivu je to zatím produkt jen pro americké obchody.

## Časová osa

- **2026-06-04 / 2026-06-17** — Domestic wire transfery v Balance (Editions Spring '26), 10 USD za převod.
- **2026-10-06** — Changelog o International Payments: platby zahraničním dodavatelům z Balance pro oprávněné US merchanty.
- **2026-10-28** — Editions Fall '26 zařazuje domestic wires, sledování plateb a platby v lokální měně do tématu Operations. Konkrétní datum nasazení zdroj neuvádí, ani označení Soon.

## Dopad pro nás

**Pro vývojáře:** Zdroj nezmiňuje žádné API, webhook ani GraphQL typ, takže není nic k úpravě. Jedinou možnou souvislostí je vlastní finanční report nebo párování plateb nad exporty z Balance. V takovém případě by se mezinárodní platba v lokální měně mohla objevit jako nový typ pohybu s kurzovým přepočtem. To je naše úvaha, nepotvrzená zdrojem. Nezaměňovat s multi-currency payouts ze Shopify Payments (výplata tržeb na bankovní účet v dané měně, viz [článek z července](/Shopify_news_magexo/zmena/shopify-payments-multi-currency-bank-account-per-currency/)): to je jiná vrstva, tam peníze přichází, tady odcházejí.

**Pro PM / PO:** Pro české a evropské obchody je funkce **zatím nepoužitelná**, protože Balance je dostupný jen v USA. Platby dodavatelům v Asii nebo jinde v Evropě tito merchanti nadále řeší přes banku nebo přes specializované služby a nic se pro ně nemění. Z pohledu poradenství je užitečná ve třech situacích:

- **US obchod nebo obchod s americkou entitou**, který nakupuje v zahraničí (dropshipping, private label výroba, evropští dodavatelé). Má smysl před přechodem porovnat celkovou cenu (poplatek plus kurzová marže) s dosavadní službou, protože Shopify čísla neuvádí.
- **Sledování směřování Shopify.** Shopify buduje uzavřenou finanční smyčku: tržby přijdou na Balance, výdaje na dodavatele z něj odejdou. Rozšíření Balance mimo USA by pro české obchody změnilo hru, ale žádný termín ani náznak zdroj neuvádí.
- **Otázky na schůzkách.** Pokud se merchant zeptá, zda Shopify nahradí Wise nebo Payoneer, odpověď zní: v USA možná, jinde zatím ne.

Nalehavost je nízká. Nevyžaduje žádnou akci a nemá termín, jen stojí za to ověřit v Shopify Help Center podporované země, měny, poplatky a podmínky oprávnění, než se o funkci začne mluvit konkrétně.

## Použití v Integrátoru

Funkce se nás technicky netýká: Balance není součástí našich integrací a zdroj k ní neuvádí žádné API. Má smysl jen jako kontext při diskusích o platbách dodavatelům u amerických obchodů.

## Související

- [Editions Fall '26 hub](/Shopify_news_magexo/zmena/editions-fall-2026/)
- [Téma Operations](/Shopify_news_magexo/zmena/editions-fall-2026-operations/)
- [Pay suppliers internationally from Balance](/Shopify_news_magexo/zmena/pay-suppliers-internationally-from-balance/)
- [Domestic wire transfers ze Shopify Balance](/Shopify_news_magexo/zmena/domestic-wire-transfers-balance/)
