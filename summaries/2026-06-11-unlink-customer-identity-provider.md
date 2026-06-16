---
date: 2026-06-11
title: "Unlink customer od OIDC identity providera v Admin (Plus)"
title_en: "Unlink a customer from your custom identity provider"
slug: unlink-customer-identity-provider
zdroj: https://changelog.shopify.com/posts/unlink-a-customer-from-your-custom-identity-provider
shrnuto_dne: 2026-06-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-11
pouzivame_v_integratoru: ne
dukaz_integratoru: "Shopify Plus custom identity provider feature, naší integrace se netýká."
dotcene_klienty: []
souvisejici:
  - sync-customer-data-identity-provider
  - headless-checkout-sso-silent
  - marketing-consent-customer-signin
kontext:
  background: |
    OIDC (OpenID Connect) custom identity provider v Shopify Plus umožňuje merchantům propojit customer accounts s externím poskytovatelem identity — například Okta, Auth0 nebo Microsoft Entra ID. Zákazníci se pak přihlašují přes SSO místo nativního Shopify přihlášení, přičemž Shopify ukládá tzv. subject ID, které jednoznačně identifikuje zákazníka v rámci identity providera.

    K problémům dochází, když je customer account propojen s nesprávným subject ID — typicky po migraci identity providera, při přenosu účtů mezi prostředími nebo při chybné konfiguraci. Zákazník v takovém případě vidí chybu „The sign-in method you used doesn't match this account" a bez zásahu ze strany Shopify Supportu se nemůže přihlásit. Řešení takového ticketu přes Support bývalo pomalé a pro merchant tým frustrující.

    Nová funkce umožňuje Plus merchantům problém vyřešit přímo v Shopify Admin — v detailu zákazníka stačí kliknout na Unlink vedle zobrazeného identity provider ID (Okta ID, Auth0 ID apod.), ověřit subject ID v potvrzovacím dialogu a potvrdit odpojení. Zákazník je okamžitě odhlášen a při dalším přihlášení přes OIDC se vytvoří nové správné propojení. Stávající objednávky a data zákazníka zůstávají nedotčena.
  zdroje:
    - title: "Shopify Changelog: Unlink customer from custom IdP"
      url: "https://changelog.shopify.com/posts/unlink-a-customer-from-your-custom-identity-provider"
    - title: "Shopify Help: Connect identity provider — unlink customer"
      url: "https://help.shopify.com/en/manual/customers/customer-accounts/sign-in-options/identity-provider/connect#unlink-customer"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify Plus merchanté mohou nyní odpojit zákazníka od OIDC identity providera přímo v Admin bez nutnosti kontaktovat Support — řeší chyby přihlášení způsobené nesprávným propojením subject ID."
tagy: [oidc, identity-provider, plus, customer, authentication]
zdroj_kanal: merchant-changelog
---

## Co se mění

Shopify Plus obchody nově mohou z Admin rozhraní ručně odpojit (unlink) zákazníka od propojeného OIDC identity providera. Funkce je dostupná v detailu zákazníka v sekci Customers — vedle zobrazeného identity provider ID (např. Okta ID nebo Auth0 ID) se zobrazí tlačítko Unlink. Po kliknutí merchant vidí subject ID zákazníka, které může porovnat se záznamy ve svém identity provideru, a akci potvrdí. Zákazník je okamžitě odhlášen; při příštím přihlášení přes SSO se propojení obnoví automaticky s aktuálním subject ID. Veškerá objednávková a produktová data zákazníka zůstávají nedotčena.

Před touto změnou bylo nutné v takových případech kontaktovat Shopify Support — pro merchant týmy to znamenalo prodlevy i u urgentních situací, kdy zákazník nemohl dokončit nákup.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-11 | Funkce dostupná pro všechny Shopify Plus obchody s připojeným OIDC identity providerem |

## Dopad pro nás

Funkce je čistě merchant-facing a týká se výhradně Shopify Plus obchodů, které mají nakonfigurovaný custom OIDC identity provider pro customer accounts. Naše integrace s touto vrstvou autentizace nepracuje — neprovádíme propojování ani správu subject ID zákazníků. Žádná změna v API, webhooks ani v chování existujících integrací nenastává.

## Použití v Integrátoru

Integrátor tuto funkci nevyužívá — jedná se o Admin UI operaci bez API ekvivalentu určenou přímo Plus merchantům. Pokud by v budoucnu vznikla potřeba programaticky spravovat OIDC propojení zákazníků (např. hromadná migrace po změně identity providera), bylo by nutné sledovat, zda Shopify tuto operaci zpřístupní i přes Admin API nebo GraphQL mutaci.
