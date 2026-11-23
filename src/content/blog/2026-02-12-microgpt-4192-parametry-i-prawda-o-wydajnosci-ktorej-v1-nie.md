---
title: "microgpt: 4192 parametry i prawda o wydajności, której v1 nie dopowiedziało"
description: "4 192 parametry."
pubDate: "2026-02-12"
tags: ["AI", "microgpt", "LLM", "Python", "Edukacja"]
draft: false
sourceDraftId: "d96b57c6-c4f9-4e58-bc97-545a9afec67d"
heroImage: "../../assets/d96b57c6-c4f9-4e58-bc97-545a9afec67d.jpg"
---

## Czego się dowiesz

- 4192 parametry, 27 tokenów, jeden plik Pythona
- Ścieżka train0–train5 pokazuje dokładanie warstw
- 37 sekund kontra 0,40 ms w PyTorch na tym samym M4
- RMSNorm i ReLU zamiast LayerNorm i GeLU
- Zrozumienie algorytmu to nie umiejętność jego skalowania

4 192 parametry. Tyle ma microgpt — i tyle samo mówi prawda, której poprzednia wersja nie dopowiedziała: to nie jest mały ChatGPT, tylko kompletny algorytm bez wydajności.

Andrej Karpathy opublikował 12 lutego 2026 roku [przewodnik po microgpt](https://karpathy.github.io/2026/02/12/microgpt/): jeden plik czystego Pythona, bez PyTorcha i NumPya, który trenuje model w stylu GPT-2 i generuje tekst. W środku są zbiór 32 033 imion, tokenizer znakowy, własny silnik autograd, optymizator Adam oraz pętle treningu i inferencji. Karpathy nazywa to projektem artystycznym i podsumowuje jednym zdaniem: reszta to tylko wydajność.

Weryfikacja potwierdza najważniejsze liczby. W [kodzie źródłowym](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95) widać 27 tokenów — 26 liter plus BOS — oraz 4 192 parametry, jeden blok, cztery głowice i wymiar osadzeń 16. Oficjalny opis mówi o stracie spadającej z około 3,3 w kierunku 2,37. Czas uruchomienia na laptopie autora to około minuty.

Najbardziej wartościowa jest jednak ścieżka progresji. Karpathy przygotował osobne wersje: od train0 z tabelą bigramów bez sieci, przez train1 z ręcznymi gradientami i train2 z własnym autogradem, aż po train5 z optymizatorem Adam. Różnice widać w historii rewizji gista, więc zamiast czytać gotowy plik można obserwować dokładanie kolejnych warstw.

Korekta jest potrzebna w detalach. Liczba linii nie jest stała: przewodnik mówi o 200, analizy społeczności liczą 243 albo 246, zależnie od wersji i sposobu liczenia. Końcowy wynik z przykładowego przebiegu to 2,6497 w kroku 1000, a nie 2,37 — ta druga liczba jest raczej uśrednieniem. [Analiza kodu](https://mukhal.github.io/2026/02/26/Lessons-From-Microgpt.html) zwraca też uwagę, że architektura nie jest wierną kopią GPT-2: RMSNorm zamiast LayerNorm, ReLU zamiast GeLU, brak biasów.

Najważniejszy grill dotyczy jednak tezy o wydajności. [Samit Mohan](https://samitmohan.in/blog/microgpt) zmierzył 37 sekund na M4 MacBooku, czyli około 37 milisekund na krok, podczas gdy ten sam model w PyTorch na tym samym procesorze potrzebuje 0,40 milisekundy — różnica około 90 razy. [Krytyczna analiza](https://byteiota.com/microgpt-andrej-karpathys-gpt-in-200-lines-of-python/) dodaje, że efektywność nie jest tylko dodatkiem: brak batchingu, GPU, tokenizacji BPE i post-trainingu dzieli zabawkę od narzędzia. Sam Karpathy w sekcji o prawdziwych modelach przyznaje, że produkcja wymaga trylionów tokenów, setek warstw, FlashAttention, zarządzania pamięcią podręczną i szkoleń na tysiącach GPU przez miesiące.

Praktyczny wniosek: używaj microgpt do tego, do czego służy — do zobaczenia backpropagacji i mechanizmu uwagi w kilkudziesięciu liniach, najlepiej krok po kroku przez wersje train0–train5. Nie traktuj go jako dowodu, że prawdziwy model da się zbudować w jeden wieczór. Zrozumienie algorytmu i umiejętność jego skalowania to dwie różne kompetencje.


Używaj microgpt do zobaczenia backpropagacji, nie jako dowodu, że model zbudujesz w jeden wieczór.
## Źródła i linki
1. [microgpt — oficjalny przewodnik](https://karpathy.github.io/2026/02/12/microgpt/) — Andrej Karpathy, 2026-02-12.
2. [microgpt.py — kod źródłowy](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95) — GitHub Gist, 2026-02-12.
3. [A closer look at Karpathy's microgpt](https://mukhal.github.io/2026/02/26/Lessons-From-Microgpt.html) — mukhal.github.io, 2026-02-26.
4. [The annotated microGPT](https://samitmohan.in/blog/microgpt) — Samit Mohan, 2026-04-02.
5. [microGPT: Andrej Karpathy's GPT in 200 Lines of Python](https://byteiota.com/microgpt-andrej-karpathys-gpt-in-200-lines-of-python/) — byteiota, 2026-03-01.
6. [A GPT in 246 lines of pure Python](https://medium.com/@peyter/a-gpt-in-246-lines-of-pure-python-what-karpathys-latest-art-project-teaches-us-about-llms-4d2e65fb2fd6) — Medium, 2026-02-16.
