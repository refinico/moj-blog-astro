---
title: "Dwanaście osobolat w dwa dni. Poszarpana granica ma też wąskie gardła, które pękają"
description: "Zespół badaczy kazał GPT-4.1 odtworzyć i zaktualizować cały numer przeglądów Cochrane'a — dwanaście recenzji."
pubDate: "2025-12-20"
tags: ["AI", "AgenciAI", "Ewaluacja", "WąskieGardła", "Produktywność"]
draft: false
sourceDraftId: "ec44eab5-6a11-4c44-a265-36c33a4182c8"
heroImage: "../../assets/ec44eab5-6a11-4c44-a265-36c33a4182c8.jpg"
---

## Czego się dowiesz

- BCG: plus 12,2% zadań, 25,1% szybciej, 40% jakości
- Poza granicą: minus 19 punktów procentowych poprawności
- Cochrane: 12 osobolat w dwa dni, ponad 146 tys. cytowań
- Pamięć modeli rośnie najsłabiej spośród badanych umiejętności
- Reverse salients: wąskie gardło pęka i system skacze

Zespół badaczy kazał GPT-4.1 odtworzyć i zaktualizować cały numer przeglądów Cochrane'a — dwanaście recenzji. Zajęło to dwa dni i odpowiadało około dwunastu osobolatom tradycyjnej pracy systematycznej. Model przesia ponad 146 tysięcy cytowań, czytał pełne teksty i robił analizy statystyczne, a przy tym był dokładniejszy od ludzkich recenzentów. Nie potrafił jednak otworzyć plików dodatkowych ani napisać do autora po nieopublikowane dane. To mniej niż 1% błędów — i wystarczy, żeby procesu nie dało się w pełni zautomatyzować.

20 grudnia 2025 roku Ethan Mollick wrócił do pojęcia „poszarpanej granicy”, które [opisał ze współautorami w 2023 roku](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged), w [eseju o kształcie AI](https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks). Wtedy, wraz z opublikowaniem [eksperymentu BCG](https://doi.org/10.1287/orsc.2025.21838), temat był nowy: po raz pierwszy mierzyliśmy nie to, „czy AI umie”, lecz gdzie dokładnie przebiega granica jej kompetencji. Dziś liczby z tamtego badania są już kanonem, więc warto sprawdzić, co w pierwotnym wpisie było precyzyjne, a co wymaga korekty.

Większość się potwierdziła. Eksperyment objął 758 konsultantów BCG, 18 zadań wewnątrz granicy i jedno poza nią. Wyniki: o 12,2% więcej zadań, o 25,1% szybciej, ponad 40% wyższa jakość — oraz o 19 punktów procentowych mniejsze szanse na poprawną odpowiedź przy zadaniu poza granicą. Draft podał te liczby rzetelnie. Potwierdza się też diagnoza pamięci: w mapowaniu umiejętności modeli czytanie, matematyka i rozumowanie rosną szybko, a pamięć pozostaje słabym punktem z bardzo małym progresem.

Korekta pierwsza dotyczy Cochrane'a. Draft napisał o „dwunastu latach pracy”, podczas gdy źródło mówi o dwunastu latach pracy liczonych jako osobolata — chodzi o nakład jednego etatowca, nie o dwanaście lat kalendarzowych. Korekta druga dotyczy automatu z napojami. Draft relacjonuje to dosłownie: „Anthropic pozwoliło modelowi prowadzić automat, stracił pieniądze”. To prawda o fazie pierwszej z czerwca 2025, ale [raport z fazy drugiej](https://www.anthropic.com/research/project-vend-2) z 18 grudnia 2025 pokazuje, że po zmianie modelu i narzędzi tygodnie z ujemną marżą w dużej mierze zniknęły. Sklep zaczął zarabiać, choć agent wciąż potrzebował ludzi przy dostawach i w sytuacjach granicznych. Wartość dodana tej korekty jest większa niż się wydaje: kolejna wersja zamiast „model gubi się przy automacie” mówi „model uczy się, ale wciąż nie jest odporny”.

Najważniejszy kontrargument pochodzi z samego eseju. Mollick przytacza Tomasa Pueyo, który twierdzi, że rosnąca granica wyprzedzi poszarpanie: nawet jeśli AI pozostanie relatywnie słaba w prowadzeniu sklepu, może być lepsza od każdego człowieka. Mollick się z tym nie zgadza, ale przyznaje, że zagadnienie jest otwarte. Podaje też pojęcie „odwrotnych występów” (reverse salients) z historii technologii: postój wynika z jednej wąskiej słabości, a gdy laboratorium ją naprawi, cały system skacze do przodu. Przykładem jest generowanie obrazów — gdy poprawiła się jakość grafiki, tworzenie slajdów przestało być blokowane przez kod. Wniosek autora jest wprost przeciwny do domknięcia z draftu: nie patrz na benchmarki, patrz na wąskie gardła, bo kiedy jedno pęka, wszystko za nim płynie dalej.

Dla praktyka oznacza to zmianę pytania. Zamiast „czy model to umie?” zapytaj „który element procesu go blokuje i kto obsługuje brzegowe 1%”. Zmapuj te miejsca jako osobne etapy z właścicielem i budżetem, nie jako poprawkę po fakcie. I pamiętaj, że mapa się przesuwa — wąskie gardło, które dziś zatrzymuje wdrożenie, może zniknąć po jednym wydaniu modelu.


Zamiast pytać, czy model umie, wskaż wąskie gardło i człowieka, który obsłuży brzegowy procent.
## Źródła i linki
1. [The Shape of AI: Jaggedness, Bottlenecks and Salients](https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks) — Ethan Mollick, One Useful Thing, 2025-12-20.
2. [Centaurs and Cyborgs on the Jagged Frontier](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged) — Ethan Mollick, One Useful Thing, 2023-09-16.
3. [Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality](https://doi.org/10.1287/orsc.2025.21838) — Dell'Acqua i in., Organization Science, 2026-03-01.
4. [Project Vend: Phase two](https://www.anthropic.com/research/project-vend-2) — Anthropic, 2025-12-18.
