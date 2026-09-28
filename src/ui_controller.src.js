  const I18N_DICT = {
    ko: {
      charSelectTitle: '캐릭터 선택',
      btnAddCard: '카드 추가',
      userPersonaTitle: '내 페르소나 관리',
      slotLabel: '페르소나 슬롯',
      btnNewPersona: '+ 새 페르소나',
      userNameLabel: '내 이름 / 호칭',
      userPersonaLabel: '내 성격 / 외형 / 관계 설정',
      btnSavePersona: '현재 페르소나 저장',
      btnDeletePersona: '페르소나 삭제',
      btnExportPersonas: '페르소나 파일 저장',
      btnImportPersonas: '페르소나 파일 불러오기',
      memoryTitle: '장기 기억 노트 (메모리)',
      memoryGuideTitle: '저장 안내:',
      memoryGuideDesc: '장기 기억은 외부 서버가 아닌 이 기기의 브라우저 내부(localStorage)에 안전하게 보관됩니다.',
      memoryInputPlaceholder: '캐릭터가 영구히 기억할 중요한 사건, 약속, 사실을 입력하세요',
      btnAddMemory: '기억 추가',
      memoryListLabel: '보존 중인 핵심 기억 목록:',
      btnClearAllMemory: '전체 비우기',
      emptyMemoryHint: '등록된 장기 기억이 없습니다.',
      charSettingsTitle: '캐릭터 설정',
      charPersonaLabel: '캐릭터 성격 / 프로필',
      charScenarioLabel: '상황 / 배경 시나리오',
      btnSaveCharSettings: '캐릭터 설정 저장',
      promptTitle: '프롬프트 입력란',
      customPromptLabel: '추가 시스템 프롬프트 / 특별 지침',
      btnSavePrompt: '프롬프트 저장',
      aiModelTitle: 'AI 모델 설정',
      providerLabel: 'AI 제공자 (Provider)',
      apiKeyLabel: 'API Key',
      modelLabel: '사용 모델',
      btnRefreshModels: '목록 갱신',
      btnSaveApi: 'AI 모델 설정 저장',
      naiTitle: 'NovelAI (NAI) 삽화 설정',
      naiToggleLabel: 'NAI 삽화 생성 기능 켜기',
      naiTriggerLabel: '삽화 생성 발동 방식',
      naiIntervalLabel: '삽화 생성 주기 설정',
      naiTurnSuffix: '턴 대화마다 자동 생성',
      naiModelLabel: 'NAI 확산 모델',
      naiPositiveLabel: '기본 긍정 프롬프트 (품질/화풍 태그)',
      naiNegativeLabel: '네거티브 프롬프트 (제외할 요소)',
      btnSaveNai: 'NAI 삽화 설정 저장',
      backupTitle: '대화 백업 및 내보내기',
      btnExportBackup: '대화 백업(저장)',
      btnImportBackup: '대화 복원(불러오기)',
      btnExportTxt: '텍스트(TXT) 추출',
      btnClearChat: '대화 초기화',
      narrativeTitle: '문체 설정',
      langLabel: '출력 및 UI 언어 (Language)',
      lengthLabel: '서술 분량',
      ratioLabel: '지문 및 대사 비중',
      tempLabel: '창의성 (Temperature)',
      viewerTitle: '대화창 글자 크기 / 뷰어 설정',
      helpGuideTitle: '📖 가이드 & 주의사항',
      fontSizeLabel: '글자 크기 (Font Size)',
      lineHeightLabel: '줄간격 (Line Height)',
      thoughtBadge: '속마음',
      btnReset: '리셋',
      btnSend: '전송',
      inputPlaceholder: '지문(*...*)과 대사("... ")를 자유롭게 입력하세요... (Enter: 전송, Shift+Enter: 줄바꿈)',
      searchPlaceholder: '대화 내용 검색... (단어 입력 시 실시간 점프)',
      apiKeyGuide: '입력하신 API Key는 외부 서버로 전송되지 않고 이 기기의 브라우저 내부(IndexedDB)에 안전하게 보관됩니다. 브라우저 캐시 삭제 시 초기화될 수 있으니 키를 별도로 잘 보관해 두세요.',
      symQuote: '" 대사 "',
      symAction: '* 지문 *',
      symThought: '( 속마음 )',
      symClear: '⌫ 지우기',
      btnReroll: '🔄 리롤',
      btnEdit: '✏️ 수정',
      btnDelete: '🗑️ 삭제',
      btnResend: '↵ 재전송',
      // Messages & Notifications
      msgMemorySaved: '새로운 장기 기억이 등록되었습니다!',
      msgSummarySaved: '대화가 요약되어 장기 기억에 저장되었습니다!',
      msgAllMemoryCleared: '모든 장기 기억이 삭제되었습니다.',
      msgChatCleared: '대화가 초기화되었습니다.',
      msgCardLoaded: '캐릭터 카드가 로드되었습니다: {name}',
      msgPersonaSwitched: '페르소나가 전환되었습니다: {name}',
      msgPersonaAdded: '새 페르소나 슬롯이 추가되었습니다.',
      msgPersonaSaved: '페르소나가 저장되었습니다.',
      msgPersonaDeleted: '페르소나가 삭제되었습니다.',
      msgCharSettingsSaved: '캐릭터 설정이 저장되었습니다.',
      msgPromptSaved: '프롬프트가 저장되었습니다.',
      msgLengthChanged: '분량 변경: {value}',
      msgFontSizeChanged: '글자 크기 변경: {value}',
      msgLineHeightChanged: '줄간격 변경: {value}',
      msgRatioChanged: '비중이 변경되었습니다.',
      msgModelsLoaded: '{provider} 모델 {count}개를 불러왔습니다.',
      msgApiSettingsSaved: 'AI 모델 설정이 저장되었습니다.',
      msgNaiSettingsSaved: 'NovelAI 삽화 설정이 저장되었습니다.',
      msgMemoryDeleted: '기억이 삭제되었습니다.',
      msgBackupExported: '대화 백업 파일이 저장되었습니다.',
      msgBackupRestored: '대화 및 기억이 성공적으로 복원되었습니다!',
      msgTxtExported: '텍스트(TXT) 소설 파일이 저장되었습니다.',
      msgNaiArtGenerated: '일러스트 삽화가 생성되었습니다!',
      msgPersonasExported: '페르소나 목록 파일이 저장되었습니다.',
      msgPersonasImported: '페르소나 목록({count}개)을 성공적으로 불러왔습니다!',
      msgDialogueEdited: '대사가 수정되었습니다.',
      msgDialogueDeleted: '대사가 삭제되었습니다.',
      // Errors & Alerts
      errEnterMemoryContent: '기억할 내용을 입력하세요.',
      errSetApiKeyFirst: 'API 키를 먼저 설정해 주세요.',
      errSummaryFailed: '대화 요약 실패: {err}',
      errCardLoadFailed: '카드 불러오기 실패: {err}',
      errMinOnePersona: '최소 1개의 페르소나는 유지되어야 합니다.',
      errEnterProviderApiKey: '{provider} API 키를 먼저 입력하세요.',
      errLiveModelFetchNotSupported: '현재 제공자는 실시간 목록 조회를 지원하지 않습니다.',
      errFetchModelsFailed: '모델 목록 조회 실패: {err}',
      errUnrecognizedBackup: '대화 기록을 인식할 수 없습니다. 올바른 백업 파일(.json 또는 .txt)인지 확인해 주세요.',
      errBackupLoadFailed: '백업 파일 로드 오류: {err}',
      errNaiKeyAndEnable: 'NovelAI 설정에서 API 키를 입력하고 기능을 켜주세요.',
      errNaiArtFailed: '삽화 생성 오류: {err}',
      errInvalidPersonaBackup: '올바른 페르소나 백업 파일(.json)이 아닙니다.',
      errPersonaLoadFailed: '페르소나 파일 로드 오류: {err}',
      errApiKeyNotSet: 'AI 모델 API 키가 설정되지 않았습니다.',
      errRegenerationFailed: '재생성 실패: {err}',
      errEnterApiKeyFirstLeft: 'API 키를 먼저 입력하고 저장해 주세요. (좌측 설정 탭)',
      errGenerateFailed: '답변 생성 실패 (네트워크/API 오류): {err}\n\n* 작성하신 메시지는 대화창에 안전하게 보존되어 있으니 [수정·재전송] 버튼으로 다시 시도하실 수 있습니다.',
      // Confirms
      confirmClearAllMemory: '현재 캐릭터({name})의 모든 장기 기억을 비우시겠습니까?',
      confirmClearChat: '현재 캐릭터({name})와의 대화 기록을 초기화하시겠습니까?',
      confirmDeletePersona: '현재 페르소나({name})를 삭제하시겠습니까?',
      confirmResetChatHeader: '대화 기록을 초기화하시겠습니까? (이전 기억 삭제)',
      confirmBranchFromTurn: '이 질문/지문으로 돌아가서 답변을 다시 받으시겠습니까? (이후 대화는 새로 생성됩니다)',
      confirmReroll: '이 답변을 취소하고 새로운 답변을 다시 받으시겠습니까?',
      confirmDeleteMessage: '이 대사를 삭제하시겠습니까?',
      // Status & Prompts
      btnAutoSummary: '✨ 대화 AI 자동요약',
      txtSummarizing: '요약중...',
      promptNewPersonaName: '새 페르소나의 이름/호칭을 입력하세요:',
      defaultNewPersonaName: '새 인물',
      defaultUserName: '당신',
      promptNaiTag: '생성할 삽화의 프롬프트(영문 태그)를 입력하세요:',
      txtThinking: '생각 중...',
      txtGenerating: '답변을 작성하고 있습니다...',
      txtRegenerating: '답변을 새로 작성하고 있습니다...',
      btnSaveOnly: '저장만',
      btnCancel: '취소',
      btnEditAndResend: '수정 후 전송 ↵',
      btnEditSave: '수정 저장'
    },
    en: {
      charSelectTitle: 'Character Selection',
      btnAddCard: 'Add Card',
      userPersonaTitle: 'User Persona Manager',
      slotLabel: 'Persona Slot',
      btnNewPersona: '+ New Persona',
      userNameLabel: 'My Name / Title',
      userPersonaLabel: 'My Persona / Appearance / Relationship',
      btnSavePersona: 'Save Current Persona',
      btnDeletePersona: 'Delete Persona',
      btnExportPersonas: 'Export Persona File',
      btnImportPersonas: 'Import Persona File',
      memoryTitle: 'Long-Term Memory Notes',
      memoryGuideTitle: 'Storage Info:',
      memoryGuideDesc: 'Long-term memories are safely stored locally in this device browser (localStorage).',
      memoryInputPlaceholder: 'Enter key facts, promises, or events the character should remember forever',
      btnAddMemory: 'Add Memory',
      memoryListLabel: 'Saved Key Memories:',
      btnClearAllMemory: 'Clear All',
      emptyMemoryHint: 'No long-term memories registered.',
      charSettingsTitle: 'Character Settings',
      charPersonaLabel: 'Character Profile & Persona',
      charScenarioLabel: 'Scenario & Context',
      btnSaveCharSettings: 'Save Character Settings',
      promptTitle: 'Custom Prompt Guidelines',
      customPromptLabel: 'Additional System Prompt / Rules',
      btnSavePrompt: 'Save Prompt',
      aiModelTitle: 'AI Model Settings',
      providerLabel: 'AI Provider',
      apiKeyLabel: 'API Key',
      modelLabel: 'Model',
      btnRefreshModels: 'Refresh List',
      btnSaveApi: 'Save AI Model Settings',
      naiTitle: 'NovelAI (NAI) Art Settings',
      naiToggleLabel: 'Enable NAI Art Generation',
      naiTriggerLabel: 'Generation Trigger Mode',
      naiIntervalLabel: 'Generation Interval',
      naiTurnSuffix: 'turns auto generation',
      naiModelLabel: 'NAI Diffusion Model',
      naiPositiveLabel: 'Positive Quality Tags',
      naiNegativeLabel: 'Negative Prompt',
      btnSaveNai: 'Save NAI Settings',
      backupTitle: 'Chat Backup & Export',
      btnExportBackup: 'Backup Chat (JSON)',
      btnImportBackup: 'Restore Chat (JSON)',
      btnExportTxt: 'Export Text (TXT)',
      btnClearChat: 'Clear Chat',
      narrativeTitle: 'Writing Style',
      langLabel: 'Output & UI Language',
      lengthLabel: 'Prose Length',
      ratioLabel: 'Dialogue / Action Ratio',
      tempLabel: 'Creativity (Temperature)',
      viewerTitle: 'Chat Viewer & Font Settings',
      helpGuideTitle: '📖 Guide & Precautions',
      fontSizeLabel: 'Font Size',
      lineHeightLabel: 'Line Height',
      thoughtBadge: 'Inner Thought',
      btnReset: 'Reset',
      btnSend: 'Send',
      inputPlaceholder: 'Type actions (*...*) and dialogues ("...") freely... (Enter: Send)',
      searchPlaceholder: 'Search chat history...',
      apiKeyGuide: 'Your API Key is stored safely inside this browser (IndexedDB) and never sent to external servers. Clearing browser cache may reset it, so please keep a backup copy.',
      symQuote: '" Dialogue "',
      symAction: '* Action *',
      symThought: '( Thought )',
      symClear: '⌫ Clear',
      btnReroll: '🔄 Reroll',
      btnEdit: '✏️ Edit',
      btnDelete: '🗑️ Delete',
      btnResend: '↵ Resend',
      // Messages & Notifications
      msgMemorySaved: 'New long-term memory saved!',
      msgSummarySaved: 'Chat summarized and saved to long-term memory!',
      msgAllMemoryCleared: 'All long-term memories deleted.',
      msgChatCleared: 'Chat history reset.',
      msgCardLoaded: 'Character card loaded: {name}',
      msgPersonaSwitched: 'Persona switched: {name}',
      msgPersonaAdded: 'New persona slot added.',
      msgPersonaSaved: 'Persona saved.',
      msgPersonaDeleted: 'Persona deleted.',
      msgCharSettingsSaved: 'Character settings saved.',
      msgPromptSaved: 'Custom prompt saved.',
      msgLengthChanged: 'Length preset: {value}',
      msgFontSizeChanged: 'Font size: {value}',
      msgLineHeightChanged: 'Line height: {value}',
      msgRatioChanged: 'Ratio preset updated.',
      msgModelsLoaded: 'Fetched {count} models from {provider}.',
      msgApiSettingsSaved: 'AI model settings saved.',
      msgNaiSettingsSaved: 'NovelAI art settings saved.',
      msgMemoryDeleted: 'Memory note deleted.',
      msgBackupExported: 'Chat backup file saved.',
      msgBackupRestored: 'Chat and memories successfully restored!',
      msgTxtExported: 'Novel text (TXT) file saved.',
      msgNaiArtGenerated: 'NovelAI illustration generated!',
      msgPersonasExported: 'Persona list file saved.',
      msgPersonasImported: 'Successfully loaded {count} persona(s)!',
      msgDialogueEdited: 'Message updated.',
      msgDialogueDeleted: 'Message deleted.',
      // Errors & Alerts
      errEnterMemoryContent: 'Please enter content to remember.',
      errSetApiKeyFirst: 'Please configure your API key first.',
      errSummaryFailed: 'Chat summary failed: {err}',
      errCardLoadFailed: 'Failed to load card: {err}',
      errMinOnePersona: 'At least one persona must be kept.',
      errEnterProviderApiKey: 'Please enter your {provider} API key first.',
      errLiveModelFetchNotSupported: 'The selected provider does not support live model fetching.',
      errFetchModelsFailed: 'Failed to fetch models: {err}',
      errUnrecognizedBackup: 'Unrecognized backup file. Please make sure it is a valid backup (.json or .txt).',
      errBackupLoadFailed: 'Failed to load backup file: {err}',
      errNaiKeyAndEnable: 'Please enter your NovelAI API key and enable the feature in settings.',
      errNaiArtFailed: 'Failed to generate illustration: {err}',
      errInvalidPersonaBackup: 'Invalid persona backup file (.json).',
      errPersonaLoadFailed: 'Failed to load persona file: {err}',
      errApiKeyNotSet: 'AI model API key is not configured.',
      errRegenerationFailed: 'Regeneration failed: {err}',
      errEnterApiKeyFirstLeft: 'Please enter and save your API key first in the left settings tab (◀).',
      errGenerateFailed: 'Failed to generate response (Network/API Error): {err}\n\n* Your message is safely preserved in the chat window. You can retry anytime using the [Resend] button.',
      // Confirms
      confirmClearAllMemory: 'Do you want to clear all long-term memories for {name}?',
      confirmClearChat: 'Do you want to reset the chat history with {name}?',
      confirmDeletePersona: 'Do you want to delete current persona ({name})?',
      confirmResetChatHeader: 'Reset chat history? (Previous messages will be cleared)',
      confirmBranchFromTurn: 'Branch from this message and generate a new response? (Subsequent turns will be rewritten)',
      confirmReroll: 'Discard this response and generate a new one?',
      confirmDeleteMessage: 'Delete this message?',
      // Status & Prompts
      btnAutoSummary: '✨ AI Auto-Summary',
      txtSummarizing: 'Summarizing...',
      promptNewPersonaName: 'Enter persona name / title:',
      defaultNewPersonaName: 'New Persona',
      defaultUserName: 'You',
      promptNaiTag: 'Enter illustration prompt (English tags):',
      txtThinking: 'Thinking...',
      txtGenerating: 'Writing response...',
      txtRegenerating: 'Rewriting response...',
      btnSaveOnly: 'Save Only',
      btnCancel: 'Cancel',
      btnEditAndResend: 'Save & Send ↵',
      btnEditSave: 'Save Edit'
    },
    ja: {
      charSelectTitle: 'キャラクター選択',
      btnAddCard: 'カード追加',
      userPersonaTitle: 'ペルソナ管理',
      slotLabel: 'ペルソナスロット',
      btnNewPersona: '+ 新規ペルソナ',
      userNameLabel: '名前 / 呼称',
      userPersonaLabel: '性格 / 外見 / 関係性設定',
      btnSavePersona: 'ペルソナ保存',
      btnDeletePersona: 'ペルソナ削除',
      btnExportPersonas: 'ペルソナ保存 (JSON)',
      btnImportPersonas: 'ペルソナ読込 (JSON)',
      memoryTitle: '長期記憶ノート (メモリー)',
      memoryGuideTitle: '保存について:',
      memoryGuideDesc: '長期記憶は外部サーバーではなく、この端末のブラウザ内(localStorage)に安全に保管されます。',
      memoryInputPlaceholder: 'キャラクターが永遠に記憶すべき出来事、約束、設定を入力してください',
      btnAddMemory: '記憶を追加',
      memoryListLabel: '保存された重要記憶一覧:',
      btnClearAllMemory: '全消去',
      emptyMemoryHint: '登録された長期記憶はありません。',
      charSettingsTitle: 'キャラクター設定',
      charPersonaLabel: 'プロフィール・性格',
      charScenarioLabel: '状況・背景シナリオ',
      btnSaveCharSettings: 'キャラクター設定保存',
      promptTitle: 'カスタムプロンプト',
      customPromptLabel: '追加システム指示・ルール',
      btnSavePrompt: 'プロンプト保存',
      aiModelTitle: 'AIモデル設定',
      providerLabel: 'AIプロバイダー',
      apiKeyLabel: 'APIキー',
      modelLabel: '使用モデル',
      btnRefreshModels: '一覧更新',
      btnSaveApi: 'AIモデル設定保存',
      naiTitle: 'NovelAI (NAI) 挿絵設定',
      naiToggleLabel: 'NAI画像生成を有効化',
      naiTriggerLabel: '挿絵生成トリガー方式',
      naiIntervalLabel: '生成周期設定',
      naiTurnSuffix: 'ターンごとに自動生成',
      naiModelLabel: 'NAI拡散モデル',
      naiPositiveLabel: '基本ポジティブプロンプト',
      naiNegativeLabel: 'ネガティブプロンプト',
      btnSaveNai: 'NAI設定保存',
      backupTitle: '会話バックアップ・出力',
      btnExportBackup: '会話バックアップ(JSON)',
      btnImportBackup: '会話復元(読込)',
      btnExportTxt: 'テキスト(TXT)抽出',
      btnClearChat: '会話初期化',
      narrativeTitle: '文体設定',
      langLabel: '出力およびUI言語',
      lengthLabel: '叙述分量',
      ratioLabel: '地の文 / セリフ比率',
      tempLabel: '創造性 (Temperature)',
      viewerTitle: 'ビューア・文字サイズ設定',
      helpGuideTitle: '📖 ガイド＆注意事項',
      fontSizeLabel: '文字サイズ',
      lineHeightLabel: '行間',
      thoughtBadge: '思考・本音',
      btnReset: 'リセット',
      btnSend: '送信',
      inputPlaceholder: '地の文(*...*)やセリフ("... ")を入力... (Enterで送信)',
      searchPlaceholder: '会話履歴を検索...',
      apiKeyGuide: '入力されたAPIキーは外部サーバーに送信されず、この端末のブラウザ内(IndexedDB)に安全に保管されます。ブラウザのキャッシュ消去で初期化される可能性があるため、キーは安全に保管してください。',
      symQuote: '" セリフ "',
      symAction: '* 地の文 *',
      symThought: '( 思考 )',
      symClear: '⌫ クリア',
      btnReroll: '🔄 リロール',
      btnEdit: '✏️ 編集',
      btnDelete: '🗑️ 削除',
      btnResend: '↵ 再送信',
      // Messages & Notifications
      msgMemorySaved: '新しい長期記憶が登録されました！',
      msgSummarySaved: '会話が要約され、長期記憶に保存されました！',
      msgAllMemoryCleared: 'すべての長期記憶が削除されました。',
      msgChatCleared: '会話履歴がリセットされました。',
      msgCardLoaded: 'キャラクターカードを読み込みました: {name}',
      msgPersonaSwitched: 'ペルソナが切り替わりました: {name}',
      msgPersonaAdded: '新規ペルソナスロットが追加されました。',
      msgPersonaSaved: 'ペルソナが保存されました。',
      msgPersonaDeleted: 'ペルソナが削除されました。',
      msgCharSettingsSaved: 'キャラクター設定が保存されました。',
      msgPromptSaved: 'カスタムプロンプトが保存されました。',
      msgLengthChanged: '叙述分量変更: {value}',
      msgFontSizeChanged: '文字サイズ変更: {value}',
      msgLineHeightChanged: '行間変更: {value}',
      msgRatioChanged: '比率が更新されました。',
      msgModelsLoaded: '{provider}から{count}件のモデルを取得しました。',
      msgApiSettingsSaved: 'AIモデル設定が保存されました。',
      msgNaiSettingsSaved: 'NovelAI挿絵設定が保存されました。',
      msgMemoryDeleted: '記憶が削除されました。',
      msgBackupExported: '会話バックアップファイルが保存されました。',
      msgBackupRestored: '会話と記憶が正常に復元されました！',
      msgTxtExported: '小説テキスト(TXT)ファイルが保存されました。',
      msgNaiArtGenerated: 'イラスト挿絵が生成されました！',
      msgPersonasExported: 'ペルソナ一覧ファイルが保存されました。',
      msgPersonasImported: 'ペルソナ一覧({count}件)を読み込みました！',
      msgDialogueEdited: 'メッセージが修正されました。',
      msgDialogueDeleted: 'メッセージが削除されました。',
      // Errors & Alerts
      errEnterMemoryContent: '記憶する内容を入力してください。',
      errSetApiKeyFirst: '先にAPIキーを設定してください。',
      errSummaryFailed: '会話要約失敗: {err}',
      errCardLoadFailed: 'カード読み込み失敗: {err}',
      errMinOnePersona: '少なくとも1つのペルソナを保持する必要があります。',
      errEnterProviderApiKey: '先に{provider}のAPIキーを入力してください。',
      errLiveModelFetchNotSupported: '現在のプロバイダーはモデル一覧のリアルタイム取得に対応していません。',
      errFetchModelsFailed: 'モデル一覧取得失敗: {err}',
      errUnrecognizedBackup: 'バックアップファイルを認識できません。有効なファイル(.json / .txt)かご確認ください。',
      errBackupLoadFailed: 'バックアップファイルの読込エラー: {err}',
      errNaiKeyAndEnable: 'NovelAI設定でAPIキーを入力し、機能を有効にしてください。',
      errNaiArtFailed: '挿絵生成エラー: {err}',
      errInvalidPersonaBackup: '有効なペルソナバックアップファイル(.json)ではありません。',
      errPersonaLoadFailed: 'ペルソナファイル読込エラー: {err}',
      errApiKeyNotSet: 'AIモデルのAPIキーが設定されていません。',
      errRegenerationFailed: '再生成失敗: {err}',
      errEnterApiKeyFirstLeft: '先に左側の設定タブ(◀)でAPIキーを入力して保存してください。',
      errGenerateFailed: '応答の生成に失敗しました (ネットワーク/APIエラー): {err}\n\n* 入力されたメッセージは会話ログに保持されています。[再送信]ボタンでお試しください。',
      // Confirms
      confirmClearAllMemory: '現在のキャラクター({name})のすべての長期記憶を削除しますか？',
      confirmClearChat: '現在のキャラクター({name})との会話履歴を初期化しますか？',
      confirmDeletePersona: '現在のペルソナ({name})を削除しますか？',
      confirmResetChatHeader: '会話履歴を初期化しますか？ (これまでのメッセージが消去されます)',
      confirmBranchFromTurn: 'このメッセージに戻って新しい応答を生成しますか？ (以降の会話は新しく作成されます)',
      confirmReroll: 'この応答を取り消して新しく再生成しますか？',
      confirmDeleteMessage: 'このメッセージを削除しますか？',
      // Status & Prompts
      btnAutoSummary: '✨ 会話AI自動要約',
      txtSummarizing: '要約中...',
      promptNewPersonaName: '新しいペルソナの名前/呼称を入力してください:',
      defaultNewPersonaName: '新規ペルソナ',
      defaultUserName: 'あなた',
      promptNaiTag: '生成する挿絵のプロンプト(英語タグ)を入力してください:',
      txtThinking: '思考中...',
      txtGenerating: '応答を作成しています...',
      txtRegenerating: '応答を新しく作成しています...',
      btnSaveOnly: '保存のみ',
      btnCancel: 'キャンセル',
      btnEditAndResend: '修正して送信 ↵',
      btnEditSave: '修正保存'
    },
    zh: {
      charSelectTitle: '选择角色',
      btnAddCard: '添加卡片',
      userPersonaTitle: '用户人设管理',
      slotLabel: '人设槽位',
      btnNewPersona: '+ 新建人设',
      userNameLabel: '我的名字 / 称呼',
      userPersonaLabel: '我的性格 / 外貌 / 关系设定',
      btnSavePersona: '保存当前人设',
      btnDeletePersona: '删除人设',
      btnExportPersonas: '导出人设文件',
      btnImportPersonas: '导入人设文件',
      memoryTitle: '长期记忆便签 (Memory)',
      memoryGuideTitle: '存储说明:',
      memoryGuideDesc: '长期记忆安全保存在本机浏览器内部(localStorage)，未上传外部服务器。',
      memoryInputPlaceholder: '输入角色需要永久记住的事件、约定或背景设定',
      btnAddMemory: '添加记忆',
      memoryListLabel: '保存的关键记忆列表:',
      btnClearAllMemory: '全部清空',
      emptyMemoryHint: '暂无长期记忆。',
      charSettingsTitle: '角色设定',
      charPersonaLabel: '角色性格与资料',
      charScenarioLabel: '背景情境与设定',
      btnSaveCharSettings: '保存角色设定',
      promptTitle: '自定义提示词',
      customPromptLabel: '追加系统提示词 / 规则',
      btnSavePrompt: '保存提示词',
      aiModelTitle: 'AI模型设置',
      providerLabel: 'AI提供商',
      apiKeyLabel: 'API Key',
      modelLabel: '选择模型',
      btnRefreshModels: '刷新列表',
      btnSaveApi: '保存AI模型设置',
      naiTitle: 'NovelAI (NAI) 插画设置',
      naiToggleLabel: '开启NAI插画生成功能',
      naiTriggerLabel: '插画生成触发模式',
      naiIntervalLabel: '生成周期设置',
      naiTurnSuffix: '回合自动生成一次',
      naiModelLabel: 'NAI扩散模型',
      naiPositiveLabel: '基础正向质量词',
      naiNegativeLabel: '负向提示词 (过滤词)',
      btnSaveNai: '保存NAI设置',
      backupTitle: '对话备份与导出',
      btnExportBackup: '备份对话 (JSON)',
      btnImportBackup: '还原对话 (导入)',
      btnExportTxt: '导出小说文本 (TXT)',
      btnClearChat: '清空对话',
      narrativeTitle: '文风设定',
      langLabel: '输出与界面语言',
      lengthLabel: '叙述篇幅',
      ratioLabel: '旁白 / 对话比例',
      tempLabel: '创造性 (Temperature)',
      viewerTitle: '阅读器与字号设置',
      helpGuideTitle: '📖 使用指南与注意事项',
      fontSizeLabel: '文字大小',
      lineHeightLabel: '行间距',
      thoughtBadge: '内心想法',
      btnReset: '重置',
      btnSend: '发送',
      inputPlaceholder: '输入旁白(*...*)与对话("... ")... (Enter发送)',
      searchPlaceholder: '搜索对话内容...',
      apiKeyGuide: '输入的API Key仅安全保存在本机浏览器内部(IndexedDB)，不会上传至外部服务器。清理浏览器缓存可能会重置，请妥善备份密钥。',
      symQuote: '" 对话 "',
      symAction: '* 旁白 *',
      symThought: '( 心声 )',
      symClear: '⌫ 清空',
      btnReroll: '🔄 重投',
      btnEdit: '✏️ 编辑',
      btnDelete: '🗑️ 删除',
      btnResend: '↵ 重新发送',
      // Messages & Notifications
      msgMemorySaved: '已保存新的长期记忆！',
      msgSummarySaved: '对话已总结并存入长期记忆！',
      msgAllMemoryCleared: '所有长期记忆已清空。',
      msgChatCleared: '对话记录已重置。',
      msgCardLoaded: '已加载角色卡片: {name}',
      msgPersonaSwitched: '已切换人设: {name}',
      msgPersonaAdded: '已添加新的人设槽位。',
      msgPersonaSaved: '人设已保存。',
      msgPersonaDeleted: '人设已删除。',
      msgCharSettingsSaved: '角色设定已保存。',
      msgPromptSaved: '提示词已保存。',
      msgLengthChanged: '篇幅变更: {value}',
      msgFontSizeChanged: '字号变更: {value}',
      msgLineHeightChanged: '行间距变更: {value}',
      msgRatioChanged: '比例已更新。',
      msgModelsLoaded: '已从 {provider} 获取 {count} 个模型。',
      msgApiSettingsSaved: 'AI模型设置已保存。',
      msgNaiSettingsSaved: 'NovelAI插画设置已保存。',
      msgMemoryDeleted: '记忆已删除。',
      msgBackupExported: '对话备份文件已保存。',
      msgBackupRestored: '对话与记忆已成功恢复！',
      msgTxtExported: '小说文本(TXT)文件已保存。',
      msgNaiArtGenerated: '插画生成成功！',
      msgPersonasExported: '人设列表文件已保存。',
      msgPersonasImported: '已成功导入 {count} 个人设！',
      msgDialogueEdited: '消息已修改。',
      msgDialogueDeleted: '消息已删除。',
      // Errors & Alerts
      errEnterMemoryContent: '请输入需要记忆的内容。',
      errSetApiKeyFirst: '请先配置API Key。',
      errSummaryFailed: '对话总结失败: {err}',
      errCardLoadFailed: '读取角色卡失败: {err}',
      errMinOnePersona: '必须保留至少一个角色人设。',
      errEnterProviderApiKey: '请先输入 {provider} 的 API Key。',
      errLiveModelFetchNotSupported: '当前提供商不支持实时模型列表获取。',
      errFetchModelsFailed: '获取模型列表失败: {err}',
      errUnrecognizedBackup: '无法识别备份文件。请确认为有效的备份文件 (.json 或 .txt)。',
      errBackupLoadFailed: '加载备份文件失败: {err}',
      errNaiKeyAndEnable: '请在NovelAI设置中输入API Key并启用该功能。',
      errNaiArtFailed: '生成插画出错: {err}',
      errInvalidPersonaBackup: '不是有效的角色人设备份文件 (.json)。',
      errPersonaLoadFailed: '加载人设文件出错: {err}',
      errApiKeyNotSet: '未配置AI模型 API Key。',
      errRegenerationFailed: '重新生成失败: {err}',
      errEnterApiKeyFirstLeft: '请先在左侧设置栏(◀)中输入并保存API Key。',
      errGenerateFailed: '生成回复失败 (网络/API错误): {err}\n\n* 您的输入内容已妥善保存在对话框中，可随时点击【重新发送】重试。',
      // Confirms
      confirmClearAllMemory: '确定要清空当前角色({name})的所有长期记忆吗？',
      confirmClearChat: '确定要重置与角色({name})的对话记录吗？',
      confirmDeletePersona: '确定要删除当前人设({name})吗？',
      confirmResetChatHeader: '确定要重置对话历史吗？(之前的记录将被清除)',
      confirmBranchFromTurn: '确定从该消息重新分支并获取新回复吗？(后续对话将被覆盖)',
      confirmReroll: '确定撤销该回复并重新生成新回复吗？',
      confirmDeleteMessage: '确定删除这条消息吗？',
      // Status & Prompts
      btnAutoSummary: '✨ 对话AI自动总结',
      txtSummarizing: '正在总结...',
      promptNewPersonaName: '请输入新的人设名称/称呼:',
      defaultNewPersonaName: '新人设',
      defaultUserName: '你',
      promptNaiTag: '请输入插画提示词(英文标签):',
      txtThinking: '思考中...',
      txtGenerating: '正在生成回复...',
      txtRegenerating: '正在重新生成回复...',
      btnSaveOnly: '仅保存',
      btnCancel: '取消',
      btnEditAndResend: '保存并发送 ↵',
      btnEditSave: '保存修改'
    }
  };

/**
 * [ui_controller.src.js] TouchRP Lite UI Controller
 * - Long-Term Memory Notes Manager (장기 기억 노트 실시간 추가/삭제 및 관리)
 * - Complete Memory & Chat Backup (JSON 파일 내보내기/불러오기, 소설형 TXT 추출)
 * - Message Edit & Delete (대사 수정 및 삭제 지원)
 * - Distinct User Persona vs Character Settings vs Custom Prompt Section
 * - Gemini Dedicated
 * - Mobile Side Handle Toggle
 */

(function(root) {
  'use strict';

  class TouchRPUIController {
    constructor() {
      this.engine = new root.TouchRPEngine();
      this.editingIndex = -1;
      this.currentActiveProvider = null;
      this.searchResults = [];
      this.currentSearchIndex = -1;
    }

    t(key, params = {}) {
      const lang = this.engine.outputLanguage || 'en';
      const dict = I18N_DICT[lang] || I18N_DICT.en || I18N_DICT.ko;
      let text = dict[key] || (I18N_DICT.en && I18N_DICT.en[key]) || (I18N_DICT.ko && I18N_DICT.ko[key]) || key;
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
      return text;
    }

    async init() {
      this.initElements();
      this.bindEvents();

      // IndexedDB로부터 모든 데이터가 100% 로드될 때까지 확실하게 대기!
      await this.engine.loadSettings();

      this.renderCharacterSelector();
      this.updateCharacterUI();
      this.renderMemoryNotesList();
      this.loadSettingsToUI();
      
      if (!this.engine.chatHistory || this.engine.chatHistory.length === 0) {
        this.engine.resetChat();
      }
      this.renderChatLog();
    }

    initElements() {
      // Sidebar & Handle
      this.leftPanel = document.getElementById('leftPanel');
      this.btnToggleSideHandle = document.getElementById('btnToggleSideHandle');
      this.drawerOverlay = document.getElementById('drawerOverlay');

      // Header face elements
      this.headerAvatar = document.getElementById('headerAvatar');
      this.headerCharName = document.getElementById('headerCharName');

      // Character elements
      this.charSelect = document.getElementById('charSelect');
      this.charAvatar = document.getElementById('charAvatar');
      this.charName = document.getElementById('charName');
      this.charTags = document.getElementById('charTags');
      this.btnImportCard = document.getElementById('btnImportCard');
      this.cardFileInput = document.getElementById('cardFileInput');

      // 1. Long-Term Memory Notes Elements (신규)
      this.inputNewMemory = document.getElementById('inputNewMemory');
      this.btnAddMemoryNote = document.getElementById('btnAddMemoryNote');
      this.memoryNotesList = document.getElementById('memoryNotesList');

      // 2. User Persona Elements
      this.selectUserPersona = document.getElementById('selectUserPersona');
      this.btnCreateNewPersona = document.getElementById('btnCreateNewPersona');
      this.inputUserName = document.getElementById('inputUserName');
      this.inputUserPersona = document.getElementById('inputUserPersona');
      this.btnSaveUserPersona = document.getElementById('btnSaveUserPersona');
      this.btnDeleteUserPersona = document.getElementById('btnDeleteUserPersona');
      this.btnExportPersonas = document.getElementById('btnExportPersonas');
      this.btnImportPersonas = document.getElementById('btnImportPersonas');
      this.personaFileInput = document.getElementById('personaFileInput');

      // 3. Character Settings Elements
      this.editPersonaDesc = document.getElementById('editPersonaDesc');
      this.editScenarioDesc = document.getElementById('editScenarioDesc');
      this.btnSaveCharSettings = document.getElementById('btnSaveCharSettings');

      // 4. Custom Prompt Elements
      this.editCustomPrompt = document.getElementById('editCustomPrompt');
      this.btnSavePrompt = document.getElementById('btnSavePrompt');

      // 5. Memory & Backup Elements
      this.btnExportChatJson = document.getElementById('btnExportChatJson');
      this.btnImportChatJson = document.getElementById('btnImportChatJson');
      this.chatBackupFileInput = document.getElementById('chatBackupFileInput');
      this.btnExportChatTxt = document.getElementById('btnExportChatTxt');
      this.btnClearCurrentMemory = document.getElementById('btnClearCurrentMemory');

      // 6. Narrative, Language & Viewer Style Elements
      this.langChips = document.querySelectorAll('#headerLangFlags .btn-flag-mini, #langChipGroup .chip-btn');
      this.lengthChips = document.querySelectorAll('#lengthChipGroup .chip-btn');
      this.selectNarrativeStyle = document.getElementById('selectNarrativeStyle');
      this.inputTemperature = document.getElementById('inputTemperature');
      this.tempValDisplay = document.getElementById('tempValDisplay');
      this.fontSizeChips = document.querySelectorAll('#fontSizeChipGroup .chip-btn');
      this.lineHeightChips = document.querySelectorAll('#lineHeightChipGroup .chip-btn');

      // 7. AI Model & API Settings Elements
      this.selectProvider = document.getElementById('selectProvider');
      this.groupCustomBaseUrl = document.getElementById('groupCustomBaseUrl');
      this.inputCustomBaseUrl = document.getElementById('inputCustomBaseUrl');
      this.inputApiKey = document.getElementById('inputApiKey');
      this.groupSelectModel = document.getElementById('groupSelectModel');
      this.selectModel = document.getElementById('selectModel');
      this.btnFetchOpenRouterModels = document.getElementById('btnFetchOpenRouterModels');
      this.groupInputCustomModel = document.getElementById('groupInputCustomModel');
      this.inputCustomModel = document.getElementById('inputCustomModel');
      this.btnSaveSettings = document.getElementById('btnSaveSettings');

      // 8. NovelAI Settings Elements
      this.toggleNaiEnabled = document.getElementById('toggleNaiEnabled');
      this.inputNaiApiKey = document.getElementById('inputNaiApiKey');
      this.selectNaiTriggerMode = document.getElementById('selectNaiTriggerMode');
      this.inputNaiTurnInterval = document.getElementById('inputNaiTurnInterval');
      this.turnIntervalDisplay = document.getElementById('turnIntervalDisplay');
      this.selectNaiModel = document.getElementById('selectNaiModel');
      this.inputNaiPositive = document.getElementById('inputNaiPositive');
      this.inputNaiNegative = document.getElementById('inputNaiNegative');
      this.btnSaveNaiSettings = document.getElementById('btnSaveNaiSettings');

      // Right panel elements
      this.btnTriggerNaiArt = document.getElementById('btnTriggerNaiArt');
      this.thoughtBox = document.getElementById('thoughtBox');
      this.thoughtText = document.getElementById('thoughtText');
      this.chatLog = document.getElementById('chatLog');
      this.userInput = document.getElementById('userInput');
      this.btnSend = document.getElementById('btnSend');
      this.btnResetChat = document.getElementById('btnResetChat');

      // In-App Search & Quick Symbol Bar Elements
      this.btnToggleSearch = document.getElementById('btnToggleSearch');
      this.chatSearchBar = document.getElementById('chatSearchBar');
      this.inputChatSearch = document.getElementById('inputChatSearch');
      this.btnSearchPrev = document.getElementById('btnSearchPrev');
      this.btnSearchNext = document.getElementById('btnSearchNext');
      this.searchCountDisplay = document.getElementById('searchCountDisplay');
      this.btnCloseSearch = document.getElementById('btnCloseSearch');
      this.quickSymbolBtns = document.querySelectorAll('.btn-quick-symbol');

      // Accordion headers
      this.accordionToggles = document.querySelectorAll('.accordion-toggle');
    }

    bindEvents() {
      // Sidebar Handle Toggle
      if (this.btnToggleSideHandle && this.leftPanel) {
        this.btnToggleSideHandle.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleSidebar();
        });
      }

      if (this.drawerOverlay) {
        this.drawerOverlay.addEventListener('click', () => {
          this.closeSidebar();
        });
      }

      // Accordion toggles
      if (this.accordionToggles) {
        this.accordionToggles.forEach(toggle => {
          toggle.addEventListener('click', () => {
            const section = toggle.closest('.accordion-section');
            if (section) {
              section.classList.toggle('collapsed');
            }
          });
        });
      }

      // Character selection
      if (this.charSelect) {
        this.charSelect.addEventListener('change', async (e) => {
          await this.engine.selectCharacter(e.target.value);
          this.updateCharacterUI();
          this.renderMemoryNotesList();
          this.loadSettingsToUI();
          this.renderChatLog();
        });
      }

      // 1. Long-Term Memory Note Add
      if (this.btnAddMemoryNote && this.inputNewMemory) {
        this.btnAddMemoryNote.addEventListener('click', () => {
          const text = this.inputNewMemory.value.trim();
          if (!text) {
            alert(this.t('errEnterMemoryContent'));
            return;
          }
          this.engine.addMemoryNote(text);
          this.inputNewMemory.value = '';
          this.renderMemoryNotesList();
          this.showToast(this.t('msgMemorySaved'));
        });
      }

      // AI Conversation Auto-Summarize
      if (this.btnSummarizeChat) {
        this.btnSummarizeChat.addEventListener('click', async () => {
          if (!this.engine.apiKey) {
            alert(this.t('errSetApiKeyFirst'));
            return;
          }
          this.btnSummarizeChat.disabled = true;
          this.btnSummarizeChat.textContent = this.t('txtSummarizing');
          try {
            const summary = await this.engine.summarizeHistory();
            this.renderMemoryNotesList();
            this.showToast(this.t('msgSummarySaved'));
          } catch (err) {
            alert(this.t('errSummaryFailed', { err: err.message }));
          } finally {
            this.btnSummarizeChat.disabled = false;
            this.btnSummarizeChat.textContent = this.t('btnAutoSummary');
          }
        });
      }

      // Clear All Long-Term Memory Notes for current character
      if (this.btnClearAllMemoryNotes) {
        this.btnClearAllMemoryNotes.addEventListener('click', () => {
          if (confirm(this.t('confirmClearAllMemory', { name: this.engine.getActiveCharacter().name }))) {
            this.engine.memoryNotes = [];
            this.engine.saveSettings();
            this.renderMemoryNotesList();
            this.showToast(this.t('msgAllMemoryCleared'));
          }
        });
      }

      // Memory & Backup Actions
      if (this.btnExportChatJson) {
        this.btnExportChatJson.addEventListener('click', () => this.exportChatAsJson());
      }

      if (this.btnImportChatJson && this.chatBackupFileInput) {
        this.btnImportChatJson.addEventListener('click', () => {
          this.chatBackupFileInput.click();
        });
        this.chatBackupFileInput.addEventListener('change', (e) => this.importChatFromJson(e));
      }

      if (this.btnExportChatTxt) {
        this.btnExportChatTxt.addEventListener('click', () => this.exportChatAsTxt());
      }

      if (this.btnClearCurrentMemory) {
        this.btnClearCurrentMemory.addEventListener('click', () => {
          if (confirm(this.t('confirmClearChat', { name: this.engine.getActiveCharacter().name }))) {
            this.engine.resetChat();
            this.renderChatLog();
            this.showToast(this.t('msgChatCleared'));
          }
        });
      }

      // Card import
      if (this.btnImportCard && this.cardFileInput) {
        this.btnImportCard.addEventListener('click', () => {
          this.cardFileInput.click();
        });
        this.cardFileInput.addEventListener('change', async (e) => {
          const file = e.target.files[0];
          if (!file) return;
          try {
            const char = await this.engine.importCardFile(file);
            this.engine.selectCharacter(char.id);
            this.renderCharacterSelector();
            this.updateCharacterUI();
            this.renderMemoryNotesList();
            this.renderChatLog();
            this.showToast(this.t('msgCardLoaded', { name: char.name }));
          } catch (err) {
            alert(this.t('errCardLoadFailed', { err: err.message }));
          }
          this.cardFileInput.value = '';
        });
      }

      // Multi-Persona Selection
      if (this.selectUserPersona) {
        this.selectUserPersona.addEventListener('change', (e) => {
          this.engine.selectUserPersona(e.target.value);
          this.loadUserPersonaToUI();
          this.showToast(this.t('msgPersonaSwitched', { name: this.engine.userName }));
        });
      }

      // Create New User Persona
      if (this.btnCreateNewPersona) {
        this.btnCreateNewPersona.addEventListener('click', () => {
          const name = prompt(this.t('promptNewPersonaName'), this.t('defaultNewPersonaName'));
          if (name && name.trim()) {
            this.engine.addUserPersona(name.trim(), '');
            this.renderUserPersonaSelector();
            this.loadUserPersonaToUI();
            this.showToast(this.t('msgPersonaAdded'));
          }
        });
      }

      // Save User Persona
      if (this.btnSaveUserPersona) {
        this.btnSaveUserPersona.addEventListener('click', () => {
          const p = this.engine.getActiveUserPersona();
          if (p) {
            const defUser = this.t('defaultUserName');
            p.name = this.inputUserName ? (this.inputUserName.value.trim() || defUser) : defUser;
            p.personaDesc = this.inputUserPersona ? this.inputUserPersona.value : '';
            this.engine.syncActivePersona();
            this.engine.saveSettings();
            this.renderUserPersonaSelector();
            this.showToast(this.t('msgPersonaSaved'));
          }
        });
      }

      // Delete User Persona
      if (this.btnDeleteUserPersona) {
        this.btnDeleteUserPersona.addEventListener('click', () => {
          if (this.engine.userPersonas.length <= 1) {
            alert(this.t('errMinOnePersona'));
            return;
          }
          if (confirm(this.t('confirmDeletePersona', { name: this.engine.userName }))) {
            this.engine.deleteUserPersona(this.engine.activeUserPersonaId);
            this.renderUserPersonaSelector();
            this.loadUserPersonaToUI();
            this.showToast(this.t('msgPersonaDeleted'));
          }
        });
      }

      // Export / Import Personas
      if (this.btnExportPersonas) {
        this.btnExportPersonas.addEventListener('click', () => this.exportUserPersonasJson());
      }
      if (this.btnImportPersonas && this.personaFileInput) {
        this.btnImportPersonas.addEventListener('click', () => this.personaFileInput.click());
        this.personaFileInput.addEventListener('change', (e) => this.importUserPersonasJson(e));
      }

      // Save Character Settings
      if (this.btnSaveCharSettings) {
        this.btnSaveCharSettings.addEventListener('click', () => {
          const pDesc = this.editPersonaDesc ? this.editPersonaDesc.value : '';
          const sDesc = this.editScenarioDesc ? this.editScenarioDesc.value : '';
          this.engine.saveActiveCharacterPersona(pDesc, sDesc);
          this.engine.saveSettings();
          this.showToast(this.t('msgCharSettingsSaved'));
        });
      }

      // Save Custom Prompt
      if (this.btnSavePrompt) {
        this.btnSavePrompt.addEventListener('click', () => {
          if (this.editCustomPrompt) {
            this.engine.customPrompt = this.editCustomPrompt.value;
          }
          this.engine.saveSettings();
          this.showToast(this.t('msgPromptSaved'));
        });
      }

      // Language buttons (KO / EN / JA / ZH)
      if (this.langChips) {
        this.langChips.forEach(chip => {
          chip.addEventListener('click', () => {
            const lang = chip.getAttribute('data-lang') || 'en';
            this.engine.outputLanguage = lang;
            this.engine.saveSettings();
            this.applyI18nToUI();
            
            // 모든 국기 버튼 active 동기화
            this.langChips.forEach(c => {
              if (c.getAttribute('data-lang') === lang) c.classList.add('active');
              else c.classList.remove('active');
            });

            // 카드가 등록되지 않은 기본 더미 상태일 경우 캐릭터명 및 인사말 언어 실시간 동기화
            if (this.engine.characters.size === 0) {
              this.updateCharacterUI();
              if (this.engine.chatHistory.length === 1 && this.engine.chatHistory[0].role === 'assistant') {
                const char = this.engine.getActiveCharacter();
                this.engine.chatHistory[0].content = char.firstMes;
                this.renderChatLog();
              }
            }

            // 기본 페르소나만 있는 경우 유저명 언어 동기화
            const defaultUserNames = ['당신', 'You', 'あなた', '你'];
            if (this.engine.userPersonas.length === 1 && defaultUserNames.includes(this.engine.userPersonas[0].name)) {
              const nameMap = { ko: '당신', en: 'You', ja: 'あなた', zh: '你' };
              const descMap = { ko: '기본 페르소나', en: 'Default Persona', ja: 'デフォルトペルソナ', zh: '默认角色画像' };
              const newName = nameMap[lang] || 'You';
              const newDesc = descMap[lang] || 'Default Persona';
              this.engine.userPersonas[0].name = newName;
              this.engine.userPersonas[0].personaDesc = newDesc;
              this.engine.userName = newName;
              this.loadUserPersonaToUI();
            }

            const langLabels = {
              ko: '언어: 한국어',
              en: 'Language: English',
              ja: '言語: 日本語',
              zh: '语言: 中文'
            };
            this.showToast(langLabels[lang] || ('Language: ' + lang));
          });
        });
      }

      // Length chip buttons
      if (this.lengthChips) {
        this.lengthChips.forEach(chip => {
          chip.addEventListener('click', () => {
            this.lengthChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const len = chip.getAttribute('data-length');
            this.engine.lengthPreset = len;
            this.engine.saveSettings();
            this.showToast(this.t('msgLengthChanged', { value: chip.textContent }));
          });
        });
      }

      // Font Size chip buttons
      if (this.fontSizeChips) {
        this.fontSizeChips.forEach(chip => {
          chip.addEventListener('click', () => {
            this.fontSizeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const sz = chip.getAttribute('data-size');
            this.engine.fontSizePreset = sz;
            this.applyViewerStyleToChat();
            this.applyI18nToUI();
            this.engine.saveSettings();
            this.showToast(this.t('msgFontSizeChanged', { value: chip.textContent }));
          });
        });
      }

      // Line Height chip buttons
      if (this.lineHeightChips) {
        this.lineHeightChips.forEach(chip => {
          chip.addEventListener('click', () => {
            this.lineHeightChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const lh = chip.getAttribute('data-lh');
            this.engine.lineHeightPreset = lh;
            this.applyViewerStyleToChat();
            this.applyI18nToUI();
            this.engine.saveSettings();
            this.showToast(this.t('msgLineHeightChanged', { value: chip.textContent }));
          });
        });
      }

      // Narrative Ratio Style
      if (this.selectNarrativeStyle) {
        this.selectNarrativeStyle.addEventListener('change', (e) => {
          this.engine.narrativeStyle = e.target.value;
          this.engine.saveSettings();
          this.showToast(this.t('msgRatioChanged'));
        });
      }

      // Temperature
      if (this.inputTemperature) {
        this.inputTemperature.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          this.engine.temperature = val;
          if (this.tempValDisplay) this.tempValDisplay.textContent = val.toFixed(2);
          this.engine.saveSettings();
        });
      }

      // Provider Change handler
      if (this.selectProvider) {
        this.selectProvider.addEventListener('change', (e) => {
          this.onProviderChanged(e.target.value);
        });
      }

      // Fetch Models Live Button (Gemini / OpenRouter)
      if (this.btnFetchOpenRouterModels) {
        this.btnFetchOpenRouterModels.addEventListener('click', async () => {
          const key = this.inputApiKey ? this.inputApiKey.value.trim() : '';
          const provider = this.selectProvider ? this.selectProvider.value : 'gemini';
          if (!key) {
            const pName = provider === 'gemini' ? 'Google Gemini' : (provider === 'claude' ? 'Anthropic Claude' : 'OpenRouter');
            alert(this.t('errEnterProviderApiKey', { provider: pName }));
            return;
          }
          this.btnFetchOpenRouterModels.textContent = this.t('txtThinking') || '...';
          try {
            let models = [];
            if (provider === 'gemini') {
              models = await this.engine.fetchGeminiModels(key);
            } else if (provider === 'openrouter') {
              models = await this.engine.fetchOpenRouterModels(key);
            } else {
              alert(this.t('errLiveModelFetchNotSupported'));
              return;
            }

            if (this.selectModel && models.length > 0) {
              this.selectModel.innerHTML = '';
              models.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.id;
                opt.textContent = m.name;
                this.selectModel.appendChild(opt);
              });
              this.showToast(this.t('msgModelsLoaded', { provider: (provider === 'gemini' ? 'Gemini' : 'OpenRouter'), count: models.length }));
            }
          } catch (err) {
            alert(this.t('errFetchModelsFailed', { err: err.message }));
          } finally {
            this.btnFetchOpenRouterModels.textContent = this.t('btnRefreshModels') || '목록 갱신';
          }
        });
      }

      // AI Model Settings Save
      if (this.btnSaveSettings) {
        this.btnSaveSettings.addEventListener('click', () => {
          const provider = this.selectProvider ? this.selectProvider.value : 'gemini';
          const key = this.inputApiKey ? this.inputApiKey.value.trim() : '';
          this.engine.apiProvider = provider;
          this.engine.apiKey = key;
          this.engine.providerKeys[provider] = key;

          if (provider === 'custom') {
            const customUrl = this.inputCustomBaseUrl ? this.inputCustomBaseUrl.value.trim() : 'https://api.openai.com/v1';
            const customModel = this.inputCustomModel ? this.inputCustomModel.value.trim() : 'default';
            this.engine.customBaseUrl = customUrl;
            this.engine.modelName = customModel;
            this.engine.providerModels['custom'] = customModel;
          } else {
            const selectedModel = this.selectModel ? this.selectModel.value : 'gemini-2.5-flash';
            this.engine.modelName = selectedModel;
            this.engine.providerModels[provider] = selectedModel;
          }
          this.engine.saveSettings();
          this.showToast(this.t('msgApiSettingsSaved'));
        });
      }

      // Quick Symbol Toolbar Buttons
      if (this.quickSymbolBtns && this.userInput) {
        this.quickSymbolBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const wrapType = btn.getAttribute('data-wrap');
            this.handleQuickSymbolInsert(wrapType);
          });
        });
      }

      // In-App Chat Search Events
      if (this.btnToggleSearch) {
        this.btnToggleSearch.addEventListener('click', () => this.toggleSearchBar());
      }
      if (this.btnCloseSearch) {
        this.btnCloseSearch.addEventListener('click', () => this.closeSearchBar());
      }
      if (this.inputChatSearch) {
        this.inputChatSearch.addEventListener('input', () => this.performChatSearch());
      }
      if (this.btnSearchPrev) {
        this.btnSearchPrev.addEventListener('click', () => this.jumpSearchResult(-1));
      }
      if (this.btnSearchNext) {
        this.btnSearchNext.addEventListener('click', () => this.jumpSearchResult(1));
      }

      // NAI Trigger Mode Change
      if (this.selectNaiTriggerMode) {
        this.selectNaiTriggerMode.addEventListener('change', (e) => {
          if (this.groupNaiTurnInterval) {
            // always visible
          }
        });
      }

      if (this.inputNaiTurnInterval) {
        this.inputNaiTurnInterval.addEventListener('input', (e) => {
          const val = parseInt(e.target.value, 10) || 5;
          this.engine.naiTurnInterval = val;
          if (this.turnIntervalDisplay) {
            this.turnIntervalDisplay.textContent = val + ' ' + this.t('naiTurnSuffix');
          }
          this.engine.saveSettings();
        });
      }

      // NAI Settings Save
      if (this.btnSaveNaiSettings) {
        this.btnSaveNaiSettings.addEventListener('click', () => {
          this.engine.naiEnabled = this.toggleNaiEnabled ? this.toggleNaiEnabled.checked : false;
          this.engine.naiApiKey = this.inputNaiApiKey ? this.inputNaiApiKey.value.trim() : '';
          this.engine.naiTriggerMode = this.selectNaiTriggerMode ? this.selectNaiTriggerMode.value : 'manual';
          this.engine.naiTurnInterval = this.inputNaiTurnInterval ? parseInt(this.inputNaiTurnInterval.value, 10) || 5 : 5;
          this.engine.naiModel = this.selectNaiModel ? this.selectNaiModel.value : 'nai-diffusion-5-full';
          this.engine.naiPositivePrompt = this.inputNaiPositive ? this.inputNaiPositive.value.trim() : '';
          this.engine.naiNegativePrompt = this.inputNaiNegative ? this.inputNaiNegative.value.trim() : '';
          this.engine.saveSettings();
          this.updateNaiButtonVisibility();
          this.showToast(this.t('msgNaiSettingsSaved'));
        });
      }

      // Trigger NAI Art Button in Header
      if (this.btnTriggerNaiArt) {
        this.btnTriggerNaiArt.addEventListener('click', () => this.handleGenerateNaiArt());
      }

      // Reset Chat
      if (this.btnResetChat) {
        this.btnResetChat.addEventListener('click', () => {
          if (confirm(this.t('confirmResetChatHeader'))) {
            this.engine.resetChat();
            this.renderChatLog();
            this.showToast(this.t('msgChatCleared'));
          }
        });
      }

      // Send Message
      if (this.btnSend && this.userInput) {
        this.btnSend.addEventListener('click', () => this.handleSendMessage());
        this.userInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.handleSendMessage();
          }
        });
      }
    }

    renderMemoryNotesList() {
      if (!this.memoryNotesList) return;
      this.memoryNotesList.innerHTML = '';
      const notes = this.engine.memoryNotes || [];

      if (notes.length === 0) {
        this.memoryNotesList.innerHTML = '<div class="empty-note-hint">' + this.t('emptyMemoryHint') + '</div>';
        return;
      }

      notes.forEach(note => {
        const item = document.createElement('div');
        item.className = 'memory-note-item';

        const textSpan = document.createElement('span');
        textSpan.className = 'memory-note-text';
        textSpan.textContent = note.text;

        const btnDel = document.createElement('button');
        btnDel.type = 'button';
        btnDel.className = 'btn-del-mem';
        btnDel.textContent = '✕';
        btnDel.title = '이 기억 삭제';
        btnDel.addEventListener('click', () => {
          this.engine.deleteMemoryNote(note.id);
          this.renderMemoryNotesList();
          this.showToast(this.t('msgMemoryDeleted'));
        });

        item.appendChild(textSpan);
        item.appendChild(btnDel);
        this.memoryNotesList.appendChild(item);
      });
    }

    exportChatAsJson() {
      const char = this.engine.getActiveCharacter();
      const exportData = {
        version: 'TouchRP_Backup_v1',
        exportDate: new Date().toISOString(),
        characterId: this.engine.activeCharId,
        characterName: char.name,
        userName: this.engine.userName,
        userPersona: this.engine.userPersona,
        memoryNotes: this.engine.memoryNotes,
        chatHistory: this.engine.chatHistory
      };
      const jsonStr = JSON.stringify(exportData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '대화백업_' + char.name + '_' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
      URL.revokeObjectURL(url);
      this.showToast(this.t('msgBackupExported'));
    }

    async importChatFromJson(e) {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        let history = null;
        let uName = null;
        let uPersona = null;
        let charId = null;
        let notes = null;

        try {
          const data = JSON.parse(text);
          if (Array.isArray(data.chatHistory)) {
            history = data.chatHistory;
            uName = data.userName;
            uPersona = data.userPersona;
            charId = data.characterId;
            notes = data.memoryNotes;
          } else if (Array.isArray(data)) {
            history = data;
          } else if (Array.isArray(data.messages)) {
            history = data.messages.map(m => ({
              role: m.is_user || m.role === 'user' ? 'user' : 'assistant',
              content: m.mes || m.content || m.text || '',
              thought: m.thought || ''
            }));
          }
        } catch (jsonErr) {
          history = this.parseTxtChatLog(text);
        }

        if (history && history.length > 0) {
          if (charId && this.engine.characters.has(charId) && charId !== this.engine.activeCharId) {
            this.engine.activeCharId = charId;
            if (this.charSelect) this.charSelect.value = charId;
            this.updateCharacterUI();
          }

          this.engine.chatHistory = history.map(h => ({
            role: h.role === 'user' ? 'user' : 'assistant',
            content: h.content || h.mes || h.text || '',
            thought: h.thought || ''
          }));

          if (uName) this.engine.userName = uName;
          if (uPersona) this.engine.userPersona = uPersona;
          if (Array.isArray(notes)) this.engine.memoryNotes = notes;

          this.engine.saveSettings();
          this.loadSettingsToUI();
          this.renderMemoryNotesList();
          this.renderChatLog();
          this.showToast(this.t('msgBackupRestored'));
        } else {
          alert(this.t('errUnrecognizedBackup'));
        }
      } catch (err) {
        alert(this.t('errBackupLoadFailed', { err: err.message }));
      }
      this.chatBackupFileInput.value = '';
    }

    exportChatAsTxt() {
      const char = this.engine.getActiveCharacter();
      let txt = '=== ' + char.name + ' & ' + this.engine.userName + ' ===\n\n';
      this.engine.chatHistory.forEach(msg => {
        const sender = msg.role === 'assistant' ? char.name : this.engine.userName;
        if (msg.thought) {
          txt += '[' + sender + ' ' + (this.t('thoughtBadge') || 'Thought') + ']: ' + msg.thought + '\n';
        }
        txt += sender + ':\n' + msg.content + '\n\n';
        txt += '--------------------------------------------------\n\n';
      });

      const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'chat_' + char.name + '_' + new Date().toISOString().slice(0, 10) + '.txt';
      a.click();
      URL.revokeObjectURL(url);
      this.showToast(this.t('msgTxtExported'));
    }

    toggleSidebar() {
      if (!this.leftPanel) return;
      const isOpen = this.leftPanel.classList.toggle('open');
      if (this.drawerOverlay) {
        if (isOpen) {
          this.drawerOverlay.classList.add('active');
        } else {
          this.drawerOverlay.classList.remove('active');
        }
      }
    }

    closeSidebar() {
      if (this.leftPanel) this.leftPanel.classList.remove('open');
      if (this.drawerOverlay) this.drawerOverlay.classList.remove('active');
    }

    onProviderChanged(provider) {
      // 1. 이전 프로바이더의 입력창 키 임시 저장
      const prevProvider = this.currentActiveProvider || this.engine.apiProvider || 'gemini';
      if (this.inputApiKey && this.inputApiKey.value.trim()) {
        this.engine.providerKeys[prevProvider] = this.inputApiKey.value.trim();
      }
      this.currentActiveProvider = provider;

      // 2. 새 프로바이더의 저장된 키를 입력창에 자동 복원
      if (this.inputApiKey) {
        this.inputApiKey.value = this.engine.providerKeys[provider] || '';
      }

      // 3. UI 폼 그룹 표시/숨김
      if (this.groupCustomBaseUrl) {
        this.groupCustomBaseUrl.style.display = provider === 'custom' ? 'flex' : 'none';
      }
      if (this.groupInputCustomModel) {
        this.groupInputCustomModel.style.display = provider === 'custom' ? 'flex' : 'none';
      }
      if (this.groupSelectModel) {
        this.groupSelectModel.style.display = provider === 'custom' ? 'none' : 'flex';
      }
      if (this.btnFetchOpenRouterModels) {
        this.btnFetchOpenRouterModels.style.display = (provider === 'gemini' || provider === 'openrouter') ? 'inline-block' : 'none';
      }

      if (provider === 'custom') {
        if (this.inputCustomBaseUrl) this.inputCustomBaseUrl.value = this.engine.customBaseUrl || 'https://api.openai.com/v1';
        if (this.inputCustomModel) this.inputCustomModel.value = this.engine.providerModels['custom'] || 'default';
        return;
      }

      if (!this.selectModel) return;
      this.selectModel.innerHTML = '';

      let modelList = [];
      if (provider === 'gemini') {
        modelList = [
          { value: 'gemini-3.1-flash-lite', label: 'Gemini 3.1 Flash-Lite (디폴트 / 무료 초고속)' },
          { value: 'gemini-3.5-flash-lite', label: 'Gemini 3.5 Flash-Lite (차세대 플래시)' },
          { value: 'gemini-3.8-flash', label: 'Gemini 3.8 Flash (최신 플래그십)' }
        ];
      } else if (provider === 'openrouter') {
        modelList = [
          { value: 'anthropic/claude-3.5-sonnet', label: 'Claude 3.5 Sonnet' },
          { value: 'deepseek/deepseek-r1', label: 'DeepSeek R1 (추론형)' },
          { value: 'deepseek/deepseek-chat', label: 'DeepSeek V3' },
          { value: 'google/gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
          { value: 'meta-llama/llama-3.3-70b-instruct', label: 'Llama 3.3 70B' }
        ];
      } else if (provider === 'claude') {
        modelList = [
          { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet (최신 플래그십)' },
          { value: 'claude-3-5-haiku-20241022', label: 'Claude 3.5 Haiku (초고속)' },
          { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' }
        ];
      }

      const savedSelectedModel = this.engine.providerModels[provider] || modelList[0]?.value;
      modelList.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.value;
        opt.textContent = m.label;
        if (m.value === savedSelectedModel) opt.selected = true;
        this.selectModel.appendChild(opt);
      });
    }

    // 모바일 퀵 심볼 바 삽입 및 래핑 로직
    handleQuickSymbolInsert(wrapType) {
      if (!this.userInput) return;
      const el = this.userInput;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const fullText = el.value;
      const selectedText = fullText.substring(start, end);

      if (wrapType === 'clear') {
        el.value = '';
        el.focus();
        return;
      }

      let prefix = '';
      let suffix = '';
      if (wrapType === 'quote') {
        prefix = '"';
        suffix = '"';
      } else if (wrapType === 'action') {
        prefix = '*';
        suffix = '*';
      } else if (wrapType === 'thought') {
        prefix = '(';
        suffix = ')';
      } else if (wrapType === 'wave') {
        prefix = '~';
        suffix = '';
      }

      if (selectedText.length > 0) {
        // 선택 영역 감싸기
        const newText = fullText.substring(0, start) + prefix + selectedText + suffix + fullText.substring(end);
        el.value = newText;
        el.focus();
        el.setSelectionRange(start + prefix.length, end + prefix.length);
      } else {
        // 커서 위치에 삽입 후 커서를 안쪽으로 이동
        const newText = fullText.substring(0, start) + prefix + suffix + fullText.substring(end);
        el.value = newText;
        el.focus();
        const cursorPosition = start + prefix.length;
        el.setSelectionRange(cursorPosition, cursorPosition);
      }
    }

    // 대화 내 실시간 검색기
    toggleSearchBar() {
      if (!this.chatSearchBar) return;
      const isHidden = this.chatSearchBar.style.display === 'none';
      if (isHidden) {
        this.chatSearchBar.style.display = 'flex';
        if (this.inputChatSearch) {
          this.inputChatSearch.focus();
          if (this.inputChatSearch.value) this.performChatSearch();
        }
      } else {
        this.closeSearchBar();
      }
    }

    closeSearchBar() {
      if (this.chatSearchBar) this.chatSearchBar.style.display = 'none';
      this.clearSearchHighlights();
    }

    clearSearchHighlights() {
      if (this.searchCountDisplay) this.searchCountDisplay.textContent = '0 / 0';
      this.searchResults = [];
      this.currentSearchIndex = -1;
      this.renderChatLog();
    }

    performChatSearch() {
      if (!this.inputChatSearch) return;
      const query = this.inputChatSearch.value.trim();
      if (!query) {
        this.clearSearchHighlights();
        return;
      }

      // 대화창 렌더링 후 하이라이트 노드 수집
      this.renderChatLog();
      if (!this.chatLog) return;

      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedQuery})`, 'gi');

      const textNodes = [];
      const walk = document.createTreeWalker(this.chatLog, NodeFilter.SHOW_TEXT, null, false);
      let n;
      while (n = walk.nextNode()) {
        if (n.parentNode && !n.parentNode.classList?.contains('msg-sender') && !n.parentNode.classList?.contains('thought-badge')) {
          textNodes.push(n);
        }
      }

      this.searchResults = [];
      for (const node of textNodes) {
        const val = node.nodeValue;
        if (regex.test(val)) {
          const span = document.createElement('span');
          span.innerHTML = val.replace(regex, '<mark class="search-highlight">$1</mark>');
          node.parentNode.replaceChild(span, node);
        }
      }

      const allMarks = this.chatLog.querySelectorAll('.search-highlight');
      this.searchResults = Array.from(allMarks);

      if (this.searchResults.length > 0) {
        this.currentSearchIndex = 0;
        this.updateSearchHighlightFocus();
      } else {
        this.currentSearchIndex = -1;
        if (this.searchCountDisplay) this.searchCountDisplay.textContent = '0 / 0';
      }
    }

    updateSearchHighlightFocus() {
      if (!this.searchResults || this.searchResults.length === 0) return;
      this.searchResults.forEach((el, idx) => {
        if (idx === this.currentSearchIndex) {
          el.classList.add('current');
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          el.classList.remove('current');
        }
      });
      if (this.searchCountDisplay) {
        this.searchCountDisplay.textContent = `${this.currentSearchIndex + 1} / ${this.searchResults.length}`;
      }
    }

    jumpSearchResult(dir) {
      if (!this.searchResults || this.searchResults.length === 0) return;
      this.currentSearchIndex += dir;
      if (this.currentSearchIndex < 0) this.currentSearchIndex = this.searchResults.length - 1;
      if (this.currentSearchIndex >= this.searchResults.length) this.currentSearchIndex = 0;
      this.updateSearchHighlightFocus();
    }

    updateNaiButtonVisibility() {
      if (this.btnTriggerNaiArt) {
        this.btnTriggerNaiArt.style.display = this.engine.naiEnabled && this.engine.naiApiKey ? 'inline-block' : 'none';
      }
    }

    async handleGenerateNaiArt() {
      if (!this.engine.naiEnabled || !this.engine.naiApiKey) {
        alert(this.t('errNaiKeyAndEnable'));
        return;
      }

      const char = this.engine.getActiveCharacter();
      const prompt = window.prompt(this.t('promptNaiTag'), '1boy, ' + (char.name || 'character') + ', solo, upper body, cinematic lighting, looking at viewer');
      if (!prompt) return;

      this.btnTriggerNaiArt.disabled = true;
      this.btnTriggerNaiArt.textContent = '...';
      try {
        const imgUrl = await this.engine.generateNaiIllustration(prompt);
        if (imgUrl) {
          // 채팅창에 삽화 메시지 추가
          this.engine.chatHistory.push({
            role: 'assistant',
            content: '🎨 *[NovelAI]*\n<img src="' + imgUrl + '" class="nai-bubble-img">',
            thought: ''
          });
          this.engine.saveSettings();
          this.renderChatLog();
          this.showToast(this.t('msgNaiArtGenerated'));
        }
      } catch (err) {
        alert(this.t('errNaiArtFailed', { err: err.message }));
      } finally {
        this.btnTriggerNaiArt.disabled = false;
        this.btnTriggerNaiArt.textContent = '🎨 삽화';
      }
    }

        applyI18nToUI() {
      const lang = this.engine.outputLanguage || 'ko';
      const d = I18N_DICT[lang] || I18N_DICT.ko;

      const setT = (id, text) => {
        const el = document.getElementById(id);
        if (el && text) el.textContent = text;
      };

      const setAttr = (id, attr, text) => {
        const el = document.getElementById(id);
        if (el && text) {
          if (typeof el.setAttribute === 'function') {
            el.setAttribute(attr, text);
          } else {
            el[attr] = text;
          }
        }
      };

      // Accordion Titles
      setT('titleCharSelect', d.charSelectTitle);
      setT('titleUserPersona', d.userPersonaTitle);
      setT('titleMemory', d.memoryTitle);
      setT('titleCharSettings', d.charSettingsTitle);
      setT('titlePrompt', d.promptTitle);
      setT('titleAiModel', d.aiModelTitle);
      setT('titleNai', d.naiTitle);
      setT('titleBackup', d.backupTitle);
      setT('titleNarrative', d.narrativeTitle);
      setT('titleViewerStyle', d.viewerTitle);
      setT('titleHelpGuide', d.helpGuideTitle);

      // Buttons
      setT('btnImportCard', d.btnAddCard);
      setT('btnCreateNewPersona', d.btnNewPersona);
      setT('btnSaveUserPersona', d.btnSavePersona);
      setT('btnDeleteUserPersona', d.btnDeletePersona);
      setT('btnExportPersonas', d.btnExportPersonas);
      setT('btnImportPersonas', d.btnImportPersonas);
      setT('btnAddMemoryNote', d.btnAddMemory);
      setT('btnClearAllMemoryNotes', d.btnClearAllMemory);
      setT('btnSaveCharSettings', d.btnSaveCharSettings);
      setT('btnSavePrompt', d.btnSavePrompt);
      setT('btnFetchOpenRouterModels', d.btnRefreshModels);
      setT('btnSaveSettings', d.btnSaveApi);
      setT('btnSaveNaiSettings', d.btnSaveNai);
      setT('btnExportChatJson', d.btnExportBackup);
      setT('btnImportChatJson', d.btnImportBackup);
      setT('btnExportChatTxt', d.btnExportTxt);
      setT('btnClearCurrentMemory', d.btnClearChat);
      setT('btnResetChat', d.btnReset);
      setT('btnSend', d.btnSend);

      // Quick Symbol Toolbar Buttons
      const btnQuote = document.querySelector('.btn-quick-symbol[data-wrap="quote"]');
      if (btnQuote && d.symQuote) btnQuote.textContent = d.symQuote;
      const btnAction = document.querySelector('.btn-quick-symbol[data-wrap="action"]');
      if (btnAction && d.symAction) btnAction.textContent = d.symAction;
      const btnThought = document.querySelector('.btn-quick-symbol[data-wrap="thought"]');
      if (btnThought && d.symThought) btnThought.textContent = d.symThought;
      const btnClear = document.querySelector('.btn-quick-symbol[data-wrap="clear"]');
      if (btnClear && d.symClear) btnClear.textContent = d.symClear;

      // Thought Badge & API Guide
      const thoughtBadgeEl = document.querySelector('.thought-badge');
      if (thoughtBadgeEl && d.thoughtBadge) thoughtBadgeEl.textContent = d.thoughtBadge;
      setT('apiKeyGuideDesc', d.apiKeyGuide);

      // Placeholders
      setAttr('userInput', 'placeholder', d.inputPlaceholder);
      setAttr('inputNewMemory', 'placeholder', d.memoryInputPlaceholder);
      setAttr('inputChatSearch', 'placeholder', d.searchPlaceholder);

      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
      this.updateCharacterUI();
    }


    loadSettingsToUI() {
      this.renderUserPersonaSelector();
      this.loadUserPersonaToUI();

      // AI Model Settings
      if (this.selectProvider) this.selectProvider.value = this.engine.apiProvider || 'gemini';
      this.onProviderChanged(this.engine.apiProvider || 'gemini');
      if (this.inputApiKey) this.inputApiKey.value = this.engine.apiKey || '';
      if (this.inputCustomBaseUrl) this.inputCustomBaseUrl.value = this.engine.customBaseUrl || 'https://api.openai.com/v1';
      if (this.engine.apiProvider === 'custom') {
        if (this.inputCustomModel) this.inputCustomModel.value = this.engine.modelName || '';
      } else {
        if (this.selectModel) this.selectModel.value = this.engine.modelName || 'gemini-3.1-flash-lite';
      }

      // NAI Settings
      if (this.toggleNaiEnabled) this.toggleNaiEnabled.checked = this.engine.naiEnabled || false;
      if (this.inputNaiApiKey) this.inputNaiApiKey.value = this.engine.naiApiKey || '';
      if (this.selectNaiTriggerMode) {
        this.selectNaiTriggerMode.value = this.engine.naiTriggerMode || 'manual';
        if (this.groupNaiTurnInterval) {
          // always visible
        }
      }
      if (this.inputNaiTurnInterval) this.inputNaiTurnInterval.value = this.engine.naiTurnInterval || 5;
      if (this.turnIntervalDisplay) this.turnIntervalDisplay.textContent = (this.engine.naiTurnInterval || 5) + ' ' + this.t('naiTurnSuffix');
      if (this.selectNaiModel) this.selectNaiModel.value = this.engine.naiModel || 'nai-diffusion-5-full';
      if (this.inputNaiPositive) this.inputNaiPositive.value = this.engine.naiPositivePrompt || 'masterpiece, best quality, aesthetic, highly detailed, beautiful lighting, cinematic composition';
      if (this.inputNaiNegative) this.inputNaiNegative.value = this.engine.naiNegativePrompt || 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry';
      this.updateNaiButtonVisibility();

      // Custom Prompt
      if (this.editCustomPrompt) this.editCustomPrompt.value = this.engine.customPrompt || '';

      // Lang chips
      if (this.langChips) {
        const currentLang = this.engine.outputLanguage || 'ko';
        this.langChips.forEach(chip => {
          if (chip.getAttribute('data-lang') === currentLang) {
            chip.classList.add('active');
          } else {
            chip.classList.remove('active');
          }
        });
      }

      // Length chips
      if (this.lengthChips) {
        const currentLen = this.engine.lengthPreset || 'standard';
        this.lengthChips.forEach(chip => {
          if (chip.getAttribute('data-length') === currentLen) {
            chip.classList.add('active');
          } else {
            chip.classList.remove('active');
          }
        });
      }

      // Font Size chips
      if (this.fontSizeChips) {
        const currentSize = this.engine.fontSizePreset || 'medium';
        this.fontSizeChips.forEach(chip => {
          if (chip.getAttribute('data-size') === currentSize) {
            chip.classList.add('active');
          } else {
            chip.classList.remove('active');
          }
        });
      }

      // Line Height chips
      if (this.lineHeightChips) {
        const currentLh = this.engine.lineHeightPreset || 'normal';
        this.lineHeightChips.forEach(chip => {
          if (chip.getAttribute('data-lh') === currentLh) {
            chip.classList.add('active');
          } else {
            chip.classList.remove('active');
          }
        });
      }

      this.applyViewerStyleToChat();
      this.applyI18nToUI();

      if (this.selectNarrativeStyle) this.selectNarrativeStyle.value = this.engine.narrativeStyle || 'balanced';
      if (this.inputTemperature) this.inputTemperature.value = this.engine.temperature || 0.85;
      if (this.tempValDisplay) this.tempValDisplay.textContent = (this.engine.temperature || 0.85).toFixed(2);
    }

    exportUserPersonasJson() {
      const data = {
        version: 'TouchRP_Personas_v1',
        exportDate: new Date().toISOString(),
        userPersonas: this.engine.userPersonas,
        activeUserPersonaId: this.engine.activeUserPersonaId
      };
      const jsonStr = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'personas_' + new Date().toISOString().slice(0, 10) + '.json';
      a.click();
      URL.revokeObjectURL(url);
      this.showToast(this.t('msgPersonasExported'));
    }

    async importUserPersonasJson(e) {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (Array.isArray(data.userPersonas)) {
          this.engine.userPersonas = data.userPersonas;
          if (data.activeUserPersonaId) this.engine.activeUserPersonaId = data.activeUserPersonaId;
          this.engine.syncActivePersona();
          this.engine.saveSettings();
          this.renderUserPersonaSelector();
          this.loadUserPersonaToUI();
          this.showToast(this.t('msgPersonasImported', { count: data.userPersonas.length }));
        } else {
          alert(this.t('errInvalidPersonaBackup'));
        }
      } catch (err) {
        alert(this.t('errPersonaLoadFailed', { err: err.message }));
      }
      if (this.personaFileInput) this.personaFileInput.value = '';
    }

    renderUserPersonaSelector() {
      if (!this.selectUserPersona) return;
      this.selectUserPersona.innerHTML = '';
      const list = this.engine.userPersonas || [];
      list.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.name || '페르소나';
        if (p.id === this.engine.activeUserPersonaId) opt.selected = true;
        this.selectUserPersona.appendChild(opt);
      });
    }

    loadUserPersonaToUI() {
      const p = this.engine.getActiveUserPersona();
      if (p) {
        if (this.inputUserName) this.inputUserName.value = p.name || '당신';
        if (this.inputUserPersona) this.inputUserPersona.value = p.personaDesc || '';
        if (this.selectUserPersona) this.selectUserPersona.value = p.id;
      }
    }

    renderCharacterSelector() {
      if (!this.charSelect) return;
      this.charSelect.innerHTML = '';
      for (const [id, char] of this.engine.characters.entries()) {
        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = char.name;
        if (id === this.engine.activeCharId) opt.selected = true;
        this.charSelect.appendChild(opt);
      }
    }

    updateCharacterUI() {
      const char = this.engine.getActiveCharacter();
      if (!char) return;

      if (this.charName) this.charName.textContent = char.name;
      if (this.headerCharName) this.headerCharName.textContent = char.name;

      const avatarSrc = char.avatar || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%232a324b"/><text x="50" y="55" fill="%23fff" font-size="32" text-anchor="middle" dominant-baseline="middle">👤</text></svg>';

      if (this.charAvatar) {
        this.charAvatar.src = avatarSrc;
        this.charAvatar.style.display = 'block';
      }
      if (this.headerAvatar) {
        this.headerAvatar.src = avatarSrc;
        this.headerAvatar.style.display = 'block';
      }

      if (this.charTags) {
        this.charTags.innerHTML = '';
        const tags = char.tags || [];
        tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'char-tag';
          span.textContent = '#' + t;
          this.charTags.appendChild(span);
        });
      }

      if (this.editPersonaDesc) {
        this.editPersonaDesc.value = char.personaDesc || '';
      }
      if (this.editScenarioDesc) {
        this.editScenarioDesc.value = char.scenarioDesc || '';
      }
    }

    applyViewerStyleToChat() {
      if (!this.chatLog) return;
      this.chatLog.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
      this.chatLog.classList.remove('lh-compact', 'lh-normal', 'lh-relaxed');

      this.chatLog.classList.add('font-' + (this.engine.fontSizePreset || 'medium'));
      this.chatLog.classList.add('lh-' + (this.engine.lineHeightPreset || 'normal'));
    }

    renderChatLog() {
      if (!this.chatLog) return;
      this.chatLog.innerHTML = '';

      let latestThought = '';
      const lang = this.engine.outputLanguage || 'ko';
      const d = I18N_DICT[lang] || I18N_DICT.ko;

      this.engine.chatHistory.forEach((msg, idx) => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble ' + (msg.role === 'assistant' ? 'assistant-msg' : 'user-msg');

        // Bubble Header
        const header = document.createElement('div');
        header.className = 'bubble-header';

        const sender = document.createElement('div');
        sender.className = 'msg-sender';
        sender.textContent = msg.role === 'assistant' ? this.engine.getActiveCharacter().name : this.engine.userName;

        const actions = document.createElement('div');
        actions.className = 'msg-actions';

        if (msg.role === 'assistant') {
          const btnReroll = document.createElement('button');
          btnReroll.type = 'button';
          btnReroll.className = 'btn-msg-action btn-msg-resend';
          btnReroll.textContent = d.btnReroll || '🔄 리롤';
          btnReroll.title = 'Reroll / Regenerate';
          btnReroll.addEventListener('click', () => this.resendFromMessage(idx));

          const btnEdit = document.createElement('button');
          btnEdit.type = 'button';
          btnEdit.className = 'btn-msg-action';
          btnEdit.textContent = d.btnEdit || '✏️ 수정';
          btnEdit.title = 'Edit';
          btnEdit.addEventListener('click', () => this.startEditMessage(idx));

          const btnDel = document.createElement('button');
          btnDel.type = 'button';
          btnDel.className = 'btn-msg-action btn-msg-delete';
          btnDel.textContent = d.btnDelete || '🗑️ 삭제';
          btnDel.title = 'Delete';
          btnDel.addEventListener('click', () => this.deleteMessage(idx));

          actions.appendChild(btnReroll);
          actions.appendChild(btnEdit);
          actions.appendChild(btnDel);
        } else {
          const btnEdit = document.createElement('button');
          btnEdit.type = 'button';
          btnEdit.className = 'btn-msg-action';
          btnEdit.textContent = d.btnEdit || '✏️ 수정';
          btnEdit.title = 'Edit';
          btnEdit.addEventListener('click', () => this.startEditMessage(idx));

          const btnResend = document.createElement('button');
          btnResend.type = 'button';
          btnResend.className = 'btn-msg-action btn-msg-resend';
          btnResend.textContent = d.btnResend || '↵ 재전송';
          btnResend.title = 'Resend from here';
          btnResend.addEventListener('click', () => this.resendFromMessage(idx));

          const btnDel = document.createElement('button');
          btnDel.type = 'button';
          btnDel.className = 'btn-msg-action btn-msg-delete';
          btnDel.textContent = d.btnDelete || '🗑️ 삭제';
          btnDel.title = 'Delete';
          btnDel.addEventListener('click', () => this.deleteMessage(idx));

          actions.appendChild(btnEdit);
          actions.appendChild(btnResend);
          actions.appendChild(btnDel);
        }

        header.appendChild(sender);
        header.appendChild(actions);
        bubble.appendChild(header);

        // Content / Edit mode
        if (this.editingIndex === idx) {
          const editBox = document.createElement('div');
          editBox.className = 'bubble-edit-area';

          const textarea = document.createElement('textarea');
          textarea.className = 'bubble-edit-textarea';
          textarea.rows = 4;
          textarea.value = msg.content;

          const btnRow = document.createElement('div');
          btnRow.className = 'bubble-edit-btns';

          const btnSave = document.createElement('button');
          btnSave.type = 'button';
          btnSave.className = 'btn-mini';
          btnSave.textContent = this.t('btnSaveOnly');
          btnSave.title = this.t('titleSaveOnly');
          btnSave.addEventListener('click', () => {
            msg.content = textarea.value.trim();
            this.editingIndex = -1;
            this.engine.saveSettings();
            this.renderChatLog();
            this.showToast(this.t('msgDialogueEdited'));
          });

          const btnSaveAndResend = document.createElement('button');
          btnSaveAndResend.type = 'button';
          btnSaveAndResend.className = 'btn-mini btn-primary';
          btnSaveAndResend.textContent = msg.role === 'user' ? this.t('btnEditAndResend') : this.t('btnEditSave');
          btnSaveAndResend.title = this.t('titleEditAndResend');
          btnSaveAndResend.addEventListener('click', () => {
            msg.content = textarea.value.trim();
            this.editingIndex = -1;
            if (msg.role === 'user') {
              this.engine.chatHistory = this.engine.chatHistory.slice(0, idx + 1);
              this.engine.saveSettings();
              this.triggerAiResponseAfterEdit();
            } else {
              this.engine.saveSettings();
              this.renderChatLog();
              this.showToast(this.t('msgDialogueEdited'));
            }
          });

          const btnCancel = document.createElement('button');
          btnCancel.type = 'button';
          btnCancel.className = 'btn-mini';
          btnCancel.textContent = this.t('btnCancel');
          btnCancel.addEventListener('click', () => {
            this.editingIndex = -1;
            this.renderChatLog();
          });

          btnRow.appendChild(btnCancel);
          btnRow.appendChild(btnSave);
          if (msg.role === 'user') {
            btnRow.appendChild(btnSaveAndResend);
          }
          editBox.appendChild(textarea);
          editBox.appendChild(btnRow);
          bubble.appendChild(editBox);
        } else {
          const content = document.createElement('div');
          content.className = 'msg-content';
          content.innerHTML = this.formatRPText(msg.content);
          bubble.appendChild(content);
        }

        this.chatLog.appendChild(bubble);

        if (msg.role === 'assistant' && msg.thought) {
          latestThought = msg.thought;
        }
      });

      if (this.thoughtBox && this.thoughtText) {
        if (latestThought) {
          this.thoughtText.textContent = '"' + latestThought + '"';
          this.thoughtBox.style.display = 'flex';
        } else {
          this.thoughtBox.style.display = 'none';
        }
      }

      this.chatLog.scrollTop = this.chatLog.scrollHeight;
    }

    async resendFromMessage(idx) {
      const msg = this.engine.chatHistory[idx];
      if (!msg) return;

      if (msg.role === 'user') {
        if (confirm(this.t('confirmBranchFromTurn'))) {
          this.engine.chatHistory = this.engine.chatHistory.slice(0, idx + 1);
          this.engine.saveSettings();
          await this.triggerAiResponseAfterEdit();
        }
      } else {
        if (confirm(this.t('confirmReroll'))) {
          this.engine.chatHistory = this.engine.chatHistory.slice(0, idx);
          this.engine.saveSettings();
          await this.triggerAiResponseAfterEdit();
        }
      }
    }

    async triggerAiResponseAfterEdit() {
      if (!this.engine.apiKey) {
        alert(this.t('errApiKeyNotSet'));
        return;
      }

      this.btnSend.disabled = true;
      this.btnSend.textContent = this.t('txtThinking');
      this.renderChatLog();

      const loadingBubble = document.createElement('div');
      loadingBubble.className = 'chat-bubble assistant-msg loading-bubble';
      loadingBubble.innerHTML = '<div class="msg-sender">' + this.engine.getActiveCharacter().name + '</div><div class="msg-content"><span class="spinner">✦</span> ' + this.t('txtRegenerating') + '</div>';
      this.chatLog.appendChild(loadingBubble);
      this.chatLog.scrollTop = this.chatLog.scrollHeight;

      try {
        await this.engine.generateAssistantTurn(null);
        this.renderChatLog();
        this.updateMemoryInfoText();
      } catch (err) {
        alert(this.t('errRegenerationFailed', { err: err.message }));
        this.renderChatLog();
      } finally {
        this.btnSend.disabled = false;
        this.btnSend.textContent = this.t('btnSend');
      }
    }

    startEditMessage(index) {
      this.editingIndex = index;
      this.renderChatLog();
    }

    deleteMessage(index) {
      if (confirm(this.t('confirmDeleteMessage'))) {
        this.engine.chatHistory.splice(index, 1);
        this.editingIndex = -1;
        this.engine.saveSettings();
        this.renderChatLog();
        this.showToast(this.t('msgDialogueDeleted'));
      }
    }

    formatRPText(text) {
      if (!text) return '';
      let escaped = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      escaped = escaped.replace(/(".*?")/g, '<span class="rp-dialogue">$1</span>');
      escaped = escaped.replace(/(\*[\s\S]*?\*)/g, '<span class="rp-action">$1</span>');
      escaped = escaped.replace(/\n/g, '<br>');

      return escaped;
    }

    async handleSendMessage() {
      if (!this.userInput) return;
      const text = this.userInput.value.trim();
      if (!text) return;

      if (!this.engine.apiKey) {
        alert(this.t('errEnterApiKeyFirstLeft'));
        if (this.leftPanel) this.leftPanel.classList.add('open');
        const apiSec = document.getElementById('sectionApi');
        if (apiSec) apiSec.classList.remove('collapsed');
        return;
      }

      // 입력창 비우고 유저 메시지를 대화 기록에 먼저 안전하게 보존!
      this.userInput.value = '';
      this.btnSend.disabled = true;
      this.btnSend.textContent = this.t('txtThinking');

      // 1. 유저 메시지를 히스토리에 먼저 영구 추가 및 저장 (절대 사라지지 않음)
      this.engine.chatHistory.push({
        role: 'user',
        content: text
      });
      this.engine.saveSettings();
      this.renderChatLog();

      // 2. 로딩 말풍선 표시
      const loadingBubble = document.createElement('div');
      loadingBubble.className = 'chat-bubble assistant-msg loading-bubble';
      loadingBubble.innerHTML = '<div class="msg-sender">' + this.engine.getActiveCharacter().name + '</div><div class="msg-content"><span class="spinner">✦</span> ' + this.t('txtGenerating') + '</div>';
      this.chatLog.appendChild(loadingBubble);
      this.chatLog.scrollTop = this.chatLog.scrollHeight;

      try {
        // 3. AI 응답 생성 요청 (generateAssistantTurn)
        await this.engine.generateAssistantTurn(null);
        this.renderChatLog();
        this.updateMemoryInfoText();
      } catch (err) {
        // [중요]: 오류가 나도 유저 메시지는 절대로 삭제(pop)하지 않고 대화창에 그대로 남김!
        alert(this.t('errGenerateFailed', { err: err.message }));
        this.renderChatLog();
        this.updateMemoryInfoText();
      } finally {
        this.btnSend.disabled = false;
        this.btnSend.textContent = this.t('btnSend');
      }
    }

    showToast(msg) {
      const toast = document.createElement('div');
      toast.className = 'rp-toast';
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.classList.add('show'), 10);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }
  }

  root.TouchRPUIController = TouchRPUIController;

  async function initTouchRP() {
    if (!window.app) {
      window.app = new TouchRPUIController();
      await window.app.init();
    }
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initTouchRP);
    } else {
      initTouchRP();
    }
  }

})(typeof window !== 'undefined' ? window : global);
