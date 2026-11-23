---
title: "Inżynieria kontekstu po roku. Co z recept Manus przetrwało próbę?"
description: "Manus potrzebował czterech przebudów agenta, żeby dojść do wniosku, który brzmi niemal jak banał: najlepsza strategia kontekstu to mniej strategii."
pubDate: "2025-07-24"
tags: ["AI", "Kontekst", "AgenciAI", "Manus", "InżynieriaAI"]
draft: false
sourceDraftId: "c1dc616d-52f4-4951-8154-7b53c5d40780"
heroImage: "../../assets/c1dc616d-52f4-4951-8154-7b53c5d40780.jpg"
---

## Czego się dowiesz

- Kompresja odwracalna zachowuje ścieżkę do pliku, nie tylko treść
- Redukcja zaczyna się przy progu 128K–200K tokenów
- Liczba 50 oznacza wywołania, nie liczbę narzędzi
- KV sharing opisano w NeurIPS 2024, nie w Manus
- Zmiana prefiksu narzędzi unieważnia KV-cache

Manus potrzebował czterech przebudów agenta, żeby dojść do wniosku, który brzmi niemal jak banał: najlepsza strategia kontekstu to mniej strategii.

18 lipca 2025 roku zespół opublikował [relację z budowy agenta](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus), a [Chip Huyen](https://www.linkedin.com/posts/chiphuyen_aiagents-aiengineering-aiapplications-activity-7354178077108719616-BT9X) podsumowała ją cztery dni później. Temat był wtedy nowy: modele miały już okna 128K tokenów, ale nikt nie wiedział, co zrobić, gdy agent pracuje na plikach PDF i stronach WWW dłużej niż kilka tur. Dziś, gdy przepływy agentowe stały się standardem, warto sprawdzić, które rady były realne, a które wynikały z ówczesnych ograniczeń.

Potwierdziło się kilka rzeczy. Kompresja kontekstu powinna być odwracalna: treść dokumentu można usunąć, o ile zostaje ścieżka do pliku albo adres URL. Manus nazywa to compaction i wyraźnie odróżnia od summarization, czyli podsumowania, które informację traci bezpowrotnie. [Relacja ZenML](https://www.zenml.io/llmops-database/context-engineering-for-production-ai-agents-at-scale) dodaje, że redukcja zaczyna się dopiero przy progu 128K–200K tokenów, kompaktowana jest najstarsza połowa wywołań, a kilka ostatnich zostaje w pełnej formie jako świeży wzorzec poprawnego użycia narzędzi. To nie jest teoria: typowe zadanie w Manus to około pięćdziesięciu wywołań narzędzi.

Tu pojawia się pierwsza korekta. Wersja v1 sugerowała, że model z pięćdziesięcioma opcjami wybiera gorzej niż z pięcioma. Liczba pięćdziesiąt w materiale Manus odnosi się jednak do liczby wywołań w zadaniu, nie do liczby dostępnych narzędzi. Oryginał mówi ogólniej: gdy narzędzi jest zbyt wiele, rośnie szansa złego wyboru. Konkretnego progu nie podano, więc nie wolno go przedstawiać jako faktu.

Druga korekta dotyczy nowości mechanizmu. Współdzielenie pamięci KV między warstwami, opisane jako KV sharing, nie było wynalazkiem Manus — [praca Brandon i in. z NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/file/9e23d020c18e4c40d81c6a0fc7a46f68-Paper-Conference.pdf) opisała Cross-Layer Attention dwa lata wcześniej. Innowacją było zastosowanie tej idei w popularnym produkcie i połączenie jej z natywną uwagą modelu.

Grill przynosi też kontrargument. ZenML cytuje zasadę „build less and understand more”: największe zyski przyszły z uproszczeń i większego zaufania do modeli, nie z dokładania kolejnych trików. Inżynieria kontekstu ma uprościć pracę modelu, a nie zastąpić jego brakujących umiejętności. Jeśli agent zapomina o celu po dwudziestu krokach, warto najpierw sprawdzić strukturę zadania i sam model.

Warto dodać jeszcze jeden wniosek z relacji ZenML: priorytetem jest utrzymanie stabilnego prefiksu narzędzi, bo każda zmiana definicji unieważnia KV-cache dla kolejnych kroków. To wyjaśnia, dlaczego zespół wybrał maskowanie zamiast usuwania funkcji w locie.

Praktyczny wniosek jest dziś konkretny. Zanim wdrożysz własną kompresję, zapisz test odtwarzalności: czy po usunięciu treści agent potrafi odzyskać dokument ze ścieżki? Potem policz narzędzia i sprawdź, czy grupy o wspólnych prefiksach nie zastąpiły czytelnej polityki dostępu. Na koniec zmierz, czy złożoność warstwy kontekstu rośnie szybciej niż jakość odpowiedzi. To najprostszy sygnał, że warto zacząć odejmować.


Zanim dodasz kolejny trik, zmierz czy złożoność warstwy kontekstu rośnie szybciej niż jakość odpowiedzi.
## Źródła i linki
1. [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus) — Manus, 2025-07-18.
2. [Very useful tips on tool use and memory from Manus's context engineering blog post](https://www.linkedin.com/posts/chiphuyen_aiagents-aiengineering-aiapplications-activity-7354178077108719616-BT9X) — Chip Huyen, 2025-07-24.
3. [Manus: Context Engineering for Production AI Agents at Scale](https://www.zenml.io/llmops-database/context-engineering-for-production-ai-agents-at-scale) — ZenML, 2025.
4. [Reducing Transformer Key-Value Cache Size with Cross-Layer Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/9e23d020c18e4c40d81c6a0fc7a46f68-Paper-Conference.pdf) — Brandon et al., NeurIPS 2024.

#AI
