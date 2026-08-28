---
date: 2026-08-25
title: "NFC platby pomocí mobilu — jak fungují a jak je přijímat"
slug: blog-nfc-platby-mobilem-jak-funguji
zdroj: https://www.shopify.com/cz/blog/nfc-platby
shrnuto_dne: 2026-08-28
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Vysvětluje technologické pozadí bezkontaktních plateb (NFC, Apple Pay/Google Pay, Tap to Pay), které je užitečné znát při konzultacích o POS a platebním hardwaru pro retailové klienty."
dotcene_klienty: []
souvisejici: [tap-to-pay-multi-entity, shop-pay-anywhere-off-platform, verifone-victa-mobile-pos]
tldr: "Shopify vysvětluje, jak funguje NFC technologie za bezkontaktními platbami mobilem, proč jsou Apple Pay a Google Pay bezpečnější než klasická karta a jak lze bez terminálu přijímat platby pomocí Tap to Pay na iPhonu."
tagy: [nfc, contactless, mobile-payments, apple-pay, google-pay, pos]
zdroj_kanal: blog
kontext:
  background: |
    Článek na blogu Shopify vysvětluje princip NFC (near-field communication) — bezdrátového protokolu, který přes šifrované nízkofrekvenční spojení umožňuje výměnu dat mezi platebním terminálem a čipovou kartou nebo mobilním zařízením na krátkou vzdálenost. Popisuje dva typy nosičů: bezkontaktní karty s RFID čipem a mobilní peněženky (Apple Pay, Google Pay, Samsung Pay), které stejný NFC čip využívají přímo ve smartphonu, hodinkách nebo tabletu.

    Klíčový rozdíl oproti klasické platební kartě je ve způsobu ověření: mobilní peněženka transakci nepustí ven bez otisku prstu, rozpoznání obličeje nebo zámkového kódu telefonu, takže odpadá typický limit pro platby bez PINu (v ČR běžně 500 Kč u fyzické karty). Data mezi zařízením a terminálem navíc putují šifrovaně oběma směry, což podle článku řadí NFC platby mezi nejbezpečnější způsoby platby vůbec — číslo karty se při transakci nikdy nepřenáší v otevřené podobě.

    Praktická část článku popisuje, jak může obchodník bezkontaktní platby přijímat: aktivovat Shopify Payments, pořídit vhodný hardware (Retail Counter Kit, POS Go, nebo žádný hardware navíc při použití Tap to Pay na iPhonu), zapnout Apple Pay/Google Pay/Shop Pay v administraci a informovat zákazníky o dostupnosti bezkontaktního placení. Tap to Pay na iPhonu je zde zmíněný jako cesta, jak přijímat NFC platby čistě softwarově — stačí kompatibilní iPhone a aplikace Shopify POS, bez nutnosti kupovat samostatný terminál. Článek dokládá i tržní kontext číslem od Juniper Research: hodnota globálních bezkontaktních transakcí má do roku 2027 přesáhnout 10 bilionů USD.
  zdroje:
    - title: "Shopify: NFC platby pomocí mobilu — jak fungují a jak je přijímat"
      url: "https://www.shopify.com/cz/blog/nfc-platby"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Článek je edukativní blogový text vysvětlující technologii za bezkontaktními platbami mobilem. NFC (near-field communication) umožňuje zařízením na krátkou vzdálenost bezdrátově a šifrovaně komunikovat — na této komunikaci stojí jak bezkontaktní platební karty, tak mobilní peněženky typu Apple Pay, Google Pay či Samsung Pay. Text vysvětluje, že mobilní peněženky používají stejný NFC čip jako karty s RFID, ale platbu navíc podmiňují biometrickým ověřením (otisk prstu, Face ID) nebo zámkovým kódem zařízení — díky tomu odpadá obvyklý limit pro bezkontaktní platbu bez PINu, který u fyzických karet v ČR běžně činí 500 Kč.

Druhá polovina článku je prakticky zaměřená na obchodníky: jak přijmout NFC platby ve fyzické prodejně. Kromě klasické cesty přes platební terminál (Retail Counter Kit, POS Go) zmiňuje Shopify i **Tap to Pay na iPhonu** — možnost přijímat bezkontaktní platby přímo na kompatibilním iPhonu bez jakéhokoli dalšího hardwaru, stačí aplikace Shopify POS. Článek shrnuje i výhody (pohodlí, rychlost, nižší míra podvodů díky šifrování a biometrii) a nevýhody (počáteční investice do hardwaru, riziko při ztrátě špatně zabezpečeného telefonu) a dokládá růstový trend odkazem na odhad Juniper Research — přes 10 bilionů USD v hodnotě globálních bezkontaktních transakcí do roku 2027.

## Pro koho je to relevantní

Jde o obecně-edukativní obsah bez API dopadu — nepřináší žádnou novou funkci ani změnu v Shopify platformě, pouze vysvětluje již existující technologii a funkce (Apple Pay, Google Pay, Tap to Pay na iPhonu). Relevantní je především pro PM/PO při konzultacích s retailovými klienty o volbě platebního hardwaru nebo při vysvětlování rozdílu mezi klasickým terminálem a softwarovým řešením typu Tap to Pay. Pro vývojáře nepřináší žádnou akci — NFC ani mobilní peněženky nevyžadují implementační práci na naší straně, aktivace probíhá výhradně v administraci Shopify Payments.

## ⬅️ Související

🔗 [Tap to Pay pro multi-entity byznysy](/Shopify_news_magexo/zmena/tap-to-pay-multi-entity/)
🔗 [Shop Pay i mimo Shopify](/Shopify_news_magexo/zmena/shop-pay-anywhere-off-platform/)
🔗 [Verifone Victa Mobile — handheld POS](/Shopify_news_magexo/zmena/verifone-victa-mobile-pos/)
