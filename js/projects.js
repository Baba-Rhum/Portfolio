/* ═══════════════════════════════════
   GESTION DES PROJETS
═══════════════════════════════════ */

function renderProjects() {
  const lang = document.documentElement.lang || 'fr';
  const grid = document.getElementById('projets-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const order = ['rfid', 'discord', 'jeu_rok', 'pairse_mbot', 'pairse_expo'];
  const t = T[lang];

  order.forEach((id, i) => {
    const p = PROJECTS[id];
    if (!p) return;
    const d = p[lang];

    const a = document.createElement('a');
    a.className = 'projet-card';
    a.href = '#';
    a.addEventListener('click', (e) => { e.preventDefault(); openProject(id); });

    const num = document.createElement('span');
    num.className = 'projet-num';
    num.textContent = String(i + 1).padStart(2, '0');

    const body = document.createElement('div');

    const titleP = document.createElement('p');
    titleP.className = 'projet-title';
    titleP.textContent = d.title;

    if (i === 0) {
      const badge = document.createElement('span');
      badge.className = 'projet-highlight';
      badge.textContent = t.proj_badge_main;
      titleP.appendChild(badge);
    }

    const descP = document.createElement('p');
    descP.className = 'projet-desc';
    descP.textContent = d.description
      ? d.description.slice(0, 120) + (d.description.length > 120 ? '…' : '')
      : '';

    body.appendChild(titleP);
    body.appendChild(descP);

    const arrow = document.createElement('span');
    arrow.className = 'projet-arrow';
    arrow.textContent = '→';

    a.appendChild(num);
    a.appendChild(body);
    a.appendChild(arrow);
    grid.appendChild(a);
  });
}

/* ═══════════════════════════════════
   CAROUSEL VANILLA JS
   Activé si meta.images[] contient 2+ entrées.
   Rétrocompat : meta.image (string) → image unique.
═══════════════════════════════════ */

function buildCarousel(images, container) {
  // Aucune image
  if (!images || images.length === 0) {
    const lang = document.documentElement.lang || 'fr';
    container.innerHTML = `
      <div class="projet-detail-img-placeholder">
        <div style="font-size:2.5rem;opacity:.25">📷</div>
        <p>${T[lang].img_placeholder}</p>
      </div>`;
    return;
  }

  // Image unique — pas de carousel
  if (images.length === 1) {
    container.innerHTML = `<img src="${images[0]}" alt="Capture du projet" class="projet-detail-image" />`;
    return;
  }

  // Carousel multi-images
  let idx = 0;

  container.innerHTML = `
    <div class="carousel" role="region" aria-label="Galerie du projet" tabindex="0">
      <div class="carousel-track">
        ${images.map((src, i) => `
          <div class="carousel-slide${i === 0 ? ' active' : ''}" aria-hidden="${i !== 0}">
            <img src="${src}" alt="Capture ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}" />
          </div>`).join('')}
      </div>

      <button class="carousel-btn carousel-prev" aria-label="Image précédente">‹</button>
      <button class="carousel-btn carousel-next" aria-label="Image suivante">›</button>

      <div class="carousel-dots" role="tablist">
        ${images.map((_, i) => `
          <button class="carousel-dot${i === 0 ? ' active' : ''}"
            role="tab" aria-selected="${i === 0}"
            aria-label="Image ${i + 1}" data-i="${i}"></button>`).join('')}
      </div>

      <span class="carousel-counter">
        <span class="carousel-cur">1</span>&thinsp;/&thinsp;${images.length}
      </span>
    </div>`;

  const track  = container.querySelector('.carousel-track');
  const slides = container.querySelectorAll('.carousel-slide');
  const dots   = container.querySelectorAll('.carousel-dot');
  const curEl  = container.querySelector('.carousel-cur');

  function goTo(n) {
    slides[idx].classList.remove('active');
    slides[idx].setAttribute('aria-hidden', 'true');
    dots[idx].classList.remove('active');
    dots[idx].setAttribute('aria-selected', 'false');

    idx = ((n % images.length) + images.length) % images.length;

    slides[idx].classList.add('active');
    slides[idx].setAttribute('aria-hidden', 'false');
    dots[idx].classList.add('active');
    dots[idx].setAttribute('aria-selected', 'true');
    track.style.transform = `translateX(-${idx * 101}%)`;
    curEl.textContent = idx + 1;
  }

  container.querySelector('.carousel-prev').addEventListener('click', () => goTo(idx - 1));
  container.querySelector('.carousel-next').addEventListener('click', () => goTo(idx + 1));
  dots.forEach(dot => dot.addEventListener('click', () => goTo(+dot.dataset.i)));

  // Clavier ← →
  container.querySelector('.carousel').addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(idx + 1); }
  });

  // Swipe tactile
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) goTo(idx + (dx < 0 ? 1 : -1));
  }, { passive: true });
}

/* ═══════════════════════════════════
   OUVERTURE D'UN PROJET
═══════════════════════════════════ */

function openProject(id) {
  scrollPos = window.scrollY;
  const p    = PROJECTS[id];
  const lang = document.documentElement.lang || 'fr';
  const d    = p[lang];
  const meta = p.meta;

  const catColors = {
    secu: 'var(--c-secu-bg)',
    dev:  'var(--c-dev-bg)',
    edu:  'var(--c-edu-bg)',
    sys:  'var(--c-sys-bg)',
    soft: 'var(--c-soft-bg)'
  };
  const catTextColors = {
    secu: 'var(--c-secu)',
    dev:  'var(--c-dev)',
    edu:  'var(--c-edu)',
    sys:  'var(--c-sys)',
    soft: 'var(--c-soft)'
  };

  // Badge catégorie
  const badge = document.getElementById('proj-cat-badge');
  badge.textContent      = d.catLabel;
  badge.style.background = catColors[meta.cat];
  badge.style.color      = catTextColors[meta.cat];

  // Titre & date
  const titleEl = document.getElementById('proj-title');
  titleEl.textContent    = d.title;
  titleEl.dataset.projId = id;
  document.getElementById('proj-date').textContent = d.date;

  // Contexte
  const ctxEl = document.getElementById('proj-context-text');
  if (ctxEl) ctxEl.textContent = d.context || '';

  // Sections texte
  document.getElementById('proj-objective').textContent   = d.objective   || '';
  document.getElementById('proj-description').textContent = d.description || '';
  document.getElementById('proj-skills').textContent      = d.skills      || '';

  // Features (liste)
  const featSection = document.getElementById('proj-features-section');
  const featList    = document.getElementById('proj-features');
  if (d.features && d.features.length) {
    featList.innerHTML = d.features.map(f => `<li>${f}</li>`).join('');
    featSection.style.display = '';
  } else {
    featSection.style.display = 'none';
  }

  // Impact
  const impactSection = document.getElementById('proj-impact-section');
  const impactEl      = document.getElementById('proj-impact');
  if (d.impact) {
    impactEl.textContent = d.impact;
    impactSection.style.display = '';
  } else {
    impactSection.style.display = 'none';
  }

  // Tech pills
  const techEl = document.getElementById('proj-tech');
  techEl.innerHTML = (d.tech || []).map(t => `<span class="tech-pill">${t}</span>`).join('');

  // ── Image / Genially / Carousel ──────────────────────────
  const imgDiv = document.getElementById('proj-img');

  if (meta.genially) {
    // Genially prend le dessus (PAIRSE, etc.)
    imgDiv.innerHTML = `<iframe
      src="${meta.genially}"
      allowfullscreen frameborder="0"
      width="100%" height="500"
      style="border:none;border-radius:8px;"></iframe>`;
  } else {
    // meta.images[] (carousel) ou meta.image (rétrocompat)
    const images = meta.images ? meta.images : (meta.image ? [meta.image] : []);
    buildCarousel(images, imgDiv);
  }

  // Mini timeline
  buildMiniTimeline(id);

  showPage('projet');
}

function closeProject() {
  showPage('main');
  setTimeout(() => {
    const projEl = document.getElementById('projets');
    if (projEl) projEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

/* ═══════════════════════════════════
   MINI TIMELINE SVG PAR PROJET
═══════════════════════════════════ */

function buildMiniTimeline(projId) {
  const wrap = document.getElementById('proj-mini-tl');
  if (!wrap) return;
  wrap.innerHTML = '';

  const data = PROJ_MILESTONES[projId];
  if (!data) return;

  const lang = document.documentElement.lang || 'fr';

  function getCSSVar(v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  }

  const CAT   = data.cat;
  const COLOR = getCSSVar('--c-' + CAT + '-dot') || '#888';
  const BG    = getCSSVar('--bg-alt') || '#f2f0ec';
  const INK   = getCSSVar('--ink') || '#1a1a18';
  const LINE  = getCSSVar('--line') || '#e2e0da';

  function toAbs(y, m) { return y * 12 + m; }
  const TODAY    = toAbs(2026, 4);
  const startAbs = toAbs(data.start.y, data.start.m);
  const endAbs   = data.ongoing ? TODAY : toAbs(data.end.y, data.end.m);

  const viewStart = startAbs - 1;
  const viewEnd   = data.ongoing ? endAbs : endAbs + 1;
  const totalSpan = Math.max(viewEnd - viewStart, 2);

  const W       = Math.min(wrap.clientWidth || 600, 620);
  const H       = 160;
  const PAD_L   = 16, PAD_R = 16;
  const AXIS_Y  = 98;
  const TRACK_W = W - PAD_L - PAD_R;

  function xAt(abs) {
    return PAD_L + ((abs - viewStart) / totalSpan) * TRACK_W;
  }

  const NS  = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.style.display  = 'block';
  svg.style.width    = '100%';
  svg.style.overflow = 'visible';

  function el(tag, attrs, txt) {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  // Axe
  const axisX1 = xAt(viewStart);
  const axisX2 = data.ongoing ? W - PAD_R + 12 : xAt(viewEnd);
  svg.appendChild(el('line', { x1: axisX1, y1: AXIS_Y, x2: axisX2, y2: AXIS_Y, stroke: LINE, 'stroke-width': '2', 'stroke-linecap': 'round' }));

  if (data.ongoing) {
    svg.appendChild(el('polygon', {
      points: `${W - PAD_R + 14},${AXIS_Y} ${W - PAD_R + 6},${AXIS_Y - 5} ${W - PAD_R + 6},${AXIS_Y + 5}`,
      fill: COLOR
    }));
  }

  // Labels mois
  const monthNames = {
    fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  const mNames = monthNames[lang];
  const shownMonths = new Set([viewStart, viewEnd]);
  if (totalSpan >= 4) {
    for (let a = viewStart + 1; a < viewEnd; a++) {
      if ((a - viewStart) % Math.max(1, Math.floor(totalSpan / 4)) === 0) shownMonths.add(a);
    }
  }
  for (const abs of shownMonths) {
    if (abs < viewStart || abs > viewEnd) continue;
    const mx = xAt(abs);
    const mm = ((abs % 12) + 12) % 12;
    const yr = Math.floor(abs / 12);
    svg.appendChild(el('text', { x: mx, y: AXIS_Y + 18, 'text-anchor': 'middle', 'font-size': '8', 'font-family': 'DM Sans,system-ui', fill: INK, opacity: '0.4' }, mNames[mm]));
    if (mm === 0 || abs === viewStart) svg.appendChild(el('text', { x: mx, y: AXIS_Y + 27, 'text-anchor': 'middle', 'font-size': '7', 'font-family': 'DM Sans,system-ui', fill: INK, opacity: '0.3' }, yr));
  }

  // Branche projet
  const branchY  = AXIS_Y - 28;
  const branchX1 = xAt(startAbs);
  const branchX2 = data.ongoing ? W - PAD_R + 12 : xAt(endAbs);
  const R = 10;

  svg.appendChild(el('path', { d: `M ${branchX1} ${AXIS_Y} C ${branchX1} ${AXIS_Y} ${branchX1} ${branchY + R} ${branchX1} ${branchY}`, stroke: COLOR, 'stroke-width': '2.2', fill: 'none', 'stroke-linecap': 'round' }));
  svg.appendChild(el('line', { x1: branchX1, y1: branchY, x2: branchX2, y2: branchY, stroke: COLOR, 'stroke-width': '2.2', 'stroke-linecap': 'round' }));
  if (!data.ongoing) {
    svg.appendChild(el('path', { d: `M ${branchX2} ${branchY} C ${branchX2} ${branchY + R} ${branchX2} ${AXIS_Y} ${branchX2} ${AXIS_Y}`, stroke: COLOR, 'stroke-width': '2.2', fill: 'none', 'stroke-linecap': 'round' }));
  }

  // Milestones
  data.steps.forEach((step, i) => {
    const abs = toAbs(step.y, Math.round(step.m));
    if (abs < viewStart || abs > viewEnd + 1) return;
    const sx = Math.min(xAt(abs), data.ongoing ? W - PAD_R - 4 : xAt(viewEnd));

    svg.appendChild(el('circle', { cx: sx, cy: branchY, r: '4.5', fill: COLOR, stroke: BG, 'stroke-width': '2' }));

    const LABEL_W = 110;
    const LABEL_H = 36;
    const labelY  = branchY - LABEL_H - 8 - (i % 2) * 20;
    const labelX  = sx - LABEL_W / 2;

    svg.appendChild(el('line', {
      x1: sx, y1: branchY, x2: sx, y2: labelY + LABEL_H,
      stroke: COLOR, 'stroke-width': '1.2', 'stroke-dasharray': '2,2', opacity: '0.6'
    }));

    const txt   = step[lang] || step.fr;
    const color = getCSSVar('--c-' + CAT) || INK;
    const fo    = document.createElementNS(NS, 'foreignObject');
    fo.setAttribute('x', labelX);
    fo.setAttribute('y', labelY);
    fo.setAttribute('width', LABEL_W);
    fo.setAttribute('height', LABEL_H);
    fo.innerHTML = `<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:8px;font-family:DM Sans,system-ui,sans-serif;font-weight:500;color:${color};text-align:center;line-height:1.3;word-break:break-word;">${txt}</div>`;
    svg.appendChild(fo);
  });

  svg.appendChild(el('circle', { cx: branchX1, cy: AXIS_Y, r: '5', fill: COLOR, stroke: BG, 'stroke-width': '2.5' }));
  if (!data.ongoing) {
    svg.appendChild(el('circle', { cx: branchX2, cy: AXIS_Y, r: '4', fill: COLOR, stroke: BG, 'stroke-width': '2' }));
  }

  if (data.ongoing) {
    svg.appendChild(el('text', {
      x: W - PAD_R + 18, y: branchY + 4,
      'font-size': '8', 'font-family': 'DM Sans,system-ui',
      'font-weight': '600', fill: COLOR, opacity: '0.85'
    }, lang === 'fr' ? 'en cours' : 'ongoing'));
  }

  wrap.appendChild(svg);
}
