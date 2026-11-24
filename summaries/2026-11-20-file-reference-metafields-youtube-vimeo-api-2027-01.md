---
date: 2026-11-20
title: "File reference metafields umí od API 2027-01 držet YouTube a Vimeo videa"
title_en: "File reference metafields can hold YouTube and Vimeo videos as of API version 2027-01"
slug: file-reference-metafields-youtube-vimeo-api-2027-01
zdroj: https://shopify.dev/changelog/posts/file-reference-metafields-can-hold-youtube-and-vimeo-videos
shrnuto_dne: 2026-11-24
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud u klientů s rich produktovým obsahem řešíme video reference, bude možné odkázat YouTube/Vimeo přímo z file metafieldu bez uploadu."
dotcene_klienty: []
souvisejici: []
tldr: "Od Shopify API 2027-01 mohou file reference metafields držet nejen uploadované soubory, ale i odkazy na YouTube a Vimeo videa — rozšíření content modelu bez nutnosti hostovat video přímo v Shopify."
tagy: [metafields, file-reference, video, youtube, vimeo, api-2027-01]
zdroj_kanal: dev-changelog
kontext:
  background: |
    File reference metafield je typ metafieldu, který odkazuje na soubor uložený v Shopify (Files), typicky obrázek, dokument nebo video. Dosud bylo nutné video nejprve nahrát do Shopify, aby šlo odkázat z metafieldu. Od API verze 2027-01 se tento typ rozšiřuje i na externí video platformy YouTube a Vimeo. Pro produktový content to znamená, že video galerie, návody či recenze lze v datovém modelu navázat na externí hosting bez duplikace souborů.
  zdroje:
    - title: "Shopify dev: File reference metafields can hold YouTube and Vimeo videos"
      url: "https://shopify.dev/changelog/posts/file-reference-metafields-can-hold-youtube-and-vimeo-videos"
    - title: "Shopify docs: Metafield data types — reference types"
      url: "https://shopify.dev/docs/apps/build/metafields/list-of-data-types#reference-types"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Od Shopify API verze **2027-01** mohou file reference metafields obsahovat kromě nahraných souborů také **YouTube a Vimeo videa**. Jde o rozšíření existujícího typu file reference, nikoli o nový typ metafieldu. Video tedy není nutné nahrávat do Shopify, stačí odkázat na externí zdroj.

## Dopad pro nás

**Pro vývojáře:** Při přechodu API u klientů na verzi 2027-01 zvažte, zda nenahradit stávající řešení (link metafield s URL a vlastním parsováním v Liquidu) právě file reference metafieldem. Odpadne část vlastní logiky pro rozpoznání platformy a sestavení embedu. Před nasazením ověřte chování v dané API verzi, zejména jak se hodnota vrací v Admin i Storefront API.

**Pro PM / PO:** U klientů s produkty, které mají externí video galerii, může být datový model jednodušší a konzistentnější: jeden typ pole pro obrázky i videa, bez duplikace videí v Shopify Files. Změna je nízké naléhavosti, vhodná jako příležitost při plánované aktualizaci API verze.

## Použití v Integrátoru

Možné. Pokud synchronizujeme metafields týkající se videí, je potřeba zkontrolovat mapování na novou verzi API, tedy jak se YouTube/Vimeo reference serializují v odpovědích a jak je zapisovat zpět. Do doby přechodu na 2027-01 se nic nemění.
