/* ===== explore-app.js — Explore page logic (IIFE) ===== */
(function() {
    'use strict';

    // --- Globals ---
    var lang = document.documentElement.lang || 'en';
    var prefix = lang === 'en' ? '' : lang + '-';

    // UI strings from include.js (exposed as window.__S on DOMContentLoaded)

    // --- State ---
    var state = {
        mode: null,        // 'quiz' | 'browse'
        quizStep: 0,       // 0, 1, 2
        role: null,        // quiz answer: role id
        experience: null,  // quiz answer: experience id
        interests: [],     // quiz answer: interest ids
        recommendedRoutes: [],
        currentRoute: null
    };

    // --- DOM References ---
    var modeSection = document.getElementById('explore-mode');
    var wizardSection = document.getElementById('explore-wizard');
    var routesGrid = document.getElementById('explore-routes');
    var detailSection = document.getElementById('explore-detail');
    var wizardProgress = document.getElementById('wizard-progress');
    var wizardSteps = document.getElementById('wizard-steps');
    var wizardActions = document.getElementById('wizard-actions');
    var detailHeader = document.getElementById('detail-header');
    var detailProgress = document.getElementById('detail-progress');
    var detailStepper = document.getElementById('detail-stepper');
    var detailBack = document.getElementById('detail-back');

    // --- Helpers ---
    function getItemById(id) {
        if (typeof ITEMS === 'undefined') return null;
        for (var i = 0; i < ITEMS.length; i++) {
            if (ITEMS[i].id === id) return ITEMS[i];
        }
        return null;
    }

    function getRouteIcon(routeId) {
        var paths = {
            student: '<path d="M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5"/><line x1="22" y1="10" x2="22" y2="16"/>',
            professional: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
            creative: '<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2a10 10 0 0 0 0 20c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.5-.7-.5-1.1 0-.9.8-1.7 1.7-1.7H17c3 0 5.5-2.5 5.5-5.5A10 10 0 0 0 12 2z"/>',
            parent: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>',
            entrepreneur: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
            developer: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
            researcher: '<path d="M10 2v7.53a2 2 0 0 1-.21.9L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.07-10.13A2 2 0 0 1 14 9.53V2"/><path d="M8.5 2h7"/><path d="M7 16.5h10"/>',
            writer: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
            musician: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
            educator: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
            jobseeker: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
            hobbyist: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>'
        };
        var p = paths[routeId] || paths.hobbyist;
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>';
    }

    function getProgress(routeId) {
        try {
            var data = JSON.parse(localStorage.getItem('explore-progress-' + routeId) || '{}');
            return data;
        } catch(e) { return {}; }
    }

    function setProgress(routeId, itemId, checked) {
        var data = getProgress(routeId);
        if (checked) {
            data[itemId] = true;
        } else {
            delete data[itemId];
        }
        localStorage.setItem('explore-progress-' + routeId, JSON.stringify(data));
    }

    function getRouteItems(route) {
        var items = route.items.slice();
        if (state.experience && route.adaptations && route.adaptations[state.experience]) {
            var swaps = route.adaptations[state.experience].swap || [];
            for (var s = 0; s < swaps.length; s++) {
                var idx = items.indexOf(swaps[s][0]);
                if (idx !== -1) items[idx] = swaps[s][1];
            }
        }
        return items;
    }

    // Get translated string from include.js (window.__S) with English fallback
    function qs(key) {
        if (window.__S && window.__S[key]) return window.__S[key];
        var fallbacks = {
            quizStep1: 'What best describes you?', quizStep2: 'What is your AI experience level?', quizStep3: 'What interests you most?',
            quizNext: 'Next', quizBack: 'Back', quizFinish: 'Show My Routes',
            routeItems: 'items', viewItem: 'View', startRoute: 'Start Route',
            yourRoutes: 'Your Recommended Routes', completed: 'completed',
            browseAll: 'Browse All Routes', orBrowse: 'or browse all routes',
            recommended: 'Recommended', backToRoutes: 'Back to routes', progress: 'Progress'
        };
        return fallbacks[key] || key;
    }

    // --- Sections visibility ---
    function showSection(section) {
        modeSection.style.display = 'none';
        wizardSection.classList.remove('active');
        routesGrid.classList.remove('active');
        detailSection.classList.remove('active');

        if (section === 'mode') modeSection.style.display = '';
        else if (section === 'wizard') wizardSection.classList.add('active');
        else if (section === 'routes') routesGrid.classList.add('active');
        else if (section === 'detail') detailSection.classList.add('active');
    }

    // --- Mode Selection ---
    function initMode() {
        document.getElementById('mode-quiz').addEventListener('click', function() {
            state.mode = 'quiz';
            state.quizStep = 0;
            showSection('wizard');
            renderWizard();
        });
        document.getElementById('mode-browse').addEventListener('click', function() {
            state.mode = 'browse';
            state.recommendedRoutes = [];
            showSection('routes');
            renderRoutes(ROUTES, false);
        });
    }

    // --- Quiz Wizard ---
    function renderWizard() {
        // Progress dots
        var dots = '';
        for (var i = 0; i < 3; i++) {
            var cls = i === state.quizStep ? 'active' : (i < state.quizStep ? 'done' : '');
            dots += '<div class="explore-wizard-dot ' + cls + '"></div>';
            if (i < 2) dots += '<div class="explore-wizard-line"></div>';
        }
        wizardProgress.innerHTML = dots;

        // Step content
        var html = '';
        if (state.quizStep === 0) {
            html = renderStep1();
        } else if (state.quizStep === 1) {
            html = renderStep2();
        } else if (state.quizStep === 2) {
            html = renderStep3();
        }
        wizardSteps.innerHTML = html;

        // Actions
        var actions = '';
        if (state.quizStep > 0) {
            actions += '<button class="btn explore-btn-secondary" id="wizard-back">' + qs('quizBack') + '</button>';
        }
        if (state.quizStep < 2) {
            actions += '<button class="btn btn-primary" id="wizard-next" ' + (canAdvance() ? '' : 'disabled') + '>' + qs('quizNext') + '</button>';
        } else {
            actions += '<button class="btn btn-primary" id="wizard-finish" ' + (state.interests.length > 0 ? '' : 'disabled') + '>' + qs('quizFinish') + '</button>';
        }
        wizardActions.innerHTML = actions;

        // Bind events
        bindWizardEvents();
    }

    function renderStep1() {
        var roles = QUIZ_CONFIG.roles;
        var html = '<div class="explore-wizard-step active">';
        html += '<h2>' + qs('quizStep1') + '</h2>';
        html += '<p>' + '</p>';
        html += '<div class="explore-role-grid">';
        for (var i = 0; i < roles.length; i++) {
            var r = roles[i];
            html += '<div class="explore-role-card' + (state.role === r.id ? ' selected' : '') + '" data-role="' + r.id + '">';
            html += '<span class="role-icon">' + getRouteIcon(r.id) + '</span>';
            html += '<span class="role-label">' + r.label + '</span>';
            html += '</div>';
        }
        html += '</div></div>';
        return html;
    }

    function renderStep2() {
        var exps = QUIZ_CONFIG.experience;
        var html = '<div class="explore-wizard-step active">';
        html += '<h2>' + qs('quizStep2') + '</h2>';
        html += '<p>' + '</p>';
        html += '<div class="explore-exp-options">';
        for (var i = 0; i < exps.length; i++) {
            var e = exps[i];
            html += '<button class="explore-exp-btn' + (state.experience === e.id ? ' selected' : '') + '" data-exp="' + e.id + '">';
            html += '<strong>' + e.label + '</strong>';
            html += '<span>' + e.desc + '</span>';
            html += '</button>';
        }
        html += '</div></div>';
        return html;
    }

    function renderStep3() {
        var ints = QUIZ_CONFIG.interests;
        var html = '<div class="explore-wizard-step active">';
        html += '<h2>' + qs('quizStep3') + '</h2>';
        html += '<p>' + '</p>';
        html += '<div class="explore-interest-pills">';
        for (var i = 0; i < ints.length; i++) {
            var it = ints[i];
            html += '<button class="explore-interest-pill' + (state.interests.indexOf(it.id) !== -1 ? ' selected' : '') + '" data-interest="' + it.id + '">' + it.label + '</button>';
        }
        html += '</div></div>';
        return html;
    }

    function canAdvance() {
        if (state.quizStep === 0) return state.role !== null;
        if (state.quizStep === 1) return state.experience !== null;
        if (state.quizStep === 2) return state.interests.length > 0;
        return false;
    }

    function bindWizardEvents() {
        // Role cards
        var roleCards = wizardSteps.querySelectorAll('.explore-role-card');
        for (var i = 0; i < roleCards.length; i++) {
            roleCards[i].addEventListener('click', function() {
                state.role = this.getAttribute('data-role');
                renderWizard();
            });
        }

        // Experience buttons
        var expBtns = wizardSteps.querySelectorAll('.explore-exp-btn');
        for (var i = 0; i < expBtns.length; i++) {
            expBtns[i].addEventListener('click', function() {
                state.experience = this.getAttribute('data-exp');
                renderWizard();
            });
        }

        // Interest pills
        var intPills = wizardSteps.querySelectorAll('.explore-interest-pill');
        for (var i = 0; i < intPills.length; i++) {
            intPills[i].addEventListener('click', function() {
                var id = this.getAttribute('data-interest');
                var idx = state.interests.indexOf(id);
                if (idx !== -1) {
                    state.interests.splice(idx, 1);
                } else {
                    state.interests.push(id);
                }
                renderWizard();
            });
        }

        // Navigation buttons
        var backBtn = document.getElementById('wizard-back');
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                if (state.quizStep > 0) {
                    state.quizStep--;
                    renderWizard();
                }
            });
        }

        var nextBtn = document.getElementById('wizard-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (canAdvance() && state.quizStep < 2) {
                    state.quizStep++;
                    renderWizard();
                }
            });
        }

        var finishBtn = document.getElementById('wizard-finish');
        if (finishBtn) {
            finishBtn.addEventListener('click', function() {
                if (state.interests.length > 0) {
                    var ranked = scoreRoutes();
                    state.recommendedRoutes = ranked;
                    showSection('routes');
                    renderRoutes(ranked, true);
                }
            });
        }
    }

    // --- Route Scoring ---
    function scoreRoutes() {
        var scored = [];
        for (var i = 0; i < ROUTES.length; i++) {
            var route = ROUTES[i];
            var score = 0;

            // Role match: strong signal
            if (route.id === state.role) score += 10;

            // Category overlap with interests
            for (var c = 0; c < route.categories.length; c++) {
                if (state.interests.indexOf(route.categories[c]) !== -1) {
                    score += 3;
                }
            }

            scored.push({ route: route, score: score });
        }

        // Sort by score descending
        scored.sort(function(a, b) { return b.score - a.score; });

        return scored.map(function(s) { return s.route; });
    }

    // --- Routes Grid ---
    function renderRoutes(routes, showRecommended) {
        var html = '';

        if (showRecommended) {
            html += '<div style="grid-column:1/-1;text-align:center;margin-bottom:var(--space-md)">';
            html += '<h2 style="margin-bottom:var(--space-xs)">' + qs('yourRoutes') + '</h2>';
            html += '<p style="color:var(--text-secondary);cursor:pointer;text-decoration:underline" id="routes-browse-link">' + qs('orBrowse') + '</p>';
            html += '</div>';
        } else {
            html += '<div style="grid-column:1/-1;text-align:center;margin-bottom:var(--space-md)">';
            html += '<h2>' + qs('browseAll') + '</h2>';
            html += '</div>';
        }

        var topCount = showRecommended ? 3 : routes.length;
        for (var i = 0; i < routes.length; i++) {
            var r = routes[i];
            var isTop = showRecommended && i < topCount;
            html += '<div class="explore-route-card' + (isTop ? ' reveal active' : ' reveal active') + '" data-route="' + r.id + '">';
            if (isTop && showRecommended) {
                html += '<span class="explore-recommended">' + qs('recommended') + '</span>';
            }
            html += '<span class="route-icon" style="color:' + r.color + '">' + getRouteIcon(r.id) + '</span>';
            html += '<h3>' + r.name + '</h3>';
            html += '<div class="route-audience">' + r.audience + '</div>';
            html += '<p>' + r.description + '</p>';
            html += '<div class="route-count">' + r.items.length + ' ' + qs('routeItems') + '</div>';
            html += '</div>';
        }

        routesGrid.innerHTML = html;

        // Bind card clicks
        var cards = routesGrid.querySelectorAll('.explore-route-card');
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', function() {
                var routeId = this.getAttribute('data-route');
                openRoute(routeId);
            });
        }

        // Bind browse link
        var browseLink = document.getElementById('routes-browse-link');
        if (browseLink) {
            browseLink.addEventListener('click', function(e) {
                e.stopPropagation();
                renderRoutes(ROUTES, false);
            });
        }
    }

    // --- Route Detail ---
    function openRoute(routeId) {
        var route = null;
        for (var i = 0; i < ROUTES.length; i++) {
            if (ROUTES[i].id === routeId) { route = ROUTES[i]; break; }
        }
        if (!route) return;

        state.currentRoute = route;
        showSection('detail');
        renderDetail(route);

        // Scroll to top of detail
        var heroEl = document.querySelector('.page-hero');
        if (heroEl) window.scrollTo({ top: heroEl.offsetHeight, behavior: 'smooth' });

        // Update URL
        var url = new URL(window.location);
        url.searchParams.set('route', routeId);
        history.pushState(null, '', url);
    }

    function renderDetail(route) {
        var items = getRouteItems(route);
        var progress = getProgress(route.id);
        var completedCount = 0;
        for (var i = 0; i < items.length; i++) {
            if (progress[items[i]]) completedCount++;
        }
        var pct = items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0;

        // Header
        detailHeader.innerHTML = '<div class="explore-detail-icon" style="color:' + route.color + '">' + getRouteIcon(route.id) + '</div>' +
            '<h2>' + route.name + '</h2>' +
            '<p>' + route.description + '</p>' +
            '<p style="font-family:var(--font-code);font-size:0.82rem;color:var(--accent-4);margin-top:var(--space-sm)">' + qs('progress') + ': ' + completedCount + '/' + items.length + ' ' + qs('completed') + ' (' + pct + '%)</p>';

        // Progress bar
        detailProgress.style.width = pct + '%';

        // Stepper
        var html = '';
        for (var i = 0; i < items.length; i++) {
            var item = getItemById(items[i]);
            var isChecked = !!progress[items[i]];
            var title = item ? item.title : 'Item #' + items[i];
            var subtitle = item ? item.subtitle : '';
            var catColor = item ? 'var(--cat-' + item.category + ')' : 'var(--accent-1)';

            html += '<div class="explore-step">';
            html += '<div class="explore-step-marker" style="background:' + catColor + '">' + (i + 1) + '</div>';
            html += '<div class="explore-step-content">';
            html += '<div class="explore-step-text"><h4>' + title + '</h4><p>' + subtitle + '</p></div>';
            html += '<div class="explore-step-actions">';
            html += '<a href="' + prefix + 'things.html?id=' + items[i] + '" class="explore-step-view">' + qs('viewItem') + '</a>';
            html += '<button class="explore-step-check' + (isChecked ? ' checked' : '') + '" data-item="' + items[i] + '" data-route="' + route.id + '">';
            html += '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            html += '</button>';
            html += '</div></div></div>';
        }
        detailStepper.innerHTML = html;

        // Bind checkboxes
        var checks = detailStepper.querySelectorAll('.explore-step-check');
        for (var i = 0; i < checks.length; i++) {
            checks[i].addEventListener('click', function() {
                var itemId = parseInt(this.getAttribute('data-item'));
                var routeId = this.getAttribute('data-route');
                var isChecked = this.classList.contains('checked');
                setProgress(routeId, itemId, !isChecked);
                this.classList.toggle('checked');
                // Update progress bar and count
                var route = state.currentRoute;
                if (route) renderDetail(route);
            });
        }

        // Back button text
        var backText = document.getElementById('detail-back-text');
        if (backText) backText.textContent = qs('backToRoutes');
    }

    // --- Back button ---
    function initBackButton() {
        detailBack.addEventListener('click', function() {
            state.currentRoute = null;
            var url = new URL(window.location);
            url.searchParams.delete('route');
            history.pushState(null, '', url);

            if (state.recommendedRoutes.length > 0) {
                showSection('routes');
                renderRoutes(state.recommendedRoutes, true);
            } else {
                showSection('routes');
                renderRoutes(ROUTES, false);
            }
        });
    }

    // --- Deep Link ---
    function checkDeepLink() {
        var params = new URLSearchParams(window.location.search);
        var routeId = params.get('route');
        if (routeId) {
            openRoute(routeId);
            return true;
        }
        return false;
    }

    // --- Browser history ---
    window.addEventListener('popstate', function() {
        var params = new URLSearchParams(window.location.search);
        var routeId = params.get('route');
        if (routeId) {
            openRoute(routeId);
        } else if (state.currentRoute) {
            state.currentRoute = null;
            if (state.recommendedRoutes.length > 0) {
                showSection('routes');
                renderRoutes(state.recommendedRoutes, true);
            } else {
                showSection('mode');
            }
        }
    });

    // --- Init ---
    function init() {
        initMode();
        initBackButton();

        if (!checkDeepLink()) {
            showSection('mode');
        }
    }

    // Run on load (this script is loaded at end of body, after DOMContentLoaded)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
