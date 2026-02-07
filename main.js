/* ===== 100 Things with AI - Shared JavaScript ===== */
/* Runs after include.js has injected nav, footer, and widgets */
(function() {
    'use strict';

    let lastScrollY = window.scrollY;

    // Nav toggle (hamburger)
    const navToggle = document.getElementById('nav-toggle-btn');
    const navLinks = document.getElementById('nav-links');
    if (navToggle) navToggle.addEventListener('click', () => { navLinks.classList.toggle('open'); navToggle.classList.toggle('active'); });

    // Close mobile menu on any nav link click
    function closeMobileNav() { if (navLinks) navLinks.classList.remove('open'); if (navToggle) navToggle.classList.remove('active'); }
    if (navLinks) {
        navLinks.querySelectorAll('.nav-link:not(.nav-dropdown-trigger)').forEach(l => l.addEventListener('click', closeMobileNav));
        navLinks.querySelectorAll('.nav-dropdown-item').forEach(l => l.addEventListener('click', closeMobileNav));
    }

    // Mobile dropdown toggle
    const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                this.closest('.nav-dropdown').classList.toggle('open');
            }
        });
    }

    // Nav scroll behavior
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (nav) { nav.classList.toggle('scrolled', y > 50); nav.classList.toggle('hidden', y > lastScrollY && y > 200); if (y <= lastScrollY) nav.classList.remove('hidden'); }
        lastScrollY = y;
    }, { passive: true });

    // Scroll animations (reveal)
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); } }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }

    // Scroll to top
    const scrollBtn = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => { if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 600); }, { passive: true });
    if (scrollBtn) scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Smooth scroll all anchors on same page
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', function(e) { const h = this.getAttribute('href'); if (h && h.length > 1) { const t = document.querySelector(h); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); } } }));

    // Search modal
    const searchOverlay = document.getElementById('search-modal-overlay');
    const searchModalInput = document.getElementById('search-modal-input');
    const navSearchBtn = document.getElementById('nav-search-btn');

    function openSearchModal() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('open');
        if (searchModalInput) { searchModalInput.value = ''; searchModalInput.focus(); }
    }
    function closeSearchModal() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('open');
        if (searchModalInput) searchModalInput.value = '';
    }

    if (navSearchBtn) navSearchBtn.addEventListener('click', function(e) { e.preventDefault(); openSearchModal(); });

    // Cmd/Ctrl+K shortcut
    document.addEventListener('keydown', function(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearchModal(); }
        if (e.key === 'Escape') closeSearchModal();
    });

    // Close on backdrop click
    if (searchOverlay) searchOverlay.addEventListener('click', function(e) { if (e.target === searchOverlay) closeSearchModal(); });

    // ESC kbd badge click
    const escKbd = searchOverlay ? searchOverlay.querySelector('.search-modal-kbd') : null;
    if (escKbd) escKbd.addEventListener('click', closeSearchModal);

    // Enter to search — redirect to things.html (unless on things page, handled by things.html script)
    if (searchModalInput) searchModalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            const page = document.body.dataset.page;
            if (page !== 'things') {
                const lang = document.documentElement.lang === 'fr' ? 'fr-' : '';
                window.location.href = lang + 'things.html?q=' + encodeURIComponent(this.value.trim());
            }
        }
    });

    // FAQ toggles
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const chevron = q.querySelector('.faq-chevron');
            answer.classList.toggle('open');
            if (chevron) chevron.classList.toggle('rotated');
        });
    });
})();
