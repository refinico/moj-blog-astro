---
title: "Pierwsza norma AI Act obejmuje artykuł 17 i nic poza nim"
description: "Domniemanie zgodności, które daje EN 18286:2026, dotyczy systemu zarządzania jakością."
pubDate: "2026-10-22"
tags: ["AI", "AIAct", "Compliance", "EN18286", "Regulacje"]
draft: false
sourceDraftId: "387ef3bd-01cb-47de-84c0-97259d826f05"
heroImage: "../../assets/387ef3bd-01cb-47de-84c0-97259d826f05.jpg"
---

## Czego się dowiesz

- EN 18286 obejmuje art. 17 i pierwsze zdanie art. 11
- Decyzja (UE) 2026/2274 opublikowana 14 października
- Art. 40(1) wskazuje sekcję 2, art. 17 leży w sekcji 3
- Domniemanie to przeniesienie dowodu, nie zwolnienie
- Mapa aneksu ZA i osobna tabela dla art. 9–15

Domniemanie zgodności, które daje EN 18286:2026, dotyczy systemu zarządzania jakością. Nie obejmuje zarządzania ryzykiem, danych, logowania, nadzoru człowieka ani cyberbezpieczeństwa.

Dwudziestego drugiego października 2026 roku w obiegu był już komunikat Komisji Europejskiej z [19 października](https://digital-strategy.ec.europa.eu/en/library/first-harmonised-standard-supporting-ai-act-published-official-journal) o pierwszej zharmonizowanej normie wspierającej AI Act. Decyzja wykonawcza [(UE) 2026/2274](https://eur-lex.europa.eu/eli/dec_impl/2026/2274/oj/eng) została podpisana 12 października, a odniesienie opublikowano w Dzienniku Urzędowym 14 października. To fakty, które v1 podało poprawnie.

Korekta dotyczy zakresu. Wersja v1 napisała, że norma „przekłada wymogi artykułu 17" i słusznie dodała, że nie jest to znak zgodności całego systemu. [Analiza Cloud Security Alliance](https://labs.cloudsecurityalliance.org/research/csa-research-note-en18286-harmonised-standard-presumption-20/) precyzuje to znacznie mocniej: domniemanie obejmuje art. 17(1)(a)–(m) oraz — zgodnie z aneksem ZA — pierwsze zdanie art. 11(1). Nie obejmuje artykułów 9, 10, 12–15 ani 72–73. Firma może więc mieć wzorcowy system jakości i jednocześnie wysyłać model podatny na prompt injection; norma mówi o istnieniu procesu, nie o jego rezultacie.

Jest też subtelność prawna. Artykuł 40(1) AI Actu mówi o domniemaniu dla wymogów z sekcji 2 rozdziału III, podczas gdy artykuł 17 leży w sekcji 3. [Analiza AI Act Insight](https://aiactinsight.eu/en/standards/harmonised-standards/) zauważa, że tekst rozporządzenia nie nadąża za praktyką Komisji i że rozstrzygnięcie sądu nie jest przesądzone. Ta sama analiza przypomina o trzech stanach normy: projekt, norma opublikowana przez CEN-CENELEC i dopiero cytowanie w Dzienniku Urzędowym uruchamia domniemanie. [Orrick](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act) dodaje, że normy nie zastępują wiążących wymogów prawnych — dostawca nadal odpowiada za ocenę ryzyka.

Kontrargument jest ważny: domniemanie to nie zwolnienie, tylko przeniesienie ciężaru dowodu w zakresie objętym normą. Aplikacja jest dobrowolna, a firmy mogą wykazać zgodność inną drogą. Dla małego zespołu EN 18286 jest więc realnym skrótem — tyle że skrótem do jednego pokoju w całym budynku.

Praktyczny wniosek: zrób mapę aneksu ZA i zaznacz, które pozycje są objęte domniemaniem, a które wymagają własnego uzasadnienia. Nie traktuj certyfikatu dostawcy jako dowodu cyberbezpieczeństwa modelu. I nie odkładaj prac nad artykułami 9–15 tylko dlatego, że nie ma jeszcze dla nich normy — obowiązki dla systemów z załącznika III zaczynają się 2 grudnia 2027 roku.

Dla działu prawnego oznacza to konkretny dokument: tabelę zgodności, w której obok artykułu 17 znajdą się pozycje dla artykułów 9–15 z adnotacją „brak zharmonizowanej normy — uzasadnienie własne". Taka tabela jest dziś więcej warta niż zaświadczenie o wdrożeniu EN 18286, bo pokazuje, gdzie firma wie, a gdzie zgaduje. Warto też śledzić komunikaty o kolejnych normach i o ewentualnych common specifications z artykułu 41 — to one mogą w przyszłości wypełnić lukę w sekcji 2.


Zaświadczenie o wdrożeniu EN 18286 nie zastąpi tabeli zgodności — bez mapy aneksu ZA firma nie wie, gdzie spełnia wymogi, a gdzie zgaduje.
## Źródła i linki
1. [First harmonised standard supporting the AI Act published in the Official Journal](https://digital-strategy.ec.europa.eu/en/library/first-harmonised-standard-supporting-ai-act-published-official-journal) — Komisja Europejska, 2026-10-19.
2. [Commission Implementing Decision (EU) 2026/2274](https://eur-lex.europa.eu/eli/dec_impl/2026/2274/oj/eng) — EUR-Lex, 2026-10-12.
3. [EN 18286 and the Limits of AI Act Presumption of Conformity](https://labs.cloudsecurityalliance.org/research/csa-research-note-en18286-harmonised-standard-presumption-20/) — Cloud Security Alliance, 2026-10-25.
4. [AI Act harmonised standards: where the presumption stands](https://aiactinsight.eu/en/standards/harmonised-standards/) — AI Act Insight, 2026-08-28.
5. [First Harmonised Technical Standard Published Under the EU AI Act](https://www.orrick.com/en/Insights/2026/10/First-Harmonised-Technical-Standard-Published-Under-the-EU-AI-Act) — Orrick, 2026-10.
