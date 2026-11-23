---
title: "Turbo-doładowanie ma granicę. Dowód: sześć zmyślonych wyroków"
description: "W 2023 roku sąd w Nowym Jorku ukarał dwóch prawników 5 tysiącami dolarów za złożenie wniosku z sześcioma nieistniejącymi cytatami sądowymi wygenerowanymi prz..."
pubDate: "2026-05-19"
tags: ["AI", "Prawo", "Weryfikacja", "RAG", "Ekspertyza"]
draft: false
sourceDraftId: "1b138e42-7087-42b8-807e-ea5f82599c5b"
heroImage: "../../assets/1b138e42-7087-42b8-807e-ea5f82599c5b.jpg"
---

## Czego się dowiesz

- Mata v. Avianca: 5 tys. USD kary za sześć fałszywych cytatów
- Sąd nie zakazał AI — ukarał porzucenie roli strażnika
- Wywiad z dr Okoniem: 25 lat w prawie własności intelektualnej
- Ten sam URL jako dwa źródła; felieton Guadamuza niezweryfikowany
- Stack Overflow: 46% nie ufa dokładności AI, 3% silnie ufa

W 2023 roku sąd w Nowym Jorku ukarał dwóch prawników 5 tysiącami dolarów za złożenie wniosku z sześcioma nieistniejącymi cytatami sądowymi wygenerowanymi przez ChatGPT. To najlepszy kontrargument dla tezy, że znajomość technologii wystarczy, by bezpiecznie korzystać z AI w pracy eksperckiej.

19 maja 2026 roku opublikowano [wywiad z dr Zbigniewem Okoniem](https://rewolucjaai.com/2026/05/19/wywiad-zbigniew-okon-ai-praktyka-prawnicza/). To radca prawny, partner kancelarii Lubasz i Wspólnicy, wykładowca Akademii Leona Koźmińskiego i doktor nauk prawnych z ponad 25-letnim stażem w prawie własności intelektualnej. Gdy wchodził do branży, uczył się sieci i „stron internetowych”; dziś rozkłada na czynniki pierwsze RAG i zachowanie modeli.

Część faktografii z v1 się potwierdza: biografia, 25 lat doświadczenia, odwołanie do felietonu Andresa Guadamuza „Why We Need Tech Lawyers to Shine Again” w periodyku IIC. Ale wersja v1 podała ten sam adres URL jako dwa osobne źródła — jakby felieton dało się tam przeczytać. Nie da się. Bezpośredniego tekstu Guadamuza nie udało się zweryfikować, więc nie powinien figurować jako odrębna pozycja. Podobnie sformułowanie „turbo-doładowanie, nie zamiennik” pochodzi z redakcyjnego tytułu opracowania; w dostępnym fragmencie wywiadu Okoń mówi o trzech motywacjach: fascynacji, zawodowej potrzebie i zrozumieniu technologii.

Grill jest tu bezlitosny i bardzo konkretny. W sprawie [Mata v. Avianca](https://www.ctd.uscourts.gov/sites/default/files/Mata-v.-Avianca.pdf) sąd nie karał za samo użycie AI — wprost napisał, że nie ma nic niewłaściwego w korzystaniu z wiarygodnego narzędzia. Ukarał za porzucenie roli strażnika: prawnicy złożyli uwierzytelnienie z nieistniejącymi opiniami, a potem nadal ich bronili. Czyli dokładnie o to, o co chodzi w tezie Okonia — zrozumienie architektury nie zastępuje obowiązku sprawdzenia wyniku.

Dodatkowo [ankieta Stack Overflow z 2025 roku](https://survey.stackoverflow.co/2025/ai) pokazuje, że 46 procent deweloperów nie ufa dokładności AI, a tylko 3 procent „silnie ufa” jego odpowiedziom. To racjonalna postawa, nie pesymizm.

Praktyczny wniosek jest więc ostrzejszy niż w v1. Nie wystarczy „zrozumieć architekturę na dużym poziomie ogólności”. Trzeba ustalić zasadę, że każdy cytat, numer i odwołanie z modelu przechodzi przez weryfikację w źródle pierwotnym — zanim trafi do dokumentu. W kancelarii oznacza to regułę podpisu. W zespole produktowym: wymóg, by twierdzenie o danych miało link do zapytania albo do osoby, która je potwierdziła.

Okoń mówi, że do uruchomienia takich narzędzi nie potrzeba kosmicznego sprzętu — wystarczy zwykły komputer z mocniejszą kartą graficzną. To prawda. Ale w sprawie Mata v. Avianca kłopot zaczął się nie od sprzętu, tylko od zdania podpisanego bez sprawdzenia.

W orzeczeniu Mata v. Avianca pada zdanie, które warto zapamiętać w całości: nie ma nic niewłaściwego w korzystaniu z wiarygodnego narzędzia AI przy przygotowywaniu pism. Sąd uznał jednak, że obowiązujące reguły nakładają na prawnika rolę strażnika dokładności. To rozróżnienie jest ważniejsze niż sama kara. Nie chodzi o zakaz narzędzia, tylko o to, kto podpisuje wynik. W kancelarii, w redakcji i w zespole produktowym odpowiedź brzmi tak samo: podpisuje człowiek, więc człowiek sprawdza.


Zrozumienie architektury nie zastępuje obowiązku sprawdzenia — podpisuje człowiek, więc człowiek weryfikuje każdy cytat w źródle pierwotnym.
## Źródła i linki
1. [„Turbo-doładowanie, nie zamiennik”. Jak dr Zbigniew Okoń używa AI w praktyce prawniczej](https://rewolucjaai.com/2026/05/19/wywiad-zbigniew-okon-ai-praktyka-prawnicza/) — Rewolucja AI, 2026-05-19.
2. [Opinion and Order on Sanctions, Mata v. Avianca](https://www.ctd.uscourts.gov/sites/default/files/Mata-v.-Avianca.pdf) — U.S. District Court, S.D.N.Y., 2023-06-22.
3. [Mata v. Avianca, Inc., Document 54](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2022cv01461/575368/54/) — Justia, 2023-06-22.
4. [AI — 2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/ai) — Stack Overflow, 2025.
