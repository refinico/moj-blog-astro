---
title: "AI pisze 80% kodu w Anthropic. Co z tego, gdy wydania rosną tylko o 30%?"
description: "W maju 2026 roku ponad 80% kodu włączanego do repozytorium Anthropic zostało napisane przez Claude'a."
pubDate: "2026-06-04"
tags: ["AI", "Kodowanie", "Produktywność", "AgenciAI", "InżynieriaAI"]
draft: false
sourceDraftId: "5c6ecb42-dbd3-4c44-9fa2-f54456d1d96c"
heroImage: "../../assets/5c6ecb42-dbd3-4c44-9fa2-f54456d1d96c.jpg"
---

## Czego się dowiesz

- Ponad 80% kodu w Anthropic napisał Claude w maju 2026
- 8 razy więcej linii to przesadzenie — przyznaje sam Anthropic
- Commity plus 240%, projekty 80%, wydania tylko 30%
- Wąskim gardłem jest przegląd, nie pisanie kodu
- Liczby 17 i 80% to dane dostawcy, nie niezależny pomiar

W maju 2026 roku ponad 80% kodu włączanego do repozytorium Anthropic zostało napisane przez Claude'a. Firma podaje też, że typowy inżynier scala osiem razy więcej linii dziennie niż w 2024 roku. Te dwa zdania, opublikowane 4 czerwca przez Ethana Mollicka, stały się najgłośniejszym dowodem na rzekomy koniec „współinteligencji".

Mollick ogłosił wtedy koniec epoki czatów i zapowiedział książkę „Co-Existence" z premierą 20 października. Jego wcześniejsza „Co-Intelligence" była bestsellerem „New York Times" i doczekała się ponad 25 przekładów. Nowa teza jest skromniejsza niż nagłówek: maszyna bywa lepsza w jednym miejscu, gorsza w innym, więc trzeba negocjować, kiedy oddać jej klawiaturę. Sam autor nie oddał jej przy pisaniu — wszystkie rozdziały napisał sam, a AI używał jako czytelnika i kontrolera faktów.

Grill tej narracji ujawnia wybiórczość. Mollick powołuje się na badanie, które rzekomo pokazało „siedemnastokrotnie więcej pisanego kodu". W pierwotnej wersji pracy (SSRN 6843118) takiej liczby nie ma: są tam efekty 30%, 180% i 240% dla kolejnych typów agentów, a najważniejszy wniosek jest odwrotny — wzrost liczby commitów przechodzi w 80% przypadków na projekty, ale tylko w 30% na faktyczne wydania. Wąskim gardłem jest przegląd i integracja, nie pisanie.

Nawet 8× wymaga zastrzeżenia. [Raport Anthropic](https://www.anthropic.com/institute/recursive-self-improvement) przyznaje wprost, że linie kodu to miara niedoskonała i że „8× linii na inżyniera dziennie to prawie na pewno przesadzenie rzeczywistego wzrostu produktywności". Automatyczny przegląd wyłapał około jednej trzeciej błędów, które stały za wcześniejszymi incydentami. [Analiza MIT Sloan](https://mitsloan.mit.edu/ideas-made-to-matter/ai-boosts-worker-productivity-does-translate-to-final-outputs) pokazuje ten sam lejek: więcej kodu nie oznacza więcej działającego oprogramowania.

Krytycy widzą w tym przede wszystkim premierę książki. Recenzja w „Weiterbildungsblog" nazywa tekst długim blokiem reklamowym, a niezależny komentarz zauważa, że zarówno 17×, jak i 80% to dane dostawców, które należy traktować jako marketing. W samym [wpisie Mollicka](https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence) pada też przyznanie, że modele odebrały jego hasło „Kup swojemu człowiekowi tę książkę" jako prompt injection.

Dla praktyka wniosek jest odwrotny do nagłówka. Zamiast raportować linie kodu, mierz wdrożone zmiany i czas ich przeglądu. Zanim powiesz „mamy osiem razy więcej", policz, ile osób realnie może przejrzeć wygenerowany kod. I zadaj sobie pytanie z nowej książki: kiedy odmówić AI pomocy, kiedy oddać ster — oraz co zrobić, gdy model czyta twoją pracę, zanim przeczyta ją klient.

Detale z wpisu autora pokazują zresztą, jak wyglądała ta negocjacja w praktyce. Stronę książki zbudował Claude Code z użyciem Opus 4.8 w minuty zamiast godzin; na górze znalazł się baner z osobną wersją dla agentów czytających w imieniu człowieka. W poprzedniej książce użył 128 myślników, w tej świadomie znacznie mniej, by udowodnić autorstwo tekstu. To drobiazgi, ale one właśnie pokazują, że hasło o 80 procentach kodu opisuje jeden etap procesu, nie całą pracę.


Mierz wdrożone wydania i czas przeglądu, nie liczbę wygenerowanych linii kodu.
## Źródła i linki
1. [Co-Existence and the End of Co-Intelligence](https://www.oneusefulthing.org/p/co-existence-and-the-end-of-co-intelligence) — One Useful Thing (Ethan Mollick), 2026-06-04.
2. [When AI builds itself](https://www.anthropic.com/institute/recursive-self-improvement) — Anthropic Institute, 2026-06-04.
3. [Writing Code vs. Shipping Code](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6843118) — SSRN / MIT Sloan, 2026-06-01.
4. [AI boosts worker productivity — but does that translate to final outputs?](https://mitsloan.mit.edu/ideas-made-to-matter/ai-boosts-worker-productivity-does-translate-to-final-outputs) — MIT Sloan, 2026-09-02.
5. [Co-Existence and the End of Co-Intelligence — lektura krytyczna](https://www.weiterbildungsblog.de/trends-in-der-weiterbildung/kuenstliche-intelligenz/co-existence-and-the-end-of-co-intelligence/) — Weiterbildungsblog, 2026-06-05.
