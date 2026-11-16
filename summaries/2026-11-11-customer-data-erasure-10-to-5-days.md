---
date: 2026-11-11
title: "⚠️ Customer data erasure requests: 10 → 5 dní (GDPR/CCPA compliance acceleration)"
title_en: "Customer data erasure requests updated from 10 days to 5"
slug: customer-data-erasure-10-to-5-days
zdroj: https://shopify.dev/changelog/posts/updated-handling-of-customer-data-erasure-requests
shrnuto_dne: 2026-11-16
kategorie: [breaking]
api_oblast: admin
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-11-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se nás nepřímo: pokud některá naše aplikace drží kopie zákaznických dat nebo reaguje na privacy webhooky, musí své mazání stíhat v kratším okně."
dotcene_klienty: []
souvisejici: [ip-allowlists-required-public-apps, ip-allowlist-admin-api-restriction]
tldr: "Žádosti o výmaz zákaznických dat se v Shopify nově zpracují po 5 dnech místo dosavadních 10, takže případné navazující procesy v aplikacích a integracích musí být rychlejší."
tagy: [gdpr, ccpa, data-erasure, privacy, compliance, webhooks, breaking]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Shopify zkrátilo lhůtu, po kterou čeká žádost o výmaz zákaznických dat (customer data erasure request), z 10 dní na 5 dní. Dříve žádost zůstala 10 dní ve stavu čekání a teprve potom se zpracovala. Nově se zpracuje 5 dní po podání, bez ohledu na to, kdy zákazník naposledy objednával.

    Jedna výjimka zůstává: pokud má příjemce dárkové karty naplánované odeslání, žádost zůstane čekat, dokud se dárková karta nedoručí. Changelog sám výslovně nezmiňuje GDPR ani CCPA a nepopisuje změnu webhooků; souvislost s právem na výmaz je naše interpretace a odpovídá obecnému regulatornímu tlaku na rychlejší vyřizování.

    Post je označen jako změna bez povinné akce a neuvádí dotčené API verze. Datum účinnosti se v textu a v metadatech liší (10. a 11. listopadu 2026), proto počítejte s tím, že změna je platná už nyní.
  zdroje:
    - title: "Shopify: Customer data erasure requests updated from 10 days to 5"
      url: "https://shopify.dev/changelog/posts/updated-handling-of-customer-data-erasure-requests"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Žádosti o výmaz zákaznických dat už nečekají 10 dní, ale zpracují se 5 dní po podání. Platí to bez ohledu na datum poslední zákazníkovy objednávky. Výjimkou je příjemce dárkové karty s naplánovaným odesláním, kdy žádost čeká na doručení karty.

## Časová osa

- 10. listopadu 2026: změna podle textu postu účinná.
- 11. listopadu 2026: publikace postu a datum účinnosti v metadatech.
- Nově podané žádosti: zpracování po 5 dnech místo 10.

## Dopad pro nás

**Pro vývojáře:** Post neuvádí žádnou povinnou akci ani změnu webhooků. Přesto ověřte, že naše aplikace a synchronizace, které si ukládají kopie zákaznických dat, umí smazání provést v kratším okně a nezůstávají na datech déle, než je nutné. Zkontrolujte i zpracování privacy webhooků (customers/redact, customers/data_request), pokud je odebíráme.

**Pro PM / PO:** Kratší lhůta zvyšuje tlak na rychlé vyřizování žádostí a na dohledatelnost, kde všude zákaznická data držíme. Doporučujeme s kolegy z compliance potvrdit interní procesy výmazu a případně upozornit obchodníky, jejichž data zpracováváme.

## Použití v Integrátoru

Integrátor ukládá a synchronizuje zákaznická data mezi systémy, proto je vhodné ověřit, že jeho mazací postupy zvládnou nové 5denní okno.
