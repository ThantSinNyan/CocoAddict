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
  let _cupId = 0;
  function drinkSVG(liquidColor = '#C9A679', size = 'h-40 w-40') {
    const dark = '#2A1A08';
    const uid = ++_cupId;
    return `
      <svg viewBox="0 0 160 210" class="${size}" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <linearGradient id="liq_${uid}" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0"    stop-color="${liquidColor}" stop-opacity="0.85"/>
            <stop offset="0.45" stop-color="${liquidColor}"/>
            <stop offset="1"    stop-color="${liquidColor}" stop-opacity="0.75"/>
          </linearGradient>
          <clipPath id="cc_${uid}">
            <path d="M28 52 L38 188 C38.5 194 43 198 49 198 L111 198 C117 198 121.5 194 122 188 L132 52 Z"/>
          </clipPath>
        </defs>

        <!-- cup liquid fill -->
        <path d="M28 52 L38 188 C38.5 194 43 198 49 198 L111 198 C117 198 121.5 194 122 188 L132 52 Z"
              fill="url(#liq_${uid})"/>

        <!-- shine strip -->
        <g clip-path="url(#cc_${uid})">
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
  const catFilter = $('#catFilter');

  function menuOrder() {
    if (Array.isArray(window.COCO_MENU_ORDER) && window.COCO_MENU_ORDER.length) {
      return window.COCO_MENU_ORDER.filter(catKey => window.COCO_MENU?.[catKey]);
    }
    return Object.keys(window.COCO_MENU || {});
  }

  function renderCategoryFilter() {
    if (!catFilter || !window.COCO_MENU) return;
    const chips = [
      '<button data-cat="all" class="cat-chip is-active">All</button>',
      ...menuOrder().map(catKey => (
        `<button data-cat="${catKey}" class="cat-chip">${window.COCO_MENU[catKey].label}</button>`
      ))
    ];
    catFilter.innerHTML = chips.join('');
  }

  function tempPill(label, tempKey, value) {
    const unavailable = value == null;
    return `
      <div class="price-pill ${unavailable ? 'unavailable' : ''}" data-temp="${tempKey}">
        <span class="label">${label}</span>
        <span class="amount">${unavailable ? '—' : '฿' + value}</span>
      </div>`;
  }

  function drinkMedia(item) {
    const fallback = `<div class="drink-card-placeholder">${drinkSVG(randomLiquid(item.name), 'h-16 w-16')}</div>`;
    if (!item.img) return fallback;
    return `
      <div class="drink-card-media-frame">
        <img src="${item.img}" alt="${item.name}"
             class="drink-real-img"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="drink-card-placeholder" style="display:none">${drinkSVG(randomLiquid(item.name), 'h-16 w-16')}</div>
      </div>`;
  }

  function menuCard(item, catKey, catLabel) {
    // unified drink layout
    if ('hot' in item || 'iced' in item || 'coco' in item) {
      return `
        <article class="menu-card drink-card reveal" data-cat="${catKey}">
          <div class="drink-card-body">
            <div class="drink-card-copy">
              <div class="drink-card-header">
                <div class="drink-card-text">
                  <p class="menu-cat-label">${catLabel}</p>
                  <h3 class="menu-name mt-1">${item.name}</h3>
                  <p class="menu-thai">${item.thai}</p>
                </div>
                <div class="drink-card-media">
                  ${drinkMedia(item)}
                </div>
              </div>
              <div class="price-row drink-price-row">
                ${tempPill('Hot', 'hot', item.hot)}
                ${tempPill('Iced', 'iced', item.iced)}
                ${tempPill('Coco-Iced', 'coco', item.coco)}
              </div>
            </div>
          </div>
        </article>`;
    }

    // flat-price item (food / ice cream)
    const isIceCream = catKey === 'iceCream';
    const isFoodCategory = ['toast', 'bakery', 'dessert', 'salad', 'sandwich'].includes(catKey);
    const icon = isIceCream
      ? iceCreamSVG(randomLiquid(item.name), 'h-16 w-16')
      : isFoodCategory
        ? iceCreamSVG(randomLiquid(item.name), 'h-16 w-16')
        : drinkSVG(randomLiquid(item.name), 'h-16 w-16');

    if (item.img) {
      return `
        <article class="menu-card food-card reveal" data-cat="${catKey}">
          <div class="food-card-body">
            <div class="food-card-text">
              <p class="menu-cat-label">${catLabel}</p>
              <h3 class="menu-name mt-1">${item.name}</h3>
              <p class="menu-thai">${item.thai}</p>
              <div class="mt-4">
                <span class="food-price-tag">฿${item.flat}</span>
              </div>
            </div>
            <div class="food-card-img-wrap">
              <img src="${item.img}" alt="${item.name}"
                   class="food-real-img"
                   onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
              <div class="food-img-fallback" style="display:none">${icon}</div>
            </div>
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
      'AM Americano': '#3E2B1C',
      'ES Espresso': '#2A1A0E',
      'CP Cappuccino': '#C9A679',
      'LT Latte': '#B8875A',
      'MC Mocha': '#4A2C1E',
      'CB Cold Brew': '#362417',
      'CM Caramel Macchiato': '#B97845',
      'HM Hazelnut Macchiato': '#8D5C3B',
      'AO Americano Orange': '#C56D2C',
      'AHL Americano Honey Lemon': '#C5913E',
      'MT Matcha Green Tea': '#8FB877',
      'TTL Lemon Tea': '#E2A65C',
      'THL Honey Lemon Tea': '#E6B36A',
      'TMT Thai Milk Tea': '#E29863',
      'TTC Iced Black Tea with Coconut': '#756347',
      'MF Matcha Coconut Cream Foam': '#92B978',
      'CO Cocoa': '#5A3A26',
      'CH Chocolate': '#4B2C1E',
      'ACH Butterfly Pea Lemon Soda': '#6E7FC2',
      'LS Lemon Soda': '#D9D564',
      'LF Coconut Latte Cream Foam': '#E5D5BC',
      'Coconut Water': '#EDE6D5',
      'Fresh Orange Juice': '#F2A14C',
      'ACHC Butterfly Pea Lemon Concentrate': '#6F71B8',
      'Coconut Smoothie with Fresh Milk': '#F4ECDD',
      'Fresh Orange Blended': '#F0A24C',
      'Fresh Lemon Blended': '#E7D865',
      'Thai Milk Tea Ice Flakes': '#E29863',
      'Butterfly Pea Lemon Soda Ice Flakes': '#6E7FC2',
      'Coconut Ice Cream': '#F5EDD8',
      'Gelato Malt Biscuit Cookie': '#D9C7A1',
      'Gelato Yogurt Jelly': '#F0C6D0',
      'MI Matcha Ice Cream': '#9BC07B',
      'LCH Lod Chong Wat Chet': '#8DB46F',
      'CHK Grass Jelly Ovaltine Blended': '#6C5848',
      'PD Coconut Milk Pudding': '#F3E7D2',
      'PD Coconut Milk Pudding x 3': '#F3E7D2',
      'CHB Butter Shortbread': '#E7CB8A',
      'CHS Strawberry Shortbread': '#E7A1A7',
      'CP Caramel Popcorn': '#C98942',
      'MP Milo School Bus Popcorn': '#8B5A3B',
      'Fresh Marian Plum': '#F0BE56',
      'Original Kale Crisps': '#7FB16F',
      'Sriracha Mayo Kale Crisps': '#B65E42',
      'Original Zucchini Crisps': '#98B672',
      'Sriracha Mayo Zucchini Crisps': '#C06A48',
      'Caesar Cos Crisps': '#B4C476',
      'CK Fresh Shredded Chicken Sandwich': '#D5AA76',
      'BM Butter Milk Bread': '#E5C98D',
      'BS Butter Sugar Bread': '#E7D49A',
      'OV Ovaltine Volcano': '#8D5A3A',
      'NU Nutella Bread': '#6B432B',
      'CP Chili Paste Pork & Chicken Floss Bread': '#A85D3D',
      'PJ Pandan Custard Bread': '#91B277',
      'TJ Thai Tea Custard Bread': '#D79454',
      'PTB Peanut Butter Bread': '#B78B56',
      'NUB Nutella Banana Bread': '#A86F41',
      'CHC Ham & Cheese Croissant': '#D8B16A',
      'CA Almond Croissant': '#D0A45F',
      'CCP Coffee Pecan Croissant': '#8E6546',
      'BN Brioche Nutella': '#A96942',
      'DC Danish Cream Cheese': '#E8D8B2',
      'PAC Chocolate Bread': '#6B432B',
      'PAR Raisin Bread': '#B48C64',
      'SP Shio Pan': '#D9C48C',
      'FB Fudge Brownies': '#5A3A2A',
      'CP Plain Croissant': '#D7AA63',
      'CB Butterfly Cinnamon Roll': '#A96D43',
      'ET Classic Egg Tart': '#F0CE72'
    };
    return map[name] || '#C9A679';
  }

  function renderMenu() {
    if (!menuGrid || !window.COCO_MENU) return;
    const html = menuOrder().flatMap(catKey => {
      const cat = window.COCO_MENU[catKey];
      if (!cat) return [];
      return cat.items.map(it => menuCard(it, catKey, cat.label));
    }).join('');
    menuGrid.innerHTML = html;
    menuGrid.dataset.mode = 'iced';
    menuGrid.querySelectorAll('.food-card-img-wrap[data-img]').forEach(el => {
      loadPhoto(el, el.dataset.img);
    });
    observeReveal(menuGrid);
  }
  renderCategoryFilter();
  renderMenu();

  /* ========== Menu filter ========== */
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
