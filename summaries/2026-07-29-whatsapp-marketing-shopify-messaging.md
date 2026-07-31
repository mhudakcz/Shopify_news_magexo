---
date: 2026-07-29
title: "Shopify Messaging podporuje WhatsApp marketing kampaně (templates, media, interactive buttons)"
title_en: "Shopify Messaging now supports WhatsApp marketing"
slug: whatsapp-marketing-shopify-messaging
zdroj: https://changelog.shopify.com/posts/shopify-messaging-now-supports-whatsapp-marketing
shrnuto_dne: 2026-07-31
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant-facing marketing feature bez nového veřejného API, ale rozšiřuje datový model o WhatsApp kampaně a spending — relevantní při reportingu nebo synchronizaci marketingových dat."
dotcene_klienty: []
souvisejici: [whatsapp-marketing-channel-shopify, whatsapp-marketing-consent-api, whatsapp-marketing-consent-merchant]
tldr: "Shopify Messaging umožňuje vytvářet plnohodnotné WhatsApp marketingové kampaně — s pre-built i vlastními templates, produktovými médii z katalogu, interaktivními tlačítky a pay-per-message cenou."
tagy: [shopify-messaging, whatsapp, marketing, campaigns, templates, engagement]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify v rámci Editions Spring 2026 ohlásil WhatsApp jako nový kanál v Shopify Messaging a zároveň rozšířil consent model (Admin API i merchant UI v customer profilech) tak, aby WhatsApp souhlas fungoval stejně jako u e-mailu a SMS. Tehdejší oznámení ale popisovalo především infrastrukturu — kanál a správu souhlasů — bez detailů o tom, jak budou samotné kampaně vypadat.

    Toto changelog oznámení dodává chybějící kus: konkrétní nástroje pro tvorbu WhatsApp marketingových kampaní. Merchant může nově použít předpřipravené šablony (templates) odpovídající pravidlům WhatsApp Business API, doplnit je o vlastní branding, vkládat do zpráv média přímo z produktového katalogu a nabídnout zákazníkovi interaktivní prvky — Quick Reply tlačítka nebo call-to-action odkazy — místo prostého textu.

    Důležitá je i cenotvorba: Shopify zavádí pay-per-message model, kdy obchodník platí jen za skutečně odeslané zprávy. To umožňuje škálovat výdaje podle sezónnosti (Black Friday, Vánoce) bez fixního měsíčního poplatku, což je odlišné od typického předplatného e-mailových/SMS nástrojů třetích stran.

    Funkce navazuje na WhatsApp jako celosvětově nejrozšířenější messagingovou platformu s vysokou mírou otevření zpráv oproti e-mailu. Spolu s dřívějším consent managementem (opt-in evidovaný v customer profilu a dostupný přes Admin API mutaci `customerWhatsAppMarketingConsentUpdate`) tak Shopify Messaging nabízí ucelený kompletní stack pro WhatsApp jako marketingový kanál — bez nutnosti externí aplikace nebo přímé integrace na WhatsApp Business Platform.
  zdroje:
    - title: "Shopify: Shopify Messaging now supports WhatsApp marketing"
      url: "https://changelog.shopify.com/posts/shopify-messaging-now-supports-whatsapp-marketing"
    - title: "Archiv: WhatsApp jako marketingový kanál v Shopify Messaging"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/whatsapp-marketing-channel-shopify/"
    - title: "Archiv: WhatsApp marketing consent nově v Admin API a Customer Account API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/whatsapp-marketing-consent-api/"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Messaging dostává plnou sadu nástrojů pro tvorbu WhatsApp marketingových kampaní, nejen samotný kanál a consent evidenci ohlášené dříve. Merchant může kampaň sestavit přímo v adminu, stejně jako u e-mailu a SMS:

- **Templates** — předpřipravené šablony odpovídající požadavkům WhatsApp Business API na strukturovaný obsah zpráv, doplnitelné o vlastní branding a text.
- **Media z katalogu** — do zprávy lze vložit produktové obrázky a informace přímo z produktového katalogu obchodu, bez ručního nahrávání.
- **Interactive buttons** — Quick Reply tlačítka pro rychlou odpověď zákazníka a CTA tlačítka vedoucí např. na produkt nebo košík.
- **Pay-per-message cena** — flexibilní cenový model bez fixního paušálu, kdy obchodník platí jen za odeslané zprávy; výhodné pro sezónní špičky.

Kampaně cílí na zákazníky, kteří udělili WhatsApp marketing consent — ten se eviduje stejně jako u e-mailu a SMS v customer profilu a je dostupný i programově přes Admin API.

## Časová osa

- **2026-06-17** — Editions Spring '26: WhatsApp ohlášen jako nový kanál v Shopify Messaging, consent management v UI i Admin API.
- **2026-07-29** — Toto oznámení: konkrétní nástroje pro WhatsApp kampaně (templates, media, interactive buttons) a pay-per-message cena.

## Dopad pro nás

**Pro vývojáře:** Jde o merchant-facing funkci bez nového veřejného API — kampaně se vytvářejí a spravují výhradně v Shopify adminu. Relevantní zůstává API vrstva kolem consentu (`customerWhatsAppMarketingConsentUpdate`, pole `whatsAppMarketingConsent` na `CustomerPhoneNumber`), pokud řešíme synchronizaci zákaznických dat nebo reporting napříč kanály. Stojí za sledování, zda Shopify časem přidá i API pro čtení stavu/statistik WhatsApp kampaní.

**Pro PM / PO:** Pro klienty cílící na trhy s vysokou WhatsApp penetrací (EU, LATAM, Indie) jde o hotové řešení bez nutnosti platit za samostatnou aplikaci třetí strany. Vhodné zmínit při konzultacích o marketingové strategii u klientů, kteří už Shopify Messaging používají pro e-mail nebo SMS — WhatsApp je přirozené rozšíření ve stejném rozhraní, včetně sdíleného consent modelu.

## Použití v Integrátoru

Přímý dopad na naši práci je minimální — jde o merchant marketing nástroj bez nové integrační vrstvy. Relevance zůstává tam, kde synchronizujeme zákaznická data nebo marketing consent mezi Shopify a externím systémem; tam je vhodné zahrnout WhatsApp consent field do datového modelu vedle e-mailu a SMS.
