---
title: "RAG i bazy wektorowe w praktyce"
description: "Jak zbudować wyszukiwanie semantyczne nad własnymi dokumentami i nie zgubić jakości odpowiedzi."
pubDate: "2026-10-30"
tags: ["Poradniki", "RAG", "Kodowanie"]
draft: false
heroImage: "../../assets/cover-rag.png"
---

RAG działa najlepiej wtedy, gdy proces indeksowania jest tak samo ważny jak generowanie odpowiedzi.

## Podział na chunki

Zbyt długie fragmenty rozmywają sens, zbyt krótkie tracą kontekst. W praktyce warto zacząć od 500–800 tokenów z niewielkim nakładaniem i zmierzyć wyniki na własnym zbiorze zapytań.

## Metadane są kluczowe

Dodaj do każdego fragmentu źródło, datę i sekcję. Pozwala to filtrować wyniki i wyświetlać użytkownikowi wiarygodne cytowania.

```ts
const results = await index.query({
  vector: embedding,
  topK: 5,
  filter: { source: 'docs' },
});
```

## Podsumowanie

Dobre RAG to połączenie czystych danych, rozsądnego chunkowania i jawnego cytowania źródeł — nie tylko wybór bazy wektorowej.
