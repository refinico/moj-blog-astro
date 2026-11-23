---
title: "19 procent wolniej, choć czują się o 20 procent szybsi. Co naprawdę wiemy o AI w produkcie"
description: "Doświadczeni programiści pracujący nad własnymi repozytoriami potrzebowali o 19 procent więcej czasu, gdy mogli używać narzędzi AI — choć po badaniu byli prz..."
pubDate: "2025-10-30"
tags: ["AI", "Produktywność", "METR", "Kodowanie", "Pomiar"]
draft: false
sourceDraftId: "03590c47-0e66-4e02-9249-6043f9b07273"
heroImage: "../../assets/03590c47-0e66-4e02-9249-6043f9b07273.jpg"
---

## Czego się dowiesz

- METR: 19% wolniej przy przekonaniu o 20% szybciej
- 16 developerów i 246 zadań w znanych repozytoriach
- Ponad 9% czasu na sprawdzanie wygenerowanego kodu
- Kod bez zmian przyjmowany w mniej niż 44% przypadków
- Subiektywna ocena produktywności zawodzi systematycznie

Doświadczeni programiści pracujący nad własnymi repozytoriami potrzebowali o 19 procent więcej czasu, gdy mogli używać narzędzi AI — choć po badaniu byli przekonani, że przyspieszyli o 20 procent. To wynik randomizowanego eksperymentu [METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), opisanego też przez [Reuters](https://www.reuters.com/business/ai-slows-down-some-experienced-software-developers-study-finds-2025-07-10/).

Dwadzieścia dziewiątego października 2025 roku Chip Huyen podsumowała na [LinkedIn](https://www.linkedin.com/posts/chiphuyen_had-a-great-time-chatting-with-lenny-rachitsky-activity-7389740123669721088-7fVy) rozmowę z Lennym Rachitsky'm. Jej teza brzmiała: większość kłopotów z produktami AI to wcale nie kłopoty z modelem, tylko z interfejsem, danymi i organizacją. Chatbot nie zyskiwał użytkowników, bo odbiorcy mieli zajęte ręce — pomogły gotowe podpowiedzi i opcja głosowa. Model oceny leadów „zepsuł się", bo marketing zbierał złe dane. Wtedy temat brzmiał świeżo i miał sens.

Sprawdzian zmienia obraz. W badaniu METR wzięło udział 16 developerów i 246 zadań w dojrzałych projektach o średnio 22 tysiącach gwiazdek; zadania trwały przeciętnie dwie godziny. Uczestnicy przewidywali 24-procentowe przyspieszenie, zmierzyli spowolnienie. [Analiza Ars Technica](https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/) pokazuje dlaczego: czas zaoszczędzony na pisaniu kodu pochłaniało sprawdzanie odpowiedzi modelu — ponad 9 procent czasu pracy — oraz promptowanie i oczekiwanie. Niezmieniony kod AI przyjmowano w mniej niż 44 procentach przypadków.

Wersja v1 traktowała jako pewnik twierdzenie, że najwięcej zyskują seniorzy. To uogólnienie nie wytrzymuje grillu. METR zmierzył efekt właśnie u programistów z wieloletnim doświadczeniem i w kodzie, który znali — dokładnie tam, gdzie przewaga nie wystąpiła. Sam zespół METR zastrzega, że to migawka z lutego–czerwca 2025 i że w [późniejszej korekcie protokołu](https://metr.org/blog/2026-02-24-uplift-update/) jego własne szacunki są obciążone doborem ochotników. Z kolei analiza rynkowa wskazuje, że przyrost liczby pull requestów rozkłada się nierówno: około 40 procent u juniorów i około 7 procent u seniorów. Różnica dotyczy rodzaju pracy, nie talentu.

Kontrargument jest jednak ważny: METR wyraźnie pisze, że jego wyniki nie dotyczą nieznanych baz kodu, małych projektów ani mniej doświadczonych zespołów. Anecdota o chacie głosowym pozostaje anecdotą — nikt nie przeprowadził tu eksperymentu. Twardy wniosek dotyczy zaś pomiaru: subiektywne poczucie produktywności zawodzi systematycznie.

Praktyczny ruch: zanim kupisz kolejną subskrypcję, zmierz czas wykonania dziesięciu podobnych zadań z narzędziem i bez, w swoim repozytorium. Równolegle sprawdź pytania w formularzach i dane wejściowe — tam, gdzie Huyen miała rację, poprawa jakości danych kosztuje mniej niż strojenie modelu.

Warto też odnotować, że sam Huyen przyznaje w podcaście, że produktywności nie da się łatwo zmierzyć: menedżerowie wybierają dodatkowego człowieka, bo etat jest namacalny, a wiceprezesi widzą wartość jednego asystenta w całym portfolio. Ta różnica perspektyw tłumaczy, dlaczego firmy tak długo zwlekają z decyzją — nie dlatego, że narzędzia nie działają, lecz dlatego, że nikt nie potrafi pokazać im wyniku w wybranym przez siebie języku.


Zmierz dziesięć podobnych zadań z narzędziem i bez w swoim repozytorium — wrażenie prędkości nie wytrzymuje konfrontacji z zegarem.
## Źródła i linki
1. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025-07-10.
2. [AI slows down some experienced software developers, study finds](https://www.reuters.com/business/ai-slows-down-some-experienced-software-developers-study-finds-2025-07-10/) — Reuters, 2025-07-10.
3. [Study finds AI tools made open source software developers 19 percent slower](https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/) — Ars Technica, 2025-07-14.
4. [Had a great time chatting with Lenny Rachitsky on building AI products](https://www.linkedin.com/posts/chiphuyen_had-a-great-time-chatting-with-lenny-rachitsky-activity-7389740123669721088-7fVy) — Chip Huyen, 2025-10-30.
5. [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/) — METR, 2026-02-24.
