---
title: "GPT-5.5: port rósł 20 minut, ale halucynacje zostały na 86 proc."
description: "86 proc."
pubDate: "2026-04-23"
tags: ["AI", "GPT55", "LLM", "Halucynacje", "Benchmarki"]
draft: false
sourceDraftId: "89d6fc98-e6a3-43fd-8f5a-9ad30070fce2"
heroImage: "../../assets/89d6fc98-e6a3-43fd-8f5a-9ad30070fce2.jpg"
---

## Czego się dowiesz

- Czas generacji miasta spadł z 33 do 20 minut
- 86 proc. halucynacji w teście Artificial Analysis
- Cena 5 i 30 USD: około 20 proc. wyższy koszt indeksu
- Wyniki 82,7 i 84,9 proc. to dane producenta
- Płynność i rozumowanie to nie ta sama umiejętność

86 proc. — tyle wynosi wskaźnik halucynacji GPT-5.5 w teście Artificial Analysis, przy 36 proc. dla Claude Opus 4.7 i 50 proc. dla Gemini 3.1 Pro. To najważniejsza liczba, jakiej zabrakło w relacji z premiery 23 kwietnia 2026 roku.

Wtedy temat był oczywisty. OpenAI wypuściło nowy model, a Ethan Mollick, który miał do niego wczesny dostęp, zamiast tabeli wyników pokazał [jedno zadanie i galerię porównawczą](https://www.oneusefulthing.org/p/sign-of-the-future-gpt-55): proceduralną symulację 3D miasta portowego rozwijającego się od 3000 roku p.n.e. do 3000 roku n.e. Do starcia stanęły o3, Kimi K2.6 i GPT-5.5 Pro.

Weryfikacja potwierdza opis. Starsze modele podmieniały zabudowę w miejscu, tylko GPT-5.5 Pro stworzył miasto rosnące jako całość. Czas pracy spadł z 33 do 20 minut. Mollick opisał też drugi eksperyment: z czterema promptami i własnymi danymi badawczymi model wygenerował artykuł, który jego zdaniem wystarczyłby na drugi rok doktoratu.

Przy okazji autor rozdziela trzy warstwy: modele, aplikacje i tzw. harnessy, czyli sposób, w jaki model dostaje narzędzia. GPT-5.5 to w tym ujęciu nie tylko mocniejszy silnik, ale też lepsze połączenie z Codexem i generatorem obrazów. Ocena nowej wersji powinna więc objąć cały stos, nie tylko jakość odpowiedzi na czacie.

Korekta dotyczy trzech rzeczy. Po pierwsze, wyniki 82,7 proc. w Terminal-Bench 2.0, 84,9 proc. w GDPval i 78,7 proc. w OSWorld-Verified pochodzą z [komunikatu OpenAI](https://openai.com/index/introducing-gpt-5-5/) i są danymi producenta, nie niezależnym pomiarem. Po drugie, Mollick zastrzegł w przypisie, że nie zna wszystkich szczegółów premiery i przeprasza za możliwe błędy — tekst powstał w dniu debiutu. Po trzecie, obietnica API w najbliższych dniach została zaktualizowana przez OpenAI już następnego dnia: 24 kwietnia model trafił do API.

Grill jest ważniejszy niż korekta. [Artificial Analysis](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model) przyznaje, że GPT-5.5 prowadzi w własnym indeksie i w pięciu z dziesięciu testów, ale jednocześnie podaje 86-procentowy wskaźnik halucynacji oraz dwukrotnie wyższą cenę tokenów — 5 i 30 dolarów za milion — co daje około 20 proc. wyższy koszt przejścia indeksu mimo oszczędności tokenów. Sam Mollick przyznaje, że hipoteza wygenerowanej pracy nie była ciekawa, a tekst miał problemy z przyczynowością; fikcja długu formy pozostała płaska. W komentarzu pod artykułem Christopher Horrocks zauważył, że testy zdolności pokazują, co model potrafi wyprodukować, ale nie to, czy rozumie — płynność i rozumowanie to nie ta sama umiejętność.

Praktyczny wniosek: galeria obok siebie to świetny sposób na wyłapanie różnicy w ciągłości, ale nie wystarczy do decyzji o migracji. Dołącz do niej test faktograficzny na własnych danych i policz koszt jednego poprawnego wyniku, nie tylko czas generowania.


Do galerii porównawczej dołącz test faktograficzny i policz koszt jednego poprawnego wyniku.
## Źródła i linki
1. [Sign of the future: GPT-5.5](https://www.oneusefulthing.org/p/sign-of-the-future-gpt-55) — Ethan Mollick, 2026-04-23.
2. [Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) — OpenAI, 2026-04-23.
3. [OpenAI's GPT-5.5 is the new leading AI model](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model) — Artificial Analysis, 2026-04-23.
4. [OpenAI says its new GPT-5.5 model is more efficient and better at coding](https://www.theverge.com/ai-artificial-intelligence/917612/openai-gpt-5-5-chatgpt) — The Verge, 2026-04-23.
5. [OpenAI announces GPT-5.5, its latest artificial intelligence model](https://www.cnbc.com/2026/04/23/openai-announces-latest-artificial-intelligence-model.html) — CNBC, 2026-04-23.
6. [The carwash test: virtual intelligence](https://chorrocks.substack.com/p/the-carwash-test-virtual-intelligence) — Christopher Horrocks, 2026.
