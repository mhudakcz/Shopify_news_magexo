---
date: 2026-06-17
title: "Product listings podporují disclosures field — Prop 65 warnings, choking hazards"
title_en: "Product listings now support a disclosures field (Prop 65, choking hazards)"
slug: product-listings-disclosures-field
zdroj: https://changelog.shopify.com/posts/product-listings-now-support-a-disclosures-field
shrnuto_dne: 2026-06-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrujeme produktová data do externích systémů nebo custom storefrontů, může být potřeba předávat i disclosure metafieldy pro správné zobrazení varování na product detail pages."
dotcene_klienty: []
souvisejici:
  - "product-unavailable-buyer-location-warning"
  - "access-field-standardmetaobjectdefinitiontemplate"
  - "inventory-transfer-metafields-admin-api"
tldr: "Shopify přidal strukturované disclosures field na product listings — merchant může přímo v adminu nastavit California Prop 65 varování a choking hazard upozornění uložená jako product metafieldy."
tagy: [product, compliance, disclosures, prop-65, metafield]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify nově podporuje strukturovaný disclosures field na product listings. Jde o mechanismus, který merchantům umožňuje přidávat právně vyžadovaná varování přímo ke konkrétním produktům — bez nutnosti vkládat text do popisů nebo řešit zobrazení přes custom kód. Podporovány jsou built-in typy: California Proposition 65 warnings (varování o chemických látkách způsobujících rakovinu nebo poškození reprodukce) a choking hazard notices (upozornění pro produkty nebezpečné pro děti do 3 let).

    Vznik funkce reflektuje regulatorní realitu zejména pro merchants prodávající do USA. California Prop 65 (Safe Drinking Water and Toxic Enforcement Act) vyžaduje viditelné varování na produktech obsahujících nebezpečné látky — porušení může vést k pokutám. Choking hazard labeling je federální požadavek pro hračky a předměty s malými částmi. Shopify reaguje na dlouhodobou potřebu merchants mít toto řešené nativně platformou, nikoliv workaroundy.

    Disclosures jsou uloženy jako product metafieldy a zobrazují se automaticky na product detail pages u podporovaných Online Store themes v nové sekci Disclosures. Custom storefronts a témata bez nativní podpory mají přístup k metafieldům a mohou varování renderovat manuálně. Odpovědnost za určení, kdy je disclosure právně vyžadována a jaký obsah má obsahovat, zůstává na merchantovi.

    Pro integrátory a vývojáře custom storefrontů to znamená, že pokud jejich implementace čte a zobrazuje produktová data, měla by počítat s existencí těchto metafieldů a správně je předávat nebo renderovat — zejména u merchantů prodávajících zboží podléhající regulaci v USA.
  zdroje:
    - title: "Shopify: Product listings now support a disclosures field (Prop 65, choking hazards)"
      url: "https://changelog.shopify.com/posts/product-listings-now-support-a-disclosures-field"
    - title: "Shopify Help Center: Product Disclosures"
      url: "https://help.shopify.com/manual/products/product-disclosures"
  generated_at: 2026-06-18T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify přidal na product listings nový strukturovaný **disclosures field**, který umožňuje merchantům spravovat právní varování přímo v Shopify admin. Doposud museli varování vkládat do popisů produktů nebo řešit zobrazení vlastním kódem — nyní existuje nativní, strukturovaný způsob.

Podporované typy disclosures:

- **California Proposition 65** — varování o chemických látkách způsobujících rakovinu nebo poškození reprodukčního systému (povinné pro prodej do Kalifornie)
- **Choking hazard** — upozornění pro produkty s malými částmi nebo pro děti do 3 let (federální požadavek USA)
- Vlastní/custom disclosures pro další typy varování specifických pro produkt

Technicky jsou disclosures uloženy jako **product metafieldy**. Na podporovaných Online Store themes se na product detail page automaticky zobrazí nová sekce Disclosures. Custom storefronts a nepodporovaná témata mohou metafieldy číst a renderovat manuálně.

Merchant je odpovědný za to, kdy a jaký disclosure text vyplní — Shopify pouze poskytuje infrastrukturu pro uložení a zobrazení.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-17 | Funkce dostupná pro všechny merchants |

Jde o okamžitě dostupnou funkci bez přechodového období nebo breaking change.

## Dopad pro nás

Funkce je primárně merchant-facing a customer-facing (varování se zobrazují zákazníkům na product detail pages). Pro agenturu to znamená:

- Při budování nebo upgradu **custom storefrontů** pro klienty prodávající do USA je vhodné zkontrolovat, zda implementace čte a zobrazuje disclosure metafieldy.
- U **Online Store themes** (Liquid) podpora přichází automaticky u témat, která Shopify označí jako kompatibilní — starší nebo custom témata mohou vyžadovat ruční přidání sekce.
- Pro klienty s produkty podléhajícími Prop 65 nebo choking hazard regulaci jde o relevantní novou možnost — zejména pokud dosud řešili varování jako hack v popisech.

## Použití v Integrátoru

Pokud integrujeme produktová data mezi Shopify a externími systémy (ERP, PIM, marketplace feed), měli bychom disclosure metafieldy zahrnout do mapování. U headless/custom storefront projektů je nutné explicitně fetchovat a renderovat tyto metafieldy, aby se varování zákazníkům zobrazila správně.

Priorita pro stávající projekty: nízká, pokud klienti neprodávají do USA nebo nemají produkty s Prop 65/choking hazard povinností.
