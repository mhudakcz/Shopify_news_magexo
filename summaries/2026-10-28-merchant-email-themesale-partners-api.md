---
date: 2026-10-28
title: "Partners API: merchant email na ThemeSale (direct contact k theme purchaserovi)"
title_en: "Merchant email now available on ThemeSale object in Partners API"
slug: merchant-email-themesale-partners-api
zdroj: https://shopify.dev/changelog/posts/merchant-email-now-available-on-the-themesale-object-in-the-partners-api
shrnuto_dne: 2026-11-02
kategorie: [nova-api]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se jen partnerů, kteří mají téma v Shopify Theme Store; pokud vlastní téma neprodáváme, přímý dopad není, jinak získáme e-mail kupujícího přes ThemeSale v Partner API."
dotcene_klienty: []
souvisejici: [editions-fall-2026, editions-fall-2026-developer, new-theme-architecture-liquid-blocks-tailwind, appsubscriptioncancel-partner-api, partner-details-collaborator-requests]
tldr: "Od 28. října 2026 vrací objekt ThemeSale v Partner API i e-mail obchodníka, který téma koupil, takže theme developer může kupujícího kontaktovat kvůli podpoře a novinkám; musí přitom dodržet Partner Program Agreement a platné zákony o ochraně soukromí a marketingu."
tagy: [partners-api, themes, themesale, email, support, developer]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Partner API je Shopify GraphQL rozhraní určené partnerům, tedy agenturám a vývojářům aplikací a témat, kteří přes něj čtou data ze svého partnerského účtu. Objekt ThemeSale v něm reprezentuje prodej tématu z Theme Storu. Nově k němu přibyl e-mail obchodníka, který téma koupil. Shopify v changelogu pouze uvádí, že e-mail je dostupný na objektu ThemeSale; název pole, potřebná oprávnění ani příklad dotazu příspěvek neobsahuje, a proto je nutné je dohledat v dokumentaci objektu ThemeSale. Příspěvek je označený jako novinka v kategorii Themes a nevyžaduje žádnou akci.

    Změna zapadá do širšího zaměření Fall '26 na vývojáře a partnery. Shopify Editions Fall '26 přinesl v developer části i novinky kolem monetizace a Theme Storu, například add-ony u položek v Theme Storu a přehled výdělků partnerů, a ukázal novou architekturu témat postavenou na Liquid blocích a Tailwindu. Merchant email na ThemeSale je menší, ale praktická součást téhož směru: tvůrce tématu dostává do ruky data, díky kterým může s kupujícími pracovat přímo, a ne jen čekat, až se ozvou sami.

    Dopad je především pro theme developery. Shopify jako účel uvádí poskytování podpory, sdílení novinek a budování vztahů s obchodníky, kteří téma používají. Zároveň připomíná, že partner se musí řídit Partner Program Agreement a dodržovat všechny platné zákony, včetně pravidel o ochraně soukromí a marketingu. V praxi to znamená, že e-mail je vhodné používat pro provozní komunikaci k zakoupenému tématu a plošné marketingové zprávy posílat jen tam, kde to právní základ dovoluje.
  zdroje:
    - title: "Shopify: Merchant email now available on ThemeSale object in Partners API"
      url: "https://shopify.dev/changelog/posts/merchant-email-now-available-on-the-themesale-object-in-the-partners-api"
    - title: "Shopify Partner API: ThemeSale object"
      url: "https://shopify.dev/docs/api/partner/latest/objects/ThemeSale"
    - title: "Shopify Editions Fall '26"
      url: "https://www.shopify.com/editions/fall2026"
  generated_at: 2026-11-02T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Objekt `ThemeSale` v Partner API nově zpřístupňuje e-mail obchodníka, který téma koupil. Theme developer tak může kupujícího oslovit přímo, například kvůli podpoře, informaci o aktualizaci nebo obecně kvůli udržení vztahu s uživatelem tématu.

Příspěvek je stručný. Neuvádí název pole, potřebné scopes ani příklad GraphQL dotazu, takže přesný tvar dotazu je potřeba ověřit v [dokumentaci objektu ThemeSale](https://shopify.dev/docs/api/partner/latest/objects/ThemeSale). Shopify také výslovně připomíná, že partner při práci s e-mailem odpovídá za dodržení Partner Program Agreement a všech platných zákonů, zejména v oblasti ochrany soukromí a marketingu. Změna je v changelogu označená jako novinka bez požadované akce.

## Časová osa

- **27. října 2026** — příspěvek byl naposledy aktualizován na straně Shopify
- **28. října 2026** — příspěvek zveřejněn, merchant email je dostupný na objektu ThemeSale v Partner API
- **Nadále** — žádný termín ani povinná migrace, jde o doplnění dostupných dat

## Dopad pro nás

**Pro vývojáře:** Pokud sledujeme prodeje tématu přes Partner API, můžeme do dotazu na ThemeSale přidat i e-mail kupujícího; přesný název pole a případná oprávnění je potřeba dohledat v dokumentaci, protože changelog je neuvádí. Je vhodné e-maily neukládat bez rozmyslu: patří pod GDPR, takže je nutné mít jasný účel, omezit přístup a nastavit retenci.

**Pro PM / PO:** Změna se týká jen partnerů, kteří téma v Theme Storu prodávají. Pokud takové téma máme nebo plánujeme, otevírá se možnost proaktivní podpory a onboardingu kupujících. Před prvním použitím stojí za to s právníkem nebo DPO ujasnit, k jakým zprávám smíme e-mail použít (provozní podpora versus marketing) a jak vyřídit odhlášení. Pro většinu klientských projektů, kde téma neprodáváme, jde jen o informaci k vědomí.

## Použití v Integrátoru

Přímé použití v Integrátoru nevidíme, jde o data z Partner API týkající se prodeje témat, ne o synchronizaci obchodu klienta. Relevantní by to bylo jen v případě, že bychom přes Partner API sledovali prodeje vlastního tématu.
