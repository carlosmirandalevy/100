/* admin-app.js — Admin dashboard for reviewing submissions
   IIFE. Requires firebase-config.js (with Auth). English only. */
(function() {
    'use strict';

    var root = document.getElementById('admin-root');
    if (!root) return;

    var currentUser = null;
    var submissions = [];
    var filterStatus = 'all';
    var filterType = 'all';
    var sortBy = 'newest';
    var expandedId = null;

    // === Login Screen ===
    function renderLogin() {
        root.innerHTML =
            '<div class="admin-login">' +
                '<h2>Admin Login</h2>' +
                '<form id="admin-login-form" class="admin-login-form">' +
                    '<input type="email" id="admin-email" placeholder="Email" required>' +
                    '<input type="password" id="admin-password" placeholder="Password" required>' +
                    '<button type="submit" class="btn btn-primary">Sign In</button>' +
                    '<div class="admin-login-error" id="admin-login-error"></div>' +
                '</form>' +
            '</div>';

        document.getElementById('admin-login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.getElementById('admin-email').value;
            var password = document.getElementById('admin-password').value;
            var errorEl = document.getElementById('admin-login-error');
            errorEl.textContent = '';

            if (!window.__auth) {
                errorEl.textContent = 'Auth not initialized. Check firebase-config.js.';
                return;
            }

            window.__auth.signInWithEmailAndPassword(email, password)
                .then(function(cred) {
                    currentUser = cred.user;
                    renderDashboard();
                })
                .catch(function(err) {
                    errorEl.textContent = err.message || 'Login failed.';
                });
        });
    }

    // === Dashboard ===
    function renderDashboard() {
        root.innerHTML =
            '<div class="admin-dashboard">' +
                '<div class="admin-header">' +
                    '<h2>Submissions Dashboard</h2>' +
                    '<button class="btn admin-logout-btn" id="admin-logout">Logout</button>' +
                '</div>' +
                '<div class="admin-toolbar">' +
                    '<div class="admin-filter-group">' +
                        '<label>Status:</label>' +
                        '<select id="admin-filter-status">' +
                            '<option value="all">All</option>' +
                            '<option value="pending" selected>Pending</option>' +
                            '<option value="reviewed">Reviewed</option>' +
                            '<option value="published">Published</option>' +
                            '<option value="rejected">Rejected</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="admin-filter-group">' +
                        '<label>Type:</label>' +
                        '<select id="admin-filter-type">' +
                            '<option value="all">All</option>' +
                            '<option value="item">Item</option>' +
                            '<option value="dont">Don\'t</option>' +
                            '<option value="category">Category</option>' +
                            '<option value="example">Example</option>' +
                        '</select>' +
                    '</div>' +
                    '<div class="admin-filter-group">' +
                        '<label>Sort:</label>' +
                        '<select id="admin-filter-sort">' +
                            '<option value="newest">Newest first</option>' +
                            '<option value="oldest">Oldest first</option>' +
                        '</select>' +
                    '</div>' +
                    '<button class="btn admin-refresh-btn" id="admin-refresh">Refresh</button>' +
                '</div>' +
                '<div class="admin-count" id="admin-count"></div>' +
                '<div class="admin-list" id="admin-list"></div>' +
            '</div>';

        // Default to pending
        filterStatus = 'pending';

        document.getElementById('admin-logout').addEventListener('click', function() {
            window.__auth.signOut().then(function() {
                currentUser = null;
                renderLogin();
            });
        });

        document.getElementById('admin-filter-status').addEventListener('change', function() {
            filterStatus = this.value;
            renderList();
        });

        document.getElementById('admin-filter-type').addEventListener('change', function() {
            filterType = this.value;
            renderList();
        });

        document.getElementById('admin-filter-sort').addEventListener('change', function() {
            sortBy = this.value;
            renderList();
        });

        document.getElementById('admin-refresh').addEventListener('click', fetchSubmissions);

        fetchSubmissions();
    }

    // === Fetch from Firestore ===
    function fetchSubmissions() {
        if (!window.__db) return;

        window.__db.collection('submissions').orderBy('createdAt', 'desc').get()
            .then(function(snapshot) {
                submissions = [];
                snapshot.forEach(function(doc) {
                    var d = doc.data();
                    d._id = doc.id;
                    submissions.push(d);
                });
                renderList();
            })
            .catch(function(err) {
                var list = document.getElementById('admin-list');
                if (list) list.innerHTML = '<p class="admin-error">Failed to load: ' + (err.message || 'Unknown error') + '</p>';
            });
    }

    // === Render filtered list ===
    function renderList() {
        var list = document.getElementById('admin-list');
        var countEl = document.getElementById('admin-count');
        if (!list) return;

        var filtered = submissions.filter(function(s) {
            var matchStatus = filterStatus === 'all' || s.status === filterStatus;
            var matchType = filterType === 'all' || s.type === filterType;
            return matchStatus && matchType;
        });

        if (sortBy === 'oldest') {
            filtered.sort(function(a, b) {
                var ta = a.createdAt ? a.createdAt.seconds : 0;
                var tb = b.createdAt ? b.createdAt.seconds : 0;
                return ta - tb;
            });
        }

        if (countEl) countEl.textContent = filtered.length + ' of ' + submissions.length + ' submissions';

        if (!filtered.length) {
            list.innerHTML = '<p class="admin-empty">No submissions match the current filters.</p>';
            return;
        }

        list.innerHTML = filtered.map(function(s) {
            var date = s.createdAt ? new Date(s.createdAt.seconds * 1000).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'N/A';
            var isExpanded = expandedId === s._id;
            return '<div class="admin-card' + (isExpanded ? ' expanded' : '') + '" data-id="' + s._id + '">' +
                '<div class="admin-card-header" data-id="' + s._id + '">' +
                    '<span class="admin-badge admin-badge-' + s.status + '">' + s.status + '</span>' +
                    '<span class="admin-badge admin-badge-type">' + s.type + '</span>' +
                    '<span class="admin-card-title">' + escapeHtml(s.title || '(no title)') + '</span>' +
                    '<span class="admin-card-lang">' + (s.language || 'en') + '</span>' +
                    '<span class="admin-card-date">' + date + '</span>' +
                    '<svg class="admin-card-chevron' + (isExpanded ? ' rotated' : '') + '" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
                '</div>' +
                (isExpanded ? renderDetail(s) : '') +
            '</div>';
        }).join('');

        // Attach click listeners
        list.querySelectorAll('.admin-card-header').forEach(function(header) {
            header.addEventListener('click', function() {
                var id = this.dataset.id;
                expandedId = expandedId === id ? null : id;
                renderList();
            });
        });
    }

    // === Render detail view ===
    function renderDetail(s) {
        return '<div class="admin-card-detail">' +
            '<div class="admin-detail-grid">' +
                '<div class="admin-detail-field"><strong>Category:</strong> ' + escapeHtml(s.category || '') + (s.newCategoryName ? ' (' + escapeHtml(s.newCategoryName) + ')' : '') + '</div>' +
                '<div class="admin-detail-field"><strong>Language:</strong> ' + escapeHtml(s.language || 'en') + '</div>' +
                '<div class="admin-detail-field"><strong>Credit:</strong> ' + (s.creditAnonymous ? 'Anonymous' : escapeHtml(s.creditName || '')) + '</div>' +
                '<div class="admin-detail-field"><strong>Email:</strong> ' + escapeHtml(s.email || 'N/A') + '</div>' +
            '</div>' +
            '<div class="admin-detail-section"><strong>Description:</strong><p>' + escapeHtml(s.description || '') + '</p></div>' +
            (s.prompt ? '<div class="admin-detail-section"><strong>Example Prompt:</strong><pre>' + escapeHtml(s.prompt) + '</pre></div>' : '') +
            (s.tools ? '<div class="admin-detail-section"><strong>Tools:</strong> ' + escapeHtml(s.tools) + '</div>' : '') +
            '<div class="admin-detail-section">' +
                '<strong>Review Notes:</strong>' +
                '<textarea class="admin-notes" id="notes-' + s._id + '" rows="3" placeholder="Add review notes...">' + escapeHtml(s.reviewNotes || '') + '</textarea>' +
            '</div>' +
            '<div class="admin-actions">' +
                '<button class="btn admin-action-btn admin-btn-reviewed" data-id="' + s._id + '" data-status="reviewed">Mark Reviewed</button>' +
                '<button class="btn admin-action-btn admin-btn-published" data-id="' + s._id + '" data-status="published">Publish</button>' +
                '<button class="btn admin-action-btn admin-btn-rejected" data-id="' + s._id + '" data-status="rejected">Reject</button>' +
                '<button class="btn admin-action-btn admin-btn-pending" data-id="' + s._id + '" data-status="pending">Reset to Pending</button>' +
            '</div>' +
        '</div>';
    }

    // Delegate action button clicks
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.admin-action-btn');
        if (!btn) return;
        var id = btn.dataset.id;
        var status = btn.dataset.status;
        var notesEl = document.getElementById('notes-' + id);
        var notes = notesEl ? notesEl.value.trim() : '';

        if (!window.__db) return;

        var update = {
            status: status,
            reviewNotes: notes,
            reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        btn.disabled = true;
        btn.textContent = 'Saving...';

        window.__db.collection('submissions').doc(id).update(update)
            .then(function() {
                // Update local data
                var sub = submissions.find(function(s) { return s._id === id; });
                if (sub) {
                    sub.status = status;
                    sub.reviewNotes = notes;
                }
                renderList();
            })
            .catch(function(err) {
                btn.disabled = false;
                btn.textContent = 'Error';
                setTimeout(function() { renderList(); }, 1500);
            });
    });

    function escapeHtml(str) {
        if (!str) return '';
        var d = document.createElement('div');
        d.appendChild(document.createTextNode(str));
        return d.innerHTML;
    }

    // === Auth state listener ===
    function init() {
        if (!window.__auth) {
            renderLogin();
            return;
        }

        window.__auth.onAuthStateChanged(function(user) {
            if (user) {
                currentUser = user;
                renderDashboard();
            } else {
                currentUser = null;
                renderLogin();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
