---
date: 2026-10-28
title: "App Pricing: Plan Feature Targeting — nabídni feature jen merchantům co ji skutečně potřebují"
title_en: "Shopify App Pricing: Plan Feature Targeting"
slug: app-pricing-plan-feature-targeting
zdroj: https://shopify.dev/changelog/posts/plan-feature-targeting
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Požadavky na schopnosti obchodu se týkají vývojářů public apps s plány v Shopify App Pricing. Naše integrace běží jako custom apps pro jednotlivé projekty bez App Store billingu, takže je to relevantní jen referenčně, případně při doporučování placených apps třetích stran."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "app-pricing-unlimited-private-plans-target-stores", "app-pricing-move-existing-subscriptions", "app-pricing-more-plans-fractional-events"]
tldr: "Partneři mohou u public plánů v Shopify App Pricing nastavit povinné schopnosti obchodu (zatím checkout UI extensions na všech stránkách a branding, nebo přímé katalogy firem pro B2B); obchod, který je nemá, si plán nevybere, protože tlačítko pro výběr je zakázané. Stávající subscriptions, private plans a poplatky přes Billing API se nemění."
tagy: [app-pricing, plans, targeting, monetization, partners]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify App Pricing je nativní monetizační vrstva pro aplikace v Shopify App Store. Vývojář v Partner Dashboardu definuje plány a Shopify se stará o jejich zobrazení, výběr, schvalování poplatků a fakturaci. Public plány vidí všichni merchanti v App Store a na stránce výběru plánu, private plány jsou určené jen pro vybrané obchody. Dosud neměl partner jak zabránit tomu, aby si merchant předplatil plán, jehož hlavní přínos v jeho obchodě nemůže fungovat, například plán postavený na checkout rozšířeních v obchodě, kde je tyto rozšíření nelze použít na všech krocích checkoutu.

    Nová funkce, kterou Shopify zveřejnil 28. 10. 2026 v dev changelogu s příznakem New a bez nutné akce, přidává do editoru plánů v Partner Dashboardu sekci Store requirements pro public plány. Požadavky jsou volitelné a changelog uvádí dvě: Checkout UI extensions (all pages) and branding customizations, tedy schopnost obchodu používat aplikační úpravy na každém kroku checkoutu, a Direct company catalogs (B2B), tedy schopnost přiřazovat katalogy přímo B2B zákazníkům. Shopify požadavky ověřuje dvakrát, na stránce výběru plánu a znovu ve chvíli, kdy merchant schvaluje poplatek. Na stránce výběru je tlačítko pro výběr plánu u nekvalifikovaných obchodů zakázané a zpráva uvádí, která schopnost chybí.

    Funkce navazuje na dřívější kroky App Pricing, hlavně na zrušení limitů pro private plány a jejich cílení na konkrétní obchody z 21. 9. 2026 a na self-service migraci existujících subscriptions z 29. 9. 2026. Zatímco private plány cílí na pojmenované obchody, požadavky na schopnosti cílí podle toho, co obchod technicky umí, a tím doplňují tier-based packaging bez vlastní logiky v aplikaci. Editions Fall '26 ji v Developer tématu uvádí jako požadavky plánů na schopnosti obchodu, tehdy ještě bez samostatného článku. Dopad je v tom, že merchant nenarazí na plán, který si koupí a pak nemůže využít, a partner snáz poskládá cenové úrovně podle schopností obchodu. Zároveň je dobré počítat s tím, že nepřihlášení návštěvníci App Store dál vidí všechny public plány, takže omezení se projeví až při výběru plánu.
  zdroje:
    - title: "Shopify: Shopify App Pricing: Plan Feature Targeting"
      url: "https://shopify.dev/changelog/posts/plan-feature-targeting"
    - title: "Shopify Dev Docs: Plans in Shopify App Pricing — Store requirements"
      url: "https://shopify.dev/docs/apps/launch/billing/shopify-app-pricing/plans#store-requirements"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26 — Developer"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-developer/"
    - title: "Archiv: Shopify App Pricing — neomezené private plans a store-specific targeting"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-unlimited-private-plans-target-stores/"
    - title: "Archiv: Migrace stávajících subscriptions na Shopify App Pricing"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-pricing-move-existing-subscriptions/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění
Partneři mohou v **Shopify App Pricing** přidat k **public plánům** požadavky na schopnosti obchodu (**Store requirements**). Obchod, který požadovanou schopnost nemá, si takový plán nemůže předplatit. Požadavky jsou volitelné a nastavují se v editoru plánu v Partner Dashboardu.

Aktuálně lze zvolit tyto požadavky:

- **Checkout UI extensions (all pages) and branding customizations** — obchod může používat aplikační úpravy na každém kroku checkoutu.
- **Direct company catalogs (B2B)** — obchod může přiřazovat katalogy přímo svým B2B zákazníkům.

Jak se požadavky vynucují:

- Shopify je kontroluje na **stránce výběru plánu** a podruhé při **schvalování poplatku** merchantem.
- Na stránce výběru je u plánů, na které obchod nemá nárok, **tlačítko pro výběr zakázané** a zpráva pojmenuje chybějící schopnost.
- Plán tedy z nabídky nezmizí, jen ho nelze zvolit. Nepřihlášení návštěvníci App Store dál vidí všechny public plány.

Co se nemění:

- **Private plány** a poplatky vytvořené přes **Billing API** požadavky neovlivňují.
- **Existující subscriptions** zůstávají beze změny, i když se požadavek k plánu přidá později. Pokud merchant subscription zruší, musí pro její obnovení splnit aktuální požadavky.

Postup pro partnera: otevřít editor public plánu, v sekci Store requirements vybrat potřebné schopnosti, uložit a vyzkoušet stránku výběru plánu z obchodu, který schopnost nemá (tlačítko je zakázané a zpráva uvádí chybějící schopnost).

## Časová osa
- **21. 9. 2026** — zrušeny limity pro private plány a jejich cílení na konkrétní obchody (předchozí krok App Pricing).
- **29. 9. 2026** — self-service migrace existujících subscriptions z Billing API na App Pricing.
- **28. 10. 2026** — zveřejněno v dev changelogu a účinné od 12:00 ET; příznak New, bez nutné akce; stejný den ji Editions Fall '26 uvádí v Developer tématu jako požadavky plánů na schopnosti obchodu.
- **Od teď** — požadavky lze přidávat k public plánům; dopad na existující subscriptions nemají.

## Dopad pro nás
**Pro vývojáře:** Naše integrace běží jako custom apps pro jednotlivé projekty mimo App Store, takže App Pricing ani Store requirements přímo nenastavujeme. Pokud bychom někdy publikovali vlastní public app s plány, stojí za zapamatování, že požadavky platí jen pro public plány v App Pricing a ne pro poplatky vytvořené přes Billing API, a že před nasazením je třeba ověřit chování z obchodu bez dané schopnosti.

**Pro PM / PO:** Žádná akce není potřeba. Prakticky se to hodí při doporučování a instalaci placených apps třetích stran: pokud je u plánu tlačítko pro výběr zakázané, nejde o chybu aplikace, ale o to, že obchod nemá schopnost, kterou plán vyžaduje (například úpravy na všech krocích checkoutu nebo přímé B2B katalogy). Tuto informaci je dobré mít při plánování rozsahu a rozpočtu projektu, protože může znamenat jiný plán aplikace nebo jiný plán Shopify.

## Použití v Integrátoru
**Možná** — přímý dopad nemá, protože naše integrace nejsou public apps s plány v App Pricing. Slouží jen jako referenční informace pro případnou vlastní monetizovanou aplikaci a jako vysvětlení, proč si obchod u cizí aplikace nemůže vybrat určitý plán.
