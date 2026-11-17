# CLAUDE.md — stałe instrukcje dla agenta (Claude Code)

Jesteś w głównym katalogu projektu **Refinico AI Daily** — statycznego bloga w Astro 7 + Tailwind CSS 4.
Treści są po polsku. Zmieniaj tylko to, czego dotyczy zlecenie; nie reformuluj całego projektu „przy okazji".

## 1. Gdzie są wpisy i jaki jest frontmatter

Wpisy leżą w **`src/content/blog/`** jako pliki `.md` lub `.mdx`. Schemat: `src/content.config.ts`.

Każdy wpis **musi** mieć następujący blok frontmatter (kolejność dowolna):

```yaml
---
title: "Tytuł wpisu"                 # string, WYMAGANY
description: "Krótki opis..."        # string, WYMAGANY (meta + karta wpisu)
pubDate: "2026-11-17"                # data, WYMAGANA (ISO `RRRR-MM-DD`; `coerce.date()`)
updatedDate: "2026-11-18"            # data, OPCJONALNA
tags: ["ai", "astro"]                # tablica stringów, WYMAGANA (może być pusta: [])
draft: false                         # boolean, OPCJONALNY, domyślnie false
heroImage: "../../assets/x.jpg"      # ścieżka do obrazka, OPCJONALNA
---
```

- `heroImage` to import obrazu względem pliku wpisu (np. `../../assets/moj-obrazek.jpg`); typ sprawdza schemat Astro.
- `draft: true` → wpis jest widoczny lokalnie (`npm run dev`), ale **nie trafia** do builda, listy, RSS ani mapy strony.
- Reszta pliku to Markdown/MDX. Styly treści (`.prose`) są już w `src/styles/global.css`.

## 2. Zasady nazywania plików

- Wyłącznie **małe litery**.
- **Myślniki** zamiast spacji: `nowy-wpis-o-ai.md`, nigdy `Nowy Wpis.o AI.md`.
- **Brak polskich znaków** (ą, ć, ę, ł, ń, ó, ś, ź, ż) w nazwie pliku — używaj odpowiedników ASCII.
- Rozszerzenie `.md` zwykły tekst, `.mdx` gdy potrzebujesz komponentów Astro w treści.
- Nazwa pliku staje się adresem URL: `/blog/<nazwa-pliku>/`.

## 3. Komendy

```bash
npm run dev       # lokalny podgląd: http://localhost:4321
npm run build     # produkcyjny build do katalogu dist/
npm run preview   # podgląd zbudowanej wersji
```

Publikacja — podstawowy sposób: **wypchnij commita na `main`**, Cloudflare Pages zrobi build i deploy
automatycznie (https://moj-blog-astro.pages.dev).

Ręcznie (fallback, wymaga `npx wrangler login` / `npx vercel login`):

```bash
npm run deploy:cloudflare   # npx wrangler pages deploy dist --project-name moj-blog-astro
npm run deploy:vercel       # npx vercel --prod
```

## 4. ZASADA BEZWZGLĘDNA — build przed każdym wypchnięciem

**Przed każdym `git push` uruchom `npm run build` i upewnij się, że nie ma błędów.**

```bash
npm run build && git add -A && git commit -m "Opis zmian" && git push
```

Jeśli build kończy się błędem — nie wypychaj. Napraw błąd i uruchom build ponownie. Dotyczy też zmian wyłącznie w treści (wpisy są walidowane przez schemat podczas builda).

## 5. Mapa projektu (kiedy co edytować)

- `src/pages/index.astro` — strona główna (hero + 3 najnowsze wpisy).
- `src/pages/blog/index.astro` — lista wpisów + filtrowanie po tagach (parameter `?tag=`).
- `src/pages/blog/[...slug].astro` — generowanie stron wpisów (używa `getPublishedPosts()`).
- `src/layouts/BaseLayout.astro` — wspólny szkielet HTML (nagłówek, stopka, kontener).
- `src/layouts/BlogPost.astro` — układ strony wpisu (tytuł, data, tagi, obrazek, treść).
- `src/components/` — `Header`, `Footer`, `ThemeToggle`, `PostCard`, `FormattedDate`, `BaseHead`, `HeaderLink`.
- `src/utils/posts.ts` — sortowanie wpisów, ukrywanie szkiców, zliczanie tagów.
- `src/styles/global.css` — Tailwind + motyw jasny/ciemny + typografia `.prose`.
- `src/consts.ts` — tytuł, opis i autor strony.
- `astro.config.mjs` — `site` (zmienna `SITE_URL`), MDX, sitemap, Tailwind.

Tryb ciemny: atrybut `data-theme="light|dark"` na `<html>`, wybór w `localStorage` (klucz `theme`), domyślnie `prefers-color-scheme`. Nie zmieniaj tej logiki bez wyraźnego zlecenia.

## 6. Repozytorium i hosting

- Repo GitHub: `moj-blog-astro` (klient `gh` jest zalogowany).
- Hosting: **Cloudflare Pages z automatycznym deployem z GitHuba**. Repo `refinico/moj-blog-astro`,
  gałąź produkcyjna `main`, build `npm run build`, output `dist`.
- Adres produkcyjny: **https://moj-blog-astro.pages.dev**. Zmienna `SITE_URL` jest ustawiona
  w projekcie Pages (RSS i sitemap używają jej do linków kanonicznych).
- Projekt Pages jest typu **Git-integrated** — nie zmieniaj go na Direct Upload (`wrangler pages
  deploy` bez Gita), bo stracisz automatyczne deploye przy pushu.
- `wrangler.toml` i `vercel.json` zostawiamy jako dokumentację/fallback. Nie używaj
  `npx wrangler deploy` (komenda Workers) — tylko `npx wrangler pages deploy ...`.
