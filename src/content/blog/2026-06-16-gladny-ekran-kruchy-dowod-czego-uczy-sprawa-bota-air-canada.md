---
title: "Gładny ekran, kruchy dowód. Czego uczy sprawa bota Air Canada"
description: "14 lutego 2024 roku trybunał w Kolumbii Brytyjskiej zasądził od Air Canada 812,02 dolara kanadyjskiego na rzecz pasażera, który uwierzył czatbotowi."
pubDate: "2026-06-16"
tags: ["AI", "UX", "Prawo", "Zaufanie", "Chatbot"]
draft: false
sourceDraftId: "28ac16da-bdb4-445d-b97f-4d55f4a086ce"
heroImage: "../../assets/28ac16da-bdb4-445d-b97f-4d55f4a086ce.jpg"
---

## Czego się dowiesz

- Moffatt v. Air Canada: 812,02 CAD dla jednego pasażera
- Civil Resolution Tribunal, nie ogólny Trybunał Cywilny
- Bot podał 90-dniowy termin sprzeczny z regulaminem
- Spór dotyczył zaniedbania, nie technicznej halucynacji
- Spójność treści to obowiązek redakcyjny, nie funkcja modelu

14 lutego 2024 roku trybunał w Kolumbii Brytyjskiej zasądził od Air Canada 812,02 dolara kanadyjskiego na rzecz pasażera, który uwierzył czatbotowi. Bot poinformował go o możliwości uzyskania zniżki żałobnej po odbyciu lotu — zasady takiej nie było w regulaminie.

16 czerwca 2026 roku do bazy trafił artykuł Smashing Magazine o projektowaniu w niepewności. Użył tego przypadku jako najczystszego przykładu systemu probabilistycznego ubranego w deterministyczny interfejs.

Dokument sądowy [Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do) potwierdza przebieg. Bot podał 90-dniowy termin złożenia wniosku, strona regulaminowa temu zaprzeczała. Linie argumentowały, że nie odpowiadają za bota, bo to „osobny podmiot prawny” — rozstrzygający uznał ten argument za „godny uwagi” i odparł, że chatbot jest częścią strony internetowej. Kwota składa się z 650,88 dolara odszkodowania, 36,14 odsetek i 125 dolarów kosztów trybunału.

Wersja v1 miała tu dwie istotne luki. Po pierwsze, pisała o „812 dolarach”, nie zaznaczając, że to dolary kanadyjskie i że orzeczenie zapadło w trybie drobnych roszczeń. Po drugie, nazywała organ „Trybunałem Cywilnym”. To Civil Resolution Tribunal — forum drobnych sporów, którego orzeczenie nie tworzy ogólnej odpowiedzialności prawnej za chatboty. To ważna korekta: v1 z opowieści o jednym sporze zrobiło uniwersalną regułę prawną.

Grill idzie dalej. [Relacja CBC](https://www.cbc.ca/news/canada/british-columbia/air-canada-chatbot-lawsuit-1.7116416) i [analiza American Bar Association](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/) pokazują, że spór dotyczył zaniedbania i polegania na błędnej informacji, a nie „halucynacji” w sensie technicznym. Bot nie wymyślił polityki w sensie kreatywnym — podał sprzeczny z regulaminem fragment. Odpowiedzialność firmy wynikła z tego, że treść na jej własnej stronie była niespójna. To mniej efektowna, ale dokładniejsza lekcja.

Dla praktyka wniosek jest więc konkretny. Przy każdej odpowiedzi dotyczącej ceny, polityki albo terminu wymagaj wskazania źródła — nie „bo tak powiedział model”. Testuj przypadki graniczne, nie tylko szczęśliwą ścieżkę: żałobne bilety były właśnie takim przypadkiem. I projektuj komunikaty niepewności: „nie znalazłem tego w regulaminie” jest lepsze niż pewna brednia.

Warto też dodać coś, czego v1 nie miało: spójność treści to obowiązek redakcyjny, nie funkcja modelu. Jeśli bot i regulamin mówią co innego, problem istnieje także wtedy, gdy AI nie zostanie użyty wcale.

W orzeczeniu zapadła kwota 812,02 dolara kanadyjskiego — i tylko dla tego jednego pasażera.

W aktach sprawy jest jeszcze szczegół, który dobrze pokazuje mechanizm. Przedstawiciel linii przyznał w e-mailu, że bot użył „wprowadzających w błąd słów", i zapewnił, że zgłoszono to w celu aktualizacji. Trybunał nie uznał jednak, że pasażer powinien sam sprawdzać jedną część strony wobec drugiej. Uznał, że nie ma powodu, by wiedział, który fragment jest poprawny. Ta logika przenosi się na produkty AI: jeśli system podaje dwie sprzeczne wersje polityki, błąd nie leży po stronie użytkownika.


Gdy bot i regulamin mówią co innego, błąd nie leży po stronie użytkownika — spójność treści pozostaje obowiązkiem redakcyjnym niezależnie od tego, czy AI użyty zostanie.
## Źródła i linki
1. [Designing With Uncertainty: How AI Supercharges Probabilistic Thinking](https://smashingmagazine.com/2026/06/designing-uncertainty-how-ai-supercharges-probabilistic-thinking/) — Smashing Magazine, 2026-06-16.
2. [Moffatt v. Air Canada, 2024 BCCRT 149](https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do) — Civil Resolution Tribunal, 2024-02-14.
3. [Air Canada found liable for chatbot's bad advice on plane tickets](https://www.cbc.ca/news/canada/british-columbia/air-canada-chatbot-lawsuit-1.7116416) — CBC News, 2024-02-15.
4. [BC Tribunal Confirms Companies Remain Liable for Information Provided by AI Chatbot](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/) — American Bar Association, 2024-02.
