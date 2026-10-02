---
date: 2026-10-01
title: "SMS marketing consent dostupný na CustomerPhoneNumber (Action Required)"
title_en: "SMS marketing consent now available on the CustomerPhoneNumber object"
slug: sms-marketing-consent-customerphonenumber
zdroj: https://shopify.dev/changelog/posts/sms-marketing-consent-now-available-on-the-customerphonenumber-object
shrnuto_dne: 2026-10-02
kategorie: [nova-api, breaking-change]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše synchronizace zákaznických dat přenáší SMS opt-in stav z plochých polí na CustomerPhoneNumber, bude potřeba ji časem přepnout na nové pole smsMarketingConsent."
dotcene_klienty: []
souvisejici: [whatsapp-marketing-consent-api, whatsapp-consent-checkout, marketing-consent-account-component]
tldr: "Shopify přidal na objekt CustomerPhoneNumber pole smsMarketingConsent se stejným strukturovaným consent modelem jako u WhatsApp (API 2026-10); původní plochá SMS consent pole jsou deprecated a stávající integrace by na nové pole měly přejít."
tagy: [admin-graphql-api, sms, marketing-consent, customer, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    SMS marketing consent je evidovaný souhlas zákazníka se zasíláním marketingových textových zpráv. Je to právní i provozní základ celého SMS kanálu: bez doložitelného opt-inu (kdo, kdy, jakým způsobem a z jakého místa souhlas udělil) nelze zákazníkovi legálně posílat marketingové SMS a obchodník se vystavuje regulatorním rizikům (GDPR, TCPA a obdobné předpisy). Proto Shopify u consentu ukládá nejen samotný stav (subscribed / unsubscribed), ale i další metadata, například úroveň opt-inu nebo zdroj sběru.

    Shopify v roce 2026 sjednocuje consent model napříč marketingovými kanály. Na jaře 2026 přibyl WhatsApp jako nový kanál a souhlas s ním dostal v Admin GraphQL API a Customer Account API strukturovaný tvar navázaný na objekt CustomerPhoneNumber (API 2026-07). Následoval sběr WhatsApp souhlasu ve Shopify Forms a v checkoutu. SMS přitom dlouho zůstávalo u staršího modelu, který je na CustomerPhoneNumber reprezentovaný sadou plochých polí vedle sebe, takže se čtení a zápis consentu pro SMS a pro WhatsApp lišily.

    Tato změna tento rozdíl odstraňuje: SMS consent dostává stejný strukturovaný model jako WhatsApp, a to jako nové pole smsMarketingConsent na CustomerPhoneNumber. Souhlas je tedy navázaný na konkrétní telefonní číslo, na které se zprávy skutečně posílají, a kód pracující s consentem může používat jednotný přístup pro oba kanály. Starší plochá pole zůstávají kvůli zpětné kompatibilitě funkční, ale jsou označená jako deprecated. Změna je zveřejněná v dev changelogu s označením Action Required, protože Shopify doporučuje stávajícím integracím plánovat migraci.
  zdroje:
    - title: "Shopify: SMS marketing consent now available on the CustomerPhoneNumber object"
      url: "https://shopify.dev/changelog/posts/sms-marketing-consent-now-available-on-the-customerphonenumber-object"
    - title: "Admin GraphQL API 2026-10: CustomerPhoneNumber object"
      url: "https://shopify.dev/docs/api/admin-graphql/2026-10/objects/CustomerPhoneNumber"
    - title: "Archiv: WhatsApp marketing consent nově v Admin API a Customer Account API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/whatsapp-marketing-consent-api/"
  generated_at: 2026-10-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Na objektu `CustomerPhoneNumber` je od API verze **2026-10** nové pole `smsMarketingConsent`. Změna se týká **Admin GraphQL API** i **Customer Account API**. Pole používá **stejný strukturovaný consent model jako WhatsApp** (`whatsAppMarketingConsent`, který Shopify přidal v API 2026-07), takže SMS a WhatsApp consent se nově čtou a modelují jednotně.

Zároveň platí, že **stávající plochá SMS marketing consent pole na `CustomerPhoneNumber` zůstávají dostupná kvůli zpětné kompatibilitě, ale jsou nově deprecated**. Shopify v changelogu uvádí, že nové integrace mají používat `smsMarketingConsent` a existující integrace mají migraci naplánovat.

Co je důležité vědět:
- Nejde o okamžité zlomení kódu. Deprecated pole fungují dál, takže stávající dotazy nespadnou. Označení *breaking-change* v kategorii je tu vnímané jako upozornění na budoucí povinnou migraci, ne jako aktuální výpadek.
- Consent je navázaný na **objekt telefonního čísla**, ne na zákazníka jako celek. Je to konzistentní s WhatsApp modelem, kde je souhlas vázaný na (výchozí) telefonní číslo zákazníka.
- Changelog **neuvádí konkrétní datum odstranění** deprecated polí, ani ukázkové GraphQL dotazy či seznam potřebných scopes. Přesnou strukturu `smsMarketingConsent` (pod-pole, enumy, mapování ze starých polí) je potřeba ověřit v referenci `CustomerPhoneNumber` pro verzi 2026-10.
- Changelog také nevyjmenovává, která konkrétní plochá pole jsou deprecated. Při auditu kódu tedy dohledejte všechna SMS consent pole, která aktuálně z `CustomerPhoneNumber` čtete, přímo v dokumentaci schématu.

## Časová osa

- **17. 6. 2026** — WhatsApp marketing consent ve strukturovaném modelu na `CustomerPhoneNumber` (Admin API a Customer Account API, verze 2026-07)
- **1. 10. 2026** — pole `smsMarketingConsent` na `CustomerPhoneNumber` zveřejněné v dev changelogu, dostupné v API verzi **2026-10**
- **1. 10. 2026** — plochá SMS consent pole na `CustomerPhoneNumber` označená jako deprecated (zůstávají funkční)
- **Termín odstranění deprecated polí** — v changelogu neuvedený; sledovat další oznámení Shopify a deprecation notice v dokumentaci

## Dopad pro nás

**Pro vývojáře:**
- Projděte kód, který čte SMS consent z `CustomerPhoneNumber` (Admin GraphQL API i Customer Account API), a vyjmenujte, která plochá pole používá. Typicky jde o export zákazníků, synchronizaci opt-inů do externího CRM nebo e-mailové/SMS platformy a vlastní admin nebo customer account extensions.
- Pro nové vývoje používejte rovnou `smsMarketingConsent`. Pro stávající kód naplánujte migraci v rámci nejbližšího posunu na API verzi 2026-10 a přepněte čtení na nové pole. Doporučená je souběžná kontrola, že nový model vrací stejný stav jako stará pole, zejména u zákazníků, jejichž souhlas vznikl před zavedením nového modelu.
- Pokud pracujete s generovanými typy (GraphQL codegen), po přepnutí verze počítejte s deprecation warningy u starých polí. Je to dobrý signál, kde všude je potřeba zasáhnout.
- Oprávnění: u WhatsApp consentu stačí ke čtení běžný přístup k zákaznickým datům. U SMS se dá očekávat stejný režim, ale potvrďte to v referenci pro 2026-10, protože changelog scopes neuvádí.
- Nově můžete sjednotit logiku SMS a WhatsApp consentu do jedné společné funkce, protože oba kanály sdílejí tvar dat.

**Pro PM / PO:**
- Pro merchanta se nic viditelně nemění, nejde o změnu v admin UI ani v checkoutu. Dopad je čistě technický a týká se projektů, kde se SMS opt-in stav přenáší mimo Shopify (CRM, ESP, SMS gateway, reporting).
- Není to akutní incident, ale je to **položka do backlogu technického dluhu**: deprecated pole mají obvykle ohlášený konec životnosti, a pokud ho dlouho ignorujeme, hrozí, že jednou přestanou vracet data a SMS opt-iny se přestanou správně synchronizovat. S ohledem na právní význam consentu by taková chyba byla citlivá.
- Doporučení: u projektů se SMS marketingem zjistit, zda vůbec čteme SMS consent z `CustomerPhoneNumber`, a pokud ano, odhadnout malou migrační úlohu (řádově drobný úkol na integraci) a zařadit ji před plánovaný upgrade API verze.

## Použití v Integrátoru

Pokud naše integrace synchronizují SMS opt-in stav zákazníků z Shopify do externího systému a čtou ho z plochých polí na `CustomerPhoneNumber`, je třeba je časem přepnout na `smsMarketingConsent`; jinak žádná okamžitá akce není nutná. Doporučujeme jednorázově ověřit, které z našich synchronizačních toků SMS consent vůbec čtou.
