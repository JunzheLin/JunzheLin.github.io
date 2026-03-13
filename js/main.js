// Language translations
const translations = {
    zh: {
        nav: {
            home: '首页',
            blog: '技术博客',
            about: '关于我'
        },
        home: {
            welcome: '欢迎来到我的技术博客',
            subtitle: '分享云原生与分布式系统的学习心得',
            recentPosts: '最近文章',
            categories: '分类浏览',
            cloudComputing: '云计算',
            cloudDesc: 'AWS, 云架构设计',
            aboutMe: '关于我',
            aboutDesc: '个人简介、经历'
        },
        about: {
            education: '教育背景',
            research: '研究方向',
            skills: '技术技能',
            publications: ' publications',
            awards: '荣誉奖项',
            contact: '联系方式',
            master: '理学硕士',
            bachelor: '理学学士',
            hku: '香港大学',
            szu: '深圳大学',
            present: '至今',
            programming: '编程',
            cloudDevOps: '云与 DevOps',
            tools: '工具',
            email: '邮箱',
            github: 'GitHub'
        },
        blog: {
            readMore: '阅读全文 →',
            backToHome: '← 返回首页'
        }
    },
    en: {
        nav: {
            home: 'Home',
            blog: 'Blog',
            about: 'About'
        },
        home: {
            welcome: 'Welcome to My Tech Blog',
            subtitle: 'Sharing insights on Cloud Native & Distributed Systems',
            recentPosts: 'Recent Articles',
            categories: 'Browse by Category',
            cloudComputing: 'Cloud Computing',
            cloudDesc: 'AWS, Cloud Architecture',
            aboutMe: 'About Me',
            aboutDesc: 'Profile, Experience'
        },
        about: {
            education: 'Education',
            research: 'Research Interests',
            skills: 'Technical Skills',
            publications: 'Publications',
            awards: 'Awards & Honors',
            contact: 'Contact',
            master: 'M.Sc.',
            bachelor: 'B.Sc.',
            hku: 'The University of Hong Kong',
            szu: 'Shenzhen University',
            present: 'Present',
            programming: 'Programming',
            cloudDevOps: 'Cloud & DevOps',
            tools: 'Tools',
            email: 'Email',
            github: 'GitHub'
        },
        blog: {
            readMore: 'Read More →',
            backToHome: '← Back to Home'
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            blog: 'ブログ',
            about: '概要'
        },
        home: {
            welcome: 'テックブログへようこそ',
            subtitle: 'クラウドネイティブと分散システムについて',
            recentPosts: '最新記事',
            categories: 'カテゴリー',
            cloudComputing: 'クラウドコンピューティング',
            cloudDesc: 'AWS、クラウドアーキテクチャ',
            aboutMe: '私について',
            aboutDesc: 'プロフィール、経歴'
        },
        about: {
            education: '学歴',
            research: '研究分野',
            skills: '技術スキル',
            publications: '論文',
            awards: '受賞歴',
            contact: '連絡先',
            master: '修士',
            bachelor: '学士',
            hku: '香港大学',
            szu: '深セン大学',
            present: '現在',
            programming: 'プログラミング',
            cloudDevOps: 'クラウドとDevOps',
            tools: 'ツール',
            email: 'メール',
            github: 'GitHub'
        },
        blog: {
            readMore: '続きを読む →',
            backToHome: '← ホームに戻る'
        }
    }
};

// Current language
let currentLang = 'zh';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedLang = localStorage.getItem('lang') || 'zh';
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    setLanguage(savedLang);
    setTheme(savedTheme);
    
    // Set up event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Language dropdown toggle
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
    
    // Language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });
    
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update body class
    document.body.className = `lang-${lang}`;
    
    // Update dropdown button text
    const langLabels = { zh: '中文', en: 'EN', ja: '日本語' };
    document.querySelector('.lang-btn span').textContent = langLabels[lang];
    
    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    
    // Update navigation
    const t = translations[lang].nav;
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks[0]) navLinks[0].textContent = t.home;
    if (navLinks[1]) navLinks[1].textContent = t.blog;
    if (navLinks[2]) navLinks[2].textContent = t.about;
    
    // Update page content
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    const page = document.body.dataset.page;
    
    if (page === 'home') {
        // Update home page
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        const sectionTitles = document.querySelectorAll('.section-title');
        
        if (heroTitle) heroTitle.textContent = t.home.welcome;
        if (heroSubtitle) heroSubtitle.textContent = t.home.subtitle;
        
        if (sectionTitles[0]) sectionTitles[0].textContent = t.home.recentPosts;
        if (sectionTitles[1]) sectionTitles[1].textContent = t.home.categories;
        
        // Update category cards
        const categoryCards = document.querySelectorAll('.category-card h3');
        const categoryDescs = document.querySelectorAll('.category-card p');
        
        if (categoryCards[0]) categoryCards[0].textContent = t.home.cloudComputing;
        if (categoryDescs[0]) categoryDescs[0].textContent = t.home.cloudDesc;
        if (categoryCards[1]) categoryCards[1].textContent = t.home.aboutMe;
        if (categoryDescs[1]) categoryDescs[1].textContent = t.home.aboutDesc;
    }
    
    if (page === 'about') {
        // Update about page
        const contentBlocks = document.querySelectorAll('.content-block h2');
        
        if (contentBlocks[0]) contentBlocks[0].textContent = t.about.education;
        if (contentBlocks[1]) contentBlocks[1].textContent = t.about.research;
        if (contentBlocks[2]) contentBlocks[2].textContent = t.about.skills;
        if (contentBlocks[3]) contentBlocks[3].textContent = t.about.publications;
        if (contentBlocks[4]) contentBlocks[4].textContent = t.about.awards;
        if (contentBlocks[5]) contentBlocks[5].textContent = t.about.contact;
        
        // Update contact labels
        const contactInfo = document.querySelector('.contact-info');
        if (contactInfo) {
            const labels = contactInfo.querySelectorAll('strong');
            if (labels[0]) labels[0].textContent = t.about.email + ':';
            if (labels[1]) labels[1].textContent = t.about.github + ':';
        }
    }
}

function setTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}
