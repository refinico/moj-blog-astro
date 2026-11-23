---
title: "25 dolarów za aplikację, 975 za czekanie. Co naprawdę pokazał eksperyment CRUX"
description: "Agent zbudował aplikację do ćwiczeń oddechowych, przygotował politykę prywatności, wypełnił formularze App Store i wysłał ją do recenzji."
pubDate: "2026-04-16"
tags: ["AI", "1", "AgenciAI", "Ewaluacja", "Koszty"]
draft: false
sourceDraftId: "b5d7ae81-46d4-481a-94a5-aa4c0c00ccf5"
heroImage: "../../assets/b5d7ae81-46d4-481a-94a5-aa4c0c00ccf5.jpg"
---

## Czego się dowiesz

- 25 dolarów za zbudowanie, 975 za oczekiwanie na Apple
- Pięć interwencji, tylko jedna wynikła z błędu agenta
- Taniej wyszło przez 2FA i skrypt JWT, nie rozmyślną optymalizację
- Open-world evals: jedna próba, brak powtarzalności
- Replikacja na Windowsie zamknęła się 682 dolarami

Agent zbudował aplikację do ćwiczeń oddechowych, przygotował politykę prywatności, wypełnił formularze App Store i wysłał ją do recenzji. Zajęło mu to 45 minut i kosztowało 25 dolarów. Kolejne dziesięć dni oczekiwania na Apple pochłonęło 975 dolarów — agent sprawdzał status co pięć minut.

16 kwietnia 2026 roku Sayash Kapoor i Arvind Narayanan [opublikowali pracę o ewaluacjach w otwartym świecie](https://www.normaltech.ai/p/open-world-evaluations-for-measuring) i przedstawili CRUX — współpracę 17 badaczy z uczelni, rządu, organizacji społecznych i przemysłu. Wtedy temat był aktualny: duże benchmarki nasycały się szybciej, niż rosła umiejętność ich interpretacji, więc zespół zaproponował testy, w których liczy się cały przebieg zadania, a nie jedna poprawna odpowiedź.

Większość draftu wytrzymała kontrolę. [Raport CRUX #1](https://cruxevals.com/crux-1/) potwierdza 45 minut, 25 dolarów za zbudowanie i wysłanie, dziesięć dni recenzji oraz łączny koszt około tysiąca dolarów. Agent dostał konto dewelopera, maszynę wirtualną z macOS, GitHub i Gmaila. Popełnił dwa błędy: zmyślił numer telefonu do kontaktu z recenzentami i zgubił dane logowania — tylko ten drugi wymagał interwencji. Aplikacja przeszła recenzję, choć przełącznik dźwięku nie działa, a screenshot ma błędy. Zespół uprzedził Apple cztery tygodnie wcześniej.

Pierwsza korekta dotyczy liczby interwencji. Było ich pięć, nie jedna: cztery wynikały z polityki Apple lub awarii infrastruktury (uwierzytelnianie dwuskładnikowe, restart demona, zgoda na publikację). Druga, ważniejsza, dotyczy oszczędności. Draft napisał, że agent „sam zorientował się, że to drogie” i przeszedł na podagentów. Autorzy raportu opisują zmianę strategii i spadek stawki z 35 do 3 dolarów za godzinę, ale [replikacja Ziego Donga](https://www.yzdong.me/blog/crux-windows) z kwietnia 2026, z aktualizacją po rozmowie z jednym z autorów, podaje inną przyczynę: wygasły pliki cookie, agent utknął na dwuskładnikowym uwierzytelnieniu i zamiast przeglądarki napisał skrypt czytający lokalny token JWT. Taniej wyszło przy okazji, nie z rozmysłu. Okazało się też, że plik z instrukcją delegowania na podagentów został agentowi podany na starcie przez operatorów.

Kontrargument samych autorów jest jeszcze mocniejszy. Ewaluacje w otwartym świecie mają liczbę prób równą jednemu, nie dają się powtórzyć ani ustandaryzować, nie nadają się do porównywania modeli, a ich kryteria sukcesu rozmywa interwencja człowieka. To narzędzie do wczesnego ostrzegania, nie dowód. Replikacja na Windowsie nie odtworzyła spadku kosztów i zamknęła się kwotą 682 dolarów — różnica wynikała z konfiguracji, nie z „inteligencji” agenta.

Dla praktyka wniosek jest więc inny niż triumfalny. Mierz koszt całego przebiegu, nie tylko tworzenie kodu, i pilnuj pętli oczekiwania — tu leżała prawdziwa faktura. Zanim uznasz, że agent „sam się zoptymalizował”, sprawdź, kto przygotował mu instrukcje i co faktycznie wywołało zmianę. I pamiętaj, że pojedynczy udany przebieg mówi, że coś jest możliwe, a nie że jest powtarzalne.


Mierz koszt całego przebiegu, nie tylko tworzenie kodu, i sprawdź, kto przygotował agentowi instrukcje, zanim uznasz go za samodzielnego.
## Źródła i linki
1. [Open-world evaluations for measuring frontier AI capabilities](https://www.normaltech.ai/p/open-world-evaluations-for-measuring) — Sayash Kapoor i Arvind Narayanan, Normal Tech, 2026-04-16.
2. [CRUX #1: Can AI agents autonomously develop and publish an iOS app?](https://cruxevals.com/crux-1/) — CRUX, 2026-04.
3. [Reproducing CRUX #1 on Windows](https://www.yzdong.me/blog/crux-windows) — Zi Dong, 2026-04-20 (aktualizacja 2026-04-27).
4. [Open-World Evaluations for Measuring Frontier AI Capabilities](https://www.alphaxiv.org/abs/2605.20520) — Kapoor i in., alphaXiv, 2026-05-19.
