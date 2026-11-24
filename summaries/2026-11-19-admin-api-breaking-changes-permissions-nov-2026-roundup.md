---
date: 2026-11-19
title: "Admin API: tři breaking changes v permissions (draftOrder discount, abandonedCheckoutUrl, server pixel update)"
title_en: "Admin API breaking changes — three permission tightenings"
slug: admin-api-breaking-changes-permissions-nov-2026-roundup
zdroj: https://shopify.dev/changelog/posts/draft-order-discount-permission
shrnuto_dne: 2026-11-24
kategorie: [breaking]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-11-18
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud naše integrace volají draftOrderCreate/Update s discountem, čtou abandonedCheckoutUrl, nebo spravují server pixel přes eventBridge/pubSub, je třeba doplnit oprávnění / user access, jinak začnou tyhle operace selhávat."
dotcene_klienty: []
souvisejici: [security-deadlines-nov-dec-2026-update, admin-created-custom-apps-move-to-dev-dashboard]
tldr: "Tři breaking changes v Admin API: draftOrderCreate/Update s discounty vyžadují `apply_discounts_to_draft_orders`, `abandonedCheckoutUrl` chce level 2 protected customer data access, a `eventBridgeServerPixelUpdate` / `pubSubServerPixelUpdate` nově potřebují user access k aplikaci."
tagy: [admin-api, breaking, permissions, draft-orders, protected-customer-data, server-pixels, graphql]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify v posledních měsících systematicky zpřísňuje oprávnění v Admin API a tento týden přidal tři další drobné breaking changes. Všechny se týkají GraphQL Admin API (případně odpovídajících REST operací) a nemění tvar dat, ale podmínky, za kterých je lze volat. Zapadají do širšího security push před lednem 2027, kdy se očekává další zpřísňování přístupů k citlivým datům a operacím. Jednotlivě jde o malé změny, dohromady ale mohou rozbít integrace, které dosud fungovaly s minimálními oprávněními.
  zdroje:
    - title: "Shopify: draftOrderCreate and draftOrderUpdate require apply_discounts_to_draft_orders permission"
      url: "https://shopify.dev/changelog/posts/draft-order-discount-permission"
    - title: "Shopify: abandonedCheckoutUrl now requires level 2 protected customer data access"
      url: "https://shopify.dev/changelog/posts/abandonedcheckouturl-now-requires-level-2-protected-customer-data-access"
    - title: "Shopify: eventBridgeServerPixelUpdate and pubSubServerPixelUpdate now require user access to the app"
      url: "https://shopify.dev/changelog/posts/eventbridgeserverpixelupdate-and-pubsubserverpixelupdate-now-require-user-access-to-the-app"
  generated_at: 2026-11-24T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify mezi 18. a 20. listopadem 2026 oznámil tři samostatné změny v Admin API. Společné mají to, že zpřísňují požadavky na oprávnění a stávající volání, která tyto požadavky nesplní, začnou vracet chybu.

### draftOrderCreate / draftOrderUpdate: `apply_discounts_to_draft_orders`

Mutace `draftOrderCreate` a `draftOrderUpdate` nově vyžadují oprávnění `apply_discounts_to_draft_orders`, pokud do draft objednávky přidáváte slevu. Dosud stačil obecný přístup k draft objednávkám. Shopify tím odděluje právo draft objednávku vytvořit od práva upravit její cenu, protože ruční sleva přímo ovlivňuje tržby a je typickým místem pro zneužití. Draft objednávky bez slev se změna netýká.

### abandonedCheckoutUrl: level 2 protected customer data

Pole `abandonedCheckoutUrl` dosud vyžadovalo level 1 protected customer data access, nově je potřeba level 2. Protected customer data jsou osobní údaje zákazníků (jméno, e-mail, telefon, adresa). Level 1 pokrývá přístup k datům jako takovým, level 2 navíc zpřístupňuje přímo identifikující pole a vyžaduje další deklaraci účelu a bezpečnostních opatření při schvalování aplikace. URL opuštěného košíku obsahuje token vázaný na konkrétního zákazníka, proto ho Shopify zařadil do přísnější úrovně.

### server pixel updates: user access requirement

Mutace `eventBridgeServerPixelUpdate` a `pubSubServerPixelUpdate` nově vyžadují, aby měl uživatel (respektive účet, pod nímž aplikace volá API) přístup k dané aplikaci. Server pixely posílají události ze storefrontu do externích systémů, takže jejich přesměrování je citlivá operace. Shopify chce zajistit, že konfiguraci může měnit jen ten, kdo má k aplikaci legitimní přístup, nikoli kdokoli s platným tokenem.

## Dopad pro nás

**Pro vývojáře:** Projděte kód a hledejte volání `draftOrderCreate` / `draftOrderUpdate` s discounty, čtení `abandonedCheckoutUrl` a mutace `eventBridgeServerPixelUpdate` / `pubSubServerPixelUpdate`. Chybějící oprávnění doplňte přes Partner Dashboard nebo `shopify.app.toml` (scopes a žádost o protected customer data level 2) a změnu nasaďte. Poté otestujte dotčené toky na vývojovém obchodě, nejlépe i s účtem bez přístupu k aplikaci. Pozor: rozšíření scopů vyžaduje opětovné odsouhlasení merchantem.

**Pro PM / PO:** Jde o další zpřísnění Admin API v řadě security změn, bez dopadu na zákazníky e-shopů. Riziko je provozní: pokud něco přehlédneme, příslušné operace začnou selhávat. Level 2 protected customer data navíc může znamenat zdlouhavější schvalování ze strany Shopify, proto s tím počítejte v plánu.

## Použití v Integrátoru

Ano, je nutné ověřit. Nevíme jistě, zda Integrátor některou z těchto operací používá. Je třeba zkontrolovat zejména tvorbu draft objednávek se slevami, práci s opuštěnými košíky (`abandonedCheckoutUrl`) a správu server pixelů. Pokud nic z toho nepoužíváme, změna nás neovlivní; v opačném případě doplňte oprávnění dříve, než se projeví v provozu.
