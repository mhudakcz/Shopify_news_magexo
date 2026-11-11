---
date: 2026-11-05
title: "Review app access + security info v Shopify Admin (per-app transparency panel)"
title_en: "Review app access and security information in Shopify admin"
slug: review-app-access-security-admin
zdroj: https://changelog.shopify.com/posts/review-app-access-and-security-information-in-shopify-admin
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-11-05
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Merchant uvidí v adminu, zda naše custom app používá expirující tokeny a vynucená IP omezení, takže tyto vlastnosti budou viditelným signálem kvality."
dotcene_klienty: []
souvisejici: [ip-allowlist-admin-api-restriction, ip-allowlists-required-public-apps, app-security-updates-november-2026-ip, app-ip-allowlists-serverless-asn-support, track-app-activity-permissions]
tldr: "Shopify Admin v Nastavení > Aplikace nově ukazuje u každé appky poslední aktivitu, přístupy a oprávnění (citlivá jsou označená) a zda používá expirující tokeny a vynucená IP omezení."
tagy: [admin, apps, security, access, transparency, partners]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Merchanti dlouhodobě instalují řadu aplikací a často nevědí, k jakým datům mají přístup ani zda jsou zabezpečené. Shopify proto v posledních měsících posiluje bezpečnostní požadavky na aplikace.
    Tato novinka je součástí listopadového bezpečnostního balíčku. Souvisí s požadavkem na IP allowlisty pro veřejné aplikace a s dřívějším sledováním aktivity a oprávnění aplikací.
    Cílem je dát merchantům nástroj, jak si nainstalované aplikace sami auditovat a rizikové odebrat.
  zdroje:
    - title: "Shopify: Review app access and security information in Shopify admin"
      url: "https://changelog.shopify.com/posts/review-app-access-and-security-information-in-shopify-admin"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify Admin (Nastavení > Aplikace) zobrazuje bezpečnostní a přístupové informace o každé aplikaci.

- **Seznam aplikací:** u každé appky je vidět poslední aktivita a upozornění na bezpečnostní problémy, které mohou vyžadovat pozornost.
- **Detail aplikace:** přístupy, oprávnění a aktivita jsou seskupeny na jednom místě. Oprávnění, která mohou zahrnovat citlivá data, jsou označena.
- **Bezpečnostní opatření:** merchant vidí, zda app používá expirující přístupové tokeny (omezují dobu užitečnosti ukradeného tokenu) a vynucená IP omezení (API požadavky jen z povolených IP adres).

Podrobnější údaje nad rámec výše uvedeného (např. konkrétní IP rozsahy) changelog neuvádí.

## Časová osa

- 2026-11-05: novinka zveřejněna v merchant changelogu.
- Součást listopadového bezpečnostního balíčku spolu s požadavky na IP allowlisty.

## Dopad pro nás

**Pro vývojáře:** Aplikace s dlouhodobými neexpirujícími tokeny nebo bez IP omezení budou v adminu vypadat méně důvěryhodně. Je vhodné přejít na expirující tokeny, nasadit IP allowlist a minimalizovat požadované scopes, protože citlivá oprávnění jsou nově označená.

**Pro PM / PO:** Merchanti budou mít snazší cestu k auditu aplikací a můžeme očekávat dotazy na oprávnění našich appek. Doporučujeme připravit vysvětlení, proč které oprávnění potřebujeme, a zkontrolovat, jak naše aplikace v panelu vypadají.

## Použití v Integrátoru

Pokud Integrátor běží jako custom nebo public app, měl by splnit expirující tokeny a IP omezení, aby v panelu nebyl označen jako riziková. Stav ověřit po nasazení na testovacím shopu.
