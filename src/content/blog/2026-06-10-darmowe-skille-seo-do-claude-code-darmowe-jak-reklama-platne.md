---
title: "Darmowe skille SEO do Claude Code: darmowe jak reklama, płatne jak API"
description: "Darmowe jest tylko repozytorium."
pubDate: "2026-06-10"
tags: ["AI", "SEO", "ClaudeCode", "Skille", "Koszty"]
draft: false
sourceDraftId: "c86802bd-2b8a-4fd4-a81c-1f7912a81646"
heroImage: "../../assets/c86802bd-2b8a-4fd4-a81c-1f7912a81646.jpg"
---

## Czego się dowiesz

- Darmowe jest repozytorium, nie pełne działanie
- 11 skilli SEO i trzy agency w bibliotece
- Bez klucza API większość komend nie zwraca danych
- Beast kosztuje 637 tokenów, darmowy limit to 100
- Detektory AI: fałszywe trafienia do 68,6 proc.

Darmowe jest tylko repozytorium. Samo [nodeshub-seo-skills](https://github.com/Senuto/nodeshub-seo-skills) wprost nazywa się materiałem promocyjnym, a pełne działanie wymaga płatnego klucza API — to najważniejsza korekta do relacji z 10 czerwca 2026 roku.

Wtedy temat wydawał się prosty: Senuto pokazało bibliotekę komend do Claude Code, która ma zastąpić ręczne sklejanie workflowów SEO. [Ogłoszenie](https://www.linkedin.com/feed/update/urn:li:activity:7470395256891654144) mówiło o ponad 200 użytkownikach Nodeshub i darmowych skillach dostępnych dla każdego. W tle był też praktyczny odruch: zamiast opisywać proces, wpisujesz komendę i patrzysz, co się dzieje.

Weryfikacja potwierdza techniczną warstwę. Repozytorium ma 11 skilli SEO, trzy agency i skrypty Pythona. Komendy /nod-serp-analysis i /nod-keyword-research uruchamiają analizę SERP i badanie słów kluczowych na danych pobieranych na żywo. Autorzy przewidują też klasteryzację według podobieństwa wyników Google, audyt treści i śledzenie pozycji. Większość operacji kosztuje jeden token Nodeshub na słowo kluczowe.

Korekta zmienia jednak obraz. Repozytorium nie jest samodzielną aplikacją, lecz nakładką na [płatną platformę Nodeshub](https://nodeshub.io/seo-skills); dokumentacja podaje wprost, że bez klucza API większość skillów nie zwróci danych. Nowi użytkownicy dostają 100 tokenów, ale preset badania słów kluczowych beast kosztuje około 637 tokenów, a cały agent keyword-to-publish od 40 do 80 tokenów plus osobne kredyty Genuino. Obietnica pełnej sesji badawczej w ramach darmowego limitu dotyczy więc wersji conservative. Dokumentacja zastrzega też, że repozytorium jest udostępniane „as is”, bez zobowiązania do aktualizacji i wyłącznie dla użytkowników biznesowych.

Druga korekta dotyczy przenośności. Wersja v1 sugerowała, że standard Agent Skills uwalnia od przywiązania do jednego CLI. Tymczasem warstwa SKILL.md z podpowiedziami i rozpoznawaniem intencji działa natywnie tylko w Claude Code. W Gemini CLI, Cursorze czy Aiderze można uruchomić samodzielne skrypty Pythona — bez automatycznego kontekstu.

Grill dotyczy najbardziej efektownego elementu. Agent content humanizer ma przepisywać tekst, dopóki detektor AI nie oceni go jako ludzki. Tymczasem [badanie prezentowane na IEEE Symposium on Security and Privacy](https://news.ufl.edu/2026/05/traynor-ai-detector-study/) wykazało wskaźniki fałszywych trafień od 0,05 do 68,6 proc. i fałszywych odrzuceń do 99,6 proc.; prosty zabieg leksykalny potrafił unieruchomić detektory. [NBER](https://www.nber.org/papers/w34223) pokazuje, że przy rygorystycznym progu część narzędzi radzi sobie lepiej, ale nie zmienia to faktu, że próg jest wyborem politycznym, nie miarą prawdy.

Praktyczny wniosek: traktuj bibliotekę jako gotowy szkielet do własnych workflowów, a nie jako produkt. Policz koszt tokenów przed pierwszym większym skanem i nie używaj wyniku detektora AI jako bramy publikacji — lepiej sprawdzić tekst pod kątem konkretnych faktów.


Policz koszt tokenów przed skanem i nie używaj detektora AI jako bramy publikacji.
## Źródła i linki
1. [Zrób SEO w claude code – Senuto](https://www.linkedin.com/feed/update/urn:li:activity:7470395256891654144) — Damian Salkowski, 2026-06-10.
2. [Senuto/nodeshub-seo-skills — dokumentacja](https://github.com/Senuto/nodeshub-seo-skills) — Senuto, 2026-04-13.
3. [SEO Skills — open-source SEO automation for AI CLIs](https://nodeshub.io/seo-skills) — Nodeshub, 2026-06-10.
4. [Watching the detectors: Researchers probe efficacy – and danger – of AI detection tools](https://news.ufl.edu/2026/05/traynor-ai-detector-study/) — University of Florida, 2026-05-19.
5. [Artificial Writing and Automated Detection](https://www.nber.org/papers/w34223) — NBER, 2025-09-04.
6. [Almost AI, Almost Human: The Challenge of Detecting AI-Polished Writing](https://aclanthology.org/2025.findings-acl.1303.pdf) — ACL, 2025.
