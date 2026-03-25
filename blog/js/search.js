/* ─────────────────────────────────────────
   Blog Search Engine — js/search.js
   Supports Chinese, English, Japanese
   ───────────────────────────────────────── */

(function () {
  'use strict';

  let searchIndex = null;
  let searchModal = null;
  let searchInput = null;
  let resultsContainer = null;
  let currentLang = 'zh';

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', async () => {
    currentLang = localStorage.getItem('lang') || 'zh';
    buildSearchButton();
    await loadSearchIndex();
    buildModal();
    bindEvents();
  });

  /* Listen for lang changes */
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'lang-change') {
      currentLang = e.data.lang;
    }
  });
  const origSetLang = window.setLanguage;
  if (typeof origSetLang === 'function') {
    window.setLanguage = function (lang) {
      currentLang = lang;
      return origSetLang.apply(this, arguments);
    };
  }

  /* ── Load index ── */
  async function loadSearchIndex() {
    try {
      const res = await fetch('/blog/search-index.json');
      searchIndex = await res.json();
    } catch (e) {
      console.error('Search index failed to load', e);
    }
  }

  /* ── Build search button in navbar ── */
  function buildSearchButton() {
    const navControls = document.querySelector('.nav-controls');
    if (!navControls) return;

    const btn = document.createElement('button');
    btn.className = 'search-toggle';
    btn.id = 'searchToggle';
    btn.setAttribute('aria-label', 'Search');
    btn.title = 'Search / 搜索 / 検索';
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    `;
    navControls.appendChild(btn);
  }

  /* ── Build modal DOM ── */
  function buildModal() {
    const modal = document.createElement('div');
    modal.id = 'searchModal';
    modal.className = 'search-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Search');
    modal.innerHTML = `
      <div class="search-backdrop"></div>
      <div class="search-panel">
        <div class="search-header">
          <div class="search-input-wrap">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              id="searchInput"
              class="search-input"
              placeholder="${placeholderText()}"
              autocomplete="off"
              spellcheck="false"
            />
            <button class="search-clear" id="searchClear" aria-label="Clear" style="display:none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <button class="search-close" id="searchClose" aria-label="Close">
            <kbd>Esc</kbd>
          </button>
        </div>
        <div class="search-results" id="searchResults">
          <div class="search-empty" id="searchEmpty">
            <span class="search-empty-icon">🔍</span>
            <p data-i18n-search="empty">输入关键字搜索博客文章</p>
          </div>
        </div>
        <div class="search-footer">
          <span class="search-hint" data-i18n-search="hint">支持中文 · English · 日本語</span>
          <span class="search-count" id="searchCount"></span>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    searchModal = modal;
    searchInput = document.getElementById('searchInput');
    resultsContainer = document.getElementById('searchResults');
  }

  function placeholderText() {
    return { zh: '搜索博客…', en: 'Search blog…', ja: 'ブログを検索…' }[currentLang] || '搜索博客…';
  }

  /* ── Event bindings ── */
  function bindEvents() {
    /* Toggle button */
    document.addEventListener('click', (e) => {
      if (e.target.closest('#searchToggle')) openModal();
      if (e.target.closest('#searchClose') || e.target.closest('.search-backdrop')) closeModal();
      if (e.target.closest('#searchClear')) clearSearch();
    });

    /* Keyboard shortcut */
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleModal();
      }
      if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeModal();
      }
    });

    /* Live search */
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => runSearch(), 150);
      document.getElementById('searchClear').style.display = searchInput.value ? 'flex' : 'none';
    });

    /* Close on outside click */
    searchModal.querySelector('.search-backdrop').addEventListener('click', closeModal);
  }

  /* ── Modal open/close ── */
  function openModal() {
    searchModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      searchInput.focus();
      /* Update placeholder to current lang */
      searchInput.placeholder = placeholderText();
    }, 50);
  }

  function closeModal() {
    searchModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleModal() {
    searchModal.classList.contains('open') ? closeModal() : openModal();
  }

  function clearSearch() {
    searchInput.value = '';
    document.getElementById('searchClear').style.display = 'none';
    showEmpty();
    searchInput.focus();
  }

  /* ── Search engine ── */
  function runSearch() {
    const query = searchInput.value.trim();
    if (!query) { showEmpty(); return; }
    if (!searchIndex) { showError(); return; }

    const results = search(query);
    renderResults(results, query);
  }

  function search(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const posts = searchIndex.posts;
    const scored = [];

    for (const post of posts) {
      let topScore = 0;
      let matchLang = null;
      const matchedLangData = {};

      /* For each supported language, score the post */
      for (const lang of ['zh', 'en', 'ja']) {
        if (!post[lang]) continue;
        const { title, desc, categoryName, tag } = post[lang];
        const allText = `${title} ${desc} ${categoryName} ${tag} ${(post.keywords || []).join(' ')}`.toLowerCase();

        let score = 0;
        for (const term of terms) {
          /* Title match — highest weight */
          if (title.toLowerCase().includes(term)) score += 15;
          /* Tag/category match */
          if (tag && tag.toLowerCase().includes(term)) score += 10;
          if (categoryName.toLowerCase().includes(term)) score += 8;
          /* Description match */
          if (desc.toLowerCase().includes(term)) score += 6;
          /* Keyword match */
          if (allText.includes(term)) score += 4;
          /* Fuzzy: term fragment */
          if (allText.includes(term.slice(0, 2))) score += 2;
        }

        if (score > topScore) {
          topScore = score;
          matchLang = lang;
          matchedLangData.title = title;
          matchedLangData.desc = desc;
          matchedLangData.categoryName = categoryName;
          matchedLangData.tag = tag;
          matchedLangData.date = post[lang].date;
        }
      }

      if (topScore > 0) {
        scored.push({
          post,
          score: topScore,
          lang: matchLang,
          ...matchedLangData,
          file: post.files[matchLang],
          categoryIcon: post.categoryIcon,
        });
      }
    }

    /* Sort by score descending */
    scored.sort((a, b) => b.score - a.score);
    return scored;
  }

  /* ── Render results ── */
  function renderResults(results, query) {
    if (results.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <span class="search-empty-icon">📭</span>
          <p>${noResultsText()}</p>
          <small>${queryHintText()}</small>
        </div>
      `;
      document.getElementById('searchCount').textContent = '';
      return;
    }

    const html = results.map(r => {
      const excerpt = makeExcerpt(r.desc, query);
      return `
        <a href="${r.file}" class="search-result-item" data-post-id="${r.post.id}">
          <div class="result-meta">
            <span class="result-cat-icon">${r.categoryIcon}</span>
            <span class="result-cat">${r.categoryName}</span>
            <span class="result-sep">·</span>
            <span class="result-tag">${r.tag}</span>
            <span class="result-sep">·</span>
            <span class="result-date">${r.date}</span>
          </div>
          <h3 class="result-title">${highlight(r.title, query)}</h3>
          <p class="result-desc">${excerpt}</p>
          <span class="result-lang-badge">${langBadge(r.lang)}</span>
        </a>
      `;
    }).join('');

    resultsContainer.innerHTML = html;
    document.getElementById('searchCount').textContent =
      results.length === 1 ? '1 result' : `${results.length} results`;
  }

  function showEmpty() {
    resultsContainer.innerHTML = `
      <div class="search-empty">
        <span class="search-empty-icon">🔍</span>
        <p data-i18n-search="empty">输入关键字搜索博客文章</p>
      </div>
    `;
    document.getElementById('searchCount').textContent = '';
  }

  function showError() {
    resultsContainer.innerHTML = `
      <div class="search-empty">
        <span class="search-empty-icon">⚠️</span>
        <p>搜索索引加载失败，请刷新页面重试。</p>
      </div>
    `;
  }

  /* ── Helpers ── */
  function highlight(text, query) {
    if (!query) return text;
    const terms = query.trim().split(/\s+/);
    let result = text;
    for (const term of terms) {
      const re = new RegExp(`(${escapeRe(term)})`, 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    }
    return result;
  }

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function makeExcerpt(desc, query) {
    const terms = (query || '').toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return desc;
    /* Try to find first match position */
    const lower = desc.toLowerCase();
    let pos = -1;
    for (const t of terms) {
      pos = lower.indexOf(t);
      if (pos !== -1) break;
    }
    if (pos === -1 || pos < 30) return desc;
    const start = Math.max(0, pos - 20);
    const prefix = start > 0 ? '…' : '';
    const suffix = pos + 60 < desc.length ? '…' : '';
    return prefix + desc.slice(start, start + 80) + suffix;
  }

  function noResultsText() {
    return {
      zh: '没有找到相关文章',
      en: 'No articles found',
      ja: '記事が見つかりません'
    }[currentLang] || '没有找到相关文章';
  }

  function queryHintText() {
    return {
      zh: '试试其他关键词，或检查拼写',
      en: 'Try different keywords or check spelling',
      ja: '別のキーワードを試すか、スペルを確認してください'
    }[currentLang] || '';
  }

  function langBadge(lang) {
    return { zh: '中文', en: 'EN', ja: '日本語' }[lang] || lang;
  }

})();
