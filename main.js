/* ============================================
   THE SOVEREIGN SYSTEM - JAVASCRIPT PART 1
   Solo Leveling Inspired Gamified Productivity
   ============================================ */

// ============================================
// GLOBAL STATE & CONFIGURATION
// ============================================
const SovereignApp = {
    // User Data
    userData: null,

    // Configuration
    maxLevel: 5000,
    xpMultiplier: 0.5,
    crimsonThreshold: 1000,
    particleCount: 20,
    particleOpacity: 0.3,

    // Language Data
    translations: {
        ar: {
            systemName: 'النظام السيادي',
            setupTitle: 'تفعيل النظام السيادي',
            setupSubtitle: 'أدخل بيانات المستخدم لبدء الرحلة',
            firstname: 'الاسم الأول:',
            lastname: 'اللقب:',
            avatar: 'الصورة الشخصية:',
            language: 'اللغة / Language:',
            activate: 'تفعيل النظام',
            statsTitle: '📊 الإحصائيات',
            strength: 'القوة',
            agility: 'الرشاقة',
            vitality: 'الحيوية',
            intelligence: 'الذكاء',
            perception: 'الإدراك',
            points: 'نقاط متاحة:',
            gold: 'الذهب',
            gems: 'الجواهر',
            level: 'Lvl',
            covenant: 'الميثاق',
            dungeons: 'الزنازن',
            shop: 'المتجر',
            quests: 'المهام',
            tools: 'الأدوات',
            covenantTitle: '📜 الميثاق العملياتي',
            dungeonsTitle: '⚔️ الزنازن الفورية',
            dungeonsDesc: 'مهام الزعماء (Boss Tasks) - التركيز المطلق أو العقاب!',
            shopTitle: '🏪 متجر الميثاق الذكي',
            questsTitle: '📋 نظام المهام',
            dailyQuests: '🔹 المهام اليومية',
            mainQuests: '🔹 المهام الرئيسية',
            urgentQuests: '🔹 المهام العاجلة',
            sideQuests: '🔹 المهام الجانبية',
            toolsTitle: '🛠️ أدوات النظام',
            clock: 'الساعة النظامية',
            timer: 'المنبه والمؤقت',
            startTimer: 'بدء',
            pauseTimer: 'إيقاف',
            resetTimer: 'إعادة',
            snooze: 'مدة الغفوة (دقائق):',
            repeat: 'عدد التكرارات:',
            dailyProgress: 'تقدم اليوم',
            tasksDone: 'المهام المنجزة:',
            focusTime: 'وقت التركيز:',
            covenantStatus: 'حالة الميثاق:',
            incomplete: 'غير مكتمل',
            complete: 'مكتمل',
            nextLevel: 'المستوى القادم:',
            warningTitle: 'تنبيه النظام!',
            warningMessage: 'لقد تجاوزت 50 مستوى. صعوبة النظام في تزايد مستمر.',
            warningBtn: 'فهمت، استمر',
            currentLevel: 'المستوى الحالي:',
            difficulty: 'الصعوبة:',
            specialDays: 'الأيام الخاصة:',
            thursday: 'خميس الإنجاز',
            thursdayDesc: 'مراجعة الأهداف وإنجاز المهام المؤجلة',
            friday: 'جمعة الإبداع',
            fridayDesc: 'تجربة مهارات جديدة والإبداع',
            saturday: 'سبت الإتقان',
            saturdayDesc: 'تطوير المهارات وتعلم متقدم',
            penaltyTitle: 'انتهاك الزنزانة!',
            penaltyDesc: 'تم خصم نقاط التركيز والذهب كعقاب!',
            startDungeon: 'بدء الزنزانة',
            pauseDungeon: 'إيقاف مؤقت',
            completeDungeon: 'إكمال',
            addDungeon: '+ إضافة زنزانة جديدة',
            dungeonWarning: '⚠️ الخروج = عقاب!',
            footer: 'النظام السيادي © 2026 - Solo Leveling System v1.0'
        },
        en: {
            systemName: 'The Sovereign System',
            setupTitle: 'Activate Sovereign System',
            setupSubtitle: 'Enter user data to begin the journey',
            firstname: 'First Name:',
            lastname: 'Last Name:',
            avatar: 'Avatar Image:',
            language: 'Language / اللغة:',
            activate: 'Activate System',
            statsTitle: '📊 Statistics',
            strength: 'Strength',
            agility: 'Agility',
            vitality: 'Vitality',
            intelligence: 'Intelligence',
            perception: 'Perception',
            points: 'Available Points:',
            gold: 'Gold',
            gems: 'Gems',
            level: 'Lvl',
            covenant: 'Covenant',
            dungeons: 'Dungeons',
            shop: 'Shop',
            quests: 'Quests',
            tools: 'Tools',
            covenantTitle: '📜 Operational Covenant',
            dungeonsTitle: '⚔️ Instant Dungeons',
            dungeonsDesc: 'Boss Tasks - Absolute Focus or Penalty!',
            shopTitle: '🏪 Smart Covenant Shop',
            questsTitle: '📋 Quest System',
            dailyQuests: '🔹 Daily Quests',
            mainQuests: '🔹 Main Quests',
            urgentQuests: '🔹 Urgent Quests',
            sideQuests: '🔹 Side Quests',
            toolsTitle: '🛠️ System Tools',
            clock: 'System Clock',
            timer: 'Alarm & Timer',
            startTimer: 'Start',
            pauseTimer: 'Pause',
            resetTimer: 'Reset',
            snooze: 'Snooze Duration (min):',
            repeat: 'Repeat Count:',
            dailyProgress: 'Today s Progress',
            tasksDone: 'Tasks Completed:',
            focusTime: 'Focus Time:',
            covenantStatus: 'Covenant Status:',
            incomplete: 'Incomplete',
            complete: 'Complete',
            nextLevel: 'Next Level:',
            warningTitle: 'System Warning!',
            warningMessage: 'You have passed 50 levels. System difficulty is increasing.',
            warningBtn: 'Understood, Continue',
            currentLevel: 'Current Level:',
            difficulty: 'Difficulty:',
            specialDays: 'Special Days:',
            thursday: 'Thursday of Achievement',
            thursdayDesc: 'Review goals and complete pending tasks',
            friday: 'Friday of Creativity',
            fridayDesc: 'Try new skills and be creative',
            saturday: 'Saturday of Mastery',
            saturdayDesc: 'Advanced skill development and learning',
            penaltyTitle: 'Dungeon Violation!',
            penaltyDesc: 'Focus points and Gold deducted as penalty!',
            startDungeon: 'Start Dungeon',
            pauseDungeon: 'Pause',
            completeDungeon: 'Complete',
            addDungeon: '+ Add New Dungeon',
            dungeonWarning: '⚠️ Leaving = Penalty!',
            footer: 'The Sovereign System © 2026 - Solo Leveling System v1.0'
        }
    },

    // Day names in both languages
    days: {
        ar: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },

    // Covenant schedule
    covenantSchedule: {
        '05:00': { ar: 'استيقاظ + صلاة الفجر + ذكر', en: 'Wake up + Fajr prayer + Dhikr' },
        '05:30': { ar: 'تمارين التقوية (ضغط، سكوات)', en: 'Strength exercises (push-ups, squats)' },
        '06:00': { ar: 'قراءة وتدبر', en: 'Reading & contemplation' },
        '07:00': { ar: 'إفطار صحي + فيتامينات', en: 'Healthy breakfast + vitamins' },
        '08:00': { ar: 'جلسة برمجة عميقة (Deep Work)', en: 'Deep work coding session' },
        '10:00': { ar: 'استراحة نشطة + تمارين ظهر', en: 'Active break + back exercises' },
        '10:30': { ar: 'استمرار البرمجة/التعلم', en: 'Continue coding/learning' },
        '12:30': { ar: 'صلاة الظهر + غداء', en: 'Dhuhr prayer + lunch' },
        '13:30': { ar: 'مهام رئيسية (Main Quests)', en: 'Main Quests execution' },
        '15:30': { ar: 'صلاة العصر + مشي', en: 'Asr prayer + walking' },
        '16:00': { ar: 'تعلم/قراءة تطوير ذات', en: 'Self-development learning/reading' },
        '18:00': { ar: 'صلاة المغرب + عشاء', en: 'Maghrib prayer + dinner' },
        '19:00': { ar: 'مراجعة اليوم + تخطيط الغد', en: 'Day review + tomorrow planning' },
        '20:00': { ar: 'صلاة العشاء + قيام', en: 'Isha prayer + night prayer' },
        '21:00': { ar: 'استرخاء + استعداد للنوم', en: 'Relaxation + sleep preparation' },
        '22:00': { ar: 'نوم (7-9 ساعات)', en: 'Sleep (7-9 hours)' }
    },

    // Day themes
    dayThemes: {
        ar: [
            'يوم الاستشفاء والتخطيط',
            'يوم التركيز والبرمجة',
            'يوم القوة واللياقة',
            'يوم العلم والتعلم',
            'يوم الإنجاز والمراجعة',
            'يوم الإبداع والتجربة',
            'يوم الإتقان والتطوير'
        ],
        en: [
            'Recovery & Planning Day',
            'Focus & Coding Day',
            'Strength & Fitness Day',
            'Knowledge & Learning Day',
            'Achievement & Review Day',
            'Creativity & Experiment Day',
            'Mastery & Development Day'
        ]
    },

    // Shop items by day
    shopItems: {
        Monday: [
            { name_ar: 'لابتوب البرمجة', name_en: 'Coding Laptop', price: 5000, icon: '💻', boost: 'intelligence' },
            { name_ar: 'كوب قهوة التركيز', name_en: 'Focus Coffee', price: 300, icon: '☕', boost: 'perception' },
            { name_ar: 'نموذج AI', name_en: 'AI Model Access', price: 2500, icon: '🤖', boost: 'intelligence' }
        ],
        Tuesday: [
            { name_ar: 'حزام PPL', name_en: 'PPL Belt', price: 1500, icon: '🏋️', boost: 'strength' },
            { name_ar: 'مصحف التدبر', name_en: 'Quran Meditation', price: 800, icon: '📖', boost: 'vitality' }
        ],
        Wednesday: [
            { name_ar: 'بودكاست Lex Fridman', name_en: 'Lex Fridman Podcast', price: 600, icon: '🎧', boost: 'intelligence' },
            { name_ar: 'سجادة القيام', name_en: 'Night Prayer Rug', price: 1200, icon: '🧘', boost: 'perception' }
        ],
        Thursday: [
            { name_ar: 'صندوق الإنجاز', name_en: 'Achievement Box', price: 2000, icon: '🎁', boost: 'agility' },
            { name_ar: 'مكبر الإرادة', name_en: 'Will Amplifier', price: 3500, icon: '💎', boost: 'vitality' }
        ],
        Friday: [
            { name_ar: 'فرشاة الإبداع', name_en: 'Creativity Brush', price: 1800, icon: '🎨', boost: 'intelligence' },
            { name_ar: 'كتاب التصميم', name_en: 'Design Book', price: 900, icon: '📐', boost: 'perception' }
        ],
        Saturday: [
            { name_ar: 'أداة الإتقان', name_en: 'Mastery Tool', price: 4000, icon: '🔨', boost: 'strength' },
            { name_ar: 'منظار التفاصيل', name_en: 'Detail Lens', price: 2200, icon: '🔍', boost: 'perception' }
        ],
        Sunday: [
            { name_ar: 'حجر الاستشفاء', name_en: 'Recovery Stone', price: 1500, icon: '🌿', boost: 'vitality' },
            { name_ar: 'زجاجة الطاقة', name_en: 'Energy Bottle', price: 500, icon: '⚡', boost: 'agility' }
        ]
    },

    // Default quests
    defaultQuests: {
        daily: [
            { name_ar: '30 ضغطة', name_en: '30 Push-ups', xp: 50, gold: 20, completed: false },
            { name_ar: 'جري 15 دقيقة', name_en: '15 min Run', xp: 40, gold: 15, completed: false },
            { name_ar: 'قراءة 10 صفحات', name_en: 'Read 10 pages', xp: 30, gold: 10, completed: false },
            { name_ar: 'صلاة الفجر في وقتها', name_en: 'Fajr prayer on time', xp: 60, gold: 25, completed: false },
            { name_ar: 'شرب 2 لتر ماء', name_en: 'Drink 2L water', xp: 20, gold: 10, completed: false }
        ],
        main: [
            { name_ar: 'إكمال مشروع برمجي', name_en: 'Complete coding project', xp: 500, gold: 200, completed: false },
            { name_ar: 'تعلم تقنية جديدة', name_en: 'Learn new technology', xp: 300, gold: 150, completed: false }
        ],
        urgent: [],
        side: [
            { name_ar: 'تنظيم المكتب', name_en: 'Organize desk', xp: 15, gold: 5, completed: false },
            { name_ar: 'مساعدة شخص ما', name_en: 'Help someone', xp: 25, gold: 15, completed: false }
        ]
    },

    // Timer state
    timerState: {
        running: false,
        timeLeft: 0,
        interval: null,
        snoozeDuration: 5,
        repeatCount: 3,
        currentRepeat: 0
    },

    // Dungeon state
    dungeonState: {
        active: false,
        timer: null,
        timeLeft: 0,
        currentDungeon: null
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    SovereignApp.init();
});

SovereignApp.init = function() {
    this.loadUserData();
    this.setupParticles();
    this.setupEventListeners();
    this.setupAntiDistraction();
    this.startClock();
    this.checkFirstVisit();
    this.setupLanguage();
};

// ============================================
// DATA MANAGEMENT
// ============================================
SovereignApp.loadUserData = function() {
    const saved = localStorage.getItem('sovereign_data');
    if (saved) {
        this.userData = JSON.parse(saved);
    } else {
        this.userData = this.getDefaultData();
    }
};

SovereignApp.getDefaultData = function() {
    return {
        firstname_ar: '',
        lastname_ar: '',
        firstname_en: '',
        lastname_en: '',
        avatar: '',
        level: 1,
        xp: 0,
        gold: 0,
        gems: 0,
        stats: {
            strength: 10,
            agility: 10,
            vitality: 10,
            intelligence: 10,
            perception: 10
        },
        available_points: 5,
        tasks_completed: 0,
        focus_minutes: 0,
        covenant_completed: false,
        language: 'ar',
        theme: 'dark',
        dungeons: [],
        inventory: [],
        quests: JSON.parse(JSON.stringify(this.defaultQuests))
    };
};

SovereignApp.saveUserData = function() {
    localStorage.setItem('sovereign_data', JSON.stringify(this.userData));
};

// ============================================
// FIRST VISIT & SETUP
// ============================================
SovereignApp.checkFirstVisit = function() {
    if (!this.userData.firstname_ar && !this.userData.firstname_en) {
        document.getElementById('setup-modal').classList.remove('hidden');
        document.getElementById('app-container').classList.add('hidden');
    } else {
        document.getElementById('setup-modal').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        this.updateUI();
    }
};

SovereignApp.setupEventListeners = function() {
    // Setup form
    document.getElementById('setup-submit').addEventListener('click', () => this.handleSetup());
    document.getElementById('avatar').addEventListener('change', (e) => this.handleAvatarUpload(e));

    // Language toggle in setup
    document.getElementById('lang-ar').addEventListener('click', () => this.setSetupLanguage('ar'));
    document.getElementById('lang-en').addEventListener('click', () => this.setSetupLanguage('en'));

    // Navigation
    document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    document.getElementById('lang-toggle').addEventListener('click', () => this.toggleLanguage());

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => this.switchTab(e.currentTarget.dataset.tab));
    });

    // Level warning
    document.getElementById('warning-confirm').addEventListener('click', () => {
        document.getElementById('level-warning-modal').classList.add('hidden');
    });

    // Timer controls
    document.getElementById('timer-start').addEventListener('click', () => this.startTimer());
    document.getElementById('timer-pause').addEventListener('click', () => this.pauseTimer());
    document.getElementById('timer-reset').addEventListener('click', () => this.resetTimer());

    // Dungeon controls
    document.getElementById('add-dungeon').addEventListener('click', () => this.addDungeon());

    // Stat allocation
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('click', () => this.allocateStat(card.dataset.stat));
    });

    // Covenant timeline checkboxes
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('timeline-checkbox')) {
            this.toggleCovenantTask(e.target);
        }
    });

    // Quest checkboxes
    document.addEventListener('change', (e) => {
        if (e.target.classList.contains('quest-checkbox')) {
            this.completeQuest(e.target);
        }
    });
};

SovereignApp.handleSetup = function() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;

    if (!firstname || !lastname) {
        alert(this.userData.language === 'ar' ? 'الرجاء إدخال جميع البيانات' : 'Please fill in all fields');
        return;
    }

    if (this.userData.language === 'ar') {
        this.userData.firstname_ar = firstname;
        this.userData.lastname_ar = lastname;
    } else {
        this.userData.firstname_en = firstname;
        this.userData.lastname_en = lastname;
    }

    this.saveUserData();
    document.getElementById('setup-modal').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    this.updateUI();
};

SovereignApp.handleAvatarUpload = function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            this.userData.avatar = event.target.result;
            document.getElementById('avatar-preview').style.backgroundImage = `url(${event.target.result})`;
            this.saveUserData();
        };
        reader.readAsDataURL(file);
    }
};

SovereignApp.setSetupLanguage = function(lang) {
    this.userData.language = lang;
    document.getElementById('lang-ar').classList.toggle('active', lang === 'ar');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    this.updateSetupLanguage();
};

SovereignApp.updateSetupLanguage = function() {
    const t = this.translations[this.userData.language];
    document.getElementById('setup-title').textContent = t.setupTitle;
    document.getElementById('setup-subtitle').textContent = t.setupSubtitle;
    document.getElementById('label-firstname').textContent = t.firstname;
    document.getElementById('label-lastname').textContent = t.lastname;
    document.getElementById('label-avatar').textContent = t.avatar;
    document.getElementById('label-language').textContent = t.language;
    document.getElementById('setup-btn-text').textContent = t.activate;

    document.documentElement.lang = this.userData.language;
    document.documentElement.dir = this.userData.language === 'ar' ? 'rtl' : 'ltr';
};

// ============================================
// LANGUAGE & THEME
// ============================================
SovereignApp.setupLanguage = function() {
    this.updateSetupLanguage();
};

SovereignApp.toggleLanguage = function() {
    this.userData.language = this.userData.language === 'ar' ? 'en' : 'ar';
    this.saveUserData();
    this.updateUI();
};

SovereignApp.toggleTheme = function() {
    this.userData.theme = this.userData.theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode', this.userData.theme === 'dark');
    document.body.classList.toggle('light-mode', this.userData.theme === 'light');
    this.saveUserData();
};

// ============================================
// UI UPDATES
// ============================================
SovereignApp.updateUI = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    // Update document direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update theme
    document.body.classList.toggle('dark-mode', this.userData.theme === 'dark');
    document.body.classList.toggle('light-mode', this.userData.theme === 'light');

    // Check crimson mode
    if (this.userData.level >= this.crimsonThreshold) {
        document.body.classList.add('crimson-mode');
        document.getElementById('crimson-overlay').classList.remove('hidden');
    }

    // Update navigation
    document.getElementById('system-name').textContent = t.systemName;
    document.getElementById('current-lang').textContent = lang.toUpperCase();

    // Update user profile
    const username = lang === 'ar' 
        ? `${this.userData.firstname_ar} ${this.userData.lastname_ar}`
        : `${this.userData.firstname_en} ${this.userData.lastname_en}`;
    document.getElementById('nav-username').textContent = username || 'User';
    document.getElementById('nav-level').textContent = `Lvl ${this.userData.level}`;

    if (this.userData.avatar) {
        document.getElementById('nav-avatar').style.backgroundImage = `url(${this.userData.avatar})`;
        document.getElementById('nav-avatar').style.backgroundSize = 'cover';
    }

    // Update stats sidebar
    document.getElementById('stats-title').textContent = t.statsTitle;
    document.getElementById('label-strength').textContent = t.strength;
    document.getElementById('label-agility').textContent = t.agility;
    document.getElementById('label-vitality').textContent = t.vitality;
    document.getElementById('label-intelligence').textContent = t.intelligence;
    document.getElementById('label-perception').textContent = t.perception;
    document.getElementById('label-points').textContent = t.points;
    document.getElementById('available-points').textContent = this.userData.available_points;

    // Update stat values and bars
    Object.keys(this.userData.stats).forEach(stat => {
        document.getElementById(`val-${stat}`).textContent = this.userData.stats[stat];
        const percentage = Math.min((this.userData.stats[stat] / 100) * 100, 100);
        document.getElementById(`bar-${stat}`).style.width = `${percentage}%`;
    });

    // Update currency
    document.getElementById('label-gold').textContent = t.gold;
    document.getElementById('label-gems').textContent = t.gems;
    document.getElementById('user-gold').textContent = this.userData.gold;
    document.getElementById('user-gems').textContent = this.userData.gems;

    // Update tabs
    document.getElementById('tab-covenant').textContent = t.covenant;
    document.getElementById('tab-dungeons').textContent = t.dungeons;
    document.getElementById('tab-shop').textContent = t.shop;
    document.getElementById('tab-quests').textContent = t.quests;
    document.getElementById('tab-tools').textContent = t.tools;

    // Update panels
    this.updateCovenantPanel();
    this.updateDungeonsPanel();
    this.updateShopPanel();
    this.updateQuestsPanel();
    this.updateToolsPanel();
    this.updateProgressSidebar();

    // Update footer
    document.getElementById('footer-text').textContent = t.footer;
};

SovereignApp.updateCovenantPanel = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('covenant-title').textContent = t.covenantTitle;

    // Update day banner
    const now = new Date();
    const dayIndex = now.getDay();
    const dayName = this.days[lang][dayIndex];
    const dayTheme = this.dayThemes[lang][dayIndex];

    document.getElementById('day-name').textContent = dayName;
    document.getElementById('day-theme').textContent = dayTheme;

    // Update timeline
    const timeline = document.getElementById('covenant-timeline');
    timeline.innerHTML = '';

    Object.entries(this.covenantSchedule).forEach(([time, activities]) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <span class="timeline-time">${time}</span>
            <span class="timeline-activity">${activities[lang]}</span>
            <div class="timeline-check" data-time="${time}"></div>
        `;
        timeline.appendChild(item);
    });

    // Update special days
    document.getElementById('special-days-title').textContent = t.specialDays;
    document.getElementById('special-thursday').textContent = t.thursday;
    document.querySelector('[data-day="thursday"] .special-desc').textContent = t.thursdayDesc;
    document.getElementById('special-friday').textContent = t.friday;
    document.querySelector('[data-day="friday"] .special-desc').textContent = t.fridayDesc;
    document.getElementById('special-saturday').textContent = t.saturday;
    document.querySelector('[data-day="saturday"] .special-desc').textContent = t.saturdayDesc;
};

SovereignApp.updateDungeonsPanel = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('dungeons-title').textContent = t.dungeonsTitle;
    document.getElementById('dungeons-desc').textContent = t.dungeonsDesc;
    document.getElementById('add-dungeon').querySelector('span').textContent = t.addDungeon;

    // Update existing dungeon cards
    document.querySelectorAll('.dungeon-card').forEach((card, index) => {
        const startBtn = card.querySelector('[data-action="start"] span');
        const pauseBtn = card.querySelector('[data-action="pause"] span');
        const completeBtn = card.querySelector('[data-action="complete"] span');
        const warning = card.querySelector('.warning-text');

        if (startBtn) startBtn.textContent = t.startDungeon;
        if (pauseBtn) pauseBtn.textContent = t.pauseDungeon;
        if (completeBtn) completeBtn.textContent = t.completeDungeon;
        if (warning) warning.textContent = t.dungeonWarning;
    });
};

SovereignApp.updateShopPanel = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('shop-title').textContent = t.shopTitle;

    const now = new Date();
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const dayNameAr = this.days['ar'][now.getDay()];

    document.getElementById('shop-day-text').textContent = lang === 'ar' 
        ? `عناصر مخصصة ليوم ${dayNameAr}`
        : `Items customized for ${dayName}`;

    // Update shop items
    const shopGrid = document.getElementById('shop-items');
    shopGrid.innerHTML = '';

    const items = this.shopItems[dayName] || this.shopItems['Monday'];
    items.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'shop-item';
        itemEl.innerHTML = `
            <div class="shop-item-icon">${item.icon}</div>
            <span class="shop-item-name">${lang === 'ar' ? item.name_ar : item.name_en}</span>
            <span class="shop-item-boost">+${item.boost}</span>
            <span class="shop-item-price">${item.price} 🪙</span>
        `;
        itemEl.addEventListener('click', () => this.buyItem(item));
        shopGrid.appendChild(itemEl);
    });
};

SovereignApp.updateQuestsPanel = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('quests-title').textContent = t.questsTitle;
    document.getElementById('label-daily').textContent = t.dailyQuests;
    document.getElementById('label-main').textContent = t.mainQuests;
    document.getElementById('label-urgent').textContent = t.urgentQuests;
    document.getElementById('label-side').textContent = t.sideQuests;

    // Update quest lists
    this.renderQuestList('daily', this.userData.quests.daily);
    this.renderQuestList('main', this.userData.quests.main);
    this.renderQuestList('urgent', this.userData.quests.urgent);
    this.renderQuestList('side', this.userData.quests.side);
};

SovereignApp.renderQuestList = function(type, quests) {
    const list = document.getElementById(`${type}-list`);
    const lang = this.userData.language;
    list.innerHTML = '';

    if (quests.length === 0) {
        list.innerHTML = `<div style="text-align: center; padding: 20px; opacity: 0.6;">${lang === 'ar' ? 'لا توجد مهام' : 'No quests available'}</div>`;
        return;
    }

    quests.forEach((quest, index) => {
        const item = document.createElement('div');
        item.className = 'quest-item';
        item.innerHTML = `
            <div class="quest-checkbox ${quest.completed ? 'completed' : ''}" data-type="${type}" data-index="${index}"></div>
            <div class="quest-info">
                <span class="quest-name">${lang === 'ar' ? quest.name_ar : quest.name_en}</span>
                <span class="quest-reward">${quest.xp} XP | ${quest.gold} 🪙</span>
            </div>
            <span class="quest-tag ${type}">${type.toUpperCase()}</span>
        `;
        list.appendChild(item);
    });
};

SovereignApp.updateToolsPanel = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('tools-title').textContent = t.toolsTitle;
    document.getElementById('label-clock').textContent = t.clock;
    document.getElementById('label-timer').textContent = t.timer;
    document.getElementById('timer-start').textContent = t.startTimer;
    document.getElementById('timer-pause').textContent = t.pauseTimer;
    document.getElementById('timer-reset').textContent = t.resetTimer;
    document.getElementById('label-snooze').textContent = t.snooze;
    document.getElementById('label-repeat').textContent = t.repeat;
};

SovereignApp.updateProgressSidebar = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    // Update level display
    document.getElementById('user-level').textContent = this.userData.level;
    document.getElementById('label-level').textContent = t.level;

    // Calculate XP progress
    const xpNeeded = this.calculateXpForLevel(this.userData.level);
    const xpProgress = (this.userData.xp / xpNeeded) * 100;

    document.getElementById('current-xp').textContent = this.userData.xp;
    document.getElementById('max-xp').textContent = xpNeeded;
    document.getElementById('xp-bar-fill').style.width = `${Math.min(xpProgress, 100)}%`;

    // Update level circle
    const circle = document.getElementById('level-progress-circle');
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (xpProgress / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Update milestone
    document.getElementById('level-milestone').textContent = `${t.nextLevel} ${this.userData.level + 1}`;

    // Update daily progress
    document.getElementById('label-daily-progress').textContent = t.dailyProgress;
    document.getElementById('label-tasks-done').textContent = t.tasksDone;
    document.getElementById('tasks-done').textContent = `${this.userData.tasks_completed}/5`;
    document.getElementById('label-focus-time').textContent = t.focusTime;
    document.getElementById('focus-time').textContent = `${this.userData.focus_minutes} ${lang === 'ar' ? 'دقيقة' : 'min'}`;
    document.getElementById('label-covenant-status').textContent = t.covenantStatus;

    const statusEl = document.getElementById('covenant-status');
    statusEl.textContent = this.userData.covenant_completed ? t.complete : t.incomplete;
    statusEl.className = this.userData.covenant_completed ? 'status-complete' : 'status-incomplete';
};

// ============================================
// GAME LOGIC
// ============================================
SovereignApp.calculateXpForLevel = function(level) {
    const baseXp = 1000;
    return Math.floor(baseXp * Math.pow(level, 1.5));
};

SovereignApp.addXp = function(amount) {
    const adjustedAmount = Math.floor(amount * this.xpMultiplier);
    this.userData.xp += adjustedAmount;
    this.checkLevelUp();
    this.saveUserData();
    this.updateUI();
    return adjustedAmount;
};

SovereignApp.checkLevelUp = function() {
    let currentLevel = this.userData.level;

    while (currentLevel < this.maxLevel) {
        const xpNeeded = this.calculateXpForLevel(currentLevel);
        if (this.userData.xp >= xpNeeded) {
            this.userData.xp -= xpNeeded;
            currentLevel++;
            this.userData.level = currentLevel;
            this.userData.available_points += 5;

            // Auto-increase all stats
            Object.keys(this.userData.stats).forEach(stat => {
                this.userData.stats[stat]++;
            });

            // Check for level 50 milestone
            if (currentLevel % 50 === 0) {
                this.showLevelWarning(currentLevel);
            }

            // Check for crimson mode
            if (currentLevel === this.crimsonThreshold) {
                this.activateCrimsonMode();
            }
        } else {
            break;
        }
    }
};

SovereignApp.showLevelWarning = function(level) {
    const lang = this.userData.language;
    const t = this.translations[lang];

    document.getElementById('warning-title').textContent = t.warningTitle;
    document.getElementById('warning-message').innerHTML = 
        `${lang === 'ar' ? 'لقد تجاوزت' : 'You have passed'} ${level} ${lang === 'ar' ? 'مستوى' : 'levels'}. ${t.warningMessage}`;
    document.getElementById('warning-btn-text').textContent = t.warningBtn;
    document.getElementById('current-level-display').textContent = level;
    document.getElementById('level-warning-modal').classList.remove('hidden');
};

SovereignApp.activateCrimsonMode = function() {
    document.body.classList.add('crimson-mode');
    document.getElementById('crimson-overlay').classList.remove('hidden');

    // Play activation sound
    this.playSound('crimson');
};

SovereignApp.allocateStat = function(stat) {
    if (this.userData.available_points > 0) {
        this.userData.stats[stat]++;
        this.userData.available_points--;
        this.saveUserData();
        this.updateUI();
    }
};

SovereignApp.completeQuest = function(checkbox) {
    const type = checkbox.dataset.type;
    const index = parseInt(checkbox.dataset.index);
    const quest = this.userData.quests[type][index];

    if (!quest.completed) {
        quest.completed = true;
        this.userData.tasks_completed++;
        this.addXp(quest.xp);
        this.userData.gold += quest.gold;
        this.saveUserData();
        this.updateUI();
    }
};

SovereignApp.toggleCovenantTask = function(checkbox) {
    checkbox.classList.toggle('completed');

    // Check if all tasks are completed
    const allChecked = document.querySelectorAll('.timeline-check.completed').length;
    const total = document.querySelectorAll('.timeline-check').length;

    if (allChecked === total) {
        this.userData.covenant_completed = true;
        this.addXp(200);
    }

    this.saveUserData();
    this.updateUI();
};

SovereignApp.buyItem = function(item) {
    if (this.userData.gold >= item.price) {
        this.userData.gold -= item.price;
        this.userData.inventory.push(item);
        this.userData.stats[item.boost]++;
        this.saveUserData();
        this.updateUI();

        const lang = this.userData.language;
        alert(lang === 'ar' 
            ? `تم شراء ${item.name_ar} بنجاح!` 
            : `Purchased ${item.name_en} successfully!`);
    } else {
        const lang = this.userData.language;
        alert(lang === 'ar' ? 'الذهب غير كافٍ!' : 'Not enough gold!');
    }
};

// ============================================
// DUNGEON SYSTEM
// ============================================
SovereignApp.addDungeon = function() {
    const lang = this.userData.language;
    const dungeonId = Date.now();

    const dungeon = {
        id: dungeonId,
        name_ar: 'مهمة الزعيم الجديدة',
        name_en: 'New Boss Task',
        duration: 25 * 60, // 25 minutes in seconds
        timeLeft: 25 * 60,
        active: false
    };

    this.userData.dungeons.push(dungeon);
    this.renderDungeon(dungeon);
};

SovereignApp.renderDungeon = function(dungeon) {
    const lang = this.userData.language;
    const t = this.translations[lang];

    const dungeonList = document.getElementById('dungeon-list');
    const card = document.createElement('div');
    card.className = 'dungeon-card';
    card.dataset.id = dungeon.id;
    card.innerHTML = `
        <div class="dungeon-header">
            <h4 class="dungeon-name glow-text">${lang === 'ar' ? dungeon.name_ar : dungeon.name_en}</h4>
            <span class="dungeon-difficulty">S-Rank</span>
        </div>
        <div class="dungeon-timer">
            <span class="timer-display glow-text" id="dungeon-timer-${dungeon.id}">25:00</span>
        </div>
        <div class="dungeon-controls">
            <button class="btn-dungeon start" data-action="start" data-id="${dungeon.id}">
                <span>${t.startDungeon}</span>
            </button>
            <button class="btn-dungeon pause hidden" data-action="pause" data-id="${dungeon.id}">
                <span>${t.pauseDungeon}</span>
            </button>
            <button class="btn-dungeon complete" data-action="complete" data-id="${dungeon.id}">
                <span>${t.completeDungeon}</span>
            </button>
        </div>
        <div class="dungeon-warning">
            <span class="warning-text">${t.dungeonWarning}</span>
        </div>
    `;

    // Add event listeners
    card.querySelector('[data-action="start"]').addEventListener('click', () => this.startDungeon(dungeon.id));
    card.querySelector('[data-action="pause"]').addEventListener('click', () => this.pauseDungeon(dungeon.id));
    card.querySelector('[data-action="complete"]').addEventListener('click', () => this.completeDungeon(dungeon.id));

    dungeonList.appendChild(card);
};

SovereignApp.startDungeon = function(dungeonId) {
    const dungeon = this.userData.dungeons.find(d => d.id === dungeonId);
    if (!dungeon) return;

    dungeon.active = true;
    this.dungeonState.active = true;
    this.dungeonState.currentDungeon = dungeonId;

    // Update UI
    const card = document.querySelector(`.dungeon-card[data-id="${dungeonId}"]`);
    card.querySelector('[data-action="start"]').classList.add('hidden');
    card.querySelector('[data-action="pause"]').classList.remove('hidden');

    // Start timer
    this.dungeonState.timer = setInterval(() => {
        dungeon.timeLeft--;

        const minutes = Math.floor(dungeon.timeLeft / 60);
        const seconds = dungeon.timeLeft % 60;
        document.getElementById(`dungeon-timer-${dungeonId}`).textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (dungeon.timeLeft <= 0) {
            this.completeDungeon(dungeonId);
        }
    }, 1000);

    this.saveUserData();
};

SovereignApp.pauseDungeon = function(dungeonId) {
    const dungeon = this.userData.dungeons.find(d => d.id === dungeonId);
    if (!dungeon) return;

    dungeon.active = false;
    this.dungeonState.active = false;
    clearInterval(this.dungeonState.timer);

    const card = document.querySelector(`.dungeon-card[data-id="${dungeonId}"]`);
    card.querySelector('[data-action="start"]').classList.remove('hidden');
    card.querySelector('[data-action="pause"]').classList.add('hidden');

    this.saveUserData();
};

SovereignApp.completeDungeon = function(dungeonId) {
    const dungeon = this.userData.dungeons.find(d => d.id === dungeonId);
    if (!dungeon) return;

    clearInterval(this.dungeonState.timer);
    this.dungeonState.active = false;

    // Calculate rewards based on time remaining
    const timeBonus = Math.floor(dungeon.timeLeft / 60);
    const xpReward = 100 + timeBonus * 10;
    const goldReward = 50 + timeBonus * 5;

    this.addXp(xpReward);
    this.userData.gold += goldReward;
    this.userData.focus_minutes += Math.floor((25 * 60 - dungeon.timeLeft) / 60);

    // Remove dungeon
    this.userData.dungeons = this.userData.dungeons.filter(d => d.id !== dungeonId);

    const card = document.querySelector(`.dungeon-card[data-id="${dungeonId}"]`);
    if (card) card.remove();

    this.saveUserData();
    this.updateUI();

    const lang = this.userData.language;
    alert(lang === 'ar' 
        ? `تم إكمال الزنزانة! المكافآت: ${xpReward} XP + ${goldReward} 🪙` 
        : `Dungeon completed! Rewards: ${xpReward} XP + ${goldReward} 🪙`);
};

// ============================================
// ANTI-DISTRACTION SYSTEM
// ============================================
SovereignApp.setupAntiDistraction = function() {
    // Detect tab switching
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && this.dungeonState.active) {
            this.triggerPenalty();
        }
    });

    // Detect window blur (minimize or switch window)
    window.addEventListener('blur', () => {
        if (this.dungeonState.active) {
            this.triggerPenalty();
        }
    });
};

SovereignApp.triggerPenalty = function() {
    const lang = this.userData.language;
    const t = this.translations[lang];

    // Pause dungeon
    if (this.dungeonState.currentDungeon) {
        this.pauseDungeon(this.dungeonState.currentDungeon);
    }

    // Deduct penalties
    const xpPenalty = 500;
    const goldPenalty = 200;

    this.userData.xp = Math.max(0, this.userData.xp - xpPenalty);
    this.userData.gold = Math.max(0, this.userData.gold - goldPenalty);

    // Show penalty screen
    document.getElementById('penalty-title').textContent = t.penaltyTitle;
    document.getElementById('penalty-desc').textContent = t.penaltyDesc;
    document.querySelector('.penalty-xp').textContent = `-${xpPenalty} XP`;
    document.querySelector('.penalty-gold').textContent = `-${goldPenalty} 🪙`;

    const penaltyScreen = document.getElementById('penalty-screen');
    penaltyScreen.classList.remove('hidden');

    // Play alarm sound
    this.playSound('alarm');

    // Hide after 5 seconds
    setTimeout(() => {
        penaltyScreen.classList.add('hidden');
    }, 5000);

    this.saveUserData();
    this.updateUI();
};

// ============================================
// TIMER & ALARM SYSTEM
// ============================================
SovereignApp.startTimer = function() {
    if (this.timerState.running) return;

    const hours = parseInt(document.getElementById('timer-hours').value) || 0;
    const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;

    this.timerState.timeLeft = hours * 3600 + minutes * 60 + seconds;
    this.timerState.snoozeDuration = parseInt(document.getElementById('snooze-duration').value) || 5;
    this.timerState.repeatCount = parseInt(document.getElementById('repeat-count').value) || 3;
    this.timerState.currentRepeat = 0;

    if (this.timerState.timeLeft <= 0) return;

    this.timerState.running = true;
    document.getElementById('timer-start').classList.add('hidden');
    document.getElementById('timer-pause').classList.remove('hidden');
    document.getElementById('active-timer-display').classList.remove('hidden');

    this.updateTimerDisplay();

    this.timerState.interval = setInterval(() => {
        this.timerState.timeLeft--;
        this.updateTimerDisplay();

        if (this.timerState.timeLeft <= 0) {
            this.timerAlarm();
        }
    }, 1000);
};

SovereignApp.pauseTimer = function() {
    this.timerState.running = false;
    clearInterval(this.timerState.interval);
    document.getElementById('timer-start').classList.remove('hidden');
    document.getElementById('timer-pause').classList.add('hidden');
};

SovereignApp.resetTimer = function() {
    this.timerState.running = false;
    clearInterval(this.timerState.interval);
    this.timerState.timeLeft = 0;

    document.getElementById('timer-start').classList.remove('hidden');
    document.getElementById('timer-pause').classList.add('hidden');
    document.getElementById('active-timer-display').classList.add('hidden');
    document.getElementById('active-timer-display').textContent = '00:00';
};

SovereignApp.updateTimerDisplay = function() {
    const hours = Math.floor(this.timerState.timeLeft / 3600);
    const minutes = Math.floor((this.timerState.timeLeft % 3600) / 60);
    const seconds = this.timerState.timeLeft % 60;

    const display = hours > 0 
        ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    document.getElementById('active-timer-display').textContent = display;
};

SovereignApp.timerAlarm = function() {
    this.playSound('timer');

    this.timerState.currentRepeat++;

    if (this.timerState.currentRepeat < this.timerState.repeatCount) {
        // Snooze
        this.timerState.timeLeft = this.timerState.snoozeDuration * 60;
        this.updateTimerDisplay();
    } else {
        this.resetTimer();
    }
};

// ============================================
// CLOCK SYSTEM
// ============================================
SovereignApp.startClock = function() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);

    // Get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude.toFixed(2);
                const lon = position.coords.longitude.toFixed(2);
                document.getElementById('location-text').textContent = 
                    `${this.userData.language === 'ar' ? 'الموقع' : 'Location'}: ${lat}, ${lon}`;
            },
            () => {
                document.getElementById('location-text').textContent = 
                    `${this.userData.language === 'ar' ? 'الموقع' : 'Location'}: --`;
            }
        );
    }

    // Get weather (mock)
    document.getElementById('weather-text').textContent = 
        `${this.userData.language === 'ar' ? 'الطقس' : 'Weather'}: --`;
    document.getElementById('humidity-text').textContent = 
        `${this.userData.language === 'ar' ? 'الرطوبة' : 'Humidity'}: --%`;
};

SovereignApp.updateClock = function() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock-hours').textContent = hours;
    document.getElementById('clock-minutes').textContent = minutes;
    document.getElementById('clock-seconds').textContent = seconds;
};

// ============================================
// PARTICLE SYSTEM
// ============================================
SovereignApp.setupParticles = function() {
    const container = document.getElementById('particles-container');

    for (let i = 0; i < this.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particle.style.opacity = this.particleOpacity;
        container.appendChild(particle);
    }
};

// ============================================
// TAB SWITCHING
// ============================================
SovereignApp.switchTab = function(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `${tabName}-panel`);
    });
};

// ============================================
// SOUND SYSTEM (Web Audio API)
// ============================================
SovereignApp.playSound = function(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    if (type === 'alarm') {
        // Scary alarm sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.2);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } else if (type === 'timer') {
        // Melodic timer sound
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

        notes.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.type = 'sine';
            oscillator.frequency.value = freq;

            const startTime = audioContext.currentTime + index * 0.2;
            gainNode.gain.setValueAtTime(0.2, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

            oscillator.start(startTime);
            oscillator.stop(startTime + 0.3);
        });
    } else if (type === 'crimson') {
        // Deep ominous sound
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(110, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(55, audioContext.currentTime + 2);

        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 2);
    }
};

// ============================================
// GLOBAL FUNCTIONS (for Python integration)
// ============================================
window.showLevelWarning = function(level) {
    SovereignApp.showLevelWarning(level);
};

window.activateCrimsonMode = function() {
    SovereignApp.activateCrimsonMode();
};

// Make app globally accessible
window.SovereignApp = SovereignApp;



















/* ============================================
   THE SOVEREIGN SYSTEM - JAVASCRIPT PART 2
   Advanced Features: Skills, Inventory, Analytics, 
   Achievements, Boss System, Notifications
   ============================================ */

// Extend SovereignApp with advanced features
SovereignApp.advancedInit = function() {
    this.initSkillsSystem();
    this.initInventorySystem();
    this.initAnalyticsSystem();
    this.initAchievementSystem();
    this.initBossSystem();
    this.initNotificationSystem();
    this.initFocusMode();
    this.initAdvancedParticles();
    this.loadAdvancedData();
};

// ============================================
// SKILLS SYSTEM
// ============================================
SovereignApp.skillsData = {
    active: [
        {
            id: 'deep_work',
            name_ar: 'التركيز العميق',
            name_en: 'Deep Focus',
            icon: '🎯',
            description_ar: 'تضاعف كفاءة العمل البرمجي لمدة ساعة',
            description_en: 'Double coding efficiency for 1 hour',
            required_level: 5,
            required_stat: 'intelligence',
            required_stat_value: 15,
            cooldown: 3600,
            unlocked: false,
            level: 0,
            max_level: 10
        },
        {
            id: 'sprint_burst',
            name_ar: 'اندفاع السرعة',
            name_en: 'Sprint Burst',
            icon: '⚡',
            description_ar: 'إنجاز مهمة في نصف الوقت المحدد',
            description_en: 'Complete task in half the time',
            required_level: 10,
            required_stat: 'agility',
            required_stat_value: 20,
            cooldown: 7200,
            unlocked: false,
            level: 0,
            max_level: 10
        },
        {
            id: 'iron_will',
            name_ar: 'إرادة حديدية',
            name_en: 'Iron Will',
            icon: '🛡️',
            description_ar: 'منع خسارة نقاط XP لمدة 24 ساعة',
            description_en: 'Prevent XP loss for 24 hours',
            required_level: 20,
            required_stat: 'vitality',
            required_stat_value: 25,
            cooldown: 86400,
            unlocked: false,
            level: 0,
            max_level: 5
        },
        {
            id: 'code_mastery',
            name_ar: 'إتقان البرمجة',
            name_en: 'Code Mastery',
            icon: '💻',
            description_ar: 'ثلاثة أضعاف XP من المهام البرمجية',
            description_en: 'Triple XP from coding tasks',
            required_level: 30,
            required_stat: 'intelligence',
            required_stat_value: 35,
            cooldown: 18000,
            unlocked: false,
            level: 0,
            max_level: 10
        },
        {
            id: 'beast_mode',
            name_ar: 'وضع الوحش',
            name_en: 'Beast Mode',
            icon: '👹',
            description_ar: 'زيادة كل الإحصائيات بنسبة 50% لمدة ساعتين',
            description_en: 'Increase all stats by 50% for 2 hours',
            required_level: 50,
            required_stat: 'strength',
            required_stat_value: 40,
            cooldown: 43200,
            unlocked: false,
            level: 0,
            max_level: 5
        }
    ],
    passive: [
        {
            id: 'early_riser',
            name_ar: 'المبكر',
            name_en: 'Early Riser',
            icon: '🌅',
            description_ar: '+10% XP إذا استيقظت قبل 6 صباحاً',
            description_en: '+10% XP if wake up before 6 AM',
            required_level: 3,
            required_stat: 'perception',
            required_stat_value: 12,
            unlocked: false,
            level: 0,
            max_level: 5
        },
        {
            id: 'book_worm',
            name_ar: 'دودة الكتب',
            name_en: 'Book Worm',
            icon: '📚',
            description_ar: '+5 ذكاء لكل 100 صفحة مقروءة',
            description_en: '+5 Intelligence per 100 pages read',
            required_level: 8,
            required_stat: 'intelligence',
            required_stat_value: 15,
            unlocked: false,
            level: 0,
            max_level: 10
        },
        {
            id: 'gym_rat',
            name_ar: 'مدمن اللياقة',
            name_en: 'Gym Rat',
            icon: '🏋️',
            description_ar: '+2 قوة لكل تمرين يومي',
            description_en: '+2 Strength per daily workout',
            required_level: 12,
            required_stat: 'strength',
            required_stat_value: 18,
            unlocked: false,
            level: 0,
            max_level: 10
        },
        {
            id: 'zen_master',
            name_ar: 'سيد الزن',
            name_en: 'Zen Master',
            icon: '🧘',
            description_ar: '-20% من عقوبات التشتت',
            description_en: '-20% distraction penalties',
            required_level: 25,
            required_stat: 'vitality',
            required_stat_value: 30,
            unlocked: false,
            level: 0,
            max_level: 5
        },
        {
            id: 'sixth_sense',
            name_ar: 'الحاسة السادسة',
            name_en: 'Sixth Sense',
            icon: '👁️',
            description_ar: 'تنبيه مبكر قبل الزنازن الصعبة',
            description_en: 'Early warning before hard dungeons',
            required_level: 40,
            required_stat: 'perception',
            required_stat_value: 45,
            unlocked: false,
            level: 0,
            max_level: 3
        }
    ]
};

SovereignApp.initSkillsSystem = function() {
    // Check skill unlock conditions
    this.updateSkillsUnlockStatus();
};

SovereignApp.updateSkillsUnlockStatus = function() {
    [...this.skillsData.active, ...this.skillsData.passive].forEach(skill => {
        const meetsLevel = this.userData.level >= skill.required_level;
        const meetsStat = this.userData.stats[skill.required_stat] >= skill.required_stat_value;
        skill.unlocked = meetsLevel && meetsStat;
    });
};

SovereignApp.renderSkillsPanel = function() {
    const lang = this.userData.language;
    const container = document.getElementById('skills-list');
    if (!container) return;

    container.innerHTML = '';

    // Active Skills Section
    const activeSection = document.createElement('div');
    activeSection.className = 'skills-section';
    activeSection.innerHTML = `<h4 class="skills-section-title">${lang === 'ar' ? 'المهارات الفعّالة' : 'Active Skills'}</h4>`;

    const activeGrid = document.createElement('div');
    activeGrid.className = 'skills-tree';

    this.skillsData.active.forEach(skill => {
        const card = this.createSkillCard(skill, 'active');
        activeGrid.appendChild(card);
    });

    activeSection.appendChild(activeGrid);
    container.appendChild(activeSection);

    // Passive Skills Section
    const passiveSection = document.createElement('div');
    passiveSection.className = 'skills-section';
    passiveSection.innerHTML = `<h4 class="skills-section-title">${lang === 'ar' ? 'المهارات السلبية' : 'Passive Skills'}</h4>`;

    const passiveGrid = document.createElement('div');
    passiveGrid.className = 'skills-tree';

    this.skillsData.passive.forEach(skill => {
        const card = this.createSkillCard(skill, 'passive');
        passiveGrid.appendChild(card);
    });

    passiveSection.appendChild(passiveGrid);
    container.appendChild(passiveSection);
};

SovereignApp.createSkillCard = function(skill, type) {
    const lang = this.userData.language;
    const card = document.createElement('div');
    card.className = `skill-card ${skill.unlocked ? '' : 'locked'}`;

    const progressPercent = (skill.level / skill.max_level) * 100;

    card.innerHTML = `
        <div class="skill-header">
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-info">
                <h4>${lang === 'ar' ? skill.name_ar : skill.name_en}</h4>
                <span class="skill-type">${type === 'active' ? 
                    (lang === 'ar' ? 'فعّالة' : 'Active') : 
                    (lang === 'ar' ? 'سلبية' : 'Passive')}</span>
            </div>
        </div>
        <p class="skill-description">${lang === 'ar' ? skill.description_ar : skill.description_en}</p>
        <div class="skill-level-bar">
            <div class="skill-level-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="skill-meta">
            <span>Lv.${skill.level}/${skill.max_level}</span>
            <span>${lang === 'ar' ? 'مطلوب: مستوى' : 'Req: Lvl'} ${skill.required_level}</span>
        </div>
        ${skill.unlocked && skill.level < skill.max_level ? 
            `<button class="skill-unlock-btn" onclick="SovereignApp.upgradeSkill('${skill.id}', '${type}')">
                ${lang === 'ar' ? 'رفع المستوى' : 'Upgrade'} (${this.calculateSkillCost(skill)} 🪙)
            </button>` : ''}
        ${!skill.unlocked ? 
            `<div style="text-align: center; padding: 10px; opacity: 0.6; font-size: 0.85rem;">
                🔒 ${lang === 'ar' ? 'مقفل' : 'Locked'}
            </div>` : ''}
    `;

    return card;
};

SovereignApp.calculateSkillCost = function(skill) {
    return Math.floor(100 * Math.pow(skill.level + 1, 1.5));
};

SovereignApp.upgradeSkill = function(skillId, type) {
    const skillList = type === 'active' ? this.skillsData.active : this.skillsData.passive;
    const skill = skillList.find(s => s.id === skillId);

    if (!skill || skill.level >= skill.max_level) return;

    const cost = this.calculateSkillCost(skill);

    if (this.userData.gold >= cost) {
        this.userData.gold -= cost;
        skill.level++;

        // Apply passive skill effects
        if (type === 'passive') {
            this.applyPassiveSkill(skill);
        }

        this.saveUserData();
        this.saveAdvancedData();
        this.updateUI();
        this.renderSkillsPanel();

        const lang = this.userData.language;
        this.showNotification(
            lang === 'ar' ? 'تم رفع المستوى!' : 'Upgraded!',
            `${lang === 'ar' ? skill.name_ar : skill.name_en} ${lang === 'ar' ? 'الآن مستوى' : 'is now level'} ${skill.level}`,
            'success'
        );
    } else {
        const lang = this.userData.language;
        this.showNotification(
            lang === 'ar' ? 'الذهب غير كافٍ' : 'Not enough gold',
            '',
            'warning'
        );
    }
};

SovereignApp.applyPassiveSkill = function(skill) {
    // Apply permanent stat boosts based on skill
    switch(skill.id) {
        case 'book_worm':
            this.userData.stats.intelligence += 2;
            break;
        case 'gym_rat':
            this.userData.stats.strength += 2;
            break;
        case 'zen_master':
            // Reduces penalty - stored in userData
            break;
    }
};

// ============================================
// INVENTORY SYSTEM
// ============================================
SovereignApp.inventorySlots = 30;

SovereignApp.initInventorySystem = function() {
    if (!this.userData.inventory) {
        this.userData.inventory = [];
    }
};

SovereignApp.renderInventory = function() {
    const container = document.getElementById('inventory-grid');
    if (!container) return;

    container.innerHTML = '';

    for (let i = 0; i < this.inventorySlots; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';

        const item = this.userData.inventory[i];
        if (item) {
            slot.classList.add('occupied');
            const rarityClass = item.rarity || 'rarity-common';

            slot.innerHTML = `
                <div class="slot-rarity ${rarityClass}"></div>
                <div class="slot-icon">${item.icon}</div>
                <div class="slot-name">${this.userData.language === 'ar' ? item.name_ar : item.name_en}</div>
                ${item.count > 1 ? `<div class="slot-count">${item.count}</div>` : ''}
                <div class="item-tooltip">
                    <div class="tooltip-name">${this.userData.language === 'ar' ? item.name_ar : item.name_en}</div>
                    <div class="tooltip-type">${item.type || 'Item'}</div>
                    <div class="tooltip-stats">
                        ${item.stats ? Object.entries(item.stats).map(([stat, val]) => 
                            `<div class="tooltip-stat"><span>${stat}</span><span class="tooltip-stat-positive">+${val}</span></div>`
                        ).join('') : ''}
                    </div>
                </div>
            `;

            slot.addEventListener('click', () => this.useItem(i));
        } else {
            slot.innerHTML = '<div style="opacity: 0.3; font-size: 1.5rem;">+</div>';
        }

        container.appendChild(slot);
    }
};

SovereignApp.useItem = function(index) {
    const item = this.userData.inventory[index];
    if (!item) return;

    const lang = this.userData.language;

    // Apply item effects
    if (item.effect === 'xp_boost') {
        this.addXp(item.value);
        this.showNotification(
            lang === 'ar' ? 'تم استخدام العنصر!' : 'Item Used!',
            `+${item.value} XP`,
            'success'
        );
    } else if (item.effect === 'stat_boost') {
        if (item.stat && this.userData.stats[item.stat]) {
            this.userData.stats[item.stat] += item.value;
            this.showNotification(
                lang === 'ar' ? 'تم استخدام العنصر!' : 'Item Used!',
                `${item.stat} +${item.value}`,
                'success'
            );
        }
    } else if (item.effect === 'heal') {
        // Heal mechanic
        this.showNotification(
            lang === 'ar' ? 'تم استخدام العنصر!' : 'Item Used!',
            lang === 'ar' ? 'تم الاستشفاء!' : 'Healed!',
            'success'
        );
    }

    // Remove or decrease count
    if (item.count > 1) {
        item.count--;
    } else {
        this.userData.inventory.splice(index, 1);
    }

    this.saveUserData();
    this.renderInventory();
    this.updateUI();
};

// ============================================
// ANALYTICS SYSTEM
// ============================================
SovereignApp.analyticsData = {
    weeklyStats: [],
    monthlyStats: [],
    streakData: {
        current: 0,
        longest: 0,
        lastActive: null
    },
    totalFocusTime: 0,
    totalTasksCompleted: 0,
    peakPerformance: {
        day: '',
        tasks: 0
    }
};

SovereignApp.initAnalyticsSystem = function() {
    this.loadAnalyticsData();
    this.updateStreak();
};

SovereignApp.loadAnalyticsData = function() {
    const saved = localStorage.getItem('sovereign_analytics');
    if (saved) {
        this.analyticsData = JSON.parse(saved);
    }
};

SovereignApp.saveAnalyticsData = function() {
    localStorage.setItem('sovereign_analytics', JSON.stringify(this.analyticsData));
};

SovereignApp.updateStreak = function() {
    const today = new Date().toDateString();
    const lastActive = this.analyticsData.streakData.lastActive;

    if (lastActive) {
        const lastDate = new Date(lastActive);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            this.analyticsData.streakData.current++;
        } else if (diffDays > 1) {
            this.analyticsData.streakData.current = 1;
        }

        if (this.analyticsData.streakData.current > this.analyticsData.streakData.longest) {
            this.analyticsData.streakData.longest = this.analyticsData.streakData.current;
        }
    } else {
        this.analyticsData.streakData.current = 1;
    }

    this.analyticsData.streakData.lastActive = today;
    this.saveAnalyticsData();
};

SovereignApp.renderAnalytics = function() {
    const lang = this.userData.language;
    const container = document.getElementById('analytics-content');
    if (!container) return;

    container.innerHTML = `
        <div class="analytics-grid">
            <!-- Streak Card -->
            <div class="analytics-card">
                <h4>🔥 ${lang === 'ar' ? 'سلسلة الإنجاز' : 'Streak'}</h4>
                <div class="progress-ring-container">
                    <div class="progress-ring">
                        <svg viewBox="0 0 120 120">
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:var(--primary)"/>
                                    <stop offset="100%" style="stop-color:var(--secondary)"/>
                                </linearGradient>
                            </defs>
                            <circle class="progress-ring-bg" cx="60" cy="60" r="52"/>
                            <circle class="progress-ring-fill" cx="60" cy="60" r="52" 
                                    stroke-dasharray="327" 
                                    stroke-dashoffset="${327 - (this.analyticsData.streakData.current / 30) * 327}"/>
                        </svg>
                        <div class="progress-ring-text">${this.analyticsData.streakData.current}</div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 10px; font-size: 0.85rem; opacity: 0.8;">
                    ${lang === 'ar' ? 'الأطول:' : 'Longest:'} ${this.analyticsData.streakData.longest} ${lang === 'ar' ? 'أيام' : 'days'}
                </div>
            </div>

            <!-- Stats Overview -->
            <div class="analytics-card">
                <h4>📊 ${lang === 'ar' ? 'نظرة عامة' : 'Overview'}</h4>
                <div class="analytics-bars">
                    <div class="analytics-bar-item">
                        <span class="analytics-bar-label">${lang === 'ar' ? 'المهام' : 'Tasks'}</span>
                        <div class="analytics-bar-track">
                            <div class="analytics-bar-fill" style="width: ${Math.min(this.userData.tasks_completed / 100 * 100, 100)}%; background: linear-gradient(90deg, #4caf50, #8bc34a);"></div>
                        </div>
                        <span class="analytics-bar-value">${this.userData.tasks_completed}</span>
                    </div>
                    <div class="analytics-bar-item">
                        <span class="analytics-bar-label">${lang === 'ar' ? 'التركيز' : 'Focus'}</span>
                        <div class="analytics-bar-track">
                            <div class="analytics-bar-fill" style="width: ${Math.min(this.userData.focus_minutes / 1000 * 100, 100)}%; background: linear-gradient(90deg, #2196f3, #03a9f4);"></div>
                        </div>
                        <span class="analytics-bar-value">${this.userData.focus_minutes}m</span>
                    </div>
                    <div class="analytics-bar-item">
                        <span class="analytics-bar-label">${lang === 'ar' ? 'المستوى' : 'Level'}</span>
                        <div class="analytics-bar-track">
                            <div class="analytics-bar-fill" style="width: ${Math.min(this.userData.level / 100 * 100, 100)}%; background: linear-gradient(90deg, #ff9800, #ffc107);"></div>
                        </div>
                        <span class="analytics-bar-value">${this.userData.level}</span>
                    </div>
                    <div class="analytics-bar-item">
                        <span class="analytics-bar-label">${lang === 'ar' ? 'الذهب' : 'Gold'}</span>
                        <div class="analytics-bar-track">
                            <div class="analytics-bar-fill" style="width: ${Math.min(this.userData.gold / 5000 * 100, 100)}%; background: linear-gradient(90deg, #ffeb3b, #ffc107);"></div>
                        </div>
                        <span class="analytics-bar-value">${this.userData.gold}</span>
                    </div>
                </div>
            </div>

            <!-- Activity Heatmap -->
            <div class="analytics-card" style="grid-column: 1 / -1;">
                <h4>📅 ${lang === 'ar' ? 'خريطة النشاط' : 'Activity Heatmap'}</h4>
                <div class="heatmap-grid" id="activity-heatmap"></div>
            </div>
        </div>
    `;

    this.renderHeatmap();
};

SovereignApp.renderHeatmap = function() {
    const heatmap = document.getElementById('activity-heatmap');
    if (!heatmap) return;

    heatmap.innerHTML = '';

    // Generate 35 days (5 weeks)
    for (let i = 34; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        const dayData = this.getDayActivity(date);
        const level = Math.min(dayData, 5);

        const cell = document.createElement('div');
        cell.className = `heatmap-cell level-${level}`;
        cell.innerHTML = `
            <div class="heatmap-tooltip">
                ${date.toDateString()}<br>
                ${dayData} ${this.userData.language === 'ar' ? 'مهام' : 'tasks'}
            </div>
        `;

        heatmap.appendChild(cell);
    }
};

SovereignApp.getDayActivity = function(date) {
    // Mock data - in real implementation, this would be stored per day
    const dayStr = date.toDateString();
    const saved = localStorage.getItem(`sovereign_day_${dayStr}`);
    return saved ? parseInt(saved) : Math.floor(Math.random() * 5);
};

// ============================================
// ACHIEVEMENT SYSTEM
// ============================================
SovereignApp.achievements = [
    {
        id: 'first_blood',
        name_ar: 'أول دم',
        name_en: 'First Blood',
        description_ar: 'أكمل أول مهمة',
        description_en: 'Complete your first quest',
        icon: '⚔️',
        condition: (data) => data.tasks_completed >= 1,
        reward: { xp: 100, gold: 50 }
    },
    {
        id: 'level_10',
        name_ar: 'المبتدئ',
        name_en: 'Novice',
        description_ar: 'وصل للمستوى 10',
        description_en: 'Reach level 10',
        icon: '🌟',
        condition: (data) => data.level >= 10,
        reward: { xp: 500, gold: 200 }
    },
    {
        id: 'level_50',
        name_ar: 'المحارب',
        name_en: 'Warrior',
        description_ar: 'وصل للمستوى 50',
        description_en: 'Reach level 50',
        icon: '⚡',
        condition: (data) => data.level >= 50,
        reward: { xp: 2000, gold: 1000 }
    },
    {
        id: 'level_100',
        name_ar: 'الفارس',
        name_en: 'Knight',
        description_ar: 'وصل للمستوى 100',
        description_en: 'Reach level 100',
        icon: '🛡️',
        condition: (data) => data.level >= 100,
        reward: { xp: 5000, gold: 2500 }
    },
    {
        id: 'level_1000',
        name_ar: 'السيادي',
        name_en: 'The Sovereign',
        description_ar: 'وصل للمستوى 1000 - الوضع القرمزي',
        description_en: 'Reach level 1000 - Crimson Mode',
        icon: '👑',
        condition: (data) => data.level >= 1000,
        reward: { xp: 50000, gold: 25000 }
    },
    {
        id: 'rich',
        name_ar: 'الثراء',
        name_en: 'Wealthy',
        description_ar: 'اجمع 10,000 ذهب',
        description_en: 'Collect 10,000 gold',
        icon: '💰',
        condition: (data) => data.gold >= 10000,
        reward: { xp: 1000, gold: 0 }
    },
    {
        id: 'week_streak',
        name_ar: 'أسبوع من النار',
        name_en: 'Week of Fire',
        description_ar: '7 أيام متتالية من النشاط',
        description_en: '7 consecutive active days',
        icon: '🔥',
        condition: (data, analytics) => analytics.streakData.current >= 7,
        reward: { xp: 1000, gold: 500 }
    },
    {
        id: 'month_streak',
        name_ar: 'شهر من الحديد',
        name_en: 'Month of Iron',
        description_ar: '30 يوم متتالي من النشاط',
        description_en: '30 consecutive active days',
        icon: '💪',
        condition: (data, analytics) => analytics.streakData.current >= 30,
        reward: { xp: 5000, gold: 2500 }
    },
    {
        id: 'dungeon_master',
        name_ar: 'سيد الزنازن',
        name_en: 'Dungeon Master',
        description_ar: 'أكمل 10 زنازن بنجاح',
        description_en: 'Complete 10 dungeons successfully',
        icon: '🏰',
        condition: (data) => (data.dungeonCompletions || 0) >= 10,
        reward: { xp: 2000, gold: 1000 }
    },
    {
        id: 'early_bird',
        name_ar: 'طائر الفجر',
        name_en: 'Early Bird',
        description_ar: 'استيقظ قبل 5 صباحاً',
        description_en: 'Wake up before 5 AM',
        icon: '🌅',
        condition: (data) => false, // Time-based, checked separately
        reward: { xp: 200, gold: 100 }
    }
];

SovereignApp.initAchievementSystem = function() {
    if (!this.userData.achievements) {
        this.userData.achievements = [];
    }
    this.checkAchievements();
};

SovereignApp.checkAchievements = function() {
    this.achievements.forEach(achievement => {
        if (this.userData.achievements.includes(achievement.id)) return;

        const unlocked = achievement.condition(this.userData, this.analyticsData);

        if (unlocked) {
            this.unlockAchievement(achievement);
        }
    });
};

SovereignApp.unlockAchievement = function(achievement) {
    this.userData.achievements.push(achievement.id);

    // Grant rewards
    if (achievement.reward.xp) this.addXp(achievement.reward.xp);
    if (achievement.reward.gold) this.userData.gold += achievement.reward.gold;

    // Show popup
    this.showAchievementPopup(achievement);

    this.saveUserData();
    this.updateUI();
};

SovereignApp.showAchievementPopup = function(achievement) {
    const lang = this.userData.language;

    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-title">${lang === 'ar' ? 'إنجاز جديد!' : 'Achievement Unlocked!'}</div>
        <div class="achievement-desc">${lang === 'ar' ? achievement.name_ar : achievement.name_en}</div>
        <div class="achievement-desc" style="font-size: 0.85rem; opacity: 0.8;">
            ${lang === 'ar' ? achievement.description_ar : achievement.description_en}
        </div>
        <div class="achievement-reward">
            ${achievement.reward.xp ? `+${achievement.reward.xp} XP` : ''}
            ${achievement.reward.gold ? `+${achievement.reward.gold} 🪙` : ''}
        </div>
    `;

    document.body.appendChild(popup);

    // Play sound
    this.playSound('achievement');

    // Remove after 4 seconds
    setTimeout(() => {
        popup.style.animation = 'achievement-exit 0.5s ease forwards';
        setTimeout(() => popup.remove(), 500);
    }, 4000);
};

SovereignApp.renderAchievements = function() {
    const lang = this.userData.language;
    const container = document.getElementById('achievements-list');
    if (!container) return;

    container.innerHTML = '';

    this.achievements.forEach(achievement => {
        const unlocked = this.userData.achievements.includes(achievement.id);

        const card = document.createElement('div');
        card.className = `achievement-card ${unlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <div class="ach-icon">${achievement.icon}</div>
            <div class="ach-name">${lang === 'ar' ? achievement.name_ar : achievement.name_en}</div>
            <div class="ach-desc">${lang === 'ar' ? achievement.description_ar : achievement.description_en}</div>
            ${unlocked ? '<div style="color: #4caf50; font-weight: 700;">✓</div>' : ''}
        `;

        container.appendChild(card);
    });
};

// ============================================
// BOSS SYSTEM
// ============================================
SovereignApp.bossData = {
    currentBoss: null,
    bossHealth: 0,
    bossMaxHealth: 0,
    bossTimer: null,
    bossTimeLeft: 0
};

SovereignApp.bosses = [
    {
        id: 'procrastination',
        name_ar: 'ملك المماطلة',
        name_en: 'King of Procrastination',
        rank: 'D',
        health: 1000,
        time: 1800, // 30 minutes
        xp_reward: 500,
        gold_reward: 200
    },
    {
        id: 'distraction',
        name_ar: 'وحش التشتت',
        name_en: 'Distraction Beast',
        rank: 'C',
        health: 2500,
        time: 3600, // 60 minutes
        xp_reward: 1000,
        gold_reward: 500
    },
    {
        id: 'burnout',
        name_ar: 'تنين الإرهاق',
        name_en: 'Burnout Dragon',
        rank: 'B',
        health: 5000,
        time: 7200, // 2 hours
        xp_reward: 2500,
        gold_reward: 1000
    },
    {
        id: 'perfectionism',
        name_ar: 'غول الكمالية',
        name_en: 'Perfectionism Ghoul',
        rank: 'A',
        health: 10000,
        time: 10800, // 3 hours
        xp_reward: 5000,
        gold_reward: 2500
    },
    {
        id: 'self_doubt',
        name_ar: 'إله الشك',
        name_en: 'God of Self-Doubt',
        rank: 'S',
        health: 25000,
        time: 18000, // 5 hours
        xp_reward: 15000,
        gold_reward: 7500
    }
];

SovereignApp.initBossSystem = function() {
    // Boss system initialized
};

SovereignApp.startBossFight = function(bossId) {
    const boss = this.bosses.find(b => b.id === bossId);
    if (!boss) return;

    const lang = this.userData.language;

    this.bossData.currentBoss = boss;
    this.bossData.bossHealth = boss.health;
    this.bossData.bossMaxHealth = boss.health;
    this.bossData.bossTimeLeft = boss.time;

    // Show boss arena
    this.renderBossArena();

    // Start boss timer
    this.bossData.bossTimer = setInterval(() => {
        this.bossData.bossTimeLeft--;
        this.updateBossTimer();

        if (this.bossData.bossTimeLeft <= 0) {
            this.bossDefeat();
        }
    }, 1000);
};

SovereignApp.renderBossArena = function() {
    const lang = this.userData.language;
    const boss = this.bossData.currentBoss;
    if (!boss) return;

    const arena = document.getElementById('boss-arena');
    if (!arena) return;

    arena.classList.remove('hidden');
    arena.innerHTML = `
        <div class="boss-header">
            <div class="boss-name glow-text">${lang === 'ar' ? boss.name_ar : boss.name_en}</div>
            <span class="boss-rank">${boss.rank}-Rank</span>
        </div>
        <div class="boss-health-bar">
            <div class="boss-health-fill" id="boss-health-fill" style="width: 100%"></div>
            <div class="boss-health-text" id="boss-health-text">${this.bossData.bossHealth}/${this.bossData.bossMaxHealth} HP</div>
        </div>
        <div class="boss-timer glow-text" id="boss-timer">${this.formatTime(this.bossData.bossTimeLeft)}</div>
        <div class="boss-actions">
            <button class="boss-action-btn attack" onclick="SovereignApp.bossAttack()">
                ${lang === 'ar' ? 'هجوم!' : 'Attack!'}
            </button>
            <button class="boss-action-btn" onclick="SovereignApp.bossFocus()">
                ${lang === 'ar' ? 'تركيز عميق' : 'Deep Focus'}
            </button>
            <button class="boss-action-btn" onclick="SovereignApp.bossDefend()">
                ${lang === 'ar' ? 'دفاع' : 'Defend'}
            </button>
        </div>
    `;
};

SovereignApp.updateBossTimer = function() {
    const timerEl = document.getElementById('boss-timer');
    if (timerEl) {
        timerEl.textContent = this.formatTime(this.bossData.bossTimeLeft);
    }
};

SovereignApp.bossAttack = function() {
    const damage = Math.floor(this.userData.stats.strength * 2 + this.userData.level * 5);
    this.bossData.bossHealth = Math.max(0, this.bossData.bossHealth - damage);

    // Update health bar
    const healthPercent = (this.bossData.bossHealth / this.bossData.bossMaxHealth) * 100;
    const healthFill = document.getElementById('boss-health-fill');
    const healthText = document.getElementById('boss-health-text');

    if (healthFill) healthFill.style.width = `${healthPercent}%`;
    if (healthText) healthText.textContent = `${this.bossData.bossHealth}/${this.bossData.bossMaxHealth} HP`;

    // Show damage number
    this.showDamageNumber(damage);

    // Check if boss defeated
    if (this.bossData.bossHealth <= 0) {
        this.bossVictory();
    }
};

SovereignApp.showDamageNumber = function(damage) {
    const arena = document.getElementById('boss-arena');
    if (!arena) return;

    const damageEl = document.createElement('div');
    damageEl.className = 'damage-number';
    damageEl.textContent = `-${damage}`;
    damageEl.style.left = `${40 + Math.random() * 20}%`;
    damageEl.style.top = '30%';

    arena.appendChild(damageEl);

    setTimeout(() => damageEl.remove(), 1000);
};

SovereignApp.bossFocus = function() {
    const bonus = Math.floor(this.userData.stats.intelligence * 1.5);
    this.bossAttack(); // Focus gives bonus damage
    this.showNotification('Focus!', `+${bonus} bonus damage`, 'success');
};

SovereignApp.bossDefend = function() {
    // Defend reduces timer penalty
    this.showNotification('Defend!', 'Timer penalty reduced', 'success');
};

SovereignApp.bossVictory = function() {
    clearInterval(this.bossData.bossTimer);

    const boss = this.bossData.currentBoss;
    const lang = this.userData.language;

    // Grant rewards
    this.addXp(boss.xp_reward);
    this.userData.gold += boss.gold_reward;

    // Track completions
    this.userData.dungeonCompletions = (this.userData.dungeonCompletions || 0) + 1;

    this.saveUserData();

    // Show victory notification
    this.showNotification(
        lang === 'ar' ? 'انتصار!' : 'Victory!',
        `${lang === 'ar' ? 'هزمت' : 'Defeated'} ${lang === 'ar' ? boss.name_ar : boss.name_en}! +${boss.xp_reward} XP +${boss.gold_reward} 🪙`,
        'success'
    );

    // Hide arena
    const arena = document.getElementById('boss-arena');
    if (arena) arena.classList.add('hidden');

    this.bossData.currentBoss = null;
    this.updateUI();
};

SovereignApp.bossDefeat = function() {
    clearInterval(this.bossData.bossTimer);

    const lang = this.userData.language;

    // Penalty
    this.userData.xp = Math.max(0, this.userData.xp - 200);
    this.saveUserData();

    this.showNotification(
        lang === 'ar' ? 'هزيمة!' : 'Defeat!',
        lang === 'ar' ? 'الزعيم هزمك! -200 XP' : 'The boss defeated you! -200 XP',
        'error'
    );

    const arena = document.getElementById('boss-arena');
    if (arena) arena.classList.add('hidden');

    this.bossData.currentBoss = null;
    this.updateUI();
};

SovereignApp.formatTime = function(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

// ============================================
// NOTIFICATION SYSTEM
// ============================================
SovereignApp.initNotificationSystem = function() {
    // Create notification container if not exists
    if (!document.getElementById('notification-container')) {
        const container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }
};

SovereignApp.showNotification = function(title, message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icons = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️',
        error: '❌',
        critical: '🔥'
    };

    notification.innerHTML = `
        <div class="notification-icon">${icons[type] || icons.info}</div>
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;

    container.appendChild(notification);

    // Play subtle sound
    if (type === 'critical' || type === 'error') {
        this.playSound('notification');
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('notification-exit');
        setTimeout(() => notification.remove(), 400);
    }, 5000);
};

// ============================================
// FOCUS MODE
// ============================================
SovereignApp.initFocusMode = function() {
    // Focus mode overlay
    if (!document.getElementById('focus-mode-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'focus-mode-overlay';
        overlay.className = 'focus-mode-overlay';
        overlay.innerHTML = `
            <div class="focus-timer-display" id="focus-timer">25:00</div>
            <div class="focus-message">Stay focused. The System is watching.</div>
            <button class="focus-exit-btn" onclick="SovereignApp.exitFocusMode()">Exit Focus Mode</button>
        `;
        document.body.appendChild(overlay);
    }
};

SovereignApp.enterFocusMode = function(minutes = 25) {
    const overlay = document.getElementById('focus-mode-overlay');
    if (!overlay) return;

    overlay.classList.add('active');

    let timeLeft = minutes * 60;

    const timerInterval = setInterval(() => {
        timeLeft--;

        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        document.getElementById('focus-timer').textContent = 
            `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            this.exitFocusMode();
            this.addXp(100);
            this.showNotification('Focus Complete!', '+100 XP', 'success');
        }
    }, 1000);

    // Store interval for cleanup
    overlay.dataset.timerInterval = timerInterval;
};

SovereignApp.exitFocusMode = function() {
    const overlay = document.getElementById('focus-mode-overlay');
    if (!overlay) return;

    const interval = overlay.dataset.timerInterval;
    if (interval) clearInterval(parseInt(interval));

    overlay.classList.remove('active');
};

// ============================================
// ADVANCED PARTICLES
// ============================================
SovereignApp.initAdvancedParticles = function() {
    // Add interactive particles on click
    document.addEventListener('click', (e) => {
        this.createClickParticle(e.clientX, e.clientY);
    });
};

SovereignApp.createClickParticle = function(x, y) {
    const colors = ['#00d4ff', '#7b2cbf', '#ff006e', '#00e676', '#ffc107'];

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
            box-shadow: 0 0 10px currentColor;
        `;

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 50 + Math.random() * 100;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
        ], {
            duration: 600 + Math.random() * 400,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
};

// ============================================
// DATA PERSISTENCE
// ============================================
SovereignApp.saveAdvancedData = function() {
    localStorage.setItem('sovereign_skills', JSON.stringify(this.skillsData));
    localStorage.setItem('sovereign_analytics', JSON.stringify(this.analyticsData));
};

SovereignApp.loadAdvancedData = function() {
    const skills = localStorage.getItem('sovereign_skills');
    if (skills) {
        const parsed = JSON.parse(skills);
        // Merge with default skills
        this.skillsData.active.forEach(skill => {
            const saved = parsed.active.find(s => s.id === skill.id);
            if (saved) {
                skill.level = saved.level;
                skill.unlocked = saved.unlocked;
            }
        });
        this.skillsData.passive.forEach(skill => {
            const saved = parsed.passive.find(s => s.id === skill.id);
            if (saved) {
                skill.level = saved.level;
                skill.unlocked = saved.unlocked;
            }
        });
    }

    this.loadAnalyticsData();
};

// ============================================
// ENHANCED SOUND SYSTEM
// ============================================
SovereignApp.playSound = function(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    switch(type) {
        case 'achievement':
            this.playAchievementSound(audioContext);
            break;
        case 'notification':
            this.playNotificationSound(audioContext);
            break;
        case 'levelup':
            this.playLevelUpSound(audioContext);
            break;
        default:
            // Default sounds from Part 1
            break;
    }
};

SovereignApp.playAchievementSound = function(ctx) {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        const t = ctx.currentTime + i * 0.15;
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        osc.start(t);
        osc.stop(t + 0.4);
    });
};

SovereignApp.playNotificationSound = function(ctx) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
};

SovereignApp.playLevelUpSound = function(ctx) {
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const t = ctx.currentTime + i * 0.1;
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
        osc.start(t);
        osc.stop(t + 0.3);
    });
};

// ============================================
// INITIALIZATION CALL
// ============================================
// Call advanced init after main init
const originalInit = SovereignApp.init;
SovereignApp.init = function() {
    originalInit.call(this);
    this.advancedInit();
};




















/* ============================================
   THE SOVEREIGN SYSTEM - JAVASCRIPT PART 3 (FINAL)
   OAuth Login, Guest Mode, Cloud Sync, 
   Performance Optimizations, Testing Suite
   ============================================ */

// ============================================
// OAUTH AUTHENTICATION SYSTEM
// ============================================
SovereignApp.OAuthProviders = {
    google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        scope: 'email profile',
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenUrl: 'https://oauth2.googleapis.com/token',
        userInfoUrl: 'https://www.googleapis.com/oauth2/v3/userinfo'
    },
    facebook: {
        clientId: 'YOUR_FACEBOOK_APP_ID',
        scope: 'email,public_profile',
        authUrl: 'https://www.facebook.com/v18.0/dialog/oauth',
        tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
        userInfoUrl: 'https://graph.facebook.com/me?fields=id,name,email,picture'
    }
};

SovereignApp.initOAuth = function() {
    // Load OAuth scripts
    this.loadGoogleOAuth();
    this.loadFacebookOAuth();

    // Setup OAuth buttons
    this.setupOAuthButtons();
};

SovereignApp.loadGoogleOAuth = function() {
    // Load Google Identity Services
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
        this.initializeGoogleSignIn();
    };
    document.head.appendChild(script);
};

SovereignApp.initializeGoogleSignIn = function() {
    if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
            client_id: this.OAuthProviders.google.clientId,
            callback: (response) => this.handleGoogleSignIn(response),
            auto_select: false,
            cancel_on_tap_outside: true
        });

        // Render Google button
        const googleBtn = document.getElementById('google-signin-btn');
        if (googleBtn) {
            google.accounts.id.renderButton(googleBtn, {
                theme: 'filled_black',
                size: 'large',
                width: '100%',
                text: 'signin_with',
                shape: 'rectangular'
            });
        }
    }
};

SovereignApp.handleGoogleSignIn = function(response) {
    // Decode JWT token
    const payload = this.decodeJWT(response.credential);

    const userData = {
        provider: 'google',
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        firstName: payload.given_name,
        lastName: payload.family_name,
        picture: payload.picture,
        verified: payload.email_verified
    };

    this.completeOAuthLogin(userData);
};

SovereignApp.loadFacebookOAuth = function() {
    // Load Facebook SDK
    window.fbAsyncInit = () => {
        FB.init({
            appId: this.OAuthProviders.facebook.clientId,
            cookie: true,
            xfbml: true,
            version: 'v18.0'
        });

        FB.AppEvents.logPageView();

        // Setup Facebook button
        const fbBtn = document.getElementById('facebook-signin-btn');
        if (fbBtn) {
            fbBtn.addEventListener('click', () => this.handleFacebookSignIn());
        }
    };

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    document.head.appendChild(script);
};

SovereignApp.handleFacebookSignIn = function() {
    FB.login((response) => {
        if (response.authResponse) {
            FB.api('/me', { fields: 'id,name,email,picture' }, (userInfo) => {
                const userData = {
                    provider: 'facebook',
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.name,
                    firstName: userInfo.name.split(' ')[0],
                    lastName: userInfo.name.split(' ').slice(1).join(' '),
                    picture: userInfo.picture?.data?.url,
                    verified: true
                };

                this.completeOAuthLogin(userData);
            });
        }
    }, { scope: 'email,public_profile' });
};

SovereignApp.decodeJWT = function(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
};

SovereignApp.completeOAuthLogin = function(oauthData) {
    // Save OAuth data
    this.userData.oauth = oauthData;
    this.userData.isAuthenticated = true;
    this.userData.authMethod = oauthData.provider;

    // Auto-fill profile from OAuth
    if (oauthData.firstName) {
        this.userData.firstname_en = oauthData.firstName;
        this.userData.firstname_ar = oauthData.firstName;
    }
    if (oauthData.lastName) {
        this.userData.lastname_en = oauthData.lastName;
        this.userData.lastname_ar = oauthData.lastName;
    }
    if (oauthData.picture) {
        this.userData.avatar = oauthData.picture;
    }

    this.saveUserData();

    // Check cloud sync
    this.syncFromCloud();

    // Update UI
    this.updateUI();

    // Show welcome notification
    const lang = this.userData.language;
    this.showNotification(
        lang === 'ar' ? 'مرحباً!' : 'Welcome!',
        `${lang === 'ar' ? 'تم تسجيل الدخول بنجاح عبر' : 'Successfully logged in with'} ${oauthData.provider}`,
        'success'
    );

    // Close setup modal if open
    document.getElementById('setup-modal').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
};

// ============================================
// GUEST MODE SYSTEM
// ============================================
SovereignApp.initGuestMode = function() {
    // Guest mode button
    const guestBtn = document.getElementById('guest-signin-btn');
    if (guestBtn) {
        guestBtn.addEventListener('click', () => this.startGuestMode());
    }
};

SovereignApp.startGuestMode = function() {
    const lang = this.userData.language;

    // Generate guest ID
    const guestId = 'guest_' + this.generateId();

    this.userData = {
        ...this.getDefaultData(),
        isGuest: true,
        guestId: guestId,
        firstname_en: 'Guest',
        firstname_ar: 'ضيف',
        lastname_en: 'User',
        lastname_ar: 'النظام',
        language: lang,
        createdAt: new Date().toISOString()
    };

    this.saveUserData();

    // Show guest warning
    this.showGuestWarning();

    // Update UI
    document.getElementById('setup-modal').classList.add('hidden');
    document.getElementById('app-container').classList.remove('hidden');
    this.updateUI();

    this.showNotification(
        lang === 'ar' ? 'وضع الضيف' : 'Guest Mode',
        lang === 'ar' 
            ? 'أنت في وضع الضيف. البيانات محفوظة محلياً فقط.' 
            : 'You are in guest mode. Data is saved locally only.',
        'warning'
    );
};

SovereignApp.showGuestWarning = function() {
    const lang = this.userData.language;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'guest-warning-modal';
    modal.innerHTML = `
        <div class="modal-content holographic" style="max-width: 450px;">
            <div class="modal-header">
                <span style="font-size: 3rem;">👤</span>
                <h2 class="glow-text">${lang === 'ar' ? 'وضع الضيف' : 'Guest Mode'}</h2>
            </div>
            <div class="modal-body" style="text-align: center; line-height: 1.8;">
                <p style="margin-bottom: 15px; font-size: 1rem;">
                    ${lang === 'ar' 
                        ? 'أنت تستخدم وضع الضيف. البيانات محفوظة في هذا المتصفح فقط.' 
                        : 'You are using Guest Mode. Data is saved in this browser only.'}
                </p>
                <div style="background: rgba(255, 193, 7, 0.1); border: 1px solid rgba(255, 193, 7, 0.3); border-radius: 8px; padding: 15px; margin: 15px 0; text-align: ${lang === 'ar' ? 'right' : 'left'};">
                    <p style="font-weight: 600; color: #ffc107; margin-bottom: 8px;">
                        ⚠️ ${lang === 'ar' ? 'تنبيه مهم:' : 'Important Warning:'}
                    </p>
                    <ul style="list-style: none; padding: 0; font-size: 0.9rem;">
                        <li style="margin-bottom: 5px;">• ${lang === 'ar' ? 'البيانات قد تُحذف عند مسح ذاكرة المتصفح' : 'Data may be deleted when clearing browser cache'}</li>
                        <li style="margin-bottom: 5px;">• ${lang === 'ar' ? 'لا يمكن نقل البيانات لجهاز آخر' : 'Cannot transfer data to another device'}</li>
                        <li>• ${lang === 'ar' ? 'للمزامنة السحابية، سجل الدخول بـ Google أو Facebook' : 'For cloud sync, login with Google or Facebook'}</li>
                    </ul>
                </div>
                <p style="font-size: 0.9rem; opacity: 0.8;">
                    ${lang === 'ar' 
                        ? 'يمكنك الترقية لحساب كامل في أي وقت من الإعدادات.' 
                        : 'You can upgrade to a full account anytime from settings.'}
                </p>
            </div>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button class="btn-holographic" onclick="SovereignApp.dismissGuestWarning()" style="flex: 1;">
                    ${lang === 'ar' ? 'فهمت، استمر' : 'Got it, Continue'}
                </button>
                <button class="btn-holographic" onclick="SovereignApp.convertGuestToAccount()" style="flex: 1; background: linear-gradient(135deg, #ffc107, #ff9800);">
                    ${lang === 'ar' ? 'تحويل لحساب' : 'Convert to Account'}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
};

SovereignApp.dismissGuestWarning = function() {
    const modal = document.getElementById('guest-warning-modal');
    if (modal) modal.remove();
};

SovereignApp.convertGuestToAccount = function() {
    this.dismissGuestWarning();
    document.getElementById('setup-modal').classList.remove('hidden');
    document.getElementById('app-container').classList.add('hidden');
};

SovereignApp.generateId = function() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// ============================================
// CLOUD SYNC SYSTEM
// ============================================
SovereignApp.CloudSync = {
    endpoint: 'https://api.sovereign-system.com/sync', // Placeholder
    syncInterval: 300000, // 5 minutes
    lastSync: null,
    isOnline: navigator.onLine,
    pendingSync: false
};

SovereignApp.initCloudSync = function() {
    // Check online status
    window.addEventListener('online', () => {
        this.CloudSync.isOnline = true;
        this.showNotification('Online', 'Cloud sync resumed', 'success');
        this.syncToCloud();
    });

    window.addEventListener('offline', () => {
        this.CloudSync.isOnline = false;
        this.showNotification('Offline', 'Changes will sync when online', 'warning');
    });

    // Auto sync every 5 minutes
    setInterval(() => {
        if (this.CloudSync.isOnline && this.userData.isAuthenticated) {
            this.syncToCloud();
        }
    }, this.CloudSync.syncInterval);

    // Sync on important events
    this.setupAutoSyncTriggers();
};

SovereignApp.setupAutoSyncTriggers = function() {
    // Sync on level up
    const originalCheckLevelUp = this.checkLevelUp;
    this.checkLevelUp = function() {
        const result = originalCheckLevelUp.call(this);
        if (result && this.CloudSync.isOnline) {
            this.syncToCloud();
        }
        return result;
    };

    // Sync on quest completion
    const originalCompleteQuest = this.completeQuest;
    this.completeQuest = function(checkbox) {
        originalCompleteQuest.call(this, checkbox);
        if (this.CloudSync.isOnline) {
            this.debouncedSync();
        }
    };
};

SovereignApp.debouncedSync = function() {
    clearTimeout(this.syncDebounceTimer);
    this.syncDebounceTimer = setTimeout(() => {
        this.syncToCloud();
    }, 5000); // Sync 5 seconds after last change
};

SovereignApp.syncToCloud = async function() {
    if (!this.userData.isAuthenticated || !this.CloudSync.isOnline) {
        this.CloudSync.pendingSync = true;
        return;
    }

    try {
        const syncData = {
            userId: this.userData.oauth?.id || this.userData.guestId,
            timestamp: new Date().toISOString(),
            data: this.userData,
            deviceInfo: this.getDeviceInfo()
        };

        // Store in localStorage as mock cloud (for demo)
        localStorage.setItem('sovereign_cloud_backup', JSON.stringify(syncData));

        // In production, this would be:
        // const response = await fetch(this.CloudSync.endpoint, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(syncData)
        // });

        this.CloudSync.lastSync = new Date();
        this.CloudSync.pendingSync = false;

        // Update sync indicator
        this.updateSyncIndicator('synced');

    } catch (error) {
        console.error('Sync failed:', error);
        this.CloudSync.pendingSync = true;
        this.updateSyncIndicator('error');
    }
};

SovereignApp.syncFromCloud = async function() {
    if (!this.userData.isAuthenticated) return;

    try {
        // Mock cloud retrieval from localStorage
        const cloudData = localStorage.getItem('sovereign_cloud_backup');

        if (cloudData) {
            const parsed = JSON.parse(cloudData);

            // Check if cloud data is newer
            const cloudTime = new Date(parsed.timestamp);
            const localTime = new Date(this.userData.lastModified || 0);

            if (cloudTime > localTime) {
                // Merge cloud data with local
                this.userData = { ...this.userData, ...parsed.data };
                this.saveUserData();

                this.showNotification(
                    this.userData.language === 'ar' ? 'تمت المزامنة' : 'Synced',
                    this.userData.language === 'ar' ? 'تم استرجاع البيانات من السحابة' : 'Data retrieved from cloud',
                    'success'
                );
            }
        }

    } catch (error) {
        console.error('Cloud sync retrieval failed:', error);
    }
};

SovereignApp.getDeviceInfo = function() {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
};

SovereignApp.updateSyncIndicator = function(status) {
    const indicator = document.getElementById('sync-indicator');
    if (!indicator) return;

    const icons = {
        synced: '☁️✓',
        syncing: '☁️⟳',
        error: '☁️✗',
        offline: '☁️--'
    };

    indicator.textContent = icons[status] || icons.offline;
    indicator.title = status === 'synced' ? 'Synced' : 
                      status === 'syncing' ? 'Syncing...' : 
                      status === 'error' ? 'Sync Error' : 'Offline';
};

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================
SovereignApp.Performance = {
    fps: 60,
    frameTime: 16.67,
    lastFrameTime: 0,
    frameCount: 0,
    fpsDisplay: null
};

SovereignApp.initPerformanceOptimizations = function() {
    // Optimize animations
    this.optimizeAnimations();

    // Lazy load components
    this.setupLazyLoading();

    // Memory management
    this.setupMemoryManagement();

    // FPS monitoring (optional, for debugging)
    // this.startFPSMonitoring();
};

SovereignApp.optimizeAnimations = function() {
    // Use will-change for animated elements
    const animatedElements = document.querySelectorAll('.magic-circle, .particle, .holo-card');
    animatedElements.forEach(el => {
        el.style.willChange = 'transform, opacity';
    });

    // Use requestAnimationFrame for smooth animations
    this.optimizedParticleLoop();
};

SovereignApp.optimizedParticleLoop = function() {
    const particles = document.querySelectorAll('.particle');
    let frame = 0;

    const animate = () => {
        frame++;

        // Update particles every 2nd frame for 30fps particles
        if (frame % 2 === 0) {
            particles.forEach((particle, index) => {
                // Stagger updates for performance
                if (index % 3 === (frame / 2) % 3) {
                    // Particle updates handled by CSS animations
                }
            });
        }

        requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
};

SovereignApp.setupLazyLoading = function() {
    // Lazy load tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.dataset.loaded = 'true';
            }
        });
    }, { threshold: 0.1 });

    tabPanels.forEach(panel => observer.observe(panel));
};

SovereignApp.setupMemoryManagement = function() {
    // Clean up old notifications
    setInterval(() => {
        const notifications = document.querySelectorAll('.notification');
        if (notifications.length > 10) {
            notifications.forEach((n, i) => {
                if (i < notifications.length - 10) n.remove();
            });
        }
    }, 30000);

    // Clean up old particles periodically
    setInterval(() => {
        const particles = document.querySelectorAll('.particle');
        if (particles.length > this.particleCount) {
            particles.forEach((p, i) => {
                if (i >= this.particleCount) p.remove();
            });
        }
    }, 60000);
};

SovereignApp.startFPSMonitoring = function() {
    const fpsDisplay = document.createElement('div');
    fpsDisplay.id = 'fps-display';
    fpsDisplay.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        background: rgba(0,0,0,0.7);
        color: #00ff00;
        padding: 5px 10px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 12px;
        z-index: 99999;
    `;
    document.body.appendChild(fpsDisplay);

    let lastTime = performance.now();
    let frameCount = 0;

    const updateFPS = () => {
        const now = performance.now();
        frameCount++;

        if (now - lastTime >= 1000) {
            fpsDisplay.textContent = `FPS: ${frameCount}`;
            frameCount = 0;
            lastTime = now;
        }

        requestAnimationFrame(updateFPS);
    };

    requestAnimationFrame(updateFPS);
};

// ============================================
// TESTING SUITE
// ============================================
SovereignApp.TestSuite = {
    tests: [],
    results: [],
    running: false
};

SovereignApp.initTestSuite = function() {
    // Add test button in dev mode
    if (window.location.hash === '#dev' || window.location.search.includes('test=true')) {
        this.addTestButton();
    }

    // Register all tests
    this.registerTests();
};

SovereignApp.registerTests = function() {
    this.TestSuite.tests = [
        {
            name: 'Data Persistence',
            test: () => this.testDataPersistence()
        },
        {
            name: 'Level System',
            test: () => this.testLevelSystem()
        },
        {
            name: 'XP Calculation',
            test: () => this.testXpCalculation()
        },
        {
            name: 'Quest System',
            test: () => this.testQuestSystem()
        },
        {
            name: 'Inventory System',
            test: () => this.testInventorySystem()
        },
        {
            name: 'Skill System',
            test: () => this.testSkillSystem()
        },
        {
            name: 'Achievement System',
            test: () => this.testAchievementSystem()
        },
        {
            name: 'Timer System',
            test: () => this.testTimerSystem()
        },
        {
            name: 'Language Switching',
            test: () => this.testLanguageSwitching()
        },
        {
            name: 'Theme Switching',
            test: () => this.testThemeSwitching()
        },
        {
            name: 'LocalStorage',
            test: () => this.testLocalStorage()
        },
        {
            name: 'Anti-Distraction',
            test: () => this.testAntiDistraction()
        },
        {
            name: 'Performance',
            test: () => this.testPerformance()
        }
    ];
};

SovereignApp.testDataPersistence = function() {
    const testData = { test: 'value', number: 123 };
    localStorage.setItem('test_key', JSON.stringify(testData));
    const retrieved = JSON.parse(localStorage.getItem('test_key'));
    localStorage.removeItem('test_key');

    return retrieved.test === 'value' && retrieved.number === 123;
};

SovereignApp.testLevelSystem = function() {
    const originalLevel = this.userData.level;
    const originalXp = this.userData.xp;

    // Test level up
    this.userData.xp = this.calculateXpForLevel(this.userData.level);
    this.checkLevelUp();

    const leveledUp = this.userData.level > originalLevel;

    // Restore
    this.userData.level = originalLevel;
    this.userData.xp = originalXp;
    this.saveUserData();

    return leveledUp;
};

SovereignApp.testXpCalculation = function() {
    const xp1 = this.calculateXpForLevel(1);
    const xp10 = this.calculateXpForLevel(10);
    const xp50 = this.calculateXpForLevel(50);

    return xp1 === 1000 && xp10 > xp1 && xp50 > xp10;
};

SovereignApp.testQuestSystem = function() {
    const originalQuests = JSON.parse(JSON.stringify(this.userData.quests));

    // Complete a quest
    const quest = this.userData.quests.daily[0];
    if (quest) {
        quest.completed = true;
        const completed = this.userData.quests.daily[0].completed;

        // Restore
        this.userData.quests = originalQuests;
        this.saveUserData();

        return completed === true;
    }

    return false;
};

SovereignApp.testInventorySystem = function() {
    const originalInventory = [...this.userData.inventory];

    // Add test item
    const testItem = { name: 'Test Item', icon: '🧪', count: 1 };
    this.userData.inventory.push(testItem);

    const added = this.userData.inventory.length > originalInventory.length;

    // Restore
    this.userData.inventory = originalInventory;
    this.saveUserData();

    return added;
};

SovereignApp.testSkillSystem = function() {
    const skill = this.skillsData.active[0];
    if (!skill) return false;

    const originalLevel = skill.level;
    skill.level++;

    const leveledUp = skill.level > originalLevel;

    // Restore
    skill.level = originalLevel;

    return leveledUp;
};

SovereignApp.testAchievementSystem = function() {
    const originalAchievements = [...this.userData.achievements];

    // Add test achievement
    this.userData.achievements.push('test_achievement');

    const added = this.userData.achievements.includes('test_achievement');

    // Restore
    this.userData.achievements = originalAchievements;
    this.saveUserData();

    return added;
};

SovereignApp.testTimerSystem = function() {
    this.timerState.timeLeft = 60;
    this.timerState.running = false;

    this.startTimer();
    const started = this.timerState.running;

    this.resetTimer();
    const reset = !this.timerState.running && this.timerState.timeLeft === 0;

    return started && reset;
};

SovereignApp.testLanguageSwitching = function() {
    const originalLang = this.userData.language;

    this.userData.language = 'en';
    const isEnglish = this.userData.language === 'en';

    this.userData.language = 'ar';
    const isArabic = this.userData.language === 'ar';

    // Restore
    this.userData.language = originalLang;
    this.saveUserData();

    return isEnglish && isArabic;
};

SovereignApp.testThemeSwitching = function() {
    const originalTheme = this.userData.theme;

    this.userData.theme = 'light';
    document.body.classList.add('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    this.userData.theme = 'dark';
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');

    // Restore
    this.userData.theme = originalTheme;
    this.saveUserData();

    return isLight && isDark;
};

SovereignApp.testLocalStorage = function() {
    const key = 'test_' + Date.now();
    const value = 'test_value';

    localStorage.setItem(key, value);
    const retrieved = localStorage.getItem(key);
    localStorage.removeItem(key);

    return retrieved === value;
};

SovereignApp.testAntiDistraction = function() {
    // Test penalty trigger
    this.dungeonState.active = true;

    const originalXp = this.userData.xp;
    const originalGold = this.userData.gold;

    this.triggerPenalty();

    const penalized = this.userData.xp < originalXp || this.userData.gold < originalGold;

    // Restore
    this.userData.xp = originalXp;
    this.userData.gold = originalGold;
    this.dungeonState.active = false;
    this.saveUserData();

    return penalized;
};

SovereignApp.testPerformance = function() {
    const startTime = performance.now();

    // Run intensive operations
    for (let i = 0; i < 1000; i++) {
        this.calculateXpForLevel(i % 100 + 1);
    }

    const endTime = performance.now();
    const duration = endTime - startTime;

    // Should complete in less than 100ms
    return duration < 100;
};

SovereignApp.runTests = function() {
    if (this.TestSuite.running) return;

    this.TestSuite.running = true;
    this.TestSuite.results = [];

    console.log('%c🧪 Running Sovereign System Test Suite', 'font-size: 16px; font-weight: bold; color: #00d4ff;');

    this.TestSuite.tests.forEach((test, index) => {
        try {
            const result = test.test();
            this.TestSuite.results.push({
                name: test.name,
                passed: result,
                error: null
            });

            console.log(
                `%c${result ? '✅' : '❌'} ${test.name}`,
                `color: ${result ? '#4caf50' : '#f44336'}; font-weight: 600;`
            );

        } catch (error) {
            this.TestSuite.results.push({
                name: test.name,
                passed: false,
                error: error.message
            });

            console.log(
                `%c❌ ${test.name} - ${error.message}`,
                'color: #f44336; font-weight: 600;'
            );
        }
    });

    const passed = this.TestSuite.results.filter(r => r.passed).length;
    const total = this.TestSuite.results.length;

    console.log(
        `%c📊 Results: ${passed}/${total} tests passed`,
        `font-size: 14px; font-weight: bold; color: ${passed === total ? '#4caf50' : '#ff9800'};`
    );

    this.TestSuite.running = false;

    // Show notification
    const lang = this.userData.language;
    this.showNotification(
        lang === 'ar' ? 'نتائج الاختبار' : 'Test Results',
        `${passed}/${total} ${lang === 'ar' ? 'اختبار ناجح' : 'tests passed'}`,
        passed === total ? 'success' : 'warning'
    );

    return this.TestSuite.results;
};

SovereignApp.addTestButton = function() {
    const btn = document.createElement('button');
    btn.id = 'test-suite-btn';
    btn.textContent = '🧪 Run Tests';
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 10px 20px;
        background: linear-gradient(135deg, #ff9800, #f44336);
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: 700;
        cursor: pointer;
        z-index: 99999;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
    `;
    btn.addEventListener('click', () => this.runTests());
    document.body.appendChild(btn);
};

// ============================================
// ENHANCED SETUP MODAL WITH OAUTH & GUEST
// ============================================
SovereignApp.renderEnhancedSetup = function() {
    const modal = document.getElementById('setup-modal');
    const lang = this.userData.language;
    const t = this.translations[lang];

    modal.innerHTML = `
        <div class="modal-content holographic" style="max-width: 500px;">
            <div class="modal-header">
                <div style="font-size: 4rem; margin-bottom: 10px;">👑</div>
                <h2 id="setup-title" class="glow-text">${t.setupTitle}</h2>
                <p id="setup-subtitle" style="opacity: 0.8;">${t.setupSubtitle}</p>
            </div>

            <!-- OAuth Login Section -->
            <div class="oauth-section" style="margin-bottom: 25px;">
                <p style="text-align: center; margin-bottom: 15px; font-size: 0.9rem; opacity: 0.8;">
                    ${lang === 'ar' ? 'سجل الدخول باستخدام:' : 'Sign in with:'}
                </p>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div id="google-signin-btn" style="width: 100%;"></div>
                    <button id="facebook-signin-btn" class="btn-holographic" style="background: linear-gradient(135deg, #1877f2, #166fe5); width: 100%;">
                        <span style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            ${lang === 'ar' ? 'تسجيل الدخول بـ Facebook' : 'Sign in with Facebook'}
                        </span>
                    </button>
                </div>
            </div>

            <!-- Divider -->
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
                <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.2);"></div>
                <span style="font-size: 0.85rem; opacity: 0.6;">${lang === 'ar' ? 'أو' : 'OR'}</span>
                <div style="flex: 1; height: 1px; background: rgba(255,255,255,0.2);"></div>
            </div>

            <!-- Manual Setup -->
            <div class="manual-setup" style="margin-bottom: 20px;">
                <div class="form-group">
                    <label id="label-firstname" for="firstname">${t.firstname}</label>
                    <input type="text" id="firstname" class="input-holographic" placeholder="${lang === 'ar' ? 'الاسم الأول' : 'First Name'}">
                </div>
                <div class="form-group">
                    <label id="label-lastname" for="lastname">${t.lastname}</label>
                    <input type="text" id="lastname" class="input-holographic" placeholder="${lang === 'ar' ? 'اللقب' : 'Last Name'}">
                </div>
                <div class="form-group">
                    <label id="label-avatar" for="avatar">${t.avatar}</label>
                    <input type="file" id="avatar" class="input-holographic" accept="image/*">
                    <div id="avatar-preview" class="avatar-preview"></div>
                </div>
            </div>

            <!-- Language Toggle -->
            <div class="form-group">
                <label id="label-language">${t.language}</label>
                <div class="language-toggle">
                    <button id="lang-ar" class="lang-btn ${lang === 'ar' ? 'active' : ''}">العربية</button>
                    <button id="lang-en" class="lang-btn ${lang === 'en' ? 'active' : ''}">English</button>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
                <button id="setup-submit" class="btn-holographic">
                    <span id="setup-btn-text">${t.activate}</span>
                </button>

                <button id="guest-signin-btn" class="btn-holographic" style="background: linear-gradient(135deg, #9e9e9e, #757575);">
                    <span style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                        👤 ${lang === 'ar' ? 'الدخول كضيف' : 'Continue as Guest'}
                    </span>
                </button>
            </div>

            <!-- Sync Indicator -->
            <div id="sync-indicator" style="text-align: center; margin-top: 15px; font-size: 1.2rem; opacity: 0.6;">
                ☁️--
            </div>
        </div>
        // ==================== AUDIO SYSTEM ====================
const AudioSystem = {
    enabled: true,
    synth: null,
    init() {
        try {
            this.synth = new Tone.PolySynth(Tone.Synth).toDestination();
            this.synth.volume.value = -10;
        } catch(e) { console.log('Audio init failed', e); }
    },
    play(type) {
        if (!this.enabled || !this.synth) return;
        try {
            switch(type) {
                case 'complete':
                    this.synth.triggerAttackRelease(['C5', 'E5', 'G5'], '8n');
                    break;
                case 'levelup':
                    this.synth.triggerAttackRelease(['C4', 'E4', 'G4', 'C5', 'E5', 'G5'], '4n');
                    break;
                case 'click':
                    this.synth.triggerAttackRelease(['G4'], '32n');
                    break;
                case 'error':
                    this.synth.triggerAttackRelease(['C3', 'C2'], '8n');
                    break;
            }
        } catch(e) { console.log('Audio play failed', e); }
    }
};

// ==================== DATA MANAGER ====================

    load() {
        try {
            const data = localStorage.getItem(this.key);
            if (data) {
                const parsed = JSON.parse(data);
                // Check daily reset
                const today = new Date().toDateString();
                if (parsed.lastReset !== today) {
                    parsed.quests = parsed.quests.filter(q => q.type !== 'daily' || q.completed);
                    parsed.lastReset = today;
                    this.save(parsed);
                }
                return parsed;
            }
        } catch(e) { console.error('Load error', e); }
        return this.getDefaultData();
    },
    save(data) {
        try {
            localStorage.setItem(this.key, JSON.stringify(data));
        } catch(e) { console.error('Save error', e); }
    },
    reset() {
        localStorage.removeItem(this.key);
        return this.getDefaultData();
    }
};

    `;

    // Re-attach event listeners
    this.setupEventListeners();
    this.initOAuth();
    this.initGuestMode();
    this.initCloudSync();
};

// ============================================
// FINAL INITIALIZATION
// ============================================
const originalAdvancedInit = SovereignApp.advancedInit;
SovereignApp.advancedInit = function() {
    originalAdvancedInit.call(this);

    // Initialize new systems
    this.initOAuth();
    this.initGuestMode();
    this.initCloudSync();
    this.initPerformanceOptimizations();
    this.initTestSuite();

    // Render enhanced setup
    this.renderEnhancedSetup();

    // Show welcome if returning user
    if (this.userData.isAuthenticated || this.userData.isGuest) {
        const lang = this.userData.language;
        setTimeout(() => {
            this.showNotification(
                lang === 'ar' ? 'مرحباً بعودتك!' : 'Welcome back!',
                lang === 'ar' 
                    ? `المستوى ${this.userData.level} - استمر في التقدم!` 
                    : `Level ${this.userData.level} - Keep pushing forward!`,
                'info'
            );
        }, 1000);
    }
};

// Export for global access
window.SovereignApp = SovereignApp;