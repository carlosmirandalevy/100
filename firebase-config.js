/* firebase-config.js — Shared Firebase initialization
   Loaded via <script> on suggest, admin, and things pages.
   Exposes window.__db (Firestore) and window.__auth (Auth). */
(function() {
    'use strict';

    var firebaseConfig = {
        apiKey: "AIzaSyDcvU9sPX-H5hcW_5ckihrq_F-0ymD-SPc",
        authDomain: "cemi-ai-100.firebaseapp.com",
        projectId: "cemi-ai-100",
        storageBucket: "cemi-ai-100.firebasestorage.app",
        messagingSenderId: "97325080848",
        appId: "1:97325080848:web:d8ad9f77a6784fc9ee8595",
        measurementId: "G-19802R80SQ"
    };

    // Initialize Firebase (compat SDK)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Expose Firestore and Auth globally
    window.__db = firebase.firestore();
    if (typeof firebase.auth === 'function') {
        window.__auth = firebase.auth();
    }

    // Load and initialize Google Analytics dynamically
    var s = document.createElement('script');
    s.src = 'https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics-compat.js';
    s.onload = function() { firebase.analytics(); };
    document.head.appendChild(s);
})();
