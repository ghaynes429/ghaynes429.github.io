/* ============================================
   GABRIEL HAYNES: PORTFOLIO
   Shared site behavior
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initKeyPress();
  initCurrentNav();
  initDiscPlayer();
  initScrollReveal();
  initNoteField();
});

/* ---------- Mobile hamburger menu ---------- */
function initMobileNav() {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.piano-nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

/* ---------- Piano key press effect ---------- */
function initKeyPress() {
  document.querySelectorAll('.piano-nav a').forEach(key => {
    key.addEventListener('mousedown', () => key.classList.add('key-pressed'));
    key.addEventListener('mouseup', () => key.classList.remove('key-pressed'));
    key.addEventListener('mouseleave', () => key.classList.remove('key-pressed'));
    key.addEventListener('touchstart', () => key.classList.add('key-pressed'), { passive: true });
    key.addEventListener('touchend', () => key.classList.remove('key-pressed'));
  });
}

/* ---------- Highlight current page in nav ---------- */
function initCurrentNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.piano-nav a[data-page]').forEach(link => {
    if (link.dataset.page === path) {
      link.classList.add('current');
    }
  });
}

/* ---------- Disc player: plays a random track ---------- */
function initDiscPlayer() {
  const disc = document.querySelector('.disc-btn');
  const tooltip = document.querySelector('.disc-tooltip');
  if (!disc) return;

  const tracks = [
    { src: 'assets/audio/daisies.mp3', title: 'Daisies' },
    { src: 'assets/audio/nights.mp3', title: 'Nights, Frank Ocean' },
    { src: 'assets/audio/jezebel.mp3', title: 'Jezebel, Giveon' },
    { src: 'assets/audio/holdstill.mp3', title: 'Hold Still, The Kid LAROI' }
  ];

  let audio = null;
  let currentTrack = null;

  disc.addEventListener('click', () => {
    if (audio && !audio.paused) {
      audio.pause();
      disc.classList.remove('spinning');
      if (tooltip) {
        tooltip.querySelector('.now-playing-text').textContent = 'Paused';
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 1600);
      }
      return;
    }

    if (audio && currentTrack) {
      audio.play();
      disc.classList.add('spinning');
      if (tooltip) {
        tooltip.querySelector('.now-playing-text').textContent = currentTrack.title;
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 2600);
      }
      return;
    }

    const pick = tracks[Math.floor(Math.random() * tracks.length)];
    currentTrack = pick;
    audio = new Audio(pick.src);
    audio.volume = 0.6;
    audio.play().catch(() => {
      if (tooltip) {
        tooltip.querySelector('.now-playing-text').textContent = 'Tap again to play';
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 2000);
      }
    });
    disc.classList.add('spinning');

    if (tooltip) {
      tooltip.querySelector('.now-playing-text').textContent = pick.title;
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 3000);
    }

    audio.addEventListener('ended', () => {
      disc.classList.remove('spinning');
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach(t => t.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => observer.observe(t));
}

/* ---------- Decorative background music notes ---------- */
function initNoteField() {
  const field = document.querySelector('.note-field');
  if (!field) return;

  // Eighth note
  const eighth = `<svg viewBox="0 0 100 140" width="60" height="84" fill="currentColor">
    <ellipse cx="22" cy="118" rx="16" ry="12" transform="rotate(-18 22 118)"/>
    <rect x="34" y="14" width="6" height="104"/>
    <path d="M40 14 C 65 22, 78 40, 70 62 C 80 50, 80 28, 40 14 Z"/>
  </svg>`;

  // Quarter note
  const quarter = `<svg viewBox="0 0 100 140" width="50" height="70" fill="currentColor">
    <ellipse cx="22" cy="118" rx="17" ry="13" transform="rotate(-18 22 118)"/>
    <rect x="34" y="14" width="6" height="104"/>
  </svg>`;

  // Sixteenth note (double flag)
  const sixteenth = `<svg viewBox="0 0 100 150" width="60" height="90" fill="currentColor">
    <ellipse cx="22" cy="128" rx="16" ry="12" transform="rotate(-18 22 128)"/>
    <rect x="34" y="14" width="6" height="114"/>
    <path d="M40 14 C 65 22, 78 40, 70 62 C 80 50, 80 28, 40 14 Z"/>
    <path d="M40 38 C 65 46, 78 64, 70 86 C 80 74, 80 52, 40 38 Z"/>
  </svg>`;

  const shapes = [eighth, quarter, sixteenth];
  const noteCount = window.innerWidth < 700 ? 10 : 18;
  let html = '';

  for (let i = 0; i < noteCount; i++) {
    const shape = shapes[i % shapes.length];
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const rotate = (Math.random() * 50) - 25;
    const scale = 0.6 + Math.random() * 1.1;
    const goldNote = i % 5 === 0 ? ' note-gold' : ' note-dark';

    html += `<div style="position:absolute; top:${top}%; left:${left}%; transform: rotate(${rotate}deg) scale(${scale});" class="${goldNote.trim()}">${shape}</div>`;
  }

  field.innerHTML = html;

  // re-flag classes since innerHTML wraps svg in div, adjust selector
  field.querySelectorAll('div').forEach(div => {
    const cls = div.className.includes('gold') ? 'note-gold' : 'note-dark';
    div.querySelector('svg').classList.add(cls);
  });
}
