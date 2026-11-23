---
title: "Długi kontekst ma swoją cenę. Co naprawdę zmieniło się w architekturach LLM?"
description: "Gemma 4 E2B ma 35 warstw transformera, ale tylko pierwsze 15 liczy własne wektory kluczy i wartości."
pubDate: "2026-05-16"
tags: ["AI", "LLM", "KV", "Architektura", "Kontekst"]
draft: false
sourceDraftId: "bfea0b12-dfe0-4629-8e36-367bd756112c"
heroImage: "../../assets/bfea0b12-dfe0-4629-8e36-367bd756112c.jpg"
---

## Czego się dowiesz

- Gemma 4 E2B: własne KV w 15 warstwach, 2,7 GB mniej
- KV sharing opisano już w NeurIPS 2024 jako Cross-Layer Attention
- Współdzielenie KV to przybliżenie zmniejszające pojemność
- Głębsza kompresja obniża jakość przy długich promptach
- Tańsze okno to nie zawsze tańszy agent

Gemma 4 E2B ma 35 warstw transformera, ale tylko pierwsze 15 liczy własne wektory kluczy i wartości. Pozostałe 20 pożycza je od wcześniejszych warstw. Przy kontekście 128K i precyzji bfloat16 daje to około 2,7 GB mniejszej pamięci.

16 maja 2026 roku [Sebastian Raschka](https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures) podsumował premiery kwietnia i maja. Jego teza była prosta: branża przestała prześcigać się w powiększaniu okna kontekstu, a zaczęła liczyć bajty. Modele reasoningowe i przepływy agentowe trzymają tokeny znacznie dłużej, więc KV-cache, ruch pamięci i koszt uwagi stały się wąskim gardłem. Obok Gemmy 4 opisał Laguna XS.2 z budżetowaniem uwagi na poziomie warstw, ZAYA1-8B z kompresyjną uwagą splotową oraz DeepSeek V4 z mechanizmami mHC i CSA/HCA.

Weryfikacja potwierdziła liczby. W Gemma 4 E4B własne KV ma 24 z 42 warstw, co daje około 6 GB oszczędności przy 128K. Laguna XS.2 ma 40 warstw, z czego 30 pracuje w oknie 512 tokenów, a dziesięć patrzy globalnie. DeepSeek V4-Pro przy milionie tokenów zużywa 27 procent FLOP-ów i 10 procent KV-cache w porównaniu z V3.2. To nie są już drobne korekty na diagramach, tylko zmiany w sposobie, w jaki model gospodaruje pamięcią.

Pierwsza korekta dotyczy atrybucji. Wersja v1 przedstawiła KV sharing jako rozwiązanie Gemmy 4. Tymczasem [praca Brandon i in. z NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/file/9e23d020c18e4c40d81c6a0fc7a46f68-Paper-Conference.pdf) opisała Cross-Layer Attention dwa lata wcześniej i pokazała dwukrotną redukcję KV-cache przy zachowaniu niemal tej samej dokładności. Nowością nie była idea, lecz jej zastosowanie w popularnej architekturze otwartej.

Druga korekta dotyczy kosztu, o którym v1 nie napisało. [Raschka w galerii architektur](https://sebastianraschka.com/llm-architecture-gallery/kv-sharing/) podkreśla, że współdzielenie KV jest przybliżeniem i zmniejsza pojemność modelu: część warstw pracuje na cudzych reprezentacjach. [Systematyczne badanie z października 2024](https://arxiv.org/abs/2410.14442) dodaje, że przy dwukrotnym zmniejszeniu cache większość konfiguracji trzyma się jeszcze dobrze, ale przy głębszej kompresji jakość spada, a niektóre układy tracą przepustowość przy długich promptach. Oszczędność nie jest więc darmowa.

Grill kończy się pytaniem biznesowym. Czy tańszy długi kontekst oznacza tańszego agenta? Tylko częściowo. Raschka zaznacza, że parametr aktywny to jedno spojrzenie: nie mówi nic o rozmiarze cache, świetle uwagi, niezawodności routingu ani efektywności na konkretnym sprzęcie. Architektura może wygrać na benchmarku, a przegrać na rachunku za inferencję w własnym środowisku.

Praktyczny wniosek jest konkretny. Wybierając model do agenta, nie pytaj tylko o rozmiar okna. Zapytaj, ile pamięci to okno zjada, gdy agent wróci do wątku sprzed dwudziestu kroków, i czy producent opublikował pomiary przy twojej długości kontekstu. Potem zrób własny test kosztu na jednym zadaniu. To lepiej uczy o architekturze niż cała tabela parametrów.


Pytaj o pamięć okna przy dwudziestu krokach wstecz, nie o sam rozmiar kontekstu.
## Źródła i linki
1. [Recent Developments in LLM Architectures: KV Sharing, mHC, and Compressed Attention](https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures) — Sebastian Raschka, 2026-05-16.
2. [Reducing Transformer Key-Value Cache Size with Cross-Layer Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/9e23d020c18e4c40d81c6a0fc7a46f68-Paper-Conference.pdf) — Brandon et al., NeurIPS 2024.
3. [Cross-Layer KV Sharing](https://sebastianraschka.com/llm-architecture-gallery/kv-sharing/) — Sebastian Raschka, 2026.
4. [A Systematic Study of Cross-Layer KV Sharing for Efficient LLM Inference](https://arxiv.org/abs/2410.14442) — arXiv, 2024-10-18.
