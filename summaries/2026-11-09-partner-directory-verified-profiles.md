---
date: 2026-11-09
title: "Partner Directory redesign — verified profiles (data ze Shopify, ne self-reported)"
title_en: "Redesigned Partner Directory with profiles built on Shopify data"
slug: partner-directory-verified-profiles
zdroj: https://shopify.dev/changelog/posts/partner-directory-profiles-now-display-verified-collaboration-data
shrnuto_dne: 2026-11-11
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se nás jako Shopify partnera: profil agentury v Partner Directory se teď skládá hlavně z dat, která potvrzuje Shopify, a proto má smysl zkontrolovat nastavení v Organization Settings a vybrat featured klienty."
dotcene_klienty: []
souvisejici: [partner-identity-verification, partner-details-collaborator-requests, editions-fall-2026-developer]
tldr: "Shopify předělal Partner Directory: profily partnerů se z velké části sestavují automaticky z historie spolupráce a převodů obchodů za poslední čtyři roky, hodnocení a recenze zmizely a partner si může vybrat až 6 featured klientů."
tagy: [partner-directory, agencies, verified, trust, lead-gen]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Partner Directory je veřejný seznam agentur a expertů, ve kterém obchodníci hledají partnera pro svůj projekt. Dosud se profil opíral hlavně o to, co o sobě partner sám napsal, tedy o popis, loga a vlastní tvrzení. Obchodník tak musel věřit marketingu, který nešlo snadno ověřit.

    Redesign tento model obrací. Podle Shopify se profily staví převážně z historie spolupráce a převodů obchodů za poslední čtyři roky a aktualizují se automaticky, jak partner dokončuje další práci. Partner tedy část profilu neovládá. Shopify sám zobrazuje úroveň v partnerském programu a délku spolupráce, odhadovanou velikost firmy, odhadovaný počet aktivních projektů, nejčastější obory merchantů, nejčastěji poskytované služby a trhy, na kterých partner pracuje.

    Partner si naopak dál spravuje název firmy, logo a popis, kontakty, web a sociální sítě a nově také featured klienty. Nastavení profilu se přesunulo do Organization Settings. Recenze a hodnocení z profilových stránek zmizely a výsledky vyhledávání se řadí abecedně. Do featured pozic se mohou dostat partneři od úrovně Select v Partner Programu výše.
  zdroje:
    - title: "Shopify: Redesigned Partner Directory with profiles built on Shopify data"
      url: "https://shopify.dev/changelog/posts/partner-directory-profiles-now-display-verified-collaboration-data"
    - title: "Shopify Help: How the Partner Directory works"
      url: "https://help.shopify.com/en/partners/grow-your-business/partner-directory/how-it-works"
  generated_at: 2026-11-11T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify předělal Partner Directory tak, aby obchodníci posuzovali partnery podle záznamu o práci, který potvrzuje Shopify, a ne podle vlastních tvrzení. Profil se z velké části generuje z historie spolupráce a převodů obchodů za poslední čtyři roky a mění se automaticky s každým dalším dokončeným projektem.

Data na profilu jsou rozdělená na dvě části. Partner sám řídí název firmy, logo, popis, kontaktní údaje, web, sociální sítě a featured klienty. Shopify řídí úroveň a délku působení v programu, odhad velikosti firmy, odhad aktivních projektů, nejčastější obory merchantů, nejčastější služby a trhy.

Další změny: nastavení profilu je v Organization Settings, hodnocení a recenze byly z profilů odstraněny a vyhledávání řadí partnery abecedně. Featured v adresáři mohou být partneři od úrovně Select výše. Nově si partner vybere preferovanou kontaktní destinaci a až 6 klientů, které chce zvýraznit.

## Časová osa

- 2026-10-28: změna je podle Shopify účinná
- 2026-11-09: zveřejnění changelog postu
- Nyní: partneři by měli zkontrolovat profil a nastavit featured klienty

## Dopad pro nás

**Pro vývojáře:** Žádná změna API ani kódu. Jde o nastavení v Organization Settings, kde se kontrolují kontaktní údaje a odkazy.

**Pro PM / PO:** Profil agentury je nově důvěryhodnější kanál pro získávání poptávek, protože obchodník vidí ověřená data, ne jen naše prezentaci. Znamená to také, že údaje jako počet aktivních projektů, obory a služby neovlivníme textem, ale reálnou prací, a že zmizely recenze, takže featured klienti jsou hlavní nástroj, jak ukázat reference. Doporučujeme zkontrolovat profil v Organization Settings > Partner Program, ověřit kontakty a vybrat až 6 klientů, a ověřit, na jaké úrovni Partner Programu jsme, kvůli způsobilosti k featured pozici.

## Použití v Integrátoru

Přímé použití v Integrátoru není. Týká se našeho profilu jako partnerské agentury a toho, jak nás obchodníci vyhledávají v Partner Directory.
