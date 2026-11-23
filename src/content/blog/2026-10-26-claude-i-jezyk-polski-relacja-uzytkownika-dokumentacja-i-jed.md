---
title: "Claude i język polski: relacja użytkownika, dokumentacja i jedna ważna różnica"
description: "We wrześniu 2026 roku Claude miał zacząć rozumieć polecenia głosowe po polsku."
pubDate: "2026-10-26"
tags: ["AI", "Claude", "JęzykPolski", "Dokumentacja", "Produktywność"]
draft: false
sourceDraftId: "6d833d64-1c92-473d-8eb1-a93cd4b2b701"
heroImage: "../../assets/6d833d64-1c92-473d-8eb1-a93cd4b2b701.jpg"
---

## Czego się dowiesz

- Polskiego nie ma na oficjalnej liście języków trybu głosowego
- Jedynym oficjalnym miejscem jest dyktowanie w Claude Code z kodem pl
- Interfejs, język mówiony i język odpowiedzi to trzy ustawienia
- Transkrypcja dyktowania idzie na serwery Anthropic
- Rozmowa głosowa pozwala dopytać, dyktowanie kończy się poleceniem

We wrześniu 2026 roku Claude miał zacząć rozumieć polecenia głosowe po polsku. Autor relacji z 26 października pisze, że początkowo odpowiadał z komicznym amerykańskim akcentem, który później prawie zniknął.

Wpis na [Rewolucji AI](https://rewolucjaai.com/2026/10/26/claude-sekretarz-glosowy-po-polsku/) opowiada o powrocie do starych, dobrych nawyków: Kalendarz, listy zadań i dyktowanie, gdy ręce są zajęte. Autor kilka miesięcy wcześniej zbudował własne narzędzie do mówienia do Claude'a po polsku, bo funkcji nie było. Gdy pojawiła się w produkcie, dodatek zniknął z jego dnia. To świetna ilustracja tego, jak wygląda prawdziwe wdrożenie: nie „dodaliśmy głosu”, tylko zniknął irytujący krok.

Weryfikacja potwierdziła część opisu technicznego. [Centrum pomocy Claude](https://support.claude.com/en/articles/11101966-use-voice-mode) opisuje tryb głosowy jako funkcję beta dostępną na telefonie, komputerze i w przeglądarce oraz wyraźnie rozdziela język interfejsu od języka mówionego. [Aktualizacja z lipca 2026](https://claude.com/resources/articles/think-through-hard-problems-in-voice-mode) wymienia jedenaście języków trybu głosowego — angielski, francuski, niemiecki, hindi, indonezyjski, włoski, japoński, koreański, portugalski brazylijski i dwie odmiany hiszpańskiego. Polskiego na tej liście nie ma.

Pierwsza korekta jest więc zasadnicza. Wersja v1 przedstawiła „Claude zaczął słuchać po polsku” jako fakt potwierdzony. Tymczasem [zestawienie z 6 listopada 2026](https://instytut.ai/claude-po-polsku/) wskazuje, że polskiego nie ma w oficjalnych listach trybu głosowego ani dyktowania w aplikacji mobilnej. Jedynym miejscem, gdzie polski jest oficjalnie wymieniony, jest [dyktowanie w Claude Code](https://code.claude.com/docs/en/voice-dictation) z kodem `pl`. Odpowiednio należy pisać: „autor relacjonuje, że działa to w jego przypadku; producent nie potwierdził tego w dokumentacji trybu głosowego”.

Druga korekta dotyczy zdania „Anthropic nic nie ogłosił”. To, że autor nie znalazł informacji w dokumentacji, nie jest dowodem braku komunikatu. Bezpieczniej powiedzieć, że publiczna dokumentacja nie potwierdza tej zmiany.

Grill dotyczy rozdzielenia dwóch doświadczeń. Na komputerze autor chce dyktować, nie rozmawiać — mówi zdanie, które ma zostać wykonane. W telefonie tryb głosowy oznacza rozmowę z odpowiedzią na głos. [Dokumentacja dyktowania Claude Code](https://code.claude.com/docs/en/voice-dictation) dodaje szczegół techniczny: transkrypcja odbywa się na serwerach Anthropic, wymaga konta claude.ai i lokalnego mikrofonu, a język ustawia się osobno od języka odpowiedzi. To trzy różne produkty pod jednym hasłem „głos".

Warto dodać jedną praktyczną różnicę: w trybie głosowym na telefonie można dopytać i wrócić do wątku, natomiast dyktowanie na komputerze kończy się na jednym poleceniu. To dwa różne modele interakcji i dwa różne sposoby oceny, czy funkcja działa.

Praktyczny wniosek jest dość pragmatyczny. Zanim wpiszesz nową funkcję do planu, sprawdź ją na żywo i sprawdź dokumentację — zwłaszcza listę obsługiwanych języków. Jeśli zespół pracuje po polsku, najpewniej obsługiwane jest dyktowanie w Claude Code, nie tryb rozmowy głosowej. Różnica ma znaczenie przy wyborze kanału, szkoleniu użytkowników i obietnicach składanych klientowi.


Sprawdź dokumentację obsługiwanych języków, zanim obiecasz zespołowi rozmowę głosową po polsku.
## Źródła i linki
1. [Claude w końcu stał się sekretarzem głosowym po polsku](https://rewolucjaai.com/2026/10/26/claude-sekretarz-glosowy-po-polsku/) — Rewolucja AI, 2026-10-26.
2. [Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode) — Claude Help Center, 2026.
3. [Think through hard problems in voice mode](https://claude.com/resources/articles/think-through-hard-problems-in-voice-mode) — Claude / Anthropic, 2026-07-23.
4. [Claude po polsku: co działa, czego brakuje i jak obejść](https://instytut.ai/claude-po-polsku/) — Instytut AI, 2026-11-06.
5. [Voice dictation](https://code.claude.com/docs/en/voice-dictation) — Claude Code Docs, 2026.
