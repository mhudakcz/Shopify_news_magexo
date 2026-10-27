---
date: 2026-10-23
title: "Admin API: unlink customer identity provider subject (SSO/OIDC separation)"
title_en: "Unlink a customer's identity provider subject with the GraphQL Admin API"
slug: unlink-customer-identity-provider-subject-admin-api
zdroj: https://shopify.dev/changelog/posts/unlink-a-customers-identity-provider-subject-with-the-admin-graphql-api
shrnuto_dne: 2026-10-27
kategorie: [nova-api, nova-prilezitost]
api_oblast: admin
api_verze: ["2027-01"]
nalehavost: nizka
customer_facing: false
ucinnost_od: 2027-01-01
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Zatím nevyužíváme; relevantní by to bylo při hromadné správě SSO propojení zákazníků u Plus a B2B obchodů s vlastním identity providerem, například při přechodu z jednoho IdP na jiný."
dotcene_klienty: []
souvisejici: [unlink-customer-identity-provider, sync-customer-data-identity-provider, b2b-for-all-merchants]
tldr: "Od Admin GraphQL API 2027-01 lze mutací `identityProviderSubjectDelete` programově odpojit zákazníka od subjectu v externím identity provideru, aniž by se mazal customer účet; zákazník je odhlášen ze všech relací a při dalším přihlášení přes IdP se propojí znovu."
tagy: [admin-api, graphql, customer, identity-provider, sso, oidc, b2b, "2027-01"]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Pokud se zákazník přihlašuje do obchodu přes externí identity provider (IdP), například přes OIDC (OpenID Connect) s Okta, Auth0 nebo Microsoft Entra ID, uloží si Shopify u customer záznamu tzv. subject, tedy identifikátor zákazníka na straně IdP. Právě přes subject pak Shopify pozná, ke kterému customer účtu se příchozí přihlášení vztahuje. Aktuální seznam těchto subjectů lze přečíst z pole `Customer.identityProviderSubjects`.

    Problém nastává, když je vazba na IdP nesprávná nebo zastaralá. Typicky jde o migraci mezi identity providery (například přechod z Azure AD na Okta, kdy se subject ID zákazníků změní), o chybnou konfiguraci nebo o vazbu, kterou je z bezpečnostních důvodů potřeba zrušit. Zákazník pak nemůže dokončit přihlášení a merchant se bez nástroje na odpojení neobejde bez pomoci Supportu. V červnu 2026 Shopify přidal odpojení zákazníka od custom identity providera do Admin UI. Programový přístup ale chyběl, takže se nedalo odpojit víc zákazníků najednou ani zapojit odpojení do vlastních procesů.

    Nová mutace `identityProviderSubjectDelete` tuto mezeru zavírá v Admin GraphQL API. Odpojuje vazbu mezi customer účtem a subjectem v IdP, nikoli samotný účet, takže objednávky a další data zákazníka zůstávají. Scénáře jako migrace IdP nebo odebrání kompromitované vazby jsou typická použití, changelog je sám výslovně nevyjmenovává. Post je stručný a neuvádí návratová pole, user errors ani příklady, ty je potřeba dohledat v referenci mutace pro verzi 2027-01.
  zdroje:
    - title: "Shopify: Unlink a customer's identity provider subject with the GraphQL Admin API"
      url: "https://shopify.dev/changelog/posts/unlink-a-customers-identity-provider-subject-with-the-admin-graphql-api"
    - title: "Shopify: identityProviderSubjectDelete (Admin GraphQL API 2027-01)"
      url: "https://shopify.dev/docs/api/admin-graphql/2027-01/mutations/identityProviderSubjectDelete"
  generated_at: 2026-10-27T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Od verze GraphQL Admin API **2027-01** je k dispozici nová mutace **`identityProviderSubjectDelete`**. Slouží k odpojení (unlink) customer účtu od subjectu ve třetí straně provozovaném identity provideru. Changelog ji označuje jako novou a zároveň uvádí, že nevyžaduje žádnou akci.

**Argumenty mutace:**

- `customerId` je ID zákazníka.
- `id` je ID identity provider subjectu, který se má odpojit. Subject ID lze získat z pole `Customer.identityProviderSubjects`.

**Chování:**

- Odpojení **odhlásí zákazníka ze všech existujících relací**.
- Pokud se zákazník později znovu přihlásí přes stejný identity provider, **propojí se znovu**. Mutace tedy není blokace přístupu, jen vyčištění vazby.
- Customer účet se nemaže, mění se jen jeho vazba na IdP.

**Oprávnění:** mutace vyžaduje access scope `write_customers`.

Orientační kostra volání je níže. Je ilustrativní: changelog návratová pole neuvádí, takže výběr polí (zde standardní `userErrors`) je třeba ověřit v referenci pro 2027-01.

```graphql
mutation UnlinkIdpSubject($customerId: ID!, $id: ID!) {
  identityProviderSubjectDelete(customerId: $customerId, id: $id) {
    userErrors {
      field
      message
    }
  }
}
```

Jde o API protějšek funkce, kterou Shopify v červnu 2026 zpřístupnil v Admin UI. Tam může merchant odpojit zákazníka tlačítkem Unlink v detailu zákazníka. Podrobnosti viz související článek o odpojení zákazníka od custom identity providera.

## Časová osa

- **2026-06-11:** odpojení zákazníka od custom identity providera dostupné v Admin UI (jen ruční operace).
- **2026-10-23:** Shopify oznamuje mutaci `identityProviderSubjectDelete` v dev changelogu.
- **Verze 2027-01:** mutace je dostupná od této verze Admin GraphQL API (očekávané stabilní vydání v lednu 2027). Ve starších verzích ji volat nelze.
- **Akce od vývojářů:** není vyžadována, jde o čistě volitelné rozšíření.

## Dopad pro nás

**Pro vývojáře:** Změna je aditivní a nic nerozbíjí. Pokud chceme mutaci použít, musí mít aplikace scope `write_customers` a volat API ve verzi 2027-01 nebo novější. Doporučený postup je nejprve přečíst `Customer.identityProviderSubjects`, před odpojením si subject ID uložit do logu pro audit a teprve potom zavolat mutaci. Je dobré počítat s tím, že odpojení zákazníka odhlásí ze všech relací, takže při hromadném použití může přerušit rozpracované nákupy a přihlášené sezení. Zákazník se také po dalším přihlášení přes IdP spojí znovu, takže pokud je cílem odebrat přístup (například kompromitovanému účtu), samotné odpojení nestačí a je nutné zasáhnout i na straně IdP. Podle dřívější novinky o synchronizaci dat z IdP se při přihlášení přes IdP navíc přepisují údaje zákazníka hodnotami z tokenu, takže je dobré to zohlednit při plánování migrace. Při hromadných operacích je potřeba hlídat limity GraphQL API a volání throttlovat. Co přesně mutace vrací a jaké user errors může produkovat, je nutné dohledat v referenci, changelog to neuvádí.

**Pro PM / PO:** Naléhavost je nízká, nejde o breaking change ani o deprecation. Zajímavé je to jako nová příležitost u Plus a B2B obchodů s vlastním SSO: přechod mezi identity providery (například z Azure AD na Okta) nebo odebrání kompromitované vazby jde nově zautomatizovat skriptem místo ručního klikání v Adminu nebo tiketu na Support. Při diskovery rozhovorech s B2B merchanty stojí za to zeptat se, zda používají externí IdP a zda neplánují jeho výměnu. Changelog neuvádí, pro jaké typy obchodů je funkce dostupná. Související funkce v Admin UI je spojená s custom identity providerem, takže před nabídkou merchantovi je nutné ověřit podmínky dostupnosti v dokumentaci.

## Použití v Integrátoru

Přímé využití zatím neevidujeme, mutace je nová a vychází až s verzí 2027-01. Stala by se relevantní, pokud bychom pro B2B obchody s externím identity providerem řešili migraci mezi IdP nebo hromadné čištění zastaralých SSO vazeb; do té doby stačí ji mít na radaru a při přechodu na API 2027-01 ověřit její podobu v referenci.
