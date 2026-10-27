---
date: 2026-10-24
title: "Guaranteed flat-rate shipping v Managed Markets — fixní cena international shipping"
title_en: "Guaranteed flat-rate shipping, now with Managed Markets"
slug: guaranteed-flat-rate-shipping-managed-markets
zdroj: https://changelog.shopify.com/posts/guaranteed-flat-rate-shipping-now-in-managed-markets
shrnuto_dne: 2026-10-27
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Managed Markets nastavuje shipping rates sám a merchant je nemůže upravit, takže u cross-border projektů je vhodné ověřit, jestli se nepřekrývají s vlastními delivery profiles nebo carrier services."
dotcene_klienty: []
souvisejici: [managed-markets-duties-inclusive-pricing, managed-markets-uk-canada-launch, market-driven-shipping-admin-api]
tldr: "Managed Markets nově spravuje i mezinárodní shipping rates (Standard a Express) vedle duty-inclusive pricing a u kvalifikovaných prepaid FedEx a DHL Express štítků garantuje, že merchant neplatí pozdější cenové úpravy od dopravce."
tagy: [managed-markets, shipping, flat-rate, international, cross-border, duties]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Managed Markets je Shopify služba pro cross-border prodej, která merchantovi zajišťuje výpočet a výběr cla a daní, celní compliance a lokalizované ceny pro zahraniční zákazníky. V předchozích aktualizacích Shopify zavedl duty-inclusive pricing, kdy se cla, daně a poplatky promítají přímo do zobrazené ceny produktu, takže zákazník u pokladny nenarazí na skryté položky. Doprava ale zůstávala slabým místem: merchant musel sám nastavovat shipping rates pro zahraniční destinace a nést riziko, že mu dopravce po vystavení štítku dodatečně navýší cenu (například kvůli rozměrům či váze zásilky).

    Nová funkce rozšiřuje Managed Markets o správu mezinárodních shipping rates. Pro každou destinaci Managed Markets nastaví sazby Standard a Express. Část nákladů na dopravu je zahrnuta v cenách produktů a zbytek se účtuje jako shipping v checkoutu, takže zákazník vidí jednoduchou a předvídatelnou cenu dopravy. Merchant může volitelně část nákladů absorbovat, aby snížil ceny viditelné pro zákazníka. Rates nastavuje a aktualizuje Managed Markets a merchant je nemůže ručně editovat. Požadavkem je zapnuté duty-inclusive pricing.

    Druhou částí je garance nákladů na štítky: pokud merchant nakupuje kvalifikované prepaid štítky FedEx nebo DHL Express přes Managed Markets, nejsou mu účtovány pozdější cenové úpravy od dopravce. Třetí částí je náhled cen a výplat. Před zapnutím funkce lze v admin rozhraní zobrazit mezinárodní ceny produktů, součty v checkoutu i očekávané payouts pro každý market. Konfigurace probíhá v Shopify admin v sekci Markets, kde se u vybraného marketu otevře část Managed Markets. Pokud merchant chce použít vlastní rates, může funkci pro daný market vypnout, čímž ale ztrácí garanci nákladů na štítky. Changelog neuvádí seznam podporovaných zemí, přesná kritéria způsobilosti ani to, jak se dělí náklady mezi ceny produktů a shipping v checkoutu. Tyto detaily je nutné ověřit v Help Center nebo u Shopify Support.
  zdroje:
    - title: "Shopify: Guaranteed flat-rate shipping, now with Managed Markets"
      url: "https://changelog.shopify.com/posts/guaranteed-flat-rate-shipping-now-in-managed-markets"
    - title: "Shopify Help Center: Set up shipping in Managed Markets"
      url: "https://help.shopify.com/en/manual/international/managed-markets/shipping/set-up-shipping"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Managed Markets nově umí spravovat **mezinárodní shipping rates** společně s duty-inclusive pricing. Zákazník v checkoutu vidí jednoduchou cenu dopravy a merchant je chráněn před neočekávanými úpravami cen štítků. Funkce má tři části:

- **Managed shipping rates** — Managed Markets nastaví pro každou destinaci sazby Standard a Express. Část nákladů na dopravu je zahrnuta v cenách produktů, zbytek se účtuje jako shipping v checkoutu. Merchant může volitelně část nákladů absorbovat a snížit tak ceny viditelné pro zákazníka.
- **Guaranteed label costs** — při nákupu kvalifikovaných prepaid štítků FedEx nebo DHL Express přes Managed Markets se merchantovi neúčtují pozdější cenové úpravy od dopravce.
- **Náhled cen a payouts** — pro každý market lze před zapnutím zobrazit mezinárodní ceny produktů, součty v checkoutu a očekávané výplaty.

Omezení: duty-inclusive pricing je podmínkou, rates nastavuje a aktualizuje Managed Markets (merchant je nemůže upravit) a garance platí pouze pro kvalifikované prepaid štítky FedEx a DHL Express nakoupené přes Managed Markets. Pokud merchant chce použít vlastní rates, funkci pro daný market vypne, čímž garanci nákladů na štítky ztrácí.

Changelog neuvádí seznam podporovaných zemí, přesná pravidla způsobilosti ani způsob rozdělení nákladů mezi ceny produktů a shipping v checkoutu. Zadání zmiňuje i krytí cla a daní platformou, to ale z textu changelogu nevyplývá (týká se předchozí funkce duty-inclusive pricing).

## Časová osa

- 2026-10-24 — Shopify changelog oznamuje guaranteed flat-rate shipping v Managed Markets
- Datum obecné dostupnosti a seznam podporovaných destinací changelog neuvádí

## Dopad pro nás

**Pro vývojáře:** Změna je merchant-facing nastavení v Shopify admin (Markets, sekce Managed Markets) a changelog nezmiňuje žádné nové API, mutation ani scope. Nepřímý dopad se může projevit u objednávek z Managed Markets, kde shipping lines a payout data vznikají podle pravidel Managed Markets, ne podle vlastních shipping rates obchodu. Pokud merchant používá custom reporting, ERP nebo fulfillment integraci, je vhodné ověřit, jak se zpracovává rozdělení nákladů na dopravu mezi cenu produktu a shipping v checkoutu, a to zejména u marketů s Managed Markets. Rates nastavuje Managed Markets a merchant je nemůže ručně upravit. Související tematika vlastních rates per market je v [market-driven shipping Admin API](/Shopify_news_magexo/zmena/market-driven-shipping-admin-api/).

**Pro PM / PO:** Příležitost pro merchanty, kteří prodávají do zahraničí z USA, UK či Kanady (podle dostupnosti Managed Markets) nebo to zvažují. Předvídatelná cena dopravy snižuje friction a opuštěné košíky u cross-border zákazníků a garance nákladů na štítky odstraňuje riziko dodatečných poplatků od dopravce. Trade-off je ztráta kontroly nad rates a závislost na duty-inclusive pricing. Při zvažování nasazení doporučujeme využít náhled cen a payouts pro konkrétní markets a porovnat marži s dosavadními vlastními rates. Nalehavost je nízká, jde o opt-in funkci bez deadline.

## Použití v Integrátoru

Přímý technický dopad je nízký, protože jde o konfiguraci v admin bez nového API. Relevance je konzultační: u cross-border projektů s Managed Markets je vhodné počítat s tím, že shipping rates spravuje Shopify a merchant je nemůže ručně upravit. Zda a jak se funkce chová ve spojení s vlastními carrier services, changelog neuvádí a je potřeba to ověřit.
