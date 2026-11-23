---
title: "19 proc. wolniej z AI. METR samo wycofuje ten wynik — co zostało z paradoksu produktywności"
description: "19 proc."
pubDate: "2026-03-13"
tags: ["AI", "METR", "Produktywność", "Kod", "Badania"]
draft: false
sourceDraftId: "68eb5be7-c7a2-4daa-a940-7a9ed019dc68"
heroImage: "../../assets/68eb5be7-c7a2-4daa-a940-7a9ed019dc68.jpg"
---

## Czego się dowiesz

- 19 proc. spowolnienia, przedział ufności 2–39 proc.
- Samoocena zawiodła: 24 proc. oczekiwań, 20 proc. po fakcie
- Mniej niż 44 proc. kodu przyjęto bez zmian
- METR uznał wynik za nieaktualny w lutym 2026
- Meta-analiza: umiarkowany efekt g = 0,33

19 proc. wolniej — i dziś METR samo nazywa ten wynik nieaktualnym. Gdy 13 marca 2026 roku pisano o zadyszanym tempie pracy, badanie z lipca 2025 roku brzmiało jak najtwardszy dowód, że AI obiecuje wakacje, a daje więcej spraw. Po grillu ten dowód trzeba wyraźnie ograniczyć.

Wtedy temat miał sens. W branży krążyły obietnice automatyzacji, a praktycy opisywali rosnącą liczbę powiadomień i przełączanie kontekstu w połowie sprintu. [Raport METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) dawał temu liczbę: 16 doświadczonych developerów, 246 zadań w dużych repozytoriach, losowy przydział „z AI” lub „bez”. Przed startem przewidywali 24-procentowe przyspieszenie, po wszystkim nadal wierzyli w 20-procentowe, a pomiar pokazał 19-procentowe spowolnienie.

Weryfikacja potwierdza mechanizm. [Ars Technica](https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/) opisuje, że czas zaoszczędzony na pisaniu kodu i szukaniu informacji pochłaniało przeglądanie outputu, pisanie promptów i czekanie. Mniej niż 44 proc. wygenerowanego kodu przyjmowano bez zmian, a około 9 proc. czasu zabierała jego weryfikacja.

Korekta jest jednak istotna. METR opatrzył wynik tabelą rzeczy, których badanie nie dowodzi: nie wykazało, że AI nie przyspiesza większości programistów ani że nie działa w innych dziedzinach. Przedział ufności był szeroki — od 2 do 39 proc. spowolnienia — a ustawienie szczególne: dojrzałe repozytoria, wysokie standardy, narzędzia z lutego–czerwca 2025. [Aktualizacja z lutego 2026](https://metr.org/blog/2026-02-24-uplift-update/) jest jeszcze ostrzejsza: organizatorzy piszą wprost, że stare wyniki już nie odzwierciedlają realnego wpływu modeli, a nowe dane są „złym przybliżeniem” przez efekty selekcji — część deweloperów odmawiała pracy bez AI, 30–50 proc. nie zgłaszało zadań, które chciałoby wykonać z jego pomocą, a stawka spadła ze 150 do 50 dolarów za godzinę.

Kontrargument jest równie mocny. [Meta-analiza z 2026 roku](https://arxiv.org/abs/2605.04779) znajduje umiarkowany, statystycznie istotny pozytywny efekt GenAI na produktywność (g = 0,33), większy w kontrolowanych eksperymentach, mniejszy w projektach open source. Z drugiej strony [badanie o pozornej produktywności](https://arxiv.org/abs/2510.24265) pokazuje, że subiektywnemu przyspieszeniu towarzyszy większe obciążenie przeglądem kodu i niezmieniony koszt poznawczy. Obie rzeczy mogą być prawdziwe naraz.

Praktyczny wniosek: nie cytuj jednego RCT jako wyroku. Zmierz w własnym zespole czas od zadania do merge'u i osobno czas poświęcony na review. Traktuj samoocenę jako dane najsłabszej jakości. Jeśli oszczędność czasu znika w weryfikacji, problem leży w procesie, nie w modelu — ale jeśli znika tylko w cudzym badaniu, to jeszcze nie twój problem.


Jeden RCT to nie wyrok — mierz w własnym zespole czas do wdrożenia i osobno czas przeglądu.
## Źródła i linki
1. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025-07-10.
2. [Study finds AI tools made open source software developers 19 percent slower](https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/) — Ars Technica, 2025-07-14.
3. [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/) — METR, 2026-02-24.
4. [A meta-analysis of the effect of generative AI on productivity and learning in programming](https://arxiv.org/abs/2605.04779) — arXiv, 2026-05-06.
5. [The Fast and Spurious: Developer Productivity with GenAI](https://arxiv.org/abs/2510.24265) — arXiv, 2026-04-05.
6. [Measuring the Self-Reported Impact of Early-2026 AI on Technical Worker Productivity](https://metr.org/blog/2026-05-11-ai-usage-survey/) — METR, 2026-05-11.
