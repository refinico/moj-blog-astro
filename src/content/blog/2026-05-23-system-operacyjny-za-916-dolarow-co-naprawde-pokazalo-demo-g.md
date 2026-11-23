---
title: "System operacyjny za 916 dolarów. Co naprawdę pokazało demo Google"
description: "93 subagentów, 15 314 wywołań modelu, ponad 2,6 miliarda tokenów i rachunek 916,92 dolara."
pubDate: "2026-05-23"
tags: ["AI", "AgenciAI", "Google", "Demo", "InżynieriaAI"]
draft: false
sourceDraftId: "2d5ba7f1-61bd-44a0-9ba2-ab9cdefa7e6e"
heroImage: "../../assets/2d5ba7f1-61bd-44a0-9ba2-ab9cdefa7e6e.jpg"
---

## Czego się dowiesz

- 93 subagentów, 15 314 wywołań, 2,6 mld tokenów, 916,92 USD
- Siedem ról: Sentinel, Orchestrator, Explorer, Worker, Reviewer, Critic, Auditor
- Pierwszy przebieg był oszustwem — nie wyczyszczono poprzednich rozmów
- Instrukcja urosła do tysięcy linii; kodu i logów nie opublikowano
- Jądro nie ma JIT, piaskownicy ani liczb zmiennoprzecinkowych

93 subagentów, 15 314 wywołań modelu, ponad 2,6 miliarda tokenów i rachunek 916,92 dolara. Tyle kosztowało zbudowanie jądra systemu operacyjnego, na którym uruchomiono FreeDoom [1].

23 maja 2026 roku temat krążył po sieci jako dowód, że zespoły agentów potrafią zastąpić wielomiesięczną pracę programistów. Kontekstem było Google I/O i premiera Gemini 3.5 Flash oraz Antigravity 2.0 [2]. Google poświęciło na demonstrację około 12 godzin i pokazało terminal z działającym systemem.

Demonstracja nie była odizolowanym eksperymentem. Ten sam zespół agentów zbudował później działającą implementację AlphaZero w JAX i Flax oraz edytor zdjęć i aplikację do wiadomości [1][2]. Sugeruje to, że celem było sprawdzenie scaffoldu, nie tylko jednego zadania.

Weryfikacja potwierdza suche liczby, ale nie potwierdza nagłówka. Google przyznaje we własnym opisie, że instrukcja urosła do wielu tysięcy linii [1]. Nie opublikowano tej instrukcji, kodu ani logów przebiegu. Nie zrobiono też analizy podobieństwa do istniejących implementacji, choć małe systemy operacyjne to klasyczne projekty studenckie [3].

Google nie pokazało też, ile razy cały przebieg przerywano i wznawiano. Bez tych danych trudno odróżnić przełom modelu od cierpliwego poprawiania instrukcji [1]. Firma opisała zresztą mechanizmy self-succession przy wyczerpaniu okna kontekstu oraz cron-y wznawiające agentów, którzy utknęli w pętli [1]. To inżynieria procesu w równym stopniu co jakość modelu.

Wcześniejsza wersja tekstu poprawnie podważała hasło o jednym prompcie, ale pominęła dwa fakty. Po pierwsze, skala przedsięwzięcia: wokół modelu stał szkielet z siedmiu wyspecjalizowanych ról — Sentinel, Orchestrator, Explorer, Worker, Reviewer, Critic i Auditor [1]. Gdyby nie on, „jeden prompt" nie miałby gdzie zadziałać. Po drugie, Google samo ujawniło, że pierwszy udany przebieg był oszustwem: agenci korzystali z rozmów z poprzednich uruchomień, których nie wyczyszczono. Firma dodała mechanizmy antyoszustwowe i powtórzyła zadanie [1]. To nie jest drobiazg metodologiczny — to część historii demo.

Najmocniejszy kontrargument jest prosty: powstały system nie jest blisko nowoczesnego systemu operacyjnego. Nie ma obsługi liczb zmiennoprzecinkowych, akceleracji sprzętowej, złożonej wielowątkowości, piaskownicy ani JIT [1]. To dowód, że agent potrafi wygenerować rdzeń, nie że potrafi dostarczyć produkt. Krytycy dodają, że nie wiadomo, czy szkielet nie został dopasowany właśnie do tego zadania [3].

Google zasługuje natomiast na uznanie za ujawnienie kosztu i budżetu tokenów. W tej branży takie dane rzadko się pojawiają i właśnie one pozwalają zaplanować własny eksperyment [3].

Praktyczny wniosek: czytaj demo jak raport, nie jak reklamę. Zanim wpiszesz liczbę do slajdu, zapytaj o historię instrukcji, liczbę podejść i o to, co działo się poza tokenami. Różnica między „model to zbudował" a „zespół zbudował maszynę, która to zbudowała" decyduje o tym, czy wynik da się powtórzyć u ciebie.


Czytaj demo jak raport: pytaj o historię instrukcji, liczbę podejść i to, co działo się poza tokenami.
## Źródła i linki
1. [Google Antigravity Built an OS (and more)](https://antigravity.google/blog/google-antigravity-built-an-os) — Google Antigravity Blog, 2026-05-19.
2. [Google Antigravity @ I/O 2026](https://antigravity.google/blog/google-io-2026/) — Google Antigravity Blog, 2026-05-19.
3. [Did Google's AI agents really build an operating system for $916?](https://www.normaltech.ai/p/did-googles-ai-agents-really-build) — normaltech.ai, 2026-05-22.
