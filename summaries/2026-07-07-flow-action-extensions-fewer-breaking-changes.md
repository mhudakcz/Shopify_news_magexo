---
date: 2026-07-07
title: "Shopify Flow: Action extensions payloady jsou tolerantnější — méně breaking changes"
title_en: "Shopify Flow: Changes to Action extensions result in fewer breaking changes"
slug: flow-action-extensions-fewer-breaking-changes
zdroj: https://shopify.dev/changelog/shopify-flow-changes-to-action-extensions-result-in-fewer-breaking-changes
shrnuto_dne: 2026-07-10
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-07-07
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud v budoucnu vytvoříme Flow action extension, endpoint bude muset tolerovat starší i novější verze payloadu, ale zároveň nám odpadne riziko, že drobná změna schématu shodí existující workflow klientů."
dotcene_klienty: []
souvisejici: [flow-action-extensions-relative-paths, flow-more-fields-admin-api, flow-new-actions-get-data]
tldr: "Shopify Flow už automaticky neodmítá požadavky na action extension kvůli neshodě v konfiguračních polích — request se pošle na endpoint i se staršími/chybějícími fieldy, takže drobné změny schématu akce méně často rozbíjí existující merchant workflow."
tagy: [flow, action-extensions, backwards-compat, developer, "2026-07"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify Flow je no-code automatizační platforma dostupná v administraci od plánu Basic. Vedle vestavěných akcí (poslat e-mail, přidat tag, vytvořit notu apod.) mohou aplikace třetích stran nabízet vlastní **action extensions** — merchant si je přidá do workflow a Flow při spuštění pošle definovaná data (payload) na endpoint aplikace.

    Dosud platilo, že jakmile developer upravil konfiguraci action extension (přidal, odebral nebo změnil povinnost pole), Flow validoval payload proti aktuálnímu schématu. Pokud existující workflow u merchanta odkazovalo na starší verzi akce, jejíž pole se neshodovala s novým schématem, Flow request k akci vůbec neodeslal — workflow tiše selhalo. To v praxi znamenalo, že i drobná úprava konfigurace akce mohla rozbít fungující automatizace u zákazníků, kteří appku ještě needitovali.

    Nově Flow tuto tvrdou validaci vypouští: workflow používající starší verzi akce se dál spustí a request na nakonfigurovanou endpoint URL se odešle i tehdy, když payload neodpovídá přesně aktuálnímu schématu (chybí nově povinné pole, přebývá zastaralé pole apod.). Odpovědnost za korektní zpracování se tím přesouvá na stranu endpointu — server-side kód musí sám ošetřit chybějící pole (např. defaultní hodnotou), ignorovat zastaralá pole a v případě, že payload nelze bezpečně zpracovat, vrátit vhodnou chybovou odpověď.
  zdroje:
    - title: "Shopify: Shopify Flow: Changes to Action extensions result in fewer breaking changes"
      url: "https://shopify.dev/changelog/shopify-flow-changes-to-action-extensions-result-in-fewer-breaking-changes"
  generated_at: 2026-07-10T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Flow už u action extensions neprovádí striktní validaci payloadu proti aktuálnímu schématu konfigurace před odesláním requestu. Workflow, které odkazuje na starší verzi akce, se nadále spustí a Flow request odešle na nakonfigurovanou endpoint URL i v případě, že:

- payloadu chybí pole, které je v novější verzi akce označené jako povinné,
- payload obsahuje pole ze starší verze, která už v aktuální konfiguraci neexistují,
- se schéma jinak liší od toho, co endpoint očekává podle poslední deploynuté verze.

Dřív takové neshody vedly k tomu, že Flow request vůbec neposlal a workflow u merchanta tiše selhalo. Nyní se zodpovědnost za zpracování posouvá na endpoint — Shopify doporučuje ošetřit chybějící povinná pole rozumným defaultem, ignorovat zastaralá pole a tam, kde payload nejde bezpečně zpracovat, vrátit odpovídající chybovou odpověď namísto pádu.

## Časová osa

- **2026-07-07** — Změna chování Flow action extensions publikována v dev changelogu, platí okamžitě pro všechny action extensions.

## Dopad pro nás

**Pro vývojáře:** Pokud budeme mít vlastní Flow action extension, endpoint teď musí být defenzivní vůči tvaru payloadu — nespoléhat na to, že přijde přesně podle nejnovějšího schématu. Je potřeba explicitně řešit chybějící povinná pole (default hodnota) a ignorovat neznámá/zastaralá pole, jinak hrozí tichá chyba na naší straně místo dřívějšího blokování ze strany Flow.

**Pro PM / PO:** Praktický dopad je nižší riziko breaking changes při iteraci na existující Shopify Flow integraci — úprava konfigurace akce (např. přidání nového pole) už sama o sobě nerozbije workflow zákazníků, kteří appku ještě needitovali. Menší provozní riziko při rollout nové verze akce.

## Použití v Integrátoru

Aktuálně vlastní Flow action extension nemáme, takže se nás změna přímo nedotýká. Pokud bychom v budoucnu takovou extension stavěli (např. pro spuštění synchronizace z workflow), je dobré od začátku počítat s tolerantním zpracováním payloadu na endpointu.
