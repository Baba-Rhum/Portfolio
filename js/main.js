/* ═══════════════════════════════════
   INITIALISATION GÉNÉRALE
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
  // Si on est sur une page projet, mettre à jour le contenu
  if (currentPage === 'projet') {
    const projId = document.getElementById('proj-title').dataset.projId;
    if (projId) openProject(projId);
  }
  if (window._buildGraph) window._buildGraph();
}

/* ═══════════════════════════════════
   GESTION DU FORMULAIRE DE CONTACT
═══════════════════════════════════ */

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formMsg = document.getElementById('form-msg');
  
  // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
  // Pour l'instant, on affiche juste un message de succès
  formMsg.style.display = 'block';
  form.reset();
  
  setTimeout(() => {
    formMsg.style.display = 'none';
  }, 3000);
}

/* ═══════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════ */

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

/* ═══════════════════════════════════   DÉTECTION DE SÉQUENCE DE TOUCHES
═══════════════════════════════════ */

let keySequence = '';
let duck = false;
const targetSequence = ['duck', 'kitty'];

let sequenceTimeout;

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  const heroSub = document.querySelector('.hero-sub');
  const hero_sub_sub = T[document.documentElement.lang].hero_sub_sub || '';
  const kitty = document.getElementById('img_placeholder');
  keySequence += key;
  
  
  // Vérifier si la séquence contient "duck"
  switch (keySequence) {
    case 'duck':
      if (heroSub && duck === false) {
        const styleLink = document.querySelector('link[href="css/variables.css"]');
        if (styleLink) {
          styleLink.href = 'css/variable_duck.css';
        }
        heroSub.innerHTML += hero_sub_sub;
        duck = true;
      }
      keySequence = '';
      clearTimeout(sequenceTimeout);
      break;
    case 'kitty':
      Object.values(PROJECTS).forEach(proj => {
        proj.image = 'images/kitty.jpg';
      });
      const projImgDiv = document.getElementById('proj-img');
      if (projImgDiv) {
        projImgDiv.innerHTML = '<img src="images/kitty.jpg" alt="kitty" style="width:100%;height:100%;object-fit:cover;border-radius:inherit"/>';
      }
      keySequence = '';
      clearTimeout(sequenceTimeout);
      break;
    default:
      clearTimeout(sequenceTimeout);
      sequenceTimeout = setTimeout(() => {
      keySequence = '';
    }, 2000);
      break;
  }
});

/* ═══════════════════════════════════   INITIALISATION AU CHARGEMENT
═══════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  setLang('fr');
});
