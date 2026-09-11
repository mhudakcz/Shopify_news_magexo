---
date: 2026-09-10
title: "WhatsApp marketing consent nyní přímo v checkoutu"
title_en: "Collect WhatsApp marketing consent at checkout"
slug: whatsapp-consent-checkout
zdroj: https://changelog.shopify.com/posts/collect-whatsapp-marketing-consent-at-checkout
shrnuto_dne: 2026-09-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-10
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienta stavíme nebo upravujeme checkout customizace (checkout UI extensions, custom pole), je dobré vědět, že WhatsApp opt-in checkbox je nyní nativní součást checkoutu vedle email a SMS souhlasu."
dotcene_klienty: []
souvisejici: [whatsapp-marketing-consent-shopify-forms, whatsapp-marketing-consent-merchant, whatsapp-marketing-consent-api]
tldr: "Shopify checkout nově umí sbírat souhlas s WhatsApp marketingem přímo vedle email a SMS opt-in checkboxů, a to v momentě dokončení nákupu s nejvyšší mírou intence."
tagy: [checkout, whatsapp, marketing, consent, opt-in, subscribers]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify od jara 2026 postupně buduje kompletní WhatsApp marketing stack — Editions Spring 2026 přidaly WhatsApp jako nový kanál v Shopify Messaging a rozšířily consent model tak, aby souhlas s WhatsApp marketingem fungoval stejně jako u e-mailu a SMS. Následně Shopify doplnil merchant UI pro správu consentu v customer profilu, mutaci v Admin API a Customer Account API pro programovou práci se souhlasem a 6. 8. 2026 i sběr souhlasu přímo ve Shopify Forms (newsletter formuláře, popupy, exit-intent okna).

    Tímto oznámením Shopify posouvá capture mechanismus do posledního a nejcennějšího místa nákupní cesty — do checkoutu. Vedle stávajících email a SMS marketing opt-in checkboxů se nyní zobrazuje i checkbox pro souhlas s WhatsApp marketingem. Zákazník tak může udělit souhlas přesně v okamžiku, kdy dokončuje objednávku, tedy v momentě nejvyšší intence a důvěry vůči obchodu.

    Souhlas získaný v checkoutu se ukládá do stejného consent modelu jako u ostatních kanálů a je okamžitě dostupný v customer profilu i pro cílení kampaní v Shopify Messaging. Merchant nemusí nic dodatečně nastavovat ani instalovat — checkbox se řídí stejnou logikou jako existující email/SMS opt-in ve výchozím Shopify checkoutu.
  zdroje:
    - title: "Shopify: Collect WhatsApp marketing consent at checkout"
      url: "https://changelog.shopify.com/posts/collect-whatsapp-marketing-consent-at-checkout"
  generated_at: 2026-09-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify checkout nově zobrazuje opt-in checkbox pro souhlas s WhatsApp marketingem, a to vedle stávajících checkboxů pro email a SMS marketing. Zákazník tak může při dokončování objednávky jedním kliknutím udělit souhlas se zasíláním WhatsApp marketingových zpráv, aniž by musel cokoliv vyplňovat navíc — souhlas se váže na telefonní číslo, které už zadal v rámci checkoutu.

Jde o logické rozšíření sběru souhlasu do posledního a konverzně nejsilnějšího místa nákupní cesty (post-purchase moment). Zatímco dřívější capture mechanismy (Shopify Forms, merchant UI, import) cílí na existující návštěvníky nebo zákazníky, checkout zachytává i nové zákazníky přesně v okamžiku prvního nákupu — bez nutnosti další interakce nebo samostatného formuláře.

Souhlas se ukládá do stejného consent modelu jako email a SMS, je tedy okamžitě viditelný v customer profilu v adminu a použitelný pro cílení WhatsApp kampaní v Shopify Messaging. Změna se týká nativního Shopify checkoutu a nevyžaduje žádnou konfiguraci ze strany merchanta ani vývojáře.

## Časová osa

- **17. 6. 2026** — WhatsApp jako marketingový kanál (Editions Spring 2026), consent v merchant UI a Admin/Customer Account API
- **6. 8. 2026** — sběr WhatsApp consentu ve Shopify Forms (newsletter, popupy, exit-intent)
- **10. 9. 2026** — sběr WhatsApp consentu přímo v checkoutu

## Dopad pro nás

**Pro vývojáře:** Žádná akce není potřeba u výchozího Shopify checkoutu — checkbox se objevuje automaticky. Pokud stavíme vlastní checkout UI extensions nebo custom pole v checkoutu, je dobré ověřit, že nový WhatsApp checkbox nekoliduje s vlastním layoutem nebo duplicitně nesbírá stejný souhlas.

**Pro PM / PO:** Pro klienty aktivně používající WhatsApp marketing jde o snadný způsob, jak zvýšit subscriber base bez dalšího vývoje — stačí mít zapnutý WhatsApp jako kanál v Shopify Messaging. Stojí za zmínku v rámci konzultací ke conversion optimalizaci checkoutu.

## Použití v Integrátoru

Přímo neintegrujeme, ale při práci na checkout customizacích pro klienty s aktivním WhatsApp marketingem je vhodné o této nativní funkci vědět a nepřekrývat ji vlastním řešením.
