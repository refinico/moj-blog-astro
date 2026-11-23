---
title: "Model, aplikacja, oprawa — i pułapka, której nie widać w tabeli"
description: "Ten sam Claude Opus 4.6, to samo pytanie o porównanie ChatGPT, Claude’a i Gemini — trzy różne odpowiedzi zależnie od aplikacji i oprawy."
pubDate: "2026-02-18"
tags: ["AI", "LLM", "Architektura", "Harness", "Testy"]
draft: false
sourceDraftId: "aa7fbdef-3d9a-42cb-b3e4-97b6695bbc2b"
heroImage: "../../assets/aa7fbdef-3d9a-42cb-b3e4-97b6695bbc2b.jpg"
---

## Czego się dowiesz

- Jeden model, trzy aplikacje, trzy różne odpowiedzi
- Warstwy: model, aplikacja, harness
- Astra: 62,7% standard vs 99,9% u dostawcy
- Demo używa innej oprawy niż produkcja
- 46% deweloperów nie ufa, 75% pyta człowieka

Ten sam Claude Opus 4.6, to samo pytanie o porównanie ChatGPT, Claude’a i Gemini — trzy różne odpowiedzi zależnie od aplikacji i oprawy. To najmocniejszy fakt z [przewodnika Ethana Mollicka](https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the), opublikowanego 18 lutego 2026 roku.

Mollick napisał już osiem takich poradników, ale przyznaje, że ta wersja najbardziej odcina się od poprzednich. Zmieniło się znaczenie słowa „używać”. Jeszcze niedawno oznaczało rozmowę z czatbotem; w lutym 2026 roku coraz częściej oznacza zlecenie zadania i odejście, a system sam sięga po narzędzia.

Podział na trzy warstwy się potwierdza. Modele to mózgi — w tekście padają GPT-5.2/5.3, Claude Opus 4.6 i Gemini 3 Pro. Aplikacje to miejsca, w których faktycznie zlecamy pracę: ChatGPT, Claude.ai, Gemini. Harness to niewidoczna oprawa: jak model podpięto do danych, narzędzi i konkretnego zadania. Mollick pokazuje, że bez oprawy odpowiedź jest nieaktualna, w witrynie dostawcy pojawiają się weryfikowalne źródła, a w rozbudowanym środowisku — pogłębiona analiza.

Wersja v1 miała więc rację co do struktury, ale przeoczyła ważną rzecz: z tego, że oprawa zmienia wynik, nie wynika, że każda oprawa poprawia realną jakość. Kontrargument przyszedł później i jest bardzo konkretny. [ARC Prize](https://arcprize.org/blog/astra) przy okazji premiery GPT-6 Astra pokazał, że ten sam model osiąga 62,7 procent w standardowym środowisku testowym i 99,9 procent w środowisku dostawcy zachowującym ukryty stan rozumowania między zapytaniami. Różnica 37 punktów nie jest dowodem skoku inteligencji, tylko dowodem wrażliwości na konfigurację. To samo zjawisko, które Mollick opisuje jako przewagę, może być też źródłem zawodnej miary.

Dokładnie tak samo wygląda ryzyko w firmie. Zespół kupuje dostęp do modelu, widzi świetny wynik w demo i zakłada, że efekt przeniesie się na produkcję. Tymczasem demo korzysta z innej oprawy niż codzienna praca: innych uprawnień, innych danych, innego sposobu przechowywania stanu.

Wniosek praktyczny jest niewygodny, ale prosty. Test akceptacyjny musi obejmować cały stos — model, aplikację i konkretny sposób podpięcia narzędzi — bo zakup samego API nie kupuje efektu. Warto też zaprojektować oprawę tak, by silnik dało się podmienić bez przebudowy produktu; numery wersji zmieniają się szybciej niż cykl wdrożeniowy.

I jeszcze jedno: [ankieta Stack Overflow z 2025 roku](https://survey.stackoverflow.co/2025/ai) pokazuje, że 46 procent deweloperów nie ufa dokładności odpowiedzi AI, a 75 procent w takiej sytuacji pyta człowieka. To dobry domknięcie warstwy „harness” — oprawa powinna przewidywać też moment, w którym człowiek przejmuje weryfikację.

W przykładzie Mollicka trzy odpowiedzi powstały z jednego modelu. Różnicę zrobiło wszystko wokół niego.

W samym przewodniku jest jeszcze jedno ostrzeżenie, którego v1 nie podkreśliło: firmy wypuszczają nowe wersje modeli znacznie szybciej niż dawniej, więc numery wersji tracą wartość informacyjną. To wzmacnia wniosek o warstwie oprawy. Jeśli decyzja zakupowa opiera się na konkretnym numerze modelu, jest już przestarzała w momencie podpisania umowy. Trwalszą przewagą jest test, który da się powtórzyć po podmianie silnika, oraz jasny opis tego, co aplikacja ma dowieźć.


Zakup samego API nie kupuje efektu — test akceptacyjny musi obejmować cały stos, a oprawę zaprojektować tak, by silnik dało się podmienić bez przebudowy.
## Źródła i linki
1. [A Guide to Which AI to Use in the Agentic Era](https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the) — Ethan Mollick / oneusefulthing.org, 2026-02-18.
2. [OpenAI's GPT-6 Astra on ARC-AGI-3](https://arcprize.org/blog/astra) — ARC Prize, 2026-09-03.
3. [AI — 2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/ai) — Stack Overflow, 2025.
4. [GPT-6 Astra, Looped Transformers, and Hidden Reasoning](https://magazine.sebastianraschka.com/p/gpt-6-astra-looped-transformers-and) — Sebastian Raschka, 2026-09-09.
