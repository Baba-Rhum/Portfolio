/* ═══════════════════════════════════
   TIMELINE CENTRALE
═══════════════════════════════════ */

(function () {
  function getCSSVar(v) {
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  }

  function buildGraph() {
    const wrap = document.getElementById('tl-graph-wrap');
    if (!wrap) return;
    wrap.innerHTML = '';

    const lang = document.documentElement.lang || 'fr';
    const W = wrap.clientWidth || 700;

    const colors = {
      esiea: getCSSVar('--ink') || '#1a1a18',
      secu: getCSSVar('--c-secu-dot') || '#2a9d8f',
      dev: getCSSVar('--c-dev-dot') || '#7c5cbf',
      edu: getCSSVar('--c-edu-dot') || '#3b82f6',
      sys: getCSSVar('--c-sys-dot') || '#d97706',
    };
    const bgColors = {
      secu: getCSSVar('--c-secu-bg') || '#e8f5f2',
      dev: getCSSVar('--c-dev-bg') || '#f0eaf8',
      edu: getCSSVar('--c-edu-bg') || '#eff6ff',
      sys: getCSSVar('--c-sys-bg') || '#fef3c7',
      esiea: getCSSVar('--bg') || '#faf9f7',
    };
    const textColors = {
      secu: getCSSVar('--c-secu') || '#1a6b5e',
      dev: getCSSVar('--c-dev') || '#5c3d8f',
      edu: getCSSVar('--c-edu') || '#1d4ed8',
      sys: getCSSVar('--c-sys') || '#b45309',
      esiea: getCSSVar('--ink') || '#1a1a18',
    };
    const bgAlt = getCSSVar('--bg-alt') || '#f2f0ec';

    const SPINE_X = Math.round(W * 0.5);
    const N = EVENTS.length;
    const ROW_H = 64;
    const PAD_TOP = 40;
    const PAD_BOT = 40;
    const svgH = PAD_TOP + (N + 1) * ROW_H + PAD_BOT;

    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${svgH}`);
    svg.setAttribute('height', svgH);
    svg.classList.add('tl-graph-svg');
    svg.style.height = svgH + 'px';

    function el(tag, attrs) {
      const e = document.createElementNS(NS, tag);
      for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
      return e;
    }

    // ── Ligne centrale ──
    const spineTop = PAD_TOP;
    const spineBot = PAD_TOP + (N + 1) * ROW_H;
    svg.appendChild(el('line', {
      x1: SPINE_X, y1: spineTop, x2: SPINE_X, y2: spineBot,
      stroke: colors.esiea, 'stroke-width': '2.5', 'stroke-linecap': 'round'
    }));

    // Pill "Aujourd'hui"
    const todayY = spineTop;
    const pillG = el('g', {});
    pillG.appendChild(el('rect', {
      x: SPINE_X - 38, y: todayY - 11, width: 76, height: 20, rx: '10',
      fill: colors.esiea
    }));
    const pT = el('text', {
      x: SPINE_X, y: todayY + 4, 'text-anchor': 'middle', 'font-size': '8.5',
      'font-family': 'DM Sans,system-ui,sans-serif', 'letter-spacing': '0.09em',
      fill: '#faf9f7', 'font-weight': '500'
    });
    pT.textContent = lang === 'fr' ? "AUJOURD'HUI" : 'TODAY';
    pillG.appendChild(pT);
    svg.appendChild(pillG);

    // ── Nœuds ──
    const labelData = [];

    for (let i = 0; i < N; i++) {
      const ev = EVENTS[i];
      const cy = PAD_TOP + (i + 1) * ROW_H;
      const color = colors[ev.cat];
      const isLeft = ev.side === 'left';

      const TICK = 14;
      const tickX2 = isLeft ? SPINE_X - TICK : SPINE_X + TICK;
      svg.appendChild(el('line', {
        x1: SPINE_X, y1: cy, x2: tickX2, y2: cy,
        stroke: color, 'stroke-width': '2', 'stroke-linecap': 'round'
      }));

      svg.appendChild(el('circle', {
        cx: tickX2, cy, r: '6',
        fill: color, stroke: bgAlt, 'stroke-width': '2.5'
      }));

      labelData.push({ ev, cx: tickX2, cy, isLeft, bgColor: bgColors[ev.cat], textColor: textColors[ev.cat] });
    }

    // Nœud ESIEA
    const esieaY = PAD_TOP + (N + 1) * ROW_H;
    svg.appendChild(el('circle', {
      cx: SPINE_X, cy: esieaY, r: '8',
      fill: colors.esiea, stroke: bgAlt, 'stroke-width': '3'
    }));
    const botG = el('g', {});
    botG.appendChild(el('rect', {
      x: SPINE_X - 24, y: esieaY - 9, width: 48, height: 18, rx: '9',
      fill: colors.esiea
    }));
    const bT = el('text', {
      x: SPINE_X, y: esieaY + 5, 'text-anchor': 'middle', 'font-size': '8',
      'font-family': 'DM Sans,system-ui,sans-serif', 'letter-spacing': '0.09em',
      fill: '#faf9f7', 'font-weight': '500'
    });
    bT.textContent = lang === 'fr' ? 'DÉBUT' : 'START';
    botG.appendChild(bT);
    svg.appendChild(botG);

    wrap.appendChild(svg);
    wrap.style.position = 'relative';
    wrap.style.height = svgH + 'px';

    // ── Labels HTML ──
    const LABEL_GAP = 10;
    const LABEL_W = Math.min(Math.round(W * 0.42), 260);

    for (const { ev, cx, cy, isLeft, bgColor, textColor } of labelData) {
      const lbl = document.createElement('div');
      lbl.className = 'tl-label' + (ev.projectId ? ' clickable' : '');
      lbl.style.top = cy + 'px';
      lbl.style.width = LABEL_W + 'px';
      if (isLeft) {
        lbl.style.right = (W - cx + LABEL_GAP) + 'px';
        lbl.style.left = 'auto';
      } else {
        lbl.style.left = (cx + LABEL_GAP) + 'px';
        lbl.style.right = 'auto';
      }

      const card = document.createElement('div');
      card.className = 'tl-label-card ' + ev.cat;
      card.style.background = bgColor;
      card.style.color = textColor;

      const d = document.createElement('div');
      d.className = 'tl-label-date';
      d.textContent = ev.label[lang] || ev.label.fr;
      card.appendChild(d);

      const t = document.createElement('div');
      t.className = 'tl-label-title';
      t.textContent = ev.sublabel[lang] || ev.sublabel.fr;
      card.appendChild(t);

      if (ev.ongoing) {
        const b = document.createElement('div');
        b.className = 'tl-label-badge';
        b.textContent = lang === 'fr' ? 'en cours' : 'ongoing';
        card.appendChild(b);
      }

      lbl.appendChild(card);
      if (ev.projectId) lbl.addEventListener('click', () => openProject(ev.projectId));
      wrap.appendChild(lbl);
    }

    // Label ESIEA
    const esieaLbl = document.createElement('div');
    esieaLbl.className = 'tl-label';
    esieaLbl.style.top = esieaY + 'px';
    esieaLbl.style.left = (SPINE_X + LABEL_GAP + 8) + 'px';
    esieaLbl.style.width = LABEL_W + 'px';
    const ec = document.createElement('div');
    ec.className = 'tl-label-card esiea';
    ec.innerHTML = `<div class="tl-label-date">${lang === 'fr' ? 'Rentrée 2024' : 'Autumn 2024'}</div>` + `<div class="tl-label-title">${lang === 'fr' ? 'Entrée ESIEA · Spé. Cybersécurité' : 'ESIEA · Cybersecurity track'}</div>`;
    esieaLbl.appendChild(ec);
    wrap.appendChild(esieaLbl);
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildGraph();
  });
  window.addEventListener('resize', () => {
    buildGraph();
  });
  window._buildGraph = buildGraph;
})();
