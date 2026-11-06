---
date: 2026-11-04
title: "CustomerPaymentMethodRevocationReason: nový enum value RETRY_DECLINED (subscription dunning)"
title_en: "RETRY_DECLINED added to CustomerPaymentMethodRevocationReason"
slug: retry-declined-customer-payment-method-revocation
zdroj: https://shopify.dev/changelog/posts/retry_declined-added-to-customerpaymentmethodrevocationreason
shrnuto_dne: 2026-11-06
kategorie: [nova-api]
api_oblast: admin
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-11-04
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Týká se jen aplikací, které čtou CustomerPaymentMethod.revokedReason nebo reagují na webhook customer_payment_methods/revoke; pokud s předplatným nepracujeme, dopad je nulový."
dotcene_klienty: []
souvisejici: [editions-fall-2026-payments, draft-order-subscriptions, subscription-contract-calculation-api-new]
tldr: "Pole CustomerPaymentMethod.revokedReason může od Admin API verze 2027-01 vracet novou hodnotu RETRY_DECLINED, když platební metoda předplatného skončí proto, že platební procesor zablokoval další pokusy o stržení platby; starší verze dál vrací TOO_MANY_CONSECUTIVE_FAILURES."
tagy: [subscriptions, payments, dunning, graphql, enum, customer-payment-method]
zdroj_kanal: dev-changelog
kontext:
  background: |
    Platební metoda zákazníka (CustomerPaymentMethod) je uložený platební prostředek, který aplikace pro předplatné používá k opakovanému strhávání plateb. Když se platba nepodaří, Shopify a aplikace typicky zkoušejí strhnutí opakovat (takzvaný dunning). Po vyčerpání pokusů nebo na pokyn procesoru se metoda zneplatní a Shopify odešle webhook customer_payment_methods/revoke. Důvod zneplatnění je dostupný v poli revokedReason typu CustomerPaymentMethodRevocationReason.

    Dosud se případ, kdy procesor zablokoval další opakování, schovával pod obecnou hodnotu TOO_MANY_CONSECUTIVE_FAILURES. Nová hodnota RETRY_DECLINED ho odlišuje: znamená, že procesor další pokusy o platbu na tuto uloženou metodu už nepovolí. Pro aplikaci je to jasnější signál, že opakování nemá smysl a zákazník musí dodat jinou platební metodu.

    Změna platí pro GraphQL Admin API ve verzi 2027-01 a novější, starší verze zůstávají beze změny a vracejí původní hodnotu. Payload webhooku se nemění, důvod si aplikace dotáhne dotazem na revokedReason. Shopify změnu označil jako aktualizaci bez nutné akce, ale aplikace s přísným switch nebo exhaustive match nad enumem by měly novou hodnotu ošetřit.
  zdroje:
    - title: "Shopify: RETRY_DECLINED added to CustomerPaymentMethodRevocationReason"
      url: "https://shopify.dev/changelog/posts/retry_declined-added-to-customerpaymentmethodrevocationreason"
  generated_at: 2026-11-06T12:00:00Z
  model: claude-sonnet-4-5
---

## Co se mění

Enum CustomerPaymentMethodRevocationReason dostává novou hodnotu RETRY_DECLINED. Pole CustomerPaymentMethod.revokedReason ji vrací ve chvíli, kdy je platební metoda předplatného zneplatněna, protože platební procesor zablokoval další pokusy o stržení platby. V dřívějších verzích API se tyto případy hlásily jako TOO_MANY_CONSECUTIVE_FAILURES a tak to zůstává i nadále u starších verzí.

Webhook customer_payment_methods/revoke má beze změny stejný payload. Aplikace po jeho přijetí dotazem zjistí revokedReason a podle něj rozliší, zda šlo o RETRY_DECLINED, nebo o TOO_MANY_CONSECUTIVE_FAILURES.

Shopify doporučuje hodnotu využít v komunikaci: informovat obchodníka i kupujícího, že procesor zastavil platby na uloženou metodu a že je potřeba zadat jinou.

## Časová osa

- 2026-11-04: zveřejnění changelogu.
- Admin API 2027-01 a novější: pole může vracet RETRY_DECLINED.
- Starší verze API: beze změny, vrací TOO_MANY_CONSECUTIVE_FAILURES.

## Dopad pro nás

**Pro vývojáře:** Pokud kód mapuje hodnoty CustomerPaymentMethodRevocationReason (switch, slovník, typy generované ze schématu), po přechodu na 2027-01 je třeba přidat větev pro RETRY_DECLINED, aby neskončila v neznámém případu. Logika dunningu a textace e-mailů pro zákazníka se dají rozlišit: RETRY_DECLINED znamená vyzvat k nové platební metodě, nikoli další opakování.

**Pro PM / PO:** Změna je nízké naléhavosti a bez nutné akce. Zajímavá je pro projekty s předplatným, kde lze lépe cílit komunikaci se zákazníky po neúspěšných platbách. Ostatních projektů se netýká.

## Použití v Integrátoru

Pokud Integrátor zpracovává předplatné nebo webhook customer_payment_methods/revoke, stačí při přechodu na API 2027-01 ošetřit novou hodnotu enumu. Jinak není potřeba nic dělat.
