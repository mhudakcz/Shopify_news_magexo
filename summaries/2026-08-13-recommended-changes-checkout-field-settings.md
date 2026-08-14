---
date: 2026-08-13
title: "Personalizovaná doporučení checkout field settings v admin"
title_en: "Recommended changes to checkout field settings are now available"
slug: recommended-changes-checkout-field-settings
zdroj: https://changelog.shopify.com/posts/recommended-changes-to-checkout-field-settings-are-now-available
shrnuto_dne: 2026-08-14
kategorie: [nova-prilezitost]
api_oblast: other
nalehavost: nizka
customer_facing: false
ucinnost_od: 2026-08-13
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Doporučení mohou tiše změnit chování checkout formuláře (email-only kontakt, povinné jméno/příjmení) - relevantní pro klienty s custom checkout branding nebo napojením na CRM/ERP podle jména zákazníka."
dotcene_klienty: []
souvisejici: [checkout-email-field-saved-indicator, checkout-accounts-configuration-api, customers-default-addresses-checkout]
tldr: "Shopify admin nyní nabízí obchodům personalizovaná doporučení, jaká pole zákaznických údajů v checkoutu zobrazit, skrýt nebo označit jako povinná."
tagy: [checkout, settings, recommendations, customer-information, conversion, optimization]
zdroj_kanal: merchant-changelog
kontext:
  background: |
    Shopify admin dostal novou funkci v sekci Checkout settings: eligible obchody nyní vidí personalizovaná doporučení pro nastavení polí se zákaznickými údaji. Doporučení vycházejí z chování zákazníků a konverzních dat konkrétního obchodu a mají pomoci najít rovnováhu mezi minimem frikce v checkoutu a dostatkem informací pro remarketing a personalizaci.

    Mezi typické návrhy patří přepnutí kontaktní metody výhradně na e-mail, vynucení vyplnění jména a příjmení, nebo volitelné sbírání telefonního čísla u doručovací adresy. Nová doporučení nejsou aplikována automaticky na existující obchody - merchant si je v admin rozhraní prohlédne a sám rozhodne, zda je přijme. U nově založených obchodů se doporučené hodnoty rovnou nastaví jako výchozí.

    Pro nás je změna nízkoprioritní, protože nejde o API ani o breaking change - jde čistě o admin UI/UX vrstvu nad existujícím Checkout settings nastavením. Přesto je dobré o ní vědět: pokud klient nastavení checkoutu přijme, může se změnit, jaká pole se zákazníkovi zobrazují a co je povinné, což se může dotknout custom checkout extensions nebo napojení na CRM, které s poli (jméno, telefon, kontaktní metoda) pracují.
  zdroje:
    - title: "Shopify: Recommended changes to checkout field settings are now available"
      url: "https://changelog.shopify.com/posts/recommended-changes-to-checkout-field-settings-are-now-available"
  generated_at: 2026-08-14T12:00:00Z
  model: claude-sonnet-4-5
---
## Co se mění

Shopify přidal do admin Checkout settings novou sekci s personalizovanými doporučeními pro nastavení zákaznických polí. Namísto obecného návodu teď eligible obchody vidí konkrétní návrhy šité na míru vlastnímu chování zákazníků a konverzním datům - typicky doporučení přepnout kontaktní metodu na e-mail, vyžadovat jméno a příjmení, nebo volitelně sbírat telefon k doručovací adrese.

Cílem je najít lepší rovnováhu mezi minimem frikce v checkoutu (méně polí = vyšší konverze) a dostatkem dat o zákazníkovi pro pozdější remarketing a personalizaci. Merchant si doporučení jen prohlédne a sám odklikne, které chce přijmout - existující nastavení se nemění automaticky. Nově založené obchody dostávají doporučené hodnoty rovnou jako výchozí.

Nejde o žádnou novou API funkcionalitu ani breaking change - je to čistě vrstva nad stávajícím Checkout settings, takže z pohledu vývoje se nic nemění. Relevantní je to spíš pro PM/PO a merchanty samotné.

## Časová osa

- 13. 8. 2026 - funkce dostupná pro eligible obchody v admin Checkout settings

## Dopad pro nás

**Pro vývojáře:** Žádná akce nutná - nejde o API změnu, jen o admin UI doporučení nad existujícím nastavením polí v checkoutu. Pokud klient doporučení přijme, stojí za to zkontrolovat, jestli custom checkout extensions nebo napojení na CRM/ERP nezávisí na tom, že určitá pole (telefon, jméno/příjmení) byla dřív nepovinná nebo skrytá.

**Pro PM / PO:** Dobré vědět jako kontext při konzultacích s klienty o checkout konverzi - Shopify teď sám aktivně nabízí data-driven doporučení, takže se klienti mohou ptát, zda je přijmout. Stojí za zmínku, že přijetí může zvýšit počet povinných polí a tím teoreticky mírně snížit konverzi ve prospěch lepších dat o zákaznících.

## Použití v Integrátoru

Přímý dopad nemá - jde o admin nastavení bez API změny. Pokud ale klient doporučení přijme a začne vyžadovat jméno/příjmení nebo telefon, stojí za kontrolu, zda na to nejsou navázané předpoklady v propojení checkoutu s CRM/ERP systémy.
