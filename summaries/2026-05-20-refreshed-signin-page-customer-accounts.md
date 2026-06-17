---
date: 2026-05-20
title: "Redesign sign-in page customer accounts s customizable background"
title_en: "A refreshed sign-in page for customer accounts, now customizable in the editor"
slug: refreshed-signin-page-customer-accounts
zdroj: https://changelog.shopify.com/posts/draft-a-refreshed-sign-in-page-for-customer-accounts-now-customizable-in-the-editor
zdroj_kanal: merchant-changelog
editions_release: spring-2026
shrnuto_dne: 2026-05-26

kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true

pouzivame_v_integratoru: ne
dukaz_integratoru: "Customer Accounts UI customization. Naše integrace nesahá na customer account branding."
dotcene_klienty: []
souvisejici: [unified-branding-checkout-customer-accounts, marketing-consent-customer-signin]

kontext:
  background: |
    Customer sign-in page je vstupní stránka zákaznického portálu (customer accounts), na kterou přicházejí nepřihlášení zákazníci. Umožňuje přihlášení e-mailem, magic linkem nebo přes sociální identity providers. Tato stránka existuje odděleně od samotného checkoutu a tvoří branu k zákaznickému profilu, historii objednávek a správě osobních údajů.

    Shopify provozuje dva souběžné modely zákaznických účtů: starší Classic Customer Accounts (verze postavená na Liquid šablonách) a novější New Customer Accounts, které jsou hostované Shopify a nabízejí rozšiřitelnost přes Customer Account Extensions. Sign-in page popisovaná touto změnou patří do nového modelu — obchodníci ji nemohou editovat přes Liquid, ale řídí ji výhradně přes editor Checkout and Accounts v Shopify Adminu. Před redesignem byl vizuální záběr tohoto editoru omezený a sign-in stránka vyžadovala pro pokročilejší styling přímé zásahy do konfigurace.

    Prakticky jde o součást trendu sjednocování brand experience: v květnu 2026 Shopify vydalo unified branding API pro synchronizaci loga, barev a typografie napříč checkoutem, customer accounts a sign-in stránkou. Nový dvousloupcový layout a možnost přidat vlastní background image přímo z editoru navazuje na tuto strategii — obchodník může budovat konzistentní vizuální identitu bez nutnosti psát kód.

    Sign-in page je zároveň jeden ze tří klíčových touchpointů pro zachycení marketing consentu (vedle checkoutu a stránky profilu), takže její redesign má vliv i na to, jak zákazníci vnímají první interakci s obchodem.
  zdroje:
    - title: "Shopify Changelog: A refreshed sign-in page for customer accounts, now customizable in the editor"
      url: "https://changelog.shopify.com/posts/draft-a-refreshed-sign-in-page-for-customer-accounts-now-customizable-in-the-editor"
    - title: "Archiv: Unified branding napříč checkout, customer accounts a sign-in"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/unified-branding-checkout-customer-accounts/"
    - title: "Archiv: Sběr marketing consent na customer sign-in page"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/marketing-consent-customer-signin/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-5
tldr: "Customer sign-in page má nový two-column layout s customizable background image a direct editor control nad stylingem a brandingem."
tagy: [customer-account, sign-in, branding, ui-redesign]
---

## Co se mění
**Customer sign-in page** (logged-out customer landing) má redesign:
- **Two-column layout** — formulář + sidebar
- **Customizable background image** přímo z editoru
- Direct control nad styling a branding elementy (předtím vyžadovalo theme editing)

Souvisí s předchozí konsolidací brandingu napříč checkout + customer accounts.

## Použití v Integrátoru
**Nepoužíváme** — branding/UI feature. Pokud klient řeší jednotný brand experience, mohou nově customizovat sign-in jen z editoru.
