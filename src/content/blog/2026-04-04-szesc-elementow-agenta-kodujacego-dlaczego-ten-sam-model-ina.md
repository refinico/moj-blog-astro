---
title: "Sześć elementów agenta kodującego. Dlaczego ten sam model inaczej zachowuje się w czacie i w Claude Code"
description: "Sebastian Raschka opublikował 4 kwietnia 2026 roku przewodnik „Components of A Coding Agent\", w którym rozkłada agenta kodującego na sześć warstw i pokazuje..."
pubDate: "2026-04-04"
tags: ["AI", "AgenciAI", "Kodowanie", "Harness", "InżynieriaAI"]
draft: false
sourceDraftId: "c0341235-4900-42ff-b935-ff89bf4956f0"
heroImage: "../../assets/c0341235-4900-42ff-b935-ff89bf4956f0.jpg"
---

## Czego się dowiesz

- Sześć warstw: kontekst, prompt, narzędzia, limit, pamięć, delegacja
- Pętla obserwuj–sprawdź–wybierz–wykonaj w czystym Pythonie
- Raschka pisze „in my view” — to spekulacja, nie dowód
- Przy identycznym harnessie modele różnią się o 10–20 punktów
- Harness pomaga słabszym, nie zastępuje binarnego weryfikatora

Sebastian Raschka opublikował 4 kwietnia 2026 roku przewodnik „Components of A Coding Agent", w którym rozkłada agenta kodującego na sześć warstw i pokazuje go w czystym Pythonie w repozytorium Mini Coding Agent. To nie jest opis nowego modelu, lecz opis otoczenia, w którym model pracuje.

Sześć elementów to: żywy kontekst repozytorium, kształt promptu i ponowne użycie cache, ustrukturyzowane narzędzia z walidacją i uprawnieniami, ograniczanie kontekstu, pełny transkrypt z odchudzoną pamięcią roboczą oraz delegacja do podagentów z granicami. W środku działa pętla obserwuj–sprawdź–wybierz–wykonaj. Dopiero ten zestaw sprawia, że polecenie „napraw testy" staje się zadaniem z określoną komendą i bezpieczną ścieżką działania.

Wersja v1 przetworzyła ten przewodnik w dowód, że „warstwa otaczająca decyduje, który model wydaje się lepszy" i że wagi modeli są dziś tak samo silne. Tymczasem [oryginał](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent) mówi wprost „in my view", podaje przykłady i dodaje: „This is speculative, but I suspect…", a także zastrzega, że post-training specyficzny dla narzędzia zwykle pomaga. Z przypuszczenia zrobiono pewnik.

Podobnie z podagentami. V1 podało, że „najczęściej tylko do odczytu" — tymczasem Raschka opisuje tryb tylko do odczytu jako przykład ograniczania w swoim mini-agencie i natychmiast zaznacza, że Codex nie wymusza go globalnie: podagenci zwykle dziedziczą ustawienia piaskownicy głównego agenta. Nagłówek „o których nikt nie mówi" też nie wytrzymuje sprawdzenia: te sześć warstw jest szeroko omawianych, a [niezależna analiza](https://tekai.dev/references/2026-04-06-components-of-a-coding-agent) wskazuje zarówno na dokumentację LangChain, jak i na literaturę akademicką.

Najważniejszy brakujący głos to granice metody. Ocena dowodów przyznaje tezie „harness > model" status anegdotycznej: w SWE-bench Verified przy jednakowym otoczeniu widać utrzymujące się różnice rzędu 10–20 punktów między modelami. [Inna analiza](https://crowdy.dev/en/2026/04/06/coding-agent-harness-anatomy/) dodaje, że dobre otoczenie pomaga proporcjonalnie bardziej modelom przeciętnym niż czołowym i nie pomaga tam, gdzie nie ma binarnego weryfikatora — przy projektowaniu interfejsu czy smaku API.

Dla praktyka wniosek jest wciąż wartościowy, jeśli zachować umiar. Zamiast porównywać modele na czacie, uruchom ten sam zadanie w swoim repozytorium z włączonym logowaniem i sprawdź, gdzie agent traci kontekst. To, co naprawdę decyduje o wyniku, to często stabilny prefix, walidacja narzędzi i możliwość wznowienia sesji — ale model nadal ma znaczenie.

Warto też zauważyć, czego przewodnik nie zawiera. To materiał koncepcyjny z zabawkową implementacją w Pythonie — nie ma w nim kontrolowanego eksperymentu, badania ablacyjnego ani produkcyjnej metryki, która potwierdzałaby rolę każdej z sześciu warstw. Tytułowe słowa o tym, że nikt nie mówi o tych elementach, nie wytrzymują zestawienia z dokumentacją LangChain i literaturą z arXiv. Wreszcie warunek brzegowy: dobre otoczenie daje najwięcej modelom słabszym, a tam, gdzie nie ma binarnego weryfikatora — przy projektowaniu interfejsu czy smaku API — nie zastąpi ludzkiego osądu.


Dobre otoczenie wzmacnia model, ale nie czyni modeli wymiennymi.
## Źródła i linki
1. [Components of A Coding Agent](https://magazine.sebastianraschka.com/p/components-of-a-coding-agent) — Sebastian Raschka, Ahead of AI, 2026-04-04.
2. [mini-coding-agent](https://github.com/rasbt/mini-coding-agent) — Sebastian Raschka / GitHub, 2026.
3. [Components of A Coding Agent — analiza krytyczna](https://tekai.dev/references/2026-04-06-components-of-a-coding-agent) — Tekai, 2026-04-06.
4. [The Model Was Never Everything — What Actually Makes a Coding Agent Work](https://crowdy.dev/en/2026/04/06/coding-agent-harness-anatomy/) — Crowdy, 2026-04-06.
