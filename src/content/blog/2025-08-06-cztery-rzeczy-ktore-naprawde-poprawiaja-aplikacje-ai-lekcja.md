---
title: "Cztery rzeczy, które naprawdę poprawiają aplikacje AI. Lekcja z slajdu Chip Huyen"
description: "„Zrozumienie użytkownika przewyższa relacje prasowe."
pubDate: "2025-08-06"
tags: ["AI", "RAG", "InżynieriaAI", "Produkt", "Ewaluacja"]
draft: false
sourceDraftId: "ec4b6ba4-ebab-4089-9e51-3137ac9dd59b"
heroImage: "../../assets/ec4b6ba4-ebab-4089-9e51-3137ac9dd59b.jpg"
---

## Czego się dowiesz

- Cztery nierówności Chip Huyen z 6 sierpnia 2025
- Chunkowanie i metadane dają większy skok niż zmiana bazy
- Zastrzeżenie o wadze baz wektorowych zgubione w repostach
- W eseju Agents: 5% błędu na krok rośnie do 60% po dziesięciu
- Slajd to heurystyka z rozmów, nie wynik badania

„Zrozumienie użytkownika przewyższa relacje prasowe. Szybkość iteracji przewyższa błyszczące narzędzie. Przygotowanie danych przewyższa spór o bazę wektorową. System przewyższa model." Slajd z tymi czterema nierównościami opublikowała Chip Huyen 6 sierpnia 2025 roku, mówiąc, że powstał na potrzeby prezentacji. Tekst rozszedł się szeroko, bo oferuje coś rzadkiego: konkretną kolejność działań zamiast kolejnej zapowiedzi modelu.

W materiale zwraca uwagę trzecia nierówność. Huyen wymienia dwa dźwignie poprawy retrievera — lepszy mechanizm wyszukiwania i lepsze przygotowanie danych — a dopiero potem mówi, że w przypadkach, które widziała, największy skok dawało przygotowanie danych: inne chunkowanie, przepisanie treści do formatu pytanie–odpowiedź, dodanie podsumowań i metadanych do każdego fragmentu. Autorka od razu zastrzega, że bazy wektorowe są ważne i że chodzi o najpierw najbardziej wpływową oś.

Wersja, która krążyła dalej, to zastrzeżenie zgubiła. Z „w many use cases I've seen" zrobiono ogólne prawo, a z dwóch dźwigni została jedna. W tym samym wątku padły zresztą głosy krytyczne: Denys Linkov ostrzegał, że zły wybór bazy wektorowej może oznaczać trzymiesięczną migrację, a Andrei Lopatenko wskazywał na systemy zbudowane poprawnie, które zawiodły, bo dokładność modelu nie wystarczała.

Jest jeszcze sprzeczność we własnym dorobku autorki. W eseju [„Agents"](https://huyenchip.com/2025/01/07/agents.html) z stycznia 2025 Huyen pisze, że agenty zwykle wymagają silniejszych modeli: błąd na poziomie 5% na krok rośnie do 60% po dziesięciu krokach i do 0,6% po stu. Błyskotliwa nierówność „system przewyższa model" jest więc regułą priorytetów, nie prawem uniwersalnym. W samym [wpisie na LinkedIn](https://www.linkedin.com/posts/chiphuyen_aiapplications-aiengineering-activity-7358971409227792384-y0mf) nie ma też żadnego pomiaru — to obserwacja praktyka, nie benchmark.

Dla praktyka wniosek pozostaje użyteczny, o ile zachowamy jego skalę. Zamiast wymieniać model co tydzień, weź pięćdziesiąt realnych zapytań i sprawdź, które fragmenty trafiły do kontekstu. Zmiana chunkowania albo dodanie metadanych bywa tańsza i szybsza w efekcie niż migracja bazy. Ale zanim uznasz, że model nie ma znaczenia, policz błąd na krok w swoim najdłuższym przepływie.

Warto też pamiętać, skąd wziął się slajd: z rozmów z zespołami, nie z eksperymentu. To dobra lista kontrolna na start, nie wynik, który można cytować bez zastrzeżeń.

Warto przyjrzeć się też samej architekturze materiału. Insight w bazie wskazuje wprost: jeden materiał z jednego źródła. Dwa pozostałe wpisy z tego dnia to treści pochodne, powstałe w ramach tego samego procesu, a nie niezależne relacje. To z nich wziął się wątek „modelu zarabiania”, którego w poście Huyen nie ma. Gdy dodamy do tego brak jakiejkolwiek liczby, skali próby czy benchmarku, otrzymamy obraz raczej zestawu heurystyk niż wyniku badania. Nie umniejsza to ich praktycznej wartości, ale zmienia sposób, w jaki można je cytować. Nierówności sprawdzają się jako lista kontrolna na start pracy z aplikacją, nie jako dowód, że wybór modela przestał mieć znaczenie.


Traktuj nierówności jako listę kontrolną, nie jako dowód, że model przestał mieć znaczenie.
## Źródła i linki
1. [What people think will improve AI applications vs. what actually does](https://www.linkedin.com/posts/chiphuyen_aiapplications-aiengineering-activity-7358971409227792384-y0mf) — Chip Huyen, LinkedIn, 2025-08-06.
2. [Agents](https://huyenchip.com/2025/01/07/agents.html) — Chip Huyen, huyenchip.com, 2025-01-07.
3. [Brilliant, mature take — repost slajdu](https://www.linkedin.com/posts/wgalczak_brilliant-mature-take-thanks-for-sharing-activity-7359063136458469376-qBVG) — Anthony Galczak, LinkedIn, 2025-08-07.
