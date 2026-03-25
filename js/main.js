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

/* ═══════════════════════════════════
   INITIALISATION AU CHARGEMENT
═══════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  setLang('fr');
});
