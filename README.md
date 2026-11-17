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

## Deploy (automatyczny)

Produkcja działa na **Cloudflare Pages** i jest podłączona do GitHuba
(`refinico/moj-blog-astro`, gałąź `main`). Wypchnięcie commita na `main` automatycznie
buduje i publikuje stronę pod adresem **https://moj-blog-astro.pages.dev**.

Konfiguracja projektu Pages (ustawiona raz przez API Cloudflare):

- **Source:** GitHub `refinico/moj-blog-astro`
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Zmienna `SITE_URL`:** `https://moj-blog-astro.pages.dev` (używana przez RSS i sitemap)

Deploy ręczny (fallback, wymaga `npx wrangler login`):

```bash
npm run deploy:cloudflare   # build + wrangler pages deploy
npm run deploy:vercel       # alternatywa: Vercel
```

> Uwaga: nie używaj `npx wrangler deploy` — to komenda Workers, nie Pages.
> Przed każdym pushem uruchom `npm run build`.

> Przed każdym `git push` uruchom `npm run build`.
