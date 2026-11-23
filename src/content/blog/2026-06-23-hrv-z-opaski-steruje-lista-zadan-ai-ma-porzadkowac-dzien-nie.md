---
title: "HRV z opaski steruje listą zadań. AI ma porządkować dzień, nie dopingować"
description: "Kalendarz zakłada, że każdy dzień ma taką samą pojemność."
pubDate: "2026-06-23"
tags: ["AI", "Produktywność", "HRV", "Wellbeing", "Automatyzacja"]
draft: false
sourceDraftId: "a1b2fd57-760d-4cd7-ba43-c18a61bafbc3"
heroImage: "../../assets/a1b2fd57-760d-4cd7-ba43-c18a61bafbc3.jpg"
---

## Czego się dowiesz

- Whoop mierzy HRV w czasie snu, by wyeliminować dzienny szum
- RMSSD i 20–150 ms to dokumentacja WHOOP, nie wpis Salkowskiego
- Tryby PUSH, NORMAL i PROTECT lądują też na Slacku
- Wynik interpretuje się względem własnego baseline’u, nie normy
- Komentatorzy: ryzyko samospełniającej się przepowiedni i biomaszyny

Kalendarz zakłada, że każdy dzień ma taką samą pojemność. Ciało tak nie pracuje. Damian Salkowski przestał więc układać zadania pod godziny i zaczął pod gotowość układu nerwowego mierzoną opaską Whoop [1].

23 czerwca 2026 roku opisał swój system w poście na LinkedIn. Whoop mierzy między innymi HRV, czyli zmienność odstępów między uderzeniami serca — przybliżenie gotowości do działania. Codzienny przegląd robi skill w Claude Code. Autor nie prosi go o motywację, tylko o zderzenie stanu dnia z listą zadań i wskazanie, co zostaje, a co wędruje później [1].

Na wyjściu dostaje krótki „stan na dziś": data, Recovery, HRV z własnym baseline'em, RHR, sen z perfem i porą pójścia spać, trend HRV oraz tryb — PUSH, NORMAL albo PROTECT [1]. PROTECT nie jest wymówką od pracy. To świadomy wybór zadań o mniejszym ciężarze decyzyjnym i zostawienie luzu na poprawki. Tryb ląduje też na Slacku, więc zespół wie, czy danego dnia lepiej nie denerwować właściciela [1].

Wcześniejsza wersja tekstu podawała metodę RMSSD i przedział 20–150 milisekund jako część systemu Salkowskiego. W jego poście tych liczb nie ma. Potwierdza je natomiast dokumentacja samego WHOOP: firma liczy HRV metodą RMSSD z nocnych odczytów, typowe wartości mieszczą się w przedziale 20–150 ms, a wynik interpretuje się względem własnego baseline'u, nie ogólnej normy [3]. Liczby są więc prawdziwe, tylko nie pochodziły z opisu tego konkretnego systemu [1].

WHOOP mierzy HRV w czasie snu właśnie po to, by wyeliminować dzienny szum: posiłek, rozmowa czy wejście po schodach zmieniają odczyt [3]. Z tego samego powodu nie porównuje się wyników z różnych urządzeń — używają innych okien pomiaru i czasem innych indeksów [3]. To ważne, jeśli ktoś chciałby przenieść ten schemat na inny sensor.

Grill przyszedł w komentarzach. Użytkownicy podnosili ryzyko samospełniającej się przepowiedni: kilka dni niskiego Recovery może stać się alibi zamiast sygnałem [1]. Inni wskazywali na niepewność samego pomiaru i na to, że Garmin ma podobną funkcję „baterii" wbudowaną, więc nie trzeba budować własnego skilla [1]. Padło też zdanie o robieniu z ciała i stanu psychoemocjonalnego „biomaszyny podporządkowanej efektywności" [1]. To nie jest argument przeciwko mierzeniu, tylko przeciwko traktowaniu jednej liczby jako decyzji.

Cała warstwa AI nie polega tu zresztą na mądrych radach. Polega na tym, że decyzja zostaje zapisana, widoczna dla zespołu i nie trzeba jej codziennie negocjować w głowie.

Praktyczny krok jest mały: wybierz jeden sygnał, jeden przegląd dziennie i jedną regułę zmiany listy. Nie musisz kupować opaski, żeby przestać udawać, że każdy dzień jest taki sam. Chodzi o to, by jedna reguła stała się nawykiem, zanim dodasz kolejną aplikację do stosu.


Chodzi o to, by jedna reguła stała się nawykiem, zanim dodasz kolejną aplikację do stosu.
## Źródła i linki
1. [Lista zadań sterowana gotowością układu nerwowego](https://pl.linkedin.com/posts/damian-salkowski_lista-zada%C5%84-sterowana-gotowo%C5%9Bci%C4%85-uk%C5%82adu-nerwowego-activity-7475145548522676224-8KTH) — LinkedIn, 2026-06-23.
2. [WHOOP Podcast 84: Recovery Update](https://www.whoop.com/us/en/thelocker/podcast-84-recovery-update/) — WHOOP, 2026-05-12.
3. [Heart Rate Variability: How to Read and Improve Your HRV](https://www.whoop.com/us/en/thelocker/heart-rate-variability-how-to-read-and-improve-your-hrv/) — WHOOP, 2026-08-12.
