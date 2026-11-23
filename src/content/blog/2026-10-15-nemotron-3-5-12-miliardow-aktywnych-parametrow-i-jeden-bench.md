---
title: "Nemotron 3.5: 12 miliardów aktywnych parametrów i jeden benchmark, którego nie wolno cytować bez zastrzeżenia"
description: "Nemotron 3.5 Super ma 120 miliardów parametrów, ale przy jednym tokenie uruchamia 12 miliardów."
pubDate: "2026-10-15"
tags: ["AI", "Nemotron", "NVIDIA", "Benchmarki", "MoE"]
draft: false
sourceDraftId: "70ac387d-fc04-485a-b8f7-d5e3cb4096b7"
heroImage: "../../assets/70ac387d-fc04-485a-b8f7-d5e3cb4096b7.jpg"
---

## Czego się dowiesz

- Super uruchamia 12 mld z 120 mld parametrów przy jednym tokenie
- Lightning miał premierę 11 sierpnia, nie 15 października
- SWE-bench Pro: ok. 30 proc. zadań uszkodzonych według audytu OpenAI
- Epoch AI oznacza benchmark jako Flawed
- 4856 tokenów/s to pomiar przy konkretnym obciążeniu agentowym

Nemotron 3.5 Super ma 120 miliardów parametrów, ale przy jednym tokenie uruchamia 12 miliardów. Na SWE-bench Pro notuje 51,78 procenta — więcej niż starszy Nemotron 3 Ultra przy około 4,6 raza mniejszej liczbie aktywnych parametrów.

15 października 2026 roku [Aleksandra Gordic](https://www.linkedin.com/posts/aleksagordic_very-excited-to-announce-our-new-models-activity-7516517659996520448-TCjE) ogłosiła premierę dwóch modeli z zespołu pretrainingu NVIDIA. Super to wizyjno-językowy model do zadań agentowych, Lightning — czysto tekstowy, 30 miliardów parametrów z 3 aktywnymi. Obie architektury łączą Mambę z transformerem w układzie MoE, utrzymują milion tokenów kontekstu i używają natywnego dekodowania spekulatywnego MTP. [Karta modelu NVIDIA](https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard) potwierdza te parametry i datę udostępnienia.

Weryfikacja potwierdziła szczegóły treningu. Start od bazy Nemotron 3, 100 miliardów tokenów rozgrzewki MTP, bilion tokenów destylacji od większego nauczyciela. Super dostał 100 miliardów tokenów w językach indyjskich z syntetycznego korpusu 2,83 biliona tokenów, 35 miliardów wydłużenia kontekstu i 65,4 miliarda tokenów agentycznego mid-trainingu na repozytoriach i parach issue–PR. [Raport techniczny z 28 października](https://arxiv.org/abs/2610.38095) potwierdza też 99,62 procenta odzyskanej dokładności przy kwantyzacji NVFP4.

Pierwsza korekta dotyczy dat. Wersja v1 sugerowała, że oba modele pojawiły się 15 października. Karta Lightninga podaje datę premiery 11 sierpnia 2026 — październikowy wpis był podsumowaniem i ogłoszeniem Supera, nie pierwszym wydaniem obu modeli.

Druga korekta jest znacznie ważniejsza. Wersja v1 podała 51,78 procenta na SWE-bench Pro jako dowód przewagi, bez zastrzeżenia. Tymczasem [audyt OpenAI z lipca 2026](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) ocenił, że około 30 procent zadań w tym benchmarku jest uszkodzonych: testy zbyt ścisłe, prompty nieprecyzyjne, niskie pokrycie. [Epoch AI](https://epoch.ai/benchmarks/swe-bench-pro/review) na podstawie kilku audytów oznaczył benchmark jako „Flawed”. Wynik 51,78 procenta jest faktem raportowanym przez dostawcę, ale nie jest czystym dowodem przewagi.

Grill dotyczy więc całej kategorii twierdzeń. Liczba aktywnych parametrów to jedno spojrzenie: nie mówi o rozmiarze KV-cache, jakości routingu, koszcie serwowania ani o tym, jak model zachowa się we własnym środowisku agentowym. Raport NVIDIA podaje imponujące 4856 tokenów na sekundę na GB200, ale to pomiar w określonym obciążeniu agentowym. Benchmark, architektura i rachunek za inferencję to trzy różne rozmowy.

Warto dodać, że raport techniczny ukazał się dopiero 28 października, czego październikowy wpis nie mógł jeszcze zawierać. Dostępne w dniu premiery były karty modeli i komunikat zespołu — to one są właściwym źródłem dla oceny tamtego momentu.

Praktyczny wniosek jest podwójny. Po pierwsze, specjalizacja wygrywa z uniwersalnym kombajnem — dwie maszyny, dwa budżety, dwa zastosowania to rozsądna decyzja produktowa. Po drugie, zanim powołasz się na wynik modelu w prezentacji, sprawdź status benchmarku i datę audytu. Marża zaczyna się w architekturze, ale wiarygodność zaczyna się w przypisie.


Marża zaczyna się w architekturze, ale wiarygodność zaczyna się w przypisie do benchmarku.
## Źródła i linki
1. [NVIDIA Nemotron 3.5 Super and Lightning announcement](https://www.linkedin.com/posts/aleksagordic_very-excited-to-announce-our-new-models-activity-7516517659996520448-TCjE) — Aleksandra Gordic, LinkedIn, 2026-10-15.
2. [Nemotron 3.5 Super 120B-A12B — model card](https://build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b/modelcard) — NVIDIA NIM, 2026-10-15.
3. [Nemotron 3.5 Super and Lightning — technical report](https://arxiv.org/abs/2610.38095) — NVIDIA, 2026-10-28.
4. [Separating signal from noise in coding evaluations](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) — OpenAI, 2026-07-08.
5. [SWE-Bench Pro — Benchmark review](https://epoch.ai/benchmarks/swe-bench-pro/review) — Epoch AI, 2026.
