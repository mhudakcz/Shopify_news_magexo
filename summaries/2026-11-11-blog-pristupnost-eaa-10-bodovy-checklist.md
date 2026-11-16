---
date: 2026-11-11
title: "Přístupnost webových stránek podle EAA: 10bodový kontrolní seznam"
slug: blog-pristupnost-eaa-10-bodovy-checklist
zdroj: https://www.shopify.com/cz/blog/pristupnost-webovych-stranek
shrnuto_dne: 2026-11-16
kategorie: [fyi]
api_oblast: other
nalehavost: vysoka
customer_facing: false
ucinnost_od: 2026-11-11
pouzivame_v_integratoru: mozna
dukaz_integratoru: "Přístupnost se týká storefrontu a vlastních theme či checkout úprav, které u merchantů děláme; samotná synchronizace dat se jí netýká."
dotcene_klienty: []
souvisejici: [editions-fall-2026-online, eu-product-identifiers-shopify-shipping-labels, editions-fall-2026]
tldr: "Shopify blog shrnuje požadavky European Accessibility Act (v ČR účinný od 28. 6. 2025) a nabízí 10bodový kontrolní seznam přístupnosti e-shopu podle WCAG."
tagy: [eaa, pristupnost, accessibility, wcag, compliance, eu, "2025"]
zdroj_kanal: blog
kontext:
  background: |
    European Accessibility Act (EAA) sjednocuje v EU požadavky na přístupnost vybraných produktů a služeb, mezi které patří i e-shopy. V ČR byla pravidla převedena do národní legislativy a platí od 28. června 2025. Technicky se vychází z normy EN 301 549, která navazuje na WCAG. Výjimku mají mimo jiné mikropodniky poskytující služby.

    Článek vysvětluje úrovně WCAG (A, AA, AAA) a čtyři principy: vnímatelnost, ovladatelnost, srozumitelnost a robustnost. Cílem většiny webů je úroveň AA a podle ní Shopify testuje své funkce. Zdůvodnění zahrnuje etiku, vyšší tržby díky širšímu publiku, reputaci i právní riziko sankcí.

    Desetibodový seznam: titulky a zvukový popis u videí, kontrast (4,5:1 pro běžný text, 3:1 pro velký text a ovládací prvky), zvětšení textu a čitelné fonty, popisky tlačítek, ikon a formulářů (včetně ARIA), skip link, bezpečné prahy blikání, správa fokusu u vyskakovacích oken, chyby formulářů propojené s polem, popisné texty odkazů a kombinace automatických a ručních testů. Mezi doporučené nástroje patří Axe, Lighthouse, WAVE a WebAIM Contrast Checker. Seznam v článku se v některých položkách liší od obecných výčtů (například klávesnicová navigace a focus indikátory jsou zmíněny v rámci dalších bodů), proto při auditu doporučujeme brát WCAG jako primární referenci.
  zdroje:
    - title: "Shopify: Přístupnost webových stránek podle EAA: 10bodový kontrolní seznam"
      url: "https://www.shopify.com/cz/blog/pristupnost-webovych-stranek"
  generated_at: 2026-11-16T12:00:00Z
  model: claude-sonnet-4-5
---

## O čem to je

Shopify blog v českém vydání shrnuje, co od e-shopů vyžaduje European Accessibility Act a jak s ním souvisí standardy WCAG. Povinnosti platí v ČR od 28. června 2025, takže jde o stav, který merchanti obsluhující spotřebitele v EU už mají plnit, a dohled se postupně zpřísňuje. Článek je praktický: nabízí desetibodový kontrolní seznam s příklady z reálných obchodů (titulky u videí, kontrast, popisky formulářů, skip link, správa fokusu v modálních oknech, chyby formulářů, popisné odkazy) a doporučuje kombinovat automatické testy (Axe, Lighthouse, WAVE) s ručním testováním klávesnicí a čtečkou obrazovky.

Důležité sdělení: přístupnost je nejlevnější řešit už při návrhu a testovat znovu před každou větší aktualizací. U existujících webů se náklady odvíjejí od rozsahu úprav, pomoci mohou přístupnostní aplikace z App Store nebo externí audit. Článek není právním poradenstvím.

## Pro koho je to relevantní

Pro všechny merchanty prodávající spotřebitelům v EU, kromě mikropodniků s výjimkou, a pro nás jako agenturu při tvorbě a úpravách témat, vlastních sekcí, checkout a customer account rozšíření. Při dodávkách stojí za to mít přístupnost jako součást definition of done: kontrola kontrastu, popisků formulářů, focus managementu v popupech a skip linku. Přímý dopad na integrace dat a synchronizační logiku nemá, proto je položka v kategorii fyi. Související novinky z Editions Fall 2026 o online storu a EU compliance témata (identifikátory produktů) ukazují, že regulatorní požadavky EU jsou dlouhodobý trend.
