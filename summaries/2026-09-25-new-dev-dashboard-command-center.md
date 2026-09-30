---
date: 2026-09-25
title: "Nový Dev Dashboard — jeden home pro apps a stores, na kterých pracujete"
title_en: "The new Dev Dashboard: your command center for building"
slug: new-dev-dashboard-command-center
zdroj: https://shopify.dev/changelog/blog/the-new-dev-dashboard
shrnuto_dne: 2026-09-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-09-25
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Dev Dashboard se stává hlavním místem pro logy, chyby a metriky našich apps napříč všemi nainstalovanými stores, takže se hodí při ladění a monitoringu."
dotcene_klienty: []
souvisejici: [monitor-admin-web-vitals-dev-dashboard, app-events-dev-dashboard, shopify-cli-create-delete-dev-stores]
tldr: "Shopify spustil přepracovaný Dev Dashboard na dev.shopify.com/dashboard, který sjednocuje přehled apps, stores, logů a metrik na jednom místě; payouts, billing a referral stores teprve přibudou."
tagy: [dev-dashboard, partner-dashboard, developer-experience, tooling, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Vývojáři a agentury, které pracují se Shopify, si dlouhodobě stěžovaly na roztříštěné prostředí. Přehled o apps, development stores, client stores a výplatách byl rozložen mezi Partner Dashboard, admin jednotlivých obchodů a různé další nástroje, takže běžná otázka typu co dnes potřebuje moji pozornost vyžadovala několik přepnutí kontextu.

    Dev Dashboard existuje už delší dobu a Shopify do něj v uplynulých měsících postupně přesouval jednotlivé funkce. Už v květnu a červnu 2026 jsme psali o sledování admin web vitals a o app events, které se přesunuly do Dev Dashboardu z Partner Dashboardu. Nový redesign je logické završení tohoto trendu: z Dev Dashboardu dělá jednotný home pro vše, na čem vývojář pracuje.

    Nová verze stojí na čtyřech pilířích. Home odpovídá na otázky jak se mi daří a co potřebuje pozornost, Apps index ukazuje portfolio aplikací s revenue, instalacemi a alerty, Stores index sjednocuje client, development a collaborator stores a Logs nabízejí historii API requestů, webhook deliveries a app events napříč všemi nainstalovanými stores. Další části, například správa payouts a billingu na úrovni organizace, referral stores s přehledem výdělků a vyřizování protected scope requestů, Shopify teprve dodá.
  zdroje:
    - title: "Shopify: The new Dev Dashboard: your command center for building"
      url: "https://shopify.dev/changelog/blog/the-new-dev-dashboard"
  generated_at: 2026-09-30T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify 25. září 2026 spustil redesignovaný **Dev Dashboard** dostupný na `dev.shopify.com/dashboard`. Cílem je sloučit do jednoho rozhraní správu apps a stores, které dosud vývojáři řešili v několika různých nástrojích. Nový dashboard se skládá z těchto částí:

- **Home** — centrální přehled, který odpovídá na otázky jak se daří mému byznysu a co potřebuje pozornost. Zobrazuje revenue napříč celým portfoliem (s respektováním stávajících oprávnění), tabulku business statusu s prioritou chyb a varování z apps i stores a integrovaný developer changelog s novinkami k API.
- **Apps index** — sortable seznam všech apps s revenue, počtem instalací, stavem distribuce a alerty. Detail každé app ukazuje trendy revenue, vývoj instalací a uninstalls, objem API requestů a error rate. Error rate se vykresluje proti objemu requestů, takže je vidět kontext (pár chyb při malém provozu vs. skutečný problém). Z grafů se dá jedním klikem přeskočit na odpovídající logy.
- **Stores index** — jednotný seznam client stores, development stores a collaborator stores s vyhledáváním a filtrováním. Žádost o přístup do store lze odeslat přímo ze seznamu, bez opuštění stránky.
- **Logs** — kompletní historie API requestů, webhook deliveries a app events napříč všemi nainstalovanými stores, s označením chyb a filtrováním. Logy se uchovávají 30 dní, query okno je 7 dní a Shopify slibuje svižnější navigaci než dřív.

Shopify zároveň oznámil, co teprve přijde:

- **Apps** — kompletní správa app tasků na jednom místě, historie změn app a možnost žádat o přístup k protected scopes přímo z Dev Dashboardu.
- **Stores** — přehled referral stores včetně sledování výdělků.
- **Organization** — správa payouts a billingu.

Změna se zapíná automaticky, není potřeba nic nastavovat. Zpětnou vazbu Shopify sbírá v Shopify Dev Community a dokumentace je na `shopify.dev/docs/apps/build/dev-dashboard`.

## Časová osa

- **25. září 2026** — nový Dev Dashboard je dostupný na `dev.shopify.com/dashboard`, rollout proběhl automaticky pro všechny vývojáře.
- **Připravované (bez termínu)** — app tasks a app history, žádosti o protected scopes, referral stores s earnings a správa payouts a billingu na úrovni organizace.

## Dopad pro nás

**Pro vývojáře:** Stojí za to Dev Dashboard projít a zařadit ho do běžného workflow. Největší praktický přínos jsou **Logs** — API requesty, webhook deliveries a app events napříč všemi stores na jednom místě se 30denní retencí a filtrováním podle chyb usnadní ladění problémů, které se objevují jen u některých instalací. Error rate proti objemu requestů pomůže rychle odlišit skutečný problém od šumu. Pokud dosud sledujeme admin web vitals nebo app events v Dev Dashboardu, hodí se mít vše pod jednou střechou včetně changelogu s novinkami k API. Sledujeme také, kdy dorazí protected scope requests, protože ty dnes vyžadují oddělený proces.

**Pro PM / PO:** Dashboard dává rychlý přehled o portfoliu apps a stores (revenue, instalace, alerty) bez přepínání mezi nástroji a vyplatí se jako podklad pro pravidelné review stavu apps. Bez přímého dopadu na klienty, jde o změnu interního vývojářského nástroje. Payouts, billing a referral stores jsou zatím jen oznámené, takže pro finanční přehledy zůstává nutné používat stávající místa, dokud je Shopify nedodá.

## Použití v Integrátoru

Přínos je hlavně v monitoringu a ladění — centrální logy a error rate nad našimi apps napříč stores zrychlí diagnostiku; zatím stačí dashboard vyzkoušet a případně doplnit do týmové checklistu pro troubleshooting.
