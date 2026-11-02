---
date: 2026-10-30
title: "Payments Apps API: trusted vault origin signal (CVV hint u kartových plateb)"
title_en: "New trusted vault origin signal in Payments Apps API"
slug: trusted-vault-origin-payments-apps-api
zdroj: https://shopify.dev/changelog/posts/new-trusted-vault-origin-signal-in-payments-apps-api
shrnuto_dne: 2026-11-02
kategorie: [nova-api, nova-prilezitost]
api_oblast: other
api_verze: ["2027-01"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-30
pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Payments Apps API pro platební poskytovatele. Vlastní payment apps nevyvíjíme, takže jde o referenční informaci pro případ, že by klient nasazoval vlastní platební extension."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-payments, rejection-reason-codes-payments-apps, payments-apps-family-name-optional-b2b]
tldr: "Payments Apps API v release candidate 2027-01 přidává volitelné boolean pole payment_method.data.trusted_vault_origin u kartových požadavků: při hodnotě true nemá aplikace platbu ani verifikaci zamítnout jen kvůli chybějícímu CVV, fraud kontroly a 3-D Secure ale platí dál."
tagy: [payments-apps-api, vault, security, pci, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Payments Apps API je rozhraní, přes které platební poskytovatelé (payment apps) přijímají od Shopify požadavky na platbu a verifikaci karty. Shopify do požadavků typu `credit_card` nově může přidat volitelné booleovské pole `payment_method.data.trusted_vault_origin`. Posílá se jak v šifrovaném payloadu karty, tak v payloadu `payment_instrument`, a čte se z `payment_method.data`, tedy mimo šifrované údaje o kartě a mimo objekt `payment_instrument`. Pole je signál, že údaje o kartě pocházejí z důvěryhodného vaultu, ale neříká, z kterého vaultu konkrétně.

    Praktický význam se týká CVV. Pokud je hodnota `true`, aplikace nemá platbu ani verifikaci zamítnout jen proto, že chybí CVV. CVV může být v požadavku přesto přítomné. Pokud je hodnota `false` nebo pole chybí, platí dosavadní pravidla pro CVV beze změny, včetně toků, které platby bez CVV už dnes přijímají. Důležité omezení: pole neznamená výjimku z ostatních kontrol. Fraud kontroly, 3-D Secure autentizace i validace CVV (pokud je poskytnuto) se uplatňují dál. Pole tedy není nápověda pro přeskočení 3DS ani pro směrování approval flow, ale jen uvolnění jednoho konkrétního důvodu k zamítnutí.

    Pole je dostupné pouze pro extension s API verzí 2027-01 nebo novější a jen tehdy, když ho Shopify pro danou aplikaci zapne. Samotná změna verze API ho nezapíná. Na starších verzích, u aplikací bez zapnutého pole a v případech, kdy Shopify nemá co poslat, pole v requestu chybí. Změna je v release candidate 2027-01 a nevyžaduje akci, produkční aplikace mají zůstat na podporované stabilní verzi. Zdrojový changelog ji nespojuje s Editions Fall '26, tematicky ale zapadá do platebního směru z [tématu Payments](/Shopify_news_magexo/zmena/editions-fall-2026-payments/), kde Shopify rozšiřuje práci s platebními providery a Shop Pay (v changelogu se Shop Pay výslovně nezmiňuje).

    Dopad je nízký a míří na vývojáře platebních aplikací. Aplikace, které dnes tvrdě vyžadují CVV u každé kartové platby, by po zapnutí pole mohly zamítat požadavky, které Shopify považuje za legitimní. Navazuje to na dřívější zpřesňování kontraktu: [granulární rejection reason codes](/Shopify_news_magexo/zmena/rejection-reason-codes-payments-apps/) (včetně kódu pro neplatné CVC) a [volitelné family_name u B2B](/Shopify_news_magexo/zmena/payments-apps-family-name-optional-b2b/) ukazují stejný vzorec, kdy validace v aplikaci nemá být přísnější než kontrakt Shopify. Obchodníci si změny nevšimnou přímo, dopad se projeví nepřímo, pokud jejich provider podporu nasadí.
  zdroje:
    - title: "Shopify: New trusted vault origin signal in Payments Apps API"
      url: "https://shopify.dev/changelog/posts/new-trusted-vault-origin-signal-in-payments-apps-api"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Payments Apps API dostává nové volitelné pole `payment_method.data.trusted_vault_origin` (boolean) pro požadavky na platbu a verifikaci s `payment_method.type` rovným `credit_card`. Shopify ho může poslat v šifrovaném payloadu karty i v payloadu `payment_instrument`. V obou případech leží v `payment_method.data`, mimo šifrované údaje o kartě.

Pravidla pro aplikaci jsou jednoduchá:

- **`true`** — aplikace nesmí platbu ani verifikaci zamítnout jen kvůli chybějícímu CVV. CVV ale může být přítomné a pak se validuje jako dosud.
- **`false` nebo pole chybí** — platí stávající pravidla pro CVV, včetně toků, které přijímají platby bez CVV.
- **Vždy dál platí** — fraud kontroly, 3-D Secure autentizace a validace případně poskytnutého CVV.

Pole neidentifikuje, z jakého vaultu karta pochází. Je to jen signál důvěryhodného původu. Název může svádět k představě, že jde o směrovací nápovědu pro approval flow (například přeskočení 3DS pro trusted origin). To ze zdrojového changelogu nevyplývá: 3-D Secure zůstává povinný tam, kde by platil jinak.

Pole se objeví jen tehdy, když extension používá API verzi 2027-01 nebo novější a Shopify ho pro danou aplikaci zapnul. Změna verze samotná nestačí. Na starších verzích, u aplikací bez zapnutí a v případě, že Shopify nemá hodnotu k odeslání, pole chybí.

## Časová osa

- **2026-10-30** — Shopify publikuje changelog, pole je dostupné v release candidate API verze 2027-01.
- **Release candidate 2027-01** — vhodná verze pro testování; produkční aplikace mají zůstat na podporované stabilní verzi.
- **Stabilní vydání 2027-01** — termín zdroj neuvádí. Změna nemá žádnou deprecaci a nevyžaduje akci.

## Dopad pro nás

**Pro vývojáře:** Týká se jen těch, kdo píší payment app s kartovými platbami. Doporučený postup podle changelogu: projít handlery plateb a verifikací, přidat podporu volitelného pole a pravidla pro CVV, nastavit vývojové extension na `api_version` 2027-01, ověřit u Shopify, že je pole pro aplikaci zapnuté, a otestovat hodnoty `true`, `false` i absenci pole, s CVV i bez, napříč všemi podporovanými formáty payloadu a u verifikačních požadavků. Klíčová kontrola: `true` nesmí vyvolat zamítnutí kvůli chybějícímu CVV a `false` i absence musí zachovat stávající chování. Důležité je také nesplést si signál s uvolněním fraud kontrol nebo 3DS, které zůstávají beze změny.

**Pro PM / PO:** Nalehavost je nízká a žádná akce není potřeba. Pokud nějaký klient provozuje vlastní nebo upravenou platební aplikaci, stojí za to při příští revizi poslat jeho dodavateli odkaz na změnu. Náš odhad (zdroj to přímo nepíše): u uložených karet ze strany Shopify může podpora pole snížit počet zbytečných zamítnutí kvůli CVV, ale přesné podmínky, kdy Shopify pole zapne, changelog nespecifikuje, takže bez ověření u Shopify nic merchantům neslibovat.

## Použití v Integrátoru

Nepoužíváme. Payments Apps API je určené platebním poskytovatelům a v našich integracích se s ním nepracuje. Význam má jen jako referenční informace, pokud bychom někdy řešili platební extension pro konkrétního klienta.
