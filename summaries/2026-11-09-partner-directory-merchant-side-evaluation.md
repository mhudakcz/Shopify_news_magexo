---
date: 2026-11-09
title: "Partner Directory (merchant pohled) — evaluate partners dle verified work history"
title_en: "Redesigned Partner Directory validates partner profiles with Shopify data"
slug: partner-directory-merchant-side-evaluation
zdroj: https://changelog.shopify.com/posts/evaluate-partners-based-on-verified-work-history-in-the-partner-directory
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-09
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přepracovaný adresář staví profily partnerů na datech Shopify, takže může sloužit jako důvěryhodný referenční bod pro naše zviditelnění u merchantů."
dotcene_klienty: []
souvisejici: [partner-identity-verification, partner-details-collaborator-requests, rbac-org-management-partners]
tldr: "Shopify přepracoval Partner Directory a profily partnerů teď vycházejí z dat Shopify o jejich práci za poslední 4 roky, takže merchanti mohou agentury porovnávat podle ověřených údajů."
tagy: [partner-directory, agencies, merchants, trust, selection]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Partner Directory je veřejný adresář, ve kterém merchanti hledají agentury a experty pro práci na Shopify. Dosud se profily opíraly hlavně o to, co o sobě partneři sami uvedli.
    Přepracovaná verze naplňuje profily daty ze Shopify o aktivitě partnera napříč obchody klientů za poslední 4 roky. Všechny profily mají stejná pole, což usnadňuje porovnání.
    Tato novinka je pohled merchanta a doplňuje vývojářskou stranu změn kolem ověřených profilů partnerů.
  zdroje:
    - title: "Shopify: Redesigned Partner Directory validates partner profiles with Shopify data"
      url: "https://changelog.shopify.com/posts/evaluate-partners-based-on-verified-work-history-in-the-partner-directory"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přepracoval Partner Directory. Profily partnerů nově zobrazují data přímo ze Shopify, která odrážejí aktivitu partnera napříč obchody klientů za poslední 4 roky. Shopify je popisuje jako ověřený pohled na odvedenou práci.

Každý profil má stejná pole: nejčastěji obsluhovaná odvětví, poskytované služby, podporované trhy, úroveň partnera (tier) a délku působení. Díky jednotné struktuře lze agentury snadno srovnávat. Úvodní stránka nově ukazuje případové studie o tom, jak partneři pomohli jiným obchodům s růstem.

Partnera lze vyhledat podle jména nebo procházet a filtrovat podle potřeby. Výsledky jsou řazeny abecedně. Příspěvek míří na merchanty, kteří hledají partnera; dopad na samotné partnery výslovně nepopisuje a metodu ověřování nijak nerozvádí.

## Časová osa

- 2026-11-09: zveřejnění přepracovaného Partner Directory a nových profilů s daty ze Shopify.
- Změna je dostupná hned, bez migrace a bez nutnosti akce.

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani kódu. Profil agentury je teď odvozen z dat Shopify, takže stojí za to zkontrolovat, jak náš profil vypadá a zda odpovídá realitě.

**Pro PM / PO:** Merchanti budou při výběru partnera víc vycházet z objektivních údajů (odvětví, služby, trhy, tier, tenure). Doporučujeme zkontrolovat, jak jsou naše služby a trhy v profilu zobrazeny, a případně připravit případovou studii do nového prostoru na úvodní stránce. Bez vlivu na provoz, nízká naléhavost.

## Použití v Integrátoru

Přímé technické využití nemáme. Nepřímo jde o příležitost zviditelnit naše projekty a zkušenosti u merchantů, kteří vybírají partnera na základě ověřených dat.
