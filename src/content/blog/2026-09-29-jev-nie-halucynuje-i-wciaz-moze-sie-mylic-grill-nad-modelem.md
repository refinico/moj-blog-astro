---
title: "Jev nie halucynuje — i wciąż może się mylić. Grill nad modelem decyzyjnym"
description: "Zero błędów typu w 8576 odpowiedziach i jednocześnie 62,6 proc."
pubDate: "2026-09-29"
tags: ["AI", "Jev", "Kalibracja", "ModeleDecyzyjne", "LLM"]
draft: false
sourceDraftId: "e0df2ad4-b6a5-4130-948b-c2198422b0b5"
heroImage: "../../assets/e0df2ad4-b6a5-4130-948b-c2198422b0b5.jpg"
---

## Czego się dowiesz

- Poprawny format to nie poprawna decyzja
- Zero błędów typu w 8576 odpowiedziach
- 62,6 proc. trafności vs 81,3 proc. Claude Haiku
- Kalibracja jest dobra tylko na wybranych zbiorach
- Kup interfejs decyzyjny, nie obietnicę nieomylności

Zero błędów typu w 8576 odpowiedziach i jednocześnie 62,6 proc. trafności w zadaniu decyzji o kliknięciu w link — przy 81,3 proc. dla Claude Haiku 4.5. Te dwie liczby obnażają różnicę między poprawnym formatem a poprawną odpowiedzią w Jevie.

Model wyszedł 15 września 2026 roku z TypeSafe AI, startupu założonego przez Dioga Almeidę, byłego badacza OpenAI. [Oficjalny komunikat](https://typesafe.ai/blog/introducing-system-one-models-and-jev) nazywa go pierwszym modelem z rodziny System One: zamiast generować tekst, przyjmuje stan i zestaw pytań, a zwraca typowane wartości z prawdopodobieństwem. Trzy typy to Choice, Score i Noul.

Wtedy temat był gorący. Sebastian Raschka opisał zmianę własnego zdania: od „klasyfikatory były moim chlebem powszednim, zrobię to sam” po „wow, to działa lepiej, niż myślałem”. Wersja v1 przejęła ten entuzjazm i dodała parametry: 70–500 milisekund, 0,042 dolara za milion tokenów wejściowych, brak opłaty za wyjście.

Weryfikacja potwierdza dane z komunikatu, ale też ich ograniczenia. [TypeSafe przyznaje](https://typesafe.ai/blog/introducing-system-one-models-and-jev), że 193,6-krotne przyspieszenie i 444,6-krotna oszczędność pochodzą z własnych testów przeprowadzanych na laptopach założycieli, a punktem odniesienia jest średnia odpowiedzi GPT-6 Astra i Fable 5.1 — nie prawda z etykietą.

Grill jest ostrzejszy. [Analiza niezależna](https://onllm.dev/blog/6-typesafe-jev-system-one-models) wskazuje, że firma nie opublikowała wyników na standardowych benchmarkach ani krzywych kalibracji, choć kalibracja jest jej głównym produktem. Armin Ronacher ujął to najprościej: Jev „przekazuje problem halucynacji użytkownikowi” — to programista musi zdecydować, czy 50 proc. oznacza monetę do odrzucenia, a 95 proc. decyzję do wykonania. [Audit](https://greenlitbooks.com/field-notes/does-jev-really-never-hallucinate) pokazał, że na zbiorze CLINC150 prawdopodobieństwa były skalibrowane (ECE 0,0204), a na Banking77 już nie — model był systematycznie zbyt pewny (ECE 0,0936).

Korekta dotyczy więc samej tezy v1 o przewadze. „Nie halucynuje” znaczy tylko, że wynik pasuje do schematu. [Krytyka](https://www.motionandmadness.com/p/jev-deep-dive-what-a-calibrated-classifier) dodaje, że 50–300 własnych oznaczonych przypadków i jeden parametr temperatury potrafią obniżyć błąd kalibracji nawet o 74 proc. — czyli przewaga nie jest własnością modelu, lecz efektem pracy na twoich danych.

Tymczasem rynek dogonił temat: jeszcze 29 września 2026 roku OpenAI ogłosiło własny Decisions API, a Google później Gemini Decisions API. [Zestawienie ekosystemu](https://tomrochette.com/agents/hybrid-execution/jev/) pokazuje, że Jev z pierwszego miejsca w niezależnym rankingu spadł poza czołówkę, gdy pojawiły się modele otwarte.

Praktyczny wniosek: kupuj interfejs decyzyjny, nie obietnicę nieomylności. Zanim podłączysz Jeva do produkcji, oznacz własne przypadki i sprawdź, czy jego 70 proc. naprawdę oznacza siedem trafień na dziesięć — na twoich danych, nie na cudzym laptopie.


Jev nie halucynuje struktury, ale bez własnych oznaczeń nie wiesz, czy wierzyć jego 70 procentom.
## Źródła i linki
1. [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) — TypeSafe AI, 2026-09-15.
2. [Jev Cannot Hallucinate. It Can Still Be Wrong.](https://onllm.dev/blog/6-typesafe-jev-system-one-models) — onllm.dev, 2026-09-21.
3. [Does Jev really never hallucinate?](https://greenlitbooks.com/field-notes/does-jev-really-never-hallucinate) — Greenlit Books, 2026.
4. [Jev deep dive: what a calibrated classifier actually changes](https://www.motionandmadness.com/p/jev-deep-dive-what-a-calibrated-classifier) — Motion and Madness, 2026-09-29.
5. [Language Models for Text Classification: From Bag-of-Words to Jev](https://magazine.sebastianraschka.com/p/classifier-history-and-jev) — Sebastian Raschka, 2026-09-29.
6. [Jev — zestawienie ekosystemu i niezależnych wyników](https://tomrochette.com/agents/hybrid-execution/jev/) — tomrochette.com, 2026.
