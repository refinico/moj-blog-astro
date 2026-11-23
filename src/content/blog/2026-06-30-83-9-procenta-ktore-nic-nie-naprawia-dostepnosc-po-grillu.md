---
title: "83,9 procenta, które nic nie naprawia. Dostępność po grillu"
description: "83,9 procenta stron głównych ma tekst o zbyt niskim kontraście."
pubDate: "2026-06-30"
tags: ["AI", "Dostępność", "WCAG", "Frontend", "DesignSystem"]
draft: false
sourceDraftId: "0b232730-1723-42f3-9ea2-e29de284dbb8"
heroImage: "../../assets/0b232730-1723-42f3-9ea2-e29de284dbb8.jpg"
---

## Czego się dowiesz

- 83,9% stron z niskim kontrastem wobec 79,1% w 2025
- 95,9% to dolna granica — skan pokrywa 30–40% kryteriów
- 56,1 błędu na stronę, sześć typów to 96% problemów
- Brak wykrytych błędów nie oznacza zgodności z WCAG
- DoD: klawiatura, nazwa kontroli, ogłoszony komunikat błędu

83,9 procenta stron głównych ma tekst o zbyt niskim kontraście. W 2025 roku było to 79,1 procenta — liczby nie tylko się nie poprawiły, ale poszły w złą stronę.

Dane pochodzą z raportu [WebAIM Million 2026](https://webaim.org/projects/million/), który bada milion najpopularniejszych stron. Pomiar wykonano w lutym 2026 roku, a raport opublikowano pod koniec marca. Wersja v1 podała 83,9 procenta poprawnie, ale nie zaznaczyła, że to odsetek stron z wykrywalnym błędem, a nie miara czytelności wszystkich tekstów.

30 czerwca 2026 roku [Smashing Magazine](https://smashingmagazine.com/2026/06/why-accessibility-operational-capability-not-feature/) opisał podejście, w którym dostępność traktuje się jak zdolność operacyjną — obok prywatności, bezpieczeństwa i obserwowalności. Punkt wyjścia jest zwykły: checkout złożony w jedno popołudnie, asystent podsuwa układ, test szczęśliwej ścieżki przechodzi, a „Pay Now” jest klikalnym divem bez roli i bez możliwości ustawienia focusu.

Efekt grillu jest trojaki. Po pierwsze, v1 poprawnie opisało pułapkę audytu, ale pominęło skalę: raport WebAIM notuje średnio 56,1 błędu na stronę i 95,9 procenta stron z wykrywalnymi naruszeniami WCAG. Po drugie, sześć najczęstszych błędów odpowiada za 96 procent wszystkich znalezionych problemów i nie zmienia się od siedmiu lat. Po trzecie, średnia strona ma 34 osobne przypadki zbyt niskiego kontrastu.

Korekta dotyczy też interpretacji liczby 95,9 procenta. [Analiza wcagc](https://wcagc.com/blog/webaim-million-2026) przypomina, że narzędzie WAVE wykrywa tylko podzbiór naruszeń: szacunek maszynowalnego zakresu to 30–40 procent kryteriów. Innymi słowy 95,9 procenta to dolna granica, a nie pełny obraz. WebAIM wprost ostrzega, że brak wykrytych błędów nie oznacza zgodności.

To jest właśnie kontrargument wobec obu stron sporu. Automatyczny skan nie wystarczy, ale też nie można czekać na idealny audyt. [Zestawienie statystyk](https://accessibility.build/research/web-accessibility-statistics) wskazuje, że liczba błędów rośnie szybciej niż tempo prac naprawczych, a zmiana listy badanych stron co roku utrudnia porównania.

W raporcie WebAIM jest jeszcze jedna liczba, która zmienia perspektywę: liczba błędów na stronę wzrosła o 10,1 procenta w stosunku do 2025 roku. To nie jest efekt większej liczby badanych stron, tylko rosnącej złożoności interfejsów. Asystenci AI dokładają do tego kolejne warstwy generowanego kodu, którego nikt nie czyta uważnie przed wydaniem.

Dla praktyka wniosek jest więc operacyjny, nie deklaratywny. Dodaj do definicji gotowości trzy czynności: przejście przez zadanie klawiaturą, poprawną nazwę kontroli dla czytnika ekranu i komunikat o błędzie, który zostaje faktycznie ogłoszony. Jeden szary token w systemie designu potrafi usunąć tysiące błędów naraz — pod warunkiem że ktoś go zmieni przed wydaniem, nie po zgłoszeniu od klienta.

[Praca Eugene'a Yana nad zabezpieczaniem kodu](https://eugeneyan.com/writing/secure-source-code/) pokazuje, że model może wskazywać ryzykowne wzorce przed scaleniem. Nie przejmuje jednak odpowiedzialności za wybór poprawki.


Dostępność to zdolność operacyjna: jeden szary token w systemie designu naprawia tysiące błędów przed wydaniem, nie po zgłoszeniu klienta.
## Źródła i linki
1. [The WebAIM Million — 2026 report](https://webaim.org/projects/million/) — WebAIM, 2026-03-30 (dane z lutego 2026).
2. [Why Accessibility Is An Operational Capability, Not A Feature](https://smashingmagazine.com/2026/06/why-accessibility-operational-capability-not-feature/) — Smashing Magazine, 2026-06-30.
3. [Web Accessibility Statistics 2026](https://accessibility.build/research/web-accessibility-statistics) — Accessibility.build, 2026.
4. [WebAIM Million 2026: what the numbers actually show](https://wcagc.com/blog/webaim-million-2026) — wcagc, 2026-09-05.
5. [Using LLMs to secure source code](https://eugeneyan.com/writing/secure-source-code/) — Eugene Yan / Anthropic, 2026-05-27.
