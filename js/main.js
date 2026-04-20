/**
 * Coco Addict — UI interactions
 * - Loader fade
 * - Sticky navbar state
 * - Mobile menu
 * - Featured drinks render
 * - Menu render + hot/iced toggle + category filter
 * - Reviews render
 * - Scroll-reveal
 */

(function () {
  'use strict';

  const $  = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

  /* ========== Loader ========== */
  window.addEventListener('load', () => {
    // small delay so the animation doesn't flash away
    setTimeout(() => {
      document.body.classList.add('is-loaded');
      setTimeout(() => {
        const l = $('#loader');
        if (l) l.remove();
      }, 800);
    }, 350);
  });

  /* ========== Year ========== */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ========== Sticky navbar on scroll ========== */
  const nav = $('#navbar');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ========== Mobile menu ========== */
  const mToggle = $('#menuToggle');
  const mMenu = $('#mobileMenu');
  if (mToggle) {
    mToggle.addEventListener('click', () => mMenu.classList.toggle('hidden'));
    $$('#mobileMenu a').forEach(a =>
      a.addEventListener('click', () => mMenu.classList.add('hidden'))
    );
  }

  /* ========== Ice cream SVG ========== */
  function iceCreamSVG(scoopColor = '#F4ECDD', size = 'h-16 w-16') {
    return `
      <svg viewBox="0 0 120 160" class="${size}" xmlns="http://www.w3.org/2000/svg">
        <!-- cone -->
        <path d="M36 90 L60 156 L84 90 Z" fill="#E8C87A" stroke="#2C5643" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- cone grid lines -->
        <line x1="60" y1="90" x2="46" y2="140" stroke="#2C5643" stroke-width="1" opacity=".5"/>
        <line x1="60" y1="90" x2="74" y2="140" stroke="#2C5643" stroke-width="1" opacity=".5"/>
        <line x1="40" y1="106" x2="80" y2="106" stroke="#2C5643" stroke-width="1" opacity=".5"/>
        <line x1="44" y1="122" x2="76" y2="122" stroke="#2C5643" stroke-width="1" opacity=".5"/>
        <!-- bottom scoop -->
        <ellipse cx="60" cy="78" rx="26" ry="18" fill="${scoopColor}" stroke="#2C5643" stroke-width="2.5"/>
        <!-- top scoop -->
        <ellipse cx="60" cy="56" rx="22" ry="16" fill="${scoopColor}" stroke="#2C5643" stroke-width="2.5" opacity=".9"/>
        <!-- peak -->
        <ellipse cx="60" cy="38" rx="14" ry="12" fill="${scoopColor}" stroke="#2C5643" stroke-width="2.5" opacity=".85"/>
        <!-- shine dot -->
        <circle cx="52" cy="34" r="3" fill="#fff" opacity=".6"/>
      </svg>`;
  }

  /* ========== Drink SVG — clean cup with logo + liquid colour ========== */
  function drinkSVG(liquidColor = '#C9A679', size = 'h-40 w-40') {
    const dark = '#2A1A08';
    return `
      <svg viewBox="0 0 160 210" class="${size}" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <linearGradient id="liq_${liquidColor.replace('#','')}" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0"    stop-color="${liquidColor}" stop-opacity="0.85"/>
            <stop offset="0.45" stop-color="${liquidColor}"/>
            <stop offset="1"    stop-color="${liquidColor}" stop-opacity="0.75"/>
          </linearGradient>
          <clipPath id="cc_${liquidColor.replace('#','')}">
            <path d="M28 52 L38 188 C38.5 194 43 198 49 198 L111 198 C117 198 121.5 194 122 188 L132 52 Z"/>
          </clipPath>
        </defs>

        <!-- cup liquid fill -->
        <path d="M28 52 L38 188 C38.5 194 43 198 49 198 L111 198 C117 198 121.5 194 122 188 L132 52 Z"
              fill="url(#liq_${liquidColor.replace('#','')})"/>

        <!-- shine strip -->
        <g clip-path="url(#cc_${liquidColor.replace('#','')})">
          <path d="M28 52 L36 188 L52 188 L44 52 Z" fill="#ffffff" opacity="0.22"/>
        </g>

        <!-- cup outline -->
        <path d="M28 52 L38 188 C38.5 194 43 198 49 198 L111 198 C117 198 121.5 194 122 188 L132 52 Z"
              stroke="${dark}" stroke-width="2.5"/>

        <!-- lid -->
        <ellipse cx="80" cy="54" rx="52" ry="8" fill="#EDEAE4" stroke="#B8B098" stroke-width="1.2"/>
        <ellipse cx="80" cy="51" rx="49" ry="6" fill="#F5F2EC" opacity="0.8"/>

        <!-- straw slot -->
        <rect x="76" y="38" width="8" height="18" rx="2.5" fill="#D8D4CC" stroke="#B0A898" stroke-width="1"/>

        <!-- ── logo on cup ── -->
        <circle cx="80" cy="130" r="28" fill="none" stroke="${dark}" stroke-width="1.6" opacity="0.7"/>
        <!-- coconut bowl -->
        <circle cx="80" cy="133" r="11" fill="none" stroke="${dark}" stroke-width="1.5" opacity="0.7"/>
        <!-- rim arc -->
        <path d="M73 129 Q80 126 87 129" stroke="${dark}" stroke-width="1.3" fill="none" opacity="0.7"/>
        <!-- drips -->
        <line x1="75" y1="130" x2="75" y2="133" stroke="${dark}" stroke-width="1.2" opacity="0.7"/>
        <line x1="80" y1="128" x2="80" y2="132" stroke="${dark}" stroke-width="1.2" opacity="0.7"/>
        <line x1="85" y1="130" x2="85" y2="133" stroke="${dark}" stroke-width="1.2" opacity="0.7"/>
        <!-- umbrella -->
        <path d="M68 128 L73 122 L78 128 Z" fill="${dark}" opacity="0.7"/>
        <line x1="73" y1="128" x2="76" y2="132" stroke="${dark}" stroke-width="1.2" opacity="0.7"/>
        <!-- syringe -->
        <g transform="rotate(18 88 122)" opacity="0.7">
          <line x1="85" y1="118" x2="91" y2="118" stroke="${dark}" stroke-width="1.8"/>
          <line x1="88" y1="118" x2="88" y2="123" stroke="${dark}" stroke-width="1.2"/>
          <rect x="86" y="123" width="4" height="7" stroke="${dark}" stroke-width="1.2"/>
          <line x1="88" y1="130" x2="88" y2="134" stroke="${dark}" stroke-width="1.2"/>
        </g>
        <!-- wordmark -->
        <text x="80" y="153" text-anchor="middle"
              font-family="Caveat,cursive" font-size="9.5" font-weight="700"
              fill="${dark}" opacity="0.7">Coco Addict</text>
      </svg>`;
  }

  /* ========== Photo tile loader ==========
     For every element that has data-img="path/to/file.jpg",
     attempt to load the image. If it loads, inject it as an <img>.
     The CSS .fallback child stays visible until/unless the image loads.
  ========== */
  function loadPhoto(el, src) {
    if (!el || !src) return;
    const img = new Image();
    img.onload = () => {
      img.classList.add('photo-img');
      img.alt = el.dataset.label || '';
      el.appendChild(img);
      /* next frame so transition fires */
      requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('loaded')));
    };
    img.src = src;
  }

  /* Scan the whole document for data-img elements on DOMContentLoaded */
  document.querySelectorAll('[data-img]').forEach(el => {
    loadPhoto(el, el.dataset.img);
  });

  /* ========== Gallery ========== */
  const galleryGrid = $('#galleryGrid');
  if (galleryGrid && window.COCO_GALLERY) {
    galleryGrid.innerHTML = window.COCO_GALLERY.map((g, i) => `
      <div class="gallery-tile${g.tall ? ' tall' : ''} reveal"
           data-img="${g.img}" data-label="${g.label}"
           style="transition-delay:${i * 55}ms">
        <div class="fallback bg-gradient-to-br ${g.bg} h-full min-h-[180px] grid place-items-center">
          <p class="font-script text-xl text-coco-700/70">${g.label}</p>
        </div>
        ${g.soon ? '<span class="badge-soon">Coming Soon</span>' : ''}
      </div>
    `).join('');

    /* load photos for newly created tiles */
    galleryGrid.querySelectorAll('[data-img]').forEach(el => {
      loadPhoto(el, el.dataset.img);
    });
    observeReveal(galleryGrid);
  }

  /* ========== Featured drinks ========== */
  const featuredGrid = $('#featuredGrid');
  if (featuredGrid && window.COCO_FEATURED) {
    featuredGrid.innerHTML = window.COCO_FEATURED.map((d, i) => `
      <article class="feat-card reveal" style="transition-delay:${i * 80}ms">
        <div class="feat-visual bg-gradient-to-br ${d.gradient} overflow-hidden"
             data-img="${d.img || ''}" data-label="${d.name}">
          <div class="feat-svg-fallback">
            ${d.cupSvg
              ? `<img src="${d.cupSvg}" alt="${d.name}" class="h-44 w-auto drop-shadow-xl"/>`
              : drinkSVG(d.drink, 'h-44 w-44 drop-shadow-xl')
            }
          </div>
        </div>
        <div class="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-semibold leading-tight">${d.name}</h3>
            <p class="mt-1 text-xs text-ink-400">${d.thai}</p>
          </div>
          <span class="shrink-0 rounded-full bg-coco-100 px-3 py-1 text-sm font-semibold text-coco-700">฿${d.price}</span>
        </div>
        <p class="mt-3 text-sm text-ink-500">${d.desc}</p>
      </article>
    `).join('');

    /* load real photos into featured visuals */
    featuredGrid.querySelectorAll('[data-img]').forEach(el => {
      if (el.dataset.img) loadPhoto(el, el.dataset.img);
    });
    observeReveal(featuredGrid);
  }

  /* ========== Menu render ========== */
  const menuGrid = $('#menuGrid');

  function tempPill(label, tempKey, value) {
    const unavailable = value == null;
    return `
      <div class="price-pill ${unavailable ? 'unavailable' : ''}" data-temp="${tempKey}">
        <span class="label">${label}</span>
        <span class="amount">${unavailable ? '—' : '฿' + value}</span>
      </div>`;
  }

  function menuCard(item, catKey, catLabel) {
    // triple-price drink (coffee / tea / others)
    if ('hot' in item || 'iced' in item || 'coco' in item) {
      const pillCount =
        (item.coco !== undefined ? 3 : 2);
      const cols = pillCount === 3 ? '' : 'cols-2';
      return `
        <article class="menu-card reveal" data-cat="${catKey}">
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="menu-cat-label">${catLabel}</p>
              <h3 class="menu-name mt-1">${item.name}</h3>
              <p class="menu-thai">${item.thai}</p>
            </div>
            <div class="opacity-80">${drinkSVG(randomLiquid(item.name), 'h-16 w-16')}</div>
          </div>
          <div class="price-row ${cols}">
            ${tempPill('Hot',  'hot',  item.hot)}
            ${tempPill('Iced', 'iced', item.iced)}
            ${item.coco !== undefined ? tempPill('Coco · Iced', 'coco', item.coco) : ''}
          </div>
        </article>`;
    }

    // flat-price drink (smoothie / slushy / ice cream)
    const isIceCream = catKey === 'iceCream';
    const icon = isIceCream
      ? iceCreamSVG(randomLiquid(item.name), 'h-16 w-16')
      : drinkSVG(randomLiquid(item.name), 'h-16 w-16');

    // photo card (Grab-style) when item has a real photo
    if (item.img) {
      return `
        <article class="menu-card photo-card reveal" data-cat="${catKey}">
          <div class="photo-card-img" data-img="${item.img}" data-label="${item.name}">
            <div class="fallback bg-gradient-to-br from-coco-100 to-sand-200 h-full w-full grid place-items-center">
              <div class="opacity-70">${drinkSVG(randomLiquid(item.name), 'h-20 w-20')}</div>
            </div>
            ${item.isNew ? '<span class="badge-new">New</span>' : ''}
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-2">
              <div>
                <p class="menu-cat-label">${catLabel}</p>
                <h3 class="menu-name mt-1 text-base">${item.name}</h3>
                <p class="menu-thai">${item.thai}</p>
              </div>
              <span class="shrink-0 mt-1 rounded-full bg-coco-100 px-3 py-1 text-sm font-bold text-coco-700">฿${item.flat}</span>
            </div>
            ${item.desc ? `<p class="mt-2 text-xs text-ink-500 leading-relaxed">${item.desc}</p>` : ''}
          </div>
        </article>`;
    }

    return `
      <article class="menu-card reveal" data-cat="${catKey}">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="menu-cat-label">${catLabel}</p>
            <h3 class="menu-name mt-1">${item.name}</h3>
            <p class="menu-thai">${item.thai}</p>
          </div>
          <div class="opacity-90">${icon}</div>
        </div>
        <div class="price-row cols-1">
          <div class="price-pill" data-temp="iced">
            <span class="label">${isIceCream ? '3 free toppings' : 'Price'}</span>
            <span class="amount">฿${item.flat}</span>
          </div>
        </div>
      </article>`;
  }

  function randomLiquid(name) {
    const map = {
      'Americano':                '#3E2B1C',
      'Espresso':                 '#2A1A0E',
      'Cappuccino':               '#C9A679',
      'Latte':                    '#B8875A',
      'Mocca':                    '#4A2C1E',
      'Matcha Green Tea':         '#8FB877',
      'Thai Tea':                 '#D88446',
      'Thai Tea + Lemon':         '#E2A65C',
      'Thai Tea + Honey + Lemon': '#E6B36A',
      'Thai Milk Tea':            '#E29863',
      'Cocoa':                    '#5A3A26',
      'Chocolate':                '#4B2C1E',
      'Butterfly Pea Lime Soda':  '#6E7FC2',
      'Coconut with Milk':        '#F4ECDD',
      'Coconut':                  '#F4ECDD',
      'Coconut Milk':             '#F5EDD8',
      'Mixed Coconut Milk':       '#E7D7BA',
      'Taro':                     '#C9ADDD',
      'Lychee':                   '#F5B8C4',
      'Durian':                   '#EBD96A'
    };
    return map[name] || '#C9A679';
  }

  function renderMenu() {
    if (!menuGrid || !window.COCO_MENU) return;
    const order = ['coffee', 'tea', 'others', 'smoothie', 'slushy', 'iceCream'];
    const html = order.flatMap(catKey => {
      const cat = window.COCO_MENU[catKey];
      if (!cat) return [];
      return cat.items.map(it => menuCard(it, catKey, cat.label));
    }).join('');
    menuGrid.innerHTML = html;
    menuGrid.dataset.mode = 'iced';
    menuGrid.querySelectorAll('[data-img]').forEach(el => {
      if (el.dataset.img) loadPhoto(el, el.dataset.img);
    });
    observeReveal(menuGrid);
  }
  renderMenu();

  /* ========== Menu filter ========== */
  const catFilter = $('#catFilter');
  if (catFilter) {
    catFilter.addEventListener('click', e => {
      const btn = e.target.closest('.cat-chip');
      if (!btn) return;
      $$('.cat-chip', catFilter).forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cat = btn.dataset.cat;
      $$('.menu-card', menuGrid).forEach(card => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('is-hidden', !match);
      });
    });
  }

  /* ========== Hot / Iced toggle ========== */
  const tempToggle = $('#tempToggle');
  if (tempToggle) {
    tempToggle.addEventListener('click', e => {
      const btn = e.target.closest('.temp-btn');
      if (!btn) return;
      $$('.temp-btn', tempToggle).forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      menuGrid.dataset.mode = btn.dataset.temp;
    });
  }

  /* ========== Reviews ========== */
  const reviewGrid = $('#reviewGrid');
  if (reviewGrid && window.COCO_REVIEWS) {
    const initials = n => n.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
    reviewGrid.innerHTML = window.COCO_REVIEWS.map((r, i) => `
      <article class="review-card reveal" style="transition-delay:${i * 60}ms">
        <div class="flex items-center gap-3">
          <div class="avatar ${r.tone}">${initials(r.name)}</div>
          <div>
            <h4 class="text-sm font-semibold">${r.name}</h4>
            <p class="text-xs text-ink-400">${r.meta}</p>
          </div>
        </div>
        <div class="mt-4 flex text-coco-500">
          ${'★'.repeat(r.stars)}<span class="text-coco-100">${'★'.repeat(5 - r.stars)}</span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-ink-700">"${r.body}"</p>
      </article>
    `).join('');
    observeReveal(reviewGrid);
  }

  /* ========== Scroll reveal ========== */
  function observeReveal(scope = document) {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal', scope).forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });
    $$('.reveal', scope).forEach(el => io.observe(el));
  }
  observeReveal();

})();
