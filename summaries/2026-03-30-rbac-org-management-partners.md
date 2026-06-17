---
date: 2026-03-30
title: "Role-based access control a org management pro partnery"
title_en: "Role-based access control and org management for partners"
slug: rbac-org-management-partners
zdroj: https://shopify.dev/changelog/role-based-access-control-and-org-management-for-partners
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, fyi]
api_oblast: partners
api_verze: []
nalehavost: nizka
customer_facing: false

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Partner organizace (Shopify Partners account). Pokud máme Partner accountu pro publikaci apps, je to administrativní změna."
dotcene_klienty: []

kontext:
  background: |
    Role-based access control (RBAC) je model řízení přístupu, v němž se oprávnění nepřidělují přímo jednotlivým uživatelům, ale jsou svázána s jejich rolí v organizaci. Administrátor tak přiřadí uživateli roli a tím automaticky definuje, ke kterým zdrojům a akcím má přístup. Díky tomu odpadá ruční nastavování práv pro každou osobu zvlášť.

    Shopify Partners je ekosystém pro agentury, freelancery a vývojáře, kteří spravují nebo vyvíjejí aplikace pro Shopify obchody svých klientů. Historicky byl Partner Dashboard jednoduchý — každý člen organizace měl buď plný přístup, nebo omezený přístup bez jemného nastavení. S rozšiřováním týmů a přísnějšími požadavky na bezpečnost se ukázalo, že takový model nestačí.

    Zavedení RBAC přináší sedm systémových rolí (například správce organizace, vývojář nebo účetní) a možnost vytvářet vlastní role. Zároveň se všechny typy obchodů — vývojářské, klientské i collaborator stores — konsolidují do jednoho přehledu místo přepínání mezi různými dashboardy. To zjednodušuje správu velkých partnerských organizací a umožňuje dodržovat princip nejmenšího oprávnění.

    Tato změna navazuje na širší trend modernizace Partner Dashboardu, který zahrnuje například nový submission workflow nebo konsolidaci app audits — Shopify postupně sjednocuje nástroje pro správu aplikací a organizací do jednoho rozhraní.
  zdroje:
    - title: "Shopify Changelog: Role-based access control and org management for partners"
      url: "https://shopify.dev/changelog/role-based-access-control-and-org-management-for-partners"
    - title: "Nový workflow pro submission aplikace v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/new-app-submission-experience-partner-dashboard/"
    - title: "App quality checks konsolidovány v Partner Dashboardu"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/app-quality-checks-partner-dashboard/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Partner organizace nově používají RBAC se system + custom rolemi pro unified store management."
tagy: [partners, rbac, organization, management]
editions_release: spring-2026
---

## Co se mění
**Partner organizace** (Shopify Partners account, kde se registrují agency a developeri) přechází na **role-based access control (RBAC)**. K dispozici jsou system roles (admin, developer, accountant) i možnost vytvořit custom roles. Cíl: unified management napříč klientskými stores připojenými do organizace.

## Použití v Integrátoru
**Nepoužíváme** — týká se interního Partner Dashboardu Shopify. Pokud máme Magexo Partner account, je to administrativní change pro správu týmu — žádný kódový dopad.
