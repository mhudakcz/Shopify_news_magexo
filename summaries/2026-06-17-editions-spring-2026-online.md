---
date: 2026-06-17
title: "Editions Spring '26: Online — Storefront, customer accounts, B2B, Collective"
slug: editions-spring-2026-online
zdroj: https://www.shopify.com/editions/spring2026
shrnuto_dne: 2026-06-17
kategorie: [editions-theme]
api_oblast: storefront
nalehavost: stredni
customer_facing: true
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Storefront/B2B/Collective téma — týká se klientů s Shopify storefronts a B2B/wholesale setupem."
dotcene_klienty: []
souvisejici: ["editions-spring-2026"]
editions_release: spring-2026
tldr: "26 updates seskupených kolem čtyř os: storefront (AI search, SimGym, Rollouts, mobilní editor), customer accounts (refresh UI, IdP sync, 365-day sessions), B2B (company profiles na všech plánech, market discounts, vaulted payments) a Collective (Austrálie, Verified Tracking, tax-inclusive B2B ceny, retailer analytics)."
tagy: [editions, storefront, b2b, collective, customer-accounts, markets]
zdroj_kanal: editions
---

## O čem tahle Edition téma je

Téma **Online** v Spring '26 Editions sdružuje 26 položek kolem jednoho základního záměru: zkvalitnit celý zákaznický zážitek od první stránky storefront přes přihlášení až po velkoobchodní objednávku. Shopify přitom pracuje na čtyřech souběžných frontách:

1. **Storefront & editor** — AI sales associate v Inboxu, odolnější vyhledávání, SimGym AI shopper, Rollouts A/B testy, mobilní + laptop editor.
2. **Customer accounts** — redesignovaná navigace, sync s identity providery, roční persistence přihlášení.
3. **B2B** — zpřístupnění nativních B2B funkcí všem plánům, market-cílené slevy, automatizované vaulted platby, QuickBooks/Mailchimp nativní B2B podpora.
4. **Shopify Collective** — expanze do Austrálie, Verified Tracking badge pro suppliery, tax-inclusive pricing, lepší discovery pro retailery.

Celkem je Online druhé největší téma releasu po Developerech (53 položek) a Operacích (47 položek).

---

## Top 3 highlights

### 1. AI sales associate v Shopify Inbox

Shopify Inbox nově funguje jako AI-powered asistent pro zákazníky přihlášené přes Shop. Systém zná historii objednávek a preferencí zákazníka a nabízí personalizované doporučení produktů přímo v chatovacím okně — de facto live chat s prodejní inteligencí. Pro B2C merchants s vyšší průměrnou hodnotou objednávky a opakovanými zákazníky jde o přímou konverzní páku.

### 2. Rollouts: scheduling + A/B testy pro themes i checkout

Rollouts (Markets › Rollouts v adminu) umožňují naplánovat spuštění nového tématu nebo checkout konfigurace na konkrétní čas, nasazovat postupně (gradual rollout) a souběžně A/B testovat dvě varianty oproti reálné návštěvnosti. Podrobnosti: [rollouts-schedule-ab-test-themes-checkout](../zmena/rollouts-schedule-ab-test-themes-checkout/).

### 3. B2B pro všechny plány

Nativní B2B features (company profiles, volume pricing, 3 katalogy, payment terms) jsou nově dostupné na Basic, Grow a Advanced plánech bez příplatku. Dříve exkluzivní Plus funkce. Podrobnosti: [b2b-for-all-merchants](../zmena/b2b-for-all-merchants/).

---

## Všechny položky (25 celkem) — Storefront / Customer Accounts / B2B / Collective

### Storefront & editor (9 položek)

**1. Your AI sales associate**
Shopify Inbox dostává AI vrstvu s doporučeními produktů pro zákazníky přihlášené přes Shop account. AI zná zákazníkovu historii a chování, takže nabídky jsou personalizované, nikoli generické. Cíl: zvýšit konverzi a AOV přes chat kanál, který byl dříve pasivní.

**2. Storefront search delivers more results**
Vyhledávání ve storefront nyní lépe zvládá překlepy a neobvyklé fráze (unusual phrasing). Zákazníci dostanou relevantní výsledky i při chybě v zadání — místo nulového výsledku. Prakticky to snižuje bounce ze search stránky.

**3. AI-powered store analysis on any theme — SimGym**
SimGym (preview) nasadí AI shopper-agenty, kteří procházejí storefront obchodníka jako skuteční zákazníci a generují strukturované insights: kde se shopper zasekl, co přeskočil, co fungovalo. Funguje na jakémkoli tématu bez nutnosti reálné návštěvnosti. Dostupné přes AI Research Preview pro eligible merchanty. Archivní článek: [simgym-ai-research-preview](../zmena/simgym-ai-research-preview/).

**4. A/B tests on online store and checkout — Rollouts**
Scheduling (naplánované spuštění), gradual publishing (postupné nasazení) a A/B testing pro themes i checkout/customer account konfigurace. Automatické kopírování aktuálního stavu při startu experimentu. Součástí Rollouts je také podpora per-market obsahu. Archivní článek: [rollouts-schedule-ab-test-themes-checkout](../zmena/rollouts-schedule-ab-test-themes-checkout/).

**5. Scheduling and testing for localized themes**
Navazuje přímo na Rollouts — umožňuje plánovat a testovat odlišné varianty tématu per market (geograficky). Merchant může spustit sezónní skin pro UK trh v jiném čase než pro CZ trh. Archivní základ: [customize-themes-per-market](../zmena/customize-themes-per-market/).

**6. Better online store editing on mobile**
Mobilní verze theme editoru dostala vylepšenou UX — obchodník může upravovat sekce a nastavení přímo z telefonu. Snižuje závislost na desktopu při rychlých úpravách banneru nebo textu.

**7. Better editing experience on laptops**
Na laptopech (a monitorech se středním rozlišením) přibyl side-by-side layout: sekce a settings jsou viditelné vedle sebe bez nutnosti přepínání panelů. Zrychluje práci pro agentury a vývojáře pracující v theme editoru.

**8. Variant-level publishing for products**
`ProductVariant` nově implementuje Publishable interface v GraphQL Admin API (od verze 2026-07). Variantu lze publikovat / skrýt per sales channel nezávisle na celém produktu. Typický scénář: velkoobchodní balení jen na B2B kanálu, retailové balení jen DTC. Archivní článek: [publish-unpublish-variants-independently](../zmena/publish-unpublish-variants-independently/).

**9. Visualized markets graph**
Admin sekce Markets dostala grafickou vizualizaci celého markets setupu — přehled regionů, kanálů a jejich propojení. Zjednodušuje orientaci u komplexních multi-market setups bez nutnosti prolézat textové konfigurace.

---

### Customer Accounts (5 položek)

**10. Refreshed customer accounts**
Redesign zákaznického portálu: přehlednější navigace, lepší zobrazení doporučení (recommendations v profilu), intuitivnější správa adres a objednávek. Součástí je i nový sign-in page s two-column layoutem a customizable background (editor-driven). Archivní články: [refreshed-signin-page-customer-accounts](../zmena/refreshed-signin-page-customer-accounts/), [feature-preview-customer-account-improvements](../zmena/feature-preview-customer-account-improvements/).

**11. Customer data syncs from identity providers**
Plus merchanti mohou aktivovat automatický sync zákaznických dat (jméno, e-mail, telefon, adresy, tagy) z externího identity provideru (Auth0, Ping Identity, Azure Active Directory) do Shopify customer records — bez custom middleware. Sync probíhá při každém přihlášení zákazníka přes IdP. Archivní článek: [sync-customer-data-identity-provider](../zmena/sync-customer-data-identity-provider/).

**12. 365-day sessions for customer accounts**
Zákazníci, kteří se přihlásí do customer accounts přes Shop, zůstanou přihlášeni po dobu 365 dní bez nutnosti opětovného přihlášení. Snižuje friction při opakovaném nákupu a zlepšuje personalizaci (Shopify ví, kdo zákazník je, při každé návštěvě).

**13. Sales channel control in markets**
Merchants mohou granulárně řídit dostupnost a pricing per sales channel v rámci každého marketu — ne jen per market globálně, ale kombinace market × channel. Umožňuje např. jiné ceny pro online obchod vs. marketplace v rámci jednoho regionu.

**14. Product compliance disclosure**
Podpora pro povinné zákonné varování nebo compliance text přímo na produktové stránce. Merchants v regulovaných kategoriích (alkohol, léky, chemikálie, GPSR) mohou přidat mandatory disclosure bez nutnosti úpravy Liquid šablon. Relevantní pro EU compliance (GPSR od 2024).

---

### B2B (6 položek)

**15. B2B features on more plans**
Nativní B2B features (company profiles, volume pricing, 3 katalogy bez omezení, payment terms) jsou nově dostupné na plánech Basic, Grow a Advanced bez příplatku. Dříve bylo B2B exkluzivní pro Shopify Plus. Dle Shopify dat nárůst sebeobslužných B2B objednávek o 33 % za 6 měsíců u stávajících uživatelů. Archivní článek: [b2b-for-all-merchants](../zmena/b2b-for-all-merchants/).

**16. Discounts by market**
`DiscountContextInput` v Admin GraphQL API (od verze 2026-07) podporuje pole `markets` pro cílení slev na konkrétní regional markets, retail locations nebo B2B company locations. Kombinovatelné se stávajícími customer segment eligibility kritérii. Archivní článek: [target-discounts-specific-markets](../zmena/target-discounts-specific-markets/).

**17. Stacking multiple product discounts**
Od API verze 2026-04 lze aplikovat více product discounts současně na jednu cart line (dříve max. jedna). Odblokuje komplexní promo scénáře (věrnostní + akční sleva na tentýž produkt) a odstraňuje klíčový bloker migrace ze Shopify Scripts (sunset 30. 6. 2026). Archivní článek: [multiple-product-discounts-cart-line](../zmena/multiple-product-discounts-cart-line/).

**18. Automated vaulted payments**
Automatické strhávání uložených (vaulted) platebních metod B2B zákazníků přes Shopify Flow — merchant nastaví pravidlo, Flow spustí charge automaticky bez manuálního kroku. Zejména užitečné pro opakované B2B objednávky s established payment terms.

**19. QuickBooks and Mailchimp natively support B2B**
QuickBooks dostává nativní sync B2B objednávek (companies, net terms, objemy) bez custom middleware. Mailchimp podporuje B2B segmentaci — zákazníci z company locations jsou automaticky tříděni do B2B segmentů pro cílení kampaní. Oba integrace fungují nativně v rámci Shopify Admin.

**20. Shopify Smart Pricing app**
Nová Shopify-owned aplikace (přes App Store) nabízí merchantům pricing tips na základě kombinace dat: tržby, inventory úrovně a costs. AI doporučí optimální cenovku nebo okamžik pro slevu. Určeno pro DTC i B2B merchants bez dedikovaného pricing analytika.

---

### Shopify Collective (6 položek)

**21. Product sourcing insights in Shopify Collective**
Retailers v Collective mají přístup k analytice o produktech, které nakupují od supplierů — výkonnostní metriky, sell-through rate, doporučení pro rozšíření portfolia. Pomáhá retailerům lépe rozhodovat, od kterých supplierů brát více produktů.

**22. Tax-inclusive pricing for Shopify Collective**
B2B transakce uvnitř Collective ekosystému nyní automaticky počítají daně (tax-inclusive pricing). Retaileři vidí správné ceny bez manuálního dohledávání tax pravidel. Relevantní zejména pro EU Collective partnerships, kde je DPH povinné.

**23. Improved product discovery in Shopify Collective**
Shopify Collective discovery sekce dostala category pills (rychlá navigace) a filtering — retaileři rychleji najdou suppliery s relevantními produkty. Doplňuje [verified-tracking-shopify-collective](../zmena/verified-tracking-shopify-collective/) kde suppliéři získávají trust badges.

**24. Shipping performance and trust badges**
Suppliéři v Collective mohou získat Verified Tracking badge zobrazovaný na discovery profilu — vyžaduje konzistentní carrier tracking coverage, on-time fulfillment a on-time delivery. Tři metriky jsou viditelné supplierovi přímo v Collective Supplier aplikaci. Archivní článek: [verified-tracking-shopify-collective](../zmena/verified-tracking-shopify-collective/).

**25. Shopify Collective available in Australia**
Od 10. 6. 2026 je Shopify Collective dostupný australským merchantům. Podmínky: oba partneři (supplier + retailer) musí být registrovaní v AU, sdílet měnu a mít Shopify Payments. Archivní článek: [shopify-collective-australia](../zmena/shopify-collective-australia/).

---

## Co tu ještě nemáme

Části z Online tématu zatím nemají standalone archivní článek a jsou pokryty pouze tímto overview:

- **Your AI sales associate** (Shopify Inbox AI recommendations pro Shop sign-in zákazníky) — žádný existující standalone
- **Storefront search improvements** (překlepy / unusual phrasing) — žádný existující standalone
- **Better online store editing on mobile** — žádný existující standalone
- **Better editing experience on laptops** (side-by-side layout) — žádný existující standalone
- **Visualized markets graph** — žádný existující standalone
- **365-day sessions for customer accounts** — žádný existující standalone
- **Sales channel control in markets** — pokryt jen okrajově v [customize-themes-per-market](../zmena/customize-themes-per-market/)
- **Product compliance disclosure** — žádný existující standalone
- **Automated vaulted payments** — žádný existující standalone
- **QuickBooks and Mailchimp natively support B2B** — žádný existující standalone
- **Shopify Smart Pricing app** — žádný existující standalone
- **Product sourcing insights in Shopify Collective** — žádný existující standalone
- **Tax-inclusive pricing for Shopify Collective** — žádný existující standalone
- **Improved product discovery in Shopify Collective** — žádný existující standalone

---

## Existující archivní pokrytí

| Editions položka | Archivní článek |
|---|---|
| A/B tests on online store and checkout — Rollouts | [rollouts-schedule-ab-test-themes-checkout](../zmena/rollouts-schedule-ab-test-themes-checkout/) |
| Scheduling and testing for localized themes | [customize-themes-per-market](../zmena/customize-themes-per-market/) |
| AI-powered store analysis — SimGym | [simgym-ai-research-preview](../zmena/simgym-ai-research-preview/) |
| Variant-level publishing for products | [publish-unpublish-variants-independently](../zmena/publish-unpublish-variants-independently/) |
| Discounts by market | [target-discounts-specific-markets](../zmena/target-discounts-specific-markets/) |
| Stacking multiple product discounts | [multiple-product-discounts-cart-line](../zmena/multiple-product-discounts-cart-line/) |
| Refreshed customer accounts (sign-in) | [refreshed-signin-page-customer-accounts](../zmena/refreshed-signin-page-customer-accounts/) |
| Refreshed customer accounts (portal preview) | [feature-preview-customer-account-improvements](../zmena/feature-preview-customer-account-improvements/) |
| Customer data syncs from identity providers | [sync-customer-data-identity-provider](../zmena/sync-customer-data-identity-provider/) |
| B2B features on more plans | [b2b-for-all-merchants](../zmena/b2b-for-all-merchants/) |
| Shipping performance and trust badges | [verified-tracking-shopify-collective](../zmena/verified-tracking-shopify-collective/) |
| Shopify Collective available in Australia | [shopify-collective-australia](../zmena/shopify-collective-australia/) |

---

## Zpet na hub

[Editions Spring '26 — přehled všech 10 témat](../zmena/editions-spring-2026/)
