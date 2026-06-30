---
date: 2026-06-27
title: "Shopify retail: shrnutí aktualizací (červen 2026)"
slug: blog-retail-roundup-2026-jun
zdroj: https://www.shopify.com/cz/blog/retail-release-roundup
shrnuto_dne: 2026-06-30
kategorie: [fyi]
api_oblast: other
nalehavost: nizka
customer_facing: true
ucinnost_od: 2026-06-27
pouzivame_v_integratoru: mozna
dukaz_integratoru: "POS oprávnění personálu a správa nákupních objednávek se mohou dotknout workflow, které integrace řídí přes inventory a orders API."
dotcene_klienty: []
souvisejici:
  - "staff-attribution-pos-improvements"
  - "purchase-orders-create-inventory-transfers"
  - "blog-retail-shrnuti-aktualizaci"
tldr: "Shopify POS verze 11.8 (červen 2026) přináší sjednocenou správu oprávnění personálu, možnost vytvářet objednávky k vyzvednutí v jiné pobočce a plnou podporu nákupních objednávek s příjmem zboží přímo v POS aplikaci."
tagy: [retail, pos, release-roundup, shopify]
zdroj_kanal: blog
kontext:
  background: |
    Shopify pravidelně vydává souhrnné články o novinkách ve svém POS (Point of Sale) systému. Červnový roundup se zaměřuje na verzi POS 11.8, která vyšla 8. června 2026 a přinesla tři zásadní vylepšení pro maloobchodní provoz. Cílem těchto updatů je zjednodušit provoz kamenných prodejen a propojit je plynuleji s online kanálem.

    První změna se týká správy oprávnění zaměstnanců — ta se přesunula z POS kanálu do sekce Settings > Users v Shopify Adminu, kde je nyní spravována společně s ostatními admin oprávněními. Systém nově podporuje pozastavení a reaktivaci sezónních zaměstnanců, přiřazení více rolí jednomu uživateli a v plánu Shopify Plus i přístup k POS napříč více pobočkami pod jedním profilem.

    Druhá novinka umožňuje zaměstnancům vytvořit objednávku k vyzvednutí (pickup order) určenou pro jinou maloobchodní pobočku přímo z POS. To řeší běžnou situaci, kdy zboží není skladem v aktuální prodejně, ale zákazník si je může vyzvednout jinde. Třetí oblast pokrývá nákupní objednávky a převody zásob — POS nyní umožňuje přijímat zásilky skenováním čárového kódu a sledovat celou cestu zboží od dodavatele až po prodejnu, včetně AI doporučení přes Sidekick.

    Pro maloobchodní provozovatele jde o praktické zlepšení každodenní práce na prodejně. Správa zaměstnanců je přehlednější, zákazníci dostanou lepší servis i při výpadku zásob na konkrétní pobočce a skladové operace jsou transparentnější. Shopify doporučuje testovat nové verze POS na několika zařízeních před plošným nasazením, ideálně s využitím MDM (Mobile Device Management).

  zdroje:
    - title: "Shopify: Shopify retail: shrnutí aktualizací (červen 2026)"
      url: "https://www.shopify.com/cz/blog/retail-release-roundup"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## O čem to je

Shopify vydalo přehled novinek pro POS verzi 11.8 (červen 2026). Tři hlavní oblasti změn jsou:

1. **Sjednocená oprávnění personálu** — správa přístupů zaměstnanců se přesunula z POS kanálu do Settings > Users. Nově lze pozastavit sezónní zaměstnance, přiřadit více rolí jednomu uživateli a (v plánu Plus) sdílet profil přes více poboček.

2. **Pickup objednávky pro jinou pobočku** — zaměstnanec může v POS vytvořit objednávku k vyzvednutí v jiné prodejně, pokud aktuální pobočka nemá zboží skladem. Funkce vyžaduje POS Pro a odpovídající zásoby na cílové pobočce.

3. **Nákupní objednávky a příjem v POS** — POS nyní plně podporuje příjem zásilek od dodavatelů přímo v aplikaci (skenování čárového kódu, import z CSV). Nákupní objednávky sledují nákupní ceny a automaticky vytvářejí inventory transfery. AI asistent Sidekick nabízí doporučení objednávek.

Všechny tři funkce jsou dostupné od 8. června 2026; oprávnění personálu se spouštěla postupně od 1. června.

## Pro koho je to relevantní

Relevantní pro obchodníky, kteří provozují kamenné prodejny s Shopify POS — zejména ty s více pobočkami (pro pickup cross-location a sdílení uživatelských profilů v Plus) a ty, kteří aktivně spravují zásoby přes nákupní objednávky. Pro integrátory a vývojáře je zajímavá především změna v oprávněních (přesun do Admin Settings) a nová logika inventory transferů, která může ovlivnit stávající integrace pracující s orders a inventory API.
