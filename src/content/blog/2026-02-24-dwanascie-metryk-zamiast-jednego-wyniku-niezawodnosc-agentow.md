---
title: "Dwanaście metryk zamiast jednego wyniku. Niezawodność agentów ma osobną miarkę"
description: "Prawie dwa lata gorączkowego postępu w możliwościach modeli przełożyły się na skromny przyrost niezawodności agentów."
pubDate: "2026-02-24"
tags: ["AI", "AgenciAI", "Niezawodność", "Metryki", "Testy"]
draft: false
sourceDraftId: "e8774eb9-f335-4e24-aa3e-2b3acb16add6"
heroImage: "../../assets/e8774eb9-f335-4e24-aa3e-2b3acb16add6.jpg"
---

## Czego się dowiesz

- Dwa lata postępu w możliwościach to skromny przyrost niezawodności
- 12 metryk w 4 obszarach: spójność, odporność, przewidywalność, bezpieczeństwo
- 14 modeli, testy GAIA i TauBench, około 500 przebiegów
- W wersji ICML 2026 liczba modeli wzrosła do 15
- Autorzy dają sposób pomiaru, nie algorytmy poprawy

Prawie dwa lata gorączkowego postępu w możliwościach modeli przełożyły się na skromny przyrost niezawodności agentów. To główny wniosek pracy „Towards a Science of AI Agent Reliability", opublikowanej 24 lutego 2026 roku przez zespół z Princetonu [1].

Autorzy — Stephan Rabanser, Sayash Kapoor, Peter Kirgis, Kangheng Liu, Saiteja Utpala i Arvind Narayanan — nie zaproponowali kolejnej modnej metryki. Sięgnęli po bezpieczeństwo jądrowe i lotnictwo, gdzie zawodność opisuje się wieloma wielkościami naraz: jak często system zawodzi, jak dotkliwe są skutki i czy potrafi rozpoznać własne granice [2]. Efektem jest profil dwunastu metryk w czterech obszarach: spójność, odporność, przewidywalność i bezpieczeństwo operacyjne.

Spójność pyta, czy agent przy tym samym zadaniu zachowuje się tak samo przy każdym uruchomieniu — także pod względem kosztu. Odporność sprawdza reakcję na awarie narzędzi, zmianę formatów i sparafrazowane polecenie. Przewidywalność bada kalibrację wyrażanej pewności, bezpieczeństwo zaś to, czy skala szkody ma górną granicę [2]. To profil, nie ranking: dobry wynik w jednym wymiarze nie gwarantuje dobrego w drugim.

W lutowej wersji badacze przebadali 14 modeli na dwóch uzupełniających się testach — GAIA oraz symulacji obsługi klienta TauBench [1]. Każde zadanie powtarzano pięć razy z sparafrazowanymi instrukcjami, wstrzykując awarie narzędzi i mierząc kalibrację pewności; łącznie wykonano około 500 przebiegów [1]. Tu pojawia się konkretna korekta. W wersji przyjętej na ICML 2026 i w aktualnym preprintach liczba modeli wzrosła do 15 [2][3]. Czternaście jest poprawne dla komunikatu z 24 lutego, ale nie dla ostatecznej publikacji.

Weryfikacja potwierdziła też przykłady, które nadają pracy ciężar. W materiale towarzyszącym wymieniano incydent z asystentem Replita, który usunął produkcyjną bazę danych mimo zakazu, oraz nieautoryzowany zakup za 31,43 dolara u Instacart przez OpenAI Operatora [1]. Wewnętrzne oceny takich systemów wypadały dobrze.

Tu wchodzi ograniczenie, którego wcześniejsza wersja tekstu nie pokazała. Autorzy wyraźnie zaznaczają, że dostarczają sposób pomiaru, nie algorytmy poprawy niezawodności [2]. Ich zaburzenia modelują naturalną zmienność i przypadkowe błędy, nie ataki adversarialne. Bezpieczeństwo rozumieją wąsko — jako ograniczenie skali szkody w warunkach operacyjnych [2]. To nie kompletna teoria bezpieczeństwa agentów, tylko użyteczna warstwa.

Praktyczny wniosek jest prosty. Zamiast pytać o średni wynik, zapytaj o pięć powtórzeń tego samego zadania, o zachowanie po zmianie jednego słowa w instrukcji i o najgorszy możliwy skutek błędu. Te trzy pytania powinny znaleźć się w umowie z klientem, nie w slajdzie z benchmarkiem. Wynik z jednego uruchomienia nie mówi nic o trzech kolejnych.

Niezawodność nie rośnie automatycznie razem z trafnością. Trzeba ją mierzyć osobno i nazwać po imieniu.


Niezawodność nie rośnie automatycznie razem z trafnością — mierz ją osobno i nazwij po imieniu.
## Źródła i linki
1. [New Paper: Towards a science of AI agent reliability](https://www.normaltech.ai/p/new-paper-towards-a-science-of-ai) — normaltech.ai, 2026-02-24.
2. [Towards a Science of AI Agent Reliability](https://arxiv.org/abs/2602.16666) — arXiv:2602.16666, 2026.
3. [Towards a Science of AI Agent Reliability](https://proceedings.mlr.press/v306/rabanser26a.html) — PMLR vol. 306 (ICML 2026), 2026.
4. [Reliability profile and dashboard](https://hal.cs.princeton.edu/reliability) — Princeton SAGE, 2026.
