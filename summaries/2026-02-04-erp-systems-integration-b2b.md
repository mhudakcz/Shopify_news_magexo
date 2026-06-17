---
date: 2026-02-04
title: "Nativní B2B integrace s NetSuite, BrightPearl, Sage, Acumatica, Fulfil"
title_en: "ERP Systems Integration"
slug: erp-systems-integration-b2b
zdroj: https://www.shopify.com/editions/winter2026
zdroj_kanal: editions
editions_release: spring-2026
shrnuto_dne: 2026-04-29

kategorie: [nova-prilezitost, integrace]
api_oblast: admin
api_verze: []
nalehavost: vysoka
customer_facing: false

pouzivame_v_integratoru: mozna
dukaz_integratoru: "Naše B2B integrace často propojují Shopify s ERP klientů. Nativní coverage NetSuite/Sage/Acumatica může konkurovat naší custom implementaci u některých klientů — nebo naopak ušetřit práci."
dotcene_klienty: []
souvisejici: []

kontext:
  background: |
    ERP (Enterprise Resource Planning) systémy jsou podnikové platformy, které integrují klíčové firemní procesy — účetnictví, sklady, výrobu, nákup a prodej — do jednoho systému. V B2B obchodě slouží jako autoritativní zdroj dat o zákaznících, objednávkách a platebních podmínkách. Mezi nejrozšířenější ERP patří NetSuite (Oracle), Sage, Acumatica a specializované platformy pro obchod jako BrightPearl nebo Fulfil.

    Shopify historicky vyžadoval pro propojení s ERP custom middleware nebo třetí strany jako Celigo či Boomi. V rámci Shopify B2B — funkcionality dostupné původně výhradně na Plus plánu — se správa firem probíhá přes objekty Company, CompanyLocation a CompanyContact v Admin GraphQL API. Platební podmínky (Payment Terms) jsou vázány na lokace a určují splatnosti i způsoby úhrady. Udržovat tato data konzistentní se zdrojem pravdy v ERP bylo doposud netriviální.

    Nativní integrace představené v Renaissance edition (Winter 2026) eliminují potřebu vlastního synchronizačního kódu pro standardní datové toky. Jsou realizovány přes integrační partnery (Patchworks, Kensium a dalších) a pokrývají entities companies, orders a payment terms. To zrychluje nasazení B2B projektů a snižuje provozní náklady u klientů, kteří žádný custom middleware nepotřebují.

    Souběžně Shopify rozšířil B2B funkce na plány Basic, Grow a Advanced — nativní ERP integrace tedy potenciálně osloví výrazně širší okruh obchodníků, než bylo dříve možné v rámci Plus exkluzivity.
  zdroje:
    - title: "Shopify Editions Winter 2026"
      url: "https://www.shopify.com/editions/winter2026"
    - title: "Shopify B2B Apps and API Overview"
      url: "https://shopify.dev/docs/apps/b2b"
    - title: "EDI workflows: Crstl a SPS Commerce (archiv)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/edi-workflows-crstl-sps/"
    - title: "Shopify B2B pro všechny plány (archiv)"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/b2b-for-all-merchants/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify B2B nativně syncuje companies, orders, payment terms s NetSuite, BrightPearl, Fulfil, Sage, Acumatica."
tagy: [b2b, erp, netsuite, sage, integration]
---

## Co se mění
Shopify v Renaissance edition nasadil **nativní B2B integrace** s pěti hlavními ERP systémy: **NetSuite, BrightPearl, Fulfil, Sage, Acumatica**. Synchronizují **companies (B2B zákazníky), objednávky a payment terms** automaticky bez nutnosti custom middleware.

## Dopad pro nás
**Pro vývojáře:**
Pokud klient používá jeden z těchto ERP, můžeme zvážit, jestli se nativní integrace hodí jako alternativa nebo doplněk k naší vlastní implementaci. Pravděpodobné scénáře:
- **Replace**: jednoduché B2B sync flow → použít nativní, ušetřit údržbu
- **Augment**: máme custom logiku navíc (vlastní data transformace, audit) → nechat custom, použít nativní jen pro standardní entity

**Pro PM / PO:**
Nová karta v rozhovoru s B2B klienty: „máte jeden z těchto ERP? Pak je tu rychlejší cesta než custom integrace, pojďme zhodnotit." Pokud klient zatím tápe, mohli bychom doporučit jeden z těchto ERP.

## Použití v Integrátoru
**Možná** — záleží na konkrétním klientovi. Doporučuji projít aktuální B2B portfolio a označit klienty s NetSuite/Sage/Acumatica/BrightPearl/Fulfil — tam zhodnotit migration potential.

## Rizika a edge cases
- Nativní integrace pokrývá standardní entities; custom rozšíření (extra fields, business rules) zůstávají naše práce
- Vendor lock-in: odchod od nativní integrace později může být bolestivý
