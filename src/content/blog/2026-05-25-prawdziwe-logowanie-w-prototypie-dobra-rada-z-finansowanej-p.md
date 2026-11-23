---
title: "Prawdziwe logowanie w prototypie. Dobra rada z finansowanej przez dostawcę instrukcji"
description: "Uczestnik testu wpisuje hasło, unosi wzrok i sprawdza, czy „robi to dobrze”."
pubDate: "2026-05-25"
tags: ["AI", "UX", "Prototypy", "BadaniaUżytkowników", "Design"]
draft: false
sourceDraftId: "86e6377f-571b-4d52-b913-0b0dc286934a"
heroImage: "../../assets/86e6377f-571b-4d52-b913-0b0dc286934a.jpg"
---

## Czego się dowiesz

- Wiarygodny moment to logowanie w badaniach fintech
- alex.c@gmail.com i ABC123 to zakodowany warunek, nie uwierzytelnianie
- Opóźnienia animacji Face ID: 0, 0, 0,5 i 1 sekundy
- NN/g: uczestnicy zwykle zawieszają niewiarę, nawet przy papierze
- Materiał sponsorowany, autor pracuje w ProtoPie

Uczestnik testu wpisuje hasło, unosi wzrok i sprawdza, czy „robi to dobrze”. Zdaniem Erica Josepha L. z ProtoPie ta sekunda zdradza wszystko: użytkownik zorientował się, że to nie jest prawdziwa aplikacja, a każda kolejna obserwacja jest już przefiltrowana przez tę świadomość.

25 maja 2026 roku [Smashing Magazine opublikował instrukcję](https://www.smashingmagazine.com/2026/05/prototype-users-fix-protopie/) budowy wiarygodnego ekranu logowania w ProtoPie. Temat wraca w badaniach fintechowych, gdzie zaufanie buduje się w sekundy, a pola akceptujące dowolną wartość natychmiast zdradzają makietę. Warto jednak zacząć od informacji, którą draft pominął: artykuł jest wyraźnie oznaczony jako wsparty finansowo przez ProtoPie, a jego autor pracuje w tej firmie jako creative technologist.

Przepis techniczny wytrzymał weryfikację. [Oryginalny tutorial ProtoPie](https://www.protopie.io/blog/fintech-prototyping-protopie-login-flow-tutorial) z 10 kwietnia 2026 opisuje pola przyjmujące tekst z klawiatury, maskowanie hasła typem Text Password, zmienne username i password pobierające wpisane wartości przez input(...).text oraz warunek przepuszczający tylko alex.c@gmail.com i ABC123. Błędne dane ujawniają komunikat, a animacja Face ID z pliku Lottie dostaje opóźnienia 0, 0, 0,5 i 1 sekundy dla kolejnych reakcji Move, Seek, Play i Jump. Wszystko działa w darmowym planie, bez kodu.

Korekta jest jednak potrzebna. To nie jest „prawdziwe uwierzytelnianie”, lecz twardo zakodowany warunek wewnątrz prototypu — nie ma zaplecza, biometrii ani bezpieczeństwa. Draft nazwał to po prostu przepuszczaniem „konkretnych danych”, co brzmi neutralnie, ale warto powiedzieć wprost. W samym tutorialu jest też szczegół do sprawdzenia: warunek błędu podano jako dwie reguły „nie równa się” połączone koniunkcją, podczas gdy zaprzeczeniem warunku (A i B) jest (nie A lub nie B). Jeśli ProtoPie domyślnie łączy reguły operatorem AND, błąd nie pokaże się, gdy użytkownik pomyli tylko jedno pole.

Kontrargument jest mocniejszy niż techniczna uwaga. [NN/g zauważa od dawna](https://www.nngroup.com/articles/authentic-behavior-in-user-testing/), że uczestnicy badań zwykle z łatwością zawieszają niewiarę — Nawet gdy chodzi o kartkę papieru, o ile mogą przechodzić między ekranami w dążeniu do celu. Badania porównujące prototypy o różnej wierności nie pokazały istotnych różnic w liczbie i wadze wykrytych problemów. Twierdzenie, że fałszywe logowanie unieważnia całą sesję, jest więc tezą marketingową, nie wynikiem eksperymentu. [NN/g zwraca też uwagę](https://www.nngroup.com/articles/users-real-data/), że w badaniach jakościowych dane własne uczestnika pogłębiają wgląd, ale w badaniach ilościowych zalecane są identyczne dane fikcyjne — akurat odwrotnie, niż sugeruje jednoznaczny przekaz artykułu.

Dla praktyka wniosek jest wyważony. Wybierz moment, w którym użytkownik zaczyna ufać interfejsowi, i nadaj mu wiarygodne zachowanie — także dlatego, że warunki i zmieniające się wartości stają się wtedy specyfikacją dla deweloperów. Ale nie traktuj rady dostawcy narzędzia jako dowodu skuteczności metody. Przetestuj ją na małej próbie, sprawdź, czy rzeczywiście zmienia wyniki, i pamiętaj, że zbyt przekonujący fałszywy ekran może skłonić uczestnika do wpisania prawdziwych danych.


Nadaj wiarygodność punktowi, w którym rodzi się zaufanie, ale nie traktuj rady dostawcy narzędzia jako dowodu skuteczności metody.
## Źródła i linki
1. [Your Prototype Is Not Being Honest With Your Users (And Here's How To Fix It)](https://www.smashingmagazine.com/2026/05/prototype-users-fix-protopie/) — Eric Joseph L., Smashing Magazine, 2026-05-25 (materiał sponsorowany przez ProtoPie).
2. [How to Build a Realistic FinTech Login Flow in ProtoPie Without Writing a Single Line of Code](https://www.protopie.io/blog/fintech-prototyping-protopie-login-flow-tutorial) — ProtoPie, 2026-04-10.
3. [Authentic Behavior in User Testing](https://www.nngroup.com/articles/authentic-behavior-in-user-testing/) — Nielsen Norman Group, 2005-02-14.
4. [Conducting Usability Testing with Real Users' Real Data](https://www.nngroup.com/articles/users-real-data/) — Nielsen Norman Group, 2016-01-24.
