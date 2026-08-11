---
date: 2026-08-06
title: "Shopify Forms: sběr WhatsApp marketing consent"
title_en: "Collect WhatsApp marketing consent on Shopify Forms"
slug: whatsapp-marketing-consent-shopify-forms
zdroj: https://changelog.shopify.com/posts/collect-whatsapp-marketing-consent-on-shopify-forms
shrnuto_dne: 2026-08-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-06
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta stavíme nebo upravujeme Shopify Forms (newsletter popupy, exit-intent formuláře), je dobré vědět, že opt-in checkbox pro WhatsApp je nyní nativní součást formuláře a nemusí se řešit custom polem."
dotcene_klienty: []
souvisejici: [whatsapp-marketing-shopify-messaging, whatsapp-marketing-consent-merchant, whatsapp-marketing-consent-api]
tldr: "Shopify Forms nově umí sbírat souhlas s WhatsApp marketingem přímo v newsletter formulářích a popupech, čímž rozšiřuje subscriber base pro WhatsApp kampaně v Shopify Messaging."
tagy: [shopify-forms, whatsapp, marketing, consent, subscriber, opt-in]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify postupně buduje kompletní stack pro WhatsApp jako marketingový kanál. Editions Spring 2026 přinesly WhatsApp jako nový kanál v Shopify Messaging a rozšířily consent model tak, aby souhlas s WhatsApp marketingem fungoval stejně jako u e-mailu a SMS — evidovaný v customer profilu a dostupný přes Admin API. Následné oznámení pak doplnilo samotné nástroje pro tvorbu kampaní (templates, media z katalogu, interaktivní tlačítka, pay-per-message cena).

    Dosud ale chyběl poslední článek skládačky: jak vůbec získat nové odběratele. Merchant mohl WhatsApp consent evidovat a upravovat v customer profilu, případně jej importovat hromadně, ale chyběl přímý capture mechanismus na storefrontu, který by nové zákazníky k opt-inu vedl. Email a SMS marketing dlouho tento problém řeší přes Shopify Forms — vestavěné newsletter formuláře, popupy a exit-intent okna s checkboxem pro souhlas.

    Toto oznámení rozšiřuje Shopify Forms o stejnou možnost pro WhatsApp. Merchant může do formuláře přidat opt-in checkbox pro WhatsApp marketing vedle (nebo místo) e-mailu, a nový návštěvník tak může udělit souhlas přímo při prvním kontaktu s webem — bez nutnosti řešit sběr kontaktů přes samostatnou aplikaci nebo ruční import. Souhlas získaný přes formulář se ukládá do stejného consent modelu jako u ostatních kanálů, takže je okamžitě viditelný v customer profilu a použitelný pro cílení WhatsApp kampaní v Shopify Messaging.
  zdroje:
    - title: "Shopify: Collect WhatsApp marketing consent on Shopify Forms"
      url: "https://changelog.shopify.com/posts/collect-whatsapp-marketing-consent-on-shopify-forms"
  generated_at: 2026-08-11T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Forms nově podporuje sběr souhlasu s WhatsApp marketingem přímo ve formulářích na storefrontu. Merchant může do newsletter formuláře, popupu nebo exit-intent okna doplnit opt-in checkbox pro WhatsApp — analogicky k tomu, jak už dnes Forms sbírají souhlas s e-mail marketingem.

Klíčové body:

- **Capture flow ve Forms** — WhatsApp opt-in je nativní volba při stavbě formuláře, bez potřeby custom pole nebo aplikace třetí strany.
- **Rozšíření subscriber base** — noví návštěvníci mohou dát souhlas hned při první interakci s webem (newsletter signup, popup, exit-intent), nejen zpětně přes customer profil.
- **Sdílený consent model** — souhlas získaný přes formulář se propisuje do stejného datového modelu jako WhatsApp consent v customer profilu a přes Admin API, takže je okamžitě dostupný pro cílení kampaní.
- **Návaznost na WhatsApp marketing v Shopify Messaging** — funkce doplňuje dřívější rozšíření o kanál, consent management a nástroje pro kampaně; nyní přidává i vstupní bod pro nové odběratele.

## Časová osa

- **2026-06-17** — Editions Spring '26: WhatsApp jako kanál v Shopify Messaging, consent management v merchant UI a Admin API.
- **2026-07-29** — Nástroje pro WhatsApp kampaně (templates, media, interactive buttons, pay-per-message).
- **2026-08-06** — Toto oznámení: sběr WhatsApp marketing consent přímo přes Shopify Forms.

## Dopad pro nás

**Pro vývojáře:** Jde o merchant-facing rozšíření Shopify Forms bez nového veřejného API — opt-in checkbox se konfiguruje v adminu při stavbě formuláře. Relevantní zůstává stávající API vrstva kolem consentu (`customerWhatsAppMarketingConsentUpdate`, pole `whatsAppMarketingConsent`), pokud řešíme synchronizaci zákaznických dat nebo reporting; nově je ale potřeba počítat i s tím, že se WhatsApp odběratelé mohou přihlašovat přímo přes formuláře na storefrontu, nejen skrz customer profil nebo bulk import.

**Pro PM / PO:** Pro klienty, kteří už používají Shopify Forms pro e-mail newsletter, jde o jednoduché rozšíření capture strategie na WhatsApp bez další aplikace — vhodné doporučit zejména na trzích s vysokou WhatsApp penetrací (EU, LATAM, Indie), kde může WhatsApp opt-in v popupu nebo exit-intent formuláři zvýšit konverzi nových odběratelů oproti čistě e-mailovému souhlasu.

## Použití v Integrátoru

Přímý dopad je minimální, jde o merchant nástroj bez nové integrační vrstvy. Relevance zůstává tam, kde synchronizujeme zákaznická data nebo marketing consent mezi Shopify a externím systémem — je vhodné počítat s tím, že WhatsApp subscribers mohou nově přibývat i přes formuláře na webu, nejen přes customer profil.
