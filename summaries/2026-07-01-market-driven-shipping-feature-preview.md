---
date: 2026-07-01
title: "Market-driven shipping v feature preview — Action Required pro apps s delivery profiles"
title_en: "Market-driven shipping now available in feature preview"
slug: market-driven-shipping-feature-preview
zdroj: https://shopify.dev/changelog/market-driven-shipping-now-available-in-feature-preview
shrnuto_dne: 2026-07-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-07-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor pracující se shipping konfigurací klientů přes delivery profile API musí otestovat a případně aktualizovat svůj flow před říjnem 2026, kdy začíná rollout nového přístupu."
dotcene_klienty: []
souvisejici: ["carrier-services-no-auto-shipping-profile", "delivery-profiles-covers-all-items", "shipping-delivery-settings-redesign"]
tldr: "Shopify přesouvá merchant shipping konfiguraci z delivery profiles do Markets API — apps vytvářející nebo čtoucí merchant shipping musí otestovat integraci nyní a připravit se na povinnou migraci do července 2027."
tagy: [shipping, markets, delivery-profile, action-required, admin-api, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Market-driven shipping je nový přístup k organizaci dopravních sazeb v Shopify, při kterém se merchant shipping konfigurace přesouvá z delivery profiles přímo do Markets. Namísto centrálních profilů sdružujících produkty a zóny merchant nově přiřazuje shipping options ke konkrétním trhům (regions), do nichž prodává. Tento model umožňuje přesnější kontrolu sazeb podle geografické cílové skupiny a snižuje počet kroků potřebných k pochopení toho, co zákazník uvidí v checkoutu.

    Z pohledu Admin GraphQL API (verze 2026-07 a novější) se merchant shipping konfigurace přesouvá do Markets API. Delivery profile API zůstává zachováno výhradně pro app-owned profily — tedy profily spravované autorizovanou třetí stranou. Klíčová změna: app-provided rates se nadále zobrazují zákazníkům souběžně s merchant rates, ale přidání produktů do app delivery profilu již nemá žádný vliv na merchant konfiguraci. Nově lze app delivery profil nastavit tak, aby pokrýval všechny produkty (coversAllItems), což eliminuje nutnost explicitního mapování každé varianty.

    Praktický dopad pro vývojáře je dvojí. Za prvé, každá aplikace, která čte, vytváří nebo aktualizuje merchant shipping settings přes delivery profile API, musí svou integraci přehodnotit — tyto operace budou po migraci mířit do jiného API endpointu. Za druhé, timeline není zanedbatelná: feature preview je k dispozici od 1. července 2026, rollout začíná 1. října 2026 a plná migrace všech merchantů proběhne do 1. července 2027. Shopify doporučuje vytvořit testovací obchod, zapnout feature preview a ověřit existující integraci i rate logiku co nejdříve — legacy delivery profile APIs jsou paralelně deprecovány.

  zdroje:
    - title: "Shopify: Market-driven shipping now available in feature preview"
      url: "https://shopify.dev/changelog/market-driven-shipping-now-available-in-feature-preview"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify zavádí **market-driven shipping** — nový model, kde se merchant shipping konfigurace organizuje okolo Markets (trhů/regionů) namísto delivery profiles. Od Admin GraphQL API verze **2026-07** platí:

- **Merchant shipping** → přesouvá se z Delivery Profile API do **Markets API**
- **App-owned delivery profiles** → zůstávají na Delivery Profile API, nově podporují `coversAllItems: true`
- **App-provided rates** → zobrazují se zákazníkům souběžně s merchant rates, jako dosud
- **Přidání produktů do app profilu** → již neovlivňuje merchant konfiguraci

Apps, které přes Delivery Profile API **čtou, vytvářejí nebo upravují merchant shipping settings**, musí integraci otestovat a aktualizovat.

## Časová osa

| Datum | Událost |
|---|---|
| 2026-07-01 | Feature preview dostupný — vývojáři mohou testovat na testovacím obchodě |
| **2026-10-01** | Rollout začíná — nový model se aktivuje pro první skupinu obchodů |
| **2027-07-01** | Plná migrace — všichni merchanté přejdou na market-driven shipping |

Legacy delivery profile APIs pro merchant shipping jsou od 1. července 2026 paralelně deprecovány. Deadline pro aktualizaci apps před začátkem rollout je tedy říjen 2026.

## Dopad pro nás

Pokud Integrátor nebo jiná interní aplikace pracuje s merchant shipping konfigurací přes Delivery Profile API (čtení shipping zón, sazeb, nebo jejich vytváření/úprava za obchodníka), je nutné:

1. **Vytvořit testovací obchod** a zapnout feature preview pro market-driven shipping.
2. **Ověřit existující integraci** — projít flow, který vytváří nebo čte merchant delivery profiles, a identifikovat, co po migraci přestane fungovat.
3. **Aktualizovat na Markets API** pro merchant shipping operace — app-owned profily zůstávají na Delivery Profile API.
4. **Otestovat rate logiku** — ověřit, že app-provided rates se zobrazují správně i v novém modelu.

Pokud Integrátor pracuje výhradně s app-owned delivery profiles (ne merchant profiles), dopad je menší — ale je vhodné ověřit chování `coversAllItems` a ujistit se, že přidávání produktů do profilu funguje dle očekávání.

## Použití v Integrátoru

Market-driven shipping se přímo dotýká jakékoli integrační logiky, která programaticky konfiguruje merchant shipping — typicky onboarding flow při instalaci, import/sync shipping pravidel z externího systému nebo automatická správa shipping zón. Integrátor by měl do října 2026 otestovat celý shipping setup flow na obchodě s feature preview zapnutým a identifikovat, které API volání míří na merchant delivery profiles. Priorita: vysoká — rollout startuje v říjnu 2026 a bez aktualizace hrozí nefunkčnost shipping konfigurace u migrovaných obchodů.
