---
date: 2026-10-18
title: "Nejlepší čtečky čárových kódů pro Shopify POS (2027)"
slug: blog-ctecky-carovych-kodu-shopify-pos-2027
zdroj: https://www.shopify.com/cz/blog/ctecky-carovych-kodu
shrnuto_dne: 2026-10-20
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Hardware čteček se nás technicky nedotýká, ale u retail projektů s POS jde o praktický podklad pro doporučení výběru zařízení, které navazuje na podporu více barcodes per variant."
dotcene_klienty: []
souvisejici: [pos-multiple-barcodes-per-variant, blog-generator-carovych-kodu-aplikace-male-firmy, pos-run-stock-counts]
tldr: "Shopify blog srovnává šest způsobů skenování pro POS (kamera telefonu, Zebra DS2208, Socket Mobile S720 a D720, levný NADAMOO a cloudová aplikace Orca Scan) a doporučuje 2D imagery kvůli plánovanému přechodu na 2D kódy do konce roku 2027."
tagy: [pos, barcode-scanner, hardware, retail, inventory, "2027"]
zdroj_kanal: blog
kontext:
  background: |
    Čtečka čárových kódů je u kamenné prodejny nebo pop-up stánku základní vybavení: zrychluje odbavení na pokladně, snižuje počet překlepů při ručním zadávání a při příjmu zboží i inventuře zajišťuje, že se do skladových záznamů dostane správná varianta produktu. Shopify POS umí skenovat několika způsoby: kamerou mobilu nebo tabletu, pevně zapojenou USB čtečkou, nebo bezdrátovou čtečkou přes Bluetooth. Nový článek na českém Shopify blogu, naposledy aktualizovaný 18. října 2026, shrnuje, jak jednotlivé typy fungují a které konkrétní modely se pro POS hodí.

    Základní dělení v textu je mezi 1D (lineárními) a 2D kódy a mezi laserovými čtečkami a imagery. 1D kódy nesou jen krátká data jako SKU nebo cenu, 2D kódy včetně QR pojmou mnohem víc, třeba číslo šarže, expiraci nebo URL. Laserové čtečky obvykle zvládnou jen 1D, imagery pořizují digitální snímek a čtou obojí. Autoři argumentují, že imager je dnes bezpečnější volba, protože organizace GS1 podle článku podporuje globální přechod na 2D kódy do konce roku 2027 a laserové čtečky tím budou narážet na limity. Z hlediska připojení článek rozlišuje USB (plug-and-play), Bluetooth, bezdrátový provoz na 2,4 GHz a klasické kabelové řešení.

    V přehledu vystupuje šest možností. Kamera zařízení s aplikací Shopify POS nevyžaduje žádný hardware navíc a čte 1D i 2D kódy, vyžaduje ale povolený přístup ke kameře a u dárkových karet funguje jen s 2D kódem. Zebra DS2208 je kabelový USB imager s podporou hands-free stojánku, vhodný pro stálou pokladnu, bez bezdrátového režimu. Socket Mobile S720 je kompaktní Bluetooth imager s dosahem kolem 10 metrů a výdrží až 16 hodin aktivního používání, vhodný pro iPad nebo Android tablet. Socket Mobile DuraScan D720 je odolnější Bluetooth varianta pro iOS, Android i Windows s nabíjecí základnou nebo bezdrátovým cradlem. NADAMOO je rozpočtová 1D čtečka s bezdrátovým USB přijímačem a offline pamětí až pro 100 000 kódů, bez nativní podpory 2D. Orca Scan není POS čtečka, ale cloudová aplikace pro evidenci zásob, která se se Shopify POS integrovat nedá. Článek uvádí, že Shopify POS podporuje Zebra DS2208, Socket Mobile S720 a D720 i většinu čteček pracujících jako HID (keyboard emulation), a že se skladové stavy po příjmu, prodeji, vratce či výměně automaticky synchronizují mezi online a fyzickými prodejními kanály. Ceny z článku se pohybují zhruba od 735 Kč u NADAMOO po přibližně 7 000 Kč u DuraScan D720, přepočet z USD je orientační.
  zdroje:
    - title: "Shopify: Nejlepší čtečky čárových kódů pro Shopify POS (2027)"
      url: "https://www.shopify.com/cz/blog/ctecky-carovych-kodu"
  generated_at: 2026-10-20T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Jde o edukativní nákupní průvodce ze Shopify CZ blogu, ne o změnu API nebo novou funkci produktu. Text nejdřív vysvětlí rozdíl mezi 1D a 2D kódy a mezi laserovými čtečkami a imagery, pak v přehledové tabulce porovná šest řešení a nakonec nabídne kritéria výběru a krátké FAQ.

Z praktického pohledu stojí za zapamatování několik věcí:

- **Imager před laserem.** Pokud si obchodník pořizuje čtečku teď, dává podle článku smysl vzít 2D imager, který přečte i QR kódy. Důvodem je plánovaný přechod maloobchodu na 2D kódy do konce roku 2027, na který odkazuje GS1. Levná čistě 1D čtečka (příklad NADAMOO) je funkční pro jednoduché provozy, ale časem může být omezením.
- **Ověřené modely pro Shopify POS.** Zebra DS2208 (USB, kabelová, vhodná na stálou pokladnu), Socket Mobile S720 a D720 (Bluetooth, mobilní prodej na tabletu nebo pop-up) a většina HID čteček. HID neboli keyboard emulation znamená, že čtečka se chová jako klávesnice a naskenovaný kód pošle do aplikace jako text, takže nevyžaduje vlastní integraci.
- **Kamera jako vstupní varianta.** Pro menší provoz nebo testování nemusí obchodník kupovat nic. Kamera zařízení v aplikaci Shopify POS čte 1D i 2D kódy, ale je pomalejší než dedikovaná čtečka a vyžaduje povolení ke kameře.
- **Orca Scan není náhrada POS čtečky.** Je to samostatná cloudová aplikace pro skladovou evidenci s workflow a upozorněními na nízký stav zásob, se Shopify POS ji ale propojit nelze. Hodí se spíš jako doplněk pro sklad.
- **Kritéria výběru.** Článek doporučuje posuzovat jednoduchost ovládání, režim HID, způsoby připojení, dosah a rychlost, úspěšnost čtení, podporované typy kódů, kompatibilitu se stávajícím softwarem, ergonomii a výdrž baterie včetně nabíjení.

Přehled není vyčerpávající. Mezi šesti profily chybí další běžné značky, takže jde o orientační výběr, ne o kompletní srovnání trhu. Návody k párování zařízení jsou v článku řešeny odkazy na Shopify Help Center a ty jsou podle zdroje zatím k dispozici jen v angličtině.

## Pro koho je to relevantní

Hlavní cílovou skupinou jsou obchodníci, kteří otevírají kamennou prodejnu, stánek nebo pop-up a řeší, jakou čtečku k Shopify POS pořídit, a také ti, kteří mají dnes starší laserovou čtečku a zvažují obměnu. Pro agentury a implementační týmy je text užitečný jako rychlý podklad při doporučení hardwaru na retail projektech, protože sjednocuje terminologii (1D, 2D, imager, HID) a uvádí modely, které Shopify POS oficiálně podporuje.

Souvislost s novinkou z 1. září 2026, kdy Shopify POS začal rozpoznávat variantu přes libovolný z více přiřazených barcodes (GTIN, EAN, ASIN, SKU), je spíš doplňková. Hardwarová čtečka v HID režimu předává POS jen naskenovaný řetězec a samotné dohledání varianty podle primárního nebo sekundárního kódu dělá POS aplikace. Z toho logicky plyne, že čtečka vybraná podle tohoto článku s multiple barcodes funguje bez další konfigurace. Je to ale náš odvozený závěr, článek to výslovně netvrdí. Podmínkou zůstává, že obchodník nejprve v Admin přiřadí k variantě všechny relevantní kódy. Pokud si obchodník tiskne vlastní štítky nebo řeší rozdíl mezi GTIN a interním SKU kódem, navazuje na to dřívější přehled generátorů čárových kódů ze Shopify blogu.

Podobně souvisí i inventury přímo v POS, kde personál skenováním zapisuje napočítané množství a schvaluje se v Admin. Skenovací zařízení zde přímo ovlivňuje rychlost a spolehlivost práce, takže při plánování rolloutu stock counts stojí za to ověřit, že prodejny mají vhodnou čtečku, ideálně 2D imager. Pro technický tým není nutná žádná akce, článek nemění API, webhooky ani chování POS.
