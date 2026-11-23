---
title: "60–90 KB zależności, które przestały być potrzebne — ale nie każdemu"
description: "W typowej aplikacji JavaScript średniej wielkości autor artykułu znajduje od 60 do 90 kilobajtów zminifikowanego i skompresowanego kodu bibliotek, które dziś..."
pubDate: "2026-08-07"
tags: ["AI", "JavaScript", "Baseline", "Wydajność", "Frontend"]
draft: false
sourceDraftId: "7e866cc3-8a5f-4523-9908-00d2eb860a85"
heroImage: "../../assets/7e866cc3-8a5f-4523-9908-00d2eb860a85.jpg"
---

## Czego się dowiesz

- 60–90 KB zbędnych zależności to szacunek autora
- Baseline: Newly available i Widely available po 30 miesiącach
- Newly available nie znaczy, że każdy ma aktualną przeglądarkę
- Baseline pomija technologie wspomagające i Node/Deno/Electron
- Mierz rozmiar w finalnym bundlu, nie w node_modules

W typowej aplikacji JavaScript średniej wielkości autor artykułu znajduje od 60 do 90 kilobajtów zminifikowanego i skompresowanego kodu bibliotek, które dziś obsłużyłaby przeglądarka. Formatowanie dat, żądania HTTP, modale, tooltipy, kopiowanie obiektów i grupowanie tablic przez lata były prawdziwymi lukami.

7 sierpnia 2026 roku Smashing Magazine opublikował [przewodnik po audycie zależności z użyciem Baseline](https://smashingmagazine.com/2026/08/how-baseline-can-help-ship-less-javascript/). Kluczowa obserwacja jest prozaiczna: instalujemy pakiet raz, testy przechodzą i nikt nie pyta, czy biblioteka wciąż robi coś, czego platforma nie potrafi.

Pierwsza korekta wobec v1 jest istotna: przedział 60–90 KB to **szacunek autora**, nie wynik badania. Wersja v1 podała go jako twardy fakt. Podobnie „cztery grupy funkcji, które przestały być lukami” to lista z artykułu, nie zestawienie z oficjalnego zestawu funkcji Baseline.

Samo pojęcie warto jednak wyjaśnić precyzyjnie. [Dokumentacja web.dev](https://web.dev/baseline) mówi, że Baseline ma dwa stany: „Newly available”, gdy funkcja działa we wszystkich głównych przeglądarkach, oraz „Widely available” po 30 miesiącach. Zestaw podstawowy to Chrome, Edge, Firefox i Safari.

Grill ujawnia ograniczenia, których v1 nie pokazało. [web.dev wprost ostrzega](https://web.dev/articles/baseline-and-polyfills), że status „Newly available” nie oznacza, iż każdy użytkownik ma już zaktualizowaną przeglądarkę — zwłaszcza gdy wersja przeglądarki jest związana z wersją systemu. Dokumentacja [web-features](https://github.com/web-platform-dx/web-features/blob/main/docs/baseline.md) dodaje, że Baseline nie uwzględnia obsługi technologii wspomagających (czytniki ekranu, powiększenie, sterowanie głosem) i nie zastępuje szczegółowych danych z Can I Use ani analizy własnego ruchu. Innymi słowy: usunięcie polifillu może być bezpieczne dla statystyki, a niebezpieczne dla konkretnej grupy użytkowników.

Praktyczna procedura jest więc taka. Zacznij od grup, nie od pojedynczych pakietów — wygrane przychodzą klastrami. Dla każdej zależności sprawdź status Baseline i dane o swoich użytkownikach (RUM), zanim cokolwiek usuniesz. Funkcje „Widely available” zwykle nie potrzebują polifillu; „Newly available” wymagają sprawdzenia realnego zasięgu. Przy funkcjach krytycznych — takich jak dostęp do plików — zachowaj ostrożność nawet przy wysokim odsetku wsparcia.

Warto też policzyć rozmiar w finalnym bundlu, nie w `node_modules`. Waga pakietu na dysku to nie to samo, co koszt pobrania przez użytkownika.

web.dev podaje jako praktyczną granicę 98–99 procent wsparcia wśród użytkowników. To dobra liczba do zapamiętania — ale nadal tylko liczba, nie decyzja o dostępności.

Dokumentacja web-features wymienia też rzeczy, których Baseline nie obejmuje wcale: obsługi technologii wspomagających, środowisk niewebowych takich jak Node.js, Deno czy Electron oraz szczegółowych danych o zasięgu w poszczególnych krajach. Autorzy podkreślają, że Baseline nie zastępuje Can I Use ani analizy własnego ruchu. Jeśli funkcja ma status Limited availability, a dodajesz polifill, pamiętaj o warunkowym ładowaniu — inaczej koszt poniosą wszyscy użytkownicy, nie tylko ci z starszą przeglądarką. To właśnie ten szczegół decyduje, czy audyt zależności realnie odciąży bundle, czy tylko przeniesie koszt na użytkownika.


Usunięcie polifillu może być bezpieczne dla statystyki, a niebezpieczne dla konkretnej grupy użytkowników — Baseline nie zastępuje danych o własnym ruchu.
## Źródła i linki
1. [How Baseline Can Help You Ship Less JavaScript](https://smashingmagazine.com/2026/08/how-baseline-can-help-ship-less-javascript/) — Smashing Magazine, 2026-08-07.
2. [Baseline](https://web.dev/baseline) — web.dev.
3. [How to think about Baseline and polyfills](https://web.dev/articles/baseline-and-polyfills) — web.dev, 2025-03-18.
4. [docs/baseline.md — web-features](https://github.com/web-platform-dx/web-features/blob/main/docs/baseline.md) — Web Platform DX Community Group.
