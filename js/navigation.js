/* ═══════════════════════════════════
   NAVIGATION PAGES
═══════════════════════════════════ */

let currentPage = 'main';
let scrollPos   = 0;

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  currentPage = id;
  if (id === 'main') {
    setTimeout(() => window.scrollTo(0, scrollPos), 0);
  } else {
    window.scrollTo(0, 0);
  }
}

function scrollToSection(sectionId) {
  if (currentPage !== 'main') {
    showPage('main');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  } else {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {

  /* — Injection email (contourne l'obfuscation Cloudflare) — */
  const mail = ['thebault', 'et.esiea.fr'].join('@');
  const aboutEl  = document.getElementById('about-email-link');
  const footerEl = document.getElementById('footer-email-link');
  if (aboutEl)  aboutEl.innerHTML  = `<a href="mailto:${mail}">${mail}</a>`;
  if (footerEl) { footerEl.href = `mailto:${mail}`; }

  /* — Duck tap mobile (clic sur hero-sub) — */
  document.querySelector('.hero-sub')
    ?.addEventListener('click', () => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'd' }));
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'u' }));
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'c' }));
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k' }));
    });

  /* — Logo — */
  document.getElementById('nav-logo')
    ?.addEventListener('click', e => { e.preventDefault(); scrollToSection('hero'); });

  /* — Liens nav — */
  const navLinks = {
    'nav-about':       'about',
    'nav-projets':     'projets',
    'nav-competences': 'competences',
    'nav-timeline':    'timeline',
    'nav-contact':     'contact',
  };
  for (const [id, section] of Object.entries(navLinks)) {
    document.getElementById(id)
      ?.addEventListener('click', e => { e.preventDefault(); scrollToSection(section); });
  }

  /* — Lang switch — */
  document.getElementById('btn-fr')
    ?.addEventListener('click', () => setLang('fr'));
  document.getElementById('btn-en')
    ?.addEventListener('click', () => setLang('en'));

  /* — Hero tags → ouvre catégorie compétences — */
  const heroTags = {
    'tag-secu':   'secu',
    'tag-crypto': 'secu',
    'tag-sys':    'sys',
    'tag-dev':    'dev',
    'tag-edu':    'edu',
  };
  for (const [id, cat] of Object.entries(heroTags)) {
    document.getElementById(id)
      ?.addEventListener('click', e => {
        e.preventDefault();
        scrollToSection('competences');
        setTimeout(() => openSkillCat(cat), 400);
      });
  }

  /* — Hero CTA — */
  document.getElementById('hero-cta')
    ?.addEventListener('click', e => { e.preventDefault(); scrollToSection('projets'); });

  /* — Bouton retour projet — */
  document.getElementById('back-btn')
    ?.addEventListener('click', () => closeProject());

  /* — Formulaire contact — */
  document.getElementById('contact-form')
    ?.addEventListener('submit', handleSubmit);

  /* — Boutons catégories compétences — */
  ['secu', 'dev', 'sys', 'edu', 'soft'].forEach(cat => {
    document.getElementById('skbtn-' + cat)
      ?.addEventListener('click', () => toggleSkillCat(cat));
  });

});
