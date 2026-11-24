---
date: 2026-11-19
title: "Bezpečnostní uzávěrka: IP allowlist běží od 20. 11., 1. 12. hard deadline pro nové custom apps s expiring tokeny"
title_en: "App security updates: IP allowlist enforcement and expiring token deadlines"
slug: security-deadlines-nov-dec-2026-update
zdroj: https://shopify.dev/changelog/blog/app-security-updates-ip-allowlist-due-tomorrow
shrnuto_dne: 2026-11-24
kategorie: [breaking, bezpecnost]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-11-20
pouzivame_v_integratoru: ano
dukaz_integratoru: "Shopify utužuje bezpečnost aplikací; týká se nás jako dodavatele vlastních i Public app integrací."
dotcene_klienty: []
souvisejici: [ip-allowlists-required-breaking, expiring-tokens-migration-january-2027, admin-created-custom-apps-move-to-dev-dashboard]
tldr: "IP allowlist enforcement odstartoval 20. listopadu, od 1. prosince musí nové custom apps používat expiring offline access tokens a v Dev Dashboard přibyla deklarace, že app už jede jen na nich."
tagy: [security, ip-allowlist, tokens, custom-apps, dev-dashboard, deadlines]
zdroj_kanal: dev-changelog
kontext:
  background: |
    IP allowlist omezuje, ze kterých IP adres smí aplikace volat Admin API; kdo allowlist nemá nastavený, riskuje odmítnuté požadavky. Expiring offline access tokeny jsou přístupové tokeny s omezenou platností, které se musí pravidelně obnovovat, takže uniklý token přestane být použitelný. Shopify tyto bezpečnostní prvky zavádí postupně a o obou jsme už psali v článcích o povinném IP allowlistu a o migraci na expiring tokeny do ledna 2027. Tento text je status update: shrnuje, co se po zveřejnění posledního changelogu skutečně rozběhlo a co nás čeká 1. prosince.
  zdroje:
    - title: "Shopify: App security updates — IP allowlist due tomorrow"
      url: "https://shopify.dev/changelog/blog/app-security-updates-ip-allowlist-due-tomorrow"
    - title: "Shopify: Declare that your app uses only expiring Admin API tokens"
      url: "https://shopify.dev/changelog/posts/opt-in-to-admin-api-token-expiry-in-the-dev-dashboard"
    - title: "Shopify: Expiring offline access tokens required for new custom apps as of December 1, 2026"
      url: "https://shopify.dev/changelog/posts/expiring-offline-access-tokens-required-for-new-custom-apps-as-of-december-1-2026"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

**IP allowlist enforcement (od 20. 11. 2026).** Shopify v changelogu z 19. listopadu připomnělo, že vynucování IP allowlistu startuje následující den. Podrobnosti najdete v článku [[ip-allowlists-required-breaking]]; teď už nejde o varování, ale o platné pravidlo. Aplikace, které nemají allowlist správně nastavený, mohou začít narážet na odmítnuté požadavky.

**Expiring tokeny pro nové custom aplikace (od 1. 12. 2026).** Od prvního prosince musí každá nově vytvořená custom aplikace používat expiring offline access tokeny. Je to pevný termín pro nové aplikace; úplná migrace všech existujících aplikací je naplánovaná na leden 2027, viz [[expiring-tokens-migration-january-2027]].

**Deklarace v Dev Dashboard (od 16. 11. 2026).** V Dev Dashboard přibyla volba, kterou partner deklaruje, že jeho aplikace používá už jen expiring Admin API tokeny. Je to dobrovolný krok, který ukazuje směr: Shopify bezpečnostní nástroje dál rozšiřuje a deklarace může usnadnit přechod před lednovým termínem.

## Časová osa

- **2026-11-16** – v Dev Dashboard je k dispozici deklarace, že aplikace používá pouze expiring Admin API tokeny.
- **2026-11-20** – začíná vynucování IP allowlistu.
- **2026-12-01** – nově vytvářené custom aplikace musí používat expiring offline access tokeny.
- **2027-01** – všechny aplikace musí přejít na expiring tokeny.

## Dopad pro nás

**Pro vývojáře:**
- Zkontrolujte, že naše aplikace mají IP allowlist nastavený a odpovídá skutečným výstupním adresám našich služeb.
- Nové custom aplikace zakládejte už s podporou expiring tokenů, včetně logiky pro obnovu tokenu.
- U existujících aplikací naplánujte přechod s dostatečným předstihem před lednem 2027; deklaraci v Dev Dashboard lze využít jako kontrolní bod.

**Pro PM / PO:**
- Každá nová custom integrace zahájená po 1. prosinci vyžaduje expiring tokeny, což se promítne do odhadů a technického zadání.
- Doporučujeme zahrnout termíny do roadmapy a komunikačního plánu, aby se klienti o změně dozvěděli od nás dřív, než na ni narazí.

## Použití v Integrátoru

Integrátor může využívat Admin API tokeny, proto se nás změna týká přímo. Naše aplikace musí mít IP allowlist nastavený a funkční, jinak hrozí výpadky volání API. Nové custom aplikace zakládáme v Dev Dashboard a hned s expiring tokeny; stávající aplikace převedeme v rámci migrace do ledna 2027.
