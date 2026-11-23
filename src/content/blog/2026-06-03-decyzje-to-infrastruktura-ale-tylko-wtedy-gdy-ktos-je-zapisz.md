---
title: "Decyzje to infrastruktura — ale tylko wtedy, gdy ktoś je zapisze"
description: "Generowany prototyp wygląda znajomo, ale nie pasuje do produktu."
pubDate: "2026-06-03"
tags: ["AI", "DesignSystem", "UX", "Figma", "Produktywność"]
draft: false
sourceDraftId: "7b544fe3-d15c-40a4-9b7f-10ef9eacd876"
heroImage: "../../assets/7b544fe3-d15c-40a4-9b7f-10ef9eacd876.jpg"
---

## Czego się dowiesz

- Decyzje projektowe są infrastrukturą dla modelu
- Specyfikacja potrzebuje priorytetów, przykładów i listy zakazów
- FigmaLint audytuje tokeny; „stany komponentów” niepotwierdzone
- METR: 16 deweloperów o 19% wolniej z AI
- Mniej niż 44% sugestii przyjęto bez zmian

Generowany prototyp wygląda znajomo, ale nie pasuje do produktu. To rzadko wina modelu. [Smashing Magazine](https://smashingmagazine.com/2026/06/how-make-design-system-ai-ready/) wskazał 3 czerwca 2026 roku na drobne niespójności rozsypane po systemie projektowym: nieopisane decyzje, wartości wpisane na sztywno, nadmierne poleganie na tym, że AI samo odczyta intencję z makiety.

Podstawą jest [praktyczny przewodnik Hardika Pandyi z Atlassian](https://hvpandya.com/llm-design-systems). Jego pierwsza zasada brzmi: decyzje projektowe są infrastrukturą. Nie tylko wygląd, ale też kolejność pracy i powody wyboru jednego rozwiązania zamiast drugiego muszą trafić do pliku specyfikacji, z którego korzysta model. Potrzebuje priorytetów, przykładów oraz listy „rób” i „nie rób”.

To, co w wersji v1 było opisane jako pewna wiedza, warto jednak zważyć. Artykuł wymienia [darmową wtyczkę FigmaLint](https://www.figma.com/community/plugin/1521241390290871981/figmalint) do audytu tokenów i stylów v1 dopisało „stany komponentów”, czego dostępny opis nie potwierdza. Sam przewodnik jest również opinią jednego praktyka, nie wynikiem kontrolowanego badania. To nie umniejsza jego użyteczności, ale zmienia rangę: to dobra praktyka, nie dowód skuteczności.

Grill przynosi ważniejszy kontrargument. [Badanie METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) z 2025 roku pokazało, że 16 doświadczonych programistów pracowało o 19 procent wolniej, gdy korzystało z narzędzi AI we własnych, dobrze znanych repozytoriach. Zysk czasowy pojawił się w czytaniu i pisaniu kodu, ale zjadły go czas poświęcony na promptowanie, oczekiwanie i sprawdzanie wygenerowanego kodu — przyjęto mniej niż 44 procent sugestii bez zmian. Dokładnie ten sam mechanizm działa przy prototypach: „wygeneruję szybciej” nie znaczy „skończę szybciej”.

Korekta wobec v1 jest więc taka: audyt źródła nie jest dodatkiem do generowania prototypów, tylko warunkiem, bez którego generowanie dokłada pracy. Wersja v1 sugerowała też, że model „nie domyśli się dostępności” — to trafne, ale warto dodać, że nie domyśli się też, czego w systemie **nie** wolno robić. Lista zakazów jest ważniejsza niż lista komponentów.

Praktyczna procedura na dziś ma trzy kroki. Po pierwsze, wpisz do specyfikacji każdą decyzję podjętą w ostatnim miesiącu, razem z powodem. Po drugie, uruchom audyt wtyczką albo ręcznie i usuń wartości wpisane na sztywno. Po trzecie, zanim wygenerujesz nowy ekran, dołącz do promptu krótką listę zakazów i jeden przykład dobrego wyniku. Dopiero potem mierz czas.

W badaniu METR programiści spodziewali się 24-procentowego przyspieszenia i po wszystkim nadal wierzyli, że je osiągnęli. Pomiar mówił co innego. W design systemie warto więc mierzyć nie liczbę wygenerowanych ekranów, tylko liczbę poprawek, które trzeba było wnieść.

Nagrania ekranu z badania METR pokazują, gdzie dokładnie znika czas. Programiści rzeczywiście krócej pisali kod, testowali go i szukali informacji, ale te oszczędności przewyższało sprawdzanie wyników modelu, pisanie poleceń, oczekiwanie na generowanie oraz czas bez widocznej aktywności. Mniej niż 44 procent wygenerowanego kodu przyjęto bez zmian, a około 9 procent czasu pracy zajęło jego sprawdzanie. To dobry opis tego, co dzieje się przy generowaniu prototypu: ekran powstaje szybciej, a decyzja o tym, czy nadaje się do użycia, trwa dłużej.


Audyt źródła nie jest dodatkiem do generowania prototypów, lecz warunkiem, bez którego wygenerowanie ekranu dokłada pracy zamiast ją oszczędzać.
## Źródła i linki
1. [How To Make Your Design System AI-Ready](https://smashingmagazine.com/2026/06/how-make-design-system-ai-ready/) — Smashing Magazine, 2026-06-03.
2. [LLM Design Systems](https://hvpandya.com/llm-design-systems) — Hardik Pandya, Atlassian.
3. [FigmaLint — Figma Community](https://www.figma.com/community/plugin/1521241390290871981/figmalint) — Figma Community.
4. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025-07-10.
