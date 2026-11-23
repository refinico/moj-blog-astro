---
title: "Od pytania do serwerów — i gdzie w tej ścieżce jest weryfikacja"
description: "11 stycznia 2026 roku opublikowano podsumowanie roku, w którym książka zmieniła się w diagram, a diagram w serwerownię."
pubDate: "2026-01-11"
tags: ["AI", "Kariera", "Architektura", "Weryfikacja", "METR"]
draft: false
sourceDraftId: "9160f7b9-5734-47ba-8a83-72c4860d932b"
heroImage: "../../assets/9160f7b9-5734-47ba-8a83-72c4860d932b.jpg"
---

## Czego się dowiesz

- Trzy kadry: pytanie, sieć neuronowa, serwerownia
- Jeden główny przekaz powielony lokalnie, nie dowód
- Znak Microsoftu i „architekt AI” to interpretacje
- METR: spodziewano się +24%, zmierzono –19%
- Brakuje czwartego kroku: skąd wiem, że to poprawne

11 stycznia 2026 roku opublikowano podsumowanie roku, w którym książka zmieniła się w diagram, a diagram w serwerownię. Trzy kadry — styczeń z pytajnikami, czerwiec z siecią neuronową, grudzień z tabletem przy serwerach — tworzą wygodną oś czasu rozwoju.

To materiał [aiforeveryone.blog](https://aiforeveryone.blog/blog/2025-rok-transformacji-od-studenta-do-architekta-ai), a pozostałe wpisy z tego dnia są jego lokalnymi przeróbkami. Już to jest pierwsza ważna korekta wobec wersji v1: mamy jeden główny przekaz, powielony w kilku wariantach, a nie kilka niezależnych potwierdzeń. To case study, nie dowód.

Wersja v1 potraktowała opis jako faktograficzną biografię i uznała znak Microsoftu na ilustracji za dowód konkretnego środowiska pracy. Tymczasem to detal graficzny. Podobnie tytuł „architekt AI” jest autorskim określeniem ścieżki, nie potwierdzonym stanowiskiem. Obie rzeczy trzeba nazwać interpretacją, nie faktem. Bezpieczne pozostaje tylko to, co rzeczywiście widać: trzy obrazy, trzy miesiące i kolejność — pytanie, struktura, infrastruktura.

Grill jest tu szczególnie potrzebny, bo opowieść o „nauka przez robienie” ma dziś twardy kontrargument. [Badanie METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) z lipca 2025 roku pokazało, że 16 doświadczonych programistów pracujących nad własnymi repozytoriami było o 19 procent wolniejszych, gdy mogli używać narzędzi AI. Co ciekawe, przed badaniem spodziewali się 24-procentowego przyspieszenia, a po nim nadal wierzyli, że przyspieszyli o 20 procent. Z kolei [Badanie Stack Overflow z 2025 roku](https://survey.stackoverflow.co/2025/ai) pokazuje, że 46 procent deweloperów aktywnie nie ufa dokładności odpowiedzi AI, a tylko 33 procent jej ufa.

Innymi słowy: ścieżka „czytaj, rysuj, wdrażaj” jest sensowna, ale niekompletna. Brakuje w niej czwartego kroku — pytania „skąd wiem, że to jest poprawne?”. Bez niego entuzjazm z pierwszego kadru łatwo zamienia się w pewność, której narzędzie nie zasłużyło.

Praktyczny wniosek jest więc taki. Zapisz pytanie i to, czego nie wiesz. Przenieś ustalenia do pliku wraz z powodem wyboru. Wskaż właściciela danych. A potem dopisz test obalający: jeden przykład z Twojej domeny, jeden przypadek graniczny i jasne kryterium, które powie Ci, że wynik jest błędny. To właśnie ten element odróżnia architekta od operatora kolejnego narzędzia.

W badaniu METR uczestnicy pracowali średnio pięć lat nad repozytorium, które znali, i mimo to ich subiektywna ocena rozmijała się z pomiarem. To dobry powód, żeby własną ścieżkę rozwoju też mierzyć, a nie tylko opowiadać.

Grill ma jeszcze jedną warstwę. W badaniu METR programiści po zakończeniu eksperymentu nadal oceniali, że AI przyspieszyło ich o 20 procent, choć pomiar pokazał spowolnienie o 19 procent. To nie jest drobna różnica statystyczna, tylko rozjazd między odczuciem a wynikiem. Właśnie dlatego „nauka przez robienie" potrzebuje zewnętrznego punktu odniesienia — choćby prostego dziennika, w którym zapisujesz, ile razy musiałeś poprawić odpowiedź modelu. Ankieta Stack Overflow dodaje, że 75 procent deweloperów w razie wątpliwości pyta człowieka. Ta czynność też jest częścią architektury.


Ścieżka „czytaj, rysuj, wdrażaj” jest niekompletna bez testu obalającego — dopisz pytanie o źródło poprawności, bo odczucie postępu rozmija się z pomiarem.
## Źródła i linki
1. [2025: Rok transformacji, od studenta do architekta AI](https://aiforeveryone.blog/blog/2025-rok-transformacji-od-studenta-do-architekta-ai) — aiforeveryone.blog, 2026-01-11.
2. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) — METR, 2025-07-10.
3. [AI — 2025 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2025/ai) — Stack Overflow, 2025.
4. [Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity](https://arxiv.org/abs/2507.09089) — arXiv, 2025-07-25.
