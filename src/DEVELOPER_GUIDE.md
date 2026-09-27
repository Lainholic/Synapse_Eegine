# 🛠️ Synapse Engine Developer & Customization Guide

다른 개발자나 기여자가 **Synapse Engine 코어를 손쉽게 수정, 확장, 빌드**할 수 있도록 작성된 공식 개발자 안내서입니다.

---

## 📂 개발 소스 구조

```
tr/
├── index.html                   # 런타임 HTML
├── style.css                    # 런타임 스타일시트
├── dist/                        # 컴파일/배포 번들
│   ├── rp_engine.js
│   └── ui_controller.js
├── Synapse_Engine.html          # 올인원 단독 배포 HTML
│
└── src/                         # [개발 원본 소스]
    ├── rp_engine.src.js         # RP 코어 엔진 원본 (IndexedDB, Multi-LLM, Lorebook)
    ├── ui_controller.src.js     # UI 컨트롤러 원본 (i18n, In-App Search, Toolbar)
    ├── build.js                 # 1-클릭 빌드 스크립트 (dist 및 Standalone 자동 갱신)
    ├── verify.js                # 1-클릭 문법/무결성 테스트기
    └── DEVELOPER_GUIDE.md       # [본 문서]
```

---

## 🚀 개발 및 수정 워크플로우

1. **소스 코드 수정**:
   * 엔진 로직, LLM API 연동, 로어북, DB 수정 ➔ `src/rp_engine.src.js`
   * 화면 UI, 다국어 사전(`I18N_DICT`), 단축키, 검색기 수정 ➔ `src/ui_controller.src.js`
   * 디자인/테마/CSS 수정 ➔ `style.css`
   * HTML 레이아웃 수정 ➔ `index.html`

2. **빌드 실행 (Build)**:
   * Node.js 환경에서 아래 명령어 실행 시 `dist/` 및 `Synapse_Engine.html`이 자동 생성/동기화됩니다.
   ```bash
   node src/build.js
   ```

3. **무결성 및 문법 검증 (Verify)**:
   ```bash
   node src/verify.js
   ```

---

## 💡 주요 아키텍처 가이드

### 1. `TouchRPEngine` (`src/rp_engine.src.js`)
* **`TouchRPDB`**: 브라우저 `window.indexedDB` 객체 스토어 (`TouchRP_DB_v1`). LocalStorage 자동 마이그레이션 내장.
* **`callActiveProvider(systemPrompt, onChunk, isDirectText)`**: 현재 유저가 선택한 Provider(`gemini` | `openrouter` | `claude` | `custom`)로 LLM 호출을 통합 분기.
* **`checkAndTriggerAutoSummary()`**: 15턴마다 백그라운드 롤링 요약 자동 발동.
* **`extractPngCharaMetadata(buf)`**: Tavern V2 PNG 이미지 청크(`tEXt`) 파서.

### 2. `TouchRPUIController` (`src/ui_controller.src.js`)
* **`I18N_DICT`**: 한국어(`ko`), 영어(`en`), 일본어(`ja`), 중국어(`zh`) 실시간 다국어 사전.
* **`onProviderChanged(provider)`**: 프로바이더 전환 시 전용 API 키/모델 자동 복원.
* **`performChatSearch()`**: 실시간 형광펜 하이라이트 및 `scrollIntoView` 점프.
* **`handleQuickSymbolInsert(wrapType)`**: 모바일 퀵 심볼 바 래핑 로직.
