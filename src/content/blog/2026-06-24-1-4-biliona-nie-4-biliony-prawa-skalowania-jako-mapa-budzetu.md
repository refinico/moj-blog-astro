---
title: "1,4 biliona, nie 4 biliony. Prawa skalowania jako mapa budżetu"
description: "Chinchilla miała 70 miliardów parametrów i została wytrenowana na 1,4 biliona tokenów."
pubDate: "2026-06-24"
tags: ["AI", "LLM", "Skalowanie", "Budżet", "Badania"]
draft: false
sourceDraftId: "a112b78b-a48d-4f35-9f8e-e5d509b42faa"
heroImage: "../../assets/a112b78b-a48d-4f35-9f8e-e5d509b42faa.jpg"
---

## Czego się dowiesz

- Chinchilla: 70B parametrów i 1,4 T tokenów pokonało Gophera 280B
- C to w przybliżeniu 6ND: 2ND przód i 4ND wstecz
- Kaplan: 5,5x modelu przy 10x mocy, Chinchilla: około 3,2x
- Prawa zakładają niezmienioną architekturę i miks danych
- Replikacja Besiroglu znalazła błędy w dopasowaniu Chinchilli

Chinchilla miała 70 miliardów parametrów i została wytrenowana na 1,4 biliona tokenów. Przy tym samym budżecie obliczeniowym pokonała 280-miliardowego Gophera, który dostał 300 miliardów tokenów. Model był cztery razy mniejszy i dostał około cztery razy więcej danych. To najsłynniejszy dowód, że w 2022 roku duże modele były niedotrenowane.

24 czerwca 2026 roku Lilian Weng opublikowała [„Scaling Laws, Carefully”](https://lilianweng.github.io/posts/2026-06-24-scaling-laws/) — 25-minutowy tekst, który porządkuje dwie dekady badań nad przewidywalnością straty. Podstawowa obserwacja jest prosta: strata spada wraz z rozmiarem modelu N, liczbą tokenów D i mocą C zgodnie z prawem potęgowym, a na wykresie log-log daje prostą. W przybliżeniu C to 6ND: 2ND na propagację w przód i 4ND na wstecz.

Weryfikacja potwierdza spór opisany w drafcie. [Kaplan i współautorzy (2020)](https://arxiv.org/abs/2001.08361) sugerowali, że przy dziesięciokrotnym wzroście mocy model rośnie około 5,5 raza, a dane tylko 1,8 raza. Chinchilla przebadała ponad 400 modeli i odwróciła zalecenie: przy wzroście mocy oba czynniki rosną w tym samym tempie. Weng potwierdza też rolę osadzeń — Kaplan nie liczył ich do parametrów, Chinchilla liczyła, a w małych modelach to znacząca część całości, więc sposób zliczania zmienia wynik dopasowania.

Korekta jest jednak konkretna. Draft podał, że Chinchilla trenowała na „4 bilionach tokenów”. To błąd: źródło mówi o 1,4 biliona, czyli około czterech razy więcej niż Gopher. Cyfra 4 pojawia się jako stosunek rozmiarów modeli, nie jako liczba tokenów. Drugi problem to lead: „cztery razy większy model przy dziesięciokrotnie większym budżecie” nie odpowiada żadnemu z opisanych wzorów. Przy skalowaniu równomiernym dziesięciokrotność mocy daje około 3,2-krotność modelu, nie czterokrotność. Trzecia korekta dotyczy skali niedokładności: Weng pisze, że pozornie drobne wybory prowadzą do „dzikich różnic” w prognozie, ale nigdzie nie twierdzi, że błąd zaokrąglenia przesuwa wynik o rząd wielkości.

Kontrargument jest w samym tekście. Prawa skalowania zakładają, że zmienia się tylko skala — architektura, optymalizator, harmonogram learning rate, partie danych, miks danych i tokenizator muszą pozostać niezmienione i być wcześniej dobrze strojone. Weng dodaje, że przy jednakowej liczbie tokenów zbiór wysokiej jakości i „internetowa papka” dają drastycznie różną efektywność obliczeniową. Gdy zaczyna brakować unikalnych danych, powtarzanie wywołuje podwójne zejście straty i dopasowanie krzywej staje się mniej wiarygodne. [Replikacja Besiroglu i in. (2024)](https://arxiv.org/abs/2404.10102) znalazła w oryginalnym dopasowaniu Chinchilli problemy z uśrednianiem straty Huber i zbyt niską precyzją wyświetlania współczynników.

Dla praktyka wniosek jest więc skromniejszy niż metafora o budżecie. Prawa skalowania pomagają rozdzielić ograniczone FLOPy między parametr i dane, ale tylko wtedy, gdy reszta eksperymentu jest stabilna. Wybierz jedną zmienną do zmiany, resztę zamroź i sprawdź, czy dane, które dokładasz, mają wartość — sama liczba tokenów niczego nie gwarantuje. Zanotuj też, jak liczysz parametry i jak zaokrąglasz stratę, bo te pozornie księgowe wybory decydują o tym, czy ekstrapolacja z małych modeli w ogóle ma sens.


Zamroź wszystko poza jedną zmienną i policz parametry oraz zaokrąglenia straty, bo ekstrapolacja z małych modeli zależy od tych księgowych wyborów.
## Źródła i linki
1. [Scaling Laws, Carefully](https://lilianweng.github.io/posts/2026-06-24-scaling-laws/) — Lilian Weng, Lil'Log, 2026-06-24.
2. [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361) — Kaplan i in., arXiv, 2020.
3. [Chinchilla Scaling: A Replication Attempt](https://arxiv.org/abs/2404.10102) — Besiroglu i in., arXiv, 2024.
