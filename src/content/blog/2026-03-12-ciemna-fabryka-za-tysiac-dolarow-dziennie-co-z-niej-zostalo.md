---
title: "Ciemna fabryka za tysiąc dolarów dziennie. Co z niej zostało po grillu"
description: "Trzyosobowy zespół StrongDM wydawał co najmniej tysiąc dolarów dziennie na tokeny na inżyniera, żeby nikt nie pisał i nikt nie sprawdzał kodu."
pubDate: "2026-03-12"
tags: ["AI", "Kodowanie", "AgenciAI", "SoftwareFactory", "Review"]
draft: false
sourceDraftId: "dd02332a-6f85-4bdf-a153-ca78f28b1d7c"
heroImage: "../../assets/dd02332a-6f85-4bdf-a153-ca78f28b1d7c.jpg"
---

## Czego się dowiesz

- Tysiąc dolarów dziennie na inżyniera w fabryce StrongDM
- Reguła zero recenzji wycofana, człowiek zatwierdza 66 PR dziennie
- Scenariusze holdout poza zasięgiem agentów
- Willison: skąd wiemy, że testy nie są fałszem
- 20 tysięcy miesięcznie ogranicza metodę do nielicznych

Trzyosobowy zespół StrongDM wydawał co najmniej tysiąc dolarów dziennie na tokeny na inżyniera, żeby nikt nie pisał i nikt nie sprawdzał kodu. Dziś ten sam zespół sprawdza każdy pull request przed wdrożeniem.

Ethan Mollick opisał eksperyment 12 marca 2026 roku w eseju [The Shape of the Thing](https://www.oneusefulthing.org/p/the-shape-of-the-thing). Jego teza przejścia od promptowego „co-intelligence" do zarządzania agentami znajduje potwierdzenie w danych: w teście Google-Proof Q&A najlepsze modele mają 94 procent, studenci z dostępem do Google około 34 procenty poza dziedziną; w GDPval AI dorównuje ekspertom lub przewyższa ich w 82 procentach przypadków. To liczby z wykresów, które Mollick sam pokazuje i sam krytykuje — zaznacza, że AI pozostaje „ząbkowate".

Najmocniejsza korekta dotyczy samej fabryki. [Simon Willison](https://simonwillison.net/2026/feb/7/software-factory/), który obejrzał demonstrację, nazwał regułę „kod nie może być recenzowany przez ludzi" szaleństwem i zadał pytanie, które rozstrzyga całość: skoro agenci piszą kod i testy, skąd wiemy, że testy nie są fałszem typu assert true? Odpowiedź zespołu była inżynierska: scenariusze akceptacyjne trzymane są poza zasięgiem agentów jako zbiór holdout, a firma zbudowała cyfrowe klony Okta, Jira i Slacka, by uruchamiać tysiące scenariuszy na godzinę. Willison przyznaje, że to pomysłowe, ale kwestionuje koszt: około 20 tysięcy dolarów miesięcznie na inżyniera czyni z tego raczej ćwiczenie modelu biznesowego niż powszechną metodę.

Kolejna korekta dotyczy pomiaru. [Aktualizacja METR z lutego 2026](https://metr.org/blog/2026-02-24-uplift-update/) pokazuje, że jego własny wcześniejszy pomiar produktywności był obciążony selekcją: część developerów odmawiała pracy bez AI, więc wynik nie oddawał realnego przyspieszenia. Opowieść o „zastąpieniu ludzi agentami" opiera się więc na badaniach, które same zespoły badawcze traktują jako niepewne.

Warto też zauważyć, że październikowe podsumowanie praktyki pokazuje zmianę: człowiek nadal zatwierdza każdy merge, a fabryka wykonuje około 66 pull requestów dziennie. To nie jest świat bez ludzi — to świat, w którym człowiek przesunął się z pisania kodu na decyzję o wdrożeniu. Wersja v1 sugerowała, że Mollick opisuje jedną z wielu firm ustawiających reguły dla reszty; dziś wiemy, że reguła „zero recenzji" wycofała się w praktyce.

Praktyczny wniosek: nie kopiuj reguły „nikt nie czyta kodu". Skopiuj mechanizm niezależnej weryfikacji — oddzielny zbiór scenariuszy, którego agent implementujący nie widzi, oraz budżet na testy. To działa też przy jednym developercie i bez czterocyfrowych rachunków za tokeny.

Warto pamiętać, że nawet najlepsza architektura weryfikacji nie rozwiązuje problemu jakości kodu w długim terminie. Willison zwraca uwagę, że kod powstający w fabryce po kilku miesiącach zaczyna przypominać cudzy serwis, którego nikt nie czytał — i wtedy brak ludzkiego przeglądu daje o sobie znać. Taniej jest wprowadzić przegląd na wcześniejszym etapie niż płacić za refaktoring po pół roku.


Nie kopiuj reguły bez recenzji kodu — skopiuj niezależny zbiór scenariuszy i budżet na testy, które działają też przy jednym developercie.
## Źródła i linki
1. [The Shape of the Thing](https://www.oneusefulthing.org/p/the-shape-of-the-thing) — One Useful Thing / Ethan Mollick, 2026-03-12.
2. [How StrongDM's AI team build serious software without even looking at the code](https://simonwillison.net/2026/feb/7/software-factory/) — Simon Willison, 2026-02-07.
3. [Everyone building a software factory wants the same proof](https://devinterrupted.substack.com/p/everyone-building-a-software-factory) — DevInterrupted, 2026-08-13.
4. [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/) — METR, 2026-02-24.
5. [My fireside chat about agentic engineering at the Pragmatic Summit](https://simonwillison.net/2026/Mar/14/pragmatic-summit/) — Simon Willison, 2026-03-14.
