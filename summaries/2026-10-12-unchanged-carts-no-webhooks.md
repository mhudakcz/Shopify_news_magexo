---
date: 2026-10-12
title: "Cart updates bez skutečných změn už netriggerují carts/update webhooks"
title_en: "Cart updates that result in no changes to the cart no longer trigger carts/update webhooks"
slug: unchanged-carts-no-webhooks
zdroj: https://shopify.dev/changelog/posts/unchanged-carts-no-longer-trigger-carts-update-webhooks
shrnuto_dne: 2026-10-14
kategorie: [nova-prilezitost, deprecation]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-12
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud některá naše integrace poslouchá carts/update (cart recovery, analytika, sync košíku do externího systému), bude dostávat méně duplicitních notifikací; kód, který spoléhá na webhook při každém requestu, je potřeba ověřit."
dotcene_klienty: []
souvisejici: [standard-storefront-events-cart-attributes, next-generation-events-field-level-webhooks, metafield-triggers-additional-webhook-topics]
tldr: "Shopify už neodesílá webhook carts/update, když operace s košíkem nic nezměnila (například opětovné odeslání hodnot, které košík už obsahuje), takže apps dostanou jeden webhook na skutečnou změnu místo jednoho na každý request."
tagy: [ajax-api, cart, webhooks, carts-update, noise-reduction]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Webhook `carts/update` je notifikace, kterou Shopify posílá aplikacím, když se změní obsah nebo vlastnosti nákupního košíku. Typicky na něj poslouchají apps pro cart recovery (připomínání opuštěných košíků), analytické nástroje, personalizace nebo integrace, které zrcadlí stav košíku do externího systému. Změny košíku přicházejí z několika povrchů, mimo jiné z Ajax Cart API (themes a storefront JavaScript) a ze Storefront API.

    Dosud platilo, že každá operace s košíkem vyvolala webhook, i když košík po ní zůstal přesně stejný. Stačilo například znovu odeslat hodnoty, které už košík obsahuje. Frontend, který při každém renderu nebo kliknutí posílá celý stav košíku znovu, tak mohl generovat velké množství notifikací bez jakéhokoliv reálného obsahu. Handlery na straně apps pak zbytečně běžely, zapisovaly do databází, spouštěly analytické eventy nebo volaly externí API.

    Změna je účinná od 12. října 2026. Shopify uvádí, že webhook se posílá pokaždé, když se obsah nebo vlastnosti košíku skutečně změní, a že apps teď dostanou jeden webhook na jednu změnu, nikoliv jeden na každý request. Changelog je označený jako Update bez nutné akce a neuvádí konkrétní API verzi, od které by chování platilo. Jediným popsaným důsledkem je, že apps, které se na webhook při každém requestu spoléhaly, uvidí méně notifikací.
  zdroje:
    - title: "Shopify: Cart updates that result in no changes to the cart no longer trigger carts/update webhooks"
      url: "https://shopify.dev/changelog/posts/unchanged-carts-no-longer-trigger-carts-update-webhooks"
    - title: "Shopify docs: Webhooks, topic carts/update (API verze 2026-04)"
      url: "https://shopify.dev/docs/api/webhooks/2026-04?accordionItem=webhooks-carts-update#list-of-topics-carts/update"
    - title: "Shopify docs: Ajax Cart API reference"
      url: "https://shopify.dev/docs/api/ajax/reference/cart"
    - title: "Standard storefront events a actions podporují cart attributes"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/standard-storefront-events-cart-attributes/"
  generated_at: 2026-10-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Operace s košíkem, po kterých zůstane košík beze změny, už nespouštějí webhook `carts/update`. Shopify jako příklad uvádí opětovné odeslání hodnot, které košík už obsahuje. Webhook se dál odesílá pokaždé, když se změní obsah nebo vlastnosti košíku.

Dopad je jednoduchý:

- **Dřív:** každý cart request (z Ajax API nebo Storefront API) = jeden webhook `carts/update`, ať už se košík změnil, nebo ne.
- **Teď:** jedna skutečná změna košíku = jeden webhook. Duplicitní notifikace bez změny obsahu odpadají.

Changelog se týká Ajax API i Storefront API. Je označený jako Update a Shopify výslovně uvádí, že žádná akce není vyžadována. Nejde tedy o odstranění webhooku ani o změnu struktury payloadu, ale o změnu toho, kdy se webhook odešle. Zařazení do kategorie deprecation v našem přehledu odráží to, že se mění dosavadní chování, na které se mohly apps spoléhat, ne že by něco bylo zrušeno.

Changelog nepopisuje podrobně, co všechno Shopify považuje za změnu. Za jistý příklad nezměněného košíku lze brát jen případ, který Shopify sám uvádí, tedy opětovné odeslání stejných hodnot. U hraničních situací, například při práci s cart attributes, notes nebo line item properties, doporučujeme chování ověřit na vývojovém obchodě.

## Časová osa

- **2026-10-08** – changelog vytvořen (podle metadat stránky).
- **2026-10-12** – změna zveřejněna a účinná, bez přechodného období a bez nutnosti migrace.
- **2026-10-13** – stránka changelogu naposledy aktualizována.
- **Verze API** – changelog neuvádí konkrétní verzi, od které by změna platila. Chování se tedy má chápat jako platformní změna na straně Shopify.

## Dopad pro nás

**Pro vývojáře:** Žádná povinná úprava kódu. Doporučujeme projít handlery tématu `carts/update` a ověřit tři věci:

- Nespoléháme se na to, že webhook dorazí při každém cart requestu? Typicky jde o logiku, která používá webhook jako heartbeat, jako časové razítko poslední aktivity zákazníka nebo jako trigger pro periodický refresh.
- Počítáme někde události (analytika, metriky, rate limiting, billing za volání)? Čísla po 12. říjnu 2026 klesnou a v grafech může vzniknout zdánlivý zlom, který není chyba v našem kódu.
- Máme deduplikaci nebo throttling webhooků jen kvůli tomu, že chodily zbytečně často? Část této logiky může být teď nadbytečná, ale odstraňovat ji nespěchejte, protože idempotentní zpracování je dobrý základ pro každý webhook handler i dál.

Pokud potřebujeme reagovat i na akce, které košík nezmění (například zákazník klikl na tlačítko, ale hodnoty se nezměnily), webhook `carts/update` na to už není vhodný zdroj. Použijeme události na storefrontu, například standardní storefront events, nebo vlastní tracking na straně themu či app pixelu.

**Pro PM / PO:** Jde o dobrou zprávu bez rizika a bez nutnosti plánovat práci. U apps a integrací, které poslouchají `carts/update`, se sníží zátěž (méně volání našich endpointů, méně zbytečných zápisů a externích API volání) a data o cart aktivitě budou čistší. Jediné, co stojí za pozornost, je interpretace metrik: pokud někdo sleduje počet cart webhooků jako KPI, bude potřeba vysvětlit pokles k 12. říjnu 2026. Tam, kde cart recovery nebo analytiku řeší hotová třetí app, nemusíme nic dělat, protože změna je na straně platformy.

## Použití v Integrátoru

Pokud některá naše integrace odebírá `carts/update` (například pro cart recovery, analytiku nebo zrcadlení košíku do externího systému), bude po 12. říjnu 2026 dostávat méně duplicitních notifikací a nepotřebné zpracování odpadne bez zásahu do kódu. Stačí jednorázově ověřit, že žádná logika nepředpokládá webhook při každém cart requestu.
