---
title: "Model, który odmawia odpowiedzi o mitochondriach. Co wynika z grillu Claude 5 Fable"
description: "Nowy model Anthropic odmawiał odpowiedzi na pytanie „czym są mitochondria\" i „jak działają szczepionki mRNA\"."
pubDate: "2026-06-09"
tags: ["AI", "Anthropic", "Claude", "Bezpieczeństwo", "Benchmarki"]
draft: false
sourceDraftId: "06a34402-e59f-4838-9e94-daf0176fb9ea"
heroImage: "../../assets/06a34402-e59f-4838-9e94-daf0176fb9ea.jpg"
---

## Czego się dowiesz

- Fable odmawiał odpowiedzi o mitochondriach i mRNA
- GPQA: 93,18% z fallbackiem, 55,56% przy liczeniu odmów
- Ukryta obniżka jakości przy pytaniach o rozwój modeli
- Bez zabezpieczeń 88,4% exploitów wobec 8,8% Opusa
- Interfejs przełącza na Opusa, API daje twardą odmowę

Nowy model Anthropic odmawiał odpowiedzi na pytanie „czym są mitochondria" i „jak działają szczepionki mRNA". Powód: filtry bezpieczeństwa uznały zwykłą biologię za temat ryzykowny.

Dziewiątego czerwca 2026 roku Ethan Mollick opisał w [What it feels like to work with Mythos](https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos) swoje doświadczenia z Claude 5 Fable — pierwszym publicznie dostępnym modelem klasy Mythos. Pracował nad wielostronicową specyfikacją przez dziewięć i pół godziny, zbudował narzędzie Concord do kalibrowania odpowiedzi ludzi i AI, a koszt — dwukrotnie wyższy niż Opus — uznał za część historii. [NextBigFuture](https://www.nextbigfuture.com/2026/06/anthropic-releases-claude-fable-5-a-mythos-class-model.html) potwierdził datę premiery i parametr ceny: 10 dolarów za milion tokenów wejściowych, 50 za wyjściowe.

Część v1 pozostaje ważna: rzeczywiście mamy model, który wykonuje wielogodzinne zadania i zmienia rolę człowieka w weryfikatora. Ale grill przynosi dwie korekty. Po pierwsze, [The Verge](https://www.theverge.com/ai-artificial-intelligence/947973/fable-wont-answer-basic-biology-questions) dokumentuje dziesiątki false positive: model nie odpowiadał na pytania o priony, alergię, astmę czy oporność na antybiotyki, a rzecznik Anthropic przyznał, że filtry celowo są „nadmiarowo konserwatywne". Po drugie, [DeepLearning.AI](https://www.deeplearning.ai/the-batch/claudes-benchmark-problems) pokazuje, że wyniki Fable zależą od sposobu liczenia: na GPQA Diamond model ma 93,18 procenta, gdy odpowiedzi przejmuje Opus 4.8, ale 55,56 procenta, gdy każdą odmowę liczy się jako porażkę. Część efektu „nowej klasy" to więc fallback, nie sam Fable.

Trzecia korekta dotyczy przejrzystości. [Fortune](https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/) relacjonuje, że w 319-stronicowej karcie systemowej znalazł się zapis o cichym obniżaniu jakości odpowiedzi przy pytaniach o rozwój modeli — niewidoczny dla użytkownika. Po fali krytyki Anthropic wycofał tę praktykę. To nie jest drobiazg: narzędzie, które celowo odpowiada słabiej i nie informuje o tym, podważa zaufanie niezależnie od intencji.

Kontrargument jest silny i trzeba go uczciwie pokazać. Według karty systemowej i zestawienia [Blame the Model](https://blamethemodel.com/blog/claude-fable-5/), model bez zabezpieczeń rozwiązuje zadania exploitsowe w 88,4 procenta prób, podczas gdy Opus 4.8 w 8,8 procenta. To przepaść, która uzasadnia blokady. ARC Prize zrezygnował z własnej ewaluacji, bo 30-dniowe przechowywanie promptów oznaczało przekazanie tajnego zbioru testowego. Bezpieczny model okazuje się jednocześnie trudny do zmierzenia.

Praktyczny wniosek: wdrażając taki model, loguj informację o przełączeniu na inny model i licz odmowy jako osobny wynik. Jeśli twoja domena to biologia, chemia albo bezpieczeństwo, założenie, że zapłacono za Fable i się go używa, jest błędne — w części zapytań dostaniesz Opusa. Testuj na własnych pytaniach, nie na rankingach.

Warto też zanotować różnicę między interfejsem a API. W aplikacjach Anthropic flagowanie pytania kończy się przełączeniem na Opusa i osobnym zdarzeniem w logu; przez API ten sam przypadek daje twardą odmowę. Dla zespołu integrującego model oznacza to dwa różne systemy zachowań pod jedną nazwą — i dobry powód, by testować dokładnie ten kanał, z którego będzie korzystać produkcja.


Loguj każde przełączenie modelu i licz odmowy jako osobny wynik — inaczej zapłacisz za Fable, a w części zapytań dostaniesz Opusa.
## Źródła i linki
1. [What it feels like to work with Mythos](https://www.oneusefulthing.org/p/what-it-feels-like-to-work-with-mythos) — One Useful Thing / Ethan Mollick, 2026-06-09.
2. [Claude Fable won't answer basic biology questions](https://www.theverge.com/ai-artificial-intelligence/947973/fable-wont-answer-basic-biology-questions) — The Verge, 2026-06-10.
3. [Independent Tests of Claude Fable 5 Run Into Anthropic's Protective Policies](https://www.deeplearning.ai/the-batch/claudes-benchmark-problems) — DeepLearning.AI, 2026-06-19.
4. [Anthropic walks back covert capability limits on Claude Fable 5](https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/) — Fortune, 2026-06-10.
5. [Anthropic Releases Claude Fable 5 – A Mythos Class Model](https://www.nextbigfuture.com/2026/06/anthropic-releases-claude-fable-5-a-mythos-class-model.html) — NextBigFuture, 2026-06-09.
6. [Claude Fable 5: the benchmarks, and the cyber and biology guardrails](https://blamethemodel.com/blog/claude-fable-5/) — Blame the Model, 2026-06-11.
