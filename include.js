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
        var title = document.title || '100+ Things to Do with AI | CEMI.AI';
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

    // === UI Strings for all supported languages ===
    var STRINGS = {
        en: {
            things: '100+ Things', usingAI: 'Using AI', tips: 'Tips', skills: 'Useful Skills',
            quickWins: 'Quick Wins', tools: 'Tools', showcase: 'Showcase', about: 'About',
            searchLabel: 'Search (Ctrl+K)', searchPlaceholder: 'Search the 100+ things...',
            searchHint: 'Press Enter to search', scrollTop: 'Scroll to top',
            funFact: 'AI Fun Fact', anotherFact: 'Another fact',
            researchChatGPT: 'Research on ChatGPT', researchPerplexity: 'Research on Perplexity',
            close: 'Close',
            mantra: 'AI is not about doing the same faster and easier &mdash; it is about doing MORE and BETTER than before.',
            visit: 'Visit', quickLinks: 'Quick Links', home: 'Home',
            connectWithUs: 'Connect With Us',
            connectDesc: 'Want to learn more about AI and how it can transform your work and learning?',
            developSkills: 'Want to develop new skills with AI?',
            madeWith: 'Made with AI + Human Creativity',
            availableAt: 'Everything mentioned here is available at'
        },
        fr: {
            things: '100+ choses', usingAI: "Utiliser l'IA", tips: 'Conseils', skills: 'Comp\u00e9tences utiles',
            quickWins: 'Victoires rapides', tools: 'Outils', showcase: 'Vitrine', about: '\u00c0 propos',
            searchLabel: 'Rechercher (Ctrl+K)', searchPlaceholder: 'Rechercher les 100+ choses...',
            searchHint: 'Appuyez sur Entr\u00e9e pour rechercher', scrollTop: 'Retour en haut',
            funFact: "Fait amusant sur l'IA", anotherFact: 'Un autre fait',
            researchChatGPT: 'Rechercher sur ChatGPT', researchPerplexity: 'Rechercher sur Perplexity',
            close: 'Fermer',
            mantra: "L'IA ne consiste pas \u00e0 faire la m\u00eame chose plus vite et plus facilement &mdash; il s'agit de faire PLUS et MIEUX qu'avant.",
            visit: 'Visitez', quickLinks: 'Liens rapides', home: 'Accueil',
            connectWithUs: 'Contactez-nous',
            connectDesc: "Vous voulez en savoir plus sur l'IA et comment elle peut transformer votre travail et votre apprentissage ?",
            developSkills: "Vous voulez d\u00e9velopper de nouvelles comp\u00e9tences avec l'IA ?",
            madeWith: 'Fait avec IA + Cr\u00e9ativit\u00e9 Humaine',
            availableAt: 'Tout ce qui est mentionn\u00e9 ici est disponible sur'
        },
        es: {
            things: '100+ cosas', usingAI: 'Usar IA', tips: 'Consejos', skills: 'Habilidades \u00fatiles',
            quickWins: 'Victorias r\u00e1pidas', tools: 'Herramientas', showcase: 'Vitrina', about: 'Acerca de',
            searchLabel: 'Buscar (Ctrl+K)', searchPlaceholder: 'Buscar las 100+ cosas...',
            searchHint: 'Presiona Enter para buscar', scrollTop: 'Volver arriba',
            funFact: 'Dato curioso sobre IA', anotherFact: 'Otro dato',
            researchChatGPT: 'Investigar en ChatGPT', researchPerplexity: 'Investigar en Perplexity',
            close: 'Cerrar',
            mantra: 'La IA no se trata de hacer lo mismo m\u00e1s r\u00e1pido y f\u00e1cil &mdash; se trata de hacer M\u00c1S y MEJOR que antes.',
            visit: 'Visita', quickLinks: 'Enlaces r\u00e1pidos', home: 'Inicio',
            connectWithUs: 'Cont\u00e1ctanos',
            connectDesc: '\u00bfQuieres aprender m\u00e1s sobre IA y c\u00f3mo puede transformar tu trabajo y aprendizaje?',
            developSkills: '\u00bfQuieres desarrollar nuevas habilidades con IA?',
            madeWith: 'Hecho con IA + Creatividad Humana',
            availableAt: 'Todo lo mencionado aqu\u00ed est\u00e1 disponible en'
        },
        pt: {
            things: '100+ coisas', usingAI: 'Usar IA', tips: 'Dicas', skills: 'Habilidades \u00fateis',
            quickWins: 'Vit\u00f3rias r\u00e1pidas', tools: 'Ferramentas', showcase: 'Vitrine', about: 'Sobre',
            searchLabel: 'Pesquisar (Ctrl+K)', searchPlaceholder: 'Pesquisar as 100+ coisas...',
            searchHint: 'Pressione Enter para pesquisar', scrollTop: 'Voltar ao topo',
            funFact: 'Curiosidade sobre IA', anotherFact: 'Outra curiosidade',
            researchChatGPT: 'Pesquisar no ChatGPT', researchPerplexity: 'Pesquisar no Perplexity',
            close: 'Fechar',
            mantra: 'A IA n\u00e3o \u00e9 sobre fazer o mesmo mais r\u00e1pido e f\u00e1cil &mdash; \u00e9 sobre fazer MAIS e MELHOR do que antes.',
            visit: 'Visite', quickLinks: 'Links r\u00e1pidos', home: 'In\u00edcio',
            connectWithUs: 'Entre em contato',
            connectDesc: 'Quer saber mais sobre IA e como ela pode transformar seu trabalho e aprendizado?',
            developSkills: 'Quer desenvolver novas habilidades com IA?',
            madeWith: 'Feito com IA + Criatividade Humana',
            availableAt: 'Tudo mencionado aqui est\u00e1 dispon\u00edvel em'
        },
        de: {
            things: '100+ Dinge', usingAI: 'KI nutzen', tips: 'Tipps', skills: 'N\u00fctzliche F\u00e4higkeiten',
            quickWins: 'Schnelle Erfolge', tools: 'Werkzeuge', showcase: 'Vitrine', about: '\u00dcber uns',
            searchLabel: 'Suchen (Ctrl+K)', searchPlaceholder: 'Die 100+ Dinge durchsuchen...',
            searchHint: 'Enter dr\u00fccken zum Suchen', scrollTop: 'Nach oben',
            funFact: 'KI-Funfakt', anotherFact: 'Noch ein Fakt',
            researchChatGPT: 'Auf ChatGPT recherchieren', researchPerplexity: 'Auf Perplexity recherchieren',
            close: 'Schlie\u00dfen',
            mantra: 'KI geht nicht darum, das Gleiche schneller und einfacher zu tun &mdash; es geht darum, MEHR und BESSER zu machen als zuvor.',
            visit: 'Besuche', quickLinks: 'Schnelllinks', home: 'Startseite',
            connectWithUs: 'Kontakt',
            connectDesc: 'M\u00f6chtest du mehr \u00fcber KI erfahren und wie sie deine Arbeit und dein Lernen ver\u00e4ndern kann?',
            developSkills: 'M\u00f6chtest du neue F\u00e4higkeiten mit KI entwickeln?',
            madeWith: 'Gemacht mit KI + Menschlicher Kreativit\u00e4t',
            availableAt: 'Alles hier Erw\u00e4hnte ist verf\u00fcgbar auf'
        },
        it: {
            things: '100+ cose', usingAI: "Usare l'IA", tips: 'Consigli', skills: 'Competenze utili',
            quickWins: 'Vittorie rapide', tools: 'Strumenti', showcase: 'Vetrina', about: 'Chi siamo',
            searchLabel: 'Cerca (Ctrl+K)', searchPlaceholder: 'Cerca le 100+ cose...',
            searchHint: 'Premi Invio per cercare', scrollTop: 'Torna su',
            funFact: "Curiosit\u00e0 sull'IA", anotherFact: "Un'altra curiosit\u00e0",
            researchChatGPT: 'Cerca su ChatGPT', researchPerplexity: 'Cerca su Perplexity',
            close: 'Chiudi',
            mantra: "L'IA non riguarda fare le stesse cose pi\u00f9 velocemente e facilmente &mdash; riguarda fare di PI\u00d9 e MEGLIO di prima.",
            visit: 'Visita', quickLinks: 'Link rapidi', home: 'Home',
            connectWithUs: 'Contattaci',
            connectDesc: "Vuoi saperne di pi\u00f9 sull'IA e su come pu\u00f2 trasformare il tuo lavoro e apprendimento?",
            developSkills: "Vuoi sviluppare nuove competenze con l'IA?",
            madeWith: 'Fatto con IA + Creativit\u00e0 Umana',
            availableAt: 'Tutto ci\u00f2 che \u00e8 menzionato qui \u00e8 disponibile su'
        },
        ja: {
            things: '100\u306e\u3053\u3068', usingAI: 'AI\u306e\u4f7f\u3044\u65b9', tips: '\u30d2\u30f3\u30c8', skills: '\u5f79\u7acb\u3064\u30b9\u30ad\u30eb',
            quickWins: '\u30af\u30a4\u30c3\u30af\u30a6\u30a3\u30f3', tools: '\u30c4\u30fc\u30eb', showcase: '\u30b7\u30e7\u30fc\u30b1\u30fc\u30b9', about: '\u6982\u8981',
            searchLabel: '\u691c\u7d22 (Ctrl+K)', searchPlaceholder: '100\u306e\u3053\u3068\u3092\u691c\u7d22...',
            searchHint: 'Enter\u3067\u691c\u7d22', scrollTop: '\u30c8\u30c3\u30d7\u306b\u623b\u308b',
            funFact: 'AI\u306e\u8c46\u77e5\u8b58', anotherFact: '\u5225\u306e\u8c46\u77e5\u8b58',
            researchChatGPT: 'ChatGPT\u3067\u8abf\u3079\u308b', researchPerplexity: 'Perplexity\u3067\u8abf\u3079\u308b',
            close: '\u9589\u3058\u308b',
            mantra: 'AI\u306f\u540c\u3058\u3053\u3068\u3092\u3088\u308a\u901f\u304f\u7c21\u5358\u306b\u3059\u308b\u3053\u3068\u3067\u306f\u3042\u308a\u307e\u305b\u3093 &mdash; \u4ee5\u524d\u3088\u308a\u3082\u3063\u3068\u591a\u304f\u3001\u3082\u3063\u3068\u826f\u304f\u3059\u308b\u3053\u3068\u3067\u3059\u3002',
            visit: '\u8a2a\u554f', quickLinks: '\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af', home: '\u30db\u30fc\u30e0',
            connectWithUs: '\u304a\u554f\u3044\u5408\u308f\u305b',
            connectDesc: 'AI\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u77e5\u308a\u305f\u3044\u3067\u3059\u304b\uff1f\u4ed5\u4e8b\u3084\u5b66\u3073\u3092\u3069\u3046\u5909\u3048\u308b\u304b\u3092\u767a\u898b\u3057\u307e\u3057\u3087\u3046\u3002',
            developSkills: 'AI\u3067\u65b0\u3057\u3044\u30b9\u30ad\u30eb\u3092\u8eab\u306b\u3064\u3051\u305f\u3044\u3067\u3059\u304b\uff1f',
            madeWith: 'AI + \u4eba\u9593\u306e\u5275\u9020\u529b\u3067\u5236\u4f5c',
            availableAt: '\u3053\u3053\u3067\u7d39\u4ecb\u3055\u308c\u305f\u3059\u3079\u3066\u306f\u3053\u3061\u3089\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059'
        },
        zh: {
            things: '100\u4ef6\u4e8b', usingAI: '\u4f7f\u7528AI', tips: '\u6280\u5de7', skills: '\u5b9e\u7528\u6280\u80fd',
            quickWins: '\u5feb\u901f\u4e0a\u624b', tools: '\u5de5\u5177', showcase: '\u5c55\u793a', about: '\u5173\u4e8e',
            searchLabel: '\u641c\u7d22 (Ctrl+K)', searchPlaceholder: '\u641c\u7d22100\u4ef6\u4e8b...',
            searchHint: '\u6309Enter\u641c\u7d22', scrollTop: '\u56de\u5230\u9876\u90e8',
            funFact: 'AI\u8da3\u4e8b', anotherFact: '\u6362\u4e00\u4e2a',
            researchChatGPT: '\u5728ChatGPT\u4e0a\u7814\u7a76', researchPerplexity: '\u5728Perplexity\u4e0a\u7814\u7a76',
            close: '\u5173\u95ed',
            mantra: 'AI\u4e0d\u662f\u4e3a\u4e86\u66f4\u5feb\u66f4\u5bb9\u6613\u5730\u505a\u540c\u6837\u7684\u4e8b\u60c5 &mdash; \u800c\u662f\u8981\u505a\u5f97\u66f4\u591a\u3001\u505a\u5f97\u66f4\u597d\u3002',
            visit: '\u8bbf\u95ee', quickLinks: '\u5feb\u901f\u94fe\u63a5', home: '\u9996\u9875',
            connectWithUs: '\u8054\u7cfb\u6211\u4eec',
            connectDesc: '\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8eAI\u4ee5\u53ca\u5b83\u5982\u4f55\u6539\u53d8\u4f60\u7684\u5de5\u4f5c\u548c\u5b66\u4e60\uff1f',
            developSkills: '\u60f3\u7528AI\u53d1\u5c55\u65b0\u6280\u80fd\uff1f',
            madeWith: 'AI + \u4eba\u7c7b\u521b\u610f\u5236\u4f5c',
            availableAt: '\u8fd9\u91cc\u63d0\u5230\u7684\u4e00\u5207\u90fd\u53ef\u4ee5\u5728\u4ee5\u4e0b\u7f51\u5740\u83b7\u53d6'
        }
    };

    // === Available languages ===
    var LANGS = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Fran\u00e7ais' },
        { code: 'es', label: 'Espa\u00f1ol' },
        { code: 'pt', label: 'Portugu\u00eas' },
        { code: 'de', label: 'Deutsch' },
        { code: 'it', label: 'Italiano' },
        { code: 'ja', label: '\u65e5\u672c\u8a9e' },
        { code: 'zh', label: '\u4e2d\u6587' }
    ];

    // === On DOM ready, inject nav, footer, fun facts, scroll-to-top ===
    document.addEventListener('DOMContentLoaded', function() {
        var lang = document.documentElement.lang || 'en';
        var S = STRINGS[lang] || STRINGS.en;
        var page = document.body.dataset.page || 'index';

        // Page href helper — link to a page in the current language
        function ph(pageName) {
            if (pageName === 'index') return lang === 'en' ? 'index.html' : lang + '.html';
            return (lang === 'en' ? '' : lang + '-') + pageName + '.html';
        }

        // Language href helper — link to the current page in a different language
        function langHref(targetLang) {
            if (page === 'index') return targetLang === 'en' ? 'index.html' : targetLang + '.html';
            return (targetLang === 'en' ? '' : targetLang + '-') + page + '.html';
        }

        function active(p) { return page === p ? ' active' : ''; }

        // --- Language dropdown ---
        var langItems = LANGS.map(function(l) {
            return '<a href="' + langHref(l.code) + '" class="nav-dropdown-item' + (l.code === lang ? ' active' : '') + '">' + l.code.toUpperCase() + ' ' + l.label + '</a>';
        }).join('');

        var langDropdown = '<div class="nav-dropdown nav-lang-dropdown">' +
            '<button class="nav-dropdown-trigger nav-link" style="display:inline-flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;font:inherit;color:inherit;padding:inherit">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg> ' +
            lang.toUpperCase() +
            ' <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg>' +
            '</button>' +
            '<div class="nav-dropdown-menu">' + langItems + '</div></div>';

        // --- Navigation ---
        var navHTML = '<nav class="nav" id="main-nav"><div class="nav-inner">' +
            '<a href="' + ph('index') + '" class="nav-logo"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100+ <span>Things to Do with AI</span></a>' +
            '<button class="nav-hamburger" id="nav-toggle-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
            '<div class="nav-links" id="nav-links">' +
            '<a href="' + ph('things') + '" class="nav-link' + active('things') + '">' + S.things + '</a>' +
            '<div class="nav-dropdown">' +
            '<a href="' + ph('tips') + '" class="nav-dropdown-trigger nav-link' + (page === 'tips' || page === 'toolkit' || page === 'quickwins' || page === 'tools' ? ' active' : '') + '">' + S.usingAI + ' <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg></a>' +
            '<div class="nav-dropdown-menu">' +
            '<a href="' + ph('tips') + '" class="nav-dropdown-item' + active('tips') + '">' + S.tips + '</a>' +
            '<a href="' + ph('toolkit') + '" class="nav-dropdown-item' + active('toolkit') + '">' + S.skills + '</a>' +
            '<a href="' + ph('quickwins') + '" class="nav-dropdown-item' + active('quickwins') + '">' + S.quickWins + '</a>' +
            '<a href="' + ph('tools') + '" class="nav-dropdown-item' + active('tools') + '">' + S.tools + '</a>' +
            '</div></div>' +
            '<a href="' + ph('showcase') + '" class="nav-link' + active('showcase') + '">' + S.showcase + '</a>' +
            '<a href="' + ph('faq') + '" class="nav-link' + active('faq') + '">FAQ</a>' +
            '<a href="' + ph('about') + '" class="nav-link' + active('about') + '">' + S.about + '</a>' +
            '<button class="nav-search-btn" id="nav-search-btn" aria-label="' + S.searchLabel + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>' +
            langDropdown +
            '<a href="https://cemi.ai" class="nav-link nav-cta" target="_blank">CEMI.AI</a>' +
            '</div></div></nav>';

        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // --- Footer ---
        var footerHTML = '<footer class="footer"><div class="container"><div class="footer-grid">' +
            '<div class="footer-col">' +
            '<a href="' + ph('index') + '" class="nav-logo" style="display:inline-flex;align-items:center;gap:8px;margin-bottom:var(--space-md);font-size:1.3rem"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100+ <span>Things to Do with AI</span></a>' +
            '<p class="footer-mantra">&ldquo;' + S.mantra + '&rdquo;</p>' +
            '<a href="https://cemi.ai" target="_blank">' + S.visit + ' CEMI.AI &rarr;</a>' +
            '</div>' +
            '<div class="footer-col"><h4>' + S.quickLinks + '</h4><ul class="footer-links">' +
            '<li><a href="' + ph('index') + '">' + S.home + '</a></li>' +
            '<li><a href="' + ph('toolkit') + '">' + S.skills + '</a></li>' +
            '<li><a href="' + ph('tools') + '">' + S.tools + '</a></li>' +
            '<li><a href="' + ph('tips') + '">' + S.tips + '</a></li>' +
            '<li><a href="' + ph('quickwins') + '">' + S.quickWins + '</a></li>' +
            '<li><a href="' + ph('faq') + '">FAQ</a></li>' +
            '<li><a href="' + ph('things') + '">' + S.things + '</a></li>' +
            '<li><a href="' + ph('about') + '">' + S.about + '</a></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + S.connectWithUs + '</h4>' +
            '<p>' + S.connectDesc + '</p>' +
            '<a href="https://cemi.ai" target="_blank" style="margin-top:var(--space-sm);display:inline-block;color:var(--accent-2);font-weight:600">cemi.ai &rarr;</a>' +
            '<div style="margin-top:var(--space-lg);padding-top:var(--space-md);border-top:1px solid rgba(167,0,0,0.1)">' +
            '<p style="font-size:0.88rem;color:var(--accent-3);margin-bottom:var(--space-xs)">' + S.developSkills + '</p>' +
            '<a href="https://xperto.academy" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent-4);font-weight:600;font-size:0.9rem">xperto.academy <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>' +
            '</div></div>' +
            '</div><div class="footer-bottom">' +
            '<p>' + S.madeWith + ' | &copy; 2025 <a href="https://cemi.ai" target="_blank">CEMI.AI</a></p>' +
            '<p>' + S.availableAt + ' <a href="https://100.cemi.ai">100.cemi.ai</a></p>' +
            '</div></div></footer>';

        // --- Scroll to top ---
        var scrollTopHTML = '<button class="scroll-top" id="scroll-top-btn" aria-label="' + S.scrollTop + '">' +
            '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button>';

        // --- Fun Facts widget ---
        var funFactHTML = '<div class="funfact-widget" id="funfact-widget">' +
            '<div class="funfact-content">' +
            '<div class="funfact-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> ' + S.funFact + '</div>' +
            '<p id="funfact-text"></p>' +
            '<div class="funfact-actions">' +
            '<button id="funfact-next" class="funfact-btn" title="' + S.anotherFact + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path></svg></button>' +
            '<a id="funfact-chatgpt" class="funfact-btn" target="_blank" title="' + S.researchChatGPT + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></a>' +
            '<a id="funfact-perplexity" class="funfact-btn" target="_blank" title="' + S.researchPerplexity + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>' +
            '<button id="funfact-close" class="funfact-btn funfact-close-btn" title="' + S.close + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>' +
            '</div></div></div>';

        // --- Search Modal ---
        var searchModalHTML = '<div class="search-modal-overlay" id="search-modal-overlay">' +
            '<div class="search-modal">' +
            '<div class="search-modal-input-wrap">' +
            '<svg class="search-modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
            '<input type="text" id="search-modal-input" placeholder="' + S.searchPlaceholder + '" autocomplete="off">' +
            '<kbd class="search-modal-kbd">ESC</kbd>' +
            '</div>' +
            '<div class="search-modal-hint">' + S.searchHint + ' \u00b7 <span class="search-modal-shortcut">' + (navigator.platform.indexOf('Mac') > -1 ? '\u2318' : 'Ctrl') + '+K</span></div>' +
            '</div></div>';

        // Insert footer, scroll-top, funfact, search modal at end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML + scrollTopHTML + funFactHTML + searchModalHTML);

        // --- Initialize fun facts (called after funfacts.js loads) ---
        function initFunFacts() {
            if (typeof FUN_FACTS === 'undefined') return;
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

        // === Dynamically load funfacts.js then main.js ===
        var ffScript = document.createElement('script');
        ffScript.src = 'funfacts.js';
        ffScript.onload = function() {
            initFunFacts();
            var mjScript = document.createElement('script');
            mjScript.src = 'main.js';
            document.body.appendChild(mjScript);
        };
        document.body.appendChild(ffScript);
    });
})();
