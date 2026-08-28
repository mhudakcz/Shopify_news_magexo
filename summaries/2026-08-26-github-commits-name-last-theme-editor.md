---
date: 2026-08-26
title: "GitHub commits obsahují jméno posledního theme editora (audit + attribution)"
title_en: "GitHub commits now name the last theme editor"
slug: github-commits-name-last-theme-editor
zdroj: https://shopify.dev/changelog/github-commits-now-name-the-last-theme-editor
shrnuto_dne: 2026-08-28
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-26
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Klienti s GitHub-propojeným theme repem uvidí attribution rovnou v commit historii, což usnadní debugging a code review na naší straně."
dotcene_klienty: []
souvisejici: [app-deployment-cicd-tokens, redesigned-theme-editor-navigation, customize-themes-per-market]
tldr: "Commity z theme editoru do propojeného GitHub repa teď v těle zprávy uvádí jméno posledního editora a shop, takže audit trail nevyžaduje dohledávání v Shopify admin activity logu."
tagy: [themes, github, integration, attribution, audit, git]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify umožňuje propojit theme s GitHub repozitářem — každá úprava provedená v Shopify admin theme editoru se automaticky commitne do zvolené větve. Doteď ale commit historie nedávala odpověď na otázku "kdo přesně tuhle úpravu udělal" — autor commitu byl vždy Shopify bot, takže GitHub avatar i git blame ukazovaly jen obecný účet integrace, bez ohledu na to, který člen týmu v admin editoru skutečně klikal.
    Nová změna doplňuje do těla commit zprávy (commit body, ne autora) řádek ve tvaru "Theme last edited by: [Jméno editora]" spolu s názvem shopu. Autor commitu v GitHubu zůstává Shopify bot — git blame a avatary se tedy nemění, mění se jen čitelný kontext v popisu commitu. Pokud během zhruba 10 sekund uloží úpravy více lidí, konsoliduje se to do jednoho commitu, který jmenuje posledního editora. Témata bez zaznamenané informace o editorovi (starší workflow, edge case) zobrazí jen název shopu, takže zpětná kompatibilita je zachovaná.
    Pro agentury a e-shopy, kde na jednom theme repu pracuje více lidí (merchandiser upravující sekce v adminu, developer pushující přes CLI), jde o čistě informativní zlepšení audit trailu — bez API dopadu, bez nutnosti cokoliv migrovat. Je to malá, ale užitečná změna pro týmy, které si GitHub sync k theme vůbec zapojily.
  zdroje:
    - title: "Shopify: GitHub commits now name the last theme editor"
      url: "https://shopify.dev/changelog/github-commits-now-name-the-last-theme-editor"
  generated_at: 2026-08-28T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Když někdo upraví theme přímo v Shopify admin theme editoru a theme je propojený s GitHub repozitářem, výsledný commit teď v těle zprávy obsahuje řádek "Theme last edited by: [Jméno editora]" a název shopu. Autorem commitu v GitHubu zůstává Shopify bot, takže se nemění nic na úrovni git autora, avataru ani `git blame` — mění se jen doplňkový text v popisu commitu, který dřív tuhle informaci vůbec neobsahoval.

Pokud více lidí uloží úpravy krátce po sobě (do cca 10 sekund), Shopify je sloučí do jednoho commitu a jako editora uvede toho, kdo úpravu uložil jako poslední. Starší themy nebo situace, kde se editor nepodařilo zaznamenat, zobrazí jen jméno shopu — commit historie tedy nikdy nezůstane bez kontextu, jen s méně detailu.

Prakticky to znamená, že tým nemusí kvůli otázce "kdo tohle změnil" přepínat do Shopify admin activity logu a dohledávat časové razítko — stačí se podívat do GitHub commit historie, kde je teď jméno editora vidět rovnou.

## Časová osa

- 26. 8. 2026 — změna publikována v Shopify dev changelogu, platí okamžitě pro všechny GitHub-propojené themy

## Dopad pro nás

**Pro vývojáře:** Při debugování nečekané změny v theme kódu (např. po nahlášení bugu klientem) stačí projít GitHub commit historii — jméno editora je přímo v popisu commitu, není potřeba křížově dohledávat v Shopify admin. Zrychluje to i code review, když v repu vidíme, že úpravu poslal merchandiser přes admin a ne developer přes CLI.

**Pro PM / PO:** Užitečné jako argument pro klienty, kteří řeší governance nad tím, kdo smí editovat theme přímo v adminu vs. přes Git workflow — teď je odpovědnost dohledatelná bez extra nástrojů. Nejde o nic, co je potřeba klientům aktivně komunikovat jako novou funkci k nasazení, spíš o vylepšení, které se projeví samo u těch, kdo GitHub sync už používají.

## Použití v Integrátoru

Přímý dopad nemáme, protože nejde o API změnu, ale u klientů s GitHub-propojeným theme repem to zpřehlední commit historii, na kterou se občas díváme při ladění problémů s theme kódem.
