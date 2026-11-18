# Refinico AI Daily

Statyczny blog w Astro 7 + Tailwind CSS 4. Układ, typografia i motyw wzorowane na szablonie
**Build Fast with AI**: ciepły kremowy motyw jasny, ciemny tryb, featuring, siatka 3 kolumn,
kolekcje, filtry kategorii z wyszukiwarką oraz strona wpisu z pływającym paskiem udostępniania.

## Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # wynik: dist/
npm run preview
```

## Dodawanie wpisu

Utwórz plik `src/content/blog/nazwa-wpisu.md` (małe litery, myślniki, bez polskich znaków):

```yaml
---
title: "Tytuł"
description: "Opis do karty i SEO"
pubDate: "2026-11-17"
updatedDate: "2026-11-18"  # opcjonalnie
tags: ["Analizy", "Modele AI", "RAG"]  # WYMAGANE; pierwszy tag = kategoria
draft: false
heroImage: "../../assets/cover-agents.png"  # opcjonalnie
---
```

Czas czytania jest liczony automatycznie z liczby słów. Okładki leżą w `src/assets/`.

## Struktura

```
src/
├─ assets/              # okładki wpisów i kolekcji (PNG)
├─ components/
│  ├─ Header, Footer, ThemeToggle
│  ├─ FeaturedPost, PostCard
│  ├─ PostExplorer, Pagination
│  └─ AllPostsView, BaseHead, FormattedDate
├─ content/blog/        # WPISY (.md / .mdx)
├─ layouts/
│  ├─ BaseLayout.astro  # nagłówek + stopka + motyw
│  └─ BlogPost.astro    # strona wpisu
├─ pages/
│  ├─ index.astro       # wyróżniony wpis, najnowsze, wszystkie, kolekcje
│  ├─ all/              # lista z filtrem, wyszukiwarką i paginacją
│  ├─ blog/             # alternatywny adres listy + strony wpisów
│  ├─ about, partnerships
│  └─ rss.xml.js
├─ styles/global.css    # tokeny motywu, fonty, typografia wpisu
└─ utils/posts.ts       # sortowanie, kategoria, czas czytania, paginacja
```

Motyw: `localStorage['blogs-theme']` (`light`/`dark`), domyślnie jasny. Tokeny kolorów i fonty
(Inter, Space Grotesk, Libre Baskerville) są zdefiniowane w `src/styles/global.css`.

## Deploy

Push na `main` lub merge PR-a do `main` odpala workflow
`.github/workflows/deploy-pages.yml`, który publikuje `dist/` na **https://refinico.github.io/**.

> Przed każdym `git push` uruchom `npm run build`.
