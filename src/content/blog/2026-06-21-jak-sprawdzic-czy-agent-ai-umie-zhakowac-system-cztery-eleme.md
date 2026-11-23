---
title: "Jak sprawdzić, czy agent AI umie zhakować system? Cztery elementy testu i pułapka z liczbami"
description: "Ten sam model Claude Sonnet 4 zdobywał krytyczne zasoby w 3 z 40 testowych sieci."
pubDate: "2026-06-21"
tags: ["AI", "Cyberbezpieczeństwo", "Ewaluacja", "AgenciAI", "Testy"]
draft: false
sourceDraftId: "3ce7b631-3c9d-4bc3-8503-0cb35b4c6f21"
heroImage: "../../assets/3ce7b631-3c9d-4bc3-8503-0cb35b4c6f21.jpg"
---

## Czego się dowiesz

- Ten sam model: 3 z 40 sieci, po zmianie frameworka 37 z 40
- Cztery elementy testu: izolacja, dane, narzędzia, grader
- Punkty cząstkowe za cztery kroki ataku, nie tylko sukces
- 157 z 898 luk dotyczy modelu z wyłączonymi filtrami
- Nagłówek opisuje konfigurację testu, nie zdolność modelu

Ten sam model Claude Sonnet 4 zdobywał krytyczne zasoby w 3 z 40 testowych sieci. Po zmianie frameworka — w 37 z 40. Model pozostał identyczny. To najmocniejszy argument, by w testach bezpieczeństwa najpierw zbudować dobre środowisko, a dopiero potem porównywać modele.

21 czerwca 2026 roku Eugene Yan zebrał wzorce budowy testów bezpieczeństwa dla agentów. Wszystkie opierają się na czterech elementach: cel w izolacji (kontener Docker z pojedynczą aplikacją albo siecią hostów), dane sterujące trudnością (tylko kod to zero-day; opis luki albo łatka to one-day), narzędzia (bash, zapis i odczyt plików, wyszukiwanie w sieci, debuggery, analizatory statyczne) oraz deterministyczny grader, który przyjmuje działający exploit albo przechwyconą flagę.

Yan słusznie zauważa, że sama ocena końcowa jest zbyt gruba: model, który znalazł lukę, ale nie zbudował exploitu, dostaje zero tak samo jak ten, który nic nie znalazł. Dlatego proponuje punkty cząstkowe za cztery kroki — znaleźć, odtworzyć dowodem koncepcji, uruchomić kod, osiągnąć cel ataku.

Wersja v1 miała tu trzy kłopoty. Po pierwsze, narzędzia opisała jako „powłokę bash, debuggery, analizatory statyczne, przeglądarkę" — źródło mówi o wyszukiwaniu w sieci, nie o przeglądarce, i pomija usługi pomocnicze śledzące stan. Tymczasem [testy Incalmo](https://arxiv.org/abs/2501.16466) pokazują, że to właśnie usunięcie warstwy planowania i tych usług sprowadza wynik z 37 sieci do zera, a potem do 1–5.

Po drugie, liczby 17,5% i 46,8% z Cybench to wyniki z 2024 roku dla Claude'a 3.5 Sonnet i o1-preview, a v1 przedstawiło je jako aktualne. Po trzecie — i najważniejsze — wynik 157 z 898 luk w ExploitGym dotyczy modelu badawczego z wyłączonymi filtrami bezpieczeństwa. [Raport Anthropic](https://www.anthropic.com/research/exploit-evals) stwierdza zarazem, że żaden publicznie dostępny model nie osiągnął arbitralnego wykonania kodu w towarzyszącym teście ExploitBench. Podobnie 550 milionów dolarów z SCONE-Bench to symulacja na historycznych, publicznych exploitach; na zestawie odpornym na kontaminację Opus 4.5 wykorzystał 13 z 20 kontraktów.

Krytyczna lektura podsumowuje to trafnie: każdy nagłówek w tej dziedzinie opisuje konfigurację, nie zdolność. Zmiana frameworka przesuwa wynik bardziej niż zmiana modelu, a filtry bezpieczeństwa potrafią zatrzymać agenta, zanim wykona pierwsze narzędzie.

Dla praktyka wniosek jest więc proceduralny. Zanim zaczniesz mierzyć, czy agent umie zhakować system, zbuduj mu kontener, narzędzia i grader z punktami cząstkowymi. Potem pilnuj, by porównanie dotyczyło tego samego środowiska — inaczej zmierzysz jakość testu, nie modelu.

Warto dodać, że Yan omawia siedem benchmarków, a v1 wykorzystało pięć. Pominięty CyberGym pokazuje 17,9% dla Sonnet 4 i gwałtowny spadek skuteczności przy dłuższych dowodach koncepcji — powyżej 100 bajtów udaje się tylko około 10%, choć takie przypadki to ponad połowa zestawu. Pominięto też sufit Cybench: żaden agent nie rozwiązał zadania, które pierwszy człowiek potrzebował rozwiązać dłużej niż 11 minut. Liczby mówią więc o architekturze testu co najmniej tyle, co o modelu.


Zanim porównasz modele, zbuduj framework — inaczej zmierzysz jakość testu, nie agenta.
## Źródła i linki
1. [Patterns for Building Cybersecurity Evals](https://eugeneyan.com/writing/cybersecurity-evals) — Eugene Yan, 2026-06-21.
2. [Incalmo: An Autonomous LLM-Assisted System for Red Teaming Multi-Host Networks](https://arxiv.org/abs/2501.16466) — arXiv, 2025-11-22.
3. [Cybench](https://arxiv.org/abs/2408.08926) — arXiv, 2025-04-12.
4. [Measuring LLMs' ability to develop exploits](https://www.anthropic.com/research/exploit-evals) — Anthropic, 2026-05-22.
5. [Critical reading of "Patterns for Building Cybersecurity Evals"](https://0xchamin.github.io/mincha_brain/sources/260815_cybersecurity-evals.html) — 0xchamin, 2026-08-15.
