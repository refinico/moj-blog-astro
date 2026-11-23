---
title: "Rok RLVR i GRPO — oraz dlaczego wyniki na benchmarkach przestały wystarczać"
description: "Styczniowy DeepSeek R1 z 2025 roku pokazał, że zachowania „myślące\" da się wytworzyć reinforcement learningiem."
pubDate: "2025-12-30"
tags: ["AI", "LLM", "RLVR", "Benchmarki", "Badania"]
draft: false
sourceDraftId: "ddf1db10-824a-44e9-9246-957cdadb25b8"
heroImage: "../../assets/ddf1db10-824a-44e9-9246-957cdadb25b8.jpg"
---

## Czego się dowiesz

- 2025: RLVR i GRPO po RLHF, LoRA i mid-trainingu
- DeepSeek R1 pokazał reasoning z reinforcement learningu
- Inference-time scaling: droższa odpowiedź bez nowej architektury
- Audyty: ponad 45% nakładania testów na dane treningowe
- Llama 4 wysłała 27 prywatnych wariantów do Chatbot Arena

Styczniowy DeepSeek R1 z 2025 roku pokazał, że zachowania „myślące" da się wytworzyć reinforcement learningiem. Po nim każdy znaczący gracz wypuścił wersję reasoningową — rok 2025 zapisał się jako era RLVR i GRPO.

Tak podsumował miniony rok Sebastian Raschka w raporcie [The State of LLMs 2025](https://magazine.sebastianraschka.com/p/state-of-llms-2025), opublikowanym 30 grudnia 2025 roku. Jego skrót ewolucji jest wymowny: 2022 RLHF + PPO, 2023 LoRA SFT, 2024 mid-training, 2025 RLVR + GRPO. Obok tego rosło inference-time scaling — wydanie więcej czasu i środków w momencie odpowiedzi. DeepSeekMath-V2 osiągnął dzięki temu poziom złotego medalu na konkursie matematycznym. Modele coraz częściej sięgały też po narzędzia, co ograniczało halucynacje.

Część tez wytrzymała sprawdzian. Raport potwierdza, że architektury open-weight zbiegły się w okolicach mixture-of-experts oraz zmodyfikowanego mechanizmu uwagi, że Qwen wyprzedził Llama pod względem popularności, a MCP dołączył do Linux Foundation. To fakty sprawdzalne w dokumentacji modeli i komunikatach projektów, nie tylko w jednym eseju.

Słabsza jest druga połowa opowieści — ta o postępie mierzonym wynikami. W [pozycji na NeurIPS 2025](https://proceedings.neurips.cc/paper_files/paper/2025/file/693e00827fd44bdfca210801fe1e6439-Paper-Position_Paper_Track.pdf) zwraca się uwagę, że publiczne zbiory testowe trafiają do danych treningowych: audyty znajdują ponad 45-procentowe nakładanie się na benchmarki QA, a GPT-4 potrafi odtworzyć zakryte odpowiedzi MMLU w 57 procentach przypadków. [Analiza „Line Goes Up?"](https://arxiv.org/abs/2502.14318) nazywa rzecz po imieniu: gdy miara staje się celem, przestaje być miarą. Z kolei [audyt trzech benchmarków reasoningowych](https://arxiv.org/abs/2506.23864) pokazał, że wyniki zmieniają się przy drobnych zmianach brzmienia polecenia — rośnie dopasowanie do formatu, nie jakość rozumowania.

To właśnie wyjaśnia zjawisko „benchmaxxing", które Raschka opisał na przykładzie Llama 4. [Przegląd EMNLP](https://aclanthology.org/2025.emnlp-main.1208.pdf) dodaje konkret: zespół Llama 4 wysłał do Chatbot Arena 27 prywatnych wariantów modelu, co sztucznie podniosło wynik publicznej wersji. Wniosek v1, że rosnące liczby w rankingach dowodzą rosnącej jakości, wymaga więc korekty: wynik powyżej progu mówi, że model nie jest zły, ale nie mówi, który z dwóch dobrych jest lepszy.

Praktyka: traktuj benchmarki jako sito, nie jako listę rankingową. Zbuduj własny zestaw 30 zadań z rzeczywistych procesów i porównuj modele na nim, mierząc jednocześnie opóźnienie i koszt. Tam, gdzie liczy się trafność, rozważ inference-time scaling zamiast zmiany modelu — ale policz, ile to kosztuje.

Warto odnotować, że sam Raschka nie odrzuca benchmarków — traktuje je jako progi, które trzeba przekroczyć, a nie jako ranking. To rozsądne stanowisko: niski wynik dyskwalifikuje model, wysoki nie przesądza o jego przydatności. W praktyce oznacza to, że zamiast śledzić tabelkę liderów, lepiej zbudować własny zestaw zadań i mierzyć go co kilka tygodni. Różnice rzędu kilku punktów w rankingach mieszczą się w szumie metodologii.


Używaj benchmarków jako progu dyskwalifikującego, nie rankingu — wysoki wynik nie mówi, który z dwóch dobrych modeli jest lepszy.
## Źródła i linki
1. [The State Of LLMs 2025: Progress, Problems, and Predictions](https://magazine.sebastianraschka.com/p/state-of-llms-2025) — Sebastian Raschka, 2025-12-30.
2. [Position: Benchmarking is Broken — Don't Let AI be its Own Judge](https://proceedings.neurips.cc/paper_files/paper/2025/file/693e00827fd44bdfca210801fe1e6439-Paper-Position_Paper_Track.pdf) — NeurIPS 2025.
3. [Line Goes Up? Inherent Limitations of Benchmarks for Evaluating Large Language Models](https://arxiv.org/abs/2502.14318) — arXiv, 2025-02-20.
4. [Garbage In, Reasoning Out? Why Benchmark Scores are Unreliable](https://arxiv.org/abs/2506.23864) — arXiv, 2025-06-30.
5. [In Benchmarks We Trust ... Or Not?](https://aclanthology.org/2025.emnlp-main.1208.pdf) — EMNLP, 2025.
