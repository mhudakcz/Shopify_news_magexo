---
date: 2026-10-28
title: "Passkeys — faster + more secure sign-in do Shopify Admin"
title_en: "Passkeys for admin sign-in"
slug: passkeys-admin-signin
zdroj: https://www.shopify.com/editions/fall2026
shrnuto_dne: 2026-10-28
kategorie: [nova-prilezitost]
api_oblast: admin
nalehavost: stredni
customer_facing: false
ucinnost_od: 2026-10-28
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Passkeys se týkají interaktivního přihlášení lidí do Shopify Adminu, ne API přístupu aplikací, takže nasazené synchronizace neovlivní. Nepřímo ale mění, jak se do obchodů přihlašují naši vývojáři a konzultanti, a postupy počítající se sdíleným účtem nebo s automatizovaným přihlášením do Adminu je potřeba zkontrolovat."
dotcene_klienty: []
souvisejici: ["editions-fall-2026", "editions-fall-2026-operations", "rbac-org-management-partners", "partner-details-collaborator-requests"]
editions_release: fall-2026
tldr: "Editions Fall '26 v tématu Operations uvádějí passkeys pro přihlášení do Shopify Adminu: lze je nastavit při přihlášení, nebo je účet dostane automaticky, pokud je způsobilý. Jde o rychlejší a bezpečnější přihlášení bez hesla, odolné vůči phishingu. Zdroj neuvádí datum, tarif, region ani kritéria způsobilosti a API se to netýká."
tagy: [passkeys, security, authentication, webauthn, admin, fido]
zdroj_kanal: editions
kontext:
  background: |
    Přihlášení do Shopify Adminu stojí tradičně na hesle doplněném druhým faktorem, typicky jednorázovým kódem z aplikace nebo z SMS. Obě části lze na podvržené přihlašovací stránce útočníkovi prozradit, a proto se převzetí admin účtu přes phishing a social engineering drží mezi nejčastějšími bezpečnostními incidenty obchodníků i agentur. Admin účet přitom otevírá přístup k objednávkám, zákaznickým datům i nastavení plateb.

    Passkeys jsou obecný průmyslový standard, který heslo nahrazuje kryptografickým klíčem. Používají veřejný klíč podle standardu WebAuthn z rodiny FIDO2: soukromý klíč zůstává na zařízení uživatele nebo v jeho správci hesel a služba dostane jen klíč veřejný. Přihlášení potvrdí uživatel odemknutím zařízení, například otiskem prstu, obličejem (Touch ID, Face ID, Windows Hello), PINem zařízení nebo hardwarovým bezpečnostním klíčem. Passkey je navíc svázaný s doménou služby, takže ho falešná stránka nedokáže vylákat. To je hlavní důvod, proč se označuje za odolný vůči phishingu.

    Fall '26 Editions řadí passkeys do tématu Operations, do části o adminu a bezpečnosti. Zdrojová stránka je popisuje jednou větou: passkey lze nastavit při přihlášení, nebo ho účet dostane automaticky, pokud je způsobilý, a přihlašování tak má být rychlejší a bezpečnější. Položka nemá označení Soon ani datum a stránka neuvádí tarifní omezení, regiony, kritéria způsobilosti ani žádné API. Technické detaily výše (WebAuthn, typy autentikátorů) jsou obecný popis technologie, ne text Shopify, a konkrétní podporu v Adminu je potřeba ověřit na vlastním účtu.
  zdroje:
    - title: "Shopify Editions Fall '26 (oficiální stránka)"
      url: "https://www.shopify.com/editions/fall2026"
    - title: "Archiv: Editions Fall '26, Operations"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/editions-fall-2026-operations/"
    - title: "Archiv: Role-based access control a org management pro partnery"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rbac-org-management-partners/"
    - title: "Archiv: Merchanti vidí partner details u collaborator requests"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/partner-details-collaborator-requests/"
  generated_at: 2026-10-28T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Shopify v Editions Fall '26 zařadil do tématu Operations passkeys pro přihlášení do Adminu. Podle zdrojové stránky si merchant nebo člen týmu může passkey nastavit přímo při přihlášení, nebo ho jeho účet dostane automaticky, pokud je způsobilý. Slibovaný přínos je rychlejší a bezpečnější přihlášení. Víc stránka neříká, položka je v přehledu Operations uvedená vedle redesignu adminu, vyhledávání a activity logu (viz [přehled tématu Operations](/Shopify_news_magexo/zmena/editions-fall-2026-operations/)).

Co passkeys jsou (obecný popis technologie, ne formulace Shopify):

- **Klíč místo hesla.** Passkey je přihlašovací údaj na bázi veřejného klíče (WebAuthn, standard FIDO2). Soukromý klíč zůstává na zařízení nebo ve správci hesel, na server se neposílá a při přihlášení se nic neopisuje.
- **Odemknutí zařízením.** Přihlášení se potvrdí otiskem prstu, obličejem, PINem zařízení nebo hardwarovým klíčem, typicky Touch ID, Face ID či Windows Hello.
- **Odolnost vůči phishingu.** Passkey je vázaný na doménu, takže ho falešná přihlašovací stránka nedokáže použít. Heslo ani kód z aplikace takovou ochranu nemají.

Co Editions neuvádí:

- **Vztah k heslu a 2FA.** Vykládáme to jako alternativu k dosavadnímu přihlášení, ale ze zdroje se nedá poznat, zda passkeys časem heslo a druhý faktor nahradí nebo je Shopify bude vyžadovat.
- **Způsobilost účtu.** Kritéria, podle kterých účet passkey dostane automaticky, nejsou popsaná.
- **Typy autentikátorů.** Zda jde o passkeys vázané na zařízení, synchronizované přes správce hesel, nebo i o hardwarové klíče, zdroj nespecifikuje.
- **Dostupnost.** Žádný tarif, region, datum ani označení Soon.
- **Víceobchodní a collaborator přístup.** Jak passkeys fungují u účtů, které vstupují do mnoha obchodů, a jak se obnovuje přístup po ztrátě zařízení, popis neřeší.
- **API.** Žádné API ani změna scopes se v popisu nevyskytuje.

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-03-30 | RBAC a správa organizace pro partnery, jemnější řízení přístupu v Partner Dashboardu ([článek](/Shopify_news_magexo/zmena/rbac-org-management-partners/)) |
| 2026-07-30 | Merchanti u nových žádostí o collaborator access vidí detaily o partnerské organizaci ([článek](/Shopify_news_magexo/zmena/partner-details-collaborator-requests/)) |
| 2026-10-28 | Editions Fall '26 uvádějí passkeys pro přihlášení do Adminu, bez data a bez označení Soon |

U samotné položky žádné datum nasazení uvedené není. Přesný stav proto sledujeme na vlastních účtech a v nápovědě Shopify a plánování stavíme na skutečném rolloutu, ne na datu vydání Editions.

## Dopad pro nás

**Pro vývojáře:** Na Admin API, tokeny aplikací ani OAuth to podle popisu nemá žádný dopad, passkeys se týkají přihlášení člověka. Praktické body ke kontrole:

- **Automatizované přihlášení do Adminu.** Pokud některé E2E testy v prohlížeči, skripty nebo sdílený testovací účet spoléhají na přihlášení heslem a kódem, jsou to první kandidáti na problém, kdyby Shopify způsob přihlášení časem omezil. Editions o povinnosti nic neuvádí, ale vyplatí se takové postupy projít a tam, kde to jde, přejít na API přístup nebo vývojový obchod.
- **Sdílené účty.** Passkey patří jedné osobě a jejímu zařízení, takže jeden společný účet pro celý tým se s ním nehodí. Správný model jsou osobní účty členů týmu a collaborator přístup partnerské organizace, viz [RBAC pro partnery](/Shopify_news_magexo/zmena/rbac-org-management-partners/).
- **Ověření na vlastním účtu.** Zjistit, kde se passkey nastavuje, zda jich lze mít na účtu víc (pracovní notebook a telefon), jak funguje v soukromém okně, ve sdílené nebo vzdálené ploše a co se stane po ztrátě zařízení.

**Pro PM / PO:** Jde o bezpečnostní hygienu se střední naléhavostí, bez povinné akce a bez termínu. Doporučený postup je ověřit passkeys na vlastních účtech a pak je doporučit merchantům. Stojí za to s ním počítat v několika místech:

- **Obchodní argument.** Phishing a social engineering jsou častá cesta k převzetí admin účtu. Shopify v posledních měsících posiluje důvěru v partnerském ekosystému (ověřování identity partnerů, [detaily partnera u collaborator requests](/Shopify_news_magexo/zmena/partner-details-collaborator-requests/)) a passkeys tuto řadu doplňují o samotné přihlášení.
- **Agentury a více obchodů.** Pokud se do obchodů vstupuje přes jednu osobní identitu, může passkey nahradit hesla a kódy na úrovni člověka, ne jednotlivých obchodů. Je to náš předpoklad, Editions o víceobchodním přístupu nic neříká, a proto ho před slibem ověříme.
- **Onboarding a offboarding.** Do kontrolního seznamu pro nové kolegy patří nastavení passkey a volba zařízení (firemní notebook, soukromý telefon, správce hesel). Odebrání přístupu k obchodu zůstává v nastavení uživatelů daného obchodu.
- **Komunikace s merchanty.** Pokud účet passkey dostane automaticky, může obchodníka překvapit nový přihlašovací dialog. U menších obchodů, kde se účet sdílí, stojí za to nabídnout krátký návod a převedení na osobní účty.

## Použití v Integrátoru

Integrátor komunikuje se Shopifem přes API a tokeny, takže passkeys ho přímo neovlivňují. Týkají se lidí, kteří do obchodů vstupují, a proto má smysl je zapnout u všech členů týmu s přístupem k produkčním obchodům.
