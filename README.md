# Refinico AI Daily

Szybki, statyczny blog oparty na [Astro](https://astro.build/) 7 i Tailwind CSS 4. Treści po polsku, zero JavaScriptu po stronie treści (poza drobnym filtrem tagów i przełącznikiem motywu).

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
description: "Opis do listy i SEO"
pubDate: "2026-11-17"
updatedDate: "2026-11-18"  # opcjonalnie
tags: ["ai", "astro"]
draft: false
---
```

`draft: true` ukrywa wpis na produkcji. Szczegóły w [`CLAUDE.md`](./CLAUDE.md).

## Funkcje

- Content Collections (`.md` i `.mdx`) ze schematem walidowanym przy buildzie,
- filtrowanie po tagach z zachowaniem wyboru w URL (`/blog/?tag=astro`),
- motyw jasny/ciemny z zapisem w `localStorage`,
- RSS (`/rss.xml`), mapa strony (`/sitemap-index.xml`), metadata Open Graph,
- automatyczny deploy na GitHub Pages przez GitHub Actions.

## Deploy (GitHub Pages + GitHub Actions)

Jedyny cel wdrożenia: **https://refinico.github.io/**

Workflow `.github/workflows/deploy-pages.yml` uruchamia się gdy:

- commit trafia bezpośrednio na `main`,
- **pull request do `main` zostanie zmerge'owany i zamknięty** (PR-y zamknięte bez merge'a są ignorowane),
- uruchomisz go ręcznie (`workflow_dispatch`).

Workflow robi `npm ci` → `npm run build` i publikuje `dist/` do repo
`refinico/refinico.github.io` (gałąź `gh-pages`). Używa sekretu `PAGES_DEPLOY_KEY`
(deploy key z dostępem zapisu) oraz `SITE_URL=https://refinico.github.io` dla linków kanonicznych.
Repo `refinico.github.io` zawiera tylko wygenerowane pliki — nie edytuj go ręcznie.

> Przed każdym `git push` uruchom `npm run build`.
