---
date: 2026-07-07
title: "Migrační nástroj pro App Pricing — generuj/edituj/testuj nové plány z Billing API"
title_en: "Prepare your app for migration to Shopify App Pricing"
slug: app-pricing-migration-tool
zdroj: https://shopify.dev/changelog/prepare-your-app-for-migration-to-shopify-app-pricing
shrnuto_dne: 2026-07-21
kategorie: [nova-prilezitost, nova-api]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-07-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Nástroj se týká vývojářů public/private Shopify apps na starém Billing API — naše integrace běží jako custom apps per klient, takže migrace se nás přímo netýká, jen jako referenční informace."
dotcene_klienty: []
souvisejici: [shopify-app-pricing-usage-subscriptions, app-pricing-more-plans-fractional-events, app-events-dev-dashboard]
tldr: "Partner Dashboard dostal migrační nástroj, který z existujících Billing API plánů automaticky vygeneruje návrh Shopify App Pricing plánů — vývojáři je můžou upravit, otestovat na development storu a připravit se tak na budoucí přechod bez dopadu na aktuální merchant subscriptions."
tagy: [app-pricing, billing-api, migration, tooling, app-store]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Pricing je nová standardizovaná monetizační vrstva pro aplikace v Shopify App Store — nahrazuje starší přístup, kde si vývojáři konfigurovali plány a poplatky přímo přes Billing API bez jednotného zobrazení v App Store a Shopify Adminu. Cílem App Pricing je sjednotit zobrazení plánů, výběr a správu předplatného i fakturaci napříč celým App Store, aby obchodníci viděli konzistentní UI bez ohledu na to, kterou aplikaci si instalují.

    Protože velké množství existujících aplikací už má nastavené manuální Billing API plány (často roky staré, s různorodou strukturou), Shopify potřebuje umožnit hladký přechod bez nutnosti ručně přepisovat konfiguraci od nuly. Migrační nástroj v Partner Dashboardu proto z existujících způsobilých Billing API plánů automaticky vygeneruje odpovídající návrhy App Pricing plánů. Pokud návrhu chybí povinná pole (např. detaily usage pricing), nástroj ho označí štítkem „Action needed", takže vývojář přesně vidí, co je potřeba doplnit před dalším krokem.

    V aktuální fázi jde čistě o přípravu — generování, editaci a testování plánů na vlastních development storech v rámci Partner organizace. Žádné existující merchant subscriptions se automaticky nemigrují a obchodníci nemusí nic dělat. Shopify avizuje, že v další fázi (brzy) bude možné se přihlásit do early access programu pro skutečné přesunutí existujících subscriptions na App Pricing. Pro vývojáře veřejných aplikací je praktický dopad ten, že si mohou nastavenou migraci důkladně otestovat předem, místo aby je pozdější povinný přechod zaskočil.
  zdroje:
    - title: "Shopify: Prepare your app for migration to Shopify App Pricing"
      url: "https://shopify.dev/changelog/prepare-your-app-for-migration-to-shopify-app-pricing"
    - title: "Shopify App Pricing: usage + subscriptions billing kombinace"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/shopify-app-pricing-usage-subscriptions/"
    - title: "App Pricing rozšíření — až 8 public + 15 private plans, no-charge testing, fractional/negative events"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-more-plans-fractional-events/"
  generated_at: 2026-07-21T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Shopify přidal do **Partner Dashboardu** (sekce „Pricing details") migrační nástroj, který vývojářům pomáhá připravit přechod ze starého **Billing API** na nové **Shopify App Pricing**:

- **Generuj** — nástroj automaticky vytvoří návrh App Pricing plánů z existujících způsobilých manuálních Billing API plánů. Plánům s chybějícími povinnými poli (např. konfigurace usage pricing) přiřadí štítek „Action needed".
- **Edituj** — vygenerované plány lze upravit, přidat nové plány nebo dokonfigurovat usage charges.
- **Testuj** — nové plány lze vyzkoušet přímo na development storech v rámci Partner organizace ještě před ostrým nasazením.
- **Validuj** — checklist připravenosti ukáže, co je potřeba doplnit, než je konfigurace kompletní.

Důležité: v této fázi se **žádné existující merchant subscriptions automaticky nemigrují** a obchodníci nemusí dělat nic. Jde čistě o přípravnou fázi pro vývojáře.

## Časová osa
- **7. 7. 2026** — nástroj publikován a dostupný v Partner Dashboardu pro všechny vývojáře s Billing API plány.
- **Aktuální fáze** — pouze generování, editace a testování plánů; bez dopadu na živé subscriptions.
- **Připravovaná fáze** — Shopify chystá early access program pro skutečné přesunutí existujících merchant subscriptions na App Pricing (termín zatím neupřesněn).

## Dopad pro nás
**Pro vývojáře:** Naše integrace fungují jako custom apps per klient, takže Billing API ani App Pricing přímo nepoužíváme — merchant billing přes App Store u nás neřešíme. Nástroj je relevantní jen v hypotetickém scénáři, kdy bychom v budoucnu publikovali vlastní public app do Shopify App Store se starším Billing API modelem.

**Pro PM / PO:** Žádná akce není potřeba směrem ke klientům — týká se výhradně vývojářů veřejných/private Shopify aplikací s billing modelem přes App Store, ne custom integrací postavených na míru pro konkrétního obchodníka.

## Použití v Integrátoru
**Možná** — přímý dopad nemá, protože naše integrace nejsou public/private Shopify apps s Billing API pricing modelem. Relevantní jen jako referenční informace pro případné budoucí publikování vlastní aplikace do App Store.
