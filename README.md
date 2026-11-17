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
- gotowe konfiguracje wdrożenia: Cloudflare Pages i Vercel.

## Deploy

Ustaw `SITE_URL` na docelowy adres, a następnie:

```bash
npm run deploy:cloudflare   # wymaga logowania: npx wrangler login
npm run deploy:vercel       # wymaga logowania: npx vercel login
```

Albo podłącz repozytorium `moj-blog-astro` do Cloudflare Pages / Vercel przez panel — build command `npm run build`, katalog wyjściowy `dist`.

> Przed każdym `git push` uruchom `npm run build`.
