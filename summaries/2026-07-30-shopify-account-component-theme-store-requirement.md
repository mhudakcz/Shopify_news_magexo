---
date: 2026-07-30
title: "shopify-account komponenta pro customer accounts nyní Theme Store requirement"
title_en: "The shopify-account component for customer accounts is now a Theme Store requirement"
slug: shopify-account-component-theme-store-requirement
zdroj: https://shopify.dev/changelog/the-shopify-account-component-for-customer-accounts-is-now-a-theme-store-requirement
shrnuto_dne: 2026-07-31
kategorie: [breaking-change, deprecation]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud pro klienty vyvíjíme nebo upravujeme témata mířící do Theme Store, musí nově obsahovat komponentu shopify-account, jinak review neprojde."
dotcene_klienty: []
souvisejici: [customer-account-web-component, refreshed-signin-page-customer-accounts, marketing-consent-account-component]
tldr: "Shopify od 30. 7. 2026 vyžaduje, aby každé téma odeslané do Theme Store obsahovalo komponentu shopify-account viditelnou na desktopu i mobilu — bez ní review neprojde."
tagy: [themes, theme-store, customer-accounts, requirement, shopify-account, action-required]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Komponenta `<shopify-account>` je nativní web component spravovaná přímo Shopify, kterou developeři vkládají do hlavičky tématu jedním HTML tagem. Zajišťuje kompletní sign-in flow zákazníka — passwordless přihlášení, automatické rozpoznání přes Shop, sociální přihlášení a stavový avatar — aniž by theme developer musel psát vlastní auth logiku. Shopify ji zavedlo v rámci Editions Spring '26 jako náhradu za ručně stavěný sign-in UI.

    Doposud šlo o doporučenou, nikoli povinnou součást tématu. Touto změnou se situace mění: Shopify oznámilo, že komponenta je od 30. 7. 2026 vyžadována u všech nových theme submissions i u aktualizací existujících témat v Theme Store, a to viditelně jak na desktopu, tak na mobilu. Bez ní téma neprojde review procesem. Součástí stejného oznámení je i potvrzení, že legacy customer accounts jsou deprecated a témata už nemusí (a nemají) obsahovat starší template soubory pro legacy účty.

    Krok zapadá do dlouhodobého trendu, kdy Shopify postupně centralizuje customer-facing prvky (sign-in page, account component, nyní i storefront header) do vlastní spravované vrstvy — cílem je konzistentní UX a automatické nasazování nových funkcí (např. nových sign-in metod) bez nutnosti aktualizace tématu. Pro Theme Store partnery to zároveň znamená, že splnění tohoto requirementu je nutnou podmínkou publikace, ne jen doporučením best practice.
  zdroje:
    - title: "Shopify: The shopify-account component for customer accounts is now a Theme Store requirement"
      url: "https://shopify.dev/changelog/the-shopify-account-component-for-customer-accounts-is-now-a-theme-store-requirement"
    - title: "Shopify Docs: Customer account web component"
      url: "https://shopify.dev/docs/storefronts/themes/customer-engagement/account-component"
    - title: "Shopify Docs: Theme store requirements — Features"
      url: "https://shopify.dev/docs/storefronts/themes/store/requirements#4-features"
  generated_at: 2026-07-31T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify oznámilo, že komponenta `shopify-account` je od 30. 7. 2026 povinnou součástí každého tématu odesílaného do Theme Store — jak nových submissions, tak aktualizací existujících témat. Komponenta musí být přítomná a viditelná v hlavičce na desktopu i mobilu. Bez ní review proces neprojde.

Komponenta zajišťuje standardizovaný sign-in flow (passwordless přihlášení, rozpoznání přes Shop, sociální přihlášení, stavový avatar pro přihlášeného/nepřihlášeného zákazníka) a account menu s odkazy na objednávky, profil a další sekce customer accounts. Theme developer ji vkládá jedním Liquid tagem a vizuál si přizpůsobuje přes CSS custom properties a HTML slots.

Součástí stejného oznámení je potvrzení, že legacy customer accounts jsou deprecated — témata už nejsou povinná obsahovat starší template soubory pro legacy customer accounts flow.

## Časová osa

- 2026-06-17 — Editions Spring '26: `shopify-account` komponenta vydána jako doporučená volba
- 2026-07-30 — komponenta se stává povinným Theme Store requirement pro nové i aktualizované submissions

## Dopad pro nás

**Pro vývojáře:** Pokud pracujeme na tématu, které míří do Theme Store (nové téma nebo update existujícího), je nutné před odesláním ověřit, že hlavička obsahuje `<shopify-account>` viditelně na desktopu i mobilu — jinak review skončí zamítnutím. U témat mimo Theme Store (custom vývoj přímo pro klienta) requirement přímo neplatí, ale stojí za zvážení jako standardní řešení sign-in UI kvůli menší údržbě.

**Pro PM / PO:** Při zadávání nebo review theme projektů určených pro Theme Store je potřeba počítat s touto podmínkou jako s předpokladem úspěšného schválení — vhodné zmínit v zadání nebo checklistu před submission.

## Použití v Integrátoru

Přímý dopad jen u projektů, kde vyvíjíme téma pro Theme Store submission — tam je potřeba komponentu zahrnout jako podmínku úspěšného review.
