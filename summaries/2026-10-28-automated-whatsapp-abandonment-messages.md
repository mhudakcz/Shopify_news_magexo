---
date: 2026-10-28
title: "Automated WhatsApp messages — browse/cart/checkout abandonment recovery"
title_en: "Automated WhatsApp messages"
slug: automated-whatsapp-abandonment-messages
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Jde o merchant nástroj v Shopify Messaging bez ohlášeného veřejného API. Dotýká se nás tam, kde obchody už dnes řeší opuštěné košíky přes Flow, webhooky nebo aplikaci třetí strany, protože po zapnutí nativní automatizace hrozí duplicitní oslovení stejného zákazníka a je potřeba ji sladit s existujícími toky."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-marketing", "whatsapp-marketing-channel-shopify", "sms-marketing-automations-messaging"]
editions_release: fall-2026
tldr: "Shopify Messaging umí v Editions Fall '26 posílat automatizované WhatsApp marketingové zprávy, které mají zachraňovat tržby z opuštěného procházení produktů, košíku i checkoutu. Zdroj neuvádí ceny, dostupnost po zemích ani termín spuštění, proto je před plánováním nutné ověřit stav v administraci."
tagy: [whatsapp, marketing, abandonment, recovery, automation, cz-eu]
zdroj_kanal: editions
kontext:
  background: |
    Obnova opuštěných nákupů je jedna z nejstarších a nejefektivnějších taktik v e-commerce: zákazník si prohlédne produkt, vloží ho do košíku nebo začne checkout, nákup nedokončí a obchod se ho pokusí automatickou zprávou vrátit. Shopify tuto logiku podporuje nativně a během roku 2026 ji postupně přesouvá do Shopify Messaging. V březnu 2026 se komunikační automatizace (e-mail, SMS) sloučily pod Messaging, v květnu přibyly SMS šablony pro opuštěný košík, checkout a procházení se stropem výdajů na SMS.

    WhatsApp se do stejného rozhraní dostal v Editions Spring 2026 jako třetí kanál vedle e-mailu a SMS. Během léta a podzimu Shopify doplňoval zbytek stacku: správu souhlasu v administraci a v Admin API, sběr souhlasu ve Shopify Forms, plnohodnotné WhatsApp kampaně se šablonami a interaktivními tlačítky s cenou za odeslanou zprávu a 10. září také souhlas přímo v checkoutu. Chyběla poslední část, totiž automatizace spouštěné chováním zákazníka, tedy to, co u SMS existuje už od jara.

    Editions Fall '26 (vydání z 28. října 2026) tuto mezeru uzavírá. Stránka Editions popisuje položku jednou větou: z Shopify Messaging lze posílat automatizované WhatsApp marketingové zprávy, které mají získat zpět ztracené prodeje z opuštěného procházení produktů, košíku a checkoutu. Odkazuje na instalaci aplikace Shopify Messaging a nápovědu. Země, plány, cena ani termín spuštění tam uvedeny nejsou. Často citovaná vysoká míra otevření zpráv na WhatsAppu (průmyslové odhady hovoří o 90 až 98 procentech) není údaj Shopify a u marketingových zpráv bývá reálný výsledek nižší.
  zdroje:
    - title: "Shopify Editions Fall '26: Marketing (Automated WhatsApp messages)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Marketing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-marketing/"
    - title: "Archiv: WhatsApp jako marketingový kanál v Shopify Messaging"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/whatsapp-marketing-channel-shopify/"
    - title: "Archiv: SMS marketing automations v Shopify Messaging"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/sms-marketing-automations-messaging/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Messaging v Editions Fall '26 nově umožňuje posílat **automatizované WhatsApp marketingové zprávy** spouštěné opuštěním nákupní cesty. Zdroj jmenuje tři situace, ve kterých mají zprávy zachraňovat ztracené tržby:

- **Opuštěné procházení produktů (browse abandonment)** — zákazník se podíval na produkt, ale nic nepřidal do košíku.
- **Opuštěný košík (cart abandonment)** — zboží je v košíku, ale checkout nezačal.
- **Opuštěný checkout (checkout abandonment)** — zákazník checkout začal, ale nedokončil.

Jde o doplnění posledního chybějícího kusu WhatsApp stacku v Shopify Messaging. Kanál, správa souhlasu, sběr souhlasu ve formulářích a v checkoutu i ruční kampaně už existují (viz [WhatsApp jako marketingový kanál v Shopify Messaging](/Shopify_news_magexo/zmena/whatsapp-marketing-channel-shopify/) a [WhatsApp marketing consent nyní přímo v checkoutu](/Shopify_news_magexo/zmena/whatsapp-consent-checkout/)). Nově se k nim přidává automatizace podle chování, stejná trojice triggerů, jakou Messaging už od jara nabízí pro SMS (viz [SMS marketing automations v Shopify Messaging](/Shopify_news_magexo/zmena/sms-marketing-automations-messaging/)).

**Co zdroj neuvádí a je třeba ověřit v administraci:**

- zda je funkce už obecně dostupná, v předběžném přístupu, nebo teprve přijde (stránka Editions odkazuje jen na instalaci aplikace a nápovědu)
- v jakých zemích a na jakých plánech funguje, zejména zda je dostupná pro české, slovenské a polské obchody
- cenu: z dřívějšího oznámení je známo, že WhatsApp kampaně v Messaging se účtují za odeslanou zprávu ([Shopify Messaging podporuje WhatsApp marketing kampaně](/Shopify_news_magexo/zmena/whatsapp-marketing-shopify-messaging/)), ale zda stejný model platí i pro automatizace, tvrdit nelze
- které šablony, časování a podmínky (prodlevy, frekvenční limity, vyloučení zákazníků po nákupu) bude možné nastavit
- zda budou výsledky automatizací čitelné přes API nebo ShopifyQL, nebo jen v administraci

Obecný argument pro WhatsApp jako kanál (vysoká míra přečtení, přímý a osobní formát) je z podstaty sdělení kampaní oprávněný, ale číslo 98 procent otevření, které se kolem tohoto kanálu často cituje, je průmyslový odhad a ne údaj Shopify. Podobně není samozřejmé, že WhatsApp má v CZ, SK a PL dominantní podíl mezi komunikačními aplikacemi: v regionu tradičně silně stojí také Messenger a skutečný podíl WhatsApp mezi zákazníky konkrétního obchodu je nutné ověřit na jeho vlastních datech (například podle toho, kolik zákazníků uvádí telefonní číslo a uděluje souhlas).

## Časová osa

- **5. 3. 2026** — marketingové automatizace se v Shopify přesouvají do Messaging a Flow, Messaging se stává centrem komunikačních workflow.
- **19. 5. 2026** — SMS marketing automations v Shopify Messaging (šablony pro opuštěný košík, checkout a procházení, strop výdajů na SMS).
- **17. 6. 2026** — Editions Spring '26: WhatsApp jako třetí marketingový kanál v Shopify Messaging, správa souhlasu v administraci a v Admin API.
- **29. 7. 2026** — WhatsApp kampaně v Messaging: šablony, média z katalogu, interaktivní tlačítka, cena za odeslanou zprávu.
- **6. 8. 2026** — sběr WhatsApp souhlasu ve Shopify Forms.
- **10. 9. 2026** — sběr WhatsApp souhlasu přímo v checkoutu.
- **28. 10. 2026** — Editions Fall '26: automatizované WhatsApp zprávy pro opuštěné procházení, košík a checkout. Termín dostupnosti pro jednotlivé trhy zdroj neuvádí.

## Dopad pro nás

**Pro vývojáře:** Pro samotné zapnutí funkce není ohlášena žádná změna API ani theme, jde o nastavení v Shopify Messaging. Technicky se nás týká hlavně souběh se stávajícími řešeními:

- Pokud obchod už posílá zprávy o opuštěném košíku přes Shopify Flow, vlastní webhooky (například `checkouts/create` a `checkouts/update`) nebo aplikaci třetí strany a zároveň sbírá WhatsApp souhlas, může po zapnutí nativní automatizace dostat stejný zákazník dvě zprávy. Je potřeba předem rozhodnout, který tok zůstane, a druhý vypnout nebo omezit.
- Spolehlivost celého řetězce stojí na souhlasu. Souhlas s WhatsApp marketingem je navázaný na telefonní číslo zákazníka a lze ho číst i měnit přes mutaci `customerWhatsAppMarketingConsentUpdate` (viz [WhatsApp marketing consent v Admin API a Customer Account API](/Shopify_news_magexo/zmena/whatsapp-marketing-consent-api/)). Při synchronizaci s CRM nebo e-mailovým nástrojem je důležité, aby se WhatsApp souhlas přenášel stejně pečlivě jako e-mail a SMS.
- Kvalita vstupních dat se zlepšila: Shopify od 16. 6. 2026 nevytváří záznamy o opuštěných checkoutech pro boty testující ukradené karty ([Méně bot noise v abandoned checkouts](/Shopify_news_magexo/zmena/reduced-bot-noise-abandoned-checkouts/)), takže automatizace by neměla oslovovat falešné záznamy.
- Dokud není jasné, zda půjdou výsledky číst přes API nebo ShopifyQL, počítejme s tím, že reporting bude v administraci. Pokud obchod potřebuje srovnat výnos e-mailu, SMS a WhatsApp v jednom přehledu, bude to nejspíš vyžadovat vlastní podklady.

**Pro PM / PO:** Pro obchody, které dnes řeší opuštěné nákupy jen e-mailem, je to přirozené rozšíření bez další aplikace, a navíc ve stejném rozhraní jako e-mail a SMS. Doporučený postup:

1. Zjistit, zda je funkce pro daný obchod a trh vůbec dostupná, a jaká je cena na zprávu.
2. Ověřit právní stránku. Pro marketingové WhatsApp zprávy je nutný aktivní, informovaný souhlas (GDPR a ePrivacy), formulace souhlasu a jeho výchozí stav je dobré prokonzultovat s právníkem nebo pověřencem pro ochranu osobních údajů.
3. Nejdřív zjistit, kolik zákazníků má udělený WhatsApp souhlas. Bez něj nebude mít automatizace koho oslovit. Sběr souhlasu v checkoutu a ve formulářích je vhodné zapnout dříve než automatizaci.
4. Spustit jako A/B test proti stávajícímu e-mailovému toku (například WhatsApp u části zákazníků se souhlasem) a porovnat míru obnovených objednávek a cenu za obnovenou objednávku, ne jen otevření.
5. Před Black Friday a vánoční sezónou si vyhradit čas na test, protože v hlavní sezóně je riziko špatně nastavené automatizace nejdražší.

Urgence je střední: nejde o povinnou změnu ani o riziko pro běžící obchody, ale o příležitost s časovým oknem před sezónou.

## Použití v Integrátoru

Přímo neintegrujeme, protože jde o merchant nástroj bez ohlášeného API. Relevance je v poradenství a při práci s opuštěnými košíky, souhlasy a synchronizací zákaznických dat, kde je potřeba hlídat souběh nativní automatizace s existujícími toky.
