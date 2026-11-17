---
title: "Witaj na blogu"
description: "Pierwszy wpis — krótki przewodnik po tym, co tu znajdziesz i jak powstają kolejne artykuły."
pubDate: "2026-11-17"
tags: ["astro", "blog", "początki"]
draft: false
---

Cześć! To pierwszy wpis na **Refinico AI Daily**. Blog powstał jako szybkie, statyczne miejsce na notatki o sztucznej inteligencji, programowaniu i narzędziach, których używam na co dzień.

## Czego się spodziewać

- krótkich, konkretnych artykułów zamiast długich wywodów,
- przykładów kodu i praktycznych wniosków,
- wpisów po polsku, z czytelnym formatowaniem.

## Jak dodawać wpisy

Nowy artykuł to po prostu plik `.md` (lub `.mdx`) w folderze `src/content/blog/`. Nazwa pliku powinna być pisana małymi literami, z myślnikami zamiast spacji i bez polskich znaków — na przykład `nowy-wpis-o-ai.md`.

Każdy plik zaczyna się od bloku frontmatter:

```yaml
---
title: "Tytuł wpisu"
description: "Krótki opis widoczny na liście i w wynikach wyszukiwania."
pubDate: "2026-11-17"
updatedDate: "2026-11-18" # opcjonalnie
tags: ["ai", "astro"]
draft: false # true = wpis nie trafia na produkcję
---
```

Reszta pliku to zwykły Markdown. Nagłówki, listy, cytaty i bloki kodu mają już przygotowane styly, więc nie trzeba nic dopisywać.

> Wpis z `draft: true` zobaczysz lokalnie podczas `npm run dev`, ale nie pojawi się po zbudowaniu wersji produkcyjnej.

Miłego czytania!
