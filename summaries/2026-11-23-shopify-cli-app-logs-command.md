---
date: 2026-11-23
title: "Shopify CLI: `shopify app logs` pro čtení logů aplikace přímo z terminálu"
title_en: "Access app logs in Shopify CLI"
slug: shopify-cli-app-logs-command
zdroj: https://shopify.dev/changelog/posts/query-your-app-s-logs-in-shopify-cli-with-shopify-app-logs
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-23
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pro debugging našich custom apps a Dev Dashboard aplikací je rychlejší přečíst logy přes CLI přímo v projektu, než otevírat web."
dotcene_klienty: []
souvisejici: [admin-created-custom-apps-move-to-dev-dashboard]
tldr: "Shopify CLI má nový příkaz `shopify app logs`, kterým si vývojář přečte logy své aplikace z terminálu bez nutnosti otevírat Dev Dashboard ve webu."
tagy: [shopify-cli, logs, dev-dashboard, debugging, dx]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v posledních měsících přesouvá správu aplikací do Dev Dashboardu a zároveň posiluje Shopify CLI jako hlavní nástroj vývojového workflow. Logy aplikace byly dosud dostupné primárně ve webovém rozhraní Dev Dashboardu, což při ladění vynucovalo přepínání mezi editorem, terminálem a prohlížečem. Nový příkaz tento krok odstraňuje: logy si vývojář vyžádá tam, kde už pracuje. Zrychluje to rychlou kontrolu po deployi nebo při hledání příčiny chyby. Zapadá to do širšího trendu, kdy se monitoring a provoz aplikací přibližují k příkazové řádce.
  zdroje:
    - title: "Shopify: Query your app's logs in Shopify CLI with shopify app logs"
      url: "https://shopify.dev/changelog/posts/query-your-app-s-logs-in-shopify-cli-with-shopify-app-logs"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify CLI nově obsahuje příkaz `shopify app logs`, který umožňuje dotazovat se na logy vlastní aplikace přímo z terminálu. Pro základní kontrolu (co se v aplikaci stalo, jaká chyba nastala) už tedy není nutné otevírat webové rozhraní Dev Dashboardu.

Novinka je součástí širšího směřování Shopify: logování a monitoring aplikací v Dev Dashboardu a Shopify CLI jako hlavní nástroj vývojového workflow. Příkaz je dostupný od 23. 11. 2026 a nevyžaduje žádnou migraci ani změnu stávajících aplikací.

## Dopad pro nás

**Pro vývojáře:** Doporučujeme zařadit příkaz do běžného dev workflow, zejména při ladění po nasazení nové verze aplikace. Debugging je rychlejší, protože odpadá přepínání mezi editorem a webem a logy lze číst přímo v kontextu projektu. Před plošným používáním si ověřte podporované parametry (filtry, časové rozsahy) v dokumentaci CLI.

**Pro PM / PO:** Novinka nemá přímý dopad. Nemění chování aplikací, nemá vliv na klienty ani na plánování.

## Použití v Integrátoru

Možná. Pokud provozujeme aplikace spravované přes Dev Dashboard (včetně custom apps, které se na Dev Dashboard přesouvají), půjde o zlepšení dev workflow při jejich ladění. Nejde o změnu funkčnosti Integrátoru samotného, jen o pohodlnější práci vývojářů.
