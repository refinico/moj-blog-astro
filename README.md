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
`.github/workflows/deploy-pages.yml`, który publikuje `dist/` do repozytorium `refinico/refinico.github.io` (gałąź `gh-pages`). Treść jest serwowana pod kanoniczną domeną **https://agentpmo.pl/** — `refinico.github.io` automatycznie przekierowuje na nią. Plik CNAME dodaje opcja `cname` w kroku publikacji — bez niej każdy deploy odpinałby domenę.

> Przed każdym `git push` uruchom `npm run build`.

### Domena i indeksowanie

- `public/CNAME` utrzymuje domenę w gałęzi `gh-pages` mimo `keep_files: false` w workflow.
- `public/robots.txt` wskazuje na `https://agentpmo.pl/sitemap-index.xml`.
- `SITE_URL` w workflow i domyślny `site` w `astro.config.mjs` muszą wskazywać na
  `https://agentpmo.pl` — dzięki temu canonicale, sitemap i RSS są spójne z domeną.
- `www.agentpmo.pl` wymaga rekordu CNAME u operatora DNS (`www` → `refinico.github.io`)
  oraz wpisania `www.agentpmo.pl` w ustawieniach *Custom domain* GitHub Pages. Wtedy GitHub
  przekieruje `www` na domenę główną.
- Po deployu dodaj własność w [Google Search Console](https://search.google.com/search-console)
  i wyślij `https://agentpmo.pl/sitemap-index.xml` (Inspekcja adresu URL → Poproś o indeksowanie).
  Nowa domena potrzebuje zwykle kilku dni na pierwsze indeksowanie.

### Analytics — GTM / Google Analytics 4

`src/components/BaseHead.astro` ładuje skrypt tylko na produkcji i tylko wtedy, gdy build
otrzyma jedną ze zmiennych. **GTM ma priorytet** — gdy jest ustawiony `PUBLIC_GTM_ID`,
bezpośredni `gtag.js` nie jest ładowany, więc zdarzenia nie podwajają się. Tag GA4 powinien
być skonfigurowany wewnątrz kontenera GTM.

Lokalnie:

```bash
cp .env.example .env
# uzupełnij: PUBLIC_GTM_ID=GTM-XXXXXXX  (albo PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX)
npm run build
```

Na GitHubie: *Settings → Secrets and variables → Actions → Variables* → dodaj `PUBLIC_GTM_ID`
z wartością `GTM-...` (lub `PUBLIC_GA_MEASUREMENT_ID` z `G-...`, jeśli nie używasz GTM).
Wdrożenie GA w UE wymaga mechanizmu zgody (RODO/e-prywatność) — tracker nie powinien zbierać
danych przed uzyskaniem zgody.

## Bezpieczeństwo / npm audit

`npm run audit` działa jak `npm audit`, ale respektuje **datowane wyjątki** z listy `ACCEPTED`
w `scripts/audit.mjs`. Po dacie `until` wyjątek przestaje działać i skrypt zaczyna zgłaszać
błąd — wtedy trzeba podjąć decyzję: usunąć wyjątek (gdy upstream wyda fix) albo świadomie
przedłużyć datę.

Aktualny wyjątek:

| Advisory | Pakiet | Ważne do | Powód |
|---|---|---|---|
| [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) (CVE-2026-112366) | `picomatch` ≤ 4.0.7 (+10 pakietów pośrednich w łańcuchu Astro) | 2026-12-31 | Brak łatanej wersji na npm (fix: [micromatch/picomatch#194](https://github.com/micromatch/picomatch/pull/194), wciąż niemerged). ReDoS na wzorcach glob — zależność wyłącznie build-time; blog nie przepuszcza przez nią danych od atakującego, więc podatność jest tu nieeksploatowalna. |

Gdy pojawi się łatana wersja `picomatch`: usuń wpis z `ACCEPTED` i uruchom `npm update picomatch`
(ewentualnie dodaj `overrides` w `package.json`, jeśli łańcuch Astro nie podniesie wersji sam).

