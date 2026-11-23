---
title: "Trzy kroki do ewaluacji produktu AI — i pułapka, o której v1 nie napisało"
description: "Ewaluator oceniający pięć kryteriów naraz nie ocenia żadnego z nich wiarygodnie."
pubDate: "2025-11-23"
tags: ["AI", "Ewaluacja", "LLM", "Testy", "Produkty"]
draft: false
sourceDraftId: "e78af8db-efbb-4dc8-84b9-2fa9941c1104"
heroImage: "../../assets/e78af8db-efbb-4dc8-84b9-2fa9941c1104.jpg"
---

## Czego się dowiesz

- Trzy kroki: etykiety, ewaluator LLM, harness przy każdej zmianie
- Etykiety binarne zamiast skali 1–5, bo trójka i czwórka umykają
- 200 próbek z 50–100 porażkami i podział 75 na 25
- Przy 200 próbkach nie potwierdzisz progu poniżej 5% wad
- Ewaluator dziedziczy uprzedzenia i wymaga rekalibracji

Ewaluator oceniający pięć kryteriów naraz nie ocenia żadnego z nich wiarygodnie. Eugene Yan podał 23 listopada 2025 roku przepis na ewaluację produktu AI w trzech krokach: oznaczyć dane, dopasować ewaluator LLM, uruchamiać harness przy każdej zmianie konfiguracji.

Wersja v1 poprawnie odtworzyła strukturę i liczby, ale pominęła najważniejsze zastrzeżenie autora. [Oryginalny tekst](https://eugeneyan.com/writing/product-evals) oraz [późniejszy komentarz samego autora na LinkedIn](https://www.linkedin.com/posts/eugeneyan_product-evals-in-three-simple-steps-activity-7399263939945144320-Q8OW) podkreślają, że ewaluator dziedziczy błędy i uprzedzenia człowieka, który go przygotował. Wymaga okresowej rekalibracji: dosypania świeżych, ręcznie oznaczonych próbek, zwłaszcza nowych typów błędów.

Co się potwierdziło? Yan rzeczywiście zaleca etykiety binarne zamiast skali 1–5, bo granica między „trójką” a „czwórką” jest trudna do skalibrowania zarówno dla ludzi, jak i modeli. [Streszczenie redakcji Engineered.at](https://engineered.at/articles/product-evals-in-three-simple-steps) potwierdza zalecenie co najmniej 50–100 przypadków porażki w zestawie liczącym 200 i więcej przykładów. Podział 75 na 25 między zbiór roboczy i testowy także się zgadza. Podobnie ostrzeżenie przed „God Evaluatorem” — jednym promptem oceniającym jednocześnie wiarygodność, trafność, ton i zwięzłość.

Wersja v1 podała też rachunek ufności: przy 200 próbkach i 3 procentach wad przedział to około 0,6–5,4 procenta, więc nie da się potwierdzić wymogu poniżej 5 procent. [Szczegółowy przewodnik](https://www.beri.net/learning/eugeneyan-product-evals-three-simple-steps) potwierdza te liczby i dodaje, że podwojenie próbki do 400 zawęża górną granicę do 4,7 procenta.

Korekta dotyczy jednak tonu. V1 traktowało dopasowanie ewaluatora jako czynność jednorazową. Tymczasem Yan mierzy zgodność za pomocą precyzji, czułości i współczynnika Cohena, a za punkt odniesienia uznaje człowieka, nie perfekcję. Ludzka zgodność bywa na poziomie 0,2–0,3, a zmęczony recenzent potrafi przeoczyć połowę wad. To nie jest argument przeciwko ewaluacji, tylko argument przeciwko wierze, że liczba z modelu jest ostateczna.

Kontrargument pojawia się więc sam: zestaw ewaluacyjny starzeje się razem z produktem. Model zmieniasz jedną linijką konfiguracji, ale etykiety sprzed miesiąca mogą już nie opisywać tego, co użytkownik nazywa błędem. Bez stałego dopływu prawdziwych przypadków z produkcji ewaluator zaczyna nagradzać stare zachowania.

Warto też zauważyć, że Yan odrzuca skale ocen nie z powodu estetyki, lecz z powodu statystyki. Jeśli ludzie nie potrafią spójnie odróżnić trójki od czwórki, model również nie nauczy się tej różnicy. Binarne „zdaje / nie zdaje” daje ostry graniczny przypadek, który da się potem policzyć.

Dla praktyka wniosek jest konkretny. Zacznij od arkusza z jednym kryterium i kilkunastoma oznaczonymi odpowiedziami. Dodaj jeden ewaluator na wymiar, a potem zapisz w kalendarzu comiesięczne porównanie jego ocen z oceną człowieka. Jeśli zgodność spada, winny nie jest model — tylko brak świeżych danych.

Cztery tygodnie pracy nad harnessem, o których pisze Yan, zwracają się dopiero wtedy, gdy ktoś utrzymuje ten harness przy życiu.


Ewaluator nie staje się prawdą po jednym dopasowaniu — bez świeżych, ręcznie oznaczonych przypadków zacznie nagradzać stare zachowania.
## Źródła i linki
1. [Product Evals in Three Simple Steps](https://eugeneyan.com/writing/product-evals) — Eugene Yan, 2025-11-23.
2. [Product Evals in Three Simple Steps (post na LinkedIn)](https://www.linkedin.com/posts/eugeneyan_product-evals-in-three-simple-steps-activity-7399263939945144320-Q8OW) — Eugene Yan, 2025-11-26.
3. [Product Evals in Three Simple Steps | Engineered.at](https://engineered.at/articles/product-evals-in-three-simple-steps) — Engineered.at, 2025-11-23.
4. [Product Evals in Three Simple Steps — Guide](https://www.beri.net/learning/eugeneyan-product-evals-three-simple-steps) — THE D*AI*LY BRIEF, 2025.
5. [Product Evals (for AI Applications) in Three Simple Steps](https://www.linkedin.com/feed/update/urn:li:activity:7401319207776399360/) — LangChain, 2025-12-01.
