---
date: 2026-11-17
title: "Custom apps z Adminu se přesouvají do Dev Dashboardu (IP restrikce + logy)"
title_en: "Admin-created custom apps are moving to the Dev Dashboard"
slug: admin-created-custom-apps-move-to-dev-dashboard
zdroj: https://shopify.dev/changelog/posts/admin-created-custom-apps-are-now-built-and-managed-in-the-dev-dashboard
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost, bezpecnost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-17
pouzivame_v_integratoru: ano
dukaz_integratoru: "Spravujeme custom apps pro náš integrátor i klientské store; po přesunu do Dev Dashboardu získají IP restriction a monitoring, zatímco stávající tokeny a webhooks fungují dál."
dotcene_klienty: []
souvisejici: [security-deadlines-nov-dec-2026-update, expiring-tokens-migration-january-2027, ip-allowlists-required-breaking]
tldr: "Stávající custom apps založené v Adminu se přesunuly do Dev Dashboard, získaly IP restriction a log monitoring; tokeny, scopes a webhooks pracují dál a nové custom apps se mají zakládat už v Dev Dashboardu."
tagy: [custom-apps, dev-dashboard, admin, security, ip-allowlist, monitoring]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Custom app v Shopify Adminu je aplikace, kterou obchodník nebo partner vytvoří přímo v administraci obchodu (Nastavení – Aplikace a prodejní kanály – Vyvíjet aplikace) a používá ji pro vlastní integrace přes Admin API. Dev Dashboard je centrální místo pro vývoj a správu aplikací, kde už dnes žijí aplikace vytvářené přes Shopify CLI. Shopify nyní oba světy sjednocuje, aby měly custom apps stejné bezpečnostní a provozní možnosti jako ostatní aplikace. To zapadá do širšího trendu zpřísňování bezpečnosti, tedy povinných IP allowlistů a expirujících tokenů. Pro stávající integrace přesun neznamená žádný výpadek.
  zdroje:
    - title: "Shopify dev: Admin-created custom apps are now built and managed in the Dev Dashboard"
      url: "https://shopify.dev/changelog/posts/admin-created-custom-apps-are-now-built-and-managed-in-the-dev-dashboard"
    - title: "Shopify merchant: Custom apps created in the Shopify admin are moving to the Dev Dashboard"
      url: "https://changelog.shopify.com/posts/custom-apps-created-in-the-shopify-admin-are-moving-to-the-dev-dashboard"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přesouvá tzv. legacy custom apps, tedy aplikace vytvořené přímo v Shopify Adminu, do Dev Dashboardu. Správa a vývoj těchto aplikací se tak sjednocují na jednom místě s aplikacemi zakládanými přes Shopify CLI.

Přesunem custom apps získávají dvě nové funkce:

- **IP restriction** – možnost omezit, z jakých IP adres lze aplikaci volat,
- **monitoring API a webhook logů** – přehled o voláních API a doručování webhooků, který usnadňuje ladění i bezpečnostní audit.

Stávající fungování zůstává beze změny. Nainstalované aplikace, přístupové tokeny, scopes i webhooks pokračují bez přerušení. Nové custom apps se už nemají zakládat v Adminu, ale v Dev Dashboardu nebo přes Shopify CLI.

## Časová osa

- **2026-11-17** – Shopify oznámil změnu v merchant i developer changelogu; přesun je účinný od tohoto data.
- **Od teď** – nové custom apps zakládáme v Dev Dashboardu nebo přes Shopify CLI, nikoli v Adminu.

Žádné pevné datum, do kterého bychom museli něco migrovat, oznámení neuvádí.

## Dopad pro nás

**Pro vývojáře:**
- Zkontrolovat, jaké custom apps spravujeme (vlastní i klientské store), a ověřit jejich zobrazení v Dev Dashboardu.
- Nastavit IP restrikce tam, kde máme stabilní odchozí IP. Navazuje to na povinné IP allowlisty a na migraci expirujících tokenů plánovanou na leden 2027.
- Využít nový monitoring API a webhook logů při ladění integrací.
- Nové custom apps zakládat přímo v Dev Dashboardu nebo přes CLI, ne v Adminu.

**Pro PM / PO:**
- Žádný výpadek ani akce na straně obchodníků. Stávající custom apps pracují dál, jen dostaly více kontroly a lepší dohled.

## Použití v Integrátoru

Ano, custom apps spravujeme jak pro vlastní integrátor, tak pro klientské obchody. Po přesunu do Dev Dashboardu budou mít k dispozici IP restriction a monitoring API a webhook logů. Existující tokeny, scopes a webhooks zůstávají funkční, takže integrace není nutné nijak upravovat. Doporučujeme využít příležitosti a IP restrikce nastavit v souladu s připravovanými bezpečnostními požadavky.
