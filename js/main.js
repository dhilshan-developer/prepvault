// ── PREPVAULT MAIN JS ────────────────────────────────────

function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  if (m) m.classList.toggle('open');
}

// Toast notification
function showToast(msg, icon = '✅') {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Download button handler
document.addEventListener('click', e => {
  if (e.target.closest('.btn-dl')) {
    showToast('Download started!', '📥');
  }
  if (e.target.closest('.btn-bookmark')) {
    const btn = e.target.closest('.btn-bookmark');
    const bookmarked = btn.dataset.bookmarked === 'true';
    btn.dataset.bookmarked = !bookmarked;
    btn.textContent = bookmarked ? '🔖' : '❤️';
    showToast(bookmarked ? 'Removed from saved' : 'Saved to bookmarks!', bookmarked ? '🗑️' : '🔖');
  }
});

// Filter chips
document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    chip.closest('.filter-row')?.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// Active nav highlight
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href').includes(currentPage)) a.classList.add('active');
});

// Animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .exam-card, .material-card, .notif-card, .stat-box').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
