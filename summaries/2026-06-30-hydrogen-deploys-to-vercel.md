---
date: 2026-06-30
title: "Hydrogen developer preview má Deploy button pro Vercel"
title_en: "Hydrogen now deploys to Vercel"
slug: hydrogen-deploys-to-vercel
zdroj: https://shopify.dev/changelog/hydrogen-now-deploys-to-vercel
shrnuto_dne: 2026-07-02
kategorie: [nova-prilezitost]
api_oblast: storefront
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-30
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Headless projekty využívající framework-agnostic Hydrogen mohou nově rychleji rozjet Next.js storefront na Vercel bez lokálního setup."
dotcene_klienty: []
souvisejici:
  - hydrogen-any-stack-preview
  - hydrogen-april-2026-release
  - headless-checkout-sso-silent
tldr: "Hydrogen developer preview (framework-agnostic, Spring '26) přidal jednorázový Deploy button pro Vercel — vytvoří repo z Next.js starter template, nastaví Vercel projekt a automaticky spustí build."
tagy: [hydrogen, vercel, deployment, storefront, headless]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Hydrogen je Shopify framework pro stavbu headless storefrontů. Na Editions Spring 2026 Shopify představil novou, framework-agnostic verzi Hydrogen jako developer preview — na rozdíl od původního Hydrogen (postaveného výhradně na Remix) nová verze umožňuje použít libovolný JS framework, přičemž Next.js je prvním plně podporovaným.

    Do června 2026 vyžadovalo spuštění Hydrogen projektu lokální prostředí, manuální konfiguraci a samostatné propojení s hostingovou platformou. Pro nové projekty to představovalo netriviální bariéru vstupu, zejména při rychlém prototypování nebo proof-of-concept.

    Nový Deploy button zjednodušuje celý onboarding na tři automatické kroky: vytvoří GitHub repo z Next.js starter template, inicializuje Vercel projekt a spustí build — vše bez lokálního vývojového prostředí. Výsledkem je funkční Hydrogen storefront s typed Storefront API clientem, košíkem a stránkami produktů i kolekcí. Zbývá jen přidat credentials z Headless channel a storefront je živý.

    Praktický dopad je zejména pro agentury a vývojáře, kteří chtějí rychle ukázat klientovi headless storefront nebo ověřit feasibility projektu. Deploy button není náhradou za plný development workflow, ale výrazně snižuje čas od nuly k živému demu.
  zdroje:
    - title: "Shopify: Hydrogen now deploys to Vercel"
      url: "https://shopify.dev/changelog/hydrogen-now-deploys-to-vercel"
  generated_at: 2026-07-02T10:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Hydrogen developer preview (framework-agnostic verze z Editions Spring 2026) přidal **Deploy button pro Vercel**. Tlačítko automaticky:

1. Vytvoří GitHub repo z Next.js starter template
2. Inicializuje Vercel projekt
3. Spustí build

Výsledný starter template obsahuje funkční Hydrogen storefront s:
- typed Storefront API clientem
- košíkem (cart)
- stránkami produktů a kolekcí

Po deployi stačí zadat credentials z **Headless channel** (v Shopify Adminu) a storefront zobrazuje reálné produkty.

Dokumentace developer preview obsahuje sekci „Deploy a starter template" s kroky i pro ostatní frameworky a existující projekty.

## Časová osa

| Datum | Událost |
|---|---|
| Spring 2026 (Editions) | Framework-agnostic Hydrogen developer preview spuštěn |
| 2026-06-30 | Deploy button pro Vercel přidán do developer preview |
| TBD | GA release framework-agnostic Hydrogen |

## Dopad pro nás

Jde o nízkou naléhavost — funkce zjednodušuje onboarding nových projektů, nikoli stávající workflow. Pro existující Hydrogen projekty (Remix-based) se nic nemění.

Relevantní scénáře:
- **Nový headless projekt na Next.js**: Deploy button zkracuje setup fázi z hodin na minuty
- **Proof-of-concept pro klienta**: Rychlé demo bez lokálního prostředí
- **Onboarding nového vývojáře**: Nižší bariéra vstupu do Hydrogen ekosystému

Omezení: Funkce je stále v **developer preview** — není doporučená pro produkci bez důkladného testování.

## Použití v Integrátoru

Integráthor přímo Deploy button nevyužije (je to UI akce na Vercel). Nicméně framework-agnostic Hydrogen jako celek je relevantní pro headless projekty — Storefront API klient zabudovaný ve starter template může sloužit jako referenční implementace pro vlastní integrace nebo jako základ Next.js frontendů napojených na Shopify přes Storefront API.
