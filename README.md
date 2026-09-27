# 💎 Synapse Engine — Pure Client AI Roleplay Engine

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)
![Platform](https://img.shields.io/badge/Platform-Mobile%20%2F%20Tablet%20%2F%20PC-orange.svg)
![Tavern V2](https://img.shields.io/badge/Format-Tavern%20V2%20PNG%20%2F%20JSON-ff69b4.svg)
![Storage](https://img.shields.io/badge/Storage-IndexedDB%20Unlimited-cyan.svg)

**스마트폰(모바일) · 태블릿 · PC 어디서든 설치 없이 웹 브라우저로 바로 즐기는 AI 롤플레이 엔진**  
*A lightweight, serverless interactive AI roleplay web engine tailored for Mobile, Tablet, and Desktop.*

[English](#-english) | [한국어](#-한국어)

</div>

---

## 🇺🇸 English

### 🌟 Overview
**Synapse Engine** is a mobile-first, zero-server AI roleplay web application. Designed for writers, roleplayers, and creators, it provides an immersive novelistic reading and chatting experience directly on your **Smartphones (iPhone / Android), Tablets (iPad / Galaxy Tab), and PC browsers** without installing any software.

### ✨ Key Features
1. **📱 100% Mobile & PC Responsive (Zero-Install)**:
   - Touch-optimized responsive neon UI tailored for mobile Safari, Chrome, and Samsung Internet.
   - Run instantly with `Synapse_Engine.html` or launch online via GitHub Pages.
2. **⌨️ Mobile Quick Symbol Toolbar**:
   - One-touch `[ " Dialogue " ]`, `[ * Action * ]`, `[ ( Thought ) ]`, `[ ⌫ Clear ]` buttons docked above the virtual keyboard for lightning-fast mobile typing.
3. **Multi-LLM & Real-time Model Fetching**:
   - Direct client REST connection to **Google Gemini** (Gemini 2.5 Flash, 3.1 Flash-Lite, 2.5 Pro), **OpenRouter** (Claude 3.5 Sonnet, DeepSeek V3/R1, Llama 3.3), **Anthropic Claude**, and **Custom / Ollama Local LLMs** (`http://localhost:11434/v1`).
   - Click `[Refresh List]` to fetch your available API models live.
4. **Novelistic Prose & `<thought>` Inner Thought Separation**:
   - The character's hidden thoughts are extracted into an elegant top header badge, while dialogue (`"..."`) and narrative actions (`*...*`) are rendered in rich novel format.
5. **SillyTavern V2 PNG / JSON Character Card Compatible**:
   - Drag and drop (or file pick) any SillyTavern V2 PNG image card or JSON character card. The browser automatically parses binary chunks (`tEXt`/`chara`) to extract avatar, scenario, persona, and greetings.
6. **Message Controls (Reroll / Edit / Delete / Resend)**:
   - `[🔄 Reroll]`: Re-generate the last AI response with one click.
   - `[✏️ Edit]`: Edit any dialogue or user prompt inline.
   - `[🗑️ Delete]`: Remove turns to steer the story.
   - `[↵ Resend]`: Fork the narrative branch from any past turn.
7. **Unlimited Client Storage (`IndexedDB`)**:
   - No 5MB limits. Stores hundreds of chat sessions and character cards permanently inside the browser database.
8. **Background Rolling Auto-Summary**:
   - Automatically summarizes past story arcs every 15 turns in the background, maintaining long-term memory without token bloat.
9. **In-App Search & Global 4-Language UI**:
   - Full-text chat search with real-time highlighting and jump navigation (`▲ / ▼`).
   - Instant UI and AI prose switching between **English**, **日本語**, **中文**, and **한국어**.

### 🚀 Quick Start
1. **Live Web Demo or Download**:
   - 🌐 **[Launch Live Web Demo](https://lainholic.github.io/Synapse_Eegine/)** directly on your mobile/tablet/PC browser.
   - Or download `Synapse_Engine.html` from Releases and double-click to open.
2. **Enter API Key**:
   - Open the left drawer menu (◀) ➔ **AI Model Settings** ➔ Enter your free [Google Gemini API Key](https://aistudio.google.com/app/apikey) or OpenRouter Key.
3. **Drop Card & Play**:
   - Upload your SillyTavern V2 character card (`.png` / `.json`) and start roleplaying!

---

## 🇰🇷 한국어

### 🌟 개요
**Synapse Engine (시냅스 엔진)**은 복잡한 프로그램 설치나 외부 서버 없이, **스마트폰(아이폰/갤럭시), 태블릿(아이패드/갤탭), PC 어디서든 웹 브라우저만 열면 즉시 구동**되는 100% 모바일 완벽 호환 순수 클라이언트 AI 롤플레이 웹 엔진입니다.

침대 위에서 스마트폰으로 편안하게 나만의 실리태번 캐릭터 카드를 불러와 몰입감 넘치는 소설형 롤플레이를 즐기실 수 있습니다.

### ✨ 주요 특징
1. **📱 스마트폰(모바일) & PC 100% 완벽 대응 (무설치 / 서버비 0원)**:
   - 아이폰 사파리, 안드로이드 크롬, 삼성 인터넷, 아이패드, PC 브라우저에 최적화된 모바일 반응형 터치 UI.
   - 프로그램 설치나 다운로드 없이 웹 주소 클릭 한 번으로 스마트폰에서 앱처럼 즉시 실행됩니다.
2. **⌨️ 모바일 타자 특화 퀵 심볼 바 (Quick Toolbar)**:
   - 가상 키보드 바로 위에 `[ "대사" ]`, `[ *지문* ]`, `[ (속마음) ]`, `[ ⌫ 지우기 ]` 원터치 버튼 탑재.
   - 모바일 화면에서도 특수기호를 번거롭게 자판 전환할 필요 없이 1초 만에 지문과 대사를 완성할 수 있습니다.
3. **멀티 AI 연동 & 실시간 모델 갱신**:
   - **Google Gemini** (Gemini 2.5 Flash, 3.1 Flash Lite 등), **OpenRouter** (Claude 3.5 Sonnet, DeepSeek R1/V3, Llama 3.3 등), **Anthropic Claude**, **로컬 LLM (Ollama/LM Studio)** 지원.
   - `[목록 갱신]` 클릭 시 내 API 키로 사용 가능한 최신 모델 목록을 실시간 조회.
4. **소설형 지문/대사 & 속마음(`<thought>`) 실시간 분리**:
   - 캐릭터의 은밀한 속마음은 상단 전용 뷰어에, 행동 지문(`*...*`)과 대사(`"..."`)는 대화창에 깔끔하게 분리 렌더링.
5. **실리태번(SillyTavern V2) PNG/JSON 카드 완벽 호환**:
   - 외부 캐릭터 일러스트 PNG 이미지나 JSON 카드를 화면에 올리면 아바타, 성격, 시나리오, 첫인사를 즉시 자동 파싱.
6. **메시지 3대 조작 (리롤 / 수정 / 삭제 / 재전송)**:
   - `[🔄 리롤]`: AI 답변 즉시 다시 생성
   - `[✏️ 수정]`: 지문/대사 인라인 수정
   - `[🗑️ 삭제]`: 불필요한 턴 제거
   - `[↵ 재전송]`: 특정 과거 시점으로 돌아가 분기 시작
7. **IndexedDB 무제한 영구 스토리지**:
   - 브라우저 내부 5MB 용량 한계 해제, 수만 턴의 대화 기록을 기기에 안전하게 영구 보관.
8. **백그라운드 롤링 자동 요약**:
   - 대화 15턴마다 AI가 과거 사건을 3줄로 자동 압축 요약하여 장기 기억에 누적.
9. **대화 내 실시간 검색기 & 글로벌 4개국어 원클릭 전환**:
   - 상단 `[🔍]` 버튼으로 지난 대화 단어 검색 및 자동 스크롤 점프.
   - 상단 헤더에서 🇺🇸 영 / 🇯🇵 일 / 🇨🇳 중 / 🇰🇷 한 국기 버튼으로 UI와 AI 출력 언어 실시간 전환.

### 🚀 빠른 시작 가이드 (초간단 3단계)

1. **스마트폰 또는 PC에서 바로 접속**:
   - 🌐 **[무료 웹 버전 즉시 접속하기](https://lainholic.github.io/Synapse_Eegine/)** (아이폰 / 안드로이드 / 태블릿 / PC)
   - 또는 Releases에서 `Synapse_Engine.html` 단독 파일을 다운받아 더블 클릭하여 실행합니다.
2. **무료 API Key 입력**:
   - 좌측 서랍 메뉴(◀) 열기 ➔ **[AI 모델 설정]** 클릭.
   - [Google AI Studio](https://aistudio.google.com/app/apikey)에서 무료로 발급받은 Gemini API Key를 입력합니다. (키는 외부 서버로 전송되지 않고 내 기기 브라우저에만 안전 보관됩니다)
3. **캐릭터 카드 등록 & 롤플레이 시작**:
   - 화면으로 SillyTavern 규격 캐릭터 카드(`.png` 이미지 또는 `.json` 파일)를 불러옵니다.
   - 하단 입력창에 지문(`*...*`)과 대사(`"..."`)를 입력하고 엔터를 누르면 즉시 롤플레이가 시작됩니다!

---

## 📁 File Structure (배포 폴더 구조)

```
tr/
├── index.html                   # 웹 런타임 메인 파일 (GitHub Pages 웹 실행)
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
