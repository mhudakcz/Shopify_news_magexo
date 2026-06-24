---
date: 2026-06-22
title: "Staff attribution v POS automaticky zapnuto pro stores bez prior configurace"
title_en: "Staff attribution improvements in POS"
slug: staff-attribution-pos-improvements
zdroj: https://changelog.shopify.com/posts/staff-attribution-improvements-in-pos
shrnuto_dne: 2026-06-23
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-22
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Integrátor synchronizuje objednávky a data zaměstnanců — staff attribution data mohou ovlivnit reporting a commission tracking při exportu POS orderů."
dotcene_klienty: []
souvisejici: ["unified-pos-staff-management", "pos-v11-rebuild-deep-dive", "2026-06-04-new-pos-editor"]
tldr: "Od 6. července 2026 Shopify automaticky aktivuje staff attribution pro POS stores bez vlastní konfigurace — prodeje se přiřadí přihlášenému zaměstnanci bez extra kroků při checkoutu."
tagy: [pos, staff, attribution, sales-tracking]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Staff attribution je funkce Shopify POS, která umožňuje přiřadit každý prodej konkrétnímu zaměstnanci. Obchodníci ji využívají ke sledování výkonu prodejního týmu, výpočtu provizí a sestavování reportů o aktivitě jednotlivých pracovníků na prodejně.

    Doposud bylo nutné attribution buď ručně nakonfigurovat, nebo zaměstnanec musel provést extra krok přímo při checkoutu. Stores, které tuto funkci neměly explicitně nastavenou, o tato data přicházely — i když měly zaměstnance v systému přihlášeného.

    Od 6. července 2026 Shopify automaticky zapne staff attribution pro všechny eligible stores, které dosud neupravovaly attribution nastavení. Prodeje budou automaticky přiřazeny přihlášenému zaměstnanci bez jakéhokoli zásahu při pokladně. Stores s vlastní konfigurací zůstávají beze změny. Nová verze POS v11.9 navíc přinesla redesignovaný staff picker s lepším vyhledáváním a nové Staff Attribution reporty přímo v POS Analytics.

  zdroje:
    - title: "Shopify: Staff attribution improvements in POS"
      url: "https://changelog.shopify.com/posts/staff-attribution-improvements-in-pos"
  generated_at: 2026-06-23T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify zavádí dvě vylepšení staff attribution v POS:

**POS v11.9 — nový staff picker a reporting**
- Redesignovaný výběr zaměstnance: nové selection tiles, lepší vyhledávání, zobrazení nejrelevantnějších členů týmu jako první — přínosné zejména pro prodejny s velkými týmy.
- Nové Staff Attribution reporty v POS Analytics (doplňují stávající Staff at Register report).
- Staff attribution se nově nezobrazuje na jednotlivých line items ve výchozím stavu. Ruční přiřazení na úrovni položky je stále možné přes tap na line item → „Attribute staff" v cart tray.

**Od 6. července 2026 — automatická aktivace**
- Pro stores bez vlastní attribution konfigurace Shopify automaticky zapne automatic attribution.
- Prodeje jsou kreditovány přihlášenému zaměstnanci bez extra kroku při checkoutu.
- Stávající nastavení zůstávají nedotčena — žádný dopad na stores s vlastní konfigurací.
- Attribution nastavení lze kdykoli upravit v POS sales channel settings.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-22 | Oznámení changelogue + vydání POS v11.9 s novým staff pickerem |
| 2026-07-06 | Automatická aktivace staff attribution pro eligible stores bez vlastní konfigurace |

## Dopad pro nás

Změna je primárně merchant-facing a týká se POS retail provozů. Pro obchodníky, kteří POS používají a doposud attribution neřešili, jde o bezplatné zlepšení reportingu a základu pro commission tracking — bez nutnosti konfigurace.

Z pohledu vývoje a integrace je dopad nízký: jde o změnu výchozího chování v POS UI, nikoli o API breaking change. Pokud ale integrátor exportuje POS objednávky nebo zpracovává staff data, může se od 6. července objevit nové pole s attribution v datech objednávek tam, kde předtím chybělo.

## Použití v Integrátoru

Integrátor pravděpodobně není přímo zasažen, ale stojí za pozornost: pokud klient synchronizuje POS objednávky a zpracovává zaměstnanecká data (např. pro reporting nebo výplatu provizí), automatická aktivace attribution může přinést nová data v order objektech. Doporučeno ověřit, zda integrátor tato data zpracovává nebo ignoruje, a případně upozornit dotčené klienty před 6. červencem.
