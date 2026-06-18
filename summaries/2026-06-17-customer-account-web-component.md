---
date: 2026-06-17
title: "Customer account web component — Shopify-managed sign-in přímo v storefront"
title_en: "Customer account web component — Shopify-managed sign-in across store"
slug: customer-account-web-component
zdroj: https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component
shrnuto_dne: 2026-06-17
kategorie: [nova-api, nova-prilezitost]
api_oblast: storefront
nalehavost: stredni
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Themes s custom navigací nebo headless storefronty profitují z drop-in komponenty bez nutnosti vlastního auth flow — pokud implementujeme customer accounts pro klienta, toto snižuje scope."
dotcene_klienty: []
souvisejici: [polaris-web-components-migration-guides, line-item-components-draft-orders-customer-account]
editions_release: spring-2026
kontext:
  background: |
    `<shopify-account>` je nativní HTML web component spravovaná přímo Shopify, která obstarává celý sign-in flow zákazníka v rámci storefront stránky. Na rozdíl od klasického přesměrování na `/account/login` zákazník zůstává na stránce obchodu — přihlášení probíhá v překryvném panelu (account sheet), aniž by se přerušil jeho nákupní kontext.

    Historicky museli theme developeři a autoři custom storefrontů implementovat sign-in UI sami: vlastní formuláře, session management, redirecty po přihlášení a případně integrace se sociálními poskytovateli nebo Shop Pay. To znamenalo opakující se boilerplate, který bylo navíc obtížné udržovat konzistentní s aktuálními customer accounts funkcemi Shopify.

    Komponenta je Shopify-managed — Shopify ji může aktualizovat nezávisle na verzi tématu. To zaručuje automatické benefity: nové sign-in metody (passwordless, Shop recognition, sociální přihlášení přes Google a Facebook, opt-in do e-mail marketingu při registraci) jsou dostupné bez zásahu developera. Theme vývojáři přitom mají kontrolu nad vizuálním stylem prostřednictvím CSS custom properties a HTML slots.

    Komponenta se stará o stavy přihlášeného i odhlášeného zákazníka: odhlášenému zobrazí konfigurovatelnou ikonku/avatar, přihlášenému iniciály nebo profilový obrázek. Po kliknutí na avatar se otevře nabídka s linky na customer account sekce (Orders, Profile a libovolné custom položky z Shopify navigation menu). Integruje se přes standardní Liquid atribut `menu` odkazující na menu handle v Shopify Admin.

  zdroje:
    - title: "Shopify Docs: Customer account web component"
      url: "https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component"
    - title: "Shopify Editions Spring '26: Developer overview"
      url: "https://www.shopify.com/editions/spring2026"
  generated_at: 2026-06-17T10:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify vydává `<shopify-account>` web component — theme developeři vloží jeden HTML tag a získají kompletní sign-in flow (passwordless, Shop, sociální sítě) bez vlastního auth kódu."
tagy: [editions, customer-accounts, web-components, storefront, themes]
zdroj_kanal: editions
---

## Co se mění

Shopify uvádí `<shopify-account>` — nativní web component pro customer sign-in přímo v storefront. Theme developer ho vloží jedním HTML tagem:

```liquid
{% if shop.customer_accounts_enabled %}
<shopify-account menu="customer-account-main-menu">
</shopify-account>
{% endif %}
```

Komponenta nahrazuje manuálně vybudovaný sign-in UI a zajišťuje:

- **Passwordless sign-in** — zákazník se přihlásí bez hesla (magic link / OTP)
- **Automatické přihlášení** — rozpoznání zákazníka přes Shop (pokud je přihlášen v Shop app)
- **Sociální sign-in** — Google a Facebook (bez vlastní OAuth implementace)
- **E-mail marketing opt-in** — zákazník může při registraci souhlasit s newsletterem
- **Stavový avatar** — odhlášený zákazník vidí ikonku, přihlášený své iniciály/foto
- **Account sheet** — přihlášení i navigation menu se otevírají jako overlay bez page reload

Customizace probíhá na dvou úrovních. Pro odhlášený stav se používá HTML slot (`signed-out-avatar`), pro přihlášený stav CSS custom properties:

```css
shopify-account {
  --shopify-account-signed-in-avatar-size: 36px;
  --shopify-account-signed-in-avatar-color-background: #1a1a1a;
  --shopify-account-signed-in-avatar-color-text: #ffffff;
}
```

Atribut `menu` přijímá handle navigačního menu vytvořeného v Shopify Admin — výchozí `customer-account-main-menu` obsahuje linky na Orders a Profile, merchant ho může rozšiřovat.

Shopify tuto komponentu spravuje a aktualizuje nezávisle na verzi tématu. Nové sign-in metody nebo UX vylepšení se projeví automaticky bez theme update.

## Časová osa

- 2026-06-17 — Editions Spring '26 announce, komponenta dostupná

## Dopad pro nás

**Pro vývojáře:**
Pokud implementujeme nebo upravujeme theme s customer accounts, `<shopify-account>` je přímá náhrada za vlastní sign-in UI. Ušetří se implementace OAuth flow, session management, redirect logika a budoucí maintenance při změnách Shopify customer accounts. Pro headless storefronty (Hydrogen, custom frontend) je potřeba ověřit, zda komponenta funguje mimo Liquid kontext — aktuální dokumentace se zaměřuje na themes.

**Pro PM / PO:**
Pro klienty, kde řešíme zákaznický účet nebo login flow v rámci theme projektu, lze nabídnout rychlejší a odolnější implementaci. Komponenta garantuje konzistenci s Shopify customer accounts funkcemi (včetně budoucích) bez dalšího vývoje. Vhodné zmínit při projektové přípravě nebo theme auditu.

## Použití v Integrátoru

Potenciálně relevantní — při implementaci customer accounts v theme projektech snižuje scope front-end vývoje. Pro headless / Hydrogen projekty nutno ověřit dostupnost mimo Liquid.

## ⬅️ Související
🔗 [Editions Spring '26 hub](/Shopify_news_magexo/zmena/editions-spring-2026/)
🔗 [Theme overview: Developer](/Shopify_news_magexo/zmena/editions-spring-2026-developer/)
