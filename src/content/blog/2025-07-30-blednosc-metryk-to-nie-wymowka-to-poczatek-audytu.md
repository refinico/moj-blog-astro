---
title: "Błędność metryk to nie wymówka. To początek audytu"
description: "„Wszystkie metryki są błędne” — to zdanie Chip Huyen opublikowała 30 lipca 2025 roku wraz z podsumowaniem: 13 lat, sześć książek, coraz lepszy warsztat pisar..."
pubDate: "2025-07-30"
tags: ["AI", "Metryki", "Goodhart", "Audyt", "Dane"]
draft: false
sourceDraftId: "ead27b66-fa79-426e-a5f3-4fbc26508ba9"
heroImage: "../../assets/ead27b66-fa79-426e-a5f3-4fbc26508ba9.jpg"
---

## Czego się dowiesz

- Chip Huyen: „Wszystkie metryki są błędne” (13 lat, 6 książek)
- To refleksja, nie metodologia; detal o „dziewiątej metryce” usunięty
- Goodhart (1975): miara jako cel przestaje być miarą
- YouTube: czas oglądania wzmacniał treści spiskowe
- Rozróżnij błędną specyfikację od perwersyjnych efektów wdrożenia

„Wszystkie metryki są błędne” — to zdanie Chip Huyen opublikowała 30 lipca 2025 roku wraz z podsumowaniem: 13 lat, sześć książek, coraz lepszy warsztat pisarski.

Kontekst jest ważny. W połowie 2025 roku branża AI karmiła się tabelami benchmarków, rankingami modeli i obietnicami produktywności. W tym tle krótka uwaga autorki książek o systemach uczących się była celowym zimnym prysznicem: liczba wygląda wiarygodnie, ale nie wie, że zmienił się kontekst.

Oryginalny wpis na [LinkedIn](https://www.linkedin.com/posts/chiphuyen_13-years-6-books-all-metrics-are-flawed-activity-7356343466827661314-oI84) potwierdza zarówno liczbę lat, jak i książek, a także dosłowne brzmienie cytatu. Nie potwierdza natomiast żadnej metodologii — to jednozdaniowa refleksja, nie instrukcja. Wersja v1 potraktowała ją jako gotową regułę („zapisz, czego metryka nie mierzy”) i dodała literacki detal o „dziewiątej metryce”, której w źródle nie ma. Ten dodatek znika.

Grill przynosi ważniejszą korektę. [Goodhart](https://www.fast.ai/posts/2019-09-24-metrics.html) sformułował prawo już w 1975 roku: gdy miara staje się celem, przestaje być dobrą miarą. Praca opublikowana w [National Library of Medicine](https://pmc.ncbi.nlm.nih.gov/articles/PMC9122957/) w 2022 roku idzie dalej — pokazuje, że metryki są zawsze przybliżeniem tego, czego naprawdę chcemy wiedzieć, dają się grać i faworyzują krótkoterminowe efekty. Ale ci sami autorzy nie wzywają do wyrzucenia liczb. Proponują zestaw metryk, audyt zewnętrzny, połączenie z opisem jakościowym i udział osób, których decyzje dotyczą.

Innymi słowy: v1 miało rację co do intuicji, ale za płytko. „Czego ta metryka nie mierzy?” to dobry pierwszy krok, nie cały proces.

Praktyczna procedura na dziś jest więc trójstopniowa. Po pierwsze, przy każdej metryce zapisz cel, który ma reprezentować, i dwa konkretne sposoby, w jakie da się ją oszukać. Po drugie, trzymaj parę sygnałów: jeden twardy, jeden opisowy — czas odpowiedzi obok notatki, czy użytkownik rzeczywiście skończył zadanie. Po trzecie, raz na kwartał sprawdź, czy poprawa liczby szła w parze z poprawą decyzji. Jeśli nie, masz nie metrykę, tylko rytuał.

Warto też uważać na produkty AI, bo one optymalizują polecenie bardzo dosłownie. Model zawsze coś policzy, nawet jeśli pytanie było źle postawione.

Autorzy badania z 2022 roku podają przykład YouTube: czas oglądania jako proxy zadowolenia wzmacniał treści spiskowe. To nie argument przeciwko liczbom, tylko przeciwko liczbom bez pytania, co naprawdę mierzą.

Warto dodać jeszcze jeden element z pracy opublikowanej w 2023 roku (PMC10591122): rozróżnia ona błędną specyfikację metryki od perwersyjnych efektów jej wdrożenia. To oznacza dwa osobne przeglądy. Pierwszy pyta, czy liczba w ogóle odpowiada na właściwe pytanie. Drugi sprawdza, czy po jej wdrożeniu ludzie zaczęli zachowywać się inaczej, niż zamierzano. W produktach AI ten drugi przegląd bywa pomijany, bo interfejs kusi nowymi wariantami pytania. Tymczasem to właśnie tam widać, czy zespół optymalizuje rozwiązanie problemu, czy tylko wygodny wskaźnik.


Błędność metryki nie jest wymówką, lecz początkiem audytu — trzymaj parę sygnałów i co kwartał sprawdzaj, czy poprawa liczby szła w parze z poprawą decyzji.
## Źródła i linki
1. [13 years. 6 books. — Chip Huyen](https://www.linkedin.com/posts/chiphuyen_13-years-6-books-all-metrics-are-flawed-activity-7356343466827661314-oI84) — LinkedIn, 2025-07-30.
2. [The problem with metrics is a big problem for AI](https://www.fast.ai/posts/2019-09-24-metrics.html) — fast.ai, 2019-09-24.
3. [Reliance on metrics is a fundamental challenge for AI](https://pmc.ncbi.nlm.nih.gov/articles/PMC9122957/) — National Library of Medicine, 2022-05-13.
4. [Building less-flawed metrics](https://pmc.ncbi.nlm.nih.gov/articles/PMC10591122/) — National Library of Medicine, 2023-10-13.
