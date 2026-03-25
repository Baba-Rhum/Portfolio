/* ═══════════════════════════════════
   GESTION DES PROJETS
═══════════════════════════════════ */

function openProject(id) {
  scrollPos = window.scrollY;
  const p = PROJECTS[id];
  const lang = document.documentElement.lang || 'fr';
  const d = p[lang];

  const catColors = {
    secu: 'var(--c-secu-bg)',
    dev: 'var(--c-dev-bg)',
    edu: 'var(--c-edu-bg)',
    sys: 'var(--c-sys-bg)',
    soft: 'var(--c-soft-bg)'
  };
  const catTextColors = {
    secu: 'var(--c-secu)',
    dev: 'var(--c-dev)',
    edu: 'var(--c-edu)',
    sys: 'var(--c-sys)',
    soft: 'var(--c-soft)'
  };
  const dotColors = {
    secu: 'var(--c-secu-dot)',
    dev: 'var(--c-dev-dot)',
    edu: 'var(--c-edu-dot)',
    sys: 'var(--c-sys-dot)',
    soft: 'var(--c-soft-dot)'
  };

  const badge = document.getElementById('proj-cat-badge');
  badge.textContent = d.catLabel;
  badge.style.background = catColors[p.cat];
  badge.style.color = catTextColors[p.cat];

  document.getElementById('proj-title').textContent = d.title;
  document.getElementById('proj-date').textContent = d.date;
  document.getElementById('proj-period').textContent = d.period;
  document.getElementById('proj-context').textContent = d.context;
  document.getElementById('proj-objective').textContent = d.objective;
  document.getElementById('proj-what').textContent = d.what;
  document.getElementById('proj-skills').textContent = d.skills;
  document.getElementById('proj-dot').style.background = dotColors[p.cat];

  const techEl = document.getElementById('proj-tech');
  techEl.innerHTML = d.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');

  // Image du projet
  const imgDiv = document.getElementById('proj-img');
  if (p.image) {
    imgDiv.innerHTML = `<img src="${p.image}" alt="${d.title}" class="projet-detail-image">`;
  } else {
    imgDiv.innerHTML = `<div class="projet-detail-img-placeholder">
      <div style="font-size:2.5rem;opacity:.25">📷</div>
      <p data-i="img_placeholder">Ajoute tes captures d'écran ici</p>
    </div>`;
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
  if (!data) {
    return;
  }

  const lang = document.documentElement.lang || 'fr';
  const p = PROJECTS[projId];

  function getCSSVar(v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  }

  const CAT = data.cat;
  const COLOR = getCSSVar('--c-' + CAT + '-dot') || '#888';
  const BG = getCSSVar('--bg-alt') || '#f2f0ec';
  const INK = getCSSVar('--ink') || '#1a1a18';
  const LINE = getCSSVar('--line') || '#e2e0da';

  // Borne temporelle
  function toAbs(y, m) {
    return y * 12 + m;
  }
  const TODAY = toAbs(2026, 3);
  const startAbs = toAbs(data.start.y, data.start.m);
  const endAbs = data.ongoing ? TODAY : toAbs(data.end.y, data.end.m);

  const viewStart = startAbs - 1;
  const viewEnd = data.ongoing ? endAbs : endAbs + 1;
  const totalSpan = Math.max(viewEnd - viewStart, 2);

  // Layout
  const W = Math.min(wrap.clientWidth || 600, 620);
  const H = 130;
  const PAD_L = 16,
    PAD_R = 16;
  const AXIS_Y = 68;
  const TRACK_W = W - PAD_L - PAD_R;

  function xAt(abs) {
    return PAD_L + ((abs - viewStart) / totalSpan) * TRACK_W;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('width', W);
  svg.setAttribute('height', H);
  svg.style.display = 'block';
  svg.style.width = '100%';
  svg.style.overflow = 'visible';

  function el(tag, attrs, txt) {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (txt !== undefined) e.textContent = txt;
    return e;
  }

  // ── Axe principal ──
  const axisX1 = xAt(viewStart);
  const axisX2 = data.ongoing ? W - PAD_R + 12 : xAt(viewEnd);
  svg.appendChild(el('line', { x1: axisX1, y1: AXIS_Y, x2: axisX2, y2: AXIS_Y, stroke: LINE, 'stroke-width': '2', 'stroke-linecap': 'round' }));

  // Flèche si ongoing
  if (data.ongoing) {
    svg.appendChild(el('polygon', { points: `${W - PAD_R + 14},${AXIS_Y} ${W - PAD_R + 6},${AXIS_Y - 5} ${W - PAD_R + 6},${AXIS_Y + 5}`, fill: COLOR }));
  }

  // ── Labels mois ──
  const monthNames = {
    fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };
  const mNames = monthNames[lang];
  const shownMonths = new Set();
  shownMonths.add(viewStart);
  shownMonths.add(viewEnd);
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

  // ── Branche projet ──
  const branchY = AXIS_Y - 28;
  const branchX1 = xAt(startAbs);
  const branchX2 = data.ongoing ? W - PAD_R + 12 : xAt(endAbs);
  const R = 10;

  svg.appendChild(el('path', { d: `M ${branchX1} ${AXIS_Y} C ${branchX1} ${AXIS_Y} ${branchX1} ${branchY + R} ${branchX1} ${branchY}`, stroke: COLOR, 'stroke-width': '2.2', fill: 'none', 'stroke-linecap': 'round' }));
  svg.appendChild(el('line', { x1: branchX1, y1: branchY, x2: branchX2, y2: branchY, stroke: COLOR, 'stroke-width': '2.2', 'stroke-linecap': 'round' }));
  if (!data.ongoing) {
    svg.appendChild(el('path', { d: `M ${branchX2} ${branchY} C ${branchX2} ${branchY + R} ${branchX2} ${AXIS_Y} ${branchX2} ${AXIS_Y}`, stroke: COLOR, 'stroke-width': '2.2', fill: 'none', 'stroke-linecap': 'round' }));
  }

  // ── Milestones ──
  data.steps.forEach((step, i) => {
    const abs = toAbs(step.y, step.m);
    if (abs < viewStart || abs > viewEnd + 1) return;
    const sx = Math.min(xAt(abs), data.ongoing ? W - PAD_R - 4 : xAt(viewEnd));

    svg.appendChild(el('circle', { cx: sx, cy: branchY, r: '4.5', fill: COLOR, stroke: BG, 'stroke-width': '2' }));

    const labelY = branchY - 12 - (i % 2) * 18;
    svg.appendChild(el('line', { x1: sx, y1: branchY, x2: sx, y2: labelY + 2, stroke: COLOR, 'stroke-width': '1.2', 'stroke-dasharray': '2,2', opacity: '0.6' }));

    const txt = step[lang] || step.fr;
    const txtEl = el('text', { x: sx, y: labelY, 'text-anchor': 'middle', 'font-size': '8.5', 'font-family': 'DM Sans,system-ui,sans-serif', 'font-weight': '500', fill: getCSSVar('--c-' + CAT) || INK });
    txtEl.textContent = txt.length > 22 ? txt.slice(0, 21) + '…' : txt;
    svg.appendChild(txtEl);
  });

  svg.appendChild(el('circle', { cx: branchX1, cy: AXIS_Y, r: '5', fill: COLOR, stroke: BG, 'stroke-width': '2.5' }));
  if (!data.ongoing) {
    svg.appendChild(el('circle', { cx: branchX2, cy: AXIS_Y, r: '4', fill: COLOR, stroke: BG, 'stroke-width': '2' }));
  }

  if (data.ongoing) {
    const badge = el('text', { x: W - PAD_R + 18, y: branchY + 4, 'font-size': '8', 'font-family': 'DM Sans,system-ui', 'font-weight': '600', fill: COLOR, opacity: '0.85' }, lang === 'fr' ? 'en cours' : 'ongoing');
    svg.appendChild(badge);
  }

  wrap.appendChild(svg);
}
