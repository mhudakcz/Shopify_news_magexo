---
date: 2026-10-13
title: "Sidekick radí s konfigurací checkoutu a customer accounts v editoru a Checkout Blocks"
title_en: "Customize checkout and accounts configurations with Sidekick"
slug: sidekick-checkout-accounts-customize
zdroj: https://changelog.shopify.com/posts/customize-checkout-and-accounts-configurations-with-sidekick
shrnuto_dne: 2026-10-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchanti dostanou vysvětlení nastavení checkoutu a customer accounts přímo v editoru, což může odlehčit základním dotazům na support; do integrací ani extensions to nezasahuje."
dotcene_klienty: []
souvisejici: [editions-spring-2026-sidekick, online-store-editor-sidekick-mobile, recommended-changes-checkout-field-settings]
tldr: "Sidekick je nově dostupný v desktopovém editoru checkoutu a customer accounts i v aplikaci Checkout Blocks; vysvětluje nastavení, doporučuje aplikace, prohledává Help Center a pomáhá plánovat bloky a funkce, změny ale provádí merchant sám."
tagy: [sidekick, checkout, customer-accounts, editor, checkout-blocks, ai, configuration]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Sidekick je AI asistent zabudovaný do Shopify adminu. Od Editions Spring 2026 se z admin chatboxu rozšiřuje na další povrchy: mobilní aplikaci, Online Store Editor, třetí aplikace přes Sidekick app extensions i vybrané workflow ve Shopify Flow. Doposud ale chyběl v editoru checkoutu a customer accounts, tedy v místě, kde merchanti nastavují pole, branding, sekce a chování pokladny a zákaznického účtu.

    Novinka z 13. října 2026 přidává Sidekick do dvou míst. V desktopovém editoru checkoutu a customer accounts může merchant vysvětlit, jak konkrétní nastavení funguje, nechat si doporučit aplikace podle potřeby nebo prohledat Shopify Help Center. V aplikaci Checkout Blocks pak Sidekick pomáhá pochopit a naplánovat bloky a funkce pro checkout, thank you a order status stránky, vysvětluje, jak fungují payment, delivery a validation funkce, a umí projít, co už je nakonfigurováno a proč.

    Důležité je přesné znění změny. Shopify mluví o odpovědích, vedení a pomoci s hledáním nastavení či kroků, které merchant potřebuje k provedení změny sám. Changelog netvrdí, že by Sidekick konfiguraci checkoutu nebo customer accounts sám zapisoval, a nezmiňuje ani omezení podle plánu nebo regionu. Příklady typu přidej pole poznámka k objednávce nebo schovej phone field je proto potřeba chápat jako dotazy na návod, ne jako příkazy s automatickým provedením. Změna zapadá do širšího trendu, kdy Shopify snižuje potřebu vývojářského experta u běžné konfigurace checkoutu, například přes doporučení pro checkout field settings nebo Checkout Blocks dostupné i mimo Plus.
  zdroje:
    - title: "Shopify: Customize checkout and accounts configurations with Sidekick"
      url: "https://changelog.shopify.com/posts/customize-checkout-and-accounts-configurations-with-sidekick"
    - title: "Shopify App Store: Checkout Blocks"
      url: "https://apps.shopify.com/checkout-blocks"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Sidekick se objevuje ve dvou nových místech spojených s checkoutem a customer accounts.

**Editor checkoutu a customer accounts (desktop).** Merchant se může Sidekicka zeptat, jak nakonfigurovat nastavení checkoutu a customer accounts, nechat si doporučit aplikace podle svých potřeb a vyhledávat v Shopify Help Center. Odpadá tak část hledání v dokumentaci a kontaktování supportu.

**Aplikace Checkout Blocks.** Sidekick pomáhá s porozuměním a plánováním bloků a funkcí. Shopify uvádí tyto typické dotazy:

- jak nakonfigurovat bloky pro checkout, thank you a order status stránky,
- jak fungují payment, delivery a validation funkce,
- co už je nakonfigurováno a proč,
- kde najít nastavení nebo kroky, které merchant potřebuje, aby změnu provedl sám.

Výčet v changelogu je pouze příkladový. Post nezmiňuje, že by Sidekick měnil konfiguraci automaticky, ani žádné omezení dostupnosti podle plánu. Pokud tedy někdo čeká, že Sidekick sám přidá pole do checkoutu nebo vytvoří sekci v customer accounts, vychází to z interpretace, kterou zdroj nepotvrzuje; před nasazením v nějakém obchodě stojí za to chování krátce vyzkoušet.

## Časová osa

- **2026-10-13** — oznámení v Shopify Changelogu; Sidekick je dostupný v desktopovém editoru checkoutu a customer accounts a v aplikaci Checkout Blocks.
- Žádné deadliny, migrace ani verze API se neuvádějí. Datum postupného zapnutí pro všechny obchody changelog nespecifikuje.

## Dopad pro nás

**Pro vývojáře:** Žádná změna v API, extensions ani Functions, takže není nutná žádná úprava kódu. Sidekick nenahrazuje implementaci checkout UI extensions ani vlastních Shopify Functions; pomáhá spíš s pochopením a plánováním nastavení v editoru a v Checkout Blocks. Může být užitečný jako rychlý způsob, jak si ověřit, které nastavení v editoru už existuje, než se začne psát vlastní řešení.

**Pro PM / PO:** Nízká naléhavost, jde o příležitost, ne o riziko. Merchanti si mohou základní otázky k nastavení pokladny a zákaznického účtu nechat zodpovědět sami, což může zkrátit onboarding i počet jednoduchých ticketů. Doporučení aplikací a odpovědi ze Sidekicka je ale vhodné brát jako vodítko a u nestandardních požadavků (validace, delivery a payment logika) stále počítat s ověřením od technického experta. Při komunikaci s merchanty je dobré vyvarovat se slibu, že Sidekick změny v checkoutu sám provede.

## Použití v Integrátoru

Přímo nepoužíváme, jde o merchant-facing pomoc v adminu a v aplikaci Checkout Blocks. Může se hodit jako tip při školení merchantů, kteří si sami upravují checkout a customer accounts.
