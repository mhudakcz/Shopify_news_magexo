---
date: 2026-04-13
title: "Renewal mTLS klientského certifikátu pro Payments Apps 15. 6. 2026"
title_en: "mTLS client certificate renewal for Payments Apps"
slug: mtls-payments-cert-renewal
zdroj: https://shopify.dev/changelog/mtls-client-certificate-renewal-for-payments-apps
shrnuto_dne: 2026-04-29

kategorie: [breaking-change, integrace]
api_oblast: billing
api_verze: []
nalehavost: nizka
customer_facing: false

ucinnost_od: 2026-06-15

pouzivame_v_integratoru: ne
dukaz_integratoru: "Týká se Payments Apps. Neděláme payment processing aplikace."
dotcene_klienty: []

kontext:
  background: |
    mTLS (mutual TLS, neboli oboustranné TLS) je rozšíření standardního protokolu TLS, při němž se vzájemně ověřují obě strany komunikace — server i klient — pomocí digitálních certifikátů. Zatímco klasické HTTPS ověřuje pouze server (vůči prohlížeči), mTLS navíc vyžaduje, aby klient předložil svůj vlastní certifikát podepsaný důvěryhodnou Certificate Authority. Spojení je poté navázáno jen tehdy, pokud certifikát splní podmínky ověřovací logiky protistrany.

    V ekosystému Shopify Payments Apps slouží mTLS jako bezpečnostní vrstva při komunikaci, kdy Shopify jako klient volá endpointy platební aplikace třetí strany. Shopify vystavuje klientský certifikát podepsaný vlastní interní CA; platební aplikace pak při příchozím požadavku ověří, že certifikát pochází skutečně od Shopify. Díky tomu není možné volat platební endpoint z libovolného zdroje — musí jít o autorizovanou Shopify infrastrukturu. Tato praxe odpovídá standardu zero-trust security, kde nestačí samotné síťové umístění ani API klíč.

    Certifikáty mají omezenou životnost a musí být pravidelně obnovovány. Pokud platební aplikace implementuje vlastní validační logiku — například kontroluje Common Name nebo konkrétní pole certifikátu místo spoléhání na systémový trust store — je nutné ji před nasazením nového certifikátu aktualizovat. Jinak dojde k selhání mTLS handshake a přerušení zpracování plateb. Aplikace spoléhající na standardní trust store bez vlastní validace nejsou dotčeny, protože nový certifikát je podepsán stejnou CA jako stávající.

    Pravidelná obměna certifikátů je součástí širší bezpečnostní strategie Shopify pro Payments Apps API, která zahrnuje i granulární rejection reason codes nebo kontrolu tokenů. Vývojáři platebních aplikací by měli sledovat Shopify changelog a mít nastaven proces pro včasnou rotaci certifikátů.
  zdroje:
    - title: "Shopify Changelog: mTLS client certificate renewal for Payments Apps"
      url: "https://shopify.dev/changelog/mtls-client-certificate-renewal-for-payments-apps"
    - title: "Shopify archive: Granulárnější rejection reason codes v Payments Apps API"
      url: "https://mhudakcz.github.io/Shopify_news_magexo/zmena/rejection-reason-codes-payments-apps/"
  generated_at: 2026-06-05T16:38:26Z
  model: claude-sonnet-4-6
tldr: "Shopify obnovuje mTLS certifikát pro Payments Apps 15. 6. 2026; vlastní validační logika v platebních appech musí být aktualizovaná."
tagy: [payments, mtls, security, certificate]
---

## Co se mění
Shopify **15. června 2026** obnovuje klientský mTLS certifikát používaný pro komunikaci mezi Shopify a Payments Apps. Aplikace s vlastní validační logikou (ne defaultní trust store) musí před tímto datem aktualizovat povolený certifikát, jinak přestane mTLS handshake fungovat.

## Časová osa
- **2026-06-15** — nasazení nového certifikátu

## Použití v Integrátoru
**Nepoužíváme** — týká se Payments Apps API, neimplementujeme platební aplikace.
