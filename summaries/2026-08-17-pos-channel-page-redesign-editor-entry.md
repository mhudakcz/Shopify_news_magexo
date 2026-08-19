---
date: 2026-08-17
title: "Redesign POS channel page — nový vstup do POS editoru + analytics widgety"
title_en: "A redesigned Point of Sale channel page with an easy entry point to the POS editor"
slug: pos-channel-page-redesign-editor-entry
zdroj: https://changelog.shopify.com/posts/a-redesigned-point-of-sale-channel-page-with-an-easy-entry-point-to-the-pos-editor
shrnuto_dne: 2026-08-19
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-17
pouzivame_v_integratoru: ne
dukaz_integratoru: "Jde o redesign UI stránky POS kanálu v Shopify adminu, žádné nové API ani datový endpoint — integrace není dotčena."
dotcene_klienty: []
souvisejici: [new-pos-editor, enhanced-printed-receipt-editor-pos, unified-pos-staff-management]
tldr: "Shopify přepracoval stránku POS kanálu v adminu — přidal Customize sekci s náhledem lock screenu a účtenek, analytics widgety (tržby, objednávky, slevy, vratky) a přímé odkazy na staff a location management."
tagy: [pos, admin, redesign, editor, analytics, retail, staff, locations]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Stránka POS kanálu v Shopify adminu dosud sloužila hlavně jako rozcestník s odkazy do podmenu — merchant musel proklikat několik úrovní, než se dostal k nastavení vzhledu pokladny nebo k přehledu výkonu prodejny. Chyběl rychlý přehled toho, jak se obchodu v kamenné prodejně daří, i jednoduchá cesta k úpravě zákaznického zážitku na pokladně.

    Redesign přidává na hlavní stránku POS kanálu novou Customize sekci, která zobrazuje živý náhled lock screenu, customer display a účtenek s jedním kliknutím do POS editoru — bez nutnosti procházet vnořená submenu. Vedle toho přibyl analytics blok s hrubými tržbami, počtem objednávek, slevami a vratkami za dnešek, posledních 7 nebo 30 dní, včetně filtrování podle konkrétní pobočky u multi-location retailerů. Každá metrika má přímý odkaz na detailní report a analytics data se zobrazí jen zaměstnancům s příslušným oprávněním.

    Doplňkově stránka nabízí rychlé odkazy na správu staffu a poboček a QR kód pro stažení Shopify POS aplikace pro merchanty, kteří ještě nemají nakonfigurované žádné zařízení. Jde čistě o změnu v Shopify adminu — nepřidává nové GraphQL objekty ani pole, jen zpřehledňuje existující funkce na jedné stránce.
  zdroje:
    - title: "Shopify: A redesigned Point of Sale channel page with an easy entry point to the POS editor"
      url: "https://changelog.shopify.com/posts/a-redesigned-point-of-sale-channel-page-with-an-easy-entry-point-to-the-pos-editor"
  generated_at: 2026-08-19T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Stránka Point of Sale kanálu v Shopify adminu prochází vizuálním i funkčním redesignem. Nejviditelnější novinkou je Customize sekce, která ukazuje živý náhled toho, jak aktuálně vypadá lock screen, customer display a tištěné účtenky v prodejně — a jedním klikem otevře přímo POS editor, bez nutnosti se prokousávat přes několik úrovní submenu jako dosud.

Druhou hlavní změnou je analytics blok přímo na hlavní stránce kanálu: hrubé tržby, počet objednávek, slevy a vratky, s možností přepínat mezi dneškem, posledními 7 a 30 dny. Multi-location retaileři si mohou data filtrovat podle konkrétní pobočky, a každá metrika vede jedním klikem na plný detailní report v Analytics. Zobrazení dat je ale podmíněné — zaměstnanec musí mít nastavené oprávnění k analytics, jinak sekci nevidí.

Stránka dál nabízí zjednodušený přístup ke správě staffu a poboček (bez nutnosti procházet Settings) a pro obchody, které ještě nemají zprovozněné žádné POS zařízení, přibyl QR kód pro rychlé stažení Shopify POS aplikace. Celkově jde o konsolidaci — stejné funkce, které dřív byly rozeseté po submenu, jsou teď dostupné z jednoho místa s vizuálním přehledem.

## Časová osa

- 2026-08-17 — redesign POS channel page publikován v Merchant changelogu, dostupný pro všechny uživatele POS kanálu

## Dopad pro nás

**Pro vývojáře:** Žádný zásah do kódu ani API — jde čistě o redesign existující stránky v Shopify adminu. Nepřidávají se nové GraphQL objekty, pole ani webhooky, takže žádná integrace ani custom vývoj tímto není dotčen.

**Pro PM / PO:** Užitečné vědět pro komunikaci s retail klienty, zejména těmi s vlastní prodejnou nebo více pobočkami — nová stránka jim usnadní každodenní kontrolu tržeb a rychlý přístup k úpravě vzhledu pokladny, aniž by museli hledat v submenu. Stojí za zmínku v rámci obecného retail/POS onboardingu, ne jako feature vyžadující akci z naší strany.

## Použití v Integrátoru

Nepoužíváme — jde o čistě administrativní redesign stránky v Shopify adminu bez dopadu na API nebo datové toky, které bychom integrovali.
