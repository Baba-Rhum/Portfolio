/* ═══════════════════════════════════
   NAVIGATION PAGES
═══════════════════════════════════ */

let currentPage = 'main';
let scrollPos = 0;

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
