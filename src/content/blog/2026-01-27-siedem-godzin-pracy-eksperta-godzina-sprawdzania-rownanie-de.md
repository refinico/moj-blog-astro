---
title: "Siedem godzin pracy eksperta, godzina sprawdzania. Równanie delegowania w praktyce"
description: "Ekspert potrzebuje średnio siedmiu godzin na zadanie zawodowe; benchmark GDPval mierzy to na 220 prawdziwych produktach pracy, od pism prawnych po arkusze ka..."
pubDate: "2026-01-27"
tags: ["AI", "Delegowanie", "Zarządzanie", "Produktywność", "AgenciAI"]
draft: false
sourceDraftId: "0624929b-c14a-4604-9c5c-1bdc0b9dca17"
heroImage: "../../assets/0624929b-c14a-4604-9c5c-1bdc0b9dca17.jpg"
---

## Czego się dowiesz

- GDPval: ekspert potrzebuje średnio 7 godzin na zadanie
- Ocena wygenerowanej odpowiedzi trwa ponad godzinę
- GPT-5.2: 70,9–74,1% remisów lub wygranych
- Ekspertyza podnosi trafność i skraca ocenę, nie wydłuża pracy
- Dokument delegacji to PRD lub pięciopunktowy rozkaz

Ekspert potrzebuje średnio siedmiu godzin na zadanie zawodowe; [benchmark GDPval](https://arxiv.org/html/2510.04374) mierzy to na 220 prawdziwych produktach pracy, od pism prawnych po arkusze kalkulacyjne. Sprawdzenie wygenerowanej odpowiedzi zajmuje oceniającemu ponad godzinę. Modele GPT-5.2 wykonują zadanie w minuty i — według danych OpenAI — [remisują lub wygrywają z ekspertami w 70,9% do 74,1% przypadków](https://openai.com/index/introducing-gpt-5-2/). Z tych trzech liczb Ethan Mollick składa równanie, które wyjaśnia, kiedy opłaca się przekazać pracę maszynie.

27 stycznia 2026 roku [opisał eksperyment z University of Pennsylvania](https://www.oneusefulthing.org/p/management-as-ai-superpower): cztery dni, w których słuchacze executive MBA — lekarze i menedżerowie, z których niewielu kiedykolwiek pisało kod — mieli zbudować startup od zera. Prototyp powstawał w Claude Code i Google Antigravity, resztę — pomysł, badanie rynku, pozycjonowanie, pitch, model finansowy — wspierały ChatGPT, Claude i Gemini. Temat był wtedy istotny, bo po raz pierwszy dane z prawdziwej pracy zaczęły przewracać tezę, że przewagę daje umiejętność pisania promptów.

Część draftu wytrzymała kontrolę. Rzeczywiście chodziło o trzy zmienne: czas, który zadanie zabrałoby człowiekowi; prawdopodobieństwo, że AI trafi za pierwszym razem; oraz czas potrzebny na zlecenie, oczekiwanie i ocenę wyniku. Potwierdza się też, że spadł koszt zmiany zdania — przy niższych kosztach pivota zespoły mogły prowadzić kilka wariantów naraz.

Korekta jest jednak istotna. Draft napisał, że wiedza branżowa „podnosi dwie pierwsze i skraca trzecią”. W źródle ekspertyza podnosi prawdopodobieństwo sukcesu i skraca czas oceny — natomiast nie wydłuża czasu pracy człowieka. Ekspert wykonuje zadanie szybciej, więc pierwsza zmienna raczej maleje. To nie jest drobiazg: błędna wersja zachęca do delegowania tam, gdzie liczba godzin do zaoszczędzenia jest akurat najmniejsza. Druga korekta dotyczy skali. „Rząd wielkości lepiej niż semestr” to subiektywna ocena prowadzącego po piętnastu latach nauczania, a nie wynik kontrolowanego pomiaru. Trzecia: lead o „działającym starcie” wygładza tekst źródła, które wprost zastrzega, że to nie były jeszcze działające firmy ani produkty gotowe do skalowania, z kilkoma wyjątkami.

Kontrargument pojawia się w dwóch miejscach. Po pierwsze, liczby GDPval są raportem samego dostawcy modelu i nie doczekały się niezależnej replikacji; autor eseju sam nazywa wskaźnik 72% projekcją. Po drugie, w komentarzach pod tekstem czytelnicy zarzucają mu konserwatyzm: dokument delegacji można pisać razem z modelem, a ocenę również powierzyć agentowi — przy tanim komputerze iteracja jest tania. Inny zauważa, że wyjaśnienie zadania i ocena wyniku nie są tylko stratą czasu, lecz sposobem na doprecyzowanie własnej intencji. Model traktuje iterację jako koszt; praktyk może ją potraktować jako projektowanie.

Dla praktyka wniosek jest konkretny. Zanim zlecisz zadanie, policz trzy zmienne na swoich danych, a potem użyj jako promptu dokumentu, który i tak już piszesz: PRD, lista ujęć albo pięciopunktowy rozkaz. Ustal cel i powód, granice uprawnień, definicję „gotowe”, wymagane wyniki, wyniki pośrednie i testy przed zgłoszeniem. Wiedza branżowa nie polega tu na znajomości narzędzi, lecz na umiejętności rozpoznania, że model finansowy się nie spina.


Policz trzy zmienne na własnych danych i użyj dokumentu, który i tak piszesz, jako instrukcji dla agenta.
## Źródła i linki
1. [Management as AI superpower](https://www.oneusefulthing.org/p/management-as-ai-superpower) — Ethan Mollick, One Useful Thing, 2026-01-27.
2. [GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks](https://arxiv.org/html/2510.04374) — Patwardhan i in., arXiv, 2025-10-05.
3. [Introducing GPT-5.2](https://openai.com/index/introducing-gpt-5-2/) — OpenAI, 2025-12-11.
