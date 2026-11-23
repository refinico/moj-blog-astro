---
title: "DeepSeek V3.2: otwartość ma swoją cenę w tokenach"
description: "1 grudnia 2025 roku DeepSeek wypuścił V3.2 — w amerykański weekend po Święcie Dziękczynienia, w tym samym rytmie, w jakim rok wcześniej pojawił się V3."
pubDate: "2025-12-03"
tags: ["AI", "DeepSeek", "LLM", "OpenSource", "Koszty"]
draft: false
sourceDraftId: "3c8d7ef9-d283-4567-b7dc-6d9adc00b2cc"
heroImage: "../../assets/3c8d7ef9-d283-4567-b7dc-6d9adc00b2cc.jpg"
---

## Czego się dowiesz

- V3.2 wydany 1 grudnia 2025, wagi na licencji MIT
- Dorównuje GPT-5; Speciale — Gemini 3.0 Pro
- Budżet RL >10% kosztu pretreningu, 1800 środowisk
- Speciale tylko API, bez narzędzi, 1,5–2× więcej tokenów
- Codeforces 2701 pkt przy 77 tys. tokenów na zadanie

1 grudnia 2025 roku DeepSeek wypuścił V3.2 — w amerykański weekend po Święcie Dziękczynienia, w tym samym rytmie, w jakim rok wcześniej pojawił się V3.

Dzień później temat opisał Sebastian Raschka, a 3 grudnia wpis trafił do bazy. To była premiera o wyjątkowo gęstej treści: nowa uwaga rzadka, potężny budżet uczenia ze wzmocnieniem i potok syntetycznych zadań agentowych. Dla praktyka oznaczało to jedno — model klasy GPT-5 można było nie tylko przeczytać, ale pobrać i przetestować samemu.

Fakty z [oficjalnego komunikatu](https://www.deepseek.com/en/news/deepseek-v3-2/) i [raportu technicznego](https://arxiv.org/html/2512.02556) potwierdzają większość liczb z wersji v1: V3.2 dorównuje GPT-5 w rozumowaniu, wariant Speciale dorównuje Gemini 3.0 Pro, a budżet post-trainingu RL przekracza 10 procent kosztu pretreningu. Zbudowano ponad 1800 środowisk i 85 tysięcy złożonych poleceń. Wynik AIME 2025 to 93,1 wobec 94,6 dla GPT-5, a modele zdobyły złote medale IMO i IOI 2025. Wagi na [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) są na licencji MIT.

Grill wymusza jednak dwie korekty. Po pierwsze, v1 pisało o Speciale tak, jakby był to zwykły model do codziennej pracy. Tymczasem komunikat wyraźnie mówi, że Speciale jest dostępny tylko przez API, bez obsługi narzędzi, i zużywa znacznie więcej tokenów. Po drugie, v1 sugerowało, że otwartość rozwiązuje problem kosztu. [Analiza Baseten](https://www.baseten.co/blog/deepseek-v3-2/) pokazuje coś przeciwnego: Speciale potrzebuje około 1,5–2 raza więcej tokenów wyjściowych niż GPT-5 czy Gemini przy tych samych zadaniach. Na Codeforces osiąga 2701 punktów, ale zużywa średnio 77 tysięcy tokenów na rozwiązanie wobec 22–29 tysięcy u konkurencji.

To nie dyskredytuje modelu. Zmienia pytanie z „który model jest najlepszy?” na „ile kosztuje u mnie jedno ukończone zadanie?”. Open-weight daje przewagę weryfikowalności — możesz uruchomić model na własnych danych — ale nie gwarantuje niższego rachunku.

Praktyczny wniosek jest więc taki: potraktuj V3.2 jako drugiego kandydata w teście akceptacyjnym, nie jako natychmiastowy zamiennik. Zmierz trzy rzeczy naraz — jakość na własnych zadaniach, liczbę tokenów na wynik i czas do odpowiedzi nadającej się do użycia. W przypadku Speciale pamiętaj o ograniczeniu API i braku narzędzi.

Najciekawsza liczba z raportu nie dotyczy więc benchmarku. Dotyczy budżetu RL przekraczającego 10 procent kosztu pretreningu — to sygnał, że przewaga wzięła się z bardzo drogiego dopieszczania, a nie z jednego triku architektonicznego.

Warto dopisać fragment, który wersja v1 pominęła. Jeszcze we wrześniu 2025 roku DeepSeek udostępnił V3.2-Exp — eksperymentalny model z rzadką uwagą, który przygotował ekosystem i infrastrukturę inferencyjną pod właściwą premierę. Tuż przed nią, 27 listopada, pojawił się DeepSeekMath V2 zbudowany na tej samej bazie. Sebastian Raschka zwraca uwagę, że to nie są przypadkowe wydania, tylko elementy jednego planu. Praktyczny wniosek: nowy model rzadko pojawia się znikąd, a obserwowanie wersji pośrednich pozwala wcześniej zrozumieć kierunek zmian.


Open-weight daje weryfikowalność, nie niższy rachunek — mierz jakość, tokeny na ukończone zadanie i czas, zanim V3.2 nazwiesz zamiennikiem.
## Źródła i linki
1. [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://www.deepseek.com/en/news/deepseek-v3-2/) — DeepSeek, 2025-12-01.
2. [DeepSeek-V3.2 technical report](https://arxiv.org/html/2512.02556) — arXiv, 2025-12-02.
3. [A Technical Tour of the DeepSeek Models from V3 to V3.2](https://magazine.sebastianraschka.com/p/technical-deepseek) — Sebastian Raschka, 2025-12-03.
4. [DeepSeek V3.2's path to GPT-5-level performance](https://www.baseten.co/blog/deepseek-v3-2/) — Baseten, 2025-12-05.
5. [deepseek-ai/DeepSeek-V3.2](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) — Hugging Face, 2025-12-01.
