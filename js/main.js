(function () {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const PHONE_URL = 'tel:+66634692696';

  const state = {
    category: 'all',
    search: ''
  };

  const escapeHTML = (value = '') =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

  const baht = (value) => `฿${value}`;

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.add('is-loaded');
      setTimeout(() => $('#loader')?.remove(), 650);
    }, 250);
  });

  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navbar = $('#navbar');
  const updateNav = () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 16);
  };
  updateNav();
  document.addEventListener('scroll', updateNav, { passive: true });

  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('hidden', isOpen);
    });

    $$('a', mobileMenu).forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
      });
    });
  }

  function updateOpenBadge() {
    const badge = $('#openBadge');
    if (!badge) return;

    let minutes = 0;
    try {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
      }).formatToParts(new Date());
      const hour = Number(parts.find((part) => part.type === 'hour')?.value || 0);
      const minute = Number(parts.find((part) => part.type === 'minute')?.value || 0);
      minutes = hour * 60 + minute;
    } catch {
      const now = new Date();
      minutes = now.getHours() * 60 + now.getMinutes();
    }

    const opens = 7 * 60 + 30;
    const closes = 16 * 60 + 30;
    const isOpen = minutes >= opens && minutes < closes;
    badge.classList.toggle('is-closed', !isOpen);
    $('.open-now-text', badge).textContent = isOpen ? 'Open now' : 'Closed now';
    $('.open-now-detail', badge).textContent = isOpen ? 'Until 4:30 PM today' : 'Opens daily at 7:30 AM';
  }
  updateOpenBadge();

  function initials(name) {
    return name
      .split(/\s+/)
      .map((word) => word[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  function categoryLabel(categoryId) {
    return window.COCO_CATEGORIES?.find((category) => category.id === categoryId)?.label || categoryId;
  }

  function imageBlock(className, src, alt, label) {
    const safeLabel = escapeHTML(label || 'Coco Addict');
    return `
      <div class="${className}">
        <div class="image-fallback">
          <div>
            <img src="assets/logo.svg" alt="" />
            <p class="mt-2 font-script text-2xl">${safeLabel}</p>
          </div>
        </div>
        ${src ? `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.remove()" />` : ''}
      </div>
    `;
  }

  function renderFeatured() {
    const grid = $('#featuredGrid');
    if (!grid || !Array.isArray(window.COCO_FEATURED)) return;

    grid.innerHTML = window.COCO_FEATURED.map((item, index) => `
      <article class="featured-card reveal" style="transition-delay:${index * 45}ms">
        ${imageBlock('featured-media', item.img, item.name, item.category)}
        <div class="featured-copy">
          <span class="badge">${escapeHTML(item.badge)}</span>
          <h3>${escapeHTML(item.name)}</h3>
          ${item.thai ? `<p class="thai-name">${escapeHTML(item.thai)}</p>` : ''}
          <p class="item-description">${escapeHTML(item.desc)}</p>
          <div class="price-line">
            <span class="price">${baht(item.price)}</span>
            <a class="order-link" href="${PHONE_URL}">Call to order</a>
          </div>
        </div>
      </article>
    `).join('');
    observeReveal(grid);
  }

  function renderCategoryFilters() {
    const filters = $('#categoryFilters');
    if (!filters || !Array.isArray(window.COCO_CATEGORIES)) return;

    filters.innerHTML = [
      { id: 'all', label: 'All' },
      ...window.COCO_CATEGORIES
    ].map((category) => `
      <button type="button" class="filter-chip${category.id === state.category ? ' is-active' : ''}" data-category="${category.id}">
        ${escapeHTML(category.label)}
      </button>
    `).join('');

    filters.addEventListener('click', (event) => {
      const button = event.target.closest('.filter-chip');
      if (!button) return;
      state.category = button.dataset.category;
      $$('.filter-chip', filters).forEach((chip) => chip.classList.toggle('is-active', chip === button));
      renderMenu();
    });
  }

  function searchableText(item) {
    return [
      item.name,
      item.thai,
      item.badge,
      item.desc,
      categoryLabel(item.category)
    ].filter(Boolean).join(' ').toLowerCase();
  }

  function priceMarkup(item) {
    if (Array.isArray(item.prices) && item.prices.length) {
      return item.prices.map((price) => `
        <span class="price-token">${escapeHTML(price.label)} <strong>${baht(price.value)}</strong></span>
      `).join('');
    }

    if (Number.isFinite(item.price)) {
      return `<span class="price-token">Price <strong>${baht(item.price)}</strong></span>`;
    }

    return '<span class="price-token">Ask in shop</span>';
  }

  function renderMenuCard(item, index) {
    const category = categoryLabel(item.category);
    return `
      <article class="menu-card reveal" style="transition-delay:${Math.min(index * 20, 160)}ms">
        ${imageBlock('menu-media', item.img, item.name, item.name)}
        <div class="menu-content">
          <div class="menu-meta">
            <span class="menu-category">${escapeHTML(category)}</span>
            ${item.badge ? `<span class="badge">${escapeHTML(item.badge)}</span>` : ''}
          </div>
          <h3>${escapeHTML(item.name)}</h3>
          ${item.thai ? `<p class="thai-name">${escapeHTML(item.thai)}</p>` : ''}
          <p class="item-description">${escapeHTML(item.desc || 'A Coco Addict cafe favorite.')}</p>
          <div class="price-options">
            ${priceMarkup(item)}
            <a class="price-token order-link" href="${PHONE_URL}">Order</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderMenu() {
    const grid = $('#menuGrid');
    const count = $('#menuCount');
    if (!grid || !Array.isArray(window.COCO_MENU)) return;

    const query = state.search.trim().toLowerCase();
    const visible = window.COCO_MENU.filter((item) => {
      const categoryMatch = state.category === 'all' || item.category === state.category;
      const queryMatch = !query || searchableText(item).includes(query);
      return categoryMatch && queryMatch;
    });

    if (count) {
      const categoryText = state.category === 'all' ? 'all categories' : categoryLabel(state.category);
      count.textContent = `${visible.length} item${visible.length === 1 ? '' : 's'} shown in ${categoryText}`;
    }

    grid.innerHTML = visible.length
      ? visible.map(renderMenuCard).join('')
      : '<div class="empty-state">No menu items match that search yet. Try "coconut", "coffee", or "toast".</div>';

    observeReveal(grid);
  }

  function renderGallery() {
    const grid = $('#galleryGrid');
    if (!grid || !Array.isArray(window.COCO_GALLERY)) return;

    grid.innerHTML = window.COCO_GALLERY.map((item, index) => `
      <figure class="gallery-tile${item.tall ? ' tall' : ''} reveal" style="transition-delay:${index * 35}ms">
        <div class="image-fallback">
          <div>
            <img src="assets/logo.svg" alt="" />
            <p class="mt-2 font-script text-2xl">${escapeHTML(item.label)}</p>
          </div>
        </div>
        ${item.img ? `<img src="${escapeHTML(item.img)}" alt="${escapeHTML(item.label)}" loading="lazy" onerror="this.remove()" />` : ''}
        <figcaption class="gallery-caption">${escapeHTML(item.label)}</figcaption>
      </figure>
    `).join('');

    observeReveal(grid);
  }

  function renderReviews() {
    const grid = $('#reviewGrid');
    if (!grid || !Array.isArray(window.COCO_REVIEWS)) return;

    grid.innerHTML = window.COCO_REVIEWS.map((review, index) => `
      <article class="review-card reveal" style="transition-delay:${index * 55}ms">
        <div class="review-head">
          <div class="avatar">${escapeHTML(initials(review.name))}</div>
          <div>
            <h3 class="text-base font-extrabold text-ink-900">${escapeHTML(review.name)}</h3>
            <p class="text-sm font-semibold text-ink-500">${escapeHTML(review.meta)}</p>
          </div>
        </div>
        <div class="stars mt-4" aria-label="${review.stars} out of 5 stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
        <p class="mt-3 leading-7 text-ink-700">"${escapeHTML(review.body)}"</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${(review.tags || []).map((tag) => `<span class="review-tag">${escapeHTML(tag)}</span>`).join('')}
        </div>
      </article>
    `).join('');

    observeReveal(grid);
  }

  const searchInput = $('#menuSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.search = event.target.value;
      renderMenu();
    });
  }

  function setupSaveShare() {
    const saveButton = $('[data-save]');
    const shareButton = $('[data-share]');
    const savedKey = 'coco-addict-saved';

    const updateSave = () => {
      if (!saveButton) return;
      const isSaved = localStorage.getItem(savedKey) === 'true';
      saveButton.innerHTML = `<span>${isSaved ? '♥' : '♡'}</span>${isSaved ? 'Saved' : 'Save'}`;
      saveButton.classList.toggle('action-button-strong', isSaved);
    };

    if (saveButton) {
      updateSave();
      saveButton.addEventListener('click', () => {
        const next = localStorage.getItem(savedKey) !== 'true';
        localStorage.setItem(savedKey, String(next));
        updateSave();
        showToast(next ? 'Coco Addict saved for later.' : 'Removed from saved places.');
      });
    }

    if (shareButton) {
      shareButton.addEventListener('click', async () => {
        const payload = {
          title: 'Coco Addict',
          text: 'Coco Addict - coconut cafe in Lumphini, Bangkok',
          url: window.location.href
        };

        try {
          if (navigator.share) {
            await navigator.share(payload);
            return;
          }
          await navigator.clipboard.writeText(window.location.href);
          showToast('Website link copied.');
        } catch {
          showToast('Share is ready from your browser menu.');
        }
      });
    }
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }

  function setupActiveNav() {
    const links = $$('.nav-link');
    const sections = links
      .map((link) => {
        const id = link.getAttribute('href');
        return id?.startsWith('#') ? $(id) : null;
      })
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.25, 0.5] });

    sections.forEach((section) => observer.observe(section));
  }

  function observeReveal(scope = document) {
    const items = $$('.reveal', scope);
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -70px 0px', threshold: 0.08 });

    items.forEach((item) => observer.observe(item));
  }

  renderFeatured();
  renderCategoryFilters();
  renderMenu();
  renderGallery();
  renderReviews();
  setupSaveShare();
  setupActiveNav();
  observeReveal();
})();
