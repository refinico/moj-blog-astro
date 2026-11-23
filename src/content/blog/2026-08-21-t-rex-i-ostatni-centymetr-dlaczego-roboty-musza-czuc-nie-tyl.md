---
title: "T-Rex i ostatni centymetr. Dlaczego roboty muszą czuć, nie tylko widzieć?"
description: "W dwunastu zadaniach wymagających precyzyjnej siły model T-Rex osiągnął średnio 65 procent poprawnych wykonań."
pubDate: "2026-08-21"
tags: ["AI", "Robotyka", "TactileAI", "NVIDIA", "Automatyzacja"]
draft: false
sourceDraftId: "18e9f593-cb61-4c25-95bc-20eeae2c45ee"
heroImage: "../../assets/18e9f593-cb61-4c25-95bc-20eeae2c45ee.jpg"
---

## Czego się dowiesz

- 65 proc. wobec 35 proc. to 30 punktów procentowych przewagi
- Bez dotyku system spada do 42 proc.
- Dwa zegary: planowanie 5 Hz, korekta dotykowa 20 Hz
- 22 stopnie swobody na dłoń, 58 dla całego robota
- Opublikowano 50 h z zebranych 100 h danych

W dwunastu zadaniach wymagających precyzyjnej siły model T-Rex osiągnął średnio 65 procent poprawnych wykonań. Najlepszy wcześniejszy system miał 35 procent. Różnica to trzydzieści punktów procentowych, nie trzydzieści procent.

21 sierpnia 2026 roku [Jim Fan](https://www.linkedin.com/posts/drjimfan_the-sense-of-touch-is-the-most-criminally-activity-7496599486786461696-KnAI) ogłosił otwarcie metodologii T-Rex. [Praca z czerwca 2026](https://arxiv.org/abs/2606.17055) opisuje system zbudowany przez zespoły z UC Berkeley, NVIDIA, Stanfordu, Panasonica i La Sapienzy. Głównym prowadzącym był Dantong Niu, a współpromotorem Trevor Darrell. Teza jest prosta: kamera dobrze prowadzi dłoń do celu, ale słabo radzi sobie z ostatnim milimetrem, gdy magnes wskakuje na miejsce, a kubek odkleja się ze stosu.

Weryfikacja potwierdziła architekturę. T-Rex używa mieszanki transformerów z dwoma zegarami asynchronicznymi: wolny ekspert wizualno-ruchowy planuje, szybki ekspert dotykowy poprawia go w czasie rzeczywistym. Na jedną klatkę obrazu przypadają cztery „tyknięcia” dotyku, bo siła zmienia się szybciej, niż nadchodzą obrazy. [Komunikat Panasonica z listopada 2026](https://news.panasonic.com/global/press/en261105-2) podaje konkret: planowanie działa w tempie około 5 Hz, korekta dotykowa około 20 Hz.

Pierwsza korekta dotyczy danych. Wersja v1 napisała „22 stopnie swobody” tak, jakby to była cała maszyna. W rzeczywistości 22 stopnie ma każda z dłoni Sharpa Wave, a cały robot Dexmate Vega-1 ma 58 stopni. Wersja v1 podała też 50 godzin i ponad 5,5 tysiąca odcinków — to otwarty podzbiór pełnego zbioru, który liczył 100 godzin i ponad 7,7 tysiąca epizodów. Należy rozróżniać zbiór zebrany od zestawu opublikowanego.

Druga korekta dotyczy wyniku. „Ponad 30 procent wyższy wskaźnik” z abstractu jest sformułowaniem niejednoznacznym. [Dane Panasonica](https://news.panasonic.com/global/press/en261105-2) rozstrzygają: 65 procent wobec 35 procent oznacza przewagę o 30 punktów procentowych. Bez dotyku system spada do 42 procent, co pokazuje, że to właśnie informacja z palców robi różnicę.

Grill jest potrzebny, bo sukces w laboratorium nie jest sukcesem na hali. Zbiór powstawał przez teleoperację w rękawicach Manus i z trackerami VIVE, a zadania — przewracanie stron, przekładanie jaj, nakładanie pasty, odkręcanie żarówki — wykonano na jednym stanowisku. [Opis projektu](https://www.dexmate.com/research/t-rex) nie raportuje długofalowej eksploatacji. Innymi słowy, pokazano, że dotyk poprawia chwyt w kontrolowanych warunkach, nie że system jest gotów do produkcji.

Warto podkreślić skalę strategii zbierania danych: 207 przedmiotów domowych i 22 ruchy podstawowe dają 502 dopuszczalne kombinacje, z których każda ma średnio około szesnastu demonstracji. To świadomie małe, powtarzalne jednostki, nie długie scenariusze.

Praktyczny wniosek dotyczy zarządzania, nie robotyki. Raport kwartalny to jedna klatka obrazu: potrzebny, ale spóźniony. Prawdziwe życie produktu dzieje się w przerwach, gdy użytkownik rezygnuje z formularza. Strategia wyznacza kierunek, ale korekta musi przyjść w momencie rosnącego oporu. Nie chodzi o przewracanie planu po każdym drobnym problemie, tylko o szybkie „tyknięcie” dotyku, zanim problem stanie się raportem.


Dotyk wygrywa ostatni milimetr w kontrolowanych warunkach, nie gotowość do produkcji.
## Źródła i linki
1. [T-Rex: Tactile-Reactive Dexterous Manipulation](https://arxiv.org/abs/2606.17055) — Dantong Niu i in., arXiv, 2026-06-18.
2. [Open-sourcing T-Rex tactile methodology](https://www.linkedin.com/posts/drjimfan_the-sense-of-touch-is-the-most-criminally-activity-7496599486786461696-KnAI) — Jim Fan, LinkedIn, 2026-08-21.
3. [T-Rex: Teaching robots to feel in real time](https://www.dexmate.com/research/t-rex) — Dexmate, 2026-06-15.
4. [Panasonic co-develops robot manipulation AI with tactile feedback](https://news.panasonic.com/global/press/en261105-2) — Panasonic, 2026-11-05.
