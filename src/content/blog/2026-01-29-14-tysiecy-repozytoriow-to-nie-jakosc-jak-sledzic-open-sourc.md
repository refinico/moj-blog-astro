---
title: "14 tysięcy repozytoriów to nie jakość. Jak śledzić open source AI, nie dając się oszukać gwiazdkami"
description: "Chip Huyen zbudowała narzędzie śledzące około 14 tysięcy otwartych repozytoriów AI i ponad 145 tysięcy kontrybutorów."
pubDate: "2026-01-29"
tags: ["AI", "OpenSource", "GitHub", "Trendy", "InżynieriaAI"]
draft: false
sourceDraftId: "e29d31cc-ffb0-424e-a412-cfd9aeea34dd"
heroImage: "../../assets/e29d31cc-ffb0-424e-a412-cfd9aeea34dd.jpg"
---

## Czego się dowiesz

- 14 tysięcy repozytoriów i 145 tysięcy kontrybutorów
- 123 słowa klucze i codzienny skan nowych projektów
- StarScout: 6 milionów podejrzanych gwiazdek
- Gwiazdki są kumulatywne i nie pokazują spadku zainteresowania
- Sprawdź kontrybutorów, commity i cudze zależności

Chip Huyen zbudowała narzędzie śledzące około 14 tysięcy otwartych repozytoriów AI i ponad 145 tysięcy kontrybutorów. Sama przyznaje, że adnotacje generowane przez AI nie są zbyt dokładne.

Dwudziestego dziewiątego stycznia 2026 roku Huyen opublikowała w [LinkedIn](https://www.linkedin.com/posts/chiphuyen_aiengineering-aiapplications-activity-7422753343413895168-maBo) opis Good AI List. Narzędzie przeszukuje co dzień nowe repozytoria według 123 słów kluczowych i tematów, wskazuje projekty zyskujące popularność i automatycznie je kategoryzuje. Autorka, która w 2024 roku [ręcznie przeanalizowała 896 repozytoriów](https://huyenchip.com/2024/03/14/ai-oss.html), pokazała też mapę kontrybutorów — mniejsze kraje, jak Tajwan czy Singapur, plasują się w pierwszej dwudziestce.

Fakty liczbowe wytrzymują sprawdzian: liczby 14 tysięcy, 145 tysięcy i 123 powtarzają się w relacjach z wpisu, a sam projekt Good AI List jest dostępny publicznie. Użyteczna jest też obserwacja, że przyrost gwiazdek działa jako sygnał wcześniejszy niż artykuł na Hacker News. W tym miejscu wersja v1 poprawiła się sama: przyznała, że automatyczna kategoryzacja jest niedoskonała.

Grill dotyczy jednak samego fundamentu. [Badanie StarScout](https://arxiv.org/abs/2412.13459), obejmujące dane z lat 2019–2024, zidentyfikowało około 6 milionów podejrzanie przyznanych gwiazdek w ponad 18 tysiącach repozytoriów. Autorzy podkreślają, że gwiazdki korelują jedynie umiarkowanie z faktycznym użyciem, a fałszywe gwiazdki dają efekt promocyjny krótszy niż dwa miesiące, po czym stają się obciążeniem. [BleepingComputer](https://www.bleepingcomputer.com/news/security/over-31-million-fake-stars-on-github-projects-used-to-boost-rankings/) opisuje wersję tej samej analizy: 3,1 miliona podejrzanych gwiazdek w prawie 16 tysiącach repozytoriów, z czego znaczna część projektów została później usunięta. Innymi słowy: „gaining traction" może oznaczać rosnący wykres, nie rosnącą społeczność.

To nie dyskredytuje narzędzia Huyen — ona sama używa sygnałów jako filtra wstępnego, nie jako dowodu. Ale wersja v1 sugerowała, że przyrost gwiazdek mówi „więcej niż ranking w newsletterze". To zdanie wymaga dopisku: mówi więcej niż ranking, byle nie był jedynym sygnałem. Warto też pamiętać, że metryka jest kumulatywna — nigdy nie maleje, więc nie pokazuje spadku jakości projektu.

Praktyczny wniosek: użyj listy takiej jak Good AI List do wyłonienia kandydatów, a potem sprawdź trzy rzeczy — liczbę aktywnych kontrybutorów spoza zespołu założycielskiego, częstotliwość commitów i obecność projektu w cudzych zależnościach. Dopiero ten zestaw decyduje, czy warto wprowadzić bibliotekę do produkcji. Własny radar trendów nadal jest dobrym pomysłem — tyle że liczby na nim są wskazówką, nie wyrokiem.

Huyen zwróciła też uwagę na geografię: jej narzędzie pokazuje, skąd pochodzą kontrybutorzy, dzięki czemu w podróży można znaleźć ludzi tworzących ciekawe projekty w danym mieście. To miły dodatek, ale nie dowód wartości repozytorium. W świecie, w którym gwiazdki można kupić, a projekty AI powstają w tempie tysięcy miesięcznie, przewagę daje coś trudniejszego do sfałszowania: ludzie, którzy wracają do kodu po pierwszym miesiącu i poprawiają go, gdy nikt już nie robi szumu wokół premiery.


Użyj radaru trendów do wyłonienia kandydatów, ale decyzję o produkcji oprzyj na aktywnych kontrybutorach, commitach i cudzych zależnościach.
## Źródła i linki
1. [I built a tool to help me stay-up-date with new AI stuff](https://www.linkedin.com/posts/chiphuyen_aiengineering-aiapplications-activity-7422753343413895168-maBo) — Chip Huyen, 2026-01-29.
2. [What I learned from looking at 900 most popular open source AI tools](https://huyenchip.com/2024/03/14/ai-oss.html) — huyenchip.com, 2024-03-14.
3. [Six Million (Suspected) Fake Stars on GitHub](https://arxiv.org/abs/2412.13459) — arXiv, 2025-09-06.
4. [Over 3.1 million fake stars on GitHub projects used to boost rankings](https://www.bleepingcomputer.com/news/security/over-31-million-fake-stars-on-github-projects-used-to-boost-rankings/) — BleepingComputer, 2024-12-31.
