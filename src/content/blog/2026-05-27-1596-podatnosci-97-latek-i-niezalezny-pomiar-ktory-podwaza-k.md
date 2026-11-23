---
title: "1596 podatności, 97 łatek — i niezależny pomiar, który podważa księgę Anthropic"
description: "1 596 ujawnionych podatności, 97 załatanych — i bardzo różne interpretacje tych samych liczb."
pubDate: "2026-05-27"
tags: ["AI", "Bezpieczeństwo", "CVE", "Kod", "Triage"]
draft: false
sourceDraftId: "da6331a1-5ef6-4d29-8a99-d5befa123041"
heroImage: "../../assets/da6331a1-5ef6-4d29-8a99-d5befa123041.jpg"
---

## Czego się dowiesz

- 1596 podatności, 97 załatanych według Anthropic
- Sześć kroków: zagrożenia, piaskownica, odkrywanie, weryfikacja, triage, łatanie
- Duplikaty i fałszywe dodatnie nie oznaczają wzrostu ryzyka
- ISC: 150 zgłoszeń, 8 przyjętych, 134 odrzuconych
- Mierz zaakceptowane poprawki, nie liczbę raportów

1 596 ujawnionych podatności, 97 załatanych — i bardzo różne interpretacje tych samych liczb. 27 maja 2026 roku Anthropic opublikowało przewodnik o używaniu modeli do zabezpieczania kodu. Wersja v1 potraktowała go jako podręcznik procesu. Po grillu widać też, że to materiał producenta narzędzia, a nie niezależny raport.

Wtedy temat był aktualny: modele zaczęły masowo skanować kod, a pytanie brzmiało, co zrobić z napływem zgłoszeń. [Przewodnik Anthropic](https://claude.com/resources/articles/using-llms-to-secure-source-code) odpowiada sześcioma krokami: model zagrożeń, piaskownica, odkrywanie, weryfikacja, triage i łatanie. Pierwsze dwa to jednorazowe przygotowanie, pozostałe cztery to pętla.

Weryfikacja potwierdza opis procesu. Tekst rzeczywiście radzi krótkie prompty zamiast długich list kontrolnych, osobnego weryfikatora w świeżym kontenerze i test napisany przed łatką. [Repozytorium defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) zawiera obiecane umiejętności i demonstracyjny harness. Nie potwierdza się natomiast bezpośrednio coś innego: 97 załatanych opatrzono zastrzeżeniem „według naszej wiedzy”, a liczba zgłoszeń to cała różnica między kandydatem a potwierdzoną podatnością.

Najbardziej wartościowa część przewodnika to zresztą triage. Autorzy radzą łączyć znaleziska według wspólnej przyczyny, a ważność oceniać przez zasięg, kontrolę nad wejściem, liczbę warunków wstępnych i uwierzytelnienie. Dopiero taka ocena pozwala odróżnić błąd, który ktoś może realnie wykorzystać, od ciekawego, lecz niegroźnego przypadku brzegowego.

Korekta jest więc potrzebna w interpretacji. Wersja v1 sugerowała, że niski odsetek łatek wynika wyłącznie z opieszalości maintainerów. Tymczasem [forum CVE](https://www.cve.org/Resources/General/CVE-AI-Conference-Meeting-Notes-July2026.pdf) z lipca 2026 roku wskazuje na duplikaty, fałszywe dodatnie i rosnący szum — wzrost liczby zgłoszeń nie oznacza wzrostu ryzyka. [ISC](https://www.isc.org/blogs/2026-04-16-How-to-report-a-vulnerability/) podaje konkret: ze 150 zgłoszeń przyjęto 8, a 134 odrzucono, czyli 89 proc.

Najmocniejszy kontrargument dotyczy wiarygodności samych ocen. Analiza przypadku curl wykazała, że z 34 opublikowanych raportów scanner Anthropic odrzucił 19 jako niebędące podatnościami, a sześć potwierdzono jako niskiej wagi — około 56 proc. fałszywych trafień przy jednoczesnym 94,2-procentowym wskaźniku trafności w własnej księdze dostawcy. VulnCheck policzył też, że model oznaczył 91,5 proc. znalezisk jako krytyczne lub wysokie, podczas gdy maintainerzy — 51,3 proc.

Wniosek praktyczny jest prosty, ale niewygodny. Nie mierz skuteczności skanera liczbą wygenerowanych zgłoszeń. Mierz ją liczbą zaakceptowanych poprawek i czasem, jaki zespół traci na odrzucenie szumu. Własną księgę trafności warto prowadzić od pierwszego skanu, zanim zapomnisz, skąd wziął się dany wynik i kto go ostatecznie zatwierdził. Zanim wdrożysz własną pętlę, ustaw limit dziennych raportów i wymagaj dowodu koncepcji — inaczej narzędzie do obrony stanie się kolejką, której nikt nie nadąża czytać.


Nie mierz skuteczności skanera liczbą zgłoszeń, lecz czasem, jaki zespół traci na odrzucenie szumu.
## Źródła i linki
1. [Using LLMs to secure source code](https://claude.com/resources/articles/using-llms-to-secure-source-code) — Anthropic / Claude, 2026-05-27.
2. [defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) — Anthropic, 2026.
3. [CVE Program Virtual Forum: AI-Enabled Vulnerability Discovery](https://www.cve.org/Resources/General/CVE-AI-Conference-Meeting-Notes-July2026.pdf) — CVE Program, 2026-07.
4. [How to report a security vulnerability, 101](https://www.isc.org/blogs/2026-04-16-How-to-report-a-vulnerability/) — Internet Systems Consortium, 2026-04-16.
5. [AI gets good at finding bugs, not as good at fixing them](https://www.theregister.com/security/2026/02/24/ai-gets-good-at-finding-bugs-not-as-good-at-fixing-them/4653180) — The Register, 2026-02-24.
6. [Unverified AI bug reports are a denial-of-service attack on open source](https://trellner.com/reports/unverified-ai-bug-reports-denial-of-service/) — Trellner, 2026-11-17.
