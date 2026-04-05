/* ═══════════════════════════════════
   LANGUE
   (currentPage / showPage / scrollToSection → navigation.js)
   (renderProjects / openProject            → projects.js)
═══════════════════════════════════ */

function setLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  const t = T[lang];

  document.querySelectorAll('[data-i]').forEach(el => {
    const k = el.getAttribute('data-i');
    if (t[k] !== undefined) el.innerHTML = t[k];
  });

  document.querySelectorAll('[data-ph]').forEach(el => {
    const k = el.getAttribute('data-ph');
    if (t[k] !== undefined) el.placeholder = t[k];
  });

  renderProjects();

  if (currentPage === 'projet') {
    const projId = document.getElementById('proj-title').dataset.projId;
    if (projId) openProject(projId);
  }

  if (window._buildGraph) window._buildGraph();
}

/* ═══════════════════════════════════
   FORMULAIRE CONTACT
═══════════════════════════════════ */

function handleSubmit(event) {
  event.preventDefault();
  const form    = event.target;
  const formMsg = document.getElementById('form-msg');
  formMsg.style.display = 'block';
  form.reset();
  setTimeout(() => { formMsg.style.display = 'none'; }, 3000);
}

/* ═══════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════ */

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

/* ═══════════════════════════════════
   EASTER EGG — DUCK 🦆
═══════════════════════════════════ */

let keySequence    = '';
let duck           = false;
let sequenceTimeout;

document.addEventListener('keydown', (event) => {
  const key          = event.key.toLowerCase();
  const heroSub      = document.querySelector('.hero-sub');
  const hero_sub_sub = T[document.documentElement.lang].hero_sub_sub || '';
  keySequence       += key;

  switch (keySequence) {
    case 'duck':
      if (heroSub) {
        if (!duck) {
          const duckStyle = document.createElement('link');
          duckStyle.rel   = 'stylesheet';
          duckStyle.href  = 'css/duck.css';
          document.head.appendChild(duckStyle);

          const styleLink = document.querySelector('link[href="css/variables.css"]');
          if (styleLink) styleLink.href = 'css/variable_duck.css';

          heroSub.innerHTML += hero_sub_sub;
          duck = true;
        }

        const duckHTML = `
          <div class="duck__wrapper">
            <div class="duck">
              <div class="duck duck__inner">
                <div class="duck__mouth"></div>
                <div class="duck__head">
                  <div class="duck__eye"></div>
                  <div class="duck__eye--shadow"></div>
                  <div class="duck__white"></div>
                </div>
                <div class="duck__body"></div>
                <div class="duck__wing"></div>
              </div>
              <div class="duck__foot duck__foot--1"></div>
              <div class="duck__foot duck__foot--2"></div>
              <div class="surface"></div>
            </div>
          </div>`;
        document.body.insertAdjacentHTML('beforeend', duckHTML);
        const wrapper = document.body.lastElementChild;
        wrapper.style.bottom            = `${Math.random() * 60 + 10}vh`;
        wrapper.style.animationDuration = `${Math.random() * 8 + 5}s`;
        wrapper.addEventListener('animationend', () => wrapper.remove());
      }
      keySequence = '';
      clearTimeout(sequenceTimeout);
      break;

    case 'kitty':
      Object.values(PROJECTS).forEach(proj => { proj.meta.image = 'images/kitty.jpg'; });
      const projImgDiv = document.getElementById('proj-img');
      if (projImgDiv) {
        projImgDiv.innerHTML = '<img src="images/kitty.jpg" alt="kitty" style="width:100%;height:100%;object-fit:cover;border-radius:inherit"/>';
      }
      keySequence = '';
      clearTimeout(sequenceTimeout);
      break;

    default:
      clearTimeout(sequenceTimeout);
      sequenceTimeout = setTimeout(() => { keySequence = ''; }, 2000);
      break;
  }
});

/* ═══════════════════════════════════
   INIT
═══════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
  setLang('fr');
});
