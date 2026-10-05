// ==========================================================================
// BABY GUIDE APP: INTERAKTIVE LOGIK, ROUTER & DETAILANSICHTEN
// ==========================================================================
(function() {
  // Safe extraction from global BabyData
  const BabyData = window.BabyData || {};
  const {
    EMERGENCY_CONTACTS = {},
    TOP_PRIORITY_RULES = [],
    EMERGENCY_PROTOCOLS = [],
    ILLNESSES_LEXIKON = [],
    MONTHLY_GUIDES = [],
    MODULES = [],
    DOS_AND_DONTS = [],
    QUIZ_QUESTIONS = [],
    CHECKLISTS = {},
    STOOL_COLOR_GUIDE = [],
    TEETH_DATA = {},
    AGE_STAGES_DATA = [],
    WHO_GROWTH_DATA = {},
    MILESTONE_JUMPS_DATA = [],
    BEIKOST_FOODS_DATA = [],
    TRIAGE_QUESTIONS_DATA = [],
    TRIAGE_RESULTS_DATA = {},
    VACCINE_TIMELINE_TEMPLATE = []
  } = BabyData;

  // App State
  const state = {
    activeTab: 'home',
    activeDoDontCategory: 'all',
    activeModuleFilter: 'all',
    searchTerm: '',
    completedLessons: new Set(JSON.parse(localStorage.getItem('babyguide_completed_lessons') || '[]')),
    checkedChecklistItems: new Set(JSON.parse(localStorage.getItem('babyguide_checklist_items') || '[]')),
    bookmarks: JSON.parse(localStorage.getItem('babyguide_bookmarks') || '[]'),
    darkMode: localStorage.getItem('babyguide_dark_mode') !== 'false',
    isEmergencyModalOpen: false,
    isBookmarksModalOpen: false,
    isSettingsModalOpen: false,
    isBabyProfileModalOpen: false,
    isTrackerAdjustModalOpen: false,
    customWakeWindowMin: localStorage.getItem('babyguide_custom_wake_window') ? parseInt(localStorage.getItem('babyguide_custom_wake_window'), 10) : null,
    customFeedIntervalMin: localStorage.getItem('babyguide_custom_feed_interval') ? parseInt(localStorage.getItem('babyguide_custom_feed_interval'), 10) : null,

    // Global Baby Profile ("Mein Baby" Context)
    babyProfile: JSON.parse(localStorage.getItem('babyguide_baby_profile') || JSON.stringify({
      name: localStorage.getItem('babyguide_baby_name') || 'Leo',
      birthDate: localStorage.getItem('babyguide_birthdate') || '2026-03-15',
      gender: localStorage.getItem('babyguide_baby_gender') || 'boy',
      weight: parseFloat(localStorage.getItem('babyguide_baby_weight')) || 6.4,
      pediatrician: localStorage.getItem('babyguide_baby_pediatrician') || 'Dr. med. Weber',
      pediatricianPhone: localStorage.getItem('babyguide_baby_pediatrician_phone') || '089 987654',
      parentPhone: localStorage.getItem('babyguide_baby_parent_phone') || '0171 1234567',
      allergies: localStorage.getItem('babyguide_baby_allergies') || 'Keine bekannten Allergien',
      emergencyContact: localStorage.getItem('babyguide_baby_emergency_contact') || '0171 1234567'
    })),

    // Themes & Appearance (MacBook & iPhone)
    themeMode: localStorage.getItem('babyguide_theme_mode') || ((localStorage.getItem('babyguide_dark_mode') === 'false') ? 'light' : 'oled'),
    accentColor: localStorage.getItem('babyguide_accent_color') || 'sky',
    fontSize: localStorage.getItem('babyguide_font_size') || 'normal',

    // View state & Hierarchical Menus (Kein Quer-Untereinander)
    currentView: 'tabs', // 'tabs' or 'detail'
    detailData: null,
    homeActiveSection: localStorage.getItem('babyguide_home_section') || 'emergency',
    focusedTool: null, // null for category menu, or toolId (e.g. 'tool-wake-timer')
    focusedModule: null, // null for module menu, or moduleId (e.g. 'm0')
    
    // Home Age Selector State
    selectedAgeStage: '0-1m',
    
    // Tools state
    togTemp: 20,
    wakeAge: '0-4w',
    selectedStoolColor: 'breastfed',
    selectedTeethGroup: 'lower_central',
    babysitterData: JSON.parse(localStorage.getItem('babyguide_babysitter_data') || JSON.stringify({
      babyName: 'Leo',
      birthDate: '15.03.2026',
      parentPhone: '0171 1234567',
      pediatrician: 'Dr. med. Weber (089 987654)',
      address: 'Musterstraße 12, 80331 München',
      allergies: 'Keine bekannten Allergien',
      bedtimeNotes: 'Schlafsack 2.5 TOG, Schnuller, Kuscheltuch griffbereit'
    })),

    // Tools Category Filter
    activeToolCategory: 'all',

    // 1. Live Wachfenster & Schlaf-Tracker (Schlafen gelegt vs. Aufgewacht)
    wakeStartTime: parseInt(localStorage.getItem('babyguide_wake_start') || '0', 10),
    isSleeping: localStorage.getItem('babyguide_is_sleeping') === 'true',
    currentSleepStart: parseInt(localStorage.getItem('babyguide_current_sleep_start') || '0', 10),
    lastWakeTime: parseInt(localStorage.getItem('babyguide_last_wake_time') || localStorage.getItem('babyguide_wake_start') || '0', 10),
    lastNapDuration: parseInt(localStorage.getItem('babyguide_last_nap_duration') || '0', 10),
    wakeTargetMinutes: 60,

    // 2. CPR Metronom
    cprRunning: false,
    cprBpm: 110,

    // 3. WHO Growth Percentile
    growthGender: 'boys',
    growthMonth: 3,
    growthWeight: 6.4,
    growthLength: 61.4,
    growthHead: 41.9,

    // 4. Beikost Tracker
    beikostStatus: JSON.parse(localStorage.getItem('babyguide_beikost_status') || '{}'),
    beikostCategory: 'all',

    // 5. Sound Machine (Weißes & Braunes Rauschen, Herzschlag, Shush)
    activeSound: null,
    soundVolume: 0.6,
    soundTimerMin: 0,
    soundTimerInterval: null,

    // 6. Medication & Fever Syrup
    medWeight: 7.0,
    medType: 'ibuprofen',
    lastMedDose: JSON.parse(localStorage.getItem('babyguide_last_med_dose') || 'null'),

    // 7. Baby Fahrplan (U & Impftermine)
    babyBirthDate: localStorage.getItem('babyguide_birthdate') || '2026-03-15',
    completedAppts: new Set(JSON.parse(localStorage.getItem('babyguide_completed_appts') || '[]')),

    // 8. 3 AM Symptom Checker Triage
    triageCurrentStep: 'q1',
    triageHistory: [],
    triageResultId: null,

    // 9. Mental Leaps (Oje ich wachse)
    selectedJumpId: 4,

    // 10. Family Sync
    syncExportText: '',
    syncImportSuccess: false,
    
    // Quiz state
    quizAnswers: {},
    quizSubmitted: false,
    quizScore: 0
  };

  // ==========================================
  // Router & Navigation Engine
  // ==========================================
  function navigateTo(route, id) {
    if (route === 'tab') {
      window.location.hash = `tab/${id}`;
      setActiveTab(id, false);
      showMainTabs();
      return;
    }

    if (route === 'tool') {
      window.openTool(id);
      return;
    }

    window.location.hash = `${route}/${id}`;
    if (route === 'rule') {
      const rule = TOP_PRIORITY_RULES.find(r => r.id === id);
      if (rule) openDetailView('rule', rule);
    } else if (route === 'lesson') {
      const allLessons = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, module: m })));
      const lesson = allLessons.find(l => l.id === id);
      if (lesson) openDetailView('lesson', lesson);
    } else if (route === 'dodont') {
      let foundItem = null;
      let category = '';
      let isDo = true;
      DOS_AND_DONTS.forEach(cat => {
        cat.dos.forEach(d => { if (d.id === id) { foundItem = d; category = cat.category; isDo = true; } });
        cat.donts.forEach(d => { if (d.id === id) { foundItem = d; category = cat.category; isDo = false; } });
      });
      if (foundItem) openDetailView('dodont', { ...foundItem, category, isDo });
    } else if (route === 'illness') {
      const ill = ILLNESSES_LEXIKON.find(i => i.id === id);
      if (ill) openDetailView('illness', ill);
    } else if (route === 'month') {
      const m = MONTHLY_GUIDES.find(mg => mg.month === parseInt(id, 10));
      if (m) openDetailView('month', m);
    } else if (route === 'emergency') {
      const p = EMERGENCY_PROTOCOLS.find(ep => ep.id === id);
      if (p) openDetailView('emergency', p);
    }
  }

  function handleHashNavigation() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      showMainTabs();
      return;
    }

    const parts = hash.split('/');
    const route = parts[0];
    const id = parts[1];

    if (route === 'tab' && id) {
      setActiveTab(id, false);
      showMainTabs();
    } else if (route && id) {
      navigateTo(route, id);
    } else {
      showMainTabs();
    }
  }

  // ==========================================
  // VIEW SWITCHER: TABS vs. DEEP DETAIL PAGE
  // ==========================================
  function showMainTabs() {
    state.currentView = 'tabs';
    state.detailData = null;

    const detailViewContainer = document.getElementById('page-detail-view');
    const mainTabsContainer = document.getElementById('main-tab-contents');
    const searchResultsContainer = document.getElementById('search-results-section');

    if (detailViewContainer) detailViewContainer.classList.add('hidden');
    if (mainTabsContainer) mainTabsContainer.classList.remove('hidden');
    if (searchResultsContainer) searchResultsContainer.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openDetailView(type, data) {
    state.currentView = 'detail';
    state.detailData = { type, data };

    const detailViewContainer = document.getElementById('page-detail-view');
    const mainTabsContainer = document.getElementById('main-tab-contents');
    const searchResultsContainer = document.getElementById('search-results-section');

    if (searchResultsContainer) searchResultsContainer.classList.add('hidden');
    if (mainTabsContainer) mainTabsContainer.classList.add('hidden');
    if (detailViewContainer) {
      detailViewContainer.classList.remove('hidden');
      renderDetailViewContent(type, data);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderDetailViewContent(type, data) {
    const container = document.getElementById('page-detail-view');
    if (!container) return;

    let breadcrumbTitle = '';
    let breadcrumbParent = '';
    let headerHtml = '';
    let bodyHtml = '';
    let footerHtml = '';

    if (type === 'rule') {
      breadcrumbParent = 'Lebenswichtige Kardinalregeln';
      breadcrumbTitle = data.title;
      headerHtml = `
        <div class="border-b border-slate-200 pb-6 mb-6">
          <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${data.severity === 'danger' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'}">
            Kardinalregel • Lebensrettendes Wissen
          </span>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 leading-tight">${data.title}</h1>
          <p class="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed font-medium">${data.shortSummary}</p>
        </div>
      `;
      bodyHtml = data.fullArticleHtml;
      footerHtml = `
        <div class="mt-10 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
          <button onclick="window.navigateTo('tab', 'home')" class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <span>← Zurück zur Übersicht</span>
          </button>
          <button onclick="window.navigateTo('tab', 'lessons')" class="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-semibold hover:bg-sky-700 shadow-sm transition-all text-sm">
            Weiter zu allen Lerneinheiten →
          </button>
        </div>
      `;
    } else if (type === 'lesson') {
      const isDone = state.completedLessons.has(data.id);
      breadcrumbParent = data.module ? data.module.title : 'Lerneinheiten';
      breadcrumbTitle = data.title;
      
      const allLessons = MODULES.flatMap(m => m.lessons);
      const currIdx = allLessons.findIndex(l => l.id === data.id);
      const prevLesson = currIdx > 0 ? allLessons[currIdx - 1] : null;
      const nextLesson = currIdx < allLessons.length - 1 ? allLessons[currIdx + 1] : null;

      headerHtml = `
        <div class="border-b border-slate-200 pb-6 mb-6">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-3 py-1 rounded-md">
              ${data.module ? data.module.badge : 'Lektion'}
            </span>
            <div class="flex items-center gap-3 text-xs text-slate-500">
              <span>⏱️ ${data.readTime} Lesezeit</span>
              <span>•</span>
              <span class="capitalize">Thema: ${data.category}</span>
            </div>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${data.title}</h1>
        </div>
      `;

      bodyHtml = `
        <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base">
          ${data.content}
        </div>
      `;

      footerHtml = `
        <div class="mt-10 pt-6 border-t border-slate-200 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl ${isDone ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50 border border-slate-200'}">
            <div>
              <strong class="text-slate-900 block text-sm font-bold">Lernfortschritt dieser Lektion:</strong>
              <span class="text-xs text-slate-500">${isDone ? 'Du hast diese Lektion bereits als gelernt abgeschlossen.' : 'Noch offen – markiere sie als gelernt, wenn du alles verstanden hast.'}</span>
            </div>
            <button onclick="window.toggleLessonComplete('${data.id}'); window.navigateTo('lesson', '${data.id}')" class="px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all ${isDone ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-sky-600 text-white hover:bg-sky-700'}">
              ${isDone ? '✓ Abgeschlossen (Klicken zum Zurücksetzen)' : 'Lektion als gelernt markieren (+1)'}
            </button>
          </div>

          <div class="flex justify-between items-center gap-4">
            ${prevLesson ? `
              <button onclick="window.navigateTo('lesson', '${prevLesson.id}')" class="px-4 py-2 border border-slate-200 rounded-xl text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition-all">
                ← ${prevLesson.title}
              </button>
            ` : `<div></div>`}
            
            ${nextLesson ? `
              <button onclick="window.navigateTo('lesson', '${nextLesson.id}')" class="px-4 py-2 bg-slate-900 text-white rounded-xl font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all">
                Nächste Lektion: ${nextLesson.title} →
              </button>
            ` : `<div></div>`}
          </div>
        </div>
      `;
    } else if (type === 'dodont') {
      breadcrumbParent = `Do's & Don'ts (${data.category})`;
      breadcrumbTitle = data.title;
      
      headerHtml = `
        <div class="border-b border-slate-200 pb-6 mb-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${data.isDo ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
              ${data.isDo ? '✓ EVIDENZBASIERTES DO (UNBEDINGT TUN)' : '✕ STRIKTES DON\'T (VERMEIDEN)'}
            </span>
            <span class="text-xs text-slate-500 font-medium">${data.category}</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${data.title}</h1>
          <p class="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed font-medium">${data.desc}</p>
        </div>
      `;

      bodyHtml = `
        <div class="p-6 rounded-2xl ${data.isDo ? 'bg-emerald-50/50 border border-emerald-200' : 'bg-rose-50/50 border border-rose-200'} mb-6">
          <h3 class="text-lg font-bold ${data.isDo ? 'text-emerald-900' : 'text-rose-900'} mb-2">Ausführliche medizinische & physiologische Analyse:</h3>
          <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed text-sm sm:text-base">
            ${data.deepDiveHtml}
          </div>
        </div>
      `;

      footerHtml = `
        <div class="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
          <button onclick="window.navigateTo('tab', 'dodont')" class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <span>← Zurück zur Do's & Don'ts Übersicht</span>
          </button>
        </div>
      `;
    } else if (type === 'illness') {
      breadcrumbParent = 'Krankheiten-Lexikon';
      breadcrumbTitle = data.title;

      headerHtml = `
        <div class="border-b border-slate-200 pb-6 mb-6">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-3 py-1 rounded-md">
              ${data.badge}
            </span>
            <span class="text-xs font-semibold text-slate-500">Dringlichkeit: ${data.urgency}</span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${data.title}</h1>
          <p class="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">${data.summary}</p>
        </div>
      `;

      bodyHtml = `
        <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base">
          ${data.contentHtml}
        </div>
      `;

      footerHtml = `
        <div class="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
          <button onclick="window.navigateTo('tab', 'illnesses')" class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <span>← Zurück zum Krankheiten-Lexikon</span>
          </button>
        </div>
      `;
    } else if (type === 'month') {
      breadcrumbParent = 'Entwicklungskompass';
      breadcrumbTitle = `Monat ${data.month}: ${data.title}`;

      headerHtml = `
        <div class="border-b border-slate-200 pb-6 mb-6">
          <span class="text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md">
            Lebensmonat ${data.month} von 12
          </span>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-3">${data.title}</h1>
          <p class="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">${data.summary}</p>
        </div>
      `;

      bodyHtml = `
        <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base">
          ${data.contentHtml}
        </div>
      `;

      footerHtml = `
        <div class="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
          <button onclick="window.navigateTo('tab', 'development')" class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <span>← Zurück zum Entwicklungskompass</span>
          </button>
        </div>
      `;
    } else if (type === 'emergency') {
      breadcrumbParent = 'Erste-Hilfe & Notfall-Leitfaden';
      breadcrumbTitle = data.title;

      headerHtml = `
        <div class="border-b border-rose-200 dark:border-rose-900/60 pb-6 mb-6 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-950/60 dark:to-red-950/40 p-6 rounded-2xl border border-rose-200 dark:border-rose-900/60">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span class="text-xs font-black uppercase tracking-wider bg-rose-600 text-white px-3 py-1 rounded-md shadow-sm">
              🚨 ${data.badge || 'AKUTER NOTFALL'}
            </span>
            <div class="flex items-center gap-2">
              <a href="tel:112" class="px-3.5 py-1.5 bg-rose-600 text-white font-extrabold rounded-lg shadow-sm hover:bg-rose-700 text-xs flex items-center gap-1.5 transition-all">
                <span>📞 Notruf 112</span>
              </a>
              <a href="tel:03019240" class="px-3.5 py-1.5 bg-purple-700 text-white font-bold rounded-lg shadow-sm hover:bg-purple-800 text-xs flex items-center gap-1.5 transition-all">
                <span>☠️ Giftnotruf 030 19240</span>
              </a>
            </div>
          </div>
          <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mt-2">${data.title}</h1>
          <p class="text-slate-700 dark:text-slate-200 text-base sm:text-lg mt-3 leading-relaxed font-semibold">${data.shortSummary}</p>
        </div>
      `;

      bodyHtml = `
        <div class="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed text-base">
          ${data.contentHtml}
        </div>
      `;

      footerHtml = `
        <div class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
          <button onclick="window.navigateTo('tab', 'home')" class="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-all text-sm flex items-center gap-2">
            <span>← Zurück zur Startseite</span>
          </button>
          <button onclick="window.toggleEmergencyModal(true)" class="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 shadow-md transition-all text-sm flex items-center gap-2">
            <span>🚨 Alle Notfallnummern (112, Giftnotruf, Bereitschaft)</span>
          </button>
        </div>
      `;
    }

    const isBookmarked = state.bookmarks.some(b => b.type === type && b.id === (data.id || data.month));

    container.innerHTML = `
      <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
        <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <button onclick="window.navigateTo('tab', 'home')" class="hover:text-sky-600 font-semibold">Start</button>
          <span>›</span>
          <span>${breadcrumbParent}</span>
          <span>›</span>
          <span class="text-slate-900 font-bold truncate max-w-xs sm:max-w-md">${breadcrumbTitle}</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="window.toggleCurrentBookmark()" class="px-3.5 py-1.5 rounded-lg border transition-all text-xs font-bold flex items-center gap-1.5 ${isBookmarked ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'border-slate-200 hover:bg-slate-50 text-slate-700'}" title="${isBookmarked ? 'Aus Merkliste entfernen' : 'In Merkliste speichern'}">
            <span>${isBookmarked ? '✓ Gemerkt' : '⭐ Merken'}</span>
          </button>
          <button onclick="window.print()" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1 transition-all" title="Diesen Leitfaden ausdrucken">
            <span>🖨️ Drucken</span>
          </button>
          <button onclick="window.history.back()" class="px-3.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1 transition-all">
            <span>← Zurück</span>
          </button>
        </div>
      </div>

      <article class="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
        ${headerHtml}
        <div class="mt-6">
          ${bodyHtml}
        </div>
        ${footerHtml}
      </article>
    `;
  }

  // ==========================================
  // Tab Switching
  // ==========================================
  function setActiveTab(tabId, updateHash = true) {
    state.activeTab = tabId;
    state.searchTerm = '';
    const searchInput = document.getElementById('global-search-input');
    if (searchInput) searchInput.value = '';

    if (updateHash) {
      window.location.hash = `tab/${tabId}`;
    }

    document.querySelectorAll('[data-tab-target]').forEach(btn => {
      const isCurrent = btn.getAttribute('data-tab-target') === tabId;
      btn.classList.toggle('bg-sky-600', isCurrent);
      btn.classList.toggle('text-white', isCurrent);
      btn.classList.toggle('text-slate-600', !isCurrent);
      btn.classList.toggle('dark:text-slate-300', !isCurrent);
      btn.classList.toggle('hover:bg-slate-100', !isCurrent);
      btn.classList.toggle('dark:hover:bg-slate-800', !isCurrent);
    });

    document.querySelectorAll('.tab-content-section').forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== `tab-content-${tabId}`);
    });

    showMainTabs();
    updateMobileDock(tabId);

    if (tabId === 'home') {
      renderAgeSelector();
      renderQuickLogCard();
      updateBabyProfileChip();
    }
    if (tabId === 'lessons') renderLessons();
    if (tabId === 'dodont') renderDosAndDonts();
    if (tabId === 'development') renderDevelopmentTab();
    if (tabId === 'illnesses') renderIllnessesTab();
    if (tabId === 'tools') renderTools();
    if (tabId === 'quiz') renderQuiz();
    if (tabId === 'checklists') renderChecklists();
  }

  // ==========================================
  // Rendering Modules
  // ==========================================
  function renderAllTabs() {
    updateBabyProfileChip();
    renderQuickLogCard();
    renderAgeSelector();
    renderPriorityRules();
    renderEmergencyProtocolsGrid();
    renderLessons();
    renderDosAndDonts();
    renderDevelopmentTab();
    renderIllnessesTab();
    renderTools();
    renderQuiz();
    renderChecklists();
    renderEmergencyModalContent();
  }

  function renderAgeSelector() {
    const btnContainer = document.getElementById('age-selector-buttons');
    const dashboardContainer = document.getElementById('age-stage-dashboard');
    if (!btnContainer || !dashboardContainer) return;

    btnContainer.innerHTML = AGE_STAGES_DATA.map(st => {
      const isSelected = st.id === state.selectedAgeStage;
      return `
        <button onclick="window.selectAgeStage('${st.id}')" class="p-3 rounded-2xl border text-center transition-all ${
          isSelected 
            ? 'bg-sky-600 border-sky-600 text-white shadow-md shadow-sky-200' 
            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
        }">
          <div class="text-xl mb-1">${st.icon}</div>
          <div class="font-extrabold text-xs sm:text-sm truncate">${st.label}</div>
          <div class="text-[10px] opacity-75 truncate">${st.subLabel}</div>
        </button>
      `;
    }).join('');

    const activeStage = AGE_STAGES_DATA.find(st => st.id === state.selectedAgeStage) || AGE_STAGES_DATA[1];
    dashboardContainer.innerHTML = `
      <div class="bg-gradient-to-br from-sky-50 via-white to-blue-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-sky-100 dark:border-slate-800 p-5 sm:p-7 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 dark:border-slate-800 pb-4 mb-5">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${activeStage.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-transparent dark:border-sky-800 px-2 py-0.5 rounded">${activeStage.badge}</span>
                <span class="text-xs text-slate-400">•</span>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">${activeStage.subLabel}</span>
              </div>
              <h4 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">${activeStage.label}</h4>
            </div>
          </div>
          <button onclick="window.navigateTo('month', '${activeStage.targetMonth}')" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto">
            <span>📖 Monatsleitfaden Monat ${activeStage.targetMonth} öffnen</span>
            <span>→</span>
          </button>
        </div>

        <p class="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-5 leading-relaxed">
          ${activeStage.headline}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          <div class="bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">⏳ Wachfenster</span>
            <strong class="text-base text-sky-700 dark:text-sky-300 block mt-0.5">${activeStage.wakeWindow}</strong>
          </div>
          <div class="bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">💤 Schlaf / 24h</span>
            <strong class="text-base text-indigo-700 dark:text-indigo-300 block mt-0.5">${activeStage.sleepHours}</strong>
          </div>
          <div class="bg-white dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide block">🩺 Nächste Vorsorge</span>
            <strong class="text-base text-emerald-700 dark:text-emerald-300 block mt-0.5">${activeStage.nextCheckup}</strong>
          </div>
        </div>

        <div>
          <span class="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">⭐ Wichtigste Schwerpunkte in dieser Phase:</span>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            ${activeStage.keyHighlights.map(h => `
              <div class="flex items-start gap-2 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-sky-100 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-200">
                <span class="text-emerald-500 font-bold">✓</span>
                <span class="leading-relaxed font-medium">${h}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function selectAgeStage(stageId) {
    state.selectedAgeStage = stageId;
    renderAgeSelector();
  }

  function renderPriorityRules() {
    const container = document.getElementById('priority-rules-container');
    if (!container) return;

    container.innerHTML = TOP_PRIORITY_RULES.map((rule, idx) => {
      const isDanger = rule.severity === 'danger';
      return `
        <div class="rounded-2xl border ${isDanger ? 'border-rose-300 bg-rose-50/50' : 'border-amber-300 bg-amber-50/40'} p-6 transition-all hover:shadow-lg cursor-pointer group" onclick="window.navigateTo('rule', '${rule.id}')">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${isDanger ? 'bg-rose-600 text-white shadow-rose-200' : 'bg-amber-500 text-white shadow-amber-200'} shadow-md">
              <span class="text-xl font-bold">#${idx + 1}</span>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${isDanger ? 'bg-rose-100 text-rose-800 border border-rose-300' : 'bg-amber-100 text-amber-800 border border-amber-300'}">
                  ${isDanger ? 'Lebenswichtig • Strikte Warnung' : 'Wichtigste Schutzregel'}
                </span>
                <span class="text-xs text-slate-400 group-hover:text-sky-600 font-semibold transition-colors ml-auto">Klicken für vollständigen Leitfaden →</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">${rule.title}</h3>
              <p class="text-slate-700 leading-relaxed font-medium mb-4">${rule.shortSummary}</p>
              
              <div class="inline-flex items-center gap-2 text-sm font-bold ${isDanger ? 'text-rose-700 group-hover:text-rose-900' : 'text-amber-800 group-hover:text-amber-950'} transition-colors">
                <span>Ausführlichen medizinischen Leitfaden öffnen →</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderEmergencyProtocolsGrid() {
    const container = document.getElementById('emergency-protocols-grid');
    if (!container) return;

    container.innerHTML = EMERGENCY_PROTOCOLS.map(proto => {
      let previewSvg = '';
      if (proto.svg) {
        previewSvg = proto.svg
          .replace('class="w-full max-w-md mx-auto', 'class="w-full max-h-32 object-contain')
          .replace('viewBox="0 0 400 220"', 'viewBox="0 0 400 220" style="max-height: 125px; width: 100%;"');
      }

      return `
        <div class="bg-white rounded-3xl border border-rose-200/90 p-5 shadow-sm hover:border-rose-500 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between" onclick="window.navigateTo('emergency', '${proto.id}')">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 border border-rose-200">
                🚨 ${proto.badge || 'NOTFALL'}
              </span>
              <span class="text-xs font-bold text-slate-400 group-hover:text-rose-600 transition-colors">Anleitung öffnen →</span>
            </div>
            
            <div class="mb-3 rounded-2xl overflow-hidden bg-rose-50/30 p-2 border border-rose-100 flex items-center justify-center pointer-events-none min-h-[135px]">
              ${previewSvg}
            </div>

            <h3 class="text-base font-extrabold text-slate-900 group-hover:text-rose-700 transition-colors leading-snug">${proto.title}</h3>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed font-medium line-clamp-2">${proto.shortSummary}</p>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-rose-700 font-extrabold group-hover:text-rose-900">
            <span>Schritt-für-Schritt-Plan aufrufen</span>
            <span class="text-sm group-hover:translate-x-1.5 transition-transform">→</span>
          </div>
        </div>
      `;
    }).join('');
  }

  
  // ==========================================
  // MODULES & LESSONS RENDERER (HIERARCHICAL MENU ARCHITECTURE)
  // ==========================================
  function renderLessons() {
    const container = document.getElementById('lessons-modules-container');
    if (!container) return;

    const totalLessons = MODULES.flatMap(m => m.lessons).length;
    const completedCount = state.completedLessons.size;

    // A) If a specific module is focused:
    if (state.focusedModule) {
      const mod = MODULES.find(m => m.id === state.focusedModule) || MODULES[0];
      const modIdx = MODULES.findIndex(m => m.id === mod.id);
      const nextMod = MODULES[(modIdx + 1) % MODULES.length];
      const completedInMod = mod.lessons.filter(l => state.completedLessons.has(l.id)).length;

      container.innerHTML = `
        <div class="space-y-6">
          <!-- Focused Module Navigation Bar -->
          <div class="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <button onclick="window.closeFocusedModule()" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm">
                <span>←</span>
                <span>Modul-Übersicht</span>
              </button>
              <span class="text-slate-300 hidden sm:inline">|</span>
              <span class="text-xs font-extrabold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100 hidden sm:inline">
                ${mod.badge}
              </span>
            </div>

            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
              ${MODULES.map(m => `
                <button onclick="window.openModule('${m.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  state.focusedModule === m.id ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }">
                  ${m.badge.split(' ')[0]}
                </button>
              `).join('')}
              <button onclick="window.openModule('${nextMod.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold whitespace-nowrap hover:bg-slate-800 ml-1">
                Weiter: ${nextMod.badge.split(' ')[0]} →
              </button>
            </div>
          </div>

          <!-- Module Detail Card -->
          <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="bg-slate-50/80 border-b border-slate-100 px-6 py-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">${mod.badge}</span>
                  <h3 class="text-xl font-black text-slate-900">${mod.title}</h3>
                </div>
                <p class="text-sm text-slate-600 mt-1">${mod.description}</p>
              </div>
              <div class="text-right">
                <span class="text-xs font-bold text-slate-900 block">${completedInMod} / ${mod.lessons.length} gelernt</span>
                <div class="w-24 bg-slate-200 rounded-full h-2 overflow-hidden mt-1">
                  <div class="bg-emerald-500 h-full" style="width: ${(completedInMod / mod.lessons.length) * 100}%"></div>
                </div>
              </div>
            </div>

            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              ${mod.lessons.map(lesson => {
                const isDone = state.completedLessons.has(lesson.id);
                return `
                  <div class="border ${isDone ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-200 hover:border-sky-300'} rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer group" onclick="window.navigateTo('lesson', '${lesson.id}')">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">${lesson.readTime} Lesezeit</span>
                        ${isDone ? `
                          <span class="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            ✓ Gelernt
                          </span>
                        ` : ''}
                      </div>
                      <h4 class="font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors text-base">${lesson.title}</h4>
                      <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">${lesson.summary}</p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-sky-600 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Lerneinheit öffnen</span>
                      <span>→</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="text-center pt-2">
            <button onclick="window.showAllModules()" class="text-xs text-slate-500 hover:text-slate-700 font-semibold underline">
              Alle 8 Module untereinander aufklappen
            </button>
          </div>
        </div>
      `;
    }
    // B) Scroll-All Mode:
    else if (state.activeModuleFilter === 'show_all') {
      container.innerHTML = `
        <div class="space-y-8">
          <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <h2 class="text-xl font-bold text-slate-900">Alle Module & Lerneinheiten</h2>
            <button onclick="window.closeFocusedModule()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm">
              ← Zum Modul-Menü
            </button>
          </div>

          ${MODULES.map(mod => `
            <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-6">
              <div class="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-sky-700">${mod.badge}</span>
                  <h3 class="text-lg font-black text-slate-900">${mod.title}</h3>
                </div>
                <span class="text-xs text-slate-500">${mod.lessons.length} Lektionen</span>
              </div>
              <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                ${mod.lessons.map(lesson => `
                  <div class="border border-slate-200 rounded-2xl p-4 cursor-pointer hover:border-sky-400" onclick="window.navigateTo('lesson', '${lesson.id}')">
                    <h4 class="font-bold text-slate-900">${lesson.title}</h4>
                    <p class="text-xs text-slate-500 mt-1 line-clamp-2">${lesson.summary}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    // C) Default Module Menu Dashboard:
    else {
      container.innerHTML = `
        <div class="space-y-8">
          <!-- Header Banner -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                📚 Curriculum & Elternwissen
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Alle Lerneinheiten & Module</h2>
              <p class="text-slate-600 text-sm mt-1">Wähle ein übergeordnetes Modul für gezieltes Lernen ohne Scroll-Chaos.</p>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-right">
                <div class="text-sm font-semibold text-slate-900">${completedCount} von ${totalLessons} gelernt</div>
                <div class="text-xs text-slate-500">${Math.round((completedCount / (totalLessons || 1)) * 100)}% abgeschlossen</div>
              </div>
              <div class="w-28 bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                <div class="bg-emerald-500 h-full transition-all duration-500" style="width: ${(completedCount / (totalLessons || 1)) * 100}%"></div>
              </div>
            </div>
          </div>

          <!-- Modul-Menü Grid (9 übergeordnete Module) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${MODULES.map(mod => {
              const completedInMod = mod.lessons.filter(l => state.completedLessons.has(l.id)).length;
              const pct = Math.round((completedInMod / mod.lessons.length) * 100);
              return `
                <div onclick="window.openModule('${mod.id}')" class="p-6 rounded-3xl border border-slate-200 bg-white hover:border-sky-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group">
                  <div>
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">${mod.badge}</span>
                      <span class="text-xs font-semibold text-slate-500">${mod.lessons.length} Lektionen</span>
                    </div>
                    <h3 class="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      ${mod.title}
                    </h3>
                    <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      ${mod.description}
                    </p>
                  </div>

                  <div class="mt-6 pt-4 border-t border-slate-100">
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-semibold">
                      <span>Fortschritt</span>
                      <span>${completedInMod} / ${mod.lessons.length} (${pct}%)</span>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-3">
                      <div class="bg-emerald-500 h-full transition-all" style="width: ${pct}%"></div>
                    </div>
                    <div class="flex items-center justify-between text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                      <span>Modul aufschlagen</span>
                      <span class="text-sm">→</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Bottom CTA -->
          <div class="text-center pt-4 border-t border-slate-200">
            <button onclick="window.showAllModules()" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-all cursor-pointer">
              Möchtest du alle 8 Module untereinander aufklappen? Hier klicken ↓
            </button>
          </div>
        </div>
      `;
    }
  }
function renderDosAndDonts() {
    const container = document.getElementById('dodont-container');
    if (!container) return;

    const categories = ['all', ...DOS_AND_DONTS.map(d => d.category)];

    let html = `
      <div class="mb-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 class="text-2xl font-bold text-slate-900">Das große Do's & Don'ts Kompendium</h2>
        <p class="text-slate-600 mt-1">Jede Karte ist anklickbar! Klicke auf ein Do oder Don't, um die vollständige physiologische Begründung und Praxistipps zu lesen.</p>
        
        <div class="flex flex-wrap gap-2 mt-4">
          ${categories.map(cat => `
            <button onclick="window.filterDoDont('${cat}')" class="px-4 py-2 text-sm font-medium rounded-xl transition-all ${state.activeDoDontCategory === cat ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
              ${cat === 'all' ? 'Alle Kategorien' : cat}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    const filtered = state.activeDoDontCategory === 'all'
      ? DOS_AND_DONTS
      : DOS_AND_DONTS.filter(d => d.category === state.activeDoDontCategory);

    html += `<div class="space-y-8">`;
    filtered.forEach(section => {
      html += `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="bg-slate-50 border-b border-slate-200 px-6 py-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>📌</span>
              <span>${section.category}</span>
            </h3>
          </div>

          <div class="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- DO'S -->
            <div class="border border-emerald-200 bg-emerald-50/40 rounded-xl p-5">
              <div class="flex items-center gap-2 text-emerald-800 font-bold text-base mb-4 pb-2 border-b border-emerald-200">
                <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
                <span>UNBEDINGT TUN (DO'S) – Klicken für Details</span>
              </div>
              <div class="space-y-4">
                ${section.dos.map(item => `
                  <div class="bg-white rounded-lg p-4 border border-emerald-100 shadow-sm hover:border-emerald-400 cursor-pointer transition-all hover:shadow-md group" onclick="window.navigateTo('dodont', '${item.id}')">
                    <div class="flex items-start justify-between gap-2">
                      <h5 class="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors flex items-start gap-2">
                        <span class="text-emerald-600 font-extrabold">•</span>
                        <span>${item.title}</span>
                      </h5>
                      <span class="text-xs text-slate-400 group-hover:text-emerald-600 font-semibold whitespace-nowrap">Details →</span>
                    </div>
                    <p class="text-xs text-slate-600 mt-1.5 pl-3.5 leading-relaxed">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- DON'TS -->
            <div class="border border-rose-200 bg-rose-50/40 rounded-xl p-5">
              <div class="flex items-center gap-2 text-rose-800 font-bold text-base mb-4 pb-2 border-b border-rose-200">
                <span class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">✕</span>
                <span>NIEMALS TUN (DON'TS) – Klicken für Details</span>
              </div>
              <div class="space-y-4">
                ${section.donts.map(item => `
                  <div class="bg-white rounded-lg p-4 border border-rose-100 shadow-sm hover:border-rose-400 cursor-pointer transition-all hover:shadow-md group" onclick="window.navigateTo('dodont', '${item.id}')">
                    <div class="flex items-start justify-between gap-2">
                      <h5 class="font-bold text-slate-900 text-sm group-hover:text-rose-700 transition-colors flex items-start gap-2">
                        <span class="text-rose-600 font-extrabold">•</span>
                        <span>${item.title}</span>
                      </h5>
                      <span class="text-xs text-slate-400 group-hover:text-rose-600 font-semibold whitespace-nowrap">Details →</span>
                    </div>
                    <p class="text-xs text-slate-600 mt-1.5 pl-3.5 leading-relaxed">${item.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;

    container.innerHTML = html;
  }

  function renderDevelopmentTab() {
    const container = document.getElementById('development-container');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-8">
        <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
              🗓️ Alle 12 Entwicklungsmonate im Detail
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Der Entwicklungskompass: Monat 1 bis 12</h2>
            <p class="text-slate-600 mt-1 max-w-2xl text-sm sm:text-base">Klicke auf einen beliebigen Monat, um den vollständigen medizinischen & psychologischen Monatsführer mit Motorik, Sprache, Wachfenstern, Beikost und U-Untersuchungen einzusehen.</p>
          </div>
          <div class="flex items-center gap-2 bg-indigo-50/70 p-3 rounded-2xl border border-indigo-100 flex-shrink-0">
            <span class="text-2xl">🌱</span>
            <div class="text-xs">
              <strong class="text-indigo-950 block font-bold">12 Monats-Deep-Dives</strong>
              <span class="text-indigo-700 font-medium">Inklusive aller U-Untersuchungen</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${MONTHLY_GUIDES.map(item => `
            <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between" onclick="window.navigateTo('month', '${item.month}')">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-xl shadow-sm border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    ${item.month}
                  </span>
                  <span class="text-xs font-bold text-indigo-700 bg-indigo-50/80 px-2.5 py-1 rounded-lg border border-indigo-100">
                    ${item.badge || `Monat ${item.month}`}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">${item.title}</h3>
                
                ${item.motto ? `
                  <p class="text-xs italic text-indigo-600 font-medium mt-1 leading-relaxed">„${item.motto}“</p>
                ` : ''}

                <p class="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">${item.summary}</p>

                ${item.milestones && item.milestones.length ? `
                  <div class="mt-4 pt-3 border-t border-slate-100">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Wichtige Meilensteine:</span>
                    <div class="flex flex-wrap gap-1.5">
                      ${item.milestones.map(m => `
                        <span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium group-hover:bg-indigo-50 group-hover:text-indigo-900 transition-colors">✓ ${m}</span>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>

              <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-bold group-hover:text-indigo-800">
                <span>Vollständigen Monatsguide lesen</span>
                <span class="text-base group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderIllnessesTab() {
    const container = document.getElementById('illnesses-container');
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-8">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 class="text-2xl font-bold text-slate-900">Das Baby-Krankheiten-Lexikon</h2>
          <p class="text-slate-600 mt-1">Schnelle Orientierung bei den häufigsten Säuglingserkrankungen: Symptome, Warnzeichen und wann der Arztbesuch zwingend ist.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${ILLNESSES_LEXIKON.map(ill => `
            <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-rose-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between" onclick="window.navigateTo('illness', '${ill.id}')">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200">
                    ${ill.badge}
                  </span>
                  <span class="text-xs font-medium text-slate-400">Dringlichkeit: ${ill.urgency}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors">${ill.title}</h3>
                <p class="text-sm text-slate-600 mt-2 leading-relaxed">${ill.summary}</p>
              </div>
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-700">
                <span>Leitfaden & Notfallmaßnahmen lesen</span>
                <span>→</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // Audio Synthesis & Sound Machine Engine (iOS & WebKit Optimized)
  // ==========================================
  let globalAudioCtx = null;
  function getAudioCtx() {
    if (!globalAudioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) globalAudioCtx = new AudioContextClass();
    }
    return globalAudioCtx;
  }

  // Bulletproof iOS / iPhone Audio Unlocker
  function activateAudioContext(callback) {
    // 1. Wake iOS audio session via hidden HTML5 Audio Element to bypass silent mode where allowed
    try {
      const activator = document.getElementById('ios-audio-activator');
      if (activator) {
        activator.currentTime = 0;
        const p = activator.play();
        if (p && typeof p.catch === 'function') {
          p.catch(() => {});
        }
      }
    } catch(e) {}

    const ctx = getAudioCtx();
    if (!ctx) {
      if (callback) callback(null);
      return;
    }

    const onReady = () => {
      // Warm up WebKit output pipe with 1 sample of silence to ensure sound outputs on iPhone
      try {
        const dummy = ctx.createBuffer(1, 1, 22050);
        const src = ctx.createBufferSource();
        src.buffer = dummy;
        src.connect(ctx.destination);
        src.start(0);
      } catch(e) {}
      if (callback) callback(ctx);
    };

    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        onReady();
      }).catch(() => {
        onReady();
      });
    } else {
      onReady();
    }
  }

  // Automatic first-touch unlock for iPhone / Safari
  const unlockIosAudioOnce = () => {
    activateAudioContext();
    document.removeEventListener('touchstart', unlockIosAudioOnce, true);
    document.removeEventListener('touchend', unlockIosAudioOnce, true);
    document.removeEventListener('click', unlockIosAudioOnce, true);
  };
  document.addEventListener('touchstart', unlockIosAudioOnce, { once: true, passive: true });
  document.addEventListener('touchend', unlockIosAudioOnce, { once: true, passive: true });
  document.addEventListener('click', unlockIosAudioOnce, { once: true, passive: true });

  let activeAudioState = {
    source: null,
    gain: null,
    filter: null,
    interval: null
  };

  function stopAllAmbientSounds() {
    try {
      const activator = document.getElementById('ios-audio-activator');
      if (activator) activator.pause();
    } catch(e) {}
    if (activeAudioState.interval) {
      clearInterval(activeAudioState.interval);
      activeAudioState.interval = null;
    }
    if (activeAudioState.source) {
      try {
        activeAudioState.source.stop();
        activeAudioState.source.disconnect();
      } catch(e) {}
      activeAudioState.source = null;
    }
    state.activeSound = null;
    updateFloatingAudioBar();
  }

  function startBrownNoise() {
    activateAudioContext((ctx) => {
      if (!ctx) return;
      stopAllAmbientSounds();

      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(state.soundVolume, ctx.currentTime);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      source.start(0);
      activeAudioState.source = source;
      activeAudioState.gain = gain;
      activeAudioState.filter = filter;
      state.activeSound = 'brown';
      updateFloatingAudioBar();
    });
  }

  function startWhiteNoise() {
    activateAudioContext((ctx) => {
      if (!ctx) return;
      stopAllAmbientSounds();

      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.35;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, ctx.currentTime);
      filter.Q.setValueAtTime(0.8, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(state.soundVolume, ctx.currentTime);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      source.start(0);
      activeAudioState.source = source;
      activeAudioState.gain = gain;
      activeAudioState.filter = filter;
      state.activeSound = 'white';
      updateFloatingAudioBar();
    });
  }

  function startPinkNoise() {
    activateAudioContext((ctx) => {
      if (!ctx) return;
      stopAllAmbientSounds();

      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        let white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2800, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(state.soundVolume, ctx.currentTime);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      source.start(0);
      activeAudioState.source = source;
      activeAudioState.gain = gain;
      activeAudioState.filter = filter;
      state.activeSound = 'pink';
      updateFloatingAudioBar();
    });
  }

  function updateFloatingAudioBar() {
    const bar = document.getElementById('global-audio-player-bar');
    if (!bar) return;

    if (!state.activeSound) {
      bar.classList.add('hidden');
      return;
    }

    bar.classList.remove('hidden');
    const iconEl = document.getElementById('floating-audio-icon');
    const titleEl = document.getElementById('floating-audio-title');
    const badgeEl = document.getElementById('floating-audio-timer-badge');
    const volEl = document.getElementById('floating-audio-vol');

    const soundNames = {
      'brown': { name: 'Braunes Rauschen', icon: '🟫' },
      'white': { name: 'Weißes Rauschen', icon: '⚪' },
      'pink': { name: 'Rosa Rauschen', icon: '🌸' },
      'heartbeat': { name: 'Uterus-Herzschlag', icon: '💓' },
      'shush': { name: 'Sanftes Schhh', icon: '🌬️' }
    };

    const info = soundNames[state.activeSound] || { name: 'Einschlafhilfe', icon: '🔊' };
    if (iconEl) iconEl.textContent = info.icon;
    if (titleEl) titleEl.textContent = info.name;
    if (badgeEl) badgeEl.textContent = state.soundTimerMin > 0 ? `${state.soundTimerMin}m Timer` : 'Endlos';
    if (volEl) volEl.value = state.soundVolume;
  }

  function openSoundToolDirectly() {
    navigateTo('tab', 'tools');
    window.selectTool('tool-sound-machine');
  }

  function stopAudioCompletely() {
    stopAllAmbientSounds();
    renderTools();
  }

  function toggleAudioPlayPause() {
    if (state.activeSound) {
      stopAllAmbientSounds();
      renderTools();
    } else {
      startBrownNoise();
      renderTools();
    }
  }

  function startHeartbeat() {
    activateAudioContext((ctx) => {
      if (!ctx) return;
      stopAllAmbientSounds();

      const playThump = () => {
        if (state.activeSound !== 'heartbeat') return;
        const t = ctx.currentTime;
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.frequency.setValueAtTime(58, t);
        osc1.frequency.exponentialRampToValueAtTime(32, t + 0.12);
        gain1.gain.setValueAtTime(state.soundVolume * 0.8, t);
        gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(t);
        osc1.stop(t + 0.12);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.frequency.setValueAtTime(50, t + 0.16);
        osc2.frequency.exponentialRampToValueAtTime(28, t + 0.27);
        gain2.gain.setValueAtTime(state.soundVolume * 0.6, t + 0.16);
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.27);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(t + 0.16);
        osc2.stop(t + 0.27);
      };

      playThump();
      activeAudioState.interval = setInterval(playThump, 1000);
      state.activeSound = 'heartbeat';
      updateFloatingAudioBar();
    });
  }

  function startShushing() {
    activateAudioContext((ctx) => {
      if (!ctx) return;
      stopAllAmbientSounds();

      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const playShush = () => {
        if (state.activeSound !== 'shush') return;
        const t = ctx.currentTime;
        const src = ctx.createBufferSource();
        src.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2200, t);
        filter.Q.setValueAtTime(2.0, t);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(state.soundVolume * 0.65, t + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.95);

        src.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        src.start(t);
        src.stop(t + 1.0);
      };

      playShush();
      activeAudioState.interval = setInterval(playShush, 1500);
      state.activeSound = 'shush';
      updateFloatingAudioBar();
    });
  }

  // CPR Metronome (iOS Safe)
  let cprMetronomeInterval = null;
  function toggleCprMetronome() {
    state.cprRunning = !state.cprRunning;
    const heartEl = document.getElementById('cpr-flashing-heart');
    const btn = document.getElementById('cpr-toggle-btn');

    if (cprMetronomeInterval) {
      clearInterval(cprMetronomeInterval);
      cprMetronomeInterval = null;
    }

    if (state.cprRunning) {
      activateAudioContext((ctx) => {
        if (!ctx) return;
        if (btn) btn.innerHTML = '<span>⏸️ Metronom stoppen</span>';
        const playTick = () => {
          if (!state.cprRunning) return;
          const t = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.setValueAtTime(880, t);
          gain.gain.setValueAtTime(0.3, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.05);

          if (heartEl) {
            heartEl.classList.add('scale-125', 'text-rose-500');
            setTimeout(() => {
              heartEl.classList.remove('scale-125', 'text-rose-500');
            }, 110);
          }
        };

        playTick();
        const intervalMs = Math.round(60000 / state.cprBpm);
        cprMetronomeInterval = setInterval(playTick, intervalMs);
      });
    } else {
      if (btn) btn.innerHTML = '<span>▶️ Metronom starten (110 bpm)</span>';
      state.cprRunning = false;
    }
  }

  // ==========================================
  // Helper Calculations for Tools
  // ==========================================
  function getTargetWakeMinutes(ageId) {
    const map = {
      '0-4w': 50,
      '1-2m': 75,
      '3-4m': 90,
      '5-6m': 135,
      '7-9m': 180,
      '10-12m': 210
    };
    return map[ageId] || 75;
  }

  function calcWhoPercentile(val, pVals) {
    // pVals = [p3, p15, p50, p85, p97]
    const pNums = [3, 15, 50, 85, 97];
    if (val <= pVals[0]) {
      return Math.max(1, Math.round(3 * (val / pVals[0])));
    }
    if (val >= pVals[4]) {
      return Math.min(99, Math.round(97 + 2 * Math.min(1.0, (val - pVals[4]) / (pVals[4] * 0.15))));
    }
    for (let i = 0; i < 4; i++) {
      if (val >= pVals[i] && val <= pVals[i+1]) {
        const ratio = (val - pVals[i]) / (pVals[i+1] - pVals[i]);
        return Math.round(pNums[i] + ratio * (pNums[i+1] - pNums[i]));
      }
    }
    return 50;
  }

  // ==========================================
  // MAIN TOOLS RENDERER (ALL 15 TOOLS)
  // ==========================================
  
  const TOOL_CATEGORIES = [
    {
      id: 'sleep',
      title: 'Schlaf & Beruhigung',
      icon: '💤',
      desc: 'Wachfenster-Timer, Rauschen-Sounds, TOG-Schlafsack & Wein-Decoder',
      tools: [
        { id: 'tool-wake-timer', title: 'Live-Wachfenster-Timer', icon: '⏳', badge: 'Sweet-Spot Rechner', desc: 'Sekundengenauer Countdown & Phasen zur Vermeidung von Übermüdung.' },
        { id: 'tool-sound-machine', title: 'Einschlafhilfe: Weißes & Braunes Rauschen', icon: '🔊', badge: 'Offline Web-Audio', desc: 'Weißes Rauschen, Braunes Rauschen, Herzschlag & Shush mit Timer.' },
        { id: 'tool-tog', title: 'TOG-Schlafsack- & Temperatur-Berater', icon: '🌡️', badge: 'Raumklima', desc: 'Berechne passende Kleidungsschichten und Schlafsack-TOG für 16–26°C.' },
        { id: 'tool-dunstan', title: 'Dunstan-Babysprache Laut-Decoder', icon: '👶', badge: 'Audio-Reflexe', desc: 'Die 5 angeborenen Laute (Neh, Owh, Heh, Eairh, Eh) verstehen.' }
      ]
    },
    {
      id: 'emergency',
      title: 'Notfall & Akut-Medizin',
      icon: '🚨',
      desc: '3-Uhr-Nachts Triage, 112 CPR-Metronom, Dosierung & Stuhlgang',
      tools: [
        { id: 'tool-triage', title: '3-Uhr-Nachts Triage / Symptom-Checker', icon: '🚨', badge: 'Rot/Gelb/Grün', desc: 'Entscheidungsbaum: Sofort Notdienst oder bis zum Morgen beobachten?' },
        { id: 'tool-cpr-metronome', title: '112-Notruf & Reanimations-Metronom', icon: '🩺', badge: '110 bpm Taktgeber', desc: 'Akustischer Taktgeber (110 bpm), 15:2 Zähler und 5-W-Sprechzettel.' },
        { id: 'tool-medication', title: 'Fiebersaft- & Medikamentenrechner', icon: '💊', badge: 'Gewichtsbasiert', desc: 'Genaue Dosierung in mg & ml für Paracetamol und Ibuprofen nach kg.' },
        { id: 'tool-stool', title: 'Stuhlgang- & Windel-Farb-Decoder', icon: '💩', badge: 'Gallen-Ampel', desc: 'Farb-Decoder mit Acholie-Frühwarnung (Weiß/Lehm) und Normalbefunden.' }
      ]
    },
    {
      id: 'development',
      title: 'Wachstum & Entwicklung',
      icon: '🌱',
      desc: 'In-App U-Termine, Entwicklungssprünge, WHO-Kurven & Zähne',
      tools: [
        { id: 'tool-timeline', title: 'In-App U-Termin- & Impf-Fahrplan', icon: '🗓️', badge: 'Nach Geburtstermin', desc: 'Alle Fristen für U1–U6 und STIKO-Impfungen direkt in der App einsehen.' },
        { id: 'tool-milestones', title: 'Entwicklungssprung-Kompass (Oje, ich wachse)', icon: '🧠', badge: 'Sprünge 1–8', desc: 'Die mentalen Meilensteine mit Gewitterphasen und Begleit-Tipps.' },
        { id: 'tool-who-growth', title: 'WHO-Wachstums- & Perzentilen-Rechner', icon: '📈', badge: 'P3 – P97 Kurven', desc: 'Exakte Perzentilen für Gewicht, Länge und Kopfumfang nach WHO.' },
        { id: 'tool-teething', title: 'Interaktiver Zahnungs-Kompass', icon: '🦷', badge: '20 Milchzähne', desc: 'Durchbruchsreihenfolge, typische Symptome und sanfte Linderung.' }
      ]
    },
    {
      id: 'family',
      title: 'Ernährung, Alltag & Familie',
      icon: '🍼',
      desc: 'Beikost-Tagebuch, Babysitter-Zettel & Offline-Sync',
      tools: [
        { id: 'tool-beikost', title: 'Interaktives Beikost- & Allergen-Tagebuch', icon: '🥑', badge: '3-Tage-Regel', desc: 'Einführung neuer Lebensmittel und Verträglichkeits-Tracking.' },
        { id: 'tool-babysitter', title: 'Notfall-Merkblatt für Babysitter & Großeltern', icon: '📝', badge: 'Druckfertig DIN A4', desc: 'Wichtigste Telefonnummern, Allergien und Rituale auf 1 Blatt.' },
        { id: 'tool-family-sync', title: 'Partner- & Familien-Sync (Offline)', icon: '🔄', badge: 'QR & Sync-Code', desc: '100% offline Datenübertragung zwischen den Eltern-Smartphones.' }
      ]
    }
  ];

  function renderToolWakeTimerHtml() {
    return `<div id="tool-wake-timer" class="bg-white rounded-3xl border border-amber-200/80 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-amber-200">
                    ⏳
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900">Live-Wachfenster-Timer („Sweet-Spot-Rechner“)</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Verhindert Übermüdung und exzessives Schreien durch punktgenaues Einschlafbegleiten.</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <select onchange="window.setWakeTimerAge(this.value)" class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50">
                    <option value="0-4w" ${state.wakeAge === '0-4w' ? 'selected' : ''}>0–4 Wochen (50 Min)</option>
                    <option value="1-2m" ${state.wakeAge === '1-2m' ? 'selected' : ''}>1–2 Monate (75 Min)</option>
                    <option value="3-4m" ${state.wakeAge === '3-4m' ? 'selected' : ''}>3–4 Monate (90 Min)</option>
                    <option value="5-6m" ${state.wakeAge === '5-6m' ? 'selected' : ''}>5–6 Monate (2,25 Std)</option>
                    <option value="7-9m" ${state.wakeAge === '7-9m' ? 'selected' : ''}>7–9 Monate (3 Std)</option>
                    <option value="10-12m" ${state.wakeAge === '10-12m' ? 'selected' : ''}>10–12 Monate (3,5 Std)</option>
                  </select>
                </div>
              </div>

              ${(state.wakeStartTime === 0 && !state.isSleeping && (!state.lastWakeTime || state.lastWakeTime === 0)) ? `
                <div class="bg-amber-50/60 dark:bg-amber-950/30 rounded-2xl p-6 border border-amber-200 dark:border-amber-800 text-center space-y-4">
                  <span class="text-4xl block">👶</span>
                  <h5 class="text-base font-extrabold text-slate-900 dark:text-white">Schlaf- & Wachfenster-Rhythmus starten</h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Wähle den aktuellen Zustand deines Babys: Ist es gerade aufgewacht oder legst du es gerade schlafen?
                  </p>
                  <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button onclick="window.logBabyWokeUp(0)" class="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-2xl shadow-md transition-all cursor-pointer">
                      ☀️ Baby ist JETZT aufgewacht!
                    </button>
                    <button onclick="window.logBabyPutToBed(0)" class="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-2xl shadow-md transition-all cursor-pointer">
                      😴 Baby JETZT schlafen gelegt
                    </button>
                  </div>
                  <div class="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                    <span>Vor Kurzem:</span>
                    <button onclick="window.logBabyWokeUp(15)" class="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">Aufgewacht vor 15m</button>
                    <button onclick="window.logBabyPutToBed(15)" class="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">Eingeschlafen vor 15m</button>
                  </div>
                </div>
              ` : `
                <div id="live-wake-timer-display" class="space-y-4"></div>
              `}
            </div>`;
  }
  function renderToolSoundMachineHtml() {
    return `<div id="tool-sound-machine" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-purple-200">
                    🔊
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900">Offline-Einschlafhilfe & Rauschen-Generator</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Beruhigende Frequenzen direkt synthetisiert – 100% offline, kein Streaming, null Datenverbrauch.</p>
                  </div>
                </div>
                ${state.activeSound ? `
                  <button onclick="window.toggleAmbientSound(null)" class="px-3.5 py-1.5 bg-rose-100 text-rose-800 font-bold text-xs rounded-xl border border-rose-200 hover:bg-rose-200 self-start sm:self-auto cursor-pointer">
                    ⏹️ Ton stoppen
                  </button>
                ` : ''}
              </div>

              <!-- 5 Sound Buttons -->
              <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                <button onclick="window.toggleAmbientSound('brown')" class="p-3.5 rounded-2xl border text-left transition-all ${
                  state.activeSound === 'brown' 
                    ? 'bg-amber-900 text-white border-amber-900 ring-2 ring-amber-500 shadow-md' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }">
                  <span class="text-2xl mb-1 block">🟫</span>
                  <div class="font-extrabold text-xs sm:text-sm">Braunes Rauschen</div>
                  <div class="text-[10px] opacity-80 mt-0.5">Tief, warm, wie Wasserfall</div>
                </button>

                <button onclick="window.toggleAmbientSound('white')" class="p-3.5 rounded-2xl border text-left transition-all ${
                  state.activeSound === 'white' 
                    ? 'bg-sky-600 text-white border-sky-600 ring-2 ring-sky-400 shadow-md' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }">
                  <span class="text-2xl mb-1 block">⚪</span>
                  <div class="font-extrabold text-xs sm:text-sm">Weißes Rauschen</div>
                  <div class="text-[10px] opacity-80 mt-0.5">Gleichmäßig, Meeresbrise</div>
                </button>

                <button onclick="window.toggleAmbientSound('pink')" class="p-3.5 rounded-2xl border text-left transition-all ${
                  state.activeSound === 'pink' 
                    ? 'bg-rose-700 text-white border-rose-700 ring-2 ring-rose-400 shadow-md' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }">
                  <span class="text-2xl mb-1 block">🌸</span>
                  <div class="font-extrabold text-xs sm:text-sm">Rosa Rauschen</div>
                  <div class="text-[10px] opacity-80 mt-0.5">Sanfter Regen, 1/f Spektrum</div>
                </button>

                <button onclick="window.toggleAmbientSound('heartbeat')" class="p-3.5 rounded-2xl border text-left transition-all ${
                  state.activeSound === 'heartbeat' 
                    ? 'bg-rose-600 text-white border-rose-600 ring-2 ring-rose-400 shadow-md' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }">
                  <span class="text-2xl mb-1 block">💓</span>
                  <div class="font-extrabold text-xs sm:text-sm">Mutterleib-Herz</div>
                  <div class="text-[10px] opacity-80 mt-0.5">60 bpm Uterus-Puls</div>
                </button>

                <button onclick="window.toggleAmbientSound('shush')" class="p-3.5 rounded-2xl border text-left transition-all ${
                  state.activeSound === 'shush' 
                    ? 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-400 shadow-md' 
                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                }">
                  <span class="text-2xl mb-1 block">🌬️</span>
                  <div class="font-extrabold text-xs sm:text-sm">Sanftes „Schhh“</div>
                  <div class="text-[10px] opacity-80 mt-0.5">Rhythmisches Beruhigen</div>
                </button>
              </div>

              <!-- Controls: Volume & Timer -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Lautstärke: <span id="sound-vol-display">${Math.round(state.soundVolume * 100)}%</span></label>
                  <input type="range" min="0.05" max="1.0" step="0.05" value="${state.soundVolume}" oninput="window.setAmbientVolume(this.value)" class="w-full accent-sky-600">
                </div>
                <div>
                  <label class="block font-bold text-slate-700 mb-1">Abschalt-Timer:</label>
                  <div class="flex flex-wrap gap-1.5">
                    ${[0, 15, 30, 60].map(min => `
                      <button onclick="window.setAmbientTimer(${min})" class="px-2.5 py-1 rounded-lg border font-bold text-[11px] ${
                        state.soundTimerMin === min ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300'
                      }">
                        ${min === 0 ? 'Endlos' : `${min} Min`}
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- iPhone / Mobile Audio Helper Hint -->
              <div class="mt-4 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                <span class="text-base flex-shrink-0">📱</span>
                <div>
                  <strong>iPhone-Hinweis für Sound-Wiedergabe:</strong>
                  <ul class="list-disc list-inside mt-1 space-y-0.5 opacity-90">
                    <li>Steht der <strong>physische Stummschalter an der Geräteseite deines iPhones</strong> auf Stumm (orange Markierung)? WebKit benötigt für Audio-Ausgabe den Laut-Modus.</li>
                    <li>Ist die <strong>Medienlautstärke</strong> über die Lautstärketasten des iPhones aufgedreht?</li>
                  </ul>
                </div>
              </div>
            </div>`;
  }
  function renderToolTogHtml() {
    return `<div id="tool-tog" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">🌡️</div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900">TOG-Schlafsack & Kleidung-Rechner</h4>
                  <p class="text-sm text-slate-600">Verhindert Überhitzung (Hauptrisiko für SIDS) und Auskühlen in der Nacht.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <label class="block text-sm font-semibold text-slate-800 mb-2">Aktuelle Raumtemperatur im Schlafzimmer:</label>
                  <div class="flex items-center gap-4">
                    <input type="range" id="tog-slider" min="15" max="27" value="${state.togTemp}" step="1" 
                      class="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600">
                    <span id="tog-temp-display" class="font-extrabold text-2xl text-sky-700 w-16 text-right">${state.togTemp}°C</span>
                  </div>
                  <div class="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                    <span>15°C (Kühl)</span>
                    <span>18°C (Optimal)</span>
                    <span>21°C</span>
                    <span>27°C (Hochsommer)</span>
                  </div>

                  <div class="mt-6 p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-slate-700">
                    <strong class="text-sky-900">💡 Der goldene Nackentest:</strong>
                    Fühle immer mit 2 Fingern im Nacken deines Babys. Er sollte sich angenehm warm, aber niemals feucht oder schwitzig anfühlen! Kalte Hände oder Füße sind bei Babys normal und kein Maßstab.
                  </div>
                </div>

                <div id="tog-recommendation-box" class="p-6 rounded-2xl border transition-all"></div>
              </div>
            </div>`;
  }
  function renderToolDunstanHtml() {
    return `<div id="tool-dunstan" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">📢</div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900">Dunstan Baby-Sprach-Decoder</h4>
                  <p class="text-sm text-slate-600">Klicke auf die universellen Reflexlaute, um zu erfahren, wie sie klingen und was dein Baby sofort braucht.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                ${[
                  { sound: "„NEH“", meaning: "Hunger!", reflex: "Zunge stößt an Gaumen (Saugreflex)", action: "Sofort anlegen / Fläschchen", color: "amber" },
                  { sound: "„OWH“", meaning: "Müde!", reflex: "Gähnreflex (Mund oval)", action: "Reize reduzieren, ins Bettchen", color: "blue" },
                  { sound: "„HEH“", meaning: "Unwohlsein", reflex: "Hautreizung / Kälte / Nässe", action: "Windel prüfen, Kleidung checken", color: "purple" },
                  { sound: "„EAIRH“", meaning: "Blähungen!", reflex: "Bauchpresse bei Gasen im Darm", action: "Fliegergriff, Beine radeln", color: "emerald" },
                  { sound: "„EH“", meaning: "Bäuerchen!", reflex: "Luftblase drückt auf Zwerchfell", action: "Aufrecht an die Schulter legen", color: "rose" }
                ].map(item => `
                  <div class="border rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition-all border-slate-200 bg-white">
                    <div>
                      <span class="text-2xl font-black text-slate-800">${item.sound}</span>
                      <div class="font-bold text-slate-900 mt-1">${item.meaning}</div>
                      <div class="text-xs text-slate-500 mt-2">${item.reflex}</div>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-100">
                      <span class="text-xs font-semibold text-slate-700 block mb-2">👉 Sofort-Aktion:</span>
                      <span class="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded block">${item.action}</span>
                      <button onclick="window.playDunstanDemo('${item.sound}')" class="w-full mt-3 py-1.5 px-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1">
                        <span>🔊 Ton anhören</span>
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>`;
  }
  function renderToolTriageHtml() {
    return `<div id="tool-triage" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-rose-200">
                  🩺
                </div>
                <div>
                  <h4 class="text-xl font-black text-slate-900">3-Uhr-Nachts Symptom-Checker & Notfall-Triage</h4>
                  <p class="text-xs sm:text-sm text-slate-600">Interaktiver Entscheidungsbaum: Wann reicht der Kinderarzt am Morgen und wann zählt jede Sekunde?</p>
                </div>
              </div>

              <div id="triage-wizard-container"></div>
            </div>`;
  }
  function renderToolCprMetronomeHtml() {
    return `<div id="tool-cpr-metronome" class="bg-gradient-to-br from-rose-50 via-white to-red-50/40 dark:from-rose-950/60 dark:via-slate-900 dark:to-slate-950 rounded-3xl border-2 border-rose-300 dark:border-rose-900/60 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-rose-200">
                    🚨
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900 dark:text-white">112-Notruf-Sprechzettel & Reanimations-Metronom</h4>
                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">Paniksicherer Vorlesetext für den Notruf 112 + Taktgeber (110 bpm) für die Herzdruckmassage.</p>
                  </div>
                </div>
                <a href="tel:112" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-sm rounded-xl shadow-md flex items-center gap-2 self-start sm:self-auto cursor-pointer">
                  <span>📞 112 Anrufen</span>
                </a>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                <!-- 5 W-Fragen Sprechzettel -->
                <div class="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <span class="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 block">Vorlesetext bei Notruf 112:</span>
                  <div class="p-2.5 bg-rose-50/70 dark:bg-rose-950/50 rounded-xl border border-rose-200 dark:border-rose-900/70">
                    <strong>1. WO?</strong> <span class="text-rose-900 dark:text-rose-200 font-extrabold">${state.babysitterData.address || 'Musterstraße 12, 80331 München'}</span>
                  </div>
                  <div class="p-2.5 bg-rose-50/70 dark:bg-rose-950/50 rounded-xl border border-rose-200 dark:border-rose-900/70">
                    <strong>2. WAS?</strong> <span class="text-rose-900 dark:text-rose-200 font-bold">Akuter Notfall bei Säugling (${state.babysitterData.babyName}, geb. ${state.babysitterData.birthDate})</span>
                  </div>
                  <div class="p-2.5 bg-rose-50/70 dark:bg-rose-950/50 rounded-xl border border-rose-200 dark:border-rose-900/70">
                    <strong>3. WIE VIELE?</strong> <span>1 Säugling</span>
                  </div>
                  <div class="p-2.5 bg-rose-50/70 dark:bg-rose-950/50 rounded-xl border border-rose-200 dark:border-rose-900/70">
                    <strong>4. WELCHE SYMPTOME?</strong> <span>(Atemnot / Krampf / Reglos / Sturz)</span>
                  </div>
                  <div class="p-2.5 bg-amber-50 dark:bg-amber-950/50 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-bold">
                    ⚠️ 5. WARTEN auf Rückfragen der Leitstelle – NICHT auflegen!
                  </div>
                </div>

                <!-- Reanimations-Metronom -->
                <div class="bg-white dark:bg-slate-900/90 p-5 rounded-2xl border border-rose-200 dark:border-rose-900/60 text-center space-y-4">
                  <span class="text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 block">Taktgeber Herzdruckmassage (CPR)</span>
                  <div id="cpr-flashing-heart" class="text-5xl transition-transform duration-100 select-none">
                    ❤️
                  </div>
                  <div class="text-2xl font-black text-slate-900 dark:text-white">
                    110 <span class="text-sm font-bold text-slate-500 dark:text-slate-400">Drückstöße / Minute</span>
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300">
                    <strong>Takt für Babys:</strong> 30x Drücken (mit 2 Fingern 4 cm tief in der Mitte des Brustkorbs) ➔ 2x vorsichtig beatmen ➔ wiederholen!
                  </p>
                  <button id="cpr-toggle-btn" onclick="window.toggleCprMetronome()" class="w-full py-3 bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-700 text-white font-black text-sm rounded-xl shadow-md transition-all cursor-pointer">
                    ${state.cprRunning ? '<span>⏸️ Metronom stoppen</span>' : '<span>▶️ Metronom starten (110 bpm)</span>'}
                  </button>
                </div>
              </div>
            </div>`;
  }
  function renderToolMedicationHtml() {
    return `<div id="tool-medication" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-200">
                  💊
                </div>
                <div>
                  <h4 class="text-xl font-black text-slate-900">Fiebersaft- & Medikamenten-Dosierungsrechner</h4>
                  <p class="text-xs sm:text-sm text-slate-600">Exakte Berechnung nach aktuellem Körpergewicht (DGKJ-Leitlinie) & Sicherheitsabstand-Timer.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <!-- Weight slider -->
                  <label class="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Aktuelles Gewicht des Babys:</label>
                  <div class="flex items-center gap-4">
                    <input type="range" min="3.0" max="15.0" step="0.1" value="${state.medWeight}" oninput="window.setMedWeight(this.value)" class="w-full accent-blue-600">
                    <span class="font-extrabold text-2xl text-blue-700 w-20 text-right">${state.medWeight.toFixed(1)} kg</span>
                  </div>

                  <!-- Drug Toggle -->
                  <div class="mt-6">
                    <label class="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Wirkstoff wählen:</label>
                    <div class="grid grid-cols-2 gap-2">
                      <button onclick="window.setMedType('ibuprofen')" class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        state.medType === 'ibuprofen' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }">
                        Ibuprofen (z.B. Nurofen)
                      </button>
                      <button onclick="window.setMedType('paracetamol')" class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                        state.medType === 'paracetamol' ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200'
                      }">
                        Paracetamol (z.B. Ben-u-ron)
                      </button>
                    </div>
                  </div>

                  <div class="mt-6 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
                    <strong>⚠️ Wichtiger Sicherheitshinweis:</strong>
                    ${state.medType === 'ibuprofen' 
                      ? 'Ibuprofen erst ab dem vollendeten 3. Lebensmonat und mindestens 5–6 kg Körpergewicht! Niemals auf nüchternen Magen.' 
                      : 'Paracetamol streng nach Gewicht dosieren (10–15 mg/kg). Mindestabstand von 6 Stunden unbedingt einhalten (Leberschutz!).'}
                  </div>
                </div>

                <!-- Dosage calculation box -->
                <div id="med-dosage-box" class="p-6 rounded-2xl border border-blue-200 bg-blue-50/50 space-y-4"></div>
              </div>
            </div>`;
  }
  function renderToolStoolHtml() {
    return `<div id="tool-stool" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">🧷</div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900">Windel- & Stuhlgang-Decoder</h4>
                  <p class="text-sm text-slate-600">Welche Stuhlfarbe ist harmlos und bei welchen Alarmsignalen (Weiß, Rot, Teerschwarz) musst du sofort zum Kinderarzt?</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-6">
                ${STOOL_COLOR_GUIDE.map(item => `
                  <button onclick="window.selectStoolColor('${item.id}')" class="px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                    state.selectedStoolColor === item.id 
                      ? 'border-slate-800 ring-2 ring-slate-800 shadow-sm bg-slate-900 text-white' 
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }">
                    <span class="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" style="background-color: ${item.color};"></span>
                    <span>${item.name}</span>
                  </button>
                `).join('')}
              </div>

              <div id="stool-color-result"></div>
            </div>`;
  }
  function renderToolTimelineHtml() {
    return `<div id="tool-timeline" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-indigo-200">
                    🗓️
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900">Mein Baby-Fahrplan (U-Termine & Impfungen)</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Direkt in der App einsehbar: Berechnet alle Fristen exakt nach dem Geburtsdatum deines Babys.</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <label class="font-bold text-slate-700">Geburtsdatum:</label>
                  <input type="date" value="${state.babyBirthDate}" onchange="window.updateBabyBirthDate(this.value)" class="px-3 py-1.5 rounded-xl border border-slate-200 font-bold text-slate-800 bg-slate-50">
                </div>
              </div>

              <div id="timeline-list-container" class="space-y-3"></div>
            </div>`;
  }
  function renderToolMilestonesHtml() {
    return `<div id="tool-milestones" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-sky-200">
                    🧠
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900">Entwicklungssprung-Kompass („Oje, ich wachse“ Phasen)</h4>
                    <p class="text-xs sm:text-sm text-slate-600">Die 8 großen neurologischen Reifungsschübe: Warum dein Baby unruhig ist und was es gerade lernt.</p>
                  </div>
                </div>
              </div>

              <!-- Jump chips -->
              <div class="flex flex-wrap gap-2 mb-6">
                ${MILESTONE_JUMPS_DATA.map(j => `
                  <button onclick="window.selectJump(${j.jump})" class="px-3.5 py-2 rounded-xl border text-xs font-bold transition-all ${
                    state.selectedJumpId === j.jump
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }">
                    <span>Sprung ${j.jump} (Woche ${j.week})</span>
                  </button>
                `).join('')}
              </div>

              <div id="jump-details-card"></div>
            </div>`;
  }
  function renderToolWhoGrowthHtml() {
    return `<div id="tool-who-growth" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-emerald-200">
                  📉
                </div>
                <div>
                  <h4 class="text-xl font-black text-slate-900">WHO-Perzentilen- & Wachstumskurven-Rechner</h4>
                  <p class="text-xs sm:text-sm text-slate-600">Prüfe Gewicht, Körperlänge und Kopfumfang anhand der offiziellen WHO-Referenzstandards.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <!-- Inputs -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 text-xs">
                  <div>
                    <label class="block font-bold text-slate-700 mb-1">Geschlecht:</label>
                    <div class="grid grid-cols-2 gap-2">
                      <button onclick="window.updateGrowthField('growthGender', 'boys')" class="py-2 rounded-xl border font-bold text-xs ${
                        state.growthGender === 'boys' ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-slate-700 border-slate-200'
                      }">👦 Junge</button>
                      <button onclick="window.updateGrowthField('growthGender', 'girls')" class="py-2 rounded-xl border font-bold text-xs ${
                        state.growthGender === 'girls' ? 'bg-rose-500 text-white border-rose-500' : 'bg-white text-slate-700 border-slate-200'
                      }">👧 Mädchen</button>
                    </div>
                  </div>

                  <div>
                    <label class="block font-bold text-slate-700 mb-1">Alter in Lebensmonaten:</label>
                    <select onchange="window.updateGrowthField('growthMonth', parseInt(this.value, 10))" class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-white text-slate-800">
                      ${[0,1,2,3,4,5,6,7,8,9,10,11,12].map(m => `
                        <option value="${m}" ${state.growthMonth === m ? 'selected' : ''}>Monat ${m} (${m === 0 ? 'Geburt' : `${m} Monate`})</option>
                      `).join('')}
                    </select>
                  </div>

                  <div>
                    <label class="block font-bold text-slate-700 mb-1">Körpergewicht (kg):</label>
                    <input type="number" step="0.1" value="${state.growthWeight}" onchange="window.updateGrowthField('growthWeight', parseFloat(this.value))" class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-white text-slate-800">
                  </div>

                  <div>
                    <label class="block font-bold text-slate-700 mb-1">Körperlänge (cm):</label>
                    <input type="number" step="0.5" value="${state.growthLength}" onchange="window.updateGrowthField('growthLength', parseFloat(this.value))" class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-white text-slate-800">
                  </div>

                  <div>
                    <label class="block font-bold text-slate-700 mb-1">Kopfumfang (cm):</label>
                    <input type="number" step="0.5" value="${state.growthHead}" onchange="window.updateGrowthField('growthHead', parseFloat(this.value))" class="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold bg-white text-slate-800">
                  </div>
                </div>

                <!-- Percentile Results -->
                <div class="lg:col-span-2 space-y-4" id="who-growth-results-container"></div>
              </div>
            </div>`;
  }
  function renderToolBeikostHtml() {
    return `<div id="tool-beikost" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-amber-200">
                    🥣
                  </div>
                  <div>
                    <h4 class="text-xl font-black text-slate-900">Interaktives Beikost- & Allergen-Tagebuch</h4>
                    <p class="text-xs sm:text-sm text-slate-600">3-Tage-Ampelregel für neue Lebensmittel & gezielte Allergen-Dokumentation.</p>
                  </div>
                </div>
                <button onclick="window.addCustomBeikostFood()" class="px-3.5 py-1.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 self-start sm:self-auto cursor-pointer">
                  + Eigenes Lebensmittel
                </button>
              </div>

              <!-- Beikost Category Pills -->
              <div class="flex flex-wrap gap-1.5 mb-4 text-xs">
                ${['all', 'Gemüse', 'Sättigung', 'Getreide', 'Obst', 'Allergen'].map(c => `
                  <button onclick="window.filterBeikostCategory('${c}')" class="px-3 py-1 rounded-xl border font-bold ${
                    state.beikostCategory === c ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-white text-slate-700 border-slate-200'
                  }">
                    ${c === 'all' ? 'Alle Lebensmittel' : c}
                  </button>
                `).join('')}
              </div>

              <div id="beikost-foods-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"></div>
            </div>`;
  }
  function renderToolTeethingHtml() {
    return `<div id="tool-teething" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">🦷</div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900">Milchgebiss & Zahnungs-Kompass</h4>
                  <p class="text-sm text-slate-600">Reihenfolge des Durchbruchs der 20 Milchzähne, Mythen-Check & evidenzbasierte Schmerzlinderung.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div class="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-xs">
                  <span class="text-slate-500 font-bold block">Gesamtzahl Zähne:</span>
                  <strong class="text-base text-blue-900">${TEETH_DATA.overview.total} Milchzähne</strong>
                </div>
                <div class="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-xs">
                  <span class="text-slate-500 font-bold block">Durchschnittlicher Start:</span>
                  <strong class="text-base text-blue-900">${TEETH_DATA.overview.normalStart}</strong>
                </div>
                <div class="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-xs">
                  <span class="text-slate-500 font-bold block">Normale Spanne:</span>
                  <strong class="text-base text-blue-900">${TEETH_DATA.overview.normalRange}</strong>
                </div>
              </div>

              <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Wähle die Zahngruppe nach Durchbruchs-Reihenfolge:</span>
              <div class="flex flex-wrap gap-2 mb-6">
                ${TEETH_DATA.jawGroups.map(tg => `
                  <button onclick="window.selectTeethGroup('${tg.id}')" class="px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                    state.selectedTeethGroup === tg.id
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }">
                    <span>#${tg.order} ${tg.name.split('(')[0]}</span>
                  </button>
                `).join('')}
              </div>

              <div id="teeth-group-result" class="mb-6"></div>
            </div>`;
  }
  function renderToolBabysitterHtml() {
    return `<div id="tool-babysitter" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">📝</div>
                  <div>
                    <h4 class="text-xl font-bold text-slate-900">Notfall- & Babysitter-Merkblatt (Druckbar)</h4>
                    <p class="text-sm text-slate-600">Erstelle ein kompaktes Notfallblatt für Oma, Opa oder Babysitter – inklusive 112, Giftnotruf und Sicherheitsregeln.</p>
                  </div>
                </div>
                <button onclick="window.printBabysitterSheet()" class="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer">
                  <span>🖨️ Merkblatt drucken</span>
                </button>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div class="space-y-4 no-print">
                  <h5 class="text-xs font-black uppercase tracking-wider text-slate-500">Angaben für die Betreuungsperson:</h5>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label class="block font-bold text-slate-700 mb-1">Name des Babys:</label>
                      <input type="text" value="${state.babysitterData.babyName || ''}" oninput="window.updateBabysitterField('babyName', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    </div>
                    <div>
                      <label class="block font-bold text-slate-700 mb-1">Geburtsdatum:</label>
                      <input type="text" value="${state.babysitterData.birthDate || ''}" oninput="window.updateBabysitterField('birthDate', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label class="block font-bold text-slate-700 mb-1">Eltern-Mobilnummer(n):</label>
                      <input type="text" value="${state.babysitterData.parentPhone || ''}" oninput="window.updateBabysitterField('parentPhone', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    </div>
                    <div>
                      <label class="block font-bold text-slate-700 mb-1">Kinderarzt & Telefon:</label>
                      <input type="text" value="${state.babysitterData.pediatrician || ''}" oninput="window.updateBabysitterField('pediatrician', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    </div>
                  </div>

                  <div class="text-xs">
                    <label class="block font-bold text-slate-700 mb-1">Genaue Wohnadresse (für Notruf 112 unerlässlich!):</label>
                    <input type="text" value="${state.babysitterData.address || ''}" oninput="window.updateBabysitterField('address', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                  </div>

                  <div class="text-xs">
                    <label class="block font-bold text-slate-700 mb-1">Bekannte Allergien / Medikamente:</label>
                    <input type="text" value="${state.babysitterData.allergies || ''}" oninput="window.updateBabysitterField('allergies', this.value)" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">
                  </div>

                  <div class="text-xs">
                    <label class="block font-bold text-slate-700 mb-1">Schlafgewohnheiten / Beruhigungstipps:</label>
                    <textarea oninput="window.updateBabysitterField('bedtimeNotes', this.value)" rows="2" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-slate-800 font-medium">${state.babysitterData.bedtimeNotes || ''}</textarea>
                  </div>
                </div>

                <div id="babysitter-preview-card" class="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-300 printable-card">
                  <div class="border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-rose-600 block">Notfall- & Betreuungskarte</span>
                      <h4 class="text-xl font-black text-slate-900">Baby: ${state.babysitterData.babyName || 'Leo'} (*${state.babysitterData.birthDate || '15.03.2026'})</h4>
                    </div>
                    <div class="text-right">
                      <div class="text-rose-600 font-black text-lg">📞 NOTRUF 112</div>
                      <div class="text-slate-500 text-[10px]">Giftnotruf: 030 19240</div>
                    </div>
                  </div>

                  <div class="space-y-3 text-xs text-slate-800">
                    <div class="bg-white p-3 rounded-xl border border-slate-200">
                      <span class="font-bold text-slate-500 block text-[10px] uppercase">Wohnort (bei Notruf nennen):</span>
                      <strong class="text-slate-900 text-sm">${state.babysitterData.address || '-'}</strong>
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                      <div class="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span class="font-bold text-slate-500 block text-[10px] uppercase">Eltern-Telefon:</span>
                        <strong class="text-slate-900">${state.babysitterData.parentPhone || '-'}</strong>
                      </div>
                      <div class="bg-white p-2.5 rounded-xl border border-slate-200">
                        <span class="font-bold text-slate-500 block text-[10px] uppercase">Kinderarzt:</span>
                        <strong class="text-slate-900">${state.babysitterData.pediatrician || '-'}</strong>
                      </div>
                    </div>

                    <div class="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span class="font-bold text-slate-500 block text-[10px] uppercase">Allergien / Besonderheiten:</span>
                      <p class="m-0 text-slate-700">${state.babysitterData.allergies || '-'}</p>
                    </div>

                    <div class="bg-white p-2.5 rounded-xl border border-slate-200">
                      <span class="font-bold text-slate-500 block text-[10px] uppercase">Schlaf & Beruhigung:</span>
                      <p class="m-0 text-slate-700">${state.babysitterData.bedtimeNotes || '-'}</p>
                    </div>

                    <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-[11px] text-rose-900">
                      <strong>🚨 3 GOLDENE SICHERHEITSREGELN FÜR DIE BETREUUNG:</strong>
                      <ul class="list-disc list-inside mt-1 space-y-0.5 font-medium">
                        <li><strong>IMMER RÜCKENLAGE</strong> im Schlafsack – niemals Decke, Kissen oder Felle!</li>
                        <li><strong>NIEMALS SCHÜTTELN!</strong> Bei Schreien: Baby sicher ablegen, Raum verlassen, durchatmen.</li>
                        <li><strong>NIEMALS ALLEIN LASSEN</strong> auf Wickeltisch, Sofa oder in der Wanne.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }
  function renderToolFamilySyncHtml() {
    return `<div id="tool-family-sync" class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
                  📲
                </div>
                <div>
                  <h4 class="text-xl font-black text-slate-900">Familien-Sync via QR-Code (Offline-Übertragung)</h4>
                  <p class="text-xs sm:text-sm text-slate-600">Übertrage alle Einstellungen, Checklisten und Daten sofort auf das Smartphone deines Partners.</p>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <!-- Export -->
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-center">
                  <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">1. Von diesem Gerät exportieren:</h5>
                  <canvas id="sync-qr-canvas" class="mx-auto bg-white p-2 rounded-xl border border-slate-200 shadow-sm" width="180" height="180"></canvas>
                  <p class="text-xs text-slate-500">Partner scannt den QR-Code mit der Smartphone-Kamera ODER kopiert den Textcode:</p>
                  <button onclick="window.copySyncCode()" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl shadow-sm transition-all cursor-pointer">
                    📋 Sync-Code in Zwischenablage kopieren
                  </button>
                </div>

                <!-- Import -->
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">2. Auf Partner-Gerät importieren:</h5>
                  <p class="text-xs text-slate-600">Füge hier den kopierten Sync-Code ein, um alle Daten 1:1 zu übernehmen:</p>
                  <textarea id="sync-import-textarea" rows="4" placeholder="Sync-Code hier einfügen..." class="w-full p-3 rounded-xl border border-slate-200 text-xs font-mono"></textarea>
                  <button onclick="window.importSyncCode(document.getElementById('sync-import-textarea').value)" class="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-black text-xs rounded-xl shadow-sm transition-all cursor-pointer">
                    📥 Daten jetzt synchronisieren
                  </button>
                  <div id="sync-import-feedback" class="text-xs font-bold text-center"></div>
                </div>
              </div>
            </div>`;
  }

  const TOOL_RENDERERS = {
    'tool-wake-timer': renderToolWakeTimerHtml,
    'tool-sound-machine': renderToolSoundMachineHtml,
    'tool-tog': renderToolTogHtml,
    'tool-dunstan': renderToolDunstanHtml,
    'tool-triage': renderToolTriageHtml,
    'tool-cpr-metronome': renderToolCprMetronomeHtml,
    'tool-medication': renderToolMedicationHtml,
    'tool-stool': renderToolStoolHtml,
    'tool-timeline': renderToolTimelineHtml,
    'tool-milestones': renderToolMilestonesHtml,
    'tool-who-growth': renderToolWhoGrowthHtml,
    'tool-beikost': renderToolBeikostHtml,
    'tool-teething': renderToolTeethingHtml,
    'tool-babysitter': renderToolBabysitterHtml,
    'tool-family-sync': renderToolFamilySyncHtml
  };

  // ==========================================
  // MAIN TOOLS RENDERER (HIERARCHICAL MENU ARCHITECTURE)
  // ==========================================
  function renderTools() {
    const container = document.getElementById('tools-container');
    if (!container) return;

    // A) If a specific tool is focused: render ONLY this tool with navigation bar!
    if (state.focusedTool && TOOL_RENDERERS[state.focusedTool]) {
      const activeCat = TOOL_CATEGORIES.find(c => c.tools.some(t => t.id === state.focusedTool)) || TOOL_CATEGORIES[0];
      const activeToolObj = activeCat.tools.find(t => t.id === state.focusedTool) || activeCat.tools[0];

      container.innerHTML = `
        <div class="space-y-6">
          <!-- Focused Navigation Bar -->
          <div class="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <button onclick="window.closeFocusedTool()" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-sm">
                <span>←</span>
                <span>Werkzeuge-Menü</span>
              </button>
              <span class="text-slate-300 hidden sm:inline">|</span>
              <span class="text-xs font-extrabold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100 hidden sm:inline">
                ${activeCat.icon} ${activeCat.title}
              </span>
            </div>

            <!-- Quick Switcher Pills for this category -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
              ${activeCat.tools.map(t => `
                <button onclick="window.openTool('${t.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  state.focusedTool === t.id ? 'bg-sky-600 text-white shadow-sm' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                }">
                  <span>${t.icon}</span>
                  <span class="ml-1">${t.title.split(':')[0].split('(')[0].trim()}</span>
                </button>
              `).join('')}
              <button onclick="window.showAllTools()" class="px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-700 border border-dashed border-slate-300 ml-1 whitespace-nowrap" title="Alle 15 Werkzeuge untereinander anzeigen">
                <span>Alle anzeigen</span>
              </button>
            </div>
          </div>

          <!-- The Focused Tool Container -->
          <div>
            ${TOOL_RENDERERS[state.focusedTool]()}
          </div>
        </div>
      `;
    } 
    // B) Scroll-All Mode: Render all 15 tools sequentially
    else if (state.activeToolCategory === 'show_all') {
      container.innerHTML = `
        <div class="space-y-10">
          <div class="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                Gesamtansicht
              </span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-1">Alle 15 Werkzeuge untereinander</h2>
            </div>
            <button onclick="window.closeFocusedTool()" class="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all cursor-pointer">
              ← Zum aufgeräumten Menü
            </button>
          </div>

          ${TOOL_CATEGORIES.map(cat => `
            <div class="space-y-6">
              <h3 class="text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <span>${cat.icon}</span> ${cat.title}
              </h3>
              ${cat.tools.map(t => TOOL_RENDERERS[t.id]()).join('\n')}
            </div>
          `).join('\n')}
        </div>
      `;
    }
    // C) Default Menu Mode: Category Selector + App Grid of Tools!
    else {
      const activeCatId = (state.activeToolCategory === 'all' || !state.activeToolCategory) ? 'sleep' : state.activeToolCategory;
      const visibleCategories = TOOL_CATEGORIES.filter(c => state.activeToolCategory === 'all' ? true : c.id === activeCatId);

      container.innerHTML = `
        <div class="space-y-8">
          <!-- Header Banner -->
          <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                🛠️ Eltern-Werkzeugkasten
              </span>
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-2">15 Interaktive Alltags- & Notfall-Werkzeuge</h2>
              <p class="text-slate-600 text-sm mt-1">Gezielte Menü-Auswahl: Wähle eine Kategorie oder tippe direkt auf das gewünschte Werkzeug.</p>
            </div>
            <button onclick="window.showAllTools()" class="self-start md:self-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer">
              👁️ Alle 15 scrollen
            </button>
          </div>

          <!-- Übergeordnete Kategorie-Buttons (4 Haupt-Themen) -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            ${TOOL_CATEGORIES.map(c => `
              <button onclick="window.filterToolsCategory('${c.id}')" class="p-4 sm:p-5 rounded-3xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                activeCatId === c.id
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-200 border-sky-600 ring-2 ring-sky-300'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
              }">
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-3xl">${c.icon}</span>
                    <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${activeCatId === c.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}">
                      ${c.tools.length} Tools
                    </span>
                  </div>
                  <strong class="text-sm sm:text-base font-extrabold block leading-tight">${c.title}</strong>
                </div>
                <p class="text-[11px] mt-2 leading-relaxed ${activeCatId === c.id ? 'text-sky-100' : 'text-slate-500'}">${c.desc}</p>
              </button>
            `).join('')}
          </div>

          <!-- Werkzeug-Kacheln für die gewählte Kategorie -->
          <div class="space-y-8">
            ${visibleCategories.map(cat => `
              <div class="space-y-4">
                <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-2xl">${cat.icon}</span>
                    <h3 class="text-lg font-black text-slate-900">${cat.title}</h3>
                  </div>
                  <span class="text-xs font-semibold text-slate-500">${cat.tools.length} Werkzeuge</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  ${cat.tools.map(tool => `
                    <div onclick="window.openTool('${tool.id}')" class="p-5 rounded-3xl border border-slate-200 bg-white hover:border-sky-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group">
                      <div>
                        <div class="flex items-center justify-between mb-3">
                          <span class="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            ${tool.icon}
                          </span>
                          <span class="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                            ${tool.badge}
                          </span>
                        </div>
                        <h4 class="font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors text-base leading-snug">
                          ${tool.title}
                        </h4>
                        <p class="text-xs text-slate-500 mt-2 leading-relaxed">
                          ${tool.desc}
                        </p>
                      </div>
                      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                        <span>Werkzeug öffnen</span>
                        <span class="text-sm">→</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bottom CTA -->
          <div class="text-center pt-4 border-t border-slate-200">
            <button onclick="window.showAllTools()" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-all cursor-pointer">
              Möchtest du alle 15 Werkzeuge untereinander scrollen? Hier klicken ↓
            </button>
          </div>
        </div>
      `;
    }

    // Component event listeners and updaters
    const slider = document.getElementById('tog-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        state.togTemp = parseInt(e.target.value, 10);
        const disp = document.getElementById('tog-temp-display');
        if (disp) disp.textContent = `${state.togTemp}°C`;
        updateTogRecommendation();
      });
    }

    updateTogRecommendation();
    updateLiveWakeTimerDisplay();
    updateTriageWizardDisplay();
    updateMedDosageDisplay();
    updateTimelineListDisplay();
    updateMilestoneJumpDisplay();
    updateWhoGrowthResultsDisplay();
    updateBeikostGridDisplay();
    updateStoolRecommendation();
    updateTeethRecommendation();
    renderSyncQrCanvas();
  }
function filterToolsCategory(cat) {
    state.activeToolCategory = cat;
    renderTools();
  }

  // Tool 1: Live Wachfenster Timer
  function setWakeTimerAge(ageId) {
    state.wakeAge = ageId;
    state.wakeTargetMinutes = getTargetWakeMinutes(ageId);
    renderTools();
  }

  function setWakeTimeNow() {
    logBabyWokeUp(0);
    renderTools();
  }

  function setWakeTimeAgo(minutes) {
    logBabyWokeUp(minutes);
    renderTools();
  }

  function resetWakeTimer() {
    state.wakeStartTime = 0;
    state.lastWakeTime = 0;
    state.isSleeping = false;
    state.currentSleepStart = 0;
    state.lastNapDuration = 0;
    localStorage.removeItem('babyguide_wake_start');
    localStorage.removeItem('babyguide_last_wake_time');
    localStorage.removeItem('babyguide_is_sleeping');
    localStorage.removeItem('babyguide_current_sleep_start');
    localStorage.removeItem('babyguide_last_nap_duration');
    const data = getTodayQuickLogs();
    data.currentSleep = null;
    data.lastWakeTime = null;
    saveTodayQuickLogs(data);
    renderTools();
    renderQuickLogCard();
  }

  function updateLiveWakeTimerDisplay() {
    const el = document.getElementById('live-wake-timer-display');
    if (!el) return;

    // A) Wenn Baby schläft (Schlafphase aktiv)
    if (state.isSleeping && state.currentSleepStart > 0) {
      const now = Date.now();
      const elapsedMs = Math.max(0, now - state.currentSleepStart);
      const elapsedMinutes = Math.floor(elapsedMs / 60000);
      const elapsedSeconds = Math.floor((elapsedMs % 60000) / 1000);
      const startTimeStr = new Date(state.currentSleepStart).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
      const cyclePercent = Math.min(100, Math.round((elapsedMinutes / 45) * 100));

      el.innerHTML = `
        <div class="p-6 rounded-2xl border border-indigo-300 dark:border-indigo-800 bg-indigo-50/70 dark:bg-indigo-950/40 transition-all space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md bg-indigo-600 text-white shadow-sm self-start flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              💤 BABY SCHLÄFT GERADE
            </span>
            <div class="flex items-center gap-2">
              <button onclick="window.cancelCurrentSleep()" class="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold transition-all cursor-pointer">
                ↩️ Abbrechen
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Eingeschlafen um:</span>
              <strong class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">${startTimeStr} Uhr</strong>
            </div>
            <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Schlafdauer:</span>
              <strong class="text-lg sm:text-xl font-black text-indigo-600 dark:text-indigo-400">${elapsedMinutes}m ${elapsedSeconds}s</strong>
            </div>
            <div class="col-span-2 sm:col-span-1 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Schlafzyklus:</span>
              <strong class="text-lg sm:text-xl font-black text-slate-900 dark:text-white">${elapsedMinutes < 45 ? `${45 - elapsedMinutes}m bis Zyklusende` : `${Math.floor(elapsedMinutes / 45)} Zyklus/Zyklen`}</strong>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between text-[11px] font-bold text-indigo-700 dark:text-indigo-300 mb-1">
              <span>Säuglings-Schlafzyklus (ca. 45 Min)</span>
              <span>${cyclePercent}%</span>
            </div>
            <div class="w-full bg-indigo-200 dark:bg-indigo-950 rounded-full h-3 overflow-hidden">
              <div class="bg-indigo-600 h-full transition-all duration-300" style="width: ${cyclePercent}%"></div>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed m-0">
            <strong>Schlafphysiologie:</strong> ${
              elapsedMinutes < 30 ? 'Leichtschlafphase. Wenn das Baby vor 30 Min aufwacht, war es ein Kurzschläfchen und wird schneller wieder müde.' :
              elapsedMinutes < 60 ? '1 voller Schlafzyklus erreicht – sehr erholsam für Nervensystem und Gehirnreifung!' :
              'Tiefes, langes Nickerchen. Tagsüber nach 2,5 bis 3 Std sanft wecken, um den Nachtschlaf zu schützen.'
            }
          </p>

          <div class="pt-2 border-t border-indigo-200 dark:border-indigo-800/80 flex flex-wrap items-center gap-2">
            <button onclick="window.logBabyWokeUp(0)" class="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer">
              ☀️ Baby ist JETZT aufgewacht!
            </button>
            <button onclick="window.logBabyWokeUp(5)" class="px-3 py-2 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 cursor-pointer">
              Vor 5 Min
            </button>
            <button onclick="window.logBabyWokeUp(15)" class="px-3 py-2 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 cursor-pointer">
              Vor 15 Min
            </button>
            <button onclick="window.logBabyWokeUp(30)" class="px-3 py-2 bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-amber-50 dark:hover:bg-slate-700 cursor-pointer">
              Vor 30 Min
            </button>
          </div>
        </div>
      `;
      return;
    }

    // B) Wenn Baby wach ist (Wachfenster läuft)
    const wakeTs = state.lastWakeTime || state.wakeStartTime;
    if (!wakeTs) return;

    const elapsedMs = Math.max(0, Date.now() - wakeTs);
    const elapsedMinutes = Math.floor(elapsedMs / 60000);
    const elapsedSeconds = Math.floor((elapsedMs % 60000) / 1000);
    let targetMinutes = getTargetWakeMinutes(state.wakeAge);
    
    // Einfluss der Schlafdauer des letzten Schläfchens in den Countdown einbeziehen:
    let napAdjustmentInfo = '';
    if (state.lastNapDuration > 0 && state.lastNapDuration < 30) {
      const reduction = Math.min(25, Math.max(10, Math.round(targetMinutes * 0.2)));
      targetMinutes = Math.max(30, targetMinutes - reduction);
      napAdjustmentInfo = `⚡ Wachfenster um ${reduction} Min verkürzt (${targetMinutes} Min), da das letzte Schläfchen nur ${state.lastNapDuration} Min dauerte!`;
    } else if (state.lastNapDuration >= 90) {
      const extension = Math.min(15, Math.round(targetMinutes * 0.1));
      targetMinutes = targetMinutes + extension;
      napAdjustmentInfo = `✨ Ausgeruht (+${extension} Min Wachfenster = ${targetMinutes} Min) nach langem Schläfchen (${state.lastNapDuration} Min).`;
    }

    const remainingMinutes = targetMinutes - elapsedMinutes;
    const ratio = Math.min(1.5, elapsedMinutes / targetMinutes);

    let phaseBadge = '';
    let phaseTitle = '';
    let phaseDesc = '';
    let barColor = 'bg-emerald-500';
    let boxBorder = 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30';

    if (ratio < 0.70) {
      phaseBadge = '🟢 ENTSPANNTES WACHFENSTER';
      phaseTitle = 'Wach & Aktiv';
      phaseDesc = napAdjustmentInfo ? `${napAdjustmentInfo} Baby hat noch Energie. Ideale Zeit für Bauchlage (Tummy Time), Singen & Spielen.` : 'Dein Baby hat noch Energie. Ideale Zeit für Bauchlage (Tummy Time), Singen, Wickeln und Spielen.';
      barColor = 'bg-emerald-500';
      boxBorder = 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30';
    } else if (ratio < 0.95) {
      phaseBadge = '🟡 SWEET-SPOT-FENSTER (JETZT IN DEN SCHLAF BEGLEITEN)';
      phaseTitle = 'Optimale Müdigkeit erreicht';
      phaseDesc = napAdjustmentInfo ? `${napAdjustmentInfo} Achte jetzt auf Müdigkeitsanzeichen (Gähnen, Augenreiben). Reize senken!` : 'Achte jetzt auf Müdigkeitsanzeichen (Gähnen, Augenreiben, Blick abwenden). Reize senken, Schlafsack anziehen!';
      barColor = 'bg-amber-500';
      boxBorder = 'border-amber-300 dark:border-amber-700 bg-amber-50/70 dark:bg-amber-950/30 ring-2 ring-amber-400';
    } else {
      phaseBadge = '🔴 ÜBERMÜDUNGS-ALARM!';
      phaseTitle = 'Cortisol-Ausschüttung droht';
      phaseDesc = 'Das Baby ist übermüdet. Einschlafen fällt jetzt schwer. Sofort Raum abdunkeln, auf den Arm nehmen, weißes/braunes Rauschen starten!';
      barColor = 'bg-rose-500';
      boxBorder = 'border-rose-300 dark:border-rose-700 bg-rose-50/70 dark:bg-rose-950/30 ring-2 ring-rose-400';
    }

    el.innerHTML = `
      <div class="p-6 rounded-2xl border ${boxBorder} transition-all space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700 self-start">
              ${phaseBadge}
            </span>
            ${state.lastNapDuration ? `<span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800">Letztes Schläfchen: ${state.lastNapDuration} Min</span>` : ''}
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.resetWakeTimer()" class="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all cursor-pointer">
              🔄 Zurücksetzen
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
          <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Wach seit:</span>
            <strong class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${elapsedMinutes}m ${elapsedSeconds}s</strong>
          </div>
          <div class="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Ziel-Wachfenster:</span>
            <strong class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${targetMinutes} Min</strong>
          </div>
          <div class="col-span-2 sm:col-span-1 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase block">Bis zum Sweet Spot:</span>
            <strong class="text-xl sm:text-2xl font-black ${remainingMinutes <= 0 ? 'text-rose-600 dark:text-rose-400' : 'text-amber-600 dark:text-amber-400'}">
              ${remainingMinutes > 0 ? `Noch ${remainingMinutes} Min` : `+${Math.abs(remainingMinutes)} Min überfällig`}
            </strong>
          </div>
        </div>

        <!-- Progress bar -->
        <div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
            <div class="${barColor} h-full transition-all duration-300" style="width: ${Math.min(100, Math.round(ratio * 100))}%"></div>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed m-0">
          <strong>${phaseTitle}:</strong> ${phaseDesc}
        </p>

        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2">
          <button onclick="window.logBabyPutToBed(0)" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer">
            😴 Baby JETZT schlafen gelegt
          </button>
          <button onclick="window.logBabyPutToBed(15)" class="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
            Vor 15 Min
          </button>
          <button onclick="window.logBabyPutToBed(30)" class="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
            Vor 30 Min
          </button>
          <button onclick="window.logBabyWokeUp(0)" class="ml-auto px-3 py-2 text-amber-600 dark:text-amber-400 hover:underline text-xs font-bold transition-all cursor-pointer">
            ☀️ Aufwachzeit korrigieren
          </button>
        </div>
      </div>
    `;
  }

  // Tool 2 & 5: Sound Engine Handlers
  function toggleAmbientSound(type) {
    if (!type || state.activeSound === type) {
      stopAllAmbientSounds();
    } else if (type === 'brown') {
      startBrownNoise();
    } else if (type === 'white') {
      startWhiteNoise();
    } else if (type === 'pink') {
      startPinkNoise();
    } else if (type === 'heartbeat') {
      startHeartbeat();
    } else if (type === 'shush') {
      startShushing();
    }
    renderTools();
  }

  function setAmbientVolume(vol) {
    state.soundVolume = parseFloat(vol);
    if (activeAudioState.gain && globalAudioCtx) {
      activeAudioState.gain.gain.setValueAtTime(state.soundVolume, globalAudioCtx.currentTime);
    }
    const el = document.getElementById('sound-vol-display');
    if (el) el.textContent = `${Math.round(state.soundVolume * 100)}%`;
  }

  function setAmbientTimer(min) {
    state.soundTimerMin = min;
    if (state.soundTimerInterval) {
      clearTimeout(state.soundTimerInterval);
      state.soundTimerInterval = null;
    }
    if (min > 0) {
      state.soundTimerInterval = setTimeout(() => {
        stopAllAmbientSounds();
        renderTools();
      }, min * 60 * 1000);
    }
    renderTools();
  }

  // Tool 6: Medication Calculator
  function setMedType(type) {
    state.medType = type;
    renderTools();
  }

  function setMedWeight(val) {
    state.medWeight = parseFloat(val);
    renderTools();
  }

  function recordMedDoseNow() {
    state.lastMedDose = {
      type: state.medType,
      time: Date.now(),
      weight: state.medWeight
    };
    localStorage.setItem('babyguide_last_med_dose', JSON.stringify(state.lastMedDose));
    renderTools();
  }

  function clearMedDoseRecord() {
    state.lastMedDose = null;
    localStorage.removeItem('babyguide_last_med_dose');
    renderTools();
  }

  function updateMedDosageDisplay() {
    const box = document.getElementById('med-dosage-box');
    if (!box) return;

    const w = state.medWeight;
    const isIbu = state.medType === 'ibuprofen';

    let singleDoseMg = '';
    let syrup2Percent = '';
    let syrup4Percent = '';
    let suppository = '';
    let intervalHours = 0;
    let maxDose24h = '';

    if (isIbu) {
      intervalHours = 6; // 6 to 8 hours
      const minMg = Math.round(w * 7);
      const maxMg = Math.round(w * 10);
      singleDoseMg = `${minMg} bis ${maxMg} mg`;
      // 2% = 20 mg/ml
      syrup2Percent = `${(minMg / 20).toFixed(1)} bis ${(maxMg / 20).toFixed(1)} ml`;
      // 4% = 40 mg/ml
      syrup4Percent = `${(minMg / 40).toFixed(1)} bis ${(maxMg / 40).toFixed(1)} ml`;
      suppository = w < 8 ? '60 mg Zäpfchen' : '125 mg Zäpfchen';
      maxDose24h = `${Math.round(w * 30)} mg (max. 3x tgl.)`;
    } else {
      intervalHours = 6;
      const minMg = Math.round(w * 10);
      const maxMg = Math.round(w * 15);
      singleDoseMg = `${minMg} bis ${maxMg} mg`;
      // 40 mg/ml (Ben-u-ron Saft)
      syrup4Percent = `${(minMg / 40).toFixed(1)} bis ${(maxMg / 40).toFixed(1)} ml`;
      syrup2Percent = `${(minMg / 20).toFixed(1)} bis ${(maxMg / 20).toFixed(1)} ml`;
      suppository = w < 7 ? '75 mg Zäpfchen' : (w < 12 ? '125 mg Zäpfchen' : '250 mg Zäpfchen');
      maxDose24h = `${Math.round(w * 60)} mg (max. 4x tgl.)`;
    }

    let doseHistoryHtml = '';
    if (state.lastMedDose) {
      const elapsedHours = ((Date.now() - state.lastMedDose.time) / 3600000);
      const allowedNextDate = new Date(state.lastMedDose.time + (intervalHours * 3600000));
      const hoursLeft = Math.max(0, intervalHours - elapsedHours).toFixed(1);

      doseHistoryHtml = `
        <div class="mt-4 p-3 bg-white rounded-xl border border-blue-200 text-xs">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-700">Letzte Gabe dokumentiert:</span>
            <button onclick="window.clearMedDoseRecord()" class="text-[10px] text-rose-600 hover:underline">Löschen</button>
          </div>
          <div class="text-slate-900 font-extrabold mt-1">
            ${new Date(state.lastMedDose.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} Uhr (${state.lastMedDose.type})
          </div>
          <div class="mt-2 text-xs font-bold ${elapsedHours >= intervalHours ? 'text-emerald-700' : 'text-amber-800'}">
            ${elapsedHours >= intervalHours ? '✓ Mindestabstand erreicht – Nächste Gabe bei Bedarf möglich.' : `⏳ Mindestabstand läuft noch: Nächste Dosis frühestens um ${allowedNextDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} Uhr (in ca. ${hoursLeft} Std.).`}
          </div>
        </div>
      `;
    }

    box.innerHTML = `
      <div class="flex items-center justify-between border-b border-blue-200 pb-3">
        <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">${isIbu ? 'Ibuprofen' : 'Paracetamol'} Dosierung</span>
        <span class="text-xs font-black text-blue-800 bg-white px-2.5 py-1 rounded-md border border-blue-200">Gewicht: ${w.toFixed(1)} kg</span>
      </div>

      <div class="space-y-2 text-xs sm:text-sm text-slate-800">
        <div class="bg-white p-3 rounded-xl border border-blue-100 flex justify-between items-center">
          <span class="font-semibold text-slate-600">Empfohlene Einzeldosis:</span>
          <strong class="text-base text-blue-900">${singleDoseMg}</strong>
        </div>

        <div class="bg-white p-3 rounded-xl border border-blue-100 flex justify-between items-center">
          <span class="font-semibold text-slate-600">Fiebersaft (2% / 20 mg/ml):</span>
          <strong class="text-base text-blue-900">${syrup2Percent}</strong>
        </div>

        <div class="bg-white p-3 rounded-xl border border-blue-100 flex justify-between items-center">
          <span class="font-semibold text-slate-600">Fiebersaft (4% / 40 mg/ml):</span>
          <strong class="text-base text-blue-900">${syrup4Percent}</strong>
        </div>

        <div class="bg-white p-3 rounded-xl border border-blue-100 flex justify-between items-center">
          <span class="font-semibold text-slate-600">Passendes Zäpfchen:</span>
          <strong class="text-base text-blue-900">${suppository}</strong>
        </div>

        <div class="flex justify-between items-center text-xs text-slate-600 pt-1">
          <span>Mindestabstand: <strong>mind. ${intervalHours} Stunden</strong></span>
          <span>Max. 24h: <strong>${maxDose24h}</strong></span>
        </div>
      </div>

      <button onclick="window.recordMedDoseNow()" class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-xl shadow-sm transition-all cursor-pointer">
        ⏱️ Dosis JETZT gegeben – Timer starten
      </button>

      ${doseHistoryHtml}
    `;
  }

  // Tool 7: Mein Baby-Fahrplan (U & Impftermine)
  function updateBabyBirthDate(dateStr) {
    if (!dateStr) return;
    state.babyBirthDate = dateStr;
    localStorage.setItem('babyguide_birthdate', dateStr);
    renderTools();
  }

  function toggleApptDone(apptId) {
    if (state.completedAppts.has(apptId)) {
      state.completedAppts.delete(apptId);
    } else {
      state.completedAppts.add(apptId);
    }
    localStorage.setItem('babyguide_completed_appts', JSON.stringify([...state.completedAppts]));
    renderTools();
  }

  function updateTimelineListDisplay() {
    const container = document.getElementById('timeline-list-container');
    if (!container) return;

    const bDate = new Date(state.babyBirthDate);
    const now = new Date();

    container.innerHTML = VACCINE_TIMELINE_TEMPLATE.map(item => {
      const targetDate = new Date(bDate.getTime() + (item.offsetDays * 86400000));
      const isDone = state.completedAppts.has(item.id);
      const diffDays = Math.round((targetDate - now) / 86400000);
      const isDueNow = diffDays >= -14 && diffDays <= 14;

      let statusBadge = '';
      if (isDone) {
        statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">✓ Erledigt</span>';
      } else if (isDueNow) {
        statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-black animate-pulse">🟡 JETZT FÄLLIG</span>';
      } else if (diffDays < -14) {
        statusBadge = '<span class="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">Vergangen</span>';
      } else {
        statusBadge = `<span class="px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold">Fällig in ${diffDays} Tagen</span>`;
      }

      return `
        <div class="p-3.5 bg-slate-50 rounded-2xl border ${isDone ? 'border-slate-200 opacity-70' : (isDueNow ? 'border-amber-400 bg-amber-50/50' : 'border-slate-200')} flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all">
          <div class="flex items-start gap-3">
            <input type="checkbox" ${isDone ? 'checked' : ''} onchange="window.toggleApptDone('${item.id}')" class="mt-1 w-5 h-5 rounded-lg text-emerald-600 accent-emerald-600 cursor-pointer">
            <div>
              <div class="flex items-center gap-2">
                <h5 class="font-extrabold text-slate-900 text-sm ${isDone ? 'line-through' : ''}">${item.title}</h5>
                ${statusBadge}
              </div>
              <p class="text-xs text-slate-500 mt-0.5">${item.desc}</p>
            </div>
          </div>
          <div class="text-right flex-shrink-0 self-end sm:self-center">
            <div class="font-bold text-slate-800 text-xs">${targetDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
            <div class="text-[10px] text-slate-500">Ort: ${item.doctor}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Tool 8: 3 AM Symptom Checker
  function answerTriageQuestion(nextStep, resultId) {
    if (resultId) {
      state.triageResultId = resultId;
    } else if (nextStep) {
      state.triageCurrentStep = nextStep;
      state.triageResultId = null;
    }
    renderTools();
  }

  function resetTriage() {
    state.triageCurrentStep = 'q1';
    state.triageResultId = null;
    renderTools();
  }

  function updateTriageWizardDisplay() {
    const container = document.getElementById('triage-wizard-container');
    if (!container) return;

    if (state.triageResultId) {
      const res = TRIAGE_RESULTS_DATA[state.triageResultId];
      const isRed = res.level === 'red';
      const isYellow = res.level === 'yellow';

      container.innerHTML = `
        <div class="p-6 rounded-2xl border-2 ${isRed ? 'border-rose-400 bg-rose-50/80' : (isYellow ? 'border-amber-400 bg-amber-50/80' : 'border-emerald-400 bg-emerald-50/80')} space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md ${isRed ? 'bg-rose-600 text-white' : (isYellow ? 'bg-amber-500 text-white' : 'bg-emerald-600 text-white')} shadow-sm">
              ${res.badge}
            </span>
            <button onclick="window.resetTriage()" class="px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100">
              🔄 Neu starten
            </button>
          </div>

          <h5 class="text-xl font-black text-slate-900">${res.title}</h5>
          <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">${res.message}</p>

          <div class="pt-2 flex flex-wrap gap-2">
            ${isRed ? `
              <a href="tel:112" class="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2">
                <span>📞 SOFORT NOTRUF 112 WÄHLEN</span>
              </a>
            ` : ''}
            ${isYellow ? `
              <a href="tel:116117" class="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2">
                <span>📞 Ärztlicher Bereitschaftsdienst 116 117</span>
              </a>
            ` : ''}
          </div>
        </div>
      `;
      return;
    }

    const currQ = TRIAGE_QUESTIONS_DATA.find(q => q.id === state.triageCurrentStep) || TRIAGE_QUESTIONS_DATA[0];
    container.innerHTML = `
      <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
        <h5 class="text-base sm:text-lg font-bold text-slate-900">${currQ.question}</h5>
        <div class="space-y-2">
          ${currQ.options.map(opt => `
            <button onclick="window.answerTriageQuestion('${opt.next || ''}', '${opt.result || ''}')" class="w-full text-left p-3.5 bg-white hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-all font-semibold text-xs sm:text-sm text-slate-800 flex items-center justify-between cursor-pointer">
              <span>${opt.label}</span>
              <span class="text-sky-600 font-bold ml-2">→</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Tool 9: Milestone Leaps
  function selectJump(jumpNum) {
    state.selectedJumpId = jumpNum;
    renderTools();
  }

  function updateMilestoneJumpDisplay() {
    const card = document.getElementById('jump-details-card');
    if (!card) return;

    const j = MILESTONE_JUMPS_DATA.find(item => item.jump === state.selectedJumpId) || MILESTONE_JUMPS_DATA[3];

    card.innerHTML = `
      <div class="bg-gradient-to-br from-sky-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-sky-200 dark:border-slate-800 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-100 dark:border-slate-800 pb-3">
          <div>
            <span class="text-xs font-black uppercase text-sky-700 dark:text-sky-300">Entwicklungssprung #${j.jump} • Um die ${j.week}. Woche</span>
            <h5 class="text-xl font-black text-slate-900 dark:text-white mt-0.5">${j.name}</h5>
          </div>
          <span class="text-xs font-bold px-3 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-transparent dark:border-amber-800 rounded-lg self-start sm:self-auto">
            ⛈️ Gewitterphase: ${j.stormDays}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <strong class="text-slate-900 dark:text-white font-bold block mb-1">😭 Typische Anzeichen der Unruhe:</strong>
            <p class="text-slate-700 dark:text-slate-300 m-0">${j.signs}</p>
          </div>
          <div class="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700/80">
            <strong class="text-slate-900 dark:text-white font-bold block mb-1">☀️ Neu erlernte Fähigkeiten:</strong>
            <p class="text-slate-700 dark:text-slate-300 m-0">${j.skills}</p>
          </div>
        </div>

        <div class="p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-sky-100 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-200">
          <strong class="text-sky-900 dark:text-sky-300">💡 Wie du dein Baby jetzt unterstützt:</strong> ${j.tips}
        </div>
      </div>
    `;
  }

  // Tool 11: WHO Growth Percentile
  function updateGrowthField(field, val) {
    state[field] = val;
    renderTools();
  }

  function updateWhoGrowthResultsDisplay() {
    const container = document.getElementById('who-growth-results-container');
    if (!container) return;

    const gData = WHO_GROWTH_DATA[state.growthGender];
    const m = state.growthMonth;

    const wItem = gData.weight.find(item => item.m === m) || gData.weight[3];
    const lItem = gData.length.find(item => item.m === m) || gData.length[3];
    const hItem = gData.head.find(item => item.m <= m) || gData.head[0];

    const weightP = calcWhoPercentile(state.growthWeight, [wItem.p3, wItem.p15, wItem.p50, wItem.p85, wItem.p97]);
    const lengthP = calcWhoPercentile(state.growthLength, [lItem.p3, lItem.p15, lItem.p50, lItem.p85, lItem.p97]);
    const headP = calcWhoPercentile(state.growthHead, [hItem.p3, hItem.p15, hItem.p50, hItem.p85, hItem.p97]);

    container.innerHTML = `
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h5 class="text-sm font-black uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
          WHO-Perzentilen-Ergebnis (Monat ${m}, ${state.growthGender === 'boys' ? 'Junge' : 'Mädchen'}):
        </h5>

        <!-- Weight Metric -->
        <div class="space-y-1.5">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">Körpergewicht: <strong>${state.growthWeight.toFixed(1)} kg</strong></span>
            <span class="font-extrabold text-emerald-700">Perzentile P${weightP}</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
            <div class="bg-emerald-500 h-full" style="width: ${weightP}%"></div>
          </div>
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>P3: ${wItem.p3} kg</span>
            <span>P50: ${wItem.p50} kg</span>
            <span>P97: ${wItem.p97} kg</span>
          </div>
        </div>

        <!-- Length Metric -->
        <div class="space-y-1.5">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">Körperlänge: <strong>${state.growthLength.toFixed(1)} cm</strong></span>
            <span class="font-extrabold text-sky-700">Perzentile P${lengthP}</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
            <div class="bg-sky-500 h-full" style="width: ${lengthP}%"></div>
          </div>
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>P3: ${lItem.p3} cm</span>
            <span>P50: ${lItem.p50} cm</span>
            <span>P97: ${lItem.p97} cm</span>
          </div>
        </div>

        <!-- Head Circumference Metric -->
        <div class="space-y-1.5">
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold text-slate-800">Kopfumfang: <strong>${state.growthHead.toFixed(1)} cm</strong></span>
            <span class="font-extrabold text-indigo-700">Perzentile P${headP}</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
            <div class="bg-indigo-500 h-full" style="width: ${headP}%"></div>
          </div>
          <div class="flex justify-between text-[10px] text-slate-400">
            <span>P3: ${hItem.p3} cm</span>
            <span>P50: ${hItem.p50} cm</span>
            <span>P97: ${hItem.p97} cm</span>
          </div>
        </div>

        <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
          <strong>🩺 Ärztliche Einordnung:</strong>
          Alle Werte zwischen der 3. und 97. Perzentile gelten als normal und gesund. Ein Baby auf P20 ist nicht „zu leicht“ und eines auf P80 nicht „zu schwer“. Entscheidend ist einzig, dass das Kind langfristig stabil auf seiner eigenen Perzentile wächst und keine extremen Kurvenknicke zeigt!
        </div>
      </div>
    `;
  }

  // Tool 12: Beikost Tracker
  function filterBeikostCategory(cat) {
    state.beikostCategory = cat;
    renderTools();
  }

  function cycleBeikostStatus(foodId) {
    const curr = state.beikostStatus[foodId] || { status: 'untried', note: '' };
    const order = ['untried', 'day1', 'day2', 'safe', 'reaction'];
    const nextIdx = (order.indexOf(curr.status) + 1) % order.length;
    curr.status = order[nextIdx];
    curr.date = new Date().toISOString();
    state.beikostStatus[foodId] = curr;
    localStorage.setItem('babyguide_beikost_status', JSON.stringify(state.beikostStatus));
    renderTools();
  }

  function updateBeikostNote(foodId, note) {
    if (!state.beikostStatus[foodId]) {
      state.beikostStatus[foodId] = { status: 'untried', note: '' };
    }
    state.beikostStatus[foodId].note = note;
    localStorage.setItem('babyguide_beikost_status', JSON.stringify(state.beikostStatus));
  }

  function addCustomBeikostFood() {
    const name = prompt("Name des Lebensmittels (z.B. Brokkoli, Avocado):");
    if (!name) return;
    const isAllergen = confirm("Handelt es sich um ein häufiges Allergen (z.B. Nüsse, Fisch, Soja)?");
    const id = 'custom_' + Date.now();
    BEIKOST_FOODS_DATA.push({
      id,
      name,
      cat: isAllergen ? 'Allergen' : 'Gemüse',
      allergen: isAllergen,
      intro: 'Individuell hinzugefügt'
    });
    renderTools();
  }

  function updateBeikostGridDisplay() {
    const grid = document.getElementById('beikost-foods-grid');
    if (!grid) return;

    const filtered = BEIKOST_FOODS_DATA.filter(f => {
      if (state.beikostCategory === 'all') return true;
      return f.cat === state.beikostCategory;
    });

    grid.innerHTML = filtered.map(item => {
      const data = state.beikostStatus[item.id] || { status: 'untried', note: '' };
      let badgeHtml = '';
      if (data.status === 'untried') badgeHtml = '<span class="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">⚪ Noch nicht probiert</span>';
      else if (data.status === 'day1') badgeHtml = '<span class="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-black">🟡 Tag 1 probiert</span>';
      else if (data.status === 'day2') badgeHtml = '<span class="text-[10px] bg-amber-200 text-amber-950 px-2 py-0.5 rounded font-black">🟡 Tag 2 probiert</span>';
      else if (data.status === 'safe') badgeHtml = '<span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black">🟢 3 Tage vertragen ✓</span>';
      else if (data.status === 'reaction') badgeHtml = '<span class="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded font-black">🔴 Reaktion gemeldet ⚠️</span>';

      return `
        <div class="p-3.5 bg-white rounded-2xl border ${data.status === 'reaction' ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'} shadow-sm space-y-2">
          <div class="flex items-center justify-between">
            <h5 class="font-bold text-slate-900 text-sm">${item.name}</h5>
            ${item.allergen ? '<span class="text-[9px] uppercase font-black px-1.5 py-0.5 bg-rose-100 text-rose-800 rounded">Allergen</span>' : ''}
          </div>
          <p class="text-[11px] text-slate-500 m-0">${item.intro}</p>
          <div class="pt-1 flex items-center justify-between gap-2">
            ${badgeHtml}
            <button onclick="window.cycleBeikostStatus('${item.id}')" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[11px] font-bold text-slate-700">
              Status ändern ➔
            </button>
          </div>
          <input type="text" placeholder="Notiz (z.B. gut vertragen)..." value="${data.note || ''}" onchange="window.updateBeikostNote('${item.id}', this.value)" class="w-full px-2 py-1 text-[11px] rounded-lg border border-slate-200 bg-slate-50">
        </div>
      `;
    }).join('');
  }

  // Tool 15: Family Sync
  function generateSyncCode() {
    const payload = {
      babyName: state.babysitterData.babyName,
      birthDate: state.babyBirthDate,
      address: state.babysitterData.address,
      parentPhone: state.babysitterData.parentPhone,
      pediatrician: state.babysitterData.pediatrician,
      allergies: state.babysitterData.allergies,
      beikost: state.beikostStatus,
      completedAppts: [...state.completedAppts],
      completedLessons: [...state.completedLessons]
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  }

  function copySyncCode() {
    const code = generateSyncCode();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        alert("Sync-Code in die Zwischenablage kopiert! Sende ihn per WhatsApp, Signal oder E-Mail an deinen Partner.");
      });
    } else {
      prompt("Kopiere diesen Sync-Code für deinen Partner:", code);
    }
  }

  function importSyncCode(codeStr) {
    const fb = document.getElementById('sync-import-feedback');
    try {
      const jsonStr = decodeURIComponent(escape(atob(codeStr.trim())));
      const data = JSON.parse(jsonStr);

      if (data.babyName) state.babysitterData.babyName = data.babyName;
      if (data.birthDate) state.babyBirthDate = data.birthDate;
      if (data.address) state.babysitterData.address = data.address;
      if (data.parentPhone) state.babysitterData.parentPhone = data.parentPhone;
      if (data.pediatrician) state.babysitterData.pediatrician = data.pediatrician;
      if (data.allergies) state.babysitterData.allergies = data.allergies;
      if (data.beikost) state.beikostStatus = data.beikost;
      if (data.completedAppts) state.completedAppts = new Set(data.completedAppts);
      if (data.completedLessons) state.completedLessons = new Set(data.completedLessons);

      localStorage.setItem('babyguide_babysitter_data', JSON.stringify(state.babysitterData));
      localStorage.setItem('babyguide_birthdate', state.babyBirthDate);
      localStorage.setItem('babyguide_beikost_status', JSON.stringify(state.beikostStatus));
      localStorage.setItem('babyguide_completed_appts', JSON.stringify([...state.completedAppts]));
      localStorage.setItem('babyguide_completed_lessons', JSON.stringify([...state.completedLessons]));

      if (fb) {
        fb.textContent = "✓ Erfolgreich synchronisiert! Daten wurden aktualisiert.";
        fb.className = "text-xs font-bold text-emerald-600 text-center";
      }
      setTimeout(() => renderTools(), 1200);
    } catch(e) {
      if (fb) {
        fb.textContent = "Fehler: Ungültiger Sync-Code. Bitte prüfe den Text.";
        fb.className = "text-xs font-bold text-rose-600 text-center";
      }
    }
  }

  function renderSyncQrCanvas() {
    const canvas = document.getElementById('sync-qr-canvas');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);

    // Render decorative matrix grid
    const code = generateSyncCode();
    const hash = code.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const cellSize = 6;
    const cols = Math.floor(w / cellSize);
    const rows = Math.floor(h / cellSize);

    ctx.fillStyle = "#0f172a";
    // Finder patterns
    const drawFinder = (x, y) => {
      ctx.fillRect(x, y, 7*cellSize, 7*cellSize);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x+cellSize, y+cellSize, 5*cellSize, 5*cellSize);
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(x+2*cellSize, y+2*cellSize, 3*cellSize, 3*cellSize);
    };

    drawFinder(2*cellSize, 2*cellSize);
    drawFinder((cols-9)*cellSize, 2*cellSize);
    drawFinder(2*cellSize, (rows-9)*cellSize);

    // Random pseudo matrix seeded by data
    for (let r = 2; r < rows - 2; r++) {
      for (let c = 2; c < cols - 2; c++) {
        if ((r <= 9 && c <= 9) || (r <= 9 && c >= cols - 10) || (r >= rows - 10 && c <= 9)) continue;
        if (((r * 31 + c * 17 + hash) % 7) < 3) {
          ctx.fillRect(c * cellSize, r * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  // Preserved Tool Handlers
  function updateTogRecommendation() {
    const box = document.getElementById('tog-recommendation-box');
    if (!box) return;

    const temp = state.togTemp;
    let togValue = '';
    let clothes = '';
    let bgColor = '';
    let borderColor = '';
    let note = '';

    if (temp < 18) {
      togValue = '2.5 – 3.5 TOG (Warm/Gefüttert)';
      clothes = 'Langarmbody + Schlafanzug mit Füßchen + dicker Winterschlafsack';
      bgColor = 'bg-blue-50';
      borderColor = 'border-blue-200';
      note = 'Zimmer ist kühl. Achte darauf, dass das Baby warme Ärmel hat, aber niemals eine Decke zusätzlich verwenden.';
    } else if (temp <= 21) {
      togValue = '2.0 – 2.5 TOG (Ganzjahresschlafsack)';
      clothes = 'Kurzarm- oder Langarmbody + dünner Schlafanzug + Standard-Schlafsack';
      bgColor = 'bg-emerald-50';
      borderColor = 'border-emerald-200';
      note = '✨ Ideale Schlaftemperatur! Beste Schlafbedingungen zur SIDS-Prävention.';
    } else if (temp <= 24) {
      togValue = '1.0 TOG (Leichter Sommerschlafsack)';
      clothes = 'Kurzarmbody + leichter Schlafanzug (oder nur Body + Schlafsack)';
      bgColor = 'bg-amber-50';
      borderColor = 'border-amber-200';
      note = 'Sommerlich warm. Keine dicken Stoffe oder Mützen verwenden.';
    } else {
      togValue = '0.5 TOG (Hauchdünner Musselin-Schlafsack)';
      clothes = 'Nur Kurzarmbody (oder bei extremer Hitze nur eine Windel + 0.5 TOG Tuch)';
      bgColor = 'bg-rose-50';
      borderColor = 'border-rose-200';
      note = '⚠️ Achtung Überhitzungsgefahr! Fenster für Durchzug tagsüber abdunkeln, nachts gut lüften.';
    }

    box.className = `p-6 rounded-2xl border transition-all ${bgColor} ${borderColor}`;
    box.innerHTML = `
      <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Empfohlene Schlafausstattung</span>
      <h4 class="text-xl font-extrabold text-slate-900 mt-1">${togValue}</h4>
      <div class="mt-4">
        <span class="text-xs font-semibold text-slate-700 block">👕 Kleidungsschichten:</span>
        <p class="text-sm font-medium text-slate-800 mt-1">${clothes}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-200/60 text-xs text-slate-600">
        ${note}
      </div>
    `;
  }

  function updateStoolRecommendation() {
    const box = document.getElementById('stool-color-result');
    if (!box) return;
    const item = STOOL_COLOR_GUIDE.find(s => s.id === state.selectedStoolColor) || STOOL_COLOR_GUIDE[2];
    const isRedFlag = item.id.startsWith('red_flag');

    box.innerHTML = `
      <div class="p-5 sm:p-6 rounded-2xl border ${isRedFlag ? 'bg-rose-50 border-rose-300' : 'bg-slate-50 border-slate-200'}">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b ${isRedFlag ? 'border-rose-200' : 'border-slate-200'} pb-4 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full border-2 border-white shadow-sm flex-shrink-0" style="background-color: ${item.color};"></div>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900">${item.name}</h4>
              <span class="text-xs text-slate-500 font-medium">Typischer Zeitpunkt: ${item.timing}</span>
            </div>
          </div>
          <span class="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md ${item.urgencyBadge} self-start sm:self-auto">
            ${item.urgency}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-slate-900 font-bold block mb-1">👀 Typisches Aussehen & Konsistenz:</strong>
            <p class="text-slate-700 m-0">${item.description}</p>
          </div>
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <strong class="text-slate-900 font-bold block mb-1">🩺 Medizinische Bedeutung & To-Do:</strong>
            <p class="text-slate-700 m-0">${item.meaning}</p>
          </div>
        </div>

        ${isRedFlag ? `
          <div class="mt-4 p-3.5 bg-rose-600 text-white rounded-xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md shadow-rose-200">
            <div class="flex items-center gap-2">
              <span class="text-lg">🚨</span>
              <span><strong>ALARM-SIGNAL:</strong> Dies erfordert eine umgehende ärztliche Abklärung! Hebe die Windel auf oder fotografiere sie für den Kinderarzt / die Notaufnahme.</span>
            </div>
            <button onclick="window.toggleEmergencyModal(true)" class="px-3.5 py-1.5 bg-white text-rose-800 rounded-lg font-black hover:bg-rose-50 flex-shrink-0 cursor-pointer">
              Notfallkontakte →
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  function selectStoolColor(id) {
    state.selectedStoolColor = id;
    renderTools();
  }

  function updateTeethRecommendation() {
    const box = document.getElementById('teeth-group-result');
    if (!box) return;
    const group = TEETH_DATA.jawGroups.find(g => g.id === state.selectedTeethGroup) || TEETH_DATA.jawGroups[0];

    box.innerHTML = `
      <div class="p-5 rounded-2xl border border-blue-200 bg-blue-50/40">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200 pb-3 mb-3">
          <div>
            <span class="text-xs font-black uppercase tracking-wider text-blue-700">Reihenfolge #${group.order} • ${group.tag}</span>
            <h4 class="text-lg font-bold text-slate-900">${group.name}</h4>
          </div>
          <span class="text-xs font-extrabold px-3 py-1 bg-white text-blue-800 rounded-lg border border-blue-200 self-start sm:self-auto">
            📅 Durchschnittlicher Durchbruch: ${group.timing}
          </span>
        </div>
        <div class="text-xs sm:text-sm text-slate-700">
          <strong class="text-slate-900 font-semibold block mb-1">Typische Anzeichen & Symptome:</strong>
          <p class="m-0 leading-relaxed">${group.symptoms}</p>
        </div>
      </div>
    `;
  }

  function selectTeethGroup(id) {
    state.selectedTeethGroup = id;
    renderTools();
  }

  function updateBabysitterField(field, val) {
    state.babysitterData[field] = val;
    localStorage.setItem('babyguide_babysitter_data', JSON.stringify(state.babysitterData));
    renderTools();
  }

  function printBabysitterSheet() {
    window.print();
  }
  function renderQuiz() {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    const total = QUIZ_QUESTIONS.length;
    const answeredCount = Object.keys(state.quizAnswers).length;

    let html = `
      <div class="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">Wissensprüfung</span>
            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Das Große Eltern-Diplom</h2>
            <p class="text-slate-600 mt-1">10 essenzielle Fragen über lebenswichtige Regeln, sicheren Schlaf und Notfallwissen.</p>
          </div>
          <div class="text-right">
            <span class="text-sm font-semibold text-slate-700">${answeredCount} von ${total} beantwortet</span>
            <div class="w-36 bg-slate-100 rounded-full h-2.5 mt-1 overflow-hidden border border-slate-200">
              <div class="bg-sky-600 h-full transition-all duration-300" style="width: ${(answeredCount / total) * 100}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (state.quizSubmitted) {
      const passed = state.quizScore >= 8;
      html += `
        <div class="p-8 rounded-2xl border ${passed ? 'border-emerald-300 bg-emerald-50/70' : 'border-amber-300 bg-amber-50/70'} shadow-md text-center mb-8">
          <div class="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl mb-4 ${passed ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}">
            ${passed ? '🎓' : '⚠️'}
          </div>
          <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900">
            ${passed ? 'Herzlichen Glückwunsch! Du hast das Eltern-Diplom bestanden!' : 'Noch nicht ganz bestanden'}
          </h3>
          <p class="text-lg text-slate-700 mt-2 font-medium">
            Du hast <strong>${state.quizScore} von ${total} Fragen richtig</strong> beantwortet (${Math.round((state.quizScore / total) * 100)}%).
          </p>

          <div class="flex justify-center gap-4 mt-6">
            <button onclick="window.resetQuiz()" class="px-5 py-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-sm hover:bg-slate-50 transition-all">
              Quiz wiederholen
            </button>
            ${passed ? `
              <button onclick="window.print()" class="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-sm transition-all flex items-center gap-2">
                <span>🖨️ Diplom ausdrucken / als PDF speichern</span>
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    html += `<div class="space-y-6">`;
    QUIZ_QUESTIONS.forEach((q, qIdx) => {
      const userAnswer = state.quizAnswers[qIdx];
      const isAnswered = userAnswer !== undefined;
      const isCorrect = isAnswered && userAnswer === q.correct;

      html += `
        <div class="bg-white rounded-2xl border p-6 shadow-sm transition-all ${
          state.quizSubmitted 
            ? (isCorrect ? 'border-emerald-300 bg-emerald-50/20' : 'border-rose-300 bg-rose-50/20')
            : 'border-slate-200'
        }">
          <div class="flex items-start gap-3 mb-4">
            <span class="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              ${qIdx + 1}
            </span>
            <h4 class="font-bold text-slate-900 text-base md:text-lg">${q.question}</h4>
          </div>

          <div class="space-y-2.5 ml-10">
            ${q.options.map((opt, optIdx) => {
              let optStyle = 'border-slate-200 hover:border-sky-300 hover:bg-slate-50 text-slate-700';
              let checkIcon = '';

              if (state.quizSubmitted) {
                if (optIdx === q.correct) {
                  optStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 font-semibold';
                  checkIcon = '✓ ';
                } else if (userAnswer === optIdx && optIdx !== q.correct) {
                  optStyle = 'border-rose-500 bg-rose-100 text-rose-900 line-through';
                  checkIcon = '✕ ';
                } else {
                  optStyle = 'border-slate-200 opacity-60 text-slate-500';
                }
              } else if (userAnswer === optIdx) {
                optStyle = 'border-sky-600 bg-sky-50 text-sky-900 font-semibold ring-1 ring-sky-600';
              }

              return `
                <label class="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${optStyle}">
                  <input type="radio" name="quiz-q-${qIdx}" value="${optIdx}" 
                    ${userAnswer === optIdx ? 'checked' : ''} 
                    ${state.quizSubmitted ? 'disabled' : ''}
                    onchange="window.selectQuizAnswer(${qIdx}, ${optIdx})"
                    class="w-4 h-4 text-sky-600 accent-sky-600">
                  <span class="text-sm leading-relaxed">${checkIcon}${opt}</span>
                </label>
              `;
            }).join('')}
          </div>

          ${state.quizSubmitted ? `
            <div class="mt-4 ml-10 p-3.5 rounded-xl text-xs md:text-sm ${isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'} leading-relaxed">
              <strong>Erklärung:</strong> ${q.explanation}
            </div>
          ` : ''}
        </div>
      `;
    });
    html += `</div>`;

    if (!state.quizSubmitted) {
      html += `
        <div class="mt-8 text-center">
          <button onclick="window.submitQuiz()" 
            class="px-8 py-3.5 rounded-xl font-bold text-white transition-all shadow-md ${answeredCount === total ? 'bg-sky-600 hover:bg-sky-700 cursor-pointer' : 'bg-slate-400 cursor-not-allowed'}">
            Ergebnis auswerten (${answeredCount}/${total})
          </button>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  function renderChecklists() {
    const container = document.getElementById('checklists-container');
    if (!container) return;

    const totalItems = Object.values(CHECKLISTS).flat().length;
    const checkedCount = state.checkedChecklistItems.size;

    let html = `
      <div class="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Interaktive Vorbereitungs-Checklisten</h2>
          <p class="text-slate-600 mt-1">Hak alles ab, was du bereits organisiert hast. Der Fortschritt wird automatisch auf deinem Gerät gespeichert.</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="text-right">
            <span class="text-sm font-semibold text-slate-800">${checkedCount} von ${totalItems} erledigt</span>
            <div class="w-32 bg-slate-100 rounded-full h-2.5 mt-1 overflow-hidden border border-slate-200">
              <div class="bg-emerald-500 h-full transition-all duration-300" style="width: ${(checkedCount / totalItems) * 100}%"></div>
            </div>
          </div>
          <button onclick="window.resetChecklists()" class="text-xs text-rose-600 hover:text-rose-800 font-semibold px-2 py-1 rounded hover:bg-rose-50 border border-rose-200">
            Zurücksetzen
          </button>
        </div>
      </div>
    `;

    const sections = [
      { key: 'erstausstattung', title: '👶 Baby-Erstausstattung (Kleidung, Schlaf, Unterwegs)', icon: '🧸' },
      { key: 'kliniktasche', title: '🏥 Kliniktasche für die Entbindung', icon: '👜' },
      { key: 'hausapotheke', title: '🩹 Die Baby-Hausapotheke & Notfallbedarf', icon: '🩺' }
    ];

    html += `<div class="space-y-8">`;
    sections.forEach(sec => {
      const items = CHECKLISTS[sec.key] || [];
      const secChecked = items.filter(item => state.checkedChecklistItems.has(item.text)).length;

      html += `
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div class="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>${sec.icon}</span>
              <span>${sec.title}</span>
            </h3>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
              ${secChecked} / ${items.length}
            </span>
          </div>

          <div class="p-6 divide-y divide-slate-100">
            ${items.map((item, idx) => {
              const isChecked = state.checkedChecklistItems.has(item.text);
              const itemId = `check-${sec.key}-${idx}`;
              return `
                <div class="py-3 flex items-start gap-3">
                  <input type="checkbox" id="${itemId}" ${isChecked ? 'checked' : ''} 
                    onchange="window.toggleChecklistItem('${item.text.replace(/'/g, "\\'")}')"
                    class="w-5 h-5 rounded text-emerald-600 accent-emerald-600 cursor-pointer mt-0.5">
                  <label for="${itemId}" class="text-sm cursor-pointer select-none ${isChecked ? 'line-through text-slate-400' : 'text-slate-800 font-medium'} flex-1">
                    ${item.text}
                  </label>
                  <span class="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-normal">
                    ${item.category}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });
    html += `</div>`;

    container.innerHTML = html;
  }

  function renderEmergencyModalContent() {
    const content = document.getElementById('emergency-modal-body');
    if (!content) return;

    content.innerHTML = `
      <div class="space-y-6">
        <div class="bg-rose-600 text-white p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-xs uppercase tracking-widest font-black bg-rose-700/80 px-2 py-1 rounded">Akuter Lebensgefahr-Notruf</span>
            <h3 class="text-2xl font-black mt-1">Notarzt & Rettungsdienst: 112</h3>
            <p class="text-rose-100 text-xs mt-1">Gilt europaweit gebührenfrei bei Atemnot, Bewusstlosigkeit & Krampfanfällen.</p>
          </div>
          <a href="tel:112" class="px-6 py-3 bg-white text-rose-700 font-extrabold rounded-xl shadow-md hover:bg-rose-50 transition-all flex items-center gap-2 flex-shrink-0">
            <span>📞 Jetzt 112 anrufen</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong class="text-slate-900 block font-bold">Giftnotruf Berlin:</strong>
            <a href="tel:03019240" class="text-sky-700 font-bold hover:underline">030 19240</a>
            <span class="text-slate-500 block mt-0.5">24h Giftzentrale (DE)</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong class="text-slate-900 block font-bold">Ärztl. Bereitschaftsdienst:</strong>
            <a href="tel:116117" class="text-sky-700 font-bold hover:underline">116 117</a>
            <span class="text-slate-500 block mt-0.5">Nachts & am Wochenende</span>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong class="text-slate-900 block font-bold">Elternnotruf:</strong>
            <a href="tel:08001110550" class="text-sky-700 font-bold hover:underline">0800 111 0550</a>
            <span class="text-slate-500 block mt-0.5">Kostenlos bei Überforderung</span>
          </div>
        </div>

        <div>
          <h4 class="font-extrabold text-slate-900 text-sm mb-3 flex items-center gap-2">
            <span>🚨</span> Illustrierte Notfall-Leitfäden (Klicken zum Öffnen):
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${EMERGENCY_PROTOCOLS.map(proto => `
              <div onclick="window.toggleEmergencyModal(false); window.navigateTo('emergency', '${proto.id}')" class="p-3 bg-rose-50/70 hover:bg-rose-100 rounded-xl border border-rose-200 cursor-pointer transition-all flex items-center justify-between group">
                <div>
                  <span class="text-[10px] font-bold text-rose-700 uppercase block">${proto.badge}</span>
                  <span class="font-bold text-slate-800 group-hover:text-rose-950 text-xs">${proto.title}</span>
                </div>
                <span class="text-rose-600 font-bold group-hover:translate-x-1 transition-transform ml-2">→</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <h4 class="font-bold text-slate-900 text-sm mb-2">Wann sofort in die Notaufnahme? (Red Flags)</h4>
          <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
            <li>Fieber ≥ 38,0°C rektal bei Säuglingen unter 3 Monaten</li>
            <li>Bläuliche Lippen, Atemstöhnen oder tiefe Einziehungen am Hals/Brustkorb</li>
            <li>Baby lässt sich nicht wecken oder ist völlig apathisch („wie eine Puppe“)</li>
            <li>Keine nassen Windeln seit mehr als 8 Stunden / eingesunkene Fontanelle</li>
            <li>Schwallartiges Erbrechen von grüner (galliger) Flüssigkeit</li>
            <li>Petechien (dunkelrote Flecken, die unter Glasdruck nicht verblassen)</li>
          </ul>
        </div>
      </div>
    `;
  }

  function renderSearchResultsOrActiveTab() {
    const query = state.searchTerm;
    const searchResultsContainer = document.getElementById('search-results-section');
    const mainTabsContainer = document.getElementById('main-tab-contents');
    const detailViewContainer = document.getElementById('page-detail-view');

    if (!query) {
      if (searchResultsContainer) searchResultsContainer.classList.add('hidden');
      if (state.currentView === 'detail') {
        if (detailViewContainer) detailViewContainer.classList.remove('hidden');
      } else {
        if (mainTabsContainer) mainTabsContainer.classList.remove('hidden');
      }
      return;
    }

    if (searchResultsContainer) searchResultsContainer.classList.remove('hidden');
    if (mainTabsContainer) mainTabsContainer.classList.add('hidden');
    if (detailViewContainer) detailViewContainer.classList.add('hidden');

    const allLessons = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, moduleTitle: m.title })));
    const matchingLessons = allLessons.filter(l => 
      l.title.toLowerCase().includes(query) || 
      l.content.toLowerCase().includes(query) ||
      l.category.toLowerCase().includes(query)
    );

    const matchingRules = TOP_PRIORITY_RULES.filter(r => 
      r.title.toLowerCase().includes(query) ||
      r.shortSummary.toLowerCase().includes(query) ||
      r.fullArticleHtml.toLowerCase().includes(query)
    );

    const matchingProtocols = EMERGENCY_PROTOCOLS.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.shortSummary.toLowerCase().includes(query) ||
      (p.contentHtml && p.contentHtml.toLowerCase().includes(query))
    );

    const matchingMonths = MONTHLY_GUIDES.filter(m => 
      m.title.toLowerCase().includes(query) ||
      m.summary.toLowerCase().includes(query) ||
      (m.contentHtml && m.contentHtml.toLowerCase().includes(query)) ||
      (m.milestones && m.milestones.some(ms => ms.toLowerCase().includes(query)))
    );

    const matchingDos = [];
    const matchingDonts = [];
    DOS_AND_DONTS.forEach(section => {
      section.dos.forEach(d => {
        if (d.title.toLowerCase().includes(query) || d.desc.toLowerCase().includes(query) || d.deepDiveHtml.toLowerCase().includes(query)) {
          matchingDos.push({ ...d, category: section.category });
        }
      });
      section.donts.forEach(d => {
        if (d.title.toLowerCase().includes(query) || d.desc.toLowerCase().includes(query) || d.deepDiveHtml.toLowerCase().includes(query)) {
          matchingDonts.push({ ...d, category: section.category });
        }
      });
    });

    const matchingIllnesses = ILLNESSES_LEXIKON.filter(i => 
      i.title.toLowerCase().includes(query) || 
      i.summary.toLowerCase().includes(query) ||
      i.contentHtml.toLowerCase().includes(query)
    );

    const totalMatches = matchingLessons.length + matchingRules.length + matchingProtocols.length + matchingMonths.length + matchingDos.length + matchingDonts.length + matchingIllnesses.length;

    searchResultsContainer.innerHTML = `
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Suchergebnisse für „${query}“</h2>
          <p class="text-sm text-slate-500 mt-1">${totalMatches} Treffer gefunden – klicke auf ein beliebiges Ergebnis, um die Detailseite zu öffnen</p>
        </div>
        <button onclick="window.clearSearch()" class="text-sm font-semibold text-sky-600 hover:text-sky-800">
          Suche beenden
        </button>
      </div>

      ${matchingProtocols.length > 0 ? `
        <div class="mb-8">
          <h3 class="text-lg font-bold text-rose-800 mb-3 flex items-center gap-2">
            <span>🚨</span> Notfall- & Erste-Hilfe-Pläne (${matchingProtocols.length})
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${matchingProtocols.map(p => `
              <div class="p-4 rounded-2xl border border-rose-300 bg-rose-50/60 cursor-pointer hover:bg-rose-100 transition-colors shadow-sm" onclick="window.navigateTo('emergency', '${p.id}')">
                <span class="text-xs font-black uppercase text-rose-700 bg-white px-2 py-0.5 rounded border border-rose-200">${p.badge}</span>
                <h4 class="font-extrabold text-slate-900 mt-1 text-base">${p.title}</h4>
                <p class="text-xs text-slate-700 mt-1">${p.shortSummary}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${matchingRules.length > 0 ? `
        <div class="mb-8">
          <h3 class="text-lg font-bold text-rose-800 mb-3 flex items-center gap-2">
            <span>⚠️</span> Treffer in den Lebenswichtigen Kardinalregeln (${matchingRules.length})
          </h3>
          <div class="space-y-3">
            ${matchingRules.map(r => `
              <div class="p-4 rounded-xl border border-rose-200 bg-rose-50/50 cursor-pointer hover:bg-rose-100 transition-colors" onclick="window.navigateTo('rule', '${r.id}')">
                <h4 class="font-bold text-slate-900">${r.title}</h4>
                <p class="text-xs text-slate-700 mt-1">${r.shortSummary}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${matchingMonths.length > 0 ? `
        <div class="mb-8">
          <h3 class="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <span>🗓️</span> Treffer in den Entwicklungsmonaten (${matchingMonths.length})
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${matchingMonths.map(m => `
              <div class="bg-white p-4 rounded-2xl border border-indigo-200 hover:border-indigo-400 cursor-pointer shadow-sm" onclick="window.navigateTo('month', '${m.month}')">
                <span class="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">${m.badge || `Monat ${m.month}`}</span>
                <h4 class="font-bold text-slate-900 mt-1">${m.title}</h4>
                <p class="text-xs text-slate-500 mt-1">${m.summary}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${matchingIllnesses.length > 0 ? `
        <div class="mb-8">
          <h3 class="text-lg font-bold text-slate-900 mb-3">Krankheiten & Symptome (${matchingIllnesses.length})</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${matchingIllnesses.map(i => `
              <div class="bg-white p-4 rounded-xl border border-slate-200 hover:border-rose-400 cursor-pointer shadow-sm" onclick="window.navigateTo('illness', '${i.id}')">
                <span class="text-xs text-rose-600 font-semibold">${i.badge}</span>
                <h4 class="font-bold text-slate-900 mt-1">${i.title}</h4>
                <p class="text-xs text-slate-500 mt-1">${i.summary}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="mb-8">
        <h3 class="text-lg font-bold text-slate-900 mb-3">Lerneinheiten (${matchingLessons.length})</h3>
        ${matchingLessons.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${matchingLessons.map(l => `
              <div class="bg-white p-4 rounded-xl border border-slate-200 hover:border-sky-400 cursor-pointer shadow-sm" onclick="window.navigateTo('lesson', '${l.id}')">
                <span class="text-xs text-sky-600 font-semibold">${l.moduleTitle}</span>
                <h4 class="font-bold text-slate-900 mt-1">${l.title}</h4>
                <span class="text-xs text-slate-400 mt-2 block">⏱️ ${l.readTime} Lesezeit</span>
              </div>
            `).join('')}
          </div>
        ` : `<p class="text-sm text-slate-500">Keine Lektionen mit diesem Begriff gefunden.</p>`}
      </div>

      ${(matchingDos.length > 0 || matchingDonts.length > 0) ? `
        <div>
          <h3 class="text-lg font-bold text-slate-900 mb-3">Do's & Don'ts Treffer</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${matchingDos.map(d => `
              <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs cursor-pointer hover:bg-emerald-100" onclick="window.navigateTo('dodont', '${d.id}')">
                <strong class="text-emerald-800 font-bold block">✓ DO: ${d.title}</strong>
                <p class="text-slate-600 mt-1">${d.desc}</p>
              </div>
            `).join('')}
            ${matchingDonts.map(d => `
              <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs cursor-pointer hover:bg-rose-100" onclick="window.navigateTo('dodont', '${d.id}')">
                <strong class="text-rose-800 font-bold block">✕ DON'T: ${d.title}</strong>
                <p class="text-slate-600 mt-1">${d.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  function updateProgressStats() {
    const total = MODULES.flatMap(m => m.lessons).length;
    const count = state.completedLessons.size;
    const percentage = Math.round((count / (total || 1)) * 100);

    const topProgressText = document.getElementById('top-progress-text');
    const topProgressBar = document.getElementById('top-progress-bar');
    if (topProgressText) topProgressText.textContent = `${count} / ${total} (${percentage}%)`;
    if (topProgressBar) topProgressBar.style.width = `${percentage}%`;
  }

  function toggleEmergencyModal(open) {
    const modal = document.getElementById('emergency-modal');
    if (!modal) return;
    state.isEmergencyModalOpen = open;
    modal.classList.toggle('hidden', !open);
    document.body.classList.toggle('overflow-hidden', open);
  }

  // ==========================================
  // Dark Mode / Nachtlesemodus
  // ==========================================
  
  // ==========================================
  // NAVIGATION & HIERARCHICAL MENUS
  // ==========================================
  function openTool(toolId) {
    state.focusedTool = toolId;
    const cat = TOOL_CATEGORIES.find(c => c.tools.some(t => t.id === toolId));
    if (cat) state.activeToolCategory = cat.id;
    window.location.hash = `tool/${toolId}`;
    setActiveTab('tools', false);
    showMainTabs();
    renderTools();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }

  function closeFocusedTool() {
    state.focusedTool = null;
    window.location.hash = 'tab/tools';
    renderTools();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showAllTools() {
    state.focusedTool = null;
    state.activeToolCategory = 'show_all';
    renderTools();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterToolsCategory(cat) {
    state.focusedTool = null;
    state.activeToolCategory = cat;
    renderTools();
  }

  function openModule(moduleId) {
    state.focusedModule = moduleId;
    state.activeModuleFilter = moduleId;
    window.location.hash = `tab/lessons`;
    setActiveTab('lessons', false);
    showMainTabs();
    renderLessons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closeFocusedModule() {
    state.focusedModule = null;
    state.activeModuleFilter = 'all';
    renderLessons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showAllModules() {
    state.focusedModule = null;
    state.activeModuleFilter = 'show_all';
    renderLessons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterModules(modId) {
    state.focusedModule = null;
    state.activeModuleFilter = modId;
    renderLessons();
  }

  function selectHomeSection(secId) {
    if (!secId) secId = 'emergency';
    state.homeActiveSection = secId;
    localStorage.setItem('babyguide_home_section', secId);

    const secTools = document.getElementById('home-sec-tools');
    const secStage = document.getElementById('home-sec-stage');
    const secEmergency = document.getElementById('home-sec-emergency');

    if (secTools) secTools.classList.toggle('hidden', secId !== 'tools' && secId !== 'all');
    if (secStage) secStage.classList.toggle('hidden', secId !== 'stage' && secId !== 'all');
    if (secEmergency) secEmergency.classList.toggle('hidden', secId !== 'emergency' && secId !== 'all');

    // Update active button styles
    ['emergency', 'tools', 'stage', 'all'].forEach(id => {
      const btn = document.getElementById(`home-tab-btn-${id}`);
      if (btn) {
        if (id === secId) {
          btn.classList.add('bg-sky-50', 'border-sky-400', 'ring-2', 'ring-sky-300');
          btn.classList.remove('bg-white', 'border-slate-200', 'hover:bg-slate-50');
        } else {
          btn.classList.remove('bg-sky-50', 'border-sky-400', 'ring-2', 'ring-sky-300');
          btn.classList.add('bg-white', 'border-slate-200', 'hover:bg-slate-50');
        }
      }
    });
  }

  // ==========================================
  // THEMES, ACCENTS & SETTINGS (OLED, REDLIGHT, MIDNIGHT, SEPIA, LIGHT)
  // ==========================================
  function applyTheme(mode) {
    if (!mode) mode = 'oled';
    state.themeMode = mode;
    localStorage.setItem('babyguide_theme_mode', mode);

    document.documentElement.classList.remove('dark', 'theme-oled', 'theme-redlight', 'theme-midnight', 'theme-light', 'theme-sepia');
    if (mode === 'oled') {
      document.documentElement.classList.add('dark', 'theme-oled');
      state.darkMode = true;
    } else if (mode === 'redlight') {
      document.documentElement.classList.add('dark', 'theme-redlight');
      state.darkMode = true;
    } else if (mode === 'midnight') {
      document.documentElement.classList.add('dark', 'theme-midnight');
      state.darkMode = true;
    } else if (mode === 'sepia') {
      document.documentElement.classList.add('theme-sepia');
      state.darkMode = false;
    } else {
      document.documentElement.classList.add('theme-light');
      state.darkMode = false;
    }
    localStorage.setItem('babyguide_dark_mode', state.darkMode ? 'true' : 'false');

    const icon = document.getElementById('theme-toggle-icon');
    const text = document.getElementById('theme-toggle-text');
    const btn = document.getElementById('theme-toggle-btn');
    if (icon) {
      if (mode === 'oled') icon.textContent = '🖤';
      else if (mode === 'redlight') icon.textContent = '🔴';
      else if (mode === 'midnight') icon.textContent = '🌙';
      else if (mode === 'sepia') icon.textContent = '📜';
      else icon.textContent = '☀️';
    }
    if (text) {
      if (mode === 'oled') text.textContent = 'OLED';
      else if (mode === 'redlight') text.textContent = 'Rotlicht';
      else if (mode === 'midnight') text.textContent = 'Mitternacht';
      else if (mode === 'sepia') text.textContent = 'Sepia';
      else text.textContent = 'Hell';
    }
    if (btn) {
      btn.title = `Aktuelles Design: ${mode}. Klicke zum Durchwechseln.`;
    }

    if (state.isSettingsModalOpen) renderSettingsModal();
  }

  function cycleTheme() {
    const sequence = ['oled', 'redlight', 'midnight', 'light', 'sepia'];
    const currentIdx = sequence.indexOf(state.themeMode);
    const nextIdx = (currentIdx + 1) % sequence.length;
    applyTheme(sequence[nextIdx]);
  }

  function applyDarkMode() {
    applyTheme(state.themeMode || 'oled');
  }

  function toggleDarkMode() {
    cycleTheme();
  }

  function applyAccent(accent) {
    if (!accent) accent = 'sky';
    state.accentColor = accent;
    localStorage.setItem('babyguide_accent_color', accent);
    document.documentElement.setAttribute('data-accent', accent);
    if (state.isSettingsModalOpen) renderSettingsModal();
  }

  function applyFontSize(size) {
    if (!size) size = 'normal';
    state.fontSize = size;
    localStorage.setItem('babyguide_font_size', size);
    document.documentElement.classList.remove('font-normal', 'font-large', 'font-xlarge');
    document.documentElement.classList.add('font-' + size);
    if (state.isSettingsModalOpen) renderSettingsModal();
  }

  function openSettingsModal() {
    state.isSettingsModalOpen = true;
    const modal = document.getElementById('settings-modal');
    if (modal) {
      modal.classList.remove('hidden');
      renderSettingsModal();
    }
  }

  function closeSettingsModal() {
    state.isSettingsModalOpen = false;
    const modal = document.getElementById('settings-modal');
    if (modal) modal.classList.add('hidden');
  }

  function resetSettingsToDefault() {
    applyTheme('oled');
    applyAccent('sky');
    applyFontSize('normal');
  }

  function renderSettingsModal() {
    const container = document.getElementById('settings-modal-body');
    if (!container) return;

    const themes = [
      { id: 'oled', name: 'OLED Tiefschwarz', desc: '100% Schwarz (#000000) – spart Akku, ideal bei Nacht', icon: '🖤' },
      { id: 'redlight', name: 'Rotlicht-Nachtmodus', desc: 'Monochromes Rot (#000000) – schont Melatonin & Nachtsicht beim Stillen', icon: '🔴' },
      { id: 'midnight', name: 'Mitternacht Slate', desc: 'Dunkelblau/Schiefergrau – edel und modern', icon: '🌙' },
      { id: 'light', name: 'Nordic Hell', desc: 'Klassisches Weiß & Hellgrau – freundlich & klar am Tag', icon: '☀️' },
      { id: 'sepia', name: 'Warmes Pergament', desc: 'Sanftes Sepia – beruhigend für die Augen am Abend', icon: '📜' }
    ];

    const accents = [
      { id: 'sky', name: 'Ozean Blau', hex: '#0284c7' },
      { id: 'emerald', name: 'Salbei Grün', hex: '#059669' },
      { id: 'purple', name: 'Sanftes Lavendel', hex: '#7c3aed' },
      { id: 'rose', name: 'Warme Koralle', hex: '#e11d48' },
      { id: 'amber', name: 'Goldener Bernstein', hex: '#d97706' }
    ];

    const fontSizes = [
      { id: 'normal', name: 'Standard (100%)', desc: 'Optimale Textgröße für MacBook' },
      { id: 'large', name: 'Groß (+12%)', desc: 'Angenehm auf iPhone' },
      { id: 'xlarge', name: 'Sehr groß (+25%)', desc: 'Maximal lesbar bei Nacht & Übermüdung' }
    ];

    container.innerHTML = `
      <div class="space-y-6">
        <!-- 1. Background Theme Selection -->
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
            1. Hintergrund-Design (MacBook & iPhone)
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${themes.map(t => {
              const isActive = state.themeMode === t.id;
              return `
                <button type="button" onclick="window.applyTheme('${t.id}')" class="p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isActive ? 'border-sky-500 ring-2 ring-sky-400 bg-sky-50/20' : 'border-slate-200 hover:border-slate-300 bg-white'
                }">
                  <span class="text-2xl">${t.icon}</span>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between">
                      <strong class="text-xs sm:text-sm font-bold text-slate-900">${t.name}</strong>
                      ${isActive ? '<span class="text-[10px] font-black uppercase tracking-wider text-sky-600 bg-sky-100 px-1.5 py-0.5 rounded">Aktiv</span>' : ''}
                    </div>
                    <p class="text-[11px] text-slate-500 mt-0.5 leading-snug">${t.desc}</p>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 2. Accent Color Selection -->
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
            2. Akzentfarbe & Primärstil
          </label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${accents.map(a => {
              const isActive = state.accentColor === a.id;
              return `
                <button type="button" onclick="window.applyAccent('${a.id}')" class="p-3 rounded-2xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                  isActive ? 'border-sky-500 ring-2 ring-sky-400 bg-sky-50/20 font-bold' : 'border-slate-200 hover:border-slate-300 bg-white'
                }">
                  <span class="w-5 h-5 rounded-full flex-shrink-0 shadow-sm" style="background-color: ${a.hex}"></span>
                  <span class="text-xs text-slate-800">${a.name}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 3. Font Size Scaling -->
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
            3. Schriftgröße (Lesekomfort)
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            ${fontSizes.map(f => {
              const isActive = state.fontSize === f.id;
              return `
                <button type="button" onclick="window.applyFontSize('${f.id}')" class="p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  isActive ? 'border-sky-500 ring-2 ring-sky-400 bg-sky-50/20 font-bold' : 'border-slate-200 hover:border-slate-300 bg-white'
                }">
                  <strong class="text-xs block text-slate-900">${f.name}</strong>
                  <span class="text-[10px] text-slate-500">${f.desc}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Info Box -->
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
          <span class="text-xl">💡</span>
          <div>
            <strong>Tipp für die Nacht:</strong> Wähle <em>OLED Tiefschwarz</em> und <em>Große Schrift</em>. So kannst du beim nächtlichen Füttern im abgedunkelten Zimmer lesen, ohne das Baby aufzuwecken.
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // GLOBAL BABY PROFILE ("MEIN BABY" CONTEXT)
  // ==========================================
  function getBabyAgeDetails(birthDateStr) {
    if (!birthDateStr) return null;
    const parts = birthDateStr.split('-');
    let b;
    if (parts.length === 3) {
      b = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    } else {
      b = new Date(birthDateStr);
    }
    const now = new Date();
    if (isNaN(b.getTime())) return null;

    const diffMs = now - b;
    const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.min(12, Math.max(0, Math.floor(diffDays / 30.4375)));

    let ageDisplay = '';
    if (diffDays < 28) {
      ageDisplay = `${diffDays} Tage alt`;
    } else if (diffWeeks < 12) {
      ageDisplay = `${diffWeeks} Wochen alt`;
    } else {
      ageDisplay = `${diffMonths} Monate alt`;
    }

    let defaultWakeCategory = '0-4w';
    if (diffMonths >= 10) defaultWakeCategory = '10-12m';
    else if (diffMonths >= 7) defaultWakeCategory = '7-9m';
    else if (diffMonths >= 5) defaultWakeCategory = '5-6m';
    else if (diffMonths >= 3) defaultWakeCategory = '3-4m';
    else if (diffMonths >= 1) defaultWakeCategory = '1-2m';

    let defaultStage = '0-1m';
    if (diffMonths >= 10) defaultStage = '10-12m';
    else if (diffMonths >= 7) defaultStage = '7-9m';
    else if (diffMonths >= 4) defaultStage = '4-6m';
    else if (diffMonths >= 2) defaultStage = '2-3m';

    let nextU = 'U4 (3.–4. Monat)';
    if (diffMonths >= 10) nextU = 'U6 (10.–12. Monat)';
    else if (diffMonths >= 6) nextU = 'U5 (6.–7. Monat)';
    else if (diffMonths >= 3) nextU = 'U4 (3.–4. Monat)';
    else if (diffMonths >= 1) nextU = 'U3 (4.–5. Lebenswoche)';
    else nextU = 'U2 (3.–10. Lebenstag)';

    return {
      days: diffDays,
      weeks: diffWeeks,
      months: diffMonths,
      ageDisplay: ageDisplay,
      defaultWakeCategory: defaultWakeCategory,
      defaultStage: defaultStage,
      nextU: nextU
    };
  }

  function updateBabyProfileChip() {
    const chipText = document.getElementById('baby-profile-chip-text');
    const age = getBabyAgeDetails(state.babyProfile.birthDate);
    if (chipText) {
      if (state.babyProfile.name) {
        chipText.textContent = `${state.babyProfile.name}${age ? ` (${age.months}M)` : ''}`;
      } else {
        chipText.textContent = 'Mein Baby';
      }
    }

    const heroGreeting = document.getElementById('home-hero-greeting');
    if (heroGreeting && state.babyProfile.name && age) {
      heroGreeting.innerHTML = `Für <span class="text-sky-400 font-bold">${state.babyProfile.name}</span> (${age.ageDisplay}) • Nächste U: <span class="text-teal-300 font-bold">${age.nextU}</span>`;
    }
  }

  function openBabyProfileModal() {
    state.isBabyProfileModalOpen = true;
    const modal = document.getElementById('baby-profile-modal');
    if (modal) {
      modal.classList.remove('hidden');
      renderBabyProfileModal();
    }
  }

  function closeBabyProfileModal() {
    state.isBabyProfileModalOpen = false;
    const modal = document.getElementById('baby-profile-modal');
    if (modal) modal.classList.add('hidden');
  }

  function renderBabyProfileModal() {
    const container = document.getElementById('baby-profile-modal-body');
    if (!container) return;

    const p = state.babyProfile;
    const age = getBabyAgeDetails(p.birthDate);

    container.innerHTML = `
      <div class="space-y-4 text-xs">
        ${age ? `
          <div class="p-3.5 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">🌱</span>
              <div>
                <strong class="text-slate-900 dark:text-white font-bold text-sm block">${p.name || 'Dein Baby'}: ${age.ageDisplay}</strong>
                <span class="text-slate-500 text-[11px]">Berechnet: Woche ${age.weeks} (${age.days} Tage seit Geburt)</span>
              </div>
            </div>
            <span class="px-2.5 py-1 bg-white dark:bg-slate-800 border border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-300 font-bold rounded-lg text-[10px]">
              Nächste: ${age.nextU}
            </span>
          </div>
        ` : ''}

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Name oder Kosename:</label>
            <input type="text" id="prof-name" value="${p.name || ''}" placeholder="z. B. Leo" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
          </div>
          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Geburtsdatum:</label>
            <input type="date" id="prof-birthdate" value="${p.birthDate || '2026-03-15'}" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Geschlecht (WHO-Kurven):</label>
            <select id="prof-gender" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
              <option value="boy" ${p.gender === 'boy' ? 'selected' : ''}>Junge (Boys)</option>
              <option value="girl" ${p.gender === 'girl' ? 'selected' : ''}>Mädchen (Girls)</option>
            </select>
          </div>
          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Aktuelles Gewicht (kg):</label>
            <input type="number" step="0.1" id="prof-weight" value="${p.weight || 6.4}" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
            <span class="text-[10px] text-slate-400 mt-0.5 block">Wird für Fiebersaft-Rechner & Kurven verwendet</span>
          </div>
        </div>

        <div class="border-t border-slate-200 dark:border-slate-800 pt-3">
          <span class="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">Notfall- & Betreuungsinfos</span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label class="block font-medium text-slate-600 dark:text-slate-400 mb-1">Kinderarzt & Telefon:</label>
              <input type="text" id="prof-pediatrician" value="${p.pediatrician || ''}" placeholder="Dr. med. Weber (089 987654)" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
            </div>
            <div>
              <label class="block font-medium text-slate-600 dark:text-slate-400 mb-1">Notfallkontakt (Mama / Papa):</label>
              <input type="text" id="prof-phone" value="${p.parentPhone || ''}" placeholder="0171 1234567" class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
            </div>
          </div>
          <div>
            <label class="block font-medium text-slate-600 dark:text-slate-400 mb-1">Bekannte Allergien / Besonderheiten:</label>
            <input type="text" id="prof-allergies" value="${p.allergies || ''}" placeholder="Keine / Kuhmilchallergie / etc." class="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
          </div>
        </div>
      </div>
    `;
  }

  function saveBabyProfileFromModal() {
    const name = document.getElementById('prof-name')?.value.trim() || 'Leo';
    const birthDate = document.getElementById('prof-birthdate')?.value || '2026-03-15';
    const gender = document.getElementById('prof-gender')?.value || 'boy';
    const weight = parseFloat(document.getElementById('prof-weight')?.value) || 6.4;
    const pediatrician = document.getElementById('prof-pediatrician')?.value.trim() || '';
    const parentPhone = document.getElementById('prof-phone')?.value.trim() || '';
    const allergies = document.getElementById('prof-allergies')?.value.trim() || 'Keine';

    state.babyProfile = {
      name,
      birthDate,
      gender,
      weight,
      pediatrician,
      pediatricianPhone: pediatrician,
      parentPhone,
      allergies,
      emergencyContact: parentPhone
    };

    localStorage.setItem('babyguide_baby_profile', JSON.stringify(state.babyProfile));
    localStorage.setItem('babyguide_baby_name', name);
    localStorage.setItem('babyguide_birthdate', birthDate);
    localStorage.setItem('babyguide_baby_gender', gender);
    localStorage.setItem('babyguide_baby_weight', weight.toString());
    localStorage.setItem('babyguide_baby_pediatrician', pediatrician);
    localStorage.setItem('babyguide_baby_parent_phone', parentPhone);
    localStorage.setItem('babyguide_baby_allergies', allergies);

    const age = getBabyAgeDetails(birthDate);
    if (age) {
      state.wakeAge = age.defaultWakeCategory;
      state.selectedAgeStage = age.defaultStage;
      state.growthMonth = age.months;
      state.growthGender = gender === 'girl' ? 'girls' : 'boys';
    }
    state.growthWeight = weight;
    state.medWeight = weight;
    state.babysitterData.babyName = name;
    state.babysitterData.birthDate = birthDate;

    updateBabyProfileChip();
    closeBabyProfileModal();
    renderAllTabs();
  }

  function resetBabyProfile() {
    state.babyProfile = {
      name: '',
      birthDate: '2026-03-15',
      gender: 'boy',
      weight: 6.4,
      pediatrician: '',
      pediatricianPhone: '',
      parentPhone: '',
      allergies: '',
      emergencyContact: ''
    };
    localStorage.removeItem('babyguide_baby_profile');
    localStorage.removeItem('babyguide_baby_name');
    updateBabyProfileChip();
    renderBabyProfileModal();
    renderAllTabs();
  }

  // ==========================================
  // SMART BIO-RHYTHMUS & 1-TAP TRACKER (LIVE COUNTDOWN & PREDICTION ENGINE)
  // ==========================================
  function getBabyRhythmNorms(birthDateStr) {
    const age = getBabyAgeDetails(birthDateStr);
    const months = age ? age.months : 3;
    const days = age ? age.days : 90;

    let wakeMin = 90;
    let wakeLabel = 'ca. 1,5 Std (75–120 Min)';
    let feedMin = 180;
    let feedLabel = 'alle 2,5–3,5 Std';
    let napsPerDay = '3–4 Tagesschläfchen';
    let stageTitle = '3.–4. Lebensmonat';

    if (days < 28) {
      wakeMin = 50;
      wakeLabel = '45–60 Min';
      feedMin = 150;
      feedLabel = 'alle 2–3 Std (mind. 8–12x/24h)';
      napsPerDay = '4–6 Tagesschläfchen';
      stageTitle = 'Neugeborenes (0.–4. Woche)';
    } else if (months < 3) {
      wakeMin = 75;
      wakeLabel = '60–90 Min (ca. 1¼ Std)';
      feedMin = 150;
      feedLabel = 'alle 2–3 Std';
      napsPerDay = '4–5 Tagesschläfchen';
      stageTitle = '1.–2. Lebensmonat';
    } else if (months < 5) {
      wakeMin = 95;
      wakeLabel = '75–120 Min (ca. 1,5 Std)';
      feedMin = 180;
      feedLabel = 'alle 2,5–3,5 Std';
      napsPerDay = '3–4 Tagesschläfchen';
      stageTitle = '3.–4. Lebensmonat (4M Regression)';
    } else if (months < 7) {
      wakeMin = 135;
      wakeLabel = '120–150 Min (ca. 2–2,5 Std)';
      feedMin = 210;
      feedLabel = 'alle 3–4 Std (Beikost-Start)';
      napsPerDay = '3 Tagesschläfchen';
      stageTitle = '5.–6. Lebensmonat';
    } else if (months < 10) {
      wakeMin = 165;
      wakeLabel = '150–180 Min (ca. 2,5–3 Std)';
      feedMin = 220;
      feedLabel = 'alle 3,5–4 Std';
      napsPerDay = '2–3 Tagesschläfchen';
      stageTitle = '7.–9. Lebensmonat';
    } else if (months < 13) {
      wakeMin = 210;
      wakeLabel = '3–4 Std';
      feedMin = 240;
      feedLabel = 'alle 3,5–4,5 Std';
      napsPerDay = '2 Tagesschläfchen (Vormittag & Nachmittag)';
      stageTitle = '10.–12. Lebensmonat';
    } else {
      wakeMin = 270;
      wakeLabel = '4–5,5 Std';
      feedMin = 240;
      feedLabel = '3 Mahlzeiten + 2 Snacks';
      napsPerDay = '1 Mittagsschlaf (1,5–2,5 Std)';
      stageTitle = 'Kleinkind (12+ Monate)';
    }

    if (state.customWakeWindowMin) {
      wakeMin = state.customWakeWindowMin;
      wakeLabel = `${wakeMin} Min (benutzerdefiniert)`;
    }
    if (state.customFeedIntervalMin) {
      feedMin = state.customFeedIntervalMin;
      feedLabel = `${feedMin} Min (benutzerdefiniert)`;
    }

    return {
      age,
      months,
      wakeMin,
      wakeLabel,
      feedMin,
      feedLabel,
      napsPerDay,
      stageTitle
    };
  }

  function formatMinutesCountdown(mins) {
    const absMins = Math.abs(mins);
    const h = Math.floor(absMins / 60);
    const m = absMins % 60;
    if (h === 0) return `${m} Min`;
    return `${h}h ${m < 10 ? '0' : ''}${m}m`;
  }

  function calculateWakeWindowStatus(lastWakeTs, norms) {
    // A) Fall 1: Baby schläft aktuell (Schlafphase aktiv)
    if (state.isSleeping && state.currentSleepStart > 0) {
      const now = Date.now();
      const elapsedMs = Math.max(0, now - state.currentSleepStart);
      const sleepDurationMin = Math.floor(elapsedMs / 60000);
      const sleepDurationSec = Math.floor((elapsedMs % 60000) / 1000);
      const sleepStartTime = new Date(state.currentSleepStart);
      const sleepStartTimeStr = sleepStartTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

      // Säuglings-Schlafzyklus dauert typischerweise 45 Minuten
      const cyclePercent = Math.min(100, Math.max(5, Math.round((sleepDurationMin / 45) * 100)));

      // Nächster SweetSpot nach Aufwachen: Berechnet auf Basis eines typischen 45-60 Min Schläfchens
      const typicalRemaining = Math.max(0, 45 - sleepDurationMin);
      const projectedWakeMs = now + (typicalRemaining * 60 * 1000);
      const projectedNextSleepMs = projectedWakeMs + (norms.wakeMin * 60 * 1000);
      const projectedNextSleepStr = new Date(projectedNextSleepMs).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

      let advice = '';
      if (sleepDurationMin < 30) {
        advice = 'Schlafphase aktiv (1. Zyklus). Wenn das Baby vor 30 Min erwacht, war es ein Kurzschläfchen (Wachfenster danach kürzer).';
      } else if (sleepDurationMin <= 60) {
        advice = '1 voller Schlafzyklus (ca. 45 Min) erreicht! Sehr erholsam für Nervensystem, Gehirnreifung und Wachstum.';
      } else {
        advice = 'Tiefes, langes Nickerchen. Tagsüber nach 2,5 bis 3 Std sanft wecken, um den Nachtschlaf nicht zu gefährden.';
      }

      return {
        isSleeping: true,
        hasData: true,
        status: 'sleeping',
        sleepDurationMin,
        sleepDurationSec,
        sleepStartTimeStr,
        percent: cyclePercent,
        badge: `💤 Schläft seit ${formatMinutesCountdown(sleepDurationMin)}`,
        countdown: `Schläft seit ${sleepDurationMin}m ${sleepDurationSec}s`,
        subtext: `Eingeschlafen: ${sleepStartTimeStr} Uhr • Nächster SweetSpot nach Aufwachen ca. ${projectedNextSleepStr} Uhr`,
        color: 'indigo',
        advice,
        targetTimeStr: projectedNextSleepStr
      };
    }

    // B) Fall 2: Baby ist wach (Wachfenster läuft)
    const wakeTs = lastWakeTs || state.lastWakeTime || state.wakeStartTime;
    if (!wakeTs) {
      return {
        isSleeping: false,
        hasData: false,
        status: 'none',
        title: 'Wachfenster starten',
        badge: 'Noch kein Schläfchen',
        countdown: '--',
        advice: 'Tippe auf „☀️ Aufgewacht“, sobald dein Baby wach ist (startet den Countdown), oder auf „😴 Schlafen gelegt“, wenn es gerade einschläft.',
        percent: 0,
        color: 'slate',
        targetTimeStr: '--'
      };
    }

    const now = Date.now();
    const elapsedMin = Math.max(0, Math.floor((now - wakeTs) / 60000));
    const lastWakeDate = new Date(wakeTs);
    const lastWakeTimeStr = lastWakeDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

    // Schlafdauer des vorherigen Schläfchens in den Countdown einbeziehen:
    let effectiveWakeMin = norms.wakeMin;
    let napAdjustmentNote = '';
    const lastNapDuration = state.lastNapDuration || 0;

    if (lastNapDuration > 0 && lastNapDuration < 30) {
      // Katastrophenschläfchen / Power-Nap unter 30 Min: Schlafdruck nur unvollständig abgebaut!
      const reduction = Math.min(25, Math.max(10, Math.round(norms.wakeMin * 0.2)));
      effectiveWakeMin = Math.max(30, norms.wakeMin - reduction);
      napAdjustmentNote = `⚡ Kurzes Schläfchen (${lastNapDuration} Min) ➔ Wachfenster um ${reduction} Min verkürzt (${effectiveWakeMin} Min)!`;
    } else if (lastNapDuration >= 90) {
      // Langes Nickerchen (2 Zyklen): Sehr gut ausgeruht
      const extension = Math.min(15, Math.round(norms.wakeMin * 0.1));
      effectiveWakeMin = norms.wakeMin + extension;
      napAdjustmentNote = `✨ Ausgeruht (+${extension} Min = ${effectiveWakeMin} Min) nach langem Schläfchen (${lastNapDuration} Min).`;
    }

    const targetMs = wakeTs + (effectiveWakeMin * 60 * 1000);
    const targetDate = new Date(targetMs);
    const targetTimeStr = targetDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    const remainingMin = effectiveWakeMin - elapsedMin;
    const percent = Math.min(100, Math.max(0, Math.round((elapsedMin / effectiveWakeMin) * 100)));

    if (remainingMin > 20) {
      return {
        isSleeping: false,
        hasData: true,
        status: 'active',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        lastWakeTimeStr,
        lastNapDuration,
        effectiveWakeMin,
        percent,
        badge: '🟢 Wach & Aktiv',
        countdown: `Noch ${formatMinutesCountdown(remainingMin)} wach`,
        subtext: `Ziel-Schlafzeit: ca. ${targetTimeStr} Uhr • Aufgewacht: ${lastWakeTimeStr} Uhr`,
        color: 'emerald',
        advice: napAdjustmentNote 
          ? `${napAdjustmentNote} Baby ist derzeit aufmerksam und aktiv.` 
          : 'Baby ist ausgeruht und aufnahmefähig. Perfekte Phase für Bauchlage (Tummy Time), Ansprache, Bindung & Spiel.'
      };
    } else if (remainingMin >= 0) {
      return {
        isSleeping: false,
        hasData: true,
        status: 'closing',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        lastWakeTimeStr,
        lastNapDuration,
        effectiveWakeMin,
        percent,
        badge: '🟡 Müdigkeits-Fenster öffnet sich',
        countdown: `In ${remainingMin} Min schlafbereit!`,
        subtext: `Ziel: ca. ${targetTimeStr} Uhr • Jetzt Reize abbauen`,
        color: 'amber',
        advice: napAdjustmentNote
          ? `${napAdjustmentNote} Achte jetzt auf Müdigkeitszeichen (Gähnen, Augenreiben).`
          : 'Achte auf frühe Müdigkeitszeichen: Gähnen, Augenreiben, Blick abwenden. Jetzt Raum abdunkeln, wickeln & Einschlafritual starten!'
      };
    } else if (remainingMin >= -30) {
      const overdue = Math.abs(remainingMin);
      return {
        isSleeping: false,
        hasData: true,
        status: 'sweetspot',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        lastWakeTimeStr,
        lastNapDuration,
        effectiveWakeMin,
        percent: 100,
        badge: `🟠 Schlaffenster JETZT (+${overdue} Min)`,
        countdown: 'Optimaler Einschlaf-SweetSpot!',
        subtext: `Fällig seit ${targetTimeStr} Uhr (Wach seit ${formatMinutesCountdown(elapsedMin)})`,
        color: 'orange',
        advice: 'Melatoninspiegel ist auf Höchststand. Jetzt ablegen oder mit Rauschen, Schaukeln & Berührung sanft in den Schlaf begleiten.'
      };
    } else {
      const overdue = Math.abs(remainingMin);
      return {
        isSleeping: false,
        hasData: true,
        status: 'overtired',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        lastWakeTimeStr,
        lastNapDuration,
        effectiveWakeMin,
        percent: 100,
        badge: `🚨 Übermüdung (+${overdue} Min überfällig)`,
        countdown: `Wachfenster um ${formatMinutesCountdown(overdue)} überschritten`,
        subtext: `Sollte um ${targetTimeStr} Uhr schlafen (Wach seit ${formatMinutesCountdown(elapsedMin)})`,
        color: 'rose',
        advice: 'Cortisol-Ausschüttung droht („Überdrehtheit“ / Schreianfälle). Baby braucht jetzt maximale Reizabschirmung, Tragetuch, Wiegen oder braunes Rauschen.'
      };
    }
  }

  function calculateFeedStatus(lastFeedTs, norms) {
    if (!lastFeedTs) {
      return {
        hasData: false,
        status: 'none',
        title: 'Mahlzeit erfassen',
        badge: 'Noch kein Eintrag',
        countdown: '--',
        advice: 'Tippe auf „+ Trinken“, um den automatischen Trink-Countdown zu starten.',
        percent: 0,
        color: 'slate',
        targetTimeStr: '--'
      };
    }

    const now = Date.now();
    const elapsedMin = Math.max(0, Math.floor((now - lastFeedTs) / 60000));
    const targetMs = lastFeedTs + (norms.feedMin * 60 * 1000);
    const targetDate = new Date(targetMs);
    const targetTimeStr = targetDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
    const remainingMin = norms.feedMin - elapsedMin;
    const percent = Math.min(100, Math.max(0, Math.round((elapsedMin / norms.feedMin) * 100)));

    if (remainingMin > 30) {
      return {
        hasData: true,
        status: 'satisfied',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        percent,
        badge: '🟢 Satt & Zufrieden',
        countdown: `Nächste Mahlzeit in ${formatMinutesCountdown(remainingMin)}`,
        subtext: `Ca. ${targetTimeStr} Uhr • Intervall: ${norms.feedLabel}`,
        color: 'sky',
        advice: 'Verdauungsphase. Auf Bäuerchen achten und bei Unruhe Beinchen sanft radfahren.'
      };
    } else if (remainingMin >= 0) {
      return {
        hasData: true,
        status: 'hungry_soon',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        percent,
        badge: '🟡 Hunger kündigt sich bald an',
        countdown: `Hungerbereit in ${remainingMin} Min`,
        subtext: `Ziel-Mahlzeit: ca. ${targetTimeStr} Uhr`,
        color: 'amber',
        advice: 'Frühe Hungerzeichen beachten: Schmatzen, Züngeln, Fäustchen saugen, Suchbewegungen (Rooting). Nicht erst warten, bis Baby schreit!'
      };
    } else {
      const overdue = Math.abs(remainingMin);
      return {
        hasData: true,
        status: 'due',
        elapsedMin,
        remainingMin,
        targetTimeStr,
        percent: 100,
        badge: `🍼 Mahlzeit fällig (+${overdue} Min)`,
        countdown: 'Fütterung jetzt anbieten!',
        subtext: `Seit ${targetTimeStr} Uhr fällig`,
        color: 'rose',
        advice: 'Stillen, Pre-Fläschchen oder Beikost anbieten. Wenn das Baby bereits weint: erst auf den Arm nehmen und beruhigen, dann anlegen.'
      };
    }
  }

  function getTodayDateKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function getTodayQuickLogs() {
    const key = 'babyguide_quick_logs_' + getTodayDateKey();
    let data = null;
    try {
      data = JSON.parse(localStorage.getItem(key) || 'null');
    } catch (e) {
      data = null;
    }
    if (!data) {
      data = {
        feeds: [],
        wetDiapers: [],
        dirtyDiapers: [],
        sleeps: [],
        sleepSessions: [],
        currentSleep: null,
        lastWakeTime: null
      };
    }
    if (!Array.isArray(data.feeds)) data.feeds = [];
    if (!Array.isArray(data.wetDiapers)) data.wetDiapers = [];
    if (!Array.isArray(data.dirtyDiapers)) data.dirtyDiapers = [];
    if (!Array.isArray(data.sleeps)) data.sleeps = [];
    if (!Array.isArray(data.sleepSessions)) data.sleepSessions = [];
    if (data.currentSleep === undefined) data.currentSleep = null;
    if (data.lastWakeTime === undefined) data.lastWakeTime = null;
    return data;
  }

  function saveTodayQuickLogs(data) {
    const key = 'babyguide_quick_logs_' + getTodayDateKey();
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Baby schlafen gelegt (Start des Schläfchens)
  function logBabyPutToBed(minutesAgo = 0) {
    const ts = Date.now() - (minutesAgo * 60 * 1000);
    state.isSleeping = true;
    state.currentSleepStart = ts;
    localStorage.setItem('babyguide_is_sleeping', 'true');
    localStorage.setItem('babyguide_current_sleep_start', ts.toString());

    const data = getTodayQuickLogs();
    data.currentSleep = { start: ts };
    saveTodayQuickLogs(data);

    renderQuickLogCard();
    if (state.activeTab === 'tools') renderTools();
  }

  // Baby aufgewacht (Ende des Schläfchens & Start des neuen Wachfensters)
  function logBabyWokeUp(minutesAgo = 0) {
    const wakeTs = Date.now() - (minutesAgo * 60 * 1000);
    let durationMin = 0;
    const sleepStart = state.currentSleepStart > 0 ? state.currentSleepStart : (wakeTs - (45 * 60 * 1000));
    durationMin = Math.max(1, Math.round((wakeTs - sleepStart) / 60000));

    state.isSleeping = false;
    state.currentSleepStart = 0;
    state.lastWakeTime = wakeTs;
    state.wakeStartTime = wakeTs;
    state.lastNapDuration = durationMin;

    localStorage.setItem('babyguide_is_sleeping', 'false');
    localStorage.removeItem('babyguide_current_sleep_start');
    localStorage.setItem('babyguide_last_wake_time', wakeTs.toString());
    localStorage.setItem('babyguide_wake_start', wakeTs.toString());
    localStorage.setItem('babyguide_last_nap_duration', durationMin.toString());

    const data = getTodayQuickLogs();
    data.sleepSessions.push({
      start: sleepStart,
      end: wakeTs,
      durationMin: durationMin
    });
    data.sleeps.push(wakeTs);
    data.currentSleep = null;
    data.lastWakeTime = wakeTs;
    saveTodayQuickLogs(data);

    renderQuickLogCard();
    if (state.activeTab === 'tools') renderTools();
  }

  // Versehen? Laufendes Schläfchen abbrechen
  function cancelCurrentSleep() {
    state.isSleeping = false;
    state.currentSleepStart = 0;
    localStorage.setItem('babyguide_is_sleeping', 'false');
    localStorage.removeItem('babyguide_current_sleep_start');

    const data = getTodayQuickLogs();
    data.currentSleep = null;
    saveTodayQuickLogs(data);

    renderQuickLogCard();
    if (state.activeTab === 'tools') renderTools();
  }

  function logQuickAction(type) {
    if (type === 'sleep') {
      if (state.isSleeping) {
        logBabyWokeUp(0);
      } else {
        logBabyPutToBed(0);
      }
      return;
    }
    const data = getTodayQuickLogs();
    const now = Date.now();
    if (type === 'feed') data.feeds.push(now);
    else if (type === 'wet') data.wetDiapers.push(now);
    else if (type === 'dirty') data.dirtyDiapers.push(now);

    saveTodayQuickLogs(data);
    renderQuickLogCard();
  }

  function logQuickActionWithOffset(type, minutesAgo) {
    if (type === 'sleep') {
      if (state.isSleeping) {
        logBabyWokeUp(minutesAgo);
      } else {
        logBabyPutToBed(minutesAgo);
      }
      return;
    }
    const data = getTodayQuickLogs();
    const ts = Date.now() - (minutesAgo * 60 * 1000);
    if (type === 'feed') data.feeds.push(ts);
    else if (type === 'wet') data.wetDiapers.push(ts);
    else if (type === 'dirty') data.dirtyDiapers.push(ts);

    saveTodayQuickLogs(data);
    renderQuickLogCard();
  }

  function formatTimeAgo(ts) {
    if (!ts) return 'Noch kein Eintrag';
    const diffMin = Math.max(0, Math.floor((Date.now() - ts) / 60000));
    if (diffMin < 1) return 'Gerade eben';
    if (diffMin < 60) return `Vor ${diffMin} Min`;
    const h = Math.floor(diffMin / 60);
    const m = diffMin % 60;
    return `Vor ${h}h ${m > 0 ? `${m}m` : ''}`;
  }

  function renderQuickLogCard() {
    const container = document.getElementById('home-quick-log-container');
    if (!container) return;

    const data = getTodayQuickLogs();
    const lastFeed = data.feeds.length > 0 ? data.feeds[data.feeds.length - 1] : null;
    const lastWet = data.wetDiapers.length > 0 ? data.wetDiapers[data.wetDiapers.length - 1] : null;
    const lastDirty = data.dirtyDiapers.length > 0 ? data.dirtyDiapers[data.dirtyDiapers.length - 1] : null;
    const lastSleep = state.lastWakeTime || (data.sleeps.length > 0 ? data.sleeps[data.sleeps.length - 1] : (state.wakeStartTime > 0 ? state.wakeStartTime : null));

    const norms = getBabyRhythmNorms(state.babyProfile.birthDate);
    const wakeStatus = calculateWakeWindowStatus(lastSleep, norms);
    const feedStatus = calculateFeedStatus(lastFeed, norms);
    const isWellHydrated = data.wetDiapers.length >= 4;

    const babyName = state.babyProfile.name || 'Dein Baby';
    const ageDisplay = norms.age ? norms.age.ageDisplay : '3 Monate';

    // Gesamt-Schlafzeit heute berechnen (abgeschlossene Sessions + ggf. laufender Schlaf)
    let totalSleepMin = (data.sleepSessions || []).reduce((acc, s) => acc + (s.durationMin || 0), 0);
    if (state.isSleeping && state.currentSleepStart > 0) {
      totalSleepMin += Math.max(0, Math.floor((Date.now() - state.currentSleepStart) / 60000));
    }
    const sleepHours = Math.floor(totalSleepMin / 60);
    const sleepRemMin = totalSleepMin % 60;
    const sleepTimeDisplay = totalSleepMin > 0 ? ` (${sleepHours > 0 ? `${sleepHours}h ` : ''}${sleepRemMin}m Schlaf)` : '';
    const sleepCount = (data.sleepSessions && data.sleepSessions.length > 0) ? data.sleepSessions.length : data.sleeps.length;

    container.innerHTML = `
      <div class="bg-gradient-to-br from-white via-sky-50/30 to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-3xl border border-sky-200/80 dark:border-slate-800 p-4 sm:p-6 shadow-sm space-y-4">
        
        <!-- Header with Live Pulse & Adjust button -->
        <div class="flex items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl flex-shrink-0 animate-pulse-gentle">⚡</span>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <strong class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Bio-Rhythmus & 1-Tap Tracker</strong>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Live-Countdown
                </span>
                ${state.isSleeping ? `
                  <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white shadow-xs">
                    💤 Baby schläft gerade
                  </span>
                ` : ''}
              </div>
              <span class="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                Personalisiert für <strong>${babyName}</strong> (${ageDisplay}): Berechnet SweetSpot & Hungerphasen
              </span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <button onclick="window.openTrackerAdjustmentModal()" class="px-2.5 py-1 text-[11px] font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-slate-800 rounded-xl border border-sky-200 dark:border-sky-800 transition-colors cursor-pointer flex items-center gap-1 shadow-xs" title="Wachfenster & Abstände manuell anpassen">
              <span>⚙️</span> <span class="hidden sm:inline">Anpassen</span>
            </button>
            <button onclick="window.resetTodayQuickLogs()" class="px-2 py-1 text-[11px] text-slate-400 hover:text-rose-500 font-medium transition-colors cursor-pointer" title="Heutige Einträge zurücksetzen">
              Reset
            </button>
          </div>
        </div>

        <!-- 4 Action Buttons with Live Badges -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <!-- 1. Trinken -->
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-sky-400 transition-all flex flex-col justify-between shadow-xs">
            <button onclick="window.logQuickAction('feed')" class="w-full text-left cursor-pointer group active:scale-95 transition-transform">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xl">🍼</span>
                <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                  ${feedStatus.hasData ? (feedStatus.remainingMin > 0 ? `In ${formatMinutesCountdown(feedStatus.remainingMin)}` : `Fällig!`) : 'Starten'}
                </span>
              </div>
              <div class="font-extrabold text-xs text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">+ Trinken</div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${formatTimeAgo(lastFeed)}</div>
            </button>
            <div class="flex items-center gap-1 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/60">
              <button onclick="window.logQuickActionWithOffset('feed', 15)" class="text-[9px] font-bold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 15 Min getrunken">+15m</button>
              <button onclick="window.logQuickActionWithOffset('feed', 30)" class="text-[9px] font-bold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 30 Min getrunken">+30m</button>
            </div>
          </div>

          <!-- 2. Nass -->
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-cyan-400 transition-all flex flex-col justify-between shadow-xs">
            <button onclick="window.logQuickAction('wet')" class="w-full text-left cursor-pointer group active:scale-95 transition-transform">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xl">💧</span>
                <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                  ${data.wetDiapers.length}x heute
                </span>
              </div>
              <div class="font-extrabold text-xs text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors">+ Nass</div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${formatTimeAgo(lastWet)}</div>
            </button>
            <div class="flex items-center gap-1 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/60">
              <button onclick="window.logQuickActionWithOffset('wet', 15)" class="text-[9px] font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 15 Min gewickelt">+15m</button>
              <button onclick="window.logQuickActionWithOffset('wet', 30)" class="text-[9px] font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 30 Min gewickelt">+30m</button>
            </div>
          </div>

          <!-- 3. Stuhl -->
          <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-amber-400 transition-all flex flex-col justify-between shadow-xs">
            <button onclick="window.logQuickAction('dirty')" class="w-full text-left cursor-pointer group active:scale-95 transition-transform">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xl">💩</span>
                <span class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  ${data.dirtyDiapers.length}x heute
                </span>
              </div>
              <div class="font-extrabold text-xs text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">+ Stuhl</div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${formatTimeAgo(lastDirty)}</div>
            </button>
            <div class="flex items-center gap-1 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/60">
              <button onclick="window.logQuickActionWithOffset('dirty', 15)" class="text-[9px] font-bold text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 15 Min gewickelt">+15m</button>
              <button onclick="window.logQuickActionWithOffset('dirty', 30)" class="text-[9px] font-bold text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 30 Min gewickelt">+30m</button>
            </div>
          </div>

          <!-- 4. Schlaf (Dynamischer 2-Phasen Zustand: Schläft vs. Wach) -->
          ${state.isSleeping ? `
            <div class="p-3 rounded-2xl bg-indigo-50/90 dark:bg-indigo-950/70 border-2 border-indigo-400 dark:border-indigo-600 hover:border-indigo-500 transition-all flex flex-col justify-between shadow-xs">
              <button onclick="window.logBabyWokeUp(0)" class="w-full text-left cursor-pointer group active:scale-95 transition-transform">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xl">💤</span>
                  <span id="quick-tile-sleep-badge" class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-600 text-white animate-pulse">
                    Schläft ${wakeStatus.sleepDurationMin || 0}m
                  </span>
                </div>
                <div class="font-extrabold text-xs text-indigo-950 dark:text-white group-hover:text-amber-500 transition-colors flex items-center gap-1">
                  <span>☀️ Aufgewacht!</span>
                </div>
                <div id="quick-tile-sleep-subtext" class="text-[10px] text-indigo-700 dark:text-indigo-300 mt-0.5">Seit ${wakeStatus.sleepStartTimeStr || ''} Uhr</div>
              </button>
              <div class="flex items-center gap-1 mt-2 pt-1.5 border-t border-indigo-200 dark:border-indigo-800">
                <button onclick="window.logBabyWokeUp(5)" class="text-[9px] font-bold text-indigo-800 hover:text-indigo-950 dark:text-indigo-200 dark:hover:text-white px-1 py-0.5 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors cursor-pointer" title="Vor 5 Min aufgewacht">+5m</button>
                <button onclick="window.logBabyWokeUp(15)" class="text-[9px] font-bold text-indigo-800 hover:text-indigo-950 dark:text-indigo-200 dark:hover:text-white px-1 py-0.5 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors cursor-pointer" title="Vor 15 Min aufgewacht">+15m</button>
                <button onclick="window.logBabyWokeUp(30)" class="text-[9px] font-bold text-indigo-800 hover:text-indigo-950 dark:text-indigo-200 dark:hover:text-white px-1 py-0.5 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors cursor-pointer" title="Vor 30 Min aufgewacht">+30m</button>
              </div>
            </div>
          ` : `
            <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 transition-all flex flex-col justify-between shadow-xs">
              <button onclick="window.logBabyPutToBed(0)" class="w-full text-left cursor-pointer group active:scale-95 transition-transform">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-xl">😴</span>
                  <span id="quick-tile-sleep-badge" class="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    wakeStatus.status === 'sweetspot' ? 'bg-orange-100 dark:bg-orange-950/70 text-orange-800 dark:text-orange-300 border border-orange-300' :
                    wakeStatus.status === 'overtired' ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border border-rose-300 animate-pulse' :
                    wakeStatus.status === 'closing' ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-300' :
                    'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                  }">
                    ${wakeStatus.hasData ? (wakeStatus.remainingMin > 0 ? `Noch ${wakeStatus.remainingMin}m` : `SweetSpot!`) : 'Starten'}
                  </span>
                </div>
                <div class="font-extrabold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">😴 Schlafen gelegt</div>
                <div id="quick-tile-sleep-subtext" class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">${wakeStatus.hasData ? `Wach seit ${formatMinutesCountdown(wakeStatus.elapsedMin)}` : formatTimeAgo(lastSleep)}</div>
              </button>
              <div class="flex items-center gap-1 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="window.logBabyPutToBed(15)" class="text-[9px] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 15 Min schlafen gelegt">+15m</button>
                <button onclick="window.logBabyPutToBed(30)" class="text-[9px] font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 px-1 py-0.5 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Vor 30 Min schlafen gelegt">+30m</button>
              </div>
            </div>
          `}
        </div>

        <!-- Realtime Predictive Bio-Rhythmus Panels (Sleep SweetSpot + Hunger Countdown) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          
          <!-- Panel 1: Schlafen & Wachfenster-SweetSpot (Dynamisch Schläft vs. Wach) -->
          ${state.isSleeping ? `
            <div class="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border-2 border-indigo-400 dark:border-indigo-500/80 ring-2 ring-indigo-300/30 shadow-xs space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">💤</span>
                  <div>
                    <h4 class="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">Schlafphase aktiv (Schläft gerade)</h4>
                    <span class="text-[10px] text-indigo-700 dark:text-indigo-300">Schlafzyklus ca. 45 Min • Eingeschlafen: ${wakeStatus.sleepStartTimeStr} Uhr</span>
                  </div>
                </div>
                <span id="tracker-sleep-badge" class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-600 text-white shadow-xs flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                  ${wakeStatus.badge}
                </span>
              </div>

              <div class="space-y-1">
                <div class="flex items-baseline justify-between">
                  <div id="tracker-sleep-countdown" class="text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400">
                    ${wakeStatus.countdown}
                  </div>
                  <div id="tracker-sleep-subtext" class="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    Nächster SweetSpot nach Aufwachen ca. ${wakeStatus.targetTimeStr} Uhr
                  </div>
                </div>
                <div class="w-full bg-indigo-200 dark:bg-indigo-900/60 rounded-full h-2.5 overflow-hidden">
                  <div id="tracker-sleep-progress" class="h-full rounded-full transition-all duration-500 bg-indigo-600" style="width: ${wakeStatus.percent}%;"></div>
                </div>
              </div>

              <p id="tracker-sleep-advice" class="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                ${wakeStatus.advice}
              </p>

              <div class="flex items-center gap-1.5 pt-1 flex-wrap">
                <button onclick="window.logBabyWokeUp(0)" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg font-black text-xs transition-all cursor-pointer shadow-xs flex items-center gap-1">
                  ☀️ Baby ist JETZT aufgewacht!
                </button>
                <button onclick="window.logBabyWokeUp(5)" class="px-2 py-1 bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] border border-amber-300 dark:border-amber-700 transition-all cursor-pointer">
                  Vor 5 Min
                </button>
                <button onclick="window.logBabyWokeUp(15)" class="px-2 py-1 bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] border border-amber-300 dark:border-amber-700 transition-all cursor-pointer">
                  Vor 15 Min
                </button>
                <button onclick="window.cancelCurrentSleep()" class="px-2 py-1 bg-transparent hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-500 hover:text-rose-600 dark:text-slate-400 rounded-lg font-semibold text-[10px] transition-all cursor-pointer ml-auto" title="Schläfchen abbrechen (Fehlklick)">
                  ↩️ Abbrechen
                </button>
              </div>
            </div>
          ` : `
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border ${
              wakeStatus.status === 'closing' ? 'border-amber-400 dark:border-amber-500/80 ring-2 ring-amber-300/40' :
              wakeStatus.status === 'sweetspot' ? 'border-orange-400 dark:border-orange-500/80 ring-2 ring-orange-300/40' :
              wakeStatus.status === 'overtired' ? 'border-rose-400 dark:border-rose-500/80 ring-2 ring-rose-300/40' :
              'border-slate-200 dark:border-slate-700'
            } shadow-xs space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-xl">😴</span>
                  <div>
                    <h4 class="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">Wachfenster & Schlaf-SweetSpot</h4>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400">Norm für ${ageDisplay}: ${norms.wakeLabel}${wakeStatus.lastNapDuration ? ` • Vorheriges Nickerchen: ${wakeStatus.lastNapDuration}m` : ''}</span>
                  </div>
                </div>
                <span id="tracker-sleep-badge" class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  wakeStatus.status === 'active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' :
                  wakeStatus.status === 'closing' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-700 animate-pulse' :
                  wakeStatus.status === 'sweetspot' ? 'bg-orange-100 text-orange-900 dark:bg-orange-950/70 dark:text-orange-300 border border-orange-300 dark:border-orange-700 font-black' :
                  wakeStatus.status === 'overtired' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300 dark:border-rose-700 animate-pulse' :
                  'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                }">
                  ${wakeStatus.badge}
                </span>
              </div>

              <div class="space-y-1">
                <div class="flex items-baseline justify-between">
                  <div id="tracker-sleep-countdown" class="text-base sm:text-lg font-black ${
                    wakeStatus.status === 'overtired' ? 'text-rose-600 dark:text-rose-400' :
                    wakeStatus.status === 'sweetspot' ? 'text-orange-600 dark:text-orange-400' :
                    wakeStatus.status === 'closing' ? 'text-amber-600 dark:text-amber-400' :
                    'text-emerald-600 dark:text-emerald-400'
                  }">
                    ${wakeStatus.countdown}
                  </div>
                  <div id="tracker-sleep-subtext" class="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                    ${wakeStatus.targetTimeStr !== '--' ? `Schläfchen ca. ${wakeStatus.targetTimeStr} Uhr` : 'Kein Schläfchen erfasst'}
                  </div>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                  <div id="tracker-sleep-progress" class="h-full rounded-full transition-all duration-500 ${
                    wakeStatus.status === 'overtired' ? 'bg-rose-500' :
                    wakeStatus.status === 'sweetspot' ? 'bg-orange-500' :
                    wakeStatus.status === 'closing' ? 'bg-amber-500' :
                    'bg-emerald-500'
                  }" style="width: ${wakeStatus.percent}%;"></div>
                </div>
              </div>

              <p id="tracker-sleep-advice" class="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                ${wakeStatus.advice}
              </p>

              <div class="flex items-center gap-1.5 pt-1 flex-wrap">
                <button onclick="window.logBabyPutToBed(0)" class="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-[10px] transition-all cursor-pointer shadow-xs">
                  😴 Jetzt schlafen gelegt
                </button>
                <button onclick="window.logBabyPutToBed(15)" class="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] transition-all cursor-pointer">
                  Vor 15 Min
                </button>
                <button onclick="window.logBabyPutToBed(30)" class="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] transition-all cursor-pointer">
                  Vor 30 Min
                </button>
                <button onclick="window.logBabyWokeUp(0)" class="px-2 py-1 bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-slate-700 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-700 rounded-lg font-bold text-[10px] transition-all cursor-pointer ml-auto" title="Aufwachzeit neu setzen">
                  ☀️ Aufgewacht
                </button>
              </div>
            </div>
          `}

          <!-- Panel 2: Trinken & Hunger-Countdown -->
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border ${
            feedStatus.status === 'hungry_soon' ? 'border-amber-400 dark:border-amber-500/80 ring-2 ring-amber-300/40' :
            feedStatus.status === 'due' ? 'border-rose-400 dark:border-rose-500/80 ring-2 ring-rose-300/40' :
            'border-slate-200 dark:border-slate-700'
          } shadow-xs space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xl">🍼</span>
                <div>
                  <h4 class="font-extrabold text-xs text-slate-900 dark:text-white leading-tight">Mahlzeit & Hunger-Countdown</h4>
                  <span class="text-[10px] text-slate-500 dark:text-slate-400">Norm für ${ageDisplay}: ${norms.feedLabel}</span>
                </div>
              </div>
              <span id="tracker-feed-badge" class="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                feedStatus.status === 'satisfied' ? 'bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border border-sky-200 dark:border-sky-800' :
                feedStatus.status === 'hungry_soon' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-700 animate-pulse' :
                feedStatus.status === 'due' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300 dark:border-rose-700 animate-pulse' :
                'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
              }">
                ${feedStatus.badge}
              </span>
            </div>

            <div class="space-y-1">
              <div class="flex items-baseline justify-between">
                <div id="tracker-feed-countdown" class="text-base sm:text-lg font-black ${
                  feedStatus.status === 'due' ? 'text-rose-600 dark:text-rose-400' :
                  feedStatus.status === 'hungry_soon' ? 'text-amber-600 dark:text-amber-400' :
                  'text-sky-600 dark:text-sky-400'
                }">
                  ${feedStatus.countdown}
                </div>
                <div id="tracker-feed-subtext" class="text-[11px] font-bold text-slate-600 dark:text-slate-300">
                  ${feedStatus.targetTimeStr !== '--' ? `Mahlzeit ca. ${feedStatus.targetTimeStr} Uhr` : 'Keine Mahlzeit erfasst'}
                </div>
              </div>
              <div class="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                <div id="tracker-feed-progress" class="h-full rounded-full transition-all duration-500 ${
                  feedStatus.status === 'due' ? 'bg-rose-500' :
                  feedStatus.status === 'hungry_soon' ? 'bg-amber-500' :
                  'bg-sky-500'
                }" style="width: ${feedStatus.percent}%;"></div>
              </div>
            </div>

            <p id="tracker-feed-advice" class="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
              ${feedStatus.advice}
            </p>

            <div class="flex items-center gap-1.5 pt-1">
              <button onclick="window.logQuickAction('feed')" class="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-bold text-[10px] transition-all cursor-pointer shadow-xs">
                🍼 Jetzt gefüttert
              </button>
              <button onclick="window.logQuickActionWithOffset('feed', 15)" class="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] transition-all cursor-pointer">
                Vor 15 Min
              </button>
              <button onclick="window.logQuickActionWithOffset('feed', 30)" class="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-bold text-[10px] transition-all cursor-pointer">
                Vor 30 Min
              </button>
            </div>
          </div>
        </div>

        <!-- Hydration & Daily Summary -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl text-xs border border-slate-200/80 dark:border-slate-700/80">
          <div class="flex items-center gap-2 sm:gap-3 text-slate-700 dark:text-slate-300 font-bold flex-wrap">
            <span>🍼 ${data.feeds.length}x getrunken</span>
            <span>•</span>
            <span>💧 ${data.wetDiapers.length}x nass</span>
            <span>•</span>
            <span>💩 ${data.dirtyDiapers.length}x Stuhl</span>
            <span>•</span>
            <span>😴 ${sleepCount}x geschlafen${sleepTimeDisplay}</span>
          </div>
          <div class="text-[11px] font-bold ${isWellHydrated ? 'text-emerald-700 dark:text-emerald-300' : 'text-amber-700 dark:text-amber-300'}">
            ${isWellHydrated ? '✅ Optimale Hydrierung (mind. 4–6 nasse Windeln/24h)' : '💧 Hydrierungs-Check: Ziel mind. 4–6 nasse Windeln'}
          </div>
        </div>

      </div>
    `;
  }

  // Lightweight Live Countdown Ticker (Smooth updates without rebuilding the DOM)
  function updateLiveTrackerCountdowns() {
    const sleepEl = document.getElementById('tracker-sleep-countdown');
    if (!sleepEl) return;

    const data = getTodayQuickLogs();
    const lastFeed = data.feeds.length > 0 ? data.feeds[data.feeds.length - 1] : null;
    const lastSleep = state.lastWakeTime || (data.sleeps.length > 0 ? data.sleeps[data.sleeps.length - 1] : (state.wakeStartTime > 0 ? state.wakeStartTime : null));

    const norms = getBabyRhythmNorms(state.babyProfile.birthDate);
    const wakeStatus = calculateWakeWindowStatus(lastSleep, norms);
    const feedStatus = calculateFeedStatus(lastFeed, norms);

    // Update Sleep Panel
    const sleepCountdownEl = document.getElementById('tracker-sleep-countdown');
    const sleepSubtextEl = document.getElementById('tracker-sleep-subtext');
    const sleepBadgeEl = document.getElementById('tracker-sleep-badge');
    const sleepBarEl = document.getElementById('tracker-sleep-progress');
    const sleepAdviceEl = document.getElementById('tracker-sleep-advice');

    if (sleepCountdownEl) sleepCountdownEl.textContent = wakeStatus.countdown;
    if (sleepSubtextEl) {
      if (state.isSleeping) {
        sleepSubtextEl.textContent = `Nächster SweetSpot nach Aufwachen ca. ${wakeStatus.targetTimeStr} Uhr`;
      } else {
        sleepSubtextEl.textContent = wakeStatus.targetTimeStr !== '--' ? `Schläfchen ca. ${wakeStatus.targetTimeStr} Uhr` : 'Kein Schläfchen erfasst';
      }
    }
    if (sleepBadgeEl) sleepBadgeEl.textContent = wakeStatus.badge;
    if (sleepBarEl) sleepBarEl.style.width = `${wakeStatus.percent}%`;
    if (sleepAdviceEl) sleepAdviceEl.textContent = wakeStatus.advice;

    // Update Sleep Quick Action Tile Badges & Subtexts
    const quickTileSleepBadge = document.getElementById('quick-tile-sleep-badge');
    const quickTileSleepSubtext = document.getElementById('quick-tile-sleep-subtext');
    if (quickTileSleepBadge) {
      if (state.isSleeping) {
        quickTileSleepBadge.textContent = `Schläft ${wakeStatus.sleepDurationMin || 0}m`;
      } else {
        quickTileSleepBadge.textContent = wakeStatus.hasData ? (wakeStatus.remainingMin > 0 ? `Noch ${wakeStatus.remainingMin}m` : 'SweetSpot!') : 'Starten';
      }
    }
    if (quickTileSleepSubtext) {
      if (state.isSleeping) {
        quickTileSleepSubtext.textContent = `Seit ${wakeStatus.sleepStartTimeStr || ''} Uhr`;
      } else {
        quickTileSleepSubtext.textContent = wakeStatus.hasData ? `Wach seit ${formatMinutesCountdown(wakeStatus.elapsedMin)}` : formatTimeAgo(lastSleep);
      }
    }

    // Update Feed Panel
    const feedCountdownEl = document.getElementById('tracker-feed-countdown');
    const feedSubtextEl = document.getElementById('tracker-feed-subtext');
    const feedBadgeEl = document.getElementById('tracker-feed-badge');
    const feedBarEl = document.getElementById('tracker-feed-progress');
    const feedAdviceEl = document.getElementById('tracker-feed-advice');

    if (feedCountdownEl) feedCountdownEl.textContent = feedStatus.countdown;
    if (feedSubtextEl && feedStatus.targetTimeStr !== '--') feedSubtextEl.textContent = `Mahlzeit ca. ${feedStatus.targetTimeStr} Uhr`;
    if (feedBadgeEl) feedBadgeEl.textContent = feedStatus.badge;
    if (feedBarEl) feedBarEl.style.width = `${feedStatus.percent}%`;
    if (feedAdviceEl) feedAdviceEl.textContent = feedStatus.advice;
  }

  function resetTodayQuickLogs() {
    if (confirm('Möchtest du das heutige Tagesprotokoll wirklich zurücksetzen?')) {
      saveTodayQuickLogs({
        feeds: [],
        wetDiapers: [],
        dirtyDiapers: [],
        sleeps: [],
        sleepSessions: [],
        currentSleep: null,
        lastWakeTime: null
      });
      state.isSleeping = false;
      state.currentSleepStart = 0;
      state.lastWakeTime = 0;
      state.wakeStartTime = 0;
      state.lastNapDuration = 0;
      localStorage.removeItem('babyguide_is_sleeping');
      localStorage.removeItem('babyguide_current_sleep_start');
      localStorage.removeItem('babyguide_last_wake_time');
      localStorage.removeItem('babyguide_wake_start');
      localStorage.removeItem('babyguide_last_nap_duration');
      renderQuickLogCard();
      if (state.activeTab === 'tools') renderTools();
    }
  }

  // ==========================================
  // TRACKER ADJUSTMENT MODAL (CUSTOM WAKE & FEED INTERVALS)
  // ==========================================
  function openTrackerAdjustmentModal() {
    state.isTrackerAdjustModalOpen = true;
    const modal = document.getElementById('tracker-adjust-modal');
    if (modal) modal.classList.remove('hidden');
    renderTrackerAdjustmentModal();
  }

  function closeTrackerAdjustmentModal() {
    state.isTrackerAdjustModalOpen = false;
    const modal = document.getElementById('tracker-adjust-modal');
    if (modal) modal.classList.add('hidden');
  }

  function renderTrackerAdjustmentModal() {
    const container = document.getElementById('tracker-adjust-modal-body');
    if (!container) return;

    const norms = getBabyRhythmNorms(state.babyProfile.birthDate);
    const currentWake = state.customWakeWindowMin || 0;
    const currentFeed = state.customFeedIntervalMin || 0;

    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl flex items-center gap-2.5">
          <span class="text-2xl">🌱</span>
          <div>
            <strong class="text-slate-900 dark:text-white font-bold block">${state.babyProfile.name || 'Dein Baby'}: ${norms.stageTitle}</strong>
            <span class="text-slate-500 dark:text-slate-400 text-[11px]">Pädiatrische Norm: Wachfenster ca. ${norms.wakeMin} Min, Mahlzeit alle ${Math.round(norms.feedMin/60)} Std</span>
          </div>
        </div>

        <div>
          <label class="block font-bold text-slate-800 dark:text-slate-200 mb-1">Wachfenster (Schlaf-Intervall):</label>
          <select id="adj-wake-min" class="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs">
            <option value="0" ${currentWake === 0 ? 'selected' : ''}>✨ Automatisch nach Alter (${norms.wakeMin} Min - Empfohlen)</option>
            <option value="45" ${currentWake === 45 ? 'selected' : ''}>45 Minuten (Frühes Neugeborenes)</option>
            <option value="60" ${currentWake === 60 ? 'selected' : ''}>60 Minuten (1 Stunde)</option>
            <option value="75" ${currentWake === 75 ? 'selected' : ''}>75 Minuten (1¼ Stunden)</option>
            <option value="90" ${currentWake === 90 ? 'selected' : ''}>90 Minuten (1,5 Stunden)</option>
            <option value="105" ${currentWake === 105 ? 'selected' : ''}>105 Minuten (1¾ Stunden)</option>
            <option value="120" ${currentWake === 120 ? 'selected' : ''}>120 Minuten (2,0 Stunden)</option>
            <option value="135" ${currentWake === 135 ? 'selected' : ''}>135 Minuten (2¼ Stunden)</option>
            <option value="150" ${currentWake === 150 ? 'selected' : ''}>150 Minuten (2,5 Stunden)</option>
            <option value="180" ${currentWake === 180 ? 'selected' : ''}>180 Minuten (3,0 Stunden)</option>
            <option value="210" ${currentWake === 210 ? 'selected' : ''}>210 Minuten (3,5 Stunden)</option>
            <option value="240" ${currentWake === 240 ? 'selected' : ''}>240 Minuten (4,0 Stunden)</option>
          </select>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1 block">Wähle „Automatisch“, um den SweetSpot exakt an das Alter anzupassen.</span>
        </div>

        <div>
          <label class="block font-bold text-slate-800 dark:text-slate-200 mb-1">Trinkintervall (Mahlzeiten-Abstand):</label>
          <select id="adj-feed-min" class="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs">
            <option value="0" ${currentFeed === 0 ? 'selected' : ''}>✨ Automatisch nach Alter (${Math.round(norms.feedMin/60)} Std - Empfohlen)</option>
            <option value="120" ${currentFeed === 120 ? 'selected' : ''}>Alle 2 Stunden (120 Min)</option>
            <option value="150" ${currentFeed === 150 ? 'selected' : ''}>Alle 2,5 Stunden (150 Min)</option>
            <option value="180" ${currentFeed === 180 ? 'selected' : ''}>Alle 3 Stunden (180 Min)</option>
            <option value="210" ${currentFeed === 210 ? 'selected' : ''}>Alle 3,5 Stunden (210 Min)</option>
            <option value="240" ${currentFeed === 240 ? 'selected' : ''}>Alle 4 Stunden (240 Min)</option>
          </select>
        </div>

        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-[11px] text-amber-900 dark:text-amber-200">
          💡 <strong>Tipp von Schlaf- und Stillberatern:</strong> Jedes Baby ist einzigartig. Bei Wachstumsschüben („Clusterfeeding“) können Trinkabstände kürzer sein. Die App dient als verlässlicher Richtwert, um Übermüdung und Schreiphasen frühzeitig abzufangen.
        </div>
      </div>
    `;
  }

  function saveTrackerAdjustment() {
    const wakeVal = parseInt(document.getElementById('adj-wake-min')?.value || '0', 10);
    const feedVal = parseInt(document.getElementById('adj-feed-min')?.value || '0', 10);

    state.customWakeWindowMin = wakeVal > 0 ? wakeVal : null;
    state.customFeedIntervalMin = feedVal > 0 ? feedVal : null;

    if (state.customWakeWindowMin) {
      localStorage.setItem('babyguide_custom_wake_window', state.customWakeWindowMin.toString());
    } else {
      localStorage.removeItem('babyguide_custom_wake_window');
    }

    if (state.customFeedIntervalMin) {
      localStorage.setItem('babyguide_custom_feed_interval', state.customFeedIntervalMin.toString());
    } else {
      localStorage.removeItem('babyguide_custom_feed_interval');
    }

    closeTrackerAdjustmentModal();
    renderQuickLogCard();
  }

  function resetTrackerAdjustmentToDefault() {
    state.customWakeWindowMin = null;
    state.customFeedIntervalMin = null;
    localStorage.removeItem('babyguide_custom_wake_window');
    localStorage.removeItem('babyguide_custom_feed_interval');
    closeTrackerAdjustmentModal();
    renderQuickLogCard();
  }

  // ==========================================
  // MOBILE DOCK CONTROLLER
  // ==========================================
  function updateMobileDock(tabName) {
    document.querySelectorAll('.mobile-dock-btn').forEach(btn => {
      const target = btn.getAttribute('data-dock-tab');
      if (target === tabName) {
        btn.classList.add('active', 'text-sky-600', 'dark:text-sky-400');
        btn.classList.remove('text-slate-500', 'dark:text-slate-400');
      } else if (target) {
        btn.classList.remove('active', 'text-sky-600', 'dark:text-sky-400');
        btn.classList.add('text-slate-500', 'dark:text-slate-400');
      }
    });
  }

  function printEmergencyPass() {
    window.print();
  }

  function updateBookmarksBadge() {
    const badge = document.getElementById('bookmarks-count-badge');
    if (badge) {
      badge.textContent = state.bookmarks.length;
    }
  }

  function openBookmarksModal() {
    state.isBookmarksModalOpen = true;
    const modal = document.getElementById('bookmarks-modal');
    if (modal) modal.classList.remove('hidden');
    renderBookmarksModalBody();
  }

  function closeBookmarksModal() {
    state.isBookmarksModalOpen = false;
    const modal = document.getElementById('bookmarks-modal');
    if (modal) modal.classList.add('hidden');
  }

  function renderBookmarksModalBody() {
    const body = document.getElementById('bookmarks-modal-body');
    if (!body) return;

    if (state.bookmarks.length === 0) {
      body.innerHTML = `
        <div class="text-center py-10 px-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div class="text-4xl mb-3">⭐</div>
          <h4 class="text-lg font-bold text-slate-800">Deine Merkliste ist noch leer</h4>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            Klicke in einem beliebigen Artikel oder Notfallplan oben rechts auf <strong>„⭐ Merken“</strong>, um wichtige Leitfäden für schnellen Zugriff zu speichern.
          </p>
        </div>
      `;
      return;
    }

    body.innerHTML = `
      <div class="space-y-3">
        ${state.bookmarks.map(item => `
          <div class="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3 hover:border-slate-300 transition-all">
            <div class="cursor-pointer flex-1" onclick="window.navigateTo('${item.type}', '${item.id}'); window.closeBookmarksModal();">
              <span class="text-[10px] font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                ${item.typeLabel || item.type}
              </span>
              <h5 class="font-bold text-slate-900 text-sm mt-1 hover:text-sky-600 transition-colors">${item.title}</h5>
              <p class="text-xs text-slate-500 truncate max-w-md">${item.summary || ''}</p>
            </div>
            <button onclick="window.removeBookmark('${item.type}', '${item.id}')" class="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors flex-shrink-0 cursor-pointer" title="Aus Merkliste entfernen">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  function toggleCurrentBookmark() {
    if (state.currentView !== 'detail' || !state.detailData) return;
    const { type, data } = state.detailData;
    const id = data.id || data.month;
    const existingIdx = state.bookmarks.findIndex(b => b.type === type && String(b.id) === String(id));

    let typeLabel = 'Leitfaden';
    if (type === 'rule') typeLabel = 'Kardinalregel';
    if (type === 'lesson') typeLabel = 'Lerneinheit';
    if (type === 'month') typeLabel = 'Entwicklungsmonat';
    if (type === 'emergency') typeLabel = 'Erste-Hilfe';
    if (type === 'illness') typeLabel = 'Krankheit';
    if (type === 'dodont') typeLabel = 'Do & Don’t';

    if (existingIdx >= 0) {
      state.bookmarks.splice(existingIdx, 1);
    } else {
      state.bookmarks.push({
        type,
        id,
        title: data.title || `Monat ${data.month}`,
        summary: data.shortSummary || data.summary || '',
        typeLabel,
        savedAt: new Date().toISOString()
      });
    }

    localStorage.setItem('babyguide_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarksBadge();
    renderDetailViewContent(type, data);
  }

  function removeBookmark(type, id) {
    state.bookmarks = state.bookmarks.filter(b => !(b.type === type && String(b.id) === String(id)));
    localStorage.setItem('babyguide_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarksBadge();
    renderBookmarksModalBody();
    if (state.currentView === 'detail' && state.detailData) {
      renderDetailViewContent(state.detailData.type, state.detailData.data);
    }
  }

  function clearAllBookmarks() {
    if (confirm("Möchtest du wirklich alle gemerkten Lesezeichen löschen?")) {
      state.bookmarks = [];
      localStorage.removeItem('babyguide_bookmarks');
      updateBookmarksBadge();
      renderBookmarksModalBody();
      if (state.currentView === 'detail' && state.detailData) {
        renderDetailViewContent(state.detailData.type, state.detailData.data);
      }
    }
  }

  // Event Listeners setup
  function setupEventListeners() {
    document.querySelectorAll('[data-tab-target]').forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-tab-target');
        navigateTo('tab', target);
      });
    });

    document.querySelectorAll('.open-emergency-btn').forEach(btn => {
      btn.addEventListener('click', () => toggleEmergencyModal(true));
    });

    document.getElementById('close-emergency-modal')?.addEventListener('click', () => {
      toggleEmergencyModal(false);
    });

    const searchInput = document.getElementById('global-search-input');
    const searchInputMobile = document.getElementById('global-search-input-mobile');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim().toLowerCase();
        if (searchInputMobile) searchInputMobile.value = state.searchTerm;
        renderSearchResultsOrActiveTab();
      });
    }

    if (searchInputMobile) {
      searchInputMobile.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.trim().toLowerCase();
        if (searchInput) searchInput.value = state.searchTerm;
        renderSearchResultsOrActiveTab();
      });
    }

    document.getElementById('clear-search-btn')?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchInputMobile) searchInputMobile.value = '';
      state.searchTerm = '';
      renderSearchResultsOrActiveTab();
    });

    document.getElementById('bookmarks-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'bookmarks-modal') closeBookmarksModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (state.isEmergencyModalOpen) toggleEmergencyModal(false);
        if (state.isBookmarksModalOpen) closeBookmarksModal();
      }
    });

    window.addEventListener('hashchange', () => {
      handleHashNavigation();
    });

    window.addEventListener('scroll', () => {
      const btn = document.getElementById('back-to-top-btn');
      if (!btn) return;
      if (window.scrollY > 350) {
        btn.classList.remove('hidden');
      } else {
        btn.classList.add('hidden');
      }
    });
  }

  // Expose global window API
  window.filterToolsCategory = filterToolsCategory;
  window.setWakeTimerAge = setWakeTimerAge;
  window.setWakeTimeNow = setWakeTimeNow;
  window.setWakeTimeAgo = setWakeTimeAgo;
  window.resetWakeTimer = resetWakeTimer;
  window.toggleAmbientSound = toggleAmbientSound;
  window.setAmbientVolume = setAmbientVolume;
  window.setAmbientTimer = setAmbientTimer;
  window.toggleCprMetronome = toggleCprMetronome;
  window.setMedType = setMedType;
  window.setMedWeight = setMedWeight;
  window.recordMedDoseNow = recordMedDoseNow;
  window.clearMedDoseRecord = clearMedDoseRecord;
  window.updateBabyBirthDate = updateBabyBirthDate;
  window.toggleApptDone = toggleApptDone;
  window.answerTriageQuestion = answerTriageQuestion;
  window.resetTriage = resetTriage;
  window.selectJump = selectJump;
  window.updateGrowthField = updateGrowthField;
  window.filterBeikostCategory = filterBeikostCategory;
  window.cycleBeikostStatus = cycleBeikostStatus;
  window.updateBeikostNote = updateBeikostNote;
  window.addCustomBeikostFood = addCustomBeikostFood;
  window.copySyncCode = copySyncCode;
  window.importSyncCode = importSyncCode;
  window.navigateTo = navigateTo;
  window.openDetailView = openDetailView;
  window.toggleEmergencyModal = toggleEmergencyModal;
  window.filterModules = function(modId) {
    state.activeModuleFilter = modId;
    renderLessons();
  };
  window.toggleLessonComplete = function(lessonId) {
    if (state.completedLessons.has(lessonId)) {
      state.completedLessons.delete(lessonId);
    } else {
      state.completedLessons.add(lessonId);
    }
    localStorage.setItem('babyguide_completed_lessons', JSON.stringify([...state.completedLessons]));
    updateProgressStats();
    renderLessons();
  };
  window.filterDoDont = function(cat) {
    state.activeDoDontCategory = cat;
    renderDosAndDonts();
  };
  window.selectWakeAge = function(ageId) {
    state.wakeAge = ageId;
    renderTools();
  };
  window.playDunstanDemo = function(soundType) {
    activateAudioContext((audioCtx) => {
      if (!audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (soundType.includes('NEH')) {
          osc.frequency.setValueAtTime(380, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(460, audioCtx.currentTime + 0.3);
        } else if (soundType.includes('OWH')) {
          osc.frequency.setValueAtTime(420, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(280, audioCtx.currentTime + 0.4);
        } else if (soundType.includes('HEH')) {
          osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        } else if (soundType.includes('EAIRH')) {
          osc.frequency.setValueAtTime(220, audioCtx.currentTime);
          osc.frequency.linearRampToValueAtTime(180, audioCtx.currentTime + 0.5);
        } else {
          osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        }

        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
      } catch (e) {
        console.warn("Audio Context error", e);
      }
    });
  };
  window.selectQuizAnswer = function(qIdx, optIdx) {
    state.quizAnswers[qIdx] = optIdx;
    renderQuiz();
  };
  window.submitQuiz = function() {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (state.quizAnswers[idx] === q.correct) score++;
    });
    state.quizScore = score;
    state.quizSubmitted = true;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.resetQuiz = function() {
    state.quizAnswers = {};
    state.quizSubmitted = false;
    state.quizScore = 0;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.toggleChecklistItem = function(itemText) {
    if (state.checkedChecklistItems.has(itemText)) {
      state.checkedChecklistItems.delete(itemText);
    } else {
      state.checkedChecklistItems.add(itemText);
    }
    localStorage.setItem('babyguide_checklist_items', JSON.stringify([...state.checkedChecklistItems]));
    renderChecklists();
  };
  window.resetChecklists = function() {
    if (confirm("Möchtest du wirklich alle Checklisten-Häkchen zurücksetzen?")) {
      state.checkedChecklistItems.clear();
      localStorage.removeItem('babyguide_checklist_items');
      renderChecklists();
    }
  };
  window.clearSearch = function() {
    state.searchTerm = '';
    const input = document.getElementById('global-search-input');
    const inputMob = document.getElementById('global-search-input-mobile');
    if (input) input.value = '';
    if (inputMob) inputMob.value = '';
    renderSearchResultsOrActiveTab();
  };
  
  // ==========================================
  // WINDOW EXPORTS
  // ==========================================
  window.selectAgeStage = selectAgeStage;
  window.selectStoolColor = selectStoolColor;
  window.selectTeethGroup = selectTeethGroup;
  window.updateBabysitterField = updateBabysitterField;
  window.printBabysitterSheet = printBabysitterSheet;

  window.selectHomeSection = selectHomeSection;
  window.openTool = openTool;
  window.closeFocusedTool = closeFocusedTool;
  window.showAllTools = showAllTools;
  window.filterToolsCategory = filterToolsCategory;

  window.openModule = openModule;
  window.closeFocusedModule = closeFocusedModule;
  window.showAllModules = showAllModules;
  window.filterModules = filterModules;

  window.applyTheme = applyTheme;
  window.cycleTheme = cycleTheme;
  window.applyDarkMode = applyDarkMode;
  window.toggleDarkMode = toggleDarkMode;
  window.applyAccent = applyAccent;
  window.applyFontSize = applyFontSize;
  window.openSettingsModal = openSettingsModal;
  window.closeSettingsModal = closeSettingsModal;
  window.resetSettingsToDefault = resetSettingsToDefault;
  window.renderSettingsModal = renderSettingsModal;

  window.openBookmarksModal = openBookmarksModal;
  window.closeBookmarksModal = closeBookmarksModal;
  window.toggleCurrentBookmark = toggleCurrentBookmark;
  window.removeBookmark = removeBookmark;
  window.clearAllBookmarks = clearAllBookmarks;

  // Baby Profile & Quick Logs & Audio Bar
  window.openBabyProfileModal = openBabyProfileModal;
  window.closeBabyProfileModal = closeBabyProfileModal;
  window.saveBabyProfileFromModal = saveBabyProfileFromModal;
  window.resetBabyProfile = resetBabyProfile;

  window.logQuickAction = logQuickAction;
  window.logQuickActionWithOffset = logQuickActionWithOffset;
  window.logBabyPutToBed = logBabyPutToBed;
  window.logBabyWokeUp = logBabyWokeUp;
  window.cancelCurrentSleep = cancelCurrentSleep;
  window.resetTodayQuickLogs = resetTodayQuickLogs;
  window.renderQuickLogCard = renderQuickLogCard;
  window.updateLiveTrackerCountdowns = updateLiveTrackerCountdowns;
  window.openTrackerAdjustmentModal = openTrackerAdjustmentModal;
  window.closeTrackerAdjustmentModal = closeTrackerAdjustmentModal;
  window.saveTrackerAdjustment = saveTrackerAdjustment;
  window.resetTrackerAdjustmentToDefault = resetTrackerAdjustmentToDefault;

  window.updateFloatingAudioBar = updateFloatingAudioBar;
  window.openSoundToolDirectly = openSoundToolDirectly;
  window.stopAudioCompletely = stopAudioCompletely;
  window.toggleAudioPlayPause = toggleAudioPlayPause;

  window.updateMobileDock = updateMobileDock;
  window.printEmergencyPass = printEmergencyPass;

  // Run on DOM load or immediate if already loaded
  function init() {
    applyTheme(state.themeMode);
    applyAccent(state.accentColor);
    applyFontSize(state.fontSize);
    selectHomeSection(state.homeActiveSection);
    updateBookmarksBadge();
    updateBabyProfileChip();
    updateFloatingAudioBar();
    updateMobileDock(state.activeTab);

    // Sync age details on init
    const age = getBabyAgeDetails(state.babyProfile.birthDate);
    if (age) {
      state.wakeAge = age.defaultWakeCategory;
      state.selectedAgeStage = age.defaultStage;
      state.growthMonth = age.months;
      state.growthGender = state.babyProfile.gender === 'girl' ? 'girls' : 'boys';
      state.growthWeight = state.babyProfile.weight;
      state.medWeight = state.babyProfile.weight;
    }

    // Sync & restore sleep state
    const storedSleeping = localStorage.getItem('babyguide_is_sleeping') === 'true';
    const storedSleepStart = parseInt(localStorage.getItem('babyguide_current_sleep_start') || '0', 10);
    const storedLastWake = parseInt(localStorage.getItem('babyguide_last_wake_time') || localStorage.getItem('babyguide_wake_start') || '0', 10);
    const storedNapDuration = parseInt(localStorage.getItem('babyguide_last_nap_duration') || '0', 10);

    const todayLogs = getTodayQuickLogs();
    if (todayLogs.currentSleep && todayLogs.currentSleep.start) {
      state.isSleeping = true;
      state.currentSleepStart = todayLogs.currentSleep.start;
    } else {
      state.isSleeping = storedSleeping;
      state.currentSleepStart = storedSleepStart;
    }
    state.lastWakeTime = todayLogs.lastWakeTime || storedLastWake || state.wakeStartTime || 0;
    state.lastNapDuration = storedNapDuration || 0;
    if (state.lastWakeTime > 0) state.wakeStartTime = state.lastWakeTime;

    // Wake window interval ticker & quick log live countdown update
    setInterval(() => {
      if ((state.wakeStartTime > 0 || state.isSleeping) && state.activeTab === 'tools') {
        updateLiveWakeTimerDisplay();
      }
      if (state.activeTab === 'home') {
        updateLiveTrackerCountdowns();
      }
    }, 1000);

    setupEventListeners();
    renderAllTabs();
    handleHashNavigation();
    updateProgressStats();
  }
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
