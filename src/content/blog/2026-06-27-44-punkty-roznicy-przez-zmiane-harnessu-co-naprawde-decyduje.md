---
title: "44 punkty różnicy przez zmianę harnessu. Co naprawdę decyduje o lokalnym agencie kodującym"
description: "Ten sam model open-weight rozwiązuje 5 na 5 zadań z jednym klientem kodującym i 0 na 5 z innym."
pubDate: "2026-06-27"
tags: ["AI", "Kodowanie", "AgenciAI", "OpenWeights", "SWEbench"]
draft: false
sourceDraftId: "2864a909-f7fa-4607-8cc3-78e8e453a992"
heroImage: "../../assets/2864a909-f7fa-4607-8cc3-78e8e453a992.jpg"
---

## Czego się dowiesz

- Ten sam model: 5 na 5 z jednym klientem, 0 na 5 z drugim
- 1800 przebiegów: różnica do 44 punktów procentowych
- 1,1–87,8 mln tokenów na jedno rozwiązane zadanie
- Kwantyzacja nie zmniejsza pamięci KV cache
- Audyt SWE-bench: 59,4% wadliwych testów lub opisów

Ten sam model open-weight rozwiązuje 5 na 5 zadań z jednym klientem kodującym i 0 na 5 z innym. Różnica nie leży w wagach, tylko w harnessie.

Dwudziestego siódmego czerwca 2026 roku Sebastian Raschka opisał [własny stos lokalnego agenta](https://magazine.sebastianraschka.com/p/using-local-coding-agents): Qwen3.6 35B-A3B, około 22 gigabajtów plików, 30–40 gigabajtów pamięci, Ollama w wersji MLX na Apple Silicon i około 40 tokenów na sekundę na Macu Mini M4. W małym teście Qwen3.6 i North Mini Code rozwiązały po cztery z pięciu zadań. Dane liczbowe wytrzymują sprawdzian — potwierdza je także [wpis z 26 czerwca](https://sebastianraschka.com/blog/2026/local-open-weight-llms-coding-harnesses.html), gdzie autor podaje dwukrotnie większe zużycie tokenów przez Claude Code niż przez Codex.

Wersja v1 wyciągnęła z tego wniosek ostrożny: nie zakładaj, że model działa lepiej w „swoim" kliencie, bo mały test Raschki tego nie potwierdził. Grill pokazuje, że wniosek był zbyt ostrożny w drugą stronę. [Kontrolowane badanie 1800 przebiegów](https://arxiv.org/html/2610.32131) — sześć harnessów, trzy lekkie modele, 100 zadań SWE-bench Verified — stwierdza różnicę aż do 44 punktów procentowych w wskaźniku rozwiązań dla tego samego modelu przy zmianie klienta. Co gorsza, rankingu harnessów nie da się przenieść na inny model. Lekki model wcale nie musi być tani w eksploatacji: liczba tokenów przypadających na jedno rozwiązane zadanie waha się od 1,1 do 87,8 miliona, czyli niemal osiemdziesięciokrotnie.

Kolejna korekta dotyczy pamięci. [Analiza agentów lokalnych](https://localaifrontier.com/blog/agentic-coding-local-models/) wyjaśnia, że kwantyzacja zmniejsza wagi, ale nie pamięć KV cache, która rośnie wraz z kontekstem. W pętli agenta kontekst składa się głównie z wyników jego własnych narzędzi, więc model może „głupieć" w długiej sesji, choć jego wynik w teście jednorazowym wygląda dobrze. [Przegląd literatury](https://mdpgroup.com/en/blog/open-weight-coding-agents-in-2026-a-literature-guide/) dodaje, że SWE-bench Verified przestał być wiarygodnym kryterium: audyt 138 trudnych zadań wykazał wadliwe testy lub opisy w 59,4 procenta przypadków.

Kontrargument jest uczciwy: własny test Raschki był mały i on sam wzywa do ostrożności. GPT 5.5 i Opus 4.8 pozostają silniejsze, a różnica między „wystarczający" a „najlepszy" bywa decydująca przy trudnych zadaniach. Badanie nad parami nie ustawia też rankingów modeli — opisuje konkretne kombinacje.

Praktyczny wniosek: wybieraj parę model + harness jako jedną decyzję i testuj ją na własnych zadaniach. Budżetuj koszt per rozwiązane zadanie, nie per token. Przy kontekście 50 tysięcy tokenów sprawdź realne zużycie pamięci, a sekrety trzymaj poza sandboxem — lokalność nie oznacza izolacji danych.

Raschka nie ukrywa też, że lokalny stos wymaga dyscypliny: audyt kodu agenta przed uruchomieniem, osobna maszyna lub konto i domyślny brak uprawnień do plików. Telemetria potrafi płynąć do chmury dostawcy nawet wtedy, gdy model działa lokalnie — więc „własny stos" nie jest równoznaczny z „prywatny stos".


Wybieraj parę model plus harness jako jedną decyzję i budżetuj koszt jednego rozwiązanego zadania, nie cenę tokenu.
## Źródła i linki
1. [Using Local Coding Agents](https://magazine.sebastianraschka.com/p/using-local-coding-agents) — Ahead of AI / Sebastian Raschka, 2026-06-27.
2. [Local Open-Weight LLMs in Coding Harnesses](https://sebastianraschka.com/blog/2026/local-open-weight-llms-coding-harnesses.html) — sebastianraschka.com, 2026-06-26.
3. [Pairing Matters: Performance, Failures, and Efficiency in Lightweight Coding Agents](https://arxiv.org/html/2610.32131) — arXiv, 2026-10-23.
4. [Agentic coding on local models: which models survive the loop](https://localaifrontier.com/blog/agentic-coding-local-models/) — Local AI Frontier, 2026-09-18.
5. [Open-Weight Coding Agents in 2026: A Literature Guide](https://mdpgroup.com/en/blog/open-weight-coding-agents-in-2026-a-literature-guide/) — MDP Group, 2026-10-20.
