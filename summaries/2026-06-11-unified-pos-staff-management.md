---
date: 2026-06-11
title: "Unified staff management pro POS a admin v Settings > Users"
title_en: "Unified staff permissions for retail teams"
slug: unified-pos-staff-management
zdroj: https://changelog.shopify.com/posts/unified-pos-staff-management
shrnuto_dne: 2026-06-16
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-06-11
pouzivame_v_integratoru: ne
dukaz_integratoru: "Admin/POS staff management UI feature, naší integrace se netýká."
dotcene_klienty: []
souvisejici:
  - rbac-org-management-partners
  - retail-cash-management-capabilities
  - new-pos-editor
kontext:
  background: |
    Dříve existovaly dvě oddělené správy uživatelů: POS staff se spravoval přímo v POS kanálu
    (přiřazování rolí, PINů a oprávnění), zatímco admin uživatelé měli vlastní nastavení v
    Settings > Users. Pro retail týmy s více pobočkami to znamenalo duplicitní účty, nekonzistentní
    role a obtížný audit přístupů — zejména pro Shopify Plus organizace s desítkami provozoven.

    Shopify unifikoval obě správy do jednoho místa (Settings > Users) jako součást širšího trendu
    centralizace retail operací. Retailers stále více provozují smíšené týmy, kde jeden zaměstnanec
    obsluhuje jak POS, tak backoffice funkce. Regulatorní požadavky (audit trail, oddělení pravomocí)
    a potřeba řídit sezónní výkyvy v zaměstnanosti urychlily přechod na organizačně-orientovaný
    model správy identit.

    Nově lze POS uživatele zakládat, přiřazovat role a spravovat PINy přímo z admin rozhraní bez
    přepínání do POS kanálu. Shopify Plus merchanté mohou přiřadit staff profil napříč více obchody
    pomocí jediného účtu (organization-level roles). Sezónní zaměstnanci mohou být dočasně
    suspendováni bez ztráty historie. Jeden uživatel může mít zároveň více rolí (např. Store Manager
    + Marketer). Čtyři nové high-trust POS role nahradily původní generické názvy: POS Administrator,
    POS Device Setup, POS User Administrator a Organization POS Administrator.
  zdroje:
    - title: "Shopify Changelog: Unified POS staff management"
      url: "https://changelog.shopify.com/posts/unified-pos-staff-management"
    - title: "Shopify Changelog: Role-based access control and org management for partners"
      url: "https://changelog.shopify.com/posts/rbac-org-management-partners"
    - title: "Shopify Changelog: Manage all your POS settings in one place with the new POS Editor"
      url: "https://changelog.shopify.com/posts/new-pos-editor"
  generated_at: 2026-06-16T08:00:00Z
  model: claude-sonnet-4-6
tldr: "Shopify sjednotil správu POS a admin uživatelů do Settings > Users — organization-level role, suspend sezónních zaměstnanců, více rolí najednou a čtyři nové high-trust POS role. Stávající přístupy byly migrovány automaticky."
tagy: [pos, staff, permissions, rbac, retail]
zdroj_kanal: merchant-changelog
editions_release: spring-2026
---

## Co se mění

Správa POS staff přesunuta z POS kanálu do **Settings > Users** — jedno místo pro POS i admin
uživatele. Klíčové nové možnosti:

- **Organization-level roles** (Shopify Plus): jeden profil zaměstnance platí pro více obchodů,
  konec duplicitních účtů.
- **Suspend/deactivate**: sezónní staff lze pozastavit bez smazání — account history zůstane pro
  příští sezónu.
- **Multiple roles**: uživatel může mít kombinaci rolí najednou (např. Store Manager + Marketer).
- **Čtyři nové high-trust POS role** nahradily generické pojmenování:
  - *POS Administrator* (dřívější „Full permissions")
  - *POS Device Setup*
  - *POS User Administrator*
  - *Organization POS Administrator*

Důležité upozornění: tvorba a mazání rolí je nově **organization-wide permission**, nikoli shop-level.
Uživatelům, kteří měli dříve shop-level správu rolí, nebyla tato pravomoc automaticky rozšířena —
je nutné jim ručně přiřadit roli *Organization POS Administrator*.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-11 | Funkce live; stávající uživatelé a oprávnění migrováni automaticky |
| Průběžně | Shopify Plus organizace mohou využít organization-level roles ihned po migraci |

## Dopad pro nás

Změna se týká výhradně UI správy uživatelů v merchant admin rozhraní. Neexistuje nové API ani
změna webhooků — merchant klikne na jiné místo v administraci, než byl zvyklý. Pro retailové
klienty s více pobočkami (Shopify Plus) je relevantní upozornění na manuální přiřazení role
*Organization POS Administrator* těm, kdo dříve spravovali role na shop-level.

## Použití v Integrátoru

Naší integrace se tato změna netýká — nejde o změnu API ani datového modelu, pouze o
reorganizaci UI pro správu staff. V Integrátoru nevyužíváme POS staff management ani
admin user provisioning.
