---
date: 2026-10-27
title: "Dev Dashboard: manage payouts + billing + settings na jednom místě"
title_en: "Manage payouts, billing, and settings in Dev Dashboard"
slug: manage-payouts-billing-dev-dashboard
zdroj: https://shopify.dev/changelog/posts/manage-partner-payouts-billing-and-settings-from-organization-settings
shrnuto_dne: 2026-11-02
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-24
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše partnerská organizace spravuje výplaty, fakturaci a Partner API clients, všechno to je teď v Dev Dashboardu pod Organization settings, takže se mění místo, kde to hledáme."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-developer", "new-dev-dashboard-command-center", "partner-details-collaborator-requests", "partner-identity-verification"]
tldr: "Shopify přesunul z Partner Dashboardu do Dev Dashboardu firemní údaje partnera, výplaty, billing a zbylá nastavení; najdete je pod Organization settings a stávající partneři nemusí nic dělat."
tagy: [dev-dashboard, partners, payouts, billing, organization, settings]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v dev changelogu z 27. října 2026 oznámil, že firemní údaje partnera, výplaty, billing a zbývající nastavení z Partner Dashboardu se přesunuly do Dev Dashboardu pod položku Organization settings. Přesun je účinný od 24. října 2026, takže changelog popisuje stav, který už platí. Odkazy Settings a Payouts v Partner Dashboardu i payout widget na úvodní stránce teď vedou do Dev Dashboardu. Nově registrovaní partneři dokončují business verification přímo tam jako součást setupu.

    Změna je pokračováním konsolidace, kterou Shopify rozjel v září 2026 přepracováním Dev Dashboardu. Už tehdy v archivu popisujeme, že payouts a billing na úrovni organizace jsou zatím jen avizované. Editions Fall '26 pak v developer části uvádí Dev Dashboard jako místo pro správu apps a stores včetně billingu a výplat. Tento přesun je tedy první konkrétní dodávka té části slibu, která se týká peněz a administrativy organizace. Zároveň zapadá do širší linie, kdy Shopify z Partner Dashboardu postupně vyvádí funkce, například sledování admin web vitals nebo app events.

    Pro stávající partnery je dopad nízký, protože Shopify uvádí, že nastavení výplat a billingu bylo zmigrováno beze změny a není nutná žádná akce. Praktický dopad je hlavně navigační: kdo ví, kde dříve hledal faktury, platební metody nebo payout history, musí si zvyknout na novou cestu. Zdrojový changelog zmiňuje pouze Partner Dashboard jako původní místo těchto funkcí, o dalších rozhraních se nezmiňuje.
  zdroje:
    - title: "Shopify: Manage payouts, billing, and settings in Dev Dashboard"
      url: "https://shopify.dev/changelog/posts/manage-partner-payouts-billing-and-settings-from-organization-settings"
    - title: "Shopify Docs: Migrate from Partner Dashboard to Dev Dashboard"
      url: "https://shopify.dev/docs/apps/build/dev-dashboard/migrate-from-partners"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Nový Dev Dashboard — jeden home pro apps a stores"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/new-dev-dashboard-command-center/"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify přesunul z Partner Dashboardu do **Dev Dashboardu** zbylou administrativní část partnerského účtu. Pod položkou **Organization settings** je teď:

- **Organization details** — firemní a kontaktní údaje, emergency contact, registrace v App Store a Partner ID.
- **Payouts** — nastavení výplat, jejich historie, transakce a payout methods.
- **Partner billing** — bills, ad invoices, platební metody, poznámky k fakturám a ad credits.
- **Users > Security** — Partner API clients.

K nastavení se dostanete tak, že otevřete Dev Dashboard na `dev.shopify.com/dashboard`, vyberete organizaci a otevřete Organization settings. Odkazy **Settings** a **Payouts** v Partner Dashboardu a payout widget na jeho úvodní stránce se přesunuly do Dev Dashboardu.

Nově registrovaní partneři dokončují **business verification** v Organization settings už během setupu. Stávajícím partnerům Shopify nastavení výplat a billingu zmigroval beze změny a podle changelogu není potřeba žádná akce. U changelogu není uvedena žádná verze API ani dotčené API, jediná technická položka jsou Partner API clients v sekci Users > Security.

## Časová osa

- **25. září 2026** — spuštěn přepracovaný Dev Dashboard, payouts a billing na úrovni organizace jsou tehdy jen avizované.
- **24. října 2026** — přesun Settings, Payouts a payout widgetu z Partner Dashboardu do Dev Dashboardu je účinný.
- **27. října 2026** — Shopify vydává changelog k přesunu.
- **28. října 2026** — Editions Fall '26 uvádí Dev Dashboard jako místo pro správu apps a stores včetně billingu a výplat.
- **Připravované (coming soon podle Editions)** — listings, pricing a spouštění reklam na aplikace přímo v Dev Dashboardu.

## Dopad pro nás

**Pro vývojáře:** Nic se nemusí migrovat ani přepisovat. Jediná technická položka je správa Partner API clients, která je nově v Organization settings pod Users > Security. Pokud používáme Partner API, vyplatí se ověřit, že víme, kde se tyto přístupy spravují, a že odkazy v našich interních postupech nevedou na starou cestu přes Partner Dashboard.

**Pro PM / PO:** Kdo u nás řeší výplaty z App Store, faktury, platební metody nebo ad credits, najde je teď v Dev Dashboardu. Stojí za to aktualizovat interní záložky a návody, které odkazují na Settings nebo Payouts v Partner Dashboardu, a říct o změně kolegům z finance, pokud k těmto údajům přistupují. Jde o změnu interního nástroje bez dopadu na naše zákazníky, takže nalehavost je nízká.

## Použití v Integrátoru

Přímý technický dopad na Integrátor není, změna se týká správy partnerské organizace, ne API ani datového modelu apps. Relevance je provozní: platí jen tam, kde pracujeme s Partner API clients nebo kde se řeší výplaty a billing partnerského účtu.
