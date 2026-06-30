---
date: 2026-06-29
title: "POS activity log pro high-risk register akce — staff attribution + timestamp + device"
title_en: "POS activity log for high-risk register actions"
slug: pos-activity-log-high-risk-actions
zdroj: https://changelog.shopify.com/posts/pos-activity-log
shrnuto_dne: 2026-06-30
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-06-29
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Pokud integrátor pracuje s POS ordery, refundy nebo cash management daty, může activity log sloužit jako auditní zdroj pro klientské reporty nebo fraud detekci."
dotcene_klienty: []
souvisejici: ["staff-attribution-pos-improvements", "pos-mid-session-cash-counts", "pos-returns-exchanges-cart"]
tldr: "Shopify POS nově loguje high-risk register akce (refundy, manuální slevy, cash drawer operace) s automatickým přiřazením zaměstnance, timestampem, device ID a lokací — přístupné přes POS channel v Shopify Admin."
tagy: [pos, activity-log, audit, staff, security, compliance]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify POS nyní nabízí nativní activity log pro high-risk register akce. Každá riziková operace provedená na pokladně — od otevření cash draweru přes manuální slevy až po vracení zboží — se automaticky zaznamená s plným kontextem: jméno zaměstnance, přesný čas, device ID a lokace prodejny.

    Dosud merchanté neměli v POS žádný standardní způsob, jak zpětně dohledat, kdo a kdy provedl konkrétní operaci. Audit trail byl buď ruční, nebo závislý na externích nástrojích. Nový log řeší tento gap přímo v Shopify Admin, v nastavení POS channel, s možností filtrovat záznamy podle zaměstnance, lokace nebo typu události.

    Praktický dopad je nejvýraznější pro retail merchanty s více prodejnami a zaměstnanci. Log umožňuje rychlé vyšetření nesrovnalostí v cash managementu, prevenci interních podvodů a plnění compliance požadavků bez nutnosti třetích stran. Zaměstnanecká jména se rozlišují při čtení záznamu (resolved at read time), takže historické záznamy vždy zobrazují aktuální data bez zanechání starých PII.

    Funkce je dostupná od 29. června 2026 a nevyžaduje žádnou dodatečnou konfiguraci — log se aktivuje automaticky pro všechny POS stores.
  zdroje:
    - title: "Shopify: POS activity log for high-risk register actions"
      url: "https://changelog.shopify.com/posts/pos-activity-log"
  generated_at: 2026-06-30T12:00:00Z
  model: claude-sonnet-4-6
---

## Co se mění

Shopify POS zavádí nativní **activity log** pro high-risk register akce. Každý zaznamenaný event obsahuje:

- **Staff attribution** — jméno zaměstnance přiřazené automaticky (resolved at read time, bez stale PII)
- **Timestamp** — přesný čas provedení akce
- **Device ID** — identifikátor konkrétního POS zařízení
- **Lokace** — prodejna, kde k akci došlo

### Sledované akce

| Kategorie | Konkrétní akce |
|-----------|---------------|
| Cash management | Otevření cash draweru, přidání/odebrání hotovosti, mid-session counts |
| Slevy | Manuální slevy na cart nebo line item |
| Transakce | Void transakce |
| Vracení | Returns a refunds |
| Zákazníci | Přístup k záznamu zákazníka |
| Oprávnění | Manager overrides (včetně schválených navazujících akcí) |

### Přístup

Nová stránka nastavení je dostupná přes **Shopify Admin → POS channel**. Záznamy lze filtrovat podle:
- zaměstnance
- lokace
- typu události

## Časová osa

| Datum | Událost |
|-------|---------|
| 2026-06-29 | Funkce dostupná — automaticky aktivní pro všechny POS stores |

Žádná migrace ani konfigurace není potřeba. Log se spouští automaticky.

## Dopad pro nás

Tato funkce je čistě merchant-facing a nevyžaduje zásah ze strany vývojářů ani změny v integracích. Pro **retail klienty s více prodejnami a zaměstnanci** jde o relevantní novinku ke komunikaci, zejména v kontextu:

- **Fraud prevention** — zpětná kontrola, kdo přidal manuální slevu nebo provedl refund
- **Compliance** — auditní trail bez závislosti na externích nástrojích
- **Cash management** — přehled všech drawer operací s přiřazeným zaměstnancem

Pro naše projekty bez POS komponenty je dopad nulový.

## Použití v Integrátoru

Pokud integrátor pracuje s POS daty (ordery, refundy, cash sessions), activity log může sloužit jako doplňkový auditní zdroj. V aktuální podobě Shopify nevystavuje activity log přes API — data jsou dostupná pouze přes Admin UI. Sledovat, zda Shopify v budoucnu přidá API endpoint pro programatický přístup k log záznamům, má smysl zejména pro klienty s požadavky na automatizovaný compliance reporting.
