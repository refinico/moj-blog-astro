---
title: "1,56% czy 3,25%? Jak czytać specyfikację modelu MoE bez wyciągania wniosków z nazwy"
description: "Arcee AI podała w specyfikacji Trinity Large dwie liczby, które łatwo ze sobą pomieszać: 400 miliardów parametrów ogółem i 13 miliardów aktywnych przy jednym..."
pubDate: "2026-02-25"
tags: ["AI", "LLM", "MoE", "Architektura", "Koszty"]
draft: false
sourceDraftId: "9996883d-6926-4a44-9593-f226e3ab20e8"
heroImage: "../../assets/9996883d-6926-4a44-9593-f226e3ab20e8.jpg"
---

## Czego się dowiesz

- 400B parametrów, 13B aktywnych, 4 z 256 ekspertów
- 1,56% to routing, 3,25% to udział aktywnych parametrów
- 17 T tokenów w fazach 10T/4T/3T, licencja Apache 2.0
- Arcee: 30 osób, 20 mln dolarów, cztery modele w pół roku
- Raschka: o wyniku decydują dane, nie architektura

Arcee AI podała w specyfikacji Trinity Large dwie liczby, które łatwo ze sobą pomieszać: 400 miliardów parametrów ogółem i 13 miliardów aktywnych przy jednym tokenie. Tabela routingowa dodaje trzecią — 4 z 256 ekspertów, czyli 1,56%. To nie jest ten sam ułamek. 13 z 400 to 3,25% parametrów w ruchu, natomiast 1,56% to jedynie stosunek uruchomionych ekspertów do ich liczby.

27 stycznia 2026 roku Arcee wypuściła [Trinity Large](https://www.arcee.ai/blog/trinity-large) — 400B MoE, 13B aktywnych, 17 bilionów tokenów treningowych w trzech fazach (10T, 4T, 3T) i licencja Apache 2.0. W ofercie znalazły się też Trinity Mini (26B/3B aktywnych) i Nano (6B/1B). Dwa dni później [TechCrunch](https://techcrunch.com/2026/01/28/tiny-startup-arcee-ai-built-a-400b-open-source-llm-from-scratch-to-best-metas-llama/) opisał 30-osobową firmę, która wszystkie cztery modele zbudowała w pół roku za 20 milionów dolarów na 2048 kartach B300. 25 lutego [Sebastian Raschka](https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight) zestawił dziesięć premier stycznia i lutego, od Kimi K2.5 po Tiny Aya. Wtedy temat był istotny: po raz pierwszy tak wielu niezależnych zespołów pokazało rozwiązania o wyraźnie różnej architekturze.

Część draftu wytrzymała weryfikację. Liczby 400B/13B, 256 ekspertów, 17T tokenów, trzy wersje — Preview, Base i TrueBase z 10T bez danych instruktażowych — zgadzają się z wpisem producenta. Zgadza się też teza, że przy modelach MoE liczy się nie rozmiar, lecz liczba aktywnych parametrów na wywołanie.

Korekta pierwsza dotyczy właśnie 1,56%. Draft napisał „czyli 1,56 procenta modelu”, sugerując udział aktywnych parametrów. W źródle 1,56% to routing fraction — 4 z 256 ekspertów. Własności kosztowej odpowiada raczej 3,25%. Korekta druga dotyczy listy: Raschka wymienia dziesięć pozycji, a draft pominął Nanbeige 4.1 3B z 13 lutego, przez co jego „dziesięć premier” nie ma swojej dziesiątej pozycji. Trzecia jest tonem: zdanie o firmie, „której jeszcze w styczniu nikt nie miał na radarze”, to parafraza prywatnej uwagi Raschki („a company I hadn't had on my radar”), a nie stan rynku. Arcee od dawna robiła post-training dla klientów korporacyjnych, zebrała około 50 milionów dolarów i w grudniu wydała wcześniejsze modele.

Kontrargument uderza w samą tezę draftu. Raschka kończy zestawienie stwierdzeniem, że wyniki modeli prawdopodobnie nie wynikają z samej architektury, lecz z jakości danych i receptury treningowej. Wartość analizy architektonicznej jest więc ograniczona: opisuje koszt i mechanikę, nie jakość. Potwierdzają to szczegóły zestawienia — Tiny Aya świadomie porzuciła QK-Norm, bo może on pogarszać zachowanie przy długim kontekście, a MiniMax M2.5 i Nanbeige 4.1 zostały przy zwykłej uwadze GQA i poradziły sobie bez modnych hybryd. TechCrunch dodaje, że Trinity jest modelem tekstowym i nie jest jeszcze prawdziwym konkurentem SOTA.

Dla praktyka wniosek jest podwójny. Czytaj specyfikację jako mapę kosztów: aktywne parametry, długość kontekstu, typ uwagi i liczba ekspertów powiedzą Ci, ile zapłacisz i jak model zachowa się przy długiej rozmowie. Ale nie traktuj architektury jako dowodu jakości — o tej decydują dane i trening, a wdrożenie i tak zweryfikujesz na własnym zadaniu. I sprawdzaj, czy liczba w slajdzie opisuje parametry, czy tylko routing.


Czytaj specyfikację jako cennik, ale nie architekturę jako dowód jakości — o tym, czy model działa, rozstrzygnie własne zadanie.
## Źródła i linki
1. [Introducing Trinity Large](https://www.arcee.ai/blog/trinity-large) — Lucas Atkins, Arcee AI, 2026-01-27.
2. [Tiny startup Arcee AI built a 400B-parameter open source LLM from scratch to best Meta's Llama](https://techcrunch.com/2026/01/28/tiny-startup-arcee-ai-built-a-400b-open-source-llm-from-scratch-to-best-metas-llama/) — Julie Bort, TechCrunch, 2026-01-28.
3. [A Dream of Spring for Open-Weight LLMs: 10 Architectures from Jan-Feb 2026](https://magazine.sebastianraschka.com/p/a-dream-of-spring-for-open-weight) — Sebastian Raschka, 2026-02-25.
