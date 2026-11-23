---
title: "Trzy do sześciu sesji równolegle. Ale nie każdy workflow da się skopiować"
description: "Eugene Yan uruchamia zwykle od trzech do sześciu sesji z agentem jednocześnie."
pubDate: "2026-05-03"
tags: ["AI", "AgenciAI", "Kontekst", "Produktywność", "Weryfikacja"]
draft: false
sourceDraftId: "7c85b141-0244-47eb-8b72-234377e6cf48"
heroImage: "../../assets/7c85b141-0244-47eb-8b72-234377e6cf48.jpg"
---

## Czego się dowiesz

- Trzy do sześciu sesji równolegle u Eugene'a Yana
- Kontekst jako infrastruktura: katalog kodu, wiedzy i plik indeksu
- Gust jako konfiguracja, ale długi plik to podatek kontekstowy
- Nie deleguj tego, czego nie umiesz zweryfikować
- 2500 wiadomości źródłem poprawek: jeszcze raz, sprawdziłeś

Eugene Yan uruchamia zwykle od trzech do sześciu sesji z agentem jednocześnie. 3 maja 2026 roku opisał pięć zasad, które sprawiają, że kolejna sesja jest mądrzejsza niż poprzednia.

Wersja v1 oddała strukturę — kontekst jako infrastruktura, gust jako konfiguracja, weryfikacja, delegowanie, domknięcie pętli — ale potraktowała ją jako uniwersalną receptę. Grill pokazuje, że to bardzo konkretny, narzędziowy przepis, a jego siła wynika z kilku założeń, które nie w każdym zespole są spełnione.

[Oryginalny tekst](https://eugeneyan.com/writing/working-with-ai) jest jasny: kod leży w katalogu ~/src, wiedza w ~/vault, a każdy projekt ma plik indeksujący dokumenty wraz z właścicielem i adresem. [Streszczenie Engineered.at](https://engineered.at/articles/how-to-work-and-compound-with-ai) podkreśla, że chodzi o to, by artefakty z jednej sesji stawały się kontekstem następnej.

Potwierdziły się też liczby: Yan przeglądał około 2500 swoich wcześniejszych wiadomości i szukał w nich zwrotów typu „jeszcze raz”, „sprawdziłeś?”, „dalej źle”. [Krótka analiza AI/TLDR](https://ai-tldr.dev/releases/eugene-yan-working-with-ai-may3/) nazywa każdą sesję jednostką uczenia się organizacji: preferencje zamieniają się w konfigurację, błędy w listę kontrolną.

Korekta dotyczy zakresu. V1 pisało o „zestawie zasad”, nie zaznaczając, że przykłady są silnie związane z jednym środowiskiem. Pliki CLAUDE.md, umiejętności w ~/.claude i hooki to mechanizmy konkretnego narzędzia. [Przewodnik THE D*AI*LY BRIEF](https://www.beri.net/learning/eugeneyan-how-to-work-and-compound-with-ai) wymienia je wprost. W zespole korzystającym z innego harnessu trzeba najpierw przełożyć zasady na lokalne mechanizmy.

Druga korekta dotyczy kosztu utrzymania. Yan sam ostrzega przed „podatkiem kontekstowym”: zbyt długi plik instrukcji wczytuje się przy każdej sesji, więc część treści wynosi do osobnych przewodników wczytywanych na żądanie. Reguły też mogą się dublować albo sprzeczne — wtedy model ignoruje akurat tę, na której zależy.

Kontrargument jest więc praktyczny. Delegowanie większych zadań wymaga wcześniejszego zdefiniowania kryteriów sukcesu i sposobu weryfikacji. Jeśli zespół nie potrafi powiedzieć, czym jest poprawny wynik, trzy do sześciu równoległych sesji nie przyspieszą pracy — tylko równolegle wygenerują błędy. Autonomia rośnie z powtarzalnej kontroli, nie z zaufania.

Trzeci kłopot to pomijanie pracy niepowtarzalnej. Systemy Yan opierają się na rzeczach wykonywanych często; zadanie jednorazowe lepiej zostawić w zwykłej rozmowie. Próba u prostych, powtarzalnych czynności nie ma sensu.

Dla praktyka wniosek jest skromniejszy niż w v1. Nie buduj od razu całego systemu. Wybierz jedną czynność wykonywaną co tydzień, zapisz ją jako krótką instrukcję z przykładem i dodaj jeden prosty test, który potwierdzi efekt. Gdy ta instrukcja zacznie działać, przenieś do niej kolejną poprawkę zamiast powtarzać ją w czacie.

Yan potrzebował 2500 rozmów, żeby dojść do tych zasad. Ty możesz zacząć od jednej.


Zacznij od jednej cotygodniowej czynności, krótkiej instrukcji i jednego testu — system rośnie z poprawek, nie z planu.
## Źródła i linki
1. [How to Work and Compound with AI](https://eugeneyan.com/writing/working-with-ai) — Eugene Yan / eugeneyan.com, 2026-05-03.
2. [How to Work and Compound with AI | Engineered.at](https://engineered.at/articles/how-to-work-and-compound-with-ai) — Engineered.at, 2026-05-03.
3. [Eugene Yan: How to Work and Compound with AI](https://ai-tldr.dev/releases/eugene-yan-working-with-ai-may3/) — AI/TLDR, 2026-05-03.
4. [How to Work and Compound with AI — Intermediate Guide](https://www.beri.net/learning/eugeneyan-how-to-work-and-compound-with-ai) — THE D*AI*LY BRIEF, 2026.
5. [How to Work and Compound with AI (komentarze)](https://github.com/eugeneyan/eugeneyan-comments/issues/103) — GitHub / Eugene Yan, 2026.
