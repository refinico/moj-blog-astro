---
title: "45 modeli, 93 diagramy i jedna proporcja, którą v1 odwróciło"
description: "Sebastian Raschka chciał napisać o DeepSeek V4."
pubDate: "2026-03-22"
tags: ["AI", "LLM", "Architektura", "Inferencja", "Raschka"]
draft: false
sourceDraftId: "e5a6f52c-d309-436d-b32f-bcf341e13878"
heroImage: "../../assets/e5a6f52c-d309-436d-b32f-bcf341e13878.jpg"
---

## Czego się dowiesz

- 45 architektur w galerii i plakat 26,9 na 23,4 cala
- MHA, GQA i MLA — trzy sposoby na pamięć KV-cache
- Gemma 3: 5 warstw lokalnych na 1 globalną, nie odwrotnie
- 45 wpisów to nie 93 diagramy — inne jednostki
- MLA opłaca się dopiero powyżej ok. 100 mld parametrów

Sebastian Raschka chciał napisać o DeepSeek V4. Model nie wyszedł, więc w dwa tygodnie zbudował galerię 45 architektur LLM — i przy okazji opisał warianty mechanizmu uwagi, które dziś definiują koszt inferencji.

Artykuł z 22 marca 2026 roku był w v1 opowiedziany poprawnie w głównych zarysach: MHA jako punkt wyjścia, GQA współdzieląca projekcje kluczy i wartości, MLA kompresująca to, co trafia do pamięci, a dalej okna przesuwne, uwaga rzadka i architektury hybrydowe. Grill wykazał jednak jedną konkretną pomyłkę i jedno uproszczenie.

[Oryginalny tekst](https://magazine.sebastianraschka.com/p/visual-attention-variants) potwierdza 45 wpisów w [galerii](https://sebastianraschka.com/llm-architecture-gallery/), wymiar plakatu 26,9 na 23,4 cala i ostrzeżenie, że najdrobniejszy tekst jest już w tym rozmiarze mały. [Szczegółowy przewodnik](https://www.beri.net/learning/raschka-visual-guide-attention-variants-modern-llms) podaje 31 ilustracji i przypisuje warianty do konkretnych modeli: GQA w Llama 3, Qwen3 i Gemma 3, MLA od DeepSeek V2 po Kimi K2, GLM-5 i Mistral Large 3.

Pomyłka dotyczy Gemmy 3. Wersja v1 napisała, że model przeszedł z proporcji jeden do jednego na „jeden do pięciu”. Tymczasem [zestawienie](https://www.huffmangazette.com/pages/ai-science) mówi o stosunku warstw lokalnych do globalnych 5:1 przy oknie 1024 tokenów. Kolejność jest odwrócona — to pięć warstw lokalnych na jedną globalną, nie odwrotnie.

Uproszczenie dotyczy liczby diagramów. [Wpisy na blogu autora](https://sebastianraschka.com/blog/) z 14 marca wspominają o 93 diagramach architektur, podczas gdy tekst z 22 marca mówi o 45 wpisach. To nie sprzeczność: galeria liczy modele, a diagramy obejmują też poszczególne warianty i schematy. Warto to rozróżniać, zanim zaczniemy cytować liczby jako wymiennie.

Kontrargument jest techniczny i ważny. To samo zestawienie zauważa, że MLA najlepiej radzi sobie powyżej około 100 miliardów parametrów. To oznacza, że rozwiązanie oszczędzające pamięć nie jest uniwersalne — w mniejszych modelach może nie przynieść obiecanej przewagi. Podobnie GQA to kompromis: mniej grup oznacza tańszą inferencję, ale potencjalnie słabszą jakość.

Warto dodać, że galeria nie zastępuje lektury kodu. To mapa, nie źródło. Gdy projekt wymaga decyzji o konkretnym wariancie uwagi, trzeba i tak sprawdzić implementację, wersję biblioteki i realny profil pamięci. Karta mówi, czego szukać, nie co finalnie działa w danym środowisku.

Dla praktyka wniosek jest więc inny niż w v1. Wizualna karta modelu nie jest ozdobą, lecz narzędziem do szybkiego porównania kompromisów. Zamiast pytać „która architektura jest najlepsza”, połóż dwie karty obok siebie i sprawdź trzy rzeczy: pamięć KV-cache, długość kontekstu i koszt przetworzenia tokenu. W zespole taka karta zmniejsza też zależność od jednej osoby, która pamięta configi.

Raschka zapowiedział aktualizację galerii. To słuszne, bo nawet 45 wpisów starzeje się szybciej niż jeden kwartał.


Karta architektury to mapa kompromisów, nie źródło — porównaj KV-cache, kontekst i koszt tokenu, zanim wybierzesz wariant.
## Źródła i linki
1. [A Visual Guide to Attention Variants in Modern LLMs](https://magazine.sebastianraschka.com/p/visual-attention-variants) — Ahead of AI / Sebastian Raschka, 2026-03-22.
2. [LLM Architecture Gallery](https://sebastianraschka.com/llm-architecture-gallery/) — Sebastian Raschka, 2026.
3. [Blog and Notes](https://sebastianraschka.com/blog/) — Sebastian Raschka, wpisy z 14 i 26 marca 2026.
4. [A Visual Guide to Attention Variants — Guide](https://www.beri.net/learning/raschka-visual-guide-attention-variants-modern-llms) — THE D*AI*LY BRIEF, 2026.
5. [The Huffman Gazette — AI Science, Edition 3](https://www.huffmangazette.com/pages/ai-science) — Huffman Gazette, 2026-03-22.
