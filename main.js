/* ===== 100 Things with AI - Shared JavaScript ===== */
/* Runs after include.js has injected nav, footer, and widgets */
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let lastScrollY = window.scrollY;

    // Nav toggle (hamburger)
    const navToggle = document.getElementById('nav-toggle-btn');
    const navLinks = document.getElementById('nav-links');
    if (navToggle) navToggle.addEventListener('click', () => { navLinks.classList.toggle('open'); navToggle.classList.toggle('active'); });
    if (navLinks) navLinks.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => { navLinks.classList.remove('open'); if(navToggle) navToggle.classList.remove('active'); }));

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

    // Nav search toggle and redirect
    const navSearchBtn = document.getElementById('nav-search-btn');
    const navSearchWrap = document.getElementById('nav-search');
    const navSearchInput = document.getElementById('nav-search-input');
    if (navSearchBtn && navSearchWrap && navSearchInput) {
        navSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (!navSearchWrap.classList.contains('open')) {
                navSearchWrap.classList.add('open');
                navSearchInput.focus();
            } else if (navSearchInput.value.trim()) {
                // Navigate to things page with search query
                const lang = document.documentElement.lang === 'fr' ? 'fr-' : '';
                window.location.href = lang + 'things.html?q=' + encodeURIComponent(navSearchInput.value.trim());
            }
        });
        navSearchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                const lang = document.documentElement.lang === 'fr' ? 'fr-' : '';
                window.location.href = lang + 'things.html?q=' + encodeURIComponent(this.value.trim());
            }
            if (e.key === 'Escape') {
                navSearchWrap.classList.remove('open');
                this.value = '';
            }
        });
        // Close on click outside
        document.addEventListener('click', function(e) {
            if (navSearchWrap.classList.contains('open') && !navSearchWrap.contains(e.target)) {
                navSearchWrap.classList.remove('open');
            }
        });
    }

    // FAQ toggles
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const answer = q.nextElementSibling;
            const chevron = q.querySelector('.faq-chevron');
            answer.classList.toggle('open');
            if (chevron) chevron.classList.toggle('rotated');
        });
    });
});
