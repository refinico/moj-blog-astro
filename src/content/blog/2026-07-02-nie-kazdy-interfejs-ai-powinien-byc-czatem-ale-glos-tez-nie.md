---
title: "Nie każdy interfejs AI powinien być czatem. Ale głos też nie jest ratunkiem"
description: "Podróżny z walizką i parującą kawą w ręku dostaje w aplikacji przewoźnika pole wpisywania długiego numeru rezerwacji, a w odpowiedzi gęsty akapit o pogodzie."
pubDate: "2026-07-02"
tags: ["AI", "UX", "VoiceUI", "Projektowanie", "Dostępność"]
draft: false
sourceDraftId: "e6607deb-8f04-4982-9fe2-f994f10a1b89"
heroImage: "../../assets/e6607deb-8f04-4982-9fe2-f994f10a1b89.jpg"
---

## Czego się dowiesz

- Modalność to zmysł, nie kanał czatu
- Scena z terminalu to przykład ilustracyjny, nie badanie
- Wybór: co ktoś robi, gdzie jest, jak jest zmęczony decyzjami
- NN/g: nieufność wobec ciągłego nagrywania
- CHI 2025: duża zmienność błędów ASR w hałasie

Podróżny z walizką i parującą kawą w ręku dostaje w aplikacji przewoźnika pole wpisywania długiego numeru rezerwacji, a w odpowiedzi gęsty akapit o pogodzie. Numer bramki ginie na dole. Ten obraz otwiera artykuł [Smashing Magazine z 2 lipca 2026 roku](https://smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/).

Teza jest trafna: branża popadła w „tunelowe myślenie o rozmowie”, bo modele językowe uczą się na dialogach. Tymczasem modality to po prostu sposób, w jaki człowiek używa zmysłów — patrzy, słucha, dotyka, mówi albo pisze. Wybór powinien wynikać z trzech pytań: co ktoś robi, gdzie jest i jak bardzo jest już zmęczony podejmowaniem decyzji. Pomagają audyt zadań oraz macierz dopasowania wejścia i wyjścia.

Pierwsza korekta wobec v1 jest istotna: scena z terminalu jest **przykładem ilustracyjnym**, nie badaniem. Wersja v1 opisywała ją tak, jakby był to przypadek z udokumentowanego testu użyteczności. Artykuł nie podaje badań, próby ani wyników — to scenario projektowe. Trzeba to nazwać wprost, bo inaczej czytelnik wyniesie fałszywe poczucie, że istnieje dowód na przewagę jakiejś modalności.

Grill jest tu wyjątkowo ciekawy. Badania nad asystentami głosowymi nie potwierdzają, że „hands-free” automatycznie oznacza „lepsze”. [Nielsen Norman Group](https://www.nngroup.com/articles/voice-assistant-attitudes/) w badaniu z 17 uczestnikami opisuje nieufność wobec ciągłego nagrywania, obawę przed nieuprawnionym kontaktem i sytuację, w której asystent podmienił słowo w dyktowanym e-mailu — użytkownikka porównała to do granatu w dłoni. Z kolei [praca na CHI 2025](https://dl.acm.org/doi/full/10.1145/3706599.3716395) wskazuje na dużą zmienność błędów rozpoznawania mowy w hałasie oraz problemy z uczeniem się interfejsu i wyjaśnianiem jego decyzji — w wyraźnym kontraście z deklaracjami branży.

Innymi słowy: w głośnym terminalu głos może zawieść tak samo jak małe pole tekstowe. Wniosek nie brzmi „zamień czat na voice”, tylko „dopasuj modalność do warunków i sprawdź koszt błędu”. Jeśli odpowiedź ma być jedną liczbą, niezależnie od kanału, wyświetl dużą, kontrastową cyfrę.

Praktyczna procedura ma więc cztery kroki. Zacznij od audytu zadań: wypisz, co użytkownik chce załatwić i w jakich warunkach. Potem użyj macierzy wejście/wyjście i wybierz formę wyniku. Następnie policz koszt pomyłki — czy błędny numer bramki boli bardziej niż brakujący akapit. Na końcu sprawdź prywatność: czy wybrany kanał wymaga przesyłania danych, których nie chcesz wysyłać.

Warto też zmienić pytanie w backlogu. Zamiast „gdzie wstawić asystenta AI?” zapytaj „który zmysł ma dziś pracować za użytkownika i co się stanie, gdy zawiedzie?”.

W przykładzie z artykułu potrzebna była jedna informacja: numer bramki. Wszystko inne było szumem — niezależnie od tego, czy przyszło tekstem, czy głosem.


Nie zamieniaj czatu na głos — dopasuj modalność do warunków i policz koszt pomyłki, bo numer bramki wymaga jednej dużej cyfry, nie dłuższego akapitu.
## Źródła i linki
1. [Matching AI Modality To User Intent: Designing The Right Interface](https://smashingmagazine.com/2026/07/matching-ai-modality-user-intent-designing-right-interface/) — Smashing Magazine, 2026-07-02.
2. [Intelligent Assistants: Users' Attitudes Toward Alexa, Google Assistant, and Siri](https://www.nngroup.com/articles/voice-assistant-attitudes/) — Nielsen Norman Group, 2018-08-05.
3. [Conversational Voice Interfaces: Translating Research Into Actionable Design](https://dl.acm.org/doi/full/10.1145/3706599.3716395) — CHI 2025 Extended Abstracts, 2025-04-25.
4. [User Experience and Usability of Voice User Interfaces: A Systematic Literature Review](https://www.mdpi.com/2078-2489/15/9/579) — MDPI, 2024-09-19.
