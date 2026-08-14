---
date: 2026-08-11
title: "Managed Markets ukončuje DDU support (Delivered Duty Unpaid) — od 24. 8. jen DDP"
title_en: "Managed Markets is ending Delivered Duty Unpaid (DDU) support"
slug: managed-markets-ending-ddu-support
zdroj: https://changelog.shopify.com/posts/managed-markets-is-ending-delivered-duty-unpaid-ddu-support
shrnuto_dne: 2026-08-14
kategorie: [breaking-change, deprecation]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-08-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud klient používá Managed Markets a spoléhá na DDU (clo placené kupujícím při doručení), je potřeba ho upozornit, že od 24. 8. 2026 přejde automaticky na DDP (clo vybrané v checkoutu), pokud si to sám nevypne."
dotcene_klienty: []
souvisejici: [managed-markets-duties-inclusive-pricing, managed-markets-eu-buyer-cancellation-returns, managed-markets-uk-canada-launch]
tldr: "Shopify Managed Markets od 24. 8. 2026 ruší podporu DDU (clo placené při doručení) ve všech zemích, kde nabízí DDP — cross-border objednávky tak budou vždy s clem vybraným už v checkoutu."
tagy: [managed-markets, ddu, ddp, duties, international, shipping, breaking, action-required, "2026-08-24"]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Managed Markets je Shopify služba pro cross-border prodej, ve které Shopify přes partnera Global-e (jako merchant of record) přebírá odpovědnost za výpočet a výběr cla, daní a celní compliance při prodeji do zahraničí. Doposud mohl merchant u některých trhů volit mezi dvěma režimy: DDP (Delivered Duty Paid), kdy zákazník uhradí clo a daně už v checkoutu, a DDU (Delivered Duty Unpaid), kdy clo a daně vybírá až přepravce nebo celní úřad při doručení.

    DDU model dlouhodobě patří k hlavním příčinám nespokojenosti zákazníků u přeshraničních nákupů — kupující se dozví skutečnou výši doplatku až ve chvíli doručení, což vede k odmítnutým zásilkám, reklamacím a poškozené důvěře ve značku. Shopify tento problém řeší postupně už od poloviny roku 2026: v červenci zavedl duties-inclusive pricing (clo započítané přímo do zobrazené ceny produktu) a nyní jde o krok dál — u zemí, kde Managed Markets podporuje DDP, DDU jednoduše ruší.

    Od 24. 8. 2026 se tak všechny trhy s dostupným DDP automaticky přepnou na tento režim. Merchant, který chce zachovat model placení cla při doručení, musí Managed Markets pro dané trhy sám vypnout ještě před tímto datem — jinak přechod proběhne bez jakéhokoli zásahu a bez další notifikace. Cílem je sjednotit buyer experience napříč všemi Managed Markets trhy tak, aby zákazník nikdy nenarazil na neočekávaný poplatek po objednání.
  zdroje:
    - title: "Shopify: Managed Markets is ending Delivered Duty Unpaid (DDU) support"
      url: "https://changelog.shopify.com/posts/managed-markets-is-ending-delivered-duty-unpaid-ddu-support"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify Managed Markets ukončuje podporu **DDU (Delivered Duty Unpaid)** ve všech zemích a regionech, kde už nabízí **DDP (Delivered Duty Paid)**. Prakticky to znamená, že cross-border objednávky přes Managed Markets budou vždy s clem a daněmi vybranými přímo v checkoutu — merchant už nemůže nechat tuto povinnost na zákazníkovi až při doručení.

Trhy, které dosud běžely v režimu DDU, se **automaticky přepnou na DDP**, jakmile pro ně bude DDP dostupné. Žádná akce ze strany merchanta není potřeba, pokud s přechodem souhlasí. Pokud naopak chce merchant zachovat model "clo se platí při doručení", musí Managed Markets pro dotčené trhy **deaktivovat před 24. 8. 2026** — po tomto datu proběhne přechod bez dalšího varování.

Změna navazuje na duties-inclusive pricing zavedené v červenci 2026 a je dalším krokem k tomu, aby zákazník viděl finální cenu (včetně cla) už od produktové stránky až po doručení, bez skrytých poplatků.

## Časová osa

- **2026-07-10** — Managed Markets zavádí automatické duties-inclusive pricing (clo v zobrazené ceně)
- **2026-08-11** — Shopify oznamuje ukončení DDU podpory
- **2026-08-24** — DDU se ruší; trhy s dostupným DDP se automaticky přepnou na DDP

## Dopad pro nás

**Pro vývojáře:** Managed Markets nemá vlastní dedikovaný Admin API scope pro tuto konfiguraci — jde o merchant-facing nastavení. Nepřímý dopad: objednávky z trhů, které přejdou z DDU na DDP, budou mít jinou strukturu cenových/duty polí (clo součástí objednávky v checkoutu místo samostatného odvodu při doručení). Pokud klient zpracovává order data z Managed Markets ve vlastním reportingu, fakturaci nebo ERP integraci, je vhodné ověřit, že mapování počítá s tímto posunem a nezobrazuje clo duplicitně.

**Pro PM / PO:** Jde o breaking change s jasným deadline (24. 8. 2026) — je potřeba aktivně upozornit klienty používající Managed Markets, kteří dosud spoléhali na DDU. Pokud klient chce zákazníkům nechat clo k úhradě až při doručení (např. z lokálních zvyklostí trhu nebo cenové strategie), musí to řešit **před** 24. 8., jinak dojde k tichému přechodu na DDP. Pro většinu klientů je přechod na DDP žádoucí (méně odmítnutých zásilek, konzistentnější buyer experience), ale je to rozhodnutí, které by mělo padnout vědomě, ne automaticky.

## Použití v Integrátoru

Přímý technický dopad je nízký, jde o merchant-facing nastavení uvnitř Managed Markets bez nové API funkcionality. Konzultační relevance: u klientů s cross-border prodejem je vhodné před 24. 8. 2026 ověřit, zda si přejí zachovat DDU (a tedy stihnout deaktivaci), nebo zda přechod na DDP odpovídá jejich současné cenové a logistické strategii.
