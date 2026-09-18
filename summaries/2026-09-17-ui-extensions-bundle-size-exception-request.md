---
date: 2026-09-17
title: "UI extensions: možnost požádat o bundle size exception pro stávající extensions"
title_en: "Request a bundle size exception for existing UI extensions"
slug: ui-extensions-bundle-size-exception-request
zdroj: https://shopify.dev/changelog/request-a-bundle-size-exception-for-existing-ui-extensions
shrnuto_dne: 2026-09-18
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-09-17
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud má některý starší admin/checkout/customer account extension velký bundle, může narazit na nový limit a bude potřeba požádat o výjimku."
dotcene_klienty: []
souvisejici: [shopify-ai-toolkit-polaris-migration, build-app-home-ui-extension, polaris-web-components-migration-guides]
tldr: "Existing UI extensions, které přesahují nový bundle size limit, mohou nově požádat o dočasnou nebo trvalou výjimku přes formulář, než limit ostře nastane."
tagy: [admin-extensions, bundle-size, ui-extensions, apps]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify od API verze 2025-10 zpřísnilo limity na velikost zkompilovaného JavaScriptového bundlu UI extensions: běžné extensions (admin, checkout, POS) mají strop 64 KB po kompresi, full page customer account extensions pak 128 KB. Limity mají zajistit rychlé načítání a stabilní výkon napříč adminem, checkoutem i zákaznickým účtem, kde běží desítky extensions od různých aplikací zároveň v jednom sdíleném prostředí.

    Problém nastává u extensions vzniklých před zavedením limitu — starší kód často obsahuje těžké knihovny, duplicitní závislosti nebo vlastní překladové řetězce místo nativních lokalizačních API, takže po zkompilování snadno limit přesáhne. Shopify proto otevřel formální proces žádosti o výjimku: vývojář spustí `shopify app build`, získá esbuild metafile popisující složení bundlu a spolu s minifikovaným výstupem ho nahraje přes Google Form. Shopify žádost vyhodnotí a výjimku (dočasnou nebo trvalou) schválí jen tehdy, pokud je nadváha bundlu opodstatněná — ne způsobená zbytnými knihovnami nebo redundantním kódem, který lze odstranit podle návodu k optimalizaci bundle size.

    Proces žádosti o výjimku běží souběžně s tvrdším deadlinem: od 1. října 2026 musí všechny existující UI extensions běžet na API verzi 2026-01 nebo novější, jinak je nebude možné nasadit. Výjimka na velikost bundlu tedy neruší povinnost migrovat na novou API verzi — řeší jen to, aby migrace sama o sobě nezpůsobila okamžité rozbití aplikace kvůli přísnějšímu limitu.
  zdroje:
    - title: "Shopify: Request a bundle size exception for existing UI extensions"
      url: "https://shopify.dev/changelog/request-a-bundle-size-exception-for-existing-ui-extensions"
    - title: "Shopify Docs: Optimize bundle size for UI extensions"
      url: "https://shopify.dev/docs/apps/build/app-extensions/optimize-bundle-size"
  generated_at: 2026-09-18T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify otevřel formální kanál, přes který si vývojáři existujících UI extensions mohou požádat o výjimku z nového limitu na velikost bundlu. Limit platí pro extensions na API 2025-10 a novější: 64 KB komprimovaného JavaScriptu pro standardní extensions (admin, checkout, POS), 128 KB pro full page customer account extensions. Žádost se podává vyplněním Google Form, ke kterému je potřeba přiložit minifikovaný bundle vygenerovaný příkazem `shopify app build` a esbuild metafile popisující, z čeho se bundle skládá.

Shopify výslovně upozorňuje, že výjimku neschválí automaticky. Pokud metafile ukáže, že nadváhu způsobují zbytečně velké knihovny, duplicitní balíčky nebo vlastní i18n řešení místo nativních lokalizačních API, žádost bude zamítnuta s doporučením nejdřív bundle optimalizovat podle oficiálního návodu. Výjimka (dočasná nebo trvalá) je tedy myšlená jako záchranná brzda pro případy, kdy je velikost objektivně nutná, ne jako obecný způsob, jak se limitu vyhnout natrvalo.

## Časová osa

- **17. 9. 2026** — changelog zveřejněn, formulář pro žádost o výjimku dostupný
- **18. 9. 2026** — účinnost změny
- **1. 10. 2026** — tvrdý deadline: existující UI extensions musí běžet na API 2026-01 nebo novější, jinak je nelze nasadit

## Dopad pro nás

**Pro vývojáře:** Pokud u některé extension řešíme migraci na novější API verzi (viz související AI Toolkit migrace na Polaris web components) a build začne po přechodu selhávat na limitu velikosti, nejdřív je namístě projít optimalizační návod (tree-shaking, odstranění nepoužitých závislostí, nativní lokalizace) a teprve poté zvážit žádost o výjimku přes formulář — schválení není automatické a vyžaduje zdůvodnění.

**Pro PM / PO:** Jde o nízkou naléhavost a čistě vývojářský proces bez dopadu na obchodníka. Relevantní je jen v kombinaci s blížícím se deadlinem 1. 10. 2026 na migraci API verze — pokud by migrace u některého projektu odhalila bundle nad limitem, tahle výjimka je legitimní pojistka proti výpadku funkčnosti.

## Použití v Integrátoru

V současné době nemáme žádnou vlastní admin/checkout/customer account UI extension, která by se blížila novému limitu velikosti bundlu, takže žádost o výjimku aktuálně neřešíme. Relevantní by se stala jen v okamžiku, kdy by nás blížící se deadline API 2026-01 donutil migrovat starší extension a ta by po přebuildění limit přesáhla.
