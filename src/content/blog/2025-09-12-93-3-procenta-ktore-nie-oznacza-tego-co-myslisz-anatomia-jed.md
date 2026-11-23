---
title: "93,3 procenta, które nie oznacza tego, co myślisz. Anatomia jednego projektu CV"
description: "\"93,3 procenta\" — ta liczba otwiera abstrakt pracy o zintegrowanym rozpoznawaniu pojazdów i błyskawicznie trafia na slajdy sprzedażowe."
pubDate: "2025-09-12"
tags: ["AI", "ComputerVision", "ANPR", "Dane", "Wdrożenie"]
draft: false
sourceDraftId: "7f6122df-a519-409f-892a-9838e15af730"
heroImage: "../../assets/7f6122df-a519-409f-892a-9838e15af730.jpg"
---

## Czego się dowiesz

- 93,3% to dopasowanie do bazy, nie celność całego systemu
- Moduł koloru osiąga tylko 71,87% celności
- Na UFPR-ALPR spadek do 83,05% i 61,07%
- Samo-refleksja podnosi rozpoznanie marki o 5,72 punktu
- Ogłoszenie o rekrutacji to zamiar, nie dowód wdrożenia

"93,3 procenta" — ta liczba otwiera abstrakt pracy o zintegrowanym rozpoznawaniu pojazdów i błyskawicznie trafia na slajdy sprzedażowe. W rzeczywistości nie oznacza ona, że system poprawnie rozpoznaje markę, tablicę i kolor w 93,3% przypadków. Oznacza, że 93,3% pojazdów udało się dopasować do bazy rejestracji — podczas gdy moduł koloru działa z celnością 71,87%.

12 września 2025 roku na LinkedIn pojawiło się ogłoszenie: poszukiwany specjalista Computer Vision do modułu automatycznej weryfikacji pojazdu na stacji paliw — tablica, marka, kolor — na sześciomiesięczny kontrakt przy budowie MVP z dużym partnerem branżowym, ORLEN. Temat był wtedy świeży: czytanie tablic (ANPR) było już klasykiem, ale połączenie go z klasyfikacją marki i koloru w jednym wdrożeniu rodziło konkretne pytania architektoniczne. Dziś warto wrócić do tamtego wpisu nie po to, by powtarzać jego tezy, lecz by sprawdzić, co wytrzymało zderzenie z pierwotnymi źródłami.

Potwierdziło się, że zadania trzeba rozdzielić. [Praca Sadiqa i in.](https://www.techscience.com/cmc/v85n2/63828/html) — przyjęta 3 lipca, opublikowana 23 września 2025 — używa MobileNetV2 do rozpoznania marki i modelu, YOLO do wykrycia tablicy, EasyOCR do odczytu tekstu oraz klastryzacji w przestrzeni HSV do koloru. To dokładnie ta trójdzielna architektura, o której pisał oryginalny draft.

Tu zaczynają się korekty. Po pierwsze, v1 datowało badanie na maj 2025 — to data wpłynięcia manuskryptu, nie publikacja; artykuł ukazał się jedenaście dni po omawianym wpisie, więc we wrześniu nie mógł być jeszcze jego źródłem. Po drugie, v1 podało 93,3% jako celność całego systemu. W rzeczywistości jest to wynik dopasowania do bazy; osobno VMMR osiąga 90,63%, ANPR 93,75%, a kolor zaledwie 71,87% — i to właśnie kolor jest najsłabszym ogniwem, którego draft nie zauważył. Po trzecie, omawiany materiał nie był wdrożeniem, lecz ogłoszeniem o rekrutacji; nic nie potwierdza, że moduł powstał i faktycznie działa na stacjach.

Drugi zweryfikowany przykład pokazuje, jak kruche bywają takie liczby. [Praca Parsy i in.](https://arxiv.org/abs/2508.01387) z 2 sierpnia 2025 bada nagrania z telefonów i kamer ruchomych za pomocą modeli wizyjno-językowych z modułem samo-refleksji. Na zbiorze z kampusu University of Texas at Austin daje 91,67% dla tablic i 66,67% dla marki i modelu — dokładnie liczby z v1. Ale na publicznym zbiorze UFPR-ALPR spadają odpowiednio do 83,05% i 61,07%, a samo-refleksja podnosi rozpoznanie marki i modelu średnio o 5,72 punktu. Różnica między 91,67% a 61,07% nie jest kosmetyczna — to efekt zmiany kamery, oświetlenia i perspektywy. [Przegląd Gayena i in.](https://link.springer.com/article/10.1016/j.jksuci.2023.101885) z 2023 roku wymienia oświetlenie, kąt widzenia, okluzje i warunki pogodowe jako główne wyzwania rozpoznawania marki i modelu; ponad dwie dekady badań nie usunęły tej wrażliwości.

Wniosek dla praktyka: nie kupuj jednej liczby. Zanim wybierzesz bibliotekę, rozbij zadanie na osobne ścieżki, poproś o celność dla każdej z nich zmierzoną na zbiorze podobnym do Twojego, a nie na czystym benchmarku, i zapytaj, co działa najgorzej. Pamiętaj też, że ogłoszenie o rekrutacji to sygnał zamiaru, nie dowód działającego systemu — dopóki nie zobaczysz wdrożenia, traktuj je jako hipotezę.


Nie kupuj jednej liczby — rozbij zadanie na ścieżki i poproś o celność zmierzoną na zbiorze podobnym do Twojego.
## Źródła i linki
1. [Poszukiwany specjalista AI / Computer Vision — ogłoszenie o projekcie na stacji paliw](https://pl.linkedin.com/posts/aleksandra-zajaczkowska_poszukiwany-specjalista-ai-computer-vision-activity-7372202543424212993--DtE) — Aleksandra Zajaczkowska / LinkedIn, 2025-09-12.
2. [Towards Efficient Vehicle Recognition: A Unified System for VMMR, ANPR, and Color Classification](https://www.techscience.com/cmc/v85n2/63828/html) — Sadiq i in., Computers, Materials & Continua, 2025-09-23.
3. [Video-based Vehicle Surveillance in the Wild: License Plate, Make, and Model Recognition with Self Reflective Vision-Language Models](https://arxiv.org/abs/2508.01387) — Parsa i in., arXiv, 2025-08-02.
4. [Two decades of vehicle make and model recognition — Survey, challenges and future directions](https://link.springer.com/article/10.1016/j.jksuci.2023.101885) — Gayen i in., Journal of King Saud University CIS, 2023-12-13.
