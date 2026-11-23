---
title: "Droższy token, lepszy interes. Co naprawdę daje skalowanie w czasie wnioskowania"
description: "Z 15,2 do 52,2 procenta dokładności na zbiorze MATH-500 — bez zmiany wag modelu."
pubDate: "2026-01-24"
tags: ["AI", "LLM", "Reasoning", "Benchmarki", "InżynieriaAI"]
draft: false
sourceDraftId: "6577cabe-5f26-4cf4-bd04-b9cd52d93919"
heroImage: "../../assets/6577cabe-5f26-4cf4-bd04-b9cd52d93919.jpg"
---

## Czego się dowiesz

- Z 15,2 na 52,2% na MATH-500 bez zmiany wag modelu
- Rodziny metod: self-consistency, best-of-N, rejection sampling, search
- Apple: na prostych zadaniach zwykłe modele wygrywały z wnioskującymi
- Lawsen: limity długości i nierozwiązywalne instancje mylono z brakiem rozumowania
- Każda dodatkowa odpowiedź kosztuje tokeny i czas

Z 15,2 do 52,2 procenta dokładności na zbiorze MATH-500 — bez zmiany wag modelu. Sebastian Raschka opisał ten wynik 24 stycznia 2026 roku jako efekt tysięcy uruchomień przy pisaniu rozdziału książki „Build a Reasoning Model (From Scratch)" [1].

Temat był wtedy istotny, bo wyznaczał nową oś optymalizacji. Zamiast dokładać parametry, można dokładać obliczenia w momencie, gdy model generuje odpowiedź. Raschka porządkuje metody w rodziny: chain-of-thought, self-consistency, best-of-N z weryfikatorem, rejection sampling, self-refinement i przeszukiwanie ścieżek rozwiązania [1]. Różnice między nimi to kompromis między opóźnieniem a trafnością. Self-consistency daje się zrównoleglić, przeszukiwanie drzewa jest sekwencyjne i drogie, a best-of-N zależy od jakości weryfikatora.

Raschka przypomina też starszą lekcję: ensembling w klasycznym machine learning robił to samo dekady temu, tylko na mniejszą skalę [1]. Nowa jest skala i dostępność dodatkowych prób, nie sama idea. W praktyce sprowadza się to do wyboru między metodami równoległymi a sekwencyjnymi: pierwsze łatwo zrównoleglić, drugie wymagają czekania na kolejny krok.

Wcześniejsza wersja tekstu sugerowała, że to niemal bezkosztowy sposób na wyższą marżę. Grill każe tę tezę okroić. Skok 15,2–52,2 procenta pochodzi z własnych eksperymentów autora przy pracy nad książką, nie z uniwersalnego prawa [1]. Każda dodatkowa odpowiedź kosztuje tokeny i czas, a klient czeka na wynik. Decyzja nie brzmi „włączyć czy nie", tylko „ile opóźnienia i budżetu jestem gotów zapłacić za punkt trafności".

Krytyczny głos przyszedł z innej strony. Apple w czerwcu 2025 roku opisało w pracy „The Illusion of Thinking" trzy reżimy: na łatwych zadaniach zwykłe modele radziły sobie lepiej niż wnioskujące, na średnich te drugie wygrywały, a powyżej progu złożoności następował pełny zanik dokładności [2]. To argument za granicami metody, nie przeciwko niej.

Spór o tę pracę pokazuje jednak drugą stronę medalu. A. Lawsen zwrócił uwagę na limity długości odpowiedzi w Wieży Hanoi i na matematycznie nierozwiązywalne instancje przeprawy przez rzekę, które policzono jako porażki modelu [3]. Gdy zamiast listy ruchów poproszono o funkcję generującą rozwiązanie, wyniki były wysokie [3]. Spór nie rozstrzyga natury rozumowania. Rozstrzyga, że ewaluacja łatwo myli brak miejsca w oknie odpowiedzi z brakiem rozumowania.

Dla praktyka to konkretna procedura zamiast wiary w jedną metodę. Wygeneruj trzy odpowiedzi i zagłosuj, porównaj trafność z pojedynczym przebiegiem, zmierz przy tym opóźnienie i koszt. Ustal z góry budżet tokenów i sprawdź, powyżej jakiej złożoności zadania jakość przestaje rosnąć. Dopiero wtedy wdrażaj wersję droższą.

Dokładanie mocy przy inferencji działa — tam, gdzie problem jest mierzalny, a ewaluacja nie myli ograniczenia harnessu z brakiem rozumowania.


Dokładanie mocy przy inferencji działa tam, gdzie ewaluacja nie myli ograniczenia harnessu z brakiem rozumowania.
## Źródła i linki
1. [Categories of Inference-Time Scaling for Improved LLM Reasoning](https://magazine.sebastianraschka.com/p/categories-of-inference-time-scaling) — Ahead of AI / Sebastian Raschka, 2026-01-24.
2. [The Illusion of Thinking](https://machinelearning.apple.com/research/illusion-of-thinking) — Apple Machine Learning Research, 2025-06-11.
3. [The Illusion of the Illusion of Thinking](https://arxiv.org/abs/2506.09250) — A. Lawsen, arXiv, 2025-06-16.
4. [New paper pushes back on Apple's LLM 'reasoning collapse' study](https://9to5mac.com/2025/06/13/new-paper-pushes-back-on-apples-llm-reasoning-collapse-study/) — 9to5Mac, 2025-06-13.
