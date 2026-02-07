/* ===== include.js - Shared components for all pages ===== */
/* Load this in <head> to inject CSS/fonts, then nav/footer on DOMContentLoaded */
(function() {
    'use strict';
    var head = document.head;

    // === Inject CSS, Fonts, Favicon & Meta into <head> (synchronous, prevents FOUC) ===
    if (!document.querySelector('link[href="styles.css"]')) {
        var pc1 = document.createElement('link'); pc1.rel = 'preconnect'; pc1.href = 'https://fonts.googleapis.com'; head.appendChild(pc1);
        var pc2 = document.createElement('link'); pc2.rel = 'preconnect'; pc2.href = 'https://fonts.gstatic.com'; pc2.crossOrigin = ''; head.appendChild(pc2);
        var gf = document.createElement('link'); gf.rel = 'stylesheet'; gf.href = 'https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;700;900&family=Inter:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400&family=Source+Code+Pro:wght@400;500;600&display=swap'; head.appendChild(gf);
        var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'styles.css'; head.appendChild(css);
    }

    // === Inject Favicon, Apple Touch Icon, Manifest ===
    if (!document.querySelector('link[rel="icon"]')) {
        var ico = document.createElement('link'); ico.rel = 'icon'; ico.type = 'image/x-icon'; ico.href = 'favicon.ico'; head.appendChild(ico);
        var i32 = document.createElement('link'); i32.rel = 'icon'; i32.type = 'image/png'; i32.sizes = '32x32'; i32.href = 'assets/logos/favicon-32x32.png'; head.appendChild(i32);
        var i16 = document.createElement('link'); i16.rel = 'icon'; i16.type = 'image/png'; i16.sizes = '16x16'; i16.href = 'assets/logos/favicon-16x16.png'; head.appendChild(i16);
        var atc = document.createElement('link'); atc.rel = 'apple-touch-icon'; atc.sizes = '180x180'; atc.href = 'apple-touch-icon.png'; head.appendChild(atc);
        var man = document.createElement('link'); man.rel = 'manifest'; man.href = 'site.webmanifest'; head.appendChild(man);
        var tc = document.createElement('meta'); tc.name = 'theme-color'; tc.content = '#a70000'; head.appendChild(tc);
    }

    // === Inject Open Graph & Twitter Card meta (if not already present) ===
    if (!document.querySelector('meta[property="og:title"]')) {
        var title = document.title || '100 Things with AI | CEMI.AI';
        var desc = (document.querySelector('meta[name="description"]') || {}).content || 'Discover 100+ amazing things you can do with AI. A comprehensive guide by CEMI.AI.';
        var ogTags = [
            ['property', 'og:type', 'website'],
            ['property', 'og:url', 'https://100.cemi.ai/'],
            ['property', 'og:title', title],
            ['property', 'og:description', desc],
            ['property', 'og:image', 'https://100.cemi.ai/assets/logos/og-image.png'],
            ['property', 'og:image:width', '1200'],
            ['property', 'og:image:height', '630'],
            ['property', 'og:site_name', '100.cemi.ai'],
            ['name', 'twitter:card', 'summary_large_image'],
            ['name', 'twitter:title', title],
            ['name', 'twitter:description', desc],
            ['name', 'twitter:image', 'https://100.cemi.ai/assets/logos/twitter-card.png']
        ];
        ogTags.forEach(function(t) {
            var m = document.createElement('meta');
            m.setAttribute(t[0], t[1]);
            m.content = t[2];
            head.appendChild(m);
        });
    }

    // === On DOM ready, inject nav, footer, fun facts, scroll-to-top ===
    document.addEventListener('DOMContentLoaded', function() {
        var lang = document.documentElement.lang || 'en';
        var isEN = lang === 'en';
        var page = document.body.dataset.page || 'index';
        var frPage = document.body.dataset.fr || (isEN ? 'fr.html' : 'index.html');

        function active(p) { return page === p ? ' active' : ''; }

        // --- Navigation ---
        var navHTML = '<nav class="nav" id="main-nav"><div class="nav-inner">' +
            '<a href="index.html" class="nav-logo"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100 <span>Things with AI</span></a>' +
            '<button class="nav-hamburger" id="nav-toggle-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
            '<div class="nav-links" id="nav-links">' +
            '<a href="index.html#showcase" class="nav-link' + active('showcase') + '">' + (isEN ? 'Showcase' : 'Vitrine') + '</a>' +
            '<a href="toolkit.html" class="nav-link' + active('toolkit') + '">' + (isEN ? 'Toolkit' : 'Boîte à outils') + '</a>' +
            '<a href="tools.html" class="nav-link' + active('tools') + '">' + (isEN ? 'Tools' : 'Outils') + '</a>' +
            '<a href="tips.html" class="nav-link' + active('tips') + '">' + (isEN ? 'Tips' : 'Conseils') + '</a>' +
            '<a href="quickwins.html" class="nav-link' + active('quickwins') + '">' + (isEN ? 'Quick Wins' : 'Victoires rapides') + '</a>' +
            '<a href="things.html" class="nav-link' + active('things') + '">' + (isEN ? 'The 100 Things' : 'Les 100 choses') + '</a>' +
            '<a href="faq.html" class="nav-link' + active('faq') + '">FAQ</a>' +
            '<a href="about.html" class="nav-link' + active('about') + '">' + (isEN ? 'About' : 'À propos') + '</a>' +
            '<button class="nav-search-btn" id="nav-search-btn" aria-label="' + (isEN ? 'Search (Ctrl+K)' : 'Rechercher (Ctrl+K)') + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>' +
            '<a href="' + frPage + '" class="nav-link" title="' + (isEN ? 'Version française' : 'English version') + '">' + (isEN ? 'FR' : 'EN') + '</a>' +
            '<a href="https://cemi.ai" class="nav-link nav-cta" target="_blank">CEMI.AI</a>' +
            '</div></div></nav>';

        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // --- Footer ---
        var footerHTML = '<footer class="footer"><div class="container"><div class="footer-grid">' +
            '<div class="footer-col">' +
            '<a href="index.html" class="nav-logo" style="display:inline-flex;align-items:center;gap:8px;margin-bottom:var(--space-md);font-size:1.3rem"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100 <span>Things with AI</span></a>' +
            '<p class="footer-mantra">&ldquo;' + (isEN
                ? 'AI is not about doing the same faster and easier &mdash; it is about doing MORE and BETTER than before.'
                : "L'IA ne consiste pas à faire la même chose plus vite et plus facilement &mdash; il s'agit de faire PLUS et MIEUX qu'avant.") +
            '&rdquo;</p>' +
            '<a href="https://cemi.ai" target="_blank">' + (isEN ? 'Visit' : 'Visitez') + ' CEMI.AI &rarr;</a>' +
            '</div>' +
            '<div class="footer-col"><h4>' + (isEN ? 'Quick Links' : 'Liens rapides') + '</h4><ul class="footer-links">' +
            '<li><a href="index.html">' + (isEN ? 'Home' : 'Accueil') + '</a></li>' +
            '<li><a href="toolkit.html">' + (isEN ? 'Your AI Toolkit' : 'Votre boîte à outils IA') + '</a></li>' +
            '<li><a href="tools.html">' + (isEN ? 'Our Favorite Tools' : 'Nos outils préférés') + '</a></li>' +
            '<li><a href="tips.html">' + (isEN ? 'Mega Tips' : 'Méga conseils') + '</a></li>' +
            '<li><a href="quickwins.html">' + (isEN ? 'Quick Wins' : 'Victoires rapides') + '</a></li>' +
            '<li><a href="faq.html">FAQ</a></li>' +
            '<li><a href="things.html">' + (isEN ? 'The 100 Things' : 'Les 100 choses') + '</a></li>' +
            '<li><a href="about.html">' + (isEN ? 'About' : 'À propos') + '</a></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + (isEN ? 'Connect With Us' : 'Contactez-nous') + '</h4>' +
            '<p>' + (isEN
                ? 'Want to learn more about AI and how it can transform your work and learning?'
                : "Vous voulez en savoir plus sur l'IA et comment elle peut transformer votre travail et votre apprentissage ?") + '</p>' +
            '<a href="https://cemi.ai" target="_blank" style="margin-top:var(--space-sm);display:inline-block;color:var(--accent-2);font-weight:600">cemi.ai &rarr;</a>' +
            '<div style="margin-top:var(--space-lg);padding-top:var(--space-md);border-top:1px solid rgba(167,0,0,0.1)">' +
            '<p style="font-size:0.88rem;color:var(--accent-3);margin-bottom:var(--space-xs)">' + (isEN
                ? 'Want to develop new skills with AI?'
                : 'Vous voulez développer de nouvelles compétences avec l\'IA ?') + '</p>' +
            '<a href="https://xperto.academy" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent-4);font-weight:600;font-size:0.9rem">xperto.academy <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>' +
            '</div></div>' +
            '</div><div class="footer-bottom">' +
            '<p>' + (isEN ? 'Made with AI + Human Creativity' : 'Fait avec IA + Créativité Humaine') + ' | &copy; 2025 <a href="https://cemi.ai" target="_blank">CEMI.AI</a></p>' +
            '<p>' + (isEN ? 'Everything mentioned here is available at' : 'Tout ce qui est mentionné ici est disponible sur') + ' <a href="https://100.cemi.ai">100.cemi.ai</a></p>' +
            '</div></div></footer>';

        // --- Scroll to top ---
        var scrollTopHTML = '<button class="scroll-top" id="scroll-top-btn" aria-label="' + (isEN ? 'Scroll to top' : 'Retour en haut') + '">' +
            '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button>';

        // --- Fun Facts widget ---
        var funFactHTML = '<div class="funfact-widget" id="funfact-widget">' +
            '<div class="funfact-content">' +
            '<div class="funfact-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> ' + (isEN ? 'AI Fun Fact' : 'Fait amusant sur l\'IA') + '</div>' +
            '<p id="funfact-text"></p>' +
            '<div class="funfact-actions">' +
            '<button id="funfact-next" class="funfact-btn" title="' + (isEN ? 'Another fact' : 'Un autre fait') + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path></svg></button>' +
            '<a id="funfact-chatgpt" class="funfact-btn" target="_blank" title="' + (isEN ? 'Research on ChatGPT' : 'Rechercher sur ChatGPT') + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></a>' +
            '<a id="funfact-perplexity" class="funfact-btn" target="_blank" title="' + (isEN ? 'Research on Perplexity' : 'Rechercher sur Perplexity') + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>' +
            '<button id="funfact-close" class="funfact-btn funfact-close-btn" title="' + (isEN ? 'Close' : 'Fermer') + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>' +
            '</div></div></div>';

        // Insert footer, scroll-top, funfact before the last script or at end of body
        var mainScript = document.querySelector('script[src="main.js"]');
        var insertPoint = mainScript || document.body.lastElementChild;
        // --- Search Modal ---
        var searchModalHTML = '<div class="search-modal-overlay" id="search-modal-overlay">' +
            '<div class="search-modal">' +
            '<div class="search-modal-input-wrap">' +
            '<svg class="search-modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
            '<input type="text" id="search-modal-input" placeholder="' + (isEN ? 'Search the 100 things...' : 'Rechercher les 100 choses...') + '" autocomplete="off">' +
            '<kbd class="search-modal-kbd">ESC</kbd>' +
            '</div>' +
            '<div class="search-modal-hint">' + (isEN ? 'Press Enter to search' : 'Appuyez sur Entrée pour rechercher') + ' · <span class="search-modal-shortcut">' + (navigator.platform.indexOf('Mac') > -1 ? '⌘' : 'Ctrl') + '+K</span></div>' +
            '</div></div>';

        insertPoint.insertAdjacentHTML('beforebegin', footerHTML + scrollTopHTML + funFactHTML + searchModalHTML);

        // --- Initialize fun facts ---
        if (typeof FUN_FACTS !== 'undefined') {
            var currentFact = -1;
            var factText = document.getElementById('funfact-text');
            var chatgptLink = document.getElementById('funfact-chatgpt');
            var perplexityLink = document.getElementById('funfact-perplexity');
            var nextBtn = document.getElementById('funfact-next');
            var closeBtn = document.getElementById('funfact-close');
            var widget = document.getElementById('funfact-widget');

            function showFact() {
                var idx;
                do { idx = Math.floor(Math.random() * FUN_FACTS.length); } while (idx === currentFact && FUN_FACTS.length > 1);
                currentFact = idx;
                var fact = FUN_FACTS[idx];
                if (factText) factText.textContent = fact;
                if (chatgptLink) chatgptLink.href = 'https://chatgpt.com/?q=' + encodeURIComponent('Tell me more about: ' + fact);
                if (perplexityLink) perplexityLink.href = 'https://www.perplexity.ai/search?q=' + encodeURIComponent(fact);
            }

            showFact();
            if (nextBtn) nextBtn.addEventListener('click', showFact);
            if (closeBtn) closeBtn.addEventListener('click', function() {
                widget.classList.add('hidden');
            });

            // Show widget after slight delay
            setTimeout(function() {
                if (widget) widget.classList.add('visible');
            }, 2000);
        }
    });
})();
