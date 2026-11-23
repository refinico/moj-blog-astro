---
title: "Wkleiłeś kod od AI. Kto odpowiada za protokół Flight?"
description: "Jeden spreparowany request HTTP, CVSS 10.0, bez hasła, tokena i interakcji użytkownika — pełna kontrola nad serwerem [1]."
pubDate: "2026-07-21"
tags: ["AI", "Bezpieczeństwo", "React", "Kod", "CVE"]
draft: false
sourceDraftId: "55a75a3d-abb2-4cbd-bf16-57d7a03abcda"
heroImage: "../../assets/55a75a3d-abb2-4cbd-bf16-57d7a03abcda.jpg"
---

## Czego się dowiesz

- CVE-2025-55182: CVSS 10.0, jeden request, pełna kontrola serwera
- Dotyczy React 19.0–19.2.0 i trzech pakietów react-server-dom
- CISA wpisała lukę do katalogu 5 grudnia 2025
- EtherRAT z prawdopodobnym powiązaniem z aktorami północnokoreańskimi
- Pierwsze łatki to za mało — zalecane 19.2.2 lub 19.2.3

Jeden spreparowany request HTTP, CVSS 10.0, bez hasła, tokena i interakcji użytkownika — pełna kontrola nad serwerem [1].

3 grudnia 2025 roku zespół Reactu ujawnił CVE-2025-55182, czyli React2Shell. Luka siedziała w deserializacji protokołu Flight, który React Server Components wysyłają między klientem a serwerem. Dotyczyła wersji 19.0, 19.1.0, 19.1.1 i 19.2.0 pakietów react-server-dom-webpack, -parcel i -turbopack [1]. Co ważne, aplikacja nie musiała mieć własnych endpointów Server Functions: samą podatność dawało już wsparcie dla RSC [1].

5 grudnia CISA wpisała lukę do katalogu znanych i wykorzystywanych podatności [2]. W kilka dni po ujawnieniu pojawiły się kampanie z koparkami i backdoorami. Sysdig opisał implant EtherRAT z prawdopodobnym powiązaniem z aktorami północnokoreańskimi: komunikacja przez inteligentne kontrakty Ethereum, pięć mechanizmów utrzymania dostępu i pobieranie własnego runtime'u Node.js z oficjalnej dystrybucji [3].

Warto powiedzieć to wprost: luki nie stworzył model językowy. Stworzył ją kod deserializujący niezaufane dane, a wklejanie snippetów tylko skraca drogę do podatnej wersji. Microsoft odnotował setki skompromitowanych maszyn i wyjaśnił mechanizm: domyślna konfiguracja była podatna, a publiczne dowody koncepcji działały z niemal stuprocentową niezawodnością [5].

Dlaczego wracać do tego w lipcu 2026? Bo modele językowe od miesięcy podsuwały gotowe snippet-y oparte na React Server Components i robiły to z taką pewnością, że wklejamy bez mrugnięcia okiem. W raporcie wygląda to świetnie: więcej kodu, szybszy deploy. Nikt nie pyta, co dzieje się w momencie, gdy komponent wchodzi w interakcję z serwerem.

Tu jest jednak korekta, której wcześniejsza wersja tekstu nie zawierała. Wskaźnik 19.0.1, 19.1.2 i 19.2.1 był poprawną listą łatek dla samego CVE-2025-55182 [1]. Później ujawniono jednak kolejne luki: CVE-2025-55183 (wyciek kodu źródłowego) oraz CVE-2025-55184 i CVE-2025-67779 (ataki denial of service). Google i Microsoft rekomendują już wersje co najmniej 19.2.2, a w przypadku DoS — 19.2.3 [4][5]. Zatrzymanie się na pierwszej łatce nie wystarczy.

Praktyczna lista jest więc krótka, ale surowa. Sprawdź wersje trzech pakietów i zaktualizuj je do najnowszej łatki w swoim minorze. Zaktualizuj też frameworki zależne: Next.js, React Router, Waku, pluginy Vite i Parcel. Nie zakładaj, że jesteś bezpieczny, bo nie pisałeś endpointów. W samych Server Actions waliduj wejście schematem na samym początku, zanim pojawi się jakikolwiek log [6]. Po aktualizacji przebuduj i wdroż aplikację na nowo — samą zmianę w pliku zależności łatwo pominąć.

Wklejanie kodu z modelu to nowy obowiązek sprawdzania, co naprawdę leci po drucie. Odpowiedzialność zostaje po naszej stronie.


Wklejanie kodu z modelu to nowy obowiązek sprawdzania wersji i tego, co naprawdę leci po drucie.
## Źródła i linki
1. [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components) — The React Team, 2025-12-03.
2. [CISA Adds One Known Exploited Vulnerability to Catalog](https://www.cisa.gov/news-events/alerts/2025/12/05/cisa-adds-one-known-exploited-vulnerability-catalog) — CISA, 2025-12-05.
3. [EtherRAT: DPRK uses novel Ethereum implant in React2Shell attacks](https://www.sysdig.com/blog/etherrat-dprk-uses-novel-ethereum-implant-in-react2shell-attacks) — Sysdig, 2025-12-08.
4. [Multiple Threat Actors Exploit React2Shell](https://cloud.google.com/blog/topics/threat-intelligence/threat-actors-exploit-react2shell-cve-2025-55182) — Google Cloud, 2025-12-12.
5. [Defending against CVE-2025-55182](https://www.microsoft.com/en-us/security/blog/2025/12/15/defending-against-the-cve-2025-55182-react2shell-vulnerability-in-react-server-components/) — Microsoft Security, 2025-12-15.
6. [Weaponizing And Defending The React Flight Protocol](https://www.smashingmagazine.com/2026/07/weaponizing-defending-react-flight-protocol/) — Smashing Magazine, 2026-07-21.
