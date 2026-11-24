# CLAUDE.md — stałe instrukcje dla agenta (Claude Code)

Jesteś w katalogu projektu **Refinico AI Daily** — statycznego bloga Astro 7 + Tailwind CSS 4.
Wygląd, układ i typografia są wzorowane na szablonie Build Fast with AI. Treści są po polsku.
Zmieniaj tylko to, czego dotyczy zlecenie.

## 1. Wpisy i frontmatter

Wpisy: **`src/content/blog/`**, pliki `.md` lub `.mdx`. Schemat: `src/content.config.ts`.

Wymagany blok frontmatter:

```yaml
---
title: "Tytuł wpisu"                 # WYMAGANY string
description: "Opis do karty i SEO"    # WYMAGANY string
pubDate: "2026-11-17"                # WYMAGANA data ISO
updatedDate: "2026-11-18"            # opcjonalna data
tags: ["Analizy", "Modele AI"]       # WYMAGANA tablica stringów
draft: false                         # opcjonalny boolean, domyślnie false
heroImage: "../../assets/cover.png"  # opcjonalny obrazek
---
```

**Pierwszy tag to kategoria wpisu** — wyświetla się na karcie, w filtrach `/all` i w nagłówku wpisu.
`draft: true` → wpis widoczny lokalnie, pomijany na produkcji, w RSS i mapie strony.
Czas czytania liczy `getReadingTime()` z `src/utils/posts.ts` (słowa / 200).

Nazwy plików: małe litery, myślniki zamiast spacji, bez polskich znaków. Plik staje się adresem
`/blog/<nazwa-pliku>/`.

## 2. Komendy

```bash
npm run dev       # http://localhost:4321
npm run build     # dist/
npm run preview
npm run audit     # audyt zależności z datowanymi wyjątkami (scripts/audit.mjs)
```

`npm run audit` pomija podatności z listy `ACCEPTED` w `scripts/audit.mjs` do daty `until`.
Obecnie akceptujemy ReDoS w picomatch (CVE-2026-112366, brak łatanej wersji upstream; zależność
tylko build-time) — szczegóły w README, sekcja „Bezpieczeństwo / npm audit". Nie usuwaj wyjątku
bez sprawdzenia, czy picomatch wydał łatana wersję. Surowy `npm audit` nadal pokaże 11 zgłoszeń —
to oczekiwane.

Publikacja: push na `main` albo merge PR-a do `main` → GitHub Actions
(`.github/workflows/deploy-pages.yml`) → https://agentpmo.pl/

## 3. ZASADA BEZWZGLĘDNA — build przed każdym pchnięciem

**Przed każdym `git push` uruchom `npm run build` i upewnij się, że nie ma błędów.**

```bash
npm run build && git add -A && git commit -m "Opis zmian" && git push
```

Błąd buildu = nie wypychaj. Schemat waliduje wpisy podczas builda.

## 4. Mapa projektu

- `src/pages/index.astro` — strona główna: wyróżniony wpis, 3 najnowsze, 9 wpisów, kolekcje.
- `src/pages/all/` — lista z filtrem kategorii, wyszukiwarką i paginacją (9 na stronę).
- `src/pages/blog/` — alternatywna lista + strony wpisów (`[...slug].astro`).
- `src/pages/about.astro`, `src/pages/partnerships.astro` — strony statyczne.
- `src/layouts/BaseLayout.astro` — wspólny szkielet (`Header`, `Footer`, motyw).
- `src/layouts/BlogPost.astro` — strona wpisu: kategorie, meta, udostępnianie, prose, „Może Ci się spodobać".
- `src/components/` — `Header`, `Footer`, `ThemeToggle`, `FeaturedPost`, `PostCard`,
  `PostExplorer`, `Pagination`, `AllPostsView`, `BaseHead`, `FormattedDate`.
- `src/styles/global.css` — tokeny kolorów, fonty (Inter / Space Grotesk / Libre Baskerville),
  przyciski, typografia `.article-prose`.
- `src/utils/posts.ts` — sortowanie, szkice, kategoria, czas czytania, paginacja.
- `src/consts.ts` — tytuł i opis strony.

Motyw: klasa `light`/`dark` na `<html>`, klucz `localStorage['blogs-theme']`, domyślnie jasny.
Nie zmieniaj logiki motywu bez wyraźnego zlecenia.

## 5. Repozytorium i hosting

- Repo źródłowe: `refinico/moj-blog-astro`, gałąź produkcyjna `main`.
- Hosting: **wyłącznie GitHub Pages** — https://agentpmo.pl/ (własna domena repo
  `refinico.github.io`; adres https://refinico.github.io/ przekierowuje na domenę).
- Repo `refinico.github.io` zawiera tylko wygenerowane pliki (gałąź `gh-pages`) — nie edytuj ręcznie.
- Domena: DNS w home.pl, rekordy A na adresy GitHub Pages. Plik CNAME tworzy opcja
  `cname: agentpmo.pl` w kroku publikacji workflow — nie usuwaj jej: przy `keep_files: false`
  deploy skasowałby CNAME i GitHub Pages odpiąłby domenę.
- Cloudflare Pages i Vercel usunięte — nie przywracaj bez zlecenia.
