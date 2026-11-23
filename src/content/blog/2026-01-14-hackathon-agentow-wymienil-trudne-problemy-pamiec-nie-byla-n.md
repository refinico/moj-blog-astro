---
title: "Hackathon agentów wymienił trudne problemy. Pamięć nie była największym z nich"
description: "10 stycznia 2026 roku MongoDB i Cerebral Valley zorganizowały w Shack15 w San Francisco Agentic Orchestration and Collaboration Hackathon."
pubDate: "2026-01-14"
tags: ["AI", "AgenciAI", "Hackathon", "InżynieriaAI", "Pamięć"]
draft: false
sourceDraftId: "c4e9251e-cd31-4477-83ed-4adb7f53dd64"
heroImage: "../../assets/c4e9251e-cd31-4477-83ed-4adb7f53dd64.jpg"
---

## Czego się dowiesz

- 800 kandydatów, 109 zgłoszeń, 30 tysięcy dolarów puli
- Trzy równorzędne kategorie, nie ranking z pamięcią na czele
- Zwyciężył JustPrice, nie projekt o pamięci
- Badanie 8000 odcinków: pamięć w granicach 0,4 punktu
- Wyzwania hackathonu to nie incydenty produkcyjne

10 stycznia 2026 roku MongoDB i Cerebral Valley zorganizowały w Shack15 w San Francisco Agentic Orchestration and Collaboration Hackathon. 800 kandydatów, 109 zgłoszeń, sześciu finalistów i pula 30 tysięcy dolarów, z czego 15 tysięcy trafiało do zwycięzcy. Osobny tor Coinbase oferował 2 tysiące dolarów w USDC za rozwiązania do płatności agentów.

14 stycznia Chip Huyen, jedna z sędziów, pochwaliła projekty i wymieniła trzy kategorie trudnych zadań: długotrwałe zadania z zarządzaniem pamięcią i odzyskiwaniem po awarii, adaptacyjne pobieranie danych z wielu źródeł oraz agentów pracujących z głosem, wideo i środowiskami 3D. W jury zasiedli też między innymi CTO MongoDB Jim Scharf oraz przedstawiciele Fireworks AI, Lightspeed, Coinbase, Thrive Capital i AGI House.

Wersja v1 tego wpisu z tej listy zrobiła ranking i uznała, że „największym problemem nie była jakość modelu, była pamięć". W [poście Huyen](https://www.linkedin.com/posts/chiphuyen_aiengineering-agent-activity-7417250400371761153-49Lx) nie ma jednak żadnego porównania — są trzy równorzędne kategorie. Co więcej, zwycięzcą został JustPrice z projektem o przejrzystości cen w opiece zdrowotnej, a drugie miejsce zajęło narzędzie do migracji Postgres→MongoDB. Żaden z nich nie wygrał, rozwiązując problem pamięci.

Kolejne uogólnienie dotyczyło „listy rzeczy, które psują się w produkcji". Na [stronie wydarzenia](https://cerebralvalley.ai/e/agentic-orchestration-hackathon) to kategorie wyzwań na jednodniowym hackathonie, z trzyminutowymi prezentacjami finałowymi, nie zaobserwowane incydenty produkcyjne. Projekty takie jak EvacuTrace z rzeczywistego wideo budujący model 3D i liczący trasy dla służb czy SOGA — okulary sterujące agentami głosem — były finalistami, przy czym SOGA zajęła trzecie miejsce.

Grill przynosi też dowód przeciwko tezie o pamięci jako głównym wąskim gardle. [Badanie z listopada 2026](https://arxiv.org/abs/2611.01718) przeanalizowało 8 tysięcy odcinków SWE-bench Verified i stwierdziło, że systemy pamięci rozwiązują zadania w granicach 0,4 punktu procentowego od wersji bez pamięci; większość dostarczonych wpisów była nieistotna lub niewykorzystana. Wynik nie przesądza o wszystkim, ale odbiera pewność nagłówkowi.

Dla praktyka pozostaje pytanie, które warto zadać niezależnie od rankingu: co dzieje się, gdy agent padnie w połowie zadania i czy potrafisz odtworzyć stan sprzed awarii? To test, który przeprowadzisz sam, bez czekania na kolejną konferencję. Warto też odróżnić automatyzację od agenta — pierwsza wykonuje schemat, drugi podejmuje decyzję, gdy schemat przestaje działać.

Doprecyzowanie wymaga też lista sędziów i nagród. Obok instytucji wymienionych w v1 w jury zasiadali przedstawiciele Thrive Capital i AGI House, a pula 30 tysięcy dolarów nie została podzielona równo — zwycięzca otrzymał 15 tysięcy. Warto odnotować, że zapowiedziana przez Huyen rozmowa Douglasa Ecka o Veo i Imagen figuruje w komunikacie jako przyszłe wydarzenie; w dostępnym transkrypcie finałów nie ma potwierdzenia, że się odbyła. Nie opublikowano też obiecanego wpisu z wnioskami.


Zamiast szukać jednego wąskiego gardła, sprawdź, czy potrafisz wznowić agenta po awarii.
## Źródła i linki
1. [Agentic Orchestration and Collaboration Hackathon](https://cerebralvalley.ai/e/agentic-orchestration-hackathon) — Cerebral Valley / MongoDB, 2026-01-10.
2. [Super impressed by the projects at the Agentic Hackathon last weekend!](https://www.linkedin.com/posts/chiphuyen_aiengineering-agent-activity-7417250400371761153-49Lx) — Chip Huyen, LinkedIn, 2026-01-14.
3. [SOGA: Smart Orchestration Glasses Agent](https://cerebralvalley.ai/e/agentic-orchestration-hackathon/hackathon/gallery/69) — Cerebral Valley, 2026-01-10.
4. [Agentic Innovation: Meet the Hackathon Finalists](https://tidytalks.com/talks/mongodb-local-san-francisco-2026/agentic-innovation-meet-the-hackathon-finalists--hZH_oAXcSQSNme45s6Op_Q) — MongoDB.local SF, 2026-01-15.
5. [Delivered, Not Used: Evaluating Agent Memory at Its Point of Use](https://arxiv.org/abs/2611.01718) — Xu, Li & Xu, arXiv, 2026-11-01.
