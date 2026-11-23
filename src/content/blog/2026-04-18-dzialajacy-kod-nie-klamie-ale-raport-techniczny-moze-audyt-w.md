---
title: "Działający kod nie kłamie — ale raport techniczny może. Audyt wiarygodności dokumentacji modeli"
description: "Tylko 19 z 73 twierdzeń o nowości w raportach technicznych modeli ma kontrolowane porównanie „z funkcją i bez funkcji\"."
pubDate: "2026-04-18"
tags: ["AI", "LLM", "Architektura", "Reprodukowalność", "Badania"]
draft: false
sourceDraftId: "03144774-6138-447c-bb3c-1a21614f3921"
heroImage: "../../assets/03144774-6138-447c-bb3c-1a21614f3921.jpg"
---

## Czego się dowiesz

- Raport, config, implementacja i test warstwa po warstwie
- Tylko 19 z 73 nowości ma kontrolne porównanie
- 39 z 48 architektur zapożycza co najmniej dwa bloki
- Wagi bez kolejności danych i hiperparametrów to nie reprodukcja
- Cztery z 40 raportów opisują więcej niż jeden przebieg

Tylko 19 z 73 twierdzeń o nowości w raportach technicznych modeli ma kontrolowane porównanie „z funkcją i bez funkcji". Wszystkie raporty wzięte pod lupę były preprintami.

Osiemnastego kwietnia 2026 roku Sebastian Raschka opublikował [My Workflow for Understanding LLM Architectures](https://magazine.sebastianraschka.com/p/workflow-for-understanding-llms). Jego metoda jest rozsądna: zacząć od raportu, potem zajrzeć do config.json i implementacji referencyjnej na Hugging Face, uruchomić model i sprawdzić warstwa po warstwie. W [repozytorium towarzyszącym](https://github.com/rasbt/workflow-understanding-LLM-architectures) celowo psuje Gemma 3 270M, znajduje różnice w logitach i poprawia parametryzację RMSNorm, aż testy przechodzą.

Ta część v1 wytrzymała sprawdzian. „Działający kod nie kłamie" pozostaje dobrą zasadą, a podejście Raschki daje się zastosować przy każdym modelu z wagami. Potwierdza to rosnąca praktyka: w 2025 roku do biblioteki transformers przybyło 48 nowych architektur, więc potrzeba własnej metody czytania dokumentacji jest realna.

Grill ujawnia jednak, dlaczego ta metoda jest dziś ważniejsza niż jeszcze rok temu. [Audyt 40 raportów technicznych](https://arxiv.org/abs/2611.20003) pokazuje, że 39 z 48 architektur dodanych w 2025 roku zapożycza co najmniej dwa z trzech podstawowych bloków od innych modeli, najczęściej od Llama. Autorzy raportu policzyli 73 deklaracje nowości: 19 miało kontrolowane porównanie, 20 opierało się na teście zmieniającym kilka rzeczy naraz, a 34 nie miało porównania wcale. Tylko 4 z 40 raportów opisały więcej niż jeden przebieg treningu, a jeden podał jednocześnie mieszankę danych, liczbę tokenów i moc obliczeniową. Inna analiza zwraca uwagę, że [wagi modelu nie są reprodukowalnością](https://sebastianbarros.substack.com/p/ai-open-weights-are-not-open-source): bez kolejności przykładów, reguł filtrowania i hiperparametrów odtworzenie wyniku nie jest możliwe.

To koryguje wersję v1. Sugerowała, że problemem jest lenistwo czytelnika — wystarczy wziąć kod i sprawdzić. Problem jest szerszy: autorzy raportów często nie podają dowodu, który pozwoliłby odróżnić nowość od nazwy. Wniosek praktyczny pozostaje ten sam, ale uzasadnienie jest mocniejsze: nie ufaj opisowi, bo opis bywa marketingiem, nawet gdy jest napisany rzetelnie.

Kontrargument jest uczciwy: brak kontrolnego porównania nie oznacza, że twierdzenie jest fałszywe. Oznacza, że jest nieprzetestowane w ramach raportu. Audyt nie ocenia też jakości modeli, a jego własna metoda kodowania ma ograniczoną zgodność między oceniającymi. Trzeba więc czytać go jako sygnał, nie jako wyrok.

Praktyczny wniosek: przy wyborze modelu opieraj się na trzech warstwach — oficjalny raport, implementacja w bibliotece i własny test na twoich zadaniach. Gdy raport chwali się nowym blokiem, zapytaj, czy pokazano przebieg bez niego. Jeśli nie, potraktuj to jako obietnicę, nie fakt.

To podejście ma swoją cenę: ręczne rozbieranie modelu warstwa po warstwie zajmuje godziny i wymaga znajomości frameworka. Można je częściowo zautomatyzować, ale Raschka celnie zauważa, że automatyzacja odbiera efekt edukacyjny. W zespole wartość jest więc nie tyle w szybkości audytu, co w tym, że kilka osób umie zrobić go samodzielnie, gdy przyjdzie nowa architektura.


Deklarację nowości w raporcie traktuj jako obietnicę do sprawdzenia w kodzie i na własnych zadaniach, nie jako fakt.
## Źródła i linki
1. [My Workflow for Understanding LLM Architectures](https://magazine.sebastianraschka.com/p/workflow-for-understanding-llms) — Ahead of AI / Sebastian Raschka, 2026-04-18.
2. [workflow-understanding-LLM-architectures](https://github.com/rasbt/workflow-understanding-LLM-architectures) — GitHub / rasbt, 2026-04-10.
3. [The novelty exposed: ablation, reproducibility and transparency in 40 technical reports](https://arxiv.org/abs/2611.20003) — arXiv, 2026-11-15.
4. [AI Open Weights Are Not Open Source](https://sebastianbarros.substack.com/p/ai-open-weights-are-not-open-source) — Substack, 2026-08-03.
