# 💎 Synapse Engine — Pure Client AI Roleplay Engine

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)
![Tavern V2](https://img.shields.io/badge/Format-Tavern%20V2%20PNG%20%2F%20JSON-ff69b4.svg)
![Storage](https://img.shields.io/badge/Storage-IndexedDB%20Unlimited-cyan.svg)
![Platform](https://img.shields.io/badge/Platform-Web%20%2F%20Mobile%20%2F%20Desktop-orange.svg)

**A lightweight, zero-dependency, serverless interactive AI roleplay web engine.**  
*Double-click and play anywhere — PC, Mobile, Tablet.*

[English](#-english) | [한국어](#-한국어)

</div>

---

## 🇺🇸 English

### 🌟 Overview
**Synapse Engine** is a pure client-side, zero-server AI roleplay web application. Designed for writers, roleplayers, and creators, it provides an immersive novelistic reading and chatting experience with real-time inner thought separation, dynamic lorebook parsing, multi-provider LLM support, and unlimited local database storage.

### ✨ Key Features
1. **Single-File Zero-Install**:
   - Run instantly with `Synapse_Engine.html` or deploy the `tr/` web folder to GitHub Pages / static hosting.
2. **Multi-LLM & Real-time Model Fetching**:
   - Direct client REST connection to **Google Gemini** (Gemini 2.5 Flash, 3.1 Flash-Lite, 2.5 Pro), **OpenRouter** (Claude 3.5 Sonnet, DeepSeek V3/R1, Llama 3.3), **Anthropic Claude**, and **Custom / Ollama Local LLMs** (`http://localhost:11434/v1`).
   - Click `[Refresh List]` to fetch your available API models live.
3. **Novelistic Prose & `<thought>` Inner Thought Separation**:
   - The character's hidden thoughts are extracted into an elegant top header badge, while dialogue (`"..."`) and narrative actions (`*...*`) are rendered in rich novel format.
4. **SillyTavern V2 PNG / JSON Character Card Compatible**:
   - Drag and drop any SillyTavern V2 PNG image card or JSON character card. The browser automatically parses binary chunks (`tEXt`/`chara`) to extract avatar, scenario, persona, and greetings.
5. **Message Controls (Reroll / Edit / Delete / Resend)**:
   - `[🔄 Reroll]`: Re-generate the last AI response with one click.
   - `[✏️ Edit]`: Edit any dialogue or user prompt inline.
   - `[🗑️ Delete]`: Remove turns to steer the story.
   - `[↵ Resend]`: Fork the narrative branch from any past turn.
6. **Unlimited Client Storage (`IndexedDB`)**:
   - No 5MB limits. Stores hundreds of chat sessions and character cards permanently inside the browser database.
7. **Background Rolling Auto-Summary**:
   - Automatically summarizes past story arcs every 15 turns in the background, maintaining long-term memory without token bloat.
8. **Mobile-First UX**:
   - **Quick Symbol Bar**: One-touch `[ " Dialogue " ]`, `[ * Action * ]`, `[ ( Thought ) ]`, `[ ⌫ Clear ]` buttons above the keyboard.
   - **In-App Search**: Full-text chat search with real-time highlighting and jump navigation (`▲ / ▼`).
9. **Global 4-Language UI**:
   - One-click instant UI and AI prose switching between **English**, **日本語**, **中文**, and **한국어**.

### 🚀 Quick Start
1. **Live Web Demo or Download**:
   - 🌐 **[Launch Live Web Demo](https://lainholic.github.io/Synapse_Eegine/)** directly on your browser (Mobile / Tablet / PC).
   - Or download `Synapse_Engine.html` from Releases and double-click to open.
2. **Enter API Key**:
   - Open the left drawer menu (◀) ➔ **AI Model Settings** ➔ Enter your free [Google Gemini API Key](https://aistudio.google.com/app/apikey) or OpenRouter Key.
3. **Drop Card & Play**:
   - Drag & drop your SillyTavern V2 character card (`.png` / `.json`) and start roleplaying!

---

## 🇰🇷 한국어

### 🌟 개요
**Synapse Engine (시냅스 엔진)**은 외부 서버나 복잡한 설치 없이 브라우저에서 더블 클릭만으로 즉시 구동되는 **순수 클라이언트 AI 롤플레이 웹 엔진**입니다.

### ✨ 주요 특징
1. **단독 HTML 실행 & 서버비 0원**:
   - `Synapse_Engine.html` 파일 1개만으로 동작하며, 대화 데이터가 외부 서버에 남지 않고 기기 브라우저에 안전하게 보존됩니다.
2. **멀티 AI 연동 & 실시간 모델 갱신**:
   - **Google Gemini** (Gemini 2.5 Flash, 3.1 Flash Lite 등), **OpenRouter** (Claude 3.5 Sonnet, DeepSeek R1/V3, Llama 3.3 등), **Anthropic Claude**, **로컬 LLM (Ollama/LM Studio)** 지원.
   - `[목록 갱신]` 클릭 시 내 API 키로 사용 가능한 최신 모델 목록을 실시간 조회.
3. **소설형 지문/대사 & 속마음(`<thought>`) 실시간 분리**:
   - 캐릭터의 은밀한 속마음은 상단 전용 뷰어에, 행동 지문(`*...*`)과 대사(`"..."`)는 대화창에 깔끔하게 분리 렌더링.
4. **실리태번(SillyTavern V2) PNG/JSON 카드 완벽 호환**:
   - 외부 캐릭터 일러스트 PNG 이미지를 화면에 던지면 아바타, 성격, 시나리오, 첫인사를 즉시 자동 파싱.
5. **메시지 3대 조작 (리롤 / 수정 / 삭제 / 재전송)**:
   - `[🔄 리롤]`: AI 답변 즉시 다시 생성
   - `[✏️ 수정]`: 지문/대사 인라인 수정
   - `[🗑️ 삭제]`: 불필요한 턴 제거
   - `[↵ 재전송]`: 특정 과거 시점으로 돌아가 분기 시작
6. **IndexedDB 무제한 영구 스토리지**:
   - 5MB 용량 한계 해제, 수만 턴의 대화 기록을 기기에 안전하게 영구 보관.
7. **백그라운드 롤링 자동 요약**:
   - 대화 15턴마다 AI가 과거 사건을 3줄로 자동 압축 요약하여 장기 기억에 누적.
8. **모바일 2대 편의 기능**:
   - **퀵 심볼 바**: 키보드 바로 위 `[ "대사" ]`, `[ *지문* ]`, `[ (속마음) ]`, `[ ⌫ 지우기 ]` 원터치 삽입.
   - **대화 내 실시간 검색기**: 상단 `[🔍]` 버튼으로 지난 대화 단어 검색 및 자동 스크롤 점프.
9. **글로벌 4개국어 원클릭 전환**:
   - 상단 헤더에서 🇺🇸 영 / 🇯🇵 일 / 🇨🇳 중 / 🇰🇷 한 국기 버튼으로 UI와 AI 출력 언어 실시간 전환.

### 🚀 빠른 시작 가이드 (초간단 3단계)

1. **웹 접속 또는 단독 파일 실행**:
   - 🌐 **[무료 웹 버전 즉시 접속하기](https://lainholic.github.io/Synapse_Eegine/)** (스마트폰/태블릿/PC)
   - 또는 Releases에서 `Synapse_Engine.html`을 다운받아 더블 클릭하여 실행합니다.
2. **무료 API Key 입력**:
   - 좌측 서랍 메뉴(◀) 열기 ➔ **[AI 모델 설정]** 클릭.
   - [Google AI Studio](https://aistudio.google.com/app/apikey)에서 무료로 발급받은 Gemini API Key를 입력합니다. (키는 외부 서버로 전송되지 않고 내 기기 브라우저에만 안전 보관됩니다)
3. **캐릭터 카드 등록 & 롤플레이 시작**:
   - 화면으로 SillyTavern 규격 캐릭터 카드(`.png` 이미지 또는 `.json` 파일)를 드래그 앤 드롭합니다.
   - 하단 입력창에 지문(`*...*`)과 대사(`"..."`)를 입력하고 엔터를 누르면 즉시 롤플레이가 시작됩니다!

---

## 📁 File Structure (배포 폴더 구조)

```
tr/
├── index.html                   # 웹 런타임 메인 파일
├── style.css                    # 모바일 반응형 네온 다크 테마
├── dist/
│   ├── rp_engine.js             # RP 코어 엔진 (IndexedDB / 멀티LLM / 로어북 / 자동요약)
│   └── ui_controller.js         # UI 컨트롤러 (다국어 / 검색기 / 퀵툴바 / 리롤)
├── Synapse_Engine.html          # [추천] 파일 1개로 어디서든 즉시 실행되는 올인원 단독 배포판
├── README.md                    # 공식 설명서
└── LICENSE                      # MIT 라이선스
```

---

## ⚠️ Precautions & Disclaimer (주의사항 및 면책)

1. **시크릿 모드(InPrivate) 이용 주의**: 시크릿 창 종료 시 브라우저 IndexedDB가 즉시 삭제됩니다. 반드시 일반 창에서 이용해 주세요.
2. **주기적 대화 백업 권장**: 브라우저 캐시 삭제 시 데이터가 유실될 수 있으므로 좌측 메뉴의 **[대화 백업(JSON)]**으로 파일을 정기 보관하세요.
3. **콘텐츠 중립성 및 책임**: 본 소프트웨어는 0% 순수 중립 컨테이너이며 어떠한 성인물/서사도 번들되어 있지 않습니다. 외부 카드 및 LLM 생성물의 법적 책임은 이용자에게 있습니다.

---

## 📜 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
