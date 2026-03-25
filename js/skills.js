/* ═══════════════════════════════════
   GESTION DES COMPÉTENCES
═══════════════════════════════════ */

function toggleSkillCat(cat) {
  const el = document.getElementById('skill-' + cat);
  const isOpen = el.classList.contains('active');
  document.querySelectorAll('.skills-section').forEach(s => s.classList.remove('active'));
  if (!isOpen) el.classList.add('active');
}

function openSkillCat(cat) {
  document.querySelectorAll('.skills-section').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('skill-' + cat);
  if (el) {
    el.classList.add('active');
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
