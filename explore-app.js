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
        var icons = {
            student: '\ud83c\udf93', professional: '\ud83d\udcbc', creative: '\ud83c\udfa8',
            parent: '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67', entrepreneur: '\ud83d\ude80', developer: '\ud83d\udcbb',
            researcher: '\ud83d\udd2c', writer: '\u270d\ufe0f', musician: '\ud83c\udfb5',
            educator: '\ud83d\udcda', jobseeker: '\ud83c\udfaf', hobbyist: '\ud83c\udf1f'
        };
        return icons[routeId] || '\ud83c\udf1f';
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
            html += '<span class="role-icon">' + r.icon + '</span>';
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
            html += '<span class="route-icon">' + getRouteIcon(r.id) + '</span>';
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
        detailHeader.innerHTML = '<span style="font-size:2.5rem;display:block;margin-bottom:var(--space-sm)">' + getRouteIcon(route.id) + '</span>' +
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
