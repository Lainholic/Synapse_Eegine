/**
 * [rp_engine.src.js] TouchRP Lite — Pure RP Core Engine
 * - Multi-Persona Slots
 * - Long-Term Memory Notes & Background Rolling Auto-Summary
 * - Dynamic Lorebook (Character Book) Engine
 * - Multi-Provider (Gemini / OpenRouter / Claude / OpenAI Compatible) & Dynamic Model Fetching
 * - Message Controls: Reroll / Edit / Delete / Branch
 * - Pure Client IndexedDB Unlimited Storage + LocalStorage Fallback & Auto-Migration
 * - NovelAI V5 Integration
 */

(function(root) {
  'use strict';

  const BUILTIN_CHARACTERS = {};

  // ============================================================================
  // 1. IndexedDB 무제한 스토리지 헬퍼 (TouchRPDB)
  // ============================================================================
  class TouchRPDB {
    constructor(dbName = 'TouchRP_DB_v1') {
      this.dbName = dbName;
      this.db = null;
      this.ready = this.init();
    }

    async init() {
      if (typeof window === 'undefined' || !window.indexedDB) {
        return null;
      }
      return new Promise((resolve, reject) => {
        const req = window.indexedDB.open(this.dbName, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains('keyval')) {
            db.createObjectStore('keyval');
          }
        };
        req.onsuccess = (e) => {
          this.db = e.target.result;
          this.migrateFromLocalStorage();
          resolve(this.db);
        };
        req.onerror = () => {
          console.warn('IndexedDB 열기 실패, localStorage 모드로 동작합니다.');
          resolve(null);
        };
      });
    }

    async migrateFromLocalStorage() {
      if (typeof localStorage === 'undefined') return;
      try {
        const migrated = localStorage.getItem('touchrp_idb_migrated');
        if (migrated === 'true') return;
        
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('touchrp_')) {
            const v = localStorage.getItem(k);
            await this.set(k, v);
          }
        }
        localStorage.setItem('touchrp_idb_migrated', 'true');
      } catch (e) {
        console.warn('LocalStorage -> IndexedDB 자동 마이그레이션 실패:', e);
      }
    }

    async get(key) {
      await this.ready;
      if (!this.db) {
        return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
      }
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction('keyval', 'readonly');
          const store = tx.objectStore('keyval');
          const req = store.get(key);
          req.onsuccess = () => {
            const val = req.result;
            if (val === undefined && typeof localStorage !== 'undefined') {
              resolve(localStorage.getItem(key));
            } else {
              resolve(val);
            }
          };
          req.onerror = () => {
            resolve(typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null);
          };
        } catch (e) {
          resolve(typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null);
        }
      });
    }

    async set(key, value) {
      await this.ready;
      // LocalStorage에도 백업 저장 시도
      if (typeof localStorage !== 'undefined') {
        try { localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)); } catch (e) {}
      }
      if (!this.db) return;
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction('keyval', 'readwrite');
          const store = tx.objectStore('keyval');
          store.put(value, key);
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    }

    async remove(key) {
      await this.ready;
      if (typeof localStorage !== 'undefined') {
        try { localStorage.removeItem(key); } catch (e) {}
      }
      if (!this.db) return;
      return new Promise((resolve) => {
        try {
          const tx = this.db.transaction('keyval', 'readwrite');
          const store = tx.objectStore('keyval');
          store.delete(key);
          tx.oncomplete = () => resolve(true);
          tx.onerror = () => resolve(false);
        } catch (e) {
          resolve(false);
        }
      });
    }
  }

  // ============================================================================
  // 2. TouchRPEngine 메인 클래스
  // ============================================================================
  class TouchRPEngine {
    constructor() {
      this.db = new TouchRPDB();
      this.characters = new Map();
      this.activeCharId = '';
      this.chatHistory = [];
      this.userPersonas = [
        { id: 'default', name: '당신', personaDesc: '기본 페르소나' }
      ];
      this.activeUserPersonaId = 'default';
      this.userName = '당신';
      this.userPersona = '';
      this.memoryNotes = [];
      this.apiProvider = 'gemini'; // 'gemini' | 'openrouter' | 'claude' | 'custom'
      this.apiKey = '';
      this.modelName = 'gemini-3.1-flash-lite';
      this.customBaseUrl = 'https://api.openai.com/v1';

      // 프로바이더별 독립 API 키 및 선택 모델 보관함
      this.providerKeys = {
        gemini: '',
        openrouter: '',
        claude: '',
        custom: ''
      };
      this.providerModels = {
        gemini: 'gemini-3.1-flash-lite',
        openrouter: 'anthropic/claude-3.5-sonnet',
        claude: 'claude-3-5-sonnet-20241022',
        custom: 'default'
      };

      // NovelAI Settings
      this.naiEnabled = false;
      this.naiApiKey = '';
      this.naiModel = 'nai-diffusion-5-full';
      this.naiPositivePrompt = 'masterpiece, best quality, aesthetic, highly detailed, beautiful lighting, cinematic composition';
      this.naiNegativePrompt = 'lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry';
      this.naiTriggerMode = 'manual';
      this.naiTurnInterval = 5;
      this.turnCounter = 0;

      // 자동 요약 (Rolling Auto-Summary)
      this.autoSummaryEnabled = true;
      this.autoSummaryInterval = 15; // 15턴마다 자동 요약
      this.lastSummaryTurn = 0;

      this.maxContextTurns = 20; // 최근 20턴 슬라이딩 윈도우
      this.lengthPreset = 'standard';
      this.narrativeStyle = 'balanced';
      this.temperature = 0.85;
      this.maxTokens = 2048;
      this.customPrompt = '';
      this.outputLanguage = 'ko';
      this.fontSizePreset = 'medium';
      this.lineHeightPreset = 'normal';

      this.initBuiltinCharacters();
      this.loadSettings();
    }

    initBuiltinCharacters() {
      for (const [id, char] of Object.entries(BUILTIN_CHARACTERS)) {
        let c = { ...char };
        this.characters.set(id, c);
      }
      if (!this.activeCharId && this.characters.size > 0) {
        this.activeCharId = this.characters.keys().next().value;
      }
    }

    getActiveUserPersona() {
      return this.userPersonas.find(p => p.id === this.activeUserPersonaId) || this.userPersonas[0];
    }

    addUserPersona(name, personaDesc) {
      const id = 'user_p_' + Date.now();
      const p = {
        id,
        name: name || '새 페르소나',
        personaDesc: personaDesc || ''
      };
      this.userPersonas.push(p);
      this.activeUserPersonaId = id;
      this.syncActivePersona();
      this.saveSettings();
      return p;
    }

    deleteUserPersona(id) {
      if (this.userPersonas.length <= 1) return false;
      this.userPersonas = this.userPersonas.filter(p => p.id !== id);
      if (this.activeUserPersonaId === id) {
        this.activeUserPersonaId = this.userPersonas[0].id;
      }
      this.syncActivePersona();
      this.saveSettings();
      return true;
    }

    selectUserPersona(id) {
      const p = this.userPersonas.find(item => item.id === id);
      if (p) {
        this.activeUserPersonaId = id;
        this.syncActivePersona();
        this.saveSettings();
        return p;
      }
      return null;
    }

    syncActivePersona() {
      const p = this.getActiveUserPersona();
      if (p) {
        this.userName = p.name || '당신';
        this.userPersona = p.personaDesc || '';
      }
    }

    addMemoryNote(text) {
      if (!text || !text.trim()) return false;
      const note = {
        id: 'mem_' + Date.now(),
        text: text.trim(),
        createdAt: new Date().toISOString()
      };
      this.memoryNotes.push(note);
      this.saveSettings();
      return note;
    }

    deleteMemoryNote(id) {
      this.memoryNotes = this.memoryNotes.filter(n => n.id !== id);
      this.saveSettings();
    }

    clearAllMemoryNotes() {
      this.memoryNotes = [];
      this.saveSettings();
    }

    // ============================================================================
    // 3. AI 대화 요약 (수동 및 백그라운드 롤링 자동 요약)
    // ============================================================================
    async summarizeHistory(isAuto = false) {
      if (this.chatHistory.length < 4) {
        if (!isAuto) throw new Error('요약할 대화 기록이 충분하지 않습니다 (최소 4턴 이상 권장).');
        return '';
      }
      if (!this.apiKey) {
        if (!isAuto) throw new Error('API 키를 먼저 입력해 주세요.');
        return '';
      }

      // 대화 기록을 텍스트로 압축
      let fullConversation = '';
      const sliceTurns = isAuto ? this.chatHistory.slice(-20) : this.chatHistory;
      sliceTurns.forEach(m => {
        const sender = m.role === 'assistant' ? this.getActiveCharacter().name : this.userName;
        fullConversation += `${sender}: ${m.content}\n\n`;
      });

      const summaryPrompt = `[SYSTEM TASK: CONVERSATION SUMMARY]
아래는 '${this.userName}'와 캐릭터 '${this.getActiveCharacter().name}'가 나눈 롤플레이 대화 기록입니다.

=== 대화 기록 ===
${fullConversation}
=================

[지침]
지금까지의 핵심 사건, 인물 간의 관계 변화, 중요한 약속, 감정선 등을 3~5줄 내외의 압축된 요약본으로 작성하세요. 반드시 한국어로 작성하세요.`;

      let summaryText = '';
      try {
        summaryText = await this.callActiveProvider(summaryPrompt, null, true);
      } catch (e) {
        console.warn('요약 생성 실패:', e);
        if (!isAuto) throw e;
        return '';
      }

      if (summaryText && summaryText.trim()) {
        const prefix = isAuto ? `[자동 롤링 요약 (최근 대화)]: ` : `[대화 요약]: `;
        this.addMemoryNote(`${prefix}${summaryText.trim()}`);
        this.lastSummaryTurn = this.chatHistory.length;
      }
      return summaryText.trim();
    }

    async checkAndTriggerAutoSummary() {
      if (!this.autoSummaryEnabled || !this.apiKey) return;
      const currentTurns = this.chatHistory.length;
      if (currentTurns - this.lastSummaryTurn >= (this.autoSummaryInterval || 15)) {
        try {
          await this.summarizeHistory(true);
        } catch (e) {
          console.warn('Background auto summary failed:', e);
        }
      }
    }

    getMemoryNotesPrompt() {
      if (!this.memoryNotes || this.memoryNotes.length === 0) return '';
      const list = this.memoryNotes.map((n, i) => `${i + 1}. ${n.text}`).join('\n');
      return `[세션 간 장기 누적 기억 (Long-Term Memory Notes)]\n당신은 유저와 과거에 아래의 중요한 사건, 약속, 비밀, 사실들을 공유하고 있습니다:\n${list}\n위 기억들을 잊지 말고 인지하여 자연스러운 대화와 감정선에 지속적으로 반영하세요.\n`;
    }

    getTriggeredLorebookEntries() {
      const char = this.getActiveCharacter();
      if (!char || !char.characterBook || !Array.isArray(char.characterBook.entries)) {
        return '';
      }

      let recentContext = '';
      const recentTurns = this.chatHistory.slice(-5);
      for (const t of recentTurns) {
        recentContext += ' ' + (t.content || '');
      }

      const activeEntries = [];
      for (const entry of char.characterBook.entries) {
        if (!entry || !entry.content) continue;
        const keys = entry.keys || entry.key || [];
        const isAlwaysActive = entry.constant === true || (entry.enabled === true && keys.length === 0);

        let matched = isAlwaysActive;
        if (!matched && Array.isArray(keys)) {
          for (const k of keys) {
            if (k && recentContext.toLowerCase().includes(k.toLowerCase())) {
              matched = true;
              break;
            }
          }
        }

        if (matched) {
          activeEntries.push(entry.content.trim());
        }
      }

      if (activeEntries.length > 0) {
        return '[활성화된 세계관 / 로어북 지식 (Lorebook Data)]\n' + activeEntries.join('\n\n') + '\n';
      }
      return '';
    }

    getNarrativeStyleInstruction() {
      let lengthGuide = '';
      if (this.lengthPreset === 'short') {
        lengthGuide = '[서술 분량: 단문 (1~2문단)]\n- 군더더기 없이 핵심 상황과 대사 위주로 1~2문단의 짧고 빠른 호흡으로 서술하세요.';
      } else if (this.lengthPreset === 'long') {
        lengthGuide = '[서술 분량: 장문 (5~8문단)]\n- 상황의 분위기, 인물의 감정선과 서사를 풍부하게 살려 5~8문단 분량으로 깊이 있게 서술하세요.';
      } else if (this.lengthPreset === 'epic') {
        lengthGuide = '[서술 분량: 초장문 (10문단 이상 / 웹소설 한 화 분량)]\n- 기승전결의 서사적 호흡과 복합적인 인물 심리를 압도적인 10문단 이상의 소설체로 웅장하게 서술하세요.';
      } else {
        lengthGuide = '[서술 분량: 중문/표준 (3~4문단)]\n- 적절한 분량의 상황 전개와 대사를 균형 있게 3~4문단으로 서술하세요.';
      }

      let ratioGuide = '';
      if (this.narrativeStyle === 'novel') {
        ratioGuide = '[지문/대사 비중: 지문 70% : 대사 30%]\n- 인물의 내면 심리와 서사적 상황 전개를 중심으로 깊이 있게 묘사하세요.';
      } else if (this.narrativeStyle === 'talk') {
        ratioGuide = '[지문/대사 비중: 지문 30% : 대사 70%]\n- 인물 간의 자연스러운 대화와 티키타카를 중심으로 서술하세요.';
      } else {
        ratioGuide = '[지문/대사 비중: 지문 50% : 대사 50%]\n- 상황 지문과 대사를 균형 있게 조화시켜 서술하세요.';
      }

      return lengthGuide + '\n' + ratioGuide;
    }

    saveActiveCharacterPersona(personaDesc, scenarioDesc) {
      const char = this.getActiveCharacter();
      if (char) {
        char.personaDesc = personaDesc;
        char.scenarioDesc = scenarioDesc;
        this.db.set('touchrp_char_persona_' + char.id, JSON.stringify({
          personaDesc: personaDesc,
          scenarioDesc: scenarioDesc
        }));
      }
    }

    async loadSettings() {
      await this.db.ready;
      try {
        // Custom Characters
        const customCharsJson = await this.db.get('touchrp_custom_characters');
        if (customCharsJson) {
          try {
            const list = typeof customCharsJson === 'string' ? JSON.parse(customCharsJson) : customCharsJson;
            if (Array.isArray(list)) {
              for (const c of list) {
                if (c && c.id) this.characters.set(c.id, c);
              }
            }
          } catch (e) {}
        }

        const key = await this.db.get('touchrp_api_key');
        if (key) this.apiKey = key;
        const provider = await this.db.get('touchrp_provider');
        if (provider) this.apiProvider = provider;
        const model = await this.db.get('touchrp_model');
        if (model) this.modelName = model;
        const customUrl = await this.db.get('touchrp_custom_base_url');
        if (customUrl) this.customBaseUrl = customUrl;

        // 프로바이더별 키 및 모델 로드
        const savedKeys = await this.db.get('touchrp_provider_keys');
        if (savedKeys) {
          try {
            this.providerKeys = typeof savedKeys === 'string' ? JSON.parse(savedKeys) : savedKeys;
          } catch (e) {}
        }
        if (this.apiKey && !this.providerKeys[this.apiProvider]) {
          this.providerKeys[this.apiProvider] = this.apiKey;
        }

        const savedModels = await this.db.get('touchrp_provider_models');
        if (savedModels) {
          try {
            this.providerModels = typeof savedModels === 'string' ? JSON.parse(savedModels) : savedModels;
          } catch (e) {}
        }
        if (this.modelName && !this.providerModels[this.apiProvider]) {
          this.providerModels[this.apiProvider] = this.modelName;
        }

        const savedUserPersonas = await this.db.get('touchrp_user_personas_list');
        if (savedUserPersonas) {
          try {
            this.userPersonas = typeof savedUserPersonas === 'string' ? JSON.parse(savedUserPersonas) : savedUserPersonas;
          } catch (e) {}
        }
        const savedActivePersonaId = await this.db.get('touchrp_active_user_persona_id');
        if (savedActivePersonaId) {
          this.activeUserPersonaId = savedActivePersonaId;
        }
        this.syncActivePersona();

        const savedActiveChar = await this.db.get('touchrp_active_char');
        if (savedActiveChar && this.characters.has(savedActiveChar)) {
          this.activeCharId = savedActiveChar;
        } else if (!this.activeCharId && this.characters.size > 0) {
          this.activeCharId = this.characters.keys().next().value;
        }

        // 활성 캐릭터의 대화, 메모리, 커스텀 프롬프트 로드
        if (this.activeCharId) {
          await this.loadCharacterData(this.activeCharId);
        }

        const savedLang = await this.db.get('touchrp_output_lang');
        if (savedLang) this.outputLanguage = savedLang;

        const savedLen = await this.db.get('touchrp_length_preset');
        if (savedLen) this.lengthPreset = savedLen;

        const savedNarrative = await this.db.get('touchrp_narrative_style');
        if (savedNarrative) this.narrativeStyle = savedNarrative;

        const savedFont = await this.db.get('touchrp_font_size');
        if (savedFont) this.fontSizePreset = savedFont;

        const savedLine = await this.db.get('touchrp_line_height');
        if (savedLine) this.lineHeightPreset = savedLine;

        // NAI
        const naiEn = await this.db.get('touchrp_nai_enabled');
        if (naiEn !== null) this.naiEnabled = (naiEn === 'true' || naiEn === true);

        const naiKey = await this.db.get('touchrp_nai_api_key');
        if (naiKey) this.naiApiKey = naiKey;

        const naiM = await this.db.get('touchrp_nai_model');
        if (naiM) this.naiModel = naiM;

        const naiP = await this.db.get('touchrp_nai_pos');
        if (naiP) this.naiPositivePrompt = naiP;

        const naiN = await this.db.get('touchrp_nai_neg');
        if (naiN) this.naiNegativePrompt = naiN;

        const naiT = await this.db.get('touchrp_nai_trigger');
        if (naiT) this.naiTriggerMode = naiT;

        const naiI = await this.db.get('touchrp_nai_interval');
        if (naiI) this.naiTurnInterval = parseInt(naiI, 10) || 5;
      } catch (e) {
        console.warn('Settings load error:', e);
      }
    }

    async saveSettings() {
      try {
        if (this.apiProvider && this.apiKey) {
          this.providerKeys[this.apiProvider] = this.apiKey;
        }
        if (this.apiProvider && this.modelName) {
          this.providerModels[this.apiProvider] = this.modelName;
        }

        await this.db.set('touchrp_api_key', this.apiKey);
        await this.db.set('touchrp_provider', this.apiProvider);
        await this.db.set('touchrp_model', this.modelName);
        await this.db.set('touchrp_custom_base_url', this.customBaseUrl);
        await this.db.set('touchrp_provider_keys', JSON.stringify(this.providerKeys));
        await this.db.set('touchrp_provider_models', JSON.stringify(this.providerModels));
        await this.db.set('touchrp_active_char', this.activeCharId);
        await this.db.set('touchrp_active_user_persona_id', this.activeUserPersonaId);
        await this.db.set('touchrp_output_lang', this.outputLanguage);
        await this.db.set('touchrp_length_preset', this.lengthPreset);
        await this.db.set('touchrp_narrative_style', this.narrativeStyle);
        await this.db.set('touchrp_font_size', this.fontSizePreset);
        await this.db.set('touchrp_line_height', this.lineHeightPreset);

        // NAI
        await this.db.set('touchrp_nai_enabled', this.naiEnabled.toString());
        await this.db.set('touchrp_nai_api_key', this.naiApiKey);
        await this.db.set('touchrp_nai_model', this.naiModel);
        await this.db.set('touchrp_nai_pos', this.naiPositivePrompt);
        await this.db.set('touchrp_nai_neg', this.naiNegativePrompt);
        await this.db.set('touchrp_nai_trigger', this.naiTriggerMode);
        await this.db.set('touchrp_nai_interval', (this.naiTurnInterval || 5).toString());

        await this.db.set('touchrp_user_personas_list', JSON.stringify(this.userPersonas || []));

        if (this.activeCharId) {
          await this.db.set('touchrp_memory_notes_' + this.activeCharId, JSON.stringify(this.memoryNotes || []));
          await this.db.set('touchrp_chat_history_' + this.activeCharId, JSON.stringify(this.chatHistory || []));
          await this.db.set('touchrp_custom_prompt_' + this.activeCharId, this.customPrompt || '');
        }

        // Save Custom characters
        const customList = [];
        for (const [id, c] of this.characters.entries()) {
          if (!BUILTIN_CHARACTERS[id]) {
            customList.push(c);
          }
        }
        await this.db.set('touchrp_custom_characters', JSON.stringify(customList));
      } catch (e) {
        console.warn('Settings save error:', e);
      }
    }

    getActiveCharacter() {
      return this.characters.get(this.activeCharId) || this.characters.values().next().value || {
        id: 'default',
        name: '캐릭터',
        avatar: '',
        personaDesc: '',
        scenarioDesc: '',
        firstMes: '"무슨 생각 하고 있어?"'
      };
    }

    async selectCharacter(charId) {
      if (this.characters.has(charId)) {
        this.activeCharId = charId;
        await this.loadCharacterData(charId);
        await this.saveSettings();
        return this.getActiveCharacter();
      }
      return null;
    }

    async loadCharacterData(charId) {
      if (!charId) return;
      const savedNotes = await this.db.get('touchrp_memory_notes_' + charId);
      if (savedNotes) {
        try {
          this.memoryNotes = typeof savedNotes === 'string' ? JSON.parse(savedNotes) : savedNotes;
        } catch (e) {
          this.memoryNotes = [];
        }
      } else {
        this.memoryNotes = [];
      }

      const savedPrompt = await this.db.get('touchrp_custom_prompt_' + charId);
      this.customPrompt = savedPrompt || '';

      const savedChat = await this.db.get('touchrp_chat_history_' + charId);
      if (savedChat) {
        try {
          this.chatHistory = typeof savedChat === 'string' ? JSON.parse(savedChat) : savedChat;
        } catch (e) {
          this.resetChat();
        }
      } else {
        this.resetChat();
      }
    }

    resetChat() {
      const char = this.getActiveCharacter();
      this.chatHistory = [];
      if (char && char.firstMes) {
        const greeting = char.alternateGreetings && char.alternateGreetings.length > 0
          ? char.alternateGreetings[Math.floor(Math.random() * char.alternateGreetings.length)]
          : char.firstMes;
        this.chatHistory.push({
          role: 'assistant',
          content: greeting.replace(/\{\{user\}\}/g, this.userName).replace(/\{\{char\}\}/g, char.name),
          thought: ''
        });
      }
      this.lastSummaryTurn = 0;
      this.saveSettings();
    }

    registerCharacter(charData) {
      const id = charData.id || 'custom_' + Date.now();
      const character = {
        id,
        name: charData.name || '캐릭터',
        avatar: charData.avatar || '',
        personaDesc: charData.personaDesc || charData.description || '',
        scenarioDesc: charData.scenarioDesc || charData.scenario || '',
        firstMes: charData.firstMes || charData.first_mes || '',
        alternateGreetings: charData.alternateGreetings || (charData.alternate_greetings ? charData.alternate_greetings : [charData.firstMes || charData.first_mes || '']),
        systemPrompt: charData.systemPrompt || charData.system_prompt || '',
        characterBook: charData.characterBook || charData.character_book || null,
        tags: charData.tags || ['커스텀']
      };
      this.characters.set(id, character);
      this.saveSettings();
      return character;
    }

    async importCardFile(file) {
      const ext = file.name.split('.').pop().toLowerCase();
      if (ext === 'json') {
        const text = await file.text();
        const json = JSON.parse(text);
        const data = json.data || json;
        const char = this.registerCharacter({
          id: 'card_' + Date.now(),
          name: data.name,
          avatar: json.avatar || '',
          personaDesc: data.description || '',
          scenarioDesc: data.scenario || '',
          firstMes: data.first_mes || '',
          alternateGreetings: data.alternate_greetings || [data.first_mes || ''],
          characterBook: data.character_book || null,
          tags: data.tags || ['JSON 카드']
        });
        return char;
      } else if (ext === 'png') {
        const arrayBuf = await file.arrayBuffer();
        const buf = new Uint8Array(arrayBuf);
        const charData = this.extractPngCharaMetadata(buf);
        let avatarUrl = '';
        try {
          avatarUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
          });
        } catch (e) {}

        if (charData) {
          const data = charData.data || charData;
          const char = this.registerCharacter({
            id: 'card_' + Date.now(),
            name: data.name,
            avatar: avatarUrl,
            personaDesc: data.description || '',
            scenarioDesc: data.scenario || '',
            firstMes: data.first_mes || '',
            alternateGreetings: data.alternate_greetings || [data.first_mes || ''],
            characterBook: data.character_book || null,
            tags: data.tags || ['PNG 카드']
          });
          return char;
        } else {
          const char = this.registerCharacter({
            id: 'img_' + Date.now(),
            name: file.name.replace(/\.[^/.]+$/, ''),
            avatar: avatarUrl,
            personaDesc: '사용자 지정 이미지 캐릭터',
            firstMes: `"${this.userName}, 무슨 생각 하고 있어?"`,
            tags: ['이미지']
          });
          return char;
        }
      }
      throw new Error('지원하지 않는 파일 형식입니다. (.png, .json)');
    }

    extractPngCharaMetadata(buf) {
      let offset = 8;
      const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
      while (offset < buf.length) {
        const length = view.getUint32(offset);
        let type = '';
        for (let i = 0; i < 4; i++) {
          type += String.fromCharCode(buf[offset + 4 + i]);
        }
        if (type === 'tEXt') {
          const chunkData = buf.subarray(offset + 8, offset + 8 + length);
          let nullIdx = -1;
          for (let i = 0; i < chunkData.length; i++) {
            if (chunkData[i] === 0) { nullIdx = i; break; }
          }
          if (nullIdx !== -1) {
            let key = '';
            for (let i = 0; i < nullIdx; i++) { key += String.fromCharCode(chunkData[i]); }
            if (key === 'chara') {
              let b64 = '';
              for (let i = nullIdx + 1; i < chunkData.length; i++) {
                b64 += String.fromCharCode(chunkData[i]);
              }
              const jsonStr = decodeURIComponent(escape(atob(b64)));
              return JSON.parse(jsonStr);
            }
          }
        }
        offset += 12 + length;
      }
      return null;
    }

    buildSystemPrompt() {
      const char = this.getActiveCharacter();
      let prompt = '[SYSTEM GUIDELINE: ROLEPLAY & NOVELISTIC INTERACTION]\n';
      prompt += `당신은 지금부터 매력적이고 몰입도 높은 인터랙티브 롤플레이 캐릭터 '${char.name}'의 역할을 전담하여 연기합니다.\n\n`;
      prompt += `[캐릭터 프로필 & 원본 설정]\n- 이름: ${char.name}\n`;
      if (char.personaDesc) prompt += `- 상세 설정:\n${char.personaDesc}\n`;
      if (char.scenarioDesc) prompt += `- 현재 상황/배경 시나리오:\n${char.scenarioDesc}\n`;
      prompt += this.getTriggeredLorebookEntries();
      const memPrompt = this.getMemoryNotesPrompt();
      if (memPrompt) prompt += '\n' + memPrompt;
      prompt += `\n[상대방(유저) 정보 및 페르소나]\n- 이름/호칭: ${this.userName}\n`;
      if (this.userPersona) prompt += `- 유저 페르소나 (외형/성격/배경/관계):\n${this.userPersona}\n`;
      prompt += '\n[응답 포맷 및 서술 규칙]\n';
      if (this.outputLanguage === 'en') {
        prompt += '[LANGUAGE REQUIREMENT: ENGLISH]\n- Write all narrative prose, descriptions, inner thoughts, and dialogue in fluent, expressive English.\n';
      } else if (this.outputLanguage === 'ja') {
        prompt += '[LANGUAGE REQUIREMENT: JAPANESE]\n- 全ての地の文、心理描写、思考、セリフを自然で情緒豊かな日本語で執筆してください。\n';
      } else if (this.outputLanguage === 'zh') {
        prompt += '[LANGUAGE REQUIREMENT: CHINESE]\n- 所有旁白描述、心理活动、思考以及对话请使用流畅、生动的中文（简体/繁体）进行叙述。\n';
      } else {
        prompt += '[LANGUAGE REQUIREMENT: KOREAN]\n- 모든 지문 서술, 심리 묘사, 속마음, 대사를 유려하고 자연스러운 한국어로 서술하세요.\n';
      }
      prompt += this.getNarrativeStyleInstruction() + '\n';
      if (this.customPrompt) prompt += `[추가 사용자 지정 지침]\n${this.customPrompt}\n`;
      prompt += '1. 지문(*...* 또는 줄글 문장)과 대사(\"...\")를 명확히 구분하여 서술하세요.\n';
      prompt += '2. 속마음 분리: 캐릭터의 은밀한 속마음은 답변 맨 첫 줄에 <thought>속마음</thought> 태그 형태로 작성하세요.\n';
      if (this.naiEnabled && this.naiApiKey) {
        if (this.naiTriggerMode === 'auto_climax') {
          prompt += '3. [삽화 자동 생성]: 현재 대화가 감정의 고조, 스킨십, 극적인 사건, 시각적 클라이맥스 장면이라고 판단될 경우, 답변 맨 마지막 줄에 반드시 [IMAGE_PROMPT: 1girl/1boy, character description, action, background, cinematic lighting] 태그를 붙여주세요.\n';
        } else if (this.naiTriggerMode === 'turn_interval') {
          prompt += '3. [삽화 프롬프트 추출]: 답변 맨 마지막 줄에 현재 장면의 분위기와 인물 구도를 묘사한 [IMAGE_PROMPT: 1girl/1boy, character description, action, background, aesthetic] 태그를 항상 붙여주세요.\n';
        }
      }
      prompt += `4. 유저의 행동이나 대사를 대신 결정하지 말고, 오직 '${char.name}'의 시점에서만 연기하세요.`;
      return prompt;
    }

    parseThoughtAndContent(rawText) {
      let thought = '';
      let content = rawText;
      let imagePrompt = '';

      const thoughtMatch = rawText.match(/<thought>([\s\S]*?)<\/thought>/i);
      if (thoughtMatch) {
        thought = thoughtMatch[1].trim();
        content = content.replace(/<thought>[\s\S]*?<\/thought>/i, '').trim();
      }

      const imgMatch = content.match(/\[IMAGE_PROMPT:\s*([^\]]+)\]/i);
      if (imgMatch) {
        imagePrompt = imgMatch[1].trim();
        content = content.replace(/\[IMAGE_PROMPT:\s*[^\]]+\]/i, '').trim();
      }

      return { thought, content, imagePrompt };
    }

    // ============================================================================
    // 4. 대화 전송 및 리롤 / 수정 / 삭제 관리
    // ============================================================================
    async sendMessage(userText, onChunk = null) {
      if (!this.apiKey) {
        throw new Error('API 키가 입력되지 않았습니다. 좌측 탭을 열어 API 설정을 완료해 주세요.');
      }

      const processedUserText = userText.trim();
      this.chatHistory.push({
        role: 'user',
        content: processedUserText
      });

      return await this.generateAssistantTurn(onChunk);
    }

    async generateAssistantTurn(onChunk = null) {
      const systemPrompt = this.buildSystemPrompt();
      let rawResponse = await this.callActiveProvider(systemPrompt, onChunk);

      this.turnCounter++;
      const { thought, content, imagePrompt } = this.parseThoughtAndContent(rawResponse);

      let shouldGenerateNai = false;
      let finalPromptForNai = imagePrompt;

      if (this.naiEnabled && this.naiApiKey) {
        if (this.naiTriggerMode === 'auto_climax' && imagePrompt) {
          shouldGenerateNai = true;
        } else if (this.naiTriggerMode === 'turn_interval') {
          if (this.turnCounter % (this.naiTurnInterval || 5) === 0) {
            shouldGenerateNai = true;
            if (!finalPromptForNai) {
              const char = this.getActiveCharacter();
              finalPromptForNai = (char.name || 'character') + ', solo, upper body, masterpiece, aesthetic, looking at viewer';
            }
          }
        }
      }

      let generatedImgUrl = '';
      if (shouldGenerateNai && finalPromptForNai) {
        try {
          generatedImgUrl = await this.generateNaiIllustration(finalPromptForNai);
        } catch (e) {
          console.warn('Auto NAI illustration failed:', e);
        }
      }

      let finalContent = content || rawResponse;
      if (generatedImgUrl) {
        finalContent += '\n\n<div class="nai-bubble-img-wrapper"><img src="' + generatedImgUrl + '" class="nai-bubble-img" alt="NAI 삽화"></div>';
      }

      const assistantMsg = {
        role: 'assistant',
        content: finalContent,
        thought: thought
      };

      this.chatHistory.push(assistantMsg);
      this.saveSettings();

      // 백그라운드 자동 요약 조건 검사
      this.checkAndTriggerAutoSummary();

      return assistantMsg;
    }

    // 리롤 (마지막 어시스턴트 메시지 다시 생성)
    async rerollLastMessage(onChunk = null) {
      if (this.chatHistory.length === 0) return null;
      const lastMsg = this.chatHistory[this.chatHistory.length - 1];
      if (lastMsg.role === 'assistant') {
        this.chatHistory.pop(); // 직전 답변 제거
      }
      return await this.generateAssistantTurn(onChunk);
    }

    // 메시지 내용 수정
    editMessage(index, newContent, newThought = null) {
      if (index >= 0 && index < this.chatHistory.length) {
        this.chatHistory[index].content = newContent;
        if (newThought !== null) {
          this.chatHistory[index].thought = newThought;
        }
        this.saveSettings();
        return true;
      }
      return false;
    }

    // 메시지 삭제
    deleteMessage(index) {
      if (index >= 0 && index < this.chatHistory.length) {
        this.chatHistory.splice(index, 1);
        this.saveSettings();
        return true;
      }
      return false;
    }

    // 특정 메시지 이후를 모두 자르고 다시 시작
    truncateFromMessage(index) {
      if (index >= 0 && index < this.chatHistory.length) {
        this.chatHistory = this.chatHistory.slice(0, index + 1);
        this.saveSettings();
        return true;
      }
      return false;
    }

    // ============================================================================
    // 5. 전역 통합 API 호출 (Gemini / OpenRouter / Claude / Custom)
    // ============================================================================
    async callActiveProvider(systemPrompt, onChunk = null, isDirectText = false) {
      const provider = this.apiProvider || 'gemini';
      if (provider === 'gemini') {
        return await this.callGemini(systemPrompt, onChunk, isDirectText);
      } else if (provider === 'openrouter') {
        return await this.callOpenRouter(systemPrompt, onChunk, isDirectText);
      } else if (provider === 'claude') {
        return await this.callClaude(systemPrompt, onChunk, isDirectText);
      } else {
        return await this.callCustomOpenAI(systemPrompt, onChunk, isDirectText);
      }
    }

    // Gemini 동적 모델 목록 조회
    async fetchGeminiModels(apiKey) {
      const key = apiKey || this.apiKey;
      if (!key) return [];
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key.trim()}`);
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error('Gemini 모델 목록 조회 실패: ' + (errJson.error?.message || res.statusText));
      }
      const data = await res.json();
      const models = (data.models || [])
        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
        .map(m => {
          const id = m.name.replace(/^models\//, '');
          return { id: id, name: m.displayName ? `${m.displayName} (${id})` : id };
        });

      // 최신 무료/경량 플래시 모델을 최우선 정렬 (3.1-flash-lite, 3.5-flash-lite, 3.8-flash)
      const priorityOrder = ['gemini-3.1-flash-lite', 'gemini-3.5-flash-lite', 'gemini-3.8-flash'];
      models.sort((a, b) => {
        const idxA = priorityOrder.indexOf(a.id);
        const idxB = priorityOrder.indexOf(b.id);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        return a.id.localeCompare(b.id);
      });

      return models;
    }

    // OpenRouter 동적 모델 목록 조회
    async fetchOpenRouterModels(apiKey) {
      const key = apiKey || this.apiKey;
      if (!key) return [];
      const res = await fetch('https://openrouter.ai/api/v1/models', {
        headers: {
          'Authorization': 'Bearer ' + key.trim()
        }
      });
      if (!res.ok) throw new Error('OpenRouter 모델 목록 조회 실패 (' + res.status + ')');
      const data = await res.json();
      return (data.data || []).map(m => ({ id: m.id, name: m.name || m.id }));
    }

    async generateNaiIllustration(promptText) {
      if (!this.naiEnabled || !this.naiApiKey) return null;
      const endpoint = 'https://image.novelai.net/ai/generate-image';
      
      const qualityTags = this.naiPositivePrompt ? (', ' + this.naiPositivePrompt.trim()) : '';
      const payload = {
        input: promptText + qualityTags,
        model: this.naiModel || 'nai-diffusion-5-full',
        action: 'generate',
        parameters: {
          width: 832,
          height: 1216,
          scale: 6,
          sampler: 'k_euler',
          steps: 28,
          n_samples: 1,
          negative_prompt: this.naiNegativePrompt || 'lowres, bad anatomy, bad hands, text, error, blurry'
        }
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.naiApiKey.trim()
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('NovelAI 이미지 생성 실패 (' + res.status + ')');
      }

      const blob = await res.blob();
      return URL.createObjectURL(blob);
    }

    getContextMessagesForApi() {
      const maxTurns = this.maxContextTurns || 20;
      if (this.chatHistory.length <= maxTurns) {
        return this.chatHistory;
      }
      return this.chatHistory.slice(-maxTurns);
    }

    async callGemini(systemPrompt, onChunk, isDirectText = false) {
      let model = this.modelName || 'gemini-3.1-flash-lite';
      if (!model.includes('gemini')) model = 'gemini-3.1-flash-lite';
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey.trim()}`;

      let contents = [];
      if (isDirectText) {
        contents = [{ role: 'user', parts: [{ text: systemPrompt }] }];
      } else {
        const historySlice = this.getContextMessagesForApi();
        for (const msg of historySlice) {
          contents.push({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: (msg.thought ? `<thought>${msg.thought}</thought>\n` : '') + msg.content }]
          });
        }
      }

      const payload = {
        contents: contents,
        generationConfig: {
          temperature: this.temperature,
          maxOutputTokens: this.maxTokens
        }
      };

      if (!isDirectText) {
        payload.system_instruction = {
          parts: [{ text: systemPrompt }]
        };
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(`Gemini API 오류 (${res.status}): ${errJson.error?.message || res.statusText}`);
      }

      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    }

    async callOpenRouter(systemPrompt, onChunk, isDirectText = false) {
      const endpoint = 'https://openrouter.ai/api/v1/chat/completions';
      let messages = [];
      if (isDirectText) {
        messages = [{ role: 'user', content: systemPrompt }];
      } else {
        messages = [{ role: 'system', content: systemPrompt }];
        const historySlice = this.getContextMessagesForApi();
        for (const msg of historySlice) {
          messages.push({
            role: msg.role,
            content: (msg.thought ? `<thought>${msg.thought}</thought>\n` : '') + msg.content
          });
        }
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.apiKey.trim(),
          'HTTP-Referer': 'https://touchrp.local',
          'X-Title': 'TouchRP Lite'
        },
        body: JSON.stringify({
          model: this.modelName || 'anthropic/claude-3.5-sonnet',
          messages: messages,
          temperature: this.temperature,
          max_tokens: this.maxTokens
        })
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(`OpenRouter 오류 (${res.status}): ${errJson.error?.message || res.statusText}`);
      }

      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    }

    async callClaude(systemPrompt, onChunk, isDirectText = false) {
      const endpoint = 'https://api.anthropic.com/v1/messages';
      let messages = [];
      if (isDirectText) {
        messages = [{ role: 'user', content: systemPrompt }];
      } else {
        const historySlice = this.getContextMessagesForApi();
        for (const msg of historySlice) {
          messages.push({
            role: msg.role === 'assistant' ? 'assistant' : 'user',
            content: (msg.thought ? `<thought>${msg.thought}</thought>\n` : '') + msg.content
          });
        }
      }

      const payload = {
        model: this.modelName || 'claude-3-5-sonnet-20241022',
        messages: messages,
        max_tokens: this.maxTokens,
        temperature: this.temperature
      };

      if (!isDirectText) {
        payload.system = systemPrompt;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey.trim(),
          'anthropic-version': '2023-06-01',
          'dangerously-allow-browser': 'true'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(`Claude API 오류 (${res.status}): ${errJson.error?.message || res.statusText}`);
      }

      const data = await res.json();
      return data.content?.[0]?.text || '';
    }

    async callCustomOpenAI(systemPrompt, onChunk, isDirectText = false) {
      let baseUrl = this.customBaseUrl ? this.customBaseUrl.trim().replace(/\/$/, '') : 'https://api.openai.com/v1';
      if (!baseUrl.endsWith('/chat/completions')) {
        baseUrl += '/chat/completions';
      }

      let messages = [];
      if (isDirectText) {
        messages = [{ role: 'user', content: systemPrompt }];
      } else {
        messages = [{ role: 'system', content: systemPrompt }];
        const historySlice = this.getContextMessagesForApi();
        for (const msg of historySlice) {
          messages.push({
            role: msg.role,
            content: (msg.thought ? `<thought>${msg.thought}</thought>\n` : '') + msg.content
          });
        }
      }

      const headers = { 'Content-Type': 'application/json' };
      if (this.apiKey) {
        headers['Authorization'] = 'Bearer ' + this.apiKey.trim();
      }

      const res = await fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          model: this.modelName || 'default',
          messages: messages,
          temperature: this.temperature,
          max_tokens: this.maxTokens
        })
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(`API 오류 (${res.status}): ${errJson.error?.message || res.statusText}`);
      }

      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    }
  }

  root.TouchRPEngine = TouchRPEngine;
  root.BUILTIN_CHARACTERS = BUILTIN_CHARACTERS;

})(typeof window !== 'undefined' ? window : global);
