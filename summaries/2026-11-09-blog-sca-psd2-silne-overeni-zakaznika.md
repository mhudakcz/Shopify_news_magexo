---
date: 2026-11-09
title: "Co je silné ověření zákazníka (SCA) podle směrnice PSD2?"
slug: blog-sca-psd2-silne-overeni-zakaznika
zdroj: https://www.shopify.com/cz/blog/sca
shrnuto_dne: 2026-11-11
kategorie: [fyi]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Platby kartou v EU procházejí 3D Secure; u integrací s vlastními platebními toky nebo opakovanými platbami je třeba počítat s tím, že první platba vyžaduje SCA."
dotcene_klienty: []
souvisejici: [editions-fall-2026-payments, blog-shop-pay-checkout-nejvykonnejsi, local-payment-methods-more-countries]
tldr: "Shopify vysvětluje, jak funguje silné ověření zákazníka podle PSD2 (dva nezávislé faktory, typicky 3D Secure), jaké platí výjimky a že Shopify Payments a peněženky jako Apple Pay či Google Pay jsou vyhovující automaticky."
tagy: [sca, psd2, 3ds, autentizace, eu-regulace, payments, compliance]
zdroj_kanal: blog
kontext:
  background: |
    SCA (Strong Customer Authentication) je požadavek směrnice PSD2 platný v Evropském hospodářském prostoru, jehož cílem je snížit podvody při online platbách. Funguje jako dvoufaktorové ověření: zákazník musí potvrdit identitu dvěma na sobě nezávislými metodami z kategorií znalost (heslo, PIN), vlastnictví (telefon, token, karta) a inherence (otisk prstu, obličej).

    U karet se SCA typicky řeší protokolem 3D Secure, kde zákazník potvrdí platbu jednorázovým SMS kódem, v bankovní aplikaci nebo biometrikou. Po úspěšném ověření obvykle přechází odpovědnost za podvodný chargeback na vydávající banku. Obchodník může splnit požadavky buď nasazením 3D Secure, nebo použitím platební brány, která PSD2 splňuje, například Shopify Payments, Apple Pay či Google Pay.

    Výjimky zahrnují nízkorizikové transakce na základě analýzy rizik poskytovatele (limity 100, 250 či 500 EUR), platby do 30 EUR, navazující platby předplatného s pevnou částkou, transakce iniciované obchodníkem s uloženou kartou, objednávky poštou a telefonem, firemní karty a karty vydané mimo EHP. Zákazník může také obchodníka zařadit mezi důvěryhodné příjemce. Banka si ale může SCA vyžádat i u výjimek, například po pěti po sobě jdoucích platbách do 30 EUR.
  zdroje:
    - title: "Shopify: Co je silné ověření zákazníka (SCA) podle směrnice PSD2?"
      url: "https://www.shopify.com/cz/blog/sca"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## O čem to je

Shopify na českém blogu shrnuje, co znamená silné ověření zákazníka podle PSD2. Pravidlo platí pro online platby, kde jsou zákazník i obchodník v EHP, a vyžaduje dva nezávislé faktory ověření. U karet to v praxi znamená 3D Secure s SMS kódem, schválením v bankovní aplikaci nebo biometrikou. Článek popisuje i výjimky: nízké riziko, nízká hodnota do 30 EUR, opakované platby, platby iniciované obchodníkem, MOTO, firemní karty a karty z mimoevropských bank.

Pro Shopify obchody platí, že Shopify Payments řeší SCA automaticky a 3D Secure spouští jen tehdy, když ho vyžaduje vydávající banka. Apple Pay, Google Pay, iDEAL, Klarna a PayPal Express jsou vyhovující už z principu. Platební brány třetích stran automaticky vyhovující nejsou; článek doporučuje schválenou bránu připojenou přes CardinalCommerce. V administraci se u objednávek ověřených 3D Secure zobrazuje značka 3DS a takové objednávky jsou vedeny jako nízkorizikové. Neshoda s pravidly může vést k zamítání plateb bankami a tím k přímé ztrátě tržeb. Dohled v EU provádí EBA, licenci PSD2 obchod nepotřebuje, pokud používá certifikovaného poskytovatele. Článek se výslovně nezmiňuje o Shop Pay ani o verzi 3DS 2.x.

## Pro koho je to relevantní

Pro české obchodníky na Shopify jde hlavně o osvětový materiál a oporu při komunikaci s klienty: s Shopify Payments nebo peněženkami není potřeba nic nastavovat. Pozornost vyžadují obchody s bránou třetí strany, předplatným nebo platbami z uložené karty, kde je první transakce vždy podléhající SCA. Při návrhu vlastních integrací platebních toků je dobré počítat s tím, že platba může vyžadovat dodatečné ověření a nemusí proběhnout okamžitě.

Související novinky: souhrn plateb z podzimní edice, článek o výkonu Shop Pay checkoutu a rozšíření lokálních platebních metod.
