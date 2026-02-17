/* likes.js — Item like buttons on things pages
   Injects heart button into each .item-header, reads/writes Firestore likes collection,
   uses localStorage for per-browser dedup. Requires firebase-config.js loaded first. */
(function() {
    'use strict';

    var STORAGE_KEY = 'liked-items';
    var likedItems = [];
    var likeCounts = {};

    // Load liked items from localStorage
    try {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) likedItems = JSON.parse(stored);
    } catch(e) { likedItems = []; }

    function saveLiked() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(likedItems)); } catch(e) {}
    }

    function isLiked(id) {
        return likedItems.indexOf(String(id)) !== -1;
    }

    // Heart SVG icons
    var heartOutline = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>';
    var heartFilled = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path></svg>';

    // Inject like buttons into all item headers
    function injectButtons() {
        var headers = document.querySelectorAll('.item-header');
        headers.forEach(function(header) {
            var itemId = header.dataset.itemId;
            if (!itemId) return;
            // Don't double-inject
            if (header.querySelector('.item-like-btn')) return;

            var liked = isLiked(itemId);
            var count = likeCounts[itemId] || 0;

            var btn = document.createElement('button');
            btn.className = 'item-like-btn' + (liked ? ' liked' : '');
            btn.setAttribute('data-item-id', itemId);
            btn.setAttribute('aria-label', 'Like');
            btn.innerHTML = (liked ? heartFilled : heartOutline) + '<span class="like-count">' + (count > 0 ? count : '') + '</span>';

            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                handleLike(itemId, btn);
            });

            // Insert before the chevron (after share button)
            var chevron = header.querySelector('.item-chevron');
            if (chevron) {
                header.insertBefore(btn, chevron);
            } else {
                header.appendChild(btn);
            }
        });
    }

    // Handle like/unlike click
    function handleLike(itemId, btn) {
        var id = String(itemId);
        var current = likeCounts[id] || 0;

        if (isLiked(id)) {
            // Unlike — optimistic UI
            var idx = likedItems.indexOf(id);
            if (idx !== -1) likedItems.splice(idx, 1);
            saveLiked();
            var newCount = Math.max(0, current - 1);
            likeCounts[id] = newCount;
            btn.classList.remove('liked');
            btn.innerHTML = heartOutline + '<span class="like-count">' + (newCount > 0 ? newCount : '') + '</span>';

            if (typeof gtag === 'function') gtag('event', 'unlike', { item_id: id });

            if (!window.__db) return;
            window.__db.collection('likes').doc(id).set({
                count: firebase.firestore.FieldValue.increment(-1)
            }, { merge: true }).catch(function() {
                // Revert on error
                likedItems.push(id);
                saveLiked();
                likeCounts[id] = current;
                btn.classList.add('liked');
                btn.innerHTML = heartFilled + '<span class="like-count">' + (current > 0 ? current : '') + '</span>';
            });
        } else {
            // Like — optimistic UI
            likedItems.push(id);
            saveLiked();
            likeCounts[id] = current + 1;
            btn.classList.add('liked');
            btn.innerHTML = heartFilled + '<span class="like-count">' + likeCounts[id] + '</span>';

            if (typeof gtag === 'function') gtag('event', 'like', { item_id: id });

            if (!window.__db) return;
            window.__db.collection('likes').doc(id).set({
                count: firebase.firestore.FieldValue.increment(1)
            }, { merge: true }).catch(function() {
                // Revert on error
                var idx = likedItems.indexOf(id);
                if (idx !== -1) likedItems.splice(idx, 1);
                saveLiked();
                likeCounts[id] = current;
                btn.classList.remove('liked');
                btn.innerHTML = heartOutline + '<span class="like-count">' + (current > 0 ? current : '') + '</span>';
            });
        }
    }

    // Fetch all like counts from Firestore
    function fetchCounts() {
        if (!window.__db) {
            injectButtons();
            return;
        }

        window.__db.collection('likes').get().then(function(snapshot) {
            snapshot.forEach(function(doc) {
                likeCounts[doc.id] = doc.data().count || 0;
            });
            injectButtons();
        }).catch(function() {
            // Firestore unavailable — still show buttons (counts will be empty)
            injectButtons();
        });
    }

    // Re-inject buttons after items are re-rendered (filtering/searching)
    var origRender = null;
    function observeReRenders() {
        var container = document.getElementById('items-container');
        if (!container) return;
        var observer = new MutationObserver(function() {
            injectButtons();
        });
        observer.observe(container, { childList: true });
    }

    // Initialize when DOM and Firebase are ready
    function init() {
        fetchCounts();
        observeReRenders();
    }

    // Wait for DOM if needed
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
