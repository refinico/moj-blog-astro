---
title: "Eskadra Bielika: 2000 wdrożeń, ale POC to nie jeszcze produkcja"
description: "34 certyfikowanych trenerów, 49 sesji, 24 miasta, ponad 1300 deweloperów i ponad 2000 wdrożeń w Cloud Run — tak podsumowano efekt programu Eskadra Bielika na..."
pubDate: "2026-01-05"
tags: ["AI", "Bielik", "ADK", "CloudRun", "POC"]
draft: false
sourceDraftId: "8deff7e5-4b0c-4b1c-a237-00ccfc784b3b"
heroImage: "../../assets/8deff7e5-4b0c-4b1c-a237-00ccfc784b3b.jpg"
---

## Czego się dowiesz

- 34 trenerów, 49 sesji, 24 miasta, ponad 2000 wdrożeń
- Bielik przez Ollamę na Cloud Run z GPU L4
- ADK, nie Agent SDK: framework code-first
- Karta modelu ostrzega przed brakiem moderacji
- Flaga --allow-unauthenticated udostępnia usługę publicznie

34 certyfikowanych trenerów, 49 sesji, 24 miasta, ponad 1300 deweloperów i ponad 2000 wdrożeń w Cloud Run — tak podsumowano efekt programu Eskadra Bielika na początku stycznia 2026 roku. Relacja z warsztatu 15 grudnia 2025 roku, opublikowana 5 stycznia, była jednym z wielu kroków w tej skali, nie odosobnionym eksperymentem.

Temat był wtedy istotny z innego powodu. Rynek zachwycał się czatowymi interfejsami, a [Eskadra Bielika](https://pl.linkedin.com/posts/agnieszka-ratajska_eskadrabielika-speakleash-googlecloud-activity-7393603401445445633-FWWI) — projekt SpeakLeash i Spichlerza wspierany przez Google — robiła coś odwrotnego: uczyła składania modelu w działający system. Uczestnicy szli od pierwszego requestu przez integrację Bielika w aplikacji po POC wdrożony w chmurze.

Weryfikacja potwierdza stos. [Repozytorium misji](https://github.com/speakleash/eskadra-bielik-misja1) pokazuje konkret: Bielik uruchamiany przez Ollamę na Cloud Run z GPU NVIDIA L4, 16 GiB pamięci i jedną instancją oraz agenci zbudowani w Google Agent Development Kit. Oficjalna nazwa to ADK, nie „Agent SDK”, jak pisano w relacji. [Dokumentacja Google Cloud](https://docs.cloud.google.com/run/docs/ai/build-and-deploy-ai-agents/deploy-adk-agent) opisuje ten sam wzorzec: modularny, code-first framework do tworzenia, ewaluacji i wdrażania agentów. Skala programu jest udokumentowana — w grudniu 2025 roku odbyło się 23 warsztaty, a zapowiedziano kolejne 17.

W samym repozytorium widać też, jak szybko zmienia się cel: domyślną wersją jest SpeakLeash/bielik-4.5b-v3.0-instruct w kwantyzacji Q8_0, obok starszych wersji 11B. Dla zespołu oznacza to jedną rzecz: w systemie agentowym wersja modelu jest zależnością, którą trzeba przypiąć tak samo jak wersję biblioteki.

Korekta dotyczy jednak wydźwięku. Wersja v1 sugerowała, że przewidywalność jest już osiągnięta. Tymczasem [karta modelu Bielik 11B](https://huggingface.co/speakleash/Bielik-11B-v2.3-Instruct) wprost ostrzega: model nie ma mechanizmów moderacji, może generować błędne fakty i nie powinien być używany bez dodatkowych zabezpieczeń w interakcji z ludźmi. [Raport techniczny](https://arxiv.org/html/2505.02410v2) pokazuje też, że 11-miliardowy Bielik osiąga 65,71 w polskim rankingu Open PL LLM — świetny wynik jak na swoje rozmiary, ale wciąż nieco poniżej Qwen2-72B (65,87) i wyraźnie poniżej Llama-3.1-405B (69,44). To nie jest model, który po prostu działa w każdym agencie.

Samo repozytorium dodaje praktyczne ostrzeżenie: flaga --allow-unauthenticated udostępnia usługę publicznie i w produkcji trzeba ją usunąć. To dobry przykład różnicy między warsztatowym POC a systemem, który ktoś musi utrzymywać.

Wniosek dla praktyka jest konkretny. Jeśli budujesz agenta na polskim modelu, przypisz wersję wag i trzymaj ją w konfiguracji, dodaj własną warstwę moderacji i walidacji, a przewidywalność mierz zestawem powtarzalnych zadań, nie wrażeniem po jednym demo. Eskadra pokazała, że droga od requestu do POC jest krótka. Nie pokazała, że POC jest gotowy do produkcji.


Eskadra pokazała krótką drogę do POC, nie gotowość modelu do produkcji.
## Źródła i linki
1. [Eskadra Bielik — Misja 1: ADK + Cloud Run + Bielik](https://github.com/speakleash/eskadra-bielik-misja1) — SpeakLeash, 2025-10-24.
2. [O projekcie Eskadra Bielika](https://pl.linkedin.com/posts/agnieszka-ratajska_eskadrabielika-speakleash-googlecloud-activity-7393603401445445633-FWWI) — Agnieszka Ratajska, 2025-11-10.
3. [Bielik-11B-v2.3-Instruct — karta modelu](https://huggingface.co/speakleash/Bielik-11B-v2.3-Instruct) — SpeakLeash, 2025.
4. [Bielik 11B v2 Technical Report](https://arxiv.org/html/2505.02410v2) — SpeakLeash / ACK Cyfronet AGH, 2025-05-08.
5. [Build and deploy an AI agent to Cloud Run using ADK](https://docs.cloud.google.com/run/docs/ai/build-and-deploy-ai-agents/deploy-adk-agent) — Google Cloud, 2026-11-12.
6. [Podsumowanie Eskadry Bielika: 49 sesji, 24 miasta](https://www.linkedin.com/posts/aleksandra-zajaczkowska_the-results-of-bielik-ai-agents-training-activity-7414571083414065152-zB-l) — Aleksandra Zajaczkowska, 2026-01-07.
