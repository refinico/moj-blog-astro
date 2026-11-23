---
title: "ChatGPT wysłał maila, Claude tylko przygotował projekt. Różnica nie była w modelu"
description: "Claude przygotował projekt odpowiedzi."
pubDate: "2026-07-23"
tags: ["AI", "AgenciAI", "Bezpieczeństwo", "Uprawnienia", "PromptInjection"]
draft: false
sourceDraftId: "9c08e687-13eb-4fce-8a46-e5a0b019713a"
heroImage: "../../assets/9c08e687-13eb-4fce-8a46-e5a0b019713a.jpg"
---

## Czego się dowiesz

- Claude przygotował projekt, ChatGPT wysłał maila — różnica w zgodzie
- 20 dolarów kupuje limit godzin, nie mądrzejszy model
- 195 przypisów sprawdzonych w 30 minut bez halucynacji
- OWASP: nie ma niezawodnej obrony przed prompt injection
- Uprawnienia to architektura, nie przełącznik w interfejsie

Claude przygotował projekt odpowiedzi. ChatGPT wysłał wiadomość do kolegi. Obaj systemy dostały to samo polecenie: połączyć się z Gmailem i przygotować seminarium. Różnicę zrobiło wcześniej udzielone pozwolenie — ChatGPT miał już zgodę na wysyłanie maili, Claude miał pytać.

23 lipca 2026 roku [Ethan Mollick opublikował przewodnik](https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22), w którym definiuje system agentowy jednym zdaniem: daje modelowi komputer do użycia. Temat był istotny, bo zmieniał samą definicję „używania AI” — z rozmowy w czacie na zlecanie pracy, która wcześniej zajmowała godziny.

Weryfikacja potwierdza większość draftu. Przy niskiej stawce wystarczają darmowe modele; przy sprawach medycznych czy prawnych Mollick każe używać najmocniejszych — Opus, Fable lub GPT-5.6 Sol — z ustawieniem rozumowania co najmniej High. Do prawdziwej pracy zostają ChatGPT i Claude od 20 dolarów miesięcznie. Potwierdza się test z książką: GPT-5.6 Sol w Codex pracował 30 minut, sprawdził 195 przypisów i nie miał znalezionych halucynacji, choć autor skarżył się na nadmierną drobiazgowość. Potwierdza się też ostrzeżenie przed prompt injection: agent czytający pocztę i przeglądający sieć może napotkać cudzy tekst każący mu przekazać pliki dalej. Problem nie jest rozwiązany.

Korekta dotyczy ceny i tezy o inteligencji. Mollick w przypisie zaznacza, że 20 dolarów kupuje realny, lecz ograniczony limit użycia agentów, który szybko się wyczerpuje — droższe plany kupują głównie więcej godzin pracy, nie mądrzejszy model. Z drugiej strony ten sam tekst pokazuje, że inny model i środowisko robią ogromną różnicę: ten sam brutalistyczny generator napisany najpierw przez GPT-5, a później przez GPT-5.6 Sol w Codex autor opisuje jako „uderzający” skok. Zdanie draftu, że różnica między czatem a agentem „nie jest w inteligencji”, jest więc za mocne.

Kontrargument jest bezpieczeństwowy. [OWASP wskazuje](https://genai.owasp.org/llmrisk/llm01-prompt-injection/), że model nie rozróżnia architektonicznie instrukcji od danych i że nie istnieje dziś wiarygodna metoda zapobiegania prompt injection — obrona musi być architektoniczna, oparta na najmniejszych uprawnieniach i izolacji. Zgoda „pytaj za każdym razem” jest mechanizmem uzyskiwania zgody, nie granicą możliwości: przy dużej liczbie zdań pojawia się zmęczenie uwagi, a użytkownik zaczyna klikać „allow” automatycznie. [OWASP traktuje to jako osobny problem nadmiaru sprawczości](https://genai.owasp.org/llmrisk2023-24/llm08-excessive-agency/) i zaleca ograniczenie liczby narzędzi, uprawnień tylko do odczytu tam, gdzie to wystarczy, oraz weryfikację w systemie docelowym, a nie decyzję samego modelu.

Dla praktyka wniosek ma dwa piętra. Zostaw domyślne pytanie o zgodę dla wszystkiego, co wysyła, wydaje lub kasuje — to pierwsza linia. Ale równolegle odebraj agentowi możliwość, której nie potrzebuje: czytający pocztę nie musi mieć funkcji wysyłania, a skrypt przeglądający dane nie musi mieć dostępu do zapisu. Uprawnienia są częścią architektury, nie tylko ustawieniem w interfejsie. Zacznij od jednego zadania z prawdziwego życia — tak jak radzi autor przewodnika — i sprawdź nie tylko efekt, ale też to, które akcje agent faktycznie wykonał bez pytania.


Zostaw pytanie o zgodę dla akcji wysyłających i odbierz agentowi uprawnienia, których nie potrzebuje — to dwa różne mechanizmy.
## Źródła i linki
1. [An opinionated guide to which AI to use to do stuff](https://www.oneusefulthing.org/p/an-opinionated-guide-to-which-ai-b22) — Ethan Mollick, One Useful Thing, 2026-07-23.
2. [LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — OWASP Gen AI Security Project.
3. [LLM08: Excessive Agency](https://genai.owasp.org/llmrisk2023-24/llm08-excessive-agency/) — OWASP Gen AI Security Project.
